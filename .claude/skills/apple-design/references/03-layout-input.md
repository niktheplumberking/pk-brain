# 03 Layout, responsive design, input (touch / pointer / keyboard)

Sources: `layout`, `designing-for-ios`, `designing-for-ipados`, `designing-for-macos`, `designing-for-iphone-duo`, `mac-catalyst`, `gestures`, `pointing-devices`, `keyboards`, `focus-and-selection`, `apple-pencil-and-scribble`, `gyro-and-accelerometer`.

## Layout principles
- `LAY-03` **SHOULD:** order content by importance, top to bottom and start to end. Use logical CSS properties so the order mirrors correctly in RTL.
- `LAY-04` **SHOULD:** show hierarchy with alignment and indentation, and show grouping with spacing, containers or separators. Use progressive disclosure (`<details>`, menus) for secondary content.
- `LAY-05` **MUST:** design for the space available, not for a device.
  - Use fluid grids (`minmax`, `auto-fit`), container queries, and breakpoints chosen by content.
  - Never use user-agent sniffing or fixed widths tied to one screen.
- `LAY-02` **MUST:** keep the same features at every width.
  - Controls may move into an overflow menu, but they never disappear.
  - Nothing may cause horizontal page scroll at 320px or wider.
- `LAY-06` **SHOULD:** as the width changes, grow or shrink the existing layout. Don't swap it for a different design. Prefer small adjustments to big rearrangements.
- `LAY-07` **SHOULD:** on large screens, show one more level of hierarchy, such as list and detail side by side. Collapse to a single pane on small screens.
- `LAY-08` **SHOULD:** grids should use an even number of columns where possible, so they split cleanly.
- `LAY-09` **SHOULD:** test the smallest and the largest layouts first. Also test with long translated strings and at 200% text size.

## Viewport personas (map to breakpoints)

| HIG device | Typical distance | Primary input | Web equivalent |
|---|---|---|---|
| iPhone | 1–2 ft, one or two hands | touch | small viewport, `pointer: coarse` |
| iPad | up to ~3 ft | touch plus keyboard, trackpad or pencil (mixed) | medium viewport, `any-pointer: fine` possible |
| Mac | 1–3 ft, desk | keyboard and pointer | large viewport, `pointer: fine`, `hover: hover` |

- `LAY-10` **SHOULD:** on phones:
  - Keep few controls on screen and keep secondary actions one step away.
  - Put primary actions where the thumb can reach, in the middle or at the bottom.
  - Support both orientations.
- `LAY-11` **SHOULD:** on tablets, use the extra space for the main content and avoid full-screen takeovers. Assume the user may switch between touch and pointer at any time.
- `LAY-12` **SHOULD:** going from tablet to desktop:
  - Split the single column into several columns.
  - Show an inspector or side panel instead of a popover.
  - Move controls to a top toolbar.
  - Turn bottom tab bars into a sidebar or top navigation.
  - Add Next/Previous buttons alongside any swipe gestures.
- `LAY-13` **SHOULD:** don't put critical controls at the very bottom of tall desktop windows.

## Safe areas
- `LAY-01` **MUST:** respect the device's safe areas.
  - Use `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`.
  - Pad fixed or full-bleed bars with `env(safe-area-inset-*)`, typically `padding-bottom: max(16px, env(safe-area-inset-bottom))`.
  - Backgrounds may run edge to edge; interactive content stays inside the safe area.
- `LAY-14` **SHOULD:** fixed bars must never cover content. Pad the scroll container, or use `scroll-padding-top` for sticky headers so anchor links aren't hidden under them.
- `LAY-15` **SHOULD (niche):** on foldable or dual-screen devices, keep important content out of the hinge. Use `@media (horizontal-viewport-segments: 2)` and `env(viewport-segment-*)`.

## Input: never only one way
- `INP-01` **MUST:** every gesture-only or hover-only action needs a visible alternative. This covers swipe-to-delete, drag-to-reorder, pinch and long-press.
- `INP-04` **SHOULD:** behave the same for touch, pointer and keyboard.
  - Differentiate by input type only when it adds value. Example: in a video scrubber, a touch drags the playhead while a click jumps straight to that point.
  - Use Pointer Events, `pointerType`, and `any-pointer` / `any-hover` media queries.
- `INP-05` **SHOULD:** for pen input, make controls respond to the pen. Drawing starts on contact. Don't move or auto-scroll fields while someone is writing in them.
- `INP-06` **MUST:** device motion (gyroscope/accelerometer) is used only if it clearly helps.
  - Explain why before requesting it, and request it only from a user gesture (`DeviceOrientationEvent.requestPermission()`).
  - Never use tilt to drive the general UI.

