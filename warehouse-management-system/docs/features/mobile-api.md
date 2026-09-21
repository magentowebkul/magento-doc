---
title: Mobile App & GraphQL APIs
---

# Mobile App & GraphQL APIs

Webkul WMS equips warehouse pickers with high-speed mobile scanner workflows via native **GraphQL** and **REST** API endpoints.

![Mobile App Overview](/images/mobile-app-overview.webp)

## Mobile Floor Workflow

1. **Authentication:** Picker launches the application, enters their staff email and password, and selects their active warehouse facility.
2. **Order Queue:** The app displays active assigned orders. Pickers see order priority, item count, and delivery due times.
3. **Tote Association:** Before entering the aisles, the picker scans a physical tote barcode (`addTote`) to link their container to the order.
4. **Guided Picking Path:** The app sorts line items into an optimized path through the warehouse (Zone &rarr; Rack &rarr; Shelf &rarr; Bin).
5. **Barcode Scan & Verification:** At each bin, the picker scans the product barcode. The app verifies the SKU and confirms the picked quantity.
6. **Handover to Packing:** Once all items are marked `picked` (`changeStatus`), the app prompts the worker to drop the tote at the packing station.

---

## GraphQL API Reference

WMS registers schema resolvers under `etc/schema.graphqls`:

### 1. Staff Login (`login`)

Authenticate staff credentials and register mobile device token:

```graphql
query StaffLogin {
  login(input: {
    username: "john.doe@warehouse.local"
    password: "SecretPassword123"
    deviceToken: "fcm_device_token_sample"
    os: "android"
  }) {
    success
    message
    staffName
    staffToken
    warehouseId
    allowedZones
    avatar
  }
}
```

### 2. Get Assigned Orders (`getOrderList`)

Fetch assigned orders for the authenticated picker:

```graphql
query GetOrders {
  getOrderList(input: {
    staffToken: "c18a24...staff_token"
    status: "processing"
    pageNumber: 1
    searchQuery: ""
  }) {
    success
    message
    orderList {
      incrementId
      orderId
      itemCount
      createdAt
      status
    }
  }
}
```

### 3. Get Order Details & Locations (`getOrderDetails`)

Fetch ordered items with exact bin locations for guided picking:

```graphql
query GetOrderDetails {
  getOrderDetails(input: {
    staffToken: "c18a24...staff_token"
    incrementId: "000000142"
    toteToken: "TOTE-004"
    width: "300"
  }) {
    success
    message
    items {
      productId
      name
      sku
      qty
      zoneCode
      rack
      shelf
      bin
      barcode
    }
  }
}
```

### 4. Link Tote Container (`addTote`)

Bind a scanned tote barcode to the active order:

```graphql
mutation AssociateTote {
  addTote(input: {
    staffToken: "c18a24...staff_token"
    incrementId: "000000142"
    toteToken: "TOTE-004"
    warehouseId: 1
  }) {
    success
    message
  }
}
```

### 5. Confirm Picked Items (`changeStatus`)

Transition bin stock from `reserved` to `picked`:

```graphql
mutation ConfirmPick {
  changeStatus(input: {
    staffToken: "c18a24...staff_token"
    incrementId: "000000142"
    warehouseId: 1
    status: "picked"
    locationQtyData: [
      {
        locationId: "ZA-R02-S03-B01"
        qtyPicked: 2
      }
    ]
  }) {
    success
    message
  }
}
```

---

## REST API Controllers

For legacy handheld devices and custom scanner hardware, WMS provides matching JSON endpoints under `Controller/Api/*`:

- `POST /wms/api/login` — Staff authentication and device token capture
- `POST /wms/api/getorderlist` — Paginated picker order retrieval
- `POST /wms/api/getorderdetails` — Product line items and bin coordinates
- `POST /wms/api/addtote` — Tote barcode registration
- `POST /wms/api/changestatus` — Status updates and pick confirmations
- `POST /wms/api/logout` — Invalidate session and release device tokens
