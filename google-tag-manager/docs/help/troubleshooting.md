# Troubleshooting

## The GTM snippet is not on the storefront

1. Confirm **Enable = Yes** and a valid **GTM Container ID** in
   [General Settings](/configuration/general-settings.html).
2. Check the setting has not been overridden to **No** at a website or store-view scope.
3. Flush the cache:
   ```bash
   php bin/magento cache:flush
   ```
4. View page source and search for `GTM-`. If it is still missing, confirm the module is
   enabled (`php bin/magento module:status Webkul_GoogleTagManager`).

## `window.dataLayer` is empty

- Make sure at least one action is enabled in
  [Shopper Actions to Track](/configuration/shopper-actions.html).
- Perform a tracked action (view a product, add to cart) — some events only appear after
  the action.
- Remember events from redirecting actions (add to cart) drain on the **next** page render.

## Events fire but no tag runs in GTM

The container trigger does not match the event name. In GTM, the trigger's **Event** must
equal the neutral event name (`cart_item_added`, not `add_to_cart`). If you used
[Container Export](/destinations/container-export.html), re-import with **Merge** to restore
the correct triggers.

## A destination shows no data

- **GA4:** confirm the **Measurement ID** (`G-…`) and check **DebugView**.
- **Google Ads:** confirm **Conversion ID + Label**; conversions can take hours to record.
- **Meta:** confirm the **Pixel ID** with Meta Pixel Helper.
- Re-run [Verify events](/how-to/verify-events.html) in Preview mode.

## "Product not found" in dynamic remarketing

The `item_id` on the event does not match your catalog feed. Set **Send products as SKU or
numeric ID** to match your Merchant Center / Meta feed — see
[Data Tuning](/configuration/data-tuning.html#sku-vs-numeric-id).

## Revenue numbers don't match my reports

Adjust the [revenue basis](/configuration/data-tuning.html#choosing-a-revenue-basis):
choose grand total vs subtotal, and toggle **Subtract tax** / **Subtract shipping** /
**base currency** to match how you report elsewhere.

## <a name="csp"></a>Container blocked by Content Security Policy

On a store enforcing a strict CSP, the browser console shows the GTM script blocked. Allow
the Google Tag Manager domains in your CSP allow-list, for example:

- `https://www.googletagmanager.com`
- `https://www.google-analytics.com`
- your **sGTM server URL** if you use [server-side tagging](/sgtm/overview.html)

The extension sequences after `Magento_Csp` and is CSP-aware; the allow-list entries are
what let the third-party scripts load.

## Inline script blocked on /checkout

Magento blocks inline `<script>` on checkout under CSP. The extension already uses
`text/x-magento-init` (not inline script) for this reason. If you extend it, follow the same
pattern rather than adding inline scripts on checkout pages.

## The license does not validate

- Confirm you pasted the exact license key from your Webkul purchase.
- Confirm the domain matches the license.
- Raise a ticket at [webkul.uvdesk.com](https://webkul.uvdesk.com/).

## After changing anything

```bash
php bin/magento cache:flush
# after DI-affecting changes (new class, di.xml):
php bin/magento setup:di:compile
# after config.xml / system.xml changes:
php bin/magento setup:upgrade
```

Still stuck? Raise a ticket at [webkul.uvdesk.com](https://webkul.uvdesk.com/) with your
Magento version, the extension version (**4.0.6**), and a screenshot of the console.
