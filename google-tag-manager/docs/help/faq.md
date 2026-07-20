# FAQ

### Do I have to use Google Analytics, Google Ads, or Meta?

No. The extension is **destination-agnostic**. It pushes neutral events to
`window.dataLayer`; you decide which tags consume them. Use one destination, several, or
build entirely custom tags in Google Tag Manager.

### What is the difference between Do-It-Yourself and Guided Setup?

- **Do-It-Yourself:** you enter your Container ID and build tags yourself in GTM.
- **Guided Setup:** you enable destinations in the module and download a
  [pre-wired container](/destinations/container-export.html).

Pick one — you do not need both. See the [Introduction](/introduction.html#two-ways-to-work).

### Do I need to paste the GTM snippet into my theme?

No. Once **Enable** is Yes and a valid Container ID is saved, the extension injects the head
and body snippets automatically. The read-only Head/Body fields are for reference only.

### Which events are tracked?

18 shopper actions across browse, cart, checkout, purchase, and account. The full list with
on/off toggles is in [Shopper Actions to Track](/configuration/shopper-actions.html).

### Should `item_id` be the SKU or the numeric ID?

Match it to how your destination catalog feed is keyed. Set it in
[Data Tuning](/configuration/data-tuning.html#sku-vs-numeric-id). A mismatch is the usual
cause of dynamic remarketing "product not found" warnings.

### Is any personal data sent to Google or Meta?

Only if you explicitly enable **Collect hashed customer identifiers**, and only
SHA-256–**hashed** email/phone (never plaintext), subject to your consent gate. See
[Consent & PII](/configuration/consent-pii.html).

### Does it support Enhanced Conversions?

Yes — enable hashed identifier capture in [Consent & PII](/configuration/consent-pii.html).
Google Ads consumes the hashed identifiers on `payment_completed` as Enhanced Conversions.

### Does it work with a cookie consent banner?

Yes. It ships an optional **enhanced cookie banner** that gates GTM loading by consent
category, and a consent gate for hashed identifiers. See
[Consent & PII](/configuration/consent-pii.html).

### Can I route GA4 through my own server (sGTM)?

Yes. Enter a **GTM Server Container URL** and the export includes a server container. See
[Server-Side Tagging](/sgtm/overview.html).

### Does it support multi-store / multi-website?

Yes. All settings are scoped per website and store view, so different stores can send
different data to different destinations.

### Does it track multishipping checkout?

Yes — the purchase funnel has parity with Magento's multishipping checkout.

### Can a developer add a custom event?

Yes. Events are contributed via dependency injection, so a custom module can add its own
neutral events without editing this extension. See [Developer](/configuration/developer.html).

### Where do I get support?

Raise a ticket at [webkul.uvdesk.com](https://webkul.uvdesk.com/) or use the **Support**
links in the extension's Admin menu.
