# Frequently Asked Questions (FAQ)

Here are answers to common questions regarding the **Webkul Magento 2 Marketplace Adyen Payment Gateway** module.

---

### Q1: Does this module support 3D Secure 2 (3DS2)?
**Yes.** The frontend Drop-in component automatically handles native 3D Secure 2 authentication and challenge flows required by European PSD2 regulations.

---

### Q2: Can sellers configure their own Adyen account keys?
**No.** All payment processing and gateway routing pass through the store admin's primary Adyen Merchant Account. Sellers register as **Account Holders** to receive split payouts or bank transfers.

---

### Q3: How are seller commissions calculated during split payouts?
Commission rates configured in the **Webkul Marketplace** core module are applied during invoice capture. The calculated admin fee is retained in the primary account while seller net earnings are transferred to seller sub-accounts.

---

### Q4: Where can I get support for custom modifications?
For technical support or custom enhancements, submit a ticket via the [Webkul Support Portal](https://webkul.uvdesk.com/en/customer/create-ticket/).
