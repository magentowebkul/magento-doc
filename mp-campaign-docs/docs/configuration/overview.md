# Configuration Overview

The **Magento 2 Marketplace Campaign** workflow spans three distinct roles: the **Store Admin**, the **Marketplace Seller**, and the **Customer**.

```mermaid
flowchart TD
  subgraph Admin Role
    A1[Module Settings & Email Template] --> A2[Create New Campaign]
    A2 --> A3[Set Rules & Customer Terms]
    A3 --> A4[Send Invites to Sellers]
  end

  subgraph Seller Role
    B1[Receive Email / View Dashboard] --> B2[Accept & Join Campaign]
    B2 --> B3[Assign Products & Quantities]
  end

  subgraph Customer Role
    C1[Browse Promotional Banners] --> C2[View Campaign Products]
    C2 --> C3[Add to Cart & Checkout]
    C3 --> C4[Auto-Applied Discount]
  end

  A4 --> B1
  B3 --> C1
```

---

### Navigation Summary

- **Admin Module Configuration**: `Stores > Configuration > Webkul > Marketplace Campaign`
- **Admin Campaign Manager**: `Marketplace Management > Manage Campaigns`
- **Admin Order Tracking**: `Marketplace Management > Campaign Orders`
- **Seller Panel**: `Marketplace Dashboard > Campaigns`
- **Customer Storefront**: `Offers / Campaign Banners`
