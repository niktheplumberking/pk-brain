# Goode Plumbing (Chicago IL): private research report, 2026-10-30
Site goodeplumbing.com (WordPress/Elementor). Sent from the CRM Content page (first automatic run).

## Google (checked from Nick's PC, logged out, 30 Oct)
- Main listing (claimed), 2828 N Clark St STE 315, Chicago IL 60657: 4.8 stars, 2,677 reviews; Open 24 hours; 122 photos (visible ones dated May-Aug 2026, one Nov 2023); owner post Sep 21, 2026; the 5 visible reviews (all 5 stars) all have owner replies (template style, newest a month ago; one reply names the wrong tech).
- Listing phone +1 773-280-8496; the website shows (773) 280-7921 (likely call tracking; not checked).
- Second listing, same name and address, different Plus Code: unclaimed ("Claim this business"), no reviews, no photos.
- NOT CHECKED (needs a Google sign-in): newest-first reviews, reply rate on the newest 20, Q&A.

## Website facts
- Homepage title "Residential And Commercial Plumbing Services In Chicago, IL"; meta description present; H1 "Plumbing Services in Chicagoland, IL" (small text in a dark box over the hero image). Hero image: van + "MODERN PLUMBING / VINTAGE VALUES".
- Phone first screen: logo, hamburger, yellow phone icon, hero with H1 + LEARN MORE, then 4 service tiles. No star rating, no review count, no Google logo on the first screen.
- Desktop first screen: thin yellow top bar "24/7 Emergency Service | 5 black star icons + Read Our Reviews > | Lifetime Guarantee"; "CALL TODAY (773) 280-7921" (tap-to-call), Schedule Online form on the hero. No rating number, no review count, no Google logo anywhere on the homepage (page HTML checked; "13225 reviews" in the HTML is a CSS class name, not a count).
- Homepage reviews: section "Our Reviews / See What Our Clients Say." at y=2,686 of 7,689 px on phone. Slider with 5 dots. Each card: plain quote text + first name and initial (e.g. "Nate H."); no stars, no Google logo, no photo, no date. Reviews page /reviews/: same style cards with 5 stars + first name + initial; no Google logo, no rating total or count.
- Phone: tap-to-call links (773) 280-7921. On mobile the sticky header keeps a yellow phone icon, but it opens a full-screen menu; "CALL | (773) 280-7921" is the second tap. Desktop header phone is tap-to-call and stays on screen after scrolling.
- Service pages name the town (e.g. "Water Heater Repair & Replacement in Chicago, IL", "Professional Sewer Line Services in Chicago, IL"). Service-areas page links individual town pages (Albany Park, Berwyn, Cicero, Des Plaines, Elgin... 20+).
- Forms: homepage Schedule Online form: first name, last name, email, phone, service needed, tell us more + SMS consent box.
- Photos: branded van photos (real vehicles); homepage has "workers holding boxes" image; no owner/team photo found on the homepage.
- Speed (Lighthouse mobile, lab test from the cloud, 3 runs): 30, 28 and 29/100; Largest Contentful Paint 17.2 s, 20.1 s and 15.1 s; the largest element is the top banner (van image + 'Plumbing Services in Chicagoland, IL' + LEARN MORE). Total Blocking Time 1.8-2.0 s. Same setup: chicagoplumbingexperts.com 79 and 81/100, LCP 3.2 s and 2.9 s (its logo); rotorooter.com 43, LCP 4.5 s.

## Ed flaws that apply (verified)
#33 slow load (strong: 28-30/100, top banner after 15-20 s vs about 3 s for another Chicago plumber, same test setup) · #1/#3 no rating, count or Google logo on the homepage (2,677 reviews on Google) · #5 homepage testimonials are plain text with first name + initial, no stars/logo/photo · #2 review section a third of the way down the phone homepage

## Ed flaws that do NOT apply
#11/#12 headline (says what and where) · #26 meta title (good) · #27/#28 (20+ town pages) · #29 (service pages name Chicago) · #14 (24/7 at the top) · #24 (6-field form) · #17/#18 phone (tap-to-call; on mobile the sticky icon opens a menu, call is the 2nd tap) · #7 (real branded vans) · #6 (slider has dots)

## Jev pick (jev-1.14.0, 2 calls, options in both orders; files /mnt/project-files/jev/goode.json, goode-rev.json)
slow_load: 0.64 / 0.73 (runner-up no_review_badge 0.33 / 0.24). PICKED: Ed flaw #33.

## Caveat
The speed numbers are a lab test run from a cloud server, so the absolute seconds are higher than a phone on fast Wi-Fi would see; the comparison site ran in the same setup (3.2 s), so the gap is real. The script says "in my test".
