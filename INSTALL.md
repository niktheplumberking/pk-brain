# Install: new chapter (run once, in the new project's first thread)

You are the new coordinator for Nick's Plumber King project. This repo (pk-brain) is the brain. Run every step in order.
Prove each step with a check you actually ran. Keep a log in `audit/install-log.md` (step, check, result) and push it.
Never guess. If a step fails twice, stop and tell Nick in one line what failed and what you need.

## 1. Confirm what loaded (facts only)
- This repo is cloned and `CLAUDE.md` is in your context. List the repos in your working directory. Expected: pk-brain,
  plumber-king-agency, ig-lead-machine, and NOT WFACT3.0.
- Your skill list contains all 4 `pka-*` skills, the 13 `ig-*` skills, `apple-design`, `apple-website-checklist`,
  `plumberking-site-playbook`, `jev-judge` and `reverse-engineer-anything`. List any that are missing and find out why.
- Check whether the claude-seo plugin is installed (any `seo-*` skill listed). If it isn't, offer Nick the plugin install
  (marketplace github.com/AgriciDaniel/claude-seo) with one card.
- Jev and connectors depend on the cloud environment. Run one Jev test call (`bash rules/jev/jev-call.sh` with a one-question
  noul request). A proxy 403 means this project uses a different environment from the old one. In that case, tell Nick in
  one line to pick the same environment in Project settings. Also check that Supabase, Figma, Google Drive and Claude Docs
  respond with one read call each.

- PC folders: call list_devices. This project's threads must reach Nick's PC folders `C:\Users\nicol\OneDrive\Desktop\PLUMBER KING`,
  `C:\PK-WORK` and `C:\Users\nicol\OneDrive\Desktop\DONE FILES` (map: memory `pc-folders.md`). For any that are not approved,
  request them in ONE folder-access prompt. Prove it: list each folder's top level, and write then read back
  `PLUMBER KING\_claude-access-test.txt` (leave it; one line, the date). Log the result.

## 2. Standing permission (ask Nick once, one yes/no)
"May I commit rule and memory changes directly to the default branch in pk-brain? Skills only load from the default branch." Record his answer in
project memory. Without a yes, rule changes go on a branch and wait for his OK.

## 3. Seed project memory
- First list what is already in this project's memory directory. If any file there has the same name as a seed file, do
  not overwrite it: stop and tell Nick in one line.
- Copy every file in `memory/` into this project's memory directory, unchanged. Then compare: the file count and every
  file's content (hash) must match. Only then continue.
- In the repo, `git mv memory seed-memory-2026-11-16`, add `seed-memory-2026-11-16/README.md` saying project memory is now
  the live copy and this folder is a frozen seed, then grep the repo for `memory/` and fix any reference to the old folder in
  the same commit. Push.
- Add one line to project memory: "Installed <date>. Old project = WFACT 3.0 project; nothing new is written there."

## 4. Move the scheduled jobs (no double runs, no gaps)
The jobs fire into a CRM thread. First create (or pick) the CRM thread in this project that will own the jobs and the CRM
work, and note its id in the log.
For each job in `handover/open-work.md` ("Scheduled jobs"), one job at a time:
1. Read the old job with get_trigger and copy its prompt word for word. Only update thread ids or paths that point into the
   old project, and list each change you made.
2. Create the new job with create_trigger in this project. If the tool lets you create it disabled, do that.
3. Double-run guard: the old and the new copy must never both be enabled at a scheduled time (hourly job: minute :48 UTC;
   daily jobs: 06:41 and 06:03 Bangkok). Fire the new job once with fire_trigger at least 15 minutes away from its scheduled
   time. Check the output (job id, CRM card or checklist result; for the hourly scripts job a silent end is a pass
   only if the run shows it pulled the repo and queried the queue). If the new copy could not be created disabled, finish
   steps 3-4 before its next scheduled time, or disable it until you can.
4. Only after a verified good run, in the same turn: disable the old job (never delete it) and enable the new one. Then
   confirm with list_triggers that exactly one enabled copy of each job exists (check the old project's list too; if
   list_triggers cannot see it from here, say so in the log instead of assuming).
5. If the check fails twice, leave the old job running, disable the new one, and tell Nick in one line.
6. Daily research job: a manual fire is a second run that day. Read `docs/ROUTINE-PROMPT.md` (ig-lead-machine repo) first.
   If a second run could double Jev picks or message Nick twice, do not fire it: ask Nick one yes/no ("switch at
   tomorrow's 06:41 run?"), then disable the old job right after its last run and verify the new job's first scheduled run.
The 06:03 IG following scan: do NOT move it unless Nick has said so; leave the old one exactly as it is and ask about it in
step 7. If he says move it, its prompt pins an old thread id (cmsg_...82ek...): replace it with a message id in the new CRM
thread. The 18 Nov send_later reminder lives in the old project; leave it there.

## 5. Deep QA (look for small mistakes now, before they hurt later)
Run each check and fix what fails, then run the check again:
- **Paths:** grep every path out of the skills, `CLAUDE.md`, `rules/`, `handover/` and project memory. Repo-relative paths
  must exist in pk-brain. `/mnt/project-files/...` paths are old project files: test each with ls; if it is missing here,
  keep the path and its "old project files" label, and list it in the log (do not invent a new path). Fix every other dead
  path.
- **Routing:** start 3 fresh threads with Nick's real wording ("write the weekend scripts", "write descriptions for the
  done videos", "plan the site for a new plumber"). Each must load the right skill and follow a rule that exists only in
  that skill. Run each test twice.
- **Negative tests:** "write captions" must not load `ig-caption`. Nothing may run WFACT's step-close or graphify.
- **Clashes:** no two loaded sources may give opposite instructions. Diff the skills against `rules/`, memory and
  `CLAUDE.md`. Fix by deleting the older line.
- **Secrets:** scan the repo and memory for keys and tokens. Include `git log -p`. Values found: remove them, tell Nick the
  key's name so it can be rotated, never print the value.
- **Size:** CLAUDE.md under 200 lines, each SKILL.md under 500 lines, each description under 1,000 characters, memory
  index under 150 lines.
- **Links:** open the live sites and the artifact links in `handover/open-work.md`. List any that fail.
- **Coverage:** spot-check 20 random rows of `audit/coverage-*.md`. The rule must be at its stated new home. Rows that point a rule
  to `content.md`/`co`, or a used-company/topic list to VS 12, were moved on 16 Nov: see the move log in `audit/qa-review-1.md`.
- Have a separate agent re-run this QA from scratch. It reports failures; it does not approve. Fix what it finds.

## 6. Report to Nick
Send one short message: installed and verified, the number of checks passed, anything still failing and why, and what
needs him. No long lists.

## 7. Interview (right after the report)
Get to know Nick's direction for the new chapter. Rules:
- Read project memory, including its `open-items.md`, first. Ask ONLY about gaps and clashes, never about anything memory
  already answers.
- One question at a time, plain short English, about 10 questions maximum. Start with the clashes in open-items.md, then
  his direction and goals for the next weeks (his plan in his words; never propose dates for him).
- Save each answer to memory, or into the right skill, the same turn. Delete the line it replaces.
- End with a 5-line summary of what you now know about his direction.
