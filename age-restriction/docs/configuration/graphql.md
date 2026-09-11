# GraphQL API

The **Webkul Magento 2 Age Restriction** extension provides comprehensive GraphQL support for headless storefronts, PWA Studio, Hyvä Commerce, mobile applications (iOS/Android), and custom frontend integrations.

**GraphQL Endpoint:**  
`POST https://<your_store_url>/graphql`

**HTTP Headers:**
```http
Content-Type: application/json
Store: <store_code>
```

---

## 1. Retrieve Store Configuration

Fetch all Age Restriction settings to dynamically render and style the age verification modal in headless frontends.

### Query

```graphql
query getAgeRestrictionConfig {
  storeConfig {
    # General Settings
    age_verification_general_settings_enable_plugin
    age_verification_general_settings_popup_image

    # Content Settings
    age_verification_content_popup_title
    age_verification_content_popup_content_title
    age_verification_content_select_methods_to_verify_users_age
    age_verification_content_popup_checkbox_title
    age_verification_content_select_date_format
    age_verification_content_required_minimum_age
    age_verification_content_enter_button_text
    age_verification_content_leave_button_text
    age_verification_content_leave_button_url
    age_verification_content_cookie_lifetime_days

    # Terms and Conditions
    age_verification_terms_conditions_enable_terms
    age_verification_terms_conditions_terms_checkbox_text
    age_verification_terms_conditions_terms_link_text
    age_verification_terms_conditions_terms_link_url

    # Display Rules
    age_verification_display_settings_display_on_pages
    age_verification_display_settings_cms_pages
    age_verification_display_settings_display_on_categories
    age_verification_display_settings_display_on_products

    # Design & Styling
    age_verification_design_width_of_popup
    age_verification_design_background_color
    age_verification_design_text_color
    age_verification_design_enter_button_color
    age_verification_design_enter_button_text_color
    age_verification_design_enter_button_border_color
    age_verification_design_enter_button_border_radius
    age_verification_design_leave_button_color
    age_verification_design_leave_button_text_color
    age_verification_design_leave_button_border_color
    age_verification_design_leave_button_border_radius
  }
}
```

### Sample Response

```json
{
  "data": {
    "storeConfig": {
      "age_verification_general_settings_enable_plugin": 1,
      "age_verification_general_settings_popup_image": "AgeRestriction/logo.png",
      "age_verification_content_popup_title": "Are you 18 years old?",
      "age_verification_content_popup_content_title": "You must confirm your age before entering this website.",
      "age_verification_content_select_methods_to_verify_users_age": "using_dob",
      "age_verification_content_popup_checkbox_title": "Checked",
      "age_verification_content_select_date_format": "dd-mm-yy",
      "age_verification_content_required_minimum_age": 18,
      "age_verification_content_enter_button_text": "Enter",
      "age_verification_content_leave_button_text": "Leave",
      "age_verification_content_leave_button_url": "https://google.com",
      "age_verification_content_cookie_lifetime_days": 30,
      "age_verification_terms_conditions_enable_terms": 1,
      "age_verification_terms_conditions_terms_checkbox_text": "I agree to the",
      "age_verification_terms_conditions_terms_link_text": "Terms and Conditions",
      "age_verification_terms_conditions_terms_link_url": "/terms-and-conditions",
      "age_verification_display_settings_display_on_pages": 1,
      "age_verification_display_settings_cms_pages": "1,2,3",
      "age_verification_display_settings_display_on_categories": 1,
      "age_verification_display_settings_display_on_products": 1,
      "age_verification_design_width_of_popup": 400,
      "age_verification_design_background_color": "#ffffff",
      "age_verification_design_text_color": "#000000",
      "age_verification_design_enter_button_color": "#000000",
      "age_verification_design_enter_button_text_color": "#ffffff",
      "age_verification_design_enter_button_border_color": "#000000",
      "age_verification_design_enter_button_border_radius": 5,
      "age_verification_design_leave_button_color": "#ffffff",
      "age_verification_design_leave_button_text_color": "#000000",
      "age_verification_design_leave_button_border_color": "#000000",
      "age_verification_design_leave_button_border_radius": 5
    }
  }
}
```

### StoreConfig Fields Reference

