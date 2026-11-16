---
name: apple-website-checklist
description: MANDATORY final quality-assurance pass for every website or web app the agency builds or changes. It verifies the site against the apple-design rule book using evidence only (an in-browser audit script, a static source scan and hands-on browser checks) and produces a PASS/FAIL report per checklist item. Use when a website build or significant website change is finished, before handover or deploy, or when the user asks to audit, QA, check or verify a site against the Apple rules or checklist.
metadata:
  version: "1.1.0"
---

# Apple Website Checklist

This is the second-step quality gate after a website is built. It checks the site against the 46 core items in `checklist.md`, plus items C-47 to C-52 for local-service client sites, which map to the rules in the `apple-design` skill.

## Non-negotiable evidence rules

1. **Never mark an item PASS without evidence.** Evidence is one of:
   - audit JSON output,
   - static-scan output with file:line,
   - a screenshot or an accessibility tree read,
   - a measured value,
   - a quoted code excerpt.
2. **Use UNVERIFIED when you can't check something.** If an item could not be checked (tool unavailable, page behind login, feature not reachable), mark it UNVERIFIED with the reason. UNVERIFIED is never counted as a pass.
3. **Use N/A only after checking.** N/A applies only when the feature does not exist. State how you established that, for example "grep for `<dialog|Dialog` returned 0, and no modal opened on any CTA".
4. **Automated output is evidence, not a verdict.** A `warn`, `risk` or `needs_manual` result must be resolved by inspection, either as a real violation or as a false positive with a reason.
5. **Report numbers exactly as measured.** Don't round a failure into a pass, and don't soften a FAIL because the user hopes the site passes.
6. **During a pure audit, change nothing.** Fixes happen only when the user asks for them, and then the checklist runs again until every BLOCKER and MAJOR item passes.

## Procedure

### 0. Identify the target
- Find the project root and framework (`package.json`, `next.config.*`, `vite.config.*`, `index.html`).
- Find how the site is started (dev script, or a production build plus start), or get its deployed URL.
- List the pages to audit:
  - the home page;
  - every top-level nav destination;
  - at least one page of each template (form/contact, listing, detail, legal).
- Record the git commit (`git rev-parse --short HEAD`) so the report is tied to an exact version.

### 1. Static scan (code-level evidence)
```bash
node "C:/Users/nicol/.claude/skills/apple-website-checklist/scripts/static-scan.mjs" "<project-root>" --json "<project-root>/apple-checklist-scan.json"
```
- Keep the JSON out of git. Either write it to a scratch folder or delete it after the report is written.
- Look into each `fail` and `risk` group:
  - open the cited file:line;
  - decide whether it is a real violation or a false positive;
  - record the decision.

### 2. Run the site
- Prefer the built-in browser:
  - Add a `.claude/launch.json` entry and call `preview_start`; or
  - open the deployed URL with `preview_start {url}`.
- Never start dev servers with Bash.
- Note any console errors (`read_console_messages`).

### 3. In-browser audit (repeat for each page × each condition)
Start the audit server once, in the background:
```bash
node "C:/Users/nicol/.claude/skills/apple-website-checklist/scripts/audit-server.mjs" 4319
```
Then on each page, run this in the browser JS tool:
```js
const r = eval(await (await fetch('http://localhost:4319/audit.js',{cache:'no-store'})).text()); JSON.stringify(r)
```
If the page's CSP blocks the fetch, Read `scripts/audit.js` and paste its full contents into the JS tool instead.

Run the audit under each of these conditions:
| Condition | How to set it |
|---|---|
| 1440 light | `resize_window preset:"desktop"`, `colorScheme:"light"` |
| 375 light (touch) | `preset:"mobile"` |
| 375 dark | `preset:"mobile"`, `colorScheme:"dark"` |
| 768 | tablet preset |
| 320 | width 320 |

- Reload the page after each change.
- At 320, only `horizontal-overflow` is needed.

**Reduced motion:** the built-in browser cannot emulate `prefers-reduced-motion`. Verify C-14 from code: find every motion source and check it is gated. If the Chrome extension is connected and supports emulation, use that and record it.

### 4. Hands-on checks (MANUAL items)
Use `computer` key presses and clicks, then confirm with `read_page` and screenshots.
- **Keyboard (C-12, C-13):**
  - Press Tab from the top of the page.
  - Screenshot several focus stops, including the nav, primary CTA, form fields, footer links and the mobile menu toggle.
  - After each Tab, run `document.activeElement` to read where focus is, and confirm the order is logical.
- **Dialogs and menus (C-21):**
  - Open each one.
  - Press Tab repeatedly and confirm focus stays inside.
  - Press Esc and confirm it closes and `document.activeElement` returns to the trigger.
- **Forms (C-30, C-31):**
  - Submit the form empty, then with invalid values. Read the error DOM.
  - **Never submit real data to a live third-party endpoint.** On a live site, stop before the final submit unless the user approves; on a local dev site, check whether submission sends real emails first.
- **Zoom (C-06):** set the viewport to 640px wide (equivalent to a 1280px window at 200% zoom). Screenshot it and check for clipping.
- **Hover-only content (C-20), carousels (C-24), smooth scroll (C-26):** test as described in `checklist.md`.
- **Performance (C-45):** if Lighthouse can run, record LCP, CLS and TBT/INP. Otherwise read `performance.getEntriesByType('largest-contentful-paint')` and layout-shift entries via PerformanceObserver. If neither works, mark UNVERIFIED.

### 5. Report
Fill in `report-template.md`:
- every item with PASS / FAIL / N/A / UNVERIFIED and its evidence;
- a counts summary;
- the BLOCKER and MAJOR failures listed first, each with the exact location and the recommended fix (rule ID).

Save the report as `<project-root>/docs/apple-checklist-report-YYYY-MM-DD.md` only if the user wants it in the repo; otherwise save it in the agency audits folder `C:\Users\nicol\OneDrive\Desktop\Claude Local\apple-design-system\audits\`. Give the user the summary plus the path.

**Overall verdict:**
- **PASSES** only if there are 0 BLOCKER FAILs, 0 MAJOR FAILs and 0 UNVERIFIED BLOCKERs.
- Otherwise **DOES NOT PASS**.

### 6. Clean up
- Stop the audit server and any preview servers you started.
- Reset the browser viewport (`preset:"desktop"`).
- Remove temporary scan JSON files from the project.
