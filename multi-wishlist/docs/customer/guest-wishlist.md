# Guest Wishlist & Account Sync

The **Magento 2 Multi Wishlist** extension allows guest visitors to save products to a wishlist while browsing, automatically transferring those saved items to their account when they register or log in.

---

## How Guest Wishlist Works

1. **Saving Items as a Guest**: Unregistered visitors browsing the store can click **Add to Wish List** on any product or category page.
2. **Temporary Wishlist View**: Saved products are kept in a temporary guest wishlist so visitors can review their favorite items while browsing.
3. **Automatic Account Sync**: When the guest logs into an existing account or creates a new account, all items saved in their guest wishlist are automatically merged into their permanent customer account wishlist.

```mermaid
flowchart LR
  A[Guest adds product to Wishlist] --> B[Saved in Guest Wishlist]
  B --> C[Guest Logs In or Registers]
  C --> D[Automatic Wishlist Sync]
  D --> E[Items merged into Customer Account]
```

---

## Admin Configuration

Guest wishlist availability can be turned on or off by store administrators:

* **Location**: **Stores > Configuration > Webkul > Multi Wish List**
* **Setting**: **Enable Guest Wishlist**
* **Options**: `Yes` / `No` (Default: `Yes`)

![Enable Guest Wishlist](/images/guest_wish_list.webp)

