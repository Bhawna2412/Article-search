---
title: "Supplier Invoices - Invoice or Received Date Settings"
articleID: 968
knowledgeBase: "Help Articles"
lastUpdated: 2023-10-27
---

# Supplier Invoices - Invoice or Received Date Settings

With this new Invoice and Received Date setting, you'll have greater control over your accounting records, optimizing your inventory management and supplier invoicing processes. However, we want to emphasize that your choice between the two date options will impact accounting data sync and reconciliation.

We have introduced the latest enhancements in Purchase Order and Stock Receipt 2.0 features - the ability to define your preferred date for accounting posting when finalizing supplier invoices. Now that the Invoice Date option has been added, user will have access to two options for finalizing supplier invoices. This new update empowers you to make more informed decisions and ensure accuracy in your accounting records.

In response to valuable feedback from our clients, we've introduced this update to address a common need - aligning the accounting data with the true Invoice Date, as entered during the stock receipt/invoicing process. We understand that your supplier payment terms and inventory management may rely on the Invoice Date, and we aim to offer you the flexibility to cater to those specific requirements.

This would allow the Supplier Bill in accounting, to be created and will reference the correct invoice date that was on the original supplier invoice that arrived with the goods. 

## **Understanding the Two Date Options: Invoice Date and Received Date**

* **Invoice Date**: Choosing this option will sync the accounting data to the Invoice Date entered during stock receipt/invoicing. This means that the Supplier Bill in accounting will accurately reference the original supplier invoice's date, providing you with precise insights into payment terms and goods receipt.
* **Received Date**: In the default setting, this option will continue to use the date the invoice was finalized in Retail Express. This ensures consistency with Retail Express Inventory Movements and inventory valuation, unaffected by the Invoice Date. It simplifies the reconciliation process between Retail Express and your accounting package.

## **Used Case Scenario:**

The company receives goods into Retail Express on the 27th of the month and finalises the Stock Receipt/Invoice. The accounting data will show the Supplier Bill Date of 27th which is the current and default behaviour.    
   
However, there are various cases where the invoice date could be earlier, perhaps the week before when the order was placed, or shipped, and the supplier payment terms may be used on the Invoice Date, for example, the 20th.

The new settings in Retail Express allow accounting data to be synchronised or extracted and will reference your choice of date, based on the changed setting. By default, the date is finalised in Retail Express, but optionally you can set it to use the Invoice Date entered during stock receipt/invoicing. 

**Important Considerations<**:It is crucial to note that using the Invoice Date may have implications in Xero and MYOB due to their limitations, as they support only one date field. Consequently, certain accounting reports may show differences in invoice values depending on the selected date.

  
  

**Our Recommendation**: For most users, we strongly recommend sticking to the default " Received Date" setting. This choice guarantees smooth reconciliation, especially when running reports in your accounting package. The goods will always be brought into Retail Express Inventory when made available or finalized, based on the " Received Date."

## **How to enter Invoice Date:**

The Invoice Date field is now available as an optional field in the Stock Receipt/Invoice page. You can simply enter the Supplier Invoice Date during the finalization process.

**Note**: If you leave it blank, the system will set it to the current date.

## **User-added image How to Configure Received Date vs Invoice Date for accounting data?**

The settings exist in three places depending on which integration you are using.

* Go to Settings > then click on Integrations > Select Xero/MYOB
* Within the Xero/MYOB configuration page, you will now see an option: “Date Preference for Supplier Invoices/Credit Notes. Depending on your integration, you can make this selection to match your accounting needs.

**![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/2.05T5g00000zev87EAA.png)  
Note**: This option also supplies Supplier Return Credit Notes as they are posted to accounting as similar documents.  
  
Accounting Data Export For those using Accounting Data Export, a convenient dropdown filter allows you to select your desired date preference before generating your export.  
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/3.05T5g00000zevKhEAI.png)

With this new Invoice and Received Date setting, you'll have greater control over your accounting records, optimizing your inventory management and supplier invoicing processes. However, we want to emphasize that your choice between the two date options will impact accounting data sync and reconciliation.