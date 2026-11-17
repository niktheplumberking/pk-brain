# United Plumbing: anatomy of the quality bar, and why Paul's last version fell short

Studied live at https://united-plumbing-pomona.vercel.app on 13 Nov 2026 with Playwright at 1440 px. Pages read: home, /services/, /drain-cleaning-pomona/, /plumber-claremont/, /about/, /our-work/, /reviews/, /contact/, /areas/.
All numbers below were read from the live DOM (computed styles), not estimated. Screenshots are in `united/`.

## 1. The system underneath (measured)

| Token | Value on the live site |
|---|---|
| Display font | Big Shoulders Display 800/900, uppercase, line-height about 0.86 to 0.92 |
| Body font | IBM Plex Sans 400/500/600/700, 16 px base, 18 px lead |
| Third "voice" | Doto 900 (dot-matrix LED face), used only for numerals, tickers, step numbers |
| Hero H1 | 124 px / 109 px. Inner page H1s 90 to 120 px |
| Section H2 | 56 to 76 px (64 px most common); final CTA 92 px |
| Card H3 | 30 px display; body in cards 15 to 16 px |
| Eyebrow | about 13 px, 700, wide tracking, with a small droplet icon in front, on every section |
| Colours | night #0b0f1a, night2 #131b2e, night3 #1a2440, paper #f3f6fb, white, cobalt #1f4fd8, cyan #33d6ff, yellow #ffd21f |
| Container | 1280 px wrap, 80 px side margin at 1440 |
| Radius | 14 px main; 8 to 18 px family; pills 99 px |
| Shadows | deep, offset and negative-spread (e.g. `0 40px 80px -30px rgba(0,0,0,.7)`), plus hard "stacked" shadows (`0 -4px 0 yellow, 0 -10px 0 cyan`) and inset colour bars (`inset 6px 0 0 cobalt`) |
| Section padding | 70 to 110 px top and bottom; sections are 640 to 990 px tall |
| Motion | Lenis smooth scroll; intro loader (pipe line draws, drop falls, logo lands); page-transition panel; headline lines revealed through a mask (`split-line`); `ping` and `blink` keyframes for live dots; two marquee tickers; review carousel; pipe "fill" on the process rail |

Three things in that table carry most of the premium feeling:
1. **Three typographic voices** (condensed display, calm body, LED numerals). Every section uses at least two.
2. **Six background values** (three darks, paper, white, yellow) so no two neighbouring sections look alike.
3. **Shadows and overlaps that cross section edges**, so the page reads as layered objects, not stacked stripes.

## 2. Home page, section by section

Home is 9,916 px tall at 1440 with 13 content sections. Order of backgrounds: dark, paper, ticker, dark2, paper, dark, white, dark, white, dark, ticker, dark, footer.

