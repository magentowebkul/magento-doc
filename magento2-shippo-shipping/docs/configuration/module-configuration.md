# Module Configuration

Store administrators can manage global shipping availability, Shippo API keys, address verification, and country restrictions from the Magento Admin Panel.

---

## Accessing Configuration Settings

1. Log in to your **Magento Admin Panel**.
2. Navigate to **ShippoShipping > Shippo Configuration Settings** (in the main sidebar above *Sales*), or go to **Stores > Configuration > Sales > Delivery Methods > Webkul Shippo Shipping**.

![Module Configuration](/images/admin-module-configuration.webp)

---

## General Settings Reference

Below is the complete reference for all module configuration fields:

### 1. Enabled for Checkout
* **Options**: `Yes` / `No`
* **Default**: `No`
* **Description**: Controls global carrier availability at checkout. Set to `Yes` to enable Shippo shipping rates across the storefront shopping cart and checkout.

### 2. Title
* **Type**: Text Field
* **Default**: `Shippo Shipping`
* **Description**: Customizes the public shipping method title displayed to customers on the shopping cart and checkout shipping selection steps.

### 3. Shippo API Key
* **Type**: Password / Encrypted Text
* **Default**: Empty
* **Description**: Your private Shippo authentication token (Live or Test token) obtained from your Shippo dashboard under **Settings > API**. Connects Magento to your Shippo carrier accounts.

### 4. Validate Address on Checkout
* **Options**: `Yes` / `No`
* **Default**: `No`
* **Description**: Enables real-time address validation on checkout to verify customer street lines, unit numbers, and postal codes against carrier postal databases.

### 5. Ship to Applicable Countries
* **Options**: `All Allowed Countries` / `Specific Countries`
* **Default**: `All Allowed Countries`
* **Description**: Determines whether Shippo shipping applies to all countries configured in your store or only select destination markets.

### 6. Ship to Specific Countries
* **Type**: Multi-select List
* **Default**: Empty
* **Description**: If **Ship to Applicable Countries** is set to `Specific Countries`, select the specific allowed destination countries from this list.

### 7. Show Method if Not Applicable
* **Options**: `Yes` / `No`
* **Default**: `No`
* **Description**: Controls whether the shipping method title is shown with an error message when no carrier rates are available for the destination address.

### 8. Displayed Error Message
* **Type**: Text Area
* **Default**: `This shipping method is not available. To use this shipping method, please contact us.`
* **Description**: The custom message displayed to customers when carrier services cannot return valid quotes or when the method is unavailable.

### 9. Sort Order
* **Type**: Numeric Digits
* **Default**: `0`
* **Description**: Determines the display order of Shippo Shipping relative to other enabled delivery methods on the cart and checkout pages.

---

::: tip Cache Flush
After updating any configuration field, click **Save Config** in the top-right header and flush the Magento configuration cache under **System > Cache Management**.
:::
