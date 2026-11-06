# Order & Package Tracking

Real-time package tracking updates reduce "Where is my order?" (WISMO) support inquiries and keep customers informed throughout the fulfillment lifecycle.

---

## Automatic Tracking Number Synchronization

When a shipping label is generated through Shippo in Magento Admin:
1. The carrier's official tracking code is automatically saved to the Magento shipment entity.
2. The carrier title (e.g., USPS, UPS, FedEx, DHL) is linked to the shipment.
3. If transactional shipment emails are enabled, the tracking number and carrier link are included in the customer notification email.

---

## Customer Account Order View

Customers can monitor their delivery status anytime from their storefront account:

1. The customer logs in and navigates to **My Account > My Orders**.
2. Clicking **View Order** displays order details under the **Items Ordered** tab.

![Customer View Order](/images/customer-view-order.webp)

3. Under the **Order Shipments** tab, customers can view the assigned carrier, shipment tracking number, and click the direct tracking link.

![Customer Order Shipments](/images/customer-order-shipments.webp)

---

## Clickable Tracking Popup

Clicking **Track this shipment** opens a dedicated tracking window displaying the assigned carrier, shipment tracking number, and a direct carrier tracking URL:

![Tracking Information Popup](/images/customer-tracking-popup.webp)
