# Module Installation

This page guides you through installing the **Webkul Magento 2 Marketplace Gift Card** extension on your Magento server using manual extraction or Composer installation.

---

## Option A — Install from Zip Package
Use this method if you downloaded the module package directly from the Webkul Store.

**1. Download Module**

Log in to your Webkul Store account, navigate to **My Account > My Purchased Products**, and then download and extract the contents of the module zip folder on your local system.

**2. Upload Folder**

Once the module zip is extracted, navigate to `src/app`. Connect to your server via SSH/SFTP. Copy the `app` folder and upload it into your Magento 2 root directory on the server. The files should reside under `app/code/Webkul/MpGiftCard/`.

![Move App Folder](/images/installation/01.webp)

<!-- **3. Run Commands** -->
<span id="run-commands" style="scroll-margin-top: calc(var(--navbar-height, 3.6rem) + 1.5rem); display: inline-block;">**3. Run Commands**</span>

Run the following commands in sequence in the Magento 2 root directory to compile, deploy, and clear the cache:

```bash
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_MpGiftCard in app/etc/config.php and updates database schema tables." />

```bash
php bin/magento setup:di:compile
```
<ExplainCode explanation="Generates code factories, interceptors, and dependency injection classes for Magento 2." />

```bash
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="Deploys static view files (CSS, JS, images, templates) for storefront and admin panel." />

```bash
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes catalog data, products, category permissions, and search indexers." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all cached configuration, layout blocks, and page cache storage." />

You can also use the admin panel to clear the cache. Navigate to **System -> Tools -> Cache Management** and click the **Flush Magento Cache** button.

![Flush Cache](/images/installation/02.webp)

---

## Option B — Install with Composer
Use this method if the module package is available in your Composer repository.

You need to add the provided access keys during purchase. After that, run the Composer require command to install the package:

```bash
composer require webkul/marketplace-gift-card
```
<ExplainCode explanation="Downloads and installs the Webkul MpGiftCard module package and dependencies into the vendor directory via Composer." />

For Hyvä theme, run the following command to install the Hyvä compatible package:

```bash
composer require webkul/marketplace-gift-card-hyva
```
<ExplainCode explanation="Downloads and installs the Webkul MpGiftCard Hyva compatible package and dependencies into the vendor directory via Composer." />

<!-- After that, run the installation commands provided in **Option A > 3. Run Commands**. -->
After that, run the installation commands provided in [**Option A > 3. Run Commands**](#run-commands).

## Language Translation

The module supports multiple languages, including both RTL (Right-to-Left) and LTR (Left-to-Right) layouts. To translate the module into another language, such as German:

1. Navigate to the module's `i18n` directory: `app/code/Webkul/MpGiftCard/i18n/` (or the equivalent path in your installation).
2. Edit the `en_US.csv` file.
3. Rename the CSV file to match your target locale, for example, `de_DE.csv` for German.
4. Translate all content on the right side of the comma into your target language.
5. Save the file.
6. Upload the translated CSV file to the `app/code/Webkul/MpGiftCard/i18n/` directory on your server.

![Rename CSV](/images/installation/03.png)

7. Navigate to your Magento Admin Panel, go to **Stores -> Configuration -> General -> General -> Locale Options**, and select your desired locale.

![Locale Option](/images/installation/04.webp)

8. Run the static content deployment and cache flush commands again:

```bash
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys static view files for the newly selected locale on storefront and admin panel." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all cached configuration and block data to apply the new locale translation." />

The module will now be translated into your selected language.

::: note Translation Note
Always ensure that the structure of the CSV (the English key on the left) remains unmodified. Only change the translated string on the right side.
:::

---