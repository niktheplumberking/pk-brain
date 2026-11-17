# Install log (16 Nov 2026, new project PLUMBER KING AGENCY, thread "Install pk-brain setup end to end")

Times UTC. Labels: PASS / FAIL / OPEN (needs Nick) / NOTE.

| Step | Check actually run | Result |
|---|---|---|
| 1 repos | `ls /home/user` | PASS: pk-brain, plumber-king-agency, ig-lead-machine; no WFACT3.0 |
| 1 skills | session skill list | PASS: 4 pka-*, 13 ig-*, apple-design, apple-website-checklist, plumberking-site-playbook, jev-judge, reverse-engineer-anything (22/22) |
| 1 claude-seo | skill list (no seo-*), SearchPlugins, ListPlugins | FAIL/OPEN: not installed; AgriciDaniel/claude-seo is not in the claude.ai plugin catalog, so no install card can be shown. Installed only on Nick's PC Claude Code |
| 1 Jev | `bash rules/jev/jev-call.sh` one noul question | FAIL/OPEN: HTTP 403 `authentication_error` "Must supply an API key" (the API answered; not a proxy 403). get_environment: this project runs in env "PLUMBER" (env_01Dt2HDHuZmwXvHyV7WEimth), network unrestricted, 0 network secrets. Env "JEV" has the api.typesafe.ai Authorization secret but allows only that host. The old CRM thread runs in "PLUMBER" too, so the jobs are at parity. Fix: Nick adds the TypeSafe key as a network secret to "PLUMBER" |
| 1 network | curl plumberkingagency.com | PASS (301 -> 200) |
| 1 connectors | Supabase list_projects, Figma whoami, Drive list_recent_files, Claude Docs guide | PASS: all 4 answered (Claude Docs: guide call; no doc id to read) |
| 1 PC folders | list_devices; one folder-access prompt for all 3; device_list_dir each; write `PLUMBER KING\_claude-access-test.txt` via device_commit_files, read back via device_stage_files | PASS: all 3 granted and listed; file written and read back ("2026-11-16 install access test ..."). NOTE: device_bash VM fails (hypervisor off in BIOS); file tools work |
| 2 standing yes | decision card | PASS: Nick chose yes 22:37; saved in project memory MEMORY.md. Default branch = `claude/project-thread-4p3al4` (repo HEAD; no main) |
| 3 seed | list memory dir (empty), cp, sha256 per file | PASS: 9/9 files, all hashes match. `git mv memory seed-memory-2026-11-16` + README, references fixed (CLAUDE.md, handover), commit b261dd7. "Installed" line added to MEMORY.md |
| 4 CRM thread | coordinator started it | thread cmsg_015Ezzhub3Y5NMvHaXpu5C3fSsof3F13fwryRUWAxB9P9B, session session_013rHJ3ZNq7L6CCkpfEHsWG5 |
| 4 prompts | get_trigger on old jobs, copied word for word | Changes made: none to prompt text. Only persistent_session_id changed (old session_013rHJ3ZrPZXB6jcn3rH9g8y -> new CRM session) |
| 4 content scripts | created trig_015VdtC3R82K4wYcmXPtQeok, disabled at once | First fire_trigger (22:32) ran in a fresh session with no repo access (manual fires do not use the persistent session). Probe trig_019diz1K7GRa14X9ivVqWh7T (one-shot 22:44) proved scheduled wakes land in the CRM thread with repo access (pull ok, 79a2687). CRM thread fired it again 22:43 at Nick's request: Supabase read ok, 0 queued / 0 working. OPEN: a real card would fail; the doc needs old project files (3-audits rule book, Valley Air references, /mnt/project-files/jev/*), none reachable from here (not in any repo; cross-project send_message: not found). Old job stays ON |
| 4 daily research | created trig_01G2djPR6pavdtQJek7ZMTrE, disabled at once | First fire (22:32) failed: fresh session, no repo access; it pushed a false alarm to Nick and project chat (my error: manual fire). Code check: a second run the same Bangkok day cannot double picks (daily-pick.mjs: slots minus today's picks; on conflict do nothing). Nick said yes in the CRM thread; fired 22:46, wake landed in the CRM thread, steps 1-7 ran: 93 reports, research needed 0, 6 picks saved for 17 Nov (I verified: daily_picks day 2026-11-17 = 6 rows at 22:48:45; Jev 403 so report-only ranking). PASS. Not switched: Nick said keep old jobs on until BOTH new jobs pass; the old 23:41 run will find 0 slots (checking at 23:55) |
| 4 following scan | not moved | Per INSTALL: ask Nick in step 7 |
| 4 old reminders | list_triggers | NOTE: two 18 Nov reminders live in the old project (trig_01USLXioCokgtQuPa6Bh5iU5 05:00 UTC, trig_01AXFJSir2KD8g3TrQAEuN1F 08:00 UTC), not one; left there |
| 4 list check | list_triggers | Old project jobs ARE visible from here (all 3 enabled). New copies: both disabled |
| 5 paths | script over skills, CLAUDE.md, rules, handover, memory | PASS: no dead repo-relative path. 30 /mnt/project-files paths missing (old project files), all labelled except jev-cookbook (fixed with a banner) |
| 5 routing | 7 real fresh threads (coordinator) + checker simulation | PASS 7/7: scripts -> pka-video-scripts, descriptions -> pka-post-descriptions, site -> pka-client-site, both runs agree; quotes grep-verified in those skills |
| 5 negative | "write captions" thread; grep step-close/graphify | PASS: routed to pka-post-descriptions; no step-close/graphify anywhere |
| 5 clashes | checker diff | FIXED: FLAGS #19 status (now OPEN, PD holding rule), playbook vs pka-client-site (playbook now defers), voice.md "/ig-caption" label. OPEN for interview: FLAGS #4/#14/#17 marked settled while open-items lists them for Nick |
| 5 secrets | grep repo, memory, `git log -p --all` | PASS: none |
| 5 size | wc | PASS: CLAUDE.md 56 lines, max SKILL.md 180, max description 912 chars, MEMORY.md 35 lines. FIXED: 3 memory files over 4 KB split (clients -> + client-plumbing-by-paul, design-log; accounts -> + accounts-and-services; agency-brand -> + agency-site-and-content) |
| 5 links | curl | FAIL/OPEN: Calendly booking link 404 (whole calendly.com/plumber-king-agency page), and it is the live site's booking button. Other sites 200; Figma/Drive need sign-in; 13 artifact links not checked |
| 5 coverage | 20 random rows (seed 42) | PASS 19/20; row 270 status fixed |
| 5 separate checker | general-purpose agent, read-only | Done; its findings above. Fixes in commit 63590e9 |
| 4 content real card | CRM thread queued Pipe Masters (Mesa AZ) "install test", fired new job 22:52 | PASS: I verified content_items d234642a: done, stage shooting, script 565 chars, report 7,256 chars, jev_line "Jev not connected; Claude's pick" |
| 4 switch | update_trigger enabled=false on old trig_01WKdeBsPrEQd8Fwr1L3azyB and trig_01JDVWDEiW5QXKG16E4ousRs | FAIL x2: "not found" (old-project tasks are visible in list_triggers but cannot be changed from this project). Asked Nick to have an old-project thread disable them; new copies stay off until then |
| 4 switch done | list_triggers 23:56 | Old content + research were disabled from the old project at 23:07 (not deleted). I enabled the new two at 23:56. Gap 23:07-23:56: the 23:41 research and 23:48 content slots ran in neither project. Nothing lost (fact: 17 Nov picks already saved = 6 rows; content_items has 0 queued). list_triggers: exactly one enabled copy each (new content trig_015VdtC3R82K4wYcmXPtQeok next 00:48 UTC, new research trig_01G2djPR6pavdtQJek7ZMTrE next 17 Nov 23:41 UTC); old 06:03 scan untouched and enabled |
| 4 no double | daily_picks day 2026-11-17 at 23:56 | PASS: still 6 rows |
| 1 Jev retest | 17 Nov 08:25 UTC, after Nick added the key (Authorization header) | PASS: HTTP 200, model jev-1.14.0, noul 0.94, 291 input tokens; logged in /mnt/project-files/jev/jev-usage-log.csv. First retry was my error (422: request lacked "model") |
| 4 scheduled run | get_trigger new content job, 17 Nov | PASS: scheduled run 07:48:51 UTC delivered into the CRM session cse_013rHJ3ZNq7L6CCkpfEHsWG5 (SUCCEEDED = wake delivered). Daily research first scheduled run is 17 Nov 23:41 UTC: not yet seen |
| 5 links (artifacts) | Artifact list (scope all) | PASS (existence): all 13 artifact links in handover are listed as Nick's own artifacts from this project; contents not opened |
| Calendly | curl new URL | PASS: https://calendly.com/plumberkingagency/30-minutes-detailed-call = 200, page "30 Minutes Discovery Call - Nick Bennett". Updated in handover, memory (MEMORY.md, agency-brand.md), site source (plumber-king-agency branch claude/project-thread-ljkqw7, fc4a9b4). Live site: confirmed byte-identical to preview 87ae163 (3 pages); patched the 99 HTML/RSC files of that build (283 links; reverse patch gives zero diff). Patch zip on Nick's PC `PLUMBER KING\4 BRAND AND DESIGNS\Website uploads\pka-calendly-fix-changed-files-2026-11-17.zip` (sha256 46b3133a..., read back, match). OPEN: upload to Hostinger (hPanel; no route from here: Chrome extension can only upload screenshots, no FTP credentials) |

## 17 Nov final items (Nick 09:25 UTC)
| Item | Check | Result |
|---|---|---|
| 1 scan card | closed as "Leave" | Parked to next week: Calendly live upload, CRM, 06:03 scan, PC safety-check issue (memory open-items #6) |
| 2 Calendly | grep repo + memory for calendly.com | only the new link, except this log's history row |
| 4 claude-seo | AgriciDaniel/claude-seo 2.6.2 @468ed5b copied (29 skills, 20 agents, tools/claude-seo) | risk notes in tools/claude-seo/README.md; hooks + installers left out; Skool footer removed; this session's skill list shows seo + 28 seo-* after the copy. Fresh-thread proof: see below |
| 5 rule | CLAUDE.md Hard rules | "add this skill" rule added (041a410) |
| 6 main | `main` created = 041a410 | default branch switch: no tool route from the cloud (GitHub MCP has no repo-settings call) |
| 7 client code | WFACT3.0 read (clone, both branches): no United/Paul files | code copied from its real branches into plumber-king-agency clients/ (8ddc922, tree hashes identical), PR #2; root build: TypeScript passed, then Next 16.4.3 security gate stopped the build (pre-existing) |
| 8 tools | Figma get_metadata on QbPRX8MU5AA6peTerdP5gg | PASS: 7 pages listed |
|  | 21st.dev search "testimonial carousel" | PASS: 3 results |
|  | Vercel API deploy (token via env PLUMBER) | PASS: project pk-install-probe, https://pk-install-probe.vercel.app = HTTP 200 |
| 9 rename | grep "TypeSafe Docs" in repo + memory | 0 left (one memory line says "renamed from") |
