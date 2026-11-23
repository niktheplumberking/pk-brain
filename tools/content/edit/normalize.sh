#!/usr/bin/env bash
# normalize.sh <in> <out.mp4> : any phone/IG clip -> 1080x1920, constant 30 fps, SDR bt709, H.264 + AAC 48k.
# Handles VFR (fps filter), HDR (zscale tonemap), rotation (ffmpeg autorotate), other sizes (scale + pad, never stretch).
set -euo pipefail
in="$1"; out="$2"
trc=$(ffprobe -v error -select_streams v:0 -show_entries stream=color_transfer -of default=nw=1:nk=1 "$in" | head -1)
tm=""
case "$trc" in smpte2084|arib-std-b67)
  tm="zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p,";;
esac
vf="${tm}scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2,fps=30,format=yuv420p,setsar=1"
ffmpeg -v error -y -i "$in" -vf "$vf" -c:v libx264 -preset medium -crf 18 -profile:v high \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
  -c:a aac -b:a 192k -ar 48000 -ac 2 -af aresample=async=1 -movflags +faststart "$out"
echo "normalized=$out"
