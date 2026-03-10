---
title: "Product Upload Validation Errors"
articleID: 1326
knowledgeBase: "Help Articles"
lastUpdated: 2023-05-11
---

# Product Upload Validation Errors

# Product Upload Validation Errors

When using the Product Mass Upload, you may encounter validation errors if there's a problem with your data. Below we've covered the most common errors and how to resolve them.

This article does not apply to the Legacy Product Mass Upload

|  |  |  |
| --- | --- | --- |
| **Error** | **Details** | **Resolution** |
| File Type not allowed | The Mass Upload requires a .CSV format | Ensure you've saved your file in CSV format |
| Invalid File Format | This error occurs if the spreadsheet has been saved as a CSV but uses a layout that's not compatible with Retail Express e.g. the legacy Mass Download template. | Download a fresh copy of the Customer Mass Download Template, copy your data into the new file and retry the upload. |
| (Product Type/Attribute) with name "XYZ" was not found  Product Type Size Colour Season Brand | This error is caused when you have invalid Product Type or Attribute names in your file i.e. they don't exist in Retail Express. | Select from the existing values or create a new Product Type or Attribute |
| (Product Setting) not found  Supplier MaxDiscountRule ID Replenishment Method | The Product Setting you have entered on the file doesn't exist. | Select from one of the existing values.  If you want to create a new value, you will need to create it within Retail Express and then retry your upload (you will not be able to create the entry from within the Mass Upload area). |
| Duplicate Product IDs | The Product ID is a unique identifying code created by Retail Express when a product is created. You cannot have more than one product with the same Product ID. | Select which row is the correct one and click "Keep This Row". All other rows will be removed and will not be uploaded. |
| Duplicate Supplier SKUs | The Supplier SKU is a unique value used to identify each product, typically a barcode. You cannot have more than one product with the same Supplier SKU | Select which row is the correct one and click "Keep This Row". All other rows will be removed and will not be uploaded. |
| Invalid Values | The data entered is not compatible with Retail Express and will need to be amended e.g. Product ID doesn't exist, the Buy Price must be greater than $0, or Length must be a decimal value. | Edit the value in the Mass Upload page to the correct value. |
| Field Type Validations | The data entered for that field does not match the data format used by Retail Express. | Correct the data to the expected format. |