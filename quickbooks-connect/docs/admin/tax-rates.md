# Tax Rates Mapping

To ensure order tax calculations in QuickBooks Online match Magento store order invoices down to the cent, the **Magento 2 QuickBooks Connect** extension provides **Tax Mapping** functionality.

---

## Why Tax Mapping is Essential

Magento and QuickBooks calculate tax rules based on tax rates, zones, and tax agencies. Mapping Magento tax rules to corresponding QuickBooks Tax Codes guarantees:

- Accurate tax calculation breakdown on Sales Receipts and Credit Memos.
- Compliance with local tax authorities and tax agency reporting.
- Prevention of order export validation errors caused by mismatched tax totals.

---

## Step 1 — Configure Tax Agencies & Rates in QuickBooks

Before mapping tax rates in Magento, create matching tax rates in your QuickBooks account:

1. Log in to **QuickBooks Online**.
2. Navigate to **All Apps > Sales Tax**.

![QuickBooks Sales Tax Menu](/images/qb-sales-tax-menu.webp)

3. Click **Sales Tax Settings** to inspect active tax agencies:

![QuickBooks Sales Tax Settings](/images/qb-sales-tax-settings.webp)

4. If your tax agency is not listed, click **Add Agency** and select your tax authority (e.g., *California Department of Tax and Fee Administration*):

![Add Tax Agency Modal](/images/qb-add-tax-agency.webp)

5. Click **Edit** under Actions to adjust existing tax agency configurations:

![Edit Tax Agency](/images/qb-edit-tax-agency.webp)

6. Click **Add Rate** to create custom tax rates (e.g., *Standard Tax 8.25%*, *Reduced Tax 5%*):

![Custom Tax Rates List](/images/qb-custom-tax-rates-list.webp)

![Add Custom Tax Rate Modal](/images/qb-add-custom-tax-rate.webp)

7. Click **Edit** under Actions to adjust custom tax rate settings:

![Edit Custom Tax Rate](/images/qb-edit-custom-tax.webp)

---

## Step 2 — Map Tax Rates in Magento Admin

1. Log in to **Magento Admin**.
2. Navigate to **Connect > Map Tax Rate** (or **Webkul QuickBooks Connect > Map Tax Rate**).
3. The grid displays all active tax rates configured under **Stores > Tax Zones and Rates** in Magento.

| Column Name | Description |
| :--- | :--- |
| **Magento Tax Rate Code** | Identifier name of the Magento tax rate (e.g., `US-CA-*-Rate 1`). |
| **Rate Percent (%)** | Configured tax percentage in Magento (e.g., `8.2500`). |
| **QuickBooks Tax Code** | Drop-down selection of active QuickBooks tax codes fetched via API. |
| **Sync Status** | Indicates whether the tax rate is successfully mapped. |

4. Select the matching **QuickBooks Tax Code** for each Magento tax rate.
5. Click **Save Tax Mapping**.

![Edit Custom Tax Rate](/images/magento-custom-tax.webp)

---

## Special Prices & Tax Handling

- **Special Prices**: When an order contains items purchased at a special promotional price, QuickBooks sales receipts evaluate tax against the discounted rate.
- **Tax Exempt Customers / Products**: Zero-rated or exempt items are mapped to QuickBooks Non-Taxable (`NON`) tax codes automatically.
