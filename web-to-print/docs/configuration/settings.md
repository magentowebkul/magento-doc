# Configuration Settings

To adjust module parameters, navigate to **Stores** > **Configuration** > **Webkul** > **Web To Print Settings** in the Magento Admin Panel.

![Configuration Settings](/images/web-to-print-configuration1.webp)

---

## General Settings Reference

The following table details all configuration fields available under **General Settings**:

| Setting Field | XML Path | Default / Type | Description & Recommendations |
|---|---|---|---|
| **Active** | `webtoprint/wtp_settings/active` | `Yes` / Select | Enables or disables the Web To Print customizer on the storefront catalog and product pages. |
| **Declaration Before Add To Cart** | `webtoprint/wtp_settings/declaration` | Textarea | Legal acknowledgment or disclaimer that customers must agree to before adding a personalized item to their cart. E.g., *"I confirm that spelling, graphics, and layout are correct and that I hold rights to the uploaded artwork."* |
| **Instruction Before Add To Cart** | `webtoprint/wtp_settings/instruction` | Textarea | Helpful instructions or proofreading tips displayed to the buyer on the preview dialog prior to order placement. |
| **Canvas Width In Pixel** | `webtoprint/wtp_settings/canvas_width` | Integer (e.g., `500`) | The default minimum width in pixels for the HTML5 interactive design canvas. |
| **Canvas Height In Pixel** | `webtoprint/wtp_settings/canvas_height` | Integer (e.g., `500`) | The default minimum height in pixels for the HTML5 interactive design canvas. |
| **Image Width In Pixel** | `webtoprint/wtp_settings/width` | Integer (e.g., `300`) | Minimum horizontal pixel dimension permitted when a customer uploads their own photo or logo file. Uploads smaller than this value trigger a validation alert. |
| **Image Height In Pixel** | `webtoprint/wtp_settings/height` | Integer (e.g., `300`) | Minimum vertical pixel dimension permitted when a customer uploads their own photo or logo file. |
| **Upload Images Minimum DPI** | `webtoprint/wtp_settings/dpi` | Integer (e.g., `150` or `300`) | Minimum Dots Per Inch (DPI) resolution required for uploaded photos to guarantee crisp print reproduction. Requires `php-imagick`. |

---

## Best Practices for Image & Canvas Dimensions

### Setting Optimal Canvas Proportions
- Align your `canvas_width` and `canvas_height` with the physical aspect ratio of your printable products (for instance, a 1:1 square for mug wraps or coasters, or 3:4 for portrait poster prints).
- Standard recommendation: **600px x 600px** or **800px x 800px** provides high clarity on standard desktop displays and mobile retina screens.

### Enforcing Print Resolution (DPI)
- **Web screens** display images at 72–96 DPI. However, commercial digital printing (DTG, sublimation, offset) requires **150 to 300 DPI** to avoid pixelation and blur.
- Setting **Upload Images Minimum DPI** to `150` prevents customers from uploading tiny web icons or compressed social media thumbnails for a large t-shirt graphic.
- Ensure your server has the `php-imagick` extension installed and enabled to allow the module to read DPI metadata from incoming files.

::: tip Saving and Applying Changes
After modifying any values in **Stores** > **Configuration**, click **Save Config** in the top bar. If changes do not reflect immediately on your product pages, flush your Magento cache:
```bash
php bin/magento cache:flush
```
:::
