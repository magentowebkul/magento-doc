# Storefront Problems

## The toggle link does nothing

Both states show the same text. That means there is no translation row for this review and
store view.

1. Is the [queue consumer](../translating/queue.md) running?
2. Did the review predate the module? Run
   `php bin/magento Translate:All`.
3. Did the translation fall back to the original? See
   [Fallback Behaviour](../translating/fallbacks.md).

## The toggle link is missing entirely

| Check | Fix |
| --- | --- |
| Is the module enabled for **that store view**? | Switch scope in the config and check. |
| Was static content deployed? | `php bin/magento setup:static-content:deploy -f` |
| Cache stale? | `php bin/magento cache:flush` |
| Custom theme overriding the review template? | Compare your theme's `Magento_Review` overrides. |

## Reviews show in the wrong language

The storefront serves the row matching the **current store view**. If a German store view
shows English text, its locale is probably `en_US` — check **Stores → Configuration →
General → Locale Options**, then re-run the bulk command for that store view.

See [Store Views & Languages](../configuration/scope.md).

## Clicking the link breaks the layout

Usually a theme rule fighting the toggle.

::: warning Do not hide the containers with CSS `display`
The toggle sets `display` inline on the title and body containers. A stylesheet rule using
`display` on `#orignalReviewDesc*` or `#translatedReviewDesc*` overrides it and the switch
half-works. Use `visibility`, or style the wrapper. See
[Styling the Storefront](../storefront/styling.md).
:::

## The toggle stops working after paginating reviews

The review list paginates over AJAX. If your theme replaces the review container with its
own markup, the toggle bindings are lost. Compare your override against the module's
`review_product_listajax.xml` layout.

## Hyvä shows no toggle

Expected. The templates target the Luma structure. Raise a customisation request at
[webkul.uvdesk.com](https://webkul.uvdesk.com/).

## Search engines show machine-translated snippets

That is by design — the translation renders by default and carries the `schema.org/Review`
markup. If you would rather index the original, hide the translated container in your theme
and show the original by default. See [The Toggle](../storefront/toggle.md).
