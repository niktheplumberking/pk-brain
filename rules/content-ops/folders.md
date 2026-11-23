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
- Out (PROVEN 23 Nov 21:33 UTC): the Dropbox connector cannot upload video and the Drive connector refuses uploads over
  10 MB (a 35 s reel is ~19 MB). So the finished reel is copied to `/mnt/project-files/claude-editor/` and attached to the
  chat message (Nick opens/downloads it from the Library on any device). That folder rewrites the mp4 container (file hash
  changes, +~6 KB), but the video and audio streams stay bit-identical: verify with
  `ffmpeg -v error -i <file> -map 0:v -c copy -f md5 -` (and `-map 0:a`) on both copies; both must match.
  When the PC is on, a copy can also go to Dropbox 06 REVIEW through Remote Control (whole-file hash must match there).
