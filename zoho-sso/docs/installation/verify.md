# Verify the Installation

## 1. The module is enabled

```bash
php bin/magento module:status Webkul_ZohoSso
```

Expected output:

```text
Module is enabled
```

## 2. The configuration section exists

In the admin, go to **Stores → Configuration → Webkul → Zoho SSO**. You should see the
**Zoho SSO (OIDC) Settings** group.

::: tip Where is the Zoho SSO menu?
The **Zoho SSO** entry in the admin sidebar appears only after **Enable Zoho SSO** is set
to **Yes**. Until then, use the Stores → Configuration path above. See
[Admin Menu](../configuration/admin-menu.md).
:::

## 3. The log file is writable

The module writes to `var/log/zohosso.log`. The file is created on the first sign-in
attempt, so make sure the web-server user can write to `var/log/`.

## 4. Check the version

The module version is shown in two places:

- At the bottom of the configuration page, in the module information block.
- In the admin menu under **Zoho SSO → Support**, as **Version 4.0.0-p1**.

The storefront shows no Zoho button yet. It appears once the module is enabled and
connected — see [Activate Your Licence](../setup/licence.md).
