# Storefront Video Player

On the storefront product detail page, the video player integrates into the native product gallery, providing customers with an immersive video viewing experience.

---

## Gallery Integration

The product video appears alongside high-resolution product photographs in the primary gallery carousel.

![Storefront Video Player](/images/storefront_video_player.webp)

* **Seamless Gallery Switching:** Shoppers can click thumbnail items or use the left/right gallery navigation arrows to switch smoothly between photo angles and video clips.
* **Inline Playback:** Videos play directly on the product detail page without redirecting users to external platforms or opening intrusive third-party popups.

---

## Center Pause Controls

When playback is paused or initial playback begins, three controls appear centered over the video:

* **Skip Backward (10s):** Lets the customer rewind 10 seconds to review a product detail or action.
* **Play / Resume:** Prominently starts or resumes video playback from the current playhead position.
* **Skip Forward (10s):** Lets the customer jump ahead 10 seconds to bypass introductions.

---

## Bottom Control Bar

The custom player bottom control bar provides comprehensive playback tools:

### 1. Play / Pause Button
Quickly toggles playback with keyboard spacebar or mouse click.

### 2. Interactive Progress Scrubber & Chapter Markers
* **Timeline Bar:** Displays current elapsed time versus total video duration.
* **Chapter Markers:** If chapters are configured by the admin, visual marker ticks appear along the timeline. Hovering over a tick shows the chapter title; clicking it immediately seeks the video to that exact timestamp.

### 3. Playback Speed (Settings)
Allows shoppers to adjust playback rate (**0.5x**, **0.75x**, **1.0x Normal**, **1.25x**, **1.5x**, **2.0x**) to watch demonstrations at their preferred pace.

### 4. Picture-in-Picture (PiP)
Enables customers to pop the video out into a floating, resizable window that remains pinned in the corner of the browser window while they scroll down to read product specifications, reviews, or related products.

### 5. Audio & Volume Slider
Features a mute toggle button and a draggable volume slider for audio adjustments.

### 6. Fullscreen Mode
Expands the video player to fill the user's entire display with high-definition resolution.

### 7. Direct Video Download
When the admin enables **Download Enable** for an uploaded or CDN video, a download button appears in the control bar. Clicking the icon initiates a direct file download of the video to the customer's device.

### 8. Info Overlay Modal
Customers can click the **Info (ℹ)** icon in the control bar to open an elegant modal overlay displaying the video's full **Title** and **Description**, giving them extra context and product insights without leaving the player.

---

## Keyboard Accessibility Shortcuts

The storefront video player supports full keyboard control:

```text:no-line-numbers
Spacebar / K : Play or pause video playback
J / Left Arrow : Seek backward by 10 seconds
L / Right Arrow : Seek forward by 10 seconds
Up Arrow : Increase volume by 5%
Down Arrow : Decrease volume by 5%
M : Toggle mute / unmute
F : Toggle fullscreen display
```
<ExplainCode explanation="Keyboard shortcuts supported by the Video Player for accessible, mouse-free playback control." />

