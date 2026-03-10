---
title: "Prepare your Products for Pick'n Pack"
articleID: 1578
category: "Use Neto > Maropost Commerce Cloud Pick'n Pack > Set up Pick'n Pack"
knowledgeBase: "Neto By Maropost"
---

# Prepare your Products for Pick'n Pack

To get the most value for Neto Pick n Pack, we recommend updating your products so that they contain three key pieces of information.

- [Barcodes](https://galaxy.maropost.com/kb/articles/1578-prepare-your-products-for-pickn-pack#2)
- [Pick zone](https://galaxy.maropost.com/kb/articles/1578-prepare-your-products-for-pickn-pack#3)
- [Dimensions](https://galaxy.maropost.com/kb/articles/1578-prepare-your-products-for-pickn-pack#4)

This article will also teach you how to:

- [Manually update products](https://galaxy.maropost.com/kb/articles/1578-prepare-your-products-for-pickn-pack#5)
- [Update products in bulk](https://galaxy.maropost.com/kb/articles/1578-prepare-your-products-for-pickn-pack#export-wizard)
- [Print barcode labels](https://galaxy.maropost.com/kb/articles/1578-prepare-your-products-for-pickn-pack#import-wizard)
- [Modify the barcode labels](https://galaxy.maropost.com/kb/articles/1578-prepare-your-products-for-pickn-pack#6)

## Barcodes

Neto Pick n Pack has the ability to scan product barcodes to record each item picked. Pick'n Pack will confirm with a beep for a correct pick, or an alert tone/vibration for an incorrect pick. As a result, staff that pick orders will be more accurate and be able to complete each pick faster.

Even if your products do not have barcodes you can still take advantage of the scanning feature. Neto can generate a barcode for you, or even use the SKU as a barcode.

**Please Note**: Neto generated barcodes are not officially registered, and won't work with any application outside Neto such as eBay, Catch or Amazon.

## Pick Zones

Pick zones are the different sections of your warehouse where individual products are located. This can be an aisle, section of shelving, a particular shelf, or all three. There's no restrictions what you name your pick zones either, so they can be customised to suit your existing operations.

Pick zones will appear next to each product line on an order in Pick'n Pack, so your warehouse staff can see at a glance where they need to go. This is especially useful for new or seasonal staff, if products move location, or when new product lines arrive.

We recommend auditing your warehouse layout and planning out your pick zones if you haven't done so already. This can give you insight as to where certain products should be situated, and planning your workflows.

## Dimensions

Adding the dimensions to products is incredibly useful to display on your website, and often mandatory for certain shipping services. They can also be used in conjunction with pick bins to tell you just what size container is needed to pick an order.

## Manually Update Products

To manually update the pick zone, barcode, and dimensions of each product one at a time:

1. In your Neto control panel navigate to **Products** > **Active**.
2. Select the product you want to update by clicking the SKU.
3. Select the **Warehouse & Picking** tab.
4. Enter your pick zone into the **Pick Zone** field.
5. Enter the product barcode into the **UPC/EAN** field. If your products don't have a barcode, you can generate one for Neto Pick n Pack using the three dot button on the right hand side of this field.
6. Click the **Shipping** tab.
7. Add the dimensions of your product. **Width**, **Length**, and **Height** are all expressed in meters, **Weight** in kilograms. Once you've entered this information, click the **Calculate Cubic** button.
8. Click **Save**, and repeat this process for any other products you wish to update manually.

## Update Products in Bulk

Updating products in bulk uses Neto's export and import wizard. A general guide on it's use can be found [here](https://galaxy.maropost.com/kb/articles/668-product-import-wizard), but below you'll find instructions specific to updating the pick zone, barcode, and dimensions.

### Export Wizard

1. In your Neto navigate to **Settings & Tools** > **Export Data**.
2. Click **Perform Complex Export** select **Start Data Export Wizard**.
3. Enter a **Name** for your file, and click **Continue to Next Step**.
4. Click **Add New Field to File** eight times, and select the fields to match the screenshot below.
  Click **Continue to Next Step**.
5. In the **Child/Parent Status** filter, deselect **Has Child Product** to remove variation parent products from the list. Click **Continue to Next Step**.
6. Set the **Send Export File To** drop down to **Local URL** and click **Export Now**.
7. The next page will have a link to a process ID (to check when the export is complete), and URL to download the file when done.
8. Open the file, and add the dimensions, pick zone, and barcode to each product. Note that the dimensions are in meters and kilograms, so 10 cm becomes 0.1 meters, and 100 grams is 0.1 kg.

With your file populated with this information you can now upload it into Neto to update your products.

### Import Wizard

1. In your Neto control panel navigate to **Settings & Tools** > **Import Data**.
2. Click **Perform Complex Import** select **Start Data Import Wizard**.
3. Click **Choose File** to upload your file, then click **Continue to Next Step**.
4. As long as you haven't changed any of the column headers, the **Field Mapping** should be done for you, and look like the screenshot below.
  Click **Continue to Next Step**.
5. Leave the update options as they are, and **Continue to Next Step**.
6. Click **Process File Now**. Depending on how many products you have, it may take 10 mins to an hour for them all to update.

Once processed all of your products will now have a barcode, pick zone and dimensions, and be ready for Pick'n Pack.

## Print Barcode Labels

If you're using the SKU or a Neto generated barcode, we recommend printing your barcodes to speed up the process of picking products. Self adhesive labels placed directly above or below their corresponding product will mean your staff can quickly scan each item as they grab them from the shelf.

To print your barcode labels:

1. In your Neto control panel navigate to **Products** > **View Products**.
2. Select the products you want to print using the check boxes on the right hand side.
3. At the bottom of the page, click on the **With X Selected** button and click **Print Barcode for Selected**.

## Modify the Barcode Label

The barcode labels can be customised by modifying the template file. You can find the template in **Settings & Tools** > **All Settings & Tools**. Select the **Document Templates** tab and click in the **Product** > **Barcode** folder.

To enquire about having the barcode file customised for you, please [contact a design partner](http://forms.neto.com.au/services/designtweak.html).