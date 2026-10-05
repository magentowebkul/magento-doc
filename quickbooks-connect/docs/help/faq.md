# Frequently Asked Questions

---

### Q1: Is the Magento 2 QuickBooks Connect module compatible with Magento 2.4.x and PHP 8.x?
**Yes.** The module supports Adobe Commerce / Magento 2.0.x through 2.4.x and PHP versions up to 8.3.

---

### Q2: Does this module connect with QuickBooks Desktop or QuickBooks Online?
This extension is specifically designed for **QuickBooks Online (QBO)** using Intuit's official REST API V3 and OAuth 2.0 authentication protocol.

---

### Q3: Can orders be synchronized automatically as soon as customers place them?
**Yes.** In module configuration, set **Sales Receipt Create On** to `Order Place`. Every new order placed on your storefront will automatically create a Sales Receipt in QuickBooks Online.

---

### Q4: How does the extension handle guest checkout orders?
Guest orders are fully supported. The extension exports the guest customer's name, email address, billing address, and shipping details to QuickBooks Online automatically.

---

### Q5: How are bundle and downloadable products exported?
* **Downloadable Products**: Created as **Non-Inventory** items in QuickBooks Online.
* **Bundle Products**: The extension expands the bundle and exports each constituent product as an individual line item on the QuickBooks Sales Receipt.

---

### Q6: Can I export historical orders placed before installing the module?
**Yes.** You can manually batch-export past store orders by navigating to **Sales > Orders** (select orders -> Action -> **Export on QB**) or **Connect > Map Sales Receipt** (click **Export Orders as Sales Receipt**).

---

### Q7: Does the module support QuickBooks Class Tracking?
**Yes.** Enable **Class Tracking** in module configuration and select your desired tracking class. You can assign classes to the entire transaction header or individually per item line.

---

### Q8: How often do I need to re-authorize the OAuth 2.0 connection?
You only need to click **Connect** once. The module's built-in cron job (`qb_access_token_update`) runs every 30 minutes to validate and refresh OAuth 2.0 access tokens automatically.
