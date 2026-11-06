# Automated Address Validation

Shipping to incorrect or incomplete residential and commercial addresses leads to failed delivery attempts, costly package return fees, and carrier address-correction penalties.

Magento 2 Shippo Shipping incorporates built-in **Automated Address Validation** powered directly by Shippo's global postal verification databases.

---

## How Address Verification Works

When **Validate Address on Checkout** is enabled in the module settings:

1. **Address Input:** The customer fills in their destination street address, apartment/suite number, city, state, and postal code during checkout.
2. **Real-Time Verification:** Magento sends the address details to the Shippo Validation API.
3. **Validation Decision:**
   * **Valid Address:** Real-time carrier rates are calculated and displayed immediately.
   * **Incomplete or Invalid Address:** A clear warning alert appears on the checkout form prompting the customer to provide missing apartment/unit details or correct the postal code before completing the order.

![Address Validation Warning on Checkout](/images/checkout-address-validation-alert.webp)


