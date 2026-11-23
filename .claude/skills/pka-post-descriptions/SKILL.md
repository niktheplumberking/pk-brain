---
name: pka-post-descriptions
description: "Writes the Instagram post description (the caption text under a reel) for Nick's finished Plumber King Agency videos - audits, B-rolls and educational reels - in Ed's (@edwin.radd) description pattern. Use when Nick asks for descriptions, post descriptions, captions, caption text or \"what do I write under it\", or says \"script\" about a video that is already made or posted (that means its description). Short rows, never a transcript, no comment word, all done videos in one go, delivered ready to paste in a code block. Also holds the video editing rules (burned-in caption placement and outline, zooms, loudness, cutting and file saving); use it when Nick says edit the videos, edit the reels, cut the footage, caption the videos, add zooms or the raw footage is in Dropbox."
---

# PKA post descriptions

Built only from rules Nick gave. Where two rules clashed, the newest dated one won; every such call is
listed in `audit/FLAGS-content.md`. Nick's message in the current chat beats this skill. Reference: `rules/voice.md`
(section "Post descriptions"). If a file is unreadable, say so; never guess.

## 1. What "description" means
- When Nick says "script" for an already-made or posted video, he means the POST DESCRIPTION. If unclear,
  assume description for finished videos.
- "Captions" can mean the post text or the subtitles burned into the video. Post text = this section;
  burned-in = the last section.

## 2. Hard rule: never a transcript
- Never write a description by transcribing the video or re-rowing what he says. The transcript may only be
  used to learn the TOPIC and the facts shown (numbers, names), never as the text.
- Before sending, compare the description to the transcript. If most rows repeat what he says, rewrite.
- Never give Nick transcripts of Ed auditing random sites.

## 3. The shape (Ed's model)
Copy the approved shape: Audit 8/9/10 in the thread "Write post descriptions for done videos".
- Audit: scene opener ("Checking this plumbing site's X", "Found this plumbing site", "This plumbing site has
  no X"; never the stat as line 1) -> 2-4 rows of what is seen -> the customer's reaction ("They call the next
  plumber") -> 2-3 rows of the exact FIX the video does not say ("Put...", "Add...") -> a closing rule line.
- B-roll: "Working on a plumber's X today" -> the why -> the fix -> a short rule.
- Educational: one problem line -> the how-to steps the video does NOT say -> a closing rule line.
- Audit facts are judged from the desktop view, as filmed.

## 4. Style
- Captions SHORT and simple: one short row per line (about 6 words), little text per row, a blank line
  between rows.
- No bullets, no headers, no emojis, no hashtags, mostly no full stops, no links in the body.
- No comment word and no ask ("Comment X", "Agree or disagree?"). End on a rule line. Exception (clash 14,
  23 Nov): on the 2 comment-word test reels a week, repeat the word said in the video once, as the last row.
- Avoid the word "free" and any money/free-offer wording (nick.bennettx had a false "asking for money" flag).
- Plain words, no jargon. Only facts shown in the video; never invent a number, review or result.
- Ed is the model: copy his pattern, never his words.

## 5. Delivery
- When Nick asks for descriptions, send them for EVERY done video (all audits, B-rolls, educational) in one
  go, with the one he is posting now on top. Never only the few he named.
- Send each ready to paste in a code block, nothing else around it.

## If also burning captions into video
Placement:
- Default: plain text, Urbanist, no box behind it, 2 px outline, centred at about 66% of the height.
- Outline colour: white on dark backgrounds; charcoal #141414 on bright screens, white pages, or when his
  shirt behind the captions is pink or white. Never black on pink.
- B-roll: captions go in the empty space ABOVE Nick's head, NEVER over the monitor, laptop or what he is
  doing (seeing the work is the point). Check his head height across frames for every clip.
- Split screen (site on top, camera below) with a black gap: captions centred in the gap, one line, clear of
  Instagram's icons, wherever the gap is. Measure the screen and camera rows for each video.
- Split screen with no gap (screen top, his face below): never across his face; the top is for his title;
  put them below his chin (measure the chin across frames first).
- Phone-only videos: the usual lower position. Gentle punch-in cuts on the face camera are allowed (clash 7).
- Letterboxed landscape video in 9:16 (Nick's test format, Edu 4, 15 Nov): captions in the black area BELOW the
  video, white outline.

Sound and words:
- Voice levelled to -14 LUFS.
- Fix speech-to-text mishears against his script before rendering (names, "plumber near me" and similar).
  Where he actually said something different from the script, keep what he said and flag it.

Zooms (screen recordings only, never the face camera):
- One zoom at a time: in, hold, fully out. Never zoom while already zoomed.
- Every zoom-out finishes before any cut, camera jump, voice break or fast scroll. Find the cuts first.
- About 2x max; subtle, B2B. Zoom on what Nick emphasises and where his mouse points; slow designed paths
  along his swipe, hold still otherwise; zoom out right after the highlight clears. No zoom during slow
  scrolls. Audit 2 (Ogborn) is the reference standard. Don't let zooms get static or sparse.
- Audits: zoom on the opening line (the plumber + odd detail) from the first second until the name + reviews are shown, and on
  head-title text he reads with the mouse (31 Oct).

Titles (clash 6, 23 Nov): burn the hook's on-screen text into the video from frame 1; Nick no longer adds
Instagram titles.

Cutting (16 Nov): cut silences and bad takes; the LAST take of each repeated sentence is ~99% the good one.
Nick is teaching the full edit; visual/sound/text hooks and showing real work (Figma, results) are the aim.

Files:
- Save as "<Format> N - final.mp4" (e.g. "Audit 3 - final.mp4", "Skit 1 - final.mp4") in the folder Nick uses
  (DONE FILES\DONE <format> until the Dropbox CLAUDE EDITOR folders exist) (clash 15).
- Never overwrite a file name; save under a new name. Verify the PC copy by hash before saying it is saved.
- /mnt/project-files silently changes .mp4 files, and device commits cap at 25 MB per file: zip -0, split,
  re-hash, then join and check the hash on the PC.
