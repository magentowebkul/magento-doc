# FAQ

### Does the quote cart replace the shopping cart?

No. They are separate. A shopper can have items in both at once, and adding to one does not
touch the other.

### Which product types can be quoted?

All six: simple, virtual, downloadable, configurable, bundle and grouped. Options are carried
through the whole flow, so what was quoted is what gets ordered.

### Can guests request a quote?

Yes, if **Allow Guest Quotes** is on. They give an email address and name, and follow the quote
through a private link emailed to them.

### What if a guest uses an email that already has an account?

They are asked to sign in. Otherwise the quote would sit outside the account it belongs to and
never appear in that customer's My Quotes.

### Does a guest lose their quote cart if they sign in?

Not if **Merge Guest Quote on Login** is on — the lines move into their account with quantity,
requested price, options and notes intact.

### Can I make some products quote-only?

Yes. Mark the product quotable, then turn off **Show Add to Cart** — and **Show Price** too if
you do not want to publish a figure. The only way to buy becomes a quote.

### Can I let only wholesale customers negotiate?

Yes — select just that group under **General → Customer Groups**. Everyone else sees a normal
storefront.

### Do I have to answer every request by hand?

No. Turn on **Auto Approve** and set a maximum discount. Requests within that limit are approved
automatically at the price the customer asked for; anything asking for more waits for you.

### Can a customer change a quote after submitting it?

Not directly — a submitted quote is a record of what was asked. They can discuss changes in the
conversation and you can adjust the offered price and quantity, or they can submit a new request.

### What happens when a quote expires?

Cron moves it to **Expired** and it can no longer be purchased. Nothing is deleted — set it back
to **Approved** in admin and the customer can buy it again.

### Can a customer use a coupon on an approved quote?

Only if you allow it. **Cart → Allow Discount on Quote Items** is *No* by default, so price rules
skip negotiated lines. Other items in the same cart still get their discounts.

### Is the negotiated price safe from tier pricing and catalogue rules?

Yes. It is applied as a custom price on the cart line, which takes precedence over catalogue
price, tier price and — with the setting above off — price rules.

### Can I ask my own questions on the quote form?

Yes, with the [dynamic form](/configuration/dynamic-form). Add text, textarea or select fields,
mark them required if you need to, and the answers travel with the line.

### Can customers attach files?

Yes, if [attachments](/configuration/attachments) are enabled. You control the file types, the
size limit and how many files a request may carry.

### Does it work with Hyvä?

Yes, with the separate Quote System — Hyvä compatibility extension. Install both, and rebuild the
theme's Tailwind stylesheet afterwards.

### Does it work headless?

Yes. The whole storefront flow is exposed over [GraphQL](/using/graphql). Attachments can be read
but not uploaded, because Magento's GraphQL endpoint has no multipart upload.

### Does it work on Adobe Commerce?

Yes. Commerce has its own build of the extension — version 4.0.3, against Open Source's 5.0.4.
They are functionally identical.

### Where do I get support?

Raise a ticket at [webkul.uvdesk.com](https://webkul.uvdesk.com/), or see the support policy at
[store.webkul.com/support.html](https://store.webkul.com/support.html).
