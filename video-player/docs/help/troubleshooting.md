# Troubleshooting

Common issues and their resolutions when configuring and using the **Product Video for Magento 2 (Webkul_VideoPlayer)** extension.

---

## 1. Video Not Appearing on Storefront Product Page

### Symptoms
You have attached a video in the product edit screen, but only static product images are visible on the storefront product detail page.

### Resolution Steps
1. Verify that the module is enabled in Admin under **Stores > Configuration > Webkul > Video Player** (**Module Enable** must be `Yes`).
2. Verify that your license is registered under **Stores > Configuration > Webkul > Module License**.
3. Check the product edit screen under **Images and Videos** to verify that a preview image was assigned a media role (**Base**, **Small**, or **Thumbnail**).
4. Verify module status via CLI:
   ```bash:no-line-numbers
   php bin/magento module:status Webkul_VideoPlayer
   ```
   <ExplainCode explanation="Checks whether Webkul_VideoPlayer is enabled and registered in Magento's module configuration." />
5. Flush the Magento application cache:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes Magento application caches to ensure updated product layouts and media blocks are displayed." />

---

## 2. File Upload Fails with "Maximum Allowed Size" Error

### Symptoms
When uploading large video files (such as `.mp4`, `.webm`, `.mov`, `.wmv`, `.flv`, `.mkv`, or `.3gp`) in the product edit screen or via Mass Upload, an error message appears stating the file exceeds the upload limit, or the upload stalls and disconnects.

### Resolution Steps
1. Open your server's `php.ini` file and adjust the upload and POST size directives:
   ```ini:no-line-numbers
   upload_max_filesize = 500M
   post_max_size = 500M
   memory_limit = 2G
   max_execution_time = 300
   ```
   <ExplainCode explanation="Increases PHP script execution time to 300 seconds, memory limit to 2GB, and max upload/POST file size to 500MB to accommodate large high-definition video files." />

2. If using **Nginx**, ensure `client_max_body_size` is configured inside your `nginx.conf` `server` or `http` block:
   ```nginx:no-line-numbers
   client_max_body_size 500M;
   ```
   <ExplainCode explanation="Instructs Nginx to allow client request payloads up to 500MB, preventing 413 Payload Too Large HTTP errors." />

3. Restart PHP-FPM and your web server:
   ```bash:no-line-numbers
   sudo systemctl restart php-fpm
   sudo systemctl restart nginx
   ```
   <ExplainCode explanation="Restarts the PHP-FPM processor and Nginx web server service to apply the newly configured upload parameters." />

---

## 3. YouTube Video Fails to Embed or Returns an API Error

### Symptoms
Adding a YouTube video URL displays an error message stating that the YouTube API key is invalid or missing, or the video preview fails to fetch.

### Resolution Steps
1. Navigate to **Stores > Configuration > Catalog > Catalog > Product Video**.
2. Verify that the **YouTube API Key** field contains a valid API key.
3. Check the configured key via CLI:
   ```bash:no-line-numbers
   php bin/magento config:show catalog/productvideo/youtube_api_key
   ```
   <ExplainCode explanation="Queries Magento's database to display the currently saved YouTube API key for catalog product videos." />
4. In the [Google Cloud Console](https://console.cloud.google.com/), confirm that the **YouTube Data API v3** library is enabled for your project.
5. If your API key has HTTP referrer or IP restrictions, ensure your server's public IP address or store domain is whitelisted.
6. Save configuration and flush cache:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes Magento cache storage so the updated YouTube API credentials take effect immediately." />

---

## 4. Chapter Markers or Download Button Not Appearing

### Symptoms
You have enabled chapters and the download option, but the markers and download icon do not show in the video player controls.

### Resolution Steps
1. Check the video source type. **Chapters** and **Download** are only supported for **Uploaded Videos** and direct **CDN URLs**. They cannot be applied to YouTube, Vimeo, or Google Drive embed players.
2. In **Stores > Configuration > Webkul > Video Player > Player Options**, ensure **Download** and **Allow Chapters** are selected.
3. Verify your configuration settings via CLI:
   ```bash:no-line-numbers
   php bin/magento config:show webkul_videoplayer/player_options/options
   ```
   <ExplainCode explanation="Inspects the comma-separated list of enabled player options to verify download and allow_chapters are active." />
4. On the product edit page, verify that the **Download Enable** checkbox is checked and chapter timestamps are formatted correctly as `mm:ss` (e.g., `01:30`) or `hh:mm:ss`.

---

## 5. Google Drive Video Shows "Refused to Connect" or Access Denied

### Symptoms
A Google Drive video player displays a black box or indicates permissions are restricted.

### Resolution Steps
1. Open Google Drive, locate the video file, click **Share**, and verify access is set to **"Anyone with the link can view"**.
2. When pasting the Google Drive sharing link into Magento, replace `/view` with `/preview` at the end of the URL:
   ```text:no-line-numbers
   # Incorrect (causes embed refusal)
   https://drive.google.com/file/d/XYZ12345/view

   # Correct (enables direct responsive preview player)
   https://drive.google.com/file/d/XYZ12345/preview
   ```
   <ExplainCode explanation="Swapping /view with /preview allows Google Drive videos to play directly inside an embedded iframe player without Google Drive page chrome." />
3. Save the product and flush the Magento cache:
   ```bash:no-line-numbers
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="Flushes Magento cache to immediately reload the updated product video link." />
