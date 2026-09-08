# Requirements & Prerequisites

Before installing the **Marketplace Catalog Translation for Magento 2** extension, review the system compatibility and prerequisites outlined below.

## Magento 2 Version Compatibility

The module is tested and supported across the following Adobe Commerce / Magento 2 versions:

| Component | Requirement |
| :--- | :--- |
| **Magento Community / Enterprise** | 2.0.x, 2.1.x, 2.2.x, 2.3.x, 2.4.x |
| **PHP Version** | Compatible with standard PHP releases for target Magento version |
| **Base Marketplace Extension** | Webkul Magento 2 Multi-Vendor Marketplace (Required Add-on) |

---

## Required Modules

::: warning Add-On Requirement
This module is an add-on for **Webkul’s Magento 2 Multi-Vendor Marketplace**. You MUST have the core Marketplace module installed and active on your Magento 2 system prior to running setup for this extension.
:::

---

## Google Cloud Translation API Prerequisites

The extension relies on Google Cloud Translation services to perform automated text translation.

### Step 1: Create a Google Cloud Project

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Log in with your Google Workspace or Gmail account.
3. Click **Select a Project** at the top bar and select **New Project**.
4. Name your project (e.g., `Magento Catalog Translation`) and click **Create**.

### Step 2: Enable the Cloud Translation API

1. In your project dashboard, navigate to **APIs & Services > Library**.
2. Search for **Cloud Translation API**.
3. Select the API from the search results and click **Enable**.

### Step 3: Enable Billing

::: danger Mandatory Billing Notice
Google Cloud requires an active billing account associated with your project to authorize Cloud Translation API requests. Requests made without billing enabled will fail with a `403 Access Not Configured` error.
:::

1. Navigate to **Billing** in the Google Cloud left navigation bar.
2. Link an active billing account to your project.

### Step 4: Generate an API Key

1. Go to **APIs & Services > Credentials**.
2. Click **Create Credentials** at the top and select **API Key**.
3. Copy the generated API Key to your clipboard (you will paste this key into your Magento Admin Configuration).

::: tip Security Recommendation
It is strongly recommended to restrict your API key by IP address or API restriction (selecting Cloud Translation API) in the Google Cloud Console to prevent unauthorized usage.
:::
