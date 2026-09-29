# Troubleshooting Guide

This guide assists store administrators, DevOps teams, and marketplace sellers in diagnosing and resolving common technical and operational issues encountered with the **Webkul Magento 2 Marketplace Seller Subdomain** extension.

---

## 1. Subdomain URL Returns "Server Not Found" or DNS Error

### Symptom
When attempting to access a seller's subdomain (e.g., `https://shop-gear-store.yourdomain.com`), the web browser displays a `DNS_PROBE_FINISHED_NXDOMAIN` or "Server Not Found" error.

### Diagnostics & Solutions
1. **Verify Wildcard DNS Record**:
   - Ensure an `A` record or `CNAME` record exists for `*.yourdomain.com` pointing to your Magento server's public IP address.
   - Test DNS resolution from your terminal:
     ```bash
     dig shop-gear-store.yourdomain.com +short
     ```
     <ExplainCode explanation="Checking the DNS resolution for the subdomain" />
   - If the command returns empty, contact your DNS host provider or update your DNS zone file to include the wildcard entry.
2. **Allow DNS Propagation**: Newly created DNS records can take up to 24–48 hours to propagate worldwide, though cloud DNS providers typically propagate within minutes.

---

## 2. Browser Shows "Your Connection is Not Private" (SSL Error)

### Symptom
The browser warns that the connection is insecure (`NET::ERR_CERT_COMMON_NAME_INVALID`) when loading the seller's subdomain over HTTPS.

### Diagnostics & Solutions
1. **Verify SSL Certificate Scope**:
   - Inspect the SSL certificate installed on the web server. A standard single-domain certificate covering only `yourdomain.com` will fail for subdomains.
   - You must install a **Wildcard SSL Certificate** covering `*.yourdomain.com` (or add all active seller subdomains as Subject Alternative Names [SAN]).
2. **Verify Web Server VirtualHost Binding**: Ensure your Apache or Nginx SSL virtual host binds the wildcard certificate to port `443`.

---

## 3. Subdomain Redirects to Main Store Homepage Immediately

### Symptom
Accessing a seller's subdomain URL instantly redirects the user back to the primary marketplace domain or default base URL.

### Diagnostics & Solutions
1. **Verify Module Status**: Navigate to **Stores > Configuration > Webkul > Seller Subdomain** and verify that **Enabled** is set to **Yes**.
2. **Check License Verification**: Ensure the extension license is validated with a green **VERIFIED** status under **Stores > Configuration > Webkul > Module License**.
3. **Check Marketplace Seller Profile URL Rewrite**:
   - Navigate to **Stores > Configuration > Marketplace > Seller Profile Page Settings**.
   - Verify that **Rewrite Seller's Shop URL** is set to **No**.
4. **Verify Seller Shop URL**: Confirm that the seller has a valid, non-empty **Shop URL** defined in their vendor profile.
5. **Flush Caches**:
   ```bash
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Clears configuration and routing caches to apply updated domain routing plugins." />

---

## 4. Custom Domain Shows Default Web Server Welcome Page

### Symptom
When navigating to an independent custom domain assigned to a seller (e.g., `https://womenstoreview2.vachak.com`), the default Apache or Nginx test landing page appears instead of the Magento storefront.

### Diagnostics & Solutions
1. **Web Server VirtualHost ServerName / ServerAlias**:
   - The web server must know that traffic for `womenstoreview2.vachak.com` should be processed by the Magento 2 docroot.
   - In Apache, add the domain to `ServerAlias`:
     ```apache
     ServerAlias *.example.com womenstoreview2.vachak.com
     ```
     <ExplainCode explanation="The ServerAlias directive tells the Apache server to respond to requests for these additional hostnames." />
   - In Nginx, add the domain to `server_name`:
     ```nginx
     server_name example.com *.example.com womenstoreview2.vachak.com;
     ```
     <ExplainCode explanation="The server_name directive tells the Nginx server to respond to requests for these additional hostnames." />
2. **Reload Web Server**:
   ```bash
   sudo systemctl reload nginx   # For Nginx
   sudo systemctl reload apache2 # For Apache
   ```
   <ExplainCode explanation="Reloads the web server configuration to apply the newly added changes." />

---

## 5. Shopping Cart Empties When Navigating Between Domains

### Symptom
Customers add a product to their shopping cart on the main store, but the cart appears empty when navigating to a seller's subdomain (or vice versa).

### Diagnostics & Solutions
1. **Configure Magento Cookie Domain**:
   - For subdomains sharing the same root domain (e.g., `shop1.example.com` and `example.com`), configure a unified cookie domain.
   - Navigate to **Stores > Configuration > General > Web > Default Cookie Settings**.
   - Set **Cookie Domain** to `.yourdomain.com` (note the leading dot).
   - Set **Cookie Path** to `/`.
   - Save the configuration and flush Magento cache.
2. **Independent Custom Domains**: Note that browsers prohibit sharing first-party cookies across separate root domains (e.g., `domainA.com` and `domainB.com`) due to browser cross-origin security policies. Ensure store switcher redirect flows are utilized when transitioning shoppers between distinct top-level domains.

---

## 6. Stale Vendor Domain After Customer Account Save

### Symptom
After modifying the domain under **Customers > All Customers > Vendor Domain**, the storefront still resolves to the previous domain or throws a 404 error.

### Diagnostics & Solutions
1. **Check Database Record**: Inspect the `marketplace_vendor_subdomain` table to ensure the `domain` column contains the updated URL.
2. **Flush Application Cache**:
   ```bash
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes cached domain-to-seller entity lookup collections." />


## Still Need Help?

For any custom development requests, doubts, or technical assistance:
* Drop an email to **support@webkul.com**
* Submit a ticket through our [HelpDesk Support Portal](https://webkul.uvdesk.com/en/customer/create-ticket/)
