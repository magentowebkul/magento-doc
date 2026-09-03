# Troubleshooting

If you encounter issues while configuring or syncing data with the Amazon Connector, please refer to the common problems and solutions below.

---

## 1. Credentials Verification Fails

When clicking **Verify Credentials**, you receive an authentication or permission error.

### Potential Causes & Solutions:
- **Incorrect IAM Role ARN:** Check your AWS console and ensure the role ARN exactly matches. The role must have a trust relationship configured with Amazon's Selling Partner API.
- **Incorrect LWA Credentials:** Double-check the Login with Amazon (LWA) Client ID and Client Secret in your Seller Central dashboard.
- **Expired AWS Access Key:** Ensure the AWS IAM user access key/secret key is active.

---

## 2. API Throttling (Error 429 — Too Many Requests)

Amazon returns throttling errors during bulk sync or order import.

### Solutions:
- **Adjust Cron Frequency:** Increase the intervals of your cron jobs. For instance, run order sync every 30 minutes instead of every 5 minutes.
- **Limit Bulk Exports:** If exporting a large catalog, export products in smaller batches rather than all at once.

---

## 3. Product Export Status is "Failed" or "Has Errors"

The product export batch succeeds in Magento but fails on Amazon's end.

### Solutions:
- **Inspect Export Status:** Under Account Edit, open the **Export Product To Amazon Status** tab (or click **Get Status** under the **Import Product From Amazon** tab) to review execution logs and error messages from Amazon.
- **Check Attribute Mapping:** Verify that mandatory product attributes (such as Product Identifier Type, Product Identifier Value, or exemption status) are mapped under **Amazon Magento Connect > Attribute Map**.

---

## 4. Orders are Not Importing

The cron job runs but Amazon orders do not appear in the Magento order grid.

### Solutions:
- **Verify Account Settings:** Go to **Amazon Magento Connect > Manage Amazon Accounts**, select your account, and verify that **Default Store**, **Default Category**, and order statuses under **General Configuration** are properly assigned.
- **Payment & Shipping Methods:** Payment and shipping for imported orders use built-in models (`amzpayment` and `wk_amzconnectship`). Ensure store currency settings match your target marketplace currency.
- **Log Inspection:** Inspect Magento log files to find specific database or API failures:
  - Check `var/log/exception.log`
  - Check `var/log/system.log`

