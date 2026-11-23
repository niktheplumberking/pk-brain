# The mind reader: how it learns where YOUR viewers get bored

The idea: every creator's viewers leave at different kinds of moments. Some audiences drop during a slow set-up, some
during step-by-step instructions, some the second the answer has been given. Your past retention graphs already show
which. The mind reader reads them, learns which kinds of moments lose your viewers faster than your own average, and
flags those moments in your next video before you post it.

What it does NOT do: predict a number. In one blind test on one of the author's videos, the plain average of his other
curves predicted the new curve better than an AI's guess (one test, not proof, but no reason to trust a guessed number
either). So the mind reader uses your own average as the baseline and only points at the moments your own data says
leak. It never offers to cut your hook, your main point, your payoff or your call to action.

## What to collect (for each past video)

If you run the Instagram retention teardown, skip to "The best data" below: it has everything already. Otherwise make
one folder per video in `~/EditsRetention/past/`, named so you recognise it (for example `2026-11-02 morning
routine`). Put in it:

1. **The video file you posted** (the original, not a screen recording).
2. **A screenshot of its retention graph**, the line that starts at 100% and falls. Instagram shows it in the Reel's
   insights in the Instagram app (a Professional account, Creator or Business, is needed for insights); TikTok shows it
   in the video's analytics. Take it with the whole graph and both axes visible.
3. **A screenshot showing its views** (plays) on the same insights screen.

Use videos posted at least 48 hours ago: the numbers still move before that. Ten or more videos is good. A kind of
moment needs at least five videos before it can get a verdict, so with fewer the mind reader mostly says "not enough
data yet", and says so.

### The best data: your Instagram retention teardown

The Instagram retention teardown (`/retention-teardown-instagram`, from github.com/christianjohnston-ai/claude-cockpit)
pulls each Reel's per-second curve from Instagram itself, to the second, and keeps the words and the video beside it. With
it set up, nothing above needs collecting by hand. Its files, per Reel, in
`~/.claude/skills/instagram-retention-teardown/accounts/<alias>/library/<shortcode>/`:
- `captures.jsonl`: one line per pull. Use the newest line with `retention.points` (a list of `[second, kept share]`);
  `views` and `captured_at` (a date string) are in the same line.
- `meta.json`: `created_ts`, when the Reel was posted (a Unix timestamp). Use a Reel only if it was posted at least 48
  hours before that capture. If `meta.json` has no time, the capture's `media_created_at` may have it (it can be null).
- `words.json`: the words with times (`{"words": [{"w", "s", "e"}]}`), the same format used below. It is missing when
  the teardown could not download that Reel's video: skip those Reels. Skip a Reel, too, when its `words.json` holds
  fewer than one word per 2 seconds of video: its speech was not transcribed (a music-only Reel, for example).
- `video.mp4`: the video itself.
Write `curve.json` from the capture (`"source": "teardown"`), copy `words.json`, and go straight to "Beats and labels".
Never change or delete anything in the teardown's folder.

TikTok users of the same repo's `/retention-teardown`: each video's `snapshots.jsonl` (newest line) has `ret`, the kept
share for each second, and `views`.

## Reading a graph from a screenshot

