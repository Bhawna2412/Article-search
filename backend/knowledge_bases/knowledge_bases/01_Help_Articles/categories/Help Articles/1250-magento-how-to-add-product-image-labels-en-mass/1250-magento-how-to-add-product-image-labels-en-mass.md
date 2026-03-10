---
title: "Magento - How to add product image labels en-mass"
articleID: 1250
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Magento - How to add product image labels en-mass

# Magento - How to add product image labels en-mass

In order to add product image labels on mass you need to re-import the images onto the products, which requires 3 steps:

A) Copy/export required information

1. Export complete product information via "System > Import/Export > Export"
2. Copy contents of /public\_html/media/catalog/product into /public\_html/media/import

![B)](http://galaxy.maropost.com/resources/emoji/sunglasses.png "B)") Delete images from products

1. Truncate `catalog_product_entity_media_gallery` and `catalog_product_entity_media_gallery_value&#39;` via PHP MyAdmin
2. Reindex entire site via "System > Index Management"
3. Delete contents of /public\_html/media/catalog/product

C) Add image descriptions to product data export

If the cusotmer wants to add their own descriptions you simply send them the export and advise them to add the description into the rows in the "\_media\_lable" column (Note that is NOT a typo, that is the name of the column). Advise the customer to NOT TOUCH ANYTHING ELSE.

If the images are already named correctly (I.e. image is called polo\_shirt\_left.jpg and they want the label to be "polo shirt left") then this can be done programmatically for them using the followign steps:

1. Open the spreadsheet
2. add a new column between \_media\_image and \_media\_lable
3. into that column add the following formula (where [[media image]] is the cell in the \_media\_image column in the same row):  
    =IF([[media image]]<>"",[[media image]],"")
4. Autofill that to the end of the spreadsheet
5. Highlight the entire column and copy > Paste (Values)
6. Open Find & Replace and make the following replacements to this column only:
   * Replace \*/ with blank
   * Replace .jpg with blank
   * replace .png with blank
   * replace \_ with single space
7. Into the \_image\_lable column, enter the followign formula (where [[new column cell]] is the corresponding cell in the new column added in step 2):  
    =IF(ISNUMBER(SEARCH("POS-",[[new column cell]])),MID([[new column cell]],FIND(" ",[[new column cell]])+1,256),[[new column cell]])
8. Autofill that to the end of the spreadsheet
9. Highlight the entire column and copy > Paste (Values)
10. Open Find & Replace and make the following replacements to this column only:
    * Replace the word NOTHING with blank
11. Delete column added in step 2
12. Save changes

D) Upload spreadsheet

Absolutely no other changes are required, simply upload the saved spreadsheet via "System > Import/Export > Import"

By importing this file it will reassociate all images to the products they were associated to originally, but this time they will have labels (either provided by the customer or based off the image file name).