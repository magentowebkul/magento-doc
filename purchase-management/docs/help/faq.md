# FAQ & Technical Support

Frequently asked questions and direct technical support channels for **Webkul Magento 2 Purchase Management**.

---

## Frequently Asked Questions

### Which product types can be procured using this extension?
The module supports **Simple**, **Configurable** (including variant attribute selection), **Grouped**, and **Bundle** products.

### Can I assign multiple suppliers to one product?
Yes. You can associate multiple suppliers with any catalog item. Each supplier can have an independent cost price and priority rank.

### How does automatic procurement decide which supplier to choose?
When automatic replenishment triggers upon low inventory, the system selects the supplier configured with the highest priority (e.g. priority `1` takes precedence over priority `2`).

### Can I receive an order in multiple installments?
Yes. The extension includes native support for **Partial Shipments**, allowing warehouse staff to receive items as they arrive in staggered deliveries while keeping the remaining quantities open on the purchase order.

### Can I customize quotation PDFs and email templates?
Yes. Email templates are registered in `etc/email_templates.xml` and can be customized via **Marketing > Communications > Email Templates** in the admin panel. PDF generation layouts can also be themed to reflect your corporate identity.

### Does this extension support Multi-Source Inventory (MSI)?
Yes. In Magento 2.3+ installations with Multi-Source Inventory enabled, you can designate specific inventory sources for each supplier and inward shipment.

---

## Technical Support & Customizations

If you encounter any issues or require custom ERP integration (such as SAP, NetSuite, Odoo, or customized warehouse barcode scanners), our team is here to assist:

- **Helpdesk Ticket:** [Webkul UVdesk Support](https://webkul.uvdesk.com/)
- **Store Page:** [Purchase Management for Magento 2](https://store.webkul.com/magento2-purchase-order.html)
- **Live Demo:** [Interactive Product Demo](https://purchase-management-demo1-magento2.webkul.in/demomanagement/viewdemo/index/demoid/59/)
- **Email Contact:** `support@webkul.com`
