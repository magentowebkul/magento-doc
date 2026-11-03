# Cart Rules & Checkout

Purchasing recurring subscriptions follows specialized cart validation rules and dedicated payment gateway routing to guarantee synchronized recurring billing schedules.

---

## Multiple Subscription Cart Rules

When the administrator sets **Allow Multiple Subscriptions in Cart** to **Yes**, customers can bundle more than one subscription item in a single cart session, subject to two important business conditions:

![Allow Multiple Subscriptions Setting](/images/webkul-magento2-multi-vendor-recurring-payments-allow-more-than-one-products-in-cart-field.png)

### Rule 1: Non-Subscription Products Cannot Be Mixed

If a subscription product is in the cart and a customer attempts to add a regular one-time purchase item (or clicks *Add to Cart* without selecting a subscription plan), the system blocks the addition:

```text
"You can not add other product with subscription product"
```

![Error Mixing Non-Subscription Products](/images/webkul-magento2-multi-vendor-recurring-payments-error-message-on-adding-more-than-one-products-in-cart.png)

### Rule 2: Start Dates and Durations Must Match

When purchasing multiple subscription items together, payment processors require identical billing cycles so future renewal invoices can process simultaneously.

If a customer tries to add a second subscription product with a different duration frequency or start date:

```text
"Start dates and Duration types of all added subscriptions must be same"
```

![Error on Mismatched Duration or Start Date](/images/webkul-magento2-multi-vendor-recurring-payments-error-message.png)

To successfully add multiple subscription items:
* Select the exact same **Duration Type** (e.g. *Weekly*) and the same **Start Date** as the item already in the cart:

![Matching Subscription Plan Selection](/images/webkul-magento2-multi-vendor-recurring-payments-subscription-plan-selection.png)

* Both subscription items will be added cleanly into the cart:

![Multiple Subscriptions in Cart](/images/webkul-magento2-multi-vendor-recurring-payments-new-subscription-product-added-to-cart.png)

---

## Checkout Flow

### Step 1: Shipping Address & Rates

Customers proceed to checkout and select their desired shipping address and method as usual:

![Shipping Step](/images/webkul-magento2-multi-vendor-recurring-payments-shipping.png)

---

### Step 2: Payment Gateway Selection

On the **Review & Payments** step, only the allowed recurring payment methods are displayed:

![Checkout Payment Step](/images/webkul-magento2-multi-vendor-recurring-payments-checkout-page.png)

#### Option A: PayPal Express Checkout

1. Customer selects **PayPal Express Checkout (Recurring)**.
2. Clicking **Continue to PayPal** opens the PayPal authentication and billing agreement window.

![PayPal Express Authentication](/images/checkout_page_payment_make_paypal_express_at_paypal.png)

3. The customer reviews the recurring billing schedule and approves the mandate.

![PayPal Review Confirmation](/images/webkul-magento2-multi-vendor-recurring-payments-add-paypal-information.png)

4. The customer is returned to the store's order success page.

![Order Success](/images/webkul-magento2-multi-vendor-recurring-payments-success-message.png)

#### Option B: Stripe / Credit Card Checkout

1. Customer selects **Webkul Recurring Stripe Payment**.

![Stripe Checkout Option](/images/webkul-magento2-multi-vendor-recurring-payments-checkout-with-stripe.png)

2. The customer enters their cardholder name, credit/debit card number, expiration, and CVC via Stripe's embedded Elements.

![Stripe Card Details](/images/add-stripe-details-1.png)

3. Clicking **Subscribe** tokenizes the card details securely, creates the recurring customer profile on Stripe, and places the initial order.

![Stripe Success](/images/webkul-magento2-multi-vendor-recurring-payments-success-message-2.png)
