# Module Configuration

Configure the global store settings for **Marketplace Canada Post Shipping** in the Magento Admin panel to enable real-time rating, connect developer credentials, and set delivery rules.

---

## Access Carrier Configuration

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Stores > Configuration > Sales > Delivery Methods**.
3. Expand the **Marketplace Canada Post Shipping** accordion section.

![Admin Carrier Configuration](/images/admin-carrier-config-general.webp)

---

## Configuration Settings Reference

The settings are organized systematically to configure credentials, delivery speed estimates, shipping methods, packaging, fees, and multi-vendor permissions.

### 1. General Carrier Parameters

| Field Label | Setting / Value | Description |
| :--- | :--- | :--- |
| **Enabled for Checkout** | Yes / No | Toggles the carrier on or off for buyer checkouts across the storefront. |
| **Sandbox Mode** | Yes / No | When set to **Yes**, the module directs API calls to Canada Post's development test gateway (`ct.soa-gw.canadapost.ca`). Set to **No** for production live operations. |
| **Title** | Text (e.g. *Webkul Canada Post Shipping*) | The carrier header text displayed on shopping carts and checkout shipping step. |
| **Agreement Type** | Contract / Non-Contract | Choose **Contract** if your business has negotiated commercial contract rates with Canada Post; choose **Non-Contract** if using commercial base or counter public rates. |

---

### 2. Canada Post API Authentication

Enter the credentials obtained from the Canada Post Developer Portal:

| Field Label | Setting / Value | Description |
| :--- | :--- | :--- |
| **API Key (Client ID)** | Obscure Text | Enter your 32-character Canada Post API Key (Client ID) from the Developer Portal. Securely encrypted in the Magento database. |
| **Customer Number** | Obscure Text | Enter your 10-digit Canada Post business Customer Number (e.g., `0001315191`). |
| **Agreement Number** | Obscure Text | *(Conditional — displayed when Agreement Type is Contract)* Enter your commercial contract agreement number. |
| **API Secret (Client Secret)** | Obscure Text | Enter your Canada Post API Secret (Client Secret) from the Developer Portal for OAuth 2.0 Bearer token authorization. |

---

### 3. Transit Estimates, Group & Measurements

| Field Label | Setting / Value | Description |
| :--- | :--- | :--- |
| **Delivery Time Offset** | Numeric (e.g. `1`) | Additional transit days added to the estimated delivery date quoted by Canada Post to account for warehouse handling and order fulfillment delays. |
| **Show Estimated Delivery Time** | Yes / No | When set to **Yes**, displays estimated delivery dates alongside each quoted Canada Post shipping method at checkout. |
| **Group Name** | Text (e.g. `toronto`) | Enter the place name or warehouse origin group identifier where shipments are prepared. |
| **Weight Unit** | Kilograms / Pounds | Select the unit of measurement used in your product catalog: **Kilograms** or **Pounds**. The module automatically converts weights to grams/kilograms as required by Canada Post. |

---

### 4. Allowed Shipping Methods

The available shipping options depend on your selected **Agreement Type**:

| Field Label | Options | Description |
| :--- | :--- | :--- |
| **Allowed Methods** *(Contract)* | Multiselect list | Available when **Agreement Type** is set to **Contract**: <br>• **Domestic:** Expedited Parcel (`DOM.EP`), Regular Parcel (`DOM.RP`), Priority (`DOM.PC`), Xpresspost (`DOM.XP`).<br>• **USA:** Priority Worldwide (Envelope, Pak, Parcel), Xpresspost USA (`USA.XP`), Expedited Parcel USA (`USA.EP`), Tracked Packet - US (`USA.TP`), Small Packet USA Air (`USA.SP.AIR`).<br>• **International:** International Parcel (Air/Surface), Priority Worldwide (Pak/Parcel), Small Packet International, Xpresspost International. |
| **Allowed Methods For Non Contract** | Multiselect list | Available when **Agreement Type** is set to **Non-Contract**, listing standard counter and non-contract parcel services. |

---

### 5. Free Shipping Configuration

| Field Label | Setting / Value | Description |
| :--- | :--- | :--- |
| **Free Method** | Dropdown (e.g. *None* or *Regular Parcel*) | Select the specific Canada Post service applied when an order qualifies for free shipping. |
| **Enable Free Shipping Threshold** | Enable / Disable | Set to **Enable** to offer free Canada Post shipping when customer orders meet a minimum spending threshold. |
| **Free Shipping Amount Threshold** | Numeric (e.g. `100.00`) | *(Conditional — visible when Enable Free Shipping Threshold is Enable)* Minimum order subtotal required to qualify for free shipping. |

---

### 6. Country Availability & Error Notifications

| Field Label | Setting / Value | Description |
| :--- | :--- | :--- |
| **Ship to Applicable Countries** | All Allowed Countries / Specific Countries | Choose whether Canada Post shipping is available worldwide or limited to selected destinations. |
| **Ship to Specific Countries** | Multiselect list | *(Conditional — visible when Specific Countries is selected)* Select the exact countries eligible for Canada Post shipping. |
| **Displayed Error Message** | Textarea | Custom message displayed to customers when Canada Post cannot quote rates for an address (e.g., *"This shipping method is currently unavailable. If you would like to ship using this shipping method, please contact us."*). |

---

### 7. Handling Fees

| Field Label | Setting / Value | Description |
| :--- | :--- | :--- |
| **Calculate Handling Fee** | Fixed / Percent | Choose between a flat surcharge per order (**Fixed**) or a percentage-based markup (**Percent**). |
| **Handling Fee** | Numeric (e.g. `0`) | Enter the surcharge value added to the live Canada Post quote. |

---

### 8. Multi-Vendor Permissions & Maintenance

| Field Label | Setting / Value | Description |
| :--- | :--- | :--- |
| **Allow Sellers to Save Canada Post Details** | Yes / No | Set to **Yes** to allow marketplace vendors to enter their own Canada Post Customer Number and API credentials in their seller portal. If set to **No**, all shipments will use the administrator's credentials. |
| **Show Method if Not Applicable** | Yes / No | Determines whether the carrier title is shown with an explanatory error notice when no valid methods apply. |
| **Debug** | Yes / No | Set to **Yes** to record raw API payloads, OAuth token grants, and error messages to `var/log/mpCanadaPost.log`. Useful during integration diagnostics. |
| **Canada Shipping Product Information** | Accordion / Note | Displays installed module version and Webkul official support links. |

---

::: tip Save Configuration & Refresh Cache
After updating your settings, click **Save Config** at the top right, then flush the cache:
```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Flushes Magento configuration and system cache tags to apply the new shipping settings immediately across the store." />
:::
