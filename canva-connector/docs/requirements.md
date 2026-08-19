# Requirements & Prerequisites

Before installing and configuring the **Webkul Magento 2 Canva Connector** extension, ensure your system environment satisfies the following prerequisites.

---

## System Requirements

| Requirement | Supported Versions | Notes |
|---|---|---|
| **Magento** | `2.4.4` to `2.4.9+` | Open Source, Adobe Commerce, and B2B Editions |
| **PHP** | `8.1`, `8.2`, `8.3`, `8.4`, `8.5` | `ext-json`, `ext-curl`, `ext-openssl`, `ext-gd` or `ext-imagick` |
| **Node.js** | `18.x`, `20.x`, `22.x` | Required to build and run the Canva Frontend Node app |
| **npm** | `9.x` or `10.x` | Package manager for Node dependencies |
| **Web Server** | Apache 2.4+ or Nginx 1.18+ | SSL Certificate (HTTPS) required for production |

---

## Core Module Dependencies

The Canva Connector relies on Webkul's shared licensing and base utilities:

- **`Webkul_Base`**: Must be installed and registered in `app/code/Webkul/Base` or via Composer.

::: tip
The `Webkul_Base` module is included automatically with the extension package or when downloading from the Webkul Store.
:::

---

## Canva Developer Requirements

To connect Magento with Canva, you must possess a Canva Developer account:

1. **Canva Account**: Sign up or log in at [canva.com](https://www.canva.com/).
2. **Canva Developer Portal Access**: Navigate to [canva.com/developers](https://www.canva.com/developers) to access developer tools and create applications.
3. **App Permissions**: Access to create both a **Canva App** (Frontend UI) and a **Canva Connect Integration** (Backend REST API).

---

## Network & HTTPS Requirements

Canva enforces strict security policies for OAuth and App Source URLs:

- **Production Environments**: Must use valid public HTTPS domain URLs with trusted SSL certificates.
- **Local Development Environments**: 
  - The Canva Frontend app runs locally on `http://localhost:8083`.
  - For Magento OAuth callbacks during local testing, use a local tunnel such as **Cloudflare Tunnel** or **ngrok** to provide an HTTPS endpoint for Canva callbacks (e.g. `https://your-tunnel.trycloudflare.com/canva/auth/callback`).
