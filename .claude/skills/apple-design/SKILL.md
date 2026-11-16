---
name: apple-design
description: The agency's website design and UX rule book, adapted for the web from Apple's Human Interface Guidelines (crawled 2026-10-17). Use whenever designing, building, reviewing or fixing a WEBSITE or web app UI - layout, typography, color, dark mode, accessibility, forms, navigation, modals, loading states, motion, copywriting, privacy prompts, AI features, media, charts, Apple Pay / Sign in with Apple on the web. Pairs with the apple-website-checklist skill, which verifies a finished site against these rules.
metadata:
  version: "1.0.0"
  source: "Apple Human Interface Guidelines, 173 pages, crawled 2026-10-17"
---

# Apple Design (web rule book)

These are the agency's rules for building websites. They come from Apple's Human Interface Guidelines (HIG), rewritten in our own words and adapted for the web. Every rule has an ID such as `A11Y-03` and a `src:` tag that names the HIG page it came from.

## Precedence (read first)

1. **The client brand guide wins** on colors, fonts, logo and visual identity. Example: CourtHub uses its own brand guide.
2. **This rule book wins** on behavior, usability, accessibility, structure and copy rules.
3. **`plumberking-site-playbook`** decides what a client site must contain (local-service essentials) and how much motion it gets (levels 1–3). Every motion level must still meet this rule book. Make the effect accessible; don't drop it.
4. **Style references** (21st.dev components, inspiration sites) decide aesthetics only where none of the above gives a rule.
5. Two kinds of rule:
   - **MUST** rules are mandatory. Breaking one needs a written reason in the project.
   - **SHOULD** rules are the default. They may be overridden when there is a good, stated reason.

## Truthfulness rule

- **Never claim a rule is met without evidence.** When you say a rule is satisfied, point to the code, a measured value or a browser check.
- **When unsure what Apple actually said**, read the original page in `C:\PK-WORK\Code\apple-design-system\source\hig-crawl-2026-10-17\<src>.md`. Do not guess.
- **Images are missing from that crawl.** Only the text was captured.

## Core MUST rules (always apply)

**Accessibility and legibility.** Details are in `references/01-accessibility-motion.md`.

- `A11Y-01` Text must stay usable when zoomed to 200%:
  - set type in rem/em;
  - never use `user-scalable=no` or `maximum-scale=1`.
- `A11Y-02` Contrast must be at least 4.5:1 for normal text and 3:1 for large text (18pt or 24px and up) or bold text. Aim for 7:1 on custom color pairs. Check both light and dark themes.
- `A11Y-03` Never use color as the only signal. Add text, an icon or a shape.
- `A11Y-04` Size touch targets at 44×44 CSS px or more under `(pointer: coarse)`. The absolute floor is 24×24, which is the WCAG 2.5.8 minimum.
- `A11Y-05` Everything must work with the keyboard. Every focusable element shows a visible `:focus-visible` indicator. DOM order must match visual order, and positive `tabindex` is not allowed.
- `A11Y-06` Honor `prefers-reduced-motion`. This affects only visitors whose device asks for it; everyone else gets the full motion level from the brief.
  - no auto-playing, parallax, zoom or looping motion when it is set;
  - nothing may flash more than 3 times per second.
- `A11Y-07` Every control needs an accessible name. Meaningful images need `alt`; decorative images get `alt=""`.
- `A11Y-08` Use one `<h1>`, a logical heading order, landmarks (`header`, `nav`, `main`, `footer`), a unique `<title>` and `<html lang>`.

**Interaction.** Details are in `references/03-layout-input.md`.

- `INP-01` Anything done by gesture, drag or hover must also be possible with a visible control.
- `INP-02` Hover effects go inside `@media (hover:hover) and (pointer:fine)`. Content revealed on hover must also appear on `:focus-visible` and on tap.
- `INP-03` Never override browser or OS shortcuts such as Ctrl/Cmd+C, V, Z, F, P and S.
- `LAY-01` Keep content inside the safe areas: `viewport-fit=cover` together with `env(safe-area-inset-*)` on fixed or full-bleed bars.
- `LAY-02` At every width the feature set stays the same. Only the arrangement changes. No horizontal page scroll at 320px or wider.

**Components.** Details are in `references/04-navigation-components.md` and `references/05-modals-feedback-loading.md`.

- `MOD-01` Dialogs:
  - close with Esc and a visible close button;
  - trap focus while open;
  - return focus to the trigger when closed.
- `MOD-02` Never stack modals or alerts.
- `MOD-03` Never make a destructive action the default or primary-styled button. Cancel is never the default.
- `FRM-01` Every field has a visible `<label>`. A placeholder is never the label.
- `FRM-02` Use correct `type`, `autocomplete` and `inputmode` attributes so autofill and the right mobile keyboard work.
- `FRM-03` Show errors inline next to the field (`aria-invalid` plus `aria-describedby`). Say how to fix the problem and do not blame the user.
- `LOD-01` Never show a blank screen while loading. Use skeletons or placeholders. Content should be usable within about 2 seconds.
- `MED-01` Nothing plays audio automatically. Video that starts on its own must be muted and have visible pause controls.

**Content, privacy, legal.** Details are in `references/07-content-privacy.md` and `references/10-licensing-exclusions.md`.

- `PRV-01` Ask for geolocation, notification, camera or microphone permission only after a user action, and explain why.
  - Do not use dark patterns on consent banners or pre-permission screens.
- `ACC-01` If people can create an account, they must be able to delete it, and the delete option must be easy to find.
- `LIC-01` Never self-host or `@font-face` the Apple SF or New York fonts. Never ship SF Symbols artwork on a website. Use `system-ui` stacks and open-licence icon sets.
- `LIC-02` Apple Pay and Sign in with Apple buttons must be Apple's official rendered buttons, following their brand rules (`references/09-apple-services-on-web.md`).

## Reference files (load only what the task needs)

| File | Load when working on |
|---|---|
| `references/01-accessibility-motion.md` | contrast, text size, targets, screen readers, motion, materials/blur |
| `references/02-color-type.md` | color tokens, dark mode, type scale, letter-spacing, icons and images |
| `references/03-layout-input.md` | responsive layout, breakpoints, safe areas, touch/mouse/keyboard, hover, focus, gestures |
| `references/04-navigation-components.md` | buttons, nav, tabs, sidebars, menus, toolbars, carousels, lists, tables, accordions, scrolling, search |
| `references/05-modals-feedback-loading.md` | dialogs, alerts, sheets, popovers, loading, progress, feedback, undo, tips/tooltips |
| `references/06-forms-inputs.md` | forms, inputs, selects, toggles, sliders, steppers, OTP, uploads, ratings |
| `references/07-content-privacy.md` | copywriting, inclusion, RTL, privacy prompts, accounts/sign-in, notifications, review prompts |
| `references/08-media-charts-ai.md` | video, audio, full screen, charts, AI/ML features |
| `references/09-apple-services-on-web.md` | Apple Pay on the web, Sign in with Apple, MapKit JS, Wallet, Apple trademarks |
| `references/10-licensing-exclusions.md` | licensing, what NOT to adopt from Apple, resolved conflicts |
| `references/snippets.md` | copy-paste CSS/HTML for tokens, focus, motion, safe areas, dialogs, forms |

## Workflow

1. **Before building**, read the reference files for the parts you are about to build.
2. **While building**, follow the MUST rules. Cite rule IDs in comments only where a choice is not obvious.
3. **When the site is done**, the `apple-website-checklist` skill is mandatory. Run it and fix every FAIL.
