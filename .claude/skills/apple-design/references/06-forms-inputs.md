# 06 Forms and inputs

Sources: `entering-data`, `text-fields`, `text-views`, `token-fields`, `combo-boxes`, `digit-entry-views`, `pickers`, `toggles`, `sliders`, `steppers`, `segmented-controls`, `color-wells`, `image-wells`, `virtual-keyboards`, `rating-indicators`, `gauges`.

## General form rules
- `FRM-01` **MUST: visible labels.**
  - Every field has a visible `<label for>`.
  - A placeholder is only a hint or example ("name@company.com"). It is never the label.
- `FRM-02` **MUST: correct input attributes.**
  - `type`: email, tel, url, search, number, password, date, time.
  - `autocomplete`: name, given-name, family-name, email, tel, street-address, postal-code, country, organization, one-time-code, current-password, new-password.
  - `inputmode`: numeric or decimal where needed.
  - `enterkeyhint`: search, go, next, send or done.
- `FRM-03` **MUST: inline errors.**
  - Show errors next to the field, using `aria-invalid="true"` plus `aria-describedby` pointing at the error text.
  - The message says how to fix it ("Use at least 8 characters"), with no blame and no "Oops".
  - On submit, also show an error summary and move focus to the first invalid field.
- `FRM-04` **SHOULD: when to validate.**
  - Emails: when the field loses focus.
  - New usernames and passwords: live, as the user types.
  - Digit-only fields: immediately on a non-digit character.
  - Never validate a field the user hasn't touched yet.
- `FRM-05` **SHOULD: don't ask for what you can infer.**
  - Use autofill, `navigator.language`, and region from IP or geolocation (with permission).
  - Prefill sensible defaults.
- `FRM-06` **SHOULD: choices over typing.**
  - Prefer selects, radios and segmented controls over free text.
  - Support paste and drag-and-drop into fields (codes, files).
- `FRM-07` **MUST: passwords.**
  - Never prefill a password field.
  - Use `type="password"`; a show/hide toggle is recommended.
  - Allow password managers: don't block paste, and use the correct `autocomplete`.
- `FRM-08` **MUST: required fields and submit button.**
  - Make required fields obvious (label text or a marked indicator with a legend).
  - **Don't disable the submit button** until the form is valid (our resolved conflict, see `10`). Keep it enabled and show errors on click. If you must block it, use `aria-disabled` and explain why.
- `FRM-09` **SHOULD: field layout.**
  - Size each field to its expected content (ZIP code short, street address long).
  - Stack fields vertically with even spacing.
  - Give related groups consistent widths.
- `FRM-10` **SHOULD: locale formatting.** Format numbers, currency, dates and times for the user's locale with `Intl.NumberFormat` / `Intl.DateTimeFormat`. Never hard-code a format.
- `FRM-11` **SHOULD: field extras.**
  - Add a clear (✕) button where it helps (e.g. search).
  - A leading icon shows what the field is for; a trailing icon is for an extra action.
  - If a value is truncated, show the full value in a tooltip or `title`.
- `FRM-12` **MUST: group related controls.** Use `<fieldset>` + `<legend>` for groups of radios and checkboxes.
- `FRM-13` **MUST: tab order.** Tab order follows visual order. Don't use positive `tabindex`.

## Multi-line text
- `TXT-01` **SHOULD:**
  - Use `<textarea>` for long text, sized in rem.
  - Allow it to grow, or vertical resize.
  - Respect text zoom.

## Chips and tag inputs (Apple "token fields")
- `TOK-01` **SHOULD:**
  - Turn typed text into a chip on comma (and optionally Enter).
  - Each chip has an accessible remove button.
  - Delay suggestions slightly (debounce) and use the ARIA combobox pattern.

## Editable select (Apple "combo boxes")
- `CMB-01` **SHOULD:**
  - Use `<input list>` + `<datalist>`, or the ARIA combobox pattern.
  - Prefill a sensible default, list the likely choices and still allow a custom value.
  - Options are never wider than the field.

