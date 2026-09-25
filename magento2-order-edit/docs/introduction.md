# Introduction

**Webkul Magento 2 Order Edit** allows store administrators to modify existing orders directly from the Magento Admin Panel without canceling the order or creating a duplicate record.

In default Magento 2, editing an existing order forces a complete cancellation of the original order (`Canceled`) and generates an entirely new order record with a suffixed increment ID (e.g., `#100000001-1`). This native behavior introduces severe operational problems: it breaks synchronization with external Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) tools, and Warehouse Management Systems (WMS); fragments the customer's purchase history; sends unnecessary order cancellation emails; and complicates accounting reconciliation.

The **Webkul Order Edit** extension eliminates these issues by providing seamless, **in-place order modification** directly within the standard admin order detail view (`sales/order/view/order_id/*`).

## The Business Problem with Default Magento Order Editing

Standard Magento order management treats orders as immutable snapshots once placed. When an administrator clicks the default "Edit" button:

1. **Order Cancellation**: The original order is marked as `Canceled` immediately.
2. **Order Duplication**: A new quote is created and converted into a new order with an altered increment ID.
3. **ERP & Accounting Disruption**: External integrations (SAP, NetSuite, Salesforce, QuickBooks) often reject duplicate orders or fail to link financial settlements back to the initial transaction.
4. **Customer Confusion**: Customers receive automated cancellation notifications followed by new order confirmation emails, causing anxiety regarding double charges.
5. **Inventory Lockups**: Incomplete or abandoned edit sessions can strand inventory reservations.

## How Webkul Order Edit Solves It

With **Webkul Order Edit**, orders are updated **in-place**:

- **Same Increment ID**: Order `#100005678` remains `#100005678` before, during, and after editing.
- **Direct Line-Item Editing**: Adjust quantities, override prices with custom negotiated rates, update tax amounts/percentages, and apply item-level discounts.
- **Add New Products**: Add simple, configurable, bundle, virtual, or downloadable products with custom options to an open order.
- **Cascade Deletions**: Removing a bundle or configurable parent automatically cleans up child items without leaving orphaned database rows.
- **Totals & Shipping Recalculation**: The module automatically recollected quote totals, updates taxes and discounts, and re-evaluates applicable shipping rates based on new order weight, item count, and cart value.
- **Inventory Synchronization (MSI)**: Integrates with Magento Multi-Source Inventory to validate salable quantity and create exact reservation adjustments.
- **Full Audit Trail**: Every modification is permanently logged with the date, administrator name, action type, and before/after values in the admin order changelog.
- **Asynchronous Email Alerts**: Uses Magento's Message Queue framework (`orderedit.email.send`) to dispatch notification emails in the background without slowing down admin operations.

## Key Features

- **In-Place Modification**: Update orders without canceling or re-creating records.
- **Line Item Price & Quantity Control**: Modify ordered quantity, specify custom prices, and adjust item-level tax and discounts.
- **Live Preview Calculations**: Real-time JavaScript preview of new item subtotals and row totals before saving.
- **Product Search & Add Modal**: Integrated product search grid allowing administrators to browse catalog items, configure options, and add products directly to orders.
- **Coupon Code Management**: Apply or remove shopping cart price rule coupons directly on existing orders.
- **Bundle & Configurable Support**: Dedicated item renderers for composite and parent-child product relationships.
- **Multi-Source Inventory (MSI) Integration**: Places negative reservations for quantity increases and positive compensation reservations for decreases and removals.
- **Admin Change Log**: Dedicated audit tab on the order view page displaying chronological modification history with "View More" expandable logs.
- **Message Queue Notifications**: Background email notifications via RabbitMQ or MySQL AMQP queue to customers and warehouse administrators.
- **Role-Based Access Control (ACL)**: Restrict order editing privileges to authorized administrator roles.

::: tip Next Step
Review the technical and server requirements in [Requirements](/requirements) before proceeding with installation.
:::
