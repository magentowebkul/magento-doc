# Activate & Connect

To get the API credentials, the admin needs to generate the Shopify API credentials first using their Shopify account.

## Module License Verification

To use the extension, you must verify your module license.

1. Navigate to **Stores > Configuration > Webkul > Module License**.
2. Locate **Multi Shopify Store Mage Connect** in the Licensed Modules list.
3. Enter your License Key in the provided field.
4. Click on the **Save & Verify** button.

Once verified, the status will show a green **VERIFIED** badge.

![module-license-verification](/images/module_license_verification.png)

## How to Get API Credential From Your Shopify Account

### Step 1 – Log in to your Shopify Admin
First, log in to your Shopify store using:
- Your store URL
- Your admin username and password

Make sure you are logged in as a store owner or have app developer permissions.

![login-page-1200x675](/images/login-page-1200x675-5.webp)

### Step 2 – Navigate to “Apps”
From the Shopify left sidebar menu, click **Settings**, then select **Apps**.
This is where all integrations and custom apps are managed.

![shopify-connector-deleloper-dashboard](/images/shopify-connector-deleloper-dashboard-1.webp)

### Step 3 – Open the “Develop Apps” Section
On the top-right corner of the Apps page, click **Develop apps**.
This option allows you to create custom/private apps for API integrations.

![shopify-develop-apps-button-screen](/images/shopify-develop-apps-button-screen-2.webp)

### Step 4 – Build Apps
Click on the “Build apps in the developer dashboard” option.

![app-development-screen-1200x559](/images/app-development-screen-1200x559-2.webp)

### Step 5 – Create a New App
Click the **Create app** button. This will open the app creation pop-up.
Fill in the app name (e.g., “Webkul App”) and click **Create**.

![shopify-app-name-and-developer-email-form-1200x559](/images/shopify-app-name-and-developer-email-form-1200x559-2.webp)

### Step 6 – Configure Admin API Scopes
Fill the following details:
- **App URL**: `https://your-magento-store.com/`
- **Redirect URL**: `https://your-magento-store.com/multishopifystoremageconnect/oauth/callback`

![shopify-app-configuration-admin-api-integration](/images/shopify-app-connection-page.webp)


Then go to the **Access** section to select the required API scopes/permissions (for example: Products, Orders, Inventory, Customers etc.).
It should have **Read and Write** API permission for the following:
- Customer details and customer groups; inventory; orders, transactions, and fulfillment.
- Product information including products, variants, and collections.
- Locations
- Shipping rates
- Discounts
- Online Store Pages access via the GraphQL API.

![shopify-image](/images/shopify-image.webp)

![shopify-admin-api-access-scopes-selection-1200x559](/images/shopify-admin-api-access-scopes-selection-1200x559-3.webp)


*Note*: While making the Webhook Subscription, please make sure to select the latest Event Version.
After selecting the scopes, click **Release**.

![new-app-version](/images/new-app-version.webp)

### Step 7 – Retrieve Your API Credentials
Go to the **API Credentials** section in the app settings, where you can view your generated keys.
You will see:
- Client ID (API Key)
- Client Secret Key

Click **Reveal** to display the secret key. Copy both values carefully.

![shopify-reveal-client-secret-key-screen-1200x559](/images/shopify-reveal-client-secret-key-screen-1200x559-2.webp)

### Step 8 – Install the App
Click on **Install app** and confirm the installation in the pop-up. This generates your OAuth application credentials.

![shopify-install-app-button-screen-1200x559](/images/shopify-install-app-button-screen-1200x559-2.webp)


## Webhook Verification Key
In Shopify, a webhook is a way to automatically send data to an external URL when certain events happen in your store.

1. Log in to your Shopify admin panel and navigate to **Settings**.

![shopify settings option](/images/tap-settings.webp)

2. Select **Notifications** and scroll down to the **Webhooks** section.

![notifications](/images/notifications.webp)
![webhooks section button](/images/web-hooks.webp)

3. Click **Create webhook**.

![create webhook](/images/create-webhooks.webp)

4. In the **Event** dropdown, select the event.
5. In **Format**, choose JSON.
6. In **URL**, enter the endpoint URL to receive webhook data. (`https://your-magento-store.com/multishopifystoremageconnect/events/index`)

![webhook popup](/images/webhook-popup.webp)

7. Click **Save webhook**.

![webhook verification key ](/images/webhook-key.webp)
