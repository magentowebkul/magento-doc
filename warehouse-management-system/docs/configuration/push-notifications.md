---
title: Push Notifications (Firebase FCM)
---

# Push Notifications (Firebase FCM)

WMS communicates directly with **Google Firebase Cloud Messaging (FCM)** to dispatch real-time alerts to mobile warehouse pickers when orders are assigned or picking priorities change.

![Push Notifications](/images/push-notifications.webp)

## Fields

| Field | Description | Example |
| --- | --- | --- |
| **Firebase Project ID** | The unique Project ID from your Google Firebase Console project settings. | `wms-logistics-prod-2026` |
| **Firebase Auth JSON File Path** | Upload button for the Google Cloud Service Account credentials JSON file. | `service-account-key.json` |
| **Android Topic** | Broadcast messaging topic subscribed to by Android scanner devices. | `warehouse_pickers_android` |
| **iOS Topic** | Broadcast messaging topic subscribed to by iOS handheld devices. | `warehouse_pickers_ios` |

## How to Generate the Firebase Service Account Key

To enable server-to-mobile push authorization via Google OAuth2:

1. Open the [Firebase Console](https://console.firebase.google.com/) and select your project.
2. Click the gear icon next to **Project Overview** and select **Project settings**.
3. Open the **Service accounts** tab.
4. Click **Generate new private key**, then confirm by clicking **Generate key**.
5. Save the downloaded JSON file to your local computer.
6. In Magento Admin, go to **Stores &rarr; Configuration &rarr; Webkul &rarr; Warehouse Management System**.
7. In the **Firebase Auth JSON File Path** field, click **Choose File**, select the downloaded JSON, and click **Save Config**.

::: tip Stored Securely in Media
The file is uploaded to `pub/media/wms/jsonfile/` and accessed by `Helper\Data.php` when building Google Auth access tokens via the `google/auth` Composer library and Guzzle HTTP requests.
:::

::: note Required Composer Dependency
Ensure `google/auth` is installed in your Magento environment (`composer require google/auth`) for Firebase authentication to function.
:::

## Notification Dispatch Lifecycle

When an order is assigned:
1. `Helper\Data::sendNotification()` builds a payload containing the Order Increment ID, assigned Tote ID, and item count.
2. The payload is signed with the OAuth2 bearer token derived from your service account key.
3. If the staff member has a registered device token (`wms_warehouse_staff.device_token`), an individual push alert is dispatched.
4. If a broadcast alert is needed, FCM distributes the payload across the configured **Android Topic** and **iOS Topic**.
