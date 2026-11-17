# Plumbing By Paul: page-by-page build sheet for Figma (v3, 13 Nov 2026)

For the Figma designer. Build from this file with `DESIGN-SYSTEM.md` (tokens, components, the Livery motif) and `ASSET-LIST.md` (every image with crop). Sitemap, titles and H1s come from `SEO-AEO-GEO-CRO-PLAN.md`. Each of the 13 Figma pages gets a desktop 1440 frame and a mobile 390 frame.

## How to read this file

- **Bg** = section background token. **Archetype** = the layout idea (variety rule 7.1 in the design system). **Depth** = the overlap that section must have.
- **Photo** = file name in `research/photos/best/`. Never swap in another file without checking the page for repeats.
- **21st** = the 21st.dev component that inspires the layout, by URL. Take the structure, recolour to the tokens, ignore the demo palette.
- Lines that start with `>` are **real Google review text, word for word**, typos and all. Do not correct, shorten or reword them. `[…]` marks where whole sentences were left out. Card meta ("a month ago") is Google's relative date as read on 13 Nov 2026 and is refreshed at build.
- **STICKY** = a yellow "Paul to confirm" note placed beside that element in Figma.
- Copy is final unless it sits in [square brackets]. US spelling throughout. The plan's H1 for the Reviews page says "neighbours"; this file uses "neighbors", which is how Paul spells it on his own site.
- Facts used in copy, and only these: Plumbing By Paul LLC · Florida certified plumbing contractor CFC1430367 · LLC since 2015 · family-owned by Paul and Alycia · 4.9 from 947 Google reviews (checked 13 Nov 2026) · Creative Loafing Best of the Bay, Best Plumbing Company 2022, 2023, 2024, 2026 · 5565 64th Way N Suite A, St. Petersburg, FL 33709 · (727) 709-2552 · open every day 8 AM to 5 PM on Google. Paul's own claims (24/7 emergency line, 1-year workmanship warranty, free estimates, bonded and insured) are shown with a STICKY until he confirms. No prices, response times or counts appear unless a customer said them in a quoted review.
- The licence belongs to the company. Copy never says Paul personally holds it.

## Global sticky notes (place once on the Figma cover, and beside each first use)

1. **Hours.** Google says open daily 8 AM to 5 PM. The old site says 24/7 emergency. Design shows "Open 7 days, 8 AM to 5 PM" and "24/7 emergency line" with a STICKY. Paul to confirm which is true.
2. **Warranty.** "1-year workmanship warranty" is Paul's claim on the old site. Confirm the exact terms.
3. **Free estimates.** Old site and Google say free estimates. Confirm it covers every job type, including emergencies.
4. **Bonded and insured.** Their claim. No certificate seen.
5. **Crew names.** Patches use first names from Google reviews. Paul to approve showing them and to match names to faces.
6. **Family photos.** Permission to show Paul and Alycia's son.
7. **Offers.** Financing, first-visit offer, maintenance plan: Paul to decide. Design shows a labelled slot.
8. **Towns.** Which towns he works in every week.
9. **PBP Construction.** Whether the plumbing site mentions the remodel arm. The remodel photos depend on this.
10. **Tankless and hydro jetting.** Whether he installs and services tankless (Trutankless is on his Google profile) and owns a jetter.
11. **Vector logo** from the wrap shop.

---


(Global sections and pages 02-13 cut from this copy. Full file: old project files plumber-king-agency/clients/plumbing-by-paul/plan/PAGES.md, 166 KB.)

# 01. Home `/`

- **Title:** Plumber in St. Petersburg, FL · Plumbing By Paul
- **Meta:** Family-owned St. Pete plumber. 4.9 from 947 Google reviews, licensed (CFC1430367), Best of the Bay 2026. Water heaters, drains, leaks. Call (727) 709-2552.
- **Section order and backgrounds:** hero (mist wash) → router (white) → trust bento (navy) → town band (sky) → services (white) → family (tint) → crew (white) → reviews (tint) → process (white) → emergency (navy + photo) → our work (white) → areas (tint) → FAQ (white) → waterline → footer. 14 content sections.

