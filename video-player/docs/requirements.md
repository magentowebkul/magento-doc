# Requirements

Before installing the **Product Video for Magento 2 (Webkul_VideoPlayer)** extension, please ensure your server and store environment meet the system requirements outlined below.

---

## Store Environment Requirements

* **Magento Setup:** A working installation of Magento 2 / Adobe Commerce / Adobe Commerce Cloud (supports versions **2.0.x through 2.4.x**, including 2.4.7, 2.4.8, and 2.4.9).
* **PHP Compatibility:** A PHP version that matches your active Magento 2 installation (supports PHP 7.x up to PHP 8.4 / 8.5).

To verify your active PHP version and CLI limits:

```bash:no-line-numbers
php -v
```
<ExplainCode explanation="Displays your current PHP version and build details to verify compatibility with Magento 2." />

```bash:no-line-numbers
php -i | grep -E "upload_max_filesize|post_max_size|memory_limit"
```
<ExplainCode explanation="Queries PHP configuration directives to confirm your active limits for upload file size, POST size, and memory allocation." />

---

## PHP & Web Server Upload Limits

Video files are substantially larger than standard catalog images. You must ensure that `php.ini` and web server settings allow uploading large video files without timing out or failing.

In your server's `php.ini` file, configure the following directives:

```ini:no-line-numbers
upload_max_filesize = 500M
post_max_size = 500M
memory_limit = 2G
max_execution_time = 300
```
<ExplainCode explanation="Configures PHP directives to allow uploading video files up to 500MB, extends script execution limits to 300 seconds, and allocates 2GB of memory." />

If using **Nginx**, adjust the client body size directive in your server configuration block:

```nginx:no-line-numbers
client_max_body_size 500M;
```
<ExplainCode explanation="Configures Nginx to accept client request bodies up to 500MB, preventing HTTP 413 (Payload Too Large) errors during video uploads." />

---

## Video Streaming & Partial Content (HTTP 206)

For smooth video playback and responsive timeline scrubbing across all supported video formats (**MP4**, **WebM**, **MOV**, **WMV**, **FLV**, **MKV**, **3GP**), your web server (Apache or Nginx) must support Byte-Range requests:

```nginx:no-line-numbers
location ~* \.(mp4|webm|mov|wmv|flv|mkv|3gp)$ {
    add_header Accept-Ranges bytes;
}
```
<ExplainCode explanation="Instructs the web server to send the Accept-Ranges: bytes header for all supported video extensions (MP4, WebM, MOV, WMV, FLV, MKV, 3GP), enabling browsers to seek to arbitrary timestamps without buffering the entire file." />

---

## Google Cloud Console Requirements (Optional)

If you plan to utilize **YouTube Video URLs** or upload videos linked to YouTube:

* **YouTube Data API v3:** An active Google Cloud Console project with the YouTube Data API enabled.
* **API Key:** A valid Google API Key configured under **Stores > Configuration > Catalog > Product Video > YouTube API Key**.

---

## Hyvä Theme Requirements (Optional)

If your storefront is built using **Hyvä Themes**, ensure you have:

* **Hyvä Theme Framework:** An active Hyvä default or custom child theme.
* **Hyvä Compat Module Fallback:** `Hyva_CompatModuleFallback` enabled if using the official Hyvä compatibility layer.

Verify the Hyvä fallback module status via CLI:

```bash:no-line-numbers
php bin/magento module:status Hyva_CompatModuleFallback
```
<ExplainCode explanation="Checks whether the Hyvä compatibility fallback module is registered and enabled in your Magento installation." />

---

::: tip Backup Recommendation
Always perform a complete database and filesystem backup before installing or upgrading any extension on a production store. We recommend deploying and testing extensions in a staging environment first.
:::
