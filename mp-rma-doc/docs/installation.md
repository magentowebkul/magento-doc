# Installation

This guide walks you through installing the **Webkul Magento 2 Marketplace RMA System** extension on your store server using either manual extraction or Composer installation.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module package directly from the Webkul Store.

**1. Download Module**

Log in to your [Webkul Store](https://store.webkul.com/) account, navigate to **My Account > My Purchased Products**, and download the `Webkul_MpRmaSystem` zip archive to your local computer.

**2. Upload Folder**

Extract the zip archive. Inside you will find the `src/app` directory. Connect to your server using SSH or SFTP. Copy the contents and upload them to your Magento 2 root directory. The files must reside under:
`app/code/Webkul/MpRmaSystem/`

![Move App Folder](/images/move-app-folder.webp)

<span id="run-commands" style="scroll-margin-top: calc(var(--navbar-height, 3.6rem) + 1.5rem); display: inline-block;">**3. Run Commands**</span>

Execute the following commands sequentially in your Magento 2 root directory:

```bash
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_MpRmaSystem in app/etc/config.php and runs database schema migrations for RMA tables." />

```bash
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles all dependency injection definitions, proxy classes, and repositories." />

```bash
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="Deploys storefront CSS, JS components, templates, and admin UI components." />

```bash
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes all core catalog and marketplace indices to synchronize new RMA attributes and tables." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes configuration, layout, and block caches to apply the newly registered RMA module." />

You can also clear the cache from the Magento Admin Panel. Navigate to **System > Tools > Cache Management** and click the **Flush Magento Cache** button.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install with Composer

Use this method if the module package is available in your Composer repository.

You need to add the provided access keys during purchase. After that, run the Composer require command to install the package:

```bash
composer require webkul/marketplace-rma-system
```
<ExplainCode explanation="Downloads and installs the Webkul Marketplace RMA System extension into the vendor directory via Composer." />

If your store uses the **Hyvä Theme**, also install the Hyvä compatibility companion module:

```bash
composer require webkul/marketplace-rma-system-hyva
```
<ExplainCode explanation="Installs the Hyva Theme compatibility module for the Marketplace RMA System storefront." />

After running Composer, proceed with the installation commands listed in [**Option A > 3. Run Commands**](#run-commands).

---

## Language Translation

The module provides full multilingual internationalization, supporting both LTR (Left-to-Right) and RTL (Right-to-Left) languages such as Arabic:

1. Navigate to the module's `i18n` directory: `app/code/Webkul/MpRmaSystem/i18n/`.
2. Open `en_US.csv`.
3. Create a copy and rename it to your target locale code (e.g., `de_DE.csv` for German or `ar_SA.csv` for Arabic).
4. Translate all phrases on the right side of the comma into your target language.
5. Save and upload the file to `app/code/Webkul/MpRmaSystem/i18n/` on your server.

![Rename CSV](/images/rma-rename-the-csv.webp)

6. Log in to your Magento Admin Panel, navigate to **Stores > Configuration > General > General > Locale Options**, and set your target locale.

![Locale Option](/images/rma-locale-option.webp)

7. Re-deploy static content and clear the Magento cache:

```bash
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="Deploys the static assets for the newly configured locale." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Clears cached translations and frontend blocks." />

::: tip Translation Note
Always ensure that the CSV structure remains intact (the English source phrase on the left). Only change the translated string on the right side of the comma.
:::
