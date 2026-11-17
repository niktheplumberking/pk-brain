---
name: pka-client-site
description: "Plumber King Agency client site flow, from research to launch and monthly SEO. Use whenever Nick says client site, new site, redesign, Figma, design the homepage, full site in Figma, build the site, build it from Figma, code the site, preview link, Vercel link, QA the site, motion or entrance animations, loader, launch, go live, upload to Hostinger, or monthly SEO for a plumber client (United Plumbing, Plumbing by Paul or a new one). Also for free concept redesigns of a prospect's homepage in the Plumber King designs Figma file, and before/after design content. Covers: deep research, claude-seo plan, full multi-page redesign in the client's Figma via the Figma MCP, Nick's approval gate (never build before he approves the Figma), the build standard with the United motion system, QA, launch and SEO. Uses the client's own brand colours and fonts. Not for Plumber King Agency's own site or IG posts."
---

# Plumber King client site

Nick runs Plumber King Agency: websites, SEO and IG content for US/Canada plumbers. This skill is the whole flow for a
plumber's site. Facts about each client live in project memory `clients.md` (United) and `client-plumbing-by-paul.md` (one file per client); this file holds the rules.

## Must-follow rules (read before any step)
1. **Order is fixed:** deep research -> claude-seo SEO/AEO/GEO/CRO plan -> WIREFRAME doc for every page + component map
   -> **STOP: Nick approves the wireframe + component map** -> full multi-page design IN the client's Figma (Figma MCP only)
   -> **STOP: Nick approves the Figma** -> build -> QA -> launch -> monthly SEO. (Design process in Step 3.)
2. **Never build, deploy or open Vercel before Nick approves the full Figma.** (Paul, 13 Nov: code + Figma v2 rejected as low
   effort because design was skipped.)
3. **Use the client's own brand**: their real logo, logo/van colours and fonts. Never invent a palette (Paul's "Sunshine City"
   coral/teal rebrand was rejected 13 Nov). Real logo file only.
4. **No invented facts.** No made-up prices, quotes, numbers, licences, ratings, years or awards. Reviews word for word, only
   real ones (4+ stars or clearly positive), never labelled "Google" unless they are. No AggregateRating schema.
   Every stand-in is labelled as a stand-in; keep a "<client> to confirm" list in the site README.
5. **Real photos only**, never the same photo twice on one page. Owner photo ladder: real owner > real family/team > Higgsfield
   stand-in. Only a generated stand-in gets a small "Your photo goes here" sticker, inside the frame.
6. **Ratings = real Google numbers** (stars + count), dated. **Areas map = a real Google Maps screenshot.** If the cloud
   browser is blocked, read them on Nick's PC via Remote Control.
7. **Nothing covers a face**; no text overlaps; process lines pass through the numbers.
8. **Legal:** check the state licence board in research. California unlicensed = jobs under $1,000 only and every ad must
   say "not licensed" (B&P 7027.2); licence number required on ads once licensed (7030.5). Florida wants the licence on ads.
   Real faces/names in promo posts need the owner's consent.
9. **Hosting law:** live sites on Hostinger (or the client's host); Vercel = previews only (noindex).
10. Ask Nick before any Higgsfield run over 30 credits.
11. Before saying something can't be done, test it live and try every route (incl. Remote Control on Nick's PC).
12. Facts are labelled fact / inferring / don't know. Nothing is "done" until a check proved it.

## Step 1: Research (use agents)
- Real brand: logo, logo font (closest match), van/wrap and shirt colours, real photos (site, Google, IG, FB, LinkedIn).
- Live Google rating + count, reviews, licence lookup (state board), entity (SOS), hours, phones (flag mismatches),
  owner and staff names, awards, competitors, services and towns already listed. 21st.dev components, Pinterest refs.
- Save to `clients/<client>/research/` with a FACTS-CHECK file. Paul example:
  `/mnt/project-files/plumber-king-agency/clients/plumbing-by-paul/research/` (old project files; may not exist in new project).
- Ed's standard site (studied 6 Nov, 8 sites, 166 pages): home/about/gallery/contact + 8-13 service pages + ~50 town pages.

