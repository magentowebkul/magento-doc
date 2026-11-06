# FAQ

Frequently asked questions regarding Webkul Magento 2 Sales Representative extension.

## Can one customer have multiple sales representatives?

By standard workflow, each customer is assigned to one dedicated primary sales representative. However, the customer can still contact other representatives assigned to specific products or categories if permitted by store configuration.

## How is a dedicated sales rep assigned automatically?

When **Assign Manually** is set to **No** in module configuration, store owners can choose between:
1. **Default Product Sales Rep**: Assigned based on the configured default product representative.
2. **Default Category Sales Rep**: Assigned based on the configured default category representative.
3. **First Contacted Sales Rep**: Assigned to the first representative the customer communicated with.

## Can customers use promotional coupon discounts with negotiated quote pricing?

This is controlled via the **Allow To use Discount while quote product is in cart** setting under **Stores > Configuration > Webkul > Sales Rep > Salesrep Settings**. If set to **No**, promotional discount coupons are disabled during checkout when quote products are present.

## Does the sales representative receive an email on order placement?

Yes, if transactional email notifications are configured under **Stores > Configuration > Webkul > Sales Rep > Sales Rep Emails**, the assigned representative receives an order placement alert.

## Can quotes and orders be reassigned to other representatives?

Yes. Representatives and managers can reassign quote requests (from the quote detail view under the *Assigned To* tab) and customer orders (from the *Sales Rep > Orders* grid) to colleague representatives.
