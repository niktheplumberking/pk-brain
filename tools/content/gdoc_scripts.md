# SOP: scripts into Nick's Google Doc (proven 23 Nov 2026)

Fixed doc: "PK Reel Scripts", id `1WpwdSz-GhKiBdIA1xYn9PHHpXpcvEYf4TggPa0YjFwI`
(https://docs.google.com/document/d/1WpwdSz-GhKiBdIA1xYn9PHHpXpcvEYf4TggPa0YjFwI/edit). The link never changes.

Route (PROVEN 23 Nov 2026 21:19 UTC, works with Nick's PC OFF): the Google Drive connector can create a doc but cannot
change an existing doc's text, and HTML uploads lose page breaks. So: build a .docx (keeps real page breaks), upload it as a
STAGING doc, then call Nick's Apps Script web app, which copies the staging body into the fixed doc and trashes the staging doc.

Web app (Nick deployed it 23 Nov, runs as Nick, access "Anyone"; code = tools/content/gdoc/replace-webapp.gs, project
https://script.google.com/home/projects/1S5xLTvZLktUIQhg-XwU9Qfxll_I_xnR2GIFWA8pr3YRpQU7ELHB3Js-7/edit):
`PK_GDOC_WEBAPP=https://script.google.com/macros/s/AKfycbxkth3FLXxQKuejPmYI5GI4HC9N_lSkn96eUICZ7Xcpo472G4HoR-hZF8d6s_-Kv607/exec`
Not a secret by design: it only accepts a doc that Nick owns, titled "PK Reel Scripts STAGING ...", created < 2 h ago, not
yet used. Test 23 Nov: bad id -> refused; target id -> refused; real staging -> {"ok":true,"pages":2}, PDF 2 pages with the
right headers, staging trashed; replay of the same id -> "staging already used".
If the code changes: Nick pastes it and makes a NEW VERSION of the same deployment (Deploy > Manage deployments > Edit),
so the URL stays the same.

1. All cards PASS `tools/content/check_script.py` and pka-script-reviewer.
2. `python3 tools/content/build_scripts_docx.py cards.json <scratchpad>/batch.docx` (refuses failing cards).
3. Connector create_file, title "PK Reel Scripts STAGING <date>", the .docx as a file reference from the scratchpad
   (contentMimeType = the docx type, so it converts to a Google Doc). Keep the returned id.
4. `curl -sSL -H 'Content-Type: application/json' -d '{"stagingId":"<id>"}' "$PK_GDOC_WEBAPP"` -> must print
   {"ok":true,"pages":N} with N == number of scripts. (Use -d without -X POST: Google redirects and -X POST breaks it.)
5. Verify: connector download_file_content of the fixed doc as application/pdf; page count == number of scripts; page N
   starts with script N's header; no text from the old batch. Staging doc metadata shows trashed: true.
6. Chat: 1-2 lines + the fixed link + the job split.

If the web app fails: read its error, fix once, retry once; then stop and tell Nick (leave the staging doc and its link).
Never create a second "scripts" doc. Old fallback (Nick's PC Chrome copy-paste, 23 Nov) only if Nick's PC is on and he agrees.
