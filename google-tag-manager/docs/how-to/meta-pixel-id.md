# How to create a Meta Pixel & find your Pixel ID

Your **Meta Pixel ID** (also called a **Dataset ID**) is a numeric value entered in the
[Meta Pixel destination](/destinations/meta-pixel.html). If you have not created a pixel /
dataset yet, follow the walkthrough below.

## Create a Meta Pixel (dataset) in Events Manager

1. Sign in to your **Meta Business** account and open
   [Events Manager](https://business.facebook.com/events_manager).

![Meta Events Manager home](/images/meta-events-manager.webp)

2. Click **Connect Data** and choose **Web** as the data source.

![Connect a Web data source](/images/meta-connect-source.webp)

3. Click **Create new dataset** and give it a name.

![Create a new dataset](/images/meta-create-dataset.webp)

4. On the **Recommended setup** window, choose **Set up manually** and click **Next**.

![Recommended setup — set up manually](/images/meta-recommended-setup.webp)

5. Choose **Meta Pixel only** as the connection method and click **Next**.

![Choose Meta Pixel only](/images/meta-pixel-only.webp)

6. Review the **Automatic Advanced Matching** settings (optional) and click **Done**.

![Automatic Advanced Matching](/images/meta-advanced-matching.webp)

7. Open the **Settings** tab of the created dataset. The **Dataset ID** (Pixel ID) — a
   numeric value — is shown under **Details**.

![Find the Meta Pixel / Dataset ID](/images/howto-meta-id.webp)

## Find the Pixel ID again later

1. Go to [business.facebook.com/events_manager](https://business.facebook.com/events_manager)
   and open **Events Manager**.
2. In **Data Sources**, select your pixel.
3. Open **Settings** — the **Pixel ID** (a numeric value) is shown near the top.

## Where it goes

Paste it into **Destinations → Meta Pixel → Meta Pixel ID**, then save. On
[container export](/destinations/container-export.html), it is wired into the Meta Pixel
base and event tags.

## Verify it is firing

- Install the **Meta Pixel Helper** Chrome extension and browse your storefront — it lists
  the events firing and the Pixel ID they report to.
- Or use **Events Manager → your pixel → Test Events** and perform actions on the store.

See [Verify events](/how-to/verify-events.html#meta-pixel) for the full check.
