# Audit script workflow (approved by Nick 2026-10-30, proven on Valley Air)
> Paths starting `/mnt/project-files/` in this file are old project files; they may not exist in the new project.
> Outdated lines (skill `pka-video-scripts` section 8 wins): "the cloud is blocked by Google" (Google Maps works from the
> cloud via Playwright since 14 Nov; PC is the fallback); "REPORT to Nick" (the report stays private, only the script is
> delivered); "3-4 sentences, about 15-20 seconds" (now 4-6 sentences, under 25 s); "in Ed's voice" (Ed's structure, Nick's
> spoken voice). Nick's original text is kept unchanged below.
Input: one link (website, IG, or Google) + optional note from Nick. Output: the picked flaw, a short summary, and a 3-4 sentence script in Ed's voice that Nick says in his own words.

1. RESEARCH (private, saved to /mnt/project-files/plumber-king-agency/content/3-audits/reports/<date>-<business>.md)
   - Website on desktop (1440): first screen, headline/H1, meta title + description, tap-to-call, buttons + contrast, reviews (where on the page, rating/count shown?), photos (real or stock), forms (field count), service pages + towns, location pages, 24/7 wording, speed (local Lighthouse mobile, compare to a known site).
   - Google Business Profile (from Nick's PC via Remote Control; the cloud is blocked by Google): rating, review count, photo dates, owner replies, posts. A second listing if there is one.
   - Socials linked from the site. The business's own review widget often holds the true count (e.g. Trustindex).
2. MATCH every applicable flaw from rules/ed-flaw-list.md. Only VERIFIED ones; also list what they do well (so we never claim a flaw that is false).
3. JEV PICK: one choice question, the verified flaws as options with facts in the state; run twice with the options reversed (2 calls). Take the winner when both runs agree.
4. REPORT to Nick, short: business, the flaw (Ed #), 3 proof bullets, what was not checkable.
5. SCRIPT, two steps:
   a) "How I'd say it": 2 sentences: the fact that exposes the flaw (with the real number) + the lesson for every plumber watching.
   b) "Ed's voice": rewrite as Ed: "This company has X...", "I mean, look at this:", one visual proof, "You've done the hard work...", ends on a short rule ("Show them off."). 3-4 sentences, about 15-20 seconds, no CTA.
6. FACT-CHECK every number and word in the script against the report before sending (e.g. "1,624 reviews at 4.9 stars", NOT "1,624 five-star reviews"; "on their homepage", not "anywhere").

Example (Valley Air): "This company has 1,624 Google reviews at 4.9 stars, and you won't see that number anywhere on their homepage. I mean, look at this: first thing you see is a Trane ad, and the two biggest buttons are asking you for a review. You've done the hard work earning those, so put the stars and the number right at the top. Show them off."

Lesson (Sam's, 2026-10-30): a phone number that is "not a link" in the code can still be tappable on iPhone, because Safari auto-detects numbers unless the page has <meta name="format-detection" content="telephone=no">. Always tell Nick to tap it on his own phone before filming a tap-to-call flaw.

## RULES ADDED BY NICK 2026-10-30 15:47 (override anything above)
1. DESKTOP VIEW ALWAYS. Nick films the audit as a desktop screen recording (OBS) and points with the mouse. Judge every flaw as it looks on a desktop browser (1440 px). Phone-only flaws only count if they are also visible on desktop.
2. HOW MANY FLAWS: count the verified Ed flaws (out of 36). Under 60% -> Jev picks 1. 60-75% -> Jev picks 2. Over 75% -> Jev picks the 3 most critical and most obvious to someone watching a reel. Nick can override the count (e.g. "100%, pick 3").
3. LOOK FOR ANYTHING BROKEN too (broken links, broken menu, styling not loading, empty fields, missing images), not only the Ed list.
4. SCREEN-MATCH CHECK before sending: walk through the desktop page in order as Nick would (top to bottom, mouse on each thing) and check every sentence matches what is on screen at that moment. Never say something the viewer can see is false (e.g. "the only button is further down" when a Call now button is right there). Order the flaws in the script in the order Nick will reach them on screen.
5. Ed sometimes covers 2-3 flaws in one video; same short sentences, one beat per flaw, ending on a rule.

GOLD STANDARD (Nick 2026-10-30 15:55: "now we're talking, this is the perfect workflow for all scripts"): the Sam's Plumbing round 2 output in /mnt/project-files/plumber-king-agency/content/3-audits/reports/2026-10-30-sams-plumbing.md: 3 flaws in screen order, Ed voice, honest Jev numbers, no false on-screen claims. Improve script by script from Nick's feedback.
