# Troubleshooting Guide

This guide assists store administrators, technical merchants, and developers in diagnosing and resolving common operational issues encountered with the **Webkul Magento 2 Smart Device Based Promotions** extension.

---

## 1. Promotional Banner Not Appearing on Storefront

### Symptom
An active promotional banner configured in the admin panel does not display on the storefront when visiting the website.

### Diagnostics & Solutions
1. **Verify Global Module Status**:
   - Navigate to **Stores > Configuration > Webkul > Smart Device Based Promotion Settings**.
   - Verify that **Enable Module** is set to **Yes**.
2. **Check Campaign Start and End Dates**:
   - Go to **Smart Device Based Promotions > Manage Promotions** and edit the campaign.
   - Ensure the **Start Date** is in the past and the **End Date** is set to a future date.
3. **Verify Store View Assignment**:
   - Confirm that the promotion is assigned to **All Store Views** or specifically to the store view you are currently viewing.
4. **Check Device Type Setting**:
   - Confirm whether the promotion is set for **Desktop** or **Mobile**. If testing on a desktop screen, mobile promotions will intentionally not render.
5. **Flush Magento Caches**:
   ```bash
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Clears full-page and layout cache to ensure newly saved promotion banners render immediately." />

---

## 2. Device-Specific Automatic Discount Not Deducting in Cart

### Symptom
A Cart Price Rule configured to grant a discount to mobile (or desktop) shoppers does not deduct the discount when products are added to the shopping cart.

### Diagnostics & Solutions
1. **Inspect Rule Conditions Tab**:
   - Open **Marketing > Promotions > Cart Price Rules** and edit the rule.
   - Verify that the condition specifies `Device Type is Mobile` (or `Desktop`).
   - Check if the rule condition parent is set to `ALL conditions are TRUE` or `ANY conditions are TRUE`. If additional cart conditions exist (such as subtotal or category rules), verify that they are also satisfied.
2. **Check Rule Active Status & Date Scope**:
   - Ensure the rule's **Status** is set to **Active** and that the current date falls between the **From** and **To** dates.
3. **Verify Customer Group & Website Eligibility**:
   - Ensure the customer's group (e.g., *NOT LOGGED IN* for guest shoppers) and active website are checked under **Rule Information**.
4. **Reindex Promotion Indices**:
   ```bash
   php bin/magento indexer:reindex
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Rebuilds price and promotion indexes so rule modifications are evaluated during cart recalculation." />

---

## 3. Geolocation Country Filter Prevents Banners from Showing

### Symptom
When **Enable Location Specific Promotions** is enabled, visitors from target regions cannot see the promotional banner.

### Diagnostics & Solutions
1. **Check Server IP Header Forwarding**:
   - If your store operates behind a reverse proxy (e.g., Cloudflare, Varnish, AWS ALB, Nginx reverse proxy), ensure the true client IP header (`CF-Connecting-IP`, `X-Forwarded-For`, or `X-Real-IP`) is forwarded to Magento.
2. **Review Country Multi-Select**:
   - In **Smart Device Based Promotions > Manage Promotions**, verify that the visitor's country is selected in the **Select Countries** field.
3. **Test with VPN / Geolocation Emulator**:
   - Test the store using an IP proxy located within the configured country to confirm whether the geolocation resolver is functioning accurately.

---

## 4. Full-Page Cache (FPC) or Varnish Serving Wrong Device Banner

### Symptom
Mobile shoppers occasionally see desktop banners, or desktop users see mobile banners after a page is cached.

### Diagnostics & Solutions
1. **Verify User-Agent Separation in Varnish**:
   - In standard Magento 2 Varnish configurations (`default.vcl`), ensure that the VCL file normalizes the `User-Agent` header into distinct device buckets (mobile vs desktop) to avoid caching cross-contamination.
2. **Check Session Initialization**:
   - Ensure that the customer's device identification is stored in their session context so that full-page cache holes or private content blocks evaluate device rules accurately.
3. **Purge Cache Server**:
   ```bash
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Clears all full-page cache variants to eliminate stale cached HTML fragments." />

---

## 5. Tablet Browsers Misidentified as Desktop or Mobile

### Symptom
Users browsing on tablets (such as Apple iPad or Samsung Galaxy Tab) are categorized under an unexpected device type.

### Diagnostics & Solutions
1. **Inspect Modern Safari on iPadOS**:
   - Starting with iPadOS 13, Apple iPads request desktop versions of websites by default, sending a macOS desktop Safari user-agent string.
   - If a tablet sends a desktop user-agent, the module correctly honors the browser's request and serves desktop promotions.
2. **Test Device Viewport Overrides**:
   - Use browser DevTools device emulation to test standard mobile phone user-agents (e.g., iPhone or Android smartphone) to verify mobile rule activation.

---

## Still Need Help?

For any custom development requests, doubts, or technical assistance:
* Drop an email to **support@webkul.com**
* Submit a ticket through our [Webkul HelpDesk Support Portal](https://webkul.uvdesk.com/en/customer/create-ticket/)
