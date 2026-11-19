# Google Maps & Places API Setup

To enable real-time address suggestions in Magento 2, you need a Google Maps API Key with the **Maps JavaScript API** and **Places API (New)** enabled.

Google provides two convenient ways to obtain your API key:
* **Option A: Instant Demo Key (Quick Start)** — Get an instant key with **no credit card or billing profile required**, ideal for testing and development.
* **Option B: Standard Production Key via Google Cloud Console** — Create a dedicated project with billing and custom domain security restrictions for your live store.

---

## Option A — Instant Demo Key (No Credit Card Required)

Google provides an instant **Maps Demo Key** setup that allows you to start using Google Maps APIs without linking a billing profile or entering credit card details:

1. Open your browser and navigate to the official [Google Maps Demo Key](https://developers.google.com/maps/documentation/javascript/demo-key) page.
2. Sign in with your Google account.
3. Click the **Get a Demo Key** button and accept the terms of service.
4. Google will immediately generate a working API key with **Maps JavaScript API** and **Places API (New)** active by default.
5. Copy the generated API key.
6. In your Magento Admin Panel, go to **Stores > Configuration > Google Address Autofill**.
7. Paste the key into the **Google Map Api Key** field, click **Save Config**, and flush your Magento cache.

::: tip Upgrading to Production
The demo key includes automatic daily request limits to prevent unexpected usage. When you are ready to launch on your live production store with full capacity, follow **Option B** below to set up a standard production key.
:::

---

## Option B — Standard Production Key via Google Maps Platform

When you are ready to move your store to production, follow the official setup procedure from [Google Maps Platform Get an API Key](https://developers.google.com/maps/documentation/javascript/get-api-key).

### 1. Prerequisites (Account & Billing)

Before generating a production key, verify your Google Cloud account and project setup:

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/).
2. Select your existing project or click **New Project** to create one (e.g., `Magento-Google-Address-Autocomplete`).
3. Verify that billing is linked to your project:
   * Open the left navigation menu and go to the **Billing** page.
   * If prompted, link an active billing account to the project. Google Maps Platform requires linked billing for live production API requests.

---

### 2. Enable the Required APIs

Before you can use address autocomplete, you must enable the required Google Maps APIs in your project:

1. In the left navigation menu, navigate to **Google Maps Platform > APIs** (or **APIs & Services > Library**).
2. Enable the following two APIs:
   * **Maps JavaScript API:** Renders maps and provides frontend address autocomplete libraries. Click **Enable**.
   * **Places API (New):** Google's modern, high-performance API for address searches, suggestions, and location details. Click **Enable**.
   *(Note: If an API is already active, Google will display a **Manage** button instead of **Enable**).*

---

### 3. Generate Your API Key

Follow these steps to generate a secure production key:

1. In the Google Cloud Console, navigate to the **Google Maps Platform > Keys & Credentials** page.
2. If prompted, confirm your project selection.
3. Click **Create credentials > API key**.
4. In the **Create API key** panel:
   * Open the **Select API restrictions** dropdown.
   * Ensure **Maps JavaScript API** and **Places API (New)** are selected.
   * Clear any unneeded APIs.
5. Click **Create** (or **Save**). The panel will display your newly generated API key.
6. Click the copy icon to copy your key string.

> **Note:** To view or manage your key string later, simply return to the **Google Maps Platform > Keys & Credentials** page and click **Show key**.

---

## Apply API Key Restrictions (Security Best Practices)

Google strongly recommends restricting your API key to protect your account and prevent unauthorized websites from using your API key:

### 1. Application Restrictions (HTTP Referrers)

Application restrictions ensure that only your authorized Magento store domains can use the API key.

![Application Restrictions](/images/google_api_restrict_application.webp)

1. On the **Keys & Credentials** page, click the name of your API key to open its settings.
2. Under **Set an application restriction**, select **Websites (HTTP referrers)**.
3. Under **Website restrictions**, click **Add** and enter your store URLs with wildcards:

```text:no-line-numbers
https://yourstore.com/*
https://*.yourstore.com/*
```

#### Explanation of URL Wildcard Patterns:
* **`https://yourstore.com/*`** — The asterisk (`*`) at the end represents any page on your store (such as `/checkout`, `/customer/address`, etc.), allowing the key to work across all pages of your site.
* **`https://*.yourstore.com/*`** — The asterisk before your domain name covers any subdomains your store might use (such as `checkout.yourstore.com` or `shop.yourstore.com`).

4. If you also test locally or on staging environments, add them as well:

```text:no-line-numbers
http://127.0.0.1:*/*
http://localhost:*/*
```

* **Explanation:** These entries ensure that Google allows address suggestions to work on your local development environments (`localhost` or `127.0.0.1`).

---

### 2. API Restrictions

API restrictions limit which Google APIs can be called using this key:

![API Restrictions](/images/google_api_restrict_apis.webp)

1. In the same key settings panel, locate **API restrictions**.
2. Select **Restrict key**.
3. In the **Select APIs** dropdown, check:
   * **Maps JavaScript API**
   * **Places API (New)**
   * **Places API** (if enabled for legacy compatibility)
4. Click **Save**.

![Apply Recommended Restrictions](/images/google_api_apply_recommended.webp)

::: tip Important
Allow 2 to 5 minutes after saving for Google's global servers to apply the restriction settings.
:::

---

::: tip Next Step
Now that your API key is generated and secured, proceed to [Module Configuration](/admin/configuration.html) to paste it into your Magento Admin settings.
:::
