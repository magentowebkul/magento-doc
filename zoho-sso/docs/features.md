# Key Features

## What it does

- **Sign in with Zoho** on the Customer Login page.
- **Sign up with Zoho** on the Create New Customer Account page.
- **Sign in with Zoho** inside the guest checkout sign-in popup. The customer returns to
  checkout, logged in, with their cart intact.
- **Popup sign-in on desktop.** Zoho opens in a small centred window, so the shopper never
  leaves your page.
- **Same-tab sign-in on phones and tablets**, and whenever the browser blocks the popup.
- **Automatic account creation.** A first-time Zoho user gets a Magento customer account
  using the name and email from their Zoho profile.
- **Existing accounts are reused.** A matching email on the same website logs in to the
  existing account. No duplicates.
- **Default customer group** for every account created through Zoho.
- **11 Zoho data centers** — US, Europe, India, Australia, China, Japan, Canada, Saudi
  Arabia, United Kingdom, Singapore, and United Arab Emirates.
- **Auto-detected redirect URI** shown in the admin, ready to copy into the Zoho console.
- **Optional custom redirect URI** for proxies and unusual URL setups.
- **Encrypted client secret** in the database.
- **Per-website and per-store-view settings.**
- **Dedicated log file** — `var/log/zohosso.log`.

## What it does not do

| Not included | Why it matters |
| --- | --- |
| Admin-user login with Zoho | Only storefront customers sign in with Zoho. |
| Other providers (Google, Facebook…) | The button list holds Zoho only. |
| Syncing data back to Zoho | The extension reads the Zoho profile once at sign-in; nothing is written to Zoho. |
| Address, phone, or company import | Only email, first name, and last name are copied. |
| REST or GraphQL login | There is no API endpoint. PWA/headless storefronts need a customisation. |
| Hyvä templates | The button is built for Luma-based themes. Hyvä needs a compatibility layer. |

Next: [How It Works](./how-it-works.md).
