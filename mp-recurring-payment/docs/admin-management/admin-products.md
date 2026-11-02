# Admin Subscription Products

Administrators can convert existing products in the Magento catalog into subscription products or create brand new subscription products from scratch.

---

## Converting an Existing Product into a Subscription

To enable subscriptions on an existing catalog product:

1. In the Admin Panel, navigate to **Catalog > Products**.
2. Locate the product you wish to configure and click **Edit**.
3. Scroll down the product edit page to find the **Subscription Configuration** section.
4. Set the **Subscription** field to **Yes**.

![Admin Product Subscription Configuration](/images/product.webp)

5. Click on the **Edit Configurations** button that appears.
6. A configuration modal or panel opens where you can attach one or more duration types.

![Add Subscription Types](/images/webkul-magento2-multi-vendor-recurring-payments-add-subscription-types.png)

7. Configure the pricing details for each selected duration:
   * **Duration Type**: Select an enabled duration (e.g., Weekly, Monthly).
   * **Initial Fee**: One-time onboarding or setup fee billed immediately upon signup (optional or 0).
   * **Subscription Amount**: Recurring installment billed automatically every cycle.
8. Click **Save** in the modal and then click **Save** in the top action bar to save the product.

---

## Creating a Brand New Subscription Product

To add a new product with subscription options:

1. Navigate to **Catalog > Products** and click the **Add Product** button (choose Simple, Configurable, Virtual, or Downloadable).
2. Enter the general product details (Product Name, SKU, Price, Quantity, Categories).

![Add New Product](/images/newproduct.webp)

3. Scroll down to **Subscription Configuration**.
4. Set **Subscription** to **Yes**.
5. Click **Edit Configurations**, specify your subscription terms, initial fee, and recurring amounts.
6. Save the product.

::: tip Dual Purchase Flexibility
When a product has subscription configuration enabled, it displays the subscription plan selector on the storefront. Customers can select a plan and subscribe directly.
:::
