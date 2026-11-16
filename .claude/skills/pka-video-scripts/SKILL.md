---
name: pka-video-scripts
description: Writes Nick's Instagram reel scripts for Plumber King Agency (plumbers only) - website AUDIT scripts (screen recording of a real plumber's site), EDUCATIONAL talking-head scripts and B-ROLL voiceover scripts, each B-roll with its own Figma task. Use whenever Nick says scripts, script, reel script, batch, weekly batch, weekend scripts, Friday, Friday scripts, audits, audit this site (a reel audit, not an SEO audit), B-roll, b roll, edu, educational, hooks, hook or voiceover, or sends a plumber's link plus a note for an audit. Holds every must-follow rule - three formats never mixed, a unique hook per script, Nick's real spoken voice, lengths, Claude Doc delivery, Hormozi checks, the audit workflow, and scripts ready the night before. Not for the text under a finished video - when Nick says "script" about a video that is already made or posted he means its post description (use pka-post-descriptions).
---

# PKA video scripts

Built only from rules Nick gave. Where two rules clashed, the newest dated one won; every such call is
listed in `audit/FLAGS-content.md`. Order of precedence: Nick's message in the current chat > this skill > the
reference files below.

## Reference files (paths from the repo root)
- `rules/nick-voice-persona.md` - Nick's spoken voice. Read it before writing any script.
- `rules/voice.md` - Instagram house rules.
- `rules/audit/AUDIT-SCRIPT-WORKFLOW.md` - the audit workflow (approved 30 Oct, with Nick's 15:47 rules).
- `rules/audit/AUDIT-STEP-PROMPTS.md` - exact prompts for each audit step.
- `rules/hormozi-principles-for-scripts.md` - the Hormozi rules and checklist.
- `rules/ed-flaw-list.md` - Ed's 36 audit flaws.

If a file is unreadable, say so; never guess.
Where a reference file disagrees with this skill, this skill wins (it holds the newer rule).

## 1. Timing and scope
- Friday (whole day): write ALL scripts for the weekend, plus prep. Nick films ~14 videos on Sat+Sun.
- Every script is FULLY ready the night before filming. Never the morning he records.
- Never set deadlines or schedules for Nick, and never decide for him. Stay on the task in front of you.
- Before writing a weekly batch, check the count against 14 a week (minus days already covered). If the
  request does not add up to that, say so in one line.
- Never change an approved format the night before filming. Use last week's approved formats unless Nick
  changes them himself.

## 2. Plumbers only
- Only plumbing companies. If a business looks sewer-only, septic, drain-only, HVAC or anything else, stop
  and flag it to Nick before researching or scripting it.
- Audience = owners of plumbing companies (B2B), English-speaking US/Canada market. Every reel is about a
  plumber's calls, jobs, money, Google. No lifestyle, no agency inside talk.

## 3. The three formats - keep them separate, never mix them

| Format | What is filmed | Script |
|---|---|---|
| AUDIT | Screen recording of a real plumber's website (desktop view, Nick points with the mouse). Screen recordings are ONLY for audits. | Follows the audit workflow (section 8). |
| EDUCATIONAL | Talking head: Nick teaching straight to camera. | Moment, tip, rule line. Stays talking head; never turned into an audit or a B-roll (not even to chase hook data). |
| B-ROLL | A camera on a tripod, at an angle, filming Nick at his computer doing ONE real Figma task that matches that clip's script. NEVER a screen recording. Voiceover recorded separately and laid over the footage (no pace matching). | Plain "how I" voiceover, e.g. what he is adding to a plumber's site and why. |

B-roll rules:
- Every B-roll script comes with its own specific Figma task, written next to it. A different task per
  clip; never one generic clip reused for all of them.
- The task must match what the script says he is doing.
- For the look, check his posted IG B-rolls (IG reading only via sukunda02, never nick.bennettx).
- Nick has not given a list of example Figma tasks. If the right task for a script is unclear, ask him.

## 4. Hooks
- Every script opens on its own strong hook: a moment, a bold claim or an odd real detail.
- Never the same opener across scripts. Not "Plumbers, ..." on all of them, not "I'm ..." on all of them,
  not "This plumber ..." on all of them.
- The plumber is named or obvious in the first 2 seconds; the strangest real detail first; proof on
  screen by 3 seconds.
- Best hooks so far (Nick's own numbers): a real named site plus an odd, specific quoted detail
  ("Yank The Tankasaurus" 1,005 views). Generic question and list hooks did worst.
- Write 5 hook options per script, keep the best.
- Every script Nick films has a labelled HOOK block on top: visual + on-screen text + spoken first line,
  all different per script. Never drop the HOOK block from "final" versions.
- No gimmick hooks (B2B, not viral/B2C).

## 5. Nick's voice
Read `rules/nick-voice-persona.md` first. If a line would not come out of his mouth naturally, rewrite it.
- Friendly, direct, a bit cheeky: a guy showing a buddy something on his screen, not a presenter.
- His moves: opens on the plumber + the odd thing; reacts and points ("I mean, I'm not joking. Take a
  look."); walks through what he sees ("we have X, then we have Y"); one reaction line ("I mean, come
  on."); the cost through the customer; the fix as advice to a friend ("So why don't you...", "do me a
  favor and..."); ends on a short rhyming rule line ("Real faces win real jobs.").
- His words: "head title" (not headline), "call button", "homeowner", "the next guy", "wanna", "gonna".
- Fillers/reactions: at most 2 per script.
- Medium sentences joined with "and", "so", "because". Talks to "you" (the plumber).
- Never: repeated openers; staccato fragment chains ("No links. Three names. Done."); neat triple lists;
  "Here's the thing", "Let's dive in", "game-changer", "elevate", "seamless", "In today's world";
  utilize, leverage, optimize, solution, ensure; generic "follow for more".
- Plain words, third-grade level. No "CTA", "conversion", "UX" or "SEO" unless explained in the same breath.
- Describe the moment, not the benefit ("2am, water on the kitchen floor..."). Give a "because" reason.
- The script must make logical sense from start to end.
- Ed (@edwin.radd) is the content model: copy his style and structure, never his words.

## 6. Lengths
- Audit: about 25 seconds, under 25 s (N flaws: one short beat per flaw, 4-6 sentences).
- Educational: under 35 seconds, about 65-80 words.
- B-roll: Nick has set no length. Data only (Ed's 16 "me working" reels, 31 Oct): 50-78 word voiceovers
  did better.

## 7. Asks, proof and facts
- Most reels: no ask. Audit reels: never an ask, no CTA. At most 1 reel in 5 has an ask, and only one
  comment word for a free thing that really exists. Avoid the word "free" in posts and first DMs
  (nick.bennettx had a false "asking for money" flag).
- Proof beats promise: show the real site, the real number, the real review count on screen.
- Never invent reviews, quotes, prices, clients, results or numbers. Unknown number: leave
  `{{your number}}` and flag it.
- Check every fact word for word: "4.9 stars from 1,624 reviews", never "1,624 five-star reviews";
  "on their homepage", not "anywhere" if another page shows it.
- Never say photos are fake or AI without proof shown (Google Lens / reverse image).
- Real faces or names in promo content need the owner's consent. United Plumbing (Jim): another agency
  took him on 9 Nov; get Jim's OK before any content showing him.
- Before filming a tap-to-call flaw, Nick must tap the number on his own iPhone (Safari can make a
  non-link number tappable).

## 8. Audit workflow (summary - full detail in `rules/audit/AUDIT-SCRIPT-WORKFLOW.md` and `rules/audit/AUDIT-STEP-PROMPTS.md`)
Input: one link (website, IG or Google) + an optional note from Nick. Steps 1-5 are private; only the final
script is delivered.
1. Research. Desktop view first (1440 px): first screen, head title/H1, meta title + description,
   tap-to-call, buttons + contrast, where reviews sit and whether rating + count show, real vs stock photos,
   form fields, service + town pages, 24/7 wording, speed (local Lighthouse). Record anything broken
   (links, menu, styles not loading, empty fields, missing images). Scroll lazy-loaded pages step by step
   before calling a section empty. Google Business Profile: rating, count, photo dates, owner replies; Google
   Maps worked from the cloud via Playwright (14 Nov); if it fails, read it from Nick's PC via Remote
   Control; if neither works, mark it NOT CHECKED and carry on.
2. Match every applicable flaw from `rules/ed-flaw-list.md`. VERIFIED only, with proof. List what the site
   does well too. Count verified flaws out of 36: under 60% = 1 flaw, 60-75% = 2, over 75% = 3 (Nick may
   override the count).
3. Pick with Jev: a choice question run twice with the options reversed; for N > 1 pick #1, then ask again
   with the picked ones removed. Max 5 Jev calls per task; log them in `/mnt/project-files/jev/jev-usage-log.csv` (`bash rules/jev/jev-call.sh` in pk-brain logs there
   and creates it if missing). Task text
   says plumbers only (not "plumbers and HVAC owners"), filmed as a desktop screen recording, and includes
   Nick's posting history so picks don't repeat a lesson. If Jev can't be reached, test it live first, then
   say so.
4. The flaw must be one a plumber instantly feels costs him customers (faces, calls, reviews), obvious on
   screen within 2 seconds. Never tech trivia (file size, file names).
5. Write privately in plain words first, then the final script: Ed's audit structure (opens on the
   plumber + the number/odd detail, one visual proof, the cost or the fix, a short rule line) in Nick's
   spoken voice. Flaws in the order Nick reaches them on screen, top to bottom. Frame it as how to fix it
   ("here's how I'd fix it"), not just "this site is bad". No insults. No CTA.
6. Fact-check every number and claim against the research, then the screen-match check: walk the desktop
   page top to bottom as Nick will and confirm every sentence is true for what is on screen at that moment.
- Big full-site audits are DM-only for warm leads and are not posted.
- The flaw list is Nick's; he may edit it with you. Don't change the workflow files on your own.

## 9. Delivery
- One clean Claude Doc (Docs connector) for the batch. Never plain text in chat, never a .md or .txt file.
- In the doc: a short contents list at the top, then per script:
  1. Header: number, company name (or topic for educational/B-roll), website (when there is one).
  2. HOOK: visual / on-screen text / spoken first line.
  3. FIGMA TASK (B-roll only): the one real task he does on camera for this clip.
  4. The script (voiceover): one sentence per line, a blank line between beats.
- Nothing else: no research report, no own-words draft, no proof, no notes, no shot lists, camera angles,
  mouse paths, where-to-click steps, recording coaching, beat sheets or scorecards (unless he asks).
- Chat message: 1-2 lines + the doc link.
- When answering about scripts or clips: one sentence per item ("B1: ... B2: ..."), and always say what
  did NOT change so he doesn't redo work. No extra options, no tips he didn't ask for.

## 10. Hormozi checks (run on every script before delivery; source `rules/hormozi-principles-for-scripts.md`)
- [ ] Hook - Retain - Reward: big hook and a real payoff.
- [ ] The plumber (or a plumber situation) is called out in the first 2 s, in a different wording per script.
- [ ] Hook names a specific, visible thing (number, button, review count), not a vague claim.
- [ ] Proof on screen within 3 s.
- [ ] One idea only; every line teaches or moves the story.
- [ ] A "because" reason.
- [ ] A real customer moment.
- [ ] Payoff the WATCHING plumber can use on his own site today.
- [ ] No jargon; read aloud under 25 s (audits) / 35 s (edu).
- [ ] Ask rules from section 7 respected.
- [ ] 5 hook options written, best one picked.
- [ ] "How I" beats "How to" where it fits; works for a stranger who never saw Nick.

## 11. Before you deliver
- Grade every script with an independent subagent for hook, voice and facts.
- Check what Nick already posted (his posting history, e.g. nick.json) and the used list (section 12); never repeat a
  company or topic.
- Ignore the Higgsfield virality predictor; it ranked his reels upside down (14 Nov).

## 12. Already used (do not repeat)
- The full list of used audit companies, unused researched spares and used B-roll/educational topics is in project memory
  `content.md` (facts live in memory, not here). Read it, and Nick's posting history (nick.json, see that file), before
  picking any company or topic. Never repeat one.
- Spares such as United before/after still need Jim's OK (section 7).

## 13. Other skills
- Jake's 13 ig-* skills exist (ig-reel, ig-caption, ig-viral, ig-human and others); remind Nick they're available when working on
  scripting; never apply their hashtag/beat-sheet/comment-ask defaults over these rules.
- If an ig-* tool (hookscore, beats, humanize, detect) is used, run it privately and use it to improve the
  script; don't paste its output unless Nick asks. Ignore hookscore's low marks on audit openers: accuracy
  to the screen comes first.
- Jev: only when needed or asked, max 5 calls per task.
