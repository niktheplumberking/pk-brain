# Claude Editor tool status

A tool is used in a real edit only when its row says PROVEN, with the date and the proof (commit, file, test output).
Status: NOT PROVEN = not installed or not tested; PROVEN = tested on the test clip; BROKEN = failed, see incident-log.md.
Test clip: Nick's own reel DgDEpMpTpIP (cloud copy only, never posted again).

| Tool | Job | Runs where | Status | Date | Proof |
|---|---|---|---|---|---|
| ffmpeg / ffprobe | probe, convert, cut, loudness, export | cloud + Nick's PC | NOT PROVEN | | (task C1) |
| faster-whisper (small.en) | word-timed transcript | cloud + Nick's PC | NOT PROVEN | | (task C1) |
| check_script.py | script checker (10-point + JOB) | cloud | PROVEN | 2026-11-23 | tools/content/tests: 18/18 pass |
| Effects library (C7) | named Remotion effects (style.md) | cloud + Nick's PC | NOT PROVEN | | (task C7) |
| Google Doc "PK Reel Scripts" + build_scripts_docx.py | script delivery, 1 page per script | connector + Nick's PC Chrome | PROVEN | 2026-11-23 | SOP tools/content/gdoc_scripts.md; same doc id 2->3 pages and 3->1 page, PDF export checked, old text gone; 4/4 builder tests |
| Remotion + remotion-dev/skills | cards, motion, captions render | cloud + Nick's PC | NOT PROVEN | | (task C2) |
| remocn | ready-made motion parts | with Remotion | NOT PROVEN | | (task C3) |
| openverse_fetch.py | CC0 sound effects and music | cloud | NOT PROVEN | | (task C4) |
| mind reader (viewer_profile.mjs, flag_cut.mjs; MIT, christianjohnston-ai) | retention flags before a cut | cloud | NOT PROVEN | | (task C5) |
| last30days (MIT, mvanhorn) | Reddit/web research | cloud | NOT PROVEN | | (task C6) |
| pka-reel-reviewer agent | independent check of a finished reel | cloud | NOT PROVEN | | (task D1) |
| pka-script-reviewer agent | independent check of scripts | cloud | NOT PROVEN | | (task D2) |
