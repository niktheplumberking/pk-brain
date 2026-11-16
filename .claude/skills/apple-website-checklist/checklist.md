# Apple Website Checklist v1.1

Each item checks one or more rules from the `apple-design` skill (rule IDs are in the "Rules" column).

**Method** says how the item is checked:
- **AUTO** is the in-browser audit check named in `scripts/audit.js`.
- **SCAN** is the static-scan finding named in `scripts/static-scan.mjs`.
- **MANUAL** is a hands-on procedure done with browser tools (keyboard presses, clicks, screenshots) or by reading the code.

**Severity** decides what happens when an item fails:
- **BLOCKER:** the site cannot ship.
- **MAJOR:** fix before handover.
- **MINOR:** fix when reasonable, or record a reason.

**Verdicts:**
- **PASS:** evidence proves the item is compliant.
- **FAIL:** evidence proves at least one violation.
- **N/A:** the feature does not exist on the site. Say what you checked to establish that.
- **UNVERIFIED:** it could not be checked. Say why. UNVERIFIED is never counted as PASS.

## A. Structure and semantics
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-01 | `<html lang>` set, unique descriptive `<title>` on every audited page | AUTO doc-lang, doc-title | A11Y-08 | MAJOR | both present on every audited page, and titles differ between pages |
| C-02 | Exactly one visible `<h1>`, no skipped heading levels | AUTO h1-count, heading-order | A11Y-08 | MAJOR | h1-count = 1 and heading-order passes on every page |
| C-03 | Landmarks: header, nav, a single main, footer | AUTO landmarks | A11Y-08 | MAJOR | all present, exactly 1 main |
| C-04 | No duplicate ids | AUTO duplicate-ids | A11Y-07 | MINOR | 0 duplicates |
| C-05 | Actions are `<button>` and navigation is `<a href>`; no clickable divs | AUTO clickable-non-controls, dead-links · SCAN onclick-div, clickable-cursor-div | BTN-01 | MAJOR | 0 real violations once each flagged element has been inspected |

## B. Accessibility and legibility
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-06 | Zoom not blocked; page usable at 200% | AUTO viewport-zoom · SCAN zoom-blocked · MANUAL: set `document.documentElement.style.zoom='2'` or a 640px-wide viewport, then screenshot | A11Y-01 | BLOCKER | zoom allowed, and at 200% nothing is clipped or overlapping and no content is lost |
| C-07 | Text contrast meets AA in **light AND dark** themes | AUTO contrast (run in both color schemes) | A11Y-02 | BLOCKER | 0 failures in each theme |
| C-08 | Text over images and gradients is legible | AUTO contrast-over-images · MANUAL screenshot review | A11Y-02, IMG-03 | MAJOR | every flagged element has a scrim or overlay, or measured contrast ≥ AA |
| C-09 | Color is never the only signal (errors, status, links in text, toggles, charts) | MANUAL: inspect those components | A11Y-03 | MAJOR | each one also uses text, an icon or a shape |
| C-10 | Touch targets ≥ 44×44 at a phone viewport; nothing < 24×24 at any viewport | AUTO target-size-24 (all viewports), target-size-44 (375px viewport) | A11Y-04 | MAJOR | no target < 24 anywhere; 24–44 targets at 375px are fixed or justified by spacing |
| C-11 | Every control and image has an accessible name or alt | AUTO control-names, img-alt, svg-img-name, iframe-title · SCAN img-no-alt, next-image-no-alt | A11Y-07, ICN-03 | BLOCKER | 0 violations |
| C-12 | Full keyboard operation | MANUAL: press Tab through the whole page and screenshot sample stops. Confirm every interactive element is reachable, the order matches the visual order, and nothing traps focus. AUTO positive-tabindex, aria-hidden-focusable | A11Y-05, KEY-02 | BLOCKER | every interactive element reachable in a logical order, with no traps |
| C-13 | Visible focus indicator on every focus stop | MANUAL: screenshot focus on links, buttons, inputs and nav · SCAN outline-none, missing-focus-visible | A11Y-05, KEY-03 | BLOCKER | the indicator is visible on every stop, including on dark or image backgrounds |
| C-14 | Reduced motion respected | SCAN missing-reduced-motion, scroll-lib · AUTO reduced-motion-css, running-animations · MANUAL: read the motion code (Framer, GSAP, Lenis, CSS keyframes) | A11Y-06, SCR-01 | MAJOR | under reduce, autoplay, parallax, looping and scroll-jacking motion stops (brand exceptions recorded with a reason) |
| C-15 | Dynamic messages announced (form success and errors, async results) | SCAN missing-aria-live · MANUAL: submit forms | A11Y-17, FDB-02 | MAJOR | a live region or role=alert carries those messages |

