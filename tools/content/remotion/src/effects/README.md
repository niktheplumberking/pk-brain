# Effects library (task C7, Nick 23 Nov, ref @tenfoldmarc Def9pj5TWtA)

Built by us in Remotion (no copied code except remocn's check-list, see ../remocn/README.md). Brand tokens in theme.ts.
Demo of all of them: composition `EffectsDemo` (src/EffectsDemo.tsx), rendered 23 Nov: 21 s, 1080x1920, 30 fps, frames checked.

| Effect | Component | Props | What it does |
|---|---|---|---|
| phone mockup | PhoneMockup.tsx | src, kind video/image, width, tilt, y | a phone springs up into frame playing a clip or showing a screenshot |
| checklist (list lit) | ListHighlight.tsx | title, items[], at[] seconds | numbered list on screen the whole time, current item turns pink |
| checklist (hand-drawn) | ../remocn/check-list.tsx | items, width, fontSize, colours | boxes drawn, ticked, struck through |
| headline wall | HeadlineWall.tsx | lines[], every | quotes slam onto a charcoal wall one by one, last one pink |
| chart grow | ChartGrow.tsx | title, bars[{label,value}], unit | bars grow and numbers count up; last bar pink |
| zoom-through cut | Camera.tsx ZoomThrough | mode out/in, length (s), seconds | A rushes in with blur, B lands from a zoomed blur |
| pull-back reveal | Camera.tsx PullBack | from scale, seconds, fx, fy | starts on a detail, pulls back to the full frame |

Rules: real numbers and real quotes only (test copy is labelled). White text on pink only. Still to build when a script needs
them: orbit, couch wall, UI world, frame break, digital zoom, green screen, paper cut, doodle boil, vertigo, cover story, glass type.
