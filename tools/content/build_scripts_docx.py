"""Build the weekly scripts .docx: one page per script (real page breaks), layout = pka-video-scripts section 9.

python3 tools/content/build_scripts_docx.py cards.json out.docx
Cards use the check_script.py fields plus: number, title (company or topic), website (optional), figma_task (B-roll only), hook_ref (link to the hook reference clip, pka-video-scripts s4).
Every card must pass check_script first; this script refuses to build otherwise.
"""
import json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import docx
from docx.enum.text import WD_BREAK
from check_script import check_script

LABEL = {"broll": "B-ROLL", "before_after": "BEFORE/AFTER", "steal_this": "STEAL THIS", "money_math": "MONEY MATH",
         "build_in_public": "BUILD IN PUBLIC", "remake": "VIRAL RE-MAKE"}


def build(cards, out):
    bad = {c.get("number", i + 1): check_script(c) for i, c in enumerate(cards) if check_script(c)}
    if bad:
        raise ValueError(f"cards fail check_script: {bad}")
    d = docx.Document()
    for i, c in enumerate(cards):
        fmt = LABEL.get(c["format"], c["format"].upper())
        head = f'{c.get("number", i + 1)} - {fmt} - {c.get("title", "")}'
        if c.get("website"):
            head += f' - {c["website"]}'
        d.add_heading(head, 1)
        p = d.add_paragraph(); p.add_run("HOOK").bold = True
        d.add_paragraph(f'Visual: {c["hook_visual"]}')
        d.add_paragraph(f'On screen: {c["on_screen_text"]}')
        d.add_paragraph(f'Spoken: {c["hook_line"]}')
        if c.get("hook_ref"):
            p = d.add_paragraph(); p.add_run("HOOK REF: ").bold = True; p.add_run(c["hook_ref"])
        p = d.add_paragraph(); p.add_run(f'JOB: {c["job"]} - TONE: {c["tone"]}').bold = True
        p = d.add_paragraph(); p.add_run("DELIVERY: ").bold = True; p.add_run(c["delivery_note"])
        if c["format"] == "broll" and c.get("figma_task"):
            p = d.add_paragraph(); p.add_run("FIGMA TASK: ").bold = True; p.add_run(c["figma_task"])
        p = d.add_paragraph(); p.add_run("SCRIPT").bold = True
        beats = [c["hook_line"], c["lock_in"]]
        bodies, rehooks = list(c["bodies"]), list(c["rehooks"])
        for j, b in enumerate(bodies):
            beats.append(b)
            if j < len(rehooks) and j < len(bodies) - 1:
                beats.append(rehooks[j])
        beats.append(c["payoff"])
        if c.get("cta"):
            beats.append(c["cta"])
        for b in beats:
            d.add_paragraph(b)
        if i < len(cards) - 1:
            d.paragraphs[-1].add_run().add_break(WD_BREAK.PAGE)
    d.save(out)
    return len(cards)


if __name__ == "__main__":
    data = json.load(open(sys.argv[1]))
    print("pages:", build(data if isinstance(data, list) else [data], sys.argv[2]))
