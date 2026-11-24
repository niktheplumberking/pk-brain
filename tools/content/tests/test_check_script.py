import copy, os, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from check_script import check_script

GOOD = {
    "format": "educational", "job": "follow",
    "hook_visual": "Nick slams a phone on the desk",
    "hook_ref": "Hook move: lean in: https://drive.google.com/file/d/x/view",
    "hook_line": "Your phone number is costing you jobs.",
    "on_screen_text": "Plumbers: your number is hiding",
    "lock_in": "I checked 40 plumber sites this week and 31 made the same mistake.",
    "bodies": ["The number sits in the footer where nobody scrolls.",
               "On a phone you can't even tap it, so the homeowner calls the next guy."],
    "rehooks": ["But the worst one was the site with no number at all."],
    "payoff": "Put the number top right and make it tappable.",
    "cta": "", "tone": "serious", "delivery_note": "Pause after 'same mistake'.",
    "structure": 6, "source_credit": "", "test_tag": "",
}

def card(**kw):
    c = copy.deepcopy(GOOD); c.update(kw); return c

def test_good_card_passes():
    assert check_script(card()) == []

def test_missing_lock_in():
    assert "lock-in missing" in check_script(card(lock_in=""))

def test_rehook_missing_structure_8():
    c = card(structure=8, bodies=["a b", "c d", "e f"], rehooks=[])
    assert "rehook missing" in check_script(c)

def test_structure_counts():
    assert "structure 8 needs 3 bodies" in check_script(card(structure=8, rehooks=["x", "y"]))
    assert "structure 6 needs 2 bodies" in check_script(card(bodies=["only one"]))
    assert "structure must be 6 or 8" in check_script(card(structure=7))

def test_tone_invalid():
    assert "tone invalid" in check_script(card(tone="sad"))

def test_hook_too_long():
    assert "hook too long" in check_script(card(hook_line="one two three four five six seven eight nine ten"))

def test_job_missing_or_invalid():
    assert "job missing" in check_script(card(job=""))
    assert "job missing" in check_script(card(job="lead"))

def test_client_reel_needs_cta():
    assert "client reel needs a CTA" in check_script(card(job="client", cta=""))
    assert check_script(card(job="client", cta="Comment SITE and I'll send you the checklist")) == []

def test_no_free_in_cta():
    assert "never say free" in check_script(card(job="client", cta="Comment FREE for a free audit"))

def test_remake_needs_credit():
    assert "re-make needs a source credit" in check_script(card(format="remake", source_credit=""))

def test_audit_has_no_cta():
    assert "audit reels have no CTA" in check_script(card(format="audit", job="reach", cta="Follow for more"))

def test_banned_hook_and_phrases():
    assert "banned phrase: did you know" in check_script(card(hook_line="Did you know plumbers lose calls?"))
    assert "banned phrase: here's the thing" in check_script(card(payoff="Here's the thing, fix it."))

def test_delivery_and_visual_required_on_screen_text_not():
    errs = check_script(card(on_screen_text="", delivery_note="", hook_visual=""))
    assert "on-screen text missing" not in errs and "delivery note missing" in errs and "visual hook missing" in errs

def test_too_long_for_structure():
    long_body = " ".join(["word"] * 80)
    assert "too long: over 35 s" in check_script(card(bodies=[long_body, "short one"]))

def test_format_invalid():
    assert "format invalid" in check_script(card(format="vlog"))

def test_missing_keys_do_not_crash():
    errs = check_script({})
    assert "job missing" in errs and "lock-in missing" in errs

def test_curly_apostrophe_still_caught():
    assert "banned phrase: here's the thing" in check_script(card(payoff="Here’s the thing, fix it."))

def test_cli_exit_codes(tmp_path):
    import json, subprocess
    f = tmp_path / "c.json"; f.write_text(json.dumps([GOOD, card(job="")]))
    r = subprocess.run([sys.executable, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "check_script.py"), str(f)], capture_output=True, text=True)
    assert r.returncode == 1 and "Script 1: PASS" in r.stdout and "Script 2: FAIL" in r.stdout


def test_hook_ref_required():
    assert "hook reference clip missing" in check_script(card(hook_ref=""))
