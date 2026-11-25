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
6. Cut: silences and bad takes + approved flags. Takes (Nick, 24 Nov): he repeats each script line until he is happy, then
   moves to the next line, so the LAST take of each line is the keeper. His notes for the batch win over this (e.g. "in
   reel 4 the third-last take of line 2", or one reel filmed as 2+ clips); read them before cutting. Rule:
   flags are applied only where Nick approved, or where the SOP allows auto-cuts (pauses >= 0.6 s, repeated takes).
7. Scene plan: one line per block: what is on screen (card, number, zoom, B-roll, screen insert), which sound
   lands where. Something changes every 2-3 s and always matches the words (plan s3). Check against the style file.
8. Build: captions (rules below), motion that backs up his words (graphics, photos, screen inserts, video; face moved or
   shrunk to make room), motion cards/counters (Remotion + remocn), zooms
   (rules below), sound effects (CC0/own only, logged in `rules/content-ops/sound-credits.md`). For any Remotion code load skill
   `remotion-best-practices` (its PK-OVERRIDES.md wins).
   Sound effects stay UNDER the voice (Nick 24 Nov: D1 effects "too loud"): at most 1 effect per 5 s of reel, only on a
   real moment (card in, number, cut); start every effect at -18 dB under the voice and listen-check; never louder than the
   word it lands on. Edit style comes from the format's refs in Dropbox 03 INSPIRATION; with no refs, say so before editing.
9. Look: light grade by the script's TONE line (happy = warm, serious = neutral, dramatic = more contrast, dramatic
   ambience = darker edges). Subtle; it is a test.
10. Sound: voice at -14 LUFS integrated (loudness standard), music under voice, effects on the cut. Last audio step:
    `tools/content/edit/loudness.sh <in> <out>` (two-pass, true peak <= -1 dBTP); it must print `pass=yes`.
11. Export: 1080x1920, 30 fps, H.264 + AAC, `<Format> N - final.mp4`.
12. Check before done: `pka-reel-reviewer` agent reviews (size/fps, LUFS, captions vs words, captions clear of face
    and IG buttons, nothing from another client, licences logged, flags.json present). Fix everything it finds.
13. Deliver (route: `rules/content-ops/folders.md` "How files move"); verify the copy by hash. Log any failure in `rules/content-ops/incident-log.md`
    (what broke, cause, fix, rule changed).
14. 48 h after posting (Nick confirmed 48 h, 24 Nov): grade the flags against the real retention (Nick's insights screenshot or his account,
    view only) and add the row to `rules/content-ops/reel-tracker.csv`; rebuild the viewer profile. Judge the reel by its script's JOB:
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

Titles (Nick, 24 Nov, replaces clash 6): NO bold hook sentence on screen. From the first second, show what he is talking
about (graphic, photo, screen, video) and move or shrink his face to make room. Captions stay.

Cutting (16 Nov): cut silences and bad takes; the LAST take of each repeated sentence is ~99% the good one.
Nick is teaching the full edit; visual/sound/text hooks and showing real work (Figma, results) are the aim.

Files:
- Save as "<Format> N - final.mp4" (e.g. "Audit 3 - final.mp4", "Skit 1 - final.mp4") in the folder Nick uses
  (Dropbox CLAUDE EDITOR 07 DONE, route in `rules/content-ops/folders.md`) (clash 15).
- Never overwrite a file name; save under a new name. Verify the PC copy by hash before saying it is saved.
- /mnt/project-files rewrites the .mp4 container (streams stay identical; check stream md5s, see
  `rules/content-ops/folders.md`). Device commits cap at 25 MB per file: zip -0, split, re-hash, then join and check the
  hash on the PC.

## Lessons from the first real edit (25 Nov, Audit 1 + Contrarian 2)
- Nick leaves SPOKEN notes for Claude in the raw ("this one was good", "this last one was really good, Claude", "now you put a
  cut here", "for the end you can include it"). Step 3-6: search the transcript for "Claude", "good", "cut", "include" and
  follow every note; a note beats the last-take rule. Re-run a note's few seconds with the medium model if small.en garbles it.
- Phone selfie footage can be MIRRORED (his paper read backwards in Contrarian 2). Check any text he holds or shows; if it reads
  backwards, flip the whole clip (scaleX(-1)).
- Nick wears pink shirts: a pink caption keyword on a pink shirt is unreadable. Over the shirt the keyword is white with a 3 px
  charcoal outline; pink keywords only on dark backgrounds.
- Text behind the subject (effects 2, 12, 16, 17): person cut-out with MediaPipe selfie_multiclass (CPU, ~1 min for 35 s;
  needs libgles2/libegl1). Code: tools/content/remotion/src/pk25 + the matte script noted in tool-status.md.
- Audit layout (Nick 25 Nov): site recording full width at the top (browser bar cropped off), Nick centred and pushed down under
  it; switch to full-frame Nick for the rehook, short reactions and the last line.
- Sound effect gain is set against the VOICE, not full scale: level the voice track to about -16/-18 LUFS BEFORE it goes into
  Remotion, then effects at 0.06-0.09 gain land ~18 dB under it. (Round 1 on 25 Nov had a -36 LUFS voice and every effect ended
  up louder than Nick after the final loudness pass.)
- Graphic windows and caption positions use the SAME time window (incl. fade in/out), or captions sit on the graphic.
- Cover a take's lead-in (him walking into frame, turning to camera) with the previous graphic instead of showing an empty frame.
- The OBS screen recording carries no sound; sync by Nick's "~0.1 s" note plus a visual check of what is on screen.
