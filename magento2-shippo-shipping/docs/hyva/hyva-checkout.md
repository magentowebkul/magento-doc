# Hyvä Theme Support

The **Webkul Shippo Shipping Hyvä** extension provides native, high-performance compatibility with **Hyvä Themes** and **Hyvä Checkout**. It replaces legacy Luma JavaScript checkout dependencies with lightweight **Alpine.js** state management and reactive **Magewire** components.

---

## Overview

When running a Hyvä-powered storefront, the compatibility extension (`Webkul_ShippoShippingHyva`) seamlessly integrates real-time carrier shipping rates and address validation into Hyvä Checkout. It ensures that customer address verification alerts, dynamic carrier service selections, and order summary recalculations match the lightning-fast performance and clean aesthetics of Hyvä Themes.

---

## Features on Hyvä Storefront

### 1. Real-Time Shipping Method Quotes
- **Instant Carrier Queries**: When customers enter their destination address at checkout, Magewire communicates directly with the Shippo API to fetch real-time carrier rates (e.g., DHL Express, USPS, UPS, FedEx).
- **Interactive Method Cards**: Quoted shipping services render as clean, selectable method options styled with Tailwind CSS.
- **Dynamic Total Calculation**: Selecting a shipping method instantly updates the order summary totals without a full page reload.

![Hyvä Checkout Shipping Methods & Summary](/images/hyva-checkout-shipping-methods.webp)

---

### 2. Automated Address Validation
- **Checkout Address Verification**: When **Validate Address on Checkout** is enabled in the module settings, Magewire validates street lines, city, state, and postal code against official postal databases.
- **Inline Error Messaging**: If an address is invalid or carrier rates cannot be returned, a clean alert banner informs the customer directly within the checkout flow.

![Hyvä Checkout Real-Time Address Validation Alert](/images/hyva-checkout-address-validation.webp)

---

## Installation & Setup for Hyvä

1. Download and upload both module packages to your server:
   - `app/code/Webkul/ShippoShipping/`
   - `app/code/Webkul/ShippoShippingHyva/`
2. Run standard Magento deployment commands:
   ```bash:no-line-numbers
   php bin/magento module:enable Webkul_ShippoShippingHyva
   php bin/magento setup:upgrade
   php bin/magento setup:di:compile
   php bin/magento cache:flush
   ```
3. The compatibility module automatically registers with Hyvä's fallback registry and handles template overrides seamlessly.
