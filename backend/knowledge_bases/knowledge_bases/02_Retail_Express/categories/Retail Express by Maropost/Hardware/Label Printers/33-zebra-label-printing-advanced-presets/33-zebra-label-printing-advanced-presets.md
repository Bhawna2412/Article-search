---
title: "Zebra Label Printing - Advanced Presets"
articleID: 33
category: "Hardware > Label Printers"
knowledgeBase: "Retail Express"
---

# Zebra Label Printing - Advanced Presets

You can process customer returns and refunds efficiently in **Retail Express** while maintaining accurate inventory records and protecting profit margins. This capability helps maintain customer satisfaction through professional returns handling while gathering valuable data about product performance and ensuring compliance with your return policies across all retail locations.

Setting up returns processing involves configuring return reason codes, establishing refund methods, defining return policies, and training staff on proper procedures. When properly managed, efficient returns processing helps ensure customer satisfaction, maintain accurate inventory levels, and provide insights into product quality issues that can improve future purchasing decisions.

The **Advanced Presets** feature in Zebra Label Printing allows users to create highly customized label templates using raw EPL (Eltron Programming Language) or ZPL (Zebra Programming Language) code. Unlike **Standard Presets**, which provide a drag-and-drop UI, **Advanced Presets** require users to manually enter formatting code.

This feature is designed for users who are familiar with EPL/ZPL code. If you are new to label printing, we recommend using **Standard Presets** before working with advanced configurations.

To create an **Advanced Preset**, follow these steps:

1. Navigate to **Settings > Label Printing > Zebra Label Presets**.
2. Click on **Create New Advanced**.
3. Enter a **Preset Name** and configure the required settings.
4. Input your **raw EPL/ZPL code** into the provided text entry box.
5. Use the placeholders listed below to dynamically insert product details.
6. Click **Save** to store the preset.

## Preset Fields and Description

| Field Name   (From Standard Presets) | Placeholder for   Advanced Presets | Description |
| --- | --- | --- |
| Misc1 | `[{misc1}]` | Miscellaneous field 1 |
| Misc2 | [{`misc2`}] | Miscellaneous field 2 |
| Misc3 | [{`misc3`}] | Miscellaneous field 3 |
| Product ID | [{`productid`}] | Unique identifier for the product |
| Supplier SKU | [{`suppliersku`}] | Supplier's stock keeping unit |
| Manufacturer Code | [{`mancode`}] | Manufacturer's code for the product |
| Sell Price | [{`sellprice`}] | Regular selling price of the product |
| SellEx Price | [{`sellexprice`}] | Selling price excluding tax/VAT |
| RRP Price | [{`rrpprice`}] | Recommended retail price |
| Description | [{`description`}] | Product description |
| Product Type | [{`producttype`}] | Category or type of product |
| Product Brand | [{`productbrand`}] | Brand name of the product |
| Product Size (eg, S/M/L/XL) | [{`productsize`}] | Size of the product (e.g., S, M, L, XL, etc.) |
| Product Colour | [{`productcolour`}] | Color of the product |
| Product Season | [{`productseason`}] | Season the product is associated with |
| Product Attribute: Width | [{`productattribute_Width`}] | Width dimension of the product (or other attribute) |
| Custom 1 | [{`custom1`}] | User-defined custom field 1 |
| Custom 2 | [{`custom2`}] | User-defined custom field 2 |
| Custom 3 | [{`custom3`}] | User-defined custom field 3 |
| Bin | [{`bin`}] | Storage location or bin number |
| Promotional Expiry Date | [{`discountpriceexpiry`}] | Expiry date of a promotional price |
| Promotional Price | [{`promotionalprice`}] | Discounted or promotional price |
| Printed Date | [{`printeddate`}] | Date the label was printed |

**Important Note**:

- **Advanced Label Presets** are intended for advanced users only.
- Retail Express cannot assist with designing or adjusting the layouts of advanced templates.
- It is recommended to **design templates externally** using EPL/ZPL label design solutions.
- **Enter your desired EPL/ZPL Code** in the relevant fields.

## Example EPL/ZPL Code Using Placeholders

These examples demonstrate how to reference placeholders in EPL/ZPL format. Users can modify the positioning, font size, and additional fields as needed. You will need a ZPL compatible printer in order to use ZPL code from advanced templates.

Here's a basic example of an **EPL/ZPL template** incorporating placeholders:

**EPL Example:**

N

A50,50,0,3,1,1,N,Product: [{productid}]

A50,90,0,3,1,1,N,Price: [{sellprice}]

A50,130,0,3,1,1,N,Brand:[{productbrand}]

P1

**ZPL Example:**

^XA

^FO50,50^A0,30,30^FDProduct:[{description}]

^FN1^FS

^FO50,90^A0,30,30^FDPrice:[{sellprice}]

^FN2^FS

^FO50,130^A0,30,30^FDBrand:[{productbrand}]

^FN3^FS

^XZ