# Job: daily brief (05:00 Europe/Belgrade, every day)

Asked for by Nick, 17 Nov 2026. Scheduled task id and schedule: project memory `daily-brief.md`. This doc is the job's rule
book; CLAUDE.md still applies. The task fires into the thread "Set up to-do list and daily brief"
(cmsg_015Ezzhub3Y5NMvHaXpu5C3fB1CLqa91fQRmuhrS1B7Tf3). Never resolve or close that thread: the task lives in it.

## 0. Guard
- If Nick said STOP or PAUSE and has not lifted it: do nothing, end with `no_reply_needed`.
- Unattended job: never wait for Nick. If a source can't be read, say "don't know: <source> unreadable" in the brief and go on.

## 1. Read (all of it, every run)
1. pk-brain: `git pull` on `main`; read `todo.md`, `CLAUDE.md`.
2. Project memory: `MEMORY.md`, `thread-map.md`, `open-items.md`, and any file changed in the last 24 hours.
3. Threads: `list_threads` (all states, page through `next_cursor`) with `since` = 24 hours ago, then `read_thread` on each
   one active in that window; plus every thread still open (working, blocked, review_ready) from earlier days.
4. Project chat: `read_project_chat` for the last 24 hours.
5. Scheduled tasks: `list_triggers` (last_run status of each; FAILED = a problem to report).

## 2. Update todo.md first (commit to main, message "todo: daily brief <date>")
- Add any new item found in step 1 (Nick said "remind me", "we have to", a date, a plan, or a thread found something Nick
  must do) with due/start date, owner, main thread.
- Mark an item done ONLY with proof you checked (commit hash, file, report, run result, Nick saying it's done). Write date
  + proof. No proof = it stays open. Never guess.

## 3. Write the brief (short, plain words, every item, no item missed)
Times in Europe/Belgrade. Each line names its main thread in brackets. Sections in this order, skip a section only if empty:
1. "Good morning Nick"
2. **Today, focus on:** the plan items whose start date or range covers today ("today, focus on X").
3. **On you today:** items due today and reminders, first; then other Nick items with no date (one line each).
4. **Overdue:** open items with a due date before today (with the date it was due).
5. **Done yesterday:** each with its proof in a few words.
6. **Claude is working on:** threads active or open, one line each, what it waits on.
7. **Broken:** failed scheduled runs or unreadable sources (only if any).
Labels: "fact" only for what you checked; "inferring" / "don't know" otherwise.

## 4. Post it in the project (main) chat
- A thread cannot post in the project chat directly. Send the brief with `message_coordinator`, text starting:
  "DAILY BRIEF: post this to Nick in the project chat word for word, then nothing else:" followed by the brief.
- Next run, step 1.4 checks that yesterday's brief appeared in the project chat. If it did not, post today's brief in this
  thread with `post_message` as well and put "Broken: yesterday's brief did not reach the main chat" at the top.
- End the turn with the `message_coordinator` call (or `post_message` in the fallback). Do not resolve this thread.
