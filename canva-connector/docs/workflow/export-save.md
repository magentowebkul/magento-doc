# Export & Save to Magento

Once you have completed your design in Canva, export and persist the artwork directly into your Magento 2 product gallery with a single click.

---

## 1. Trigger Export from Sidebar

1. In the **Magento 2 Connect** Canva sidebar, click the **Save Design to Magento 2** button at the bottom of the active product card.
2. Canva renders the canvas and calls the Magento REST Web API. Upon completion, a success confirmation is displayed at the top of the sidebar.

![Canva Editor Save Design to Magento 2 Action and Confirmation](/images/workflow/canva-editor-product.webp)

---

## 2. Export Processing & Persistence

The extension handles the export pipeline:

1. **Rendering**: Canva renders the canvas at full resolution into high-quality image blobs (PNG / JPG).
2. **Payload Packaging**: For multi-page designs, each page is indexed (`index: 0, index: 1, ...`) and packaged as Base64 strings.
3. **Secure API Request**: The app calls Magento's REST endpoint (`POST /rest/V1/canva/export/save`) with the image data, product ID, and design ID.
4. **Media Gallery Insertion**:
   - Magento decodes the Base64 data and writes image files into `pub/media/catalog/product/`.
   - **Page 1**: Assigned configured roles (`image`, `small_image`, `thumbnail`).
   - **Pages 2..N**: Attached to the product media gallery without overwriting main roles.
5. **Success Toast**: Canva displays a confirmation message:
   ```text
   Design image(s) (1 page(s)) imported and saved to product successfully.
   ```

---

## 3. Return to Magento Admin

1. Click the **Return to magento 2 connect** link in the Canva editor header navigation.
2. Canva redirects back through Magento's `/canva/auth/return` handler.
3. You are returned directly to the **Catalog > Products** edit screen in Magento Admin, where you can view your newly imported Canva artwork in the **Images and Videos** gallery!
