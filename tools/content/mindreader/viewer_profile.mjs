#!/usr/bin/env node
// The mind reader's learning step. Reads the creator's past videos (one folder each, holding curve.json and beats.json,
// formats in ../mind-reader-method.md) and works out, for each kind of moment (label), whether THIS creator's viewers
// leave faster or slower than their own usual pace. Writes profile.json and prints a plain table.
//
// Why a leave-one-out average as the baseline: in the author's own test, the plain average of a creator's other curves
// predicted a new video's curve better than an AI predictor. So "expected" here is always the creator's own average,
// never a model's guess, and the script never forecasts a percentage for a new video.
//
// Usage: node viewer_profile.mjs <past-videos-folder> [<profile-output-file>]
//   default output: <past-videos-folder>/../profile/profile.json

import { readFile, writeFile, readdir, mkdir } from 'fs/promises';
import { join, dirname, resolve } from 'path';

const pastDir = process.argv[2];
if (!pastDir) {
  console.error('usage: node viewer_profile.mjs <past-videos-folder> [<profile-output-file>]');
  process.exit(2);
}
const outFile = process.argv[3] || join(resolve(pastDir), '..', 'profile', 'profile.json');

// A beat only counts when enough people are still watching to tell anything: below 10% of the starting viewers or 20
// people, one or two leavers swing the rate wildly.
const MIN_PRESENT_SHARE = 0.10;
const MIN_PRESENT_PEOPLE = 20;
// A pattern needs 5+ different videos before it can be called a pattern.
const MIN_VIDEOS = 5;
// ...and the videos must agree beyond chance. A sign test: if this kind of moment were really at the usual pace, each
// video would be faster or slower like a coin flip. A verdict needs that coin-flip chance to be 5% or less. Why: with
// 11 labels, a plain "70% of videos agree" rule let pure noise through about a third of the time on 4 videos.
const MAX_SIGN_P = 0.05;
// The typical video (median of per-video rates) must also be at least 10% off the usual pace, so one viral video can't
// set the verdict on its own.
const RATE_UP = 1.1;
const RATE_DOWN = 0.9;
// Screenshot curves are read every 1 to 5 seconds, so beats shorter than this are too short to score from them.
const MIN_BEAT_S = { screenshot: 2, exact: 0.5 };
// A video only counts in another video's expected curve at second s if it runs at least this much longer: near its own
// end, a video loses viewers fast for reasons that have nothing to do with the other video's content.
const END_MARGIN_S = 5;
const LABELS = ['hook', 'setup', 'claim', 'announce', 'story', 'demo', 'steps', 'payoff', 'after_payoff', 'cta', 'pause'];

async function readJson(p) {
  return JSON.parse(await readFile(p, 'utf8'));
}

// Straight lines between the points that were read, one value per whole second from 0 to the video's length.
function perSecond(points, lengthS) {
  const pts = points
    .map(([s, k]) => [Number(s), Number(k)])
    .filter(([s, k]) => Number.isFinite(s) && Number.isFinite(k))
    .sort((a, b) => a[0] - b[0]);
  // Screenshot readings are sometimes written as percentages (63) instead of shares (0.63). Accept both.
  if (pts.some(([, k]) => k > 1.5)) pts.forEach((p) => { p[1] = p[1] / 100; });
  const last = Math.floor(lengthS ?? pts[pts.length - 1][0]);
  const out = [];
  for (let s = 0; s <= last; s++) {
    const j = pts.findIndex((p) => p[0] >= s);
    if (j === -1) { out.push(pts[pts.length - 1][1]); continue; }
    if (j === 0 || pts[j][0] === s) { out.push(pts[j][1]); continue; }
    const [x0, y0] = pts[j - 1];
    const [x1, y1] = pts[j];
    out.push(y0 + ((y1 - y0) * (s - x0)) / (x1 - x0));
  }
  return out;
}

// Value at a fractional second, or null past the end of the curve.
function at(curve, t) {
  if (t < 0 || t > curve.length - 1) return null;
  const i = Math.floor(t);
  if (i === curve.length - 1) return curve[i];
  return curve[i] + (curve[i + 1] - curve[i]) * (t - i);
}

