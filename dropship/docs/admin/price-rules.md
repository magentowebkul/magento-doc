# Price Rules

The **Price Rules** engine ensures that store owners achieve their target profit margins by automatically applying markups to supplier costs during product imports.

---

## Accessing Price Rules

Navigate to **Dropship Manager > Price Rules**.

The grid displays all active pricing rules:
* **Rule ID**
* **Price Range (Min Price – Max Price)**
* **Adjustment Price Value**
* **Price Type** (*Fixed* or *Percent*)

![Price Rules Grid](/images/admin_price_rules.webp)
![Price Rules Grid](/images/admin_price_rules_new.webp)

---

## Creating a Price Rule

Click **Add New Price Rule** in the top-right corner:

1. **Price From (Min Price):** The lower cost threshold for this bracket (e.g., `$10.00`).
2. **Price To (Max Price):** The upper cost threshold for this bracket (e.g., `$50.00`).
3. **Price:** The markup value applied to items within this range.
4. **Price Type:**
   * **Fixed:** Adds a flat dollar amount to the supplier cost (for example: supplier cost is `$20.00`, markup is `$10.00` &rarr; retail price becomes `$30.00`).
   * **Percent:** Adds a percentage markup to the supplier cost (for example: supplier cost is `$40.00`, markup is `25%` &rarr; retail price becomes `$50.00`).
5. Click **Save Rule**.

---

## Practical Margin Strategy Examples

Setting up tiered price rules allows you to maintain healthy profit margins across different product price points:

| Bracket Range | Price Adjustment | Price Type | Supplier Cost | Final Retail Price | Your Gross Profit |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **$0.00 – $20.00** | `50` | Percent | `$10.00` | `$15.00` | `$5.00 (33.3%)` |
| **$20.01 – $100.00** | `30` | Percent | `$50.00` | `$65.00` | `$15.00 (23.1%)` |
| **$100.01 – $500.00** | `45.00` | Fixed | `$200.00` | `$245.00` | `$45.00 (18.4%)` |

* **Fixed Adjustments:** Best suited for heavy or premium products where packaging and shipping require a guaranteed minimum profit.
* **Percentage Adjustments:** Ideal for low-cost accessories and apparel where percentage markups scale smoothly.

---

## Applying Price Rules During Import

When uploading bulk product feeds via [Dropship Product Profile](/admin/product-profile.html), select your desired price rule in the upload form. As products are imported, their wholesale cost is automatically adjusted to your target retail price before being published to your catalog.

::: tip Next Steps
Discover how to connect AliExpress and import trending products in [Chrome Extension Setup](/admin/aliexpress-extension.html).
:::
