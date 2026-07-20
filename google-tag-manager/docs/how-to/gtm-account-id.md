# How to find your GTM Account ID

The **GTM Account ID** is the numeric identifier for your Google Tag Manager account (not to
be confused with the **Container ID**, `GTM-XXXXXXX`). You rarely need it for day-to-day
setup, but it is useful when scripting container imports or organising multiple containers.

## Steps

1. Go to [tagmanager.google.com](https://tagmanager.google.com) and sign in.
2. Open **Admin**.
3. Under the **Account** column, click **Account Settings**.
4. The **Account ID** is the numeric value shown there. It also appears in the browser URL
   while you are in the account, for example:

   ```text
   https://tagmanager.google.com/#/container/accounts/1234567890/containers/...
                                                        ^^^^^^^^^^ Account ID
   ```

## Account ID vs Container ID

| Identifier | Looks like | Where the extension uses it |
| --- | --- | --- |
| **Container ID** | `GTM-XXXXXXX` | Required in [General Settings](/configuration/general-settings.html). |
| **Account ID** | `1234567890` (numeric) | Not required by the extension; handy for managing imports in GTM. |

For the value you actually enter into the extension, see
[How to find your Container ID](/how-to/gtm-container-id.html).