## H1. Hero
- **Bg:** mist to white wash with flow lines. **Archetype:** split collage. **Depth:** three layers on the right (hero photo, tilted snapshot, seal sticker), the logo tab from the header above, and the estimate bar straddling the bottom edge. A large swoosh crosses the join to the next section, behind the estimate bar.
- **Desktop (760 tall):** left 6 columns, top padding 88: rating pill, H1, lead, two buttons, proof chips in one row that wraps. Right 6 columns: hero frame 588 x 470 (`r-2xl`, corner stripes) with `hero-01`; tilted snapshot 220 x 264, rotated 5 degrees, overlapping the hero frame's bottom-left by 60 px, with `service-tech-kitchen-sink-smiling.jpg`; seal 112 px, rotated -8, on the hero frame's top-right corner; a white caption plate on the hero frame bottom-right: "Paul, Alycia and their son. St. Petersburg." Estimate bar 1200 x 116 centred on the hero's bottom edge (half on, half off).
- **Mobile:** rating pill, H1, lead, call button full width, secondary button full width, then the hero frame 350 x 300 with the snapshot 130 x 156 overlapping its bottom-right and the seal 72 px top-left; proof chips as a horizontal scroll row; the estimate bar becomes the stacked quick estimate card overlapping the hero's bottom edge by 48 px.
- **21st:** https://21st.dev/@felipemenezes098/components/hero-04 (layered photo cards), flow lines from https://21st.dev/@kokonutd/components/background-paths
- **Photos:** `hero-01-family-house-yard-signs-truck.jpg` (main) · `service-tech-kitchen-sink-smiling.jpg` (snapshot)
- **Copy:**
  - Rating pill: 4.9 ★★★★★ 947 Google reviews
  - Eyebrow (above H1, with stripe tick): PLUMBING PINELLAS *with Heart* ("with Heart" in Yellowtail)
  - H1: St. Pete's family plumber, / **for every pipe in the house** (stripe underline under "family plumber")
  - Lead: Leaks, water heaters, drains and everything in between. A licensed, family-owned crew from right here in St. Petersburg, and a real person on the phone when you call.
  - Call button: (727) 709-2552 / Tap to call · Open 7 days
  - Secondary button: Get a free estimate
  - Proof chips: Lic. CFC1430367 · Family-owned since 2015 · Best of the Bay 2026 · Open 7 days · Free estimates
  - Estimate bar: label "Quick estimate" in Russo label · fields "Your name", "Phone", "What's going on?" (dropdown on desktop: Leak / No hot water / Clog or backup / Planning a project / Something else) · button "Call me back" · caption "We call you back. No spam, ever."
- **CRO:** trade + town in the H1, phone as the primary action, the family and the wrapped truck prove "local and real" in the first second, five proofs above the fold, a 3-field form without scrolling.
- **STICKY 6** (son in the photo) · **STICKY 3** (free estimates) · note: the yard sign for PBP Construction is visible in the photo, see STICKY 9.

## H2. Router: "What's going on?"
- **Bg:** white. **Archetype:** rail of four tiles. **Depth:** the tiles' top edge tucks 24 px under the estimate bar's shadow; each tile's arrow circle hangs 10 px outside the tile's bottom-right corner.
- **Desktop (300 tall after the estimate bar):** H2 left in one line with a text link right; four router tiles 282 x 168 in a row.
- **Mobile:** 2 x 2 grid, tiles 167 x 150, heading above.
- **21st:** https://21st.dev/@lavikatiyar/components/service-card (object breaking the card edge: here the arrow circle and the icon)
- **Copy:**
  - Eyebrow: START HERE
  - H2: What's going on / **at your place?**
  - Link: See all services
  - Tile 1: **Something's leaking** · Pipes, faucets, toilets, the water meter. → `/leak-detection`
  - Tile 2: **No hot water** · Repair it or replace it, we'll tell you straight. → `/water-heaters`
  - Tile 3: **Clog or backup** · One slow drain or the whole house. → `/drain-cleaning`
  - Tile 4: **Planning a project** · Repipes, remodels, new fixtures, gas lines. → `/services`
- **CRO:** one tap to the right page for the four reasons people call. Shortens the path for visitors who do not know service names.

