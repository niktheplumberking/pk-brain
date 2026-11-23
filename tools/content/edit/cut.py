"""cut.py <src> <words.json> <keep.json> <out.mp4> [--crop-x 0.5] : pka-video-edit step 6.
keep.json = [[start, end], ...] seconds of the source to keep (from the script match + approved flags). Inside each range,
every gap of 0.6 s or more between words is cut out (0.12 s kept each side), the SOP's allowed auto-cut. Landscape sources
are cropped to 9:16 around --crop-x (0..1 of the width). Output 1080x1920, 30 fps, SDR H.264 + AAC 48k, plus <out>.edl.json
listing every kept piece (source in/out) so any cut can be traced back. Run with python3 -I.
"""
import json, subprocess, sys

PAUSE, PAD = 0.6, 0.12


def pieces(words, keep):
    out = []
    for a, b in keep:
        ws = [w for w in words if w["s"] >= a - 0.05 and w["e"] <= b + 0.05]
        if not ws:
            continue
        start = max(a, ws[0]["s"] - PAD)
        for w, nxt in zip(ws, ws[1:] + [None]):
            if nxt is None:
                out.append([round(start, 3), round(min(b, w["e"] + PAD), 3)])
            elif nxt["s"] - w["e"] >= PAUSE:
                out.append([round(start, 3), round(w["e"] + PAD, 3)])
                start = nxt["s"] - PAD
    return out


def main():
    a = sys.argv[1:]
    crop_x = float(a[a.index("--crop-x") + 1]) if "--crop-x" in a else 0.5
    src, words, keep, out = a[0], json.load(open(a[1])), json.load(open(a[2])), a[3]
    ps = pieces(words, keep)
    w, h = map(int, subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height",
                                    "-of", "csv=p=0", src], capture_output=True, text=True).stdout.strip().split(","))
    if w > h:  # landscape -> 9:16 crop around crop_x
        cw = int(h * 9 / 16) // 2 * 2
        cx = min(max(int(w * crop_x - cw / 2), 0), w - cw)
        geo = f"crop={cw}:{h}:{cx}:0,scale=1080:1920"
    else:
        geo = "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2"
    parts, labels = [], ""
    for i, (s, e) in enumerate(ps):
        parts.append(f"[0:v]trim={s}:{e},setpts=PTS-STARTPTS[v{i}];[0:a]atrim={s}:{e},asetpts=PTS-STARTPTS,afade=t=in:d=0.01,afade=t=out:st={max(e-s-0.01,0)}:d=0.01[a{i}]")
        labels += f"[v{i}][a{i}]"
    fc = ";".join(parts) + f";{labels}concat=n={len(ps)}:v=1:a=1[cv][ca];[cv]{geo},fps=30,format=yuv420p,setsar=1[vo]"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", src, "-filter_complex", fc, "-map", "[vo]", "-map", "[ca]",
                    "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-color_primaries", "bt709", "-color_trc", "bt709",
                    "-colorspace", "bt709", "-c:a", "aac", "-b:a", "192k", "-ar", "48000", out], check=True)
    total = sum(e - s for s, e in ps)
    json.dump({"source": src, "pieces": ps, "seconds": round(total, 2)}, open(out + ".edl.json", "w"), indent=1)
    print(f"pieces={len(ps)} seconds={total:.2f} out={out}")


if __name__ == "__main__":
    main()
