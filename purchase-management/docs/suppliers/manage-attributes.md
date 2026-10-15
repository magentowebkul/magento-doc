# Custom Quotation Attributes

Different procurement agreements frequently necessitate specific legal terms, delivery notes, shipping terms, or inspection clauses. The **Manage Attributes** tool empowers administrators to create custom quotation fields without writing custom code.

---

## Accessing Manage Attributes

To view and manage custom quotation fields:

1. Navigate to **Purchase Management > Manage Attributes**.
2. The attributes grid displays:
   - **Attribute ID**
   - **Attribute Code**
   - **Admin Label**
   - **Frontend Input Type**
   - **Show in Email** (Yes / No)
   - **Status** (Enabled / Disabled)

![Manage Attributes Grid](/images/manage-attributes-grid.webp)

---

## Creating a New Attribute

Click **Add New Attribute** in the upper right corner to configure a new field.

![Create New Attribute Form](/images/attribute-create-form.webp)

### Field Configuration Settings

| Property | Description |
| :--- | :--- |
| **Attribute Label** <br>`Required` | **Admin & RFQ Display Label**<br>The human-readable label shown to store managers in the Magento admin panel under the **Additional Attributes** section during quotation creation and editing, as well as on vendor RFQ documents and email notifications.<br><br>**Input:** Text (e.g., *Payment Terms*, *Shipping Carrier*, *Port of Delivery*, *Quality Inspection Required*). |
| **Attribute Code** <br>`Required` | **Internal Technical Identifier**<br>The unique system key used to store and reference the field in the database and quotation records.<br><br>**Formatting Rules:** Must be unique and written in lowercase `snake_case` using only alphanumeric characters and underscores (`[a-z0-9_]`) without spaces or special symbols (e.g., `payment_terms`, `shipping_carrier`, `inspection_clause`).<br><br>*(Note: Once the attribute is saved, the Attribute Code is locked and cannot be edited).* |
| **Attribute Type** <br>`Required` | **Input Control & Data Format**<br>Defines the type of form control rendered in the quotation interface:<br>• **Text Field**: Single-line alphanumeric input for short values, tracking IDs, or brief terms.<br>• **Text Area**: Multi-line expandable text box suited for long paragraphs, special delivery instructions, or contract clauses.<br>• **Date**: Interactive calendar date-picker allowing buyers to specify target delivery or inspection dates.<br>• **Dropdown / Select**: Single-choice dropdown list populated from predefined options. Selecting this activates the **Manage Options (Values of Your Attribute)** section below.<br>• **Multiple Select**: Multi-selection box allowing buyers to choose one or more predefined options simultaneously. Also activates the **Manage Options** section below. |
| **Show in Mail** <br>`Required` | **Supplier Email Visibility**<br>Determines whether this attribute and its assigned value are included in outgoing vendor email templates (Request for Quotations and Purchase Order notifications):<br>• **Yes**: Injects the attribute label and its selected/entered value into the RFQ/PO emails sent to suppliers.<br>• **No**: Keeps the attribute strictly internal for backend administration and hides it from supplier-facing emails. |
| **Status** <br>`Required` | **Quotation Form Availability**<br>Controls whether this attribute is active across quotation workflows:<br>• **Enabled**: Activates the attribute so it appears under **Additional Attributes** when creating or editing quotations.<br>• **Disabled**: Hides the attribute from new quotation forms without altering or deleting values saved on existing historical quotations or purchase orders. |

---

## Managing Attribute Options (Dropdown & Multiple Select)

When configuring selectable types such as **Multiple Select** or **Dropdown**, the **Manage Options (Values of Your Attribute)** section appears below the main options:

![Manage Attribute Options Section](/images/attribute-multi-select-options.webp)

1. Click the **Add Option** button to insert choice rows.
2. In the **Admin** column, input the label values (e.g., *Option 1*, *Option 2*, *FOB*, *CIF*, *EXW*).
3. If necessary, delete any unnecessary rows using the **Delete** button next to the row.

![Configured Attribute Option Values](/images/attribute-options-values-added.webp)

4. Click the orange **Save** button in the top right to store the attribute.

---

## Utilizing Attributes During Quotation Creation

Once created, custom attributes appear dynamically in the quotation generation workflow. Store managers can specify terms or select predefined options for each quotation, ensuring all stipulations are accurately communicated to the vendor.
