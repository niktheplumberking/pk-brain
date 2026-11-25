# Edit style per format

STATUS: FIRST REFS IN (Nick, 25 Nov): Dropbox CLAUDE EDITOR\03 INSPIRATION = 4 SnapInsta style reels + 2 component showcases.
Nick's brief (25 Nov): "use them, memorize them" for every edit; the style below is the default for ALL formats until he gives
per-format refs. Edit style is Claude's call inside these rules; never edit "just the surface" (Nick: "exceed my expectations").
To test later (sources Nick sent, not yet used): step/progress counter "01/05" (@corbinsylk); Nick approves a short scene plan
before the render (@lamon.leonardo); an "avoid AI slop" list for cards and motion (@millee.md).

## House style learned from 03 INSPIRATION (25 Nov)
What all 6 refs share (fact, from frame grids every 0.5-1 s):
1. Something changes every 1-2 s: a graphic lands, the frame cuts, text swaps, a card slides. Never 3 s of the same picture.
2. Captions = 1-3 words at a time, ONE keyword much bigger and in the accent colour; the small words sit above/below it
   ("Never / POST / another reel"). Mixed fonts are fine: a serif italic keyword over a plain sans line (showcase 1, Snap3/4).
3. Text BEHIND the subject: huge numbers or one word behind the head ("4s", "60s", magazine title). Needs a person cut-out
   (matte); without a matte, put the big word in the empty wall area above the head instead.
4. Full-screen graphic cutaways (dark background, one glowing object or flowchart, counters "203K -> 1M") for 1-2 s, then
   back to the face. The face often stays as a small rounded card in a corner during the cutaway (Snap1).
5. Real UI mockups: IG notification pill ("Your reel has been shared"), settings/checklist glass card, prompt bar typing,
   IG profile screen, comment bubble for the CTA (Snap3/4, showcase 1).
6. Icons/emoji-style objects pop above the head on the matching word (Snap2), crossed out when the word is "don't/never".
7. Palette: dark scenes with one accent (gold/yellow in the refs; ours = hot pink #FF3D8B + white, charcoal #141414 base).
8. Sound: soft background bed + a whoosh/pop on each graphic, under the voice (pka-video-edit sound rule).

Per ref (what to take from each):
- Snap1 (dark explainer): glowing node flowchart, counters, ticking checklist, creator thumbnail card kept on screen.
- Snap2 (talking head): giant numbers behind him, movie-style cutaways, 3D objects on black (hourglass, diamond), icons over head.
- Snap3 (talking head, green): serif magazine title behind the head, prompt bar typing, crossed-out app icons, timeline UI,
  timer card, collage of thumbnails, boxed serif captions, comment-bubble CTA.
- Snap4: glowing pyramid diagram, full white IG profile cutaways, split-size keyword caption ("If your" small, "profile
  picture" big gold).
- Showcase 1 ("Raw vs Edited"): the layer order of a good edit = raw -> captions -> zoom in/out -> graphics -> BGM + SFX.
  Captions here: serif italic keyword big, small sans words around it, last word in yellow; IG notification pill; glass
  checklist card over the chest.
- Main components showcase (@tenfoldmarc, the 17 effects below): each effect is one way to back up a word with a picture.

## The 17 effects (main components showcase, 25 Nov: names from its voiceover, in order, matched to the portrait demo)
| # | Name | What you see | Use it when he says... |
|---|---|---|---|
| 1 | orbit | screenshot cards float around the subject in a ring, one keyword in the middle | a list of things/apps/sites |
| 2 | couch wall | one huge word on the wall BEHIND the subject (matte) | a single strong word ("REVIEWS") |
| 3 | UI world | an app/website card hangs above the subject's head | a tool, a website, a screen |
| 4 | frame break | the video sits in a phone frame and the subject steps out of it | "on your phone", the homeowner's view |
| 5 | digital zoom | big words fade in from blur, camera pushes in | the punch line / rule line |
| 6 | phone mockup | a phone with a chat or app screen beside the face | texts, DMs, calls, Google on a phone |
| 7 | checklist | dark card, items appear and tick one by one | steps, "first... second..." |
| 8 | headline wall | sticky notes / news cards slam around the subject | quotes, reviews, headlines, studies |
| 9 | zoom-through cut | camera rushes into one shot and lands in the next | a scene change, "but look..." |
| 10 | chart grow | calendar/bars grow, a "SCALE" pill pops | numbers, growth, ranges (4.2-4.5) |
| 11 | pull-back reveal | starts tight on a detail, pulls back to show it is inside an app window | a reveal, "look what's next to it" |
| 12 | green screen | subject cut out and placed over a website/UI | talking about a site he is "standing in" |
| 13 | paper cut | scrapbook collage of cut-out photos, a big "100%" | stats, proof, before/after |
| 14 | doodle boil | wiggly hand-drawn outline and arrows around a thing | pointing at one detail on a screen |
| 15 | vertigo | dolly zoom: background stretches while the face stays | the shock moment ("too good to be true") |
| 16 | cover story | magazine-cover title ("EDIT") behind the subject | the topic word at the start |
| 17 | glass type | glassy 3D word behind the subject | one emotional word |
Built in Remotion so far: see the effects library below and tools/content/remotion/src/effects/README.md. Effects that need a
person cut-out (2, 4, 12, 16, 17) need a matte (background removal) first; until that tool is PROVEN, use the no-matte variant
(word above the head in the empty wall). PROVEN 25 Nov: MediaPipe cut-out works on both of Nick's sets (rooftop, office).

| Format | Reference reels | Captions | Cards/motion | Cuts and zooms | Sound | Status |
|---|---|---|---|---|---|---|

## Effects library (named, reusable; built in task C7, each one PROVEN before use)
From @tenfoldmarc Def9pj5TWtA (Nick 23 Nov "goldmine"). Status per effect lives in tool-status.md.
orbit, couch wall, UI world, frame break, digital zoom, phone mockup, checklist (list on screen, current item lit),
headline wall, zoom-through cut, chart grow, pull-back reveal, green screen, paper cut, doodle boil, vertigo, cover story,
glass type. First set BUILT 23 Nov (tools/content/remotion/src/effects/README.md): phone mockup, checklist, headline wall,
chart grow, zoom-through cut, pull-back reveal.
