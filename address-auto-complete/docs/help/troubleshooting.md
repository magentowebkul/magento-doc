# Troubleshooting

If you encounter issues with Google Address suggestions or form auto-population, use this guide to identify the root cause and quickly resolve it.

---

## Quick Diagnostic Steps

Before diving into specific errors, verify these basic checks:

1. **Verify Extension Status:** Ensure the module is enabled in your Magento installation so its features are active.
2. **Verify Configuration:** Go to **Stores > Configuration > Google Address Autofill** and ensure **Enable Module** is set to **Yes**.
3. **Verify API Key:** Ensure the Google Map API Key is entered correctly without accidental leading or trailing spaces.
4. **Flush Cache:** Go to **System > Tools > Cache Management** and click **Flush Magento Cache** to force Magento to load the latest settings and scripts.

---

## Common Issues and Solutions

### 1. "This page can't load Google Maps correctly"

#### Cause:
* **Billing Inactive:** Google requires an active billing account linked to your Google Cloud project. Address queries will fail if billing is not activated on the project.
* **APIs Disabled:** Both **Maps JavaScript API** and **Places API (New)** (or **Places API**) must be active.

#### Solution:
1. Open [Google Cloud Console Billing](https://console.cloud.google.com/billing) and confirm a billing account is linked to your project.
2. In **Google Maps Platform > APIs** (or **APIs & Services > Library**), verify that both **Maps JavaScript API** and **Places API (New)** show as **Enabled**.

---

### 2. Suggestions Not Showing on Your Store Domain (Domain Restriction Error)

#### Cause:
If you restricted your API key to specific website domains in Google Cloud Console, your store's domain must match the allowed list.

#### Solution:
1. Go to **Google Maps Platform > Keys & Credentials** (or **APIs & Services > Credentials**).
2. Click your API key to open its settings.
3. Under **Website restrictions**, make sure your store's URL is added:
   * `https://yourstore.com/*`
   * `https://*.yourstore.com/*`
4. Click **Save** and wait 2 to 5 minutes for Google's settings to update.

---

### 3. "Places API Has Not Been Enabled" Error

#### Cause:
The **Places API (New)** (or legacy **Places API**) is not enabled in your Google Cloud project.

#### Solution:
1. Go to **Google Maps Platform > APIs** (or **APIs & Services > Library**).
2. Search for **Places API (New)** and click **Enable**.
3. If you restricted your API key to specific APIs under **API restrictions**, ensure **Places API (New)** is selected in the allowed list.

---

### 4. Address Suggestions Appear, But Form Fields Do Not Populate

#### Cause:
* If you are using a third-party custom checkout theme that alters standard Magento address fields, field mappings might not match.
* If using the Hyvä Theme, ensure the `Webkul_GoogleAddressAutoCompleteHyva` companion module is installed and enabled.

#### Solution:
Ensure that standard Magento field names are used and that the Hyvä compatibility package is active.

---

## Still Need Help?

If you require assistance or have a custom storefront setup:

* Submit a support ticket at [Webkul UVdesk Support](https://webkul.uvdesk.com/en/customer/create-ticket/).
* Explore our development and support services at [Webkul Magento Development Services](https://webkul.com/magento-development/).
