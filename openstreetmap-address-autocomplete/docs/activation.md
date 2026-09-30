# Activate & Connect

After installing the extension files and running Magento CLI commands, verify module registration, enable the extension in system configuration, and configure administrative menu access and role permissions.

---

## Step 1: Verify Module Registration via CLI

Verify that Magento recognizes the module:

```bash
php bin/magento module:status Webkul_OpenStreetMapAddressAutoComplete
```

Ensure the status displays as **enabled**. If it appears in the disabled list:

```bash
php bin/magento module:enable Webkul_OpenStreetMapAddressAutoComplete
php bin/magento setup:upgrade
php bin/magento cache:flush
```

If you also installed the **Hyvä Edition**, verify it as well:

```bash
php bin/magento module:status Webkul_OpenStreetMapAddressAutoCompleteHyva
```

---

## Step 2: License Verification (Webkul Base)

As a Webkul commercial extension, license verification is managed through the shared Webkul Base module:

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Stores → Configuration**.
3. In the left panel, locate and expand the **Webkul** tab.
4. Click on **Module License**.
5. In the **Licensed Modules** grid, locate **OpenStreetMap Address AutoComplete**.
6. Enter your valid license key (retrieved from your [Webkul Customer Account](https://store.webkul.com/customer/account/login/)).
7. Click **Save & Verify**. Upon successful validation, the status updates to **VERIFIED**.

![OSM Module License Verification screen — enter the license key and click Save & Verify](/images/osm-license.png)

---

## Step 3: Enable the Module in Store Configuration

The module must be activated in Magento's System Configuration before frontend suggestions and backend autofill become active:

1. In the Magento Admin Panel, navigate to:
   **Stores → Configuration → Webkul → OpenStreetMap Address Autocomplete**.
2. Under the **General Settings** section:
   - Set **Enable Module** to **Yes**.
3. (Optional) Provide your store contact email under **Contact Email** to ensure compliance with the Nominatim Usage Policy.
4. Click **Save Config** in the top right corner.
5. Flush the configuration cache:
   ```bash
   php bin/magento cache:clean config
   ```

::: important Menu Visibility Requirement
The **Webkul → OpenStreetMap Address AutoComplete** admin menu item only appears when **Enable Module** is set to **Yes** in configuration. Setting it to **Yes** is required for the administrative menu shortcuts to appear.
:::

---

## Step 4: Admin Menu Navigation Structure

Once enabled, navigate to **Webkul → OpenStreetMap Address AutoComplete** in the admin sidebar. The menu provides instant access to configuration and support resources:

- **Configuration Settings** — Direct link to the full configuration screen.
- **Support**
  - **User Guide** — Webkul's official module documentation.
  - **Store Extension** — View the Webkul Store extension page for latest updates.
  - **Ticket / Customisations** — Open a support ticket or request custom developments via Webkul UVdesk.
  - **Services** — Explore Webkul's enterprise Magento customization and development services.
  - **Reviews** — Share merchant feedback and product reviews on the Webkul Store.

![Admin sidebar showing OpenStreetMap Address AutoComplete menu with Configuration Settings and Support links](/images/Admin-modul-dashboad.png)

---

## Step 5: Configure Admin ACL Permissions

If your store uses restricted administrative roles (e.g., *Customer Service*, *Order Processing*, or *Store Managers*), grant appropriate permissions in Magento's Role Resources tree:

1. Navigate to **System → Permissions → User Roles**.
2. Select the role to edit (e.g., *Order Managers*).
3. Switch to the **Role Resources** tab and set **Resource Access** to **Custom**.
4. Check the desired resources:
   - **OpenStreetMap Address AutoComplete** (`Webkul_OpenStreetMapAddressAutoComplete::openstreetmap_autocomplete`)
     - **OpenStreetMap Address AutoComplete Menu** (`Webkul_OpenStreetMapAddressAutoComplete::menu`)
       - **Configuration Settings** (`Webkul_OpenStreetMapAddressAutoComplete::details`)
     - **Support** (`Webkul_OpenStreetMapAddressAutoComplete::support`)
       - User Guide (`Webkul_OpenStreetMapAddressAutoComplete::userguide`)
       - Store Extension (`Webkul_OpenStreetMapAddressAutoComplete::extension`)
       - Ticket / Customisations (`Webkul_OpenStreetMapAddressAutoComplete::uvdesk`)
       - Services (`Webkul_OpenStreetMapAddressAutoComplete::services`)
       - Reviews (`Webkul_OpenStreetMapAddressAutoComplete::reviews`)
   - **Stores → Settings → Configuration → OpenStreetMap Address AutoComplete** (`Webkul_OpenStreetMapAddressAutoComplete::configuration`)
5. Click **Save Role**.

::: tip Next Step
Proceed to [Configuration Overview](/configuration/overview) to understand the architecture, data flow, and autofill behavior.
:::
