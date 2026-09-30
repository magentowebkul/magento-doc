# Troubleshooting Guide

This section covers common questions, configuration pitfalls, and debugging procedures for the **Multi Company SaaS Module**.

---

## 1. Recurring Payment Methods Not Appearing at Checkout

**Symptom**: When a seller attempts to purchase a SaaS membership plan, no payment methods appear on the checkout page.

**Resolution Steps**:
1. Navigate to **Stores > Settings > Configuration > Webkul > SAAS Configuration**.
2. Verify that **Allowed payment methods for Membership** has **Recurring Stripe Payment Method** and/or **PayPal Recurring Express Checkout** selected.
3. Check the individual gateway settings under **Stores > Configuration > Sales > Payment Methods**:
   * Confirm that **Enable this Solution** is set to **Yes**.
   * Verify that API keys (Stripe Publishable/Secret keys or PayPal API credentials) are valid and match the active sandbox/production environment.
4. Run `php bin/magento cache:flush`.

---

## 2. Cart Exclusivity Conflicts

**Symptom**: Sellers see an error or cannot add standard catalog items when a SaaS plan is in their cart.

**Resolution**:
This is intended architectural behavior. SaaS memberships establish recurring payment authorizations with Stripe or PayPal that require isolated transaction tokens. Membership products must be checked out independently from physical or digital marketplace catalog products.

---

## 3. Webhook Delivery & Inspection Logs

**Symptom**: Subscription renewals occur in Stripe or PayPal, but the seller's status in Magento is not updated automatically.

**Resolution Steps**:
1. Check that the Stripe Webhook was generated via the **Generate Webhook** button in admin, or verify the endpoint URL in your Stripe Dashboard.
2. For PayPal, ensure your Instant Payment Notification (IPN) listener is set to:
   ```text
   https://<your-domain>/mpsaas/paypal/webhook
   ```
3. Inspect Magento log files for incoming payload records and error messages:
   ```bash
   tail -f var/log/mpsaas.log
   tail -f var/log/system.log
   ```

---

## 4. Subdomains Not Resolving

**Symptom**: After a vendor configures their subdomain (e.g., `brand.yourmarketplace.com`), browsing to the URL yields a DNS error or server not found.

**Resolution Steps**:
1. Ensure your domain DNS zone includes a **Wildcard A Record** (`*.yourmarketplace.com`) or CNAME pointing to your server's IP address.
2. Ensure your Nginx or Apache virtual host configuration accepts wildcard subdomains:
   ```nginx
   server_name yourmarketplace.com *.yourmarketplace.com;
   ```
3. Confirm that the **Webkul Vendor Subdomain** module is active:
   ```bash
   php bin/magento module:status Webkul_VendorSubDomain
   ```

---

## 5. Theme Customization Not Reflecting

**Symptom**: The vendor selects a new theme in the seller portal, but the subdomain storefront retains the previous layout.

**Resolution Steps**:
1. Clear the Magento block and page cache:
   ```bash
   php bin/magento cache:clean
   php bin/magento cache:flush
   ```
2. Verify that the selected theme files are deployed for the active store view:
   ```bash
   php bin/magento setup:static-content:deploy -f
   ```
