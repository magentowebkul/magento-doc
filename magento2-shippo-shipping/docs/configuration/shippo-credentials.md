# Shippo API Credentials

To link Magento 2 with Shippo, you will need to obtain your private API authentication token from the Shippo dashboard.

---

## How to Obtain Your Shippo API Key

Follow these steps to retrieve your API token:

1. **Sign in to Shippo:** Log in to your merchant account at **[portal.goshippo.com](https://portal.goshippo.com/)**.
2. **Navigate to Developer Keys:** In the left sidebar navigation, go to **API configuration > Developer keys** (or click the **API tokens** card on the Overview dashboard).

![Shippo Developer Keys](/images/shippo-developer-keys.webp)

3. **Generate or Request an API Key:**
   * **Test Key (Development & Staging):** Under the **Test keys** section, click **Create new test key** to generate a sandbox key for simulating rate lookups and mock label creation without incurring postage charges.
   * **Live Key (Production):** Under the **Live keys** section, click **Request live key** to activate live carrier rates and official label purchasing.

4. **Copy Your Key:** When the **Test API key** dialog appears, copy the key immediately using the copy icon.

![Shippo Test API Key Modal](/images/shippo-key-modal.webp)

::: warning Store Key Securely
This is the only time the API key can be viewed in full. Shippo will mask the key once the dialog is closed. Always store your credentials securely.
:::

5. **Configure in Magento Admin:** Paste the copied token into the **Shippo API Key** field in Magento Admin under **Stores > Configuration > Sales > Delivery Methods > Webkul Shippo Shipping** (or **ShippoShipping > Shippo Configuration Settings**).

---

::: tip Testing Mode vs Production
When configuring your store in development or staging, use your **Shippo Test Token**. This allows you to simulate order workflows, test address validation, and generate mock labels without billing your credit card.
:::
