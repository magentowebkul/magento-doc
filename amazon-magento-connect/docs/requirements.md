# Requirements

Before installing the **Webkul Amazon Connector for Magento 2** extension, please ensure your environment and Magento instance meet the following prerequisites.

---

## Required Store Setup

* **Magento Instance:** A working installation of Magento 2 / Adobe Commerce (supports versions 2.0.x through 2.4.x).
* **PHP Compatibility:** A PHP version that is compatible with your active Magento 2 setup.

---

## Required Composer Packages

The extension relies on specific PHP dependencies to handle HTTP requests, parse feed data, and build XML/CSV packages for Amazon. Ensure that these packages are installed:

- **Guzzle HTTP Client:** `guzzlehttp/guzzle` (`^6.2` or `^7.0`) for making requests to the Amazon SP-API.
- **Spatie Array to XML:** `spatie/array-to-xml` (`^2.10` or `^3.1`) for converting product data arrays into Amazon-compatible XML feeds.
- **League CSV Parser:** `league/csv` (`^9.5`) for parsing and managing inventory and product report data.

These packages will be automatically installed if you install the extension via Composer.

---

## Amazon Seller Developer Account

To establish a connection, you must have an active **Amazon Seller Central** account and developer credentials for the **Amazon Selling Partner API (SP-API)**. You will need:

* **AWS Access Key ID & AWS Secret Key**
* **LWA (Login with Amazon) Client ID & LWA Client Secret**
* **AWS IAM ARN (Amazon Resource Name) for Role Delegation**
* **AWS User Credentials (if applicable for SP-API authentication)**

---

::: tip Backup Recommendation
Always back up your store (database and files) before installing any new extension. We recommend deploying and testing in a staging environment first.
:::
