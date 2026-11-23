#!/usr/bin/env node
// The mind reader's flagging step. Compares a NEW video's labeled beats with the creator's profile.json and prints the
// stretches their own past viewers left fastest on, each with a code (F1, F2...) the creator can answer by.
// It never forecasts a percentage: every flag carries the evidence from the creator's own past videos instead.
//
// Usage: node flag_cut.mjs <profile.json or "none"> <new-video-beats.json>
//   writes flags.json next to the beats file. With no profile yet, only the structural checks run (after the payoff,
//   long pauses), and it says so.

import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';

const [profilePath, beatsPath] = process.argv.slice(2);
if (!profilePath || !beatsPath) {
  console.error('usage: node flag_cut.mjs <profile.json or "none"> <new-video-beats.json>');
  process.exit(2);
}
const hasProfile = profilePath !== 'none' && existsSync(profilePath);
const profile = hasProfile ? JSON.parse(await readFile(profilePath, 'utf8')) : { labels: {}, videos: 0 };
const cut = JSON.parse(await readFile(beatsPath, 'utf8'));
const beats = (cut.beats || []).map((b) => ({ ...b, start: Number(b.start), end: Number(b.end) })).sort((a, b) => a.start - b.start);

// Never offered as cuts, whatever the data says: without the hook, the main point, the payoff or the call to action the
// video stops being the video. If one of these leaks, the fix is rewriting or tightening it, which is the creator's job.
const PROTECTED = new Set(['hook', 'claim', 'payoff', 'cta']);

const flags = [];
const notes = [];
// Flags that overlap or touch become ONE flag (one range, every reason kept). Why: two overlapping cut ranges, cut one
// after the other, remove words from the next beat that nobody approved.
const add = (b, why) => {
  if (PROTECTED.has(b.label)) return;
  const hit = flags.find((f) => b.start <= f.end && b.end >= f.start);
  if (hit) {
    if (b.start < hit.start) { hit.start = b.start; hit.text = [b.text, hit.text].filter(Boolean).join(' '); }
    if (b.end > hit.end) { hit.end = b.end; if (!hit.text.includes(b.text || '')) hit.text = [hit.text, b.text].filter(Boolean).join(' '); }
    if (!hit.labels.includes(b.label)) hit.labels.push(b.label);
    if (!hit.why.includes(why)) hit.why.push(why);
    return;
  }
  flags.push({ start: b.start, end: b.end, label: b.label, labels: [b.label], text: b.text || '', why: [why] });
};

// 1. Kinds of moments this creator's viewers leave faster on.
for (const b of beats) {
  const x = profile.labels?.[b.label];
  if (x && x.verdict === 'leaves faster') {
    if (PROTECTED.has(b.label)) {
      notes.push(`Your "${b.label}" moments lose viewers faster than usual (${x.leave_rate} in a typical video). It is never cut, but it may be worth tightening: "${b.text || ''}"`);
      continue;
    }
    add(b, `in a typical past video your viewers left ${x.leave_rate.toFixed(1)} times faster than usual during "${b.label}" moments (faster in ${x.videos_above_usual} of ${x.videos_scored} videos)`);
  }
}

// 2. The main point lands later than usual: flag the set-up and announcing beats before it.
const claim = beats.find((b) => b.label === 'claim');
const usual = profile.median_claim_lands_s;
if (claim && usual != null && claim.start > usual + 1) {
  for (const b of beats.filter((x) => x.end <= claim.start && (x.label === 'setup' || x.label === 'announce'))) {
    add(b, `the main point lands at ${claim.start.toFixed(1)} s; in your past videos it usually lands at ${usual} s`);
  }
}

// 3. Anything said after the LAST payoff that is not the call to action.
const payoffs = beats.filter((b) => b.label === 'payoff');
const lastPayoff = payoffs[payoffs.length - 1];
if (lastPayoff) {
  for (const b of beats.filter((x) => x.start >= lastPayoff.end)) {
    add(b, 'it comes after the payoff, when most viewers who stayed are ready to go');
  }
}

// 4. Long pauses.
for (const b of beats.filter((x) => x.label === 'pause' && x.end - x.start >= 0.6)) {
  add(b, `a pause of ${(b.end - b.start).toFixed(1)} s`);
}

flags.sort((a, b) => a.start - b.start);
flags.forEach((f, i) => { f.code = `F${i + 1}`; });

const outPath = join(dirname(beatsPath), 'flags.json');
await writeFile(outPath, JSON.stringify({ video: cut.video || '', built_from_profile: profile.built || null, flags, notes }, null, 2));

if (!hasProfile) console.log('No viewer profile yet, so only the after-the-payoff and pause checks ran. Build one with Part 2.');
if (!flags.length) {
  console.log('No flags: nothing in this cut matches what lost your viewers before.');
} else {
  console.log(`${flags.length} flags. Answer by code, for example "cut F1 and F3, keep F2".`);
  for (const f of flags) {
    console.log(`\n${f.code}  ${f.start.toFixed(1)} s to ${f.end.toFixed(1)} s  (${f.labels.join(', ')})`);
    if (f.text) console.log(`    "${f.text}"`);
    for (const w of f.why) console.log(`    why: ${w}`);
  }
}
for (const n of notes) console.log(`\nNote: ${n}`);
if (hasProfile && (profile.videos ?? 0) < 10) console.log(`\nYour profile has ${profile.videos} videos. Most kinds of moments need more before they can be flagged.`);
console.log(`\nSaved ${outPath}`);