## H3. Trust bento: "Why Pinellas calls Paul"
- **Bg:** navy. **Archetype:** bento. **Depth:** the bento's top row rises 40 px out of the navy into the white section above; the warranty seal overlaps two cells; a name patch overlaps the quote cell.
- **Desktop (700 tall):** H2 centred above. Bento 1200 x 470, six cells, 24 px gaps:
  - A (5 cols x 2 rows, white): the water meter reading 0 0 9 4 7, "4.9" in Russo `num-xl` beside five stars, Google G.
  - B (4 cols x 1 row, sky): Best of the Bay.
  - C (3 cols x 1 row, tint): licence.
  - D (4 cols x 1 row, white, photo left 150 wide): family-owned.
  - E (3 cols x 1 row, navy with 1 px sky border): quote, with patch "Phil".
  - F (full width strip, 12 cols x 88 px, tint): warranty line with the "Paul's promise" seal at 112 px overlapping its left end and cell D above.
- **Mobile:** cells stack: A, B, E, C, D, F. A keeps the meter at 5 cells of 44 x 60.
- **21st:** https://21st.dev/@meschacirung/components/features-8 (bento), https://21st.dev/@cipriantitire/components/mechanical-odometer (meter)
- **Photo:** `about-paul-uniform-at-truck-1080.jpg` in cell D (crop to Paul and the mascot on the truck, 150 x 180)
- **Copy:**
  - Eyebrow: WHY PINELLAS CALLS PAUL
  - H2: 947 neighbors can't all be wrong. / **Well, 4.9 stars' worth.**
  - Cell A: meter 947 · "Google reviews · checked 13 Nov 2026" · "4.9 out of 5" · link "Read them all"
  - Cell B: Best of the Bay · Best Plumbing Company · 2022 · 2023 · 2024 · 2026 · "Voted by Creative Loafing Tampa Bay readers"
  - Cell C: Russo label "FLORIDA CERTIFIED PLUMBING CONTRACTOR" · "CFC1430367" in Russo num-m · small: "Look us up at myfloridalicense.com. We'll wait."
  - Cell D: **Family-owned since 2015** · Paul and Alycia run it. Their crew wears the blue shirts.
  - Cell E quote (from Melissa Robinson):
    > We contacted a couple different plumbing companies and got the run around but not with you guys.
    - Meta: Melissa Robinson · Google review · patch "Phil"
  - Cell F: **Paul's promise:** you hear the price before we start, and our work is covered by a 1-year workmanship warranty.
- **CRO:** all five trust assets a competitor cannot copy, in one glance, straight after the first click options. The meter is the page's signature object.
- **STICKY 2** on cell F · **STICKY 5** on the patch.

## H4. Town band
Component G2, placed across the join between H3 and H5.

## H5. Services
- **Bg:** white. **Archetype:** photo card grid. **Depth:** icon medallions overlap each card's photo/body seam; the featured card carries `sh-stripe`; the "more services" panel overlaps the section's bottom edge by 40 px into the tint section below.
- **Desktop (1,000 tall, the one tall section):** H2 left, lead right (split). Grid 3 x 2 of service photo cards 384 x 440. Under it a navy panel 1200 x 132, `r-xl`: Russo label + 8 chip links + offer slot at right.
- **Mobile:** cards in a horizontal scroll rail (300 x 400, peek of the next card), then the navy panel stacked with chips wrapping.
- **21st:** structure from United's services section; card detail from https://21st.dev/@lavikatiyar/components/service-card
- **Photos (one per card):** `service-tankless-water-heater-install.jpg` · `service-tech-at-cleanout.jpg` · `service-sewer-line-trench-pvc.jpg` · `service-tech-under-bath-vanity.jpg` · `hero-05-tech-toilet-repair-pro.jpg` · `fleet-box-truck-rear-three-quarter.jpg`
- **Copy:**
  - Eyebrow: WHAT WE FIX
  - H2: Every pipe in the house. / **And the ones under the yard.**
  - Lead: Homes and businesses across Pinellas. If water or gas runs through it, we work on it.
  - Card 1 (featured): **Water heaters** · No hot water, rusty water or a puddle under the tank. We repair first and replace when it makes sense. · Call about a water heater · See water heaters
  - Card 2: **Drain cleaning** · Kitchen sinks, showers, toilets and main lines. Cleared, then checked so it stays clear. · Call about a drain · See drain cleaning
  - Card 3: **Sewer service** · Backups, root trouble and broken lines, with a camera to show you what we see. · Call about a sewer line · See sewer service
  - Card 4: **Leaks and pipe repair** · From a drip under the vanity to a leak at the meter box. Found and fixed. · Call about a leak · See leak detection
  - Card 5: **Toilets and fixtures** · Running, rocking, clogging or just old. Repairs and new installs. · Call about a toilet · See toilet repair
  - Card 6: **Emergency plumbing** · Burst pipe or sewage coming up? Shut the water off and call us. · Call now · See emergency plumbing
  - Navy panel label: MORE WE DO
  - Chips: Repiping · Clogged drain · Drain camera inspection · Garbage disposal · Gas lines · Water softeners and filtration · Commercial plumbing · General plumbing
  - Offer slot: PAUL'S OFFER GOES HERE
