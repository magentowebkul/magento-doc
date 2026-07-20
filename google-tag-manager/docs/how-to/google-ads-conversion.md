# How to create a Google Ads conversion & find your Conversion ID & Label

The [Google Ads destination](/destinations/google-ads.html) needs two values: a
**Conversion ID** and a **Conversion Label**. Both come from a conversion action set up to
use Google Tag Manager. If you have not created a conversion action yet, follow the full
walkthrough below.

## Create a Google Ads conversion action

1. Go to [ads.google.com](https://ads.google.com) and sign in.

![Sign in to Google Ads](/images/ads-signin.webp)

2. Click **Tools and settings** in the top navigation.

![Google Ads Tools and settings menu](/images/ads-tools-menu.webp)

3. Open **Conversions** and click **Add conversion** (**+ New conversion action**).

![Add a new conversion action](/images/ads-add-conversion.webp)

4. Choose **Website** as the conversion source.

![Select Website as the conversion source](/images/ads-website-setup.webp)

5. Enter your store's **domain name** and continue.

![Enter your domain name](/images/ads-domain.webp)

6. Click **Add a conversion action manually** so you can wire it to Google Tag Manager.

![Add a conversion action manually](/images/ads-manual-action.webp)

7. Fill in the conversion details (name, category, value, counting), then click **Done**.

![Enter the conversion action details](/images/ads-conversion-details.webp)

8. Click **Save and continue**, then **Done**.

![Save and continue](/images/ads-save-continue.webp)

9. Your new conversion action now appears in the list. Open it.

![The newly created conversion action](/images/ads-created.webp)

10. Expand **Tag setup** and choose **Use Google Tag Manager**. Google Tag Manager shows the
    two values you need:
    - **Conversion ID** — a numeric value, sometimes shown prefixed with `AW-`.
    - **Conversion Label** — a short alphanumeric string.

![Tag setup — use Google Tag Manager](/images/ads-tag-setup.webp)

::: tip Finding the IDs again later
Reopen the conversion action any time and expand **Tag setup → Use Google Tag Manager** to
see the Conversion ID and Label again.
:::

![Find the Google Ads conversion ID and label](/images/howto-ads-conversion.webp)

## Where they go

Enter both in **Destinations → Google Ads**:

| Google Ads value | Extension field |
| --- | --- |
| Conversion ID | **Conversion ID** |
| Conversion Label | **Conversion Label** |

On [container export](/destinations/container-export.html), these are wired into the Google
Ads conversion tag, which fires on `payment_completed`.

## Dynamic remarketing (optional)

For dynamic remarketing, also enable it in the Google Ads group and enter your **Merchant
Center ID**. Make sure the product identifier (SKU vs numeric ID) matches your Merchant
Center feed — see [Data Tuning](/configuration/data-tuning.html#sku-vs-numeric-id).

## Verify conversions

Place a test order in [GTM Preview mode](/how-to/verify-events.html) and confirm the Google
Ads conversion tag fires. In Google Ads, the conversion action status moves to **Recording
conversions** once it receives data (this can take a few hours).
