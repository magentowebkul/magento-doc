# Quotation Lifecycle & Request for Quotation (RFQ)

Quotations represent formal procurement proposals sent to suppliers before issuing binding purchase contracts. In Magento 2 Purchase Management, quotations allow buyers to request pricing, negotiate delivery windows, and verify stock availability.

---

## Quotations Grid Overview

Navigate to **Purchase Management > Quotations** to access the centralized quotation ledger.

![Manage Quotations Grid](/images/quotations-grid.webp)

The grid displays key quotation information:
- **Quotation ID / Increment ID** (e.g. `PO00012`)
- **Supplier Name & Contact**
- **Created Date**
- **Quotation Status** (`Draft`, `Sent`, `Confirmed`, `Cancelled`)
- **Total Amount & Items Count**
- **Action Links** (`View`, `Edit`)

---

## Bulk Actions on Quotations

Admins can perform powerful bulk operations on selected quotations using the **Actions** dropdown:

![Bulk Actions on Quotations](/images/quotations-mass-actions.webp)

- **Confirm Quotation:** Converts approved quotations directly into confirmed Purchase Orders and automatically schedules incoming shipments.
- **Cancel Quotation:** Voids pending or inactive draft quotations.
- **Merge Quotations:** Combines multiple draft quotations for the same supplier into one consolidated order to save freight costs.
- **Email Quotation:** Dispatches RFQ emails to the respective suppliers in batch.
- **Print:** Generates printable quotation summaries.
- **Delete:** Removes draft quotation records from the database.

---

## Creating a New Quotation (Manual Sourcing)

Click **Create New Quotation** in the top action bar:

### Step 1: Select Supplier & Source Document
Provide an optional **Source Document** reference (e.g., *Reorder Memo #44*, *Seasonal Restock Q3*) and **Notes**, then select the desired vendor from the registered supplier list:

![Select Supplier for Quotation](/images/quotation-select-supplier.webp)


---

### Step 2: Add Products to Quotation
Click the **Add Products** button to open the product catalog selection panel:

![Add Products to Quotation](/images/quotation-add-products-btn.webp)

Select the products and input required quantities:

![Product Selection Grid](/images/quotation-product-select-grid.png)

For configurable, grouped, or bundle products, specify required options, sizes, colors, and child attributes:

![Product Attributes Selection](/images/quotation-add-product-attributes.webp)
![Variant Selection Modal](/images/quotation-product-config-options.png)

---

### Step 3: Review Quantities, Costs & Custom Attributes
Selected items appear at the top of the quotation creator. You can:
- Verify or adjust the supplier cost price per unit.
- Fill in values for custom quotation attributes.
- Add administrative comments or special delivery instructions.

![Review and Finalize Quotation](/images/quotation-review-and-create.png)

Click **Create Quotation**. A success notification is displayed with the generated Quotation ID:

![Quotation Created Successfully](/images/quotation-created-success.webp)

---

## Quotation Detail View & Actions

Click **View** on any quotation to open its comprehensive management overview:

![Quotation View Details](/images/quotation-view-details.png)

Inside the quotation screen, the administrator can:
- **Send by Email (RFQ):** Dispatches an official Request for Quotation email with an itemized table to the supplier.
- **Confirm Quotation:** Once the supplier confirms terms and pricing, clicking **Confirm Quotation** locks the agreement and elevates the quotation to an active Purchase Order.
- **Add Comments:** Log internal notes and supplier correspondence.

![Quotation Confirm Success](/images/quotation-confirm-success.webp)
![Email RFQ Sent Notification](/images/quotation-email-sent.png)

---

## RFQ Email Notification to Supplier

When **Send by Email** is clicked, the supplier receives a branded email containing all quotation specifications:

![Sample RFQ Email to Supplier](/images/email-rfq-sample.png)
![Modern RFQ Email Layout](/images/email-rfq-sample-2.webp)
