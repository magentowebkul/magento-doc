# First Summaries

The module does not summarise existing reviews on its own. Run the bulk command once after
setup:

```bash
php bin/magento generate:reviewsummary
```

It finds every product and store view with approved reviews and generates a summary for
each, one at a time, with a progress bar.

```text
Generating Product Review Summary
=================================

 12/12 [============================] 100%

 [OK] 12 product review summary generated successfully
```

## Check the result

1. Open a product that has approved reviews on the storefront.
2. Open the **Reviews** tab.
3. A **Customers Say** block appears above the reviews, ending with the line
   *AI generated product reviews summary*.

![Customers Say summary on the product page](/images/catalog-page-product-review-summary.webp)

If it is not there, flush the full-page cache:

```bash
php bin/magento cache:flush full_page
```

and see [Storefront Problems](../help/storefront.md).

::: tip Try a single product first
To test with one product, go to **Marketing → All Reviews**, select one of its approved
reviews, and use **Update Status → Approved**. That regenerates just that product. See
[From the Reviews Grid](../generating/admin-actions.md).
:::

Next: [Configuration Overview](../configuration/overview.md).
