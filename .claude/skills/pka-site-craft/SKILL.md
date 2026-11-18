---
name: pka-site-craft
description: "How Plumber King client sites reach United Plumbing / Plumbing by Paul quality without copying them: brand audit, quality-bar anatomy, three design directions, a client design system with one owned motif, copy from the client's own words, section craft rules, review loop. Load together with pka-client-site for any client site design or redesign (Figma or build), wireframe, component map, moodboard, design direction, or when Nick says a design looks lazy, generic, copied, too simple or not at United/Paul level."
---

# Plumber King site craft

`pka-client-site` says WHAT to do and in which order (research, SEO plan, wireframe, component map, Figma, build, QA).
This skill says HOW the quality was reached on United Plumbing and Plumbing by Paul. Where they ever differ,
`pka-client-site` wins, and Nick's newest word wins over both.

**Nick's rule, first (17 Nov, permanent):** the STRUCTURE is always the same, for every client and every page type: which
pages exist, which sections come in which order, what each section says (the master structure in pka-client-site). It
works and brings calls, so it never changes. Only the UI changes per client: layout, fonts, photos, colours, motif.
Everything below is about doing that UI part at United/Paul level.

Labels: **fact** = seen in the files, threads or live sites (13-17 Nov 2026). **inferring** = my reading of why it worked.

## 0. The secret in one paragraph

Nick did not design these section by section. The quality came from a chain where every step was written down before
the next one started, and every look came from something the client already owns:

1. **Brand audit**: list what the business physically and verbally owns (vans, shirts, logo, mascot, gift they leave,
   the lines they already say). (fact: `references/paul-brand-audit.md`)
2. **Quality-bar anatomy**: measure WHY the best site is premium, then split it into *craft* (copy it) and *looks*
   (never copy it). (fact: `references/united-anatomy.md`)
3. **Three directions** built from the audit, pick one, and write a translation table "best site vs this client".
   (fact: `references/paul-three-directions.md`)
4. **Client design system** with ONE signature motif made from owned objects, used on a budget.
   (fact: `references/paul-design-system.md`, "the website is the van")
5. **Page sheet**: every section has final copy, plumbing object, background, overlap, motif, photo, 21st.dev reference, CRO
   reason and "to confirm" notes BEFORE Figma. (fact: `references/paul-page-sheet-home.md`)
6. **Figma from the sheet**, then an **independent review** with a severity table, fix, re-check, then Nick.
   (fact: `references/paul-design-review-excerpt.md` found 9 blockers and 27 majors; the Paul thread, 13 Nov, reports all
   9 blockers and 23 of 27 majors fixed before Nick saw it)

Nick, 13 Nov (Paul thread): "If you're building while searching, that doesn't simply work. You have to have some type of hierarchy."
Every failure so far skipped one of these steps (section 9).

## 1. Brand audit (inside research step 1 of pka-client-site)

Write `research/brand/BRAND-AUDIT.md`. Nothing invented; estimates say "from a photo".
- **Colours** from the logo file (exact), then van wrap, shirts, signs (photo samples), then their current site CSS.
  Keep the brand's own **proportions** (Paul's vans read white first, light blue second, navy third, so his site plan
  set ~60% white, 25% light blue, 15% navy per page: light-first).
- **Fonts**: logo lettering (closest Google match, compare side by side as images), fonts on their site, fonts in their
  own social graphics.
