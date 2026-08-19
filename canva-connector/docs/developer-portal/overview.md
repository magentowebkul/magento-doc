# Canva Developer Portal Overview

Connecting Magento 2 with Canva requires setting up two distinct components inside the [Canva Developer Portal](https://www.canva.com/developers/apps):

```
Canva Developer Portal
├── 1. Canva App (Sidebar UI)
│   ├── Runs in Canva Editor left sidebar
│   ├── Provides the "Magento 2 Connect" interface
│   ├── Connects to your frontend service (e.g. http://localhost:8083)
│   └── Requires Canva App ID (e.g. AAHOGAGCvn4)
│
└── 2. Canva Connect Integration (REST API & OAuth)
    ├── Handles server-to-server API calls
    ├── Handles OAuth 2.0 PKCE authentication
    ├── Uploads Magento product images to Canva Assets
    ├── Creates new Canva design canvases
    └── Provides Client ID & Client Secret
```

---

## Component Comparison

| Feature | Canva App (Sidebar UI) | Canva Connect Integration (REST API) |
|---|---|---|
| **Primary Location** | Canva In-Editor Side Panel | Magento Admin & Server Backend |
| **Technology** | React 18, TypeScript, Canva Apps SDK | PHP 8.1+, Guzzle HTTP, Canva Connect REST API |
| **Authentication** | Canva Design Token (RS256 JWT) | OAuth 2.0 Authorization Code + PKCE |
| **Key Function** | Displays product info, variations, exports canvas | Uploads product assets, creates Canva designs |
| **Required Credentials** | `App ID` | `Client ID` & `Client Secret` |

---

## Getting Started

1. Go to [Canva Developer Portal](https://www.canva.com/developers/apps).
2. Follow [Canva App Setup](./canva-app.md) to create the in-editor sidebar app.
3. Follow [Canva Connect REST API Setup](./connect-api.md) to create the backend OAuth integration.
