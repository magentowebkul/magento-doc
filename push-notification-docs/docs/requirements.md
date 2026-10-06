# Requirements

Before installing the Push Notification extension, ensure that your system meets the following prerequisites.

### Supported Framework Versions
- **Magento 2.0.x, 2.1.x, 2.2.x, 2.3.x, 2.4.x**

### Firebase API Credentials

To use **Magento 2 Push Notification**, you need to have Firebase Project Credentials. This is required during module configuration.

Please click **[here](https://console.firebase.google.com/)** and **create a new project** with your **Google** account.

1. After opening the Firebase page, create a project by clicking **Get Started with a Firebase project**.

![firebase interface](/images/web-push-notification-1.webp)

2. Create a new project, enter the name of the project, and click continue.

![web-push-notification](/images/web-push-notification-2.webp)

3. (Optional) Enable Google Analytics for your project, then follow the prompts to select or create a Google Analytics account. If you don’t want to set google analytics, disable the toggle button or click “Continue”.

![web-push-notification](/images/web-push-notification-3.webp)

4. Accept the Google Analytics Terms of Use and create a project. The process only takes a few seconds. When finished, click “Continue”.

![push notification](/images/push-notification-5-1.webp)

5. After creating your new project, click on the **Settings** cog icon. Then select the **Project Settings** option.

![push-notification-7](/images/push-notification-7-1.webp)

6. Navigate through **Project Settings > General** to find the Firebase Project Credentials under web apps.

![general settings](/images/push-notification-8-1.webp)

7. Click on the web app option, enter the new web app name and proceed further. After that, add Firebase SDK as required.

![push-notification-6](/images/push-notification-6.webp)

![notification](/images/push-notification.webp)

8. Tap **Continue to console** to view your credentials.

You will need these credentials for the admin configuration:
- Web API Key
- FCM Auth Domain
- FCM Project ID
- FCM Storage Bucket
- Messaging Sender ID
- FCM App ID
- Measurement ID

9. Go to the **Cloud Messaging** option to find your **Project Credentials**.

![push-notification-9](/images/push-notification-9-2.webp)

To create the key, click the Generate Key pair button.

![web-push-notification](/images/web-push-notification-12-1.webp)

### How to Get – Auth JSON file

1. Navigate to your project’s settings section and go to the **Service Accounts** tab.

![push-notification-8](/images/push-notification-8.webp)

2. Tap the **Generate New Private Key** button, continue on the popup, and download the JSON file.

![push-notification-9](/images/push-notification-9.webp)

3. The file will be downloaded to your system and will contain the credentials formatted as JSON.

![firebase creds](/images/firebase-creds.webp)
