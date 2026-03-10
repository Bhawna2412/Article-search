---
title: "Product Detail Log Report"
articleID: 295
category: "Reporting > Stock Related Reports"
knowledgeBase: "Retail Express"
---

# Product Detail Log Report

You can track changes to product master data by accessing the Product Detail Log Report, which records modifications to product information including pricing, descriptions, and attributes. This audit trail helps retail operators maintain accountability for product data changes, investigate pricing discrepancies, and ensure product information accuracy across the retail operations system.

Using the Product Detail Log Report helps retail operators monitor product data integrity, identify who made specific product changes, and maintain proper controls over critical product information like pricing and cost data.

Retail Express has introduced Product Detail Log Report 1.0-a robust feature that enhances transparency and control in product management. Easily track changes within a specified period, gaining valuable insights into the evolution of your product data. With this report, Users can review alterations to product information within a specified date range using this report

### **Getting Started**:

You can access the **Product Detail Log Report **by navigating to **Reports > Stock Reports > Product Details Log** in the Back Office.

Before accessing the Report, make sure the user has access to the 'Product Details' Report. You can Enable Product Details Log Report Staff >> Profile Security

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240418at41306PM.05T5g00001IWBZIEA5.jpg)
Our report structure encompasses two sections: the current product details captured at the time of report generation, followed by the logged values. This configuration enables users to perform a comparative analysis between the most recent product information and historical data, facilitating a comprehensive review of the products under consideration.

Users will have access to 3 checkboxes for search criteria. They can choose the fields based on their requirement

| **Categories** | **Fields Included** |
| --- | --- |
| Show Cost Price Fields | Supplier Buy Before, Supplier Buy After, Buy Price Before, Buy Price After, Direct Costs Before, Direct Costs After |
| Show Sell Price Fields | POS Price Before, POS Price After, Discount Price Before, Discount Price After, RRP Before, RRP After, Web Price Before, Web Price After |
| Show Product Detail Fields | Product Type Before, Product Type After, Disabled Before, Disabled After |

On the filter page, set your desired date range (defaults to the current date) and define any other fields you require. The system has by default selected all 3 checkboxes, you can unselect boxes as per your requirement.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240418at41409PM.05T5g00001IWF96EAH.jpg)
Users can export data in XLSX and CSV file formats, providing users with flexibility in choosing the preferred format for their exported data.

## Understanding the Report:

- **Log Date / Time**: Timestamp of the logged entry.
- **Product ID**: Unique identifier for the product.
- **Supplier SKU**: Stock-keeping unit provided by the supplier.
- **Short Description**: Brief description of the product.
- **Entry Type**: Indicates the type of entry (e.g., addition, modification).
- **Origin**: Source or origin of the logged entry.
- **User**: The user responsible for the entry.

(At present, the tracking of origin and user data varies across different methods of product creation/editing. Depending on the source, if the details are recorded, they will be displayed; otherwise, they will appear as "Not Tracked" or remain blank.)

- **Comment**: Additional notes or remarks associated with the entry.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240418at41818PM1.05T5g00001IWP92EAH.jpg)

### Cost Pricing Fields

- **Supplier Buy Before**: Previous purchase price from the supplier
- **Supplier Buy After**: Updated purchase price from the supplier
- **Buy Price Before**: The Buy Price Ex Tax
- **Buy Price After**: Updated retail purchase price
- **Direct Costs Before**: Previous direct costs associated with the product
- **Direct Costs After**: Updated direct costs associated with the product

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240418at42103PM1.05T5g00001IWPMbEAP.jpg)

### Sell Price Fields

- **POS Price Before**: Previous point-of-sale price.
- **POS Price After**: Updated point-of-sale price.
- **Discount Price Before**: Previous discount price offered.
- **Discount Price After**: Updated discount price offered.
- **RRP Before**: Previous recommended retail price.
- **RRP After**: Updated recommended retail price.
- **Web Price Before**: Previous web price of the product.
- **Web Price After**: Updated web price of the product.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240418at42352PM.05T5g00001IWPu8EAH.jpg)

### Product Detail Fields:

- **Product Type Before**: Previous product type classification.
- **Product Type After**: Updated product type classification.
- **Disabled Before**: Previous status of product availability (enabled/disabled) before the change.
- **Disabled After**: Updated status of product availability (enabled/disabled) after the change.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240418at42505PM.05T5g00001IWNMaEAP.jpg)
[▶ Embedded Video](https://player.vimeo.com/video/936224261?badge=0&autopause=0&player_id=0&app_id=58479&wmode=opaque)