- **CRO:** the most commercial section gets photos of real jobs and a call link on every card. Every service page is one click from home (internal links for SEO).
- **STICKY 7** on the offer slot · photo tag "TANKLESS INSTALL" on card 1 with **STICKY 10**.

## H6. The family behind it
- **Bg:** tint. **Archetype:** split collage (mirror of the hero: photos left, copy right). **Depth:** sky offset block behind the main photo; tilted snapshot overlapping; a Yellowtail signature overlapping the copy column's bottom edge; the navy services panel from H5 hangs into this section's top.
- **Desktop (760 tall):** left 5 columns: framed photo 440 x 560 with `about-paul-alycia-couple-portrait.jpg`, sky offset block 24 px down-left, tilted snapshot 200 x 260 rotated -5 at bottom-right with `about-son-with-gift-roll-truck.jpg`. Right 6 columns: eyebrow, H2, two paragraphs, three short rows each with a stripe tick, a pull line in script, two links.
- **Mobile:** photo first (350 x 400) with the snapshot overlapping bottom-right, then copy.
- **21st:** https://21st.dev/@prebuiltui/components/about (demo "about-section-with-image", screenshot `21st/prebuiltui--about--about-section-with-image.png`) for proportions
- **Photos:** `about-paul-alycia-couple-portrait.jpg` · `about-son-with-gift-roll-truck.jpg`
- **Copy:**
  - Eyebrow: FAMILY-OWNED SINCE 2015
  - H2: We're not just plumbers. / **We're your neighbors.**
  - P1: Plumbing By Paul is Paul and Alycia's company. It started in St. Petersburg in 2015 and it's still run from a shop on 64th Way North, a few minutes from where a lot of you live.
  - P2: Paul likes to say that people rarely tell their friends "they fixed my plumbing." They talk about how they were treated. So that's the part we work hardest on.
  - Row 1: **You talk to us, not a call center.** The office picks up, and they know the crew by name.
  - Row 2: **You know the price first.** We explain the job and the cost before a wrench comes out.
  - Row 3: **We clean up.** Then we leave a small thank-you. You'll see.
  - Script line (Yellowtail, script-l, blue): The plumber you deserve
  - Links: Meet the family and the crew → `/about` · Call (727) 709-2552
- **CRO:** names and faces of the owners, their own best line as the headline, three objections answered (who answers, price, mess).
- **STICKY 6** on the snapshot.

