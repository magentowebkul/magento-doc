# Requirements

Before installing the **Magento 2 Shopping List** module, verify that your Magento environment meets the following requirements.

## Required Store Setup

* **Magento Setup**: A working installation of Magento 2 / Adobe Commerce (supports versions 2.0.x through 2.4.x / up to latest version).
* **PHP Compatibility**: A PHP version that is compatible with your active Magento 2 setup.
* **Base Module Dependency**: An active installation of the `Webkul_Base` module, which is required for centralized license verification and core helper functionality.
* **Customer Authentication**: Standard Magento customer account system enabled for storefront authentication.
* **Frontend Theme Compatibility**: Supports standard Magento Luma, custom themes, and **Hyvä Themes** (Alpine.js & Tailwind CSS via `Webkul_ShoppingListHyva`). See [Hyvä Theme Compatibility](./features/hyva-theme.html) for detailed setup.

## Module Setup Checklist

* **Admin Panel Access**: System Administrator access to your Magento 2 backend.
* **Server SSH Access**: Command-line terminal access to run `bin/magento` CLI commands.
* **Cache Management Permissions**: Rights to flush and clean Magento cache types.
* **Database Privileges**: Permissions to execute database updates via Magento declarative schema (`db_schema.xml`).

## Next Steps

* Proceed to the [Installation Guide](./installation.html) to copy module files and run setup CLI commands.