## C. Layout and responsive design
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-16 | No horizontal page scroll at 320, 375, 768, 1024 and 1440 px | AUTO horizontal-overflow at each width | LAY-02 | MAJOR | scrollWidth ≤ clientWidth at every width |
| C-17 | Same features at every width; mobile nav reachable and usable | MANUAL: compare nav and actions at 375 and 1440, open the mobile menu | LAY-02, NAV-04 | MAJOR | nothing is removed on mobile, and the menu opens, closes and is keyboard-operable |
| C-18 | Safe areas: fixed and sticky bars respect notches and the home indicator | AUTO viewport-fit · SCAN presence safe-area · MANUAL: inspect fixed elements | LAY-01, LAY-14 | MINOR | viewport-fit=cover plus env() padding on fixed bars, or there are no edge-hugging fixed bars |
| C-19 | Images have reserved space and are responsive | AUTO img-dimensions · MANUAL: check srcset or the framework image component | IMG-01, IMG-02 | MINOR | no layout-shifting images, and photos served responsively |
| C-20 | Hover-only content is also available by focus and tap; hover styles are gated | MANUAL: find hover reveals (menus, cards, tooltips) and test with keyboard and a 375px touch viewport | INP-02, INP-01 | MAJOR | everything revealed on hover is reachable without hover |

## D. Components and interaction
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-21 | Dialogs, menus and mobile drawers: Esc closes them, focus is trapped and then returned, there is a visible close button, and modals are never stacked | AUTO dialog-names · MANUAL: open each one, press Esc and Tab | MOD-01, MOD-02, MNU-01 | BLOCKER | every one behaves correctly (N/A if none exist) |
| C-22 | Destructive actions are never the default; confirmation or undo exists | MANUAL | MOD-03, A11Y-20 | MAJOR | correct, or N/A |
| C-23 | Navigation: nav landmark, current page marked, ≤ 5–7 top items, no empty or disabled items | AUTO nav-current, nav-labels · MANUAL: count items | NAV-01..03 | MINOR | aria-current is present and the counts are reasonable |
| C-24 | Carousels and auto-advancing content: prev/next buttons, a pause control, named dots, and paused under reduced motion | MANUAL | CAR-01..03 | MAJOR | correct, or N/A |
| C-25 | Accordions and disclosures use `<details>` or aria-expanded | MANUAL: inspect FAQ and accordion markup | DIS-01 | MINOR | correct, or N/A |
| C-26 | Smooth scrolling keeps native behavior (Space, PgDn, anchor links, find-in-page) and turns off under reduced motion | MANUAL: press keys, click anchor links · SCAN scroll-lib | SCR-01, SCR-02 | MAJOR | native behavior works, and there are no nested same-axis scrollers |
| C-27 | Links that open a new tab are rare and use rel=noopener; link text is meaningful | AUTO target-blank-rel, link-text · SCAN target-blank, click-here | WIN-01, WRT-03 | MINOR | 0 violations |

## E. Forms
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-28 | Every field has a visible label; a placeholder is never the label | AUTO field-labels, placeholder-as-label · SCAN placeholder-no-label-hint | FRM-01 | BLOCKER | 0 violations |
| C-29 | Correct type, autocomplete and inputmode on personal-data fields | AUTO autocomplete, input-types | FRM-02 | MAJOR | 0 violations |
| C-30 | Inline errors with aria-invalid and aria-describedby that tell the user how to fix the problem; focus moves to the first error | MANUAL: submit an empty form and an invalid one, then inspect the DOM | FRM-03 | MAJOR | errors appear next to their fields, are announced, are specific, and focus moves |
| C-31 | Submit not disabled for validity; double-submit prevented; success confirmed | AUTO disabled-submit · SCAN disabled-submit · MANUAL: submit | FRM-08, BTN-06, FDB-03 | MINOR | correct |
| C-32 | Radio and checkbox groups use fieldset and legend; passwords are never prefilled | AUTO radio-groups, password-prefill | FRM-12, FRM-07 | MAJOR | 0 violations |

