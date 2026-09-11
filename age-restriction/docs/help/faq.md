# Frequently Asked Questions (FAQ)

Find quick answers to common questions about the **Webkul Magento 2 Age Restriction** extension.

---

### Does this extension work with Full Page Cache (FPC) and Varnish?
**Yes.** The extension utilizes Magento's standard `CustomerData` private content section (`agerestrictedsection`). The server delivers cached public HTML pages, while Knockout.js dynamically checks client verification state via asynchronous customer data requests, ensuring 100% cache hit rates on Varnish and CDN layers.

---

### Can I restrict only specific products and categories?
**Yes.** You can enforce verification on individual products using the `product_age_verification` attribute and specific categories using the `category_age_varification` attribute without affecting the rest of your catalog.

---

### Does the extension support multi-store and multi-language setups?
**Yes.** All user-facing text fields (Popup Title, Content Description, Checkbox Label, Button Labels, and Terms Link URLs) support **Store View** scope. You can provide distinct localized content for each store view.

---

### What happens when a visitor clicks the "Leave" button?
If a **Leave Button URL** is configured (e.g., `https://google.com` or `/terms-and-conditions`), the visitor is redirected to that URL. If left empty, the page reloads.

---

### Can I require visitors to accept Terms & Conditions before entering?
**Yes.** Enable **Terms and Conditions** under **Stores > Configuration > Webkul > Age Verification > Terms and Conditions**. Visitors must check the consent box before the verification form allows them to proceed.

---

### Is the extension compatible with Headless Magento & PWA?
**Yes.** The module ships with GraphQL queries (`storeConfig`, `checkAgeVerifiedOrNot`) and mutation endpoints (`setAgeVerification`) to support headless storefronts and PWA architectures.

---

### How do I contact Webkul support?
If you have questions, require custom modifications, or encounter issues:
- **Support Ticket:** [Webkul UVdesk Support Portal](https://webkul.uvdesk.com/)
- **Store Extension Page:** [Magento 2 Age Verification Extension](https://store.webkul.com/magento2-age-verification.html)
- **Email:** `support@webkul.com`
