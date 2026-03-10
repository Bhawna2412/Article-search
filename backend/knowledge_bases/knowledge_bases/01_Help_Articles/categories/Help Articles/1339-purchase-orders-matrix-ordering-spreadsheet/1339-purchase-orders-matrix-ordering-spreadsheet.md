---
title: "Purchase Orders - Matrix Ordering Spreadsheet"
articleID: 1339
knowledgeBase: "Help Articles"
lastUpdated: 2023-05-11
---

# Purchase Orders - Matrix Ordering Spreadsheet

# Purchase Orders - Matrix Ordering Spreadsheet

The Purchase Order Matrix Ordering Spreadsheet is a tool developed outside of Retail Express, exclusively within Microsoft Excel. The spreadsheet is updated, then uploaded into Retail Express.

**Please note:**This file is only compatible with Windows computers, and cannot be used on Mac. The tool is provided "as is" and requires advancedknowledge of Microsoft Excel. Support and training on the Matrix Ordering spreadsheet is not available.

Using the tool you can:

* Create new products with sizes and colours based on the Manufacturer SKU (also referred to as the Style Code/Model)
* Create a standard PO Upload Template ready for uploading into Retail Express

## Using the Matrix Ordering Spreadsheet

1. [Click here to begin download](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fimplementation%2Fdownloads%2FMatrixProductsandOrdersV2020-1.xlsm)  

   **Important:** Ensure you **save the file to your computer**and **keep the original filename**,otherwise the tool will not work
2. Open the file in Microsoft Excel
3. Click **Enable Editing  
   ![mceclip0.png](https://ress.zendesk.com/hc/article_attachments/360003111315/mceclip0.png)**
4. Click **Enable Content**(this will enable the advanced automated features of the tool)  
   ![mceclip2.png](https://ress.zendesk.com/hc/article_attachments/360003181976/mceclip2.png)
5. Press the **OK** button on the welcome screen
6. Begin by entering the main information at the top:  
   ![mceclip0.png](https://ress.zendesk.com/hc/article_attachments/360003244175/mceclip0.png)
7. Enter your **Outlet Name**in the red box
8. Enter your **Supplier Code**in the red box; this is the code as entered in Retail Express.  

   **Note:**You will need to create separate files for multiple suppliers
9. If using an eCommerce integration with **Sales Channels** and **Source Groups**, enter the names into each field on the right
10. Each product is broken up into its own "Lines" - a section separated into details on the left, and size/colour information on the right. When the PO Matrix template is run this will create individual lines in the resulting PO spreadsheet.
11. Enter your **product information** - Style Code, Description, SupplierBuyEx price, POS Price (only required when creating a new product), Brand, Season, Product type  
    ![mceclip2.png](https://ress.zendesk.com/hc/article_attachments/360003158156/mceclip2.png)
12. Edit the Size/Colour headings to match the sizes and colours required for ordering  
    ![mceclip5.png](https://ress.zendesk.com/hc/article_attachments/360003086055/mceclip5.png)
13. Enter the quantity for each combination; if a combination is not required leave the field blank  
    ![mceclip4.png](https://ress.zendesk.com/hc/article_attachments/360003086015/mceclip4.png)
14. Repeat steps 9 to 11 for additional products
15. Click **Create Order**
16. To prepare the file for the next supplier, click **Reset Order**

## Frequently Asked Questions

#### [Can I use this file for products to be published on Shopify?](#shopify-po-matrix)

  

You can use this file to create your products and Purchase Orders, however you **won't**be able to mark the products to be published to Shopify as the data required for products is unique for Shopify stores, and cannot be automatically created through this tool.

In order to create your products and orders for Shopify you should:

1. Use the Purchase Orders Matrix Spreadsheet following the instructions above
2. Upload the file into Retail Express (creating your products and orders)
3. Use the Mass Download feature to download a list of your Products in Retail Express
4. Follow the instructions in the [Shopify - Product Synchronisation](https://galaxy.maropost.com/s/article/Publish-Products-to-Shopify) article section "Publishing/Adding Products" for multiple products  

   **Note:**This will allow you to select products to be published online in bulk