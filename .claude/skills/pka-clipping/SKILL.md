---
name: pka-clipping
description: Turns Nick's long-form videos (YouTube recordings, podcasts, walk-and-talks) into short vertical clips for Instagram, TikTok and YouTube Shorts. Use when Nick says clip, clips, clipping, long video, long-form, podcast clips, cut this into shorts. Picks moments, gets Nick's OK on a shortlist, reframes 16:9 to 9:16, then each clip goes through pka-video-edit.
---

# PKA clipping (SOP) - SCOPE ONLY, not built yet

Status 23 Nov 2026: planned (build plan Phase E3). Nick plans 2-3 long YouTube videos -> 20-30 clips (his timing, to-do #36).
Do not run this on a real video until `rules/content-ops/tool-status.md` marks clipping PROVEN.

## Planned steps
1. Raw long video in `02 RAW LONG/<date> <place>/`; hash logged.
2. Transcribe the whole video (word times).
3. Score moments: a self-contained point that opens a question in its first line and pays it off, 20-45 s; plumbing
   owner relevance first.
4. Shortlist with timestamps and a proposed hook line per clip -> Nick approves (never edit before his OK).
5. Reframe 16:9 -> 9:16 around his face (face tracking), keep screen inserts readable.
6. Each approved clip -> pka-video-edit steps 3-14.
