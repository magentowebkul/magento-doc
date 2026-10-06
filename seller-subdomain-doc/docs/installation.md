# Installation

This guide walks you through installing the **Webkul Magento 2 Marketplace Seller Subdomain** extension using manual zip extraction or Composer, followed by the essential web server and DNS wildcard configurations.

---

## Option A — Install from Zip Package

Use this method if you downloaded the module archive directly from the Webkul Store.

**1. Download the Module Archive**

Log in to your [Webkul Store](https://store.webkul.com/) account, navigate to **My Account > My Purchased Products**, and download the extension archive for `Webkul_SellerSubDomain`.

**2. Extract & Upload Files**

Extract the zip archive on your computer. Inside the extracted directory, locate the `src/app` folder. Using SSH, SFTP, or your hosting control panel, copy the contents into your Magento 2 root directory so that the module files reside under:
`app/code/Webkul/SellerSubDomain/`

![Move App Folder](/images/move-app-folder.png)

<span id="run-commands" style="scroll-margin-top: calc(var(--navbar-height, 3.6rem) + 1.5rem); display: inline-block;">**3. Run Installation Commands**</span>

Open your terminal, navigate to your Magento 2 root directory, and execute the following commands sequentially:

```bash
php bin/magento setup:upgrade
```
<ExplainCode explanation="Registers Webkul_SellerSubDomain, updates schema declarations, and creates the marketplace_vendor_subdomain table." />

```bash
php bin/magento setup:di:compile
```
<ExplainCode explanation="Generates dependency injection interceptors, factory classes, and compiled code repositories." />

```bash
php bin/magento setup:static-content:deploy
```
<ExplainCode explanation="Deploys storefront CSS styles, templates, and JavaScript components across installed themes and locales." />

```bash
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes all core catalog and marketplace indices to ensure seller product lookups are synchronized." />

```bash
php bin/magento cache:flush
```
<ExplainCode explanation="Clears all Magento system configuration, full-page, and layout caches." />

You can also flush caches directly from the Magento Admin Panel by navigating to **System > Tools > Cache Management** and clicking **Flush Magento Cache**.

![Flush Cache](/images/flush-cache.webp)

---

## Option B — Install with Composer

Use this method if your organization manages dependencies via Composer repositories.

1. Add your Webkul Composer repository credentials to your server environment.
2. Run the Composer command to install the module:

```bash
composer require webkul/vendor-sub-domain
```
<ExplainCode explanation="Downloads and installs the Webkul Marketplace Seller Subdomain package into the vendor directory." />

If your store uses the **Hyvä Theme**, also install the official Hyvä compatibility companion module:

```bash
composer require webkul/vendor-sub-domain-hyva
```
<ExplainCode explanation="Installs the Hyva compatibility companion package providing Alpine.js templates for seller subdomains." />

3. Execute the standard deployment commands listed in [**Option A > 3. Run Installation Commands**](#run-commands).

---

## Web Server & DNS Configuration

To enable Magento 2 to dynamically serve multiple seller subdomains under a single codebase, you must set up **Wildcard DNS** and configure your web server (Apache or Nginx).

### 1. Wildcard DNS Entry

In your domain's DNS manager (e.g., Cloudflare, Route 53, cPanel DNS, GoDaddy):
- Add an **A Record** pointing your base domain to your server's public IP address:
  - **Host**: `@` (or `example.com`) &rarr; **Points to**: `Your_Server_IP`
- Add a **Wildcard A Record** to capture all dynamic seller subdomains:
  - **Host**: `*` (or `*.example.com`) &rarr; **Points to**: `Your_Server_IP`

### 2. Apache Web Server Configuration

If you are running Apache, edit your VirtualHost configuration file (e.g., `/etc/apache2/sites-available/magento.conf` or `000-default.conf`):

```apache
<VirtualHost *:80>
    ServerName example.com
    ServerAlias *.example.com
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/pub

    <Directory /var/www/html/pub>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/magento_error.log
    CustomLog ${APACHE_LOG_DIR}/magento_access.log combined
</VirtualHost>
```

Add `ServerAlias *.example.com` beneath your primary `ServerName`. For HTTPS, ensure the same `ServerAlias` is included within the `<VirtualHost *:443>` block using your wildcard SSL certificate.

### 3. Nginx Web Server Configuration

If you are running Nginx, update your server block definition (e.g., `/etc/nginx/sites-available/magento.conf`):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com *.example.com;

    set $MAGE_ROOT /var/www/html;
    include /var/www/html/nginx.conf.sample;
}
```

Replace the placeholder `server_name` with `yourdomain.com *.yourdomain.com;` so that Nginx routes all subdomain traffic directly to the Magento application entry point.

Reload your web server after updating configuration:

```bash
sudo systemctl reload nginx   # For Nginx
sudo systemctl reload apache2 # For Apache
```
<ExplainCode explanation="Restarts the web server to apply the wildcard DNS routing changes." />

---

## Language & Locale Translation

The extension supports internationalization and multiple storefront locales:

### Step 1: Change Storefront Locale

In your Magento Admin Panel, navigate to **Stores > Configuration > General > General > Locale Options**. Select your desired language from the **Locale** dropdown and save the configuration.

![Locale Options](/images/locale-options.webp)

### Step 2: Edit Translation CSV Dictionary

1. Navigate to the module's translation folder: `app/code/Webkul/SellerSubDomain/i18n/`.

![Module i18n Folder](/images/module-i18n-folder.png)

2. Open `en_US.csv` in a text editor.
3. Replace the translated text on the right side of the comma while keeping the original English string intact on the left.

![Translation File](/images/translation-file.png)

4. Save the file with your target locale code (e.g., `de_DE.csv`, `fr_FR.csv`, or `es_ES.csv`) and upload it to `app/code/Webkul/SellerSubDomain/i18n/`.

![Upload Translated File](/images/upload-translated-file.png)

5. Re-deploy static content and clear the Magento cache:

```bash
php bin/magento setup:static-content:deploy <locale_code>
php bin/magento cache:flush
```
<ExplainCode explanation="Deploys localized frontend assets for the newly configured language." />
