# Product & Template Design

Creating personalized merchandise involves adding a new **Web To Print** product in the Magento catalog and defining one or more customizable templates (e.g., front, back, or side views).

---

## 1. Creating a Web To Print Product

1. Navigate to **Catalog** > **Products**.
2. Click the dropdown arrow next to **Add Product** and select **Web To Print**.

![Add Web To Print Product](/images/web-to-print-produts.webp)

3. Complete the standard catalog attributes:
   - **Product Name**: E.g., *Custom Unisex Cotton T-Shirt*.
   - **SKU**: E.g., *TSHIRT-CUSTOM-001*.
   - **Price**: Base item price before customization.
   - **Quantity & Stock Status**: Inventory quantity and *In Stock*.
   - **Weight**: Required for shipping calculations.
   - **Categories**: Assign to relevant storefront categories.

---

## 2. Navigating to the WTP Customize Tab

Scroll down the product edit screen to locate the **WTP Customize** tab.

![Product WTP Customize Tab](/images/web-to-print-product-detail.webp)

Click the **Create WTP Template** button to expand the template designer interface.

![Template Management Panel](/images/web-to-print-templates.webp)

---

## 3. Adding Templates & Multi-View Faces

A product can have multiple customizable views (such as *Front Design* and *Back Design*). Click **Add More** to add a new template face.

![Add Template Modal](/images/web-to-print-add-template.webp)

### Template Fields Reference:
- **Title**: Label displayed to buyers on the storefront view selector (e.g., *Front View*, *Back View*, *Sleeve*).
- **Description**: Guidance for this particular face (e.g., *Printable zone 12" x 16"*).
- **Base Image**: High-resolution photorealistic image of the blank merchandise.
- **Mask Image**: Transparent PNG highlighting the exact printable boundary. The canvas locks user edits within this contour.
- **Is Default**: Select whether this face loads by default when a shopper opens the customizer.
- **Add Template Variation**: Define sub-variations (such as garment color changes like White, Black, or Heather Grey) where the underlying base image shifts while maintaining custom graphics.

---

## 4. Admin Canvas Pre-Design Studio

Store owners can supply starter templates or sample placeholder artwork that customers can customize or replace.

### Adding Text
Click the **Text** icon on the canvas toolbar to insert typographic elements.

![Add Text to Template](/images/webp-to-print-add-text-to-image.webp)

- **Typography**: Select from your uploaded custom fonts.
- **Styling**: Bold, italic, underline, alignment (left, center, right).
- **Color**: Select from predefined palette swatches or input custom HEX values.
- **Text Path**: Curve or wrap text along predefined arcs.

### Adding Images
Click the **Image** icon to choose from your pre-loaded stock graphic categories or upload a master logo.

![Add Images to Template](/images/web-to-print-add-image-custome-image.webp)

- Resize handles to scale graphics proportionally.
- Rotation anchor for multi-angle orientation.
- Layer reordering (bring to front / send to back).

### Adding Vector Shapes
Click the **Shape** icon to introduce geometric objects (rectangles, ellipses, polygons, arrows, or banner dividers).

![Add Shapes to Template](/images/web-to-print-add-shape.webp)

- **Fill Color**: Interior shape color.
- **Border / Stroke Color**: Outline color.
- **Stroke Width**: Adjust outline thickness in pixels.

### Zoom Slider & Alignment
Use the zoom slider control to magnify intricate design details, ensure seamless alignment, and check edge tolerances before saving.

![Canvas Zoom Control](/images/web-to-print-zoom.webp)

---

## 5. Preview & Save

Click the **Preview** button to generate an interactive composite rendering showing the base merchandise, transparent mask, and custom artwork combined.

![Admin Template Preview](/images/web-to-print-preview.webp)

Once satisfied, click **Save Product** in the top Magento toolbar. Your customizable item is now live and ready for storefront shoppers.
