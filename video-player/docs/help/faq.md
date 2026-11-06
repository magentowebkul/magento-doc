# Frequently Asked Questions

---

### Q1: Is the Video Player module compatible with Magento 2.4.9 and PHP 8.4 / 8.5?
**Yes.** The module is fully compatible with Magento 2.0.x through 2.4.x (including 2.4.7, 2.4.8, and 2.4.9) and supports PHP versions up to PHP 8.4 / 8.5.

---

### Q2: Which product types support video attachments?
The extension works seamlessly with all Magento product types:
* **Simple Products**
* **Configurable Products**
* **Virtual Products**
* **Grouped Products**
* **Bundle Products**
* **Downloadable Products**

---

### Q3: Which video file formats can be uploaded directly?
The module supports 7 different video file extensions for direct upload:
* **MP4** (`.mp4`)
* **WebM** (`.webm`)
* **MOV** (`.mov`)
* **WMV** (`.wmv`)
* **FLV** (`.flv`)
* **MKV** (`.mkv`)
* **3GP** (`.3gp`)

---

### Q4: Can I embed videos without uploading files to my server?
**Yes.** You can embed external video streams by providing video URLs from:
* **YouTube**
* **Vimeo**
* **Google Drive**
* **Custom CDN / CloudFront / S3 URLs**

---

### Q5: Can customers download product videos directly from the store?
**Yes.** Store administrators can enable the **Download** option under **Stores > Configuration > Webkul > Video Player** and check **Download Enable** on individual uploaded or CDN product videos. A download button will then appear in the player control bar.

---

### Q6: Can shoppers skip forward or backward during playback?
**Yes.** When the video is paused or during initial interaction, quick **10-second skip backward** and **10-second skip forward** buttons appear centered over the video frame.

---

### Q7: Are timeline chapters and video downloads supported for YouTube or Vimeo videos?
**No.** Chapter markers and the direct download button are supported for local **Uploaded Videos** and **CDN Video URLs**. YouTube and Vimeo utilize their own proprietary embed frames and security models.

---

### Q8: Is the extension compatible with Hyvä Themes?
**Yes.** Webkul provides native Hyvä Theme compatibility, replacing legacy RequireJS/Knockout scripts with lightweight Alpine.js interactivity and Tailwind CSS layouts.

---

### Q9: Can I bulk upload product videos for my entire catalog?
**Yes.** Under **Video Player > Mass Upload Product Videos**, you can upload a CSV mapping video filenames to product SKUs along with ZIP archives containing your video and preview image files. Afterwards, reindex your catalog:

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Reindexes all catalog tables after a mass video upload to ensure all product video assets are visible." />

---

### Q10: How do I change the video player colors to match my brand?
Navigate to **Stores > Configuration > Webkul > Video Player > Video Player Appearance** and select your desired **Primary Color** and **Text/Icon Color** using the color pickers, or set them via CLI:

```bash:no-line-numbers
php bin/magento config:set webkul_videoplayer/appearance/primary_color "#0070f3"
php bin/magento cache:flush config
```
<ExplainCode explanation="Configures the primary theme color of the video player via CLI and clears the configuration cache." />
