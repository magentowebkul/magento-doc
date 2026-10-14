# Notification Subscribers & Sending Alerts

Manage registered web push notification subscribers and dispatch instant push notifications to customers.

---

## Viewing Registered Subscribers

Navigate to **Marketplace Management > Push Notification Manager > Notification Subscribers**.

The subscribers grid lists all registered browser tokens:
- **ID:** Unique subscriber record ID.
- **User Token:** Firebase browser registration token string.
- **Browser:** Browser type (Chrome, Firefox, etc.).
- **Created At:** Date and timestamp when the customer opted in.

Use the **Filters** menu to search for subscribers by Token, Browser type, or Date range.

![Notification Subscribers Grid](/images/image-20.png)

---

## Dispatching Web Push Notifications

1. Go to **Marketplace Management > Push Notification Manager > Notification Subscribers**.
2. Select target subscribers using individual checkboxes, or select all subscribers using the header checkbox.
3. From the **Actions** dropdown menu, select the desired **Notification Template** to send.

![Select Template to Send](/images/image-21.png)

4. A confirmation dialog will appear. Click **OK** to dispatch the real-time push notification via Firebase FCM.

![Confirm Send Notification](/images/image-22.png)

---

## Removing Registered Subscribers

1. Select subscriber records using the checkboxes.
2. Select **Delete** from the **Actions** dropdown menu.

![Delete Subscriber Action](/images/image-23.png)

3. Confirm the removal prompt by clicking **OK**.

![Confirm Delete Subscriber](/images/image-24.png)
