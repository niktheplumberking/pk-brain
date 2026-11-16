---
name: plumberking-site-playbook
description: PlumberKing agency playbook for building local-service business websites (plumbers, HVAC, roofers, electricians, trades) that convert AND look award-level. Use when planning, designing or building any client website - it sets the must-have local/conversion elements, SEO/GEO/AEO basics, the client's motion level (1 calm / 2 standard / 3 showcase) and the premium layer (21st.dev components, GSAP, Lenis, 3D). Works together with apple-design (accessibility rules) and apple-website-checklist (QA).
metadata:
  version: "1.0.0"
---

# PlumberKing site playbook

> **Plumber King client work (added 16 Nov 2026, install QA):** plumbers only. Where this playbook and skill
> `pka-client-site` differ (motion level and the United motion system, parallax or transforms on photos, flow and gates),
> `pka-client-site` wins. This playbook supplies the checklists underneath it.

The goal is sites that **get the phone ringing first** and **look award-level second**, with no trade-off between the two. Premium motion sits on top of a conversion-first structure and never replaces it.

## How the rule sets fit together
- **This playbook:** what a local-service site must contain, the motion level, and the premium layer.
- **Client brand guide:** colours, fonts, logo.
- **`apple-design`:** how things behave. It covers accessibility, reduced motion, tap sizes, forms and contrast. Its MUST rules always apply, at every motion level.
- **`apple-website-checklist`:** the evidence-based QA before handover.

If something here seems to clash with `apple-design`, keep the effect and make it accessible. For example, keep the marquee and add a pause button. Don't drop the rule.

## 1. Before building: fill in the brief
Every site starts with these answers, written in the project's `docs/brief.md`. If an answer is missing, ask; never invent it.
- **Business facts:** name, owner name(s), trade, and services ranked by profit.
- **Where they work:** service area (cities and neighbourhoods), plus address or service-area-business status.
- **Contact:** phone, hours, and whether they offer emergency/24-7 service.
- **Proof:** licences, insurance, years in business, guarantees, real reviews (source and link), photos of the owner, team, vans and real jobs.
- **Motion level:** 1, 2 or 3 (section 4), chosen with the client.
- **Main goal:** calls, form leads or bookings.

## 2. Local-service must-haves (every site)
**Hero (above the fold, on phone and desktop)**
- **H1 says who, what and where** in plain words. Example: "Family-owned plumbers serving Austin & Round Rock". Put the business name nearby, not as the H1.
- **A real photo of the owner or family** (or the team with the van) in the hero. Never stock people. If the photo isn't ready yet, use a labelled placeholder and log it as a blocker.
- **Primary CTA: tap-to-call** (`tel:` link with the number visible). Secondary CTA: get a quote or book.
- **Trust strip right under the hero:** star rating with review count (linked to the source), licensed & insured, years in business, guarantee.

**Conversion**
- **Mobile:** a sticky call/quote bar that respects safe areas.
- **Header phone number:** always visible on desktop.
- **Short forms** of 3–5 fields (name, phone, service, ZIP/area, message) with inline errors per `apple-design` FRM-*.
- **Reviews:** real only, word for word, with name and source. Never invent or "improve" reviews.
- **Services:** one section per core service, each with a CTA. Show prices only if the client approves.
- **Service area:** a section with an area list and an optional map embed (Maps rules: `apple-design` 09 / Google ToS).
- **Emergency:** if they offer emergency work, a visible "24/7 emergency" path.
- **Owner story:** an About section with face, name and why they started. People hire people.

**SEO / GEO / AEO basics**
- **Schema:** JSON-LD `Plumber` (or the matching `LocalBusiness` subtype) with NAP, area served, hours, rating, `sameAs`.
- **Pages:** one page per core service, plus a service-area page per major city. Each needs real, unique content; no thin doorway pages.
- **Meta:** unique title and meta description per page, plus `og:image`, sitemap, robots and canonical.
- **AEO/GEO:** an FAQ section answering real customer questions (FAQPage schema where it fits), clear factual sentences AI engines can quote, and optionally `llms.txt`.
- **NAP:** identical everywhere (site, Google Business Profile, directories).
- **Performance:** LCP ≤ 2.5s on mobile. The hero image must not wait for an entrance animation.

## 3. Copy rules
- Speak to a homeowner with a problem. Short sentences, benefits first, local words (neighbourhoods, landmarks).
- No invented facts, numbers, awards, guarantees or logos. Placeholders must be visibly labelled and gone by launch.
- Buttons start with a verb: "Call now", "Get my free quote".

## 4. Motion levels (choose per client in the brief)
| Level | Feel | Typical use | What's allowed |
|---|---|---|---|
| **1. Calm** | Clean, fast, trustworthy | Conservative clients, older audiences | Fade/slide reveals, hover states, Lenis, subtle counters |
| **2. Standard** (default) | Modern and alive | Most PlumberKing clients | Level 1 plus staggered text reveals, parallax images, animated icons, 21st interactive components, one scroll-driven moment per page |
| **3. Showcase** | Award-level, portfolio piece | Clients who want to stand out; our portfolio | Level 2 plus pinned scroll scenes, 3D (React Three Fiber / Spline), WebGL backgrounds, magnetic buttons, custom cursors, page transitions |

**Rules at every level**
- The conversion elements in section 2 stay visible and usable instantly. Never hide the phone number, CTA or H1 behind an animation.
- `prefers-reduced-motion: reduce` gives a calm, complete version of the page: no Lenis, no scroll-jacking, no loops. This only affects visitors who asked for it.
- Anything that moves for more than 5 seconds (marquees, review carousels, looping video) gets a visible pause button and pauses on keyboard focus.
- Backgrounds should feel alive (gradients, textures, subtle patterns, 3D) but text on them still meets contrast (`apple-design` A11Y-02).
- 3D and WebGL load lazily, never block the first paint, have a static fallback image, and pause when off-screen.
- Performance budget wins over effects. If an effect pushes mobile LCP past 2.5s, simplify it.

## 5. Premium layer (how we get "two levels above")
- **21st.dev MCP:** search for interactive components (hero sections, testimonials, feature grids, animated text, backgrounds) with `mcp__21st__search`, then fetch the code. Treat it as raw material:
  - restyle it to the brand;
  - make it accessible (labels, keyboard, reduced motion);
  - remove hotlinked or demo images;
  - check the licence.

  Our account has no 21st AI generation (0 credits), so we adapt the code ourselves.
- **Stack:** Next.js + Tailwind, GSAP + ScrollTrigger, Lenis, Motion (Framer) for component-level animation, React Three Fiber or Spline for 3D, Lucide icons.
- **Signature moments:** each page gets one memorable moment, not ten. Examples:
  - a pinned "how we fix it" sequence;
  - a 3D pipe/tool model reacting to scroll;
  - an animated service-area map;
  - a before/after slider.
- **Text motion:** headings reveal by line or word (not letter by letter on long text), body text fades in, and nothing important waits more than about 0.6s.
- **Images:** real job photos treated premium (masks, parallax, duotone in brand colours). Use AI-generated imagery only for backgrounds or illustrations, never for fake people, team or "real jobs".

## 6. Done means
1. The checklist in section 2 is complete for this site.
2. The `apple-website-checklist` full pass is done: 0 BLOCKER and 0 MAJOR failures, or each one explicitly accepted by Nick.
3. After launch, log what worked (conversion, speed, client feedback) in the project's `docs/lessons.md`. After 15–20 projects these become our design database.