## H7. Who shows up: "The names in our reviews"
- **Bg:** white. **Archetype:** rail (wide photo + patch rail). **Depth:** six name patches pinned along the photo's bottom edge, each overlapping it by half; a quote bubble card rises from the active patch and overlaps the photo.
- **Desktop (780 tall):** H2 centred with lead. Wide framed photo 1200 x 440 (`hero-02`). Along its bottom edge, six patches at 148 x 56, evenly spaced, alternately rotated. Above the first patch (active state), a review card 380 wide overlapping the photo's lower-left. Under the patches: one line of caption and a link.
- **Mobile:** photo 350 x 240, patches in a horizontal scroll rail below it overlapping the photo by 20 px, the active review card full width under the rail.
- **21st:** https://21st.dev/@dhxwhy/components/team-lanyard-rail (badges on a rail), re-skinned as sewn patches
- **Photo:** `hero-02-crew-16-two-trucks.jpg` (crop 1200 x 440 across the standing row, both mascots kept whole)
- **Copy:**
  - Eyebrow: WHO SHOWS UP
  - H2: You'll probably meet / **one of these guys**
  - Lead: Our customers keep naming the same people in their Google reviews. So we sewed the names on.
  - Patches with a count line under each (caption): **Brian** · named in 39+ reviews | **Phil** · 35+ | **Chris** · 25+ | **JR** · 16+ | **Troy** · 15+ | **Noah** · 11+
  - Active card, Brian (from Carrington Cox):
    > Brian is a lifesaver.
    - Meta: Carrington Cox · Google review · water heater
  - Phil (from Brian Peterson):
    > Great company and great staff! Can't say enough about them and we will be recommending them to anyone who needs a plumber! Thanks again Phil!!
    - Meta: Brian Peterson · Google review · Drain cleaning
  - Chris (from Thomas Mcauley):
    > Chris is professional, courteous and an expert at his job! He is a great asset to the company, and I will only request him for any future projects.
    - Meta: Thomas Mcauley · Google review · Shower repair
  - JR (from Kelly Corbett):
    > JR did not disappoint. He arrived on time and did a great job with the project.
    - Meta: Kelly Corbett · Google review · sink installation
  - Troy (from Michele Mary):
    > Marcus and Troy came to my townhome this afternoon and truly saved the day.
    - Meta: Michele Mary · Google review
  - Noah: [quote to be copied from Google before build; show the card with a dashed frame and the label "REVIEW TO PULL: NOAH"]
  - Caption: Counts are from the 170 most relevant Google reviews we read on 13 Nov 2026. The real numbers are higher.
  - Link: Read reviews by technician → `/reviews`
- **CRO:** nobody else in St. Pete can show this. It turns the review count into people and removes the fear of "who is coming to my house".
- **STICKY 5**: the patches are not placed on faces in the photo until Paul matches names to people. Mention counts for JR are approximate.

## H8. Reviews wall
- **Bg:** tint. **Archetype:** review wall. **Depth:** cards in three columns with staggered tops (0, 40, 16 px), the middle column bleeding 32 px past the section's bottom edge under a tint-to-transparent fade; patches overlap card corners; the photo card of the gift roll is tilted 4 degrees and overlaps two review cards.
- **Desktop (900 tall):** left-aligned H2 with the rating pill and link at right. Three columns of 384, six review cards (two navy or white variants mixed: cards 2 and 5 are the navy variant), plus one photo card 384 x 300 in column 3.
- **Mobile:** horizontal snap carousel of cards (310 wide), dots, the roll photo card as the fourth slide.
- **21st:** https://21st.dev/@scrollxui/components/testimonials-with-verticalmarquee (wall, static in Figma), cell mix from https://21st.dev/@uilayout.contact/components/testimonial
- **Photo:** `brand-gift-roll-closeup.jpg` (photo card, caption plate: "The blue roll. Every customer gets one.")
- **Copy:**
  - Eyebrow: REAL GOOGLE REVIEWS
  - H2: They rarely say "they fixed my plumbing." / **They talk about how they were treated.**
  - Link: Read all 947 on Google
  - Card 1, Sheila Cordray · a month ago · Plumbing leak detection, Plumbing pipe repair · patches "Brian" + "Carlton" · highlight "From the office staff down to every single plumber and technician":
    > Truly the best plumbing company I've ever worked with. From the office staff down to every single plumber and technician, each one of them was fantastic. Had a broken pipe and had to repipe the entire house- efficient, professional, timely and affordable. Thank you Brian and Carlton for all your hard work- you guys rock!
  - Card 2 (navy), Phil Every · 8 months ago · toilet replacement, garbage disposal · patches "Chris" + "Steven" · highlight "they cleaned up behind themselves":
    > Plumbing By Paul did a fantastic job replacing my two toilets and garbage disposal today. Chris and Steven did an excellent job! Not only did they haul away the old ones, they cleaned up behind themselves! Would definitely recommend!
  - Card 3, Michele Mary · 3 months ago · leak repair · patches "Marcus" + "Troy" · highlight "their honesty, fairness, and integrity were immediately clear":
    > Marcus and Troy came to my townhome this afternoon and truly saved the day. They were originally meant to be a second opinion, but their honesty, fairness, and integrity were immediately clear. Thank you both for fixing my leak so quickly and thoroughly.
  - Card 4, Ava Andiego · 6 months ago · Toilet repair · patch "JR" · highlight "He told me exactly what I needed":
    > Wow! JR did a fantastic job switching out my ancient toilet. He told me exactly what I needed, gave me great advice, got the product and presto, I was back in business. Plus, he was super nice to deal with. Could not ask for better! A+
  - Card 5 (navy), Dean Johnson · a month ago · Faucet installation, Shower repair · patch "Chris" · highlight "explained everything that he would be doing as well as the cost":
    > Chris showed up exactly on time . He was very professional and explained everything that he would be doing as well as the cost . He stayed all day and completed the job. I would recommend this company to anyone needing plumbing work done . Thank you 🙏 again.
  - Card 6, Kelly Corbett · 3 weeks ago · sink installation · patch "JR":
    > I needed a 2nd sink installed in my office and I choose Plumbing By Paul because of their responsiveness and good reputation. JR did not disappoint. He arrived on time and did a great job with the project. I will definitely use these guys again in the future.
  - Buttons: Read more reviews → `/reviews` · text link "Leave us a Google review"
