# Claude Editor Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the approved Claude Editor plan into a working, verified script + editing system for Nick's reels (IG now, TikTok/YouTube later).

**Architecture:** pk-brain holds every rule as skills (one SOP each) plus small scripts in `tools/content/`; heavy video work runs where the files are (cloud for tests, Nick's PC via Remote Control for real batches); scripts are delivered to one Google Doc; every finished reel passes an independent reviewer agent before Nick sees it.

**Tech Stack:** ffmpeg 6, faster-whisper, Node 22 + Remotion (+ official remotion-dev/skills, remocn), Openverse (CC0 only), Earshot (test first), mind-reader method (MIT scripts from christianjohnston-ai/claude-edits-retention), Google Drive connector, last30days-skill (MIT, candidate).

**Spec:** Claude Doc "Claude Editor plan" https://claude.ai/artifact/CnNMzBisqTyZyTuVLtMMKa (sections 2-13, approved by Nick 23 Nov incl. 15 clashes) + memory `claude-editor-decisions.md`.

## Global Constraints
- Plumbers only. Never invented numbers, reviews or quotes. Consent for real faces.
- Nick's spoken voice; no AI tells ("It's not X, it's Y", "unlock", "elevate").
- Scripts: ONE Google Doc, one page per script; each new batch replaces the old pages.
- Output video: 1080x1920, 30 fps, H.264 + AAC, -14 LUFS integrated (loudness standard), file name `<Format> N - final.mp4`.
- Music/SFX: only licences cleared for IG + TikTok + YouTube (CC0 or own); a credit log per reel.
- Install rule: read every file of a repo, flag risks, copy into pk-brain `.claude/skills`, prove a fresh thread loads and uses it. Never call a tool installed without proof.
- Remotion: free only while the agency has 3 employees or fewer (note in licences/).
- Nothing posts anywhere. Nick posts by hand.
- No secret values in the repo or memory.

## Review Focus
1. A phone clip with variable frame rate or HEVC/HDR from an iPhone: export must still be 30 fps SDR H.264 with audio in sync (test in D1 with a real iPhone file).
2. Captions on a word Whisper mishears (plumber names, area codes like "828"): caption check compares against the script text and flags mismatches.
3. A reel with no pauses / already tight: mind-reader flags must be empty, not crash.
4. A clip over 25 MB going to Nick's PC: must use RC/Dropbox, never the 25 MB device commit; hash checked both ends.
5. A Google Doc batch with fewer scripts than last time: old extra pages must be gone, not left behind.

---
## Phase A: Rules and structure
### Task A1: Apply the 15 approved clashes
**Files:** Modify `.claude/skills/pka-video-scripts/SKILL.md`, `.claude/skills/pka-post-descriptions/SKILL.md`, `rules/hormozi-principles-for-scripts.md`, `rules/voice.md` (IG read rule: Nick's 23 Nov yes). Close the 7 parked clashes in memory `open-items.md` that the 15 settle.
- [ ] Write each new rule exactly as plan section 12 column 4; delete the losing line (no stacking).
- [ ] Verify: `grep -n` for each old rule text returns nothing; each new rule present once.
- [ ] Commit to main; note in memory.
### Task A2: Skill map and routing
**Files:** Create `.claude/skills/pka-video-edit/SKILL.md` (editing section moves here from pka-post-descriptions), `.claude/skills/pka-content-research/SKILL.md`, `.claude/skills/pka-clipping/SKILL.md` (scope + inputs only until Phase E); Modify `CLAUDE.md` routing table; Create `.claude/agents/pka-reel-reviewer.md`, `.claude/agents/pka-script-reviewer.md` (independent checkers, read-only).
- [ ] Each skill = SOP: trigger words, inputs, numbered steps, a "Check before done" list, where outputs go, failure handling (log to `rules/content-ops/incident-log.md`).
- [ ] Verify: a brand-new thread asked "edit this reel" loads pka-video-edit; "write scripts" loads pka-video-scripts; "find viral ideas" loads pka-content-research (proof = that thread's reply quoting the skill).
- [ ] Commit.
### Task A3: Folder + file-name layout
**Files:** Create `rules/content-ops/folders.md` (Dropbox `Plumber King Agency\CLAUDE EDITOR\01 RAW SHORT ... 08 POSTED`, work folders, names, hash rule), `rules/content-ops/incident-log.md`.
- [ ] Waits on Nick's OK of the 8 folders; until then marked "proposal".
## Phase B: Scripts
### Task B1: Script skill rewrite
**Files:** Modify `.claude/skills/pka-video-scripts/SKILL.md`; Create `tools/content/check_script.py`, `tools/content/tests/test_check_script.py`.
**Interfaces:** `check_script(card: dict) -> list[str]` returns failed checks (empty = pass). Card fields: format, job (reach/lead/follow), hook_visual, hook_line, on_screen_text, lock_in, bodies[], rehooks[], payoff, cta, tone (happy|serious|dramatic|dramatic ambience), delivery_note, structure (8|6), source_credit (optional), test_tag.
- [ ] Failing tests: missing lock_in -> "lock-in missing"; rehooks empty with structure 8 -> "rehook missing"; tone not in list -> "tone invalid"; hook_line over 3 s spoken (~9 words) -> "hook too long".
- [ ] Implement; tests pass; skill says every card runs the checker + the 10-point checklist (plan s3) before delivery.
- [ ] Commit.
### Task B2: Google Doc delivery
**Files:** Create `tools/content/gdoc_scripts.md` (SOP: doc id, page-per-script layout, replace procedure).
- [ ] Create Google Doc "PK Reel Scripts" in Nick's Drive; write 2 test script pages separated by page breaks.
- [ ] Replace with 1 page; read back: exactly 1 script, old text gone (Review Focus 5).
- [ ] Record doc id in memory; test text removed before Nick's first real batch.
## Phase C: Editing toolchain (one install at a time, each proven on test clip `DgDEpMpTpIP.mp4`)
### Task C1: Base chain
**Files:** Create `tools/content/edit/probe.sh`, `loudness.sh`, `transcribe.py`.
- [ ] Verify on test clip: probe prints 1080x1920 30fps; loudness output -14 ±0.5 LUFS; transcript words with times saved as `{w,s,e}`.
### Task C2: Remotion + official skills
**Files:** Create `tools/content/remotion/` (project), copy `remotion-dev/skills` into `.claude/skills/remotion-*` after reading every file.
- [ ] Render a 5 s 1080x1920 caption + card test; ffprobe confirms size/fps; frame screenshot looked at.
### Task C3: remocn
- [ ] Read repo, copy only used components; render one animation over the test clip.
### Task C4: Sound
**Files:** Create `tools/content/sfx/openverse_fetch.py` (CC0 filter enforced), `rules/content-ops/sound-credits.md`.
- [ ] Openverse: fetch "whoosh" CC0, licence recorded. Earshot: install in a sandbox dir, run on the test clip; keep only if it places sounds sanely.
### Task C5: Mind reader
**Files:** Copy `viewer_profile.mjs`, `flag_cut.mjs` (MIT, credit) into `tools/content/mindreader/`; wire into pka-video-edit step "flags before cuts".
- [ ] Build `curve.json` from Nick's phone-numbers screenshot; beats from transcript; run flag_cut with profile `none` -> flags printed; a tight clip gives zero flags (Review Focus 3).
- [ ] 48 h grading row format added to the tracker (E2).
### Task C6: last30days (research candidate)
- [ ] Read repo (MIT, 73K stars); run once on "plumbing business owner marketing" with no keys; keep if it returns real owner questions, else drop.
## Phase D: End-to-end test edit
### Task D1: One full edit of a real reel
- [ ] Take Nick's reel `DgDEpMpTpIP.mp4` (and one raw clip from his PC if found): transcript -> flags -> cuts -> captions (Urbanist, outline per skill) -> cards -> SFX -> loudness -> export.
- [ ] pka-reel-reviewer agent checks: size/fps, LUFS, captions vs words, no frame of other clients, licences logged.
- [ ] Send Nick the before/after.
### Task D2: Script test into Google Doc
- [ ] Write 2 real scripts on the new card into the doc; pka-script-reviewer checks them; Nick reads.
## Phase E: Operations (after Nick's folder OK)
- E1: Dropbox chain on PC: one phone clip in, finished reel out, hash match both ends.
- E2: Tracker: one row per reel (views, watch time, retention screenshot, flags right/wrong).
- E3: Long-form clipping flow (pka-clipping): transcript -> shortlist with timestamps -> Nick approves -> clips through pka-video-edit.
- E4: Incident routine: every failure logged with cause + fix + rule changed; monthly setup audit reads the log.
