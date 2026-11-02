# Connect with Stripe

To receive payments from customers who subscribe via credit card / Stripe, marketplace sellers must connect their Stripe account with the platform's Stripe Connect application.

---

## Onboarding Procedure

1. In the seller dashboard, navigate to **Recurring Subscriptions > Connect To Stripe**.
2. The **Connect To Stripe** management page displays.

![Seller Connect with Stripe](/images/webkul-magento2-multi-vendor-recurring-payments-seller-end-connect-with-stripe.png)

3. Click the **Connect with Stripe** button.
4. The seller is redirected to the official Stripe Connect authorization portal:
   * If the seller already has a Stripe account, they log in and grant platform access.
   * If they do not have a Stripe account, they complete Stripe's standard onboarding form (business details, identity verification, and bank payout information).
5. Upon authorization, Stripe redirects the seller back to the marketplace store with a success status.
6. The seller's connected Stripe account ID is securely associated with their vendor profile in Magento.

::: tip Direct Transfers
With Stripe Connect configured, payments collected from subscribers can be split automatically between the marketplace commission and the vendor's connected account.
:::
