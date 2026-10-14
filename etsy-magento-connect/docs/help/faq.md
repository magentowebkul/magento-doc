# Frequently Asked Questions

Answers to common questions regarding the **Webkul Marketplace Etsy Connector for Magento 2**.

---

### Can multiple marketplace sellers connect their individual Etsy shops?
**Yes.** Each approved marketplace seller can connect and manage their own distinct Etsy shop through their vendor dashboard. Products, categories, and orders are isolated per seller account.

---

### What is the Global Etsy App feature?
The **Global Etsy App** feature allows the store administrator to enter a central set of Etsy Developer API credentials (**Keystring** and **Shared Secret**) in System Configuration.

When enabled (`use_global_app = Yes`), marketplace sellers do **not** need to register as Etsy developers or create their own API applications. They simply enter their Etsy shop name and authorize the connection via Etsy's standard OAuth consent screen.

---

### Which Etsy API specification is supported?
The connector supports the modern **Etsy Open API v3** specification with **OAuth 2.0 PKCE** authentication. Legacy API v1 and v2 protocols are fully superseded.

---

### Which Magento product types can be exported to Etsy?
The module supports:
- **Simple Products**: Exported as standalone Etsy listings with title, description, price, SKU, quantity, and images.
- **Configurable Products**: Exported with full **Product Variations**. Child simple products map to variation options (e.g., Size, Color) with specific pricing and inventory counts.

---

### Does importing an order from Etsy decrease stock in Magento?
**Yes.** When an order is imported from Etsy, a native Magento sales order is placed. Magento's inventory engine automatically decrements product stock to maintain inventory parity and avoid overselling.

---

### Does exporting products to Etsy charge listing fees?
Etsy charges its standard listing fee (typically $0.20 USD for 4 months) whenever an **Active** listing is published.

If you export items with **Export Products To Etsy As** set to **Draft Product**, listings are created in your Etsy shop as drafts, allowing you to review them before incurring listing fees.

---

### How does the extension handle Etsy orders where the customer email is masked?
Etsy's privacy policy masks customer email addresses for certain guest transactions. Starting in version **5.0.1**, the connector automatically generates a deterministic fallback customer email:

```text
buyer_{etsy_receipt_id}@etsy-customer.com
```

This prevents Magento customer creation exceptions and allows orders to complete seamlessly.

---

### How often are orders synchronized automatically?
The `mpetsyconnect_ordersync` cron job executes every **5 minutes** by default, retrieving newly placed or updated orders from Etsy. You can also run manual order imports on-demand via the Order Profiler.

---

### How are shipping charges and payment methods recorded in Magento?
Because payment and shipping were finalized on Etsy:
- **Shipping**: Applied using the built-in `mpetsyconnectship` (*Marketplace Etsy Connector Shipping*) carrier, populated with the exact shipping amount charged to the buyer on Etsy.
- **Payment**: Recorded using the built-in `mpetsypayment` (*Payment From Marketplace Etsy*) offline payment method, preventing duplicate payment charges.

---

### What happens when an OAuth access token expires?
Etsy access tokens expire after 1 hour. The connector includes an automated daily cron (`mpetsyconnect_tokenrefresh`) and on-demand token refresh logic. As long as your Magento cron is active, tokens renew automatically without requiring manual seller re-authentication.

---

### Can I revise listings on Etsy when updating Magento products?
**Yes.** When **Product Revision On Etsy** is enabled in the account settings, the `CatalogProductSaveAfter` observer detects edits to mapped Magento products and automatically pushes updated prices, quantities, and descriptions to Etsy.

::: tip Still Have Questions?
Contact our team or open a support ticket at [Webkul UVdesk](https://webkul.uvdesk.com/).
:::
