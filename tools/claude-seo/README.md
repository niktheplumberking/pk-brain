# claude-seo (copied into pk-brain 17 Nov 2026)

Source: https://github.com/AgriciDaniel/claude-seo, version 2.6.2, commit 468ed5b (MIT, see LICENSE).
Skills: `.claude/skills/seo` + `seo-*` (29). Agents: `.claude/agents/seo-*.md` (20). Support files here (scripts, data, schema, extensions).
`${CLAUDE_PLUGIN_ROOT}` was rewritten to `/home/user/pk-brain/tools/claude-seo` (scripts) and `/home/user/pk-brain/.claude/skills` (references).
If pk-brain is cloned somewhere else, use that path instead.

Changed or left out on purpose (risk check, 17 Nov):
- Skool "Community Footer" removed from `seo/SKILL.md` (Nick: always strip it).
- hooks/ NOT copied: they run a Python script automatically after every Edit/Write in every thread.
- install.sh / install.ps1 / uninstall NOT copied and never run: they write to ~/.claude and install packages.
- Extensions (DataForSEO, Ahrefs, Bing, PostHog, banana, etc.) are files only; none is set up. Some skills say to put API keys in
  ~/.claude/settings.json: never do that; keys go in the cloud environment's network secrets, added by Nick.
- Python runtime: built OUTSIDE the repo at /opt/claude-seo by `plumber-env-setup.sh` (paste it into the PLUMBER environment's
  Setup script; it installs only requirements.txt + Playwright Chromium, ~60 s, 1.5 GB). Our only code patch: the launcher
  `scripts/claude-seo` defaults CLAUDE_SEO_DATA_DIR to /opt/claude-seo and CLAUDE_SEO_TRUSTED_PROXIES to 127.0.0.1
  (the cloud's own web proxy; without it every fetch is refused, fresh-thread test 17 Nov). Check with `tools/claude-seo/scripts/claude-seo doctor`.
- No telemetry or shell-injection patterns found (grep for os.system, shell=True, eval/exec, curl|sh, analytics calls).
