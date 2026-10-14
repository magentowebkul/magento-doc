# Export Overview & Sequence

Exporting your existing Magento 2 catalog into Akeneo PIM allows you to bootstrap or enrich Akeneo PIM with your current store data. Similar to import, exports must follow a strict dependency sequence.

---

## Recommended Export Sequence

Always execute export operations in the following order:

1. **Categories**
2. **Family / Attribute Set**
3. **Product Model (Configurables)**
4. **Products (Simples & Variants)**

### Essential Prerequisites

::: important Configurable Super Attributes Mapping
Before exporting **Product Models**, all configurable attributes (e.g., `color`, `size`, `material`) **must be explicitly mapped** under:
**Stores** → **Configuration** → **Webkul** → **Akeneo Connector** → **Export Configuration** → **Attributes Mapping**.
Missing super-attribute mappings will cause Akeneo variant axis validation errors.
:::

---

## Navigating to the Export Console

1. In the Magento Admin Panel, navigate to **Akeneo Connector** → **Export**:

![Akeneo Connector Export Navigation](/images/image-28.png)

2. The export dashboard organizes jobs across four dedicated tabs:
   * **Categories**
   * **Family/Attribute Set**
   * **Product Model**
   * **Product**

![Akeneo Connector Export Section](/images/image-29.png)
