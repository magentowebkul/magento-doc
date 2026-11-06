# Catalog Product Video

Store administrators can attach high-definition video demonstrations to any product in their catalog. The extension supports direct video uploads as well as third-party video links from YouTube, Vimeo, Google Drive, and CDNs.

---

## Navigating to Product Media Management

1. In the Magento Admin sidebar, navigate to **Catalog > Products**.
2. Locate the product you wish to edit and click **Edit** under the **Action** column.

![Catalog Products Grid](/images/admin_catalog_products.webp)

3. On the product edit page, scroll down to the **Images and Videos** collapsible section.
4. Click the **Add Video** button.

![Images and Videos Section](/images/admin_images_and_videos.webp)

A slide-out drawer modal will open, allowing you to configure the video media item.

---

## Video Source 1 — Direct File Upload

Select **Upload** from the **Video Source** dropdown menu to host video files directly on your web server or media storage.

![Video Source Dropdown](/images/admin_video_source_dropdown.webp)

### Upload Fields Reference

![Add Video Details](/images/admin_add_video_details.webp)

* **Video Source**: Select `Upload`.
* **Upload Video**: Click **Choose File** to select your video file from your computer. The module supports 7 distinct video container formats (**Allowed Extensions: `mp4`, `webm`, `mov`, `wmv`, `flv`, `mkv`, `3gp`**):
  * **MP4 (`.mp4`)**: MPEG-4 Part 14 container with universal cross-browser desktop and mobile playback support.
  * **WebM (`.webm`)**: Modern royalty-free web video format optimized for HTML5 browsers.
  * **MOV (`.mov`)**: Apple QuickTime movie format recorded natively on iPhone, iPad, and macOS cameras.
  * **WMV (`.wmv`)**: Windows Media Video format commonly used across Windows systems.
  * **FLV (`.flv`)**: Flash video format for legacy multimedia video assets.
  * **MKV (`.mkv`)**: Matroska open container format supporting high-definition video streams.
  * **3GP (`.3gp`)**: 3GPP mobile video format designed for captured mobile camera clips.
* **Title**: Enter a descriptive title for the video. This title appears in the storefront video info modal and search metadata.
* **Description**: Enter an overview of what the video demonstrates (e.g., product features, unboxing, assembly tutorial).
* **Preview Image**: Upload a high-resolution poster thumbnail. This image is displayed before playback begins and serves as the video placeholder in the gallery carousel.
* **Role**: Select one or more image roles for the preview poster (**Base**, **Small**, **Thumbnail**, **Swatch**).

### Chapters & Download Settings

Scroll down inside the slide-out drawer to configure advanced options:

![Add Video Chapters](/images/admin_add_video_chapters.webp)

* **Download Enable**: Check this box if you want to allow shoppers to download this video file directly from the storefront player.
* **Chapters**: Click **Add Chapter** to create interactive timeline markers:
  * **Timestamp**: Enter the starting time for the chapter in `mm:ss` (e.g., `01:45`) or `hh:mm:ss` (e.g., `00:03:30`) format.
  * **Chapter Title**: Enter the name of the chapter (e.g., *"Unboxing"*, *"Feature Walkthrough"*, *"Cleaning & Maintenance"*).

#### Chapter Formatting Example:
```text:no-line-numbers
00:00 - Introduction & Unboxing
01:30 - Key Product Features
03:15 - Assembly & Setup Guide
05:00 - Maintenance Tips
```
<ExplainCode explanation="Timestamp structure for product video chapters, mapping elapsed video time to section titles to create clickable markers along the timeline." />

Click **Save** in the slide-out drawer, then click **Save** on the product page.

---

## Video Source 2 — Video URL Streaming

Store administrators can embed external video streams without using local server disk space by selecting **Video URL** from the **Video Source** dropdown:

### 1. CDN Video URL
Host videos on an external Content Delivery Network (e.g. AWS S3/CloudFront, Cloudflare, Akamai) and paste the direct video file URL:

```text:no-line-numbers
https://d111111abcdef8.cloudfront.net/products/demo-video.mp4
```
<ExplainCode explanation="Direct HTTPS URL to an MP4 video hosted on Amazon CloudFront or any other Content Delivery Network." />

![CDN Video URL](/images/admin_cdn_video_url.webp)

After saving, the CDN-hosted video plays directly inside the native player on the product page:

![CDN Video Frontend](/images/cdn_video_frontend.webp)

---

### 2. YouTube Video URL
Paste any standard YouTube video URL into the **Video URL** field:

```text:no-line-numbers
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```
<ExplainCode explanation="Standard watch URL for a video hosted on YouTube." />

![YouTube Video URL](/images/admin_youtube_video_url.webp)

The video seamlessly loads inside the storefront media gallery with YouTube playback controls:

![YouTube Video Frontend](/images/youtube_video_frontend.webp)

::: tip Requirement
Ensure you have configured a valid **YouTube API Key** in **Stores > Configuration > Catalog > Product Video > YouTube API Key** for YouTube video metadata resolution.
:::

---

### 3. Vimeo Video URL
Paste a Vimeo video share link into the **Video URL** field:

```text:no-line-numbers
https://vimeo.com/76979871
```
<ExplainCode explanation="Direct video share URL for a video hosted on Vimeo." />

![Vimeo Video URL](/images/admin_vimeo_video_url.webp)

The Vimeo video streams cleanly within the product image carousel:

![Vimeo Video Frontend](/images/vimeo_video_frontend.webp)

---

### 4. Google Drive Video URL
Embed videos stored in Google Drive:

1. In Google Drive, open the video file, click the **Share** menu, and ensure permissions are set to *"Anyone with the link can view"*.
2. Copy the sharing link.
3. In the product **Video URL** field, paste the link.

```text:no-line-numbers
# Standard Google Drive Sharing Link
https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I/view?usp=sharing

# Direct Embedded Preview Link for Magento Video Player
https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I/preview
```
<ExplainCode explanation="Demonstrates replacing /view with /preview at the end of the Google Drive URL to allow clean inline iframe video streaming." />

![Google Drive Video URL](/images/admin_google_drive_video_url.webp)

The Google Drive video will render directly on the storefront product page:

![Google Drive Video Frontend](/images/google_drive_video_frontend.webp)

---

## Reindexing & Cache Flush

After adding or updating video assets on catalog products, reindex and flush the cache to ensure immediate visibility:

```bash:no-line-numbers
php bin/magento indexer:reindex catalog_product_attribute catalogsearch_fulltext
```
<ExplainCode explanation="Reindexes product attributes and search catalogs to ensure updated video metadata is indexed." />

```bash:no-line-numbers
php bin/magento cache:flush full_page block_html
```
<ExplainCode explanation="Flushes full page and block HTML cache storage to serve refreshed product media gallery blocks immediately." />
