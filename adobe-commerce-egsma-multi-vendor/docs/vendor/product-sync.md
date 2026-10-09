# Product Synchronization

Products sync automatically in both directions. Names, quantities, and images stay consistent across platforms.

---

## EGSMA to Adobe Commerce

When a vendor creates a product on EGSMA, the system marks it **active** and syncs it to the Adobe Commerce store automatically.

1. The vendor creates the product in the EGSMA panel.

![Seller product](/images/sellerapproveproduct.webp)

2. Product details such as name, quantity, and images are kept in sync.

![Product created](/images/sellerapproveproductdetails.webp)

3. The product now appears in Adobe Commerce.

![MVM to Adobe Commerce product](/images/mvmtom2product.webp)

---

## Adobe Commerce to EGSMA

When a product is created in Adobe Commerce, it syncs to the EGSMA vendor end without any manual action:

1. Adobe Commerce triggers an event as soon as the product is created.
2. The connector captures the event in real time.
3. The connector sends the product data to EGSMA.
4. EGSMA creates the product automatically.

### Step-by-step

1. Create the product in Adobe Commerce.

![New product create at Adobe Commerce end](/images/m2newproductcreate.webp)

2. The product is saved on Adobe Commerce.

![Product created](/images/m2productcreated.webp)

3. The product is synced to the EGSMA platform. The admin now assigns it to a vendor.

![Import product](/images/productassignatmvmend.webp)

4. In the pop-up, the admin selects **Assign Product As** and enters the seller's email.

![Assign imported product](/images/productassignpopup.webp)

5. After assignment, the product appears in the vendor panel's product listing.

![Product visible on MVM end](/images/productvisibleonmvmend.webp)

::: tip Auto Approve Product
Enable the **Auto Approve Product** setting in the admin panel to approve all new products automatically, without manual action.
:::
