# Installation

This guide walks you through installing the **Webkul Marketplace Seller Invitation for Magento 2** extension on your store.

---

## Installation Methods

You can install the module using either **Composer** (recommended) or by **Manual Archive Extraction**.

---

### Method 1: Composer Installation (Recommended)

1. Connect to your Magento web server via SSH or terminal as the Magento file-system owner (e.g., `www-data` or your server deployment user).
2. Navigate to your Magento root directory:
   ```bash
   cd /path/to/magento/root
   ```
3. Require the extension package via Composer:
   ```bash
   composer require webkul/module-sellerinvitation
   ```
4. Proceed to [Post-Installation Commands](#post-installation-commands).

---

### Method 2: Manual Archive Extraction

1. Download the extension ZIP archive from your Webkul account purchase downloads.
2. Unpack the ZIP archive on your local workstation.
3. In your Magento installation directory, locate or create the following directory structure:
   ```text
   <magento_root>/app/code/Webkul/SellerInvitation
   ```
4. Copy the unpacked module files and directories into `<magento_root>/app/code/Webkul/SellerInvitation/` so that `registration.php` and `composer.json` reside directly at:
   ```text
   <magento_root>/app/code/Webkul/SellerInvitation/registration.php
   <magento_root>/app/code/Webkul/SellerInvitation/composer.json
   ```
5. Proceed to [Post-Installation Commands](#post-installation-commands).

---

## Post-Installation Commands

Run the following standard Magento CLI commands from your Magento root directory:

### 1. Enable Module & Apply Database Schema

```bash
php bin/magento setup:upgrade
```

This registers `Webkul_SellerInvitation` in `app/etc/config.php` and executes declarative schema updates (`etc/db_schema.xml`) to create the `wk_mp_invitation` database table.

### 2. Compile Dependency Injection

```bash
php bin/magento setup:di:compile
```

This compiles dependency injection configurations, generates intercepted repositories, factories, and proxies.

### 3. Deploy Static View Files

```bash
php bin/magento setup:static-content:deploy -f
```

*(In developer mode, static files deploy on demand; for production mode, run deploy for all active store locales, e.g., `en_US`).*

### 4. Flush Magento Cache

```bash
php bin/magento cache:flush
```

---

## File Permission Verification

Ensure the Magento file system owner owns the newly created files and directories, and permissions follow standard Magento security practices:

```bash
find app/code/Webkul/SellerInvitation -type d -exec chmod 755 {} \;
find app/code/Webkul/SellerInvitation -type f -exec chmod 644 {} \;
```

---

## Verifying Module Status via CLI

Verify that the module is enabled and recognized by Magento:

```bash
php bin/magento module:status Webkul_SellerInvitation
```

Expected output:
```text
Module is enabled
```

::: tip Next Step
Proceed to [Activation & Setup](/activation) to configure your license and enable the module in the Magento Admin Panel.
:::
