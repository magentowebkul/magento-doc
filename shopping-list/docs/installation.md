# Installation

You can install the **Magento 2 Shopping List** module either manually via file copy or through Composer.

## Method 1: Manual Installation (File Transfer)

::: tip Central Base Dependency
Because the module depends on Webkul base libraries, you must ensure `Webkul_Base` is installed at:
```bash
app/code/Webkul/Base
```
If dependencies are missing, Magento setup compilation will throw dependency unresolved exceptions.
:::

1. **Unzip Code Package**: Extract the module ZIP archive on your local computer.
2. **Move Module Files**: Create the folder directory `app/code/Webkul/ShoppingList` inside your Magento root installation and transfer all extracted extension files into this location:
   ```bash
   app/code/Webkul/ShoppingList
   ```

   ![Move app folder](/images/Move_app_folder_2.webp)

3. **Set Ownership & Permissions**: Grant execution and read permissions to your web server user:
   ```bash
   chown -R www-data:www-data app/code/Webkul/ShoppingList
   ```
   <ExplainCode explanation="This command sets file ownership and permissions for the ShoppingList directory so the web server can execute PHP classes and templates." />

---

## Method 2: Composer Installation (If available)

Run the composer require command to download the module package:
```bash
composer require webkul/shopping-list
```
<ExplainCode explanation="This command automatically fetches the ShoppingList package and places it into the vendor directory structure." />

---

## Post-Installation Commands

Once the module files are in place, run the following standard Magento CLI commands from your terminal:

1. **Enable Module**:
   ```bash
   php bin/magento module:enable Webkul_ShoppingList
   ```
   <ExplainCode explanation="This command registers Webkul_ShoppingList as an active module in app/etc/config.php." />

2. **Run Setup Upgrade**:
   ```bash
   php bin/magento setup:upgrade
   ```
   <ExplainCode explanation="This command executes database schema installation to create necessary shopping list tables in your MySQL/MariaDB database." />

3. **Recompile Code**:
   ```bash
   php bin/magento setup:di:compile
   ```
   <ExplainCode explanation="This command compiles Magento dependency injection classes, plugins, and factories into generated code files." />

4. **Deploy Static Content**:
   ```bash
   php bin/magento setup:static-content:deploy -f
   ```
   <ExplainCode explanation="This command deploys static storefront layout XML, Knockout component scripts, and CSS styling to pub/static/." />

5. **Flush Caches**:
   ```bash
   php bin/magento cache:flush
   ```
   <ExplainCode explanation="This command purges Magento cache storage so new blocks, layout instructions, and configurations take effect immediately." />
