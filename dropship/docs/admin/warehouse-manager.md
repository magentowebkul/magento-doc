# Warehouse Manager & Dashboard

The **Warehouse Manager** allows store owners to create and manage physical or supplier warehouses, link locations with Google Maps geocoding, configure authorized shipping methods, and view real-time sales performance analytics.

---

## Accessing the Warehouse Grid

Navigate to **Dropship Manager > Warehouse Manager**.

The grid lists all registered warehouses along with their **ID**, **Username**, **Title/Name**, **Email**, **Contact Details**, and **Origin Location**.

![Warehouse Manager Grid](/images/admin_warehouse_manager.webp)
![Warehouse Manager Grid](/images/admin_warehouse_new_1.webp)
![Warehouse Manager Grid](/images/admin_warehouse_new_2.webp)
![Warehouse Manager Grid](/images/admin_warehouse_new_3.webp)

---

## Adding a New Warehouse

Click the **Add New Warehouse** button in the top-right corner to open the creation form:

### 1. Account Information
* **Username & Email:** The login credentials used by the warehouse manager to sign into their dedicated fulfillment dashboard.
* **First Name & Last Name:** Personal contact name of the warehouse manager or supplier representative.
* **Password & Confirmation:** Secure password for warehouse portal access.

### 2. Warehouse Details & Address Origin
* **Warehouse Title:** The business name of the warehouse (e.g., *East Coast Logistics Center*, *Shenzhen Hub*).
* **Description:** Internal notes or operational guidelines.
* **Origin Address:** Street Address, City, State/Province, Country, and Postal/Zip Code.
* **Latitude & Longitude:** Powered by Google Places. As you type the street address, coordinates are automatically filled in. This enables the system to calculate the distance to the customer and route orders to the closest warehouse.

### 3. Allowed Shipping Carriers
* Select the shipping methods that this warehouse is permitted to use for fulfillment (e.g., *Dropship*, *Flat Rate*, *FedEx*, *UPS*).

---

## How Nearest-Warehouse Routing Works

When a customer places an order, the extension uses the warehouse origin coordinates and the customer's delivery address to automatically determine which warehouse is geographically closest.

* **Fastest Delivery:** The closest warehouse with sufficient stock receives the order, ensuring customers get their packages quickly.
* **Lower Shipping Costs:** Shorter transit distances reduce carrier shipping fees.
* **Multi-Warehouse Stock Management:** Each warehouse maintains its own stock levels. When products are imported or updated, inventory counts can be managed individually per warehouse facility.

---

## Assigning Products to Warehouses

Administrators can assign products to warehouses in two simple ways:

1. **Directly on the Product Edit Page:** Go to **Catalog > Products**, open any product, and scroll to the **Warehouse Stock** (or Sources) section. Select the target warehouse and enter the physical quantity available.
2. **Bulk Product Upload:** Upload bulk CSV or Excel spreadsheets specifying the warehouse email and product SKU (see [Dropship Product Profile](/admin/product-profile.html)).

---

## Warehouse Dashboard Analytics

Each warehouse has a dedicated analytics dashboard accessible by clicking **Dropship Manager > Warehouse Dashboard** or selecting a warehouse from the dashboard dropdown.

![Warehouse Dashboard](/images/admin_warehouse_dashboard.webp)

Key metrics displayed:
* **Lifetime Sales & Average Order Amount**
* **Total Orders Received vs. Fulfilled**
* **Sales Graph Trends:** Visual charts filtered by *Last 24 Hours*, *Last 7 Days*, *Current Month*, *Year to Date*, and *2 Years to Date*.
* **Most Viewed Products:** Top-performing items assigned to this warehouse.

::: tip Next Steps
Learn how to define custom shipping rates for each warehouse in the [Manage Shipping Rules](/admin/shipping-rules.html) guide.
:::
