# 10 Licensing, exclusions, resolved conflicts

## Licensing (verified 2026-10-17)

- `LIC-01` **MUST: no Apple fonts or symbols on websites.**
  - Never self-host, `@font-face`-embed or ship these fonts on a website: SF Pro, SF Compact, SF Mono, New York, or the SF Arabic, Armenian, Georgian and Hebrew families.
    - **Evidence:** the license on developer.apple.com/fonts says the San Francisco font is to be used *solely for creating mock-ups* of user interfaces for software running on Apple's operating systems. It also forbids embedding the font in software. This was read directly from the license text on 2026-10-17.
    - **Allowed:** `font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. This only asks the visitor's own device to use its installed font; nothing is distributed.
  - Never ship SF Symbols artwork (exported SVGs or PNGs) on websites.
    - **Evidence (HIG `sf-symbols` page):** symbols are under separate terms and conditions. Using them, or anything confusingly similar, in app icons, logos or any other trademarked use is prohibited. Symbols that depict Apple products are copyrighted.
    - Our policy goes further than that clause on purpose, because the symbols are meant for apps on Apple platforms. Use open-license sets instead: Lucide (ISC), Phosphor (MIT), Tabler (MIT) or Material Symbols (Apache 2.0).
- `LIC-02` **MUST: Apple brand assets only from official sources.** This covers Apple Pay and Sign in with Apple buttons and marks, Wallet badges, AR badges, the Maps logo and similar assets.
  - Use only Apple's official, unmodified assets or APIs, following each one's rules (see `09`).
  - Never imply Apple endorsement.
- `LIC-03` **MUST: no Apple hardware or bezels in client marketing without checking the terms.**
  - Don't draw replicas of Apple hardware.
  - Official product bezels from Apple Design Resources fall under Apple's Marketing Resources and Identity Guidelines. Check those terms before using bezels.
- `LIC-04` **MUST: write rules in our own words.**
  - All rules in this skill are paraphrased.
  - Never copy Apple's HIG text, images or UI kits verbatim into client deliverables.
  - Don't clone Apple's own UI pixel-for-pixel (trade dress).

## What we do NOT adopt from the HIG

- **Platform-only topics:**
  - watchOS: complications, Digital Crown, Always On, workouts, Activity rings
  - tvOS: remotes, focus parallax, Top Shelf
  - visionOS: spatial and immersive design, ornaments, eyes
  - CarPlay
  - Widgets, Live Activities, Control Center, Dynamic Island, App Shortcuts and Siri
  - Game Center, SharePlay, HealthKit/CareKit/ResearchKit, HomeKit (except its copy rules), NFC, Tap to Pay, ID Verifier, Mac Catalyst
- **System chrome:** the macOS menu bar, Dock menus, status bars, window management, document launchers, and AppKit/UIKit controls with no web equivalent.
- **Dynamic Type APIs and SF tracking tables.** Our web equivalents are rem plus 200% zoom testing (`A11Y-01`) and per-font tracking (`TYP-04`).
- **Liquid Glass as a look.** We keep the principle (a distinct translucent control layer over content, used sparingly, with fallbacks; see `MAT-*`). We do not imitate Apple's glass styling wholesale as a house default.
- **App Store specifics:** review prompts via StoreKit, App Store privacy labels, in-app purchase sheets. We keep the underlying principles (`REV-*`, `SUB-*`).

## Resolved conflicts (agency decisions, 2026-10-17)

| Topic | Apple HIG says | Agency rule | Reason |
|---|---|---|---|
| Rating display | Show whole stars only | Half stars may be displayed (`RAT-01`) | Common web convention; users understand it |
| Disabled submit button | Keep Continue unavailable until required fields are valid | Keep the button enabled and show errors on click; if it is blocked, use `aria-disabled` plus an explanation (`FRM-08`) | Disabled buttons can't be focused, give no reason and hurt accessibility |
| Dark-mode toggle | Avoid a separate in-app appearance setting | A toggle is allowed if it defaults to the system setting and remembers the choice (`DRK-02`) | Standard web expectation |
| Web px vs HIG pt | Sizes given in points | Treat 1pt ≈ 1 CSS px | CSS px are density-independent |

## Known gaps in the source crawl

These parts did not come through in the 2026-10-17 crawl. Verify them on the live page if they matter:
- Every image and do/don't illustration.
- System color hex values (`color`).
- The device screen-size table (`layout`).
- Some standard icon rows (`icons`).
- Several Apple Pay minimum-size rows (`apple-pay`).
- Activity ring colors.

To refresh the crawl, run `node "C:\PK-WORK\Code\apple-design-system\source\crawl-hig.mjs" <empty-output-dir>`.