| # | Section (screenshot) | Layout idea | Depth and layering | Photo treatment | Micro-details | How it differs from the one before |
|---|---|---|---|---|---|---|
| 1 | Top bar + header (`united/home-s01-hdr.png`) | Logo sits on a white panel with a diagonal cut and a cyan sliver; nav on dark; two CTAs (outline cyan "Text a photo", solid yellow phone with "Tap to call · 24/7" second line) | Logo panel overlaps the bar; header hides on scroll down, returns on scroll up | none | Two-line buttons (action + reassurance); mega menu for 13 services | n/a |
| 2 | Hero (`united/home-s02-hero.png`) | Left: follower pills, 124 px two-tone H1, cyan service-area line, short yellow rule, paragraph, two CTAs, three icon chips. Right: owner photo | Owner cut into a dusk street scene; vertical cobalt name plate "JIM GALVEZ · OWNER & PLUMBER" on the right edge; **callback form card straddles the hero's bottom edge** with a yellow top border and a soft shadow | Real owner photo, graded into a moody blue scene, not a cutout on a flat shape | Yellow 4 px rule under the area line; icon chips in small dark tiles; form fields carry trailing icons | n/a |
| 3 | Reviews (`united/home-s03-rev.png`) | Centred two-tone H2, hairline, 4-up card carousel, arrows and dots | Cards have 1 px border and soft shadow; honest "GOOGLE REVIEW GOES HERE" tilted yellow labels | none | Google "G" chip, yellow quote glyph, pill progress dot | First light section; centred instead of left-aligned |
| 4 | LED ticker (`united/home-s04-ticker.png`) | 64 px dark band, yellow dot-matrix words: SLAB LEAK + TREE ROOTS + BURST PIPE | Acts as a hard divider | none | Doto font, "+" separators | Motion band, no content |
| 5 | About (`united/home-s05-ab.png`) | Photo collage left, copy right with three yellow-bar mini paragraphs, two CTAs | **Cobalt block offset behind the main photo; second photo tilted about 5° with a white border; round logo badge overlapping the top-right corner**; wave SVG closes the section | Raw job photos, large, unfiltered | 4 px yellow bars beside each sub-point | Dark2 (lighter navy), asymmetrical, first collage |
| 6 | Services (`united/home-s06-sv.png`) | Centred H2 + lead, 3×2 photo cards, then a dark "+7 MORE" panel with seven chip links and a yellow button | Icon medallion (cobalt circle, white ring) **overlaps the photo/body seam**; white corner cut on each photo; 3 px cobalt bottom border; "+7 MORE" set in LED face | Stand-in photos openly labelled "STAND-IN PHOTO" | Every card has its own CTA "Call about drain cleaning" | Grid density: 6 cards + 7 chips + 1 button in one section |
| 7 | Latest work (`united/home-s07-wk.png`) | Left-aligned H2 with "See all jobs" link right; 5-cell bento (1 tall centre, 2 small each side) | Dashed cyan placeholder cells; **yellow stat tile "1,156 people follow Jim's jobs"** breaks the photo grid | Real phone photos of jobs | Instagram icon as the empty-state mark | Bento instead of uniform grid; dark again |
| 8 | Why (`united/home-s08-why.png`) | Copy + five stacked dark rows left; owner photo right | Rows are dark bars with yellow icon tiles on white; photo has a gradient foot and a **cobalt name plate overlapping it** | Owner by his truck | Icon tile 42 px, rows 58 px, 12 px gaps | White background; list rows instead of cards |
| 9 | Process (`united/home-s09-pr.png`) | Centred H2 under a blue radial glow; horizontal "pipe" rail with five square nodes; five cards hang from the nodes | **Cards overlap a full-width yellow band**; last card is cobalt ("done"); pipe fills as you scroll | none | LED step numbers 01 to 05 with glow; "STEP 05 · DONE"; inline CTA row "Step 01 starts here:" | Only section with a diagram and a colour band behind cards |
| 10 | FAQ (`united/home-s10-section.png`) | Sticky left column (three-line H2, intro, dark help card); accordion right | Open item is a tinted panel with a 6 px cobalt left bar; help card has a blue radial glow and a yellow round icon | none | LED numbers 01 to 06; round +/− buttons; each answer ends with a call link | White; two-column with a card inside the column |
| 11 | Final CTA (`united/home-s11-ct.png`) | 92 px two-tone H2, LED phone display, three mini cards; form card right | **Phone number rendered as a glowing LED sign** with a blinking red dot; form card with yellow top border; dark pipe photo bleeding in from the right | Dark, low-contrast photo as texture | "Answered 24/7" pill with green ping dot | Biggest type on the page; the motif at full strength |
| 12 | Cyan ticker (`united/home-s12-ticker.png`) | Same band, cyan text: towns | divider | none | colour variant of the same device | n/a |
| 13 | Areas (`united/home-s13-ar.png`) | Map left, H2 + 12 town chips + CTA right | Map framed with a cyan 2 px border | Real map tile | Pin icon in each chip | Map as the image |
| 14 | Footer (`united/home-s14-ftr.png`) | Logo tile, blurb, socials; three link columns; cobalt bottom bar | Cobalt bar under near-black | none | Round cobalt icon chips beside contact lines; dashed-yellow placeholder for the licence line | n/a |

## 3. Inner pages: the same care, new layouts each time

- **Service page** (`united/service-full-1440.png`, sections `service-s02` to `s14`): 12 sections, 11,439 px. Hero, "what we clear" symptom cards (dark header with LED number, red-dot symptom list, yellow "WHAT WE DO" block, connecting pipe stubs between cards: `service-s03-cl.png`), why-us, a 2,644 px long-form guide for SEO, video reviews, why, CTA band, FAQ, related services, form, areas.
- **Town page** (`united/town-full-1440.png`): 13 sections. Local-problem cards with a yellow LED tag + ghost number over each photo (`town-s04-pr.png`), "right next door" distance section, neighbourhoods, long guide, service grid, reviews, yellow family band, emergency CTA, FAQ, nearby towns.
- **Services hub** (`united/services-full-1440.png`): yellow hazard band ("WATER ON THE FLOOR RIGHT NOW?"), a "what do you need fixed?" picker, four family sections that alternate dark/light and flip sides, a "not sure what it's called?" helper, yellow family band.
- **About** (`united/about-full-1440.png`): story with two photos, stats band on dark, crew, "four rules on every job", video proof.
- **Our work** (`united/work-full-1440.png`): only page with a light hero; gallery; Instagram section.
- **Reviews** (`united/reviews-full-1440.png`): video-first; quote wall; "Google reviews, coming soon" stated honestly; two "send us yours" sections.
- **Contact** (`united/contact-full-1440.png`): three ways to reach, long form, where-we-work map, yellow "what happens next".
- **Areas** (`united/areas-full-1440.png`): four county cards with town lists, "closer means faster", reviews by area.

Pattern: every page gets 9 to 13 sections, and **no layout is reused more than twice on a page**. Only the final CTA, ticker, areas and footer repeat site-wide.

## 4. What actually makes it feel premium (the short list)

