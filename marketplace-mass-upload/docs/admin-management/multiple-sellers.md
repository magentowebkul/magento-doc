# Import Products for Multiple Sellers

Store administrators can import products for multiple sellers simultaneously using a single master file mapped with seller IDs.

---

## Multi-Seller Import Workflow

1. Navigate to **Marketplace Management > Mass Upload Manager**.
2. Upload the master data file (CSV/XLS/XML) and images ZIP archive.
3. Click **Import product for multiple Seller(s)**.

![Import Product for Multiple Sellers Button](/images/image-50.png)

---

## CSV File Seller Assignment

In the CSV data file, include a `seller_id` column containing the numerical ID of the respective seller for each product row.

![CSV File layout with seller_id column](/images/image-51.png)

---

## Running Multi-Seller Profile

1. After clicking the button, you will be redirected to the **Manage Mass Upload** screen.

![Manage Mass Upload Multi-Seller Configuration](/images/image-52.png)

2. Select the target **Store View**.
3. Select the **Seller Profile**.
4. Click the **Run Profile** tab to begin batch execution.

![Multi-Seller Run Profile Execution Window](/images/image-53.png)

The system parses each row, creates the product, and links it directly to the designated seller account based on the provided `seller_id`.
