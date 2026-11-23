"""Script checker for Plumber King reel scripts (skill pka-video-scripts, section 11).

check_script(card) -> list of failed checks; empty list = pass.
Run on a JSON file: python3 tools/content/check_script.py cards.json   (a card or a list of cards)
Rules come from plan section 3 (10-point checklist) and the skill; change the rule there first, then here.
"""
import json, re, sys

FORMATS = {"audit", "educational", "broll", "before_after", "contrarian", "steal_this",
           "money_math", "skit", "build_in_public", "news", "remake"}
JOBS = {"reach", "follow", "client"}
TONES = {"happy", "serious", "dramatic", "dramatic ambience"}
HOOK_MAX_WORDS = 9                      # about 3 s spoken
MAX_WORDS = {6: 91, 8: 117}             # 35 s / 45 s at ~2.6 words a second
BODIES = {6: 2, 8: 3}
REHOOKS = {6: 1, 8: 2}
BANNED = ["did you know", "here's the thing", "let's dive in", "game-changer", "game changer", "elevate",
          "seamless", "in today's world", "utilize", "leverage", "optimize", "follow for more"]


def _words(text):
    return re.findall(r"[A-Za-z0-9'$%.,]+", text or "")


def _txt(card, key):
    v = card.get(key) or ""
    return v.strip() if isinstance(v, str) else ""


def check_script(card):
    errs = []
    fmt, job, tone = _txt(card, "format").lower(), _txt(card, "job").lower(), _txt(card, "tone").lower()
    bodies = [b for b in (card.get("bodies") or []) if isinstance(b, str) and b.strip()]
    rehooks = [r for r in (card.get("rehooks") or []) if isinstance(r, str) and r.strip()]
    cta = _txt(card, "cta")
    structure = card.get("structure")

    if fmt not in FORMATS:
        errs.append("format invalid")
    if job not in JOBS:
        errs.append("job missing")
    if not _txt(card, "hook_visual"):
        errs.append("visual hook missing")
    hook = _txt(card, "hook_line")
    if not hook:
        errs.append("hook missing")
    elif len(_words(hook)) > HOOK_MAX_WORDS:
        errs.append("hook too long")
    if not _txt(card, "on_screen_text"):
        errs.append("on-screen text missing")
    if not _txt(card, "lock_in"):
        errs.append("lock-in missing")
    if not _txt(card, "payoff"):
        errs.append("payoff missing")
    if tone not in TONES:
        errs.append("tone invalid")
    if not _txt(card, "delivery_note"):
        errs.append("delivery note missing")

    if structure not in BODIES:
        errs.append("structure must be 6 or 8")
    else:
        if len(bodies) != BODIES[structure]:
            errs.append(f"structure {structure} needs {BODIES[structure]} bodies")
        if not rehooks:
            errs.append("rehook missing")
        elif len(rehooks) != REHOOKS[structure]:
            errs.append(f"structure {structure} needs {REHOOKS[structure]} rehooks")
        spoken = " ".join([hook, _txt(card, "lock_in"), *bodies, *rehooks, _txt(card, "payoff"), cta])
        if len(_words(spoken)) > MAX_WORDS[structure]:
            errs.append(f"too long: over {35 if structure == 6 else 45} s")

    if job == "client" and not cta:
        errs.append("client reel needs a CTA")
    if re.search(r"\bfree\b", cta, re.I):
        errs.append("never say free")
    if fmt == "audit" and cta:
        errs.append("audit reels have no CTA")
    if fmt == "remake" and not _txt(card, "source_credit"):
        errs.append("re-make needs a source credit")

    all_text = " ".join([hook, _txt(card, "on_screen_text"), _txt(card, "lock_in"), *bodies, *rehooks,
                         _txt(card, "payoff"), cta]).lower().replace("’", "'")
    for phrase in BANNED:
        if phrase in all_text:
            errs.append(f"banned phrase: {phrase}")
    return errs


if __name__ == "__main__":
    data = json.load(open(sys.argv[1]))
    cards = data if isinstance(data, list) else [data]
    bad = 0
    for i, c in enumerate(cards, 1):
        e = check_script(c)
        bad += bool(e)
        print(f"Script {i}: " + ("PASS" if not e else "FAIL - " + "; ".join(e)))
    sys.exit(1 if bad else 0)
