# Installation

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
