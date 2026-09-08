# Storefront Workflow Overview

The **Shopping Cart Scanner** extension provides convenient cross-device shopping touchpoints for desktop and mobile shoppers.

## System Workflow Architecture

```mermaid
flowchart TD
    A[Desktop Shopper Adds Items to Cart] --> B{Select Touchpoint}
    B -->|Header Dropdown| C[Mini-Cart QR Widget]
    B -->|Direct URL / Header Link| D[Dedicated /cartscanner Landing Page]
    B -->|Checkout Cart Page| E[Cart Page Widget & Modal]
    C --> F[Scan QR Code with Mobile Phone]
    D --> F
    E --> F
    F --> G[Instant Mobile Cart Sync]
    G --> H[Mobile Checkout & Order Placement]
    H --> I[Real-Time Admin Conversion Logged]
```

## Key Storefront Components

1. **[Mini-Cart QR Widget](/storefront/mini-cart.html):** Quick QR code thumbnail with live countdown timer rendered in header dropdown.
2. **[Dedicated Landing Page](/storefront/landing-page.html):** Clean 2-column layout at `/cartscanner/index/scan` with mobile scan showcase banner.
3. **[Cart Page Widget](/storefront/cart-page-widget.html):** Prominent QR widget on `/checkout/cart` page.
4. **[Enlarged 2-Column Modal](/storefront/enlarged-modal.html):** High-resolution popup with step-by-step onboarding guide and mobile mockup.
5. **[Token Expiration & Refresh](/storefront/token-expiration.html):** Security countdown timer and instant refresh overlay.
6. **[Mobile In-App Scanner](/storefront/mobile-scanner.html):** Dedicated header scanner icon `[▪]` with camera integration.
7. **[Mobile Checkout](/storefront/mobile-checkout.html):** Seamless checkout flow for guest and registered shoppers.
