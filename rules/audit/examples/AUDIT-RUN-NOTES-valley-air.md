# Valley Air run (2026-10-30): quality reference, Jev call details, what failed

## Approved final script (Nick 2026-10-30 14:33: "beautiful, perfect script")
Step 5a (my voice): I'd open on their Google profile and say: "This company has 1,624 Google reviews at 4.9 stars, and when you land on their website the first thing you see is a Trane ad, and the biggest buttons ask you for a review." Then the lesson: "If you've earned the reviews, put the stars and the number on your first screen, because a homeowner decides whether to trust you before they scroll."
Step 5b (Ed voice, after fact-check): "This company has 1,624 Google reviews at 4.9 stars, and you won't see that number anywhere on their homepage. I mean, look at this: first thing you see is a Trane ad, and the two biggest buttons are asking you for a review. You've done the hard work earning those, so put the stars and the number right at the top. Show them off."

## Mini report sent to Nick (step 4)
Valley Air: Jev's pick is Ed flaw #3, no review badge on the first screen (Jev 0.93, and 0.89 with the order reversed; runner-up slow load 0.06).
- Google: 4.9 stars from 1,624 reviews (not the 700 Nick had). A second listing in Mt Crawford has 72.
- Homepage first screen: a Trane rebate ad. No star rating or review count anywhere on the homepage; the 1,623 count only shows on their Reviews page.
- Desktop top bar: the two biggest buttons say "Review our location".
Passed: real team photos, tap-to-call and sticky phone, headline + page title say what and where. Not checked: Google posts, Q&A, replies to the newest reviews (needs a sign-in).
Full private report: reports/2026-10-30-valley-air.md

## How Jev was called
- Endpoint POST https://api.typesafe.ai/v1/systemone; model "jev-latest" (the server answered jev-1.14.0 on 2026-10-30). Request files: /mnt/project-files/jev/valley.json and valley-rev.json (same, with criteria reversed). Answer: {"pick":{"type":"choice","choice":"no_review_badge","confidence":0.92,"probabilities":{"no_review_badge":0.93,"slow_load":0.06,...}}} and 0.89 reversed.
- The key only works from the cloud env where api.typesafe.ai is allowed (the "JEV" env; the proxy adds the auth header, no key in code). This thread's env got 403. The calls were relayed by the "Test Jev connection" thread (cmsg_01JcVwzrWUQdguS5Ff2vqQcwQXajXdfsm6tdpcKaYSrW3z) with bash /mnt/project-files/jev/jev-call.sh <file>; logged in /mnt/project-files/jev/jev-usage-log.csv.

## What failed and how it was fixed
1. Google Maps from cloud Playwright: "limited view", place pages empty; google.com/search: "unusual traffic" captcha. FIX: Remote Control session on Nick's PC (DESKTOP-3FA292L, folder C:\Users\nicol\Downloads) ran logged-out Chrome via Playwright and read both listings. Logged out it still can't sort reviews, or see posts or Q&A. Output: Downloads\audit-research\valley-air-gbp.md.
2. Google PageSpeed API (keyless): daily quota exceeded. FIX: local Lighthouse 12 (npm i lighthouse@12) with CHROME_PATH=/opt/pw-browsers/chromium (the folder path, not chromium-1243/...); ran a comparison site in the same setup (Cox 73 vs Valley 24-26).
3. The review count looked missing (homepage text has no count). FIX: watched network responses for cdn.trustindex.io: the reviews-page widget content.html holds "4.9 / 1623 reviews"; richsnippet.json holds ratingCount. The Google listing confirmed 1,624.
4. My earlier wrong claim, "no reviews on the homepage": review cards exist at y=4,928/10,450 px (lazy loaded, no rating/count header). FIX: scroll and screenshot the section before judging; the claim became "no rating or count on the homepage".
5. Script overstatement caught in review: "1,624 five-star reviews" changed to "1,624 Google reviews at 4.9 stars". Step 6 (fact-check) exists for this.
6. Cookie consent box covers the page on load: click "ACCEPT" before screenshots.
