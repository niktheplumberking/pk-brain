# 01 Accessibility, legibility, motion, materials

Sources: `accessibility`, `voiceover`, `motion`, `materials`, `designing-for-games`, `pointing-devices`, `eyes`. The HIG gives numbers in points (pt); on the web, treat 1pt as roughly 1 CSS px.

## Text size and scaling
- `A11Y-01` **MUST:** text must stay usable at 200% enlargement (src: accessibility, which says "at least 200 percent").
  - Use rem or em for font sizes.
  - Do not lock zoom in the viewport meta tag.
  - Test at 200% browser zoom.
  - Layouts must reflow without clipping or overlapping.
- `A11Y-10` **SHOULD:** use these sizes for body text.

  | Context | Body text | Never smaller than |
  |---|---|---|
  | Mobile | 16–17px (iOS default is 17pt) | about 11–12px (iOS minimum is 11pt) |
  | Dense desktop UI | 13px (macOS default is 13pt) | 10–11px |

- `A11Y-11` **SHOULD:** avoid thin weights (Ultralight, Thin, Light) for body or UI text. If thin text is unavoidable, set it larger.
- `A11Y-12` **SHOULD:** when text gets large, adapt the layout:
  - stack inline items;
  - reduce the number of columns;
  - wrap text rather than truncate it;
  - keep primary content at the top.

## Contrast
- `A11Y-02` **MUST:** meet these contrast minimums (src: accessibility, dark-mode).

  | Text | Minimum ratio | Target |
  |---|---|---|
  | Up to 17pt | 4.5:1 | 7:1 for custom color pairs, especially small text |
  | 18pt and larger, or bold | 3:1 | |

  Check every theme: light, dark and high contrast.
- `A11Y-13` **SHOULD:** provide a higher-contrast token set under `@media (prefers-contrast: more)`.
- `A11Y-14` **SHOULD:** non-text UI must reach 3:1 against its surroundings. This covers input borders, focus rings, icons and chart marks, and is the WCAG 1.4.11 web equivalent.

## Color is never the only signal
- `A11Y-03` **MUST:** pair color with text, an icon, a shape or a pattern.
  - This covers errors, status, links inside body text, chart series and toggle states.
  - Watch out for red/green and blue/orange pairings.

## Targets and spacing
- `A11Y-04` **MUST:** size touch targets correctly (src: accessibility, buttons, designing-for-games).
  - Touch default: 44×44 CSS px under `@media (pointer: coarse)`.
  - Absolute floor: 24×24, which is the WCAG 2.5.8 minimum.
  - The HIG minimum is 28×28 on iOS and 20×20 on macOS. Use those only for secondary, pointer-only UI.
- `A11Y-15` **SHOULD:** pad hit areas (src: pointing-devices).
  - About 12px around elements that have a visible background or border.
  - About 24px around borderless elements such as icon or text links.
  - The hit area may be larger than the visible element; use padding or a `::before` with negative inset.
- `A11Y-16` **SHOULD:** leave room between adjacent targets.
  - About 16px between them, or about 60px between their centers (src: eyes, spatial-layout).
  - Targets must never overlap.
  - In a toolbar, adjacent buttons' hit areas should touch, with no dead gaps.

## Keyboard and screen readers
- `A11Y-05` **MUST:** everything can be done with the keyboard.
  - Every interactive element is reachable with Tab.
  - Each one shows a visible `:focus-visible` style. Never `outline: none` without a replacement.
  - The focus ring must follow the element's border-radius and must not be clipped by `overflow:hidden`.
  - Tab order equals reading order (DOM order equals visual order).
  - No positive `tabindex`.
- `A11Y-07` **MUST:** give everything an accessible name and a sensible image description (src: voiceover).
  - Every control has an accessible name: a visible `<label>`, button text, or `aria-label` on icon-only buttons.
  - Meaningful images have a descriptive `alt`. Decorative images get `alt=""` or `aria-hidden="true"`.
- `A11Y-08` **MUST:** structure every page properly.
  - A unique, descriptive `<title>`.
  - `<html lang>` set.
  - Exactly one `<h1>`, with headings in logical order.
  - Landmarks: `header`, `nav`, `main` and `footer`.
- `A11Y-17` **MUST:** announce dynamic changes.
  - Use `aria-live="polite"` for status messages and `role="alert"` for errors.
  - Mark loading regions with `aria-busy="true"`.
- `A11Y-18` **SHOULD:** do not make important information disappear on a timer (for example toasts). If a timer is used, give an explicit dismiss control and enough time.
- `A11Y-19` **MUST:** media accessibility. No autoplaying sound. Provide captions (`<track kind="captions">`) for videos with speech, and transcripts for audio.
- `A11Y-20` **MUST:** ask for confirmation before irreversible actions, or offer undo instead (see `05`).

## Motion (src: motion, accessibility)
- `A11Y-06` **MUST:** respect `prefers-reduced-motion: reduce`.
  - When it is set, remove automatic, looping, parallax, zoom/scale and depth (z-axis) motion.
  - Replace slides with fades, use stiffer springs with less bounce, and avoid animating into or out of blur.
  - Never flash more than 3 times per second (WCAG 2.3.1).
  - Note: on the agency's own machine reduce-motion is ON. Critical brand loops must be driven by CSS that deliberately survives it, not by Framer keyframes.
- `MOT-01` **SHOULD:** animate only with purpose. Motion must never be the only way information is conveyed.
- `MOT-02` **SHOULD:** motion should follow the user's gesture and direction. Something that slides in from the top goes back out to the top.
- `MOT-03` **SHOULD:**
  - Keep feedback animations short.
  - Do not animate interactions that happen very often.
  - Animations must be interruptible. Never make the user wait for one to finish.
- `MOT-04` **SHOULD:**
  - Avoid motion at the edges of the viewport.
  - Avoid sustained oscillation around 0.2 Hz (one cycle every ~5s).
  - Prefer a fade over a long travel move when relocating content.
- `MOT-05` **SHOULD:** canvas, WebGL and game content should hold a steady 30–60 fps.

## Materials, blur and "glass" (src: materials, what's-new: Liquid Glass)
- `MAT-01` **SHOULD:** translucent or blurred surfaces belong to the navigation/control layer only, such as sticky headers, toolbars and floating bars. Never put them in the content layer.
- `MAT-02` **SHOULD:** choose material thickness by what sits on it.
  - Use thicker, more opaque material behind text, and thinner material where context matters.
  - Over bright media, add a dark dimming layer of about 35% opacity behind clear controls.
- `MAT-03` **MUST:** whenever `backdrop-filter` is used:
  - provide a solid fallback when `@supports not (backdrop-filter: blur(1px))`;
  - provide one under `@media (prefers-reduced-transparency: reduce)`;
  - text on top must still meet `A11Y-02`.
- `MAT-04` **SHOULD:** do not copy Apple's Liquid Glass look wholesale (see `10`). The idea of a distinct control layer is what we adopt.