## F. Color, theme, type, motion quality
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-33 | Dark mode is a designed palette following the system setting (or a recorded single-theme decision); no white flash | AUTO dark-mode, explicit-background · MANUAL: screenshot both schemes and reload in dark | DRK-01, DRK-02, DRK-04 | MAJOR | both themes are correct, or the decision is recorded |
| C-34 | Color is defined as semantic tokens (CSS variables or theme config), not scattered hex values | MANUAL: inspect globals.css or the tailwind config | COL-01 | MINOR | tokens are used for the core palette |
| C-35 | Body text ≥ 16px on mobile, nothing < 11px, comfortable line-height and measure | MANUAL: read computed styles | A11Y-10, TYP-03, TYP-05 | MINOR | correct |
| C-36 | Translucent or blurred surfaces have solid fallbacks and readable text | SCAN glass-no-fallback · MANUAL | MAT-01..03 | MINOR | fallback present, or no glass used |

## G. Content, privacy, legal
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-37 | No Apple SF or New York fonts, no SF Symbols artwork; all fonts licensed for web | AUTO apple-fonts · SCAN apple-font-face, apple-font-file · MANUAL: check the icon library | LIC-01 | BLOCKER | 0 Apple font or symbol assets |
| C-38 | Apple Pay, Sign in with Apple and Maps (if used) follow the official rules | MANUAL against `09-apple-services-on-web.md` | LIC-02, APAY-*, SIWA-*, MAP-* | BLOCKER | compliant, or N/A |
| C-39 | Permission prompts only after a user action, with an explanation; consent banner has no dark patterns | SCAN permission-request · MANUAL: load the page fresh | PRV-01..03 | BLOCKER | no prompt on load; declining is as easy as accepting |
| C-40 | Privacy policy is linked where data is collected (forms, newsletter) | MANUAL | PRV-04 | MAJOR | link present near each form or in the footer |
| C-41 | Media: no sound autoplay; autoplay video is muted, has a pause control, and doesn't play under reduced motion; captions for speech | AUTO autoplay-sound, autoplay-pause-control, captions · SCAN autoplay-media | MED-01, MED-03 | MAJOR | correct, or N/A |
| C-42 | Copy: verb-first buttons, no "click here", empty states give a next step, errors don't blame the user | MANUAL: read the UI copy | WRT-03..06 | MINOR | correct |
| C-43 | Account deletion is available if accounts exist | MANUAL | ACC-01 | BLOCKER | correct, or N/A |

## H. Performance and loading
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-44 | No blank screen; skeletons or placeholders for async content; no preloader that differs from the page | MANUAL: reload with throttling or inspect the loading code | LOD-01, LOD-02 | MAJOR | correct |
| C-45 | Core Web Vitals within budget (LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms) | MANUAL: run Lighthouse (`npx lighthouse <url> --only-categories=performance,accessibility --output=json --chrome-flags="--headless"`) or use the Performance API; record the numbers | LOD-04 | MAJOR | values recorded and within budget. If no tool could run, mark UNVERIFIED, never PASS |
| C-46 | Favicon set and touch icon present | MANUAL: inspect `<head>` | FAV-01 | MINOR | favicon plus apple-touch-icon present |

## I. Local-service essentials (client sites built with `plumberking-site-playbook`; N/A for other site types)
| ID | Check | Method | Rules | Sev | Pass when |
|---|---|---|---|---|---|
| C-47 | Hero H1 states who, what and where (trade + service area) | MANUAL: read the `<h1>` on home at 375 and 1440 | Playbook §2 | MAJOR | the H1 names the trade and the area in plain words |
| C-48 | Real owner, family or team photo in the hero (no stock people) | MANUAL: screenshot the hero; confirm the source with the brief | Playbook §2 | MAJOR | real photo present, or a labelled placeholder logged as a blocker (never at launch) |
| C-49 | Tap-to-call: a `tel:` link visible above the fold on phone; the phone number is in the desktop header | AUTO: `document.querySelectorAll('a[href^="tel:"]')` plus its position at 375 | Playbook §2 | BLOCKER | present and visible without scrolling at 375 |
| C-50 | Trust proof is real: reviews have name and source, licences and years match the brief, no invented logos or awards | MANUAL against `docs/brief.md` | Playbook §2–3, WRT | BLOCKER | every claim traceable to the brief or a source |
| C-51 | LocalBusiness/Plumber JSON-LD valid, with NAP identical to the footer and contact page | AUTO: parse `script[type="application/ld+json"]` and compare to the visible NAP | Playbook §2 | MAJOR | valid JSON and matching NAP |
| C-52 | Motion level matches the brief, and the conversion elements (H1, phone, CTA) are visible without waiting for animation | MANUAL: reload, screenshot at about 300ms; check the brief's level | Playbook §4 | MAJOR | H1, phone and CTA visible on first paint; effects match the agreed level |
