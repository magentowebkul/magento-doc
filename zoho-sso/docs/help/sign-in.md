# Sign-In Problems

Start with the log:

```bash
tail -n 50 var/log/zohosso.log
```

## "Invalid state parameter. Authorization request expired or invalid."

The session that started the sign-in was not the one that came back.

- **Session cookie lost.** Check **Stores → Configuration → General → Web → Default Cookie
  Settings**: the cookie domain must cover the storefront domain, and **Use HTTP Only** /
  secure settings must suit HTTPS.
- **Different domain on return.** The redirect URI points to another host (for example
  `example.com` vs `www.example.com`) than the one the customer started on. Make them the
  same.
- **Session expired.** The customer left the Zoho page open for a long time. Retry.
- **Back button or double click.** The state is single-use. Retry from the store.

## "Zoho SSO Error: Failed to retrieve access token from Zoho: …"

The code could not be swapped for a token.

- **Zoho Client Secret** is wrong or was regenerated. Paste it again and save.
- **Region** does not match the client's data center.
- The redirect URI Magento sends now differs from the one used at the start, for example
  after changing **Custom Redirect URI** mid-test. Retry.
- The server cannot reach `accounts.zoho.<tld>` — check outbound firewall and DNS.

## "Zoho SSO Error: Email address not returned by Zoho OIDC profile."

Zoho did not share an email. Make sure the customer approved all requested permissions on
the consent screen, and that the Zoho account has a primary email address.

## "Zoho authentication failed: access_denied"

The customer clicked **Deny** on Zoho's consent screen. Nothing to fix.

## The popup opens but the main window does not move on

- The popup and the page must share the same origin. If the store mixes `http` and
  `https`, or `www` and non-`www`, the popup refuses to hand over. Serve the whole store
  from one HTTPS origin.
- Click **Continue** in the popup as a fallback.

## Customers from one country cannot sign in

Their Zoho accounts live in another data center. Enable **Multi-DC** for those regions on
the Zoho client. See [Data Centers](../configuration/data-centers.md).

## A customer was created twice

That happens only on different websites with **Share Customer Accounts = Per Website**.
See [Accounts & Matching](../storefront/accounts.md).
