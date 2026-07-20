# Validate the installation

Before you rely on any reports, confirm the extension is installed correctly and the
container is actually loading on the storefront.

## 1. Module is enabled

```bash
php bin/magento module:status Webkul_GoogleTagManager
```

`Webkul_GoogleTagManager` should be listed as enabled. If not, run:

```bash
php bin/magento module:enable Webkul_GoogleTagManager
php bin/magento setup:upgrade && php bin/magento cache:flush
```

## 2. Configuration is on

In **Stores → Configuration → Webkul → Google Tag Manager Configuration → General**:

- **Enable** is **Yes**
- **Module License** is validated
- **GTM Container ID** is present (`GTM-XXXXXXX`)

Click **Test Google Tag Manager Setup** — it should report success.

## 3. Snippet is on the page

Open your storefront, view page source, and search for your container ID. You should find:

```html
<!-- in <head> -->
<script>(function(w,d,s,l,i){ ... })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- right after <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" ...></iframe></noscript>
```

If the snippet is missing, flush the cache (`php bin/magento cache:flush`) and check that a
store-view scope has not overridden **Enable** to No.

## 4. dataLayer exists

Open the browser console and type:

```js
window.dataLayer
```

You should see an array. Browse to a product and confirm it grows.

## 5. GTM sees the container

In [tagmanager.google.com](https://tagmanager.google.com), click **Preview**, enter your
storefront URL, and confirm **Tag Assistant** connects. If it connects, the container is
loading correctly — continue to [Verify events](/how-to/verify-events.html).

## Common blockers

| Symptom | Likely cause |
| --- | --- |
| No snippet in source | Extension disabled at store-view scope, or cache not flushed. |
| Snippet present, `dataLayer` empty | No events enabled, or you have not performed a tracked action yet. |
| Container blocked in console | A strict [CSP](/help/troubleshooting.html#csp) is blocking `googletagmanager.com`. |
| Tag Assistant won't connect | Ad blocker in the browser, or wrong storefront URL. |