function median(xs) {
  const v = xs.filter((x) => x != null && Number.isFinite(x)).sort((a, b) => a - b);
  if (!v.length) return null;
  const m = Math.floor(v.length / 2);
  return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
}

const round = (x, d = 2) => (x == null ? null : Math.round(x * 10 ** d) / 10 ** d);

// ---- load every past video that has both files ----
const videos = [];
const skipped = [];
for (const entry of await readdir(pastDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const dir = join(pastDir, entry.name);
  try {
    const curve = await readJson(join(dir, 'curve.json'));
    const beats = await readJson(join(dir, 'beats.json'));
    if (!curve.views || !Array.isArray(curve.points) || curve.points.length < 2) throw new Error('curve.json needs views and 2+ points');
    const K = perSecond(curve.points, curve.length_s);
    videos.push({
      name: entry.name, views: Number(curve.views), K, beats: beats.beats || [], platform: curve.platform || 'unknown',
      exact: curve.source && curve.source !== 'screenshot',
    });
  } catch (e) {
    skipped.push(`${entry.name}: ${e.message}`);
  }
}

if (videos.length < 2) {
  console.error(`Need at least 2 past videos with curve.json and beats.json; found ${videos.length}.`);
  skipped.forEach((s) => console.error('  skipped ' + s));
  process.exit(1);
}
const platforms = [...new Set(videos.map((v) => v.platform))];

// Usual share of viewers lost during a beat from second a to second e, for video i: the average over the OTHER videos
// of how much of their audience each lost between a and e, as a share of the audience it had at a.
// Why one fixed group per beat: averaging the start and the end over DIFFERENT groups of videos (because short videos
// drop out partway through) made a perfectly normal beat score far from 1.0. The group is every other video that runs at
// least END_MARGIN_S past the beat's end, so no video's own end-of-video drop counts as "usual". Needs 2+ such videos.
function usualLossShare(i, a, e) {
  const shares = [];
  videos.forEach((w, j) => {
    if (j === i || e + END_MARGIN_S >= w.K.length - 1) return;
    const wa = at(w.K, a), we = at(w.K, e);
    if (wa == null || we == null || wa <= 0) return;
    shares.push(1 - we / wa);
  });
  return shares.length >= 2 ? shares.reduce((x, y) => x + y, 0) / shares.length : null;
}

// ---- score every beat ----
// perVideo keeps each video's own totals per label, because on a big account the pooled count is so large that any
// difference looks "certain". What matters is whether the pattern repeats from video to video.
const pool = Object.fromEntries(LABELS.map((l) => [l, { actual: 0, expected: 0, beats: 0, videos: new Set(), perVideo: {} }]));
let unknownLabels = 0;
videos.forEach((v, i) => {
  for (const b of v.beats) {
    if (!pool[b.label]) { unknownLabels++; continue; }
    const a = Number(b.start);
    const e = Math.min(Number(b.end), v.K.length - 1);
    if (!(e > a)) continue;
    if (e - a < (v.exact ? MIN_BEAT_S.exact : MIN_BEAT_S.screenshot)) continue;
    const ka = at(v.K, a), kb = at(v.K, e);
    const usual = usualLossShare(i, a, e);
    if (ka == null || kb == null || usual == null) continue;
    if (ka < MIN_PRESENT_SHARE || ka * v.views < MIN_PRESENT_PEOPLE) continue;
    // Skip beats where the other videos lost (almost) nobody: a ratio against an expected count near zero says nothing,
    // and counting this beat's leavers without its expected count would inflate the label's total.
    if (usual <= 0.001) continue;
    const actual = Math.max(0, (ka - kb) * v.views);
    const expected = ka * usual * v.views;
    const p = pool[b.label];
    p.actual += actual;
    p.expected += expected;
    p.beats += 1;
    p.videos.add(v.name);
    const pv = (p.perVideo[v.name] ??= { actual: 0, expected: 0 });
    pv.actual += actual;
    pv.expected += expected;
  }
});

// ---- verdicts ----
const labels = {};
for (const l of LABELS) {
  const p = pool[l];
  const n = p.videos.size;
  let pooled = null, lo = null, hi = null, verdict = 'not enough data yet';
  let above = 0, below = 0;
  const rates = [];
  for (const pv of Object.values(p.perVideo)) {
    if (pv.expected <= 0) continue;
    rates.push(pv.actual / pv.expected);
    if (pv.actual > pv.expected) above++; else below++;
  }
  const scored = rates.length;
  const typical = median(rates);
  if (p.expected > 0 && p.beats > 0) {
    pooled = p.actual / p.expected;
    // Rough 95% range from treating the leaver count as a Poisson count. It guards SMALL accounts, where a handful of
    // leavers is noise. On big accounts it is far too narrow, which is why the sign test below also has to pass.
    const half = 1.96 * Math.sqrt(Math.max(p.actual, 1));
    lo = Math.max(0, (p.actual - half) / p.expected);
    hi = (p.actual + half) / p.expected;
    if (scored >= MIN_VIDEOS && lo > 1 && typical >= RATE_UP && pooled >= RATE_UP && signP(above, scored) <= MAX_SIGN_P) verdict = 'leaves faster';
    else if (scored >= MIN_VIDEOS && hi < 1 && typical <= RATE_DOWN && pooled <= RATE_DOWN && signP(below, scored) <= MAX_SIGN_P) verdict = 'holds better';
  }
  labels[l] = {
    leave_rate: round(typical), pooled_rate: round(pooled), range: [round(lo), round(hi)], videos: n, beats: p.beats,
    videos_above_usual: above, videos_scored: scored, verdict,
  };
}

// One-sided sign test: the chance of k or more of n videos landing on the same side if each were a coin flip.
function signP(k, n) {
  let tail = 0;
  for (let i = k; i <= n; i++) tail += choose(n, i);
  return tail / 2 ** n;
}
function choose(n, k) {
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return r;
}

const claimStarts = videos.map((v) => {
  const c = v.beats.find((b) => b.label === 'claim');
  return c ? Number(c.start) : null;
});
const profile = {
  built: new Date().toISOString().slice(0, 10),
  videos: videos.length,
  platforms,
  median_views: median(videos.map((v) => v.views)),
  median_kept_at_3s: round(median(videos.map((v) => at(v.K, 3)))),
  median_claim_lands_s: round(median(claimStarts), 1),
  labels,
  rules: { MIN_PRESENT_SHARE, MIN_PRESENT_PEOPLE, MIN_VIDEOS, MAX_SIGN_P, RATE_UP, RATE_DOWN, MIN_BEAT_S, END_MARGIN_S },
  skipped,
};

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, JSON.stringify(profile, null, 2));

