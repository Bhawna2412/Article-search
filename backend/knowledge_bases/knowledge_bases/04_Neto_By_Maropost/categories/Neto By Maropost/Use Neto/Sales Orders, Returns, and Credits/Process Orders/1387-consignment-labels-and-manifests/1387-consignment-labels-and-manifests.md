---
title: "Consignment Labels and Manifests"
articleID: 1387
category: "Use Neto > Sales Orders, Returns, and Credits > Process Orders"
knowledgeBase: "Neto By Maropost"
---

# Consignment Labels and Manifests

Consignment labels (also called shipping labels or tracking labels) contain information for your carrier to ensure parcels are tracked and delivered to their intended recipient. They generally include the consignment (tracking) number, barcode, recipient details (name and address), and the sender details (name and address).

A single consignment may consist of multiple articles (packages). In these cases the consignment label will also record the article number(e.g. 1 of 3).

Manifests are a list of all consignments for a single shipping carrier. They're automatically created when a consignment is generated for an order. You should only submit your manifest after the goods have been accepted by the carrier. Submitting a manifest is not a method of alerting the carrier that a pick up is required, so you will still need to book pickups in your usual manner.

## Create Consignments

When an orders has been picked, packed and is ready for dispatch, you can then create a consignment label for the shipping carrier that will transport the order.

1. In your Neto control panel navigate to the **Sales Orders** > **Pack** menu.

> **Note:** If you process an order through each step before starting a new one, or in bulk, you may use a different sub-menu.

2. Open an order by clicking the order ID.
3. Scroll down to the shipping section.
4.   - An automatically generated shipping consignment will use your pre-defined settings to automatically generate a consignment and articles based on the products ordered and the shipping option selected by the customer.
  - Manually added consignments give you the freedom to manually choose the shipping option used to dispatch the goods, and create the articles as you require.

  Choose to either **Auto Generate a Shipping Consignment** or **Manually Add a Shipping Consignment**.

> **Note:** An article is an individual package that makes up part of a consignment. For example, flat packed furniture may be shipped in several packages as article 1 of 3, 2 of 3 etc, but make up a single consignment.

5.   - Edit the dimensions and weight of each article. Each article will generate its own label as a part of the consignment.
  - Change the selected shipping option for a consignment from the drop down list at the top left of the consignment.
  - Select multiple articles and click the **Combine Selected Articles** to indicate that the products are packed together in the one package.
  - Create a second consignment by clicking the **Manually Add Shipping Consignment** button again, and remove any articles that are already part of the previous consignment.

  After adding a consignment you can add or edit the shipping articles that make up the consignment:

> **Note:** If you're using Sendle, select the **Package Size**. We recommend you check the maximum weight on the package size to ensure it's not under that of the order.

6. Click **Create Consignments & Dispatch** to generate consignment labels and mark the order as dispatched or click **Save Changes** to create consignments without changing the order status.

Consignments are now created and added to the relevant manifest. We recommend you now print your labels to apply them to the packages.

## Print Consignment Labels

When a sales order has the consignment created, the consignment labels need to be printed and applied to the articles. To print consignment labels:

1. Open the sales order that has the consignment already created.
2. Click the **Print Shipping Consignment** button to create shipping labels for the articles.
3. You will be taken to your browser's print page. Click the **Print** button.

**Please Note**: Thermal label printers sometimes experience issues where labels appear to cut off because of their size. When prompted to print the label from the browser, try setting the print scale to 80% so it fits on the label.

## Edit a Shipping Consignment

