# Shipment & Fulfillment Sync

After receiving an order, the vendor fulfills it from the EGSMA panel. The connector syncs the shipment back to Adobe Commerce, so both platforms stay aligned during delivery.

---

## Key Capabilities

- **Create shipments from EGSMA:** Vendors create Adobe Commerce shipments directly from the vendor panel.
- **Automatic status updates:** Shipment status stays aligned on both platforms.
- **Real-time tracking:** Tracking details sync instantly, so customers can follow their orders without delay.
- **Consistent fulfillment:** Vendors and the marketplace always show accurate shipment information.

![Order created at Adobe Commerce](/images/01ordercreatem2end.webp)

---

## How Shipment Sync Works

### Shipment Creation

1. The vendor creates a shipment on EGSMA.
2. A shipment event is triggered and captured by the connector in real time.
3. The connector sends the shipment data to Adobe Commerce.
4. Adobe Commerce creates the shipment record on the marketplace.

### Shipment Data Synced

| Data | Purpose |
|---|---|
| **Order reference ID** | Links the shipment to the correct order. |
| **Shipped items and quantities** | Keeps the shipment accurate. |
| **Shipping method** | Defines the delivery type. |
| **Tracking number** | Lets customers track the order in real time. |
| **Carrier details** | Gives complete shipment visibility on the marketplace. |

### Shipment Updates

When the vendor updates shipment details on EGSMA, the connector syncs them to Adobe Commerce in real time. Customers always see up-to-date tracking information.

---

## Fulfill an Order from EGSMA

1. Open the synced order in the vendor panel.

![Order synced at MVM](/images/02ordersyncfromm2tomvm.webp)

2. Click **Proceed To Fulfill The Order** to start fulfillment.

![Creating fulfillment](/images/03mvm.webp)

3. Click **Fulfill Now**. A pop-up opens for the shipment details.

![Create fulfillment now](/images/04mvm.webp)

4. Enter the **tracking number**, select the **shipping method**, and enter the **tracking URL**. Submit the form.

![Enter fulfillment tracking details](/images/05mvm.webp)

5. The order is fulfilled and its status updates on both platforms.

![Fulfillment created](/images/06mvm.webp)

---

## Fulfillment Status Sync

The integration keeps fulfillment status aligned across both platforms. Updates on one side appear instantly on the other.

![Synced at Adobe Commerce](/images/07mvm.webp)

Shipment details reach Adobe Commerce in real time, so the marketplace always has the latest shipment information.

![Shipment details in Adobe Commerce](/images/08m2end.webp)
