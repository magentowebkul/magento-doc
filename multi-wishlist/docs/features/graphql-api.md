# GraphQL API Reference

The **Magento 2 Multi Wishlist** extension provides a comprehensive set of GraphQL queries and mutations for headless implementations and PWA integration.

---

## Queries

### 1. `getWishlistByCustomerId`
Retrieves all custom wishlists created by a specific customer.

```graphql
query {
  getWishlistByCustomerId(customerId: "12") {
    id
    wishlist_name
    sharing_code
    customer_id
  }
}
```

**Sample Response:**
```json
{
  "data": {
    "getWishlistByCustomerId": [
      {
        "id": "1",
        "wishlist_name": "Main Wishlist",
        "sharing_code": "a1b2c3d4e5",
        "customer_id": "12"
      },
      {
        "id": "2",
        "wishlist_name": "Holiday Favorites",
        "sharing_code": "f6g7h8i9j0",
        "customer_id": "12"
      }
    ]
  }
}
```

---

### 2. `getWishlistItemsByNameId`
Fetches all products stored inside a specific wishlist ID.

```graphql
query {
  getWishlistItemsByNameId(wishlistNameId: "2") {
    wishlist_item_id
    wishlist_id
    product_id
    store_id
    added_at
    qty
    wishlist_name_id
  }
}
```

---

## Mutations

### 1. `addWishList`
Creates a new custom wishlist for a customer.

```graphql
mutation {
  addWishList(input: {
    customerId: "12",
    wishlist_name: "Summer Collection"
  }) {
    message
  }
}
```

---

### 2. `addItemsToWishlist`
Adds a product to a specific wishlist.

```graphql
mutation {
  addItemsToWishlist(input: {
    wishlistNameId: "2",
    product_id: "45",
    qty: "1"
  }) {
    message
  }
}
```

---

### 3. `renameWishlist`
Renames an existing wishlist.

```graphql
mutation {
  renameWishlist(input: {
    wishlistNameId: "2",
    wishlist_name: "Updated Wishlist Name"
  }) {
    message
  }
}
```

---

### 4. `deleteWishlist`
Deletes a custom wishlist.

```graphql
mutation {
  deleteWishlist(wishlistNameId: "2") {
    message
  }
}
```

---

### 5. `deleteItemsFromWishlist`
Deletes specific product items from a custom wishlist.

```graphql
mutation {
  deleteItemsFromWishlist(input: {
    wishlistNameId: "2",
    product_id: "45"
  }) {
    message
  }
}
```

---

### 6. `updateItemQtyInWishlist`
Updates the requested quantity of an item inside a wishlist.

```graphql
mutation {
  updateItemQtyInWishlist(input: {
    wishlistNameId: "2",
    product_id: "45",
    qty: "3"
  }) {
    message
  }
}
```

---

### 7. `addToCartAll`
Transfers all available items in a wishlist into the customer's active shopping cart.

```graphql
mutation {
  addToCartAll(wishlistNameId: "2") {
    message
    errors {
      wishlist_itemId
      error
    }
  }
}
```
