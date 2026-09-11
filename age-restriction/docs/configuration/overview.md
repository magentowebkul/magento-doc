# Configuration Overview

The **Magento 2 Age Restriction** extension provides a flexible, secure, and cache-friendly architecture for controlling customer access to sensitive products, categories, and CMS pages.

---

## Verification Methods Comparison

You can select one of three verification modes in the backend configuration:

| Method | User Interaction | Ideal Use Case |
|---|---|---|
| **Date of Birth (`using_dob`)** | Dropdown selectors for Day, Month, and Year. Computes exact age against configured minimum. | High-compliance stores (e.g., alcohol, tobacco, vape, prescription products). |
| **Checkbox Option (`checkbox_option`)** | A single confirmation checkbox with customizable agreement text. | Stores needing clear affirmative user consent with low friction. |
| **Yes/No Button (`yesno_button`)** | Two primary action buttons: *Enter* (confirm) and *Leave* (exit/redirect). | Fast-entry portals requiring minimal user interaction. |

---

## Session & Cookie Persistence

The extension implements a dual persistence layer:

1. **Public Cookie (`age_verified`)**:  
   Written via `Magento\Framework\Stdlib\CookieManagerInterface` with a duration configured in days (`cookie_lifetime_days`). This ensures recurring visits within the lifetime window bypass the modal.

2. **Core Session (`age_verified`)**:  
   Maintained in the PHP session to preserve verification across secure server requests.

3. **CustomerData Private Content (`agerestrictedsection`)**:  
   Exposes verification status to frontend JavaScript without bypassing Full Page Cache (FPC), Varnish, or CDN caching layers.

---

## Cart Interception & Protection

To prevent direct API, programmatic, or bypassing additions to the shopping cart, the module implements a plugin on `Magento\Checkout\Model\Cart`:

- **Class:** `Webkul\AgeRestriction\Model\Plugin\Cart`
- **Method:** `beforeAddProduct`
- **Behavior:** Checks if the target product has `product_age_verification` enabled. If the customer's age is not verified in session/cookie, an exception is thrown:
  ```text
  This "[Product Name]" product needs age verification. Please verify your age on product page.
  ```
