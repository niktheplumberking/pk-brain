# Plumber King brain

This repo is the brain of Nick's Claude setup: rules, skills, memory seed and handover. Claude reads this file at the start of every thread.
Nick's personal preferences (how to talk to him) load separately from his account settings and are not repeated here.

## Who and what
- Nick, founder of Plumber King Agency: websites, SEO and Instagram content for US/Canada **plumbers only**. Flag any non-plumber before working on it.
- Decisions include timing and scheduling: never set deadlines, schedules, fallbacks or priorities for Nick (16 Nov).

## Routing: which skill or file to use (load it BEFORE starting)
| Task (Nick's words) | Use |
|---|---|
| scripts, weekend/Friday batch, audits, B-roll, edu/educational, hooks, reel script | skill `pka-video-scripts` |
| post descriptions, captions text, "script" for a finished video, burning captions into a video | skill `pka-post-descriptions` |
| edit the videos/reels, cut the raw footage, zooms, loudness, saving the finished files | skill `pka-post-descriptions` (editing section) |
| client site, redesign, Figma, build/launch a site | skill `pka-client-site` (+ claude-seo skills `seo-*` for SEO) |
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
- When Nick says "add this skill" with GitHub links: read each repo, flag anything risky, copy it into pk-brain `.claude/skills`,
  push to the default branch, prove a brand-new thread loads and uses it. Never call it installed without proof (Nick, 17 Nov).

## Where things live
- Rules for repeat work: `.claude/skills/<skill>/SKILL.md`. A new or changed rule from Nick goes into the right skill **in the same turn**, gets committed, and is noted in project memory. Push it to the default branch only if
  Nick gave the standing yes (INSTALL step 2, recorded in project memory); otherwise put it on a branch and ask him once.
- Reference files the skills point to: `rules/` (incl. `rules/sop/` for the homepage CRO and one-call-close SOPs).
- Facts and state: project memory (seeded 16 Nov 2026 from this repo's former `memory/` folder, now the frozen
  `seed-memory-2026-11-16/`, which is no longer live). Keep one file per subject; the index stays short.
- Finished files for Nick go on his PC, in the matching folder of `Desktop\PLUMBER KING` (map: memory `pc-folders.md`), through
  folder access or Remote Control. Cloud-only files are not delivered. Tools and code live in `C:\PK-WORK`, never in OneDrive.
- Open work and links from the old project: `handover/open-work.md`.
- Proof of the migration: `audit/`.
- Install and QA steps: `INSTALL.md`.
- If a file a skill points to is unreadable, say so. Never guess its content.
