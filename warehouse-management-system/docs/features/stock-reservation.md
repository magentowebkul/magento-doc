---
title: Stock Reservation Lifecycle
---

# Stock Reservation Lifecycle

Webkul WMS tracks granular product movement at the physical bin level across four lifecycle states while preserving full Magento Multi-Source Inventory (MSI) compatibility.

![Stock Reservation Lifecycle](/images/stock-reservation-lifecycle.webp)

## 4-State Bin Stock Model

Bin-level quantities are tracked in the declarative table `wms_location_stock` across four distinct states:

```
[Catalog Order Placed]
        │
        ▼
   available  ────────►  reserved   (on checkout_submit_all_after)
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
            picked                      available (on sales_order_cancel_after)
              │
              ▼
            packed   (on shipment create)
```

| State | Definition | Trigger Event |
| --- | --- | --- |
| **Available** | Product physically resides in the bin slot and is salable. MSI inventory reflects active available quantity. | Default warehouse placement state. |
| **Reserved** | Units are allocated to an active customer order and locked to prevent double-selling. | Fired on `checkout_submit_all_after` or manual assignment. |
| **Picked** | Picker has verified the barcode and deposited items into an assigned tote. | Triggered by mobile app API (`changeStatus`). |
| **Packed** | Order items are packaged at the staging table and prepared for courier dispatch. | Triggered upon Magento shipment generation. |

## Order Cancellation & Automatic Stock Release

If a customer or administrator cancels an order before it is packed:

1. Magento dispatches the `sales_order_cancel_after` event.
2. The observer `Webkul\WMS\Observer\OrderCancelReleaseReservation` catches the event.
3. `ReservationManager::releaseOrderReservation()` queries all reserved records in `wms_location_stock` tied to that order.
4. The reserved quantities are transitioned back to **available** status in their original physical bins.
5. `ToteReleaseManager` resets any associated totes back to `not_assigned`.

## Invariant: Zero MSI Writes

::: danger Never Write to MSI Tables Directly
WMS never alters `inventory_source_item.quantity` directly. WMS bin stock in `wms_location_stock` is a physical placement layer above MSI. Modifying MSI source records directly would cause salable stock double-deductions and corrupt Magento's reservation ledger.
:::

- Magento MSI continues managing global salable inventory across stocks and channels.
- WMS manages floor-level physical coordinates, shelf slotting, and picker paths.
- Final inventory deduction occurs automatically when Magento's standard sales shipment is created.
