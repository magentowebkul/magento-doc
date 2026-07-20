# How to create a GA4 account & find your Measurement ID

The **GA4 Measurement ID** starts with `G-` (for example `G-XXXXXXXXXX`) and is entered in
the [Google Analytics 4 destination](/destinations/google-analytics-4.html). If you do not
have a Google Analytics 4 property yet, create one first using the steps below.

## Create a Google Analytics 4 account & property

1. Go to [analytics.google.com](https://analytics.google.com) and sign in. Click **Admin**
   (the gear icon in the left navigation).

![Google Analytics Admin section](/images/ga4-home.webp)

2. Click **Create Account**.

![Create a Google Analytics account](/images/ga4-create-account.webp)

3. Enter an **Account Name** and click **Next**.

![Enter account details](/images/ga4-account-details.webp)

4. Enter a **Property Name**, choose your **Reporting Time Zone** and **Currency**, then
   click **Next**.

![Enter property details](/images/ga4-property-details.webp)

5. Select your **Industry Category** and **Business Size**, then click **Next**.

![Describe your business](/images/ga4-describe-business.webp)

6. Choose the business objectives that match how you'll use Analytics, then click **Create**.

![Select business objectives](/images/ga4-objectives.webp)

7. Review the **Google Analytics Terms of Service** and click **I Agree**.

![Accept the GA4 Terms of Service](/images/ga4-accept-terms.webp)

8. Choose **Web** as the platform for your data stream to start collecting data.

![Start collecting data — choose Web](/images/ga4-start-collecting.webp)

9. Enter your **Website URL** and a **Stream Name**, then click **Create and Continue**. The
   **Measurement ID** (`G-XXXXXXXXXX`) is shown at the top-right of the Web Stream Details
   page.

![Set up the web data stream](/images/ga4-data-stream.webp)

## Find the Measurement ID again later

If you already have a property and just need the ID:

1. Go to [analytics.google.com](https://analytics.google.com) → **Admin** (gear icon).
2. In the **Property** column, open **Data Streams**.
3. Click your **Web** stream (create one with **Add stream → Web** if you have none).
4. The **Measurement ID** (`G-XXXXXXXXXX`) is shown at the top-right of the stream details.

![Find the GA4 Measurement ID](/images/howto-ga4-id.webp)

## Where it goes

Paste it into **Destinations → Google Analytics 4 → Measurement ID**, then save. On
[container export](/destinations/container-export.html), it is wired into the GA4 tag for
you.

::: tip Measurement ID vs Stream ID
The **Measurement ID** starts with `G-`. The numeric **Stream ID** shown next to it is a
different value — the extension needs the `G-` Measurement ID.
:::

## Verify it is collecting

After importing the container, open **GA4 → Admin → DebugView** (or **Reports → Realtime**)
and browse your storefront in [GTM Preview mode](/how-to/verify-events.html). Events should
appear within a few seconds.
