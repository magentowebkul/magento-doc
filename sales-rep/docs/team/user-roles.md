# User Roles & Permissions

Configure access controls and permissions for sales representatives so they only access their assigned data and actions.

## Built-in Roles

The module provides two pre-configured roles automatically created during data setup:

- **SalesRep**: Standard operational role for day-to-day customer communication, quote response creation, and assigned order management.
- **Manager**: Supervisory role with rights to oversee team members, view all quotes, and reassign quotes and orders.

---

## Setting Up User Roles

In Magento Admin, navigate to **System > Permissions > User Roles**.

![User Role](/images/user-role.webp)

Assign the dedicated role resources for the **Sales Rep** module:

![Sales Rep Role Permissions](/images/sale-rep-role.webp)

### Available Role Resources and Permissions

- **Account Permissions**: Update account, create new account, delete accounts.
- **Order & Quote Permissions**:
  - View new quotes and assign quotes to other representatives.
  - Formulate and send quote responses with custom pricing.
  - Create and update orders for approved quotes.
  - Apply custom price lists.
- **Visibility & Support Permissions**:
  - Designate user as a Support Executive.
  - Control whether sales representative name and email are displayed on product and category pages to logged-in customers or guests.
