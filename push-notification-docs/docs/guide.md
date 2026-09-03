---
title: Magento 2 Push Notification Guide
description: Complete user guide for Magento 2 Push Notification
---

# Magento 2 Push Notification Guide

## Introduction

Magento 2 Push Notification extension allows you to send real-time push notifications to your customers.

The subscribed users can see the push notifications on their web browser. The advantage of using push notifications is that it delivers the message immediately.

Unlike emails that sometimes fail to deliver or go to the spam folder, Web push notifications are always delivered and seen by the users.

As long as the browser is running, a subscribed user will get a message even without opening up your website. This improves user engagement and retention.

::: tip
If you want to check Magento 2 push notifications on your smartwatch then use our [Magento 2 Watch app](https://webkul.com/blog/magento2-watch-app-documentation/) for the same.
:::

### Features

- It is very well integrated with Magento 2 Platform.
- Compatible with Mozilla Firefox, Google Chrome web browser, and mobile browsers.
- Designed to work with the **SSL** (Secure Sockets Layer) certificate websites.
- There is no monthly subscription required to notify customers.
- The admin can view the subscribed users list.
- There is no limitation on the number of subscribed users.
- The admin can create, edit and delete notification messages in the back end.
- A custom icon and target URL for their notification message can be set.
- Notifications can be sent to either all registered users or selected users.

### Web Push Notification – Front-End view

After the installation of the module, the user will see a push notification on their website.

The users have to click the **Allow** button to receive notifications from your website. Please refer to the below screenshot:

![Visible webstore frontend notification](/images/Screenshot-from-2017-01-23-11-19-16-1.webp)

#### Sample Push Notification

![Sample push notification](/images/web-push-notification-frontend-1.webp)

You can check how the sent push notification will appear on the webstore front-end. Template Title, Template Logo, Template Message, and the Redirect URL are visible to the users.

#### Sample Push Notification (Mobile browser)

![Web Push notification mobile](/images/extract-500x1024.webp)


---

## Requirements

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


---

## Installation

Follow these steps to install the Magento 2 Push Notification extension.

### Installation Process

1. Initially, download the **zip file** and extract its content on your computer. The extracted folder will have a folder named **src**, inside this folder, you will find an **app** folder.
2. Copy this **app** folder into the **Magento 2** root directory on the server as shown below.

![Installation Of Magento2](/images/Move-app-folder-2.webp)

### Run Commands

After the successful installation, you need to run the following commands in the Magento 2 root directory.

```bash
composer require google/auth
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
```

After running these commands, you need to flush the cache from the Magento admin panel. Navigate through **System -> Cache management**.

After flushing the Cache storage, you will get a confirmation message as shown below.

![Flush Cache](/images/Flush-Cache-1.webp)

### Multi-Lingual Configuration

For Multilingual support, please navigate to **Store > Configuration > General > Locale Options**. Select your desired language from the **Locale** option.

![change language-magento 2 locale](/images/change-language-magento-2-locale.webp)

### Language Translation

If you need to do module translation, please navigate to the following path in your system: `app/code/Webkul/PushNotification/i18n`.

1. Open the file named **en_US.CSV** for editing as shown in the below screenshot.

![Magento2 Change CSV language file](/images/22-3.webp)

2. Replace the words after the **comma(,)** on the right with your translated words.

![Magento2 Change Language](/images/33-2.webp)

3. After editing and translating the CSV file, save the translated file name according to your region language and country code, such as `de_DE.CSV`.

4. Upload the translated file to the same folder from where you obtained it. Now your module translation is complete.

![Magento2 Change CSV Language file](/images/2016-05-02_16-25-34-3.webp)


---

## Activate & Connect

After installing the module and creating your Firebase API Credentials, you must configure them in the Magento 2 backend admin panel.

### Module Configuration

1. Log in to the Magento 2 backend admin panel and navigate through **Stores > Configuration > Push Notification**.

![web-push-notification](/images/web-push-notification-9.webp)

2. Use the credentials you generated in the "Requirements" section to fill in the fields.

#### API Key
- **Web API Key:** The admin can get the Web API key from Firebase in the General tab under the project setting.

#### FCM (Firebase Cloud Messaging) Details
- **Auth Domain**: Enter the auth domain name here from the Firebase web app.
- **FCM Auth Domain Auth JSON File Path**: Here attach the downloaded auth JSON file.
- **Project Id**: Enter the generated FCM Project ID here.
- **FCM Storage Bucket**: Enter storage bucket id here.
- **Messaging Sender ID**: Enter the sender ID here.
- **FCM App Id**: Enter the FCM App ID here.
- **Public Key**: Enter the public key here and it can be found in cloud messaging under the project setting as web push certificates.
- **Measurement ID**: Enter the measurement ID here.

After entering the required values, tap the **Save Config** button at the top right-hand corner.

![web-push-notification](/images/web-push-notification-13.webp)

Once you have installed this module, you find a **Push Notification** menu option on the left side admin panel. Tap it and you will have two sub-menu options to configure:
- **Notifications Templates**
- **Registered Users**


---

## Overview

The Magento 2 Push Notification configuration enables automated behavior for your push notifications.

### Push Notification Rule

The admin can enable the automatic push notification rule by enabling this option.

The admin can add a new rule by setting up the time when the push notification will be sent out automatically to the subscribers and choosing the respective template for the same.

![web-push-notification config](/images/web-push-notification-10.webp)

Once configured, the Push Notification rules will automatically manage sending notifications without manual intervention.


---

## Settings

This section explains how to manage notification templates and manually send notifications.

### Creating a New Notification Template

1. Click the **Notification Templates** option from the Push Notification menu. You will find all the push notification messages already created. Here, you can find the template title, message, redirect URL, logo, tags, creation date and time.

![web-push-notification](/images/web-push-notification-14.webp)

2. The admin can add, edit or delete notification messages. To create a new push notification message, please click **Create New**.

3. After clicking the **Create New** button you will arrive at the **Template Field set** page. Here you need to fill out all the necessary information about your new template.

4. After that, please click **Save Template** button to save your new template message.

#### Template Fieldset

- **Title** – This will be your title of your notification message.
- **Template Message** – This is where you have to enter the content of your message.
- **Redirect URL** – The web page link will be displayed on the notification message.
- **Template Tags** – Add tags to your messages to identify them.
- **Template Logo** – You can upload any customized logo for the notification.

![web-push-notification](/images/web-push-notification-15.webp)

### Selecting Users for the New Web Push Notification

After creating the template, you need to select your recipients. Go to **Push Notification > Registered Users** option.

![registered users section with details ](/images/Screenshot_1-6.webp)

On this page, you can manage all the **Registered Users**. These are the subscribed users of your website.

You can either delete or send them notification messages. The admin can view the subscribed user ID, name, browser, and subscribed time & date.

### Send Web Push Notification

![sending web push notifications when required](/images/send-notification.webp)

After creating a template, the admin can select all or few subscribed users. 
1. To select all users click the small drop-down menu and click Select All option.
2. To select few users use the checkbox option. 
3. After selecting the users, go to **Actions > Send Notification**, then select the template.
4. Click **OK** button to send the notification.

### Delete Template

For deleting the template go to the **Push Notification** menu and select the **Notification Templates** option.

Then select the message and go to the Actions drop-down menu and click **Delete**. A confirmation message will appear, click **OK**.

![web-push-notification](/images/web-push-notification-16.webp)


---

## Troubleshooting

If you encounter any issues while using the Magento 2 Push Notification extension, please check this section for common solutions.

*(Check back later for updated troubleshooting steps)*


---

## Frequently Asked Questions

Find answers to common questions about the Magento 2 Push Notification extension.

*(Check back later for updated FAQs)*


---

