# Settings Reference

**Stores → Configuration → Webkul → Zoho SSO → Zoho SSO (OIDC) Settings**

## Enable Zoho SSO

**Yes / No.** Default **No**.

When **No**:

- the Zoho button is hidden on login, registration, and checkout;
- anyone opening a Zoho sign-in link sees **Zoho SSO is currently disabled.**;
- the **Zoho SSO** admin menu is hidden.

## Zoho Data Center / Region

The Zoho data center your OAuth client was created in. Default **United States (.com)**.
It decides which Zoho Accounts server customers are sent to. See
[Data Centers](./data-centers.md).

## Zoho Client ID

The Client ID from the Zoho API Console. Plain text.

## Zoho Client Secret

The Client Secret from the Zoho API Console. Shown as a password field and stored
**encrypted** in `core_config_data`. Leaving the dots unchanged on save keeps the current
secret.

## Zoho OAuth API Version

The Zoho OAuth path version. The only option is **OAuth Version 2 (V2)**, which builds URLs like
`https://accounts.zoho.com/oauth/v2/auth`. Leave it as is.

## Authorized Redirect URI (Copy for Zoho Console)

Read-only. Shows the callback URL for the current scope — normally
`https://<your-store>/zohosso/account/callback/`. Click the field to select it, then copy
it into **Authorized Redirect URIs** on the Zoho client. This field is never saved.

If **Custom Redirect URI** is filled in, this field shows the custom value instead.

## Custom Redirect URI (Optional)

Overrides the auto-detected redirect URI. Leave blank in almost every case. See
[Redirect URI](./redirect-uri.md) for when you need it.

## Default Customer Group for New Accounts

The customer group given to accounts **created** through Zoho sign-in. Default
**General**. Existing customers who sign in with Zoho keep their current group.

::: tip Segment Zoho customers
Create a dedicated group, such as "Zoho Customers", under **Customers → Customer Groups**
and pick it here. You can then target Zoho sign-ups with catalog price rules, cart rules,
or tax classes.
:::
