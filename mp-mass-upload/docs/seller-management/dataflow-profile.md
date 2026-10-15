# Seller Dataflow Profile

The **Mass Upload Dataflow Profile** feature allows sellers to map custom column headers in their CSV/XLS files to standard Magento database attributes. This eliminates the need to manually edit third-party ERP/supplier CSV files before importing.

---

## Creating a Dataflow Mapping Profile

1. In the seller panel, navigate to **Marketplace > Mass Upload DataFlow Profile**.

![Seller Dataflow Profile Navigation](/images/image-36.png)

2. Enter a **Profile Name** and select the applicable **Attribute Set**.
3. Click **Save Profile**.

![Add Dataflow Profile Form](/images/image-37.png)

4. In the **Field Mapping** section, map each custom **In File Name** (header name in your CSV file) to the corresponding Magento **Database Attribute**.

![Field Mapping Configuration Table](/images/image-38.png)

5. Save the profile settings.
6. When uploading files, use your custom header names in the CSV file—the system automatically converts them to database fields during import execution.

![CSV File with Custom Mapped Column Names](/images/image-39.png)
