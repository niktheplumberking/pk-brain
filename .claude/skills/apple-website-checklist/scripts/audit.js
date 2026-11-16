/* Apple Website Checklist: in-page audit (no dependencies).
 * Evaluate this whole file inside the page, e.g. with a browser tool's JavaScript
 * executor. The last expression returns a plain JSON object.
 * Every finding contains concrete evidence (selector + measured value).
 * Automated results are EVIDENCE, not the whole verdict: items marked
 * "needs_manual" still have to be checked by hand per checklist.md.
 */
(() => {
  const MAX = 15; // max evidence samples per check
  const out = { url: location.href, viewport: { w: innerWidth, h: innerHeight, dpr: devicePixelRatio },
    media: {}, checks: {}, ts: new Date().toISOString(), version: '1.0.0' };
  const mq = q => matchMedia(q).matches;
  out.media = { coarse: mq('(pointer: coarse)'), hover: mq('(hover: hover)'), dark: mq('(prefers-color-scheme: dark)'),
    reducedMotion: mq('(prefers-reduced-motion: reduce)'), theme: document.documentElement.dataset.theme || null };

  const sel = el => {
    if (!el || el.nodeType !== 1) return '';
    if (el.id) return `#${CSS.escape(el.id)}`;
    const parts = []; let n = el;
    while (n && n.nodeType === 1 && parts.length < 4) {
      let p = n.tagName.toLowerCase();
      if (n.classList.length) p += '.' + [...n.classList].slice(0, 2).map(c => CSS.escape(c)).join('.');
      const par = n.parentElement;
      if (par) { const sib = [...par.children].filter(c => c.tagName === n.tagName); if (sib.length > 1) p += `:nth-of-type(${sib.indexOf(n) + 1})`; }
      parts.unshift(p); if (n.id) break; n = par;
    }
    return parts.join(' > ');
  };
  const txt = el => (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60);
  const visible = el => {
    const r = el.getBoundingClientRect(); const s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity !== 0 && !el.closest('[aria-hidden="true"],[hidden],[inert]');
  };
  const add = (id, rule, status, detail, samples = []) => {
    out.checks[id] = { rule, status, detail, count: samples.length, samples: samples.slice(0, MAX) };
  };
  const accName = el => {
    const lb = el.getAttribute('aria-labelledby');
    if (lb) { const t = lb.split(/\s+/).map(i => document.getElementById(i)).filter(Boolean).map(txt).join(' ').trim(); if (t) return t; }
    const al = (el.getAttribute('aria-label') || '').trim(); if (al) return al;
    if (el.labels && el.labels.length) { const t = [...el.labels].map(txt).join(' ').trim(); if (t) return t; }
    if (el.tagName === 'IMG') return (el.getAttribute('alt') || '').trim();
    const t = (el.innerText || el.textContent || '').trim(); if (t) return t;
    const img = el.querySelector('img[alt]:not([alt=""]), svg title'); if (img) return (img.getAttribute('alt') || img.textContent || '').trim();
    const ti = (el.getAttribute('title') || '').trim(); if (ti) return ti;
    if (el.tagName === 'INPUT' && ['submit', 'button', 'reset'].includes(el.type)) return el.value || '';
    return '';
  };

  // --- Document structure (A11Y-08) ---
  const lang = document.documentElement.getAttribute('lang');
  add('doc-lang', 'A11Y-08', lang ? 'pass' : 'fail', lang ? `lang="${lang}"` : '<html> has no lang attribute');
  const title = document.title.trim();
  add('doc-title', 'A11Y-08', title ? 'pass' : 'fail', title ? `title="${title}"` : 'empty <title>');
  const h1s = [...document.querySelectorAll('h1')].filter(visible);
  add('h1-count', 'A11Y-08', h1s.length === 1 ? 'pass' : 'fail', `visible <h1> count = ${h1s.length}`, h1s.map(h => ({ sel: sel(h), text: txt(h) })));
  const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(visible); const skips = [];
  hs.forEach((h, i) => { if (i) { const a = +hs[i - 1].tagName[1], b = +h.tagName[1]; if (b > a + 1) skips.push({ sel: sel(h), from: hs[i - 1].tagName, to: h.tagName, text: txt(h) }); } });
  add('heading-order', 'A11Y-08', skips.length ? 'fail' : 'pass', skips.length ? 'heading levels skipped' : 'no skipped heading levels', skips);
  const lm = { header: !!document.querySelector('header,[role=banner]'), nav: !!document.querySelector('nav,[role=navigation]'),
    main: document.querySelectorAll('main,[role=main]').length, footer: !!document.querySelector('footer,[role=contentinfo]') };
  add('landmarks', 'A11Y-08', lm.header && lm.nav && lm.main === 1 && lm.footer ? 'pass' : 'fail', JSON.stringify(lm));
  const ids = {}; document.querySelectorAll('[id]').forEach(e => { ids[e.id] = (ids[e.id] || 0) + 1; });
  const dup = Object.entries(ids).filter(([, c]) => c > 1).map(([id, c]) => ({ id, count: c }));
  add('duplicate-ids', 'A11Y-07', dup.length ? 'fail' : 'pass', dup.length ? 'duplicate id attributes (break label/aria references)' : 'no duplicate ids', dup);

  // --- Viewport / zoom / safe area (A11Y-01, LAY-01, LAY-02) ---
  const vp = document.querySelector('meta[name=viewport]')?.getAttribute('content') || '';
  const blocksZoom = /user-scalable\s*=\s*(no|0)/i.test(vp) || /maximum-scale\s*=\s*(1(\.0+)?|0?\.\d+)\b/i.test(vp);
  add('viewport-zoom', 'A11Y-01', !vp ? 'fail' : blocksZoom ? 'fail' : 'pass', vp ? `viewport="${vp}"` : 'no viewport meta');
  add('viewport-fit', 'LAY-01', /viewport-fit\s*=\s*cover/i.test(vp) ? 'pass' : 'needs_manual', /viewport-fit/i.test(vp) ? vp : 'no viewport-fit=cover; check whether any fixed/full-bleed bars need safe-area padding');
  const docW = document.documentElement.scrollWidth, winW = document.documentElement.clientWidth;
  const wide = docW > winW + 1 ? [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.right > winW + 1 && visible(e) && getComputedStyle(e).position !== 'fixed'; }).slice(0, 10).map(e => ({ sel: sel(e), right: Math.round(e.getBoundingClientRect().right) })) : [];
  add('horizontal-overflow', 'LAY-02', docW > winW + 1 ? 'fail' : 'pass', `scrollWidth=${docW} clientWidth=${winW}`, wide);

  // --- Images (A11Y-07, IMG-02, IMG-05) ---
  const imgs = [...document.querySelectorAll('img')];
  const noAlt = imgs.filter(i => !i.hasAttribute('alt') && !i.closest('[aria-hidden="true"]') && i.getAttribute('role') !== 'presentation');
  add('img-alt', 'A11Y-07', noAlt.length ? 'fail' : 'pass', `${imgs.length} <img>, ${noAlt.length} missing alt attribute`, noAlt.map(i => ({ sel: sel(i), src: (i.currentSrc || i.src).slice(-80) })));
  const noDim = imgs.filter(i => visible(i) && !(i.getAttribute('width') && i.getAttribute('height')) && getComputedStyle(i).aspectRatio === 'auto' && !['absolute', 'fixed'].includes(getComputedStyle(i).position));
  add('img-dimensions', 'IMG-02', noDim.length ? 'warn' : 'pass', `${noDim.length} visible images without width/height or aspect-ratio (layout-shift risk)`, noDim.map(i => ({ sel: sel(i), src: (i.currentSrc || i.src).slice(-80) })));
  const svgsNoName = [...document.querySelectorAll('svg')].filter(s => visible(s) && s.getAttribute('aria-hidden') !== 'true' && !s.closest('button,a,[role=button],[aria-hidden="true"]') && !s.getAttribute('aria-label') && !s.querySelector('title') && s.getAttribute('role') === 'img');
  add('svg-img-name', 'ICN-03', svgsNoName.length ? 'fail' : 'pass', 'svg role=img without accessible name', svgsNoName.map(s => ({ sel: sel(s) })));

  // --- Interactive names (A11Y-07, BTN-01) ---
  const inter = [...document.querySelectorAll('a[href],button,[role=button],[role=link],[role=tab],[role=menuitem],[role=switch],[role=checkbox]')].filter(visible);
  const unnamed = inter.filter(e => !accName(e));
  add('control-names', 'A11Y-07', unnamed.length ? 'fail' : 'pass', `${inter.length} visible controls, ${unnamed.length} without accessible name`, unnamed.map(e => ({ sel: sel(e), html: e.outerHTML.slice(0, 140) })));
  const fakeBtns = [...document.querySelectorAll('div,span,li,img')].filter(e => visible(e) && (e.hasAttribute('onclick') || (getComputedStyle(e).cursor === 'pointer' && !e.closest('a,button,label,summary,[role=button],[role=link],[role=tab],[role=menuitem],[role=option],[role=switch],[role=checkbox],[role=radio],input,select,textarea'))) && !e.querySelector('a,button'));
  add('clickable-non-controls', 'BTN-01', fakeBtns.length ? 'warn' : 'pass', 'elements with onclick or cursor:pointer that are not real controls (verify they are not clickable divs)', fakeBtns.map(e => ({ sel: sel(e), text: txt(e) })));
  const vague = [...document.querySelectorAll('a[href]')].filter(a => visible(a) && /^(click here|here|read more|more|learn more|link)$/i.test(accName(a)));
  add('link-text', 'WRT-03', vague.length ? 'warn' : 'pass', 'links whose accessible name is vague out of context', vague.map(a => ({ sel: sel(a), text: accName(a), href: a.getAttribute('href') })));
  const blank = [...document.querySelectorAll('a[target=_blank]')].filter(a => !/noopener|noreferrer/.test(a.rel));
  add('target-blank-rel', 'WIN-01', blank.length ? 'fail' : 'pass', 'target=_blank without rel=noopener', blank.map(a => ({ sel: sel(a), href: a.getAttribute('href') })));
  const emptyHref = [...document.querySelectorAll('a')].filter(a => visible(a) && (!a.hasAttribute('href') || /^#?$|^javascript:/i.test(a.getAttribute('href'))));
  add('dead-links', 'BTN-01', emptyHref.length ? 'warn' : 'pass', 'anchors with no href, "#" or javascript: (use <button> for actions)', emptyHref.map(a => ({ sel: sel(a), text: txt(a), href: a.getAttribute('href') })));

  // --- Keyboard (A11Y-05) ---
  const posTab = [...document.querySelectorAll('[tabindex]')].filter(e => +e.getAttribute('tabindex') > 0);
  add('positive-tabindex', 'A11Y-05', posTab.length ? 'fail' : 'pass', 'elements with tabindex > 0', posTab.map(e => ({ sel: sel(e), tabindex: e.getAttribute('tabindex') })));
  const hiddenFocusable = [...document.querySelectorAll('[aria-hidden="true"] a[href],[aria-hidden="true"] button,[aria-hidden="true"] input,[aria-hidden="true"] [tabindex]:not([tabindex="-1"])')].filter(e => !e.disabled && !e.closest('[inert]') && e.getAttribute('tabindex') !== '-1' && getComputedStyle(e).display !== 'none' && getComputedStyle(e).visibility !== 'hidden');
  add('aria-hidden-focusable', 'A11Y-05', hiddenFocusable.length ? 'fail' : 'pass', 'focusable elements inside aria-hidden="true"', hiddenFocusable.map(e => ({ sel: sel(e) })));
  add('focus-visible', 'A11Y-05', 'needs_manual', 'Tab through the page and confirm a visible focus indicator on every stop (see checklist C-03). The static scan flags outline:none rules.');

  // --- Targets (A11Y-04) ---
  const tgt = [...document.querySelectorAll('a[href],button,input:not([type=hidden]),select,textarea,summary,[role=button],[role=tab],[role=switch],[role=checkbox],[role=radio],[role=menuitem]')].filter(visible);
  const small24 = [], small44 = [];
  tgt.forEach(e => {
    const r = e.getBoundingClientRect(); const w = Math.round(r.width), h = Math.round(r.height);
    const inlineText = e.tagName === 'A' && getComputedStyle(e).display === 'inline' && e.closest('p,li,td,dd,blockquote,figcaption');
    if (inlineText) return; // WCAG 2.5.8 exception: inline links in sentences
    if (w <= 1 && h <= 1) return; // visually hidden until focused (e.g. sr-only skip link): not a pointer target
    let tw = w, th = h;
    if (['checkbox', 'radio'].includes(e.type) && e.labels && e.labels[0]) { const lr = e.labels[0].getBoundingClientRect(); tw = Math.max(w, lr.width); th = Math.max(h, lr.height); }
    if (tw < 24 || th < 24) small24.push({ sel: sel(e), size: `${w}x${h}`, name: accName(e).slice(0, 40) });
    else if (tw < 44 || th < 44) small44.push({ sel: sel(e), size: `${w}x${h}`, name: accName(e).slice(0, 40) });
  });
  add('target-size-24', 'A11Y-04', small24.length ? 'fail' : 'pass', `${tgt.length} targets measured; ${small24.length} below 24x24 CSS px (WCAG 2.5.8 floor; inline sentence links excluded)`, small24);
  add('target-size-44', 'A11Y-04', out.media.coarse ? (small44.length ? 'fail' : 'pass') : (small44.length ? 'warn' : 'pass'),
    `${small44.length} targets between 24 and 44 px (fail on touch viewports; current pointer coarse=${out.media.coarse}). Spacing may compensate; verify manually.`, small44);

  // --- Forms (FRM-01, FRM-02) ---
  const fields = [...document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=reset]):not([type=image]),select,textarea')].filter(visible);
  const unlabeled = fields.filter(f => !accName(f) || (!(f.labels && f.labels.length) && !f.getAttribute('aria-labelledby') && !f.getAttribute('aria-label')));
  add('field-labels', 'FRM-01', unlabeled.length ? 'fail' : 'pass', `${fields.length} visible fields, ${unlabeled.length} without a label`, unlabeled.map(f => ({ sel: sel(f), type: f.type, name: f.name, placeholder: f.placeholder })));
  const phOnly = fields.filter(f => f.placeholder && !(f.labels && [...f.labels].some(l => visible(l) && txt(l))) && !f.getAttribute('aria-labelledby'));
  add('placeholder-as-label', 'FRM-01', phOnly.length ? 'fail' : 'pass', 'fields with a placeholder but no visible <label> (aria-label alone is not a visible label)', phOnly.map(f => ({ sel: sel(f), placeholder: f.placeholder })));
  const guess = f => { const s = `${f.name} ${f.id} ${f.placeholder} ${f.labels && f.labels[0] ? txt(f.labels[0]) : ''}`.toLowerCase();
    if (/e-?mail/.test(s)) return 'email'; if (/phone|tel|mobile/.test(s)) return 'tel'; if (/(first|given).?name/.test(s)) return 'given-name';
    if (/(last|family|sur).?name/.test(s)) return 'family-name'; if (/\bname\b|full.?name/.test(s)) return 'name'; if (/zip|postal|postcode/.test(s)) return 'postal-code';
    if (/address|street/.test(s)) return 'street-address'; if (/city|town/.test(s)) return 'address-level2'; if (/company|organi[sz]ation|business/.test(s)) return 'organization'; return null; };
  const acMiss = fields.filter(f => f.tagName === 'INPUT' && guess(f) && !f.getAttribute('autocomplete')).map(f => ({ sel: sel(f), expected: guess(f), type: f.type }));
  const typeMiss = fields.filter(f => f.tagName === 'INPUT' && ((guess(f) === 'email' && f.type !== 'email') || (guess(f) === 'tel' && f.type !== 'tel'))).map(f => ({ sel: sel(f), expected_type: guess(f), actual: f.type }));
  add('autocomplete', 'FRM-02', acMiss.length ? 'fail' : 'pass', 'fields that look like personal data but have no autocomplete', acMiss);
  add('input-types', 'FRM-02', typeMiss.length ? 'fail' : 'pass', 'email/phone fields not using type=email / type=tel', typeMiss);
  const pwPrefill = [...document.querySelectorAll('input[type=password]')].filter(p => p.value);
  add('password-prefill', 'FRM-07', pwPrefill.length ? 'fail' : 'pass', 'password fields with a prefilled value', pwPrefill.map(p => ({ sel: sel(p) })));
  const disabledSubmit = [...document.querySelectorAll('button[type=submit][disabled],input[type=submit][disabled],form button:not([type])[disabled]')].filter(visible);
  add('disabled-submit', 'FRM-08', disabledSubmit.length ? 'warn' : 'pass', 'submit buttons currently disabled (agency rule: keep enabled and show errors on click)', disabledSubmit.map(b => ({ sel: sel(b), text: txt(b) })));
  const radiosNoFs = [...new Set([...document.querySelectorAll('input[type=radio]')].filter(visible).map(r => r.name))].filter(n => { const r = document.querySelector(`input[type=radio][name="${CSS.escape(n)}"]`); return r && !r.closest('fieldset,[role=radiogroup],[role=group]'); });
  add('radio-groups', 'FRM-12', radiosNoFs.length ? 'fail' : 'pass', 'radio groups not wrapped in fieldset/radiogroup', radiosNoFs.map(n => ({ name: n })));

  // --- Media (MED-01, MED-03, A11Y-19) ---
  const media = [...document.querySelectorAll('video,audio')];
  const loud = media.filter(m => (m.autoplay || (!m.paused && m.currentTime > 0)) && !m.muted);
  add('autoplay-sound', 'MED-01', loud.length ? 'fail' : 'pass', `${media.length} media elements; ${loud.length} autoplaying with sound`, loud.map(m => ({ sel: sel(m) })));
  const autoNoCtl = [...document.querySelectorAll('video')].filter(v => v.autoplay && v.loop && !v.controls);
  add('autoplay-pause-control', 'MED-01', autoNoCtl.length ? 'needs_manual' : 'pass', 'autoplaying looping videos without native controls: confirm a visible pause button exists (WCAG 2.2.2)', autoNoCtl.map(v => ({ sel: sel(v) })));
  const noCaps = [...document.querySelectorAll('video')].filter(v => v.controls && !v.querySelector('track[kind=captions],track[kind=subtitles]'));
  add('captions', 'MED-03', noCaps.length ? 'needs_manual' : 'pass', 'videos with controls but no caption track: fail if the video contains speech', noCaps.map(v => ({ sel: sel(v), src: (v.currentSrc || '').slice(-80) })));
  const ifr = [...document.querySelectorAll('iframe')].filter(f => !f.title && !f.getAttribute('aria-label'));
  add('iframe-title', 'A11Y-07', ifr.length ? 'fail' : 'pass', 'iframes without title', ifr.map(f => ({ sel: sel(f), src: (f.src || '').slice(0, 80) })));

  // --- Contrast (A11Y-02) --- solid backgrounds only; image/gradient backgrounds are reported for manual check
  const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const lum = ({ r, g, b }) => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
  const bgOf = el => { const stack = []; let n = el; while (n && n.nodeType === 1) { const s = getComputedStyle(n);
      if (s.backgroundImage && s.backgroundImage !== 'none') return { complex: true, by: sel(n) };
      const c = parse(s.backgroundColor); if (c && c.a > 0) { stack.push(c); if (c.a >= 1) break; } n = n.parentElement; }
    let base = { r: 255, g: 255, b: 255, a: 1 }; for (let i = stack.length - 1; i >= 0; i--) base = blend(stack[i], base); return base; };
  const textEls = [...document.querySelectorAll('body *')].filter(e => [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1) && visible(e));
  const lowC = [], complex = []; let measured = 0;
  textEls.slice(0, 1500).forEach(e => { if (e.closest(':disabled,[aria-disabled="true"]')) return; // WCAG 1.4.3 exempts inactive UI
    const s = getComputedStyle(e); let fg = parse(s.color); if (!fg) return;
    // Outlined text (transparent fill + -webkit-text-stroke): judge the stroke, which is what is visible
    const strokeW = parseFloat(s.webkitTextStrokeWidth || s.getPropertyValue('-webkit-text-stroke-width')) || 0;
    if (fg.a === 0 && strokeW > 0) { const sc = parse(s.webkitTextStrokeColor || s.getPropertyValue('-webkit-text-stroke-color')); if (sc) fg = sc; }
    if (fg.a === 0) return; // invisible text
    const bg = bgOf(e);
    if (bg.complex) { complex.push({ sel: sel(e), text: txt(e), bgImageOn: bg.by }); return; }
    const f = blend({ ...fg, a: fg.a * Math.min(1, +s.opacity || 1) }, bg); const L1 = lum(f), L2 = lum(bg); const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    const px = parseFloat(s.fontSize), wt = +s.fontWeight || 400; const large = px >= 24 || (px >= 18.66 && wt >= 700); const need = large ? 3 : 4.5; measured++;
    if (ratio + 0.005 < need) lowC.push({ sel: sel(e), text: txt(e), ratio: +ratio.toFixed(2), need, size: `${px}px/${wt}`, color: s.color }); });
  add('contrast', 'A11Y-02', lowC.length ? 'fail' : 'pass', `${measured} text elements measured on solid backgrounds; ${lowC.length} below WCAG AA`, lowC);
  add('contrast-over-images', 'A11Y-02', complex.length ? 'needs_manual' : 'pass', `${complex.length} text elements sit on image/gradient backgrounds: verify contrast visually or with a screenshot sampler`, complex);

  // --- Motion (A11Y-06) ---
  let rmRules = 0, scanned = 0, blocked = 0;
  for (const ss of document.styleSheets) { let rules; try { rules = ss.cssRules; scanned++; } catch { blocked++; continue; }
    const walk = rs => { for (const r of rs) { if (r.media && /prefers-reduced-motion/.test(r.media.mediaText)) rmRules++; if (r.conditionText && /prefers-reduced-motion/.test(r.conditionText)) rmRules++; if (r.cssRules) walk(r.cssRules); } }; walk(rules); }
  const running = document.getAnimations ? document.getAnimations().filter(a => a.playState === 'running') : [];
  const infinite = running.filter(a => a.effect && a.effect.getTiming && a.effect.getTiming().iterations === Infinity);
  add('reduced-motion-css', 'A11Y-06', rmRules ? 'pass' : 'fail', `${rmRules} prefers-reduced-motion rules found in ${scanned} readable stylesheets (${blocked} cross-origin unreadable)`);
  add('running-animations', 'A11Y-06', out.media.reducedMotion ? (infinite.length ? 'fail' : 'pass') : 'info',
    `${running.length} running animations, ${infinite.length} infinite (reducedMotion=${out.media.reducedMotion}; re-run with reduced motion emulated to judge)`,
    infinite.map(a => ({ target: sel(a.effect && a.effect.target), name: a.animationName || a.id || a.constructor.name })));

  // --- Color scheme (DRK-02) ---
  let csRules = 0; for (const ss of document.styleSheets) { try { const walk = rs => { for (const r of rs) { if ((r.media && /prefers-color-scheme/.test(r.media.mediaText)) || (r.conditionText && /prefers-color-scheme/.test(r.conditionText))) csRules++; if (r.cssRules) walk(r.cssRules); } }; walk(ss.cssRules); } catch {} }
  const csMeta = document.querySelector('meta[name=color-scheme]')?.content || getComputedStyle(document.documentElement).colorScheme;
  add('dark-mode', 'DRK-02', csRules || document.querySelector('[data-theme]') ? 'pass' : 'needs_manual', `${csRules} prefers-color-scheme rules; color-scheme="${csMeta}"; data-theme=${out.media.theme}. If the brand is single-theme by decision, record that.`);
  const bodyBg = getComputedStyle(document.body).backgroundColor, htmlBg = getComputedStyle(document.documentElement).backgroundColor;
  add('explicit-background', 'DRK-04', (parse(bodyBg)?.a || parse(htmlBg)?.a) ? 'pass' : 'fail', `html bg=${htmlBg} body bg=${bodyBg}`);

  // --- Fonts (LIC-01) ---
  const fams = new Set(); document.fonts && document.fonts.forEach(f => fams.add(f.family.replace(/["']/g, '')));
  const sf = [...fams].filter(f => /SF Pro|SF Compact|SF Mono|New York|SFPro|SF-Pro|San Francisco/i.test(f));
  add('apple-fonts', 'LIC-01', sf.length ? 'fail' : 'pass', `web fonts loaded: ${[...fams].join(', ') || 'none'}`, sf.map(f => ({ family: f })));

  // --- Dialogs (MOD-01) ---
  const dialogs = [...document.querySelectorAll('dialog,[role=dialog],[role=alertdialog]')];
  const dlgNoName = dialogs.filter(d => !accName(d) && !d.getAttribute('aria-labelledby'));
  add('dialog-names', 'MOD-01', dlgNoName.length ? 'fail' : (dialogs.length ? 'pass' : 'n/a'), `${dialogs.length} dialogs in DOM; open each one and verify Esc, focus trap and focus return manually`, dlgNoName.map(d => ({ sel: sel(d) })));

  // --- Live regions / nav (A11Y-17, NAV-01) ---
  const navs = [...document.querySelectorAll('nav')]; const curr = document.querySelector('nav [aria-current]');
  add('nav-current', 'NAV-01', navs.length ? (curr ? 'pass' : 'warn') : 'n/a', `${navs.length} <nav>; aria-current on current link: ${!!curr}`);
  add('nav-labels', 'NAV-01', navs.length > 1 && navs.some(n => !accName(n) && !n.getAttribute('aria-labelledby')) ? 'warn' : 'pass', 'multiple <nav> landmarks should each have an aria-label');

  const tally = {}; Object.values(out.checks).forEach(c => { tally[c.status] = (tally[c.status] || 0) + 1; });
  out.summary = tally;
  return out;
})();
