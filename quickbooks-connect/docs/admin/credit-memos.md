# Credit Memos Management

When store orders are refunded in Magento 2, the **Magento 2 QuickBooks Connect** extension synchronizes refunds to QuickBooks Online as **Credit Memos** to maintain accurate financial ledgers.

---

## Automatic Credit Memo Sync

Whenever a store administrator issues an online or offline refund for an order in Magento Admin (**Sales > Orders > View Order > Credit Memo > Refund**), the extension's refund observer (`SalesOrderRefundAfterObserver`) executes automatically:

1. Detects the newly created Magento Credit Memo.
2. Formats refunded line items, quantities, shipping refund, and tax adjustments.
3. Calls the QuickBooks API V3 SDK to create an official QuickBooks **Credit Memo**.
4. Saves the mapping relationship between Magento Credit Memo ID and QuickBooks Credit Memo ID in the database.

---

## Manual Credit Memo Synchronization

To manually export historical or un-synced credit memos:

1. Log in to **Magento Admin**.
2. Navigate to **All Apps > Credit Memos**.

![Sales Credit Memos Mass Action](/images/magento-credit-memo-action.webp)

3. Select the target credit memo records using the grid checkboxes.
4. From the **Actions** dropdown menu, select **Export Credit Memos on QB**.
5. A confirmation dialog will appear. Click **OK** to start the export process.

![Confirmation Dialog](/images/magento-credit-memo-confirm.webp)

6. Stay on the page until the batch processing window completes and displays a success execution log.

![Credit Memos Export Process](/images/magento-credit-memo-process.webp)

---

## Map Credit Memo Admin Grid

View all synchronized refund records by navigating to **Connect > Map Credit Memo**:

![Map Credit Memo Admin Grid](/images/map-credit-memo-grid.webp)

| Column Name | Description |
| :--- | :--- |
| **Map ID** | Internal database relationship ID. |
| **Credit Memo ID** | Increment ID of the Magento Credit Memo (e.g., `#000000005`). |
| **Order ID** | Associated Magento Sales Order ID. |
| **QB Credit Memo ID** | Unique Credit Memo ID generated inside QuickBooks. |
| **Refund Amount** | Total refunded currency value synchronized. |
| **Created At** | Timestamp of mapping synchronization. |
| **Action** | Click **View** to inspect detailed credit memo item records. |

Clicking **View** displays the Magento Credit Memo details:

![Magento Credit Memo Details 1](/images/magento-credit-memo-detail-1.webp)

![Magento Credit Memo Details 2](/images/magento-credit-memo-detail-2.webp)

---

## Verifying Credit Memos in QuickBooks

To view synchronized credit memos inside your QuickBooks Online account:

1. Log in to **QuickBooks Online**.
2. Navigate to **All Apps > Sales & Get Paid > Sales Transactions**.
3. Filter by transaction type **Credit Memos**.

![QuickBooks Credit Memos List](/images/qb-credit-memos-list.webp)

4. Click on any Credit Memo entry to verify customer name, refunded item list, tax adjustments, tracking class, and total refunded amount:

![QuickBooks Credit Memo Header](/images/qb-credit-memo-header.webp)

![QuickBooks Credit Memo Totals](/images/qb-credit-memo-totals.webp)
