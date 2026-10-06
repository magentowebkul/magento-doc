# Frequently Asked Questions (FAQ)

Find answers to common questions regarding the installation, configuration, web server setup, and operational behavior of the **Webkul Magento 2 Marketplace Seller Subdomain** extension.

---

### What is the difference between Global Subdomain Mode and Store Vendor Subdomain Mode?
- **Global Subdomain Mode** (Store Vendor Subdomain Setting = No): Automatically generates subdomains using your primary domain and a configurable prefix (e.g., `https://shop-gear-store.marketplace.com`).
- **Store Vendor Subdomain Mode** (Store Vendor Subdomain Setting = Yes): Allows the store administrator to assign completely independent, custom top-level domains (e.g., `https://womenstoreview2.vachak.com`) to individual sellers on a per-store-view basis.

---

### Do I need a Wildcard SSL certificate to use seller subdomains?
Yes. Because seller subdomains are generated dynamically when vendors register or when prefixes are assigned (e.g., `seller1.example.com`, `seller2.example.com`), a **Wildcard SSL / TLS certificate** (covering `*.example.com`) is required so that all subdomains operate securely over HTTPS without browser warnings.

---

### Does the custom domain need to be purchased before configuring it in Magento?
Yes. If you are assigning independent custom domains to sellers under the **Vendor Domain** tab in Customer Edit, that domain name must already be registered, active, and have its DNS `A` record pointing to your Magento web server's public IP address.

---

### Can admin products be displayed on the seller's subdomain collection?
Yes. Under **Stores > Configuration > Webkul > Seller Subdomain**, if **Display Only Seller's Public Pages On Seller's Domain** is set to **No**, the administrator can set **Display Admin's Products On Category Page** to **Yes**. This allows the vendor's subdomain to present admin inventory alongside seller products.

---

### Why must "Rewrite Seller's Shop URL" be disabled in Marketplace settings?
Under **Stores > Configuration > Marketplace > Seller Profile Page Settings**, the setting **Rewrite Seller's Shop URL** is automatically set to **No**. This prevents Magento's default URL rewrite engine from conflicting with the custom subdomain routing rules handled by the Seller Subdomain extension.

---

### Is the module compatible with Hyvä Themes?
Yes! Webkul provides an official companion module, **`Webkul_SellerSubDomainHyva`**, delivering clean Tailwind CSS styling, Alpine.js reactivity, and full compatibility for seller subdomain views on Hyvä storefronts.

---

### What happens if a customer visits a non-seller URL on a restricted subdomain?
If **Display Only Seller's Public Pages On Seller's Domain** is set to **Yes**, only the four primary seller pages (`/`, `/collection`, `/feedback`, `/location`) are served on the subdomain. Any attempt to navigate to general store pages (such as the main homepage or non-seller categories) will automatically redirect the visitor back to the primary store domain.

---

### Can sellers choose their own subdomain prefix?
No. The prefix string (e.g., `shop-`) is managed globally by the store administrator under **Stores > Configuration > Webkul > Seller Subdomain > Prefix**. The unique suffix portion is derived from the seller's **Shop URL** provided during vendor account registration.

---

### Does checkout remain unified across all seller subdomains?
Yes. Regardless of whether a customer adds items to their shopping cart from the main marketplace store, a vendor's subdomain, or an independent custom seller domain, customer accounts, carts, payment gateways, and order processing remain centralized within Magento 2.