- **CRO:** real names, real service tags, the technician patch on each. The highlighter does the skimming for the reader (on time, price explained, cleaned up).

## H9. Process: "From first call to fixed"
- **Bg:** white. **Archetype:** pipe-run process. **Depth:** four step cards hang from a drawn pipe by tee fittings; cards alternate 0 and 28 px lower; the gift roll photo (tilted snapshot) overlaps the last card and the section edge.
- **Desktop (720 tall):** centred H2. The pipe runs the full 1200 width at 150 px below the heading with an elbow down at the right end. Four step cards 264 wide. Under the cards an inline row: "Step 1 starts here:" + call button + secondary button.
- **Mobile:** the pipe runs vertically down the left margin, cards stack to its right, each joined by a tee.
- **21st:** https://21st.dev/@chamaac/components/how-it-works (pinned cards joined by a connector), drawn as a pipe
- **Photo:** none in the cards. The last card's corner snapshot reuses no photo from this page: use the seal at 112 px instead, rotated 8 degrees, as a "done" stamp. (The roll photo already appears in H8.)
- **Copy:**
  - Eyebrow: HOW IT WORKS
  - H2: From first call / **to fixed**
  - Step 1: **Call, or send a photo.** A real person at our shop picks up, asks a few questions and books you in.
    - Proof line: "I called Paul and they answered on the first ring." James Douglas
  - Step 2: **We tell you who's coming.** You'll know when to expect us and who's knocking.
    - Proof line: "We got a text the morning of install keeping us informed of the Techs arrival." Daniel Herzog
  - Step 3: **You hear the price first.** We look, explain what's wrong in plain words and give you the cost before any work starts.
    - Proof line: "He was very professional and explained everything that he would be doing as well as the cost ." Dean Johnson
  - Step 4: **Fixed, tested, cleaned up.** We run the water, wipe our footprints and leave you a blue roll to say thanks.
    - Proof line: "Not only did they haul away the old ones, they cleaned up behind themselves!" Phil Every
  - Inline row: Step 1 starts here: · (727) 709-2552 · Get a free estimate
- **CRO:** every promise carries a customer's words (variety rule 8), so the process reads as proven habit, not marketing.
- **STICKY:** Paul to confirm that a heads-up text before arrival (step 2) is standard on every job.
- Designer note: the four proof lines are exact fragments of the Google reviews in `REVIEWS.md` (items 7, 27, 22, 3). Keep the punctuation as written, including the space before the period in Dean Johnson's line.

