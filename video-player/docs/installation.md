# Installation

Installing the **Product Video for Magento 2 (Webkul_VideoPlayer)** module is quick and straightforward. Follow the instructions below to upload, compile, and configure the module on your Adobe Commerce / Magento 2 store.

---

## Option A — Install from Zip Package

Use this method if you obtained the extension archive directly from the **[Webkul Store](https://store.webkul.com/)**.

### 1. Extract Archive
Log in to your Webkul account, navigate to **My Account > My Purchased Products**, and download the extension package. Extract the `.zip` archive on your local computer.

### 2. Upload Code Directory
Connect to your web server using SSH/SFTP. Locate the extracted `app` directory and upload it into your Magento 2 root directory. The module files must reside under:

```bash:no-line-numbers
mkdir -p app/code/Webkul/VideoPlayer
```
<ExplainCode explanation="Creates the target directory structure inside Magento's app/code directory for the Webkul Video Player module files." />

![Upload Folder](/images/upload_folder.webp)

If you are also installing an optional Hyvä compatibility package, upload its contents to:

```bash:no-line-numbers
mkdir -p app/code/Webkul/VideoPlayerHyva
```
<ExplainCode explanation="Creates the directory path for the Webkul Video Player Hyvä Theme compatibility package." />

### 3. Run Deployment Commands
Execute the following CLI commands in order from your Magento 2 root directory:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers the Webkul_VideoPlayer module, runs database schema updates, and establishes module dependencies." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles dependency injection definitions, plugins, proxies, and factory classes." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Deploys static view assets (CSS, JS, templates) for the storefront and Magento Admin panel." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes catalog data and media indexes to guarantee immediate visibility on product pages." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento application cache types so updated layouts and configurations take effect." />

You can also clear the cache from the Admin panel by navigating to **System > Tools > Cache Management** and clicking the **Flush Magento Cache** button.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install via Composer

If you manage your project dependencies using Composer:

```bash:no-line-numbers
composer require webkul/video-player
```
<ExplainCode explanation="Downloads the Webkul Video Player package and registers it within your composer.json file." />

If you are using Hyvä Themes, also install the Hyvä compatibility package:

```bash:no-line-numbers
composer require webkul/magento2-videoplayer-hyva
```
<ExplainCode explanation="Fetches the Webkul Video Player Hyvä compatibility package via Composer." />

After Composer finishes downloading the packages, run the standard deployment commands listed in **Option A > Step 3**.

---

## Language Translation

The extension supports multi-language stores, including RTL (Right-to-Left) and LTR (Left-to-Right) display formats. To localize the extension into another language (e.g., German - `de_DE`):

1. Navigate to the module's localization directory on your server:

```bash:no-line-numbers
cd app/code/Webkul/VideoPlayer/i18n/
```
<ExplainCode explanation="Navigates to the module's internationalization (i18n) directory where translation CSV files are stored." />

2. Open the `en_US.csv` file in a text editor or spreadsheet application.

   ![Translation CSV File](/images/translation_csv.webp)

3. Keep the original English string on the left side of the comma `,` and replace the text on the right side with your translated phrase.

   ![Editing Translation CSV](/images/translation_edit.webp)

4. Save the modified file matching your target locale code, such as `de_DE.csv`.

   ![Save Locale CSV](/images/translation_locale.webp)

5. Upload or copy `de_DE.csv` into `app/code/Webkul/VideoPlayer/i18n/`:

```bash:no-line-numbers
cp en_US.csv de_DE.csv
```
<ExplainCode explanation="Duplicates the base English translation dictionary to start adding translated phrases for the German locale." />

6. In your Magento Admin panel, navigate to **Stores > Configuration > General > General > Locale Options** and select your desired locale for the store view.

   ![Admin Locale Options](/images/rvp-locale-option.webp)

7. Deploy static assets and flush the cache:

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f de_DE
```
<ExplainCode explanation="Generates and deploys static view assets specifically localized for the German (de_DE) storefront view." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento cache storage types so the newly translated CSV strings take effect on the frontend." />
