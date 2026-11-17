# Brand audit: Plumbing By Paul LLC

Measured 13 Nov 2026 from his logo file, his trucks, signs and shirts in real photos, his live website CSS, and his own Facebook / Instagram graphics. Nothing here is invented; where a value is an estimate from a photo it says so.

## The short version

- The brand is **navy + light blue + white**. Two blues, never orange. A grey T-shirt and skin tone exist only inside the mascot.
- Logo navy is **#111032** (near-black indigo). Logo light blue is **#61ADCB**. The truck wrap adds a stronger **mid blue around #2A7FA8** in the swoosh stripes.
- Logo lettering: heavy squared block caps for "PLUMBING", a bold slanted brush script for "by Paul", small squared caps for "LLC.", italic script numerals for the phone.
- His website already uses **Bebas Neue + Montserrat + Dancing Script**. His recent social graphics use a heavy geometric sans (Montserrat / Poppins weight 800) on navy with light-blue highlight words.
- Lines he already owns: **"The Plumber You Deserve"** and **"Plumbing Pinellas with Heart"**.

## (a) Colours

### Logo file (exact, sampled from the 1000x1071 PNG on his site)

| Element | Hex | How sampled |
|---|---|---|
| Outer ring, "PLUMBING" fill, "by Paul", phone numerals | **#111032** | median of opaque pixels in four separate regions (ring, L stem, numerals); all returned #111032 / #111133 |
| Inner disc behind the mascot, thin keyline around "PLUMBING" | **#61ADCB** | median of 9,900 pixels inside the disc |
| White ring, wrench highlights, letter outline | #FFFFFF / #F8F8F8 | |
| Mascot T-shirt | #A39B8A (warm grey) | mascot only |
| Mascot skin | #E19C6A | mascot only |
| Mascot hair | about #603810 | mascot only |

Share of opaque logo pixels: navy 30%+, light blue 15%, white 17%, skin 6%, grey 1 to 2%.

### Truck wrap, yard signs, shirts (from photos, lighting-dependent)

Method: crop to the vehicle or garment, keep only blue-hue pixels (hue 185 to 255 degrees), split into dark / saturated-mid / light groups, take the median of each. Six different photos so sun and overcast average out.

| Photo (in research/photos) | Dark navy | Mid blue (swoosh stripes) | Light blue |
|---|---|---|---|
| facebook/fb-163.jpg, box truck side, sun | #1E2A3A | #1D6E9C | #738FB1 |
| facebook/fb-062.jpg, van side, overcast | #0C2738 | #0A86AB | #99BCCC |
| gbp-owner/gbp-owner-005.jpg, van, overcast | #141E26 | #4587A9 | #6392A9 |
| gbp-owner/gbp-owner-110.jpg, box truck close-up, sun | #0D3050 | #2F7EAE | #91AECB |
| gbp-owner/gbp-owner-000.jpg, pro photo, truck | #425064 (hazy) | #2A7FA4 | #97D3E6 |
| website/web-crew-16-two-trucks.jpg, two trucks | #111D2B | #4A91C7 | #88B5DB |
| Yard signs in gbp-owner-000.jpg | (text navy) | #3484B2 | #A1D9EE |
| Work shirts, web-crew-16-two-trucks.jpg | (trousers) | #4682B4 | **#88B8E8** |
| Work shirts, gbp-owner-093.jpg | | #427AAF | #7DA1C3 |
| New sublimated jerseys, facebook/fb-059.jpg | #0F1529 | #205997 | #7089AE |

