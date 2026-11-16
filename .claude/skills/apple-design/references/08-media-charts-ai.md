# 08 Media, full screen, charts, AI and ML features

Sources: `playing-video`, `playing-audio`, `going-full-screen`, `live-viewing-apps`, `multitasking`, `playing-haptics`, `charts`, `charting-data`, `generative-ai`, `machine-learning`.

## Video
- `MED-01` **MUST:** nothing plays sound on its own.
  - Background or hero video that starts automatically must be `muted`, `playsinline` and `loop`.
  - It needs a visible pause control (WCAG 2.2.2).
  - It must not autoplay at all when `prefers-reduced-motion` is set.
- `MED-02` **MUST:** keep the original aspect ratio and never bake letterbox bars into the file.
  - Use `aspect-ratio` together with `object-fit: contain`, or `cover` for decorative or wide hero video.
- `MED-03` **MUST:** caption videos that contain speech (`<track kind="captions">`), and provide transcripts where relevant.
- `MED-04` **SHOULD:** player behaviour.
  - Prefer the native `<video controls>` or a well-known player.
  - Space bar plays and pauses.
  - Long videos resume where the viewer left off.
  - Never play two audio sources at once.
- `MED-05` **SHOULD:** media details.
  - Use a representative `poster` that doesn't look like a UI control.
  - Scrubbing thumbnails are about 160px wide.
  - Before an interactive overlay, pause with at least 0.5s delay.
  - Keep hero loop clips short (under about 30s) and compressed.
- `MED-06` **SHOULD:** don't show a loading screen if the video loads fast.
  - If loading takes more than 2s, show a minimal centred spinner.
  - Start playback as soon as enough has buffered.
- `MED-07` **SHOULD:** pause media, games and slideshows when the page is hidden (`visibilitychange`). Let user-started uploads keep going.
- `MED-08` **SHOULD:** use the Media Session API so media keys and lock-screen controls work. Only respond to media keys while your page is actually playing.

## Full screen
- `FUL-01` **SHOULD:** use the Fullscreen API only for media, slideshows, games and focused editing.
  - The user chooses when to enter and exit, and you never exit automatically.
  - Controls auto-hide and come back on tap or mouse move.

## Live content
- `LIV-01` **SHOULD:** live streams.
  - Reachable in one click.
  - Clearly badged "LIVE" and distinguished from on-demand content.
  - Playback is the primary action.
  - Audio stops when the user leaves.

## Haptics and UI sound
- `HAP-01` **SHOULD:** `navigator.vibrate` is Android-only. Any haptic or sound only complements visual feedback, is used sparingly and consistently, and can be turned off.

## Charts
- `CHT-01` **SHOULD:** use a chart only when it shows something a table can't. Otherwise use a sortable table.
  - Prefer bar and line charts.
  - Give every chart a title or subtitle that states the takeaway.
- `CHT-02` **SHOULD:** choose the mark by the question.
  - Bars to compare categories or totals.
  - Lines for trends over time.
  - Points for correlations and outliers.
- `CHT-03` **MUST:** bar charts start at zero. Line charts may use another baseline.
  - Ticks use familiar steps (0, 5, 10).
  - Use enough light gridlines to read values, but no more.
- `CHT-04` **MUST:** never rely on colour alone (add shapes or patterns, and separators between stacked segments).
  - Never hide critical information behind hover.
- `CHT-05` **SHOULD:** on narrow screens:
  - make the plot as wide as possible;
  - keep axis labels short and put units in the title;
  - align the chart with the content edge.
- `CHT-06` **SHOULD:** interaction.
  - The whole plot area is the hover or scrub target.
  - Users can move through the data with the keyboard.
  - Data changes are announced through a live region, not only animated.
- `CHT-07` **MUST:** accessibility.
  - Give a text summary: chart type, what the axes mean and their ranges, and the key insight.
  - Use SVG `role="img"` with `<title>`/`<desc>`, or a figure plus a visually hidden data table.
  - Use concrete values ("June 6", "60 minutes"), not "rapidly", and not formats like "6/6" or "60m".
  - Hide decorative tick text from assistive technology.

## AI and generative features (chatbots, AI search, generators, recommendations)
- `AI-01` **MUST:** disclose AI use clearly.
  - Never present AI output as a human.
  - Follow regional rules (EU AI Act).
- `AI-02` **MUST:** the user stays in control.
  - Next to the output, offer edit, retry, undo or revert, and dismiss.
  - Get explicit confirmation before any irreversible action (delete, purchase, send). Never automate these.
- `AI-03` **MUST:** say plainly that output may contain errors.
  - Don't use AI for facts where a mistake could cause harm.
  - Where possible, provide a non-AI fallback.
- `AI-04` **SHOULD:** set expectations.
  - Show example prompts or suggestion chips when the input is empty.
  - When a request is blocked, coach the user towards a better one.
  - When something is a known limitation, explain it and offer alternatives rather than an empty state.
- `AI-05` **SHOULD:** use specific progress text ("Summarizing your notes…"). Stream output where possible. On failure, explain in plain language and give a next step.
- `AI-06` **MUST:** privacy.
  - Disclose when data is sent to a server and whether it's used for training.
  - Use the minimum data needed.
  - Get permission before using personal or sensitive data, and offer an opt-out.
- `AI-07` **SHOULD:** feedback.
  - Make it optional and non-interruptive (thumbs up or down, plus a detailed report).
  - Labels state the consequence ("Show fewer posts like this"), not just "Dislike".
  - Act on feedback immediately and remember it.
- `AI-08` **SHOULD:** recommendations.
  - Explain them factually ("Because you viewed X").
  - Express confidence in plain terms, not "97% match".
  - Hide low-confidence proactive suggestions.
  - Avoid filter bubbles and leave room to explore.
- `AI-09` **SHOULD:** offer several distinct options when helpful, most likely first.
  - Prefer guided correction (pick an alternative) over freeform input.
  - Let people correct their own corrections.
- `AI-10` **SHOULD:** test with adversarial, vague and sensitive inputs, and with a diverse range of users. Keep the model swappable behind the UI.
