# Connect Magento to Zoho

Go to **Stores → Configuration → Webkul → Zoho SSO** and expand **Zoho SSO (OIDC)
Settings**.

1. **Enable Zoho SSO** — set to **Yes**.
2. **Zoho Data Center / Region** — select the region of the API Console where you created
   the client, for example **United States (.com)** or **Europe (.eu)**.
3. **Zoho Client ID** — paste the Client ID.
4. **Zoho Client Secret** — paste the Client Secret. It is shown as dots and stored
   encrypted.

   ![Zoho SSO (OIDC) Settings: Enable, Data Center / Region, Client ID, and Client Secret](/images/admin-zoho-general-configuration.webp)

5. **Zoho OAuth API Version** — leave at **OAuth Version 2 (V2)**.
6. **Authorized Redirect URI (Copy for Zoho Console)** — read-only. Confirm it matches the
   URI you entered in the Zoho client.
7. **Custom Redirect URI (Optional)** — leave blank unless you have a reason to override
   it. See [Redirect URI](../configuration/redirect-uri.md).
8. **Default Customer Group for New Accounts** — the group for customers created through
   Zoho. **General** is the usual choice.
9. Click **Save Config**.

![Remaining Zoho SSO settings: API version, redirect URIs, and default customer group](/images/admin-zoho-full-configuration-section.webp)

Magento flushes the configuration cache on save. If you use Varnish or another full-page
cache in front of Magento, purge it so the login and registration pages pick up the
button:

```bash
php bin/magento cache:flush
```

::: warning The region must match the client
A client created in `api-console.zoho.eu` only works with **Europe (.eu)**. A mismatch
makes Zoho reject the sign-in with an invalid-client error.
:::

Every field is explained in [Settings Reference](../configuration/settings.md).

Next: [Test the First Sign-In](./first-sign-in.md).
