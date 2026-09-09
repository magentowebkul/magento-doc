# Configuration Overview

The **Magento 2 Price Drop Alert** workflow consists of three main components:

```mermaid
flowchart TD
  subgraph Admin Setup
    A1[Stores > Configuration > Price Drop Alert] --> A2[Enable Module & Visibility Mode]
    A2 --> A3[Assign Email Templates]
  end

  subgraph Customer Subscription
    B1[Shopper Subscribes on Product Page] --> B2[Confirmation Email Dispatched]
    B2 --> B3[Tracked in Admin Subscription Log]
  end

  subgraph Price Drop Execution
    C1[Admin / Cron Lowers Product Price] --> C2[Price Drop Alert Email Dispatched]
    C3[Shopper Views / Unsubscribes in My Account]
  end

  A3 --> B1
  B3 --> C1
  C2 --> C3
```

---

### Navigation Map

- **Admin Module Setup**: `Stores > Configuration > Webkul > Price Drop Alert`
- **Admin Subscription Log**: `Price Drop Alert > Price Drop Alert Log`
- **Custom Email Templates**: `Marketing > Email Templates`
- **Customer Account Portal**: `My Account > Subscribed Product List`
