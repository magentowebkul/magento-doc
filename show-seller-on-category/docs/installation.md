# Installation

Installing the Magento 2 Marketplace Show Seller on Category module is a straightforward process. Please follow the steps below to successfully install and prepare the module for use.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module package directly from the Webkul Store.

## 1. Download Module
Log in to your **[Webkul Store](https://store.webkul.com/)** account, navigate to **My Account > My Purchased Products**, and then download and extract the contents of the module zip folder on your local system.

## 2. Upload Folder
Once the module zip is extracted, navigate to `src/app`. Connect to your server via SSH/SFTP. Copy the `app` folder and upload it into your Magento 2 root directory on the server. The files should reside under `app/code/Webkul/MpShowSellerOnCategory/`.

![Move App Folder](/images/move-app-folder.webp)

## 3. Run Commands
Run the following commands in sequence in the Magento 2 root directory to compile, deploy, and clear the cache:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="This command enables the Marketplace Show Seller on Category module and applies necessary database schema updates." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="This compiles all dependency injection definitions and generates necessary proxy/interceptor classes." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="This deploys static view files (CSS, JS, images) required by the module for the frontend and Admin panel." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes all data to ensure new configurations and database entries are immediately reflected." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento caches to ensure the new module configurations and files are loaded." />

You can also use the admin panel to clear the cache. Navigate to **System -> Tools -> Cache Management** and click the **Flush Magento Cache** button.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install with Composer

Use this method if the module package is available in your Composer repository.

You need to add the provided access keys during purchase. After that, run the Composer require command to install the package:

```bash:no-line-numbers
composer require webkul/marketplace-show-seller-on-category
```
<ExplainCode explanation="This command pulls the Webkul Marketplace Show Seller on Category package from your configured Composer repository." />

After that, you need to run the installation commands provided in **[Option A > 3. Run Commands](#_3-run-commands)**.

---

## Language Translation

The module supports multiple languages, including both RTL (Right-to-Left) and LTR (Left-to-Right) layouts. To translate the module into another language, such as German:

1. Navigate to the module's i18n directory: `app/code/Webkul/MpShowSellerOnCategory/i18n` (or the equivalent path in your installation).

![Translation](/images/translation-first.png)

2. Edit the `en_US.csv` file.
3. Rename the CSV file to match your target locale, for example, `de_DE.csv` for German.

![Translation](/images/translation-second.png)

4. Translate all content on the right side of the comma into your target language.

![Translation](/images/translation-third.png)

5. Save the file.
6. Upload the translated CSV file to the `app/code/Webkul/MpShowSellerOnCategory/i18n` path on your server.
7. Navigate to your Adobe Commerce Cloud admin panel, go to **Store -> Configuration -> General -> Locale Options** and select your desired locale.
8. Run the static content deployment and cache flush commands again.

::: tip Translation Note
Always ensure that the structure of the CSV (the English key on the left) remains unmodified. Only change the translated string on the right side.
:::
