# 04 Navigation and components

Sources: `buttons`, `menus`, `context-menus`, `pull-down-buttons`, `pop-up-buttons`, `tab-bars`, `tab-views`, `toolbars`, `sidebars`, `split-views`, `page-controls`, `lists-and-tables`, `collections`, `outline-views`, `boxes`, `disclosure-controls`, `scroll-views`, `labels`, `image-views`, `search-fields`, `searching`, `segmented-controls`, `windows`.

## Buttons
- `BTN-01` **MUST:** use `<button>` for actions and `<a href>` for navigation. Never use a clickable `<div>`.
- `BTN-02` **MUST:** hit target sizes follow `A11Y-04`, which is 44×44 on touch. The clickable area may extend beyond what is visible.
- `BTN-03` **SHOULD:** use at most 1–2 prominent (filled, accent-coloured) buttons per view. Show which button is preferred by its style, not its size. Buttons in a set share one size.
- `BTN-04` **MUST:** a destructive action is never the primary or default button.
  - It must not be the Enter-key submit.
  - Destructive buttons use the danger colour plus a clear label.
- `BTN-05` **SHOULD:** labels are short and start with a verb ("Add to cart", "Book a call").
  - Use a familiar icon for a familiar action.
  - Icon-only buttons need an `aria-label` and ideally a tooltip.
  - Add "…" when the button opens something that asks for more input ("Edit…").
- `BTN-06` **SHOULD:** for actions that take time:
  - show a spinner inside the button;
  - optionally change the label ("Checking out…");
  - set `aria-busy`;
  - prevent double submission;
  - keep the button width stable.
- `BTN-07` **SHOULD:** buttons that sit together in a row or stack share the same height. Full-width primary buttons suit narrow screens.
- `BTN-08` **MUST:** every custom button shows visible hover, focus, pressed and disabled states (`KEY-03`).

## Primary navigation (Apple "tab bar", the main site nav)
- `NAV-01` **MUST:** navigation is for navigating, never for actions.
  - Use `<nav>` with `aria-label`.
  - Mark the current page with `aria-current="page"`.
- `NAV-02` **SHOULD:**
  - Keep 5 or fewer top-level items. Beyond that, use grouping, menus or a sidebar.
  - Labels are single words where possible.
  - Avoid a "More" overflow at the top level.
- `NAV-03` **MUST:** never hide or disable a nav item because its section is empty. Explain the empty state on the page instead.
- `NAV-04` **SHOULD:** the nav stays reachable on every page. A mobile menu or bottom bar is fine. Modals may cover it.
- `NAV-05` **SHOULD:** badges are for critical new information only.
- `NAV-06` **SHOULD:** nav labels keep sufficient contrast over imagery and video, and over translucent headers.

## In-page tabs (Apple "tab views", the ARIA tabs pattern)
- `TAB-01` **MUST:** use `role="tablist"`, `tab` and `tabpanel`, with arrow-key movement between tabs.
- `TAB-02` **SHOULD:**
  - Use 6 tabs or fewer; beyond that, use a select or a different layout.
  - Labels are nouns.
  - Each panel's controls affect only that panel.

## Segmented controls (view or option switches, e.g. Monthly/Annual)
- `SEG-01` **SHOULD:**
  - Use about 5–7 segments at most on wide screens and about 5 on phones.
  - Make segments equal width.
  - Use all text or all icons in one control, never a mix.
- `SEG-02` **MUST:** a segmented control either selects or acts, never both.
  - For selection, use `role="radiogroup"` or `aria-pressed`.
  - For switching views, use the tabs pattern.
  - Never use one as site-level navigation.

## Toolbars and headers
- `TBR-01` **SHOULD:**
  - Show the current view's title, navigation and key actions, and nothing more.
  - Decide which items collapse into an overflow menu as the width shrinks.
- `TBR-02` **SHOULD:**
  - Keep view titles under 15 characters and don't use the brand name as the page title.
  - On mobile, a large title may shrink to a small one on scroll.
- `TBR-03` **SHOULD:**
  - Leading edge: back or menu, then the title. Centre: common controls. Trailing edge: search, more, and the single prominent primary action.
  - Use at most 3 groups.
  - Keep navigation and critical actions (Save/Done) in separate groups.
- `TBR-04` **SHOULD:**
  - Back and close use standard symbols (chevron, ✕), consistently across the site.
  - Separate adjacent text buttons with fixed space.
- `TBR-05` **SHOULD:**
  - Separate a sticky header from scrolling content with a subtle scroll-edge effect (fade or blur, following `MAT-*`), and use it only on sticky or floating bars.
  - A header hidden while reading must always be easy to bring back.

## Sidebars and split views
- `SID-01` **SHOULD:**
  - Place the sidebar on the leading edge.
  - Show at most 2 levels, with collapsible groups (`<details>` or `aria-expanded`).
  - Use short group headings.
- `SID-02` **SHOULD:**
  - Users may hide it with a toggle, but don't hide it by default on wide screens. Auto-collapse on narrow screens.
  - Never put critical items at the bottom of the sidebar.
- `SPL-01` **SHOULD:** master-detail layouts:
  - Highlight the selected item persistently.
  - Default proportions are 1/3 : 2/3 or 1/2 : 1/2.
  - Set minimum and maximum pane widths and use a 1px divider.
  - Stack the panes on mobile.
- `WIN-01` **SHOULD:**
  - Don't open new tabs by default (`target="_blank"` only for external sites or downloads, with `rel="noopener"`).
  - Never fake operating-system window chrome.

