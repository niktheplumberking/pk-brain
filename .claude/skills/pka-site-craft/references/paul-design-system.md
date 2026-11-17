# Plumbing By Paul: design system for the Figma rebuild (v3, 13 Nov 2026)

Direction: **A "Blue Shirts"** from `../research/inspiration/MOODBOARD.md`, with the waterline borrowed from B and the pipe run from C. Read with `PAGES.md` (what goes where) and `ASSET-LIST.md` (which file goes where).

The one-line brief: **the website is the van.** White first, light blue second, navy third. Three flowing stripes, a round mascot seal, sewn name patches, and the blue shirts of a real crew. Calm from across the street, detailed up close. That is the opposite of the rejected version (coral and teal, one loud type voice, flat stripes) and the opposite look to United (dark, condensed, LED), with the same discipline.

All contrast numbers below were computed with the WCAG formula on 13 Nov 2026, not estimated.

---

## 1. Colour tokens

### 1.1 Brand core (from his logo file and van wrap, see BRAND-AUDIT.md)

| Token | Hex | Role |
|---|---|---|
| `navy` | **#111032** | All headings and body text on light. Dark sections. Bottom bar. Exact logo navy. |
| `blue` | **#2A7FA8** | The van's swoosh blue. Large two-tone headline words (24 px bold and up), icons, the middle stripe, borders of selected states. Not for small text, not for white-text buttons. |
| `blue-press` | **#236F94** | Every button with white text. Links and small accent text on white. |
| `blue-deep` | #1D5F80 | Hover of `blue-press`. Links on tint when extra contrast is wanted. |
| `sky` | **#61ADCB** | Exact logo light blue. Fields, bands, the top stripe, highlight words on navy, primary button fill on navy. Never white text on it. |
| `sky-soft` | #A9D3E4 | Water in the waterline CTA (upper layer), chart bars, patch stitching on navy. |
| `tint` | **#E8F3F8** | Alternate section background. Card fill on white. |
| `mist` | #F4F9FC | Hero wash start, input fill, table zebra. |
| `white` | #FFFFFF | Page base. Cards on tint. |
| `line` | #C9DCE6 | 1 px hairlines and card borders (decorative, not a text colour). |
| `slate` | #454867 | Body text and captions where navy is too heavy. |
| `slate-soft` | #5E7183 | Meta text on white only (dates, "Google review" labels). |
| `star` | #F5A623 | Google rating stars only. Never a fill, a button, a border or a text colour. |
| `error` | #A4262C | Form error text and field border only. Appears in the component sheet, never in a layout. |
| `sticky` | #FFF3A6 with #111032 text | "Paul to confirm" notes in Figma only. Not a site colour. Removed before build. |

