# Frequently Asked Questions (FAQ)

Find answers to common questions about the **Webkul Magento 2 Elasticsearch** extension.

---

### Can I share an Elasticsearch cluster across multiple Magento websites?
Yes! Use the **Index Prefix** setting under **Stores > Configuration > Webkul > Elastic Search Settings > General Settings**. By defining a unique prefix for each website (e.g., `store_us_`, `store_eu_`), index documents are completely isolated on the cluster, preventing data cross-contamination during reindexing.

---

### How does Smart Search Mode differ from manual Query DSL?
- **Smart Search Mode (Yes)**: Automatically optimizes query algorithms, term matching, and safe tokenization for best out-of-the-box relevance.
- **Manual Mode (No)**: Gives administrators complete control over multi-match scoring types (`best_fields`, `most_fields`, `cross_fields`, `phrase`, `phrase_prefix`), boolean operators (`AND`/`OR`), minimum match percentages, and regex replacement filters.

---

### Can I include product descriptions in search?
Yes. When using **Multi-Match Query**, navigate to **Stores > Configuration > Webkul > Elastic Search Settings > Search Settings** and select **description** in the **Select Fields For Multi Search** multiselect box.

---

### Is the module compatible with Hyvä Theme?
Yes! Webkul provides an official Hyvä compatibility companion module: **`webkul/elastic-search-hyva`**.

---

### Does the module support Arabic and RTL languages?
Yes. The module includes full language translation support via CSV (`i18n`), supports Arabic stemmers and elisions, and provides character mapping filters to standardize Eastern Arabic numerals (`٠ => 0, ١ => 1`).

---

### How do I configure search synonyms?
Synonyms are managed directly within Magento 2's native interface at **Marketing > Search Synonyms**. Webkul Elasticsearch automatically fetches these synonym groupings and applies them to search indexing and query expansion.
