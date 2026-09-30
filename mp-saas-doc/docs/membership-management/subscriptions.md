# Manage Subscriptions

The **Manage Subscriptions** section provides administrators with an audit grid to monitor all active, pending, expired, and cancelled seller SaaS subscriptions.

---

## Subscription Audit Grid

Navigate to:
**Marketplace Management > Saas Configuration > Manage Subscriptions**.

![Manage Subscriptions Grid](/images/image-16.png)
*Figure 8.4: Seller subscriptions audit grid with plan and status details.*

---

## Audit Grid Columns & Data Points

The grid tracks the complete lifecycle of vendor subscriptions:

| Column Header | Description |
| :--- | :--- |
| **Subscription ID / Reference** | Unique gateway profile identifier (PayPal Billing Agreement ID or Stripe Customer Subscription ID). |
| **Seller Name & Store** | Vendor identity and associated storefront name. |
| **Plan / Duration Title** | Name of the membership plan the vendor is subscribed to. |
| **Subscription Charge** | Amount billed per subscription cycle. |
| **Start Date** | Date and timestamp when the subscription was initiated. |
| **Next Billing Date** | Scheduled date for the next automated renewal payment. |
| **Status** | Current operational status of the subscription (**Active**, **Pending**, **Expired**, or **Cancelled**). |

---

## Subscription Lifecycle States

<div class="state-pipeline" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 10px; margin: 24px 0;">
  <div style="background: var(--vp-c-bg-elv, #ffffff); border: 1px solid var(--vp-c-border, #eaeaea); border-radius: 6px; padding: 10px 16px; font-weight: 600; font-size: 13px; text-align: center;">Checkout Initiated</div>
  <span style="color: var(--vp-c-text-mute, #888888); font-weight: 700; font-size: 16px;">→</span>
  <div style="background: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 6px; padding: 10px 16px; font-weight: 700; font-size: 13px; text-align: center;">Pending</div>
  <span style="color: var(--vp-c-text-mute, #888888); font-weight: 700; font-size: 16px;">→</span>
  <div style="background: #dcfce7; color: #166534; border: 1.5px solid #86efac; border-radius: 6px; padding: 10px 18px; font-weight: 800; font-size: 13px; text-align: center;">Active (0% Commission)</div>
  <span style="color: var(--vp-c-text-mute, #888888); font-weight: 700; font-size: 16px;">→</span>
  <div style="display: flex; flex-direction: column; gap: 6px;">
    <div style="background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; border-radius: 6px; padding: 6px 12px; font-weight: 600; font-size: 12px; text-align: center;">Expired (Renewal Lapsed)</div>
    <div style="background: #f3f4f6; color: #374151; border: 1px solid #e5e7eb; border-radius: 6px; padding: 6px 12px; font-weight: 600; font-size: 12px; text-align: center;">Cancelled (Terminated)</div>
  </div>
</div>

* **Active**: The vendor is currently in good standing. Commission calculations are automatically bypassed ($0.00 commission), and subdomain access is fully operational.
* **Pending**: The subscription checkout was initiated but waiting for gateway confirmation.
* **Expired**: The subscription reached the end of its duration without successful renewal. Regular marketplace commissions resume.
* **Cancelled**: The subscription agreement was terminated.
