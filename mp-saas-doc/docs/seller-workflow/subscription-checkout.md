# Seller Subscription & Checkout Workflow

This section outlines the end-to-end seller experience: selecting a SaaS membership plan, completing the dedicated recurring checkout process, and unlocking the 0% commission benefit.

---

## Browsing & Selecting Membership Plans

1. The seller logs in to their customer account on the storefront.
2. In the seller account sidebar navigation, click **Pay Membership Amount**.

![Seller Navigation — Pay Membership Amount](/images/image-19.png)
*Figure 9.1: Pay Membership Amount menu option in the seller portal.*

3. The page displays all active SaaS membership plans created by the administrator, including duration and cycle charge:

![Seller Membership Plans List](/images/image-20.png)
*Figure 9.2: Viewing available SaaS subscription tiers on the storefront.*

---

## Cart Exclusivity & Dedicated Checkout

1. The seller clicks **Buy Now / Subscribe** on their desired plan.
2. The membership plan is added to the shopping cart, and a confirmation banner is displayed:

![Added to Cart Success Message](/images/image-21.png)
*Figure 9.3: Membership tier added to cart confirmation.*

3. Click **View and Edit Cart** to review the subscription terms:

![Shopping Cart View](/images/image-22.png)
*Figure 9.4: Reviewing the SaaS membership plan in the shopping cart.*

::: tip Cart Exclusivity Rule
To maintain subscription billing integrity and recurring authorization agreements, SaaS membership plans cannot be purchased concurrently with regular marketplace products. Standard products must be purchased in a separate transaction.
:::

---

## Completing Recurring Payment

1. Proceed to the checkout page. The seller selects an enabled recurring payment gateway (**PayPal Recurring Express Checkout** or **Recurring Stripe Payment Method**):

![Checkout Payment Method Selection](/images/image-23.png)
*Figure 9.5: Selecting a recurring payment method.*

2. Click **Place Order**.
3. The seller is redirected to the secure gateway portal (PayPal or Stripe) to authorize the recurring mandate:

![Gateway Authentication](/images/image-24.png)
*Figure 9.6: Authorizing recurring payment on the payment gateway portal.*

4. After authorization, the gateway returns the seller to the store with an order confirmation and order ID:

![Order Success Screen](/images/image-25.png)
*Figure 9.7: Order placement confirmation page.*

---

## Active Subscription Status & 0% Commission Benefit

Once payment is authorized, the seller's account immediately reflects active tenant status under **Pay Membership Amount**:

![Active Subscription Notification](/images/image-26.png)
*Figure 9.8: Active membership details displayed in the seller portal.*

### Commission Comparison

With an active subscription, the marketplace administrator's commission is bypassed entirely:

| Standard Commission Mode | Zero-Commission SaaS Mode |
| :---: | :---: |
| ![Standard Commission Deduction](/images/image-27.png) | ![Zero Commission with Active SaaS](/images/image-28.png) |
| *Figure 9.9: Order breakdown with admin commission deducted.* | *Figure 9.10: Order breakdown with 0% admin commission.* |

* **Standard Mode**: Admin deducts a percentage or fixed fee from every vendor order.
* **SaaS Mode**: Admin commission is **$0.00**. The vendor retains 100% of their net sales while their SaaS plan is active.
