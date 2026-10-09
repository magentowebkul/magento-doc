# Requirements

Before installing the **EGSMA Marketplace Integration**, make sure the Adobe prerequisites below are in place and that you have your EGSMA credentials.

---

## Adobe Prerequisites

- **Commerce user access:** Your organization's product admin or system admin must add you as a user of the **Adobe Commerce as a Cloud Service** product before you can create an instance. See [Adobe's getting started guide](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/getting-started).
- **License and API access:** An active Adobe Commerce as a Cloud Service license with API access enabled, and access to **Adobe Developer Console** to create I/O Management API credentials. See [Server-to-server authentication](https://developer.adobe.com/commerce/services/cloud/guides/rest/authentication/server-to-server/).
- **IMS authentication (SaaS):** Traditional admin and integration tokens are **not supported** in SaaS environments. You must obtain an IMS admin token through OAuth 2 authentication via Adobe's Identity Management System (IMS). See [REST authentication](https://developer.adobe.com/commerce/webapi/rest/authentication/).
- **Developer tools:** Node.js version **20 or later** (use `nvm` for version management) and the Adobe I/O CLI:

```bash:no-line-numbers
npm install -g @adobe/aio-cli
```
<ExplainCode explanation="Installs the Adobe I/O command-line interface globally, used to work with App Builder projects." />

---

## EGSMA Account & Credentials

The app needs two values from Webkul: `MVM_ACCESS_TOKEN` and `MVM_MERCHANT_BASE_URL`. Get them before you install.

1. Click **[Register here](https://sp-seller.webkul.com/admin/index.php?p=signup&channel=6)** and complete the registration.
2. Send an email to **[support@webkul.com](mailto:support@webkul.com)** with your registered email address and your domain name.
3. Once your request is processed, you will receive:
   - `MVM_ACCESS_TOKEN`
   - `MVM_MERCHANT_BASE_URL`

---

::: tip Backup Recommendation
Always back up your store before installing any integration in production. Test in a staging environment first.
:::
