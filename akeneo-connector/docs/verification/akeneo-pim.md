# Akeneo PIM Verification

After completing export operations from Magento 2, verify your catalog entities within the **Akeneo PIM Admin Panel** to ensure data integrity, channel assignments, and media rendering.

---

## 1. Categories in Category Tree

1. In Akeneo PIM, navigate to **Settings** → **Categories**.
2. Expand the category root mapped to your e-commerce channel:

![Exported Categories in Akeneo PIM](/images/image-40.png)

Verify that Magento's root and nested category structure (such as *Men*, *Women*, *Gear*) matches Akeneo's category tree accurately.

---

## 2. Families & Attribute Sets

1. In Akeneo PIM, navigate to **Settings** → **Families**.
2. Inspect the list of families:

![Exported Families in Akeneo PIM](/images/image-41.png)

Each exported Magento attribute set will appear as an active Akeneo Family with attribute counts and variant axes defined.

---

## 3. Family Structure & Main Picture

1. Open any exported family (e.g., `Default` or `Clothing`).
2. Review the **Attributes** tab:

![Exported Family Structure & Attributes](/images/image-42.png)

Confirm that:
* **Attribute used as label** is assigned to `name`.
* **Attribute used as main picture** is assigned to `thumbnail` or `image`.
* Attribute groups (e.g. *General*, *Prices*, *Design*) are grouped correctly.

---

## 4. Attributes & Option Values

1. Navigate to **Settings** → **Attributes**.
2. Search for any custom attribute exported from Magento (e.g. `color`, `size`, `brand`):

![Exported Attributes in Akeneo PIM](/images/image-43.png)

Check the attribute configuration:
* Attribute type (e.g. `Simple select`, `Multi select`, `Text`, `Number`).
* Option values and localized labels matching Magento frontend store views.

---

## 5. Products & Product Models

1. Navigate to the **Products** tab in Akeneo PIM:

![Exported Products in Akeneo PIM](/images/image-44.png)

2. Verify that:
   * **Product Models**: Configurable items appear as product models, indicating the number of variants.
   * **Simple Products**: Standalone simple items and variant simple products display correct SKU, label, price, completeness percentage, and high-resolution thumbnail images.
