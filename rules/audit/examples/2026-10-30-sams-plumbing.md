# Sam's Plumbing LLC (Guntown MS): private research report, 2026-10-30
Site samsplumbingllc.com (SpotOn builder; 3 pages: Home, Services, Contact). Facebook link in the site = generic http://www.facebook.com (goes nowhere specific).

## Google (Nick's PC, logged out)
"Sams Plumbing LLC", 4.3 stars, 6 reviews (five 5-star, one 1-star). Plumber. 158 Dr 1101 Guntown MS 38849. Mon-Fri 6-6, closed weekends. Links to the site; phone matches. 1 photo only (logo graphic, Oct 2025, by the business). No posts. Newest readable review about 2 years old. 1-star (3 yrs ago: emergency line "attitude", waited all night, nobody came) has NO owner reply; none of the 5 readable reviews have replies. No second listing found.
NOT CHECKED: 6th review, exact dates, Q&A, service area (need a sign-in).

## Website facts
- Title "Sam's Plumbing, Guntown, Mississippi | Home | Sam's Plumbing"; description fine (services + phone).
- No H1. First heading "Welcome", then "662 - 401 - 6383" (plain text, NOT a link), then "Servicing all of North MS" over a marble/kitchen photo.
- Only tap link: "Call now" button starting just below the first iPhone screen (y 991 on 844); not visible further down (no sticky phone).
- Homepage ~133 words. One real photo: owner by his van with a Moen box (about screen 3).
- 0 mentions of review, Google, emergency, 24/7, licensed, insured.
- Services page: stock images (unsplash/pexels names, "heating-706945_1920.jpg" = German Junkers unit with a "Hinweis" sticker); 6 services each with an empty "Repair Cost:" line.
- Contact page form: 4 fields (fine). No form on the homepage.
- Lighthouse mobile 31/100 (lab; LCP 27 s looks like a lab artefact; 4.6 MB page, 1.1 MB Font Awesome script). Not used as a claim.

## Ed flaws that apply (verified)
#11 "Welcome" headline · #17/#19 big number not tappable · #18 no sticky phone · #1 no reviews on site · #31 Google profile inactive · #32 only a logo photo · #7 stock photos (services page) · #14 no emergency message · #16 thin homepage · #23 no homepage form · #30/#27/#28 no service or town pages
## Not on Ed's list but notable
Empty "Repair Cost:" fields (template left unfinished); broken Facebook link.

## Jev pick (jev-1.14.0, 2 calls, both orders)
number_not_tappable 0.82 / 0.87 (runner-up gbp_inactive 0.09 / 0.06). PICKED: Ed #17 (+#18).
CAVEAT: the page has no format-detection meta, so iPhone Safari MAY auto-link the plain-text number. Code fact: it is not a link. Nick must tap it on his own phone before filming; if it rings, fall back to the runner-up (Google profile inactive).

## ROUND 2 (Nick's new rules, desktop, 3 flaws, Nick set 100%)
Desktop at 15:48 UTC: every SpotOn CDN style/script file returns 403 Forbidden (checked from 5 countries via check-host), so the page renders unstyled: menu as plain bullet lists twice, a grey "Close" button, no hero image, grey number on blue. At 15:25 the phone view was still styled, so this may be a recent or temporary outage.
Jev (5 calls total for Sam's): site_broken 0.99 / 1.0; then grey_number (0.01, only other non-zero); third pick welcome_headline 0.41 vs stock_photos 0.32 vs no_reviews 0.26 (weak, single run).
Final 3, in screen order: broken layout -> "Welcome" headline -> grey, unclickable number. The Call now button IS visible on the first screen, so it is not claimed missing.
