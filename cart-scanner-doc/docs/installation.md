# Installation

Follow the step-by-step instructions below to install the Shopping Cart Scanner module on your Magento 2 store.

## Step 1: Extract and Upload Files

1. Extract the downloaded extension zip package on your computer.
2. Transfer the extracted `app` directory into your Magento 2 root installation folder on the server as shown below:

![Installation Directory](/images/image.png)

## Step 2: Run Setup Commands

Open your server CLI shell, navigate to the Magento 2 root directory, and run the following terminal commands:

```bash
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
```

## Step 3: Flush Cache

Navigate to **System > Cache Management** in your Magento Admin Panel and click **Flush Magento Cache**:

![Cache Management](/images/image-1.png)

Or execute via command line:

```bash
php bin/magento cache:flush
```
