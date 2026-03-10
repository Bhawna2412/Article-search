---
title: "Release Notes 3.15.12 - POS and Back Office"
articleID: 958
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2024-04-16
---

# Release Notes 3.15.12 - POS and Back Office

This release will be available to all customers by 22nd November 2022.

## Improvements

### Customer Manager

We've made some improvements to the **Customer Manager**:

![customer-manager.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppd5bEAA.jpg)

* Search both the **Mobile and Phone numbers** from a single field - the search will cover both fields. Spaces will be ignored, so the search will return the right customers regardless of any inconsistencies in the format e.g. 0412 345 678 and 0412345678.
* We've added the **Customer ID**, useful for those with external integrations that use our Customer IDs
* Select the **Default Delivery Address** for customers (previously only limited to POS); accessed by clicking "Additional Delivery Addresses" when editing a customer record  
  ![mceclip2 (70).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfAcEAI.jpg)
* Users are now able to select the default delivery address via Back Office **Customer Manager** (accessed by navigating to Customers > Customers and editing a customer).

### Purchase Order Manager

* We've added Pagination, allowing results to load faster:  
  ![mceclip1 - 2023-07-09T181031.592.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppf5aEAA.jpg)  

  Note: using the "Select All Incomplete" tickbox will only select results on the *current* page, rather than all Incomplete PO's on all pages
* You can now view the **Order Quantities** from the PO Manager Results tab  
  ![mceclip3 (41).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfArEAI.jpg)
* The PO Manager **Excel Export file** has been updated as part of our work towards delivering a new Purchase Order and Stock Receipt feature (currently under development - [click here](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fportal.productboard.com%2Fxjc5eqgr3wpp4lregjvharq3%2Fc%2F18-po-stock-receive-2-0) to subscribe to updates). The changes include:
  + The order of columns has been changed (see below screenshots for a comparison)
  + Added Item Quantity columns for Order Qty, Special Order Qty, Received Qty, Remaining Qty  
     Before:  
    ![PO-export_31511.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfB1EAI.jpg)  
     After:![PO-export-31512.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfBGEAY.jpg)

### Fulfilment Report (Limited)

* We've added both the Phone and Mobile Number to the **Fulfilment Report (Limited)** Results Tab if both exist against the order

## Resolutions

* Edit Products screen: The selection for the Tax checkbox on the Pricing tab is now saved successfully for Products & Packages
* We've resolved an issue with the Product Edit page that prevented users from successfully selecting/updating Source Groups
* Report Improvements: we've improved the behaviour of the following reports to support larger datasets, and also added a "spinner" icon to indicate the report is still processing
  + Stock Value vs Sales Report
  + Stock Take File Upload
* We've resolved an incorrect calculation on the Stock Value vs Sales Report when using the "Exclude Below Zero Stock Units" option
* Corrected a calculation for the total values in Customer Manager on the Search Results screen