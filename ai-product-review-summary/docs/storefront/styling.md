# Styling

## Markup

```html
<div class="main">
  <div class="product-section">
    <h3>Customers Say</h3>
    <div class="review-content-container">
      <div class="review-content">
        <span><!-- summary text --></span>
        <h6 class="wk-review-suggestion">AI generated product reviews summary</h6>
      </div>
    </div>
  </div>
</div>
```

## Default styles

The module ships one rule, loaded on every storefront page:

```css
.wk-review-suggestion {
    color: slategray;
    font-style: italic;
}
```

Everything else inherits from your theme.

## Customising

Add rules to your theme's stylesheet, for example
`app/design/frontend/<Vendor>/<theme>/web/css/source/_extend.less`:

```less
.product-section {
    .lib-css(background, #f7f7f9);
    .lib-css(border-radius, 8px);
    padding: 16px 20px;
    margin-bottom: 24px;

    h3 { margin-top: 0; }
}

.wk-review-suggestion {
    font-size: 12px;
    margin: 12px 0 0;
}
```

Then redeploy static content:

```bash
php bin/magento setup:static-content:deploy -f
php bin/magento cache:flush
```

## Changing the text

**Customers Say** and **AI generated product reviews summary** are translatable strings.
Override them in your theme's `i18n/<locale>.csv`:

```text
"Customers Say","What shoppers think"
"AI generated product reviews summary","Summary written by AI from verified reviews"
```

Next: [Data Model](../developers/data-model.md).
