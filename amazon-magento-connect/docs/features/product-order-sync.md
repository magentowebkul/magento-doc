# Product & Order Sync

The core functionality of the Webkul Amazon Connector is the synchronization of catalog items, stock status, pricing, and sales orders.

---

## Exporting Products (Magento to Amazon)

To list your Magento catalog items on Amazon:

1. Navigate to **Amazon Magento Connect > Manage Amazon Accounts** and click **Edit** on your account.
2. Select the **Export Product To Amazon** tab.
3. Select the products from the grid that you wish to export to Amazon.
4. From the **Actions** dropdown, select **Export to Amazon** and apply the action.

![Export Product To Amazon](/images/export-product-to-amazon.png)

::: tip Tracking Export Status
To check the status of exported products, navigate to the **Export Product To Amazon Status** tab under your Account Edit screen, or click **Get Status** under the **Import Product From Amazon** tab.
:::

---

## Importing Products (Amazon to Magento)

To fetch listings from Amazon Seller Central and create them in Magento 2:

1. Under the Account Edit screen, select the **Import Product From Amazon** tab.

![Import Product From Amazon](/images/import-product-from-amazon.png)

2. Under the **To Import Products from Amazon** section, select the product status filter (**All**, **Active**, or **Inactive**).

![Status Filter Import Product From Amazon](/images/filter-import-product-from-amazon.png)

3. Click **Generate Report Id** to send an inventory report request to Amazon.

![Generate Report ID](/images/generate-report-id.png)

4. Once the report is generated, click **Import Product** to pull the product listings into the temporary table queue.

![Import Product From Amazon](/images/import-product.png)

5. Click **Create Imported Product** (or **Publish Messages to Create Imported Product** if Message Queue is enabled) to convert the queued items into Magento catalog products under mapped categories.

![Create Imported Product From Amazon](/images/create-imported-product.png)

::: note Asynchronous Message Queue Processing
When **Enable Message Queue** is active in General Configuration, queue consumer workers can be started via terminal:
`php bin/magento queue:consumers:start amazonproduct.import &`
:::

---

## Price & Stock Synchronization

Once products are mapped between Magento and Amazon:
- **Product Revisions & Export:** Updating product inventory or details in Magento reflects on Amazon when **Revise Amazon Product** and **Export Product Image** options are enabled in Account Configuration.
- **Real-time & Cron Synchronization:** Order placement and stock adjustments automatically update inventory levels across connected systems when real-time and cron settings are enabled.

---

## Importing Orders

Fulfill your Amazon orders within Magento:

1. Under the Account Edit screen, select the **Import Order From Amazon** tab.

![Import Order From Amazon](/images/import-order-from-amazon.png)

2. Click the **Import Order From Amazon** button to open the **Amazon Order Range** popup.

![Import Order Range](/images/import-order-range.png)

3. Select the **Amazon Order From** and **Amazon Order to** dates and click **Submit**.

![Import Order Range Submit](/images/import-order-range-submit.png)

4. Click **Create Imported Order In Store** to convert the fetched orders into standard Magento sales orders.

![Create Imported Order](/images/create-imported-order.png)

![Imported Order List](/images/imported-order-list.png)

5. View, invoice, and ship these orders from **Sales > Orders** in Magento.

::: tip Automatic Sync
Instead of manually running import routines, product sync and real-time order imports can be automated using scheduled cron jobs.
:::

