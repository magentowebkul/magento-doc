# Error Detection & Validation

To prevent catalog corruption and broken product data, the **Magento 2 Multi Vendor Mass Upload** module includes built-in validation mechanisms before committing products to the database.

---

## Validation & Error Reporting

If an import file contains syntax errors, missing mandatory headers, invalid SKU references, or corrupt image filenames:

1. The profiler automatically halts the execution process immediately.
2. No invalid or partial product rows are written to the store database.
3. Detailed line-by-line error notifications are rendered in the profiler output log.

![Profiler Validation Error Log Screen](/images/image-35.png)

---

## Common Import Errors & Solutions

| Error Message | Cause | Resolution |
| --- | --- | --- |
| `SKU Already Exists` | SKU matches an existing product in another seller catalog. | Ensure SKUs are unique across all marketplace products. |
| `Attribute Set Not Found` | File header doesn't match selected attribute set. | Select the exact attribute set or use Dataflow Profile mapping. |
| `Image file does not exist in zip` | Image filename referenced in CSV is missing from the ZIP container. | Verify image file names and extensions inside the ZIP folder. |
| `Invalid Category Path` | Category syntax is incorrectly formatted. | Use `>>` for parent-child paths and `,` between multiple paths. |
