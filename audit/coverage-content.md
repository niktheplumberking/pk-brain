# Coverage - content rules (scripts, descriptions, burned-in captions), 2026-11-16

One row per content rule line found in the sources. Line numbers = `cat -n` of the source file.
Sources: MEM = /tmp/claude/memory/team/silo/MEMORY.md (current 16 Nov index); rawMEM = rawrules/memory/MEMORY.md (older copy);
raw/ = rawrules/ ; mem/ = rawrules/memory/ ; flaws = /mnt/project-files/plumber-king-agency/content/3-audits/ed-flaw-list/ed-flaw-list.md.
New homes: VS = skills/pka-video-scripts/SKILL.md ; PD = skills/pka-post-descriptions/SKILL.md ; rules/... = copied reference file.
Status: kept / merged (folded into a combined rule) / dropped-superseded-by X (FLAGS-content.md line) / not placed (out of these two skills' scope, reason given).
Pure history lines (what was done on a date, file locations of old batches) are not rules and have no row.

| source file:line | quoted rule | new home file:section | status |
|---|---|---|---|
| MEM:14 | "Plumbers only; flag non-plumbers before scripting." | VS 2 | kept |
| MEM:17 | "Friday (whole day): Claude writes ALL scripts for the weekend + prep. Sat+Sun: Nick films ~14 videos" | VS 1 | kept |
| MEM:17 | "Claude then edits all 14 fully (cuts + edits, 0-100%) as his full video editor." | PD burning captions (Cutting) | kept |
| MEM:7 | "NEVER make decisions or set deadlines/schedules for Nick (16 Nov, angry). Stay strictly on the task" | VS 1 | kept |
| MEM:21 | "Jake's 13 ig-* skills: upload name-only trigger; REMIND Nick of them during scripting work." | VS 13 | kept |
| MEM:24 | "Audit delivery (permanent): ... delivers ONLY per video: number, company, website, Ed-voice script. One clean doc." | VS 9 | merged |
| MEM:24 | "Brief audit threads with AUDIT-SCRIPT-WORKFLOW.md." | VS reference files, VS 8 | kept |
| MEM:24 | "(14 Nov exception: one visual-hook filming line per script allowed.)" | VS 4 | dropped-superseded-by HOOK block (FLAGS 14) |
| MEM:25 | "all scripts FULLY ready the night before filming, never the morning he records." | VS 1 | kept |
| MEM:25 | "Keep the 3 formats separate, never mix them: AUDIT = screen recording of a real plumber's site" | VS 3 | kept |
| MEM:25 | "EDUCATIONAL = talking-head teaching to camera" | VS 3 | kept |
| MEM:25 | "B-ROLL = camera on a tripod filming Nick at his computer doing ONE real Figma task ... NEVER screen recording" | VS 3 | kept |
| MEM:25 | "check his posted IG B-rolls for the look" | VS 3 | kept |
| MEM:25 | "voiceover recorded separately. Each B-roll script must come with its specific Figma task." | VS 3, VS 9 | kept |
| MEM:25 | "Every script opens on its own strong hook; never the same opener across scripts" | VS 4 | kept |
| MEM:25 | "Write in Nick's real spoken voice (persona file ...), never robotic AI phrasing; scripts must make logical sense" | VS 5 | kept |
| MEM:25 | "Apply the hook/retention lessons (Hormozi)." | VS 10 | kept |
| MEM:26 | "thread 'Write post descriptions for done videos' ... owns captions + descriptions" | PD 3 | merged (thread named as home of the approved shape) |
| MEM:26 | "files in ...DONE FILES\DONE <format>, saved as '<name> - captions.mp4' next to originals" | PD Files | kept |
| MEM:26 | "B-roll captions (15 Nov): place them in the empty space ABOVE Nick's head, NEVER over the monitor/laptop screen" | PD Placement | kept |
| MEM:27 | "Content model = Ed @edwin.radd" | VS 5, PD 3 | kept |
| MEM:27 | "Captions SHORT." | PD 4 | kept |
| MEM:27 | "Never transcribe a video for a description" | PD 2 | kept |
| MEM:27 | "desktop view for audits." | VS 8, PD 3 | kept |
| MEM:28 | "'script' for finished videos = post description." | PD 1, VS description | kept |
| MEM:29 | "cut silences/bad takes; the LAST take of each repeated sentence is ~99% the good one." | PD Cutting | kept |
| MEM:29 | "New method aiming 5-10k+ views: visual/sound/text hooks, show our real work (Figma, results) as proof." | PD Cutting | kept |
| MEM:30 | "Higgsfield virality predictor ranked his reels upside down (14 Nov): ignore it." | VS 11 | kept |
| MEM:38 | "Need Jim's OK before posting content showing him." | VS 7 | kept |
| MEM:43 | "13 ig-* skills on his PC; house rules ...voice.md override them." | VS 13, rules/voice.md | merged |
| MEM:44 | "Jev ... only when needed or asked, max 5 calls/task, log jev/jev-usage-log.csv" | VS 8, VS 13 | kept |
| MEM:47 | "IG scraping only via sukunda02 (standing access), never nick.bennettx." | VS 3 | kept |
| rawMEM:13 | "Plumbers only; flag non-plumbers before scripting." | VS 2 | merged (same as MEM:14) |
| rawMEM:16 | "Friday: Claude writes ALL scripts for the weekend + prep..." | VS 1 | merged (same as MEM:17) |
| rawMEM:22 | Audit delivery, "14 Nov exception" | VS 9 | merged (same as MEM:24) |
| rawMEM:23 | SCRIPT RULES 15 Nov (formats, Figma task) | VS 1, 3 | merged (MEM:25 is the fuller newer version) |
| rawMEM:24 | captioning thread + B-roll captions above head | PD | merged (same as MEM:26) |
| rawMEM:25 | "Captions SHORT. Never transcribe..." | PD 2, 4 | merged (same as MEM:27) |
| rawMEM:26 | "'script' for finished videos = post description." | PD 1 | merged (same as MEM:28) |
| rawMEM:28 | virality predictor: ignore | VS 11 | merged (same as MEM:30) |
| rawMEM:41 | "13 ig-* skills ... voice.md override them" | VS 13 | merged (same as MEM:43) |
| raw/voice.md:3-4 | "Every ig-* skill reads this first. Where this file and a skill disagree, this file wins." | rules/voice.md | dropped-superseded-by skills holding the 15-16 Nov rules (FLAGS 38); line removed from the copy |
| raw/voice.md:4 | "Nick's message in the current chat beats this file." | VS intro, PD intro, rules/voice.md | kept |
| raw/voice.md:6-7 | "Blanks marked {{ask Nick}} are unknown. Never fill them with a guess." | rules/voice.md; VS 7 ({{your number}}) | kept |
| raw/voice.md:15-16 | "Plumbers only. If a business looks sewer-only, septic, drain-only, HVAC ... stop and ask Nick" | VS 2 | kept |
| raw/voice.md:20 | "Any Instagram reading or scraping uses sukunda02 only, never nick.bennettx." | VS 3 | kept |
| raw/voice.md:21 | "nick.bennettx: no automated DMs, posts, likes or follows. Nick posts by hand." | rules/voice.md | not placed: posting/DM rule, not scripting (kept in reference file) |
| raw/voice.md:22-23 | "Avoid the word 'free' in first DMs and in posts. Send one test DM before any DM batch." | VS 7, PD 4 (free); DM part in rules/voice.md | kept |
| raw/voice.md:24-26 | IG profile at ...edwin-radd-links\ig-profile; never kill it | rules/voice.md | not placed: PC tool route (kept in reference file) |
| raw/voice.md:30 | "Do only what Nick asks. He plans his own videos." | VS 9 | merged ("plans his own videos" dropped-superseded-by FLAGS 29) |
| raw/voice.md:31-33 | "Never add: shot lists, camera angles, mouse paths, ... on-screen text cards, beat sheets, or scorecards" | VS 9, rules/voice.md | merged (on-screen text part dropped-superseded-by HOOK block, FLAGS 2; removed from the copy) |
| raw/voice.md:34-36 | "Every script: short contents list at the top, a header ..., then VOICEOVER with one sentence per line" | VS 9 | merged (FLAGS 3) |
| raw/voice.md:37-38 | "Audit reels, per video: number, company name, website, Ed-voice script. Nothing else, in one clean doc." | VS 9 | merged |
| raw/voice.md:39-40 | "Run hookscore, beats, humanize and detect privately... Do not paste their output" | VS 13 | kept |
| raw/voice.md:44 | "Model: Ed (@edwin.radd). Short spoken sentences. Names the exact thing." | VS 5 | merged |
| raw/voice.md:45-46 | "Plain words, third-grade level. No 'CTA', 'conversion', 'UX' or 'SEO' unless explained" | VS 5 | kept |
| raw/voice.md:47 | "Line one calls out plumbers or a plumber situation." | VS 4, VS 10 | merged (fixed "Plumbers," opener dropped-superseded-by FLAGS 4) |
| raw/voice.md:48-49 | "Best hooks so far: a real site plus an odd, specific quoted detail." | VS 4 | kept |
| raw/voice.md:50 | "Describe the moment, not the benefit. Give a 'because' reason." | VS 5 | kept |
| raw/voice.md:51-53 | words never said / swear / pace = {{ask Nick}} | rules/voice.md | kept (unknown, not filled) |
| raw/voice.md:57 | "Three categories, one of each per day: educational, B-roll with voiceover, audit." | VS 3 | merged (split of 14 open, FLAGS Open 1) |
| raw/voice.md:58-59 | "Weekends: shoot 14 videos into Dropbox. Post 2 a day." | VS 1 | merged |
| raw/voice.md:60 | "Daily cover and in-between posts are paused since 1 Nov." | rules/voice.md | kept (not placed: not a script rule) |
| raw/voice.md:61 | "Check what Nick already covered before picking a topic. Do not repeat it." | VS 11, 12 | kept |
| raw/voice.md:62 | "Reel length: audits under 25 seconds, educational under 35 seconds." | VS 6 | kept |
| raw/voice.md:66-67 | "'Audit' here means a reel that critiques a plumber's website. /ig-audit is only for ... post stats." | rules/voice.md | kept (reference file) |
| raw/voice.md:69-78 | audit steps 1-6 incl. "Jev picks 1 to 3 flaws. Maximum 5 Jev calls" "Deliver only this step." | VS 8 | merged |
| raw/voice.md:80 | "Always judge from desktop view (1440 px). Every sentence must match what is on screen" | VS 8 | kept |
| raw/voice.md:80-81 | "'4.9 stars from 1,624 reviews', never '1,624 five-star reviews'" | VS 7 | kept |
| raw/voice.md:82 | "Open with 'This plumber...' then the flaw." | VS 4 | dropped-superseded-by no repeated openers (FLAGS 4) |
| raw/voice.md:82-83 | "No ask at the end. Frame it as how to fix it, not just 'this site is bad'." | VS 7, VS 8 | kept |
| raw/voice.md:85-86 | "hookscore rates these audit openers low ... Ignore its verdict on audit hooks." | VS 13 | kept |
| raw/voice.md:90 | "Short rows, little text per row, simple. Captions SHORT." | PD 4 | kept |
| raw/voice.md:91 | "Hard rule: never write a description by transcribing the video." | PD 2 | kept |
| raw/voice.md:92-93 | "Format: one problem line, then the steps or how-to the video does NOT say. No comment word" | PD 3, 4 | merged |
| raw/voice.md:94 | "caption.py's checks still apply: first line, hashtag cap, no links in the body." | PD 4 | merged (FLAGS 18) |
| raw/voice.md:98 | "Most reels: no ask at all. Audit reels: never." | VS 7 | kept |
| raw/voice.md:99-101 | "Do not default to a comment word in a reel. The skills' 'one ask at the end' does not apply here." | VS 7, VS 13 | kept |
| raw/voice.md:105 | "Split-screen: captions centred in the black gap, clear of the Instagram icons." | PD Placement | kept |
| raw/voice.md:106 | "Phone-only: usual lower position, no zooms." | PD Placement | kept |
| raw/voice.md:107-108 | "Zooms: slow, steady and gentle. Hold once zoomed. Zoom out after the highlight clears, never during a cut." | PD Zooms | kept |
| raw/voice.md:112 | "Charcoal #141414 and Hot Pink #FF3D8B. Never black text on pink." | PD Placement (never black on pink) | kept |
| raw/voice.md:113 | "Urbanist and Open Sans. Bobo the duck mascot. Never redesign the logo." | PD Placement (Urbanist) | merged (logo/mascot: not placed, design) |
| raw/voice.md:114 | "Before/after posts: Plumbing by Paul style." | rules/voice.md | not placed: post design, not script/description |
| raw/voice.md:115 | "Real faces or names in promo posts need the owner's consent." | VS 7 | kept |
| raw/voice.md:116 | "No AI slop. Ask before any Higgsfield run over 30 credits." | rules/voice.md | not placed: Higgsfield/design |
| raw/voice.md:120 | "United Plumbing is the first client and the biggest content asset." | VS 7 | dropped-superseded-by MEM:38 (FLAGS 25) |
| raw/voice.md:121 | "Real numbers: {{ask Nick}}. Never invent one. Leave {{your number}} and flag it." | VS 7 | kept |
| raw/voice.md:125 | "Inventing reviews, quotes, prices, clients or results." (off limits) | VS 7, PD 4 | kept |
| raw/voice.md:126 | "Unasked extras of any kind." (off limits) | VS 9 | kept |
| raw/nick-voice-persona.md:3 | "Use this for every script he has to say out loud. If a line wouldn't come out of his mouth naturally, rewrite it." | VS 5 | kept |
| raw/nick-voice-persona.md:6 | "Friendly, direct, a bit cheeky. A guy showing a buddy something on his screen, not a presenter." | VS 5 | kept |
| raw/nick-voice-persona.md:9 | "Opens on the plumber + the odd thing, plain" | VS 5 | kept |
| raw/nick-voice-persona.md:10 | "Instantly reacts and points: 'I mean, I'm not joking. Take a look.'" | VS 5 | kept |
| raw/nick-voice-persona.md:11 | "Walks through what he sees as a list ... 'we have / then we have' is his signature" | VS 5 | kept |
| raw/nick-voice-persona.md:12 | "One reaction line: 'I mean, come on.'" | VS 5 | kept |
| raw/nick-voice-persona.md:13 | "Says what it costs, through the customer" | VS 5 | kept |
| raw/nick-voice-persona.md:14 | "Fix, as advice to a friend: 'So why don't you...'" | VS 5 | kept |
| raw/nick-voice-persona.md:15 | "Ends on a short rhyming rule line" | VS 5 | kept |
| raw/nick-voice-persona.md:18-20 | words he really uses; "head title" (not headline), "call button", "wanna", "gonna" | VS 5, rules/nick-voice-persona.md | merged |
| raw/nick-voice-persona.md:21 | "about one 'I mean' / reaction per script, never more than two." | VS 5 | kept |
| raw/nick-voice-persona.md:24 | "Medium sentences joined with 'and', 'so', 'because'. Not chopped into 3-word robot fragments." | VS 5 | kept |
| raw/nick-voice-persona.md:25-26 | questions to the viewer; talks to "you" (the plumber) | VS 5 | merged |
| raw/nick-voice-persona.md:29 | "Same opener across scripts. Not 'Plumbers, ...' on every one, not 'I'm ...' on every one." | VS 4, VS 5 | kept |
| raw/nick-voice-persona.md:30 | staccato chains, triple lists, "Here's the thing", "Let's dive in", "game-changer"... | VS 5 | kept |
| raw/nick-voice-persona.md:31 | "Corporate words: utilize, leverage, optimize, solution, ensure." | VS 5 | kept |
| raw/nick-voice-persona.md:32 | "Generic 'follow for more' or comment-bait endings (max 1 in 5 asks)." | VS 5, VS 7 | kept |
| raw/nick-voice-persona.md:35 | "Every script: visual hook + on-screen text + spoken first line, all different per script, plumber named or obvious in the first 2 seconds, ... proof on screen by 3 s." | VS 4 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:2 | "Input: one link + optional note. Output: the picked flaw, a short summary, and a 3-4 sentence script" | VS 8 | merged (output = script only, FLAGS 22; length FLAGS 23) |
| raw/AUDIT-SCRIPT-WORKFLOW.md:5 | research checklist (desktop 1440: first screen, H1, meta, tap-to-call, ...) | VS 8, rules/audit/ | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:6 | "Google Business Profile (from Nick's PC via Remote Control; the cloud is blocked by Google)" | VS 8 | merged (cloud first per FLAGS 13; PC fallback kept) |
| raw/AUDIT-SCRIPT-WORKFLOW.md:7 | "The business's own review widget often holds the true count (e.g. Trustindex)." | rules/audit/AUDIT-SCRIPT-WORKFLOW.md | kept (reference file) |
| raw/AUDIT-SCRIPT-WORKFLOW.md:8 | "Only VERIFIED ones; also list what they do well" | VS 8 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:9 | "JEV PICK ... run twice with the options reversed (2 calls)" | VS 8 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:10 | "REPORT to Nick, short" | VS 8 | dropped-superseded-by script-delivery-format:10 (FLAGS 22) |
| raw/AUDIT-SCRIPT-WORKFLOW.md:12 | "'How I'd say it': 2 sentences" | VS 8 (private own-words step) | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:13 | "'Ed's voice': ... 3-4 sentences, about 15-20 seconds, no CTA" | VS 8 | merged (Nick's voice FLAGS 21; length FLAGS 23; no CTA kept) |
| raw/AUDIT-SCRIPT-WORKFLOW.md:14 | "FACT-CHECK every number and word in the script" | VS 7, VS 8 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:18 | "Always tell Nick to tap it on his own phone before filming a tap-to-call flaw." | VS 7 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:21 | "DESKTOP VIEW ALWAYS ... Phone-only flaws only count if they are also visible on desktop." | VS 8 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:22 | "Under 60% -> Jev picks 1. 60-75% -> 2. Over 75% -> 3 ... Nick can override" | VS 8 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:23 | "LOOK FOR ANYTHING BROKEN too" | VS 8 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:24 | "SCREEN-MATCH CHECK ... Order the flaws in the script in the order Nick will reach them" | VS 8 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:25 | "one beat per flaw, ending on a rule." | VS 6, VS 8 | kept |
| raw/AUDIT-SCRIPT-WORKFLOW.md:27 | "GOLD STANDARD ... Sam's Plumbing round 2 ... Improve script by script from Nick's feedback." | rules/audit/AUDIT-SCRIPT-WORKFLOW.md | kept (reference file) |
| raw/AUDIT-STEP-PROMPTS.md:3 | "Google Maps/Search are blocked/limited from cloud ... Jev only from the 'JEV' cloud env ... use local Lighthouse" | VS 8 | merged (Maps: FLAGS 13; Jev: FLAGS Open 3; Lighthouse kept) |
| raw/AUDIT-STEP-PROMPTS.md:6 | Step 1 research prompt ("Facts only ... unknown stays unknown") | rules/audit/AUDIT-STEP-PROMPTS.md, VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:9 | Step 2 "Never include a flaw that rests on a guess." | VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:12 | Jev task "aimed at plumbers and HVAC owners" | VS 8 | dropped-superseded-by MEM:14 plumbers only (FLAGS 12) |
| raw/AUDIT-STEP-PROMPTS.md:13 | "Run again with the criteria in reverse order ... Log both calls in jev-usage-log.csv." | VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:16 | Step 4 short report "under 120 words" | VS 8 | merged (report stays private, FLAGS 22) |
| raw/AUDIT-STEP-PROMPTS.md:19 | Step 5a "Speak as a professional who audits plumber websites, not as a critic." | VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:22 | Step 5b Ed's pattern "... no call to action, no insults, never names a fact that isn't in the report" | VS 8 | merged (structure kept, words in Nick's voice FLAGS 21) |
| raw/AUDIT-STEP-PROMPTS.md:25 | Step 6 fact-check | VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:29 | "judge everything on DESKTOP (1440 px) first; also record network failures..., broken links" | VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:30 | "output the count: verified Ed flaws / 36 as a percent" | VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:31 | Jev task "filmed as a DESKTOP screen recording ... the top N will be used together" | VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:32 | "one short beat per flaw, in the order they appear on screen ... 4-6 sentences, under 25 seconds." | VS 6, VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:33 | Step 6b screen-match check | VS 8 | kept |
| raw/AUDIT-STEP-PROMPTS.md:34 | "For N>1, pick #1 ..., then ask again with the chosen flaws removed ... 5 calls or fewer" | VS 8 | kept |
| raw/hormozi-principles-for-scripts.md:6 | "Hook - Retain - Reward" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:7 | "Callout first ... 'Plumbers,'" | VS 4, VS 10 | merged (callout kept, fixed opener dropped, FLAGS 4) |
| raw/hormozi-principles-for-scripts.md:8 | "Write 5 hooks per script, keep the best." | VS 4, VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:9 | "Proof beats promise" | VS 7, VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:10 | "Cut every line that doesn't teach or move the story. One idea per reel." | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:11 | "'How I' beats 'How to'" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:12 | "Every reel is about a plumber's calls, jobs, money, Google. No lifestyle, no agency inside talk." | VS 2 | kept |
| raw/hormozi-principles-for-scripts.md:13 | "Every reel works for someone who never saw Nick." | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:14 | "Plain words, short sentences, 3rd-grade level" | VS 5 | kept |
| raw/hormozi-principles-for-scripts.md:15 | "Describe the moment, not the benefit" | VS 5 | kept |
| raw/hormozi-principles-for-scripts.md:16 | "Always give a reason why ('because')" | VS 5, VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:17 | "Most reels: no ask. When there is one: ONE comment word for a free thing" | VS 7 | merged (1 in 5, FLAGS 15) |
| raw/hormozi-principles-for-scripts.md:20-22 | volume first; double down on outliers; copy what wins, aim at buyer | rules/hormozi-principles-for-scripts.md | kept (reference file; strategy, not a per-script rule) |
| raw/hormozi-principles-for-scripts.md:23 | "United Plumbing (first client) = the biggest content asset" | VS 7 | dropped-superseded-by MEM:38 (FLAGS 25) |
| raw/hormozi-principles-for-scripts.md:33 | "every audit should be framed as a 'how I'd fix it' or before/after" | VS 8 | kept |
| raw/hormozi-principles-for-scripts.md:36 | "Line 1 calls out plumbers or a plumber situation" | VS 10 | merged (varied wording, FLAGS 4) |
| raw/hormozi-principles-for-scripts.md:37 | "Hook names a specific, visible thing" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:38 | "Shows proof on screen within 3 s" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:39 | "One idea only" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:40 | "Contains a 'because' reason" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:41 | "Describes a real customer moment" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:42 | "Payoff is a takeaway the WATCHING plumber can use" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:43 | "No jargon; read aloud in under 25 s (audits) / 35 s (edu)" | VS 10 | kept |
| raw/hormozi-principles-for-scripts.md:44 | "Max one ask; if any, a free thing via one comment word" | VS 10 | merged (FLAGS 15) |
| raw/hormozi-principles-for-scripts.md:45 | "5 hook options written, best one picked" | VS 10 | kept |
| mem/script-delivery-format.md:8 | "never deliver video scripts as plain paragraphs in a chat message or a .md/.txt dump" | VS 9 | kept |
| mem/script-delivery-format.md:10 | "delivers ONLY the Ed-voice script ... number, company name (or topic for educational), website ... NO filming directions. One clean Claude Doc. Chat message = 1-2 lines + the doc link." | VS 9 | merged (filming directions: HOOK + Figma task added, FLAGS 2) |
| mem/script-delivery-format.md:12 | "educational ... 30-35 s, 40 s max. About 65-80 words ... Audits stay 15-20 s." | VS 6 | merged (edu under 35 s FLAGS 9; audits ~25 s FLAGS 8) |
| mem/content-batch-2026-11-14.md:7 | "Google Maps works from cloud via Playwright" | VS 8 | kept |
| mem/content-batch-2026-11-14.md:7 | "E2 old photos: ... the topic is weak." | not placed | not placed: one-off topic finding, not a rule |
| mem/content-batch-2026-11-14.md:9 | "educational scripts must stay TALKING-HEAD edu (moment, tip, rule line), never turned into audits or B-rolls. Keep the 1-1-1 format." | VS 3 | kept |
| mem/content-batch-2026-11-14.md:9 | spares: Idaho, Cotton City, United before/after | VS 12 | kept |
| mem/content-batch-2026-11-14.md:10 | "use last week's exact formats, nothing new" | VS 1 | kept |
| mem/content-batch-2026-11-14.md:10 | Edu = "Plumbers, <claim>..." template, "no visual hooks"; B-roll = "I'm <doing X>..." | VS 3-4 | dropped-superseded-by 11-14:11 and :12 (FLAGS 4, 6, 14) |
| mem/content-batch-2026-11-14.md:10 | "never change an approved format the night before filming; deliver finished scripts the evening before." | VS 1 | kept |
| mem/content-batch-2026-11-14.md:11 | "NEVER open several scripts with the same word ... Each script needs its own hook (moment, bold claim, odd detail), written in NICK'S spoken voice." | VS 4, VS 5 | kept |
| mem/content-batch-2026-11-14.md:12 | "every script Nick films needs a labelled HOOK line on top (visual + on-screen text + spoken first line) ... Never drop the hooks" | VS 4, VS 9 | kept |
| mem/content-batch-2026-11-14.md:13 | B-roll = tripod, "films HIMSELF working ... NEVER a screen recording ... voiceover recorded separately ... no pace matching" | VS 3 | merged ("random work" dropped, FLAGS 5) |
| mem/content-batch-2026-11-14.md:13 | "Each B-roll needs its OWN real Figma task that matches the script" | VS 3 | kept |
| mem/content-batch-2026-11-14.md:13 | "B-roll scripts are plain: 'I am adding X to this plumber site, because...'" | VS 3 | merged (plain "how I" kept; fixed opener dropped FLAGS 6) |
| mem/content-batch-2026-11-07.md:9 | Audit companies USED (don't repeat) | VS 12 | kept |
| mem/content-batch-2026-11-07.md:10 | Topics USED | VS 12 | kept |
| mem/content-batch-2026-11-07.md:11 | "odd-detail hooks, max 1 ask per batch, 'here's how I'd fix it' framing" | VS 4, 7, 8 | merged (asks: 1 in 5, FLAGS 15) |
| mem/content-batch-2026-11-07.md:12 | "Already-posted topics ... Check nick.json before picking topics." | VS 11, 12 | kept |
| mem/content-batch-2026-11-07.md:13 | "add posting history to the Jev task text" | VS 8 | kept |
| mem/content-batch-2026-11-07.md:14 | Hormozi rules file path | VS reference files | kept (path now rules/hormozi-principles-for-scripts.md) |
| mem/content-batch-2026-11-07.md:15 | "before writing a weekly batch, check the count against 14/week ... flag any mismatch in one line" | VS 1 | kept |
| mem/content-batch-2026-11-07.md:16 | "the flaw must be something a plumber instantly feels costs him customers ... never tech trivia" | VS 8 | kept |
| mem/content-batch-2026-11-07.md:17 | "/mnt/project-files silently changes .mp4 files ... zip -0, split 20 MB (commit cap 25 MB/file) ... re-hash" | PD Files | kept |
| mem/content-batch-2026-11-07.md:18 | "zoom quality had dropped ... s 1.8-2.2, out before every cut/scroll ... Keep that standard." | PD Zooms | kept |
| mem/content-batch-2026-11-07.md:19 | "captions must NEVER cross his face; top is for his title. Put them below the chin ... Measure the chin" | PD Placement | kept |
| mem/nick-voice-persona.md:8 | "Every script must be written in his own voice." | VS 5 | kept |
| mem/nick-voice-persona.md:10 | signature traits; "No staccato fragment chains and no repeated openers." | VS 5 | merged ("This plumber..." openers not on every script, FLAGS 4) |
| mem/nick-voice-persona.md:13 | "Grade with an independent subagent for hook, voice and facts. Cap audits at about 25 s. Ration fillers (at most 2 per script)." | VS 5, 6, 11 | kept |
| mem/content-system-standing-rules.md:8 | "Nick plans his own videos. Claude does NOT write shot lists, angles, mouse paths or formats unprompted." | VS 9 | merged (FLAGS 2, 29) |
| mem/content-system-standing-rules.md:9 | "3 categories, always '1-1-1' per day: 1 educational, 1 B-roll + voiceover educational, 1 audit" | VS 3 | merged (FLAGS 7) |
| mem/content-system-standing-rules.md:10 | "Nick films + edits a full batch, keeps everything in IG drafts, and posts from drafts." | VS 1 / PD | merged (posts from drafts kept in MEM:17; editing by Claude FLAGS 28) |
| mem/content-system-standing-rules.md:11 | audit workflow 6 steps; "Steps 1-5 PRIVATE; only step 6 is delivered"; "desktop-only, no mouse path" | VS 8, 9 | kept |
| mem/content-system-standing-rules.md:12 | "ALWAYS judge sites from the DESKTOP view. Jev may pick 2-3 flaws. Script must match what viewers SEE." | VS 8 | kept |
| mem/content-system-standing-rules.md:13 | CAPTION RULE: split-screen gap, phone-only lower/no zoom, zoom manner | PD Placement, Zooms | kept |
| mem/content-system-standing-rules.md:14 | "B-ROLL CAPTION RULE ... ABOVE his head ... dark background = white outline, bright = charcoal." | PD Placement | kept |
| mem/content-system-standing-rules.md:15 | "short rows ... NEVER write a description by transcribing ... one problem line, then the steps/how-to the video does NOT say. NO comment word" | PD 2-4 | kept |
| mem/content-system-standing-rules.md:16 | "'script' for an already-made/posted video ... POST DESCRIPTION ... If unclear, assume description" | PD 1 | kept |
| mem/content-system-standing-rules.md:18 | file names "Audit N - captions.mp4", "Edu N - captions.mp4", "B Roll N - captions.mp4" | PD Files | kept |
| mem/content-system-standing-rules.md:19 | "Ed's audits all open 'this plumber...' then flaw(s)." | VS 4 | merged (structure kept; not every script, FLAGS 4) |
| mem/description-rule-no-transcripts.md:7 | "a post description must NEVER be the video transcribed or re-rowed" | PD 2 | kept |
| mem/description-rule-no-transcripts.md:8 | "The transcript may only be used to know the TOPIC and the facts shown" | PD 2 | kept |
| mem/description-rule-no-transcripts.md:9 | Audit shape: scene opener -> seen -> reaction -> 2-3 FIX rows -> closing rule | PD 3 | kept |
| mem/description-rule-no-transcripts.md:10 | B-roll: "Working on a plumber's X today" -> why -> fix -> short rule | PD 3 | kept |
| mem/description-rule-no-transcripts.md:11 | Educational: problem line -> how-to steps the video does NOT say -> rule line | PD 3 | kept |
| mem/description-rule-no-transcripts.md:13 | "compare the description to the transcript; if most rows repeat what he says, rewrite." | PD 2 | kept |
| mem/description-rule-no-transcripts.md:14 | "'script' for a done video = POST DESCRIPTION" | PD 1 | merged |
| mem/description-rule-no-transcripts.md:15 | "NO comment-word asks ... end on a rule line." | PD 4 | kept |
| mem/description-rule-no-transcripts.md:16 | "ALWAYS copy the approved shape ... (Audit 8/9/10): code block, one short row per line, blank line between, no bullets/headers." | PD 3-5 | kept |
| mem/ed-caption-pattern.md:9 | measured: ~6 words per row, blank line between, 0 hashtags, 0 emojis, mostly no full stops, no CTA | PD 4 | kept |
| mem/ed-caption-pattern.md:10 | shape 1-5; "never the stat as line 1" | PD 3 | kept |
| mem/ed-caption-pattern.md:11 | "Nick rejected a caption that was just the script squeezed into rows" | PD 2 | merged |
| mem/ed-caption-pattern.md:12 | B-roll "opens 'Working on a client's X today'" | PD 3 | dropped-superseded-by description-rule:10 (FLAGS 31) |
| mem/ed-caption-pattern.md:14 | "Edu ones end with the comment keyword" | PD 4 | dropped-superseded-by description-rule:15 (FLAGS 16) |
| mem/ed-caption-pattern.md:14 | "when he asks for a description, just send it ready to paste in a code block, nothing else." | PD 5 | kept |
| mem/ed-caption-pattern.md:15 | "send them for EVERY done video ... in one go, with the one he is posting now on top." | PD 5 | kept |
| mem/ed-caption-pattern.md:16 | "educational descriptions = problem line + the how-to steps ... + comment keyword" | PD 3 | merged (comment keyword dropped, FLAGS 16) |
| mem/ed-flaw-list.md:8 | "Jev picks the single best flaw (max 5 calls ...) ... NO scripts, NO angles, NO filming notes" | VS 8 | dropped-superseded-by 1-3 flaws (FLAGS 10) and Claude writes scripts (FLAGS 1); max 5 calls kept |
| mem/ed-flaw-list.md:9 | "Nick may still edit the list with me ('we make it together')." | VS 8 | kept |
| mem/ed-flaw-list.md:11 | route: Remote Control on Nick's PC reads the listing; Jev relay via thread | VS 8 | merged (PC = fallback; Jev route Open 3) |
| mem/ed-flaw-list.md:12 | workflow approved: link -> research -> match -> Jev -> report -> how I'd say it -> Ed voice -> fact-check | VS 8 | merged |
| mem/ed-flaw-list.md:13 | Sam's round 2 = perfect workflow "... + mouse path" | VS 8 | merged (mouse path dropped, FLAGS 11) |
| mem/ed-flaw-list.md:14 | "script only uses verified facts and he was told" | VS 7 | kept |
| mem/content-system-2026-10-28.md:10 | "4 formats only" | VS 3 | dropped-superseded-by 3 formats (FLAGS 7) |
| mem/content-system-2026-10-28.md:11 | "Weekly: 14 posts, 2 a day ... 10 audits + 4 educational" | VS 1 | merged (14 kept; mix FLAGS 7) |
| mem/content-system-2026-10-28.md:12 | "one audit video SCRIPT ... 15-30 s (15-20 ideal)" | VS 6 | dropped-superseded-by ~25 s (FLAGS 8) |
| mem/content-system-2026-10-28.md:13 | "B2B, not viral/B2C; no gimmick hooks" | VS 2, VS 4 | kept |
| mem/content-system-2026-10-28.md:13 | "ONE main flaw (always on the HOMEPAGE ...)" | VS 8 | merged (1-3 flaws FLAGS 10; desktop view kept) |
| mem/content-system-2026-10-28.md:13 | ending "either a CTA ... or a solution"; "Never a generic 'follow for more'; vary endings" | VS 5, 7 | merged (CTA dropped FLAGS 26; no "follow for more" kept) |
| mem/content-system-2026-10-28.md:14 | "Big full-site audits are DM-only for warm leads (not posted)." | VS 8 | kept |
| mem/content-system-2026-10-28.md:15 | "Copy Ed's style, structure, captions and every key element, not his words." | VS 5, PD 4 | kept |
| mem/content-system-2026-10-28.md:16 | "send ONLY the spoken words ... No titles, brackets, stage notes" | VS 9 | dropped-superseded-by layout of 8 and 15 Nov (FLAGS 3) |
| mem/content-system-2026-10-28.md:17 | "never say photos are fake or AI without proof shown (Google Lens/reverse image)." | VS 7 | kept |
| mem/content-system-2026-10-28.md:21 | "Ed uses NO CTA, ends on a rule line" | VS 7, 8 | kept |
| mem/content-system-2026-10-30.md:7 | "audits ... position him as an industry pro (not 'this site is bad'); ... give WHAT TO FILM" | VS 8 | merged (pro framing kept; what-to-film dropped FLAGS 27) |
| mem/content-system-2026-10-30.md:10 | "Deliver as a Claude Doc, one table per video: 'On screen' / 'You say'" | VS 9 | merged (Claude Doc kept; table dropped FLAGS 3) |
| mem/content-system-2026-10-30.md:11 | "he'll manage scripts himself; don't make anything else unless he asks" | VS 1 | dropped-superseded-by MEM:17 (FLAGS 1) |
| mem/content-system-2026-10-30.md:11 | "one flaw on someone else's site, retold, gives the watching plumber nothing to take away" | VS 10 (payoff for the watching plumber) | merged |
| mem/content-system-2026-10-30.md:12 | B-roll topics used (don't repeat); "scene type named, no shot lists" | VS 12, VS 9 | kept |
| mem/content-script-job.md:11 | rule book files for the CRM job | VS reference files | merged (now rules/) |
| mem/content-script-job.md:12 | "Jev only answers from the JEV environment ... 2 calls per script" | VS 8 | merged (Open 3) |
| mem/content-script-job.md:13 | "PC off = Google part marked NOT CHECKED, job carries on." | VS 8 | kept |
| mem/content-script-job.md:17 | "never change the workflow files, they belong to the flaw-list thread" | VS 8 | merged ("don't change the workflow files on your own") |
| mem/content-machine.md:11 | "hook-to-problem pair check with 91 pairs in one state did NOT discriminate: don't trust big pair batches." | not placed | not placed: Jev technique note, belongs with Jev cookbook |
| mem/content-editing-workflow.md:9 | captions "in brand style (Urbanist, charcoal + hot pink, never black on pink) ... 'Easy work, nothing overexaggerated.'" | PD Placement | kept |
| mem/content-editing-workflow.md:13 | "Nick: captions ONLY; he does icons/motion himself in CapCut." | PD | dropped-superseded-by MEM:17 full edit (FLAGS 19) |
| mem/content-editing-workflow.md:13 | "NO box behind text: plain text + 2 px white outline ... 66% height" | PD Placement | kept |
| mem/content-editing-workflow.md:13 | "whisper mishears names ... so fix words vs his script before render." | PD Sound and words | kept |
| mem/content-editing-workflow.md:15 | "don't give him transcripts of Ed auditing random sites" | PD 2 | kept |
| mem/content-editing-workflow.md:16 | "never say 'fake photos' without on-camera Google Lens proof; re-check flaw live before filming." | VS 7, VS 8 | kept |
| mem/content-editing-workflow.md:18 | "Nick wanted bullet flaw lists, not scripts" | VS | dropped-superseded-by MEM:17 (FLAGS 37) |
| mem/content-editing-workflow.md:21 | "ONE strong pain point per audit ... Never give multi-flaw lists for audit videos again." | VS 8 | dropped-superseded-by 1-3 flaws (FLAGS 10) |
| mem/content-editing-workflow.md:23 | voice "-14.4 LUFS"; charcoal outline on white pages | PD Sound, Placement | kept |
| mem/content-editing-workflow.md:24-25 | Ed-style title; then "Do NOT add titles to reels." | PD Cutting | dropped-superseded-by text hooks / HOOK block (FLAGS 19) |
| mem/content-editing-workflow.md:26 | "white 2px outline, 66% height, no title), voice -14 LUFS" | PD Placement, Sound | kept |
| mem/content-editing-workflow.md:27 | charcoal outline when a white shirt is behind captions | PD Placement | kept |
| mem/content-editing-workflow.md:29 | "IG post captions must be SHORT and simple, a few lines max" | PD 4 | merged (FLAGS 17) |
| mem/content-editing-workflow.md:30 | "ED STYLE ... one thought per line, blank line between, no emojis, no hashtags, no bullets, ends on a rule or a DM/comment keyword. Length is fine" | PD 4 | merged (comment keyword dropped FLAGS 16; length FLAGS 17) |
| mem/content-editing-workflow.md:33 | "NO stacked 'Waiting on you' to-do lists at the end of replies" | VS 9 | merged (one sentence per item, no extras) |
| mem/content-editing-workflow.md:34 | "Descriptions now max 3 lines (coordinator note)." | PD 4 | dropped-superseded-by description-rule:9,16 (FLAGS 36) |
| mem/content-editing-machine-plan.md:7 | "Audit 2 (Ogborn) zoom motion = 'literally perfect', the reference standard." | PD Zooms | kept |
| mem/content-editing-machine-plan.md:13 | "Charcoal outline where his shirt is pink/white" | PD Placement | kept |
| mem/content-editing-machine-plan.md:14 | B Roll 1-5 "captioned at default 0.66" | PD Placement | dropped-superseded-by standing-rules:14 above head (FLAGS 20) |
| mem/content-editing-machine-plan.md:14 | "kept spoken ... (script said hard water), flagged." | PD Sound and words | kept |
| mem/content-weekend-plan.md:9 | "Saturdays and Sundays = ... scripts, filming and editing ... No cold calls" | VS 1 | merged (Friday scripts per MEM:17; weekend calls not a content rule) |
| mem/content-weekend-plan.md:11 | "REMIND NICK: he will share his own video-editing skills" | not placed | dropped-superseded-by MEM:18 (Nick teaches editing this week) |
| mem/content-weekend-plan.md:20 | "DAILY COVER POST ... ONE never-repeated plumber pain point, SHORT caption" | not placed | dropped-superseded-by voice.md:60 paused (FLAGS 35) |
| mem/content-weekend-plan.md:23 | "daily cover posts need context in the image" | not placed | dropped-superseded-by voice.md:60 paused (FLAGS 35) |
| mem/hormozi-content-playbook.md:11 | "Winners = real named site + odd specific quoted detail ... Losers = generic question/list hooks" | VS 4 | kept |
| mem/hormozi-content-playbook.md:12 | "most reels end on a rule line, no ask; ask max ~1 in 5 and only for a free thing that exists." | VS 7 | kept |
| mem/hormozi-content-playbook.md:13 | recommended mix 50/20/20/10 | not placed | not placed: a recommendation Claude wrote, not a rule Nick gave (and conflicts with the 3-format rule) |
| mem/hormozi-content-playbook.md:17 | "Do not use [virality predictor] to pick scripts." | VS 11 | kept |
| mem/hormozi-content-playbook.md:17 | "generic edu = flop risk, fix = mini audit of a real plumber" | VS 3 | dropped-superseded-by 11-14:9 (FLAGS 24) |
| mem/split-reel-zoom-rules.md:7 | split format: captions centred in the gap, one line, white 2px outline | PD Placement | kept |
| mem/split-reel-zoom-rules.md:9 | "Zoom on the SCREEN ONLY, never the facecam." | PD Zooms | kept |
| mem/split-reel-zoom-rules.md:10 | "One zoom at a time. Never zoom while already zoomed. Each zoom: in, hold, fully out." | PD Zooms | kept |
| mem/split-reel-zoom-rules.md:11 | "Every zoom-out must FINISH before any cut ... Find cuts first" | PD Zooms | kept |
| mem/split-reel-zoom-rules.md:12 | "Don't over-zoom (pixelated). ~2x max ... Subtle, B2B" | PD Zooms | kept |
| mem/split-reel-zoom-rules.md:16 | "Copy to a fresh file name ... check content before saying it's saved." | PD Files | kept |
| mem/split-reel-zoom-rules.md:18 | MOUSE-FOLLOW; "NO zoom during slow scrolls. Fast scrolls count as breaks too" | PD Zooms | merged (mouse-follow dropped FLAGS 34; scroll rules kept) |
| mem/split-reel-zoom-rules.md:20 | "captions ALWAYS centred in the black gap ... slow designed paths ... Phone-filmed audits: no zooms ... Never overwrite: save as new names." | PD Placement, Zooms, Files | kept |
| mem/website-audit-videos.md:14 | "every audit video max 60 seconds" | VS 6 | dropped-superseded-by ~25 s (FLAGS 8) |
| mem/website-audit-videos.md:16 | "lazy-loaded sections look blank in full-page shots; scroll step by step before judging 'empty'." | VS 8 | kept |
| mem/nick-reply-style-one-line-per-item.md:8 | "B1: one sentence. B2: one sentence ... what changed and what did NOT change" | VS 9 | kept |
| mem/nick-reply-style-one-line-per-item.md:11 | "Give no extra options and no tips he didn't ask for." | VS 9 | kept |
| mem/nick-roadmap-crm-content-2026-11.md:12 | "keep the LAST good take of each sentence and cut the silences." | PD Cutting | merged (same as MEM:29) |
| mem/standing-sections-designs-crm-files.md:11 | "All finished Claude work goes into ...DONE FILES ... DONE Audit, DONE Educational, DONE B-Roll" | PD Files | merged (until Nick's new folder structure, MEM:20) |
| mem/standing-sections-designs-crm-files.md:22 | "Nick 1 Nov: no in-between posts for now; just 2 reels/day." | not placed | kept (in rules/voice.md:60) |
| mem/standing-sections-designs-crm-files.md:29 | "Nick prefers the Plumbing by Paul before/after style. Legal: real faces/names in promo posts need owner consent." | VS 7 (consent) | merged (before/after style: not placed, design) |
| mem/daily-schedule-checklist.md:12 | "Sat/Sun ... 14 videos for the week (ideas, scripts, film, edit, Dropbox...)" | VS 1 | dropped-superseded-by MEM:17 (FLAGS 28) |
| mem/plumber-king-instagram-intro.md:21 | "Daily grid post ... 1 image a day between reels" | not placed | dropped-superseded-by voice.md:60 paused (FLAGS 35) |
| mem/content-weekend-plan.md:22 | "keep captions free of money/free-offer wording" | PD 4 | kept |
| raw/account-personal-preferences.md:9 | "Reply order: 1) corrections 2) direct answer ... 5) one next step." | VS 9, PD 5 | not placed: undated, left open vs task rules (FLAGS Open 2) |
| flaws:2 | "Used to pick ONE flaw per business." | VS 8 | dropped-superseded-by 1-3 flaws (FLAGS 10) |
| flaws:4-45 | the 36 flaws in groups A-F | rules/ed-flaw-list.md | kept (copied whole) |
