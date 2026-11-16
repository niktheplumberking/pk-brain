# QA review 1 (hostile), 16 Nov 2026

Reviewer: separate agent, told to find failures, not to approve. Scope: every file in pk-brain, checked against the live
old-project memory (`/tmp/claude/memory/team/silo/`), `rawrules/` and `failure-audit.md` (all read-only).
Status words: FIXED (changed in this repo, check re-run) or OPEN (not fixable here, reason given).
Checks re-run after the fixes: YAML parse of all 17 SKILL.md files, name = folder, description length, body length,
repo-relative path existence, `/mnt/project-files` path existence, secret grep, coverage grep.

## 1. Contradictions

| # | Finding | Status |
|---|---|---|
| C1 | `memory/MEMORY.md` said "Content: no skill yet; rules in content.md". Skills `pka-video-scripts` and `pka-post-descriptions` exist. | FIXED: index now points to both skills; content.md line says "facts only". |
| C2 | `memory/content.md` held ~25 rule lines that duplicated (and could drift from) the two content skills. | FIXED: rewritten as facts only (posting facts, used companies/topics, batches, files, editing tools). Move log in section 8. |
| C3 | `memory/content.md` listed Cotton City as a USED audit company and also as an unused spare. The 14 Nov note shows it was E4 in an early draft, then moved to spares (FLAGS 30). | FIXED: listed only as an unused spare, with the reason. |
| C4 | `pka-video-scripts` section 12 listed only 9 used audit companies; memory listed 28. A writer trusting the skill would repeat Hunter, Ogborn, Goode, Valley Air etc. | FIXED: the list now lives once, in project memory `content.md` (facts belong in memory); section 12 points there. Items only in the skill ("24/7 at 2 AM") were added to memory first. |
| C5 | INSTALL step 7 read `memory/open-items.md`, which step 3 renames. | FIXED: "project memory, including its `open-items.md`". |
| C6 | `handover/open-work.md` task 5 read as a Claude-set schedule (Fri test, Sat-Sun test). | FIXED: now "Nick's stated plan (his words, 16 Nov; his schedule, not a deadline set by Claude) ... Follow his lead on timing." Same label added to the week plan in `memory/people-and-aliases.md`. |
| C7 | handover task 8 said "Write the content skill ... rules now in memory/content.md" (both false now); task 9 pointed at `memory/open-items.md`. | FIXED: task 8 = add new taught rules to the existing skills the same turn; task 9 = project memory `open-items.md`, raised in the interview. |
| C8 | CLAUDE.md "Inside a skill, the newest dated rule wins" vs Nick's preference "If a new rule clashes with an old one, ask me which wins". | FIXED: new clashes = ask Nick and delete the loser; old ones already settled by date are in `audit/FLAGS-content.md`. |
| C9 | CLAUDE.md: "A new or changed rule ... gets committed and pushed to main" vs INSTALL step 2 "without a yes, rule changes go on a branch". | FIXED: push to main only with the standing yes recorded in memory; else branch + ask once. |
| C10 | CLAUDE.md routes "pick between options, score quality" to `jev-judge`; memory and skills say Jev only when needed or asked, max 5. | FIXED: row now "a Jev gate/pick/score, when a skill step calls for it or Nick asks (only then)". The account skill's own broad description cannot be edited here: OPEN (see O3). |
| C11 | `pka-client-site` said claude-seo "does not load in cloud threads" while INSTALL step 1 offers to install the plugin in the cloud project and CLAUDE.md routes SEO to `seo-*`. | FIXED: use `seo-*` if listed in the thread, else the PC route (steps 2 and 7); memory fact updated. |
| C12 | `rules/voice.md` still said "He plans his own videos", "Open with 'This plumber...'", "Line one calls out plumbers", "one of each per day", edu-only description format, "United = biggest content asset" (all superseded per FLAGS 4, 7, 25, 29). | FIXED: lines rewritten to match the skills (HOOK block, own opener per script, three formats with the split open, per-type description shapes, Jim's OK). |
| C13 | `rules/audit/*`, `rules/hormozi-principles-for-scripts.md`, `rules/ed-flaw-list.md` carry superseded lines (HVAC, Google blocked from cloud, report to Nick, 15-20 s, "Plumbers," callout, one comment word, ONE flaw, United asset). These are Nick's workflow files ("don't change on your own"). | FIXED in the repo copies with a short "Outdated lines (skill wins)" banner at the top; Nick's text left as is. The old-project originals are OPEN (O1). |
| C14 | `pka-video-scripts` section 13 named a non-existent skill `ig-hook`. | FIXED: real names (ig-reel, ig-caption, ig-viral, ig-human...). |
| C15 | Skills referenced `FLAGS-content.md` (no such path at the repo root). | FIXED: `audit/FLAGS-content.md` in both content skills. |
| C16 | `memory/people-and-aliases.md` header said the brain's CLAUDE.md is the home of Nick's preferences, while CLAUDE.md says they are not repeated. | FIXED: see section 6. |
| C17 | `memory/accounts-and-environment.md` gave the old `/mnt/project-files/voice.md` as the voice.md copy (stale per open-items). | FIXED: live copy = pk-brain `rules/voice.md`; old copy labelled stale. |
| C18 | Burned-in titles: old `content.md` said "No titles on reels (Nick adds them in IG)"; FLAGS 19 dropped that line; PD said nothing. | FIXED as a holding rule in PD ("don't burn a title in unless Nick asks"), and OPEN for Nick (added to the "full edit" clash in `open-items.md`). |

## 2. Coverage (110 grep probes over about 95 rule lines; run in the repo with `audit/` excluded)
Sources sampled: live `MEMORY.md` (15 Nov SCRIPT RULES, B-roll, captions, editing, sites, sales), topic notes
`content-system-standing-rules`, `description-rule-no-transcripts`, `content-batch-2026-11-07/-14`, `content-editing-workflow`,
`content-editing-machine-plan`, `split-reel-zoom-rules`, `script-delivery-format`, `hormozi-content-playbook`,
`ed-caption-pattern`, `nick-reply-style-one-line-per-item`, and `rawrules/` (persona, voice, Hormozi, SOP, preferences).

Found in their new home (skill or memory), by grep: night before filming; 3 formats never mixed; tripod; different Figma task
per clip; never a screen recording for B-roll; check posted IG B-rolls; voiceover recorded separately; not "Plumbers, ..." on
all; logical sense start to end; Hormozi checks; B-roll captions above his head; last take ~99%; visual/sound/text hooks;
virality predictor ignored; captions SHORT; "script" for a done video = description; HOOK block; never drop hooks from finals;
"take a look" / "Real faces win real jobs"; "how I" B-roll voiceover; edu never turned into an audit; count vs 14/week; no
tech trivia; desktop 1440; "4.9 stars from 1,624"; Google Lens proof; Tankasaurus; max 1 in 5 asks; posting history in Jev
task; never a transcript; per-type description shapes; no comment word; code block nothing else; all done videos in one go;
no hashtags/emojis; "Working on a plumber's X today"; 2 px outline; 66%; charcoal outline; black gap; below the chin;
phone-only no zooms; one zoom at a time; out before every cut/fast scroll; 2x max; designed paths; Ogborn reference; not
static/sparse; no zoom on slow scrolls; -14 LUFS; mishear fix; never overwrite; .mp4 altered by project files; 25 MB cap;
"Audit N - captions.mp4"; chat 1-2 lines + link; never .md dump; B1:/B2: reply shape; say what did NOT change; no extra
options/tips; 65-80 words; ~25 s audits; copy Ed's style not words; non-plumber flag; B2B audience; no lifestyle talk; avoid
"free"; Jim's OK; tap the number on iPhone; full-site audits DM-only; never set prices; pre-call pack unasked; never build
before Figma approval; United motion standard; no AggregateRating; real Maps screenshot; never black on pink; MX/TXT; 30
Higgsfield credits; sukunda02 only; head height per clip; nick.json; Ed's 16 "me working" reels; 5 hook options; 6 DMs/day
picks; Dropbox; hash check; Krohmer backups; one thread per company; "Antarctic"; "head title"; 100 calls/day; 1080x1440.

| Missing or weak before this review | Fix |
|---|---|
| Letterboxed landscape captions below the video (Edu 4, 15 Nov) - only in memory | FIXED: added to PD Placement |
| Zoom on the opening line until name + reviews show; zoom on head-title text he reads (31 Oct) | FIXED: added to PD Zooms |
| "Claude edits all 14 fully" had no routing row; editing rules were only reachable via "descriptions" | FIXED: CLAUDE.md routing row + PD description now names Nick's editing phrasings |
| No-titles rule (25 Oct) | FIXED (C18) |
| "Questions first and obvious; he skims" (live MEMORY) | Covered by account preferences ("I skim, so lead with the answer"); not duplicated |
| "Site code -> site thread" (live MEMORY) | Covered in substance by PD/CS "one thread per company" and "reuse threads" (preferences); not added |
| Tier-3 PC cleanup list (Hogwarts, NVIDIA, Chrome AI) | Not a rule; Purgatory thread owns it (coverage-memory says so). OPEN only if Nick wants it kept |

## 3. Paths

| Finding | Status |
|---|---|
| All 25 distinct `/mnt/project-files/...` paths tested with ls in this container: all exist in the OLD project. | FIXED: every one in skills, memory and handover now carries "(old project files; may not exist in new project)"; `rules/` files carry the same label once at the top. |
| `/mnt/project-files/jev/jev-usage-log.csv` (VS step 3) does not exist anywhere. | FIXED: VS says it was not found on 16 Nov; create it if missing. |
| `pka-sales-call` and `pka-client-site` depended on SOPs that exist only in old project files (a new-project thread could not read them). | FIXED: copied unchanged to `rules/sop/one-call-close-sop.md` and `rules/sop/plumber-homepage-cro-sop.md` (read in full, no secrets); skills point at the repo copies. |
| Skills pointed at `memory/clients.md`, `memory/open-items.md` (dead after the rename). | FIXED: "project memory `clients.md` / `open-items.md`". |
| `memory/MEMORY.md` pointed at `../handover/open-work.md` (dead once seeded into project memory). Same in `crm-and-jobs.md`. | FIXED: "pk-brain repo file `handover/open-work.md`". |
| `memory/clients.md` had bare relative paths (`v3-build/SEO-LAUNCH-AUDIT.md`, `clients/plumbing-by-paul-v3/README.md`, `designs/.../BUILD-BRIEF.md`, `src/scripts/motion.ts`). | FIXED: made absolute (old project files, both tested) or qualified with repo + branch. |
| `memory/content.md` used `.../content/3-audits/...` and `captions/recipe/README.md` shorthand. | FIXED in the rewrite (full paths, labelled). |
| `memory/open-items.md` `content/README.md` was relative. | FIXED: full old-project path. |
| `rules/voice.md` "Reading Instagram from this PC" (ambiguous in a cloud thread). | FIXED: "from Nick's PC (via Remote Control)". |
| `C:\...` paths are Nick's PC paths, a third kind the brief did not list. Each sits in a "Nick's PC" section or line. | OPEN (by design): kept, labelled by context; they can't be tested from the cloud. |
| Repo-relative paths re-tested after fixes: all exist except `audit/install-log.md` (created at install) and the `<skill>` placeholder. | FIXED / expected. |
| `docs/CONTENT-SCRIPT-JOB.md`, `docs/ROUTINE-PROMPT.md` are in repo ig-lead-machine (stated next to them). | OK, not testable here. |

## 4. Skill mechanics

| Finding | Status |
|---|---|
| All 17 SKILL.md parse as YAML, name = folder, bodies 77-185 lines (< 500). Descriptions: pka-video-scripts 912, pka-client-site 907, pka-post-descriptions 777, pka-sales-call 537, ig-* 181-193 chars (all <= 1,000). | Checked after fixes |
| My first PD description edit broke the YAML (unquoted ": "). Caught by the parse check. | FIXED: description quoted, re-parsed OK |
| ig-* descriptions named "scripts, post descriptions, captions or audits" - topic words that can attract a match. | FIXED: name-only ("Load ONLY when Nick types /ig-x or names ig-x. Never load it by topic"). |
| "audit this site" in pka-video-scripts could collide with SEO audits (claude-seo) and ig-audit. | FIXED: VS description says "a reel audit, not an SEO audit"; ig-audit is name-only. |
| Editing requests ("edit the reels", "cut the footage") matched no description. | FIXED: PD description names them. |
| PD and VS both claim the word "script"; VS excludes finished videos and PD claims them. | OK as written (mutually exclusive). |
| Account skills `client-progress-report` / `progress-sync` (developer's) can fire on "progress"/"report" requests. | FIXED in CLAUDE.md routing (never for Plumber King work unless Nick asks); their descriptions are account-level: OPEN (O3). |

## 5. Secrets
grep for key/token/password/secret/service_role/JWT/AWS/GitHub/Slack/Google key patterns across all files: no secret values
found. Present and fine: env var names (GSC_CREDENTIALS, SITE_URL, PUBLIC_FORM_ENDPOINT), Supabase project ref, GTM id,
Figma file key, trigger and thread ids (identifiers, not credentials). The note that Nick's Downloads holds plaintext
password files names no file and no value. INSTALL secrets check now includes git history and says to name a found key
for rotation without printing it. Status: nothing to remove.

## 6. Nick's standing preferences
| Finding | Status |
|---|---|
| CLAUDE.md said preferences are "not repeated here", then restated 5 of them in different words (done/proven + labels, "can't", one yes/no + chores, passwords, decisions/delivery). | FIXED: removed; Hard rules now hold only additions (STOP applies to all threads + ends Remote Control; "every route" includes Remote Control; no secret values in repo; scheduled jobs don't wait; WFACT untouched; no deadlines/schedules). |
| `memory/people-and-aliases.md` restated ~10 preferences in its own words. | FIXED: points to the account preferences and keeps only the additions (no schedules, STOP scope, max 2-3 open items, B1/B2 reply shape, thread reuse). |
| Reply order (preferences) vs task delivery rules (VS "1-2 lines + link", PD "code block, nothing else"). | OPEN: already FLAGS Open 2; needs Nick. |

## 7. INSTALL.md
| Risk | Status |
|---|---|
| Step 1 expected apple-design, apple-website-checklist, plumberking-site-playbook, which are not in the repo yet -> false failure, likely a question to Nick. | FIXED: note in the log, don't ask Nick. |
| Step 3 copy could overwrite files already in project memory; "say in its README" when no README exists; rename could leave dangling `memory/` references. | FIXED: list first and stop on a name clash; hash compare; `git mv`, create the README, grep and fix references in the same commit. |
| Step 4 double runs: new job enabled + old job enabled across the next :48 / 06:41; manual fire of the daily research job = a second run that day. | FIXED: create disabled if possible; fire 15+ min away from the scheduled minute; switch old off / new on in the same turn; daily research: read the job doc first, if a re-run isn't safe ask Nick one yes/no and switch at the next scheduled run. |
| Step 4 had no CRM thread to fire into in the new project. | FIXED: create or pick it first, log its id. |
| Step 4 "exactly one enabled copy" may be unverifiable across projects. | FIXED: check the old list too, or log that it can't be seen. |
| Step 4 failure path missing (risk of a gap with both off). | FIXED: on two failures keep the old one running, disable the new one, tell Nick. |
| Hourly job "ends silently" when nothing is queued: a silent run proves nothing. | FIXED: pass only if the run shows the pull + queue query. |
| 06:03 scan: step 4 said "ask with the other questions in step 7", i.e. after the move. | FIXED: leave the old scan untouched until Nick answers in step 7. |
| 18 Nov send_later reminder lives in the old project. | FIXED: stated in INSTALL and handover; left there. |
| Step 5 path check said "fix every dead path"; `/mnt/project-files` paths will be dead in the new project, inviting invented paths. | FIXED: keep + label + log them; fix only repo paths. |
| Step 5 coverage spot-check would hit rows moved by this review. | FIXED: points to this file's move log. |
| Handover told Nick to delete `Downloads\_stt-temp` himself (a chore). | FIXED: one yes/no, then Claude deletes it via Remote Control. |
| Step 7 interview could slide into setting his plan. | FIXED: "his plan in his words; never propose dates for him". |

## 8. Move log: rules that were in `memory/content.md`
All rule lines below were already present in a skill (grep-confirmed) unless marked NEW.
| Old content.md rule | New home |
|---|---|
| 3 formats (AUDIT / EDUCATIONAL / B-ROLL definitions) | VS 3 |
| Scripts ready the evening before; never change an approved format the night before | VS 1 |
| Count check vs 14/week | VS 1 |
| HOOK line, own opener, persona voice, max 2 fillers, no AI phrasing | VS 4, VS 5 |
| Edu talking head 65-80 words / 30-35 s; audits ~25 s; B-roll Figma task | VS 3, VS 6 |
| Audit flaw = felt by a plumber, 1-3 by % rule, desktop view, exact facts, no fake/AI claim without proof | VS 7, VS 8 |
| Audit workflow (approved 30 Oct) | VS 8 |
| Delivery: one Claude Doc, per-video fields, chat 1-2 lines + link | VS 9 |
| Plumbers only; odd-detail hooks; rule-line endings, no ask | VS 2, VS 4, VS 7 |
| Descriptions: never a transcript; per-type shapes; no comment word, hashtags, emojis; Audit 8/9/10 shape; all done videos in one go | PD 1-5 |
| Captions: Urbanist, no box, 2 px outline, ~66%, charcoal on bright/pink/white; -14 LUFS | PD Placement, Sound |
| No titles on reels (Nick adds them in IG) | PD "Titles" - NEW (holding rule, open for Nick) |
| Split screen / no-gap below chin / B-roll above head | PD Placement |
| Phone-filmed audits: no zooms | PD Placement |
| Letterboxed landscape: captions below the video | PD Placement - NEW |
| Zooms: one at a time, out before cuts/fast scrolls, ~2x, designed paths, Ogborn reference | PD Zooms |
| Cutting: silences/bad takes, last take ~99%; visual/sound/text hooks, show real work | PD Cutting |
| Never overwrite a file name; hash-verify the PC copy; fix whisper mishears | PD Files, Sound |
Facts kept in `memory/content.md`: posting cadence, nick.json path, used companies/spares/backups, used topics, batch docs,
file locations, editing tools. Moved INTO memory from VS 12: "24/7 at 2 AM" topic; added from the live notes: 7 Nov backups
(Krohmer, Day & Knight, Reeves, The Plumber), first 14 Nov doc B3VrJyUVav24Z634QmFawQ.

## 9. OPEN (needs Nick or the install thread; not fixable in this folder)
- O1: The old-project originals `content/3-audits/AUDIT-STEP-PROMPTS.md` (Jev task "plumbers and HVAC owners", Google "blocked
  from cloud") are still what the hourly CRM content job reads. Nick owns those files; fixing them changes a live job.
- O2: Clashes only Nick can settle stay in `memory/open-items.md` (daily mix 1-1-1 vs 14/week, Saturday calls vs filming,
  openers, description length, sales build timing, fonts, proactivity, dialer, full edit/titles, which 14 Nov "final" is
  current).
- O3: Account skills (`jev-judge`, `client-progress-report`, `progress-sync`) have broad descriptions that load everywhere;
  only CLAUDE.md routing can steer them from this repo.
- O4: Not tested here: whether the Docs connector (script delivery), Supabase connector, Figma MCP and Remote Control exist in
  the new project; whether `create_trigger` can create a job disabled; whether artifacts open from the new project. INSTALL
  steps 1, 4 and 5 test these live.
- O5: `rules/voice.md` names Nick "Nicolas Sukunda"; memory says "Nick (Nicolas) Bennett" (Bennett = business persona,
  sukunda02 = personal IG). Not changed: identity is Nick's to confirm.
- O6: `audit/coverage-*.md` and `audit/FLAGS-content.md` cite `/tmp/...` source paths from the build container; they are
  proof records, not instructions, and will not resolve in the new project.
