# Introduction

**Magento 2 QuickBooks Connect** extension integrates your Magento 2 / Adobe Commerce store directly with **QuickBooks Online (QBO)** accounting software via standard OAuth 2.0 API authentication.

By connecting your store to QuickBooks Online, customer profiles, order totals, line items, billing/shipping addresses, tax rates, payment method descriptions, and refund credit memos are automatically or manually synchronized from Magento to QuickBooks Sales Receipts and Credit Memos.

---

## Data Integration Flow

```mermaid
graph LR
    A[Magento 2 Storefront] -->|Orders / Refunds| B(Magento 2 Backend)
    B -->|OAuth 2.0 Auth| C(Intuit QBO API v3 SDK)
    C -->|Sales Receipts| D[QuickBooks Online]
    C -->|Credit Memos| D
    C -->|Customers & Items| D
```

---

## Key Features

- **Automated & Manual Order Sync:** Export Magento orders as QuickBooks Sales Receipts automatically upon order placement, invoice generation, or order completion, or trigger batch exports manually via Admin.
- **Credit Memo Synchronization:** Automatically sync credit memos upon processing refunds in Magento or perform batch manual credit memo sync.
- **Intuit OAuth 2.0 Security:** Uses official Intuit OAuth 2.0 protocol with Client ID, Client Secret, and Realm ID authorization.
- **Automated Token Management:** Built-in cron task validates and refreshes OAuth2 access tokens every 30 minutes to ensure uninterrupted synchronization.
- **Inventory Account Mapping:** Map Magento products to specific QuickBooks accounts: Inventory Asset Account, Income Account, and Expense/COGS Account.
- **Tracking Class Integration:** Assign global or item-level tracking classes to Sales Receipts and Credit Memos for precise financial reporting in QuickBooks.
- **Custom Product Field Mapping:** Choose whether to export QuickBooks Product Names and Descriptions from Magento Product Names, SKUs, or Short/Long Descriptions.
- **Tax Mapping & Synchronization:** Map Magento store tax rates with corresponding QuickBooks tax codes and tax agencies for accurate automated accounting.
- **US & Non-US Account Support:** Handles store tax and currency configurations for both US and International QuickBooks accounts.
- **Downloadable & Bundle Product Support:** Automatically creates downloadable products as Non-Inventory items in QuickBooks and breaks down bundle products into constituent line items.
- **Customer & Guest Order Sync:** Seamlessly exports order data for both registered customer accounts and guest checkout sessions.
