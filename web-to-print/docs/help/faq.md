# Frequently Asked Questions

Find quick answers to common questions about the **Webkul Web To Print** extension for Magento 2 (Adobe Commerce).

---

## General & Compatibility

### Which Magento and PHP versions are supported?
Web To Print supports **Magento 2.4.4 through 2.4.9** (Open Source, Commerce on-premise, and Adobe Commerce on Cloud) on **PHP 8.1, 8.2, 8.3, 8.4, and 8.5**.

### Is the canvas customizer mobile responsive?
Yes. The HTML5 canvas studio adjusts dynamically to smartphone and tablet viewports, supporting touch interactions for scaling, rotating, and panning design elements.

### Is Adobe Illustrator mandatory to run the extension?
No. The core Web To Print features—including customer personalization, canvas editing, previewing, adding to cart, order placement, and downloading design ZIP archives—function independently without Adobe Illustrator. Adobe Illustrator is an optional prepress enhancement for stores that want automated vector `.ai` and PDF print plate production.

---

## Products & Design Templates

### Can I offer multiple customization views on one product?
Yes. You can add unlimited template views (e.g., *Front View*, *Back View*, *Left Side*, *Right Side*, *Collar*). Buyers can switch between faces on the canvas, customize each side independently, and preview all composite designs before checking out.

### What is the purpose of the Mask Image?
The **Mask Image** is a transparent PNG graphic defining the printable zone. Any design added to the canvas is contained within this boundary, ensuring customer text and photos never overflow onto unprintable seams, zippers, or collar areas.

### Can I set up color variations for the same product?
Yes. You can configure template variations (such as White, Black, Navy, or Heather) under the **WTP Customize** tab. When a customer toggles between garment colors, the underlying base photo switches while retaining all custom artwork and text.

---

## Customer Uploads & Quality Control

### What image formats can customers upload?
Customers can upload raster images (`.png`, `.jpg`, `.jpeg`) as well as vector graphics (`.svg`). Transparent PNGs are recommended for logos and cutouts.

### How do I prevent customers from uploading blurry, low-resolution photos?
In **Stores** > **Configuration** > **Webkul** > **Web To Print Settings**:
1. Configure **Image Width In Pixel** and **Image Height In Pixel** to enforce minimum pixel boundaries.
2. Set **Upload Images Minimum DPI** (e.g., `150` or `300`). The server validates the file resolution using PHP ImageMagick before accepting the upload.

---

## Typography & Color Palettes

### What font formats can administrators upload?
Admins can upload TrueType (`.ttf`) or OpenType (`.otf`) font files in **Web To Print** > **WTP Fonts**. The fonts become immediately selectable in the customer canvas text tool.

### Can customers use colors not included in the predefined swatches?
Yes. While admins can curate branded color swatches in **Web To Print** > **WTP Color**, the customer canvas also features an interactive color picker and direct HEX input allowing any color code.

---

## Orders & Prepress Fulfillment

### Where can the store owner access customer designs after an order is placed?
1. Navigate to **Sales** > **Orders** and view the target order.
2. Scroll to the customized item section.
3. Click **Download Zip** to obtain all layer graphics, user uploads, and composite views.
4. If Adobe Illustrator integration is configured, click **Generate File** followed by **Download PDF** to retrieve production-ready vector print files.

### Can customers download their customized designs after ordering?
Yes. Customers can navigate to **My Account** > **My Orders**, open the order details, and click the download link to save high-resolution copies of their customized design for their records.

### How does reordering work for personalized items?
When a customer clicks **Reorder** in their account dashboard, the exact design coordinates, custom text, and layer hierarchy from their previous order are duplicated onto the new cart quote.
