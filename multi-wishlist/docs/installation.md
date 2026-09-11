# Installation

Installing the **Magento 2 Multi Wishlist** module is simple. Follow the steps below to upload, compile, and configure the module.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module zip package directly from the **[Webkul Store](https://store.webkul.com/)**.

### 1. Extract Package
Extract the downloaded zip file on your local machine.

### 2. Upload Code Directory
Connect to your server via SSH/SFTP. Upload the extracted `app` directory into your Magento 2 root directory. The files should reside under:
`app/code/Webkul/MultiWishlist/`

![Move App Folder](/images/move-app-folder.webp)

If you are also installing the Hyvä compatibility extension, upload its files to:
`app/code/Webkul/MultiWishlistHyva/`

### 3. Execute Deployment Commands
Run the following commands sequentially in your Magento 2 root folder:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Applies database schema updates, creates the wk_wishlist_name table, and registers Webkul_MultiWishlist in Magento." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles dependency injection definitions, proxies, and preference overrides." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys view assets for frontend templates and Magento Admin backend." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes catalog and wishlist data to ensure immediate visibility." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes Magento application caches to apply new configurations." />

You can also use the admin panel to clear the cache. Navigate to **System -> Tools -> Cache Management** and click the **Flush Magento Cache** button.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install with Composer

Use this method if you are installing via Composer repository:

```bash:no-line-numbers
composer require webkul/multi-wishlist
```
<ExplainCode explanation="Fetches the Webkul Multi Wishlist package and its dependencies via Composer." />

If using Hyvä Themes, also require the Hyvä compatibility package:

```bash:no-line-numbers
composer require webkul/multi-wishlist-hyva
```
<ExplainCode explanation="Fetches the Webkul Multi Wishlist Hyva package and its dependencies via Composer." />

After requiring the packages, execute the deployment commands outlined in **Option A > Step 3**.

---

## Language Translation

The module supports multiple languages, including both RTL (Right-to-Left) and LTR (Left-to-Right) layouts. To translate the module into another language, such as German:

1. Navigate to the module's i18n directory: `app/code/Webkul/MultiWishlist/i18n` (or the equivalent path in your installation).

![Translation](/images/translation-first.png)

2. Edit the `en_US.csv` file.
3. Rename the CSV file to match your target locale, for example, `de_DE.csv` for German.

![Translation](/images/translation-second.png)

4. Translate all content on the right side of the comma into your target language.

![Translation](/images/translation-third.png)

5. Save the file.
6. Upload the translated CSV file to the `app/code/Webkul/MultiWishlist/i18n` path on your server.
7. Navigate to your Adobe Commerce Cloud admin panel, go to **Store -> Configuration -> General -> Locale Options** and select your desired locale.

![Translation](/images/rvp-locale-option.webp)

8. Run the static content deployment and cache flush commands again.

::: tip Translation Note
Always ensure that the structure of the CSV (the English key on the left) remains unmodified. Only change the translated string on the right side.
:::
