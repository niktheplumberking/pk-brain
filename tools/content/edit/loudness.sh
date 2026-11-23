#!/usr/bin/env bash
# loudness.sh <in> <out.mp4> : two-pass EBU R128 to -14 LUFS integrated, true peak <= -1 dBTP. Video copied untouched.
set -euo pipefail
in="$1"; out="$2"
m=$(ffmpeg -hide_banner -i "$in" -af loudnorm=I=-14:TP=-1:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
g() { python3 -c "import json,sys;print(json.loads(sys.argv[1])['$1'])" "$m"; }
ffmpeg -v error -y -i "$in" -c:v copy -af "loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=$(g input_i):measured_TP=$(g input_tp):measured_LRA=$(g input_lra):measured_thresh=$(g input_thresh):offset=$(g target_offset):linear=true,aresample=48000" -c:a aac -b:a 192k "$out"
r=$(ffmpeg -hide_banner -i "$out" -af loudnorm=I=-14:TP=-1:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
python3 - "$r" <<'PY'
import json,sys
d=json.loads(sys.argv[1]); i=float(d['input_i']); tp=float(d['input_tp'])
ok = abs(i+14)<=1.0 and tp<=-1.0
print(f"loudness_lufs={i} true_peak={tp} pass={'yes' if ok else 'no'}")
sys.exit(0 if ok else 1)
PY
