"""C1 base chain tests on small synthetic clips (about 20 s total). Real-clip proof is in audit/install-log.md."""
import json, os, subprocess, pytest
E = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "edit")

def run(*a):
    return subprocess.run(list(a), capture_output=True, text=True)

def probe(f):
    r = run(os.path.join(E, "probe.sh"), f)
    return dict(l.split("=", 1) for l in r.stdout.splitlines() if "=" in l)

@pytest.fixture(scope="module")
def clips(tmp_path_factory):
    d = tmp_path_factory.mktemp("c")
    hdr = str(d / "hdr_vfr.mp4")
    run("ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "testsrc2=s=1920x1080:r=60:d=3", "-f", "lavfi", "-i",
        "sine=f=440:d=3", "-vf", "select='not(mod(n\\,3))+gt(n\\,90)',format=yuv420p10le", "-fps_mode", "passthrough",
        "-c:v", "libx265", "-x265-params", "log-level=error:colorprim=bt2020:transfer=smpte2084:colormatrix=bt2020nc",
        "-c:a", "aac", hdr)
    quiet = str(d / "quiet.mp4")
    run("ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "testsrc2=s=1080x1920:r=30:d=3", "-f", "lavfi", "-i",
        "sine=f=300:d=3", "-af", "volume=-30dB", "-c:v", "libx264", "-c:a", "aac", quiet)
    return d, hdr, quiet

def test_probe_flags_hdr_vfr_landscape(clips):
    _, hdr, _ = clips
    p = probe(hdr)
    assert p["vfr"] == "yes" and p["hdr"].startswith("yes") and p["ready_for_edit"] == "no"

def test_normalize_makes_ready(clips):
    d, hdr, _ = clips
    out = str(d / "n.mp4")
    assert run(os.path.join(E, "normalize.sh"), hdr, out).returncode == 0
    p = probe(out)
    assert p["size"] == "1080x1920" and p["fps"] == "30.0" and p["vfr"] == "no" and p["ready_for_edit"] == "yes"
    durs = [float(run("ffprobe", "-v", "error", "-select_streams", s, "-show_entries", "stream=duration", "-of",
                      "csv=p=0", out).stdout) for s in ("v:0", "a:0")]
    assert abs(durs[0] - durs[1]) < 0.1   # audio stays in sync

def test_loudness_quiet_clip_to_minus_14(clips):
    d, _, quiet = clips
    r = run(os.path.join(E, "loudness.sh"), quiet, str(d / "l.mp4"))
    assert r.returncode == 0 and "pass=yes" in r.stdout

def test_probe_unreadable_file():
    r = run(os.path.join(E, "probe.sh"), "/nonexistent.mp4")
    assert r.returncode == 2
