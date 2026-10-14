# Hipercalzado Orders Grid & Sync

Navigate to **Hipercalzado Connector → Hipercalzado Orders** from the admin sidebar to manage marketplace order synchronization.

![Hipercalzado Orders grid in Magento 2 admin](/images/image-7.jpg)

---

## Sync Actions Menu

Click **Sync From Hipercalzado** in the upper right header to execute manual synchronization actions:

| Action Button | Function |
| :--- | :--- |
| **Import Order From Hipercalzado** | Polls the Hipercalzado API and imports all recent un-synced customer orders into Magento. |
| **Run Hipercalzado Order Profiler** | Processes batch order data, maps line items, and links product records. |

---

::: note Automatic Data Mapping
During order import, customer data, shipping address, line items, and prices are automatically converted into native Magento 2 Sales Order records.
:::
