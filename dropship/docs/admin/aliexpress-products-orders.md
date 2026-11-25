# AliExpress Products & Orders

Once the Chrome extension is connected, store owners can import products directly from AliExpress, manage imported inventory, and fulfill customer orders on AliExpress with a single click.

---

## 1. Importing Products from AliExpress

1. Open the AliExpress website (`https://www.aliexpress.com`) in your Google Chrome browser.
2. Browse category listings, search result pages, or individual product pages.
3. You will see a blue **Webkul AliExpress Importer** badge on product listings and detail pages.
4. Click the blue badge to open the quick-edit window.
5. In the popup, you can:
   * Customize the product title, SKU, and description.
   * Choose which product photos and color swatch variations to import.
   * Review and adjust variation prices and margins before sending the product to your store.
6. Click **Import to Store**. The product details and images are transferred to your Magento catalog.

---

## 2. Managing AliExpress Products in Admin

Navigate to **Dropship Manager > AliExpress Products**.

The grid lists all imported AliExpress products along with their **Product ID**, **AliExpress Product ID**, **Magento SKU**, **Assigned Warehouse**, and **Product URL**.

![AliExpress Products Grid](/images/admin_aliexpress_products.webp)

### Available Mass Actions:
* **Assign Warehouse:** Check products, select **Assign Warehouse** from the Actions dropdown, and choose which warehouse holds stock.
* **Unassign Warehouse:** Detach products from their current warehouse.
* **Product Delete:** Completely removes the AliExpress product mapping and deletes the item cleanly from your catalog.

---

## 3. Automated AliExpress Order Fulfillment

When a customer purchases an AliExpress product on your store, fulfilling the order on AliExpress takes just a few clicks:

![AliExpress Orders Grid](/images/admin_aliexpress_orders.webp)

### Step-by-Step Fulfillment Process:

1. **Order Detection:** When an order containing an AliExpress product is placed, it automatically appears under **Dropship Manager > AliExpress Orders**.
2. **One-Click Dispatch:** Review the order and click the **Place Order** button.
3. **Automatic Cart & Variant Selection:** The Chrome extension opens AliExpress, verifies your logged-in session, and automatically adds the exact item, color, and size selected by the customer to your AliExpress shopping cart.
4. **Customer Address Auto-Fill:** The extension automatically populates the recipient name, street address, city, state, postal code, and phone number directly into the AliExpress checkout form.
5. **Confirm Payment:** Review the total and complete payment on AliExpress.
6. **Order Sync:** Click **Place** in the extension popup to sync the AliExpress order reference number back to Magento, updating the status to **Already Placed**.

::: tip Next Steps
Review common questions and helpful tips in [Troubleshooting](/help/troubleshooting.html) and [FAQ](/help/faq.html).
:::
