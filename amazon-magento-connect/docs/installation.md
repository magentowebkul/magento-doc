# Installation

Installing the **Webkul Amazon Connector for Magento 2** module is straightforward. Follow the steps below to successfully install and prepare the module.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module package directly from the Webkul Store.

### 1. Download Module
Log in to your **[Webkul Store](https://store.webkul.com/)** account, navigate to **My Account > My Purchased Products**, and download and extract the contents of the module zip folder on your local system.

### 2. Upload Folder
Once extracted, connect to your Magento 2 server via SSH/SFTP. Copy the codebase and upload it to the directory `/app/code/Webkul/AmazonMagentoConnect/` under the Magento 2 root directory.

![Move App Folder](/images/move-app-folder.png)

### 3. Install Dependencies & Run Commands
Run the following commands in sequence in the Magento 2 root directory to install the required external libraries and compile/deploy the module:

First, install the library dependencies via Composer:
```bash:no-line-numbers
composer require guzzlehttp/guzzle:"^7.0" spatie/array-to-xml:"^3.1" league/csv:"^9.5"
```
<ExplainCode explanation="This installs the necessary HTTP client, XML builder, and CSV parser packages on your server." />

Next, run the Magento compilation and setup updates:
```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="This registers the AmazonMagentoConnect module and applies database schema updates." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="This compiles dependency injection configurations and generates necessary interceptor classes." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="This deploys static frontend and admin files (JS, CSS, images) required by the control panel." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="This clears Magento's system cache, enabling the backend to load the new interface configurations." />

You can also clear the cache via the admin panel. Navigate to **System -> Tools -> Cache Management** and click the **Flush Magento Cache** button.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install with Composer

Use this method if the module package is hosted in your private Webkul Composer repository.

Run the Composer require command to install the package:
```bash:no-line-numbers
composer require webkul/amazon-magento-connect
```
<ExplainCode explanation="This fetches the Webkul Amazon Magento Connect package along with its PHP library dependencies." />

After running the Composer command, execute the installation commands:
```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="This registers the AmazonMagentoConnect module and applies database schema updates." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="This compiles dependency injection configurations and generates necessary interceptor classes." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="This deploys static frontend and admin files (JS, CSS, images) required by the control panel." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="This clears Magento's system cache, enabling the backend to load the new interface configurations." />

---

## Language Translation

The module supports multiple languages, including Right-to-Left (RTL) and Left-to-Right (LTR) layouts. To translate the module into another language:

1. Navigate to the module's i18n directory: `app/code/Webkul/AmazonMagentoConnect/i18n`.

![Translation](/images/translation-first.png)

2. Open the `en_US.csv` file.
3. Save or rename the CSV file using your target locale name (e.g., `de_DE.csv` for German, `fr_FR.csv` for French).

![Translation](/images/translation-second.png)

4. Translate all phrases on the right side of the commas into your target language. Leave the English key on the left side untouched.

![Translation](/images/translation-third.png)

5. Save the file and upload it to `app/code/Webkul/AmazonMagentoConnect/i18n`.
6. Run static content deployment and cache flush commands again.
