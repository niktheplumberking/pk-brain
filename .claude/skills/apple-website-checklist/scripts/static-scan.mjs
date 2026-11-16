#!/usr/bin/env node
/* Apple Website Checklist: static source scan (Node 18+, no dependencies).
 * Usage: node static-scan.mjs <project-root> [--json out.json]
 * Reports concrete file:line evidence for code-level rules that a browser audit
 * cannot see. A finding is EVIDENCE to review; "risk" items need a human verdict.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || '.');
const jsonOut = process.argv.includes('--json') ? process.argv[process.argv.indexOf('--json') + 1] : null;
if (!fs.existsSync(root)) { console.error(`Path not found: ${root}`); process.exit(2); }

const SKIP = new Set(['node_modules', '.git', '.next', 'dist', 'build', 'out', '.vercel', '.turbo', 'coverage', '.cache', '.svelte-kit', '.nuxt', '.output', 'vendor', '.netlify']);
const EXT = new Set(['.html', '.htm', '.css', '.scss', '.sass', '.less', '.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.vue', '.svelte', '.astro', '.php', '.liquid', '.njk', '.hbs', '.ejs', '.mdx']);
const files = [];
const fontFiles = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name.startsWith('.') && e.name !== '.well-known' && e.isDirectory()) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (!SKIP.has(e.name)) walk(p); continue; }
    const ext = path.extname(e.name).toLowerCase();
    if (EXT.has(ext) && !/\.min\.(js|css)$/.test(e.name) && fs.statSync(p).size < 1_500_000) files.push(p);
    if (/\.(woff2?|ttf|otf|eot)$/i.test(e.name)) fontFiles.push(p);
  }
})(root);

const findings = {};
const rel = p => path.relative(root, p).replace(/\\/g, '/');
const hit = (id, rule, level, msg, file, line, snippet) => {
  (findings[id] ||= { rule, level, msg, hits: [] }).hits.push({ file: rel(file), line, snippet: snippet.trim().slice(0, 160) });
};
const presence = {};
const mark = (k, file) => { (presence[k] ||= new Set()).add(rel(file)); };

const RULES = [
  // [id, rule, level, message, regex, optional filter(line, fileText, ext)]
  ['apple-font-face', 'LIC-01', 'fail', 'Apple SF/New York font referenced as a web font', /(@font-face[^}]*)?(["'](SF Pro|SF Compact|SF Mono|New York|SFPro\w*|SF-Pro[\w-]*)["']|sf-?pro[\w-]*\.(woff2?|otf|ttf))/i,
    (l) => !/system-ui|-apple-system|BlinkMacSystemFont/.test(l) || /\.(woff2?|otf|ttf)/i.test(l)],
  ['zoom-blocked', 'A11Y-01', 'fail', 'viewport blocks zoom (user-scalable=no / maximum-scale<=1)', /user-scalable\s*[=:]\s*["']?(no|0|false)|maximum-?[sS]cale\s*[=:]\s*["']?(1(\.0+)?|0?\.\d+)\b/],
  ['outline-none', 'A11Y-05', 'risk', 'focus outline removed; verify a :focus-visible replacement exists for these elements', /outline\s*:\s*(none|0)\b|outline-none\b|focus:outline-none|outline-0\b/],
  ['positive-tabindex', 'A11Y-05', 'fail', 'positive tabindex', /tab[iI]ndex\s*=\s*["'{]?\s*[1-9]/],
  ['user-select-none', 'LBL-01', 'risk', 'user-select:none: must not be applied to content text', /user-select\s*:\s*none|select-none\b/],
  ['autoplay-media', 'MED-01', 'risk', 'autoplay media: must be muted + have pause control + respect reduced motion', /\bautoPlay\b|\bautoplay\b/, (l) => /<(video|audio)|autoPlay|autoplay\s*[=:]/i.test(l)],
  ['target-blank', 'WIN-01', 'risk', 'target=_blank without rel="noopener"/"noreferrer" on the same tag', /target\s*=\s*["'{]?\s*["']?_blank/, (l) => !/noopener|noreferrer/.test(l)],
  ['onclick-div', 'BTN-01', 'fail', 'click handler on a non-interactive element (use <button>/<a>)', /<(div|span|li|img|section|article|p)\b[^>]*\bon[cC]lick\s*=/],
  // JSX attribute values can contain ">" (e.g. score >= 6), so check for alt= anywhere after the tag start on the line
  ['img-no-alt', 'A11Y-07', 'fail', '<img> without alt', /<img\b/i, (l) => { const s = l.slice(l.search(/<img\b/i)); return !/\balt\s*=/.test(s) && !/\{\s*\.\.\./.test(s) && /\/?>/.test(s); }],
  ['next-image-no-alt', 'A11Y-07', 'fail', '<Image> (Next.js) without alt', /<Image\b/, (l, t) => { const s = l.slice(l.search(/<Image\b/)); return /from\s+["']next\/image["']/.test(t) && !/\balt\s*=/.test(s) && !/\{\s*\.\.\./.test(s) && /\/?>/.test(s); }],
  ['disabled-submit', 'FRM-08', 'risk', 'submit button disabled by validity: agency rule keeps it enabled', /disabled\s*=\s*\{\s*!\s*(isValid|valid|formState\.isValid|canSubmit)|disabled=\{[^}]*isValid/],
  ['permission-request', 'PRV-01', 'risk', 'permission API call: verify it runs only after a user action, with an explanation', /Notification\.requestPermission|geolocation\.(getCurrentPosition|watchPosition)|getUserMedia|DeviceOrientationEvent\.requestPermission/],
  ['click-here', 'WRT-03', 'risk', 'vague link text', />\s*(click here|here|read more)\s*</i],
  ['yes-no-buttons', 'ALR-03', 'risk', 'Yes/No button labels in dialogs', />\s*(Yes|No)\s*<\/button>/],
  ['scroll-lib', 'SCR-01', 'risk', 'smooth-scroll library: must be disabled under prefers-reduced-motion and keep keyboard/anchor scrolling', /from\s+["'](lenis|@studio-freight\/lenis|locomotive-scroll|smooth-scrollbar)["']|new\s+Lenis\s*\(/],
  ['placeholder-no-label-hint', 'FRM-01', 'risk', 'input with placeholder and no matching <label for>/htmlFor in the same file: confirm a visible label exists', /<input\b[^>]*placeholder\s*=/i,
    (l, t) => { if (/aria-labelledby/.test(l)) return false;
      if (/<label\b[^>]*(for|htmlFor)\s*=/.test(l)) return false; // label + input on the same line (common in JSX)
      const id = (l.match(/\bid\s*=\s*(?:["']([^"']+)["']|\{`([^`]+)`\})/) || []).slice(1).find(Boolean);
      if (!id) return true; const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return !new RegExp(`(for|htmlFor)\\s*=\\s*(["']${esc}["']|\\{\`${esc}\`\\})`).test(t); }],
  ['clickable-cursor-div', 'BTN-01', 'risk', 'cursor-pointer on generic element: confirm it is a real control', /<(div|span)\b[^>]*class(Name)?\s*=\s*["'{][^"'}]*cursor-pointer/],
];
const PRESENCE = [
  ['reduced-motion', /prefers-reduced-motion|useReducedMotion|motion-reduce:|motion-safe:/],
  ['color-scheme', /prefers-color-scheme|data-theme|dark:[a-z]|color-scheme|next-themes/],
  ['focus-visible', /:focus-visible|focus-visible:/],
  ['safe-area', /safe-area-inset/],
  ['viewport-fit', /viewport-fit\s*[=:]\s*["']?cover|viewportFit\s*:\s*["']cover/],
  ['reduced-transparency', /prefers-reduced-transparency/],
  ['backdrop-filter', /backdrop-filter|backdrop-blur/],
  ['prefers-contrast', /prefers-contrast/],
  ['print-css', /@media\s+print|print:/],
  ['aria-live', /aria-live|role\s*=\s*["'](status|alert)["']/],
  ['skip-link', /skip(-to)?-?(main|content)|#main-content|#main"/i],
  ['lang-attr', /<html[^>]*\blang\s*=|lang\s*=\s*["']?\{?\s*["']?[a-z]{2}/],
  ['autocomplete', /autoComplete\s*=|autocomplete\s*=/],
  ['dialog-element', /<dialog\b|role\s*=\s*["'](alert)?dialog["']|@radix-ui\/react-dialog|Dialog\b/],
];

for (const f of files) {
  let text; try { text = fs.readFileSync(f, 'utf8'); } catch { continue; }
  const ext = path.extname(f).toLowerCase();
  const lines = text.split(/\r?\n/);
  for (const [k, re] of PRESENCE) if (re.test(text)) mark(k, f);
  lines.forEach((l, i) => {
    if (l.length > 2000) return; // minified line
    for (const [id, rule, level, msg, re, filter] of RULES) {
      if (re.test(l) && (!filter || filter(l, text, ext))) hit(id, rule, level, msg, f, i + 1, l);
    }
  });
}
for (const ff of fontFiles) if (/sf[-_ ]?pro|sf[-_ ]?compact|sf[-_ ]?mono|newyork|new[-_ ]york/i.test(path.basename(ff))) hit('apple-font-file', 'LIC-01', 'fail', 'Apple font file shipped in the project', ff, 0, path.basename(ff));

const absent = (k, rule, level, msg) => { if (!presence[k]) (findings[`missing-${k}`] = { rule, level, msg, hits: [] }); };
absent('reduced-motion', 'A11Y-06', 'fail', 'no prefers-reduced-motion handling found anywhere in source');
absent('focus-visible', 'A11Y-05', 'risk', 'no :focus-visible styles found; relying on browser default focus ring (verify it is visible on all backgrounds)');
absent('color-scheme', 'DRK-02', 'risk', 'no dark-mode / color-scheme handling found (fail unless single-theme is a recorded brand decision)');
absent('aria-live', 'A11Y-17', 'risk', 'no live regions found; verify form success/error and async updates are announced');
absent('lang-attr', 'A11Y-08', 'risk', 'no lang attribute found in source; verify rendered <html lang>');
if (presence['backdrop-filter'] && !presence['reduced-transparency']) findings['glass-no-fallback'] = { rule: 'MAT-03', level: 'risk', msg: 'backdrop-filter used without a prefers-reduced-transparency fallback', hits: [...presence['backdrop-filter']].slice(0, 10).map(file => ({ file, line: 0, snippet: 'uses backdrop-filter' })) };

const result = {
  root, scanned_files: files.length, font_files: fontFiles.map(rel), ts: new Date().toISOString(), version: '1.0.0',
  presence: Object.fromEntries(PRESENCE.map(([k]) => [k, presence[k] ? [...presence[k]].slice(0, 8) : []])),
  findings,
  summary: Object.fromEntries(['fail', 'risk'].map(l => [l, Object.values(findings).filter(x => x.level === l).length])),
};
if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(result, null, 2));

console.log(`Apple Website Checklist: static scan\nroot: ${root}\nfiles scanned: ${files.length}\n`);
console.log('Presence:'); for (const [k] of PRESENCE) console.log(`  ${presence[k] ? 'yes' : 'NO '}  ${k}${presence[k] ? '  (' + [...presence[k]].slice(0, 3).join(', ') + ')' : ''}`);
console.log('\nFindings:');
const order = Object.entries(findings).sort((a, b) => (a[1].level === 'fail' ? 0 : 1) - (b[1].level === 'fail' ? 0 : 1));
if (!order.length) console.log('  none');
for (const [id, f] of order) {
  console.log(`\n[${f.level.toUpperCase()}] ${id} (${f.rule}): ${f.msg}${f.hits.length ? `: ${f.hits.length} hit(s)` : ''}`);
  for (const h of f.hits.slice(0, 12)) console.log(`   ${h.file}${h.line ? ':' + h.line : ''}  ${h.snippet}`);
  if (f.hits.length > 12) console.log(`   … ${f.hits.length - 12} more`);
}
console.log(`\nSummary: ${result.summary.fail} fail-level, ${result.summary.risk} risk-level finding groups.`);
