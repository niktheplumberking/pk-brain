# Claude Editor incident log

Every mistake that reached Nick (or nearly did) gets a row the same day. Fix the cause in the right skill/tool, then
add a check so it cannot happen twice. Newest first.

| Date | What went wrong | Found by | Cause | Fix (commit) | New check added |
|---|---|---|---|---|---|
| 2026-11-24 | Batch 1 audit scripts picked UX/backend flaws: Reeves "two Pay Bill buttons" (he bills in 2 states), Idaho "1000+ vs 1,523 reviews" on a site whose UI is strong; hooks described in words Nick couldn't picture; whiteboard/props he doesn't own | Nick | flaw picks judged how the site works, not how it looks; no business-reason check; hooks never shown | UI-only rule + business-reason check + hook reference clip per script + use-what-he-has rule (603774d, this commit); Idaho replaced by Piper | check_script fails a card without a hook ref link; reviewer checks UI-only + props |
| 2026-11-24 | D1 test reel reached Nick with sound effects too loud and an edit he called "super simple" | Nick | 14 effects in 35 s at guessed volumes (0.35-0.6), never measured vs voice; no style refs (03 INSPIRATION empty); reviewer has no taste/sfx check | pka-video-edit step 8 sfx rule + refs-first rule (this commit) | reviewer: count effects (max 1 per 5 s) and check they sit under the voice |
| 2026-11-23 | D1 test reel v1: captions ran into IG's right-side buttons; current word's scale ate the space between words | pka-reel-reviewer + contact sheet | caption band was full width, scale on inline words | Reel.tsx 800 px band, margin per word (afc231c) | reviewer measures caption x-range vs x>=950 |
| 2026-11-23 | D1 v1: true peak -0.84 dBTP (limit -1) | loudness.sh pass=no | linear loudnorm let sfx transients through, AAC overshoot | 4x-oversampled -2 dB limiter after loudnorm (1465dc2) | loudness.sh still fails the export if TP > -1 |
| 2026-11-23 | D1 v1: punch-in 4 frames before the footage cut (double jump) | pka-reel-reviewer | punch time typed by hand, not taken from the EDL | punch starts on the EDL join | scene plan takes punch/cut times from <cut>.edl.json |
| 2026-11-23 | D1 v1: generated sounds not in sound-credits.md | pka-reel-reviewer | C4 allowed generated sounds but the credits header and rows were not updated | rows + header fixed (afc231c) | reviewer fails any sound without a row |
