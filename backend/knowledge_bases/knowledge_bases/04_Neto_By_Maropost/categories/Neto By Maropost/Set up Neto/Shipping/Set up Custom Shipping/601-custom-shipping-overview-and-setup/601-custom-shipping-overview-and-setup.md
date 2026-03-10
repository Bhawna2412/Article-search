---
title: "Custom Shipping Overview and Setup"
articleID: 601
category: "Set up Neto > Shipping > Set up Custom Shipping"
knowledgeBase: "Neto By Maropost"
---

# Custom Shipping Overview and Setup

> **Important:** Creating a shipping matrix manually is an advanced procedure. For a simplified way of using your own rates, please see [this article](https://galaxy.maropost.com/kb/articles/1030-quick-shipping-setup-wizard).

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

Each component needs to be set up and linked to each other in order for the shipping to work correctly. This is referred to as the Shipping Matrix. At any stage of the configuration, you can check the mapping / your progress by going to: **Shipping** > **Shipping Options**.

![Custom Shipping Overview and Setup 1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcZIMAZ.jpg)

## Overview

There are a number of components to the shipping system:

- [Shipping Zones](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-zones)
- [Shipping Services & Rates](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-services-and-rates)
- [Shipping Categories](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-categories)
- [Shipping Options](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-methods)
- [Carrier & Label Configuration](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#carrier-and-label-config)
- [Shipping Manifests](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-manifests)

[**Shipping Zones**](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-zones)

Shipping zones are sets of postcodes grouped together due to close geographical proximity. Shipping zones are different for each carrier, and can even be different depending on your account type. Zones are used when the same **Service Rate** applies to a number of postcodes. For example, you may have a zone for Sydney Metro, which contains postcode 2000 (among others), where the shipping is free through Australia Post.

[**Shipping Service & Rates**](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-services-and-rates)

Services and rates are what define the cost for a shipping service. **Shipping Zones** are linked to the service & rates, so that you can set the applicable charge for each zone. You can also define additional charges here, such as handling fees or fuel levies. The rates are then linked to a **Category** so that you can customise which rates apply to which products. For example, your free shipping to Sydney Metro may only be for products that are under 500g in weight.

[**Shipping Categories**](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-categories)

Shipping categories are used to link specific products to a **Shipping Service/Rates**. Your system is set up with two shipping categories: **Default** and **Dangerous goods**, but you can create more to suit your needs. For example, you can create a **Free Sydney Metro Delivery** shipping category and assign it to your products under 500g in weight.

[**Shipping Options**](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-methods)

Shipping options link your **Shipping Categories** to the **Shipping Service/Rates**, and are visible to the customer. In our example above, you may have the rates for the Free Sydney Metro shipping, along with eParcel rates for everyone outside of Sydney Metro.

When shipping is calculated in checkout or on the product page, the matrix is queries the **Shipping Category** to determine what **Shipping Options** are available. With this information, the linked **Service & Rates** are calculated based on the customers suburb/postcode, so that the shipping cost can be returned to the customer.

[**Labelling & Carrier Configuration**](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#carrier-and-label-config)

This element of the system links your integrated carrier account to your control panel to produce shipping labels. If you are not using the carrier integration module, or are using a non integrated carrier, you can link your services to a generic label to print plain address labels.

[**Shipping Manifests**](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-manifests)

When your integrated carrier account is set up in your control panel, electronic manifests are generated as part of the pack process. These manifests can be submitted to the carrier at the push of a button.

## Set Up Shipping Zones

Neto comes pre-loaded with zones for many popular shipping services, such as eParcel, Couriers Please, StarTrack, TNT and Team Global Express. You can also import shipping zones using the zone import template if your carrier zones are not provided or you need to create custom zones. Note that carriers can change or update shipping zones from time to time. For this reason, we recommend always importing shipping zones received directly from the carrier.

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
  ![Custom Shipping Overview and Setup 2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcaQMAR.jpg)
2. Select **Shipping Zones**.
  ![Custom Shipping Overview and Setup 3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfXhwMAF.jpg)
3. Click on **Import Shipping Zones**.
  ![Custom Shipping Overview and Setup 4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcbiMAB.jpg)
4. Download the **Shipping Zone .CSV Template File** and save it to your computer.
  ![Custom Shipping Overview and Setup 5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfccgMAB.jpg)
5. Populate the spreadsheet using the zone data provided to you by your carrier. You can request this information from your account manager, but be sure to request it in an excel or CSV format, so it is easily copied into the import template. Be sure to save it as a CSV format when done.
6. From the shipping zone import screen select **Choose File** and locate your saved file.
  ![Custom Shipping Overview and Setup 6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcewMAB.jpg)
7. Check the **Test Upload** button and click **Upload file**.
  ![Custom Shipping Overview and Setup 7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcfVMAR.jpg)
8. A preview of the upload file will be displayed. Ensure that the data is correct, and if any errors are displayed, correct these in your CSV file and repeat the previous steps.
  ![Custom Shipping Overview and Setup 8.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcfkMAB.jpg)
9. When you are satisfied with the data, clear the **Test Upload** checkbox and click **Upload File**.
  You will receive a success message at the top of the screen when these zones have been successfully imported.

## Set up Shipping Services & Rates

1. In your Neto control panel go to **Settings & tools** > **Shipping.**
  ![Custom Shipping Overview and Setup 9.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfchWMAR.jpg)
2. Select **Shipping Services & Rates** and click **Add New**.
  ![Custom Shipping Overview and Setup 10.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcfeMAB.jpg)
3. ![Custom Shipping Overview and Setup 11.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcjhMAB.jpg)
  Populate the below fields as required and **Save**.
4. Select the relevant zones and click **Add Zones** - this will populate the zone fields.
  ![Custom Shipping Overview and Setup 12.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfckBMAR.jpg)
5. ![Custom Shipping Overview and Setup 13.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfckaMAB.jpg)
  Add the rate that you wish to charge for each zone, then **Save And Close**.

  Rates can also be imported from a data file. Please refer to our [detailed instructions](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates#2) for information on uploading rates from a CSV spreadsheet.

## Charge Types

In Neto you can charge for shipping in the following ways:

| Charge Type | Description |
| --- | --- |
| Fixed Rate By Product (Standard) | Charge fixed shipping rates on an item by item basis. Only used when you have defined a set express or standard shipping price for individual items in your inventory table. |
| Fixed Rate By Carton | Charge fixed shipping rates based on set quantities. |
| Fixed Rate By Item Qty | Charge fixed shipping rates based on the item quantities and customers location. |
| Fixed Rate By InvoiceTotal | Charge fixed shipping rates based on the invoice total and customers location. |
| Fixed Rate By Item Total | Charge fixed shipping rates based on the total value of specific items on an order and customers location. |
| Third Party Shipping Rate | Uses the third party hosted calculator to calculate shipping totals based on weight/ cubic dimensions of order |
| Flat Rate | Charge a flat shipping rate to specified locations regardless of order total or items on order. |
| Weight / Cubic | Charge for shipping based on the calculated order weight, cubic dimensions and customers location. |

## Tracking URLs

The shipping tracking urls for popular carriers are:

| Carrier | Tracking URL |
| --- | --- |
| Australia Post | [http://www.auspost.com.au/track/display.asp?id=#tracking_num#&type=consignment](Http://www.auspost.com.au/track/display.asp?id=#tracking_num#&type=consignment) |
| Australian air express | [http://www.aae.com/track?consignment=#tracking_num#](Http://www.aae.com/track?consignment=#tracking_num#) |
| Star track express | [http://www.startrackexpress.com.au/](Http://www.startrackexpress.com.au/) |
| Tnt | [http://www.tnt.com.au/](Http://www.tnt.com.au/) |
| Ipec | [https://online.ipec.com.au/trackandtrace/index.jsp](https://online.tol.com.au/trackandtrace/index.jsp) |
| Direct freight | [http://www.directfreight.com.au/consignmentstatus.aspx?consignment_no=#tracking_num#&lookuptype=0](http://www.directfreight.com.au/consignmentstatus.aspx?consignment_no=#tracking_num#&lookuptype=0) |
| Fastways | [http://www.fastway.com.au/1tracktrace.html](Http://www.fastway.com.au/1tracktrace.html) |

## Set Up Shipping Categories

Shipping categories are only used when there is a need to separate products into different shipping options. This can be used to permit certain items to be shipped by a specific option or carrier, or to charge a different shipping cost for these items. If you do not have this requirement, you can simply use the **Default** shipping category.

To set up a shipping category:

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
2. Select **Shipping Categories**.
  ![Custom Shipping Overview and Setup 14.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcXKMAZ.jpg)
3. Select **Add New**.
  ![Custom Shipping Overview and Setup 15.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Nfcl9MAB.jpg)
4. **Name** the category and give it a **Description** (if required), then **Save**.
  ![Custom Shipping Overview and Setup 16.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcSXMAZ.jpg)

You will now be able to map these categories to services when adding a shipping method.

If you would like to have more than one service available under one method, you can either create several methods and map them individually or you can create several categories and map them under one shipping method. This latter option is required to offer a shipping total at checkout when different shipping services are required for one order.

## Set Up Shipping Options

Shipping methods are the services that are made available to customers on the website front end of your website or eBay. To add a new method

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
2. Select **Shipping Options**.
  ![Custom Shipping Overview and Setup 17.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfclxMAB.jpg)
3. Click the green **Add New Shipping Option** button.
  ![Custom Shipping Overview and Setup 18.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Nfc0lMAB.jpg)
4. Populate the fields required and **Save**.

## Set up Carrier & Label Configuration

If you are using an integrated carrier we will assist you to set up your shipping labels and manifests as part of the setup process. Please complete the [Shipping Carrier Label Setup Form](https://forms.neto.com.au/services/shippingcarrierlabelsetup.html) for each of the carriers you wish to use. You will also need to have your shipping options setup for each carrier before the integration can be completed, as this is what the carrier integration is linked to.

> **Note:** If you're not using an integrated carrier, you can still print labels using a generic template. Neto Commerce Ship is not required for generic labels.

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
2. Select **Carriers & Labels**.
  ![Custom Shipping Overview and Setup 19.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcseMAB.jpg)
3. Click on **Add New** and select the relevant carrier.
  ![Custom Shipping Overview and Setup 20.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Nfct3MAB.jpg)
4. ![Custom Shipping Overview and Setup 21.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfctSMAR.jpg)
  Be sure to enter the **Return Address** details, and check the boxes of the shipping options that you wish to link. Then click the **Save & Close **button.

  If your return address details change or need to be updated you can edit these by opening the label and making the necessary changes.

## Shipping Manifests

When using an integrated carrier, electronic manifests will automatically be created from the consignments generated when processing orders. Manifests can then be submitted to the carrier through your Neto control panel. Best practice is to submit your manifest only after the goods have been accepted by the carrier. Submitting a manifest is not a method of alerting the carrier that a pick up is required, so you will still need to book pickups in your usual manner.

To review and submit a manifest:

1. In your Neto control panel navigate to **Shipping** > **Manifests and Consignments**.
2. Click on the **Manifest #** to open it and review the information. You must ensure that all information is correct, as this information is used by the carrier to invoice you.
  ![Custom Shipping Overview and Setup 22.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcukMAB.jpg)
3. ![Custom Shipping Overview and Setup 23.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NfcxZMAR.jpg)
  Once you have reviewed the manifest, it is ready to be submitted to the carrier by clicking **Submit Manifest To Carrier**.

  You will receive a green confirmation message when this has been successfully submitted.

  Once a manifest has been submitted, the system will automatically recognise this, and start a new manifest.