# Dedicated & Default Salesrep

Under **Stores > Configuration > Webkul > Sales Rep**, configure the allocation strategy.

## Dedicated Salesrep

![Dedicated Salesrep](/images/two-1.webp)

- **Module Enable**: Set to **Yes** to enable the Sales Representative module across the store. When enabled, the top-level **Sales Rep** menu appears in the admin sidebar and storefront features are activated.
- **Assign Manually**:
  - **Yes**: Administrators manually assign dedicated representatives to customers from the admin panel under **Customers > All Customers > [Select Customer] > Dedicated SalesRep** tab.
  - **No**: Enables automatic sales rep assignment for customers based on the **Assign As** option below.
- **Assign As** *(appears when Assign Manually is set to No)*:
  - **Default Product Sales Rep**: Automatically allocates the sales representative chosen under *Default Salesrep > Product Sales Rep*.
  - **Default Category Sales Rep**: Automatically allocates the sales representative chosen under *Default Salesrep > Category Sales Rep*.
  - **First Contacted Sales Rep**: Automatically links the customer to the first sales representative they sent a message to via catalog widgets.

---

## Default Salesrep

![Default Salesrep](/images/three.webp)

Specify storewide default representatives from active admin users assigned the Sales Rep role:

- **Category Sales Rep**: Fallback sales representative displayed on category pages and used for category-based assignment.
- **Product Sales Rep**: Fallback sales representative displayed on product pages and used for product-based assignment.
