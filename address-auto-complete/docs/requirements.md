# Requirements

Before setting up the **Magento 2 Google Address Auto Complete (Webkul_GoogleAddressAutoComplete)** extension, review the basic requirements below.

---

## Supported Platforms

| Requirement | Supported Versions | Notes |
| :--- | :--- | :--- |
| **Magento Platform** | Adobe Commerce & Magento Open Source 2.0.x – 2.4.x | Tested and fully compatible with Magento **2.4.6**, **2.4.7**, **2.4.8**, and **2.4.9** |
| **PHP Version** | PHP 7.4 up to PHP 8.5 | Matches your store's Magento requirements |
| **Frontend Themes** | Standard Magento Luma, Blank, Custom Themes, and Hyvä Themes | Hyvä theme uses the included companion package |

---

## Google Cloud Account Requirements

To enable address autocomplete and suggestions across your store, a **Google Maps API Key** is required.

### How to Obtain Your Google Maps API Key:
* **Instant Demo Key (No Credit Card Required):** You can generate a free testing key in seconds at the official [Google Maps Demo Key](https://developers.google.com/maps/documentation/javascript/demo-key) page without setting up billing.
* **Production Key (Google Cloud Console):** For live storefronts, sign in to [Google Cloud Console](https://console.cloud.google.com/), navigate to **Google Maps Platform > Keys & Credentials**, and create an API key with **Maps JavaScript API** and **Places API (New)** enabled.

::: tip Step-by-Step Instructions
For complete walkthroughs of both options, see our [Google Maps API Setup Guide](/google-api-setup.html).
:::

---

## Browser & Device Compatibility

Address autocomplete works smoothly across all modern web browsers and devices:

* **Desktop Browsers:** Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge.
* **Mobile Devices:** Android smartphones, iPhones, and tablets (optimized for touch screens and mobile keyboards).

::: tip Next Step
Follow the [Installation](/installation.html) guide to install the extension, or see [Google Maps API Setup](/google-api-setup.html) to create your API key.
:::
