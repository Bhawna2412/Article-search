---
title: "Managing Purchase Order Items"
articleID: 379
category: "Purchase and Receiving > PO and Stock Receipt 2.0"
knowledgeBase: "Retail Express"
---

# Managing Purchase Order Items

You can manage purchase order items by adding, editing, or removing products from orders before they're finalized, helping ensure accurate orders that reflect actual procurement needs. This improves your retail operations efficiency by providing flexibility in order management, with properly configured PO item management typically enabling better order accuracy and reduced supplier communication overhead for order changes.

Understanding PO item management involves recognizing item addition methods, quantity modifications, and removal processes to help retail operators focus on the right order adjustment workflows, ensuring your retail strategy consistently drives better procurement accuracy and supplier coordination outcomes.

We've introduced a new page layout for managing your purchase order items. This new page includes column filtering, custom column layouts, key dates and PO details as well as a brand new advanced search feature. We also allow you to bulk edit, bulk cancel and bulk-reorder your items right from within the PO Item grid.

![Screenshot 2023-01-12 at 9.36.37 AM (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTp9EAE.jpg)

## **Predictive search (Quick Search)**

Searches across all fields, including all Codes, Attributes, Product Type, etc. Prompts to add the quantity when you add the product. The behaviour here is similar to what you will see in POS.![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/rtaImage.05T5g000017Ro4wEAC.jpeg)

## **PLU Scan**

You can now continue to scan products to increment the quantity on the purchase order, instead of only being able to scan a product once and add the quantity manually.

Default Filtering will only show Products against the Supplier on the PO, however, you can toggle the switch to "Show All Suppliers Products" products as required.

[▶ Embedded Video](https://player.vimeo.com/video/908554361?badge=0&autopause=0&player_id=0&app_id=58479&wmode=opaque)

## **Advanced Search**

You can find products using any combination of keyword searching and column header filters. From the results, enter the quantities to order across one or many products and add directly to the PO. From there you can keep searching for the next products or return to the list of PO items.

![mceclip0 - 2023-07-08T184725.016.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTpnEAE.jpg)
You can also use "Scan and Count" Dropdown menu for PO items![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Screenshot20240201at21106PM.05T5g000018qc8WEAQ.jpg)

## **Bulk Action Buttons**

You can choose from the bulk actions: **Cancel Remaining**, **Re-Order Remaining** and **Delete**. This feature replaces the need for managing discrepancies in POE Manager. Simply make the decision of what to do with the remaining quantities directly from within the PO Items grid.

![Screenshot 2023-01-17 at 10.51.13 AM (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTq2EAE.jpg)

## **Bulk Edit**

You can edit multiple edits at a time with a new bulk edit feature that allows a variety of changes to be applied to PO items.

![image (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTq7EAE.jpg)

- **Set PO Supplier Buy**  - This option will set the Supplier Buy price value for your selected items, to the value you specify.
  - The change is applied to this PO only.
- **Set PO Order Qty**  - This option will set the Order Qty for your selected items, to the value you specify.
- **Update Supplier Buy**  - This option has two variations.    - One method will update the selected items on thie PO with whatever the current "Master Supplier Buy" value is against the products.      - This is useful when you may have created the PO before exact supplier buy prices were known, of you have since updated the master pricing and want to reflect this on any open PO's.
    - The second method will update the master supplier buy values against the selected products, with whatever price is currently set as the supplier buy price on the PO items.      - This is great if you have created the PO with current/most up to date pricing for the supplier and want to apply these prices to the products for ongoing use.
      - This option requires the user to have existing access to the "Edit Products/Packages" security feature -  a user without access will not be able to select the second option.
- **Set Products Enabled/Disabled**  - This option updates the selected items to be enabled or disabled, based on your selection.
- **Publish to Shopify** and **Publish to Sales Channels**  - For integrated webstore users, we let you publish directly to your nominated Shopify store/s and/or sales channels.
  - Changes apply to the selected items only.
  - Items cannot be "unpublished" from this screen.

## **Column Menu**

You can select which PO Item fields you would like to see on the PO window.![rtaImage (11).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTqCEAU.jpg)

> **Note:** You can add the 'PO Item ID' Column to the Stock Receipt Grid by selecting PO Item ID from the Codes and SKUs menu.

## **Filters**

You can choose to display only specific products on your PO by entering information into the field and using the options.

![Screenshot 2023-01-12 at 1.33.58 PM (1).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTpZEAU.jpg)

> **Note:** Browser Storage will retain the last used configuration as per the browser and so any user accessing on that browser will see the previous configuration.

## PO Items Column Details

The following columns can be selected to be displayed on the Purchase Order:

|  |  |
| --- | --- |
| **Section** | **Fields** |
| Codes and SKUs | - PO Item ID - Product ID - Supplier SKU - Supplier SKU 2 - Manufacturer SKU |
| Attributes | - Product Type - Brand - Season - Size - Colour - Width - Custom Attributes |
| Custom Properties | - Custom 1 - Custom 2 - Custom 3 |
| Weight | - Weight - Total Weight |
| Dimensions | - Length - Bredth - Depth - Cubic - Total Cubic |
| Sell Prices and Margins | - RRP - POS Price - GP % (Gross Profit Percent) - MU % (Markup Percent) |
| Other Inventory Details | - Carton Qty (the number of products contained within a single carton) - MSL (Minimum Stock Level) |
| Current Stock Levels | The quantities displayed are limited to the Outlet selected for the Purchase Order, and not the global count for all Outlets.  - Current Avl (Available) - Current On Ord (On Order) |
| Order Quantities | Displayed in addition to the standard Order Qty column  - Special Order Qty - Received qty - Remaining Qty - Cancelled Qty |