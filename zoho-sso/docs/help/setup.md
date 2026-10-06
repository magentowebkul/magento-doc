# Setup Problems

## The Zoho button does not appear

1. **Enable Zoho SSO** is **Yes** for the store view you are looking at. Check the scope
   switcher — a store-view override may turn it off.
2. Flush the cache: `php bin/magento cache:flush`. Purge Varnish if you use it.
3. In production mode, deploy static content:
   `php bin/magento setup:static-content:deploy`.
4. You are using a Luma-based theme. A custom theme that removes the
   `form.additional.info` container hides the login button. Hyvä needs a compatibility
   layer.
5. You are logged out. The checkout button only shows in the guest sign-in popup.

## The Zoho SSO admin menu is missing

The menu only appears when **Enable Zoho SSO** is **Yes** at Default Config. Use
**Stores → Configuration → Webkul → Zoho SSO** instead. See
[Admin Menu](../configuration/admin-menu.md).

## Zoho shows "Invalid Redirect Uri"

The URL Magento sent does not exactly match an **Authorized Redirect URI** on your Zoho
client.

1. Copy **Authorized Redirect URI (Copy for Zoho Console)** from Magento — for the correct
   store view scope.
2. Paste it into the Zoho client, character for character, including `https://` and the
   trailing `/`.
3. If Magento shows an internal or `http://` address, set the public URL in **Custom
   Redirect URI (Optional)** and register that.

See [Redirect URI](../configuration/redirect-uri.md).

## Zoho shows "Invalid Client"

- The **Zoho Client ID** has a typo or extra space.
- The **Zoho Data Center / Region** does not match the API Console where the client was
  created. A `.eu` client only works with **Europe (.eu)**.
- The client was deleted in the Zoho API Console.

## `setup:upgrade` fails with a dependency error

Part of the package was not copied. Copy every folder from the package's `Webkul`
directory into `app/code/Webkul/`, then run `setup:upgrade` again. See
[Install the Module](../installation/module.md).

## The button is unstyled or the popup does nothing

Static files were not deployed for your theme or locale. Run
`setup:static-content:deploy` for every locale you serve, then flush the cache.
