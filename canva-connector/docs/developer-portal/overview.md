# Canva Developer Portal Overview

Connecting Magento 2 with Canva is now handled through a **single unified App** inside the [Canva Developer Portal](https://www.canva.com/developers/apps). Canva houses both in-editor tools and external REST API integrations under the same app container:

```
Canva Developer Portal (Single App Container)
│
├── 1. Inside Canva (Editor Side Panel)
│   ├── Runs in the Canva design editor left panel
│   ├── Provides the merchant UI to browse catalog, add product text & export
│   ├── Requires: Design Editor intent, permissions, and Development URL
│   └── Credentials: Canva App ID
│
└── 2. Outside Canva (Canva Connect REST API & OAuth 2.0)
    ├── Handles server-to-server API communication from Magento
    ├── Handles OAuth 2.0 authorization code exchange with PKCE
    ├── Uploads Magento product images to Canva asset storage
    ├── Creates new Canva design canvases dynamically
    └── Credentials: Client ID, Client Secret, and Redirect URLs
```

---

## Component Comparison

| Feature | Inside Canva (Editor Side Panel) | Outside Canva (REST API & OAuth 2.0) |
|---|---|---|
| **Location** | Canva In-Editor Side Panel | Magento Server Backend |
| **Technology** | React 18, TypeScript, Canva Apps SDK | PHP 8.1+, Magento HTTP Client, Canva REST API |
| **Authentication** | Canva Design Token (RS256 JWT) | OAuth 2.0 Authorization Code + PKCE |
| **Key Function** | Displays product details & variations, exports design | Uploads product assets, creates Canva designs |
| **Required Permissions** | `canva:design:content` (Read/Write)<br>`canva:asset:private` (Read/Write) | `asset` (Read/Write)<br>`design:content` (Read/Write)<br>`design:meta` (Read) |
| **Required Credentials** | `Canva App ID` & `Development URL` | `Client ID`, `Client Secret` & `Redirect URL` |

---

## Configuration Steps

1. Log in to [Canva Developer Portal](https://www.canva.com/developers/apps).
2. Click **Create an app** to set up a new application container.
3. Follow [Inside Canva Setup](./canva-app.md) to configure the in-editor sidebar app and obtain the **App ID**.
4. Follow [Outside Canva Setup](./connect-api.md) to configure REST API scopes, Redirect URLs, and obtain the **Client ID** and **Client Secret**.

