# Frequently Asked Questions

---

### Q1: Does Adobe Commerce support multi-vendor marketplaces by default?
**No.** Adobe Commerce as a Cloud Service is built for single-store selling. The EGSMA integration adds multi-vendor marketplace features without modifying the core system.

---

### Q2: Do I need to download or deploy any code?
**No.** The app is non-downloadable. You install it from Adobe Exchange, and all configuration keys are entered in App Management. No local file editing or CLI access is required.

---

### Q3: Does the integration work with both SaaS and PaaS / on-premise Adobe Commerce?
**Yes.** SaaS (ACCS) uses IMS OAuth Server-to-Server credentials. PaaS and on-premise stores use Commerce Integration (OAuth 1.0a) credentials. See [Configure & Activate](/activation.md#which-fields-to-fill-saas-or-paas).

---

### Q4: How do I get the MVM Access Token and MVM Merchant Base URL?
Register on EGSMA, then email [support@webkul.com](mailto:support@webkul.com) with your registered email address and domain name. Webkul sends both values once your request is processed. See [Requirements](/requirements.md#egsma-account-credentials).

---

### Q5: Which product types are supported?
**Simple** and **Configurable** products.

---

### Q6: Is customer data synchronized?
**Yes**, but only as part of order synchronization. Customer accounts are kept in sync between both stores when orders sync.

---

### Q7: Where are returns and refunds handled?
Returns and refunds are handled in **Adobe Commerce**.

---

### Q8: Can products be approved automatically?
**Yes.** Enable **Auto Approve Product** in the EGSMA admin panel to approve all new products without manual action.