| Field Name | Type | Description |
|---|---|---|
| `age_verification_general_settings_enable_plugin` | `Int` | `1` if enabled, `0` if disabled. |
| `age_verification_general_settings_popup_image` | `String` | Path to the uploaded popup header logo/image. |
| `age_verification_content_popup_title` | `String` | Modal headline title text. |
| `age_verification_content_popup_content_title` | `String` | Sub-headline / modal description text. |
| `age_verification_content_select_methods_to_verify_users_age` | `String` | Method: `using_dob`, `checkbox_option`, or `yesno_button`. |
| `age_verification_content_popup_checkbox_title` | `String` | Label for the confirmation checkbox. |
| `age_verification_content_select_date_format` | `String` | DOB format: `dd-mm-yy`, `mm-yy-dd`, or `yy-dd-mm`. |
| `age_verification_content_required_minimum_age` | `Int` | Minimum age required to access restricted pages. |
| `age_verification_content_enter_button_text` | `String` | Label for the positive confirmation button. |
| `age_verification_content_leave_button_text` | `String` | Label for the cancel / exit button. |
| `age_verification_content_leave_button_url` | `String` | Target URL for user exit / failed verification redirect. |
| `age_verification_content_cookie_lifetime_days` | `Int` | Number of days verification cookie remains valid. |
| `age_verification_terms_conditions_enable_terms` | `Int` | `1` if terms checkbox is mandatory, `0` otherwise. |
| `age_verification_terms_conditions_terms_checkbox_text` | `String` | Prefix text before the terms link. |
| `age_verification_terms_conditions_terms_link_text` | `String` | Terms and Conditions hyperlink text. |
| `age_verification_terms_conditions_terms_link_url` | `String` | Destination URL for terms and conditions. |
| `age_verification_display_settings_display_on_pages` | `Int` | `1` if restriction applies to selected CMS pages. |
| `age_verification_display_settings_cms_pages` | `String` | Comma-separated list of restricted CMS page IDs. |
| `age_verification_display_settings_display_on_categories` | `Int` | `1` if restriction applies to restricted categories. |
| `age_verification_display_settings_display_on_products` | `Int` | `1` if restriction applies to restricted products. |
| `age_verification_design_width_of_popup` | `Int` | Modal container width in pixels (200–1000). |
| `age_verification_design_background_color` | `String` | Hex color code for modal background. |
| `age_verification_design_text_color` | `String` | Hex color code for modal text. |
| `age_verification_design_enter_button_color` | `String` | Hex color code for Enter button background. |
| `age_verification_design_enter_button_text_color` | `String` | Hex color code for Enter button text. |
| `age_verification_design_enter_button_border_color` | `String` | Hex color code for Enter button border. |
| `age_verification_design_enter_button_border_radius` | `Int` | Border radius in pixels for Enter button corners. |
| `age_verification_design_leave_button_color` | `String` | Hex color code for Leave button background. |
| `age_verification_design_leave_button_text_color` | `String` | Hex color code for Leave button text. |
| `age_verification_design_leave_button_border_color` | `String` | Hex color code for Leave button border. |
| `age_verification_design_leave_button_border_radius` | `Int` | Border radius in pixels for Leave button corners. |

---

## 2. Check Age Verification Status

The `checkAgeVerifiedOrNot` query supports two modes:
1. **Active Session Check:** Omitting the `age` argument checks if the current customer has already verified their age in their active session or cookie.
2. **Age Threshold Evaluation:** Supplying the `age` argument evaluates whether the provided age satisfies the required minimum age threshold without mutating session state.

### Mode A: Active Session / Cookie Check (No Arguments)

```graphql
query checkCurrentVerificationStatus {
  checkAgeVerifiedOrNot {
    checkAgeVerified
    message
  }
}
```

**Response (Already Verified):**
```json
{
  "data": {
    "checkAgeVerifiedOrNot": {
      "checkAgeVerified": true,
      "message": "Age is verified"
    }
  }
}
```

**Response (Not Yet Verified):**
```json
{
  "data": {
    "checkAgeVerifiedOrNot": {
      "checkAgeVerified": false,
      "message": "Age has not verified"
    }
  }
}
```

---

### Mode B: Age Threshold Validation (With `age` Argument)

#### Query (Valid Age Meets Requirement)

```graphql
query validateAgeEligible {
  checkAgeVerifiedOrNot(age: 25) {
    checkAgeVerified
    message
  }
}
```

**Response:**
```json
{
  "data": {
    "checkAgeVerifiedOrNot": {
      "checkAgeVerified": true,
      "message": "Age is verified"
    }
  }
}
```

#### Query (Underage Rejection)

