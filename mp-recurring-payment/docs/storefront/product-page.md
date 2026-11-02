# Browsing & Product Page

Customers can discover and purchase subscription products seamlessly across the marketplace storefront.

---

## Guest User Experience: "Login to Subscribe"

Because recurring billing profiles require continuous customer account association to manage automated renewal orders, guest users are required to sign in or register before subscribing.

* When a non-authenticated visitor views a subscription product on a catalog grid or product page, the action button displays **Login to Subscribe**:

![Guest Login to Subscribe](/images/webkul-magento2-multi-vendor-recurring-payments-login-to-subscribe.png)

* Clicking the button redirects the guest to the customer login / registration page.
* Once logged in, the customer is returned to the product page with active subscription controls enabled:

![Subscribe Button Visible After Login](/images/webkul-magento2-multi-vendor-recurring-payments-subscribe-button-visibility-after-login.png)

---

## Product Page Subscription Configuration

On the product detail page, customers can evaluate subscription terms and choose their preferred delivery schedule:

![Storefront Product Page](/images/webkul-magento2-multi-vendor-recurring-payments-product-page.png)

Customers configure the following parameters:

1. **Choose Subscription Plan**: Select from the seller's configured duration frequencies (e.g., *Weekly*, *Monthly*, *Yearly*).
2. **Start Date**: Select the calendar date on which subscription deliveries and billing cycles should officially begin.
3. **Fee Breakdown Display**: The page clearly indicates:
   * **Initial Fee**: Immediate setup charge included in the initial order.
   * **Subscription Amount**: Recurring fee that will be automatically billed on each subsequent renewal cycle.

![Select Plan and Start Date](/images/webkul-magento2-multi-vendor-recurring-payments-chose-subscription-plan.png)

4. Click **Subscribe** (or **Add to Cart**) to place the subscription item in the shopping cart.

::: tip Storefront Visibility
The **Subscribe** option is displayed dynamically across the **Category listing page**, **Search results page**, and **Product detail page**.
:::
