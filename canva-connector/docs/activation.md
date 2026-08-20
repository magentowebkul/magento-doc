# Activate & Connect

Once the Magento extension and Canva Developer Portal applications are created, connect and activate the integration by linking your API credentials in the Magento Admin Panel.

---

## 1. Enter Canva Credentials in Magento Admin

1. Log in to your **Magento 2 Admin Panel**.
2. Navigate to **Stores > Configuration > Webkul > Canva Connect Settings**.
3. Under the **General Settings** section:
   - Set **Enable Module** to `Yes`.
   - In **Canva App ID**, enter your Canva App ID from the Canva Developer Portal.
   - In **Client ID**, enter your Canva Connect Integration Client ID.
   - In **Client Secret**, enter your Canva Connect Integration Client Secret.
4. Copy the automatically generated **Redirect URI** and **Return Navigation URI** displayed on the screen and verify they match your Canva Developer Portal settings exactly.
5. Click **Save Config**.

![Magento 2 Canva Connect General Settings Configuration](/images/magento/magento-config-general-settings.webp)

```
Stores > Configuration > Webkul > Canva Connect Settings
├── General Settings
│   ├── Enable Module: [Yes]
│   ├── Canva App ID: [Your Canva App ID]
│   ├── Client ID: [Your Canva Connect Client ID]
│   ├── Client Secret: [••••••••••••••••]
│   ├── Redirect URI: [https://your-domain.com/canva/auth/callback]
│   └── Return Navigation URI: [https://your-domain.com/canva/auth/return]
```

---

## 2. Sync Frontend Environment (.env)

1. Under the **Canva App Frontend & API Configuration** group:
   - In **Canva Frontend App Server Path**, enter the absolute directory path where your `canva-app-frontend` folder is located (e.g. `/var/www/html/canva-app-frontend`).
   - In **Magento Backend Base URL**, ensure your store base URL is correct.
2. Click **Save Config**.
3. Magento validates the directory path and automatically writes and synchronizes your `.env` configuration file inside the frontend project folder.

::: tip Automatic .env Generation
Whenever you modify backend URLs or ports in Magento Admin and click **Save Config**, Magento automatically regenerates the frontend `.env` file without manual file editing.
:::

---

## 3. Verify Connection & First Consent

1. Navigate to **Catalog > Products**.
2. Locate any product with an image and click the **Design with Canva** button in the thumbnail column.

![Magento Catalog Products Grid with Design with Canva Action Button](/images/workflow/magento-catalog-products-grid.webp)

3. Magento initiates the OAuth 2.0 PKCE flow and redirects you to Canva's authorization screen.
4. Click **Allow / Approve** on Canva's consent screen.
5. Canva redirects back to Magento (`/canva/auth/callback`), stores the rotating refresh token securely, uploads the product image asset, creates a design, and launches the Canva editor.
6. The integration is now fully active!

::: note
Subsequent clicks on **Design with Canva** will utilize rotating refresh tokens and open the Canva design editor instantly without asking for consent again.
:::