## H10. Emergency band
- **Bg:** navy over a full-bleed photo with scrim. **Archetype:** full-bleed photo band + spotlight quote. **Depth:** a large swoosh crosses the top join; the spotlight review card (white) overlaps the bottom edge by 56 px into the next section; patch "Phil" on the card.
- **Desktop (640 tall):** photo fills the right 60%, scrim from the left. Left 6 columns: eyebrow with live dot, H2, lead, call button (sky on navy), three short rows. Right, lower: spotlight review card 520 wide.
- **Mobile:** photo as a 240 px top strip under scrim, copy on navy, call button full width, review card overlapping the bottom edge.
- **21st:** https://21st.dev/@olewandowski1/components/testimonials-2 (single quote with fact cells)
- **Photo:** `fleet-van-street-4284px.jpg` (crop to the van and the wet street, van at right third)
- **Copy:**
  - Eyebrow: WATER WHERE IT SHOULDN'T BE?
  - H2: Shut off the water. / **Then call Paul.**
  - Lead: Burst pipe, sewage backing up, a water heater letting go. Don't wait and see. The sooner we know, the less it costs you.
  - Call button: (727) 709-2552 / 24/7 emergency line
  - Row 1: Your main shut-off is usually outside, near the water meter. Turn it clockwise until it stops.
  - Row 2: Water near outlets or the breaker panel? Stay clear of it and tell us when you call.
  - Row 3: Link: What to do in the first five minutes → `/emergency-plumbing`
  - Spotlight card (James Douglas · 5 months ago · Plumbing leak repair · patch "Phil"):
    > I had a leak in copper pipe on a very tricky area. I called Paul and they answered on the first ring. Great attitude on the phone and very helpful. Phil was here within the hour and fixed it in under an hour.
    - Fact cells (words taken from the quote): "answered on the first ring" · "here within the hour" · "fixed it in under an hour"
- **CRO:** the urgent visitor gets one instruction and one number. The response-time claim comes from a customer, not from us.
- **STICKY 1** on "24/7 emergency line". Row 1 and 2 are from Paul's own FAQ.

## H11. Our work
- **Bg:** white. **Archetype:** bento gallery. **Depth:** one sky stat tile breaks the photo grid; caption plates overlap photo corners; the tall centre photo rises 40 px above the grid's top line.
- **Desktop (720 tall):** H2 left, link right. Five-cell bento 1200 x 480: tall centre (384 x 520), two stacked cells each side (384 x 228). The lower-right cell is the sky stat tile.
- **Mobile:** 2-column masonry, the stat tile full width in the middle.
- **21st:** https://21st.dev/@ravikatiyar162/components/bento-gallery
- **Photos:** centre `service-tech-digging-with-van.jpg` · left top `remodel-finished-vanity-2048.jpg` · left bottom `service-two-techs-vanity-install.jpg` · right top `remodel-teal-tile-tub.jpg`
- **Copy:**
  - Eyebrow: LATELY
  - H2: Real jobs, / **real Pinellas homes**
  - Link: See more of our work → `/our-work`
  - Captions: "Digging for a line repair, truck out front." · "New vanity, plumbed and finished." · "Two of the crew on a vanity install." · "Tub and tile, finished."
  - Stat tile (sky, navy text): Russo num-l "740" · "posts on our Instagram. We show our work." · link "@plumbingbypaulllc"
- **CRO:** unpolished, real job photos are the proof stock photos cannot give. Links to the gallery page.
- **STICKY 9** (the vanity and tub photos are remodel work) · the Instagram post count (740) was read 13 Nov 2026; refresh at build.

## H12. Areas: "All of Pinellas"
- **Bg:** tint. **Archetype:** map + chips. **Depth:** the county map sits in a white card that overlaps the section's top edge by 40 px; the seal is the pin on St. Petersburg and overlaps the map edge; a small framed photo overlaps the map card's bottom-right corner.
- **Desktop (700 tall):** left 6 columns: white card 588 x 560 holding an SVG of Pinellas County (one shape per town, tint fills, St. Petersburg, Clearwater and Seminole in sky, hairline outlines, Tampa Bay and the Gulf labelled in caption). Right 5 columns: eyebrow, H2, lead, town chips, the shop address row, button.
- **Mobile:** copy, then the map card 350 x 380, chips in a wrap below.
- **21st:** https://21st.dev/@shadcnmaps/components/nicaragua-map (region SVG map pattern)
- **Photo:** `fleet-aerial-van-jobsite.jpg` (220 x 150 framed, caption plate "One of ours, on a waterfront job.")
- **Copy:**
  - Eyebrow: WHERE WE WORK
  - H2: Based in St. Pete. / **Out all over Pinellas.**
  - Lead: Our shop is at 5565 64th Way North in St. Petersburg. From there the trucks cover the county, from the beaches to the bay.
  - Chips (linked): St. Petersburg · Clearwater · Seminole
  - Chips (not linked yet): Largo · Pinellas Park · Gulfport · St. Pete Beach · Treasure Island · Madeira Beach · Dunedin · Palm Harbor · Safety Harbor · Kenneth City
  - Row: map-pin icon · "Not sure if we come to you? Call and ask. The answer is usually yes."
  - Button (secondary): See all service areas
