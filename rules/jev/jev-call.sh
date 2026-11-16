#!/bin/bash
# usage: bash jev-call.sh request.json [extra curl args, e.g. -H 'TypeSafe-Danger-Zone-Images: true']
# Prints the response + HTTP status, and appends one line per call to /mnt/project-files/jev/jev-usage-log.csv (this project's shared files; override with JEV_LOG) (see jev-cookbook.md section 0).
req="$1"; shift
log="${JEV_LOG:-/mnt/project-files/jev/jev-usage-log.csv}"; mkdir -p "$(dirname "$log")" 2>/dev/null
out=$(curl -sS -w '\nHTTP %{http_code} %{time_total}s' -X POST https://api.typesafe.ai/v1/systemone -H 'Content-Type: application/json' "$@" --data @"$req")
rc=$?
echo "$out"
status=$(printf '%s' "$out" | tail -n1 | awk '{print $2}')
body=$(printf '%s' "$out" | sed '$d')
read -r model tokens < <(printf '%s' "$body" | python3 -c 'import json,sys
try:
    d=json.load(sys.stdin); print(d.get("model","-"), (d.get("usage") or {}).get("input_tokens","-"))
except Exception:
    print("- -")' 2>/dev/null)
[ -f "$log" ] || echo "utc_time,request_file,model,input_tokens,http_status" > "$log"
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ),$(basename "$req"),${model:--},${tokens:--},${status:-curl_error_$rc}" >> "$log" 2>/dev/null
exit $rc