Reading: the wrap is white with a navy base, a mid-blue swoosh and light-blue secondary swooshes, plus the full-colour mascot roundel. Printed vinyl in daylight reads the navy as a slightly greener blue-black (#0D2A40 range) than the logo file's indigo #111032.

### His current website CSS (plumbingbypaulllc.com, GoHighLevel build, fetched 13 Nov 2026)

Most used hex values in the homepage markup and inline CSS: **#29AAE2** (16 uses, also the variable `--blue-accent`), **#1E6FA8** (14), #188BF6 (13, the platform default link colour), #FFFFFF, **#1A3A5C** (6), **#4DB8F5** (6), **#0D1F33** (6), greys #707070 / #4A5568 / #94A3B8, pale blues #F4F8FC / #E8F1F8, and one amber #F5A623 (2 uses, star icons). Custom colour variables on the page: #0F2A44, #1A3550, #1F3F5F, #0D1F33, #1A3A5C, #29AAE2. So his own site is already a navy ramp with a cyan-blue accent. No orange.

### Recommended web palette (derived, all inside his blues)

| Token | Hex | Basis |
|---|---|---|
| Navy (ink, dark sections, footer) | **#111032** | exact logo navy |
| Navy alt (if a bluer dark is wanted for large fields) | #0D2A40 | truck wrap navy as photographed; his site uses #0D1F33 |
| Brand blue (links, icons, secondary buttons) | **#2A7FA8** | wrap swoosh median; white text on it measures 4.47:1, just under AA |
| Sky (highlights on navy, tints, illustration fills) | **#61ADCB** | exact logo light blue |
| Sky tint (section backgrounds) | #E8F3F8 | tint of #61ADCB |
| White | #FFFFFF | wrap base |

CTA rule (contrast computed, WCAG formula): white text on #111032 is 18.4:1; navy text on #61ADCB is 7.3:1; white on #2A7FA8 measures 4.47:1 (fails AA for normal text by a hair), so buttons with white text should use the darker shade #236F94 (5.57:1) or navy; white on #61ADCB is 2.5:1, so never white text on the sky blue. If one warm note is needed for star ratings only, his site already uses amber stars; keep it to the stars.

## (b) Fonts

### Logo lettering

Comparison sheets (logo crop on top, candidates rendered below in the logo navy):
- `brand/font-compare-plumbing-block.png`
- `brand/font-compare-bypaul-script.png`
- `brand/font-compare-phone.png`

**"PLUMBING"**: a heavy, slightly condensed, square-shouldered display sans with flat terminals, a notched open "P", a pointed "M" valley and squared bowls on "B". Set with a white outline and a light-blue keyline. I could not pin it to a named typeface; it is a commercial / sign-shop sports block style, not a Google font. Closest free matches after rendering 15 candidates:

1. **Russo One**: best overall. Same weight, same squared-but-softened corners, same "G" and "B" construction. A little wider than the logo.
2. **Squada One**: best match for the condensed proportion and squared "U" / "B", but lighter and more mechanical.
3. Quantico 700 / Chakra Petch 700: right corner treatment, too light.
Not matches: Bebas Neue and Anton (too tall and plain), Black Ops One / Saira Stencil (stencil cuts the logo does not have), Orbitron / Audiowide (too wide, sci-fi).

**"by Paul"**: a bold, right-slanted, connected brush script with a looped capital P and tall looped "l". Closest free matches after rendering 17 candidates:

1. **Yellowtail**: closest letter structure (the P, the joined "aul", the slant). Slightly lighter than the logo.
2. **Kaushan Script**: closer in weight and brush texture, less connected.
3. Damion, Mr Dafoe: same retro signwriter family, usable alternates.
Not a match: Dancing Script (what his site uses now) is far too light and bouncy; Lobster and Oleo Script are too upright and chunky.

**"LLC."**: small squared caps in the same block family as "PLUMBING". **Phone numerals**: a wide italic retro script (same family feeling as "by Paul").

### Fonts on his current website

From the page's own font requests and CSS: **Bebas Neue** (16 `font-family` rules: headings and big numbers), **Montserrat** 400 to 900 (body, buttons, nav; also set as `--headlinefont`), **Dancing Script 700** (2 rules, script accent), Roboto as the platform `--contentfont` default, Font Awesome 5 for icons.

### Fonts in his own recent social graphics (observed, not extracted)

2026 Facebook carousels ("Let Paul install it", "Crews that show up", "Trusted from the ground up", "900+ Google reviews") use a heavy geometric sans, Montserrat / Poppins ExtraBold in look, white on navy with one light-blue italic highlight word. Older posts use Bebas-style condensed caps.

### Recommended web font pair

- **Headings: Montserrat 800 / 700.** He already uses it on the site and its look matches his current social graphics. It carries long headlines far better than a logo-style block face.
- **Body: Montserrat 400 / 500** (already his body face). If a second family is wanted for long text, Inter pairs cleanly.
- **Brand display accent, used sparingly** (stat numbers, short eyebrow words, the word "PLUMBING" where the wordmark is echoed): **Russo One**. This is the closest free match to the logo block caps.
- **Script accent, one or two words at a time** ("by Paul", "with Heart"): **Yellowtail** (or Kaushan Script if more weight is needed). Replaces Dancing Script, which does not match the logo.
- Keep Bebas Neue out unless Nick wants continuity with the current site; it is not in the logo.

The real logo should always be placed as the image file. Do not re-typeset the wordmark in Russo One and call it the logo.

## (c) Voice, positioning, mascot, uniforms

### Lines he already uses (exact wording, with where)

- "**The Plumber You Deserve**": homepage H1 and page title.
- "**Plumbing Pinellas with Heart**" / "Plumbing Pinellas with Heart!": homepage, Facebook intro, hiring graphics ("Help Us Plumb Pinellas with ♥"), award posts.
- "We're not just plumbers, we're your neighbors": website.
- "Family-owned. Community-focused." and "More than fixing pipes...": Facebook graphics.
- "Local • Trusted • Family-Owned" / "Plumbing • Gas • Remodels" / "Serving Pinellas & Tampa Bay" / "Building community, not...": Instagram bio.
- "Fast. Honest. Local.", "Service you can count on", "Quality you can count on", "Crews that show up. On time. Licensed. Ready to work.", "Trusted from the ground up.", "We don't just plumb homes. We build them.", "Every project is personal.", "Let Paul install it.", "Before the 💩 hits the fan, call Paul.", "If you love something, let it go. If it comes back to you, call us!": Facebook / GBP graphics.
- "900 reviews isn't a trophy on a shelf." / "People rarely say 'they fixed my plumbing.' They talk about how they were treated.": his own 900-review carousel (strong, already elevated in tone).
- Facebook intro: "Fully licensed, bonded, and insured, every member of our team of plumbing contractors has years of experience in the local industry, and pride themselves in doing quality work, even and especially on, emergency calls."
- Google snippet of the Facebook page: "Proudly serving St. Petersburg and all of Pinellas County since 2015!"

Positioning in one sentence, from his own material: a family-owned Pinellas plumber (Paul, Alycia and their son are the face) with a big, named, uniformed crew, known for how people are treated, with humour and visible community work. Commercial and residential. A construction arm (PBP Construction Services) sits beside it.

Tone: warm, neighbourly, a bit cheeky (toilet jokes, Paul presenting in a toilet costume, "Where is Pauldo" highlight), faith and family visible, proud of the team. Not corporate.

### Mascot

- A cartoon of Paul himself: smiling, arms crossed, grey T-shirt, two crossed pipe wrenches behind him, inside a light-blue disc with a white ring and a navy outer ring. The wordmark overlaps the lower third.
- It is everywhere: every truck side and rear (very large), yard signs, shop door wrap, office wall, tent, T-shirt backs, jersey fronts, gift tags, social avatars, holiday variants (Uncle Sam hat for 4 July).
- It is a real asset customers recognise from the trucks. Use it, at small to medium size, as a seal / sign-off rather than as the hero. File: `photos/website/web-logo-mascot-1000x1071.png` (transparent PNG, 1000x1071, the largest found; no vector found. Ask Paul for the wrap shop's vector).
- Variants seen: roundel without wordmark (truck rear, Facebook avatar on a flat blue-grey field), wordmark-only "PLUMBING by Paul LLC." in navy on the van sides with "COMMERCIAL & RESIDENTIAL" beneath, and a simplified text lockup "PLUMBING by Paul" in recent graphics.

### Vehicles

White vans and box trucks, wrapped: navy base band, mid-blue and light-blue swooshes rising to the rear, huge mascot roundel, wordmark, "COMMERCIAL & RESIDENTIAL", (727) 709-2552, social icons, licence number CFC1430367 on the cab door and sides. Ladder racks. They number their trucks (Truck #22 in Oct 2026).

### Uniforms

- Core: **light-blue short-sleeve button work shirts** with a round mascot patch on the chest, dark navy or charcoal work trousers. Office staff wear the same blue.
- Also: heather-grey T-shirts with a large mascot print on the back and phone number; white long-sleeve tees with "PLUMBING by Paul LLC" down the sleeve; navy caps with the wordmark.
- Newest (2026): **blue sublimated jerseys** with white diagonal stripe pattern and mascot, long and short sleeve.
- Their son appears in a child-size uniform shirt ("The Protégé" in one graphic); Alycia in light-blue tops, denim overalls or a blue hard hat.

### Small brand touches worth keeping

- The blue toilet-paper gift roll with a logo sticker and tag, left with customers (mentioned in reviews as "a little thank you gift").
- Branded blue event tent.
- Award marks they are entitled to: Creative Loafing Best of the Bay, Best Plumbing Company 2022, 2023, 2024, 2026 (see FACTS-CHECK.md).

## What went wrong before, in brand terms

Orange appears nowhere in the logo, wrap, shirts, signs or his site. Any accent has to come from the two blues above. The script on his site (Dancing Script) is also not his logo script; Yellowtail or Kaushan is closer.