## One-time codes and PINs (Apple "digit entry")
- `OTP-01` **MUST:** use a single input with `inputmode="numeric"`, `autocomplete="one-time-code"` and `pattern="[0-9]*"`. It may be styled as boxes, but one input works far better with autofill and paste.
- `OTP-02` **SHOULD:** always explain why the code is needed and where it was sent. Mask the code if it is sensitive.

## Pickers, selects, dates
- `PCK-01` **SHOULD:** choose the control by list length.
  - Short list: a menu or radios.
  - Medium list: `<select>`.
  - Very long list: a searchable list.
- `PCK-02` **SHOULD:** order options predictably (A–Z, or numerically), and show the picker in context with no navigation away.
- `PCK-03` **SHOULD: time steps.** Use a time step that divides 60 evenly (e.g. `<input type="time" step="900">` for 15-minute steps).
- `PCK-04` **SHOULD: date input style.**
  - A compact button that opens a calendar where space is tight.
  - An inline calendar for browsing or picking ranges.
  - A typed field when the exact date is known (e.g. date of birth).

## Toggles: switch vs checkbox vs radio (src: toggles)
- `TGL-01` **MUST: state beyond color.** State is shown by position, fill, check or dot, never by color alone. A custom "on" color must contrast clearly with "off".
- `TGL-02` **SHOULD: switches.**
  - Use a switch for an immediate on/off setting, usually in a settings row where the row text is the label.
  - Use it for important or master settings.
  - Mark it up as `<input type="checkbox" role="switch">` or `role="switch"` + `aria-checked`.
- `TGL-03` **SHOULD: checkboxes.**
  - Use a checkbox for an option that is applied on submit.
  - A parent checkbox shows the mixed state (`indeterminate` / `aria-checked="mixed"`).
  - Hierarchy uses indentation.
- `TGL-04` **SHOULD: radios.**
  - Use radios for 2–5 mutually exclusive options; above about 5, use a `<select>`.
  - Never use a single radio for on/off.
  - In a horizontal group, give options equal widths.
- `TGL-05` **SHOULD: toggle buttons and placement.**
  - Toggle buttons (e.g. a filter) use `aria-pressed` with a visible active background.
  - Don't put switches, checkboxes or radios in toolbars or footer bars.

## Sliders (`<input type="range">`)
- `SLD-01` **SHOULD: direction.** Minimum on the leading side and maximum on the trailing side. Vertical sliders have the minimum at the bottom. Mirror in RTL.
- `SLD-02` **SHOULD: track and value.**
  - Fill the track from the minimum to the thumb.
  - Update the preview live on `input`.
  - Show the value on focus or hover.
  - Label only the min and max (or at intervals on non-linear scales).
  - Ticks via `<datalist>`.
- `SLD-03` **SHOULD: precision.** For wide ranges, pair the slider with a number field. Use circular sliders only for wrap-around values (angles).
- `SLD-04` **MUST: labelling.** Give the slider a label, and `aria-valuetext` when the raw number isn't meaningful ("$50", "Medium").

## Steppers (quantity +/-)
- `STP-01` **SHOULD:**
  - Always show the value next to the stepper.
  - Pair it with an editable number field for large jumps.
  - Shift+click may step by 10×.
- `STP-02` **MUST:** the +/- buttons have labels ("Increase quantity"), or use the ARIA `spinbutton` pattern.

## Color pickers, uploads
- `CLR-01` **SHOULD:** prefer the native `<input type="color">`.
- `UPL-01` **SHOULD: uploads.**
  - A dropzone also offers click-to-browse, drag and drop, and paste.
  - When a required image is cleared, fall back to a placeholder.
  - Show progress for slow uploads.
  - Filter the file picker with `accept`.

## Ratings and meters
- `RAT-01` **SHOULD: displaying ratings.**
  - Use fixed star spacing, and show the text equivalent "4.5 out of 5 stars".
  - **Half stars may be displayed** (our resolved conflict, see `10`).
- `RAT-02` **MUST: rating input.** Use a radio group (one radio per star), with labels and keyboard support.
- `GAU-01` **SHOULD: gauges.**
  - Use `<meter min max low high optimum value>` for levels.
  - Label the current value and both ends of the range.
  - Use discrete segments only for small counts.
