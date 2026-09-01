# Import Orders

## Import Orders From Shopify
To import orders from the Shopify store, click on the **Import Order From Shopify** tab.

![Import Order List](/images/webkul-magento2-shopify-connector-map-order-1.webp)

- **Import Order From Shopify**: Creates temporary order data in the Magento 2 database.

![Import Order List](/images/order-pop-up.png)

- **Run Profiler**: Adds the imported orders to the Magento 2 store.


After execution, you can check details under **Sales > Orders**.

![Run Profiler for Orders](/images/webkul-magento2-shopify-connector-map-order-2.webp)

::: tip Note
- A cron is set for this module for auto-synchronization of orders (by default, every hour).
- If importing orders manually, make sure products are imported first.
- If you are importing orders using cron and certain order items do not exist in Magento 2, they get created automatically.
- Shopify customers not present in Magento 2 will be created automatically during order import.
:::
