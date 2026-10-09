# Configure & Activate

After you acquire the app, enter its configuration keys and install it in **App Management**.

---

## 1. Enter the Configuration Keys

1. In **App Management**, click **Configure** on the EGSMA app.
2. Fill in the **General Configuration** fields. See [Field Reference](/configuration/field-reference.md) for what each one means.
3. Click **Save**.

![Configurations](/images/configurations.webp)

All values are stored securely and injected automatically into the app's runtime actions. No local file editing or CLI access is required.

---

## 2. Install the App

1. Click **Install**.

![Installation Steps](/images/installationstep.webp)

2. Wait for the installation to finish. The app is now installed and active.

![App Installed](/images/appinstalled.webp)

---

## Which Fields to Fill: SaaS or PaaS

The keys you need depend on how your Adobe Commerce store is hosted.

### SaaS — Adobe Commerce as a Cloud Service (ACCS)

- Configure the **IMS OAuth (Server-to-Server)** credentials: `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET`.
- Set the **Commerce Base URL** and **Media Base URL**.
- Leave the OAuth 1.0a Commerce integration fields **empty**, unless explicitly required.

This approach uses Adobe's Identity Management System (IMS) for authentication.

### PaaS / On-Premise

- Configure the **Commerce Integration (OAuth 1.0a)** credentials: Consumer Key, Consumer Secret, Access Token, and Access Token Secret. See [Commerce Integration (PaaS)](/configuration/commerce-integration.md) to create them.
- Set the **Commerce Base URL**. It must end with `/rest/`.
- Optionally, set the admin **username** and **password** for token-based authentication.

---

## 3. Configure Eventing

Product, order, and shipment sync relies on **Adobe Commerce events** delivered through Adobe App Builder. When something happens in the store, such as a product being created, an event triggers the matching sync action.

For the full steps to add events in Adobe Commerce with App Builder, see the Webkul blog: **[Add Webhooks in Adobe Commerce using Adobe App Builder](https://webkul.com/blog/add-webhooks-in-adobe-commerce-using-adobe-app-builder/)**.
