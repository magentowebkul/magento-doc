# Storefront Problems

## No "Customers Say" block

Work down the list:

1. **Is the module enabled** for this website?
2. **Does a summary exist** for this product *and this store view*? Check with
   [Useful SQL](../developers/sql.md#summary-for-one-product). If not, generate one.
3. **Does the product have an approved review in this store view?** The block is hidden
   when the approved-review count is zero.
4. **Is the page cached?** Run `php bin/magento cache:flush full_page`.
5. **Is your theme Luma-based?** The module replaces the `reviews.tab` template. Themes that
   render reviews differently (for example Hyvä) will not show it.

## It shows in one store view but not another

Summaries are per store view. The other store view has no summary yet, or no approved
reviews visible in it. Run `php bin/magento generate:reviewsummary`.

## Asterisks around words

The product uses the **Product -- Full Width** layout, where Markdown is not converted. See
[Full-Width Layout](../storefront/full-width.md).

## An old summary is still showing

The page is cached, or the summary has not been regenerated since the reviews changed.
Regenerate, then flush the full-page cache.

## The summary disappeared

All approved reviews were removed or unapproved in that store view, or the module was
disabled. The summary row is kept; it is shown again once an approved review exists.

Next: [FAQ](./faq.md).
