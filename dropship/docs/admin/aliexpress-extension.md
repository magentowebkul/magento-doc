# AliExpress Chrome Extension Setup

The **AliExpress Importer Chrome Extension** connects your Google Chrome web browser directly to your Magento 2 store, enabling single-click product importing, variant configuration, and automated order fulfillment directly from AliExpress web pages.

---

## 1. Installing the Chrome Extension

1. Log into your Magento Admin panel and go to **Stores > Configuration > Webkul > Dropship Manager > AliExpress Settings**.
2. Click the provided **Install** link, or visit the Chrome Web Store and search for **Magento 2 AliExpress Importer by Webkul**.
3. Click **Add to Chrome** and confirm by clicking **Add Extension**.
4. The Webkul AliExpress Importer icon will now appear in your browser toolbar.

---

## 2. Connecting the Extension to Your Store

Before products can be imported, connect the browser extension to your store:

1. Click the **AliExpress Importer** extension icon in your Chrome toolbar.
2. In the popup window, enter your store base URL (e.g., `https://yourdomain.com/`).
   > [!IMPORTANT]
   > Your store must use a secure **HTTPS (SSL)** certificate. Google Chrome blocks extension requests to insecure HTTP addresses. If your store runs in a subfolder, include the full path (e.g., `https://yourdomain.com/store/`).
3. Click **Next**.
4. Enter the **Username** and **Token** you configured under **Stores > Configuration > Dropship Manager > AliExpress Settings**.
5. Click **Submit**. A success message will confirm that your store is connected.

### Why Token Authentication is Secure
Instead of entering your master admin password into the browser extension, the module uses a dedicated security token. This allows store owners to safely let assistants or catalog editors import products without giving them access to sensitive financial or customer data.

---

## 3. Obtaining AliExpress Open Service API Credentials

To enable automated price synchronization and order placement:
1. Register a free account at the **AliExpress Open Service Portal**.
2. Go to the **App Console** and create an application under the **Dropshipping Developer** category.
3. For Collaboration Type, select **Dropshipping (Individual)**.
4. For third-party platform integration, choose **Third-party / Custom Platform**.
5. Complete the profile submission and wait for application approval.
6. Once approved, navigate to **App Overview** to copy your **App Key (App ID)** and **App Secret**.
7. Paste these credentials into **Stores > Configuration > Dropship Manager > AliExpress Settings**.

::: tip Next Steps
Learn how to import products and automate order dispatch in [AliExpress Products & Orders](/admin/aliexpress-products-orders.html).
:::
