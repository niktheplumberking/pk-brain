# 05 Modals, feedback, loading, progress, undo, help

Sources: `modality`, `alerts`, `action-sheets`, `sheets`, `popovers`, `launching`, `loading`, `progress-indicators`, `feedback`, `undo-and-redo`, `offering-help`, `onboarding`, `drag-and-drop`.

## Modality: when to use a modal
- `MOD-04` **SHOULD:** use a modal only when there is a clear benefit:
  - critical information;
  - confirming or adjusting a recent action;
  - a short, self-contained task.

  Long, multi-step or navigational flows belong on a page, not in a modal.
- `MOD-01` **MUST:** every dialog follows these rules.
  - Use `<dialog>` with `showModal()`, or `role="dialog"` with `aria-modal="true"`.
  - Give it an accessible title (`aria-labelledby`).
  - Esc closes it, and there is a visible close button.
  - Focus is trapped inside while it is open and returns to the trigger when it closes.
  - The background is inert while it is open.
- `MOD-02` **MUST:** never stack modals. Close one before opening another, and never show two alerts at once.
- `MOD-05` **MUST:** if closing would lose user input, ask Save / Discard first. This applies to Esc, backdrop clicks and swipe-down too.

## Alerts (confirmation dialogs, `role="alertdialog"`)
- `ALR-01` **SHOULD:** use alerts sparingly.
  - Not for information only, and never on page load.
  - Not for common actions that can be undone.
  - Yes for rare, irreversible, destructive actions.
- `ALR-02` **SHOULD:** structure.
  - A title, an optional message, and at most 3 buttons.
  - The title is specific ("Delete this project?"), never "Error" or an error code, and at most 2 lines.
  - Add the message only if it adds something. Don't explain the buttons in it.
- `ALR-03` **SHOULD:** button labels.
  - One or two words, as verbs that echo the title ("Delete", "Keep").
  - Never Yes/No.
  - "OK" only in purely informational alerts.
  - The cancel button always says "Cancel".
- `MOD-03` / `ALR-04` **MUST:** defaults.
  - Cancel is never the default.
  - A destructive button is never the default.
  - When there is a destructive choice, always include Cancel.
  - Destructive styling is only for results the person did not explicitly ask for. If they clicked "Delete account", the confirm button is not an extra red warning.
- `ALR-05` **SHOULD:** placement.
  - In a row: the default or likely button goes on the trailing side and Cancel on the leading side.
  - In a stack: the default on top and Cancel at the bottom.
  - Alerts must never scroll.

## Choice sheets (Apple "action sheets", e.g. Save draft / Delete draft / Cancel)
- `ASH-01` **SHOULD:** use one to offer choices about an action the user just started.
  - About 4 buttons at most, including Cancel.
  - Cancel at the bottom; destructive choices first, in red.
  - No scrolling.

## Sheets, drawers and bottom sheets
- `SHT-01` **SHOULD:** use them for short, scoped tasks.
  - Cancel/Close leaves without saving; Done saves and leaves; Back goes to the previous step.
  - Done is always paired with Cancel or Back.
  - Never show Cancel, Done and Back all at once.
- `SHT-02` **SHOULD:** mobile bottom sheets.
  - Rest at a full and a medium (about half) height.
  - Show a grabber when they can be resized.
  - Support swipe-down to dismiss, with a confirmation if there are unsaved changes.
- `SHT-03` **SHOULD:** desktop.
  - Use a sensible default size, centred over a dimmed `::backdrop`, without covering the whole page.
  - Use a non-modal side panel when the user adjusts settings and watches the result live.

## Popovers (`popover` attribute, anchor positioning)
- `POP-01` **SHOULD:** use for small amounts of information or a few actions, such as a date picker or a quick edit.
  - Point at the trigger, and don't cover it or essential content.
  - Size the popover to its content.
- `POP-02` **MUST:** behaviour.
  - Only one popover at a time; never cascade them.
  - Outside click and Esc close it.
  - When it closes automatically, save the work. Discard only on an explicit Cancel.
- `POP-03` **MUST:** never use a popover for warnings; use an alert. On phone widths, replace popovers with a sheet or full-screen view.

## Launch and first paint
- `LOD-02` **MUST:** what shows before the page loads must match the loaded page.
  - The server-rendered or HTML shell matches the hydrated page.
  - No branded splash or preloader that differs from the real content.
  - No white flash in dark mode (`DRK-04`).
- `LOD-03` **SHOULD:** restore state.
  - Restore scroll position, filters, open tabs and form drafts.
  - Keep shareable state in the URL; use `sessionStorage` / `localStorage` for drafts.
