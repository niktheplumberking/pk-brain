# SOP: scripts into Nick's Google Doc (proven 23 Nov 2026)

Fixed doc: "PK Reel Scripts", id `1WpwdSz-GhKiBdIA1xYn9PHHpXpcvEYf4TggPa0YjFwI`
(https://docs.google.com/document/d/1WpwdSz-GhKiBdIA1xYn9PHHpXpcvEYf4TggPa0YjFwI/edit). The link never changes.

Why this route (facts from the 23 Nov tests): the Google Drive connector can create a doc but cannot change the text of
an existing one. HTML uploads lose page breaks (tested twice: 1 page). A .docx upload keeps real page breaks (3 of 3).
So: build a .docx, upload it as a STAGING doc, copy its content into the fixed doc in Nick's Chrome, verify, trash staging.

1. All cards PASS `tools/content/check_script.py` and pka-script-reviewer.
2. `python3 tools/content/build_scripts_docx.py cards.json <scratchpad>/batch.docx` (refuses failing cards).
3. Connector create_file, title "PK Reel Scripts STAGING <date>", the .docx (file reference from the scratchpad).
4. Claude in Chrome, Nick's Windows PC browser: open staging doc, wait 3 s, click the text, Ctrl+A, Ctrl+C.
5. Open the fixed doc, wait 3 s, click ON the text (the doc can open scrolled to the end; click near the visible text),
   Ctrl+A, SCREENSHOT and confirm the text is highlighted, then Ctrl+V, wait 4 s.
   (23 Nov: the first paste attempt did nothing because the selection had not happened; the screenshot check catches it.)
6. Verify: connector download_file_content of the fixed doc as application/pdf; page count == number of scripts; page N
   starts with script N's header; no text from the old batch. Any miss: repeat 4-6 once, then stop and tell Nick.
7. Trash the staging doc (trash only, never permanent delete).
8. Chat: 1-2 lines + the fixed link + the job split.

If Nick's PC Chrome is not reachable: do not create a second "scripts" doc. Tell Nick in one line, leave the staging doc in
his Drive with its link, and finish step 4-7 when the PC is back.
