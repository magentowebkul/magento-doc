# Module Configuration

Store owners and administrators can easily configure the **Google Address AutoComplete** extension from the Magento Admin Panel without needing any technical knowledge.

---

## How to Access Module Settings

1. Log in to your **Magento Admin Panel**.
2. In the left sidebar, navigate to **Stores > Configuration**.
3. Under the **Webkul** menu on the left, click **Google Address Autofill**.
   *(You can also click **Google Address AutoComplete > Configuration Settings** directly from the main admin menu).*

![Google Address Autofill Configuration](/images/admin_configuration.webp)

---

## General Settings Explained

Each setting is designed to give you complete control over how address suggestions work on your store:

### 1. Enable Module
* **Purpose:** Turns the address autocomplete feature on or off.
* **How to use:** Set to **Yes** to activate address suggestions on checkout, the customer address book, and admin order creation. Set to **No** if you want to temporarily disable the feature.

---

### 2. Google Map Api Key
* **Purpose:** Connects your store to Google's address service.
* **How to use:** Paste the API key you generated from your Google Cloud account into this field. This field appears automatically once you enable the module.

---

### 3. Enable Database Address Caching
* **Purpose:** Speeds up address lookups and delivers instant autocomplete results.
* **How to use:**
  * When set to **Yes**, verified address suggestions are cached.
  * When customers or store staff search for previously searched addresses, suggestions appear instantly from the cache without waiting for an external network response.
  * This ensures a smoother and faster checkout experience for shoppers.

---

### 4. Minimum Characters for Search
* **Purpose:** Sets when suggestions should begin appearing.
* **How to use:** Enter the number of letters or numbers a customer must type before the suggestion dropdown opens (Recommended: **3**).
  * For example, typing "160" starts showing matching street addresses. This prevents unnecessary searches while typing the first one or two characters.

---

### 5. Typing Debounce Delay (ms)
* **Purpose:** Prevents excessive requests while the customer is typing quickly.
* **How to use:** Sets a brief wait time in milliseconds (Default: **350** ms, which is about one-third of a second).
  * When a customer types quickly, the extension waits until they pause for a fraction of a second before fetching suggestions, rather than sending a request for every single keystroke. This keeps your store fast and ensures smooth browser performance.

---

### 6. Restrict to Active Country
* **Purpose:** Shows address suggestions only for the selected country.
* **How to use:**
  * When set to **Yes**, suggestions are strictly limited to the country currently selected in the address form's Country dropdown.
  * For example, if a customer is shipping to the United States, only US addresses will appear in the suggestions. This avoids confusion and prevents customers from accidentally selecting addresses from other countries.

---

## Module Version Information

* **Version:** Displays the currently installed version of the extension (e.g., `4.0.6`) so you can easily verify that your store is up to date.

---

## Admin Menu Shortcuts & Support Links

The extension adds convenient shortcuts in the Magento Admin navigation bar under **Google Address AutoComplete**:

* **Configuration Settings:** Takes you directly to the module settings page.
* **User Guide:** Opens the online user guide.
* **Store Extension:** Opens the product page on the Webkul Store.
* **Ticket / Customisations:** Connects directly to Webkul Helpdesk to ask questions or request custom changes.
* **Services:** Explore custom eCommerce design and development services.
* **Reviews:** Read feedback from other store owners or share your own review.

---

## Applying Your Changes (Flushing Cache)

After clicking **Save Config** in the top right corner, refresh your store cache so the new settings take effect immediately:

1. In the admin menu, go to **System > Tools > Cache Management**.
2. Click the orange **Flush Magento Cache** button in the top right corner.

> **Why is flushing the cache necessary?**
> Magento temporarily stores configuration settings in memory to help your store load fast. Flushing the cache instructs Magento to clear the previous configuration data and immediately apply your newly entered Google Maps API key and autocomplete preferences.

::: tip That's it!
Your store is now ready. Customers will see automatic address suggestions whenever they enter their street address at checkout or in their account address book.
:::
