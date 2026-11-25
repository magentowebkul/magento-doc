# Warehouse Order Manager

The **Warehouse Order Manager** provides centralized control over dropship order routing, administrative approval workflows, warehouse assignment, and package shipment tracking.

---

## Accessing the Order Manager

Navigate to **Dropship Manager > Warehouse Order Manager**.

The grid lists all customer orders associated with dropship warehouses:

![Warehouse Order Manager Grid](/images/admin_warehouse_order_manager.webp)

Key columns:
* **Order # / ID**
* **Purchased Items & Quantities**
* **Warehouse Title & ID**
* **Order Status** (*Pending*, *Approved*, *Shipped*, *Canceled*)
* **Warehouse Shipping Cost & Order Total**
* **Action Menu**

---

## Order Workflow & Status Progression

Every dropship order moves through clear fulfillment stages:

1. **Pending Status:**
   * An order appears in the grid immediately after the customer completes checkout.
   * If **Warehouse Assignment Mode** is set to *Auto*, the order is already assigned to the closest warehouse with available stock.
   * If *Manual*, the order is held until an admin selects a warehouse.
2. **Admin Approval Gate:**
   * To prevent accidental fulfillment or fraudulent orders, warehouse managers cannot ship an order until the store administrator reviews and approves it.
   * Approving an order automatically triggers an email notification to the warehouse manager with customer shipping details and items to pack.
3. **Fulfillment & Tracking (Warehouse Manager Portal):**
   * The warehouse manager logs into their dedicated portal.
   * They review the approved order, print packing slips, pack the items, and enter the shipping carrier and tracking number.
   * Once submitted, the order status updates to **Shipped**, and tracking details are automatically synced with native Magento shipment tracking so the customer can track their delivery.

---

## Handling Unassigned Orders

If an order contains items that could not be assigned automatically (for example, if all warehouses are out of stock, or if you are using Manual mode):

1. The order row displays an **Unassigned** button under the Warehouse column.
2. Click the **Unassigned** button to open the warehouse selection window.
3. The popup displays:
   * All registered warehouses.
   * Current stock on hand for the ordered item.
   * Distance to the customer's delivery address.
4. Select the warehouse you want to fulfill the order and click **Assign To Warehouse**.
5. The order updates and is ready for administrative approval.

---

## Warehouse Manager Portal Capabilities

Warehouse suppliers log in using the credentials you configured when creating the warehouse (see [Warehouse Manager](/admin/warehouse-manager.html)). Their dashboard is streamlined strictly for fulfillment:

| Capability | In Warehouse Portal | In Admin Panel |
| :--- | :---: | :---: |
| View Assigned Orders | ✅ | ✅ |
| Approve / Cancel Orders | ❌ | ✅ |
| Print Packing Slips | ✅ | ✅ |
| Generate Native Shipment | ✅ | ✅ |
| Input Tracking Numbers | ✅ | ✅ |
| View Store-Wide Customers | ❌ | ✅ |
| Manage System Configuration | ❌ | ✅ |

::: tip Next Steps
Explore how to bulk import supplier catalogs in [Dropship Product Profile](/admin/product-profile.html).
:::
