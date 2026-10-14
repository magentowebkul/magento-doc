# Categories & Attribute Sets Import

Categories and Attribute Sets form the foundational hierarchy of your Magento catalog. Follow these steps to import them from Akeneo PIM.

---

## Step 1: Import Categories

1. In the Magento Admin, open **Akeneo Connector** → **Import**.
2. Select the **Categories** tab.
3. Select your **Action Type** (`Add or Update` or `Replace`).
4. Click **Run Job**:

![Import Categories Interface](/images/image-16.png)

### Real-Time Chunk Execution
The connector queries Akeneo's Category API (`/api/rest/v1/categories`) in chunks. A dynamic progress bar updates in real time, showing the quantity of processed items, items remaining, and percentage completed:

![Category Import in Progress](/images/image-17.png)

### Job Completion
When the job completes, a summary status box confirms the number of created, updated, and deleted categories:

![Category Import Completed](/images/image-18.png)

::: tip Scoping Check
If your categories are not appearing, ensure that **Stores** → **Configuration** → **Webkul** → **Akeneo Connector** → **Category Import Filter** is set to `All Categories` or that your store's root category matches the mapped channel in Akeneo.
:::

---

## Step 2: Import Attribute Sets (Families)

In Akeneo PIM, product templates and schemas are organized as **Families**. In Magento 2, these are represented as **Attribute Sets**.

1. Select the **Attributes Set** tab in the Import console.
2. Select the desired **Action Type** (`Add or Update` or `Replace`).
3. Click **Run Job**:

![Import Attribute Sets Interface](/images/image-19.png)

### Processing & Synchronization
The job fetches families and their constituent attribute groups from Akeneo (`/api/rest/v1/families`). Matching attribute sets are constructed in Magento with identical naming conventions:

![Attribute Set Import Progress and Completion](/images/image-20.png)

Once finished, navigate to **Stores** → **Attributes** → **Attribute Set** to inspect the newly imported sets.
