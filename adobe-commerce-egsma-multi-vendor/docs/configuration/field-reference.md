# Field Reference

Every configuration key the app asks for during installation. Each key maps to an environment variable that is injected into the app's runtime actions.

---

## Quick Reference

| Field | Environment variable | SaaS (ACCS) | PaaS / On-Premise |
|---|---|---|---|
| MVM Access Token | `MVM_ACCESS_TOKEN` | Required | Required |
| MVM Merchant Base URL | `MVM_MERCHANT_BASE_URL` | Required | Required |
| Commerce Base URL | `COMMERCE_BASE_URL` | Required | Required (ends with `/rest/`) |
| Media Base URL | `MEDIA_BASE_URL` | Required | Optional |
| OAuth Client ID | `OAUTH_CLIENT_ID` | Required | Not used |
| OAuth Client Secret | `OAUTH_CLIENT_SECRET` | Required | Not used |
| OAuth Scopes | — | Required | Not used |
| Commerce Consumer Key | `COMMERCE_CONSUMER_KEY` | Not used | Required |
| Commerce Consumer Secret | `COMMERCE_CONSUMER_SECRET` | Not used | Required |
| Commerce Access Token | `COMMERCE_ACCESS_TOKEN` | Not used | Required |
| Commerce Access Token Secret | `COMMERCE_ACCESS_TOKEN_SECRET` | Not used | Required |
| Commerce Username | `COMMERCE_USERNAME` | Not used | Optional |
| Commerce Password | `COMMERCE_PASSWORD` | Not used | Optional |

---

## EGSMA (MVM) Fields

### MVM Access Token
* **Environment variable**: `MVM_ACCESS_TOKEN`
* **Description**: API token for the Webkul Multi-Vendor Marketplace (MVM) service. Authenticates MVM API requests during onboarding and backend integrations. You receive it from Webkul after registration — see [Requirements](/requirements.md#egsma-account-credentials).

![Merchant Access Token](/images/accesstoken.webp)

### MVM Merchant Base URL
* **Environment variable**: `MVM_MERCHANT_BASE_URL`
* **Description**: Base URL for merchant-specific MVM APIs. Used during merchant onboarding and data synchronization flows.
* **Value**:

```text:no-line-numbers
https://mvmapi.webkul.com/
```

---

## Adobe Commerce Endpoints

### Commerce Base URL
* **Environment variable**: `COMMERCE_BASE_URL`
* **Description**: Root endpoint for Commerce REST API calls.
* **SaaS (ACCS)**: Your ACCS REST base URL, for example `https://na1-sandbox.api.commerce.adobe.com/{tenantId}/`
* **PaaS / On-Premise**: Your Magento base URL. It **must end with** `/rest/`.

### Media Base URL
* **Environment variable**: `MEDIA_BASE_URL`
* **Description**: Base URL for product images and static assets. Typically a CDN URL in SaaS. Used to build media paths in responses.

---

## SaaS Authentication (IMS OAuth)

### OAuth Client ID
* **Environment variable**: `OAUTH_CLIENT_ID`
* **Description**: Client ID from your Adobe Developer Console project credential. Used to generate IMS access tokens.

### OAuth Client Secret
* **Environment variable**: `OAUTH_CLIENT_SECRET`
* **Description**: Client secret from the same Adobe Developer Console credential.

::: danger Keep it secret
Keep the OAuth Client Secret secure and never expose it publicly.
:::

### OAuth Scopes
* **Description**: IMS scopes granted to the credential, as a single space-separated string (no commas). Must include the scopes this app needs, such as `event_receiver_api` and `commerce.accs` for SaaS deployments.

---

## PaaS / On-Premise Authentication (OAuth 1.0a)

To create these four values, follow [Commerce Integration (PaaS)](/configuration/commerce-integration.md).

### Commerce Consumer Key
* **Environment variable**: `COMMERCE_CONSUMER_KEY`
* **Description**: Integration consumer key from Adobe Commerce Admin (**System > Integrations**).

### Commerce Consumer Secret
* **Environment variable**: `COMMERCE_CONSUMER_SECRET`
* **Description**: Secret paired with the consumer key.

### Commerce Access Token
* **Environment variable**: `COMMERCE_ACCESS_TOKEN`
* **Description**: Authenticates API requests in OAuth 1.0a.

### Commerce Access Token Secret
* **Environment variable**: `COMMERCE_ACCESS_TOKEN_SECRET`
* **Description**: Secret paired with the access token.

### Commerce Username
* **Environment variable**: `COMMERCE_USERNAME`
* **Description**: Admin username for Adobe Commerce. Used for admin token authentication. Required only for PaaS / On-Premise; not used in SaaS, where IMS handles authentication.

### Commerce Password
* **Environment variable**: `COMMERCE_PASSWORD`
* **Description**: Admin password for the username above. Required only for PaaS / On-Premise; not used in SaaS.
