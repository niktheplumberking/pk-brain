"""openverse_fetch.py <query> <out_dir> [n] : download up to n CC0 sounds from Openverse and log each in
rules/content-ops/sound-credits.md. Only CC0 is accepted (cleared for IG, TikTok, YouTube); anything else is skipped even
if the API returns it. Run with python3 -I. Prints one line per file.
"""
import datetime, json, os, re, sys, urllib.parse, urllib.request

API = "https://api.openverse.org/v1/audio/"
REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
CREDITS = os.path.join(REPO, "rules", "content-ops", "sound-credits.md")
UA = {"User-Agent": "pk-reel-tools/1.0"}


def search(query, n):
    url = API + "?" + urllib.parse.urlencode({"q": query, "license": "cc0", "page_size": max(n * 3, 5)})
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
        res = json.load(r)["results"]
    return [x for x in res if x.get("license") == "cc0" and x.get("url")][:n]


def safe(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")[:50] or "sound"


def fetch(query, out_dir, n=1):
    os.makedirs(out_dir, exist_ok=True)
    rows, files = [], []
    for x in search(query, n):
        ext = os.path.splitext(urllib.parse.urlparse(x["url"]).path)[1] or ".mp3"
        path = os.path.join(out_dir, f"{safe(x['title'])}-{x['id'][:8]}{ext}")
        with urllib.request.urlopen(urllib.request.Request(x["url"], headers=UA), timeout=60) as r, open(path, "wb") as f:
            f.write(r.read())
        files.append(path)
        rows.append(f"| {os.path.basename(path)} | {x.get('foreign_landing_url') or x['url']} | CC0 {x.get('license_version','1.0')} "
                    f"| {x.get('creator') or 'unknown'} | {datetime.date.today()} | (fill when used) |")
    if rows:
        with open(CREDITS, "a") as f:
            f.write("\n".join(rows) + "\n")
    return files


if __name__ == "__main__":
    got = fetch(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 1)
    for p in got:
        print(p)
    if not got:
        print("no CC0 result"); sys.exit(1)
