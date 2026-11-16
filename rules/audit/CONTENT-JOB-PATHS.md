# Content-scripts job: file map for this project

The hourly job follows `docs/CONTENT-SCRIPT-JOB.md` in ig-lead-machine. That doc names old-project file paths. In this
project, read each one from pk-brain instead (same content, cleaned 16 Nov):

| Doc says | Read here |
|---|---|
| `.../3-audits/AUDIT-SCRIPT-WORKFLOW.md` | `rules/audit/AUDIT-SCRIPT-WORKFLOW.md` |
| `.../3-audits/AUDIT-STEP-PROMPTS.md` | `rules/audit/AUDIT-STEP-PROMPTS.md` |
| `.../3-audits/ed-flaw-list/ed-flaw-list.md` | `rules/ed-flaw-list.md` |
| `.../3-audits/AUDIT-RUN-NOTES-valley-air.md` | `rules/audit/examples/AUDIT-RUN-NOTES-valley-air.md` |
| `reports/2026-10-30-valley-air.md` (and sams, goode) | `rules/audit/examples/` |
| `/mnt/project-files/jev/valley.json` | `rules/jev/examples/valley.json` (+ `valley-rev.json`) |
| `bash /mnt/project-files/jev/jev-call.sh` | `bash rules/jev/jev-call.sh` (logs to `/mnt/project-files/jev/jev-usage-log.csv`) |

- Updating the repos (a plain `git pull` fails in project threads: their local branch has no upstream, and pk-brain has no
  `main`). Use: `git -C /home/user/pk-brain fetch -q origin claude/project-thread-4p3al4 && git -C /home/user/pk-brain checkout -q FETCH_HEAD`
  and `git -C /home/user/ig-lead-machine fetch -q origin main && git -C /home/user/ig-lead-machine checkout -q FETCH_HEAD`.
- Reports and Jev request files are written to the same `/mnt/project-files/...` paths as the doc says; `mkdir -p` first.
- Jev: the "Test Jev connection" thread is in the old project and cannot be reached from here. From this project's
  cloud environment (TypeSafe Docs) a Jev call returns 403 "Must supply an API key" (tested 16 Nov). Until the Jev key is
  added to this environment, skip Jev: Claude picks, and `jev_line` says "Jev not connected; Claude's pick".
- Google profile step: Remote Control on Nick's PC, folder `C:\Users\nicol\Downloads` (still the approved RC folder).