## Step 2: claude-seo plan (before design)
- SEO/AEO/GEO/CRO plan: titles/H1s per page, URLs (keep the client's current paths), schema, FAQs, quick-answer boxes.
- Route: use the claude-seo skills in pk-brain (`seo-plan`, `seo-audit`, `seo-local`, `seo-schema` and the other `seo-*`; copied
  17 Nov, notes in `tools/claude-seo/README.md`). Their Python scripts need the runtime from the PLUMBER setup script (`claude-seo doctor`
  says ready); if it is not ready, say so in one line. Never add the author's Skool footer. Backup route: claude-seo on Nick's PC (`/seo audit <url>`).

## Step 3: Full redesign in Figma (Figma MCP only)
- File: Plumber King designs, https://www.figma.com/design/QbPRX8MU5AA6peTerdP5gg (team OnlyRichTeam). Never Remote Control
  or a browser for Figma. `create_session` first; load figma-use / figma-design-to-code before use.
- **Page rules:** ONE Figma page per company, named after the company, ALWAYS and only that one (Nick, 17 Nov, permanent):
  never create a second page for the same client, never rename or archive a page as "old vX". If a redo is needed, delete
  everything on the page and rebuild it from zero on the same page. Desktop (1440) + mobile (390) for every page type.
  Every design page gets 3 content blocks: 01 Old vs New Sitemap, 02 Brand Moodboard, 03 Colors & Fonts (copy layout from
  Paul frames 112:1528 / 112:1621 / 112:1721, restyle). Assets column optional. One thread per company, touching only its page.
- Homepage formula and QA list: **homepage CRO SOP**
  `rules/sop/plumber-homepage-cro-sop.md` in this repo (copied 16 Nov from the old project files; v1.3: 14 blocks, mobile rules, section 8 QA,
  section 11 font register, section 13 hard rules). Read it before designing. Its "homepages only" scope is superseded:
  real clients get the full multi-page site.
- **Nick's praise/criticism (design log):** praised United v2 hero (full-bleed scene, real owner cut-out, glow, H1 trade+town
  in two colours, form straddling the hero edge), brand-motif dividers between sections ("that's how we differentiate"),
  About collage, clipped-corner service cards; United full site "best website in my portfolio" (every section its own idea,
  placeholders clearly marked). Criticised: Process/FAQ/Contact looking "lazy" (pale, centred heading + white cards). Rule:
  the end of the page gets the same effort as the hero; alternate light/dark; header aligned to grid edges; paired buttons
  same height. Log new praise/criticism in project memory `design-log.md`; source: old project memory note `nick-design-praise-log` (not copied).
- **Structure vs layout (Nick, 17 Nov 15:58, permanent; replaces every other design rule from 17 Nov):**
  - STRUCTURE = the wireframe: which pages exist, which sections come in which order, and what each section SAYS. You could
    write it on paper. It has no visuals. Structure is FIXED and comes from United Plumbing + Plumbing by Paul, because it's
    built to rank #1 (SEO/AEO/GEO) and turn visitors into calls.
  - LAYOUT/DESIGN = how a section looks. It is NEVER copied. No section may look like another client's section. No section
    layout may repeat anywhere on the same site. If the homepage shows reviews as a carousel, the Reviews page, service pages
    and city pages must each show reviews in a different layout.
- **Master structure (from the live United and Paul sites):**
  - Every page: utility bar (rating, licence, hours), header with phone CTA, emergency strip, BreadcrumbList + LocalBusiness
    schema, then it ends with CTA + form, areas, footer with NAP.
  - HOME: hero (H1 "<24/7> <Trade> in <City>, <ST>", towns served, call button + "Tap to call" microline, text-a-photo,
    trust badges) / call-back form bar with "What's going on?" chips / rating band + reviews / 6 services (one marked "Most
    asked") / family-about teaser + crew / work photos / why us / process in 4-5 steps (price first) / emergency band /
    areas / FAQ (schema) + "Ask a person" / final estimate form.
  - SERVICES HUB: hero + form / emergency strip / symptom picker ("Tell us what you see") / service families / full list /
    promises / reviews / FAQ / CTA.
  - SERVICE PAGE: H1 "<Service> in <City>, <ST>" + short form / quick-answer block (AEO) + job-facts card / problem types /
    DIY vs pro / process / equipment feature / pricing explainer / reviews / why us / prevention tips / FAQ (schema) /
    related services / CTA / areas.
  - AREA HUB: hero + form / "one base" (NAP) / towns grouped / "closer means faster" / local quirks / reviews by town / FAQ /
    CTA.
  - CITY PAGE: H1 "<Trade> in <City>, <ST>" / quick answer / distance from base / local home problems / top 6 services
    (links) / neighbourhoods / local permits question as H2 / reviews / photos / family band / city emergency band / city
    FAQ / nearby towns / city-named CTA.
  - ABOUT: hero / origin story + timeline / numbers / owners / crew / 4 rules / proof (video, reviews) / community /
    licences / CTA.
  - CONTACT: hero ("real person, we pick up") / ways to reach us, fastest first / form + what happens next / shop NAP + map /
    other tasks / 3 FAQs / phone band.
  - Plus Reviews, Our work and FAQ pages, and Guides if there's content. Adapt the trade words for non-plumbers (Khinda =
    electrician).
