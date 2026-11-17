# Requirements

Before installing the **Webkul Web To Print** extension for Magento 2 (Adobe Commerce), verify that your hosting environment and development stack fulfill the prerequisites outlined below.

---

## Supported Versions

| Component | Supported Versions | Notes |
|---|---|---|
| **Adobe Commerce / Magento Open Source** | 2.4.4, 2.4.5, 2.4.6, 2.4.7, 2.4.8, 2.4.9 | Supports both Community and Enterprise / Cloud editions. |
| **PHP** | 8.1, 8.2, 8.3, 8.4, 8.5 | Matches Magento's system requirements for each minor release. |
| **MySQL / MariaDB / Percona** | 8.0+ / 10.4+ | InnoDB storage engine required for foreign key constraints. |
| **OpenSearch / Elasticsearch** | 2.x / 7.17+ | Standard search engine configured for Magento 2.4.x. |
| **Storefront Themes** | Luma, Blank, **Hyvä Themes** | Full compatibility with default Luma as well as Alpine.js/Tailwind CSS Hyvä storefronts. |

---

## PHP Extension Prerequisites

In addition to standard Magento 2 PHP prerequisites, Web To Print utilizes server-side image processing:

| PHP Extension | Requirement Level | Purpose |
|---|---|---|
| **`ext-imagick` (ImageMagick)** | **Recommended** | Essential for detecting and validating image DPI (Dots Per Inch) on user uploads. |
| **`ext-gd`** | **Required** | Fallback raster image manipulation and thumbnail generation. |
| **`ext-zip`** | **Required** | Generates downloadable zip archives containing customized order artwork. |
| **`ext-json`** | **Required** | Parses HTML5 canvas state and coordinates stored in JSON format. |
| **`ext-mbstring`** | **Required** | Multi-byte string manipulation for internationalized typography. |

::: warning PHP Imagick Extension
The **Upload Images Minimum DPI** validation setting strictly requires the `php-imagick` extension to read EXIF/JFIF resolution headers. If `php-imagick` is not installed on your web server, the DPI check is bypassed, and fallback pixel dimension checks are applied.
:::

To install ImageMagick on Ubuntu/Debian:
```bash
sudo apt-get update
sudo apt-get install php-imagick imagemagick
sudo systemctl restart php8.2-fpm # adjust to your PHP version
sudo systemctl restart nginx # or apache2
```

---

## Server & Resource Sizing

Because canvas rasterization and high-resolution print artwork involve intensive memory operations, allocate sufficient PHP memory:

- **`memory_limit`**: Set to at least `2048M` (2GB) in `php.ini` for both web and CLI environments.
- **`max_execution_time`**: Minimum `300` seconds to avoid timeouts during bulk archive generation or heavy image imports.
- **`upload_max_filesize` & `post_max_size`**: Set to `64M` or higher to allow customers and administrators to upload large graphic assets.

---

## Client Browser Compatibility

The Web To Print canvas studio uses standard HTML5 Canvas 2D and SVG rendering APIs:

- Google Chrome 90+
- Mozilla Firefox 88+
- Apple Safari 14+
- Microsoft Edge 90+
- Mobile Safari & Chrome (responsive canvas controls)

---

## Adobe Illustrator Prepress Requirements (Optional)

If you plan to utilize automated vector file generation and one-click PDF generation via Adobe Illustrator:

- **Operating System**: Windows 10 or Windows 11 (64-bit).
- **Desktop Software**: Adobe Illustrator (v25.0+ or latest Creative Cloud release).
- **Windows Scripting Host**: Standard `WScript.exe` enabled (default on Windows).
- **Custom URI Protocol**: Windows Registry key for `webtoprint://` protocol handler.
- **Script Files**: Provided `.vbs` and `.jsx` helper automation scripts installed in your local directory.

For comprehensive setup steps, refer to the [Adobe Illustrator Setup Guide](/configuration/illustrator-setup).
