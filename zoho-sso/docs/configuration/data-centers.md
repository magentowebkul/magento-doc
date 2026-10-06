# Data Centers

Zoho keeps each account in one data center. Your OAuth client lives in one too. The
**Zoho Data Center / Region** setting must match the data center where you created the
client.

| Option in Magento | Accounts domain |
| --- | --- |
| United States (.com) — default | `accounts.zoho.com` |
| Europe (.eu) | `accounts.zoho.eu` |
| India (.in) | `accounts.zoho.in` |
| Australia (.com.au) | `accounts.zoho.com.au` |
| China (.com.cn) | `accounts.zoho.com.cn` |
| Japan (.co.jp) | `accounts.zoho.co.jp` |
| Canada (.zohocloud.ca) | `accounts.zohocloud.ca` |
| Saudi Arabia (.sa) | `accounts.zoho.sa` |
| United Kingdom (.uk) | `accounts.zoho.uk` |
| Singapore (.sg) | `accounts.zoho.sg` |
| United Arab Emirates (.ae) | `accounts.zoho.ae` |

Customers are sent to `https://<accounts domain>/oauth/v2/auth`. Your server calls the same
domain for the token and the profile.

## Customers from other regions

Zoho accounts in other regions can usually still sign in: Zoho redirects them to their home
data center during sign-in. Two conditions apply:

- **Multi-DC** must be enabled for your client in the Zoho API Console (client **Settings**
  tab) for the regions you want to accept.
- Your server must be able to reach the accounts domain you selected.

If customers from one region fail while others work, check the Multi-DC setting first.

## Changing region

A Client ID only works in its own data center. If you change region, create a new client
in that region's API Console and update **Zoho Client ID** and **Zoho Client Secret** at
the same time.
