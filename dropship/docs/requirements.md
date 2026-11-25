# Requirements

Before installing the **Magento 2 Dropship Extension (Webkul_Dropship)**, ensure your server environment meets the prerequisites below.

---

## Supported Magento & Adobe Commerce Versions

| Platform / Edition | Supported Versions | Inventory Management |
| :--- | :--- | :--- |
| **Magento Open Source** | `2.4.x` - upto latest available version | Standard Stock & Multi-Source Inventory (MSI) |
| **Adobe Commerce (On-Premises)** | `2.4.x` - upto latest available version | Standard Stock & Multi-Source Inventory (MSI) |
| **Adobe Commerce Cloud** | Supported | Multi-Source Inventory (MSI) & Fastly CDN |

---

## PHP Version & Runtime Configuration

### Supported PHP Versions
* **PHP 8.x upto latest available version of php** (matches your installed Magento 2 version requirement).

### Recommended PHP Settings (`php.ini`)

| Directive | Recommended Value | Purpose & Store Owner Benefit |
| :--- | :--- | :--- |
| **`allow_url_fopen`** | `On` | **Mandatory.** Allows your store to download product photos and swatch images directly from AliExpress into your catalog. |
| **`memory_limit`** | `2G` or higher | Ensures smooth catalog imports when uploading large supplier spreadsheets with thousands of items. |
| **`max_execution_time`** | `1800` (or `0` for CLI) | Prevents timeouts when importing large supplier catalogs or extracting product image archives. |

To check your current PHP settings from the command line:

```bash
php -i | grep -E "allow_url_fopen|memory_limit|max_execution_time"
```
<ExplainCode explanation="Checks your active PHP configuration to confirm allow_url_fopen is On, memory_limit is at least 2G, and max_execution_time is sufficient." />

---

## Required PHP Extensions

The extension uses standard PHP extensions for network connectivity, image handling, and spreadsheet uploads:

```bash
php -m | grep -E "curl|gd|zip|xml|json|mbstring|intl"
```
<ExplainCode explanation="Verifies that common PHP extensions required for image processing, spreadsheets, and AliExpress connectivity are enabled on your server." />

| Extension | Why It Is Needed |
| :--- | :--- |
| **`ext-curl`** | Connects your store with AliExpress APIs and Google Maps for address geocoding. |
| **`ext-gd` / `ext-imagick`** | Generates catalog thumbnails and color swatch pictures for imported items. |
| **`ext-zip`** | Automatically unzips uploaded product image packages during bulk imports. |
| **`ext-xml`** | Reads XML supplier data feeds in the Product Profile upload manager. |
| **`ext-json`** | Handles variant data (colors, sizes) and shipping rule definitions. |
| **`ext-mbstring` & `ext-intl`** | Supports international product titles, special characters, and multi-language store views. |

---

## Composer Dependencies

The module requires two primary Composer packages for handling spreadsheets and AliExpress communication:

```bash
composer require phpoffice/phpspreadsheet
```
<ExplainCode explanation="Installs the PhpSpreadsheet library so your store can read and process CSV, XLS, and XLSX shipping rate files and product feeds." />

```bash
composer require webkul/aliexpress
```
<ExplainCode explanation="Installs the core Webkul AliExpress package for seamless product and order synchronization." />

---

## External Services & Setup

To use all features of the Dropship extension, set up the following three external services:

### 1. Google Cloud Console (Places API)
* **What it does:** Powers the automatic address search and latitude/longitude lookup when you add warehouse locations.
* **What you need:** A free Google Cloud account with the **Places API** and **Maps JavaScript API** enabled and an API key.

### 2. AliExpress Open Platform
* **What it does:** Allows your store to securely communicate with AliExpress for automated order placement and price updates.
* **What you need:** A free developer account on the **AliExpress Open Service Portal** with an approved Dropshipping application to get an **App Key (App ID)** and **App Secret**.

### 3. AliExpress Chrome Extension
* **What it does:** Lets you browse AliExpress in Google Chrome, click a single button to import any product with images and variations, and auto-fill customer shipping details during checkout.
* **What you need:** The Google Chrome web browser and an **HTTPS (SSL)** enabled store domain.

---

## Detailed Explanation: What Store Owners Need to Know

### 1. Why `allow_url_fopen` is Required
When you import products from AliExpress, the pictures are stored on AliExpress's image delivery network. Enabling `allow_url_fopen` in your server's PHP configuration allows Magento to fetch and save those photos directly onto your server, ensuring your store catalog has high-resolution product galleries and variation swatches.

To enable it:
1. Open your server's `php.ini` file.
2. Set:
   ```ini
   allow_url_fopen = On
   ```
3. Restart your web server or PHP service (e.g. `sudo systemctl restart php8.2-fpm`).

### 2. How Multi-Warehouse Inventory Works
Magento includes Multi-Source Inventory (MSI) to manage stock across multiple physical locations. The Webkul Dropship extension automatically coordinates with this system:
* Every time you register a warehouse (e.g. *West Coast Depot* or *European Hub*), the extension registers that facility in your store's inventory locations.
* You can assign individual stock quantities to each warehouse for any product.
* When a customer places an order, the system identifies the nearest warehouse with available stock to fulfill the order quickly and reduce shipping costs.

### 3. Why the Chrome Extension is Better than Traditional Scrapers
Many older dropshipping tools attempt to scrape supplier websites from the server, which frequently gets blocked by security firewalls or CAPTCHA challenges. 

Webkul's Chrome extension runs directly in your browser:
* You browse AliExpress naturally as an authenticated user.
* When you find a product you like, you can edit titles, prices, and variants right in the popup before importing.
* The data transfers securely to your Magento store without getting blocked or triggering IP bans.

::: tip Next Steps
Once your environment is ready, proceed to the [Installation Guide](/installation.html).
:::
