# General Module Configuration

To configure the general options and validity periods for the **Magento 2 Gift Card** extension, navigate to:

**Stores > Configuration > Webkul > Gift Card**

![Module Configuration Settings](/images/module-configuration-setting.webp)

---

## Configuration Settings Overview

Under the **Gift Card** configuration tab, administrators can adjust the fundamental behavior and validity lifetime of generated gift cards.

### 1. General Settings

| Field | Description | Options / Format |
| :--- | :--- | :--- |
| **Active** | Enables or disables the Gift Card module functionality across the selected store view or global website. | **Yes** / **No** |

When set to **Yes**, the Gift Card product type becomes available for creation in the catalog, gift card checkout inputs are displayed, and gift card accounts are accessible in customer dashboards.

---

### 2. Gift Card Active Duration

The active duration defines how many calendar days a generated gift card remains valid from the moment of dispatch or order invoicing.

| Field | Description | Requirement |
| :--- | :--- | :--- |
| **No. of days** | Specifies the number of days a gift card code remains active before expiring. | Positive Integer (e.g., `30`, `60`, `365`) |

::: tip Expiration Behavior
- Once the configured duration elapses, the gift card status is automatically updated to **Expired**.
- Customers cannot redeem or apply expired gift cards during checkout.
- If an admin extends the duration or modifies the card status directly from the Admin Panel, the customer will be able to utilize any remaining balance.
:::

---

## Configuration Best Practices

1. **Store-View Scoping:** If operating multi-currency or multi-country storefronts, configure gift card durations and email templates per Website or Store View to align with local consumer regulations.
2. **Clear Expiration Terms:** Communicate the expiration window prominently in your store terms and in the gift card notification email template so recipients know when their credit expires.
3. **Cron Verification:** Ensure Magento cron is active; cron workers periodically execute scheduled expiration checks on active gift card balances.
