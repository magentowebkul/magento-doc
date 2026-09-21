---
title: Interactive Bin Grid Visualizer
---

# Interactive Bin Grid Visualizer

The **Interactive Bin Grid** (`wms/warehouse/bins`) provides warehouse managers with a real-time, visual 2D map of physical racking structures, shelf levels, and bin occupancy states.

![Interactive Bin Grid Visualizer](/images/bin-grid-layout.webp)

## Accessing the Visualizer

1. Navigate to **Warehouse Management System &rarr; Manage Warehouse**.
2. Locate the desired facility in the grid.
3. In the **Action** column, click **View Bins**.

## Filtering Racks and Shelves

Use the header filters to narrow the visual matrix:
- **Zone Dropdown:** Filter by specific warehouse sections (e.g. `Zone A - Fast Moving`).
- **Rack Dropdown:** Select a specific physical rack cluster (e.g. `Rack 02`).

Upon selecting a rack, WMS issues an AJAX request to `wms/warehouse/binsdata` and dynamically renders the corresponding shelf matrix.

## Color-Coded Occupancy Legend

Each bin slot in the grid is color-coded based on its current fill status:

| Color Swatch | Status | Description |
| --- | --- | --- |
| 🟢 **Green** | **Available** | Empty bin with full capacity ready for new product placement. |
| 🟡 **Yellow** | **Partially Used** | Contains product units, but remaining capacity is available. |
| 🔴 **Red** | **Full** | Current stored quantity matches or exceeds rated bin capacity. |
| ⚪ **Grey** | **Disabled / Blocked** | Maintenance, quarantine, or physically obstructed slot. |

## Interactive Bin Detail Drawer

Clicking any individual bin cell in the 2D grid slides open the **Bin Detail** inspector on the right:

- **Location Code:** Standard address (e.g. `ZA-R02-S03-B01`).
- **Zone & Rack Level:** Section, rack number, shelf tier, and bin index.
- **Capacity vs. Occupied Space:** Total capacity, units currently in the bin, and free space.
- **Assigned Products & SKUs:** Catalog items placed in this bin.
- **Reserved Stock:** Quantity currently locked for active customer orders in fulfillment.

::: tip Fast Visual Stock Auditing
Floor managers can spot overfilled bins, underutilized racks, or blocked aisles at a glance without having to pull inventory spreadsheets.
:::
