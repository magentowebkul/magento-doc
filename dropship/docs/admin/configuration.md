# Dropship Settings Configuration

To configure the extension, log into your Magento Admin panel and navigate to:
**Stores > Configuration > Webkul > Dropship Manager**

The configuration is divided into three primary sections:
1. **General Settings**
2. **Dropship Transactional Emails**
3. **AliExpress Settings**

---

## 1. General Settings

In this section, store owners configure basic operational settings, warehouse assignment behavior, and Google Maps API connectivity.

![General Settings Configuration](/images/admin_general_settings.webp)

| Setting Field | Description |
| :--- | :--- |
| **Enable Module** | Turn the entire Dropship module functionality on or off across your store views. |
| **Admin Name & Email** | The administrative contact name and email address used for notifications and warehouse communication. |
| **Warehouse Assignment Mode** | Choose between **Auto** and **Manual**:<br>&bull; **Auto Mode:** Incoming customer orders automatically assign to the nearest warehouse that holds stock for the purchased items.<br>&bull; **Manual Mode:** Orders remain unassigned until the administrator manually assigns a warehouse via the Warehouse Order Manager grid. |
| **Google API Key** | Enter your Google Places API Key. This enables automatic address lookups and location coordinates when adding or editing warehouses. |

> [!NOTE]
> Dropship shipping calculation on the checkout page is only available when **Warehouse Assignment Mode** is set to **Auto**.

### Understanding Warehouse Assignment Modes: Auto vs. Manual

Choosing the right assignment mode depends on your business model:

* **Auto Mode (Recommended for Hands-Off Automation):**
  * When a customer places an order, the system automatically checks the customer's delivery address against the physical location of all warehouses holding inventory for the ordered items.
  * The order is immediately routed to the closest warehouse with available stock, minimizing transit time and delivery cost.
  * Live shipping rates can be calculated dynamically during customer checkout based on the assigned warehouse's rate table.
* **Manual Mode (Best for Direct Administrative Control):**
  * Incoming orders are placed into an *Unassigned* status.
  * Store administrators review each order in the **Warehouse Order Manager** and manually pick which warehouse or supplier fulfills it.
  * In Manual mode, automatic shipping rates at checkout cannot query warehouse-specific table rates because the warehouse has not been chosen yet.

---

## 2. Dropship Transactional Emails

Manage automatic email notifications sent to warehouse managers and administrators during order processing.

![Dropship Transactional Emails](/images/admin_transactional_emails.webp)

| Setting Field | Description |
| :--- | :--- |
| **Show Price Details in Order Approval Mail** | Set to **Yes** if you wish to include retail product prices in the email notification sent to the warehouse manager. Set to **No** to hide retail pricing and protect customer privacy. |
| **Order Approved Template** | Choose the email template sent to the warehouse manager once an order has been approved by the store admin. |
| **New Warehouse Account Template** | Choose the welcome email template sent to new warehouse managers when their portal account is created. |

### How Email Notifications Work

1. **New Warehouse Welcome Email:** When you register a new warehouse, the manager automatically receives an email with login instructions and access credentials for their dedicated fulfillment dashboard.
2. **Order Approval Notification:** When you approve an order in the **Warehouse Order Manager**, the assigned warehouse manager immediately receives an email notification with customer shipping details, ordered items, and quantities so they can start packing right away.

---

## 3. AliExpress Settings

Configure API authentication, default catalog attributes, pricing defaults, and inventory settings for products imported from AliExpress.

![AliExpress Settings Configuration](/images/admin_aliexpress_settings_1.webp)
![AliExpress Settings Configuration](/images/admin_aliexpress_settings_2.webp)

| Setting Field | Description |
| :--- | :--- |
| **Username & Token** | Define the username and secret security token used by the AliExpress Importer Chrome extension to securely connect to your store. |
| **App ID & App Secret** | Enter your application credentials obtained from the AliExpress Open Service Console. |
| **Default Quantity** | The default inventory quantity assigned to imported AliExpress products in your warehouse. |
| **Default Cost** | The baseline cost recorded for imported products. |
| **Default Attribute Set** | Choose the Magento attribute set (e.g., *Default*) applied to imported AliExpress products. |
| **Default Tax Class** | Set the tax class assigned to AliExpress items upon import. |
| **Default Weight** | Baseline shipping weight applied if the AliExpress listing does not specify item weight. |
| **Currency Rates** | Currency conversion factor used when converting foreign currency prices on AliExpress into your store's base currency. |
| **Import Images with Message Queue** | Set to **Yes** so product images are downloaded in the background without slowing down your browser. |
| **Product Active Status** | Choose whether imported AliExpress items are enabled (`Enabled`) or kept as draft (`Disabled`) by default. |
| **Default Warehouse** | Select the primary warehouse automatically linked to imported AliExpress products. |
| **Default Website & Category** | Define the default store website and category where imported items appear. |

::: tip Next Steps
Proceed to [Shipping Method Configuration](/admin/shipping-methods.html) to configure regional dropship shipping rates at checkout.
:::
