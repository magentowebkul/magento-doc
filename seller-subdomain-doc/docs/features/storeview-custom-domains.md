# Store View Custom Domains

When **Store Vendor Subdomain Setting** is enabled in system configuration, marketplace sellers can operate under completely independent, branded domain names rather than shared subdomains. Furthermore, administrators can map different domains to the same seller across distinct **Store Views**.

---

## Store View 1: Women's Store View

In this example, the administrator mapped the domain `https://womenstoreview2.vachak.com` to a seller's Women's apparel store view:

### 1. Seller Profile Page
Accessing `https://womenstoreview2.vachak.com` serves the seller profile under the dedicated custom domain:

![Store View 1 Seller Profile](/images/custom-domain-storeview1-profile.png)

### 2. Seller Feedback & Reviews Page
Shoppers can submit ratings and browse verified reviews at `https://womenstoreview2.vachak.com/feedback`:

![Store View 1 Feedback Page](/images/custom-domain-storeview1-feedback.png)

### 3. Seller Location Page
Renders physical location details and Google Maps integration at `https://womenstoreview2.vachak.com/location`:

![Store View 1 Location Page](/images/custom-domain-storeview1-location.png)

### 4. Seller Product Collection Page
Displays catalog collections filtered to the seller's inventory at `https://womenstoreview2.vachak.com/collection`:

![Store View 1 Collection Page](/images/custom-domain-storeview1-collection.png)

---

## Store View 2: Men's Store View

Under a second store view (e.g., Men's fashion), the same merchant is mapped to an entirely distinct domain: `https://menstoreview2.com`:

### 1. Seller Profile Page
Accessing the second custom domain loads the profile tailored to the Men's catalog context:

![Store View 2 Seller Profile](/images/custom-domain-storeview2-profile.png)

### 2. Seller Feedback Page
Displays customer reviews and ratings under `https://menstoreview2.com/feedback`:

![Store View 2 Feedback Page](/images/custom-domain-storeview2-feedback.png)

### 3. Seller Location Page
Presents store contact details and operating hours at `https://menstoreview2.com/location`:

![Store View 2 Location Page](/images/custom-domain-storeview2-location.png)

### 4. Seller Product Collection Page
Renders the seller's men's catalog collection with full faceted search at `https://menstoreview2.com/collection`:

![Store View 2 Collection Page](/images/custom-domain-storeview2-collection.png)

---

## Multi-Store Switching & Session Persistence

When switching between store views configured with separate custom domains:
- **Store Switcher Integration**: The built-in store switcher plugin preserves the vendor context, routing shoppers to the corresponding seller custom domain mapped for the target store view.
- **Session & Cart Synchronization**: The module coordinates with Magento's session and cookie managers to ensure shopping carts, user sessions, and currency preferences remain seamless across domains.
