# Messages

Customers see these messages at the top of the page after a Zoho sign-in attempt.

## Success

| Message | Meaning |
| --- | --- |
| `Welcome, <first name>! You have successfully logged in with Zoho.` | Signed in. Shown on My Account or Checkout. |

## Errors

| Message | Cause | Fix |
| --- | --- | --- |
| `Zoho SSO is currently disabled.` | **Enable Zoho SSO** is **No** for this store view. | Enable it — see [Connect Magento to Zoho](../setup/connect.md). |
| `Zoho authentication failed: <reason>` | Zoho returned an error, for example the customer clicked **Deny**. | Usually the customer's choice. Otherwise see [Sign-In Problems](../help/sign-in.md). |
| `Invalid state parameter. Authorization request expired or invalid.` | The session ended, or cookies were lost, between leaving for Zoho and returning. | Try again in one browser tab. See [Sign-In Problems](../help/sign-in.md). |
| `Authorization code missing from Zoho response.` | Zoho returned without a code. | Check the redirect URI and client settings. |
| `Zoho SSO Error: <reason>` | Token exchange or profile request failed, or Zoho sent no email. | Read `var/log/zohosso.log`. |
| `Unable to initiate Zoho SSO: <reason>` | An unexpected error before the customer was sent to Zoho. | Read `var/log/zohosso.log`. |

::: tip Errors shown on Zoho's page
A wrong **Client ID**, a wrong region, or a redirect URI missing from the Zoho client makes
Zoho itself show an error page (such as "Invalid Client" or "Invalid Redirect Uri") before
the customer ever returns. See [Setup Problems](../help/setup.md).
:::

Failed sign-ins return the customer to the **Sign In** page, or to **Checkout** if they
started there.

Message text can be translated through the module's `i18n/en_US.csv` or a theme
translation file.
