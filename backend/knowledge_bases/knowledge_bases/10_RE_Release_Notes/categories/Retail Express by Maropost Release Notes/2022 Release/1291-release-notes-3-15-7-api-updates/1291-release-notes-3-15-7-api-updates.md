---
title: "Release Notes 3.15.7 - API Updates"
articleID: 1291
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-05-11
---

# Release Notes 3.15.7 - API Updates

# Release Notes 3.15.7 - API Updates

This release will become available to all users by the 12th of July 2022.

## New Updates

In this release, we've made the following updates to the Retail Express REST API. For more information, please refer to our [Developer Portal](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F).

### GET /customers

* Added a new **Filter By** parameter to search and filter customers e.g. retrieve all customers associated with a specific email address, or phone number
* Added **Export to Web** and **Sales Channels**

### GET /orders/{id}

* Added new parameters, **include\_items, include\_fulfilments** and **include\_payments**to allow for child order data to be included in the response (order items, order fulfilment or order payments).

### GET /products

* Added a new **Search** query parameter to make it easier to restrict the results to products where the below fields contain the passed search text:
  + Product ID
  + Supplier SKU
  + Product Barcodes
  + Short Description
  + Product Type
  + Product Attributes
  + Custom 1, Custom 2, Custom 3
* Added a new **include\_inventory** parameter to retrieve product inventory levels instead of having to make a separate call i.e. Available Stock and On Order quantities for specific products  

  For a full view of inventory levels, we recommend using the GET /inventory method
* Added a new **filter\_by** parameter to query products using a combination of fields and operators to refine returned results. Filterable fields include:
  + ID
  + supplier\_sku
  + supplier\_sku2
  + manufacturer\_sku
  + short\_description
  + product\_type
  + supplier
  + supplier\_code
  + supplier\_buy\_ex
  + size
  + colour
  + brand
  + season
  + core\_product
  + disabled
  + product attributes (brand etc)  

    View the [Developer Portal](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdeveloper.retailexpress.com.au%2F) for a full list of fields and operators, including sample syntax.

### GET /inventory

* Added a new **Modified Since** parameter to query inventory based on the date the product was last updated or modified. Allows results to be limited to only products with inventory changes since the requested date/time.
* A new **Modified On** date has been added to the response to provide visibility of the date/time the inventory data was last updated or modified.

### POST /customertypes

* You can now create [Customer Types](https://galaxy.maropost.com/s/article/Customer-Types) via the API, allowing for greater segmentation of customers for reporting.

### GET /supplierreturns

* Added the **Created By**and **Modified By**parameters as both a filter and in the search results to view the user that created and last modified both Supplier Returns and Supplier Return Items

### GET /creditnotes

* Added the **Created By**and **Modified By**parameters as both a filter and in the search results to view the user that created and last modified both Credit Notes and Credit Note Items