"""transcribe.py <video> <out.json> : word-timed transcript [{"w","s","e"}] with faster-whisper small.en (int8, CPU).
Run with python3 -I. Prints word count. Words are as heard; captions are checked against the script text later (step 4)."""
import json, subprocess, sys
import numpy as np
from faster_whisper import WhisperModel

def transcribe(path, model="small.en"):
    pcm = subprocess.run(["ffmpeg", "-v", "quiet", "-i", path, "-f", "s16le", "-ac", "1", "-ar", "16000", "-"],
                         capture_output=True, check=True).stdout
    audio = np.frombuffer(pcm, np.int16).astype(np.float32) / 32768
    if audio.size == 0:
        return []
    segs, _ = WhisperModel(model, compute_type="int8").transcribe(audio, language="en", word_timestamps=True)
    return [{"w": w.word.strip(), "s": round(w.start, 2), "e": round(w.end, 2)} for s in segs for w in (s.words or [])]

if __name__ == "__main__":
    words = transcribe(sys.argv[1])
    json.dump(words, open(sys.argv[2], "w"), indent=0)
    print(f"words={len(words)} file={sys.argv[2]}")
