---
title: "Set up Pick Bins for Maropost Commerce Cloud Pick'n Pack"
articleID: 509
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Set up Pick Bins for Maropost Commerce Cloud Pick'n Pack

Pick bins help keep your orders organised so that products don't get lost or packed into other customers orders. This is particularly useful if the staff picking the products aren't the same as those packing the orders, as the pick bins can be linked to the orders.

### In this Article

- [Set up Pick Bins](#1)
- [Generate Barcodes](#2)
- [Add Pick Bin Names to Shipping Labels](#3)

### Set up Pick Bins

To setup your pick bins:

1. 
  In your Maropost Commerce control panel navigate to **Settings & Tools** > **All Settings & Tools**.
2. 
  In the settings & tools menu, select **Mobile Pick'n Pack** and then **Pick Bin Sizes**.

  ![Set up Pick Bins for Maropost Commerce Cloud Pick'n Pack 1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000PLGabMAH.jpg)
3. 
  Click **Add New** to create a new pick bin.

  ![Set up Pick Bins for Maropost Commerce Cloud Pick'n Pack 2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000PLGaqMAH.jpg)
4. 
  Enter a **Name** and the **Dimensions** for your pick bin, then click **Calculate Cubic**. Then **Save & Close**.

> **Note:** Keep the name to 10 characters or less so that it shows in full on your sales orders.

  ![Set up Pick Bins for Maropost Commerce Cloud Pick'n Pack 3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000PLFpNMAX.jpg)
5. 
  Repeat these steps for all of your different pick bin sizes.

When you pick and order through Pick'n Pack you will be able to select a pick bin size.

### Generate Barcodes

We strongly recommend adding barcodes to each pick bin, so that you can individually track which bin currently has which order.

Below are some websites that you can use to generate your barcodes. Make sure you create code 128 barcodes, so that they can include numbers, letters and other characters.

[http://www.barcodesinc.com/generator/index.php](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.barcodesinc.com%2Fgenerator%2Findex.php)[http://barcoding.com/resources/barcode-generator/](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fbarcoding.com%2Fresources%2Fbarcode-generator%2F)

#### Pick Bin IDs

Your pick bins should be logically named so that staff can easily recognise and find them. In the example above, the pick bins are different colours, so the individual barcode could be created as:

- Black-01, Black-02, Black-03 etc
- Yellow-01, Yellow-02, Yellow-03 etc
- Orange-01, Orange-02, Orange-03 etc.

In the above the letter represents the area that bins are put to after picking and the number represents its unique ID.

Enter your pick bin ID's into either of the sites and you'll be given a barcode image. Print it onto an adhesive label, and attach it to your pick bin.

#### Example Pick Bin Barcode Label

This barcode has been generated from the barcoding.com website, for one of the yellow pick bins (ID Yellow-02).

![Set up Pick Bins for Maropost Commerce Cloud Pick'n Pack 4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000PLGYgMAP.jpg)

### Add Pick Bin Names to Shipping Labels

> **Note:** Maropost Commerce partners can customise shipping labels to your needs. Contact a design partner for a consultation.

To view the pick bin # that an order has been picked to on your shipping labels, you must add the following tag:

`[%DATA id:&#39;bin_loc&#39; if:&#39;ne&#39; value:&#39;&#39;%]Bin#: [%NOHTML%][@bin_loc@][%END NOHTML%][%END DATA%]`

The above tag can be added anywhere on your labels however we recommend adding to the bottom of the labels.

### Related Articles

- [Prepare your Products for Pick'n Pack](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.netohq.com%2Fsupport%2Fs%2Farticle%2FPrepare-your-Products-for-Pick-n-Pack)
- [Picking to a Bin or Tote in Maropost Commerce Pick'n Pack](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.netohq.com%2Fsupport%2Fs%2Farticle%2FPicking-to-a-Bin-or-Tote)