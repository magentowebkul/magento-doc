# Logging

Everything the extension does is written to its own file:

```text
var/log/zohosso.log
```

The level is **INFO**, so both normal activity and errors are recorded.

## What is logged

| Event | Example line |
| --- | --- |
| Sign-in started | `Initiating Zoho SSO redirect with state: …` |
| Callback received | `Processing Zoho OAuth callback.` |
| Token exchange | `Exchanging auth code for Zoho access token` → `Zoho token exchange successful.` |
| Profile read | `Fetching user info from Zoho UserInfo endpoint.` → `Zoho UserInfo successfully retrieved.` |
| Existing customer matched | `Existing Magento customer found for Zoho SSO: jane@example.com` |
| New customer created | `New Magento customer created for Zoho SSO: jane@example.com` |
| Customer logged in | `Customer logged in via Zoho SSO: jane@example.com` |

## Errors

| Log line | Meaning |
| --- | --- |
| `Zoho authentication callback error: …` | Zoho returned an error, e.g. `access_denied`. |
| `Invalid state parameter in Zoho callback response.` | Session or state mismatch. |
| `Authorization code missing in Zoho response.` | No code on the callback. |
| `Zoho Token exchange failed: …` | Wrong secret, region, or redirect URI. The Zoho response is attached. |
| `Invalid response received from Zoho UserInfo API.` | Profile request failed. |
| `Email address missing in Zoho user info profile.` | Zoho shared no email. |
| `Failed to decrypt Zoho Client Secret: …` | Re-enter the secret in the admin. |
| `Zoho SSO Callback Error: …` / `Zoho SSO initiation error: …` | Any other failure, with the reason. |

## Following it live

```bash
tail -f var/log/zohosso.log
```

Start a sign-in in another window and watch each step appear.

::: warning The log contains customer emails
Treat `zohosso.log` as personal data. Rotate it with your other Magento logs and do not
attach it to public tickets without removing email addresses.
:::
