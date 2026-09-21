---
title: Warehouse Management
---

# Warehouse Management

Manage all physical fulfillment centers under **Warehouse Management System &rarr; Manage Warehouse**.

![Manage Warehouses Grid](/images/warehouse-grid.webp)

## Warehouse Grid Overview

The warehouse listing table displays all configured fulfillment locations and their physical capacities:

| Column | Description |
| --- | --- |
| **ID** | Unique internal database ID (`wms_warehouse.id`). |
| **Title** | Human-readable name of the facility. |
| **Source** | Linked Magento Multi-Source Inventory (MSI) source code (`source_code`). |
| **Rows / Cols** | Number of aisle rows and rack columns configured for the warehouse. |
| **Zones** | Number of partitioned picking zones within the building. |
| **Totes** | Maximum number of physical picking totes provisioned for this facility. |
| **Status** | Current operational status (**Enabled** or **Disabled**). |
| **Action** | Quick links to **Edit** warehouse configuration or **View Bins** in the interactive visualizer. |

## Creating a New Warehouse

Click the **Add Warehouse** button in the upper-right corner to open the creation form:

![Warehouse Creation Form](/images/warehouse-create-form.webp)

### Form Fields

| Field | Required | Description |
| --- | --- | --- |
| **Warehouse Title** | Yes | Descriptive facility name (e.g. `Central Logistics Depot`). |
| **Select Source** | Yes | Maps the facility to an MSI inventory source. Products assigned to bins in this warehouse draw their availability from this MSI source. |
| **Row Count** | Yes | Total number of physical aisles or horizontal row lines. |
| **Column Count** | Yes | Total number of column sections along each aisle row. |
| **Zone Count** | Yes | Number of distinct logical picking sections (e.g. Zone A, Zone B). |
| **Shelves Per Cluster** | Yes | Vertical shelf tiers per storage rack. |
| **Racks Per Shelf** | Yes | Rack divisions across each shelf level. |
| **Tote Count** | Yes | Number of barcoded totes automatically created and linked to this facility. |
| **Status** | Yes | Set to **Enabled** to permit auto-assignment and mobile app picking. |

::: warning Asynchronous Creation
When you save a new warehouse, WMS publishes a message to the `warehouse.create` message queue. Background workers generate physical bin entities and synchronize MSI inventory connections without locking the admin interface. Ensure your queue consumer is running:
```bash
php bin/magento queue:consumers:start warehouse.create &
```
:::

## Assigned Products Tab

Once a warehouse is created, open the **Product Assigned** tab to review catalog products currently allocated to physical bins in this warehouse:

![Assigned Products Tab](/images/warehouse-product-assigned.webp)

This tab displays:
- Product Name, SKU, and Thumbnail
- Physical coordinate mapping: **Zone**, **Rack**, **Shelf**, **Bin**
- Maximum bin storage **Capacity**
- Current **Stored Quantity** in the bin

## Mass Import via CSV

Rather than assigning products one by one, use the **Mass Import** tab to upload bulk placement data:

![Warehouse Mass Import](/images/warehouse-mass-import.webp)

### Step-by-Step CSV Import:
1. Click **Download Sample CSV** to obtain the standardized layout template.
2. Fill in your catalog data following the column format below:
   ```csv
   sku,zone_code,row,column,shelf,rack,bin,capacity,qty
   24-MB01,ZA,1,2,3,2,1,50,32
   24-WG084,ZB,2,1,2,1,4,30,18
   24-WB04,ZA,1,3,1,3,2,40,25
   ```
3. Drag and drop the completed file into the upload zone or click to select from your disk.
4. Click **Upload & Process**. WMS validates coordinates and provisions locations in `wms_product_location`.
