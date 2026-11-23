# Claude Editor folders

STATUS: LIVE. Nick gave the yes for the whole build on 23 Nov 21:20 UTC; created 23 Nov 21:26 UTC through the Dropbox connector
(all 8 folders checked in the connector's replies).

Dropbox: `C:\Users\nicol\Dropbox\Plumber King Agency\CLAUDE EDITOR\`
- 01 RAW SHORT: Nick drops raw clips for reels.
- 02 RAW LONG: long recordings for clipping (pka-clipping).
- 03 INSPIRATION: style references, one subfolder per format.
- 04 ASSETS: logos, fonts, own sounds, screen recordings.
- 05 WORK: Claude's work files, one subfolder per batch (`YYYY-MM-DD batch`).
- 06 REVIEW: finished reels waiting for Nick's check.
- 07 DONE: approved by Nick, ready to post.
- 08 POSTED: moved after posting; feeds the 48 h grading.

Names: `<Format> N - final.mp4` (pka-video-edit). Raw files keep their names; Claude records a SHA-256 hash of each raw
file on arrival and before delivery, so a swapped or changed file is caught.

How files move (cloud, Nick's PC off):
- In: the Dropbox connector lists 01/02 and gives a one-time download link; Claude downloads it to the cloud work folder and
  hashes it (sha256) on arrival.
- Out: the Dropbox connector cannot upload video (text files only). Finished reels go to Nick's Google Drive through the Drive
  connector (file upload by reference, no conversion), hash checked by downloading it back; the link goes in the chat.
  When the PC is on, the copy can also go to 06 REVIEW through Remote Control.
