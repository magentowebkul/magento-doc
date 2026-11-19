# Installation

Installing the **Magento 2 Google Address Auto Complete (Webkul_GoogleAddressAutoComplete)** extension is quick and simple.

---

## Installation Steps

### 1. Download Module
Log in to your Webkul account, go to **My Account > My Purchased Products**, find **Magento 2 Google Address Auto Complete**, and download the extension ZIP file to your computer.

---

### 2. Upload Folder to Server
Extract the downloaded ZIP archive. You will see an `app` folder inside. 

Upload the contents to your Magento 2 root directory so the files are placed under:

```text:no-line-numbers
app/code/Webkul/GoogleAddressAutoComplete/
```
<ExplainCode explanation="Specifies the target directory structure inside Magento's app/code directory where the Webkul Google Address Auto Complete extension files must reside." />

#### Directory Path Breakdown:
* **`app/code/`**: Magento 2's core directory designated for custom and third-party extensions.
* **`Webkul/`**: The vendor namespace representing Webkul as the extension developer.
* **`GoogleAddressAutoComplete/`**: The module folder containing all core address autocomplete logic, Google API integration, component mapping, and admin settings.

![Module Installation Directory](/images/module_installation.webp)

If your store uses the **Hyvä Theme**, also upload the companion package to:

```text:no-line-numbers
app/code/Webkul/GoogleAddressAutoCompleteHyva/
```
<ExplainCode explanation="Specifies the directory path inside Magento's app/code directory for the Webkul Google Address Auto Complete Hyvä Theme compatibility package." />

* **`GoogleAddressAutoCompleteHyva/`**: Contains the companion Hyvä Theme templates and Alpine.js / Magewire components for seamless Hyvä storefront and checkout integration.

---

### 3. Run Commands
Run the following standard Magento commands in your terminal:

```bash:no-line-numbers
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento indexer:reindex
php bin/magento cache:flush
```
<ExplainCode explanation="Executes standard Magento deployment commands: registers the extension, runs database schema upgrades, compiles dependency injection, deploys static view assets, reindexes data, and flushes application cache." />

#### Explanation of Each Command:

* **`php bin/magento setup:upgrade`**
  * **What it does:** Registers the newly added extension with your Magento store and updates any necessary database structures.
  * **Why it is needed:** Without this command, Magento will not recognize that a new module has been added to your store.

* **`php bin/magento setup:di:compile`**
  * **What it does:** Runs Dependency Injection (DI) compilation. It pre-generates and compiles all code classes and configurations into optimized files.
  * **Why it is needed:** Ensures that all module components work together smoothly without errors and keeps your store running fast.

* **`php bin/magento setup:static-content:deploy -f`**
  * **What it does:** Generates and deploys storefront and admin assets, including JavaScript files, CSS styling, HTML templates, and icons.
  * **Why it is needed:** Ensures that all user interface elements (such as address suggestion dropdowns and styling) look and function properly in the browser. The `-f` flag forces deployment across all areas and themes.

* **`php bin/magento indexer:reindex`**
  * **What it does:** Rebuilds Magento's data search indexes across store products, categories, and customer records.
  * **Why it is needed:** Keeps your store's data synchronized so searching, address lookups, and checkout operations run smoothly.

* **`php bin/magento cache:flush`**
  * **What it does:** Clears out all cached pages, configurations, and layout data across your Magento store.
  * **Why it is needed:** Ensures that the newly installed extension features and any updated settings take effect immediately rather than loading outdated cached data.

---

## Language Translation

The extension supports multi-language stores as well as RTL (Right-to-Left) languages like Arabic:

1. Navigate to:
   ```text:no-line-numbers
   app/code/Webkul/GoogleAddressAutoComplete/i18n/
   ```
   <ExplainCode explanation="Navigates to the module's internationalization (i18n) directory where translation CSV files are stored." />

   > **What does `i18n` mean?** `i18n` stands for **Internationalization** (representing the 18 letters between the letter "i" and the letter "n"). This folder contains all language translation dictionaries.

   ![i18n Directory](/images/i18n_folder.webp)

2. Copy `en_US.csv` and rename it to your target language code (for example, `ar_SA.csv` for Arabic, or `fr_FR.csv` for French).
3. Open the CSV file and translate the text on the right side of the comma:

   ```csv:no-line-numbers
   "Enable Module","تفعيل الوحدة"
   "Google Map Api Key","مفتاح Google Map API"
   "Street Address","عنوان الشارع"
   "City","المدينة"
   "State/Province","الولاية / المقاطعة"
   "Zip/Postal Code","الرمز البريدي"
   "Country","البلد"
   ```

   > **How the CSV translation file works:** Each row contains two phrases enclosed in quotation marks and separated by a comma. The phrase on the **left** is the original English phrase used in the module, and the phrase on the **right** is the translation that will be displayed to your shoppers. Only modify the text on the right side of the comma.

   ![Translate CSV File](/images/translation_csv.webp)

4. Save the file and flush your Magento cache.

---

## Flushing Cache via Admin

You can easily flush the cache directly inside the Magento Admin Panel:

1. Log in to your Magento Admin Panel.
2. Go to **System > Tools > Cache Management**.
3. Click the orange **Flush Magento Cache** button in the top right.

![Flush Cache](/images/flush-cache.webp)

::: tip Next Step
Proceed to [Google Maps API Setup](/google-api-setup.html) to obtain your Google API key.
:::
