# Customer Subscription Portal

Subscribers maintain full transparency and control over their active memberships and scheduled renewals through the customer account dashboard.

---

## Accessing "My Subscriptions"

1. In the customer storefront, log in and navigate to **My Account**.
2. In the account navigation menu, click **My Subscriptions**.

![Customer Subscriptions Dashboard](/images/webkul-magento2-multi-vendor-recurring-payments-customer-end-subscriptions.png)

The subscriptions table presents:
* **Order ID**: Original order reference.
* **Reference Profile ID**: Payment gateway subscription identifier (e.g. PayPal Billing Agreement ID or Stripe Subscription ID).
* **Product Name**: Subscribed product or service.
* **Subscription Type**: Active interval (e.g., Weekly, Monthly).
* **Status**: Current lifecycle state (`Subscribed`, `Unsubscribed`).
* **Actions**: Links to **View** details or **Unsubscribe**.

---

## Viewing Subscription Details

Clicking the **View** link opens the comprehensive subscription record:

![Customer View Subscription Details](/images/webkul-magento2-multi-vendor-recurring-payments-customer-end-view-subscription.png)

Subscribers can inspect:
* Product details and delivery specifications.
* Initial payment amount charged upon sign-up.
* Recurring billing rate charged on each scheduled interval.
* Subscription creation date and active start date.

---

## Customer Self-Service Cancellation

Customers have full liberty to cancel their subscription at any time without having to contact customer support:

1. Locate the subscription in the **My Subscriptions** list or inside the detail view.
2. Click the **UnSubscribe** link.
3. Confirm the cancellation prompt.
4. The module immediately updates the subscription status to **Unsubscribed** in Magento and dispatches an API webhook call to PayPal / Stripe to cancel the recurring billing agreement.
5. No further renewal charges will be deducted from the customer's account.
