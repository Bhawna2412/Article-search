---
title: "Create and Edit Products"
articleID: 453
category: "Inventory > Managing products"
knowledgeBase: "Retail Express"
lastUpdated: 2026-01-20
---

# Create and Edit Products

You can build and maintain your product catalog efficiently in **Retail Express** through comprehensive product creation and editing capabilities, which support detailed product configuration including pricing, inventory tracking, and supplier relationships. This foundational product management functionality helps retail operators establish accurate product records that drive reliable POS operations, inventory management, and reporting across Australian retail operations.

Product creation and editing in **Retail Express** enables retail operators to configure essential product attributes, manage pricing strategies, and maintain accurate product data that supports effective retail operations. Understanding mandatory fields and product configuration options helps ensure your retail operations establish reliable product records supporting accurate transaction processing, inventory tracking, and business intelligence across your retail operations.

Products are the foundation of Retail Express. You can create products directly within Retail Express,  as well as use the [Mass Upload](https://galaxy.maropost.com/s/article/Using-Mass-Upload-to-create-products) process to create products in bulk. You can also [duplicate](https://galaxy.maropost.com/s/article/Duplicating-Products) an existing product if required.

The **Edit Product **window contains an extensive amount of information, as well as features beyond the standard editing of a product. For example, you can print labels, find Purchase Orders or even view a list of invoices for Allocated stock.

## Create a Product

To create a product individually:

1. Navigate to **Inventory > Create a Product**
  ![Screenshot 2026-01-20 at 1.32.08 PM.png](https://us.v-cdn.net/6038474/uploads/U7PBR0AN98KW/screenshot-2026-01-20-at-1-32-08-e2-80-afpm.png)
2. Fields with a red asterisk (*) and a red line are mandatory fields and will need to be completed before the product can be entered.
  ![Screenshot 2026-01-20 at 1.23.46 PM.png](https://us.v-cdn.net/6038474/uploads/EFN9I7ES35ZC/screenshot-2026-01-20-at-1-23-46-e2-80-afpm.png)
3. Click **Save Changes**
  ![Screenshot 2026-01-20 at 1.26.32 PM.png](https://us.v-cdn.net/6038474/uploads/BHLEC8VSRRTS/screenshot-2026-01-20-at-1-26-32-e2-80-afpm.png)
4. The page will refresh; refer to the top of the page for the new Product ID code (the Retail Express system-generated identifier)
  ![Screenshot 2026-01-20 at 1.26.59 PM.png](https://us.v-cdn.net/6038474/uploads/ZE91VB3LD3R1/screenshot-2026-01-20-at-1-26-59-e2-80-afpm.png)

## Edit a product

To edit a product individually:

1. Go to **Inventory > Product Search**
  ![Screenshot 2026-01-20 at 1.35.41 PM.png](https://us.v-cdn.net/6038474/uploads/NN0NEE0HY43S/screenshot-2026-01-20-at-1-35-41-e2-80-afpm.png)
2. Enter Product Details/Search Criteria
  ![Screenshot 2026-01-20 at 1.37.21 PM.png](https://us.v-cdn.net/6038474/uploads/CH14QKFN8TXS/screenshot-2026-01-20-at-1-37-21-e2-80-afpm.png)
3. Click on the Product ID or Pencil Icon to open Product Details Page
  ![Screenshot 2026-01-20 at 1.39.01 PM.png](https://us.v-cdn.net/6038474/uploads/YZK59Q7BQW30/screenshot-2026-01-20-at-1-39-01-e2-80-afpm.png)
4. Click on **Edit Details**
  ![Screenshot 2026-01-20 at 1.40.20 PM.png](https://us.v-cdn.net/6038474/uploads/F3NT6X6242GK/screenshot-2026-01-20-at-1-40-20-e2-80-afpm.png)
5. Modify the required fields (see below for a detailed break down)
6. Click **Save Changes**
  ![Screenshot 2026-01-20 at 1.41.48 PM.png](https://us.v-cdn.net/6038474/uploads/B52BCTA2FCNZ/screenshot-2026-01-20-at-1-41-48-e2-80-afpm.png)

Products can be edited in bulk using the [Mass Download/Upload](https://galaxy.maropost.com/s/article/Using-Mass-Upload-to-create-products) feature.

> **Note:** Mandatory fields are highlighted with a red line on the left; prices set manually on the Pricing tab are shaded in pink.

## Serial Number Capture for Products

Retail Express supports **serial number capture at the product level**, allowing retailers to track individual items during the sales and fulfilment process. 

When enabled, serial numbers can be recorded for applicable products at POS and during fulfilment, helping improve traceability, warranty tracking, and inventory accuracy.

![Untitled design (14).jpg](https://us.v-cdn.net/6038474/uploads/N8QG8JT5QCPQ/untitled-design-2814-29.jpg)
When creating or editing a product, one of the following serial number options can be applied:

- **Required** — A serial number must be recorded before the product can be fulfilled or the sale finalised.
- **Optional** — A serial number can be recorded, but it is not mandatory to complete the sale.
- **Disabled** — Serial number capture is not used for the product.

By default, **all existing products** and **newly created products** are set to **Disabled** unless the serial number option is explicitly updated.

> **Note:** **For more details on serial number capture, **[**click here**](https://galaxy.maropost.com/kb/articles/2373-serial-number-recording-at-pos?)**.**

## Mandatory fields

There are 6 mandatory fields to create a product:

|  |  |
| --- | --- |
| **Field** | **Details** |
| Short Description* | The basic product description used at the POS and appears on most reports and transactions e.g. Customer Statements, Invoices, Receipts and Purchase Orders etc. If using a web store integration, the Short Description will typically form the product name online unless configured otherwise. |
| Supplier SKU* | The unique "Master" code used for products, usually the scannable product barcode or unique code provided by the supplier. If you have more than one barcode for your product you can enter additional barcodes on the [Barcodes](https://galaxy.maropost.com/s/article/Using-multiple-product-barcodes) tab This field can be any length of characters, however, for compatibility with barcode scanners should only contain certain characters. Using lower case letters, spaces or any other symbols can cause issues in Retail Express.   > **Note:** [Click here](https://galaxy.maropost.com/s/article/Valid-characters-for-Retail-Express-fields) to view a list of valid characters within Retail Express. |
| Product Type | Groups used to categorise your inventory, used extensively for reporting within Retail Express. Product Types can be created as required, for more information refer to the [Product Types](https://galaxy.maropost.com/s/article/Using-Product-Types) article. |
| Supplier | The default supplier for the product. The product can still be ordered from any supplier in a Purchase Order. New suppliers can be created as required, for more information see the [Suppliers](https://galaxy.maropost.com/s/article/Managing-Suppliers) article. |
| Weighted Average Buy Price (Ex Tax) | The buy price (excluding tax and direct costs) of the product in your local currency i.e. if the product is $100 USD and the Australian Dollar was at $1.11 per USD this would be $111.26.  > **Note:** For a detailed explanation of the differences between the Supplier Buy Ex and the Weighted Avg Buy Price refer to [this](https://galaxy.maropost.com/s/article/Understanding-Supplier-Buy-and-Average-Weighted-Buy-Price) article. |
| POS Price (Inc Tax) | The Global price for the product. This can either be calculated using the Markup Target % field or by entering a fixed value directly into the field. |

Click here for [detailed information](https://galaxy.maropost.com/s/article/1Product-Fields) on each of the product fields.

## Frequently Asked Questions

[How can I find what invoices/transfers/orders my stock is allocated to?](#faq-allocated)

To view the transaction information for allocated stock:

1. Open the Edit Product window
2. Click the **Inventory **tab
3. Click the underlined **Allocated** qty
4. The **Allocated Stock **window will open displaying a list of orders/ITOs etc (including reference numbers, quantities and Outlets)

## Related Articles

**Inventory Management:**

- [Transfer Variance Manager](https://galaxy.maropost.com/kb/articles/article-445-transfer-variance-manager)
- [Receive A Dispatched Transfer](https://galaxy.maropost.com/kb/articles/article-446-receive-a-dispatched-transfer)

**Pricing & Promotions:**

- [How To Apply A Storewide Discount To All Outlets](https://galaxy.maropost.com/kb/articles/article-457-how-to-apply-a-storewide-discount-to-all-outlets)
- [Manage Customer Discount Groups](https://galaxy.maropost.com/kb/articles/article-547-manage-customer-discount-groups)

**Product Catalog:**

- [Create And Edit Packages](https://galaxy.maropost.com/kb/articles/article-454-create-and-edit-packages)
- [Duplicating Products](https://galaxy.maropost.com/kb/articles/article-455-duplicating-products)