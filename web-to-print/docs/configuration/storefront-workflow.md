# Customer Storefront Experience

The storefront experience gives buyers full creative control to personalize products in real time with an intuitive, responsive design studio.

---

## 1. Discovering Customizable Products

When customers visit your catalog or search for personalized items, products created with the **Web To Print** product type display a prominent **Customize Product** action button alongside the standard catalog details.

![Customizable Product View](/images/web-to-print-cutomizable-product.webp)

Clicking **Customize Product** launches the full-screen HTML5 design canvas studio.

---

## 2. The Interactive Canvas Studio

The canvas studio presents the product view, blank printable mask, and an expansive editing toolbar.

![HTML5 Design Canvas](/images/web-to-printcanvas.webp)

### Switching Template Views
If the product includes multiple sides (e.g., *Front View*, *Back View*, *Sleeve*), buyers can switch between tabs at the top or bottom of the screen. Each side maintains its own discrete layer stack and design elements.

### Adding & Formatting Text
- Click the **Text** tool to insert custom text lines.
- Choose from the uploaded custom font library (e.g., *Open Sans*, *Bebas Neue*, *Pacifico*).
- Style text with Bold, Italic, Underline, and Font Size sliders.
- Pick color swatches or define specific HEX codes.
- Rotate or curve text along curved paths.

### Uploading Personal Photos with Quality Checks
Customers can upload logos, family photographs, or illustrations directly from their phone or computer.

::: important Quality & DPI Validation
The studio checks incoming images against the store's configured thresholds:
- **Minimum Dimensions**: If the file is smaller than `Image Width In Pixel` or `Image Height In Pixel`, the upload is rejected with a clear notification.
- **Resolution (DPI)**: If the uploaded graphic falls below the required DPI (e.g., 150 DPI), an alert warns the customer to supply a higher-resolution image to prevent blurry prints.
:::

### Adding Stock Artwork & Shapes
- Browse the merchant's pre-loaded **Image Categories** to insert clip art, badges, or thematic icons.
- Add shapes (rectangles, stars, circles, borders) and customize interior fill colors, border stroke colors, and outline widths.

### Zoom & Precision Tools
- Use the **Zoom Slider** to magnify the canvas and inspect fine text, spacing, and photo alignment.
- **Clear Current Template**: Resets changes on the active view.
- **Clear All Templates**: Restores all views to their factory template state.

---

## 3. Preview, Declaration & Add to Cart

Once satisfied with their design:

1. Click **Preview** in the design studio header.
2. A high-resolution preview dialog opens, displaying the final composite image.
3. The customer reviews the **Declaration** and **Instructions** configured in store settings.
4. The customer checks the declaration box acknowledging proof approval, selects the purchase quantity, and clicks **Add to Cart**.

![Customer Design Preview](/images/web-to-print-customer-preview.webp)

---

## 4. Shopping Cart & Checkout

Inside the Magento shopping cart and checkout review pages:
- The standard product thumbnail is dynamically replaced with the customer's actual customized composite design.
- Custom options and template parameters are bound to the cart quote item.

![Shopping Cart Custom Preview](/images/web-to-print-shopping-cart.webp)

After proceeding through checkout and placing the order, the customer receives an order confirmation with their personalized product thumbnails preserved.

![Order Placed Confirmation](/images/web-to-print-order-placed.webp)

---

## 5. Post-Purchase Customer Image Download

Customers can review their customized items anytime from **My Account** > **My Orders**. From the order detail page, buyers can click to download high-resolution copies of their finalized designs for their personal archives.

---

## 6. Hyvä Theme Storefront Experience

The Webkul Web To Print module provides seamless, dedicated compatibility with **Hyvä Themes**, leveraging Alpine.js and Tailwind CSS for superior speed, optimal Core Web Vitals, and fluid interactivity across desktop and mobile devices.

### Launching the Canvas Studio on Hyvä Theme
On Hyvä theme storefronts, clicking **Customize Product** on a Web To Print product opens the clean, modern canvas designer interface:
- **Template Selection**: Switch between configured views (e.g., front, back) with instant preview.
- **Dynamic Pricing**: Customization pricing updates live on the product canvas.
- **Design Actions**: Quick access to **Save Template** and **Preview** buttons.

![Hyvä Theme Canvas Designer](/images/hyva-product-customize.png)

### Adding Graphics & Uploading Custom Artwork
Customers have full design freedom on the Hyvä theme storefront:
- **Stock Artwork**: Select from merchant-curated admin image categories (clip art, icons, illustrations).
- **Personal Photo Uploads**: Upload high-resolution graphics and photos from local devices with client-side quality validation.
- **Interactive Layer Editing**: Position, scale, rotate, and delete design layers with instant visual feedback.

![Hyvä Theme Product Customization](/images/hyva-customize-product.png)

### Real-Time Dual-Canvas Preview & Checkout Approval
When buyers finish customizing their design and click **Preview**, an interactive modal dialog appears with:
- **Dual Proof Panels**:
  - **Current Canvas (With Template)**: Displays the completed design rendered over the product base template.
  - **Current Canvas (Without Template Base)**: Shows an isolated, transparent artwork proof.
- **Pre-Purchase Checklist**: Guides the buyer to check spelling, clarity, contrast, and alignment before ordering.
- **Declaration Agreement**: Mandatory checkbox requiring customer confirmation of proof review.
- **Quantity & Add to Cart**: Set purchase quantity and add to cart directly from the modal, or click **Continue Editing** to make further adjustments.

![Hyvä Theme Customized Product Preview](/images/hyva-customized-product-preview.png)

