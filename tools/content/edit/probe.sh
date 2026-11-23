#!/usr/bin/env bash
# probe.sh <video> : prints one line per fact (key=value) for pka-video-edit step 2. Exit 2 if file unreadable.
set -euo pipefail
f="$1"
[ -r "$f" ] || { echo "error=cannot read $f"; exit 2; }
v() { ffprobe -v error -select_streams v:0 -show_entries "stream=$1" -of default=nw=1:nk=1 "$f" | head -1; }
codec=$(v codec_name); w=$(v width); h=$(v height); rfr=$(v r_frame_rate); afr=$(v avg_frame_rate)
trc=$(v color_transfer); pixfmt=$(v pix_fmt)
rot=$(ffprobe -v error -select_streams v:0 -show_entries stream_side_data=rotation -of default=nw=1:nk=1 "$f" | head -1 || true)
dur=$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$f")
audio=$(ffprobe -v error -select_streams a:0 -show_entries stream=codec_name -of default=nw=1:nk=1 "$f" | head -1)
fps=$(python3 -c "a,b='${afr:-0/1}'.split('/');print(round(int(a)/int(b),3) if int(b) else 0)")
vfr=no; [ "$rfr" != "$afr" ] && vfr=yes
# second check: real frame gaps in the first 10 s (phones often report a steady rate but record VFR)
gap=$(ffprobe -v error -select_streams v:0 -read_intervals "%+10" -show_entries frame=pts_time -of csv=p=0 "$f" \
  | awk -F, '$1!=""{if(n++){d=$1-p; if(d>mx)mx=d; if(mn==""||d<mn)mn=d} p=$1} END{if(mn>0 && mx/mn>1.5)print "yes"; else print "no"}')
[ "$gap" = yes ] && vfr=yes
hdr=no; case "$trc" in smpte2084|arib-std-b67) hdr=yes;; esac
ok=yes; [ "$codec" = h264 ] && [ "$w" = 1080 ] && [ "$h" = 1920 ] && [ "$vfr" = no ] && [ "$hdr" = no ] \
  && python3 -c "import sys;sys.exit(0 if abs($fps-30)<0.01 else 1)" && [ -n "$audio" ] || ok=no
echo "file=$f"; echo "codec=$codec"; echo "size=${w}x${h}"; echo "rotation=${rot:-0}"; echo "fps=$fps"
echo "vfr=$vfr"; echo "hdr=$hdr ($trc, $pixfmt)"; echo "audio=${audio:-none}"; echo "duration=$dur"
echo "ready_for_edit=$ok"   # no = run normalize.sh first
