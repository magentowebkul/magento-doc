# General Settings

Configure core module rules and cart synchronization behavior under **Stores > Configuration > Webkul > Cart Scanner > General Settings**.

![General Settings](/images/image-6.png)

## Setting Fields

### Module Enabled
* **Options:** `Yes` / `No`
* **Description:** Enables or disables all storefront QR code widgets, landing page routes, and API endpoints.

### Cart Sync Strategy
* **Options:** `Merge with Existing Mobile Cart` / `Replace Existing Mobile Cart`
* **Description:** Determines how desktop cart items interact with existing mobile items upon scanning:
  * **Merge:** Retains products already in the mobile cart and adds the scanned items.
  * **Replace:** Empties the current mobile shopping cart before adding the scanned items.

### QR Code & Token Expiration (TTL)
* **Options:** `1 Minute`, `5 Minutes`, `15 Minutes`, `30 Minutes`, `1 Hour`, `24 Hours`, `Never Expire`
* **Description:** Controls the security Time-To-Live (TTL) for generated QR tokens. After the selected time elapses, the QR code expires and requires an instant one-click refresh on the storefront.
