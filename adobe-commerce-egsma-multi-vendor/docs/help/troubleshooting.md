# Troubleshooting

Common issues and their resolutions when using the **EGSMA Marketplace Integration** for Adobe Commerce.

---

## 1. Adobe Commerce as a Cloud Service API Is Not Listed

### Symptoms
While adding APIs to your App Builder project, **Adobe Commerce as a Cloud Service** does not appear in the list.

### Resolution Steps
1. Ask your organization admin for developer permissions for **Adobe Commerce as a Cloud Service – Backend – Commerce Cloud Manager**.
2. Return to the project and add the API again. See [Installation](/installation.md#_2-add-the-required-apis).

---

## 2. Commerce API Calls Fail After Configuration

### Symptoms
The app is installed, but nothing syncs and Commerce API requests are rejected.

### Resolution Steps
1. Check the **Commerce Base URL** format:
   - **SaaS (ACCS):** your ACCS REST base URL, for example `https://na1-sandbox.api.commerce.adobe.com/{tenantId}/`
   - **PaaS / On-Premise:** must end with `/rest/`
2. Make sure you filled the right credential set for your setup:
   - **SaaS:** OAuth Client ID, Client Secret, and Scopes. Leave the OAuth 1.0a fields empty.
   - **PaaS:** Consumer Key, Consumer Secret, Access Token, and Access Token Secret.
3. For SaaS, confirm the **OAuth Scopes** value is space-separated (no commas).
4. For PaaS, confirm the Commerce Integration is **activated** with **All** API resources. See [Commerce Integration (PaaS)](/configuration/commerce-integration.md).

---

## 3. Products Created in Adobe Commerce Do Not Show in the Vendor Panel

### Symptoms
A product created in Adobe Commerce is synced to EGSMA but is missing from the vendor's product listing.

### Resolution Steps
1. Products from Adobe Commerce must be **assigned to a vendor**. In the EGSMA admin panel, use **Assign Product As** and enter the seller's email. See [Product Synchronization](/vendor/product-sync.md#adobe-commerce-to-egsma).
2. To skip manual approval, enable **Auto Approve Product** in the admin panel.

---

## 4. Orders or Products Do Not Sync in Real Time

### Symptoms
New products, orders, or status changes in Adobe Commerce do not reach EGSMA.

### Resolution Steps
1. Confirm **Adobe I/O Events for Adobe Commerce** is added to your App Builder workspace. See [Installation](/installation.md#_2-add-the-required-apis).
2. Confirm eventing is configured for your store. See [Configure Eventing](/activation.md#_3-configure-eventing).
3. Check that the **MVM Access Token** and **MVM Merchant Base URL** are correct.

---

## 5. Option Group Missing in EGSMA

### Symptoms
A product option group that exists in Adobe Commerce is not available in EGSMA.

### Resolution Steps
1. Go to **Products > Product Option Group** and click **Import Option Group**.
2. Import it by date range or by its ID / slug. See [Import Product Option Group](/vendor/product-management.md#import-product-option-group).

---

::: tip Still stuck?
Raise a ticket with [Webkul Support](https://webkul.uvdesk.com/en/) or email [support@webkul.com](mailto:support@webkul.com).
:::
