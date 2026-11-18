# FAQ & Technical Support

Frequently asked questions, version specifications, and direct support resources for **Webkul Magento 2 Order Split & Merge**.

---

## Frequently Asked Questions

### Can orders placed with online payment methods be merged?
Yes. The extension fully supports merging orders placed with online payment gateways. However, all orders being merged in the batch must share the identical payment method type.

### Can orders placed with online payment methods be split?
In standard Magento architecture, splitting an order after an online payment transaction can create discrepancies with captured authorization amounts. For this reason, order splitting is supported for orders placed using offline payment methods (such as Cash on Delivery, Bank Transfer, or Check/Money Order).

### What happens to secondary orders once merged?
Secondary orders absorbed during a merge operation are automatically updated to **Canceled** status, and their item records are cleared to prevent double dispatch. The designated parent order absorbs all items and updates totals.

### Can an order with 1 item of quantity 1 be split?
No. An order must contain at least 2 distinct items or multiple units of an item (quantity $\ge 2$) to satisfy split validation rules.

### Can an order with an invoice or shipment be split or merged?
- **Invoiced orders:** Invoiced orders cannot be split.
- **Shipped orders:** Once a shipment has been generated, an order cannot be split or merged under any circumstances.

### Is the extension compatible with headless / GraphQL implementations?
Yes. It supports automated order merging via GraphQL API for mobile apps and headless storefronts.

---

## Technical Specifications

| Parameter | Detail |
| :--- | :--- |
| **Supported Framework Versions** | Magento 2.0.x, 2.1.x, 2.2.x, 2.3.x, 2.4.x, 2.4.9 (Latest: **Magento 2.4.9**) |
| **Compatible PHP Versions** | PHP 8.1, 8.2, 8.3, 8.4.x, 8.5.x (Latest: **PHP 8.5.x**) |
| **Supported Editions** | Magento Open Source (CE) / Enterprise |

---

## Technical Support & Customizations

If you have questions, require custom ERP integrations, or need setup assistance:

- **Interactive Live Demo:** [View Live Demo](https://split-and-merge-order-demo1-magento2.webkul.in/demomanagement/viewdemo/index/demoid/103/)
- **Store Extension Page:** [Magento 2 Order Split & Merge](https://store.webkul.com/magento2-order-split-merge.html)
- **Helpdesk Ticket:** [Webkul UVdesk Support](https://webkul.uvdesk.com/)
- **Official Documentation Blog:** [Order Split & Merge Guide](https://webkul.com/blog/magento2-order-split-merge/)
- **Email Contact:** `support@webkul.com`