Look at the axes first: where 0% and 100% sit, and where the time axis starts and ends (the video's length). Then read
the kept percentage every second up to 15 seconds, every 2 seconds up to 60, every 5 seconds after that, and at the
last second. If you can, measure the line's height in pixels at each of those points instead of judging by eye: it is
more precise. Write `curve.json`:

```json
{
  "platform": "instagram",
  "source": "screenshot",
  "views": 12400,
  "length_s": 38,
  "points": [[0, 1.0], [1, 0.81], [2, 0.7], [3, 0.63], [5, 0.55], [7, 0.5], [10, 0.45], [15, 0.39], [20, 0.35], [30, 0.3], [38, 0.27]]
}
```

`points` are `[second, share still watching]` with the share from 0 to 1 (the example shows the format, not real
numbers). Reading a graph from a picture is rough: expect to be a point or two off. That is fine for big, repeated
patterns and useless for small ones, so the script skips beats shorter than 2 seconds when the curve came from a
screenshot, and only patterns that repeat across many videos get a verdict. Exact data (below) has no such limit.

If a graph has no time labels you can read, ask the person for the video's length and spread the axis evenly. If you
cannot read a graph at all, skip that video and say so.

## Words with times

Import the video into a scratch Edits project (copy it into `~/Movies/Edits/Imports/` first), call `transcribeClip` on
its clip, and save the words as `words.json`: `{"words": [{"w": "word", "s": 1.24, "e": 1.51}, ...]}`. Edits answers
with `{"text", "start", "end"}` for each word, so rename the fields as you save. Close the scratch project when done
(never delete projects).

## Beats and labels

Split the words into beats: one beat per sentence or spoken thought, usually 1 to 6 seconds. Some transcripts lose
their punctuation for long stretches; break those at a comma, before a capital letter that starts a lost sentence, or
every 6 seconds. Give each beat ONE label, judged from the words alone. Label BEFORE you look at the curve, so the
curve can't talk you into a label. Every gap of 0.6 seconds or more between two words becomes its own `pause` beat.
Beats touch end to end: each one ends where the next one starts, and the first starts at 0.

| Label | Use it for |
|---|---|
| `hook` | the opening line(s), up to where the viewer knows what the video is about |
| `setup` | context, backstory or throat-clearing before the main point lands |
| `claim` | the moment the viewer hears what they will get (the promise or the main point) |
| `announce` | telling what's coming instead of doing it ("I'm going to show you how") |
| `story` | a story, proof or result being shown |
| `demo` | showing the thing working |
| `steps` | instructions, one step after another |
| `payoff` | the answer, the result or the reveal the video promised |
| `after_payoff` | anything said after the payoff that is not the call to action |
| `cta` | follow, comment, link or "save this" |
| `pause` | silence of 0.6 seconds or more between words |

Save `beats.json`:

```json
{
  "video": "2026-11-02 morning routine",
  "length_s": 38,
  "beats": [
    {"start": 0.0, "end": 2.4, "label": "hook", "text": "the exact words"},
    {"start": 2.4, "end": 6.1, "label": "setup", "text": "..."}
  ]
}
```

## The math (what `scripts/viewer_profile.mjs` does)

For each past video:
1. Turn its curve into one value per second (straight lines between the points you read).
2. For each beat from second a to second b, the **usual loss** is how much of their audience your OTHER videos lost
   between a and b (each as a share of the people still watching at a), averaged. Only videos that run at least 5
   seconds past b count, so the same videos are used at both ends of the beat and no video's own ending counts as
   "usual". That is "how your viewers usually behave at this point in a video".
3. People present at a = kept(a) x views. People who actually left during the beat = (kept(a) - kept(b)) x views.
   People expected to leave = kept(a) x usual loss x views. (If the other videos lost almost nobody there, the beat is
   skipped: a ratio against nearly zero says nothing.)
4. Beats are skipped when fewer than 10% of starting viewers, or fewer than 20 people, are still watching: too few to
   tell anything.

Then, for each label: **leave rate = people who left / people expected to leave**, worked out per video. The number
shown is the typical video (the median), so one viral video can't set it. 1.0 = your normal. 1.6 = your viewers left
1.6 times faster than usual during that kind of moment. A label is called "leaves faster" only when all of these hold:
- it appears in 5 or more videos;
- the typical video and the total across videos are both at least 1.1;
- so many videos are faster than usual that a coin flip would do it 5% of the time or less (5 of 5, 7 of 8, 9 of 10);
- a rough 95% range on the count of leavers sits above 1.0 (this guards small accounts, where a few leavers are noise).
"Holds better" is the mirror image below 1.0. Everything else is "not enough data yet". The table shows "faster than
usual in X of Y videos". With 11 kinds of moments, about one verdict in twenty can still be luck, which is why Part 4
checks every flag against the next video.

It also records the median second your claim usually lands, and how many of your viewers are usually still there at
3 seconds.

## Flags on a new video (what `scripts/flag_cut.mjs` does)

A beat in the new video is flagged when:
- its label "leaves faster" in your profile (the flag shows the leave rate and how many videos agree);
- your claim lands later than usual: every `setup` or `announce` beat before the claim is flagged, with your usual
  second;
- it comes after the last payoff and is not the call to action;
- it is a pause of 0.6 seconds or more.

The hook, the claim, the payoff and the call to action are never flagged for cutting. If your profile says one of them
leaks, the script prints a note suggesting you tighten it instead. With no profile yet, only the after-the-payoff and
pause checks run.

Each flag gets a code (F1, F2...) with its seconds and words. The person decides what to cut. The flags are evidence from
their own past videos, not a forecast.

## Honest limits (tell the person these)

- Most viewers leave in the first few seconds. Cutting the middle helps the people who stay; the hook still matters most.
- Small accounts get noise. With under a few hundred views per video, most labels will read "not enough data yet".
- The profile is one creator's past, on one platform. Build separate profiles for Instagram and TikTok if their
  audiences differ.
- Check it: Part 4 grades every flag you did not cut against the real curve, 48 hours after posting.