- **CRO / SEO:** a real map and the real address feed the Google Business Profile. Links only to towns with real pages (no doorway pages).
- **STICKY 8.**

## H13. FAQ
- **Bg:** white. **Archetype:** sticky column + accordion. **Depth:** the help card in the left column has the 112 px seal overlapping its top edge; the open accordion item carries the inset bar.
- **Desktop (760 tall):** left 4 columns sticky: eyebrow, H2, lead, navy help card. Right 7 columns: six accordion items, the first open.
- **Mobile:** heading, accordion, then the help card.
- **21st:** https://21st.dev/@kokonutd/components/faq-with-categories
- **Copy:**
  - Eyebrow: GOOD QUESTIONS
  - H2: Things people ask / **before they call**
  - Lead: Straight answers. If yours isn't here, ask the office.
  - Help card (navy): **Rather just ask a person?** · The office is open every day, 8 AM to 5 PM. · Call (727) 709-2552
  - 01 [Pricing] **How much does a plumber cost in St. Petersburg?** It depends on the job, and we tell you the price before we start. Estimates are free. Call (727) 709-2552, describe what you see, and we'll give you an honest idea of what it involves. [Paul to supply typical ranges for the common jobs.]
  - 02 [Trust] **Are you licensed and insured?** Yes. Plumbing By Paul LLC is a Florida certified plumbing contractor, licence CFC1430367, and has been in business since 2015. You can check the licence yourself at myfloridalicense.com. We are also bonded and insured.
  - 03 [Emergency] **Do you come out for emergencies?** Yes. For a burst pipe, a sewer backup or a failed water heater, call (727) 709-2552 right away. Shut off the water at the main valve near your meter first if you can do it safely.
  - 04 [Area] **Which areas do you cover?** We work across Pinellas County from our shop in St. Petersburg, including Clearwater and Seminole. If you're not sure whether we come to you, call and ask.
  - 05 [Warranty] **Do you guarantee your work?** Yes. Our work comes with a 1-year workmanship warranty. If something we fixed isn't right, call the office and we come back.
  - 06 [Service] **Do you work on businesses as well as homes?** Yes. The trucks say "Commercial and Residential" for a reason. Recent jobs in our reviews include an office and a church hall.
  - Link under the list: All plumbing FAQs → `/faq`
- **CRO / AEO:** each answer opens with the direct answer in bold weight so it can be lifted into an AI answer. FAQPage schema for these six only.
- **STICKY 1** (03) · **STICKY 2** (05) · **STICKY 3** (01) · **STICKY 4** (02) · price ranges from Paul (01).

## H14. Waterline CTA
Component G3 with the default copy.

## H15. Footer
Component G4.

- **Home photo check (no repeats):** hero-01 · service-tech-kitchen-sink-smiling · about-paul-uniform-at-truck-1080 · service-tankless-water-heater-install · service-tech-at-cleanout · service-sewer-line-trench-pvc · service-tech-under-bath-vanity · hero-05 · fleet-box-truck-rear-three-quarter · about-paul-alycia-couple-portrait · about-son-with-gift-roll-truck · hero-02 · brand-gift-roll-closeup · fleet-van-street-4284px · service-tech-digging-with-van · remodel-finished-vanity-2048 · service-two-techs-vanity-install · remodel-teal-tile-tub · fleet-aerial-van-jobsite. 19 photos, all different.

---

