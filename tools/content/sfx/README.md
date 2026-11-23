# Sound effects (task C4, proven 23 Nov 2026)

Rule: only CC0 sounds, sounds we generate, or Nick's own recordings (cleared for IG, TikTok, YouTube). Every sound used in a
reel gets a row in `rules/content-ops/sound-credits.md` (generated ones: source "earshot <family>", licence "own").

1. Earshot (first choice; MIT, Leon Lin, github.com/Leonxlnx/earshot @7a7f7c5). Makes sounds from words on the CPU, no model,
   no network; every sound it makes is ours. Install once in a separate venv (never in the system Python):
   `python3 -m venv /tmp/es-venv && /tmp/es-venv/bin/pip install "earshot @ git+https://github.com/Leonxlnx/earshot@7a7f7c5c70d4a763a1eca4b3666af7c77e313f97"`
   Use: `/tmp/es-venv/bin/earshot make "a fast whoosh transition" -o whoosh.wav` (prints family, length, loudness).
   Tested 23 Nov: whoosh/fast 0.30 s, pop (thump/appear) 0.06 s, cash_register/open 2.89 s, camera/shutter 0.39 s, all "clean".
   Not installed: its MCP server, plugin, skills and the `listen` extra (downloads models).
2. Openverse (when Earshot has no fitting sound): `python3 -I tools/content/sfx/openverse_fetch.py "<words>" <out_dir> [n]`.
   CC0 only (enforced twice: API filter + result check); writes the credit rows itself.
Placement is not done by these tools: the scene plan (pka-video-edit step 7) says which sound lands on which cut/card.
