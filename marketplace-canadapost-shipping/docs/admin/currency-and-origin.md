# Currency & Store Origin Setup

To ensure Canada Post quotes rates accurately and converts prices correctly into your store's display currencies, you must configure two critical Magento store settings: **Currency Setup** and **Store Shipping Origin**.

---

## 1. Configure Canadian Dollar (CAD) Currency

Canada Post quotes all live postage charges in **Canadian Dollars (CAD)**. If your store's base currency is USD, EUR, or another currency, Magento must be able to convert CAD rates into your display and base currencies.

### Add CAD to Allowed Currencies
1. Navigate to **Stores > Configuration > General > Currency Setup**.
2. Under **Currency Options**, locate **Allowed Currencies**.
3. Select **Canadian Dollar** (hold `Ctrl` or `Cmd` to select multiple currencies if applicable).
4. Click **Save Config**.

![Currency Setup](/images/admin-currency-cad-setup.webp)

### Update Currency Conversion Rates
1. Navigate to **Stores > Currency > Currency Rates**.
2. Locate the exchange rate cell between your store's **Base Currency** and **CAD**.
3. Enter the current exchange rate manually or click **Import** to fetch live rates from Fixer.io, Yahoo Finance, or your preferred service.
4. Click **Save Currency Rates**.

![Currency Rates Matrix](/images/admin-currency-rates-matrix.webp)

::: warning Missing Exchange Rate
If CAD is not listed in allowed currencies or has a missing exchange rate (`0.0000`), Magento cannot calculate shipping rates at checkout and will fail with a quote error.
:::

---

## 2. Configure Store Shipping Origin in Canada

Canada Post API requires all shipments to originate within Canada. The origin postal code determines the postal zone, fuel surcharge, and base tariff.

If a marketplace vendor does not specify a custom warehouse address, the module automatically uses this global store origin as the fallback shipping point.

### Set Origin Location
1. In your Magento Admin Panel, navigate to **Stores > Configuration > Sales > Shipping Settings**.
2. Expand the **Origin** section.
3. Configure the store location:
   * **Country:** Select **Canada**.
   * **Region / State:** Select the Canadian province (e.g., *Ontario*, *Quebec*, *British Columbia*).
   * **ZIP / Postal Code:** Enter a valid Canadian postal code (e.g., `K1A 0B1` or `M5V 2T6`).
   * **City:** Enter the Canadian city (e.g., *Ottawa* or *Toronto*).
   * **Street Address:** Enter the physical street address.

![Store Origin Shipping Information](/images/admin-origin-shipping-info.webp)

4. Click **Save Config**.

---

::: tip Postal Code Formatting
Canadian postal codes follow the alphanumeric format `A1A 1A1` (letter, number, letter, space, number, letter). The module automatically strips whitespace and capitalizes letters before submitting payloads to the Canada Post REST endpoints.
:::
