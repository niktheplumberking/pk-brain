# Plumber King overrides (win over the Remotion skill text)

Copied 23 Nov 2026 from remotion-dev/skills (v4.0.546, commit 89c8afa; repo has no LICENSE file; Remotion docs are public).
Risk read of every file done 23 Nov (audit/install-log.md). The project is `tools/content/remotion` (do not create a new one).

1. Versions: Remotion packages are pinned at 4.0.540 in tools/content/remotion/package.json. Add a package only with an exact
   version that matches (never `@latest`); `npx remotion add` must keep the same version. Install with `--ignore-scripts`.
2. Never run `npx create-video`, `npx skills update`, `npx skills add` or any skill upgrade: skills change only through pk-brain.
3. Licence: Remotion is free for a company of up to 3 people (remotion.dev/docs/license, read 23 Nov). Never pass
   `--license-key` or buy anything; above 3 people or when sold as SaaS, Nick decides first (Automators: $0.01 per render,
   $100/month minimum). Never use `@remotion/web-renderer` (it always sends a usage event with the IP).
4. No outside services: no Lambda/Cloud Run, no Mapbox/MapTiler/Google tiles keys, no Algolia docs search, no
   "search the internet for sound effects" (sounds: CC0 or own only, logged in rules/content-ops/sound-credits.md).
5. Captions: use our own component in `tools/content/remotion/src` fed by transcribe.py words `[{w,s,e}]` (convert to
   `@remotion/captions` Caption `{text:" "+w, startMs:s*1000, endMs:e*1000, timestampMs:null, confidence:null}` if you use
   that package). Do not fetch element source code from remotion.dev; do not download Whisper models in Remotion.
6. Output: 1080x1920, 30 fps, H.264, `--color-space=bt709`; then loudness.sh. Fonts: brand Urbanist via local @fontsource
   (pinned), never a CDN font at render time.
