---
title: "Add or Edit Shipping Rates"
articleID: 1223
category: "Set up Neto > Shipping > Maintenance & Tweaks - Shipping"
knowledgeBase: "Neto By Maropost"
lastUpdated: 2026-01-13
---

# Add or Edit Shipping Rates

The shipping matrix comprises service and rate tables, which collectively calculate the customer delivery charges. The final cost depends on the designated service [**zones**](https://galaxy.maropost.com/kb/articles/601#set-up-shipping-zones) and configured shipping [**options**](https://galaxy.maropost.com/kb/articles/1385-add-a-shipping-option).

## Add a Rate Table

To prepare your own rate tables, follow the steps shown below:

1. From your Control Panel account, navigate to **Settings & Tools** and click on **Shipping**.
  ![shiprate0.png](https://us.v-cdn.net/6038474/uploads/7GR0VLAW83K5/shiprate0.png)
2. Under the **Shipping** subsection, select **Shipping Services & Rates**.
  ![shiprate1.png](https://us.v-cdn.net/6038474/uploads/JLUY5XEVOYLG/shiprate1.png)
3. To create a new rate table, click on the **Add New** button.
  ![shiprate2.png](https://us.v-cdn.net/6038474/uploads/RAOMFNKNQW2R/shiprate2.png)
4. Configure the rate fields using the table provided in the [**Rate Field Description**](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates#rate-field-description) topic. Click on **Save**.
  ![shiprate3.png](https://us.v-cdn.net/6038474/uploads/93NCGV201P8O/shiprate3.png)
5. Next, select the applicable zones for the rates and click on **Add Zones**. This action will populate the zone fields.
  ![shiprate4.png](https://us.v-cdn.net/6038474/uploads/JXP97YASNFH0/shiprate4.png)
6. Enter the desired rate (such as shipping cost or percentage of total items) for each zone, then click on** Save & Close**.
  ![shiprate5.png](https://us.v-cdn.net/6038474/uploads/XD8JEYRC6AN1/shiprate5.png)

## Rate Field Description

Use the data in the table displayed below to configure your shipment rate fields:

| Field Name | Field Description |
| --- | --- |
| Name | The name of the shipping option that appears in your order tracking emails. |
| Charge Type | Determines how you will charge for shipping. Refer to the table below for more information. |
| Status | Toggles the rate table as active or inactive. |
| Internal Description | The name of the shipping option that appears in your order tracking emails. |
| Tracking URL | The tracking URL is emailed to the customer upon dispatch of their goods, allowing them to check the status of their delivery. |
| Cubic weight modifier | How many kilograms equal 1 cubic meter (determined by your carrier)? |
| Packaging allowance % or kg | Buffer to the calculated order weight with which shipping charges are calculated (not visible to the customer). |
| Packaging allowance is added when generating shipping consignments | Use this setting to ignore the packaging allowance when creating a consignment. |
| Fuel levy % or $ | The percentage or dollar value added here will increase the system-calculated shipping rates by this value (not visible to the customer). |
| Handling cost | The value added here will increase the system-calculated shipping rates by this value (not visible to the customer). |
| Maximum Length | The upper size that your carrier will ship (determined by your carrier). |
| Minimum Charge | The minimum that will be charged for this shipping option, regardless of the rates defined |
| Maximum Charge | The maximum that will be charged for this shipping option, regardless of the rates defined |
| GST | Checking “**Prices Are GST Inclusive**” will tell the system not to add GST to the shipping cost. |
| Ship To PO Box | This will tell the system that this shipping option is available to PO box addresses. |
| Ignore the Physical Weight Of Products | Selecting this will mean that only cubic weight is used. |
| Round Up To Nearest kg | This will tell the system to round all order weights up to the nearest kg. |
| Landed Cost Surcharge | Let's you add a tariff/surcharge on all orders shipped to a particular country. |
| eBay and other e-commerce carrier codes | Used for tracking codes on various e-commerce sites such as Amazon, Shopify, and [**eBay**](https://galaxy.maropost.com/s/article/ebay-shipping-and-postage). |

## Edit a Rate Table

Rate tables can be modified to adjust delivery costs and other parameters. To edit an existing rate table, follow the steps shown below:

1. From your Control Panel account, navigate to **Settings & Tools** and click on **Shipping**.
  ![shiprate0.png](https://us.v-cdn.net/6038474/uploads/JMXTIF9WML5L/shiprate0.png)
2. Under the **Shipping** subsection, select **Shipping Services & Rates**.
  ![shiprate1.png](https://us.v-cdn.net/6038474/uploads/PB7V8TNGJEF9/shiprate1.png)
3. Choose a rate table you want to edit.
  ![shiprate9.png](https://us.v-cdn.net/6038474/uploads/UD8NSIF6PSSY/shiprate9.png)
4. Reference the table mentioned in the [**Rate Field Description**](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates#rate-field-description) topic to modify the relevant fields. You can also add or remove zones or change the rates for individual zones.
  ![shiprate10.png](https://us.v-cdn.net/6038474/uploads/Q8MF5H8PZYRT/shiprate10.png)
5. Upon completion, click **Save**.

## Import Rates

Shipping rates can alternatively be imported into Neto via a CSV file. To import rates, follow the given steps:

1. From your Control Panel account, navigate to **Settings & Tools** and click on **Shipping**.
  ![shiprate0.png](https://us.v-cdn.net/6038474/uploads/3L3UZWJL4S2Q/shiprate0.png)
2. Under the **Shipping** subsection, select **Shipping Services & Rates**.
  ![shiprate1.png](https://us.v-cdn.net/6038474/uploads/VJKVCZQBRZIV/shiprate1.png)
3. Next, click on the **Add New** button.
  ![shiprate2.png](https://us.v-cdn.net/6038474/uploads/B3SB1QF01SFS/shiprate2.png)
4. Enter a name, set the status to “**Active**”, and configure the charge type as “**Weight/Cubic**”. The cubic weight modifier, ship to PO box, tracking URL, and fuel levy % parameters should be obtained from your carrier. Upon completion, click **Save**.
  ![shiprate11(1).png](https://us.v-cdn.net/6038474/uploads/CILRATRJ1R3B/shiprate11-281-29.png)
5. Scroll to the bottom of the page and click on the “**Export Shipping Rate Table as .CSV File**” button to download and access the template.
  ![shiprate12.png](https://us.v-cdn.net/6038474/uploads/R5Q6PMHWJM6N/shiprate12.png)
6. Enter the details provided by your carrier into the file you have downloaded. Return to the edit shipping rates page, click on the **Import Zones and Rates [+]** button, click on Choose File, and upload the file you have recently modified.
  ![shiprate13.png](https://us.v-cdn.net/6038474/uploads/5FG39C3HAL1A/shiprate13.png)
7. A preview of the rates will be displayed. Verify the data accuracy, then select **Save**.
  ![shiprate14.png](https://us.v-cdn.net/6038474/uploads/L6KLHB5Z6WQ9/shiprate14.png)

## Charge Types

You can charge for shipping rates in the following ways:

| Charge Type | Description |
| --- | --- |
| Fixed Rate By Product (Standard) | Charge fixed shipping rates on an item-by-item basis. Only used when you have defined a set express or standard shipping price for individual items in your inventory table. |
| Fixed Rate By Carton | Charge fixed shipping rates based on set quantities. |
| Fixed Rate By Item Qty | Charge fixed shipping rates based on the item quantities and the customer's location. |
| Fixed Rate By Invoice Total cubic | Charge fixed shipping rates based on the invoice total and the customer's location. |
| Fixed Rate By Item Total | Charge fixed shipping rates based on the total value of specific items on an order and the customer's location. |
| Third Party Shipping Rate | Uses the third-party hosted calculator to calculate shipping totals based on the weight/cubic dimensions of the order. |
| Flat Rate | Charge a flat shipping rate to specified locations regardless of the order total or the number of items ordered. |
| Weight / Cubic | Charge for shipping based on the calculated order weight, cubic dimensions, and customer location. |

## Tracking URLs

The shipping tracking URLs for popular carriers are:

| Carrier | Tracking URL |
| --- | --- |
| Australia Post | [http://www.auspost.com.au/track/display.asp?id=#tracking_num#&type=consignment](http://www.auspost.com.au/track/display.asp?id=#tracking_num#&type=consignment) |
| Australian Air Express | [http://www.aae.com/track?consignment=#tracking_num#](http://www.aae.com/track?consignment=#tracking_num#) |
| Star Track Express | [http://www.startrack.com.au/](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.startrack.com.au%2F) |
| Tnt | [http://www.tnt.com.au/](http://www.tnt.com.au/) |
| Toll ipec | [https://online.toll.com.au/trackandtrace/index.jsp](https://online.toll.com.au/trackandtrace/index.jsp) |
| Direct Freight | [http://www.directfreight.com.au/coads/consignment-status.html](http://www.directfreight.com.au/coads/consignment-status.html) |
| Fastways | [http://www.fastway.com.au/1tracktrace.html](http://www.fastway.com.au/1tracktrace.html) |

## Adding Landed Cost Surcharge

Surcharge rates can be added to your orders depending on the country to which they’re being shipped. This option can be availed to cover the cost of import tariffs imposed by the destination country.

1. To begin with, scroll to the **Landed Cost Surcharge** region and click on **Add Destination Country**.
  ![shiprate31.png](https://us.v-cdn.net/6038474/uploads/HU4A6YTL2E1K/shiprate31.png)
2. From the dropdown list, choose a country to which the package is destined to be shipped. Next, insert the surcharge cost by clicking on the **Add COO (Country Of Origin) Surcharge** button.
  ![shiprate32.png](https://us.v-cdn.net/6038474/uploads/DV3JTMR4YDRS/shiprate32.png)
3. Select the country from the dropdown list. Here, the “**COO**” field means the country from which the package originates.
  ![shiprate33.png](https://us.v-cdn.net/6038474/uploads/4TI7S2MGMGZP/shiprate33.png)
4. Next, enter the country of origin’s surcharge value (%). The surcharge is calculated as a percentage of the product subtotal proportional to the product’s price. The surcharge value (%) is configurable depending on the current tariff rates levied by that country.
  ![shiprate34.png](https://us.v-cdn.net/6038474/uploads/TGWK77L01T6G/shiprate34.png)
5. For shipments whose country of origin isn’t configured or whose COO surcharge is not set up in the rate table, an additional surcharge field (called “**Default**”) is available. Here, you can configure the rates that comply with your local region.
  ![shiprate39.png](https://us.v-cdn.net/6038474/uploads/WZG02CTUIUYU/shiprate39.png)
6. Similarly, you can add multiple destinations and define package surcharges for shipments originating from different countries.
  ![shiprate36.png](https://us.v-cdn.net/6038474/uploads/S1FHLMIKY1QV/shiprate36.png)