# Import Overview & Sequence

Importing catalog data from Akeneo PIM into Magento 2 requires strict adherence to entity dependency order. Executing jobs out of sequence can result in products lacking attribute values or categories failing to associate.

---

## Recommended Import Sequence

Always follow this four-stage sequence when ingesting catalog data from Akeneo PIM:

1. **Categories**
2. **Attribute Sets (Families)**
3. **Attributes**
4. **Products**

### Why Order Matters

1. **Categories**: Product models and simple products reference category IDs during ingestion. Creating category trees first prevents broken category relationships.
2. **Attribute Sets (Families)**: Akeneo families correspond to Magento attribute sets. They define the grouping structure required before attributes can be assigned.
3. **Attributes & Options**: Attribute codes, labels, and option values (dropdowns, multi-selects) must exist in Magento's EAV tables before products can store values against them.
4. **Products**: Products link categories, attribute sets, attribute options, and media files created in previous steps.

---

## Navigating to the Import Console

To open the import interface:

1. Log in to the Magento Admin Panel.
2. Navigate to **Akeneo Connector** → **Import** in the primary navigation:

![Akeneo Connector Import Menu](/images/image-15.png)

3. The import dashboard displays four distinct tabs:
   * **Categories**
   * **Attributes Set**
   * **Attributes**
   * **Product**

---

## Action Types

Most import tabs allow selecting an **Action Type**:

* **Add or Update**: Creates newly discovered entities from Akeneo while updating attributes, labels, and values of existing entities in Magento. *(Recommended for standard operations)*.
* **Replace**: Overwrites matching catalog records with data from Akeneo.
