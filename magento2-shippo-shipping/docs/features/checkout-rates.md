# Live Rates & Checkout

Learn how customers experience Shippo real-time multi-carrier rates across your storefront cart and checkout flows.

---

## 1. Shopping Cart Rate Estimation

When a customer adds products to their cart and views the shopping cart page:

1. The customer enters their destination Country, State/Province, and ZIP/Postal Code in the **Estimate Shipping and Tax** block.
2. Magento contacts the Shippo API with the parcel weight, calculated dimensions, origin warehouse address, and destination address.
3. Available carrier service options (e.g., *USPS Priority Mail*, *UPS Ground*, *FedEx 2Day*) and live calculated costs appear dynamically.

![Shopping Cart Shipping Rates](/images/cart-shipping-rates.webp)

---

## 2. Checkout Shipping Step

When proceeding through checkout:

1. The buyer inputs or selects their shipping delivery address.
2. Shippo recalculates exact delivery rates for the selected address.
3. The customer chooses their preferred transit speed and carrier rate option.
4. Clicking **Next** advances the customer to the payment step.

![Checkout Shipping Methods](/images/checkout-shipping-methods.webp)

---

## 3. Order Review & Payment

On the payment review screen:

1. The chosen Shippo shipping method and fee are summarized under **Shipping Method** in the order summary sidebar.
2. The shipping charge is reflected in the cart Grand Total.
3. Once the customer clicks **Place Order**, the shipping service code and quoted rate are bound to the Magento order record.

![Checkout Payment Review](/images/checkout-payment-review.webp)
