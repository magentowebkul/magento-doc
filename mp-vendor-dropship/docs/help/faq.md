# FAQ & Technical Support

Frequently asked questions and direct support channels for **Webkul Magento 2 Multi Vendor Dropship**.

---

## Frequently Asked Questions

### Can marketplace sellers create their own warehouses?
The store administrator creates and authorizes warehouse facilities and managers. Marketplace sellers can assign their catalog products to any authorized warehouse and set custom stock numbers for each location.

### How does automatic warehouse assignment work?
When an order is completed, the extension calculates the geodesic distance between the customer's delivery address coordinates and the geographic addresses of all warehouses stocking the ordered products using Google Maps Geocoding and Distance Matrix APIs. The nearest warehouse is automatically assigned.

### Can orders still be routed if I don't have a Google API Key?
Yes. You can set **Warehouse Assign** to **Manual** in the module settings. The administrator can then manually assign any warehouse from the **Warehouse Order Manager** screen before approving the order.

### Can an order be fulfilled by multiple warehouses?
Yes, if products in a multi-item order reside in different warehouses, each warehouse manager receives their respective portion of the order and dispatches shipments independently.

### Which standard shipping carriers are supported?
The extension natively supports Magento's standard shipping carriers: Table Rate, Free Shipping, DHL, UPS, USPS, and FedEx.

### What happens when an order is approved?
When the administrator approves an order in **Warehouse Order Manager**, an automated email notification is sent to the warehouse manager, and the order appears in the manager's portal ready for packing and shipment generation.

---

## Technical Support & Customizations

If you require assistance, custom shipping integrations, or ERP synchronization:

- **Live Demo:** [Interactive Product Demo](https://vendor-dropship-demoinstance-magento2.webkul.in/demomanagement/viewdemo/index/demoid/29/)
- **Store Extension Page:** [Magento 2 Multi Vendor Dropship](https://store.webkul.com/magento2-multi-vendor-dropship.html)
- **Helpdesk Ticket:** [Webkul UVdesk Support](https://webkul.uvdesk.com/)
- **User Guide & Blog:** [Multi Vendor Dropship Blog Post](https://webkul.com/blog/magento2-multi-vendor-dropship/)
- **Official Website:** [Webkul Software](https://webkul.com/)
- **Email Contact:** `support@webkul.com`
