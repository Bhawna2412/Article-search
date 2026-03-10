---
title: "PO Templates: Matrix vs Standard Templates"
articleID: 2390
category: "Purchase and Receiving > PO and Stock Receipt 2.0"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-28
---

# PO Templates: Matrix vs Standard Templates

Retail Express supports two different Purchase Order (PO) template types: **Standard (Normal) PO Templates** and **Matrix PO Templates**. These templates are designed to support different product structures and purchasing workflows within the system.

A **Standard PO Template** is suited to products that are ordered as individual items, where each SKU is listed separately and quantities are entered per line. In contrast, a **Matrix PO Template** is designed for Style/Matrix products that have multiple variations, such as size, colour, or other attributes, and allows quantities to be entered using a grid-based layout.

## What Is a Standard (Normal) PO Template?

A **Standard PO Template** is used for products that do **not** have matrix-style variations. Each product appears as a single line item on the purchase order.

![image.png](https://us.v-cdn.net/6038474/uploads/MJ0I6XKB0QVG/image.png)

### When to Use a Standard PO Template

Use a Standard PO Template when:

- Products do not have size, colour, or style variations
- Each SKU is ordered individually
- Products are not created as Style/Matrix products

### Key Characteristics

- One row per product or SKU
- Quantity entered directly against each product
- Suitable for simple product catalogs
- Commonly used for accessories, services, or non-variant products

### Example

| Product | SKU | Quantity |
| --- | --- | --- |
| Gift Card | GC100 | 50 |
| Candle Holder | CH200 | 20 |

## What Is a Matrix PO Template?

A **Matrix PO Template** is designed for **Style/Matrix products** that have multiple variations such as size, colour, or other attributes. Instead of listing each SKU individually, quantities are entered into a **grid (matrix)** representing all product variations.

![image.png](https://us.v-cdn.net/6038474/uploads/RLLMP6HIKQ6Q/image.png)

### When to Use a Matrix PO Template

Use a Matrix PO Template when:

- Products have variations (e.g. Size, Colour)
- Products are created as **Style/Matrix Products**
- Ordering is done by style rather than individual SKUs
- You want faster data entry for large variant ranges

### Key Characteristics

- Products displayed in a grid format
- Rows and columns represent attribute values (e.g. Size × Colour)
- Quantities entered per variation cell
- Automatically generates individual SKU quantities

### Example

| Colour \ Size | S | M | L |
| --- | --- | --- | --- |
| Black | 10 | 15 | 20 |
| White | 8 | 12 | 18 |

## Key Differences: Matrix vs Standard PO Templates

| Feature | Standard PO Template | Matrix PO Template |
| --- | --- | --- |
| Product Type | Single / Non-variant | Style / Matrix products |
| Layout | List-based | Grid (matrix) |
| SKU Entry | One SKU per row | Generated per variation |
| Quantity Entry | Manual per SKU | Per attribute combination |
| Best For | Simple catalogs | Apparel, footwear, variants |
| Speed for Large Orders | Slower | Faster and more efficient |

## How Retail Express Applies PO Template Layouts

The PO template used depends on the **template selected by the user at the time of creating or configuring the Purchase Order**. While product structure (standard vs style/matrix) determines **how products behave within a template**, users must **manually choose the appropriate PO template**.

- **Standard PO Templates** should be selected when ordering non-variant products.
- **Matrix PO Templates** should be selected when ordering Style/Matrix products with size, colour, or other variations.

For Style/Matrix products with a **large number of variants**, the matrix layout will **automatically wrap onto additional lines** once the maximum supported variants per row is reached.

> **Important:** 📋 **Important: **When using a Matrix PO Template, the system supports up to **12 variants per matrix row**. If a style contains more than 12 variants, the matrix will **automatically wrap onto additional rows** for the same style.