# Release Notes & Changelog

Review the full release history, feature enhancements, compatibility updates, and bug fixes for the **Webkul Web To Print** extension.

---

## Version 5.0.5
*Compatibility update*

- **Compatibility**: Added full compatibility with **Magento 2.4.9** and **PHP 8.5**.

---

## Version 5.0.4
*Bug fixes and workflow enhancements*

- **Reorder Illustrator Output**: Resolved issue in reorder functionality where Adobe Illustrator file generation and PDF export failed to re-render previous customizations.
- **Customer Account Layout**: Fixed responsive layout glitches on the customer order detail page when viewing customized items.
- **Product Edit Form**: Fixed layout and styling issues in the backend Web-to-Print product creation form and the *Add Template* popup modal.
- **Empty Template Guard**: Fixed issue where Web-to-Print products without active templates appeared on storefront catalog pages.
- **Global Disable Enforcement**: Ensured customizable items and canvas buttons are cleanly suppressed across all catalog listings when the module is turned off in store configuration.

---

## Version 5.0.3
*Adobe Illustrator prepress bridge*

- **Adobe Illustrator Compatibility**: Introduced native integration with desktop Adobe Illustrator via custom URI protocol.
- **Automated Vector PDF**: Automated the generation of `.ai` artwork and high-resolution prepress PDF documents directly from the admin order interface.
- **Platform Compatibility**: Added compatibility with **Magento 2.4.7** and **PHP 8.2**.

---

## Version 5.0.2
*Maintenance release*

- **Platform Compatibility**: Added compatibility with **Magento 2.4.6**.
- **Canvas Design Fixes**: Addressed styling and canvas positioning inconsistencies when customizing products across various viewport sizes.
- **Variant Price Calculation**: Fixed issue where the original price was not correctly restored when switching back and forth between product variations.

---

## Version 5.0.1
*Asset mass actions and search enhancements*

- **Mass Delete Actions**: Added bulk deletion support across Image Categories, Images, Fonts, and Colors grids.
- **Catalog Search Integration**: Added the **Customize** action button directly within storefront search results grids.
- **Default Template Assignment**: Fixed issue regarding default template selection for products with multi-view faces.
- **Reorder Handling**: Enhanced quote replication during reorders of custom merchandise.
- **Image Upload Validations**: Resolved upload handling glitches during image asset additions.
- **Dynamic Price Updates**: Fixed price recalculation issues on the canvas customization interface.

---

## Version 5.0.0
*Major release for Magento 2.4.x*

- **Compatibility**: Certified compatibility with Magento 2.4.x release line.
- **Admin Invoicing**: Resolved layout defect when printing invoices with customized item graphics.
- **Admin Template Saving**: Fixed template serialization issue when saving designs in the backend.

---

## Version 3.0.0
*Image quality & resolution enforcement*

- **Template Customization**: Improved performance and stability of customer canvas customization.
- **DPI & Size Restrictions**: Implemented rigorous validation restricting upload of low-resolution or oversized images, validating pixel dimensions and DPI thresholds via PHP Imagick.

---

## Version 2.0.3
*Canvas UI modernization*

- **Studio Interface**: Modernized canvas user interface and responsive toolbars.
- **Reset Tools**: Added *Clear Current Template* and *Clear All Templates* reset controls.
- **Preview Enhancements**: Added an integrated design inspection section on the customer preview dialog.
- **Compatibility**: Certified compatibility with Magento 2.3.x.

---

## Version 2.0.2
*Vector typography and zoom controls*

- **SVG Text Path**: Added curved text and SVG string path wrapping.
- **Element Rotation**: Added 360-degree interactive rotation handles for all canvas objects.
- **Zoom Slider**: Replaced stepped zoom with a smooth zoom slider.
- **Live Price Display**: Integrated dynamic product price display directly on the canvas customization view.
- **Weight Attribute**: Added weight attribute support for shipping calculations on customized items.
- **Canvas Sizing**: Enabled administrator configuration of minimum canvas dimensions.

---

## Version 2.0.0
*Major rewrite: Full HTML5 canvas engine*

- **Interactive Canvas Engine**: Introduced HTML5 canvas-based customizer replacing static image mappers.
- **Font Library**: Added custom font upload management.
- **Image Library**: Introduced categorical stock clip art and icon libraries.
- **Color Palettes**: Enabled predefined color swatches alongside color picker tools.
- **Dedicated Product Type**: Established the native `webtoprint` product type.
- **Multi-View Templates**: Added multi-face template support (Front, Back, Side).
- **DPI Validation**: Introduced minimum DPI and resolution checks for uploaded artwork.
- **Customer & Admin Downloads**: Enabled customer download of personalized designs and admin export of design assets.
