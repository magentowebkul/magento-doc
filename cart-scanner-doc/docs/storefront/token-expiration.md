# Real-Time Token Expiration & Instant Refresh

If the QR code expires based on the configured TTL duration:

* An intuitive **"Refresh QR"** overlay appears in real time on both the cart widget and the enlarged modal.
* The customer can click **Refresh QR** to instantly generate a fresh token without needing to reload the webpage.

![Expired QR State and Refresh Button](/images/image-20.png)

## Refresh Features

* **Zero Page Reload:** Token refresh occurs asynchronously without losing active state or input forms.
* **Security Shield:** Prevents stale QR codes from being used for unauthorized cart sync.
