# Design Workflow Overview

The **Magento 2 Canva Connector** delivers an integrated design and publishing loop between Magento Admin and Canva.

---

## End-to-End Sequence

```mermaid
sequenceDiagram
    autonumber
    actor Admin as Store Admin / Designer
    participant MagGrid as Magento Catalog Grid
    participant CanvaAPI as Canva Connect REST API
    participant CanvaEditor as Canva Design Editor
    participant CanvaSide as Magento 2 Connect Sidebar
    participant MagMedia as Magento Media Storage

    Admin->>MagGrid: 1. Click "Design with Canva" on product row
    MagGrid->>CanvaAPI: 2. Upload product image & initialize design
    CanvaAPI-->>Admin: 3. Redirect to Canva Editor with design canvas
    Admin->>CanvaSide: 4. Open "Magento 2 Connect" sidebar in editor
    CanvaSide-->>Admin: 5. Displays active product, price, SKU & variations
    Admin->>CanvaSide: 6. Insert title, price, description or variation elements
    Admin->>CanvaEditor: 7. Customize layouts, graphics, branding and overlays
    Admin->>CanvaSide: 8. Click "Save Design to Magento 2" -> Click Export
    CanvaSide->>MagMedia: 9. POST /rest/V1/canva/export/save (Base64 data)
    MagMedia-->>CanvaSide: 10. Saved successfully & media roles updated
    CanvaSide-->>Admin: 11. Success toast notification displayed
    Admin->>CanvaSide: 12. Click "Return to magento 2 connect"
    CanvaSide-->>MagGrid: 13. Redirects back to Magento Admin product edit screen
```

---

## Workflow Stages

1. **[Launch from Product Grid](./design-with-canva.md)**: Trigger design generation directly from Magento Admin catalog grid.
2. **[Canva In-Editor Side Panel](./editor-sidebar.md)**: Browse catalog data, select child product variations, and insert formatted text elements onto the canvas.
3. **[Export & Save to Magento](./export-save.md)**: Export high-resolution artwork from Canva straight into the Magento product gallery and automatically update product roles.
