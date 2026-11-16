# 07 Writing, inclusion, RTL, privacy, accounts, notifications, review prompts

Sources: `writing`, `inclusion`, `right-to-left`, `privacy`, `managing-accounts`, `sign-in-with-apple`, `settings`, `notifications`, `managing-notifications`, `ratings-and-reviews`, `collaboration-and-sharing`, `printing`, `file-management`, `branding`.

## Writing
- `WRT-01` **SHOULD:** define the brand voice and a short glossary per project, and use the same term for the same thing everywhere. Tone can vary by context: celebratory, neutral or serious.
- `WRT-02` **SHOULD:** be concise and front-load the important words.
- `WRT-03` **MUST:**
  - Buttons are verbs ("Send message"), not clever phrases ("Let's do it!").
  - Links describe where they go. Never use "click here" or "read more" on its own; add context, at least visually-hidden text.
- `WRT-04` **SHOULD:**
  - Pick one capitalization style per element type (for example, sentence case for buttons and headings) and keep to it.
  - Multi-step flows use consistent labels: "Get started", then "Continue"/"Next", then "Done".
- `WRT-05` **SHOULD:**
  - Use "you"/"your" sparingly and avoid "we" in errors ("Couldn't load content", not "We couldn't…").
  - Errors don't blame the user and don't say "Oops".
- `WRT-06` **MUST:** every empty state gives a next step ("No bookings yet. Book your first session").
- `WRT-07` **SHOULD:** when pointing to settings, link straight to the right place.

## Inclusion
- `INC-01` **SHOULD:**
  - Address the reader as "you", not "the user".
  - Define jargon.
  - Avoid idioms, exclusionary phrases and humour that may not translate.
- `INC-02` **MUST:**
  - Copy is gender-neutral.
  - Gender fields are optional and include non-binary, self-describe and prefer-not-to-say options.
  - Ask for pronouns only if they are used.
- `INC-03` **SHOULD:** use diverse, non-stereotyped imagery and people-first language about disability.
- `INC-04` **SHOULD:**
  - Security questions rely on universal experiences.
  - Name fields allow one name, non-Latin characters and long names.

## Right-to-left (Arabic, Hebrew, Persian)
- `RTL-01` **MUST:**
  - Set `<html dir="rtl" lang="ar">`.
  - Layouts use logical properties (`margin-inline-start`, `inset-inline-*`, `text-align:start`, `padding-inline`); no hard-coded left/right.
- `RTL-02` **MUST:**
  - Flip directional UI: back/next arrows, progress bars, sliders, ratings, pagination and carousels.
  - Do **not** flip logos, checkmarks, clocks, media playback icons, photos, digits within a number, or controls that refer to a physical direction.
- `RTL-03` **SHOULD:**
  - Paragraphs of 3 or more lines align to their own language.
  - Use `dir="auto"` or `<bdi>` for user-generated and mixed-direction content.
- `RTL-04` **SHOULD:** next to all-caps Latin text, increase Arabic/Hebrew text by about 2px. Reverse image sequences only when their order carries meaning.

## Privacy and permissions
- `PRV-01` **MUST:** ask for geolocation, notifications, camera, microphone or motion only when needed.
  - Ask in context, after a user action. Never on page load unless it's essential to the page.
- `PRV-02` **MUST:** explain why in one specific, active sentence, for example "Your location is used to show the nearest court."
  - Never say "for a better experience".
- `PRV-03` **MUST:** a pre-permission screen shown before the browser prompt:
  - has only one button, "Continue" or "Next", never "Allow";
  - has no incentives, no fake prompts, no images of the prompt, and no arrows pointing at it.
  - The same no-manipulation principle applies to cookie/consent banners: no dark patterns, and declining must be as easy as accepting.
- `PRV-04` **MUST:** collect the minimum data. Disclose third-party data use and link the privacy policy where data is collected.
- `PRV-05` **MUST:**
  - Never store secrets in plain text.
  - Never invent your own authentication cryptography.
  - Prefer passkeys (WebAuthn); otherwise, offer 2FA for accounts.

## Accounts and sign-in
- `ACC-02` **SHOULD:**
  - Require an account only when core functionality needs it.
  - Let people browse first and delay sign-in, for example to checkout.
  - Briefly explain what the account gives the user.
- `ACC-03` **SHOULD:**
  - Label each method by name ("Continue with Google", "Sign in with passkey").
  - Offer only methods that work on the current device (feature-detect WebAuthn).
  - Don't call a site PIN a "passcode".
- `ACC-01` **MUST:** if people can create an account, they can **delete** it, not merely deactivate it.
  - Deletion is easy to find in account settings and not buried.
  - Immediate deletion is offered, even if scheduled deletion also exists.
  - Tell people when deletion will complete, and what happens to subscriptions and billing. Confirm when it's done (GDPR).
- `ACC-04` **SHOULD:**
  - Ask for as little information as possible.
  - On commerce sites, offer account creation after purchase, prefilled with the order details.

## Settings
- `SET-01` **SHOULD:**
  - Keep settings few, with defaults that suit most people.
  - Don't ask for what can be detected (color scheme, reduced motion, locale).
  - Respect system preferences instead of duplicating them.
- `SET-02` **SHOULD:** put task-specific options (sort, filter, show/hide) inline where they act. Keep general preferences on an Account/Settings page reached from the avatar or account menu.

## Notifications (web push, email, in-app)
- `NTF-01` **MUST:**
  - Get explicit opt-in before sending notifications.
  - Never send marketing without opt-in.
  - Never mark marketing as urgent.
  - Provide a notification-preferences page.
- `NTF-02` **SHOULD:**
  - Priority levels are passive, active, time-sensitive (something happening now or within 1 hour) and critical.
  - Use them honestly.
- `NTF-03` **SHOULD:**
  - Titles are short and specific; body text is in full sentences.
  - Don't repeat the brand name in the text.
  - Keep sensitive data out of notifications.
  - Use at most 4 actions, each with a short label.
  - Badges show real unread counts only.

## Review, NPS and feedback prompts
- `REV-01` **MUST:**
  - Ask only after people have engaged (a completed task or a delivered order).
  - Never ask on the first visit or mid-task.
  - Every prompt can be dismissed in one click.
- `REV-02` **SHOULD:**
  - Leave at least 1–2 weeks between asks.
  - Cap at about 3 asks per 365 days (Apple's system limit).

## Sharing, printing, documents
- `SHR-01` **SHOULD:**
  - Use `navigator.share()` behind a standard share icon, with a copy-link fallback.
  - Summarize sharing permissions in plain words ("Anyone with the link can view").
- `PRT-01` **SHOULD:**
  - Printable content (invoices, tickets, recipes) gets a `@media print` stylesheet that hides navigation and chrome and sets sensible page breaks.
  - Show a Print button only on printable content.
- `DOC-01` **SHOULD:** for web apps with documents:
  - Autosave (debounced, plus on `visibilitychange`/`pagehide`).
  - Show "unsaved" only when changes really are unsaved.
  - Use `beforeunload` only when there are unsaved changes.

## Branding (src: branding)
- `BRD-01` **SHOULD:**
  - Branding supports the content and doesn't compete with it.
  - Don't repeat the logo everywhere, and don't use a splash screen for branding.
- `BRD-02` **SHOULD:** customize familiar components (colors, radius, type), but keep their standard size, placement and behavior.
