# Plumbing By Paul v3: independent design review

Reviewer: separate Claude instance (same vendor as the builder: label this as a same-vendor review). Read-only. Date: 13 Nov 2026.
Inputs: every PNG in this folder, viewed in full as vertical slices (desktop 1440 px wide in 2,200 px slices, mobile 390 px in 1,700 px columns), plus `plan/DESIGN-SYSTEM.md`, `plan/SEO-AEO-GEO-CRO-PLAN.md` §4/§8/§9, `research/brand/FACTS-CHECK.md`, `research/brand/BRAND-AUDIT.md` and `research/reviews/REVIEWS.md`.
Method extras: an automated pixel scan for white text on sky #61ADCB across all 32 frames (any white stroke with sky on both sides). Every hit was then checked by eye. The y values are frame pixels (1x). Desktop x values are given where they matter.

NOT COVERED: Figma layer inspection (font names, hex values in styles). Fonts and colours were judged from the renders: Montserrat, Russo One for numerals and labels, Yellowtail for script words, and the real logo PNG all appear correct on every page. The review text was compared word for word only for the quotes listed below, not for all ~60 quotes. The design has no hover, focus or interaction states, so none were checked.

## Summary

| Severity | Count |
|---|---|
| Blocker | 9 |
| Major | 27 |
| Minor | 25 |

What holds up: the global system is consistent and on brand. Header, top bar, footer card, final CTA (form + phone + trust chips), button styles, eyebrow-with-stripe, two-tone H2s and the pipe/stripe motifs are the same on every page. I found no orange, coral, red or teal UI colour and no retyped logo. On the 9 service, town and area pages the phone is the primary button above the fold. The palette and type direction answer the owner's earlier rejections.

What fails: (1) the banned **white-on-sky** pair is used for headline text on 6 pages. (2) **No yellow "Paul to confirm" notes exist anywhere**, although the design system defines them (`sticky` #FFF3A6). Unverified claims (1-year warranty, 24/7 emergency, bonded and insured, local permit facts, lifespans, towns served, crew identities) are presented as fact. (3) Our Work and the Clearwater town page are 35-45% placeholder boxes.

## Blockers

| Page | D/M | Severity | Issue | Exact location | Suggested fix |
|---|---|---|---|---|---|
| 03 Water heaters | Desktop | Blocker | H2 is white on sky #61ADCB: "Pinellas homeowner should know" (2.52:1, a banned pair) | Local knowledge band, H2, y≈5990-6090 | Make the band tint #E8F3F8 with navy/blue H2, or keep sky and set the H2 navy (7.30:1) |
| 03 Water heaters | Mobile | Blocker | Same white-on-sky H2, 4 lines of it | Local knowledge, y≈7780-7880 | Same as desktop |
| 04 Drain cleaning | Desktop | Blocker | "You'll know the number before we start." in white on sky | What it costs band, lead/H2 line 2, y≈5320-5400 | Set it navy bold, or put the band on navy and use sky for the highlight |
| 04 Drain cleaning | Mobile | Blocker | Same white-on-sky sentence | What it costs, y≈6920-6960 | Same |
| 05 Emergency | Desktop | Blocker | H2 line 2 "when you call" is white on sky | No mystery band, y≈3220-3290 | Navy line 1 + blue-deep (#1D5F80) or navy line 2. Never white on sky |
| 05 Emergency | Mobile | Blocker | Same | No mystery, y≈3700-3740 | Same |
| 08 About | Desktop | Blocker | H2 line 2 "in our reviews" is white on sky (mobile has it navy: the two frames are inconsistent) | The names in our reviews band, y≈4720-4800 | Match the mobile frame: navy |
| 09 Our work | Desktop | Blocker | "one very familiar face" H2 line 2 is white on sky (mobile has navy) | White trucks, blue stripes band, y≈5440-5520 | Navy, as on mobile |
| 10 Reviews | Desktop | Blocker | Pull quote line "They talk about how they were treated." is white on sky at ~40 px (mobile has navy) | Paul pull-quote band, y≈4540-4620 | Navy, as on mobile |

## Major

| Page | D/M | Severity | Issue | Exact location | Suggested fix |
|---|---|---|---|---|---|
| ALL pages | Both | Major | Zero yellow "Paul to confirm" notes in the file. Every unverified claim reads as fact. Placeholders use a blue dashed or bracket style instead. Plan §9 and DESIGN-SYSTEM `sticky` require visible yellow notes | Site-wide | Add #FFF3A6 sticky notes next to each item in the rows below tagged "unflagged" |
| ALL pages | Both | Major | "1-year workmanship warranty" stated as fact (FACTS-CHECK: "Not verifiable... Keep flagged for Paul") | Home Paul's promise y≈2215 and seal; Hub promise y≈4980 and seals; Water heaters facts table y≈1290 and step 4 y≈4340; Drain ticket seal; About credentials y≈7700; Terms | Add a yellow note on each, or one global note plus a "[warranty terms: Paul]" tag in the facts tables |
