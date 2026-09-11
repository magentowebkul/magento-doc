# GraphQL API

The **Magento 2 Table Rate Shipping** extension includes full GraphQL support, allowing headless frontends, mobile apps, and automated workflows to manage shipping rules programmatically.

## Authentication

All MageTableRate administrative GraphQL operations require an **Admin Bearer Token**.

To obtain an admin token, send a REST POST request to:

```http
POST https://your-store.example.com/rest/V1/integration/admin/token
Content-Type: application/json

{
  "username": "admin_username",
  "password": "admin_password"
}
```

Include the returned token in the `Authorization` header of every GraphQL request:

```http
Authorization: Bearer <admin_token>
Content-Type: application/json
```

---

## 1. List Shipping Methods

Query all configured table rate shipping rules.

### Query

```graphql
query {
  listShippingMethod {
    entity_id
    website_id
    country_id
    region_id
    shipping_method_name
    price
    zip
    zip_to
    price_from
    price_to
    weight_from
    weight_to
    is_range
    zipcode
    quantity_from
    quantity_to
    status
    customer_group_id
    store_id
  }
}
```

### Sample Response

```json
{
  "data": {
    "listShippingMethod": [
      {
        "entity_id": 35,
        "website_id": 0,
        "country_id": "US",
        "region_id": "California",
        "shipping_method_name": "Standard Ground",
        "price": 10.0,
        "zip": "90001",
        "zip_to": "90100",
        "price_from": 1.0,
        "price_to": 9999.0,
        "weight_from": 0.0,
        "weight_to": 50.0,
        "is_range": "yes",
        "zipcode": "*",
        "quantity_from": 1,
        "quantity_to": 10,
        "status": 1,
        "customer_group_id": "*",
        "store_id": "0"
      }
    ]
  }
}
```

---

## 2. Add Shipping Method

Create new shipping rules by either uploading a base64-encoded CSV file or supplying single-record arguments.

### A. Via Base64 Encoded CSV File

Convert your `adminShippingInfo.csv` to a Base64 string and pass it to `importFile`:

```graphql
mutation {
  addShippingMethod(importFile: "Y291bnRyeV9jb2RlLHJlZ2lvbl9pZCx6aXAsemlwX3RvLHByaWNlLHdlaWdodF9mcm9tLHdlaWdodF90byxwcmljZV9mcm9tLHByaWNlX3RvLHNoaXBwaW5nX21ldGhvZCxyYW5nZSxhbHBoYW51bWVyaWNfemlwY29kZSxxdWFudGl0eV9mcm9tLHF1YW50aXR5X3RvLHN0YXR1cyxjdXN0b21lcl9ncm91cCxzdG9yZV92aWV3CiJVUyIsIioiLCI5MDAwMSIsIjkwMTAwIiwiMTAiLCIxIiwiMTAwIiwiMSIsIjk5OTk5OSIsIlN0YW5kYXJkIFNoaXBwaW5nIix5ZXMsIioiLCIxIiwiMTAiLCIxIiwiKiIsIioi") {
    message
    error
  }
}
```

### B. Via Direct Field Arguments

```graphql
mutation {
  addShippingMethod(
    countryId: "US"
    regionId: "California"
    zip: "90001"
    zipTo: "90020"
    price: 15.0
    weightFrom: 1.0
    weightTo: 50.0
    priceFrom: 10.0
    priceTo: 500.0
    shippingMethodName: "Express Courier"
    isRange: "yes"
    zipcode: "*"
    quantityFrom: 1
    quantityTo: 10
    status: 1
    customerGroupId: "*"
    storeId: "0"
  ) {
    message
    error
  }
}
```

### Sample Response

```json
{
  "data": {
    "addShippingMethod": {
      "message": "1 row saved successfully",
      "error": false
    }
  }
}
```

---

## 3. Update Shipping Method

Update an existing rule by specifying its `entityId` and updated attributes.

### Mutation

```graphql
mutation {
  updateShippingMethod(
    entityId: 35
    countryId: "US"
    regionId: "California"
    zip: "90002"
    zipTo: "90027"
    price: 18.5
    weightFrom: 1.0
    weightTo: 100.0
    priceFrom: 20.0
    priceTo: 2000.0
    shippingMethodName: "Priority Express"
    isRange: "yes"
    zipcode: "*"
    quantityFrom: 1
    quantityTo: 25
    status: 1
    customerGroupId: "*"
    storeId: "0"
  ) {
    message
    error
  }
}
```

### Sample Response

```json
{
  "data": {
    "updateShippingMethod": {
      "message": "Your shipping detail has been successfully updated.",
      "error": false
    }
  }
}
```

---

## 4. Delete Shipping Method

Remove a shipping rule by ID.

### Mutation

```graphql
mutation {
  deleteShippingMethod(shippingId: 35) {
    message
    error
  }
}
```

### Sample Response

```json
{
  "data": {
    "deleteShippingMethod": {
      "message": "Shipping detail is successfully Deleted!",
      "error": false
    }
  }
}
```

::: tip Next Step
Find answers to common operational questions in [Troubleshooting](/help/troubleshooting).
:::
