# 02 Color, dark mode, typography, icons and images

Sources: `color`, `dark-mode`, `typography`, `icons`, `images`, `sf-symbols`, `branding`, `app-icons`.

The client brand guide decides which colors and fonts are used. This file decides how they are structured and applied.

## Color system
- `COL-01` **MUST: semantic tokens.**
  - Define colors as CSS custom properties named by role (`--text-primary`, `--text-secondary`, `--bg`, `--bg-elevated`, `--separator`, `--accent`, `--danger`), never by appearance (`--blue`).
  - Don't use a token outside its role. For example, don't use the separator color for text.
- `COL-02` **MUST: three variants per token.** Each token has a light value, a dark value and a high-contrast value, wired through `prefers-color-scheme`, `[data-theme]` and `prefers-contrast` (see `snippets.md`).
- `COL-03` **SHOULD: one meaning per color.** Each color carries a single meaning. If the brand color marks links, don't also use it for plain emphasis text.
- `COL-04` **SHOULD: a background hierarchy.** Use primary, secondary and tertiary backgrounds. Raised surfaces (modals, popovers, menus) use an "elevated" background.
- `COL-05` **SHOULD: use the accent sparingly.**
  - Put the accent on the background of the primary call to action, not on many controls at once.
  - Brand color lives in the content more than in the UI chrome (src: branding, 2026 update).
- `COL-06` **SHOULD: four text levels.** Primary, secondary, tertiary (unavailable) and quaternary (watermark).
- `COL-07` **SHOULD: color gamut.** Use sRGB by default. Display-P3 is optional, inside `@media (color-gamut: p3)` with `color(display-p3 ...)`. Check that P3 gradients don't band or clip on sRGB screens.
- `COL-08` **SHOULD: test in real conditions.** Check colors in different lighting and on different screens. Color meanings differ by culture (for example red, or white for mourning).

## Dark mode
- `DRK-01` **MUST: dark mode is a designed palette, not an inversion.**
  - Backgrounds get dimmer and foreground content gets brighter.
  - Elevated surfaces are lighter than the base surface.
- `DRK-02` **MUST: follow the system by default.**
  - Default to `prefers-color-scheme`.
  - A manual toggle is allowed (our resolved conflict, see `10`), but it must start on the system value and remember the user's choice.
  - Set `color-scheme: light dark` and give `body` an explicit background.
- `DRK-03` **SHOULD: adapt imagery.**
  - Slightly dim images with white backgrounds in dark mode.
  - Provide dark variants of logos and icons where needed (`<picture><source media="(prefers-color-scheme: dark)">`).
- `DRK-04` **MUST: no flash on first paint.**
  - Set the `html` background color to match the theme from the very first paint.
  - The theme must be resolved before paint, using an inline script in `<head>` if there is a toggle.

## Typography
- `TYP-01` **SHOULD: few typefaces.** A typical pair is a brand/display face for headlines and a highly legible face for body text and captions.
- `TYP-02` **SHOULD: reference type scale.** Adapted from the iOS "Large" default sizes. Values are size/line-height in px; adapt the sizes to the brand but keep the hierarchy.

  | Role | Size / line-height | Weight |
  |---|---|---|
  | Display (Large Title) | 34/41 | |
  | H1 | 28/34 | |
  | H2 | 22/28 | |
  | H3 | 20/25 | |
  | Headline | 17/22 | semibold |
  | Body | 17/22 | |
  | Callout | 16/21 | |
  | Subhead | 15/20 | |
  | Footnote | 13/18 | |
  | Caption | 12/16 | |
  | Caption-2 | 11/13 | |

- `TYP-03` **SHOULD: line-height.**
  - Use about 1.2–1.3 for headings and short UI text.
  - Use looser leading for paragraphs of 3 or more lines; 1.5 is a good web default.
  - Avoid tight leading on multi-line text.
- `TYP-04` **SHOULD: optical letter-spacing.**
  - Small text (under 12px) gets slightly positive tracking.
  - Mid sizes (13–22px) get slightly negative tracking.
  - Large display text gets negative tracking that is tuned to the font.
  - Apple's exact tracking table is specific to SF Pro and **must not be copied blindly**; tune per font.
- `TYP-05` **SHOULD: readable measure.** Keep body text to about 60–80 characters per line (`max-width: ~70ch`).
- `TYP-06` **MUST: font licensing.** Fonts must be licensed for web use. Never use SF Pro, SF Compact, SF Mono or New York (see `10`). A `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` stack is allowed, because it uses the visitor's own installed font.

## Icons
- `ICN-01` **SHOULD: consistency and alignment.**
  - Use one icon family, with consistent stroke weight, size, detail level and perspective.
  - Match icon weight to the adjacent text weight.
  - Center icons optically, building padding into the SVG.
- `ICN-02` **SHOULD: state variants.**
  - Outline icons go next to text; filled icons mark the selected or active state.
  - A slash variant means unavailable or off.
- `ICN-03` **MUST: accessible names and format.**
  - Interface icons are SVG.
  - An icon that carries meaning has an accessible name; a decorative icon has `aria-hidden="true"`.
- `ICN-04` **SHOULD: universal metaphors.**
  - Use familiar metaphors: trash = delete, share-arrow = share, ellipsis = more, magnifier = search, gear = settings, ✕ = close, chevron = back or disclosure.
  - Reserve the ellipsis (•••) for overflow menus only.
- `ICN-05` **SHOULD: no text and no hardware replicas.**
  - Avoid text inside icons; localize it if it's unavoidable.
  - Use gender-neutral human figures.
  - Never draw replicas of Apple hardware.

## Images
- `IMG-01` **MUST: responsive images.**
  - Raster images use `srcset`/`sizes` with 1x/2x(/3x) candidates, or a responsive image service.
  - Use AVIF/WebP for photos with a fallback, SVG for flat art and icons, and PNG only where transparency or sharp UI requires it.
- `IMG-02` **MUST: reserve space.**
  - Set `width`/`height` or `aspect-ratio` so images don't shift the layout.
  - Use `object-fit: cover` for art that fills a box. Never distort images.
- `IMG-03` **SHOULD: legibility over images.** Text over an image needs a scrim, overlay or shadow so it still meets `A11Y-02`.
- `IMG-04` **SHOULD: image color.** Embed or convert to an sRGB color profile, and test on real devices.
- `IMG-05` **MUST: images are not buttons.** Never put click handlers on a bare `<img>`; wrap it in `<a>` or `<button>`.

## App icons, favicons, PWA icons (src: app-icons)
- `FAV-01` **SHOULD: provide the full icon set.** That means a favicon (SVG plus ICO/PNG fallback), `apple-touch-icon` 180×180, and PWA manifest icons at 192 and 512, plus a maskable one.
- `FAV-02` **SHOULD: icon design.**
  - Keep the design simple and centered, with no text, no photos and no very thin lines.
  - Supply a full-bleed square source and let the platform mask it.
  - Provide a dark variant where it is supported.
