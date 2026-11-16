# IG Lead Machine CRM and scheduled jobs (facts)

## CRM (Nick's top project; work starts Mon 23 Nov)
- Live: https://ig-lead-machine.vercel.app (Content page: /content). Repo niktheplumberking/ig-lead-machine (Next.js + TS +
  Supabase; main auto-deploys; keep `next` patched). Supabase project ref amcxsrjfkhidklhswtal. Public Supabase URL/key are in
  src/lib/supabase/config.ts (public, no env vars). Owner = first sign-up. Test robots: scanner@ / qa-robot@ / qa-stranger@
  ig-lead-machine.test; e2e runs on the live DB and cleans only e2e_% leads.
- Owner thread: "Build Instagram lead gen CRM" cmsg_01JcVwzrWUQdguS5Ff2vqQcw6UXvKpARF989owQWgfgrKE.
- Nick wants (14 + 16 Nov): manage all content, link his video folder, publish reels from the CRM, track leads/follow-ups,
  stats (closing rates). He wants to work only from the CRM + chat.
- Lead funnel: leads = accounts nick.bennettx follows (8-10 ICP plumbers/day, by hand). Phase 0 pre-warm 2-4 days; gate
  research report once (re-research after 30+ days); Jev picks 6/day "Who to DM today"; Phase 1 opener + 2 follow-ups
  (FU1 DM after 2 days; FU2 DM or comment); no reply = "Antarctic" -> unfollow; any interaction = Phase 2 warm (free audit +
  3 FUs); reply = Phase 3 hot -> meeting. No daily DM cap (Nick refused one). DMs were paused after the 27 Oct restriction.
- Content board: Idea -> Shooting -> Editing -> Ready to publish (Dropbox) -> Published. Paste link + note + Send queues a row
  in Supabase `content_items`; the hourly job writes the script onto the card.
- Auto-editing plan (31 Oct): https://claude.ai/artifact/QubmAahkcqjDgRgjNf4ySg. Editing kit
  `/mnt/project-files/plumber-king-agency/captions/editing-kit/` (old project files; may not exist in new project). The "reel-editing" skill was proposed on a card and never saved.
- Old prototype (superseded): https://claude.ai/artifact/DBb9aBXBhQ9Qt8ci7SeAsk

## Scheduled jobs (live list read 16 Nov 18:4x UTC: 3 recurring, all enabled, all fire into the CRM thread session
session_013rHJ3ZrPZXB6jcn3rH9g8y; last runs SUCCEEDED = wake delivered)
| Job | id | Schedule | Prompt / doc |
|---|---|---|---|
| IG Lead Machine content scripts | trig_01WKdeBsPrEQd8Fwr1L3azyB | `48 * * * *` (hourly at :48 UTC) | repo doc `docs/CONTENT-SCRIPT-JOB.md` in ig-lead-machine |
| IG Lead Machine daily research | trig_01JDVWDEiW5QXKG16E4ousRs | `CRON_TZ=Asia/Bangkok 41 6 * * *` (06:41 Bangkok) | repo doc `docs/ROUTINE-PROMPT.md` steps 1-7, Supabase connector execute_sql |
| IG Lead Machine daily following scan | trig_01Ud5EpfgA3rCKactPcX3qQ6 | `CRON_TZ=Asia/Bangkok 3 6 * * *` (06:03 Bangkok) | starts Remote Control on the PC to run C:\PK-WORK\Tools\ig-lead-machine-scan\run-scan.cmd (log scan-log.txt); needs the PC on |
- The index talks about "2 scheduled CRM jobs" (the content-scripts job and the 06:41 research). The live list also has the
  06:03 scan; the index says the daily follow scan is blocked by the PC safety check. Nick to say whether it moves too.
- Content-script job details: workflow rule book owned by thread "Build Ed's audit flaw list":
  `/mnt/project-files/plumber-king-agency/content/3-audits/AUDIT-SCRIPT-WORKFLOW.md` (old project files; may not exist in new project), `AUDIT-STEP-PROMPTS.md`,
  `ed-flaw-list/ed-flaw-list.md`; reports to `content/3-audits/reports/<date>-<slug>.md`. Jev 2 calls per script (both orders).
  Google profile step needs the PC on (else marked NOT CHECKED). First live run: Goode Plumbing, 30 Oct. The job reads
  content/3-audits/* by path: don't move those files.
- Hearth routines ignore environment/connectors args. Old one-off: trig_01BjnxDp3E1YWDMaTdfZiMgQ (SEO check-in 26 Oct, stale).
  A send_later reminder was set for Wed 18 Nov (remind Nick of CRM, content analysis, auto-cutting; CRM first).
- How to recreate in a new project: see pk-brain repo file `handover/open-work.md`.
