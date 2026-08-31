# Requirements

Before installing the **Magento 2 Multi Vendor Adyen Payment** module, make sure your shop meets the following simple requirements.

## Required Store Setup

* **Magento Setup**: A working installation of Magento 2 / Adobe Commerce.
* **PHP Compatibility**: A PHP version that is compatible with your active Magento 2 setup.
* **Base Module Dependency**: An active installation of the `Webkul_Base` module, which is required for centralized license verification.
* **Marketplace Module Dependency**: An active installation of the `Webkul_Marketplace` module, which is required for multi-vendor seller management and payout processing.
* **Cron & Message Queue**: An active Magento cron service configured to handle automated payouts, webhook notifications, and log synchronization.

## Module Setup Checklist

* **Admin Panel Access**: Login details (username and password) to your Magento Admin backend.
* **Server Access**: You (or your web developer) must have SSH/terminal access to your website's server to run installation commands.
* **Cache Management Permissions**: The ability to clear/flush the website cache (either from the Admin panel or via the command line).
* **Adyen Account Credentials**: Active API Key, Client Key, Merchant Account Name, and Live URL Prefix from your Adyen Customer Area account.
* **Adyen Webhook Setup**: Configured standard notification webhook URL and HMAC SHA-256 Signature Key in Adyen Customer Area.
* **HTTPS & SSL Certificate**: A secure HTTPS domain with a valid SSL certificate for processing live payments and receiving secure Adyen webhook notifications.

## Next Steps

* Proceed to the [Installation Guide](/installation) to begin copying or downloading the module files.