- **Owned objects**: vehicles, uniforms, mascot, signs, awards they are entitled to, any ritual (Paul's blue gift roll),
  team size, family. These become the motif (section 4).
- **Owned lines**, word for word with where they appear: site H1, page titles, Facebook/Instagram bio and graphics, GBP,
  their own carousels. (fact: Paul's best headlines were his own: "The Plumber You Deserve", "Plumbing Pinellas with
  Heart", "We're not just plumbers, we're your neighbors", "People rarely say 'they fixed my plumbing.' They talk about
  how they were treated.")
- **Tone** in one line and **positioning** in one sentence, from their material only.
- **Review mining** (with the review research): read 150+ reviews (Paul: 170), count named staff, list repeated praise phrases
  (on time, price first, cleaned up). Paul: Brian 39+, Phil 35+, Chris 25+... (fact). These feed signature sections.

## 2. Quality-bar anatomy (once per new reference, reuse after)

Before designing, measure the reference live (Playwright, computed styles), section by section: layout idea, depth and
overlap, photo treatment, micro-details, how it differs from the section before. Then write two lists:
- **Carry over (craft):** section count, one overlap per section, three type voices, eyebrow + two-line two-tone heading,
  a CTA in every section, one owned motif repeated 6+ times, honest labelled placeholders, density per viewport.
- **Do not copy (looks):** the reference's colours, display font, motif, background dominance, signature devices.

`references/united-anatomy.md` is the finished anatomy of United (re-use it; do not redo it per client). It also holds
the side-by-side table that explains why Paul v1/v2 read as "bold, simple, low effort".

## 3. Three directions, pick one (before the wireframe/component-map stop)

From the audit, write 3 directions. Each: mood words, one-line idea, colour use, type feel, motif, photo treatment,
5 signature sections, 21st.dev components, references, **risks**. Recommend one with reasons, and ALWAYS include:
- **The translation table**: rows = field colour, display type, third voice, motif, accent, hero image, dividers,
  signature moment; columns = United, Paul, this client. If any cell in the client column matches another client's
  cell, change it. (fact: Paul's table: dark vs white field, LED vs brush script, yellow vs no warm accent.)
- Pick rule (inferring from why "Blue Shirts" won): choose the direction **built from what the client already owns**,
  that **fixes the known criticism** (Paul: "too bold, too simple"), that **uses proof the reference site cannot show**
  (Paul: 947 reviews + named crew; United had none), and that **needs the fewest assets that do not exist**.
- Borrowing one device from a losing direction is fine (Paul took B's waterline and C's pipe run).
Show the chosen direction with the wireframe + component map at Nick's first stop. No extra gate.

## 4. Client design system (write before Figma)

One file, `plan/DESIGN-SYSTEM.md`. Model: `references/paul-design-system.md`.
- **One-line brief** a stranger understands ("the website is the van").
- **Colour tokens** with roles, every text pair's WCAG ratio computed (not guessed), a banned list and banned pairs
  (Paul: white on sky 2.52 was banned, and the review still caught it on 6 pages).
- **Three type voices**: (1) headings + body, (2) an accent voice for 1-4 words, taken from the brand (Paul: the logo's
  brush script; only use a script if the brand owns one, never invent one), (3) a numeral/label voice. Each has a "never" column. Max sizes chosen to answer Nick's criticism (Paul: H1 68 px, not United's 124).
- **The headline pattern**, fixed on every section: eyebrow with the motif tick, two-line two-tone heading (break follows
  meaning), optional one script word, alignment alternating left / centred / left / split.
- **The signature motif**: ONE idea (Paul: "the livery"; United: "the LED sign") expressed as 3-5 devices made ONLY
  from owned objects, together appearing 6+ times per long page, each with sizes, rules and a never-list, plus a
  **motif budget per page** (min/max per device). Paul: mascot seal, sewn name patches, van swoosh stripes,
  waterline CTA, water-meter review counter, the real gift-roll photo. United: LED sign (from Jim's LED-screen vans):
  tickers, LED step numbers, LED phone. A motif from nowhere (Paul v1's sun and heart) is the main sign of a generic site.
- **Photo treatments** (framed, hero frame, tilted snapshot, offset block, full bleed with scrim, caption plate), one
  colour grade so phone shots and pro photos match, a low-res max width, focal-point rule, honest placeholder style.
- **Section-variety rule** (Paul section 7, adapted to Nick's 17 Nov rules): every section declares the plumbing object
  it is (pka-client-site "What plumbing object could this section be?"; Mike VFACT: ticket stubs, a pipe with stops and
  a valve, a 24h dial, a route map with a service ticket, a job ticket with a carbon copy), never a component type.
  Under Nick's rule a section layout is used ONCE per site, and never matches another client's section.
  Allowed repeats (Nick, 17 Nov: yes to the final CTA repeating on every page, as on both live sites): utility bar,
  header, final CTA and footer. Pages of one type (all service pages, all city pages) share one template; that part is
  the coordinator's reading of Nick's yes, not his words. Every other section layout appears once on the site.

## 5. Copy voice

- **Lift, then elevate.** Headlines start from the client's own lines (section 1) and real review phrases, made sharper,
  never replaced by generic marketing. Paul examples (fact, live): H2 "We're not just plumbers. / We're your neighbors."
  (his website line); Reviews H2 "They rarely say 'they fixed my plumbing.' / They talk about how they were treated."
  (his own carousel); the script caption **"The plumber you deserve"** (his homepage H1, reused as a signature).
- **Specific beats clever.** Trade + town in H1s. Name the street-level reality: "a shop on 64th Way North",
  "Shut the water off and call us". Cards say the symptom in customer words ("Something's leaking", "No hot water").
- **Proof under every promise.** Any claim card carries a real review line and name. No naked adjectives.
- **Reviews word for word**, typos kept, `[…]` for cuts, real date and service tag; highlight the phrase that answers a
  fear (on time / price first / cleaned up).
- **Small conversions everywhere**: two-line buttons (action + reassurance: "(727) 709-2552 / Tap to call · Open 7 days"),
  "Call about a water heater" on each card, a call link at the end of FAQ answers, "Step 1 starts here:" rows.
- **Wit only if the client has it** (Paul's toilet jokes exist in his own posts, so "Look us up at myfloridalicense.com.
  We'll wait." fits him; it may not fit the next client).
- Facts list at the top of the page sheet: the ONLY facts copy may use. Owner claims get a "to confirm" note.
- The examples above show how to lift a client's lines; never reuse Paul's or Jim's wording for anyone else.

## 6. Section craft (checked on every section before Nick sees it)

1. One overlap or depth layer, named in the page sheet: form over the hero edge, seal over a photo corner, medallion over
   a card seam, cards over a colour band, patch over a card corner, a divider across the join.
2. Density: each desktop viewport holds eyebrow, heading, copy, 3-6 objects, a CTA and one motif device. Nothing is a lone
   heading on an empty field.
3. Backgrounds alternate from the token set; never the same value twice in a row. Paul home: mist, white, navy, sky,
   white, tint, white, tint, white, navy, white, tint, white, waterline, footer.
4. Designed seams from the motif between sections: shaped edges (waves) and objects crossing the join (United: wave + cyan
   line, praised 4 Nov "that's how we differentiate"; Paul: van swoosh stripes; Mike VFACT: pipes, tags, drips, gauge,
   wave seams, keyword band). Never a plain hr, and never one divider repeated down the page. **Clean seams (Nick, 18 Nov):**
   content keeps 24 px (desktop) / 16 px (mobile) clear of a wave; only named seam objects may cross it, on purpose. A
   photo meeting a wave runs up behind it (ink gradient top) or the wave goes. Footer: ~64/40 px room above its rule, one
   colour top to bottom, bottom-bar links on the grid edge.
5. Real photos large, owner/crew more than once on home, never the same photo twice on a page, never a cut-out on a blob.
6. **The end is as strong as the start.** Process, FAQ and Contact get the same effort as the hero (United 4 Nov: those
   three were called "lazy" and rebuilt). Final CTA = second-largest heading on the site; footer is a designed object.
7. Header on the grid edges; paired buttons the same height (United v1 criticism).
8. Imagery and icons match the trade (no pipes on an electrician's site).
9. **Proof on the page (Nick, 18 Nov):** show the proof (review slips word for word, the rating badge, real job photos,
   the actual video) on the page; never only a link to it.
10. **Physical logic (Nick, 18 Nov):** objects behave like the real thing: tag strings start at the pipe centreline behind
   the pipe with a ring, a hanging sign has straight cables and settles like one pendulum, a nut sits on the pipe turn.
11. **Every page is a showcase (Nick, 18 Nov):** Our Work, Reviews and similar pages get their own unique hero (ideas from
   21st.dev or Pinterest, in the client's brand). The repeat check covers heroes too.
12. **The end of the page is not the end of quality (Nick, 18 Nov, Glass):** the last sections (contact/"tell us about the
   job" form, FAQ/questions, CTA, footer) get the SAME effort as the hero: a real layout idea, the motif, and something
   interactive (tabs, accordion with preview, step form, hover/scroll states). A plain list, white cards or a centred
   heading with fields = lazy. Same for mid-page "why us", "tips", "reviews by job" and FAQ sections on inner pages.
13. **21st.dev per section, every section (Nick, 18 Nov):** before designing a section, search 21st.dev in THAT section's
   category (footer, contact form, FAQ, testimonials, features, bento, tabs, steps...), shortlist the more advanced
   components, and adapt one. Never fall back to a generic stack because it is quicker. Layouts not often seen; experiment.

## 7. References: how they were really used

- 21st.dev first (MCP; if it fails, browse `https://21st.dev/community/components/s/<category>` with Playwright, as on
  Paul). Shortlist ~30, top 10 with a "where it goes" and "how to adapt" column. Take the structure, recolour to tokens,
  ignore the demo palette, then re-skin with the motif (Paul: lanyard badge rail became sewn name patches; pinned-notes
  process became job tickets on a pipe run; tideline CTA became the waterline).
- Dribbble / Pinterest / live competitor sites: each kept image gets one "what to take" line. Log blocked sources honestly.
- United's and Paul's section ORDER and CONTENT may be followed (that is the fixed structure); their layouts and devices
  never.
- The component map logs: page, section, plumbing object, 21st.dev URL, reference file, adaptation. The build pulls from it.

## 8. Review loop (before Nick, every round)

- Builders work from the page sheet in parallel; a separate instance reviews every frame as slices (desktop and mobile),
  plus automated scans where possible (Paul: a pixel scan for the banned white-on-sky pair).
- Report as a table: page, desktop/mobile, severity (blocker / major / minor), issue, exact location, fix. State what was
  NOT covered and that a same-vendor review is same-vendor.
- Fix all blockers, as many majors as the data allows, re-check, then send Nick the Figma link + screenshots + what is
  still open. Log what Nick praises or criticises in memory `design-log.md`.
- In the build, port the United motion system exactly as pka-client-site says, with its 18 Nov rules (controlled motion,
  new loader per client from 21st.dev, one kit, parallax, bands, idle life). Counters' content comes from the client's
  own motif (Paul: meter rolls to the review count).

## 9. Why earlier versions failed (fact, from the WFACT 3.0 project threads and Nick's 17 Nov notes)

| Version | What happened | Missing step |
|---|---|---|
| United v1 (4 Nov) | "looks like nothing special"; header off-grid | anatomy of a reference (fixed by re-studying Ed's 8 sites + 21st.dev) |
| United v2 end sections | Process/FAQ/Contact "lazy" | section craft 6.6 |
| Paul v2 (26 Oct) and v1 code (12 Nov) | invented "Sunshine City" coral/teal, one type voice, cut-out on a blob, sun/heart motif, few photos | brand audit, owned motif, Figma before code |
| Paul v3 Figma (13 Nov) | approved 14 Nov: "Wow, amazing job" | all six steps done in order |
| Khinda (17 Nov) | United's layout recoloured, pipes on an electrician | anatomy split craft/looks, translation table, trade imagery |
| Mike (17 Nov) | structure read like a manual | copy voice from owned lines; density and proof rules |

## 10. Worked examples (Plumbing by Paul)

These show the METHOD. Never reuse their wording or devices for another client: patches, water meter, waterline, pipe
run, mascot seal and swoosh stripes belong to Paul; LED signs, tickers and cyan waves belong to United.

**A. "Who shows up" (home section 7): from reviews to a signature section.**
Evidence: review mining counted technicians named in 170 Google reviews (Brian 39+, Phil 35+, Chris 25+, JR 16+,
Troy 15+, Noah 11+); the brand audit found light-blue shirts with a round mascot patch. Motif: sewn name patches
(148 x 56 oval, dashed sky stitch, name in the logo script, rotated -4 to +4). Reference: 21st.dev
`@dhxwhy/components/team-lanyard-rail`, re-skinned. Copy: eyebrow WHO SHOWS UP, H2 "You'll probably meet / one of these guys",
lead "Our customers keep naming the same people in their Google reviews. So we sewed the names on." Each patch opens a
word-for-word review that names that person. Depth: patches overlap the wide crew photo's bottom edge by half. Honesty:
patches are not placed on faces until Paul matches names to people (to-confirm note). CRO: answers "who is coming to my
house", and no competitor (or United) can show it. In the build, the patches pop in as group 2 (Nick 15 Nov).

**B. From "meh" to approved: the trust bento + translation.**
Paul v2 put four stats in a plain row with rules. v3 turned the same facts into a navy bento whose top row rises 40 px
into the section above: the 947 review count as a **water meter** (five drum cells, Russo numerals, last cell sky like
a real meter's tenths drum, "checked 13 Nov 2026"), Best of the Bay 2022/23/24/26, the licence with "Look us up at
myfloridalicense.com. We'll wait.", family-owned since 2015 with a real photo, a real quote with a "Phil" patch, and
"Paul's promise" seal overlapping two cells (warranty flagged to confirm). H2 "947 neighbors can't all be wrong. /
Well, 4.9 stars' worth." Same facts, but trade object + owned voice + overlap + proof = premium. United's equivalent is
an LED tile; nothing is shared but the discipline.

## 11. Check before showing Nick (add to pka-client-site step 6 QA)

- [ ] Non-plumber client flagged to Nick first (CLAUDE.md); fonts checked against the SOP section 11 register.
- [ ] BRAND-AUDIT, anatomy (or reuse), 3 directions + translation table, DESIGN-SYSTEM, page sheet all exist as files.
- [ ] Every client-column cell in the translation table differs from United, Paul and every other client.
- [ ] Motif comes only from owned objects; budget per page met.
- [ ] Every section: plumbing object and layout used once on the site, overlap, density, CTA, two type voices, proof under promises.
- [ ] Every page hero is unique on the site; proof shown on the page; objects physically logical; seams 24/16 clear.
- [ ] Headlines trace to the client's own lines or real reviews; facts only from the facts list; stand-ins labelled.
- [ ] Independent review table done, blockers 0, open items listed for Nick.

Full Paul source files (old project, may be unreachable from new threads): `plumber-king-agency/clients/plumbing-by-paul/`
(`research/`, `plan/`) and `designs/plumbing-by-paul/` in the WFACT 3.0 project files. Image paths inside `references/`
point there and are not copied.
