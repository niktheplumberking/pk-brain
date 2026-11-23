import os, sys, copy, pytest, docx
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from build_scripts_docx import build
from test_check_script import GOOD

def _breaks(path):
    return sum(1 for p in docx.Document(path).paragraphs for r in p.runs if 'w:br w:type="page"' in r._r.xml)

def test_one_page_per_script(tmp_path):
    cards = [dict(GOOD, number=n, title=f"T{n}") for n in (1, 2, 3)]
    out = tmp_path / "s.docx"; assert build(cards, str(out)) == 3
    assert _breaks(out) == 2
    text = "\n".join(p.text for p in docx.Document(out).paragraphs)
    assert "1 - EDUCATIONAL - T1" in text and "JOB: follow - TONE: serious" in text and "Spoken:" in text

def test_single_script_has_no_break(tmp_path):
    out = tmp_path / "s.docx"; build([GOOD], str(out)); assert _breaks(out) == 0

def test_refuses_failing_card(tmp_path):
    with pytest.raises(ValueError):
        build([dict(GOOD, job="")], str(tmp_path / "s.docx"))

def test_figma_task_only_for_broll(tmp_path):
    out = tmp_path / "s.docx"; build([dict(GOOD, figma_task="Add call button")], str(out))
    assert "FIGMA TASK" not in "\n".join(p.text for p in docx.Document(out).paragraphs)
