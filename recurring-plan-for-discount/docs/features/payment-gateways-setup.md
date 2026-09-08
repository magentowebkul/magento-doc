# Payment Gateways Setup

The **Magento 2 Recurring Plan For Discount** module integrates with **PayPal Express Checkout** and **Stripe** to process initial plan purchases and automated recurring renewal billing.

To enable and configure both payment methods, navigate in your Magento Admin to **Stores > Configuration > Sales > Payment Methods**.

---

## Setting up PayPal Express Checkout

To enable PayPal for recurring subscription billing:

1. Scroll to the **Webkul Recurring Discount PayPal Express Checkout Payment Method** section under Payment Methods.
2. Fill in the required credentials and configuration options:
   - **Enabled:** Set to **Yes** to enable PayPal recurring payments.
   - **Title:** Enter the title displayed to customers during checkout (e.g., *Recurring PayPal Express Checkout*).
   - **Sandbox Mode:** Set to **Yes** for testing, or **No** for live production stores.
   - **Client ID & Client Secret:** Enter your REST API Client ID and Secret obtained from your [PayPal Developer Dashboard](https://developer.paypal.com/).
   - **Payment Action:** Select the appropriate payment action for billing cycles.

![PayPal Express Checkout Configuration](/images/paypal.webp)

---

## Setting up Stripe Payment Method

To enable Stripe for seamless, secure card-based recurring billing:

1. In the same Payment Methods menu, locate the **Webkul Recurring Discount Stripe Payment Method** section.
2. Configure the following fields:
   - **Enabled:** Set to **Yes** to enable the Stripe recurring gateway.
   - **Title:** Enter the payment method title displayed on the checkout page (e.g., *Webkul Recurring Stripe Payment*).
   - **Sandbox / Test Mode:** Select **Yes** when testing with Stripe test card numbers, or **No** for live transactions.
   - **API Publishable Key:** Enter your Stripe publishable key (`pk_test_...` or `pk_live_...`) from the [stripe dashboard](https://dashboard.stripe.com/login).
   - **API Secret Key:** Enter your Stripe secret key (`sk_test_...` or `sk_live_...`) from the [stripe dashboard](https://dashboard.stripe.com/login).
   - **Generate Webhooks:** Click on this button to generate the webhook endpoint.

![Stripe Payment Method Configuration](/images/stripe-payment-method-1.png)

::: tip Stripe Webhook Configuration
Stripe requires webhooks to notify Magento when renewal invoices are paid, failed, or cancelled.
:::