Mascot colours (#A39B8A shirt, #E19C6A skin, #603810 hair) exist only inside the logo file. Never sample them for UI.

**Banned:** orange, coral, red (except `error` in a form), teal-green, cream, yellow (except `star` and Figma notes), purple, gradients between two different hues. The only gradients allowed are `mist` to `white`, `tint` to `white`, and `sky` to `sky-soft` inside the water.

### 1.2 Contrast pairs (use only these text pairs)

| Text | On | Ratio | Use |
|---|---|---|---|
| navy | white | 18.36 | everything |
| navy | mist | 17.31 | everything |
| navy | tint | 16.26 | everything |
| navy | sky | 7.30 | all text on sky, button label on navy sections |
| navy | sky-soft | 11.47 | text over water |
| white | navy | 18.36 | everything |
| tint | navy | 16.26 | body copy on navy (softer than white) |
| sky | navy | 7.30 | highlight words, links, eyebrows on navy |
| slate | white / tint | 8.84 / 7.83 | body, captions |
| slate-soft | white | 5.04 | meta text, 13 px and up. On tint it is 4.47: do not use it on tint, use slate |
| blue-press | white | 5.57 | links, small accent text, white-text buttons |
| blue-press | tint | 4.93 | links on tint |
| blue-deep | white / tint | 7.00 / 6.20 | hover, dense link lists |
| blue | white | 4.47 | large text only (24 px bold or 30 px regular and up), icons, borders |
| blue | tint | 3.96 | large text and icons only |
| error | white | 7.26 | error text |

**Never:** white on sky (2.52), white on blue below 24 px bold (4.47), blue or blue-press text on navy (4.11 / 3.30: use sky), star as text on white (2.03), slate-soft on tint.

### 1.3 Proportion rule (the van's proportions)

Per page, by area: about **60% white and mist, 25% tint and sky, 15% navy**. At most **two navy content sections per page** plus the top of the final CTA. The emergency page is the single exception (navy hero). If a page looks dark in the Figma overview, it is wrong.

---

## 2. Type

Three voices, every section uses at least two. All three are free Google fonts, self-hosted in the build.

| Voice | Family | Job | Never |
|---|---|---|---|
| **Voice 1: the sign** | **Montserrat** 800 / 700 | Headings | Uppercase paragraphs |
| **Voice 1b: the conversation** | **Montserrat** 400 / 500 / 600 | Body, UI, buttons, forms | Weights 800 and up below 20 px |
| **Voice 2: the hand** | **Yellowtail** 400 | One to four words at a time: "with Heart", "by Paul", patch names, step numbers, the footer wordmark | Sentences, anything under 22 px, all caps, tracking |
| **Voice 3: the door number** | **Russo One** 400 | Numerals and tiny labels: the 947 meter, stat numbers, "4.9", licence number, section index marks, patch caps | Headlines, body, anything longer than 22 characters |

The real logo is always the PNG / vector. Never retype "PLUMBING by Paul" in Russo One and Yellowtail and call it the logo.

### 2.1 Scale (font size / line height, px)

| Style | Desktop 1440 | Mobile 390 | Weight | Tracking | Notes |
|---|---|---|---|---|---|
| `display` (home H1) | 68 / 72 | 38 / 42 | Montserrat 800 | -1.5% | Sentence case. Max 3 lines desktop |
| `h1` (inner pages) | 60 / 64 | 34 / 38 | 800 | -1.5% | |
| `h2` | 44 / 50 | 28 / 34 | 800 | -1% | Two-tone, see 2.2 |
| `h2-cta` (final CTA only) | 64 / 66 | 36 / 40 | 800 | -1.5% | The largest heading after the home H1: the end is as strong as the start |
| `h3` | 26 / 32 | 21 / 27 | 700 | -0.5% | Card titles |
| `h4` | 20 / 26 | 18 / 24 | 700 | 0 | Row titles, FAQ questions |
| `lead` | 20 / 32 | 17 / 27 | 500 | 0 | One per section at most, max 62 characters per line |
| `body` | 17 / 28 | 16 / 26 | 400 | 0 | Max 68 characters per line |
| `body-strong` | 17 / 28 | 16 / 26 | 600 | 0 | |
| `small` | 15 / 24 | 14 / 22 | 400 / 500 | 0 | Card body, form help |
| `caption` | 13 / 20 | 12 / 18 | 500 | 1% | Photo captions, meta |
| `eyebrow` | 13 / 16 | 12 / 16 | 700 | 12% uppercase | Always with the stripe tick (section 4.3) |
| `button` | 16 / 20 | 16 / 20 | 700 | 0 | |
| `button-sub` | 12 / 16 | 12 / 16 | 500 | 1% | Second line of two-line buttons |
| `script-xl` | 84 / 76 | 48 / 46 | Yellowtail | 0 | One word in the home hero, the footer wordmark (footer goes to 220 / 180 desktop, 96 / 84 mobile) |
| `script-l` | 52 / 52 | 34 / 34 | Yellowtail | 0 | A script word inside an H2 (set 18% larger than the H2 so its x-height matches) |
| `script-m` | 30 / 30 | 26 / 26 | Yellowtail | 0 | Patch names, signatures, step numbers go to 64 / 56 |
| `num-xl` | 96 / 92 | 60 / 58 | Russo One | -1% | One hero stat per page |
| `num-l` | 56 / 56 | 40 / 40 | Russo One | 0 | Stat band, meter digits |
| `num-m` | 28 / 30 | 22 / 24 | Russo One | 0 | "4.9" in chips, FAQ index, step index |
| `label` | 12 / 14 | 11 / 14 | Russo One | 8% uppercase | Patch caps, tags over photos, table headers |

Why this fixes "too bold": the largest heading is 68 px, not 124. Only H1 and H2 are weight 800. Every heading is paired with 400-weight text, a 13 px eyebrow and a fine Russo label, so weight has a partner.

### 2.2 The headline pattern (fixed, on every section)

1. **Eyebrow** with the stripe tick in front (4.3). Navy on light, sky on navy.
2. **Two-line, two-tone H2.** Line one navy, line two `blue` (on navy: line one white, line two `sky`). The break follows the meaning, not the width.
3. Optional: **one** script word inside the H2, in Yellowtail, same colour as its line, rotated -2 degrees, baseline lifted 4 px. At most 3 script words per page in headings.
4. Alignment alternates down the page: left, centred, left, split (H2 left, lead and link right).

---

## 3. Layout

### 3.1 Grid

| | Desktop | Mobile |
|---|---|---|
| Frame | 1440 | 390 |
| Columns | 12 | 4 |
| Margin | 120 | 20 |
| Gutter | 24 | 16 |
| Column width | 78 | 75.5 |
| Content width | 1200 | 350 |
| Wide (photos, bands that bleed) | 1320 (60 margin) or full 1440 | full 390 |
| Text measure | max 7 columns (690) | 4 columns |

### 3.2 Spacing (4 px base)

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120`

- Section padding: **104 top / 104 bottom** desktop, **64 / 64** mobile. Compact bands: 48 / 48 and 32 / 32.
- Eyebrow to H2: 16. H2 to lead: 20. Lead to content: 48 (32 mobile). Card inner padding: 32 (24 mobile). Card gap: 24 (16 mobile).
- Target section height at 1440: **620 to 920 px**, full of content. No section over 1,000 px except the long SEO guide body and the reviews wall. A section that is a heading on an empty field is a defect.

### 3.3 Radii

| Token | Value | Use |
|---|---|---|
| `r-xs` | 6 | Tags, table cells, checkbox |
| `r-sm` | 10 | Inputs, small chips with square feel |
| `r-md` | 14 | Buttons |
| `r-lg` | 20 | Cards, FAQ items, form cards |
| `r-xl` | 28 | Photo frames, bento cells |
| `r-2xl` | 40 | The hero photo, the footer card |
| `r-full` | 999 | Seal, patches, avatar, the rating pill, town chips. Nothing else |

Pills on everything was one of the reasons the last version looked like an app. Buttons are 14, not pills.

### 3.4 Shadows (all tinted with navy, never grey or black)

| Token | Value | Use |
|---|---|---|
| `sh-1` | `0 1px 2px rgba(17,16,50,.06), 0 2px 8px rgba(17,16,50,.05)` | Resting cards |
| `sh-2` | `0 14px 32px -10px rgba(17,16,50,.18)` | Hover, floating chips, photo cards |
| `sh-3` | `0 36px 72px -28px rgba(17,16,50,.38)` | Objects that cross a section edge (the estimate card, hero photos, the footer card) |
| `sh-stripe` | `0 6px 0 #61ADCB, 0 12px 0 #2A7FA8` (plus `sh-2`) | **Signature.** The van's stacked stripes as a hard shadow under the estimate card, the featured service card, the Best of the Bay cell. Max 2 per page |
| `sh-sticker` | `0 3px 0 rgba(17,16,50,.14), 0 10px 18px -6px rgba(17,16,50,.3)` | The seal and patches, so they read as stuck on |
| `in-bar` | `inset 5px 0 0 #2A7FA8` | Open FAQ item, quick-answer box, selected row |

---

## 4. The signature motif: "the Livery"

Four parts, all taken from things on the street today. Together they repeat at least 8 times on every long page. They are the reason a section belongs to Paul and not to a template.

### 4.1 The seal (mascot roundel)

- File: `research/photos/website/web-logo-mascot-1000x1071.png` (full lockup) and a roundel-only crop made from it (see ASSET-LIST). Always the image. Never redrawn, recoloured, flipped or cropped through the face.
- Sizes: **48** (header on scroll, map pin), **72** (header, cards), **112** (photo corner sticker), **160** (one hero moment per page at most), **220** (footer only).
- Treatment as a sticker: 4 px white ring added outside the artwork, `sh-sticker`, rotated between -8 and +8 degrees (never 0 on a photo, always 0 in the header and footer).
- Where it appears: header logo; home hero photo corner; the "Paul's promise" warranty stamp; the pin on every map; the help card beside every FAQ; the thank-you page; the 404; the loader (seal drops in, three stripes draw under it).
- Rules: one seal per section, two per viewport at most. Never larger than 160 outside the footer. Never on top of a face. Never next to another round badge (Best of the Bay, Google G) closer than 48 px.

### 4.2 Name patches

The crew wear a round mascot patch on a light-blue shirt. The site gives each named technician a sewn name patch, and every review that names a technician carries that patch. This turns 947 reviews into people.

- Shape: horizontal oval, **148 x 56** desktop (120 x 46 mobile), `r-full`.
- Fill white. Outer border 2 px navy. Inner "stitch": 1.5 px dashed sky line, dash 5, gap 4, inset 5 px.
- Content: first name in Yellowtail 30 px navy, centred, baseline lifted 2 px. Above it, optional Russo `label` 9 px in blue-press: "FIXED BY" on review cards, "CREW" on crew cards, "OFFICE" for office staff.
- On navy sections: fill sky, text navy, stitch white.
- Rotation: -4 to +4 degrees, alternating. `sh-sticker`.
- Placement: overlaps the top-right corner of a review card by 20 px, or the bottom-left corner of a crew photo by 24 px. Two names on one review = two patches overlapping by 28 px.
- Mini patch (inline, 28 px tall, Yellowtail 18) for lists and filters.
- Rules: first names only, exactly as written in the Google reviews (Brian, Phil, Chris, Troy, JR, Noah, Steven, Miguel, Elvis, Josh, Jacob, Marcus, Carlton, CJ, Alex, Tim, Joshua; office: Missy, Melissa; owners: Paul, Alycia). Never invent a name, a role or a face. A patch next to a photo of a specific person needs Paul to match name to face first (sticky note).

### 4.3 Swoosh stripes

The three bands on the lower panel of every van: navy at the bottom, blue in the middle, sky on top, rising from left to right.

- **Section edge (large):** full-bleed SVG, 1440 x 120 desktop (390 x 64 mobile). Three ribbons, each a smooth S-curve that starts thin at the left (8 px) and swells to 40 px at the right. Order from top: sky, blue, navy, with 6 px white gaps between ribbons. It sits across the join of two sections, overlapping both by half its height. Used: bottom of the home hero, top of the emergency band, top of the footer card, and at most one more per page. **Max 3 large swooshes per page.** Mirror horizontally on alternate uses so they never stack as a pattern.
- **Stripe tick (small):** three slanted bars, each 14 x 4 px, skewed -24 degrees, stacked with 2 px gaps: sky, blue, navy (on navy backgrounds: white, sky, blue). Sits before every eyebrow. This replaces United's droplet and yellow rule.
- **Stripe underline:** under one key phrase in a hero H1: a 3-ribbon hand-drawn underline, 10 px tall total, same colours. Once per page.
- **Corner stripes:** on featured photo frames, the bottom-left corner carries the three ribbons clipped inside the frame radius (80 x 80). Max 2 per page.
- Never straight horizontal bars, never as a full background pattern, never in other colours.

### 4.4 The waterline

- **Final CTA on every page ("the waterline CTA").** Section height 680 desktop / 760 mobile. Top 58% navy. Bottom 42% water: a `sky` layer with a gentle wave top edge (amplitude 14 px, wavelength 360 px) and a `sky-soft` layer behind it offset 90 px right and 10 px higher. The `h2-cta` sits on navy (white and sky). The estimate form card (white, `r-lg`, `sh-3`) floats on the water: its top 60% over navy, its bottom 40% over water, rotated 0. The water continues without a break into the footer, which is a sky field: **the page ends under water, on the colour of the shirts.**
- **Water-meter counter.** The Google review count shown as a mechanical meter: five drum cells (each 56 x 76 desktop, `r-xs`, navy fill, 1 px sky inner line, a hairline highlight across the middle), digits in Russo `num-l` white, the last cell `sky` fill with navy digit (like the tenths drum on a real water meter). Reads `0 0 9 4 7`. Under it: "Google reviews · checked 13 Nov 2026" in caption. Appears on: home trust bento, reviews hero, about stats band, footer (small, 3 cells at 28 x 38). In the build it rolls up once on first view.
- **Pipe run.** Process steps are joined by a drawn pipe: 10 px sky line with 2 px navy outline, 90-degree elbows with small flange marks, one tee fitting per step. Only in process sections.
- **Flow lines.** Behind the home hero only: 14 thin curved lines (1 px, sky at 22% opacity) sweeping from bottom-left to top-right, echoing the swoosh. Static in Figma.

### 4.5 The blue roll (a ritual, not a graphic)

Paul's crew leave a blue toilet-paper gift roll with a logo tag. Customers mention it in reviews. It appears as a real photo (`brand-gift-roll-closeup.jpg`) in exactly three places: the last process step on home, the reviews page, the thank-you page. Never illustrated, never turned into an icon.

### 4.6 Motif budget per page (check before calling a page done)

| Device | Minimum | Maximum |
|---|---|---|
| Stripe tick (eyebrows) | every section | every section |
| Large swoosh edge | 2 | 3 |
| Seal | 2 | 4 |
| Name patches | 3 (any page with a review) | no limit on Reviews and About |
| Water meter | 0 | 1 (plus the small one in the footer) |
| `sh-stripe` | 1 | 2 |
| Script words in headings | 1 | 3 |
| Waterline CTA | 1 | 1 |

---

## 5. Photography

Only files in `research/photos/best/`. No stock, no AI people, no cut-outs on blobs (the cliché of the rejected version). Never the same photo twice on a page. See ASSET-LIST for crops.

| Treatment | Spec | Use |
|---|---|---|
| **Framed** (default) | `r-xl` 28, 6 px white border, `sh-2`. On white backgrounds the border becomes 1 px `line` plus 5 px white | Most photos |
| **Hero frame** | `r-2xl` 40, no border, `sh-3`, corner stripes bottom-left | One per page |
| **Tilted snapshot** | 8 px white border, `r-lg` 20, rotated 3 to 6 degrees, `sh-3`, overlaps a framed photo by 20 to 30% | Second photo in a collage. Max one tilt direction per section |
| **Offset block** | A `sky` or `tint` rectangle with the same radius, offset 24 px down and 24 px left or right behind the photo | Splits (about, why) |
| **Full bleed with scrim** | Photo edge to edge, navy scrim: linear gradient 90 degrees, navy 92% to navy 35% at 60%, to 0% | Emergency hero, one band per page at most |
| **Caption plate** | White plate, `r-sm`, 8 x 12 padding, caption 13 px navy, overlapping the photo's bottom-left by 16 px | Every real job photo gets a factual caption (what it shows, never an invented place or date) |
| **Grade** | Cool daylight: temperature -4, saturation -6, shadows lifted +6. No duotone, no blue overlay on faces | All photos, so phone shots and the pro shoot sit together |
| **Low-res rule** | Files of 1080 px or less (`crew-23-three-trucks-1080`, `about-paul-uniform-at-truck-1080`, `fleet-van-side-waterfront-1080`, `remodel-finished-shower-gold-fixtures`, `remodel-finished-double-vanity`, `service-tech-threading-pipe-truck`, `community-paul-toilet-costume-talk`) are never shown wider than 520 px at 1440 | |

Focal-point rule: faces sit in the upper third; the van wordmark or mascot is kept whole or cropped out fully, never sliced through the phone number.

Honest placeholders: where a real photo does not exist (before/after pairs, Clearwater jobs, named crew portraits), draw a `tint` frame with a 2 px dashed `blue` border, a camera icon, and a Russo `label`: "PHOTO FROM PAUL: [what is needed]". Never fill a gap with stock.

---

## 6. Components (build each as a Figma component with these variants)

### 6.1 Buttons

Height 56 desktop / 52 mobile (two-line: 64 / 60). Radius `r-md` 14. Padding 0 x 28. Icon 20 px, 10 px gap. Min touch target 44.

| Variant | Rest | Hover | Pressed | Focus | Disabled |
|---|---|---|---|---|---|
| **Primary (on light)** | fill blue-press, white label | fill blue-deep, lifts 2 px, `sh-2` | fill navy, no lift | 3 px sky ring, 2 px white gap | fill line, slate-soft label |
| **Primary (on navy / on water)** | fill sky, navy label | fill sky-soft | fill white | 3 px white ring, 2 px navy gap | 40% opacity |
| **Secondary (on light)** | white fill, 2 px navy border, navy label | fill tint | fill sky-soft | as primary | line border, slate-soft label |
| **Secondary (on navy)** | transparent, 2 px sky border, white label | sky fill 16% | sky fill 30% | 3 px white ring | 40% opacity |
| **Text link** | blue-press, 600, arrow-right icon, 2 px underline offset 4 | blue-deep, arrow moves 4 px | navy | 2 px sky outline | |
| **Call button (two-line)** | Primary. Phone icon in a 36 px circle (white 16% fill). Line 1 `button`: "(727) 709-2552". Line 2 `button-sub`: "Tap to call · Open 7 days" | | | | |

One primary per section. The phone is always the primary on mobile.

### 6.2 Chips, badges, tags

- **Rating pill:** height 40, `r-full`, white, `sh-1`, Google "G" 18 px, "4.9" in Russo `num-m` navy, five `star` stars 14 px, "947 Google reviews" small 500 navy. On navy: 1 px sky border, navy fill, white text.
- **Proof chip:** height 36, `r-sm`, tint fill, 16 px icon in blue, small 600 navy. Set of five: "Lic. CFC1430367" (badge-check) · "Family-owned since 2015" (house) · "Best of the Bay 2026" (award) · "Open 7 days" (clock) · "Free estimates" (clipboard-check).
- **Service tag** (on review cards): `r-xs`, mist fill, 1 px line, caption 600 slate, wrench icon 12 px. Text = Google's own service tag.
- **Photo tag:** Russo `label` white on navy 88%, `r-xs`, 6 x 10, top-left of a photo, 16 px inset.
- **Town chip:** `r-full`, height 40, white, 1 px line, map-pin 16 px blue, small 600 navy. Hover: tint fill, blue border. Towns without a page yet are not links (no arrow, slate text).
- **Live dot:** 8 px sky dot with a 16 px ring that pings (static ring at 30% in Figma). Used with "Open now" and "Answering now". Never green or red.
- **Best of the Bay mark:** text lockup we draw ourselves until Creative Loafing's official file is supplied: award icon in a 44 px sky circle, "Best of the Bay" body-strong, "Best Plumbing Company 2022 · 2023 · 2024 · 2026" caption, "Creative Loafing Tampa Bay readers' pick" caption slate. Their own uploaded badge (`award-best-of-the-bay-2026-winner-badge.jpg`) may be shown once per page at 120 px on white, never recoloured.

### 6.3 Cards

- **Base card:** white, `r-lg`, 1 px line, `sh-1`, padding 32. Hover: `sh-2`, lifts 3 px, border blue.
- **Service photo card:** 384 x 440. Photo top 220 with `r-lg` top corners; **icon medallion** (64 px circle, sky fill, 4 px white ring, 28 px navy icon, `sh-sticker`) overlapping the photo/body seam at left 28; H3; two lines of small; text link "Call about [service]" and arrow link to the page. Bottom edge: 4 px inset stripe in blue. Featured variant: `sh-stripe`.
- **Router tile:** 282 x 168, tint fill, `r-lg`, 40 px icon in a white circle, h4, one line of small, arrow in a 36 px navy circle bottom-right. Hover: sky fill, arrow circle white.
- **Review card:** white, `r-lg`, 1 px line, `sh-1`, padding 28. Top row: five stars 16 px + Google "G" 20 px right. Quote in body 17 / 28 navy, with at most one phrase marked by a `tint` highlighter (a rounded 4 px rect behind the words, sky at 35%). Foot: 40 px initial avatar (tint circle, Russo initial in blue-press), name body-strong, meta caption "Google review · [age as shown by Google] · [service tag]". **Name patch** overlapping top-right. Variants: default; **tint** (tint fill, no border); **navy** (navy fill, white text, sky patch); **spotlight** (720 wide, quote at 26 / 38 weight 500, three fact cells along the foot).
- **Bento cell:** `r-xl`, padding 32, fills: white / tint / sky / navy. Each cell has one job (a number, a seal, a quote, a photo).
- **Quick-answer box (AEO):** white, `r-lg`, `in-bar`, padding 32. Russo `label` "QUICK ANSWER" in blue-press with a droplet icon; answer in lead 20 / 32 navy (40 to 60 words); a foot row with the call button text link. On every service, town and guide page directly under the hero.
- **Facts table ("job ticket"):** white card with a perforated top edge (row of 10 px half-circles cut out, 16 px apart), Russo `label` header "JOB TICKET: [SERVICE]", 2-column rows (label in small 600 slate, value in body-strong navy), hairline rows, zebra mist. A seal stamp at 72 px, rotated -8, overlaps the bottom-right corner.
- **Step card (process):** white, `r-lg`, 264 wide, hangs from the pipe run by a tee fitting. Step number in Yellowtail 64 blue ("1", "2"...), H4, small. Below a hairline: a one-line real review proving the step, caption italic slate, with the reviewer's name.
- **Stat cell:** Russo `num-l` navy, caption label under it, a 3-bar stripe tick above. No icon rows, no lines between (that was the old template row).
- **Offer slot (placeholder):** dashed 2 px blue border, tint fill, Russo `label` "PAUL'S OFFER GOES HERE", small: "Financing, a first-visit offer or a maintenance plan. Paul to decide." Sticky note attached.
- **Team card:** portrait 4:5 in a framed photo, name patch overlapping bottom-left, name h4, role small. Placeholder variant uses the dashed photo frame.
- **Town card:** white, `r-lg`, map thumbnail top (SVG crop of the county with the town filled sky), h4, 2 lines small, arrow link. "Page coming" variant: no link, Russo `label` "ON OUR ROUTE".

### 6.4 Forms

- **Field:** height 56, `r-sm`, mist fill, 1.5 px line border, label above in small 600 navy, placeholder slate-soft, 16 px text (no zoom on iOS). Trailing icon 20 px blue.
- States: **hover** border sky; **focus** border blue 2 px + 3 px sky ring at 40%; **filled** white fill, navy border 1.5; **error** border error 2 px, message in caption error with an alert-circle icon; **success** check icon in blue-press; **disabled** tint fill, slate-soft text.
- **Chips select** ("What's going on?"): Leak · No hot water · Clog or backup · Planning a project · Something else. Height 44, `r-sm`, white, 1.5 px line; selected: navy fill, white text, check icon.
- **Photo upload:** dashed 2 px sky, `r-sm`, height 88, upload icon, "Add a photo (optional). It helps us quote faster."
- **Quick estimate card (3 fields):** Name · Phone · What's going on? (chips) · photo upload · primary button "Request my free estimate" · reassurance line in caption with a lock icon: "We call you back. No spam, ever." White, `r-lg`, padding 32, `sh-3` + `sh-stripe`, a 6 px sky top border.
- **Estimate bar (hero, horizontal):** the same three fields in one row, 1200 x 116, straddling the hero's bottom edge.
- **Full form (Contact):** Name · Phone · Email (optional) · Address or ZIP · What's going on? (chips) · Tell us more (textarea 120) · Photo upload · Best time to call (Morning / Afternoon / Any time) · button.

### 6.5 Navigation

- **Utility bar:** 40 px, navy, caption white. Left: rating (stars + "4.9 · 947 Google reviews"), "Lic. CFC1430367". Right: live dot + "Open 7 days, 8 AM to 5 PM", "Make a payment" link in sky.
- **Header:** 88 px, white, 1 px line bottom. The logo lockup (88 px tall) sits in a white tab with `r-lg` bottom corners that hangs 20 px below the header onto the hero (**the first overlap on every page**). Nav in body-strong 16 navy, 32 px gaps; active item has the stripe underline. Right: secondary "Free estimate" + two-line call button. On scroll: 64 px, logo swaps to the 48 px seal, `sh-2`.
- **Mega menu:** white panel, `r-lg`, `sh-3`, 4 columns of service families + a navy emergency card at right with a photo. Pattern: https://21st.dev/@hurerag24/components/shifting-dropdown.
- **Mobile header:** 64 px: seal 44, wordmark image, call icon button (blue-press, 44), menu button. Drawer: full height, white, accordion families, estimate button and call button pinned at the bottom.
- **Sticky mobile call bar:** 72 px, white, top hairline, `sh-3` upward. Two buttons side by side: primary call (60%) "Call (727) 709-2552", secondary "Free estimate" (40%). Appears after the hero leaves the viewport. Every mobile frame shows it once, at the bottom of the first viewport mock.
- **Breadcrumb:** caption, slate, chevrons, on every inner page above the eyebrow.

### 6.6 Accordion (FAQ)

Item: white, `r-lg`, 1 px line, padding 24 x 28. Question in h4 with a Russo `num-m` index ("01") in blue at left and a 36 px round plus button at right. Open state: tint fill, `in-bar`, minus button navy fill; the answer's **first sentence in body-strong** (the direct answer, for AEO), the rest in body; ends with a text link ("Call (727) 709-2552" or a page link). Category tag (service tag style) above the question on hub pages.

### 6.7 Icon set

**Lucide** (lucide.dev), outline, 1.75 px stroke, round caps and joins, 24 px grid. Colours: navy on light, sky on navy, blue inside medallions. Sizes 16 / 20 / 24 / 28 / 40. No filled icons, no emoji, no Font Awesome (his current site mixes emoji and Font Awesome: that goes). Brand marks (Google G, Facebook, Instagram, Nextdoor, BBB wordmark as text) come from each brand's official files, shown in their own colours at 18 to 24 px. Full mapping in ASSET-LIST.

---

## 7. Section-variety rule (the discipline that makes it stand next to United)

Check every page against all nine before it is called finished.

1. **No two neighbours share a layout idea.** Each section declares one archetype from this list, and the same archetype never appears twice in a row and at most twice per page: *split collage · bento · photo card grid · rail / horizontal scroll · review wall · pipe-run process · full-bleed photo band · map + chips · sticky column + accordion · spotlight quote · table / ticket · timeline · stat band · tabbed selector · stacked rows · masonry gallery · waterline CTA.*
2. **Backgrounds alternate** from the set: white, mist-to-white wash, tint, sky field, navy, photo. Never the same value twice in a row. Navy never sits next to navy.
3. **One overlap or depth layer in every section**, named in PAGES.md: something crosses a section edge, a card edge or a photo edge (the estimate bar over the hero edge, a medallion over a card seam, a patch over a card corner, a seal over a photo corner, cards over a colour band, a swoosh over a join, the form on the waterline).
4. **Alignment alternates:** left, centred, left, split.
5. **Density:** every desktop viewport holds an eyebrow, a two-tone heading, copy, 3 to 6 objects (cards, rows, photos), a CTA and one motif device.
6. **A conversion in every section:** a call link, a per-card "Call about..." link, or an estimate button. One primary button per section.
7. **Two type voices minimum per section, three on hero, proof and CTA sections.**
8. **Proof under every promise:** any claim card (on time, price first, clean-up, friendly) carries a real review line and name beneath it. No naked adjectives.
9. **The end is as strong as the start.** The waterline CTA uses the second-largest heading on the site, a full form, the phone at Russo scale, and the water running into the footer. The footer is a designed object (the van's side panel), not a link dump.

Rhythm for long pages (repeat as needed): light hero → white → navy or sky moment → white → tint → white → navy moment → white → tint → white → waterline → sky footer.

---

## 8. Motion notes for later (static in Figma, annotate only)

Loader: seal drops in, three stripes draw under it (under 900 ms, once per session). Headings: mask reveal by line. Meter: rolls to 947 on first view. Pipe run: fills with sky as you scroll. Waterline: wave drifts slowly, tide rises 24 px as the CTA enters. Town band: slow marquee, pauses on hover. Patches: 2-degree wobble on card hover. All of it stops under `prefers-reduced-motion`. Budget stays inside the plan's LCP 2.5 s and 1.5 MB page weight: CSS and SVG only, no WebGL, no three.js.

## 9. Figma file structure

- Page "Plumbing By Paul · v3": one Section per site page (01 to 13), desktop 1440 frame left, mobile 390 right, same as United's file.
- Page "System": colour styles (names as in 1.1), text styles (names as in 2.1), effect styles (3.4), components (6), the motif sheet (4) with do and do-not examples.
- Yellow sticky notes (`sticky`) for every "Paul to confirm" item in PAGES.md, placed beside the element, removed before build.
- Layer names in plain English ("Hero / estimate bar"), auto layout on every card and section, variables for the two breakpoints.
