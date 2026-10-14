# Installation

This guide walks you through installing the **Webkul Marketplace Etsy Connector for Magento 2** using manual archive extraction.

---

## Manual Installation (Archive Extraction)

If you received the extension as a ZIP archive from the Webkul Store:

### Step 1: Unzip and Place Files

1. Unzip the downloaded extension archive on your local machine.
2. Ensure the directory structure exists under your Magento root:
   ```text
   <Magento-Root>/app/code/Webkul/MpEtsyMagentoConnect/
   ```
3. Copy all extracted extension files into:
   ```text
   <Magento-Root>/app/code/Webkul/MpEtsyMagentoConnect/
   ```

Verify that `registration.php` and `etc/module.xml` reside directly under `app/code/Webkul/MpEtsyMagentoConnect/`.

### Step 2: Ensure Dependent Modules are Present

The Etsy Connector requires both **Webkul Base** and **Webkul Marketplace**:
- `app/code/Webkul/Base/`
- `app/code/Webkul/Marketplace/`

Ensure both modules are present in `app/code/Webkul/` and enabled.

### Step 3: Run Magento Terminal Commands

From your Magento 2 root directory, run:

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
```

### Step 4: Flush Cache and Reindex

```bash
php bin/magento cache:flush
php bin/magento indexer:reindex
```

---

## Setting Proper File Permissions

After running deployment commands, ensure the Magento file-system owner owns all generated files:

```bash
# Set ownership to web server user (example: www-data or appuser)
chown -R www-data:www-data <Magento-Root>

# Set standard Magento directory and file permissions
find var generated pub/static pub/media -type d -exec chmod 775 {} +
find var generated pub/static pub/media -type f -exec chmod 664 {} +
chmod u+x bin/magento
```

---

## Verify Installation

Check that Magento acknowledges the module:

```bash
php bin/magento module:status Webkul_MpEtsyMagentoConnect
```

The output should confirm:

```text
Module is enabled:
Webkul_MpEtsyMagentoConnect
```

::: tip Next Step
Proceed to [Activate & Connect](/activation) to register your license key in the **Module License Tracker**, configure your Etsy Developer App, and enable the connector.
:::
