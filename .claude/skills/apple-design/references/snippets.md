# Snippets (copy, then adapt to the brand)

Bracketed IDs refer to rules. Replace the values with the client's brand tokens.

## Viewport, theme bootstrap (LAY-01, DRK-02, DRK-04, A11Y-01)
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<script>/* in <head>, before CSS paints: resolve theme with no flash */
try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}
</script>
```

## Semantic color tokens with light, dark and high-contrast values (COL-01, COL-02, A11Y-13)
```css
:root{
  color-scheme: light dark;
  --bg:#ffffff; --bg-secondary:#f4f4f6; --bg-elevated:#ffffff;
  --text-primary:#111114; --text-secondary:#55565e; --text-tertiary:#8a8b93;
  --separator:#d9d9de; --accent:#0a5cff; --on-accent:#ffffff; --danger:#c4271b;
  --focus-ring:#0a5cff;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --bg:#0f0f12; --bg-secondary:#18181c; --bg-elevated:#222228;
    --text-primary:#f2f2f5; --text-secondary:#a9aab2; --text-tertiary:#73747c;
    --separator:#33343b; --accent:#5b93ff; --on-accent:#0b0b0d; --danger:#ff6b5e;
    --focus-ring:#7aa7ff;
  }
}
:root[data-theme="dark"]{ /* repeat the dark values for the manual toggle */ }
@media (prefers-contrast: more){
  :root{ --text-secondary:var(--text-primary); --separator:currentColor; }
}
html,body{background:var(--bg);color:var(--text-primary);}
```

## Focus, states, target size (A11Y-04, A11Y-05, KEY-03, INP-02)
```css
:where(a,button,input,select,textarea,summary,[tabindex]):focus-visible{
  outline:2px solid var(--focus-ring); outline-offset:2px; /* follows border-radius */
}
@media (pointer: coarse){
  :where(button,a.btn,[role="button"],input[type="checkbox"],input[type="radio"]){min-height:44px;min-width:44px;}
}
@media (hover:hover) and (pointer:fine){
  .card:hover{transform:translateY(-2px) scale(1.01);box-shadow:0 8px 24px rgb(0 0 0 / .12);}
}
.card:focus-within{box-shadow:0 0 0 2px var(--focus-ring);}
/* Stretched link: the whole card is one target (HOV-04) */
.card{position:relative}.card a.stretched::after{content:"";position:absolute;inset:0;}
```

## Reduced motion and reduced transparency (A11Y-06, MAT-03, SCR-01)
```css
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;
    transition-duration:.01ms!important;scroll-behavior:auto!important;}
}
.glass{background:color-mix(in srgb,var(--bg) 72%,transparent);backdrop-filter:blur(16px) saturate(1.4);}
@supports not (backdrop-filter: blur(1px)){ .glass{background:var(--bg);} }
@media (prefers-reduced-transparency: reduce){ .glass{background:var(--bg);backdrop-filter:none;} }
```
```js
// Lenis / JS animation: disable when reduced motion is set
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) { /* init Lenis or JS-driven loops here */ }
```
Note: a brand loop that MUST keep running under reduced motion (for example a subtle marquee) can opt out of the global rule explicitly. Keep it slow and non-flashing, and give it a pause control.

## Safe areas and sticky header (LAY-01, LAY-14)
```css
.site-header{position:sticky;top:0;padding-inline:max(16px,env(safe-area-inset-left)) max(16px,env(safe-area-inset-right));}
.bottom-bar{position:fixed;inset-inline:0;bottom:0;padding-bottom:max(12px,env(safe-area-inset-bottom));}
html{scroll-padding-top:var(--header-h,72px);}
```

## Dialog (MOD-01, MOD-05)
```html
<button type="button" id="open">Edit profile…</button>
<dialog id="dlg" aria-labelledby="dlg-title">
  <form method="dialog">
    <h2 id="dlg-title">Edit profile</h2>
    <!-- fields -->
    <button value="cancel" formnovalidate>Cancel</button>
    <button value="save">Save</button>
  </form>
</dialog>
<script>
const d=document.getElementById('dlg'),o=document.getElementById('open');
o.onclick=()=>d.showModal();          // focus trap, Esc and inert background are native
d.addEventListener('close',()=>o.focus());
</script>
```

## Form field with an inline error (FRM-01, FRM-02, FRM-03)
```html
<label for="email">Email</label>
<input id="email" name="email" type="email" autocomplete="email" inputmode="email"
       enterkeyhint="next" aria-describedby="email-err" aria-invalid="false" required>
<p id="email-err" class="field-error" hidden>Enter an email like name@company.com</p>
```

## One-time code (OTP-01)
```html
<label for="otp">6-digit code sent to •••• 4821</label>
<input id="otp" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]*" maxlength="6">
```

## Live regions (A11Y-17, PRG-05)
```html
<div role="status" aria-live="polite" class="sr-only" id="status"></div>
<div role="alert" id="error-banner"></div>
<style>.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}</style>
```

## Hero video (MED-01, MED-02)
```html
<video class="hero" autoplay muted loop playsinline poster="/hero.avif" aria-label="Team at work (decorative)">
  <source src="/hero.webm" type="video/webm"><source src="/hero.mp4" type="video/mp4">
</video>
<button type="button" class="hero-toggle" aria-pressed="false">Pause background video</button>
<script>if(matchMedia('(prefers-reduced-motion: reduce)').matches){const v=document.querySelector('video.hero');v.removeAttribute('autoplay');v.pause();}</script>
```
