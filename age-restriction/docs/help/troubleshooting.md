# Troubleshooting

This guide addresses common questions and troubleshooting steps when working with the **Magento 2 Age Restriction** extension.

---

## 1. Popup Modal Does Not Appear

### Potential Causes & Solutions:

1. **Active Verification Cookie Exists in Browser:**  
   If you have already verified your age in your current browser session, the `age_verified` cookie prevents the modal from appearing again.  
   **Fix:** Open a new **Incognito / Private Window** or clear cookies for your domain.

2. **Module is Disabled in Configuration:**  
   Verify that **Stores > Configuration > Webkul > Age Verification > General Settings > Enable Plugin** is set to `Yes`.

3. **Page is Not Restricted:**  
   - For **Products**: Ensure the product attribute `Age Verification` (`product_age_verification`) is set to `Yes`, and **Display on Products** is enabled.
   - For **Categories**: Ensure the category attribute `Age Verification` (`category_age_varification`) is set to `Yes`, and **Display on Categories** is enabled.
   - For **CMS Pages**: Ensure the target page is selected in **Select CMS Pages**.

4. **Stale Cache:**  
   Flush the Magento configuration and full page cache:
   ```bash
   php bin/magento cache:clean config full_page
   ```

---

## 2. "This product needs age verification" Cart Error

### Why It Happens:
The extension includes a backend plugin (`Webkul\AgeRestriction\Model\Plugin\Cart::beforeAddProduct`) that blocks unverified cart additions (such as via direct URL query parameters or quick view modules).

### Solution:
Verify your age on the product page before clicking *Add to Cart*. If you are developing a headless storefront or custom theme, ensure your frontend invokes the `setAgeVerification` GraphQL mutation or AJAX endpoint before dispatching cart mutations.

---

## 3. Cookie Lifetime & Safari Compatibility

- In Safari and iOS devices, Apple's Intelligent Tracking Prevention (ITP) enforces strict policies on client-side cookies.
- **Webkul Age Restriction** handles this by setting server-side public cookie metadata (`setPublicCookie`) with an explicit duration calculated from your configured **Cookie Lifetime (Days)**.
- To change how often returning visitors must re-verify, update **Stores > Configuration > Webkul > Age Verification > Content > Cookie Lifetime (Days)**.

---

## 4. Multi-Store View Configuration

Configuration options under **Content**, **Terms & Conditions**, and **Design** support **Store View** scope.

If changes made at the *Default Config* level do not reflect on your localized store views:
1. Select the specific **Store View** from the top-left store switcher in the admin panel.
2. Uncheck *Use Default* next to the target fields.
3. Apply localized values (such as translated titles, button texts, or specific terms URLs) and save.

---

## 5. CSS / Styling Changes Not Reflecting

If custom colors or button styles configured in the backend are not appearing:

1. Deploy static assets:
   ```bash
   php bin/magento setup:static-content:deploy -f
   ```
2. Flush cache:
   ```bash
   php bin/magento cache:flush
   ```
3. Hard refresh your browser using `Ctrl + F5` (Windows/Linux) or `Cmd + Shift + R` (macOS).
