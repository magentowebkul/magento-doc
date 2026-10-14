# Product Models & Products Export

Once categories and families are exported, you can export configurable product models and individual simple products into Akeneo PIM.

---

## Step 3: Export Product Models (Configurable Products)

In Akeneo PIM, configurable parent products are modeled as **Product Models** with variant axes.

1. Navigate to **Akeneo Connector** → **Export**.
2. Select the **Product Model** tab:

![Export Product Model Tab](/images/image-33.png)

::: warning Super Attributes Reminder
An alert notice reminds you: *"Make sure export attributes mapping available for these 'color,size' super attributes."* Verify that all super attribute codes are mapped before clicking export.
:::

3. Click **Export Product Models**.
4. The connector packages configurable products into chunks (default: 10 items per chunk) and sends them to Akeneo's Product Models REST endpoint:

![Product Model Export in Progress](/images/image-34.png)

---

## Step 4: Export Products (Simple & Variants)

1. Select the **Product** tab on the Export console:

![Export Products Tab](/images/image-35.png)

2. Click **Export Products**.
3. The connector exports standalone simple products and variant child items:

![Product Export Execution Progress](/images/image-36.png)

### Key Export Actions

* **Option Code Resolution**: Magento numeric option IDs are converted into Akeneo text-based option codes.
* **Variant Parent Linking**: Variant simple items are linked to their corresponding Akeneo Product Models via the `parent` property.
* **Media Upload**: If media export is enabled, product images are uploaded to `/api/rest/v1/media-files` and associated with their respective attributes.
* **Channel Scoping**: Values are assigned to your mapped Akeneo channel and locale.
