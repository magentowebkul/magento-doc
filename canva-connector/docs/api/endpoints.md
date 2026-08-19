# REST Web API Reference

The **Magento 2 Canva Connector** exposes Magento Web API REST service contracts under the `/rest/V1/canva/...` namespace for authentication, catalog search, active design context, and media export persistence.

---

## Service Contracts Overview

| Method | Endpoint | Service Contract Interface | Responsibility |
|---|---|---|---|
| `GET` | `/rest/V1/canva/products` | `ProductManagementInterface::getProducts` | Paginated catalog search and listing |
| `GET` | `/rest/V1/canva/product/:id` | `ProductManagementInterface::getProductById` | Fetch single product by entity ID |
| `GET` | `/rest/V1/canva/product/sku/:sku` | `ProductManagementInterface::getProductBySku` | Fetch single product by SKU |
| `POST` | `/rest/V1/canva/context` | `ProductManagementInterface::getActiveProductContext` | Resolve active product from design token |
| `POST` | `/rest/V1/canva/export/save` | `ImageSaveInterface::saveExportedImage` | Import and save Canva design media to product gallery |

---

## 1. `GET /rest/V1/canva/products`

Retrieves a paginated collection of products from the Magento catalog.

### Query Parameters

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `search` | `string` | No | Empty | Keyword search matching Product Name or SKU |
| `pageSize` | `int` | No | `20` | Number of products per page |
| `currentPage` | `int` | No | `1` | Page offset |
| `currentProductId`| `int` | No | Empty | Specific product ID to prioritize at index 0 |

### Response (`200 OK`)

```json
{
  "items": [
    {
      "id": 12,
      "sku": "24-WB03",
      "name": "Driven Backpack",
      "price": 36.00,
      "formatted_price": "$36.00",
      "description": "Durable all-purpose backpack.",
      "short_description": "Driven backpack.",
      "image_url": "https://your-domain.com/media/catalog/product/w/b/wb03-purple-0.jpg",
      "thumbnail_url": "https://your-domain.com/media/catalog/product/w/b/wb03-purple-0.jpg",
      "gallery_images": [
        "https://your-domain.com/media/catalog/product/w/b/wb03-purple-0.jpg"
      ],
      "variations": [
        {
          "id": 13,
          "sku": "24-WB03-Purple",
          "name": "Driven Backpack - Purple",
          "price": 36.00,
          "formatted_price": "$36.00",
          "thumbnail_url": "https://your-domain.com/media/catalog/product/w/b/wb03-purple-0.jpg",
          "description": ""
        }
      ]
    }
  ],
  "total_count": 2040
}
```

---

## 2. `POST /rest/V1/canva/context`

Resolves the active product entity associated with the currently open Canva design canvas.

### Request Body

```json
{
  "productId": 12,
  "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRhY2Q4..."
}
```

### Response (`200 OK`)

```json
{
  "id": 12,
  "sku": "24-WB03",
  "name": "Driven Backpack",
  "price": 36.00,
  "formatted_price": "$36.00",
  "description": "Large main compartment and durable straps.",
  "short_description": "Driven backpack.",
  "image_url": "https://your-domain.com/media/catalog/product/w/b/wb03-purple-0.jpg",
  "thumbnail_url": "https://your-domain.com/media/catalog/product/w/b/wb03-purple-0.jpg",
  "gallery_images": [],
  "variations": []
}
```

---

## 3. `POST /rest/V1/canva/export/save`

Imports single or multi-page Base64-encoded image artwork from Canva and saves them directly to the product media gallery.

### Request Body (Multi-page Export)

```json
{
  "productId": 12,
  "imageUrl": "[{\"index\":0,\"data\":\"data:image/png;base64,iVBORw...\",\"type\":\"png\"},{\"index\":1,\"data\":\"data:image/png;base64,iVBORw...\",\"type\":\"png\"}]",
  "designId": "DAGabc7654321",
  "imageType": "png"
}
```

### Response (`200 OK`)

```json
{
  "success": true,
  "message": "Design image(s) (2 page(s)) imported and saved to product successfully.",
  "product_id": 12,
  "file_path": "/c/a/canva_12_1787140525_1_1.png",
  "image_url": "https://your-domain.com/media/catalog/product/c/a/canva_12_1787140525_1_1.png"
}
```
