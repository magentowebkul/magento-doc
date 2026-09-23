# Module Installation

This guide walks you through installing the **Webkul Magento 2 Elasticsearch** extension on your store server using either manual extraction or Composer installation.

---

## Option A — Install from Zip Package
Use this method if you downloaded the module archive directly from the Webkul Store.

**1. Download Module**

Log in to your Webkul Store account, navigate to **My Account > My Purchased Products**, and download the `Webkul_ElasticSearch` zip archive to your local computer.

**2. Upload Folder**

Extract the zip archive. Inside you will find the `src/app` directory. Connect to your server using SSH or SFTP. Copy the contents and upload them to your Magento 2 root directory. The files must reside under:
`app/code/Webkul/ElasticSearch/`

![Move App Folder](/images/installation/01.webp)

<span id="run-commands" style="scroll-margin-top: calc(var(--navbar-height, 3.6rem) + 1.5rem); display: inline-block;">**3. Run Commands**</span>

Execute the following commands sequentially in your Magento 2 root directory:

```bash
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_ElasticSearch in app/etc/config.php and creates the wk_elastic_index database table." />

```bash
php bin/magento setup:di:compile
```
<ExplainCode explanation="Generates dependency injection interceptors, repositories, and search adapter factories." />

```bash
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys storefront CSS, JS autocomplete scripts, and admin UI component assets." />

```bash
php bin/magento elastic:index all -a reindex
```
<ExplainCode explanation="Populates the Elasticsearch cluster with initial indices for Products, Categories, and CMS Pages." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes configuration, layout, and block caches to apply the newly registered search engine." />

You can also clear the cache from the Magento Admin Panel. Navigate to **System > Tools > Cache Management** and click the **Flush Magento Cache** button.

![Flush Cache](/images/installation/02.webp)

---

## Option B — Install with Composer
Use this method if the module package is available in your Composer repository.

You need to add the provided access keys during purchase. After that, run the Composer require command to install the package:

```bash
composer require webkul/elastic-search
```
<ExplainCode explanation="Downloads and installs the Webkul Elasticsearch core extension into the vendor directory via Composer." />

If your store uses the **Hyvä Theme**, also install the Hyvä compatibility companion module:

```bash
composer require webkul/elastic-search-hyva
```
<ExplainCode explanation="Installs the Hyva Theme compatibility module." />

After running Composer, proceed with the installation commands listed in [**Option A > 3. Run Commands**](#run-commands).

---

## Language Translation

The module provides full multilingual internationalization, supporting both LTR (Left-to-Right) and RTL (Right-to-Left) languages such as Arabic:

1. Navigate to the module's `i18n` directory: `app/code/Webkul/ElasticSearch/i18n/`.
2. Open `en_US.csv`.
3. Create a copy and rename it to your target locale code (e.g., `en_SA.csv` for Arabic or `de_DE.csv` for German).
4. Translate all phrases on the right side of the comma into your target language.
5. Save and upload the file to `app/code/Webkul/ElasticSearch/i18n/` on your server.

![Rename CSV](/images/installation/03.png)

6. Log in to your Magento Admin Panel, navigate to **Stores > Configuration > General > General > Locale Options**, and set your target locale.

![Locale Option](/images/installation/04.webp)

7. Re-deploy static content and clear the Magento cache:

```bash
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys the static assets for the newly configured locale." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Clears cached translations and frontend blocks." />