```graphql
query validateAgeUnderage {
  checkAgeVerifiedOrNot(age: 15) {
    checkAgeVerified
    message
  }
}
```

**Response:**
```json
{
  "data": {
    "checkAgeVerifiedOrNot": {
      "checkAgeVerified": false,
      "message": "Age has not verified"
    }
  }
}
```

---

## 3. Set Age Verification

The `setAgeVerification` mutation records the verified status in the Magento session and creates an `age_verified` public cookie honoring the configured `cookie_lifetime_days`.

### Mode A: DOB Verification (Passing `age`)

When using the **Date of Birth** method (`using_dob`), pass the computed customer age as the `age` argument:

```graphql
mutation verifyCustomerAge {
  setAgeVerification(age: 21) {
    isAgeSet
    message
  }
}
```

**Response (Success):**
```json
{
  "data": {
    "setAgeVerification": {
      "isAgeSet": true,
      "message": "Age has been verified successfully"
    }
  }
}
```

**Response (Underage Failure):**
```json
{
  "data": {
    "setAgeVerification": {
      "isAgeSet": false,
      "message": "Age verification failed"
    }
  }
}
```

---

### Mode B: Checkbox / Button Verification (Without `age`)

When using the **Checkbox** (`checkbox_option`) or **Yes/No Button** (`yesno_button`) methods, invoke `setAgeVerification` without parameters once the user confirms agreement:

```graphql
mutation confirmVerificationAgreement {
  setAgeVerification {
    isAgeSet
    message
  }
}
```

**Response:**
```json
{
  "data": {
    "setAgeVerification": {
      "isAgeSet": true,
      "message": "Age has been verified successfully"
    }
  }
}
```

---

## 4. Catalog Extensions (Products & Categories)

The extension extends core Magento GraphQL interfaces to expose age restriction attributes on catalog entities.

### Product Interface (`ProductInterface`)

The `product_age_verification` attribute returns `1` if the product is age-restricted, or `0` if it is unrestricted.

#### Query Product Details

```graphql
query getProductWithAgeRestriction($sku: String!) {
  products(filter: { sku: { eq: $sku } }) {
    items {
      id
      name
      sku
      product_age_verification
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
  }
}
```

#### Sample Response

```json
{
  "data": {
    "products": {
      "items": [
        {
          "id": 482,
          "name": "Single Malt Scotch Whisky 750ml",
          "sku": "WHISKY-750",
          "product_age_verification": 1,
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 65,
                "currency": "USD"
              }
            }
          }
        }
      ]
    }
  }
}
```

---

### Category Interface (`CategoryInterface`)

The `category_age_varification` attribute returns `1` if the entire category requires age verification, or `0` otherwise.

#### Query Category Tree

```graphql
query getCategoriesWithAgeRestriction {
  categoryList(filters: { ids: { in: ["3", "4", "5"] } }) {
    id
    name
    url_path
    category_age_varification
    children {
      id
      name
      category_age_varification
    }
  }
}
```

#### Sample Response

```json
{
  "data": {
    "categoryList": [
      {
        "id": 3,
        "name": "Alcohol & Spirits",
        "url_path": "alcohol-spirits",
        "category_age_varification": 1,
        "children": [
          {
            "id": 4,
            "name": "Whisky",
            "category_age_varification": 1
          },
          {
            "id": 5,
            "name": "Wine",
            "category_age_varification": 1
          }
        ]
      }
    ]
  }
}
```

---

## 5. Frontend Integration Best Practices

When building a headless frontend (e.g., Next.js, Vue Storefront, PWA Studio):

1. **Bootstrap Check:**  
   On application initialization, query `storeConfig` to cache age verification settings and check if `age_verification_general_settings_enable_plugin` is active.
2. **Page Navigation Interception:**  
   Before navigating to a route:
   - For CMS pages: Check if current CMS page ID is present in `age_verification_display_settings_cms_pages`.
   - For Categories: Check if `category.category_age_varification === 1`.
   - For Products: Check if `product.product_age_verification === 1`.
3. **Verification State Guard:**  
   If visiting a restricted entity, execute `checkAgeVerifiedOrNot`. If `checkAgeVerified` returns `false`, open the age verification modal overlay.
4. **Cookie & Session Management:**  
   Ensure HTTP cookie headers (`Set-Cookie`) returned by the `setAgeVerification` mutation are passed back in subsequent GraphQL queries and cart operations to prevent cart plugin exceptions.
