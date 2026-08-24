---
title: Create a Meta App
description: Set up the Meta app that lets Magento connect to your Instagram account.
prev: /installation.html
---

# Create a Meta App

A Meta app is what allows one-click connection and automatic token renewal.
Skip this page only if you plan to [paste a token by hand](./access-token.md).

1. **Switch your Instagram account to Business or Creator**, if it is not already.
   In the Instagram app: **Settings → Account type and tools → Switch to
   professional account**. Free, and no Facebook Page is required.

2. **Create the app.** Go to
   [developers.facebook.com/apps](https://developers.facebook.com/apps) and
   create a new app.

3. **Add the Instagram product** from the app dashboard.

4. **Add the scope** `instagram_business_basic` under the Instagram product's
   settings. That covers posts, Reels and carousels.

5. **Copy the redirect URI from Magento.** Open **Instagram Feed → Accounts →
   Connect Account**; the page shows the exact URI for your store. Paste it into
   the Meta app's **Valid redirect URIs** field.

6. **Copy the credentials into Magento.** In **Stores → Configuration → Webkul →
   Instagram Feed → General**, save the **Instagram App ID** and **Instagram App
   Secret**.

::: danger Use the Instagram credentials, not the Facebook ones
Take the App ID and secret from **Instagram → API setup with Instagram login**,
where the secret is revealed with a **Show** button. The pair shown under
**App settings → Basic** belongs to the Facebook app and will not work here —
this is the single most common setup mistake.
:::

::: tip Every environment needs its own redirect URI
Staging, production and any developer instance each have a different base URL,
so add each one to the Meta app.
:::

## What about Stories?

Reading Stories requires permissions Meta grants only after App Review. Posts,
Reels and carousels work with the basic scope above.