- **Craft:** load skill `pka-site-craft` with this one. It holds HOW United/Paul reached their quality (brand audit,
  United anatomy, 3 directions + translation table, client design system with an owned motif, copy from the client's own
  lines, section craft, review loop) and two Paul worked examples. This skill wins if they ever differ.
- **Design process (in this order, never skip):**
  1. Research the client + claude-seo plan.
  2. Write the WIREFRAME doc for every page from the master structure, with the client's real copy points. Show it to Nick
     first.
  3. For EACH section, find 2-3 references: 21st.dev MCP first, then Dribbble, Awwwards, Land-book, Pinterest. Log in a
     component map which 21st.dev component or reference is used for which section on which page, so the build later just
     pulls those components. Send Nick the wireframe + component map before any Figma design.
  4. Design in Figma (file QbPRX8MU5AA6peTerdP5gg, the client's page) in the client's brand colours, font, logo and real
     photos. The imagery must match the trade (no pipes on an electrician site).
  5. Details like United/Paul: small captions (e.g. Paul's "The plumber you deserve" under the button), drawn line dividers
     between sections, no empty generic sections split by a plain line.
  6. QA before showing Nick: screenshot every frame and check that it matches the wireframe, that no layout repeats on the
     site or matches United/Paul/another client, that there are 0 placeholders, and that there's no other client's name,
     town, phone or photo. Desktop + mobile.
- Fonts: for free concept designs, never reuse a heading/body font or style group from the register (SOP section 11), and add
  the new row. For real client builds the client's own brand fonts win (Paul = Montserrat / Russo One / Yellowtail).
  Open question for Nick: confirm this split (see project memory `open-items.md`).
- Yellow "<client> to confirm" sticky notes sit BESIDE frames, never in them.
- Figma gotchas: start EVERY use_figma call with `await figma.setCurrentPageAsync(<your company page>)` and create frames on
  that page explicitly: other threads work in the same file and switch the current page, so new frames can land on another
  client's page (happened 17 Nov, Glass frames landed on Mike/Khinda/Easy Breezy pages; moved back).
  upload_assets with webp renders blank (convert to JPEG); never upload_assets with a page id as nodeId;
  vector paths have no "A" arc (use C curves); createNodeFromSvg + resize does not scale strokes (use rescale());
  2x export = clone into temp clip frame, rescale(2), screenshot, delete; thread attachment cap ~24 (send Figma links).
- Self-review (ideally a different instance), fix blockers, then report to Nick: Figma link + screenshots + to-confirm list.
  **STOP. Wait for Nick's decision.**

## Step 4: Build (only after approval)
- Write a BUILD-BRIEF first (example: `/mnt/project-files/plumber-king-agency/designs/plumbing-by-paul/BUILD-BRIEF.md` (old project files; may not exist in new project)).
- Stack used: Astro 5 static, GSAP + ScrollTrigger, Lenis, Astro `<Image>` (AVIF/WebP), @astrojs/sitemap. Code in repo
  niktheplumberking/plumber-king-agency, folder `clients/<client>-site/` on a branch. Threads cannot create GitHub repos;
  Nick does. Figma is the spec, 1:1 (`get_design_context` / `get_metadata` / `get_screenshot`).
- **Build standard:** clean public Vercel link (`<name>.vercel.app`, noindex preview), loading screen, entrance animations
  with clear hierarchy, wide screens scale with Figma proportions (zoom the html above 1440; `--vw100` for full-bleed).
- **United motion system = the UX standard (Nick, 15 Nov).** Port from United
  (`git show origin/claude/project-thread-lela0k:clients/united-plumbing-site/src/scripts/motion.ts`, Intro.astro):
  - Lenis `lerp 0.1, wheelMultiplier 1, smoothWheel true`, GSAP ticker, `lagSmoothing(0)`, Lenis scroll -> ScrollTrigger.update.
    Touch scroll native (syncTouch off).
  - Per-element reveals, `once: true`: single elements `top 88%`, groups/staggers `top 85%`, split headings `top 88%`,
    SVG draws `top 92%`, counters `top 90%` (1.8 s power2.out). Triggers well inside the viewport.
  - Effects (fromTo, explicit end values, `immediateRender: true`), ~1 s: up y60 1.0 s power3.out; left x-80; right x80;
    scale 0.92; fade; clip inset 1.2 s power3.inOut; pop scale 0.6 back.out(2.2) 0.6 s; heading lines yPercent 110 +
    rotate 2 -> 0, 0.9 s, 0.1 s/line, back.out(1.4); children stagger 0.09 s. Mix effects per element by role.
  - Nick's 3 priority groups per section: G1 main (headline, subtitle, key photo) delay 0; G2 support (buttons, pills,
    chips, name patches) +0.15 s; G3 add-ons (seals, underlines, counters, line draws) +0.3 s.
  - Hero: ordered timeline, 0.12 s steps, 0.85-0.9 s; header drops first; loader on first visit only, hands off into the hero.
  - **Never:** an element flashing before its animation (pre-hide under `html.motion` before first paint, 3.5 s safety
    shows all if JS fails); instant-finish fast-scroll shortcuts; triggers at 105%; durations under ~0.9 s for reveals;
    CSS transforms/parallax on photos (parallax goes on wrappers, yPercent); raw resize -> ScrollTrigger.refresh
    (width-only + `ignoreMobileResize`). Phones: x distances ±40.
  - Reduced motion = static; no-JS = everything visible; anything moving >5 s gets a pause.
  Full plan: `/mnt/project-files/plumber-king-agency/designs/plumbing-by-paul/ROUND4-MOTION-PLAN.md` (old project files; may not exist in new project).
- Forms: no backend unless `PUBLIC_FORM_ENDPOINT` set; else go to `/thank-you` (say so in README).

## Step 5: QA (before showing Nick)
- `npm run build` clean; Playwright at 1440 and 390 vs the Figma frame, section by section; also wide widths.
- No overlaps, no broken links (every internal link hits a built page), no error pages, no misclicks, no horizontal scroll
  at 390, 44 px tap targets, axe 0 violations, console clean, keyboard path through menu and forms.
- Lighthouse mobile Home: LCP <= 2.5 s, CLS 0. Report what was NOT checked.
- Proof for Nick: side-by-side videos vs United for motion changes.

## Step 6: Deploy preview and launch
- Vercel API token is in the cloud env PLUMBER (network secret, api.vercel.com; proven 17 Nov): deploy previews from the cloud via
  the API/CLI first.
- Vercel (Nick's account): if the CLI is logged out, open the Vercel device-approval page in a new tab in Nick's Chrome
  (Claude in Chrome) and tell him in the thread; HE clicks approve. Deploy: `vercel build --prod` then
  `vercel deploy --prebuilt --prod` (plain deploy hung).
- Launch (Nick's go only; launch and money stay human): set `SITE_URL=https://<domain>` (not PUBLIC_SITE_URL),
  `PUBLIC_NOINDEX=false`, GTM id from the client's old site; upload `dist` incl. `public/.htaccess` to Hostinger;
  submit `sitemap-index.xml` in GSC + Bing. All "<client> to confirm" blanks must be filled before launch.
- Hostinger upload pattern (PKA site): zip -> hPanel File Manager -> public_html, extract, move contents up incl. .htaccess,
  delete leftovers. Changed images need a new file name (1-year cache).
- Verify TLS only via SSL Labs (cloud openssl sees re-signed certs). A "site down" report may be Nick's TunnelBear VPN:
  check check-host.net first.

## Step 7: Monthly SEO
- claude-seo audit (`seo-*` skills in pk-brain; backup: Nick's PC); GSC/Bing read in Nick's signed-in Chrome via Claude in Chrome; compare to the last snapshot.
- Namecheap: never switch nameservers, never edit or delete MX/TXT; adding a NEW TXT is OK only with Nick's go.
- Blogs/backlinks: only with Nick's approval per post; avoid scaled-content and link-exchange schemes.
