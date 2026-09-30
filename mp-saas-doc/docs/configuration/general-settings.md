# General Settings & Email Configuration

To configure core module behavior and notification emails, log in to the Magento Admin Panel and navigate to:

**Stores > Settings > Configuration > Webkul > SAAS Configuration**.

![Admin SaaS Configuration Panel](/images/image-7.png)
*Figure 6.1: Webkul SAAS Configuration section in Magento Admin.*

---

## General Settings

| Configuration Field | Description | Recommended Value |
| :--- | :--- | :--- |
| **Enabled** | Master switch to turn the SaaS subscription engine on or off across the marketplace. | Set to **Yes** to activate tenant features. |
| **Allowed payment methods for Membership** | Multi-select drop-down specifying payment methods permitted for purchasing SaaS memberships. | Select **Recurring Stripe Payment Method** and/or **PayPal Recurring Express Checkout**. |
| **Hint for setup seller subdomain** | Onboarding helper instructions displayed to vendors in their seller profile to guide them on choosing an appropriate subdomain slug. | Enter clear instructions (e.g., *Enter lowercase alphanumeric characters without spaces or symbols*). |

::: tip Payment Method Restriction
Only recurring payment methods configured to handle recurring authorization mandates (PayPal or Stripe) should be selected in **Allowed payment methods for Membership**. Standard offline payment methods (such as Bank Transfer or Cash on Delivery) do not support automatic recurring billing cycles.
:::

---

## Custom Email Templates

The module automates customer communications during subscription lifecycle events:

| Email Template Field | Event Trigger | Description |
| :--- | :--- | :--- |
| **Membership Plan Subscription Template** | Initial Subscription | Dispatched immediately to the seller when they successfully purchase and initiate a SaaS membership plan. Contains plan duration, pricing, and next billing details. |
| **Membership Plan Notification About Plan Transaction** | Recurring Cycle Renewal | Sent automatically to the seller whenever a subsequent recurring billing cycle executes successfully or when an automated transaction occurs. |

To customize these emails:
1. Navigate to **Marketing > Communications > Email Templates**.
2. Click **Add New Template**.
3. Select the respective default SaaS template from the **Template** selector and click **Load Template**.
4. Adjust the HTML and layout as needed, save, and select your custom template under **Stores > Configuration > Webkul > SAAS Configuration**.