## Menus and dropdowns (`menus`, `pull-down-buttons`, `pop-up-buttons`, `context-menus`)
- `MNU-01` **MUST:** follow the correct ARIA pattern.
  - Action menus use the menu-button pattern.
  - Single-choice selection uses `<select>` or the listbox/combobox pattern.
  - Each closes with Esc and returns focus to its trigger.
- `MNU-02` **SHOULD:** item labels:
  - Start action items with a verb, in title case.
  - Drop "a/an/the".
  - Add "…" when the item needs further input.
- `MNU-03` **SHOULD:**
  - Put the most-used items first.
  - Group related items with separators.
  - Keep menus short; long menus are acceptable only for user-generated lists.
- `MNU-04` **SHOULD:**
  - Allow at most one level of submenu, and mark it with a chevron.
  - If a submenu would have more than about 5 items, make it its own menu.
- `MNU-05` **SHOULD:** show unavailable items dimmed (`aria-disabled`) in normal menus. In context menus, hide them instead.
- `MNU-06` **SHOULD:** a pull-down/action menu needs at least 3 items; use plain buttons for 1–2. Don't hide a view's primary action inside a menu.
- `MNU-07` **MUST:** destructive menu items go last, are coloured red, and are confirmed or undoable.
- `MNU-08` **SHOULD:** within a group, either every item has an icon or none does.
- `MNU-09` **SHOULD:** a custom right-click or long-press menu:
  - holds only relevant actions;
  - uses at most about 3 groups;
  - duplicates actions that exist elsewhere in the visible UI.

## Carousels and page dots (src: page-controls)
- `CAR-01` **SHOULD:** use page dots only for a flat, ordered sequence, never for hierarchy. Centre them below the content.
- `CAR-02` **SHOULD:**
  - Show about 10 dots at most; beyond that, use a grid or a different layout.
  - Keep the dots monochrome with clear contrast for the current dot.
  - Don't show a scrollbar on the same axis.
- `CAR-03` **MUST:**
  - Dots are buttons with accessible names and `aria-current`.
  - Next and previous buttons exist alongside swipe.
  - Auto-advance must pause on hover and focus and have a pause control (WCAG 2.2.2), and is off under reduced motion.

## Lists, tables, collections
- `LST-01` **SHOULD:** use lists or tables for text and grids for visual items.
  - Keep row text short and use middle truncation for file names.
  - Long content belongs on a detail page.
- `LST-02` **MUST:** data tables use `<table>` with `<th scope>`. Sortable headers set `aria-sort`; clicking toggles ascending and descending.
- `LST-03` **SHOULD:**
  - Column headings are title-case nouns, with no trailing colon.
  - Use zebra striping for wide tables.
  - Show the most relevant items first, then a "Show more".
- `LST-04` **SHOULD:**
  - Navigation lists highlight the current item.
  - A chevron means "drill in"; an info button means "details".
- `COLL-01` **SHOULD:**
  - Use standard grid layouts, with enough gap that hover and focus effects don't overlap.
  - Animate inserts and removals subtly.
  - Never reflow the layout while the user is interacting with it.
- `TRE-01` **SHOULD:** hierarchical data:
  - Show the hierarchy in the first column only.
  - Remember which nodes are expanded.
  - Offer expand-all, and search for long trees (ARIA `tree` or `treegrid`).

## Boxes and cards
- `BOX-01` **SHOULD:** use spacing for sub-groups instead of nesting boxes inside boxes. Optional box titles are sentence case without punctuation (`<fieldset>`/`<legend>` or `aria-labelledby`).

## Accordions and disclosure
- `DIS-01` **MUST:** use `<details>/<summary>`, or a button with `aria-expanded` plus `aria-controls`.
- `DIS-02` **SHOULD:**
  - Keep essential controls visible and hide advanced ones.
  - The indicator points right or down for a triangle, or down or up for a button.
  - Give the disclosure a descriptive label ("Advanced options").

## Scrolling (src: scroll-views)
- `SCR-01` **MUST:**
  - Never break native scrolling, keyboard scrolling (Space, PgUp/PgDn, arrows) or find-in-page.
  - Smooth-scroll libraries such as Lenis must keep these working and must turn off under `prefers-reduced-motion`.
- `SCR-02` **MUST:** never nest two scroll areas on the same axis. A horizontal scroller inside a vertical page is fine.
- `SCR-03` **SHOULD:** let the next item peek at the edge to signal more horizontal content. Paged snapping (`scroll-snap`) pages by the viewport width minus a small overlap.
- `SCR-04` **SHOULD:** auto-scroll only as much as needed (`scrollIntoView({block:'nearest'})`). Remove scroll-driven parallax under reduced motion.

## Search (src: search-fields, searching)
- `SRC-01` **MUST:** wrap search in `<search>` or `role="search"` and use `<input type="search">` with a label (visible or `aria-label`).
- `SRC-02` **SHOULD:**
  - The placeholder says what can be searched ("Search services").
  - Show results as the user types where feasible.
  - Offer recent and suggested terms (combobox pattern).
  - Show the current scope.
- `SRC-03` **SHOULD:** placement:
  - Trailing side of the header for site-wide search.
  - Above a list to filter it.
  - A dedicated page for discovery-heavy sites.
  - Offer one place to search the whole site.
- `SRC-04` **SHOULD:**
  - Offer scope chips or filters, defaulting to the broadest scope.
  - Provide a way to clear search history.
  - Auto-focus only on a dedicated search page, and not on touch devices.

## Labels and static text
- `LBL-01` **SHOULD:**
  - Make useful text selectable: errors, order IDs, addresses, codes. Never put `user-select:none` on content.
  - Offer a copy button for codes.
