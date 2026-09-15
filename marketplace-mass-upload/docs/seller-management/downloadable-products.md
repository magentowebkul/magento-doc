# Uploading Downloadable Products

Downloadable products (such as eBooks, software, music, or video files) require downloadable digital link files and optional sample previews.

---

## Upload Setup & Zip Packaging

::: tip File Structure Rule
Each downloadable file must be compressed into its own individual ZIP archive. All individual file ZIPs are then combined into one master **Link Files ZIP** container before uploading.
:::

1. In the seller panel, go to **Mass Upload Product**.
2. Check the **Is Downloadable** checkbox.
3. Attach your data file (CSV/XLS/XML) and images ZIP file.
4. Browse and select your **Upload link files zip** archive.
5. (Optional) Check **Is Links have samples** and **Is Samples Available** to attach sample file ZIP archives.

![Downloadable Product Upload Fields](/images/image-27.png)

6. Click **Upload Profile**.
7. Select the profile, check the **Downloadable Product Mass Upload** checkbox, and click **Run Profile**.

![Run Downloadable Profile Action](/images/image-28.png)

---

## Downloadable CSV File Layout

Specify link details in the file columns: `downloadable_link_title`, `downloadable_link_type`, `downloadable_link_file`, `downloadable_link_url`, `downloadable_link_price`, `downloadable_sample_file`, etc.

![Downloadable CSV Structure - Link Details](/images/image-29.png)
![Downloadable CSV Structure - Samples & Pricing](/images/image-30.png)
![Downloadable CSV Structure - Additional Columns Part 1](/images/image-31.png)
![Downloadable CSV Structure - Additional Columns Part 2](/images/image-32.png)

When execution finishes, a success confirmation is displayed:

![Downloadable Upload Success Banner](/images/image-33.png)

Check the uploaded downloadable items in **My Product List**:

![Uploaded Downloadable Products Listing](/images/image-34.png)
