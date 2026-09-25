# Installation

Follow this step-by-step guide to install the **Webkul Magento 2 Order Edit** module on your store.

## Step 1: Download and Extract Module

1. Log in to your [Webkul Store Account](https://store.webkul.com/customer/account/login/).
2. Navigate to **My Account → My Purchased Products**.
3. Locate **Magento 2 Order Edit** and download the ZIP archive.
4. Extract the contents on your local workstation.

## Step 2: Upload Files to Server

1. Connect to your server using SSH or SFTP.
2. Navigate to your Magento root directory (`<magento-root>`).
3. Verify or create the destination directory `app/code/Webkul/OrderEdit`.
4. Copy all extracted module files into `app/code/Webkul/OrderEdit`.

```bash
mkdir -p app/code/Webkul/OrderEdit
cp -r /path/to/extracted/OrderEdit/* app/code/Webkul/OrderEdit/
```

Verify that `registration.php` and `composer.json` are present directly at `app/code/Webkul/OrderEdit/`:

```bash
ls -la app/code/Webkul/OrderEdit/
```

![Upload module folder](/images/installation-folder.webp)

## Step 3: Run Magento CLI Commands

From your Magento project root directory, run the following commands in sequence as the Magento filesystem owner:

```bash
# 1. Enable module and apply database schema declarations
php bin/magento setup:upgrade

# 2. Compile dependency injection, plugins, and repositories
php bin/magento setup:di:compile

# 3. Deploy static view assets for adminhtml and frontend
php bin/magento setup:static-content:deploy -f

# 4. Reindex data collections
php bin/magento indexer:reindex

# 5. Flush Magento system cache
php bin/magento cache:flush
```

::: tip Production Mode
If your store is running in **production** mode, ensure you run `setup:di:compile` and `setup:static-content:deploy -f` during a planned maintenance window to prevent cached layout errors.
:::

## Step 4: Configure the Message Queue Consumer

The module utilizes Magento's Message Queue framework (`orderedit.email.send`) to deliver email notifications asynchronously. To process queued notification messages, the queue consumer must be running.

### Manual / Testing Execution

To start the consumer process manually from the CLI:

```bash
php bin/magento queue:consumers:start orderedit.email.send
```

### Production Setup: Supervisord Process Management

For production environments, run the consumer under **Supervisor** or a **systemd service** so that it restarts automatically if stopped.

Create a Supervisor configuration file at `/etc/supervisor/conf.d/magento-orderedit-consumer.conf`:

```ini
[program:magento-orderedit-consumer]
command=php /var/www/html/bin/magento queue:consumers:start orderedit.email.send --single-thread --max-messages=1000
directory=/var/www/html
autostart=true
autorestart=true
user=www-data
numprocs=1
redirect_stderr=true
stdout_logfile=/var/log/supervisor/orderedit-consumer.log
```

Update Supervisor to launch the consumer:

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl status
```

::: tip Magento Cron Execution
If your store utilizes Magento's built-in cron runner (`bin/magento cron:run`), consumers declared in `queue_consumer.xml` are also spawned periodically by the `consumers_runner` cron job if configured in `env.php`.
:::

## Step 5: Language Translation (Optional)

The module includes standard English translation strings located in `app/code/Webkul/OrderEdit/i18n/en_US.csv`.

1. Navigate to `app/code/Webkul/OrderEdit/i18n/`.
2. Copy `en_US.csv` and name it using your target locale code (e.g., `es_ES.csv` for Spanish, `de_DE.csv` for German, `fr_FR.csv` for French).
3. Translate all values on the right-hand side of each comma-separated line.
4. Save the file and flush the Magento cache:
   ```bash
   php bin/magento cache:flush
   ```

![i18n directory location](/images/i18n-folder.webp)

![i18n CSV translation format](/images/i18n-csv.webp)

::: tip Next Step
Proceed to [Activate & Connect](/activation) to verify module registration, activate your license key, and confirm administrative access.
:::
