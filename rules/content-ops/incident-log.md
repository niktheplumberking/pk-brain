# Claude Editor incident log

Every mistake that reached Nick (or nearly did) gets a row the same day. Fix the cause in the right skill/tool, then
add a check so it cannot happen twice. Newest first.

| Date | What went wrong | Found by | Cause | Fix (commit) | New check added |
|---|---|---|---|---|---|
| 2026-11-23 | D1 test reel v1: captions ran into IG's right-side buttons; current word's scale ate the space between words | pka-reel-reviewer + contact sheet | caption band was full width, scale on inline words | Reel.tsx 800 px band, margin per word (afc231c) | reviewer measures caption x-range vs x>=950 |
| 2026-11-23 | D1 v1: true peak -0.84 dBTP (limit -1) | loudness.sh pass=no | linear loudnorm let sfx transients through, AAC overshoot | 4x-oversampled -2 dB limiter after loudnorm (1465dc2) | loudness.sh still fails the export if TP > -1 |
| 2026-11-23 | D1 v1: punch-in 4 frames before the footage cut (double jump) | pka-reel-reviewer | punch time typed by hand, not taken from the EDL | punch starts on the EDL join | scene plan takes punch/cut times from <cut>.edl.json |
| 2026-11-23 | D1 v1: generated sounds not in sound-credits.md | pka-reel-reviewer | C4 allowed generated sounds but the credits header and rows were not updated | rows + header fixed (afc231c) | reviewer fails any sound without a row |
