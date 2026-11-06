# Mass Video Upload

The **Mass Upload Product Videos** feature allows store administrators to bulk attach product videos and corresponding feature images to multiple products simultaneously using a CSV spreadsheet and ZIP media archives.

This feature is ideal for stores with extensive catalog inventories that require setting up video demonstrations across hundreds or thousands of SKUs in a single batch operation.

---

## Accessing Mass Upload

1. In the Magento Admin sidebar, locate and click the **Video Player** navigation menu.
2. Select **Mass Upload Product Videos**.

![Mass Upload Product Videos](/images/admin_mass_upload.webp)

---

## File Requirements & Configuration

The mass upload interface provides three upload fields:

### 1. Upload CSV File
A standard CSV file mapping each video and image asset to a specific product **SKU**.

#### CSV Column Structure
The CSV file should include the following header columns:

| Column Name | Description | Example Value |
| :--- | :--- | :--- |
| `sku` | Unique identifier for the Magento product | `WB01-BLUE-S` |
| `video_source` | Source type (`upload` or `url`) | `upload` |
| `video_file` | Filename inside the Video ZIP, or full external URL | `wb01-demo.mp4` or `https://cdn.example.com/demo.mp4` |
| `video_title` | Descriptive title for the video | `Running Jacket Waterproof Test` |
| `video_description` | Detailed description text for the video info overlay | `Demonstration of waterproof Gore-Tex fabric in heavy rain.` |
| `preview_image` | Poster thumbnail image filename inside Image ZIP | `wb01-thumb.jpg` |
| `download_enable` | Whether storefront download is enabled (`1` = Yes, `0` = No) | `1` |
| `roles` | Media roles separated by comma | `image,small_image,thumbnail` |

#### Sample CSV File Content:
```csv:no-line-numbers
sku,video_source,video_file,video_title,video_description,preview_image,download_enable,roles
"24-MB01","upload","backpack-demo.mp4","Crown Summit Backpack Demo","Durable backpack walkthrough","backpack-thumb.jpg","1","image,small_image,thumbnail"
"24-WB04","url","https://www.youtube.com/watch?v=dQw4w9WgXcQ","Yoga Mat Overview","Eco-friendly mat demonstration","yoga-mat-thumb.jpg","0","image,small_image,thumbnail"
"24-WG08","url","https://cdn.example.com/videos/watch-specs.mp4","Endurance Watch Features","Water resistance demonstration","watch-thumb.jpg","1","image,small_image,thumbnail"
```
<ExplainCode explanation="Sample CSV structure linking product SKUs to video files/URLs, titles, descriptions, preview posters, download permissions, and image roles." />

---

### 2. Upload Video ZIP File
A compressed `.zip` archive containing all local video files referenced in the `video_file` column of your CSV:
* Ensure all files are placed in the root of the ZIP file (do not wrap them in subfolders).
* Supported video formats: **.mp4**, **.webm**, **.mov**, **.wmv**, **.flv**, **.mkv**, **.3gp**.

### 3. Upload Image ZIP File
A compressed `.zip` archive containing all poster preview images referenced in the `preview_image` column of your CSV:
* Supported image formats: `.jpg`, `.jpeg`, `.png`, `.webp`.

#### Archive Directory Structure:
```text:no-line-numbers
# product_videos.zip
├── backpack-demo.mp4
└── endurance-watch.webm

# product_images.zip
├── backpack-thumb.jpg
└── watch-thumb.jpg
```
<ExplainCode explanation="Flat directory layout required for media ZIP archives, ensuring files are placed at the root level without parent folders." />

---

## Execution Steps

1. Select your prepared CSV file under **Upload CSV File**.
2. Select your compressed video archive under **Upload Video Zip File**.
3. Select your compressed image archive under **Upload Image Zip File**.
4. Click **Save** in the top navigation bar.
5. The system parses the CSV rows, validates product SKUs, extracts media files into the Magento media directory (`pub/media/`), and attaches each video record to the corresponding product.

---

## Post-Import CLI Commands

After completing a mass upload, execute reindexing and cache flush commands to ensure all catalog products immediately reflect the new video media:

```bash:no-line-numbers
php bin/magento indexer:reindex
```
<ExplainCode explanation="Executes full reindexing of all Magento catalog and search indexes after bulk uploading product video records." />

```bash:no-line-numbers
php bin/magento cache:flush
```
<ExplainCode explanation="Purges all Magento cache storage types so all newly imported videos and preview images appear across the storefront catalog." />
