# Troubleshooting

## The Add to Quote button does not appear

Work down this list — it is the order the extension checks in.

1. **Is the extension on?** **Stores → Configuration → Webkul → Quote System → General →
   Enable Quote System** must be *Yes*. If it will not stay on, the Webkul Base licence has not
   been verified — see [Activate & Connect](/activation).

2. **Is the customer in an allowed group?** **General → Customer Groups**. Remember that a
   visitor who is not signed in counts as the *NOT LOGGED IN* group.

3. **Is the product marked quotable?** **Enable Request a Quote** must be *Yes* on the product,
   in the store view you are looking at — the attribute is store-view scoped.

4. **Is the product in stock?** Out-of-stock products show no button unless **Product → Allow Out
   of Stock Products** is on.

5. **Is the button switched on for that page?** **Button → Show on Product Page** and **Show on
   Product Listing** control the two places independently.

6. **Cache.** Product pages are full-page cached. Run `php bin/magento cache:flush`.

## "Enable Quote System" reverts to No when I save

The licence has not been verified. Enter your key under **Stores → Configuration → Webkul →
Base** first. Webkul Base holds the switch closed until it validates.

## Nothing happens when I click Add to Quote on a category page

Expected for products that must be configured first — configurable, bundle and grouped products,
and anything with required custom options. They link to the product page instead, because a card
gives the shopper no way to choose options. This matches Magento's own Add to Cart.

## The quote form will not submit

- A required product option has not been chosen — choose it on the product page first.
- The quantity is below **Product → Minimum Quantity**.
- Quantity × price is below **Product → Minimum Amount**. Note it is the *product* of the two,
  not the price alone.

## The customer never got the verification code

Verification only holds a quote if the code email was actually sent. If your mail transport is
failing, the quote is submitted normally instead — by design, so a broken mail server never traps
a request.

Check the mail configuration under **Stores → Configuration → Advanced → System → Mail Sending
Settings**, and look in the extension's log for send failures.

## Conversation messages appear but no emails arrive

The message-queue consumer is not running:

```bash
php bin/magento queue:consumers:start webkul.quotesystem.conversation.notify
```

Usually `cron_run` starts it. If your team disables consumer auto-start, run it as a supervised
process.

## Quotes never expire, and reminders never arrive

Both run on cron. Check that Magento cron is configured and that these two jobs are running:

- `wk_raq_expire_quotes` — daily at 00:00
- `wk_raq_remind_expiring_quotes` — daily at 01:00

Also confirm **Workflow → Quote Expiry (days)** and **Reminder (days)** are not 0, which switches
each feature off.

## A customer bought an approved quote below the agreed price

A coupon was stacked on the negotiated price. Set **Cart → Allow Discount on Quote Items** to
*No*, which makes cart and catalogue price rules skip quoted lines while other items in the same
cart still get their discounts.

## Hyvä: the pages render but look wrong

The theme's Tailwind stylesheet was not rebuilt after installing, so the utility classes the
templates use were never compiled:

```bash
php bin/magento hyva:config:generate
cd <your-theme>/web/tailwind
npm run build
php bin/magento cache:flush
```

If it still looks stale, your browser or CDN is holding the old stylesheet — the static URL is
versioned and cached for a year. Refresh the version:

```bash
php bin/magento setup:static-content:deploy -f --refresh-content-version-only
```

## Where to look next

The extension writes to its own log file under `var/log/`. Errors on the risky paths — sending
mail, uploading attachments, converting a quote to an order — are logged there with the quote ID.

If you are still stuck, raise a ticket at [webkul.uvdesk.com](https://webkul.uvdesk.com/) with
your Magento version, edition, the extension version, and the log lines around the problem.
