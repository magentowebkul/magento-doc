# Warehouse Manager Portal & Order Fulfillment

Each warehouse is assigned a dedicated manager account. Warehouse managers log in to a specialized backend management panel to view assigned orders, package consignments, generate shipments, and download packingslips.

---

## Warehouse Manager Login

1. When an administrator creates a warehouse, the manager receives an email containing login credentials (username, password, and portal URL).
2. The warehouse manager accesses the login URL and enters their credentials:

![Warehouse Manager Login Screen](/images/warehouse-manager-login.png)

3. Upon successful sign-in, the manager accesses their specialized menu options under **Vendor Dropship Menu**:
   - **Warehouse Order Manager**
   - **Manage Shipping Rule**

![Warehouse Manager Menu](/images/Vendor-Dropship-Menu.webp)

---

## Viewing Assigned Orders

Clicking **Warehouse Order Manager** displays all orders routed to this specific warehouse:

![Warehouse Manager Orders Listing](/images/vendor-dropship-orders-grid.png)

The grid includes:
- **Order ID** & **Purchase Date**
- **Bill-to Name** & **Ship-to Name**
- **Grand Total**
- **Status** (e.g. *Approved*)
- **Action**

---

## Processing Shipments

To ship an approved order:

1. Click the **Create** or **View** link next to the order.
2. The order fulfillment view displays customer shipping destination, selected delivery carrier, and ordered items:

![Warehouse Manager Order Fulfillment View](/images/order-view-details.png)

3. Review the items and quantities.
4. Add carrier tracking information (Carrier Name and Tracking Number).
5. Click **Submit Shipment**.
6. A Magento shipment record is generated, updating the order fulfillment status to **Complete / Shipped** and emailing tracking details to the end customer.
