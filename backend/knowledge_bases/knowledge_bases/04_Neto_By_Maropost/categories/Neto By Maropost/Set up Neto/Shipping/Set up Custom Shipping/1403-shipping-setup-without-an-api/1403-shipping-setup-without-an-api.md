---
title: "Shipping Setup (Without an API)"
articleID: 1403
category: "Set up Neto > Shipping > Set up Custom Shipping"
knowledgeBase: "Neto By Maropost"
---

# Shipping Setup (Without an API)

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Overview

Not all shipping carriers have an API to push live shipping costs into your webstore checkout and cart. This makes setup slightly more complex, as you will need to modify the layout of the shipping rates provided to you, so that they can be imported into Neto.

Just as the rates are different between carriers, so are the areas that they service. For example, Want It Now deliver only in Sydney and Melbourne, while POS Laju operates in Malaysia. In Neto these areas are called **Zones**. When the cost to deliver to one or more postcodes is the same, they are grouped into the same zone. Neto allows you to create shipping zones for your each of your carriers as needed.

## Create Shipping Zones

While Neto comes pre-loaded with the zones for some shipping carriers, in most instances you will need to create them from the information your carrier provides. If your zones are not pre-configured (or you have custom zones), you will need to import them into Neto. Your carrier will provide you with a spreadsheet or pdf of the data, which will need to be transposed into the [Neto zone template](http://developers.neto.com.au/assets/downloads/templates/import_shipping_zones.csv) with the following field names:

| Field Name | Description | Example |
| --- | --- | --- |
| Country | Country code which applies to the zone. If left blank it will default to AU. | AU |
| Courier | Name of the courier the zones apply to. | Toll Ipec |
| From Post Code | Starting postcode for the zone | 4000 |
| To Post Code | Ending postcode for the zone | 4209 |
| Zone Code | Unique code to identify the zone for this carrier | Q1 |
| Zone Name | A longer field to help identify the zone, but often the same as the zone code | Brisbane |

Transposing the data from your carrier into the template will differ depending on the how the data is formatted. So general advice and tips on transposing the data can be found towards the end of this article.

> **Important:** Some carriers use on forwarding rates, which applies an extra cost to customers living in certain suburbs and/or postcodes. It is recommended that you create separate zones where onforwarding applies, so they can have their additional cost added during checkout.

Below is an example of a zone file, with some onforwarding zones highlighted.

And after transposing the data into the import template.

Once you have the data transposed from your carrier's supplied information, you can then [import the zones into Neto](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup#shipping-zones).

## Create Shipping Rates

Your shipping rates specify the costs to deliver to each zone that you've imported. These differ for everyone, based on your account with the carrier, and where you're shipping products from. Like the zones, you will need to transpose the data supplied by your carrier into the[Neto Commerce Shipping Rates Template](https://www.neto.com.au/assets/files/Templates/ShippingRate.csv)

| Field Name | Description |
| --- | --- |
| Zone Code | The area this rate will apply to. Must match a zone code in the system (see Creating Shipping Zones above) |
| Zone Name | The name of the zone this rate will apply to. Must match a zone name in the system (see Creating Shipping Zones above) |
| Courier Name | The name of the shipping carrier this rate applies to. This should match the **Courier** from the shipping zones |
| Minimum Charge | Provided by your carrier, this is the lowest amount to ship to this zone. If not provided it should be the same as **1st Parcel** |
| 1st Parcel | Cost for the initial parcel, regardless of weight. If not provided this will be the same as **Minimum Charge** |
| Per Subsequent Parcel | The cost per additional item to be sent. If this is not provided leave blank |
| Per Kg | The rate per kg to ship the item. This may work off cubic or dead weight depending on your carrier |
| Minimum | The minimum weight (in kg) of the order for this rate to apply. For example, if you wanted to import rates for both 500g and 3kg satchel, the 3kg satchel rates should have a minimum of 0.501 |
| Maximum | The maximum weight (in kg) of the order for this rate to apply. For example, if you wanted to import rates for a 500g satchel, they should have a maximum of 0.500 |
| Add Weight | This field allows you to add extra weight to orders between the minimum and maximum, to account for any special packaging that may be required |
| Delivery Time | The number of days the carrier estimates it will take to ship to this zone. If this is not provided, leave blank |
| Internal Note | This field is provided for you to record any internal details |

Like the zones, transposing the data from your carrier into the template will differ depending on the how the data is formatted. So general advice and tips on transposing the data can be found towards the end of this article.

Below is an example of a rates file provided by Hunter Express

And the template populated with the information

## Transposing Data: Tips and Advice

It's very unlikely that a shipping carrier will provide data to you matching Neto's import template, so you will most likely need to manipulate the layout of the data so that you can transpose into the templates.

**Please Note**: Microsoft Excel in Windows 10 has been used to demonstrate these tips, however other operating systems and spreadsheet programs such as Google Sheets, Openoffice or Numbers will have similar functionality.

### Data Filters

Rates tables can often include different services that are either not applicable to you, or that you don't want to offer. While you can find each applicable row and delete it, it's much easier to enable filters, and only display the data you want.

In the example below, rates are being filtered to only show **Road Express** sent from **Brisbane**.

Filtering the spreadsheet to only show the information applicable to your situation makes it much quicker to then populate the Neto template.

### Remove formatting

Shipping carriers often apply formatting and to the data so that it's presented in a way that's easy to read by a person, but which isn't useful when importing. Thankfully this is easy to remove by copying the data, and pasting the values only.

In the example below, all the data is selected on the spreadsheet (Ctrl +A), then copied to the clipboard. A new sheet is opened, and after right clicking the mouse, the option for pasting values is selected.

This makes it much easier to delete unnecessary data like blank rows and columns.

### Find And Replace

Find and replace (Ctrl + H) is a powerful tool that allows you to modify the data provided to match Neto. A great example of this is delivery time.

In the example below the column **Transit** doesn't list a single number, which is what we need for the import template. With find and replace, we can change **Overnight** to 1, remove the word **Days**, and when an estimate is give (e.g. 3 - 5) we'll change it so we're left with just the largest number.

The key to doing this is with the wildcard, represented by an asterisk (*). This wildcard represents any number of characters, so you can use it to trim a sequence from a field.