# Module Configuration

Store administrators can manage global video player settings, playback behavior, branding colors, and player controls directly from the Magento Admin panel or via the Magento command-line interface (CLI).

---

## Accessing Configuration Settings

1. Log in to your **Magento Admin Panel**.
2. Navigate to **Stores > Configuration**.
3. In the left navigation tree, expand the **Webkul** tab and select **Video Player**.

![Admin Configuration Panel](/images/module_config.webp)

---

## Configuration Settings Reference

### 1. Video Player Configuration

* **Module Enable**:
  * **Options**: `Yes` / `No`
  * **Description**: Enables or disables the extension globally across the storefront. Set to `Yes` to activate the custom product video player.
* **Video Auto Play**:
  * **Options**: `Yes` / `No`
  * **Description**: When set to `Yes`, the product video will start playing automatically once the customer loads the product detail page (subject to modern browser autoplay policies, videos often autoplay in muted state).
* **Loop Video**:
  * **Options**: `Yes` / `No`
  * **Description**: When set to `Yes`, the video replays continuously from the beginning once it reaches the end.

#### CLI Configuration Commands:
```bash:no-line-numbers
# Enable module
php bin/magento config:set webkul_videoplayer/general/enable 1

# Disable autoplay
php bin/magento config:set webkul_videoplayer/general/autoplay 0

# Enable looping
php bin/magento config:set webkul_videoplayer/general/loop 1
```
<ExplainCode explanation="Sets core module configuration values via CLI: enables the module, turns off automatic playback on page load, and enables continuous video looping." />

---

### 2. Video Player Appearance

Customize the player colors to match your brand identity and store theme:

* **Primary Color**:
  * **Type**: Color Picker / Hex Code (e.g. `#0070f3`)
  * **Description**: Sets the accent color of the player, including the play button background, active progress scrubber fill, and interactive highlight states.
* **Text/Icon Color**:
  * **Type**: Color Picker / Hex Code (e.g. `#ffffff`)
  * **Description**: Sets the color for control bar icons, timestamp indicators, and textual controls.

#### CLI Appearance Commands:
```bash:no-line-numbers
# Set primary accent color
php bin/magento config:set webkul_videoplayer/appearance/primary_color "#0070f3"

# Set text and icon color
php bin/magento config:set webkul_videoplayer/appearance/text_icon_color "#ffffff"
```
<ExplainCode explanation="Applies brand hex color codes to player UI elements: sets the accent color for play buttons and scrubber progress fill, and sets icon colors to white." />

---

### 3. Player Options

Select which controls are exposed to shoppers inside the video player interface:

| Option | Description |
| :--- | :--- |
| **Play Large** | Displays an eye-catching, large circular play button at the center of the video frame. |
| **Mute** | Displays an audio mute / unmute button in the control bar. |
| **Volume** | Displays an interactive volume slider allowing customers to adjust playback volume. |
| **Fullscreen** | Adds a fullscreen toggle button allowing the video to expand across the monitor. |
| **Download** | Displays a download icon allowing customers to download the video file directly to their device. |
| **Allow Chapters** | Displays interactive timestamp markers along the scrubber timeline, letting shoppers jump directly to video sections. |

::: warning Source Compatibility Note
The **Download** and **Allow Chapters** controls are fully supported for **Uploaded Videos** and **CDN Video URLs**. They do not apply to third-party embedded streams such as **YouTube**, **Vimeo**, or **Google Drive**.
:::

#### CLI Player Options Command:
```bash:no-line-numbers
php bin/magento config:set webkul_videoplayer/player_options/options "play_large,mute,volume,fullscreen,download,allow_chapters"
```
<ExplainCode explanation="Configures the active list of player features in Magento configuration by passing a comma-delimited list of enabled control keys." />

---

## YouTube API Key Configuration

If you intend to add YouTube video URLs or utilize YouTube video integration, you must configure a Google YouTube Data API Key:

1. Navigate to **Stores > Configuration > Catalog > Catalog**.
2. Expand the **Product Video** group.
3. Locate the **YouTube API Key** field.
4. Enter your valid Google Cloud Console API Key with the **YouTube Data API v3** service enabled.
5. Click **Save Config**.

![YouTube API Key Configuration](/images/admin_youtube_api_key.webp)

You can also set the YouTube API Key directly via CLI:

```bash:no-line-numbers
php bin/magento config:set catalog/productvideo/youtube_api_key "AIzaSyYourGoogleApiKeyHere"
```
<ExplainCode explanation="Stores the Google Cloud YouTube Data API v3 key directly into Magento's catalog product video configuration path." />

Verify the stored key value:

```bash:no-line-numbers
php bin/magento config:show catalog/productvideo/youtube_api_key
```
<ExplainCode explanation="Queries Magento's configuration table to verify that the YouTube API Key is properly configured and readable." />

---

## Flushing Cache After Configuration

After updating settings in Admin or via CLI, flush the configuration and page cache:

```bash:no-line-numbers
php bin/magento cache:flush config full_page
```
<ExplainCode explanation="Flushes configuration and full page cache tags so newly saved store settings take effect immediately on frontend product pages." />

::: tip How to Obtain a YouTube API Key
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select an existing project.
3. Navigate to **APIs & Services > Library**, search for **YouTube Data API v3**, and click **Enable**.
4. Navigate to **APIs & Services > Credentials** and click **Create Credentials > API Key**.
5. Copy the generated key and paste it into the Magento configuration field above.
:::
