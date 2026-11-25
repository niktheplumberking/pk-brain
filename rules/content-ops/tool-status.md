# Claude Editor tool status

A tool is used in a real edit only when its row says PROVEN, with the date and the proof (commit, file, test output).
Status: NOT PROVEN = not installed or not tested; PROVEN = tested on the test clip; BROKEN = failed, see incident-log.md.
Test clip: Nick's own reel DgDEpMpTpIP (cloud copy only, never posted again).

| Tool | Job | Runs where | Status | Date | Proof |
|---|---|---|---|---|---|
| ffmpeg 6.1 + probe.sh / normalize.sh / loudness.sh | probe, convert, loudness | cloud (PC: not yet) | PROVEN (cloud) | 2026-11-23 | test clip: vp9 -> h264 30 fps ready=yes; -14.25 LUFS, TP -1.17; synthetic HDR+VFR landscape -> 1080x1920 30 fps SDR, A/V within 0.014 s; 4 pytest |
| faster-whisper small.en + transcribe.py | word-timed transcript | cloud (PC: not yet) | PROVEN (cloud) | 2026-11-23 | test clip: 99 words in 30 s, 12 s run |
| check_script.py | script checker (10-point + JOB) | cloud | PROVEN | 2026-11-23 | tools/content/tests: 18/18 pass |
| Effects library (C7) first 6 | named Remotion effects (style.md) | cloud | PROVEN | 2026-11-23 | EffectsDemo render 21 s 1080x1920 30 fps, 8 frames checked: phone mockup, list lit, headline wall, chart grow, zoom-through, pull-back (+ remocn check-list). README src/effects/README.md |
| Google Doc "PK Reel Scripts" + build_scripts_docx.py | script delivery, 1 page per script | connector + Apps Script web app (PC off OK) | PROVEN | 2026-11-23 | SOP tools/content/gdoc_scripts.md; same doc id 2->3 pages and 3->1 page, PDF export checked, old text gone; 4/4 builder tests; web app replace 1->2 pages 21:19 UTC, replay refused |
| Remotion 4.0.540 (tools/content/remotion) + skill remotion-best-practices | cards, motion, captions render | cloud (PC: not yet) | PROVEN (cloud); skill fresh-thread check PASS 23 Nov (install-log) | 2026-11-23 | 5 s render 1080x1920 30 fps H.264 bt709, Urbanist font, hook + word captions + pop card; frames checked. Free licence while 3 people or fewer |
| remocn (copied parts only, MIT @995f1be) | ready-made motion parts | with Remotion | PROVEN: check-list | 2026-11-23 | check-list + handwrite rendered over the test clip (6 s), local Caveat font; list in tools/content/remotion/src/remocn/README.md |
| Earshot (MIT @7a7f7c5, venv) + openverse_fetch.py (CC0 only) | sound effects | cloud | PROVEN | 2026-11-23 | Earshot made whoosh/pop/cash register/shutter; Openverse fetched 2 CC0 whooshes with credit rows; see tools/content/sfx/README.md |
| mind reader (viewer_profile.mjs, flag_cut.mjs; MIT Christian Johnston) + make_beats.py | retention flags before a cut | cloud | PROVEN (no profile yet) | 2026-11-23 | test clip: 10 beats, flags F1 pause 0.7 s + F2 "That's it." after payoff; tight clip: 0 flags, no crash. Profile needs 2+ past reels with curves (E2) |
| last30days (MIT, mvanhorn @331025e) | Reddit/web research | cloud | DROPPED (cloud) | 2026-11-23 | one run, no keys, no browser cookies, sandboxed HOME: Reddit search 403 from the cloud network, web fallbacks throttled -> 2 threads, 0 recent, no owner questions. Not copied. Retry only from a home network (Nick's machine) if research needs it |
| pka-reel-reviewer agent | independent check of a finished reel | cloud | PROVEN (technical checks only; no taste check, see incident-log 24 Nov) | 2026-11-23 | D1: v1 FAIL 5 defects, v2 PASS |
| pka-script-reviewer agent | independent check of scripts | cloud | PROVEN | 2026-11-23 | D2: 3 passes caught a wrong study range and fact errors |
| Dropbox file request -> 07 DONE (reel delivery) | upload finished reels into Dropbox from the cloud | cloud (Playwright on the upload page) | NOT PROVEN: page reached, file added; the upload needs a name + email, waiting on Nick (24 Nov) | 2026-11-24 | request "Claude Editor delivery" (Dropbox > File requests) |
| matte.py (MediaPipe selfie_multiclass) | person cut-out for text-behind-subject effects | cloud | PROVEN | 2026-11-25 | Contrarian 2 (rooftop) and Audit 1 (office): clean edges at 1080x1920, ~1-2 min per reel |
| cut_takes.py | cut chosen takes from 4K iPhone .mov + synced screen recording | cloud | PROVEN | 2026-11-25 | Audit 1 (7 takes) + Contrarian 2 (7 takes); whole-file trim filter ran out of memory, per-take seek works |
