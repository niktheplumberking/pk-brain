"""make_beats.py <words.json> <beats.json> [video name] : split transcribe.py words [{w,s,e}] into beats for flag_cut.mjs.
One beat per sentence (ends at . ? !), max 6 s; every gap of 0.6 s or more between words becomes its own "pause" beat.
Beats touch end to end and start at 0. Spoken beats get label "" : Claude labels them FROM THE WORDS ONLY, before looking
at any retention curve (labels: hook setup claim announce story demo steps payoff after_payoff cta; see
mind-reader-method.md). flag_cut.mjs must not run while any label is "".
"""
import json, sys

PAUSE = 0.6
MAX_BEAT = 6.0


def make_beats(words):
    beats, cur = [], None
    for i, w in enumerate(words):
        if cur is None:
            cur = {"start": w["s"], "end": w["e"], "label": "", "text": w["w"]}
        else:
            cur["end"] = w["e"]; cur["text"] += " " + w["w"]
        nxt = words[i + 1] if i + 1 < len(words) else None
        gap = (nxt["s"] - w["e"]) if nxt else 0
        if nxt is None or w["w"].rstrip().endswith((".", "?", "!")) or gap >= PAUSE or cur["end"] - cur["start"] >= MAX_BEAT:
            beats.append(cur); cur = None
            if nxt is not None and gap >= PAUSE:
                beats.append({"start": w["e"], "end": nxt["s"], "label": "pause", "text": ""})
    # touch end to end, first starts at 0
    if beats:
        beats[0]["start"] = 0.0
        for a, b in zip(beats, beats[1:]):
            a["end"] = b["start"]
    for b in beats:
        b["start"], b["end"] = round(b["start"], 2), round(b["end"], 2)
    return beats


if __name__ == "__main__":
    words = json.load(open(sys.argv[1]))
    words = words["words"] if isinstance(words, dict) else words
    beats = make_beats(words)
    out = {"video": sys.argv[3] if len(sys.argv) > 3 else "", "length_s": beats[-1]["end"] if beats else 0, "beats": beats}
    json.dump(out, open(sys.argv[2], "w"), indent=1)
    print(f"beats={len(beats)} pauses={sum(b['label']=='pause' for b in beats)} unlabeled={sum(b['label']=='' for b in beats)}")
