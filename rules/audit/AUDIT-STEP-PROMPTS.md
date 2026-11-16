# Exact prompts for each step (UPDATED 2026-10-30 15:50 with Nick's desktop + 1-3 flaw rules; see AUDIT-SCRIPT-WORKFLOW.md "RULES ADDED") of the audit script workflow (for CRM automation)
> Paths starting `/mnt/project-files/` in this file are old project files; they may not exist in the new project.
> Outdated lines (skill `pka-video-scripts` section 8 wins): "plumbers and HVAC owners" in the Step 3 Jev task (plumbers
> only); "Google Maps/Search are blocked/limited from cloud" (works via Playwright since 14 Nov; PC is the fallback); Step 4
> "short report to Nick" (stays private). Nick's original text is kept unchanged below.
Inputs: {link}, {note}. Files: rules/ed-flaw-list.md, rules/audit/AUDIT-SCRIPT-WORKFLOW.md. Example of good output: /mnt/project-files/plumber-king-agency/content/3-audits/reports/2026-10-30-valley-air.md.
Known limits (tested 2026-10-30): Google Maps/Search are blocked/limited from cloud, so read the GBP from Nick's PC via Remote Control (logged-out view: rating, count, photo dates, 5 reviews; posts/Q&A/newest-sort need a sign-in). Jev only from the "JEV" cloud env. Google PSI keyless quota is often exhausted, so use local Lighthouse (CHROME_PATH=/opt/pw-browsers/chromium).

## Step 1: research (Claude session, tools: Playwright, Lighthouse, web fetch, PC Remote Control for Google)
"Research the business at {link} (Nick's note: {note}). Facts only, every fact from a page you opened or a measurement you ran; unknown stays unknown. Find the website, the Google Business Profile(s) and the socials. Check: on 1440 px: first screen contents, headline/H1, meta title + description, tap-to-call links, CTA button contrast, where reviews sit on the homepage (px from top / total) and whether a rating + count is shown, real vs stock photos (file names, team page), contact/booking form field counts, service pages and whether their title/H1 name a town, individual location pages, 24/7/emergency wording and its size, page speed (Lighthouse mobile score + LCP, plus one comparison site). Google: rating, review count, photo count + newest dates, owner replies in the visible reviews, any second listing. The site's own review widget (e.g. Trustindex) often holds the true count. Write the report in the shape of /mnt/project-files/plumber-king-agency/content/3-audits/reports/2026-10-30-valley-air.md: Google, Website facts, 'Ed flaws that apply (verified)', 'Ed flaws that do NOT apply', 'NOT CHECKED'."

## Step 2: flaw match (Claude)
"Using the report and rules/ed-flaw-list.md (36 flaws), list every flaw number that is VERIFIED true for this business, each with a one-line fact and its proof (URL, measurement or screenshot). List the strong points that rule flaws out. Never include a flaw that rests on a guess."

## Step 3: Jev pick (POST https://api.typesafe.ai/v1/systemone, model jev-latest, 2 calls)
Body: {"model":"jev-latest","state":{"task":"Pick the ONE website/Google flaw that makes the strongest short Instagram audit video aimed at plumbers and HVAC owners (B2B): obvious on screen within 2 seconds, clearly costs this business calls, and fully proven by the facts below.","business":"<name, city, Google rating + count, strong points>","verified_flaws":{"<key>":"<fact>"}},"questions":{"pick":{"type":"choice","instructions":"Which single verified flaw makes the strongest audit video for this business, given the task?","criteria":{"<key>":"<short label>"}}}}
Run again with the criteria in reverse order. Accept when both runs pick the same key; if they differ, take the higher average probability and say it was split. Log both calls in jev-usage-log.csv. Real example: /mnt/project-files/jev/valley.json + valley-rev.json -> no_review_badge 0.93 / 0.89.

## Step 4: short report to Nick (Claude)
"Write: '<Business>: Jev's pick is Ed flaw #N, <flaw in plain words>' + the Jev numbers in one line; then 3 proof bullets (the numbers, what is on screen); one line on what they do well; one line on what could not be checked. Plain English, no jargon, under 120 words."

## Step 5a: how I'd say it (Claude)
"In 2 sentences, say how you would open this audit video: sentence 1 = the hard fact that exposes the flaw, with the real number and what the viewer sees on screen; sentence 2 = the lesson every plumber watching can apply to their own business. Speak as a professional who audits plumber websites, not as a critic."

## Step 5b: Ed's voice (Claude)
"Rewrite that in Ed's (@edwin.radd) voice. His pattern, from his 33 audit reels: opens 'This plumber/company has <number>...' or 'Look at this plumber's site'; 'I mean, look at this:' then one visual proof; short spoken sentences; names the thing exactly; one sentence on the cost or the obvious fix ('You've done the hard work earning those, so put the stars and the number right at the top.'); ends on a 2-4 word rule ('Show them off.', 'Clear beats clever.'). 3-4 sentences, 15-20 seconds spoken, no call to action, no insults, never names a fact that isn't in the report."

## Step 6: fact-check (Claude, or Jev noul per claim)
"Check every number and claim in the script against the report. Fix wording that overstates: '1,624 reviews at 4.9 stars', never '1,624 five-star reviews'; 'on their homepage', never 'anywhere' if another page shows it. Return the final script only after every claim passes."


## UPDATES 2026-10-30 15:50 (apply on top of the steps above)
- Step 1: judge everything on DESKTOP (1440 px) first; also record network failures (style/script files failing), broken links, and anything that looks broken. Screenshot the desktop first screen and each section in scroll order.
- Step 2: also output the count: verified Ed flaws / 36 as a percent. N = 1 if under 60%, 2 if 60-75%, 3 if over 75% (Nick may override).
- Step 3 (Jev): same choice question, task text says "filmed as a DESKTOP screen recording where the presenter points the mouse at each flaw" and "the top N will be used together". Rank by the average probability over the 2 runs and take the top N.
- Step 5b (Ed voice, N flaws): one short beat per flaw, in the order they appear on screen top to bottom, then one closing rule. 4-6 sentences, under 25 seconds.
- NEW Step 6b, screen-match check: "Walk the desktop page top to bottom as the presenter will, mouse on each item. For each sentence, confirm it is true for what is on screen at that moment. Remove or reword any sentence the viewer could see is false. Return the final script only."
- Step 3 lesson (Sam's, 2026-10-30): when one flaw dominates (0.99), a single choice question can't rank the rest (all 0.0). For N>1, pick #1 with the 2-run choice, then ask again with the chosen flaws removed ("pick the next flaw to add"), one call per extra flaw. Keep the total at 5 calls or fewer per task.