## Hover (src: pointing-devices, apple-pencil-and-scribble, eyes)
- `INP-02` **MUST:** hover styles live inside `@media (hover: hover) and (pointer: fine)`.
  - Anything revealed on hover must also appear on `:focus-visible` / `:focus-within` and on tap.
  - Hover only previews or reveals. It never triggers an action, and never a destructive one.
- `HOV-01` **SHOULD:** match the hover effect to the element.
  - Small transparent elements get a background highlight.
  - Small opaque elements get a lift (slight scale plus shadow).
  - Large elements get a subtle tint, scale or shadow.
  - Don't scale elements with no room to grow, such as table rows; tint them instead.
  - Never add a shadow without scale.
- `HOV-02` **SHOULD:** keep at least one main part of the element still during a hover animation. No decorative cursor effects, and no instruction text attached to the cursor.
- `HOV-03` **SHOULD:** hover delays.
  - None for subtle affordances.
  - Short for expanding elements.
  - Longer for tooltips: about 300–500ms (`transition-delay`).
- `HOV-04` **SHOULD:** composite cards (image plus title) get one shared hit and hover area. Make the whole card one link using the stretched `::after` technique.
- `HOV-05` **SHOULD:** use cursors by meaning.

  | `cursor` value | Use for |
  |---|---|
  | `pointer` | links and clickable elements |
  | `text` | editable or selectable text |
  | `grab` / `grabbing` | draggable items |
  | `not-allowed` / `no-drop` | invalid targets |
  | `*-resize` | resize handles |
  | `crosshair` | precision work |

## Keyboard and focus (src: keyboards, focus-and-selection)
- `A11Y-05` **MUST:** follow the keyboard rules in `01`: reachable, visible focus, DOM order.
- `KEY-01` **SHOULD:** use focus groups in complex widgets.
  - Tab moves between groups; arrow keys move within a group (roving `tabindex`, per the WAI-ARIA toolbar, listbox, grid and tabs patterns).
  - When a group receives focus, focus its primary item first.
- `KEY-02` **MUST:** never move focus unless the user caused it.
  - Exceptions: an opened dialog, or an explicit search page.
  - If the focused element is removed (for example a deleted list item), move focus to its nearest neighbour.
- `KEY-03` **MUST:** every interactive element has distinct, visually different states: default, `:hover`, `:focus-visible`, `:active`, selected (`[aria-selected]`, `[aria-pressed]`, `[aria-current]`) and `:disabled`.
- `INP-03` **MUST:** never override standard browser or OS shortcuts (Ctrl/Cmd plus C V X Z A F P S W T Q, Shift+Tab). Esc always cancels or closes.
- `KEY-04` **SHOULD:** custom shortcuts.
  - Add them only for frequent actions.
  - Modifiers: Ctrl/Cmd first, then Shift; use Alt sparingly.
  - Read `event.key`, not `keyCode`.
  - Avoid characters that don't exist on all keyboard layouts.
  - Document shortcuts in a "?" help panel or with `aria-keyshortcuts`.
- `KEY-05` **MUST:** single-key shortcuts can be turned off, or work only while their widget has focus (WCAG 2.1.4).
- `KEY-06` **SHOULD:** when an action is unavailable, say so. A silent failure looks like a broken site.

## Gestures (src: gestures)
- `GES-01` **MUST:** use standard gestures only for their standard meanings.

  | Gesture | Meaning |
  |---|---|
  | Tap | activate |
  | Swipe | scroll, reveal or dismiss |
  | Drag | move |
  | Long-press | more options |
  | Pinch / double-tap | zoom |

  Never invent a new gesture for a standard action.
- `GES-02` **MUST:** custom gestures must be discoverable, easy to perform, distinct from other gestures, and never the only way to do something.
- `GES-03` **SHOULD:** give continuous feedback during a gesture. Content follows the finger and shows the threshold the user needs to reach.
- `GES-04` **MUST:** don't conflict with browser gestures.
  - Keep custom horizontal swipes away from the screen edges, where the browser uses back/forward.
  - Use `touch-action: pan-y` on horizontal carousels.
  - Use `overscroll-behavior` deliberately.
- `GES-05` **MUST:** destructive actions are never mapped to easily triggered gestures such as double-tap. Make them undoable.
- `GES-06` **MUST:** provide single-pointer alternatives to multi-finger or path-based gestures (WCAG 2.5.1). Never block the native right-click menu unless you replace it with something better.
