# Introduction

**Magento 2 Sales Representative** extension enables store owners to assign specific sales representatives to customers and manage B2B quotation workflows efficiently.

Sales representatives can act on behalf of the store owner, handle assigned customer orders, respond to quotes with specialized pricing, and manage assigned customer relationships.

## Key Features

- **Dedicated Sales Rep Assignment**: Automatically (based on default product rep, category rep, or first contacted rep) or manually assign a dedicated sales representative to each customer.
- **Default Product & Category Sales Rep**: Set fallback representatives for catalog categories, products, or guest inquiries.
- **Storefront Sales Rep Widget**: Display assigned or default representative information on category and product pages, allowing customers to send direct queries with an option to forward to their dedicated rep.
- **Sales Rep Dashboard**: Backend dashboard for reps and administrators to view total sales, discounts given, assigned orders, quotes, customers, and recent message threads.
- **Customer Quote Creation & Negotiation**: Customers can submit quote requests directly from the catalog or through a multi-product quote form with SKU autocomplete in their account; sales reps can adjust unit pricing and approve quotes.
- **Order & Quote Reassignment**: Representatives and managers can reassign quote requests and mapped orders to colleague representatives.
- **Team & Manager Hierarchy**: Configure maximum managers and team sizes, linking representatives to managers and team members within the admin panel.
- **Price List & Custom Rules**: Integrate custom price rules and customer-specific discount tiers via `Webkul_PriceList`.
- **Direct Messaging Thread**: Built-in communication channel between customers and sales reps for general inquiries and quote negotiation.
- **Cart Discount Restriction**: Control whether additional shopping cart coupon discounts can be combined with approved quote pricing at checkout.
- **GraphQL API Support**: Query quote requests, quote details, message threads, and submit customer quotes and messages via GraphQL mutations.
- **Automated Transactional Emails**: Send specialized notifications to store admins, managers, sales reps, and customers for order placements, quote creation, quote status updates, and messages.
