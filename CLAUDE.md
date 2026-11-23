# Plumber King brain

This repo is the brain of Nick's Claude setup: rules, skills, memory seed and handover. Claude reads this file at the start of every thread.
Nick's personal preferences (how to talk to him) load separately from his account settings and are not repeated here.

## Who and what
- Nick, founder of Plumber King Agency: websites, SEO and Instagram content for US/Canada **plumbers only**. Flag any non-plumber before working on it.
- Decisions include timing and scheduling: never set deadlines, schedules, fallbacks or priorities for Nick (16 Nov).

## Routing: which skill or file to use (load it BEFORE starting)
| Task (Nick's words) | Use |
|---|---|
| scripts, weekend/Friday batch, audits, B-roll, edu/educational, hooks, reel script | skill `pka-video-scripts` (scripts checked by agent `pka-script-reviewer`) |
| post descriptions, captions text, "script" for a finished video | skill `pka-post-descriptions` |
| edit the videos/reels, cut the raw footage, captions burned in, zooms, sound effects, loudness, saving the finished files | skill `pka-video-edit` (finished reel checked by agent `pka-reel-reviewer`) |
| viral reel to break down or recreate, research, intel, find formats, ideas bank | skill `pka-content-research` |
| long video, long-form, clips, clipping, podcast clips | skill `pka-clipping` (then each clip through `pka-video-edit`) |
| client site, redesign, Figma, build/launch a site | skill `pka-client-site` + skill `pka-site-craft` (how to reach United/Paul quality) (+ claude-seo skills `seo-*` for SEO) |
| sales call, prep a call, one-call close, proposal on the call | skill `pka-sales-call` |
| SEO, audit a site's SEO, schema, sitemap, GEO | claude-seo skills in `.claude/skills/seo*` (copied 17 Nov, see `tools/claude-seo/README.md`) |
| a Jev gate/pick/score, when a skill step calls for it or Nick asks (only then; max 5 Jev calls per task) | skill `jev-judge` |
| reverse engineer an app/binary/site capture | skill `reverse-engineer-anything` |
| Apple-quality design, site checklist, site playbook | skills `apple-design`, `apple-website-checklist`, `plumberking-site-playbook` |
| /ig-reel, /ig-caption and the other /ig-* commands | Jake's `ig-*` skills, ONLY when Nick calls them by name |
| (never for Plumber King work unless Nick asks) | account skills `client-progress-report`, `progress-sync`: the developer's |

When scripting work is underway, remind Nick once that Jake's /ig-* tools exist (his request, 16 Nov).

## Which source wins
1. What Nick says in the current thread.
2. The task's skill in `.claude/skills/`.
3. This file.
4. Project memory (facts and state only).
5. Reference files in `rules/`. A skill always wins over a reference file.

When Nick gives a rule that clashes with an old one, ask him which wins and delete the loser (his preferences). Old clashes
already settled by date are listed in `audit/FLAGS-content.md`. Superseded lines get deleted, not stacked.

## Hard rules
(How to talk to Nick and how to work: his account preferences. Below are only the additions to them.)
- STOP or PAUSE applies to every thread at once; the coordinator also ends all Remote Control sessions and replies in one line.
- Before saying "can't": every route includes Remote Control on Nick's PC.
- Never write secret values into this repo or memory (names of env vars are fine).
- Scheduled or unattended jobs follow their job doc and never wait for Nick.
- WFACT3.0 is the developer's separate project. It is not ours to touch.
- Lead lists and dialing (Nick, 17 Nov, permanent): never put on a call list, or dial, any lead in a state with a strict
  state autodialer law: Florida (FTSA), Oklahoma (OTSA), Maryland (Stop the Spam Calls Act). Exclude by state AND by phone
  area code (FL 239 305 321 324 352 386 407 448 561 645 656 689 727 728 754 772 786 813 850 863 904 941 954; OK 405 539 572
  580 918; MD 227 240 301 410 443 667). If another state passes a similar law, flag it to Nick before adding it.
- When Nick says "add this skill" with GitHub links: read each repo, flag anything risky, copy it into pk-brain `.claude/skills`,
  push to the default branch, prove a brand-new thread loads and uses it. Never call it installed without proof (Nick, 17 Nov).

## Threads: main and sub (Nick, 17 Nov, permanent)
1. MAIN threads = ongoing work Nick comes back to: "Claude Editor", "CRM", "Agency website", and one per client named
   "Client - <name>". Only Claude (the coordinator) creates them, and only when Nick starts new ongoing work.
2. SUB threads = Claude's working threads for one or more tasks it handles while working. Nick does not read them, does not need
   to know about them and must not be involved in them (it creates organisation mess for him); he cares only about main threads.
   When a sub thread is done and verified, it saves its key results and decisions to project memory, then Claude closes it
   (resolve, never delete). Reopen it only if it is needed again.
3. Keep a thread map in project memory (`thread-map.md`): each main thread, its status, and what it is waiting on. When Nick
   asks "where are we?", answer from that map, main threads only.
4. Every report to Nick names which main thread the work belongs to.

## To-do list and daily brief (Nick, 17 Nov, permanent)
1. One to-do file: `todo.md` in this repo. Add an item **right away** (same turn, commit to main) when Nick says "remind me",
   "we have to", gives a date, states a plan ("from next week we do X", even with few details: add its start date), or a
   thread finds something Nick must do. Each item: due or start date, owner (Nick or Claude), main thread, date added.
2. When an item is done AND verified (proof: commit, file, report, run result), mark it done with the date and the proof,
   without Nick asking. Never mark done without proof.
3. Daily brief: scheduled task every day 05:00 Europe/Belgrade (never Nick's travel time zone). Rule book:
   `jobs/daily-brief.md`. It posts in the project (main) chat. Its thread and the monthly audit's thread are protected:
   never close or resolve them (listed in memory `thread-map.md`).

## Where things live
- To-dos, plans and reminders: `todo.md` (rule above). Memory `open-items.md` keeps only clashes and stale notes.
- Rules for repeat work: `.claude/skills/<skill>/SKILL.md`. A new or changed rule from Nick goes into the right skill **in the same turn**, gets committed, and is noted in project memory. Push it to the default branch only if
  Nick gave the standing yes (INSTALL step 2, recorded in project memory); otherwise put it on a branch and ask him once.
- Reference files the skills point to: `rules/` (incl. `rules/sop/` for the homepage CRO and one-call-close SOPs, and
  `rules/content-ops/` for Claude Editor: tool status, incident log, sound credits, folders, ideas bank, style).
- Facts and state: project memory (seeded 16 Nov 2026 from this repo's former `memory/` folder, now the frozen
  `seed-memory-2026-11-16/`, which is no longer live). Keep one file per subject; the index stays short.
- Finished files for Nick go on his PC, in the matching folder of `Desktop\PLUMBER KING` (map: memory `pc-folders.md`), through
  folder access or Remote Control. Cloud-only files are not delivered. Tools and code live in `C:\PK-WORK`, never in OneDrive.
- Open work and links from the old project: `handover/open-work.md`.
- Proof of the migration: `audit/`.
- Install and QA steps: `INSTALL.md`.
- If a file a skill points to is unreadable, say so. Never guess its content.
