---
name: pka-video-edit
description: Edits Nick's Plumber King Agency reels end to end - cut, burned-in captions, cards and motion, zooms, sound effects, loudness, light grade, check and export (1080x1920). Use when Nick says edit the videos, edit the reels, edit this reel, cut the footage, caption the videos, add zooms, sound effects, test edit, or raw footage is in Dropbox. Includes the "mind reader" retention flags before any cut and the 48-hour grading. Not for post text (pka-post-descriptions) or scripts (pka-video-scripts).
---

# PKA video edit (SOP)

Owner: Claude. Built 23 Nov 2026 from the approved Claude Editor plan (section 10) and Nick's earlier editing rules
(moved here from pka-post-descriptions). Nick's message in the current chat beats this skill.
Status of the tool chain: see `rules/content-ops/tool-status.md` (a tool not marked PROVEN there is not used on a
real reel).

## Goal
KEEP THE VIEWER WATCHING (Nick, 23 Nov). Full creative freedom inside these rules; not only cards and text.

## Inputs
- Raw clip(s) named by script number (S07...), the script page from the Google Doc, the style file
  `rules/content-ops/style.md` (learned from 03 INSPIRATION), the viewer profile (mind reader) if built.
- Where files live: `rules/content-ops/folders.md`. Heavy files are never moved through /mnt/project-files.

## Steps (each ends with its own check; do not skip)
1. Raw in: copy the clip to the work folder; record its hash (sha256). Check: hash logged.
2. Probe: `tools/content/edit/probe.sh <clip>` (size, fps, codec, HDR, VFR by rate AND real frame gaps). If it prints
   `ready_for_edit=no`, run `tools/content/edit/normalize.sh <clip> <work.mp4>` (1080x1920, constant 30 fps, SDR
   bt709, H.264 + AAC 48k; landscape is padded, never stretched; reframing a landscape clip is pka-clipping's job).
   Check: probe of the working copy prints `ready_for_edit=yes`.
3. Transcribe: `python3 -I tools/content/edit/transcribe.py <work.mp4> words.json` -> `[{w,s,e}]`. Check: word count vs
   duration sane (talking head about 2-3 words a second).
4. Match to script: map each spoken block to its script block; lines that differ are flagged, never fixed silently.
5. Mind reader flags (before any cut): `python3 -I tools/content/mindreader/make_beats.py words.json beats.json "<reel>"`,
   then label every spoken beat FROM THE WORDS ONLY, before looking at any curve (labels and rules:
   `tools/content/mindreader/mind-reader-method.md`), then `node tools/content/mindreader/flag_cut.mjs <profile.json|none> beats.json`
   -> flags.json (F1, F2...). Hook, claim, payoff and CTA are never flagged. Profile: `viewer_profile.mjs` over Nick's past
   reels (curve.json + beats.json each; needs 2+ to run, 5+ per label for a verdict); until then use `none` (pauses and
   after-the-payoff only). Check: flags.json exists for EVERY reel, even when empty.
6. Cut: silences and bad takes (the LAST take of a repeated sentence is ~99% the good one) + approved flags. Rule:
   flags are applied only where Nick approved, or where the SOP allows auto-cuts (pauses >= 0.6 s, repeated takes).
7. Scene plan: one line per block: what is on screen (card, number, zoom, B-roll, screen insert), which sound
   lands where. Something changes every 2-3 s and always matches the words (plan s3). Check against the style file.
8. Build: captions (rules below), burned hook text from frame 1, motion cards/counters (Remotion + remocn), zooms
   (rules below), sound effects (CC0/own only, logged in `rules/content-ops/sound-credits.md`).
9. Look: light grade by the script's TONE line (happy = warm, serious = neutral, dramatic = more contrast, dramatic
   ambience = darker edges). Subtle; it is a test.
10. Sound: voice at -14 LUFS integrated (loudness standard), music under voice, effects on the cut. Last audio step:
    `tools/content/edit/loudness.sh <in> <out>` (two-pass, true peak <= -1 dBTP); it must print `pass=yes`.
11. Export: 1080x1920, 30 fps, H.264 + AAC, `<Format> N - final.mp4`.
12. Check before done: `pka-reel-reviewer` agent reviews (size/fps, LUFS, captions vs words, captions clear of face
    and IG buttons, nothing from another client, licences logged, flags.json present). Fix everything it finds.
13. Deliver to Nick's folder; verify the copy by hash. Log any failure in `rules/content-ops/incident-log.md`
    (what broke, cause, fix, rule changed).
14. 48 h after posting: grade the flags against the real retention (Nick's insights screenshot or his account,
    view only) and add the row to the tracker; rebuild the viewer profile. Judge the reel by its script's JOB:
    reach = views + shares, follow = follows per 1K views, client = comments/DMs. A low-view client reel is not a failure.

## Rules carried over from Nick (Oct-Nov 2026)
Placement:
- Default: plain text, Urbanist, no box behind it, 2 px outline, centred at about 66% of the height.
- Outline colour: white on dark backgrounds; charcoal #141414 on bright screens, white pages, or when his
  shirt behind the captions is pink or white. Never black on pink.
- B-roll: captions go in the empty space ABOVE Nick's head, NEVER over the monitor, laptop or what he is
  doing (seeing the work is the point). Check his head height across frames for every clip.
- Split screen (site on top, camera below) with a black gap: captions centred in the gap, one line, clear of
  Instagram's icons, wherever the gap is. Measure the screen and camera rows for each video.
- Split screen with no gap (screen top, his face below): never across his face; the top is for his title;
  put them below his chin (measure the chin across frames first).
- Phone-only videos: the usual lower position. Gentle punch-in cuts on the face camera are allowed (clash 7).
- Letterboxed landscape video in 9:16 (Nick's test format, Edu 4, 15 Nov): captions in the black area BELOW the
  video, white outline.

Sound and words:
- Voice levelled to -14 LUFS.
- Fix speech-to-text mishears against his script before rendering (names, "plumber near me" and similar).
  Where he actually said something different from the script, keep what he said and flag it.

Zooms (screen recordings only, never the face camera):
- One zoom at a time: in, hold, fully out. Never zoom while already zoomed.
- Every zoom-out finishes before any cut, camera jump, voice break or fast scroll. Find the cuts first.
- About 2x max; subtle, B2B. Zoom on what Nick emphasises and where his mouse points; slow designed paths
  along his swipe, hold still otherwise; zoom out right after the highlight clears. No zoom during slow
  scrolls. Audit 2 (Ogborn) is the reference standard. Don't let zooms get static or sparse.
- Audits: zoom on the opening line (the plumber + odd detail) from the first second until the name + reviews are shown, and on
  head-title text he reads with the mouse (31 Oct).

Titles (clash 6, 23 Nov): burn the hook's on-screen text into the video from frame 1; Nick no longer adds
Instagram titles.

Cutting (16 Nov): cut silences and bad takes; the LAST take of each repeated sentence is ~99% the good one.
Nick is teaching the full edit; visual/sound/text hooks and showing real work (Figma, results) are the aim.

Files:
- Save as "<Format> N - final.mp4" (e.g. "Audit 3 - final.mp4", "Skit 1 - final.mp4") in the folder Nick uses
  (DONE FILES\DONE <format> until the Dropbox CLAUDE EDITOR folders exist) (clash 15).
- Never overwrite a file name; save under a new name. Verify the PC copy by hash before saying it is saved.
- /mnt/project-files silently changes .mp4 files, and device commits cap at 25 MB per file: zip -0, split,
  re-hash, then join and check the hash on the PC.
