# Troubleshooting

This section covers diagnostic procedures and solutions for common issues when operating the **Webkul Magento 2 Marketplace Adyen Payment Gateway** module.

---

## 1. Invalid HMAC Signature Error

### Problem
Webhook log shows `Invalid HMAC signature` or notifications fail HMAC validation.

### Solution
1. Log into **Adyen Customer Area > Developers > Webhooks**.
2. Select your Webhook configuration and generate a new **HMAC Key**.
3. Copy the hexadecimal HMAC key.
4. Log into Magento Admin > **Stores > Configuration > Sales > Payment Methods > Adyen Marketplace Payment Gateway**.
5. Paste key into **Webhook HMAC Key** field and save configuration.
6. Flush Magento cache:
   ```bash
   php bin/magento cache:clean
   ```
   <ExplainCode explanation="This command cleans Magento cache storage so updated Webhook HMAC Key configuration values take immediate effect." />

![Adyen Webhook HMAC Key Setup](/images/admin_general_config.webp)

---

## 2. Live URL Prefix Error in Production Mode

### Problem
API calls fail in Live environment with endpoint resolution error.

### Solution
- Ensure **Live URL Prefix** is populated under Admin Configuration.
- Format must be `[random]-[company name]` obtained from Adyen Customer Area under **Developers > API URLs**.

---

## 3. CSS Styling Missing on Checkout / Seller Panel

### Problem
Adyen checkout form or seller payout panel looks unstyled.

### Solution
- Verify module is active: `payment/mpadyenpayment/active` must be set to `1`.
- Clear layout and page cache:
  ```bash
  php bin/magento cache:clean layout block_html
  ```
  <ExplainCode explanation="This command cleans cached layout XML definitions and HTML block outputs to reload conditional CSS head.additional blocks." />
- Run static content deployment:
  ```bash
  php bin/magento setup:static-content:deploy -f
  ```
  <ExplainCode explanation="This command deploys static frontend assets, JavaScript payment components, and CSS files to the pub/static/ folder. The -f option forces deployment." />

---

## 4. Collection Cache Stale Data

### Problem
Payout requests or Webhook logs do not refresh immediately.

### Solution
The module utilizes Collection Cache Fetch strategy with `CACHE_TAG`. Force collection cache clean:

```bash
php bin/magento cache:clean collection_data
```
<ExplainCode explanation="This command specifically cleans cached collection query results (collection_data cache tag). Because PayoutDetails, PayoutRequest, and WebhookLog collections implement the Collection Cache Fetch Strategy, cleaning collection_data invalidates cached SQL result sets and forces Magento to re-query the database for fresh records." />

