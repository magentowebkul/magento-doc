# Configuration Overview

All settings live on one page:

**Stores → Configuration → Webkul → Zoho SSO**

Once the module is enabled you can also reach it from **Zoho SSO → Configuration** in the
admin sidebar.

![Zoho SSO configuration section under the Webkul tab](/images/admin-zoho-general-configuration.webp)

The page has two groups:

| Group | What it holds |
| --- | --- |
| **Zoho SSO (OIDC) Settings** | Every setting the extension uses. |
| Module information | Author, user guide, store page, support ticket, services links, and the installed version. Its heading currently reads "Spin To Win Information" — a label slip; it is the Zoho SSO information block. |

## The settings at a glance

| Setting | Default | Required |
| --- | --- | --- |
| Enable Zoho SSO | No | Yes |
| Zoho Data Center / Region | United States (.com) | Yes |
| Zoho Client ID | — | Yes |
| Zoho Client Secret | — | Yes |
| Zoho OAuth API Version | v2 | Yes |
| Authorized Redirect URI (Copy for Zoho Console) | auto-detected | Display only |
| Custom Redirect URI (Optional) | — | No |
| Default Customer Group for New Accounts | General | No |

Details for each field: [Settings Reference](./settings.md).

```mermaid
flowchart LR
  A[Register Zoho client] --> B[Paste Client ID and Secret]
  B --> C[Pick data center]
  C --> D[Enable Zoho SSO]
  D --> E[Button appears on storefront]
```
