# Frequently Asked Questions

**Q: Which payment gateways support recurring subscription billing in this module?**  
A: The module supports **Stripe** and **PayPal Express Checkout** for recurring subscriptions and renewal billing.

**Q: Can I create different discount plans with varying cycle intervals?**  
A: Yes. Store administrators can configure any number of plans with **Weekly**, **Monthly**, or **Yearly** cycles, choosing either a **Fixed** currency discount or a **Percentage** discount.

**Q: How is the discount applied when a subscriber makes a purchase?**  
A: Discounts are calculated and applied automatically to the customer's cart subtotal as **Subscription Discount** whenever an authenticated customer with an active plan adds eligible products to their cart. No coupon code is required.

**Q: Can customers cancel their subscription anytime?**  
A: Yes. Subscribed customers can navigate to **Discount Plan > My Subscribed Plans** within their customer account dashboard and click the **Cancel** button on any active plan.

**Q: Does the customer need to register an account before subscribing?**  
A: Yes. Subscriptions must be associated with a registered customer account so that the discount benefits and recurring renewal cycles can be tracked correctly.

**Q: What happens if a recurring renewal payment fails?**  
A: If a renewal charge fails via Stripe or PayPal, the module updates the subscription status accordingly and automatically sends a failed transaction notification email to the customer.

**Q: Can administrators manage subscriptions from the admin panel?**  
A: Yes, all customer subscriptions, renewal dates, and payment statuses are accessible and manageable under **Recurring Plan for Discount > Manage Recurring Discount Subscriptions**.
