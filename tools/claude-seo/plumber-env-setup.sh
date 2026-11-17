#!/bin/bash
# claude-seo Python runtime for the PLUMBER environment (pk-brain tools/claude-seo, v2.6.2).
# Installs ONLY claude-seo's own requirements.txt into /opt/claude-seo, plus its Chromium.
set -euo pipefail
D=/opt/claude-seo
mkdir -p "$D"
cat > "$D/requirements.txt" <<'REQ'
# Claude SEO - Python Dependencies
# Bounded version pinning with security-conscious minimums
# Last updated: November 10, 2026 (urllib3 2.8.0 security floor, Dependabot floor bumps)

beautifulsoup4>=4.15.0,<5.0.0     # No known CVEs
requests>=2.34.2,<3.0.0           # CVE-2024-47081, CVE-2024-35195 fixes
lxml>=6.1.3,<7.0.0                # CVE-2025-24928 + additional libxml2 security patches
lxml_html_clean>=0.4.5,<1.0.0     # lxml 6 removed html.clean into this standalone package
playwright>=1.63.0,<2.0.0         # CVE-2025-59288 fix (macOS)
urllib3>=2.8.0,<3.0.0             # High-severity urllib3 advisories GHSA-mf9v-mfxr-j63j, GHSA-qccp-gfcp-xxvc; 2.8.0 fixes
                                  # GHSA-8988-9cw3-xx77 (HTTPS proxy TLS settings ignored), GHSA-vxq7-64xx-v4gw (unbounded
                                  # chunk-size line buffering), GHSA-gh4c-6fx4-qh6g (chunked deflate infinite loop)

# v2.0.0 Phase A: headless rendering across all agents
trafilatura>=2.2.0,<3.0.0         # Boilerplate-free content extraction (SPA-safe)
htmldate>=1.10.0,<2.0.0           # Publication-date extraction for freshness signals
courlan>=1.4.0,<2.0.0             # trafilatura URL helper; explicit pin avoids transitive drift

# Report generation (for seo-google PDF/Excel reports)
matplotlib>=3.9.0,<4.0.0              # No known CVEs
numpy>=2.2.6,<3.0.0                   # Direct import in google_report.py; matplotlib>=3.9 is the first numpy 2 release line
weasyprint>=70.0,<71.0                # PYSEC-2026-3940 fixed in 70.0
openpyxl>=3.1.5,<4.0.0                # No known CVEs (Excel export)
pillow>=13.0.0,<14.0.0                # Transitive via matplotlib and weasyprint; GHSA-22hg-r758-rrw9 and 27 more fixed in 13.0.0

# Google API dependencies (for seo-google skill)
google-api-python-client>=2.196.0,<3.0.0   # No known CVEs
google-auth>=2.58.1,<3.0.0                  # No known CVEs
google-auth-httplib2>=0.4.2,<1.0.0           # Compatibility floor for current google-auth stack
PySocks>=1.7.1,<2.0.0                        # httplib2 needs it to honour HTTPS_PROXY
google-analytics-data>=0.18.0,<1.0.0         # No known CVEs
google-ads>=33.0.0,<40.0.0                   # Direct import in keyword_planner.py
REQ
rm -rf "$D/.venv"
python3 -m venv "$D/.venv"
"$D/.venv/bin/python" -m pip install --disable-pip-version-check -q -r "$D/requirements.txt"
PLAYWRIGHT_BROWSERS_PATH="$D/ms-playwright" "$D/.venv/bin/python" -m playwright install chromium
"$D/.venv/bin/python" -c "import bs4, lxml, lxml_html_clean, playwright, requests, trafilatura"
python3 - <<'PY'
import hashlib, json, sys
d = "/opt/claude-seo"
h = hashlib.sha256(open(d + "/requirements.txt", "rb").read()).hexdigest()
state = {"runtime_schema": 1, "plugin_version": "2.6.2", "requirements_sha256": h,
         "python": "%d.%d" % sys.version_info[:2], "browser_ready": True}
open(d + "/runtime-state.json", "w").write(json.dumps(state, indent=2, sort_keys=True) + "\n")
print("claude-seo runtime ready:", state["python"], h[:12])
PY
