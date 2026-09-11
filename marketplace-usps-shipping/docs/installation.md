# Installation

You can install **Marketplace USPS Shipping for Magento 2** either via Composer (recommended for production environments) or by extracting the extension zip package directly into your Magento code directory.

---

## Method 1: Composer Installation (Recommended)

Installing via Composer automatically resolves dependencies, maintains version locking in `composer.lock`, and streamlines future updates.

### Step 1: Add the Repository (if applicable)
If you purchased the extension from the Webkul Store or have private repository access, ensure your root `composer.json` contains your Webkul package repository configuration.

### Step 2: Require the Package
Run the require command in your Magento root directory:

**For Community Edition (CE):**
```bash
composer require webkul/marketplace-usps-shipping:^5.0
```

**For Enterprise Edition (EE):**
```bash
composer require webkul/marketplace-usps-shipping:^4.0
```

**For Hyvä Theme Compatibility (Optional):**
```bash
# Community Edition Hyvä Compat
composer require webkul/module-marketplace-usps-shipping-hyva:^1.0

# Enterprise Edition Hyvä Compat
composer require webkul/module-marketplace-usps-shipping-hyva-ee:^1.0
```

---

## Method 2: Manual Zip Archive Installation

If you downloaded the zip package from the Webkul Store:

### Step 1: Extract the Package
Unzip the downloaded archive on your local machine. Inside, navigate to the `src/app` directory.

### Step 2: Upload to Magento Root
Upload the contents into your Magento 2 root directory so that the module files reside under:
```
app/code/Webkul/MpUSPSShipping/
```

If installing Hyvä compatibility manually, upload its files to:
```
app/code/Webkul/MpUSPSShippingHyva/
```

---

## Complete the Installation via Terminal

Once the files are in place, connect to your Magento server via SSH and execute the standard deployment commands from the Magento root directory:

### 1. Enable the Module and Apply Schema
```bash
php bin/magento module:enable Webkul_MpUSPSShipping
php bin/magento setup:upgrade
```

This step registers the module, updates the `marketplace_orders` table with the `shipment_label` mediumblob column, creates the `mpuspsshipping_token` table for caching OAuth tokens, and executes data patches to create customer EAV USPS attributes.

### 2. Compile Dependency Injection
```bash
php bin/magento setup:di:compile
```

### 3. Deploy Static Content
```bash
php bin/magento setup:static-content:deploy -f
```

### 4. Reindex and Flush Cache
```bash
php bin/magento indexer:reindex
php bin/magento cache:flush
```

---

## Verification

To verify that the module is successfully installed and active:

```bash
php bin/magento module:status Webkul_MpUSPSShipping Webkul_Marketplace Webkul_MarketplaceBaseShipping
```

Expected output:
```text
List of enabled modules:
Webkul_Marketplace
Webkul_MarketplaceBaseShipping
Webkul_MpUSPSShipping
```

::: tip Maintenance Mode
On production stores, always put Magento into maintenance mode before running `setup:upgrade`:
```bash
php bin/magento maintenance:enable
# Run upgrade and compile commands...
php bin/magento maintenance:disable
```
:::
