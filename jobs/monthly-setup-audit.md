# Job: monthly setup audit (read-only)

Asked for by Nick, 17 Nov 2026. Runs on the 1st of every month at 10:00 Europe/Belgrade, first real run 1 Jan 2027.
Scheduled task id and schedule: project memory `crm-and-jobs.md`. This doc is the job's rule book; CLAUDE.md still applies.

## 0. Guard
- If today (Europe/Belgrade) is before 1 Jan 2027: do nothing, end the turn with `no_reply_needed`. (The scheduler cannot
  start later, so the 1 Dec 2026 slot is a harmless skip.)
- If Nick said STOP or PAUSE and has not lifted it: do nothing.

## 1. Hard limits
- READ ONLY. Change nothing: no commits to rules/skills/memory, no branch deletes, no Vercel/Supabase/trigger edits, no PC file
  moves. The only writes allowed: the report files in step 5 and this job's own checklist.
- Cleanups are PROPOSALS, each with the exact fix. Nick says yes in the thread; only then a normal thread does them.
- Never print or store secret values. Names of env vars and connectors only. Never open `C:\PK-WORK\_SECRETS-move-to-password-manager`.
- Never wait for Nick (unattended job rule). If a source is unreachable, label it "don't know" with the reason and go on.

## 2. Find the last report
- Reports live in `/mnt/project-files/setup-audits/` as `YYYY-MM-01-setup-audit.md`. Compare against the newest one.
- If none exists, compare against `baseline-2026-11-17.md` (same folder) plus pk-brain `audit/install-log.md`.

## 3. Collect (record each as fact with the check you ran)
1. pk-brain: `git pull` main; `git log --since=<last report date> --stat`; CLAUDE.md, every `.claude/skills/*/SKILL.md`, `rules/`,
   project memory files (list + sha256, diff vs last report). Check: each memory file under 4 KB, MEMORY.md index points to real files,
   no line in memory that a skill should hold, no duplicate or contradicting rule (skill vs CLAUDE.md vs memory vs rules/),
   no dead path, dates/items marked stale, open-items.md entries older than 30 days.
2. All repos and branches: for each repo in this project (`git ls-remote --heads`), new/removed branches vs last report,
   branches already merged into main, branches idle over 30 days, open PRs (GitHub MCP list_pull_requests).
3. Vercel: `curl https://api.vercel.com/v9/projects?limit=100&teamId=team_59lA2tP4DaHNBErHnfnggRdc` (token injected by the
   PLUMBER env proxy; send a dummy Bearer). New/removed projects, last deploy state (`/v6/deployments?projectId=..&limit=1`),
   failed deploys, probe or orphan projects. Mark WFACT/court-hub/dreamsign/rizm projects as "not Plumber King: report only".
4. Scheduled tasks: `list_triggers` (include disabled). For each: enabled, schedule, last_run status, next_run_at. Flag FAILED or
   missing runs, duplicates (old + new copy both on), tasks firing into dead sessions, tasks memory says exist but list does not show.
5. PC folders (Desktop\PLUMBER KING, C:\PK-WORK, Desktop\DONE FILES): `list_devices`, then `device_list_dir` (recursive for
   PLUMBER KING). Compare counts/sizes per folder vs last report's listing. Flag files in Downloads or folder roots, new big files,
   empty folders. If the PC is off or folder access fails: write "don't know: PC unreachable at <time>", post one line asking Nick
   to say "run the PC part" when it is on, and do that part in the same thread when he does. Do not start Remote Control unattended.
6. Connectors and secrets: try one small read call per connector (GitHub get_me, Supabase list_projects, Figma whoami, Drive
   list_recent_files, Claude Docs guide, Higgsfield balance), Jev via `rules/jev/jev-call.sh` only if needed (counts as 1 Jev call),
   Vercel as above. Record HTTP code / error. 401/403/expired = broken access, with who fixes it and how
   (e.g. reconnect card, new token in env PLUMBER).
7. Repo secret scan: grep pk-brain + memory for key-like strings (names are fine, values are a finding).

## 4. Write the report (one doc)
Every point carries a label: **fact** (with the check) · **inferring** · **don't know** (with why). Sections, in this order:
1. Top 5 problems and the fix for each (plain words, one line each).
2. Broken access (403, expired token, failed connector) and who fixes it.
3. Added / changed / removed since last report (per area: pk-brain, repos and branches, Vercel, scheduled tasks, PC folders, connectors).
4. What improved. 5. What got worse.
6. Clashing or outdated rules and memory (quote both lines and their files).
7. Proposed cleanups, numbered (C1, C2...), each with the exact action. "Nothing changed without your yes."
8. Not checked this month and why.

## 5. Deliver
- Claude Doc titled "Plumber King setup audit <Month YYYY>" (Claude Docs connector). If Claude Docs fails, a .md is the doc.
- Save the same content to `/mnt/project-files/setup-audits/YYYY-MM-01-setup-audit.md` (the next run's comparison point) and the
  raw PC listing as `YYYY-MM-01-pc-listing.json` there.
- If the PC is on: copy the .md to `Desktop\PLUMBER KING\7 ADMIN\Setup audits\` via device_commit_files.
- Post Nick one message under 80 words: the top 3 problems, the doc link, "reply with the cleanup numbers you want done".
