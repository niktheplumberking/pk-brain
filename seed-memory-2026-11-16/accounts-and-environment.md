# Accounts, tools and environment (facts; no secret values here, ever)

## Nick's PC
- Windows, DESKTOP-3FA292L. Remote Control works. Claude in Chrome works in his signed-in Chrome (route for GSC, Bing, Google
  profiles, Pinterest).
- PC folders: see [pc-folders.md](pc-folders.md) (structure built 16 Nov). Folder pulls capped 400 MB/file; C:\Users\nicol\.claude is blocked for folder access.
- C: 52 GB free after the 16 Nov cleanup (was 6.2). Backup + logs: C:\backup-2026-11-16. Dropbox app uninstalled ~4 Nov; Nick will reinstall (don't raise).
- Missing folders: CONTENT GALLERY NICK, FINAL CONTENT, Edited Reels ALL (not in local bin; maybe in OneDrive online bin until
  ~27 Nov). Nick: not needed, wants them gone.
- Nick runs `powercfg -h off` himself (hibernation). CapCut: delete all (decided 16 Nov).
- Live IG tools live in C:\PK-WORK\Tools (moved from Downloads 16 Nov): ig-lead-machine-scan, ig-lead-machine-app, edwin-radd-links (IG browser profile), IG-grid-posts.
- Playwright's bundled Chromium is blocked by Windows on the PC; use channel 'chrome' + a temporary profile.
- PC filter blocks Windows Task Scheduler ("persistence"). Daily follow scan hit the PC safety check ("Undermining
  Oversight"): never push past it.
- TunnelBear VPN (Belgrade exit) makes Hostinger look down for Nick only.
- Nick's PC CLAUDE.md (C:\Users\nicol\.claude\CLAUDE.md, read 9 Nov) does not load in cloud threads. It names PC-only skills
  plumberking-site-playbook, apple-design, apple-website-checklist (source: C:\PK-WORK\Code\apple-design-system\skills).

## Cloud
- Network full. File transfers to the PC: device_commit_files caps 25 MB/file; /mnt/project-files silently changes .mp4 (and
  re-saves JPGs): zip -0, split 20 MB, copy as .bin, re-hash, then join + Get-FileHash on PC. Never overwrite a file name; verify
  hashes before saying "saved".
- Google Maps works from cloud via Playwright (14 Nov); reading/sorting reviews may still need the PC.
- IG: profile pages need login; single public reels download with yt-dlp. IG scraping ONLY via Nick's personal account
  sukunda02 on his PC (standing access); never nick.bennettx.
- Threads cannot create GitHub repos (403); Nick creates them.

## Accounts and services
- GitHub: niktheplumberking. Repos: plumber-king-agency (agency site + client site folders), ig-lead-machine (CRM), WFACT3.0
  (developer's, see below), rizm-technologies (portfolio).
- Vercel: Nick's account, team niktheplumberkings-projects. CLI login = device approval Nick clicks in his Chrome.
- Hostinger (live hosting, hPanel). Namecheap: plumberkingagency.com + bennettndco.com; all inboxes Namecheap Private Email.
  Never switch nameservers, never edit/delete MX/TXT; new TXT only with Nick's go.
- Supabase project "IG Lead Machine", ref amcxsrjfkhidklhswtal (free org named "WFACT 3.0", ap-southeast-1).
- Figma: file QbPRX8MU5AA6peTerdP5gg via Figma MCP.
- Higgsfield: Plus plan; MCP works from cloud (14 Nov tests); CLI 1.2.2 on the PC. Ask Nick before any run over 30 credits.
  Virality predictor ranks his reels upside down: ignore it.
- Jev (TypeSafe; Nick says "Jeff/Jav"): only when needed or asked, max 5 calls per task; log jev/jev-usage-log.csv; cookbook
  `/mnt/project-files/jev/jev-cookbook.md`; call script `bash /mnt/project-files/jev/jev-call.sh req.json` (old project files; may not exist in new project). Key access: old
  notes say only env "JEV" has the key (relay via thread "Test Jev connection"); jev-judge skill says the proxy adds it.
  Test live before relying on either. Env var for a GSC service account if ever made: GSC_CREDENTIALS (not set up).
- claude-seo 2.5.0 plugin: on 16 Nov PC Claude Code only (`/seo ...`); the new project may install it (INSTALL step 1). Strip its Skool footer.
- Cold-call dialer: Dialpad Connect Standard 14-day trial from 9 Nov (ends ~23 Nov), then RingCentral trial; Zadarma backup.
  No stacking trials with new emails. JustCall refused 6 Nov (2-licence minimum ~$80/mo); JustCall campaign #3413461 held the
  first 1,383-lead list (23 Oct).
- Lead list tool: G Maps Extractor Lite ($19/mo). Lead files `/mnt/project-files/plumber-king-agency/leads/` (old project files; may not exist in new project) and PC C:\Users\nicol\OneDrive\Desktop\PLUMBER KING\3 LEADS AND SALES\Lead lists\Lead
  List ORGANIZED\. JustCall maps by column POSITION: keep the exact column order of plumber-leads-FINAL-with-owners-2026-10-22.csv,
  Dial Priority last.
- Models: Opus 5.5 default for threads/subagents; Fable 5.2 rarely (burns limits).

## Skills Nick confirmed as his core set (16 Nov, wants them global)
reverse-engineer-anything (REA), claude-seo, instagram-agent-skill (= Jake's 13 ig-* skills; house rules in voice.md override
them), jev-judge, apple-design, apple-website-checklist, plumberking-site-playbook. Jake's 13 ig-* skills: upload name-only
trigger; remind Nick of them during scripting work. voice.md: live copy = pk-brain `rules/voice.md` (fixed 16 Nov); stale
old copy `/mnt/project-files/voice.md` (old project files; may not exist in new project); PC original on Nick's PC
C:\Users\nicol\.claude\instagram\voice.md.

## WFACT3.0
WFACT3.0 = developer's factory project, separate; not ours to touch.
- Cloud environment: "PLUMBER" (env_01Dt2HDHuZmwXvHyV7WEimth), network unrestricted (checked 16 Nov). Others: JEV, 2x Default (trusted network). The new project must use PLUMBER.
