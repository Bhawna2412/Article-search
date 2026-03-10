---
title: "Data Concierge (DIY option)"
articleID: 655
category: "Getting Started with Retail Express > Implementation"
knowledgeBase: "Retail Express"
---

# Data Concierge (DIY option)

You can manage data migration independently in Retail Express using self-service tools, helping your retail operations control the implementation timeline and data transfer process. This capability provides structured templates and guidance for importing your own data, which helps reduce implementation costs while maintaining control over how historical information is transferred into the system.

Setting up self-managed data migration enables your retail operations to implement Retail Express at your own pace, helping optimize implementation flexibility and cost management. This helps retail businesses handle data transition efficiently by providing clear guidance and tools for importing products, customers, and other essential business data independently.

Retail Express offers a service to assist customers in getting their data into Retail Express in an easy, stress-free and efficient way.

Using the **Data Concierge DIY Template** you can enter your data onto a spreadsheet, and either send it to us to review, or upload it straight into Retail Express yourself! Everything you need to know about the template is included below for you, and if you want to send us the form, click on the "Send us your data" section to access the upload form.

> **Note:** We might be able to do it all for you! Click to view details on the Data Concierge service to see if we can help.

[Download Template](https://www.retailexpressmedia.com/implementation/console/DataConciergeDIY.xlsm)

## Using the data concierge template

> **Note:** You may be prompted to click Enable Content to enable the automated functionality within the spreadsheet.

The file contains 3 tabs (Customers, Products, Suppliers). Within each tab you can find the following information:

|  |  |
| --- | --- |
| Mandatory fields | Each column has been colour-coded to indicate if the data is mandatory or not. Red - mandatory Green - optional |
| Field name | The data required in that column e.g. Supplier SKU |
| Character limit/type | The number of characters or type of data required by the field e.g. True/False, 255 characters etc. |
| Field description | By hovering over the column name you will can view detailed information about the column. The descriptions are only visible when you have scrolled to the top of the spreadsheet due to the Excel "Freeze Panes" functionality. |

To add your data:

1. **Open **the file
2. Click on the required **tab **e.g. Products
3. Begin adding your data by adding **one entity per row** e.g. one product per row
4. **Save** the file frequently
5. When complete, use the form in **Send us your data **below to forward the file to your Project Manager

> **Note:** If you want to upload the data straight into Retail Express, use the button at the top of the spreadsheet to automatically transform your data into an upload spreadsheet. Follow the instructions on either the Customer, Product or Supplier upload articles for step-by-step information on uploading the each file.

## Data Requirements

During the Data Concierge process there's only 3 pieces of data we work with:

- Products
- Suppliers
- Customers (optional)

Click on the headings below to review the minimum data requirements for each area.

Sending us your Customer data is optional, however if you choose to do so, there's specific data requirements on what we need in order to upload the data for you.

> **Note:** you can send additional information on any of these areas if available; we'll do our best to fit this into the system where possible. Your Retail Express Implementation Manager will be able to discuss this with you once they review your data.

[Customers](https://galaxy.maropost.com/kb/articles/655-data-concierge-diy-option#mandatory-customers)

There is only one mandatory field for a customer, however as a minimum we recommend you provide the following:

|  |  |
| --- | --- |
| **Field** | **Details** |
| First Name* | The first name of the customer |
| Last Name | The last name of the customer |
| Custom Reference | Used if the customer is part of a loyalty group or have a unique reference e.g. X783SL778-2 |
| Email | Required if using an eCommerce integration, the email address is typically used as the customer's login |
| ReceiveEmail | If the customer has subscribed to any newsletter mailing lists or any other communication channels |

* Mandatory field

[Products](https://galaxy.maropost.com/kb/articles/655-data-concierge-diy-option#mandatory-product)

As a minimum we need the following information about products to be able to import these into Retail Express:

|  |  |
| --- | --- |
| **Field** | **Details** |
| Product Name | Used for the "Short Description" in Retail Express, this will appear in most places around the system and within POS |
| Supplier SKU | Commonly referred to as SKU or Barcode. This is the unique code for each individual product. |
| Product Type | The category of the product e.g. Clothing, Clothing - Mens |
| Supplier | The supplier of the product, can be either a full name or unique code |
| Buy Price (ex. tax) | Commonly referred to as the Cost Price; how much you purchase the product for from your supplier |
| POS Price (inc. tax) | The price you sell your product to your customers |

Any other additional information is welcome for import, however without any of the above fields your products won't be able to loaded into the system.

[Suppliers](https://galaxy.maropost.com/kb/articles/655-data-concierge-diy-option#mandatory-suppliers)

There is only one mandatory field for a Supplier, however as a minimum we recommend you provide the following:

|  |  |
| --- | --- |
| **Field** | **Details** |
| Supplier | The name of the Supplier |
| Supplier Code | A code used to identify the supplier easily (typically used in Filters within the system) |
| Contact Phone | The phone number for the supplier |
| Contact Email | The email address used to contact the supplier |

## Data Import Examples

Below are some examples of how data can be corrected into a more suitable format.

[Mismatched/inconsistent data format](https://galaxy.maropost.com/kb/articles/655-data-concierge-diy-option#mismatched-format)

Retail Express has two default size and colour attribute fields making it easy to identify similar products from one another, for example two shirts of the same style but one that's black and one that's white.

> **Note:** As well as the other default attributes (Season, Brand) you can also create custom attributes within the system for any other information you want to track. See the Product Attributes article for more information.

A common situation is to have the colour and/or as part of the product name.

**Correct import**

**Product example:** "Stealth Shirt - Black - 10"

In the example the format of the product name is Name - Colour - Size. This makes it easy to extract the information and separate it into three different fields for import, since each attribute is separated by a dash.

![datascenario-coloursizeformatcorrect-imported (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powTFEAY.jpg)
**Incorrect import**

**Product example:** "Stealth Shirt - 10 - Black" and "Stealth Shirt - Red - 10"

If the product names aren't consistent it can potentially result in the data being imported incorrectly (noting the different order of the size and colour attributes in the name of the products in the example):

![datascenario-coloursizeformatcorrect-notimported (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000powTKEAY.jpg)

> **Note:** Our Implementation team reviews the data prior to import and will do their best to identify any issues, however we cannot guarantee the accuracy. You should review this data carefully before import if uploading the data yourself.

**Recommendations:**

- Review your data before sending it to your Retail Express Implementation Manager
- Update the data to be consistent
- Ideally separate the data into Size/Colour columns prior to sending it to your Implementation Manager

[Import file missing mandatory information](https://galaxy.maropost.com/kb/articles/655-data-concierge-diy-option#mandatory-missing)

If the import file is missing mandatory data we won't be able to upload it into your system. Instead, your Implementation Manager will contact you and ask you to complete the information. This will cost valuable time and mean that you'll have to work on the data twice.

> **Note:** Mandatory fields are highlighted on the spreadsheet in red.

## Send us your data

Use the form below to send us your data; you can send a maximum of 5 files at one time.

> **Important:** PDF files will not be accepted.