# Routes & Endpoints

The module adds one storefront route, `zohosso`, and no REST or GraphQL endpoints.

## Storefront

| URL | Purpose |
| --- | --- |
| `/zohosso/account/login/` | Starts sign-in: stores the state in the session and redirects to Zoho. |
| `/zohosso/account/login/?popup=1` | Same, but the result is handed back through the popup completion page. |
| `/zohosso/account/login/?return=checkout` | Returns to `/checkout/` after sign-in. `checkout` is the only accepted value. |
| `/zohosso/account/callback/` | The OAuth redirect URI. Validates state, exchanges the code, logs the customer in. |
| `/zohosso/account/complete/` | Popup completion page. Posts the destination to the opener window and closes. |

## Calls to Zoho

All on `https://<accounts domain>` for the selected region:

| Call | Endpoint |
| --- | --- |
| Authorize (browser redirect) | `GET /oauth/v2/auth` with `response_type=code`, `scope=openid profile email Aaaserver.profile.READ`, `access_type=offline`, `state` |
| Token exchange (server) | `POST /oauth/v2/token` with `grant_type=authorization_code` |
| Profile (server) | `GET /oauth/userinfo`, falling back to `GET /oauth/v2/userinfo` when no email is returned |

## Where the button is injected

| Page | Layout handle | Placement |
| --- | --- | --- |
| Customer Login | `customer_account_login` | Container `form.additional.info` |
| Create Account | `customer_account_create` | After block `customer_form_register` |
| Checkout | `checkout_index_index` | jsLayout `authentication` → `zoho-login`, area `additional-login-form-fields` |

Theme overrides: copy `Webkul_ZohoSso::sso_button.phtml` (login and create account) or
`Webkul_ZohoSso/template/zoho-login.html` (checkout) into your theme. Styles live in
`Webkul_ZohoSso::css/zohosso.css`.

## Events

The module dispatches no events of its own. Logging a customer in fires Magento's standard
`customer_login` and `customer_data_object_login` events, so existing observers (cart merge,
persistent cart, visitor log) run as usual.