1. **One motif, used with discipline.** The LED sign (Doto) appears on tickers, step numbers, "+7 MORE", FAQ numbers, town tags and the phone display. It is tied to the trade (a 24/7 open sign) and never used for body text.
2. **Things overlap.** Form over hero edge, badge over photo corner, medallion over the card seam, cards over a colour band, name plates over photos. At least one overlap per section.
3. **Two-tone, two-line headlines** everywhere (white + yellow or cyan on dark; ink + cobalt on light) with an eyebrow above. The rhythm is recognisable after two sections.
4. **Real photos, large.** The owner appears three times on home. Job photos are unpolished and that is the point. Stand-ins are labelled.
5. **Density.** A typical viewport holds an eyebrow, a headline, a paragraph, 3 to 6 cards or rows, 1 or 2 CTAs and a decorative device. Nothing is a lone heading on an empty field.
6. **Contrast between neighbours.** Dark, paper, dark2, paper, dark, white: plus two tickers and three wave dividers. Alignment also alternates (left, centred, left).
7. **Small conversions in every section.** Per-card CTAs, call links at the end of FAQ answers, "Step 01 starts here" row.
8. **Motion with a story.** Intro: a pipe draws, a drop falls, the logo lands. Then mask reveals on headlines, a filling pipe rail, tickers, ping dots. All of it relates to water or the open sign.

## 5. Side by side: why the last Paul version read as "bold, simple, low effort"

Compared files: `screens/home-desktop.png` (Paul, 12,467 px tall) against `united/home-full-1440.png` (9,916 px). Paul's page is 26% longer and holds less.

| Dimension | United (measured) | Paul, last version (seen in screenshot) | Effect |
|---|---|---|---|
| Palette | Navy family + cobalt + cyan + yellow, all cool except one accent | Deep teal + coral/red + cream + mint | **Off-brand**: nothing on Paul's vans is teal, coral or cream. Reads as a different company |
| Typographic voices | 3 (condensed display, Plex body, LED) | 1 rounded geometric sans at heavy weight for everything | "Bold" comes from weight with no contrast partner. No fine type to offset it |
| Headline shape | Tall, condensed, uppercase, tight leading: large but narrow | Wide, round, sentence case at about 80 px | Same size class takes twice the width, so it shouts and leaves less room for content |
| Elements per viewport | Eyebrow + H2 + copy + 3 to 6 cards + CTAs + device | Often one heading left, one object right, wide empty margins (reviews, crew, areas, FAQ blocks) | "Simple": too few things to look at |
| Section height / content | 640 to 990 px, full | Several sections over 1,200 px with about half the content | Long scroll, low reward |
| Layering | An overlap in every section; shadows cross section edges | Flat colour fields; the only overlaps are the hero form and tilted review cards | Looks like stacked stripes |
| Photography | Owner ×3, job photos, collage, bento | One cutout of Paul on a coral circle, one crew photo in an arch, one stock P-trap | Too few images, and the cutout-on-blob is a template cliché |
| Services | 6 photo cards with medallions + 7 chips + CTA | A 13-row text list with thin icons | The most commercial section has no imagery and no hierarchy |
| Brand motif | LED sign, tied to "24/7" | Heart + rising sun + "with heart" | Not from Paul's brand (his brand is the mascot roundel, crossed wrenches, the van stripes) |
| Dividers and rhythm | Tickers, wave SVGs, yellow bands, glow | One town marquee, one sun icon | Little to separate or pace sections |
| Shapes | 14 px radius, hard edges, corner cuts, plates | Pills and full rounds on everything | Soft and generic, "app-like" rather than trade |
| Micro-details | Two-line buttons, LED numbers, ping dots, yellow bars, numbered FAQs, name plates | Check-mark row, plain numbered circles | Low detail count is what reads as low effort |
| Stats | Woven into tiles (yellow follower tile, LED "+7") | Four numbers in a plain row with rules | Standard template row |
| Motion | Loader, mask reveals, pipe fill, tickers, carousel | Marquee only (as far as the screenshots show) | Nothing to discover |

The earlier Figma v2 (`designs/plumbing-by-paul/desktop-preview.png`) has the same root problems: one type voice, flat fields, few photos, no motif from the vans.

## 6. What to carry over to Paul, and what not to copy

Carry over (structure and craft, not looks):
- 12 to 14 home sections; 9 to 13 on inner pages; no layout used more than twice per page.
- Three type voices. For Paul the third voice should come from his logo (the brush script of "by Paul"), not an LED face.
- One overlap per section; shadows that cross edges.
- Eyebrow + two-line, two-tone headline as a fixed pattern.
- A CTA or call link inside every section; two-line buttons.
- A motif that belongs to the business and repeats 6 or more times.
- Honest placeholders, clearly labelled, where real content is missing.

Do not copy:
- Dark navy as the dominant field. Paul's vans are **white first**, light blue second, navy third. His site should be light-dominant, which also answers "too bold".
- Condensed uppercase display type and the LED face: those are United's signature.
- Yellow. Paul's brand has no warm accent apart from the mascot's skin tone.

Brand colours measured from Paul's own files: logo navy about `#101030`, logo light blue about `#60a8c8`; from the van photo: lettering navy about `#172839`, lower stripe blue about `#3b90b4`, crew shirt blue about `#75ade7`. These are pixel samples from a JPEG and a PNG, so treat them as starting points to be tuned in Figma, not as final hex codes.