- `LOD-04` **SHOULD:** performance budget. People expect to interact within about 2 seconds. Aim for good Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.

## Loading
- `LOD-01` **MUST:** never show a blank page or region.
  - Show skeletons or placeholders straight away, replaced as content arrives.
  - The rest of the page stays usable while one part loads.
- `LOD-05` **SHOULD:** for long waits, show something useful (tips, previews) and an honest time estimate.
- `LOD-06` **SHOULD:** load heavy assets after the first view (lazy-load, preload what is critical, prefetch what is likely needed next).

## Progress indicators
- `PRG-01` **SHOULD:** choose by what you know.
  - Use determinate progress when the duration is knowable, and switch from indeterminate to determinate as soon as you can.
  - Never morph a spinner into a bar.
- `PRG-02` **MUST:** honest progress.
  - Keep a steady pace, with no jumping to 90% and then stalling.
  - Never show a frozen indicator.
  - If something stalls, say what is wrong and what to do.
- `PRG-03` **SHOULD:** status text.
  - If shown, make it specific ("Uploading 3 of 8 photos"), not "Loading…".
  - Don't label small spinners.
  - Keep progress in a consistent location.
- `PRG-04` **SHOULD:** cancel and pause.
  - Offer Cancel when stopping is safe.
  - Offer Pause when cancelling would lose work.
  - Confirm before a cancel that discards progress.
- `PRG-05` **MUST:** accessibility.
  - Use `<progress value max>` (no `value` when indeterminate) or `role="progressbar"` with `aria-valuenow`.
  - Set `aria-busy` on the region and announce completion through a live region.
  - Keep some visible activity under reduced motion.

## Feedback and errors
- `FDB-01` **SHOULD:** match interruption to importance.
  - Passive status goes inline next to its item.
  - Only critical, actionable information gets a modal.
- `FDB-02` **MUST:** give feedback through more than one channel: colour plus text or icon (`A11Y-03`). Announce it with `aria-live` / `role="alert"`.
- `FDB-03` **SHOULD:** confirm success only for significant actions (payments, form submissions, bookings). Always report failure.
- `FDB-04` **MUST:** when something can't be done, say why and what to do next.
- `FDB-05` **SHOULD:** warn only before unexpected, irreversible data loss. For expected deletions, offer undo instead of "Are you sure?".

## Undo
- `UND-01` **SHOULD:** prefer undo over confirmation for reversible actions, using a toast like "Item deleted · Undo". Name what will be undone.
- `UND-02` **SHOULD:** after an undo, scroll to and highlight the restored item. Support Ctrl/Cmd+Z where editing happens.

## Onboarding, tips and tooltips
- `ONB-01` **SHOULD:** onboarding.
  - Teach by doing.
  - Prefer short contextual tips over a long upfront tour.
  - Make tours skippable, remember the skip, and keep the tutorial findable later.
- `ONB-02` **SHOULD:** keep legal text and license walls out of onboarding. Postpone non-essential setup and use good defaults.
- `HLP-01` **SHOULD:** tips.
  - Only for simple features (3 actions or fewer).
  - 1–2 sentences, action-oriented, with no promotion.
  - Don't show a tip for a feature the user already uses.
  - Limit frequency, for example once per 24 hours.
- `HLP-02` **MUST:** tooltips.
  - Describe only the control and start with a verb.
  - Don't repeat the control's name.
  - Keep them to 60–75 characters, in sentence case.
  - Show them on hover and focus, dismiss them with Esc, and keep them hoverable (WCAG 1.4.13, `role="tooltip"` with `aria-describedby`).
- `HLP-03` **SHOULD:** use the right verb for the input ("tap" on touch, "click" with a pointer), or a neutral one ("select"). Don't explain standard controls.

## Drag and drop
- `DND-01` **MUST:** always offer a non-drag alternative, such as "Move to…" or up/down buttons. Keyboard reordering works like this:
  - Space picks up, the arrow keys move, Space drops.
  - Each step is announced through `aria-live`.
- `DND-02` **SHOULD:**
  - Start the drag after about 3px of movement.
  - Make the preview translucent, with a count badge when several items are dragged.
  - Highlight drop targets only while the item is hovering over them.
  - Show an invalid target with `cursor:no-drop`.
  - On failure, animate the item back to where it started.
- `DND-03` **SHOULD:**
  - Auto-scroll while dragging near an edge.
  - Show progress and a placeholder for slow uploads.
  - Make drops undoable; confirm drops that can't be undone.
