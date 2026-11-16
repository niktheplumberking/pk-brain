# 09 Apple services on the web (load only when a site uses them)

Sources: `apple-pay`, `sign-in-with-apple`, `maps`, `wallet`, `airplay`, `homekit`, `healthkit`, `augmented-reality`, `app-clips`, `live-photos`, `apple-in-app-purchase`.

The crawl lost some table cells and do/don't images. Before you ship any Apple-branded element, check the current official page (developer.apple.com/design/human-interface-guidelines/<slug>) together with Apple's own button and mark guidelines.

## Apple Pay on the web
- `APAY-01` **MUST: when to show the button.**
  - Show Apple Pay only on devices and browsers that support it, and hide it everywhere else.
  - If you check whether the person has an active card in Wallet, Apple Pay must be the primary payment option wherever you make that check. It does not have to be the only option.
- `APAY-02` **MUST: use the official button.**
  - Render the button through Apple's API (ApplePayButtonStyle). Never draw, copy or modify the button artwork.
  - Use the button only to start a payment or to set up Apple Pay.
  - Never hide the button or make it look disabled. If something is missing (for example a size), explain it after the person taps.
  - A custom pay button must not say "Apple Pay" or show the logo.
- `APAY-03` **MUST: button type and style.**
  - Choose the type for the context: plain, Buy, Pay, Check Out, Continue, Book, Donate (approved nonprofits only), Subscribe, Reload, Add Money, Top Up, Order, Rent, Support, Contribute, Tip, or Set Up.
  - Choose the style for the background:

    | Background | Style |
    |---|---|
    | Light | Black |
    | Light, not enough contrast | White-with-outline |
    | Dark | White |
    | Any | Automatic (follows the theme) |

- `APAY-04` **MUST: size and placement.**
  - At least as large as every other payment button, and visible without scrolling.
  - Minimum size is 100×30pt for the plain button and 140×30pt for Book (and probably the other titled buttons; the crawl lost those rows, so verify them).
  - Margin around the button is at least 1/10 of its height.
  - Corner radius may match your other buttons.
  - Beside Add to Cart, Apple Pay goes to the right. In a stacked layout it goes on top.
- `APAY-05` **SHOULD: checkout flow.**
  - Don't open new windows.
  - Collect options (size, color, gift note) before the payment sheet opens.
  - Offer express checkout.
  - Don't force account creation before purchase; offer it on the confirmation page, prefilled.
- `APAY-06` **MUST: payment sheet content.**
  - Ask only for essential data.
  - Line items are charges, discounts, pending amounts or recurring amounts, one line each.
  - The total line reads "Pay [Business Name]" and matches the bank statement.
  - Mark unknown costs as "Amount Pending".
  - Don't add your own spinners.
- `APAY-07` **SHOULD: errors.**
  - Name the field and what is expected ("Zip code doesn't match city"), as a noun phrase in sentence case with no full stop, 128 characters or fewer.
  - Accept input forgivingly.
- `APAY-08` **MUST: subscriptions.** Disclose frequency, trial terms, the amount and the start date before the sheet opens.
- `APAY-09` **MUST: compliance.**
  - The site has a privacy policy and follows Apple Pay on the Web acceptable-use rules.
  - Provide a website icon of 60×60pt (120 and 180px PNGs).
- `APAY-10` **MUST: the mark and the name.**
  - Use only Apple's mark artwork. You may change its height, and only to match the other payment marks or larger.
  - No ™, no effects, no rotation, no animation. Clear space is at least 1/10 of its height.
  - Write the name exactly "Apple Pay": never plural or possessive, never translated, never "ApplePay".
  - In the US, add ® on the first mention in body copy.

## Sign in with Apple on the web
- `SIWA-01` **SHOULD: when to ask for sign-in.**
  - Ask only when it benefits the user, and as late as possible.
  - Explain why an account is needed.
  - Let people link existing accounts.
- `SIWA-02` **MUST: data handling.**
  - Never ask for a password.
  - Respect the private relay email and don't demand a personal email.
  - Mark which extra fields are required and which are optional.
  - Use the data you received visibly, for example greet the person by name.
- `SIWA-03` **MUST: button rules.**
  - At least as large as the other sign-in buttons, and visible without scrolling. It does **not** have to be listed first.
  - The title is "Sign in with Apple", "Sign up with Apple" or "Continue with Apple". Use one title consistently.
  - Styles: White on dark backgrounds, Black on light backgrounds, White-with-outline on light backgrounds without enough contrast.
  - Minimum size is 140×30pt, with margin of at least 1/10 of the button height.
- `SIWA-04` **MUST: custom buttons.**
  - Use only Apple's downloaded logo files; never redraw the logo.
  - The logo and title are strictly black or white.
  - The title font size is 43% of the button height.
  - The trailing margin is at least 8% of the button width.
  - Logo-only buttons are 1:1.

## Apple Maps (MapKit JS and the Maps Embed API)
- `MAP-01` **MUST: legal attribution.**
  - Keep the Apple logo and the legal link visible, and never cover them.
  - They need about 7pt padding at the sides and 10pt above and below, sitting 10pt above any resting overlay card.
  - They don't appear on maps smaller than 200×100px.
- `MAP-02` **SHOULD: map content.**
  - Maps are interactive (zoom and pan).
  - Cluster overlapping pins.
  - Clearly highlight the selection.
  - Text in annotations is limited to 2–3 characters.
- `MAP-03` **SHOULD: place cards.**
  - Keep the selected place visible.
  - Don't duplicate page content.
  - Set a minimum card width.
  - A place card shown outside a map must include a map.

## Wallet passes and order tracking
- `WAL-01` **SHOULD: passes.**
  - Use the official "Add to Apple Wallet" badge.
  - Bundle related passes, and offer "View in Wallet" for passes already added.
  - Keep images small.
  - Never bake text or barcodes into images.
  - Use change messages only for time-critical updates.
- `WAL-02` **SHOULD: order tracking.**
  - Use a 300×300px opaque logo and product images.
  - Include immediate partial data, a link to the order page, contact options, the carrier link and precise statuses.

## Apple trademarks in marketing copy (AirPlay, HomeKit, Apple Health and similar)
- `TM-01` **MUST: how to write the names.**
  - Use exact casing: AirPlay, HomeKit, Apple Health.
  - Use them as nouns ("works with AirPlay"), never as adjectives ("AirPlay speaker").
  - Never pluralize, translate or make them possessive.
- `TM-02` **MUST: brand relationship.**
  - Keep the client brand more prominent.
  - Never imply Apple endorsement.
  - Technology icons are not interactive and never appear inside sentences.
- `TM-03` **SHOULD: other Apple marks.**
  - AR badge: only on products that really have AR, always in the same corner, with clear space of at least 10% of its height.
  - App Clip Codes: scan-only variant, at least 256×256px, with a call to action.
  - Live Photos: a motion hint or badge, never a play button.

## Subscription paywalls (from In-App Purchase, applies to web subscriptions too)
- `SUB-01` **MUST: show the terms.**
  - Show the total price of every option, plus the intro price, how long it lasts, and the price after it.
  - State that billing renews automatically.
- `SUB-02` **MUST: cancelling and existing subscribers.**
  - Make cancellation easy to find.
  - Offer sign-in or restore for existing subscribers.