You can edit a shipping consignment from the related shipping manifest. Or you can [delete the shipping consignment](https://galaxy.maropost.com/kb/articles/1387-consignment-labels-and-manifests#7) and create a new one instead.

To edit a shipping consignment:

1. In your Neto control panel navigate to **Sales Orders** > **Manifests & Consignments**.
2. Select the shipping manifest that contains the consignment in Pending status you wish to edit.
3. Click on the **Consignment Number**. This will take you to the order details.
4. Edit the length, width, height and weight for any of the articles in the consignment.
5. Click on **Save Changes**
6. To reprint the consignment labels, click on the **Print Shipping Consignments** button.

## Manually Add Tracking Numbers to Sales Orders

> **Important:** You must have a [service and rates table](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) for each service that you will use when manually adding tracking information (e.g. Prepaid satchels). This ensures there are no conflicts when processing the order, and the correct tracking URL is sent to the customer.

To manually add tracking numbers to sales orders:

1. In your Neto control panel navigate to **Sales Orders** > **View Orders**
2. Find and open the order you wish to change (status must be pack or dispatch).
3. Scroll down to the consignment section and click **Manually Add Shipping Consignment**.
4. Select a **Shipping Service** from the drop down menu. This tells the customer which service has been used to ship their purchase.
5. You now have the option to add information, such as articles/package sizes, dimensions (optional fields), or simply just add the tracking number (mandatory fields). We recommend filling out the optional fields so you can track your internal shipping costs (which you can see by navigating to Reports > Profit By Order).
6. Once saved, you can manually email the customer their tracking number by clicking the email icon.
  This is an example of how a 500g satchel with tracking number was created:

## Print and Submit a Shipping Manifest to your Carrier

In addition to submitting your manifest electronically, most shipping carriers will require a printed copy of the manifest be provided when the goods are picked up. Note that the eParcel 2017 manifests can't be printed until it's submitted.

> **Warning:** Do not submit the electronic copy of your manifest until the freight has been collected. After the manifest is submitted, you are unable to edit or delete consignments. Most carriers will charge you based on the content of you manifest, so it is imperative that you check the data before submitting it.

To print or submit a shipping manifest:

1. In your Neto control panel navigate to **Sales Orders** > **Manifests & Consignments**.
2. Select the manifest that you wish to submit.
3. Click the **Submit manifest to carrier** button to send your manifest electronically.
4. Click the **Print manifest** button to print a hard copy for your carrier or your own records.

## Delete a Shipping Consignment

> **Important:** You can delete shipping consignments (labels) up until the shipping manifest related to the consignment is submitted to the freight carrier. This usually takes place when the consignments have been collected by the carrier.

You can delete a shipping consignment from the related order or the related manifest:

### Delete a consignment from the sales order screen

1. In your Neto control panel navigate to **Sales Orders** > **Pack** or **Dispatched**.
2. Locate the order that has the consignment you want to delete.
3. Scroll down the page to the shipping consignment section.
4. Check the **Delete** tick box on the right of the consignment you would like to delete.
5. Click the **Save Changes** button and the consignment will be removed.

### Deleting a consignment from manifest

1. In your Neto control panel navigate to **Sales Orders** > **Manifests & Consignments**.
2. Open the **Pending Manifest** that the consignment belongs to. You may need to check the date and carrier to open the correct one. Ensure the status of the manifest is in **Pending.**
3. Select the consignment by clicking on the checkbox on the left.
4. Scroll down to the bottom and click the **Delete Selected Consignments** button.

Your consignment is now deleted.

## Scan to Submit Manifest

The scan to submit manifest setting can allow you to quickly check that all consignments on your shipping manifest have been packaged and are ready to be collected by the carrier. When enabled each consignment has to be scanned into the manifest page, before the manifest can be submitted. To turn on the scan to submit manifest setting:

1. In your Neto control panel navigate to **Settings > tools** & **All settings & tools**.
2. Click on **Advanced Configuration**.
3. Search in the name field for the `SCAN_BARCODE_BEFORE_MANIFEST` setting, and click on it to edit.
4. Change the value drop down menu to **Yes** and click the **Save Changes** button.

The submit manifest button is now replaced by a **Scan Shipping Label Barcode** section. Use this field to scan and enter your shipping consignments from that manifest. Once you have scanned every consignment on the manifest, you will be able to click the submit manifest button.

You can easily see which manifest consignments have not yet been scanned from the consignment list in that manifest page.

## Create Multiple Consignments for a Sales Order

Products on an order can be split up to two or more consignments so that they can be shipped using different methods. To create multiple consignments for a sales order:

1. In your Neto control panel navigate to **Sales orders** > **View orders**.
2. Click on the order that you want to create multiple consignments.
3. Scroll down to the orderlines. In the **Ship** fields, set the amounts to be added to the first consignment.
4. Click the **Manually Add Shipping Consignment** button.
5. Select the shipping option to use for the consignment. The orderlines and quantities will be added to the first consignment.
6. In the orderlines change the **Ship** field values for the second consignment.
7. Repeat steps 4 onwards until all orderlines have been added to consignments.

You can now dispatch the order with multiple consignments.