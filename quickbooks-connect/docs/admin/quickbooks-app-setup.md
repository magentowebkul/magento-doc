# Intuit Developer App Setup

To obtain your **Client ID** and **Client Secret** for OAuth 2.0 authentication, you must register a developer application on the official **Intuit Developer Portal**.

---

## Step 1 — Create an Intuit Developer Account

1. Open your web browser and go to the **[Intuit Developer Portal](https://developer.intuit.com/)**.

![Intuit Developer Portal](/images/intuit-portal-login.webp)

2. Click **Sign Up** in the top right corner.
3. Enter your email, full name, phone number, and password, then click **Create Account**.

![Intuit Sign Up](/images/intuit-signup-form.webp)

4. Intuit will send a 6-digit verification code to your registered mobile number. Enter the code and click **Continue**.

![Verification Code](/images/intuit-signup-otp.webp)

5. Upon successful account creation, you will land on the Intuit Developer Homepage:

![Intuit Developer Homepage](/images/intuit-developer-home.webp)

---

## Step 2 — Create QuickBooks Online Application

1. Once logged in, navigate to **My Dashboard** from the top header and click **Create an App**.

![My Dashboard Create App](/images/intuit-my-dashboard.webp)

2. Select **QuickBooks Online & Payments** as the target platform.

![Select Platform](/images/intuit-app-platform.webp)

3. Enter an **App Name** (e.g., `MyStore Magento QuickBooks Connector`).

![Enter App Name](/images/intuit-app-name.webp)

4. Under **Select a scope**, select **Accounting**.

![App Name and Scope](/images/intuit-app-scope.webp)

5. Click **Done**.

![App Created](/images/intuit-app-created.webp)

---

## Step 3 — Obtain Keys & Set Redirect URI

1. In your app management dashboard, navigate to the **Keys & Credentials** tab on the left sidebar.
2. You will see two key environments (**Development Keys** and **Production Keys**). Copy your **Client ID** and **Client Secret**.

![Client ID and Secret](/images/intuit-keys.webp)

### Configure OAuth Redirect URI

1. Scroll down to the **Redirect URIs** section under **Settings**.
2. Click **Add URL**.
3. Enter your store's exact OAuth callback URL:

```text
https://example.com/quickbooksconnect/oauth/oauth2
```

*(Replace `example.com` with your actual store domain name. Note that HTTPS is strictly required by Intuit).*

![Redirect URI Setup](/images/intuit-redirect-url.webp)

4. Click **Save**.

---

## Step 4 — Enable Class Tracking in QuickBooks (Optional)

If you plan to use financial **Class Tracking** in QuickBooks:

1. Log in to your **QuickBooks Online** account (Sandbox or Live).
2. Go to **Settings (Gear Icon) > Account and Settings > Advanced > Categories**, enable **Track classes**, and configure class assignment rules:

![Enable Class Tracking](/images/qb-class-category.webp)

3. Go to **Settings > All Lists > Classes** to manage your tracking class categories:

![All Lists Classes](/images/qb-class-settings.webp)

4. Click **New** to create your custom class categories (e.g., `eCommerce`, `Retail`, `Wholesale`):

![Create New Class](/images/qb-create-class.webp)
