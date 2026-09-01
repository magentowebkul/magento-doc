# Styling the Storefront

## What the module ships

| File | Loaded on |
| --- | --- |
| `view/frontend/web/css/reviewStyle.css` | Product page review block |
| `view/frontend/web/css/list.css` | Review list page |
| `view/frontend/web/js/reviews.js` | Product page review container |
| `view/frontend/web/js/list.js` | Review list page |
| `view/frontend/web/js/aiReviews.js` | The toggle behaviour |

## Overriding the CSS

Copy the file into your theme, keeping the module path:

```text
app/design/frontend/<Vendor>/<theme>/Webkul_AIReviewTranslator/web/css/reviewStyle.css
```

Then re-deploy:

```bash
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

## Useful hooks

The toggle markup exposes stable ids and classes:

| Selector | Element |
| --- | --- |
| `.reviewTitle` | The visible review title |
| `.reviewContentOriginal` | The visible review body |
| `.orignalReview` | The "Show Orignal Review" link |
| `.translatedReview` | The "Show Translated Review" link |
| `#orignalReviewTitle<reviewId>` | Original title container |
| `#translatedReviewTitle<reviewId>` | Translated title container |
| `#orignalReviewDesc<reviewId>` | Original body container |
| `#translatedReviewDesc<reviewId>` | Translated body container |

Styling the two links to look like buttons, or moving them above the review body, needs
only CSS against `.orignalReview` and `.translatedReview`.

::: warning Do not hide a container with `display: none` in CSS
The toggle sets `display` inline on those containers. A stylesheet rule fights it and the
switch stops working. Use `visibility` or restyle the wrapper instead.
:::

## Hyvä

The templates target the Luma structure — a Hyvä theme needs them ported. Raise a
customisation request at [webkul.uvdesk.com](https://webkul.uvdesk.com/).

## Removing the toggle entirely

To show only the translated text with no link, hide both links in your theme CSS:

```css
.orignalReview,
.translatedReview {
    display: none;
}
```

The translated version is what renders by default, so the review still reads correctly.