// ---- plain table ----
console.log(`Profile from ${videos.length} videos (${platforms.join(', ')}), median ${profile.median_views} views.`);
if (platforms.length > 1) console.log('Note: this mixes platforms. Build one profile per platform if the audiences differ.');
console.log(`Usually still watching at 3 s: ${profile.median_kept_at_3s == null ? 'n/a' : Math.round(profile.median_kept_at_3s * 100) + '%'}.` +
  ` The main point usually lands at: ${profile.median_claim_lands_s ?? 'n/a'} s.`);
console.log('');
console.log('kind of moment   leave rate   faster than usual in   verdict');
for (const l of LABELS) {
  const x = labels[l];
  const rate = x.leave_rate == null ? '  -  ' : x.leave_rate.toFixed(2).padStart(5);
  const agree = x.videos_scored ? `${x.videos_above_usual} of ${x.videos_scored} videos` : '';
  console.log(`${l.padEnd(16)} ${rate}        ${agree.padEnd(21)} ${x.verdict}`);
}
console.log('');
console.log('Leave rate = the typical video (median). 1.00 = your usual pace. Above 1 = your viewers leave faster then.');
console.log('A verdict needs 5+ videos, a 10%+ difference, and so many videos agreeing that chance alone would do it 5% of the time or less.');
console.log('With 11 kinds of moments, about one verdict in twenty can still be luck: Part 4 checks every flag against your next video.');
if (unknownLabels) console.log(`${unknownLabels} beats had a label outside the list and were ignored.`);
skipped.forEach((s) => console.log('skipped ' + s));
console.log(`Saved ${outFile}`);
