# Redirect URI

The **redirect URI** is the address Zoho sends the customer back to after sign-in. Zoho only
redirects to URIs listed on the client, and the match is **exact** — scheme, host, path,
and trailing slash.

## The default

The module builds it from your store's base URL:

```text
https://www.example.com/zohosso/account/callback/
```

If **Add Store Code to Urls** is on, the store code is part of it:

```text
https://www.example.com/default/zohosso/account/callback/
```

Copy it from **Authorized Redirect URI (Copy for Zoho Console)** rather than typing it.

## Several domains or store views

Each store view with its own URL has its own redirect URI.

1. Use the **Scope** switcher on the configuration page to open each website or store
   view.
2. Copy the **Authorized Redirect URI** shown there.
3. Add every distinct value under **Authorized Redirect URIs** on the same Zoho client.

## When to use Custom Redirect URI

Fill in **Custom Redirect URI (Optional)** only when the auto-detected value is not the URL
customers reach, for example:

- Magento sits behind a reverse proxy or load balancer and sees an internal host name.
- The base URL in Magento is `http://` but customers use `https://`.

The custom value must still point at the `zohosso/account/callback/` route of the same
store view, and it must be added to the Zoho client exactly as entered.

::: warning Check the admin value after saving
The displayed URI is generated inside the admin. On setups where the admin runs on a
different domain from the storefront, confirm the value is the **storefront** callback URL.
If not, enter the correct storefront URL in **Custom Redirect URI**.
:::
