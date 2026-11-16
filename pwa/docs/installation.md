# Installation

Installing the **Magento 2 Progressive Web Application (PWA)** extension is straightforward. Follow the instructions below to upload files, install third-party dependencies, compile assets, and start the notification queue consumer.

---

## Option A — Install from Zip Package

Use this method if you obtained the extension archive from the **[Webkul Store](https://store.webkul.com/magento2-progressive-web-app.html)**.

### 1. Extract Package
Extract the downloaded zip archive on your local machine.

### 2. Upload Code Directory
Connect to your server via SSH/SFTP. Move the extracted `app` directory into your Magento 2 root directory. The files must reside in:

```plaintext
app/code/Webkul/Pwa/
```

If you are also installing Hyvä Theme compatibility, upload its files to:

```plaintext
app/code/Webkul/PwaHyva/
```

![Move App Folder](/images/move-app-folder.webp)

---

### 3. Install Required Helper Libraries
The module uses two helper packages to connect with Google Firebase and deliver push notifications safely to shopper devices. Run the following commands in your Magento root directory:

```bash:no-line-numbers
composer require minishlink/web-push
```
<ExplainCode explanation="Installs the helper library that safely packages and sends push notifications from your server to customer devices." />

```bash:no-line-numbers
composer require google/auth
```
<ExplainCode explanation="Installs Google's official login helper so your store can connect securely to Firebase to send notifications." />

---

### 4. Run Store Setup Commands
Run these standard Magento commands one by one to set up the module:

```bash:no-line-numbers
php bin/magento setup:upgrade
```
<ExplainCode explanation="Updates your store database with the required PWA tables and activates the extension." />

```bash:no-line-numbers
php bin/magento setup:di:compile
```
<ExplainCode explanation="Compiles your store code to make sure the new extension runs smoothly and at top speed." />

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Publishes your store's design, icons, and buttons so the PWA looks and works correctly on all devices." />

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Refreshes your store product and category data so everything is up to date immediately." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears your store cache so your new PWA settings and features take effect right away." />

You can also flush cache via the Magento Admin Panel under **System > Tools > Cache Management**:

![Flush Cache](/images/flush-cache.webp)

---

### 5. Start Background Notification Sender
Push notifications are sent in the background so they never slow down your admin panel or your shoppers' browsing experience.

Start this background helper:

```bash:no-line-numbers
php bin/magento queue:consumers:start webkul.pwa.notification_send &
```
<ExplainCode explanation="Starts a background helper that automatically sends out scheduled push notifications to your shoppers." />

---

## Option B — Install with Composer

If you have configured access to the Webkul Composer repository:

```bash:no-line-numbers
composer require webkul/progressive-web-application
```
<ExplainCode explanation="Downloads and installs the Webkul Progressive Web Application extension to your store." />

For Hyvä storefronts, also require the Hyvä compatibility package:

```bash:no-line-numbers
composer require webkul/progressive-web-application-hyva
```
<ExplainCode explanation="Downloads and installs the Hyvä theme compatibility package for the PWA extension." />

After Composer completes, run the commands outlined in **Step 4** and **Step 5**.

---

## Language Translation

The module supports multi-lingual stores and Right-To-Left (RTL) writing directions:

1. Navigate to the module's translation directory: `app/code/Webkul/Pwa/i18n/`.

![Translation First Step](/images/translation-first.webp)

2. Open `en_US.csv` in a text editor or spreadsheet tool.
3. Save or rename the CSV file matching your target language locale (e.g., `de_DE.csv` for German, `fr_FR.csv` for French, `es_ES.csv` for Spanish).

![Rename CSV](/images/translation-second.webp)

4. Translate the phrases on the right side of the comma into the target language:

```csv
"Add to Home Screen","Zum Startbildschirm hinzufügen"
"Allow Notifications","Benachrichtigungen erlauben"
"Push Notification","Push-Benachrichtigung"
```

![Translation Editing](/images/translation-third.webp)

5. Upload the translated file back to `app/code/Webkul/Pwa/i18n/`.
6. Select your storefront locale under **Stores > Configuration > General > General > Locale Options**.

![Locale Option](/images/rvp-locale-option.webp)

7. Refresh the store design files for the new language and clear the cache:

```bash:no-line-numbers
php bin/magento setup:static-content:deploy -f
```
<ExplainCode explanation="Publishes the new translated text and buttons for your selected language." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Clears your store cache so your new translated words appear on your website right away." />
