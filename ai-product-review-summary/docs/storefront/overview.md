# On the Product Page

The summary appears at the top of the product's **Reviews** tab, above the list of reviews.

![Customers Say summary above the review list on a Luma product page](/images/catalog-page-product-review-summary.webp)

## When it is shown

All four must be true:

| Condition | If not |
| --- | --- |
| **Enable Module** is **Yes** | Nothing is shown |
| A summary exists for this product **in the current store view** | Nothing is shown |
| The product has at least one approved review in this store view | Nothing is shown, even if an old summary exists |
| The product's page layout is not **Product -- Full Width** | The summary moves — see [Full-Width Layout](./full-width.md) |

## Formatting

If the model returns `**bold**` Markdown, it is rendered as bold text. Other Markdown is
shown as-is.

## Caching

The summary is part of the product page, so Magento's full-page cache serves the old page
until it expires or is cleaned. After generating, flush it if you want to see the result
immediately:

```bash
php bin/magento cache:flush full_page
```

## Themes

The module replaces the template of Magento's `reviews.tab` block. It works with Luma and
Luma-based themes. Themes that render reviews with their own blocks — including Hyvä —
need a compatibility layer to show the summary.

Next: [Full-Width Layout](./full-width.md).
