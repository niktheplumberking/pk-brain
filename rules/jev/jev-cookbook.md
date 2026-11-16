# Jev cookbook v2 (TypeSafe) — read before you spend a single Jev call

Rebuilt from zero on 2026-10-19 after reading **every page of docs.typesafe.ai** (128 pages, list in
`/mnt/project-files/jev/docs-read-list.md`) and TypeSafe's own agent skill. v1 (built from search excerpts) is kept at
`jev-cookbook-v1.md` for history only; do not work from it.

Labels: **(docs)** = stated in TypeSafe's docs. **(measured)** = our own test calls on 2026-10-19 (v1 thread).
**(rule)** = a project rule Nick set. Anything else is project judgement and says so.

---

## 0. Nick's rule, first: Jev is a tool you pull out, not something that runs all the time

**(rule, Nick 2026-10-19 12:11 UTC)** Jev runs **only when a decision actually needs it**. Never 24/7, never by
default, never "just to be safe". Every call spends Nick's TypeSafe credit. This replaces the earlier "use it wherever
it can help" wording.

Before any call, all three must be true. If any is false, **do not call Jev**:

1. **A real decision hangs on the answer.** Something will be shipped, picked, blocked or handed to Nick depending on it.
2. **Code or a plain read cannot answer it.** Not a count, a date, a sum, a contrast ratio, a file size, a font name,
   a string match, a regex, a lookup. Those go in code (docs: "Asking the model something code can compute exactly"
   is on TypeSafe's own avoid list).
3. **It is a quick judgement Jev is built for.** A yes/no, a pick from a fixed list, or a place on a described scale,
   the kind "a knowledgeable person makes in a second given the right context" (docs). Not writing, not reasoning
   through many steps, not facts it was not given.

### Credit discipline (hard limits for every agent and subagent)

- **Default is zero calls.** A task that does not hit a trigger in section 2 makes no Jev call.
- **One decision = one request.** Put every question about the same content in that one request (docs: 13 questions
  in one call was 12.2x cheaper and 10x faster than 13 calls, with the same answers). Never one call per question.
- **No loops, timers, hooks, watchers or schedules that call Jev.** No "check every batch automatically". A
  human-sized decision triggers each call.
- **Never re-run an unchanged request.** Answers are stable run to run (docs: average spread about 0.01). Re-running
  buys nothing. Change the question or the content first, or stop.
- **Cap: 5 requests per task.** If you need more (for example sorting 40 photos), say how many and why in your plan
  first; the person who briefed you decides.
- **Two tries per question, then stop.** If a question is still in the unsure band after one rewrite, a human decides.
  Do not keep rewording until it passes.
- **Trim the content.** You pay per input token, and extra text also lowers accuracy (docs: "Jev suffers from context
  rot"). Send only the fields the questions need.
- **Every call is logged automatically** by `jev-call.sh` to `/mnt/project-files/jev/jev-usage-log.csv`
  (time, request file, model, input tokens, HTTP status). That log is how Nick sees spend, because the API does not
  report the balance (section 9).

### What a call really costs (docs, Models page)

- Price: **$0.042 per million input tokens. Output is free.** Same price on Jev 1.13 and 1.14. Images are billed as
  input tokens at the same price.
- A typical text check is 300 to 600 input tokens (docs examples: 296 to 589). That is about $0.00002 per call.
- A 1024 x 1024 image is about 3,000 input tokens **(measured)**, about $0.00013.
- So $5 covers roughly 119 million input tokens: about 200,000 text checks or about 38,000 image checks
  (arithmetic from the docs price; the $5 balance itself is Nick's figure, not checked, see section 9).
- Honest point: money runs out slowly. The real costs of over-using Jev are wasted time, rate limits (section 8), and
  false comfort from numbers on questions Jev is bad at. The discipline above still applies, because Nick asked for it.

---

## 1. What Jev is (docs)

- Jev is TypeSafe's "System One" model: fast, structured decisions for software. You send a **state** (the content)
  and named **questions**; it returns typed answers and probabilities. **It never writes text, code, reasons or
  explanations.** Claude writes; Jev judges.
- Trained with "RLCD" for **calibrated** probabilities: over many answers, things scored 0.8 happen about 80% of the
  time. "Calibration is measured across groups of predictions; it does not guarantee that an individual answer is
  correct."
- Fast: "Most queries complete in about 100 ms."
- Independent of Claude (different company, different training), so it is a real second opinion under the WFACT law
  "the evaluator is never the same model as the builder". It is a filter, never Nick's sign-off.
- English is its best language. Other languages work "but not equally well".
- It reads text, JSON and (experimental) PNG/JPEG images. No audio, video, WebP, GIF or HEIC.

### The four question types (docs)

| Type | Use it for | Returns |
|---|---|---|
| `noul` | Is this one statement true? | `noul`: probability of yes, 0 to 1. No separate confidence. |
| `choice` | Which one of a fixed set (up to 255 options)? | `choice`, `probabilities` (sum to 1), `confidence` |
| `score` | Where on an ordered scale you describe (2 to 10 levels)? | `score` (weighted average level), `legend`, `probabilities`, `confidence` |
| `box` | Where is one thing in an image? (experimental, Jev 1.14 only) | `box` {top, bottom, left, right} as fractions, `confidence` |

How to pick (docs): a fixed set with no order = choice; a spectrum you can describe in steps = score; a clean yes/no
where the probability matters = noul. "A Noul value of 0.5 ... does not mean ... a medium skill level." If you want a
degree, use a score, not a noul.

---

## 2. When Jev is REQUIRED in this project (the only triggers)

Use Jev only at these moments. Each is a decision point, not a background habit.

| # | Trigger (you are about to...) | Ask Jev | Notes |
|---|---|---|---|
| T1 | Ship or hand Nick **public copy that states a result, number, client name, rating, guarantee or endorsement** (US/Canada audience, nothing misleading) | Nouls against a `facts_on_file` list, one problem per question | Strict gate, then Nick still reads it. Jev flags; a human decides legal. |
| T2 | Tell Nick **your own work meets his brand or brief rules**, where a rule needs eyes, not code (for example "icons are plumbing-themed", "no black badge behind the duck", "text on pink is white") | One noul per rule | Rules code can check (hex colours, font family, sizes, contrast ratio) are checked in code, not by Jev. |
| T3 | **Pick one of several options** that Nick will see (headlines, hooks, frames, prompts) and you want an independent opinion before recommending | One choice, plus the same choice with options reversed, **in the same request** | Docs: Jev leans toward the first option in some cases. |
| T4 | **Sort or filter many items** where reading each one yourself would be slow (for example tag 30 photos by usable spot, cut 30 captions to the best 5) | One request per item with all questions, or one request with per-item questions by path | Plan the call count first; over 5 requests needs a yes. |
| T5 | **Accept a subagent's "done / passed / verified" report** before passing it on as fact | Nouls: does the pasted evidence in the state show each exit check passed? | Only when the evidence is in the state. Jev cannot check what it is not shown. |
| T6 | **Route uncertain work** in a pipeline you are building (WFACT) where code must branch on a judgement | Whatever the design needs, with thresholds in code | This is the docs' main use case: code owns the flow, Jev makes narrow calls. |

### NOT required (do not call Jev)

- Anything code can compute or match exactly: counts, sums, dates, durations, prices, contrast ratios, image sizes,
  file types, font names, word limits, broken links, spelling against a list. **(docs)** Jev "does not count
  reliably", reads dates "as text, not as ordered quantities", and is "not a calculator".
- Writing, rewriting, summarising, explaining or fixing anything. It cannot generate text.
- Facts it was not given. It judges the state; it does not know if Health Steps is worth billions. Proof is Nick's job.
- Your own working drafts, internal notes, plans, status updates, chat replies.
- Checks you already know the answer to with certainty, or that a person will review line by line anyway.
- Taste with no written rubric ("is this beautiful?"). Turn taste into checkable conditions first, or ask Nick.
- Final money, launch, legal or real-phone sign-off. Those stay with Nick, forever.
- Security decisions on untrusted text. **(docs)** "State is data, and jev-1.13 does not treat it as hostile by
  default"; text can "argue for its own classification".
- Repeat checks of the same unchanged thing, "to be sure".

---

## 3. Building a request (docs)

### Endpoint and shape

```
POST https://api.typesafe.ai/v1/systemone
Content-Type: application/json
```
```json
{
  "model": "jev-latest",
  "state": { "copy": "...", "facts_on_file": ["..."] },
  "questions": {
    "states_unbacked_result": { "type": "noul", "instructions": "Does `copy` state a result that is not in `facts_on_file`?" },
    "best_headline": { "type": "choice", "instructions": "...", "criteria": { "h1": "text of headline 1", "h2": "text of headline 2" } },
    "hook_strength": { "type": "score", "instructions": "...", "criteria": ["situation 0", "situation 1", "situation 2"] }
  }
}
```
Response: `{"model":"jev-1.13.0","answers":{...},"usage":{"input_tokens":N,"output_tokens":N}}`.
Always keep the returned `model` value; it says which real version answered.

### State: the content to judge

- Use a **JSON object with named parts**, not one long string (docs: "Use an object for most requests").
- Facts, rules and the item under test go in the state. Judgements go in the questions.
- Point a question at one part with a backticked path: `` `copy.headline` ``, `` `items[3]` ``,
  `` `ticket.messages[0].text` ``. Include the backticks.
- **Send only what the questions need.** Docs failure mode 5: "Accuracy falls as the state grows with content
  unrelated to the decision." Filter in code first.
- **(measured)** Unrelated neighbouring copy lines in the state moved a claim score from 0.48 to 0.70. So for strict
  gates (T1), put **one item under test** in the state, or point each question at its item by path.
- Limits: 64k tokens per request and 32k per question by default (state counts in both). Header
  `TypeSafe-Danger-Zone-Long-Context: true` raises both to 262k but is "slower and less accurate" (docs). Prefer
  trimming.
- Body at most 32 MiB, UTF-8 JSON, nesting at most 64 levels, finite numbers only.

### Questions: the part that decides quality

Docs call atomic questions "probably the most important concept". Rules, all from the docs:

1. **One judgement per question.** "Is the customer angry and asking for a refund?" is two questions. Ask both,
   combine in your own logic.
2. **Write the full question in `instructions`.** The question key (for example `no_black_badge`) is **never sent to
   the model**. A key cannot carry meaning.
3. **Make "yes" mean the thing is present.** "Does the message contain personal data?" is right. "Is the message free
   of personal data?" inverts it and is a documented failure. For gates, ask about the **problem** ("Does `copy`
   promise a guaranteed number of customers?") and treat a high value as a fail. TypeSafe's cascade cookbook calls
   this "Bad = TRUE, with explicit criteria". Never set `true` to describe a "no".
4. **Be literal and exact.** Jev "answers the question you wrote, not the one you meant". Negations, double
   negatives, "unless" and multi-step reasoning cost accuracy. "When you ... find yourself explaining what you really
   meant, that explanation is the missing half of the instruction."
5. **Name the narrowest fact that decides it.** Asking "same paragraph?" instead of "does this line break split a
   sentence?" changed results badly in TypeSafe's own test.
6. **Ask about meaning, not keywords or parameter names.** "Which resolution?" gives Jev nothing to match.
7. **Add `criteria` when the boundary is subtle.** Noul criteria: `{"true": "what yes means", "false": "what no
   means"}`. Try with and without; keep what works. **(measured)** Criteria moved a subtle endorsement claim from 0.48
   to 0.15.
8. **Structured criteria for options or levels that get confused:** an object per option with the same field names,
   for example `{"what": "...", "not_for": "...", "examples": ["...", "..."]}`. Field names are free; Jev reads them.
   Examples only help when they look like the real inputs.
9. **Choice:** give the full list of options, describe each by when it applies (option names and descriptions are
   both sent), use `null` for a description only when the name says it all, and **add a `none_fit` option** when
   nothing may fit, because choice probabilities always add up to 1 and something always wins. When "is any option
   right at all?" matters, add a separate noul for that (docs: "The Choice settles which; the Nouls settle whether").
10. **Score:** levels describe **situations, not degrees** ("Generic: could be any agency's line", not "weak"). Each
    level is judged alone and Jev never sees level numbers, so "worse than the previous level" means nothing. One
    dimension per score. Use as many levels as you can describe distinctly (2 to 10). Give a rare extreme its own
    level. Numbers-only levels ("0","1","2") fail.
11. **Speculative questions are fine in the same request.** Ask everything you might need about that content in one
    go; your logic ignores what does not apply. Make a second request only when you truly need the first answer to
    build it.
12. **Agents write weak questions.** TypeSafe says so plainly: "Agents aren't great at writing questions." Write the
    questions and pass/fail lines **before** you look at the answers, and keep them in one place in your report.

### Pinning the model

- `jev-latest` = `jev-1.13.0` (stable). `jev-preview` = `jev-1.14.0` (newest, from 2026-10-14). Aliases move without
  warning, "so its answers can change without any change to your code".
- Quick one-off checks: `jev-latest` is fine; report the `model` that came back.
- Anything with a tuned threshold or a repeatable gate: send the versioned id (`jev-1.13.0`) so the threshold keeps
  meaning the same thing.
- `GET https://api.typesafe.ai/v1/models` lists the aliases.

---

## 4. Images (docs, experimental)

- TypeSafe calls images and box "Dreamer-ready ... not yet up to our standards to call ready for production". Use
  them as a pre-check only. (One docs page still says "text input only"; the newer Images page supersedes it.)
- Send header `TypeSafe-Danger-Zone-Images: true` on every request with an image or a box question.
- **Both Jev 1.13 and 1.14 accept images.** Only `box` needs 1.14 (`jev-preview` or `jev-1.14.0`). (v1 wrongly said
  images need jev-preview.)
- Put each image once in a top-level `assets` map and write its reference string where it belongs:
  `"assets": {"img-7f3a9c2e": {"type": "image", "format": "jpg", "data_base64": "..."}}`,
  `"state": {"logo": "img-7f3a9c2e"}`. Use long unique references (a UUID is safest), because they are matched as
  plain text anywhere in the request. Every asset must be referenced or the call fails. Base64: standard alphabet, no
  line breaks, no `data:` prefix.
- **Each mention adds the image again (and its tokens).** If several questions use one image, put it in the state
  once and point at it by path.
- Limits: PNG or JPEG only, still; each side **280 to 1568 px**; total pixels 78,400 to 2,458,624; 16 MiB per file.
  Out-of-range images are rejected, never resized.
- **Prepare every image:** resize longest side to at most 1568 px; **rotate the pixels upright** (the API strips EXIF
  and ignores orientation, so a phone photo can arrive sideways); convert HEIC/WebP/GIF to JPEG or PNG (Nick's iPhone
  photos are HEIC); save baseline JPEG.
  ```python
  from PIL import Image, ImageOps
  img = ImageOps.exif_transpose(Image.open("in.jpg"))
  img.thumbnail((1568, 1568)); img.convert("RGB").save("ready.jpg", "JPEG", quality=90)
  ```
- Multipart upload is the docs' recommended HTTP form (base64 adds about a third to the size). Base64 in JSON works
  and is what `jev-call.sh` sends.
- Box: one target per question, and there is **no "not found"**: always pair it with a noul "Is there an X in
  `photo`?" and ignore the box when that noul is low.
- Image tricks from the docs: compare against a known picture (known picture in `instructions`); define choice
  options by example pictures; ask about a small copy first and send a bigger crop only if needed.

---

## 5. Reading the answers

### Noul (docs)

- Near 1 = strong yes, near 0 = strong no, near 0.5 = Jev is unsure. It is not a measure of "how much".
- Thresholds depend on the cost of being wrong: "Use 0.5 when yes and no are equally easy to act on. Raise it when
  acting on a false yes is expensive ... Values in the middle can go to a person." The docs' worked example uses
  **yes above 0.8, no below 0.2, middle to a person**; the consistency cookbook uses 0.30 / 0.70.

**Project bands (judgement, built on those docs numbers; tune with real results):**

| Gate | Pass | Unsure → human reads it | Fail |
|---|---|---|---|
| Normal (T2, T5): question asks about a **problem** | noul ≤ 0.20 | 0.20 to 0.80 | ≥ 0.80 |
| Strict (T1 public claims, legal, anything about money or results) | noul ≤ 0.10, **and Nick still sees it** | 0.10 to 0.80 | ≥ 0.80 |

For a question that asks whether something **required** is present (T2 "Is there a duck wearing a crown?"), flip it:
pass ≥ 0.80, fail ≤ 0.20, middle unsure.

Unsure is never a pass. **(measured)** Blatant problems land near the ends (fake "4.9 stars" 0.01, "Guaranteed 50
customers" 0.01 on an honesty question), but subtle implied-cause or implied-endorsement claims landed between 0.3
and 0.8 whether honest or not. That is exactly why unsure goes to a human.

### Choice (docs)

- `confidence` = how far the top probability sits above an even split: `(p_max − 1/n) / (1 − 1/n)`. 1 = all on one
  option, 0 = even spread. It drops as options compete.
- Docs examples: confidence below 0.5 to 0.6 = do not act; below 0.3 = "let a person decide"; high-stakes actions
  only above 0.85 to 0.9. Also useful: top probability itself, and top ÷ second (near 1x = a tie).
- **Project rule:** trust a pick only if confidence ≥ 0.6 **and** the reversed-order copy picked the same option.
  Otherwise report "no clear winner" and show the top two with their probabilities.
- A second option with a real share (docs example: above 0.25) is worth mentioning to Nick.

### Score (docs)

- `score` is the probability-weighted average level; it can land between levels. "Different distributions can
  produce the same score": 1.0 can be all on level 1, or half on 0 and half on 2. **Always read `probabilities`.**
- Confidence counts distance: torn between neighbours lowers it a little, torn between opposite ends sends it to 0.
- Low confidence means the levels overlap, the question measures two things, or the state does not say enough.
- Never use a score to compute an exact in-between number (docs: "score levels are weak in numerical calibration").
- **Project rule:** confidence below 0.5 = no verdict. To combine several scores, divide each by its top level
  number first, then weight them in your own logic (docs "composite scoring").

### Always

- A number is evidence, not proof. Never write "Jev verified X". Write: `Jev (jev-1.13.0): 0.06 on "Does copy state
  a result not in facts_on_file?" → pass (strict band)`.
- Report the exact question, the number, the returned model and the band. Anyone must be able to re-run it.
- "100% repeatability does not imply correctness" (docs). Stable answers can be stably wrong.

---

## 6. Jev's known weak spots (docs, "Jev 1.13 jaggedness", reviewed 2026-10-02)

| # | Weak at | Do instead |
|---|---|---|
| 1 | Literal reading of scoping words and negations | Write the exact condition; boundary cases in criteria; split into two literal questions |
| 2 | Maths, counting, numbers, hex colours | Do it in code; to count, ask one noul per item and add up in code |
| 3 | Comparing dates and times | Extract parts (choice per part with a "not stated" option); compare in code |
| 4 | Indirection (property of a property, double negatives) | Ask directly; name the part of the state by path |
| 5 | Big state full of unrelated detail | Filter first; send only what the question needs |
| 6 | Adversarial text in the state | Precise criteria; never the only check before an automatic action |
| 7 | Instructions and criteria that disagree | Make criteria an extension of the instruction; never `true` = "no" |
| 8 | Choice option order (leans to the first) | Reverse the order and check the pick holds |
| 9 | Generating text | Use a writing model; for extraction, list candidates in code and let Jev pick one |

---

## 7. Templates for this project

Run with `bash /mnt/project-files/jev/jev-call.sh request.json` (add `-H 'TypeSafe-Danger-Zone-Images: true'` after
the file name for images).

### T1: public claim gate (strict). One item in the state; ask about each problem separately.
```json
{"model":"jev-1.13.0",
 "state":{"facts_on_file":["Plumber King Agency (Bennett & Co LLC) built the brand and website for MindXBridge.",
                           "MindXBridge, the company, has made about $150,000 in revenue."],
          "copy":"Our website for MindXBridge generated $150,000 in revenue for them."},
 "questions":{
  "unbacked_result":{"type":"noul","instructions":"Does `copy` say our work caused a result that `facts_on_file` does not say we caused?",
    "criteria":{"true":"`copy` credits our work with revenue, leads, rankings or another outcome that `facts_on_file` only attributes to the company, or does not mention.",
                "false":"Every outcome in `copy` is stated in `facts_on_file` with the same cause."}},
  "fake_rating_or_endorsement":{"type":"noul","instructions":"Does `copy` claim a rating, review, award or endorsement that is not in `facts_on_file`?"},
  "guarantee":{"type":"noul","instructions":"Does `copy` promise a guaranteed number of customers, leads, calls or revenue?"}}}
```
Pass only if every answer ≤ 0.10, then Nick reads it. Anything 0.10 to 0.80 = unsure, a human decides.
(Not yet run with this wording; the first real run should record its numbers here.)

### T2: brand rule on an image
```json
{"model":"jev-1.13.0",
 "state":{"logo":"img-3f9b2c71-logo"},
 "assets":{"img-3f9b2c71-logo":{"type":"image","format":"jpg","data_base64":"<baseline JPEG, sides 280-1568 px>"}},
 "questions":{
  "duck_with_crown_present":{"type":"noul","instructions":"Is there a duck wearing a crown in `logo`?"},
  "black_badge_behind_duck":{"type":"noul","instructions":"Is there a black circle or black badge behind the duck in `logo`?"}}}
```
Expect `duck_with_crown_present` ≥ 0.80 and `black_badge_behind_duck` ≤ 0.20. (v1 asked "Is the duck shown without
any black badge?", the inverted wording the docs warn against.)

### T3: pick the best option, with the order check in the same request
Put the option text in the criteria, so Jev reads it as the option.
```json
{"model":"jev-1.13.0",
 "state":{"goal":"Homepage hero headline for a website agency that serves plumbers in the US and Canada. Must be specific to plumbers, honest, short, and promise no guaranteed result."},
 "questions":{
  "best":{"type":"choice","instructions":"Which headline best meets `goal`?",
    "criteria":{"h1":"Websites that make your phone ring.","h2":"More booked plumbing jobs from Google, without chasing leads.","h3":"We build great websites for businesses.","none_fit":"None of these headlines meets the goal."}},
  "best_reversed":{"type":"choice","instructions":"Which headline best meets `goal`?",
    "criteria":{"none_fit":"None of these headlines meets the goal.","h3":"We build great websites for businesses.","h2":"More booked plumbing jobs from Google, without chasing leads.","h1":"Websites that make your phone ring."}}}}
```
Trust the pick only if both agree and confidence ≥ 0.6. Run the claim gate (T1) on the winner if it states a result.

### T4: score on a described rubric (levels are situations)
```json
{"model":"jev-1.13.0",
 "state":{"audience":"Plumbing business owners in the US and Canada","hook":"Your phone should ring while you're under a sink."},
 "questions":{"hook_strength":{"type":"score","instructions":"How well does `hook` grab `audience` in the first second?",
   "criteria":["Generic: could be any agency's line for any trade",
               "Mentions plumbing but makes no one stop scrolling",
               "Speaks to a real plumber's day and makes them want the next line",
               "Speaks to a real plumber's day, is credible, and creates urgency without promising a result"]}}}
```

### T5: subagent report check
State = `{"exit_check": "...", "evidence": "<pasted command output or screenshot facts>"}`; one noul per exit check:
"Does `evidence` show that <exact condition> passed?" If the evidence is not pasted, do not call Jev; ask for it.

---

## 8. Calling it safely

- Script: `bash /mnt/project-files/jev/jev-call.sh request.json [extra curl args]`. The shared folder cannot run
  files directly, so keep the `bash`. It prints the response and HTTP status and appends one line to
  `jev-usage-log.csv`.
- **Auth:** in Nick's cloud setup the network proxy adds the TypeSafe key to calls to `api.typesafe.ai`. There is no
  key in any file or variable. **Never ask Nick for the key or paste one in chat.**
- **Which cloud environment works:** as of 2026-10-19 12:20 UTC only the "JEV" environment reaches
  `api.typesafe.ai`. The new "TypeSafe Docs" environment (made default at 12:06) reaches the docs but gets a proxy
  **403 on the API**. If you get a proxy 403, say so in one line; do not retry or route around it.
  Update 12:35 UTC: Nick allowed `api.typesafe.ai` in "TypeSafe Docs"; the API is now reachable there but answers
  401/403 "Must supply an API key!" until the key is added to that environment's network secrets.
- **Errors (docs):** 400 broken body or `max_tokens_exceeded` (too long), also image problems and a missing image
  header; 401 key problem; 413 over a size limit; 415 bad compression; 422 malformed question (the body names the
  field); 429 rate limit; 529 overloaded.
- **Retries:** only on 429, 529, 5xx or a dropped connection. Back off 1 s, 2 s, 4 s (follow a `retry-after` header
  if given), at most 3 retries, then report. Never retry 400/401/413/415/422; fix the request instead.
- **Rate limits** are per organisation and shown only in the console. TypeSafe's cookbooks run 4 to 8 requests at
  once and warn "Eight is already enough to hit a rate limit on a shared key". Run at most 4 at a time.
- **SDKs exist** (Python `typesafe-sdk`, JS `@typesafe-ai/sdk`, both read `TYPESAFE_API_KEY`), with built-in retries.
  In this project use the script unless you are building WFACT code, where the SDK is the right choice.

---

## 9. The balance: what the API can and cannot tell you

- **Fact (docs, all 128 pages):** the documented API has no balance, credit, billing or usage endpoint. The only
  endpoints are `POST /v1/systemone` and `GET /v1/models`. Each response carries only that call's
  `usage.input_tokens` and `output_tokens`. No error type exists for running out of credit.
- **Fact (live check, 2026-10-19 12:16 UTC, from the "Testing Jev" thread):** the live API spec lists only
  `/v1/models` and `/v1/systemone`; `/v1/balance`, `/v1/usage`, `/v1/credits`, `/v1/billing`, `/v1/account`,
  `/v1/organization` and `/v1/me` all return 404; response headers carry no balance or rate-limit info.
- The balance and rate limits live **only in the logged-in console** (console.typesafe.ai). Only Nick can see them.
- Having the key lets an agent spend credit, not read the balance. Our running spend estimate is
  `sum(input_tokens) × $0.042 / 1,000,000` from `jev-usage-log.csv`.

---

## 10. The workflow, every time

1. Check section 0: does a real decision hang on this, can code answer it, is it a quick judgement? If not, stop.
2. Match a trigger in section 2. No trigger, no call.
3. Write the questions and the pass/fail bands **before** calling. Problems asked directly, one thing each, criteria
   on anything subtle.
4. Build one request: trimmed state, all questions about that content, order-reversed copy for picks.
5. Call once. Read the numbers with section 5. Unsure is not a pass.
6. If unsure: rewrite the question once (sharper condition or criteria), call once more. Still unsure: a human decides.
7. Report: question, number, returned model, band, and what a human still has to check. Jev never replaces Nick's
   sign-off on money, launch, legal or the real-phone check.

## 11. Sources and gaps

- Sources: every page in `docs-read-list.md`; TypeSafe's agent skill (github.com/typesafe-ai/skills); our 16 test
  calls on 2026-10-19 (v1 thread).
- Not readable from the cloud: the console (balance, rate limits, usage history) and typesafe.ai legal pages.
- The project bands in section 5 are a starting point, not a measured study on our work. Record changes here with the
  evidence that justified them.
