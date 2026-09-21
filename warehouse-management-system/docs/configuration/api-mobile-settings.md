---
title: API & Mobile App Settings
---

# API & Mobile App Settings

Configure credentials, barcode attributes, and mobile session rules under **Stores &rarr; Configuration &rarr; Webkul &rarr; Warehouse Management System &rarr; Api Configuration**.

![API & Mobile Settings](/images/api-mobile-settings.webp)

## Fields

| Field | Description | Type |
| --- | --- | --- |
| **Enable Module** | Master switch for the WMS extension. Must be **Yes** to show admin menus and enable GraphQL / REST endpoints. | Select (Yes/No) |
| **Username** | API username passed by mobile handheld devices and scanner terminals during authentication handshake. | Text |
| **Password** | Secure token / password used to encrypt and authorize mobile picker requests. | Obscure (Encrypted) |
| **Choose attribute for product barcode** | Selects which product catalog attribute WMS uses to generate Code128 barcodes (e.g. `SKU`, `barcode`, `upc`). | Select (Attribute Source) |
| **Choose warehouse layout theme** | Visual style applied when rendering 2D interactive shelf/bin diagrams. | Select (Theme Source) |
| **Enable Staff Single Login** | When enabled, logging in on a new mobile terminal automatically terminates any previous active session for that staff picker. | Select (Yes/No) |

## Barcode Attribute Selection

WMS generates Code128 barcodes for products when printing picker sheets or generating shelf tags. 

- If your catalog uses standard **SKU** strings as barcodes, keep the default selection `SKU`.
- If your catalog has dedicated barcode attributes (e.g. `ean`, `upc`, or `isbn`), select that attribute from the dropdown.
- Ensure the selected attribute is populated on product edit screens; blank attributes will prevent barcode generation for that product.

## Single Login Enforcement

In high-volume warehouses, pickers operate handheld mobile computers or barcode scanners. 

Setting **Enable Staff Single Login** to **Yes** ensures:
- A staff member cannot be actively logged in on two physical devices at the same time.
- Any new login invalidates older auth tokens in `wms_warehouse_staff`.
- Prevents split picking or duplicate tote assignments for the same staff account.

Proceed to [Push Notifications (FCM)](/configuration/push-notifications.html) to configure real-time picker push alerts.
