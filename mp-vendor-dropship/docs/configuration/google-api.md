# How to Get Google Maps API Keys

The **Magento 2 Multi-Vendor Dropship** extension utilizes Google Maps APIs to provide address auto-completion when creating warehouses and calculate geodesic distances for nearest-warehouse automatic order routing.

---

## Step 1: Open Google Cloud Console

1. Navigate to the [Google Cloud Console](https://console.cloud.google.com/) or the [Google Maps Platform](https://developers.google.com/maps).
2. Sign in with your Google administrator account.
3. In the project selector dropdown, click **New Project**, name your project (e.g., `Magento 2 Dropship`), and click **Create**.

![Google Maps Platform Get API Keys](/images/webkul-magento2-marketplace-googleapi-keys-1.png)

---

## Step 2: Enable Required APIs

To support address search and geocoding, enable the following APIs under **APIs & Services > Library**:

1. **Maps JavaScript API**
2. **Geocoding API**
3. **Places API**
4. **Distance Matrix API**

![Enable Google Maps APIs](/images/Google-Maps-Platform-Geo-location-APIs-_-Google-Maps-Platform-_-Google-Cloud.jpg)

When prompted with the setup wizard, select **Maps**, **Routes**, and **Places** checkboxes to ensure all geographic features function without limitation:

![Enable Platform Features](/images/Google-Maps-Platform-Geo-location-APIs-_-Google-Maps-Platform-_-Google-Cloud-1.jpg)

---

## Step 3: Generate and Restrict API Key

1. Go to **APIs & Services > Credentials**.
2. Click **+ Create Credentials** at the top and select **API Key**.
3. A modal will display your new API Key. Copy this key string.
4. *(Recommended)* Click **Edit API key** to configure application restrictions (HTTP referrers / IP addresses) and API restrictions (limiting key usage specifically to Maps, Places, and Geocoding APIs) to prevent unauthorized quota usage.

---

## Step 4: Configure in Magento Admin

1. Open your Magento 2 Admin Panel.
2. Navigate to **Stores > Configuration > Webkul > Vendor Dropship Manager > General Settings**.
3. Set **Warehouse Assign** to **Auto**.
4. Paste your generated key into the **Google Api Key** field.
5. Click **Save Config** and flush the cache.
