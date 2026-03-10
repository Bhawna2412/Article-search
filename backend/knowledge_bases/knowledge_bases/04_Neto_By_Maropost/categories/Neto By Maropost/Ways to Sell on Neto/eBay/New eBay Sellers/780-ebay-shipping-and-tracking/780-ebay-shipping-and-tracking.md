---
title: "eBay Shipping and Tracking"
articleID: 780
category: "Ways to Sell on Neto > eBay > New eBay Sellers"
knowledgeBase: "Neto By Maropost"
---

# eBay Shipping and Tracking

Shipping is set on the **Payments, Shipping & Returns** tab (if you use eBay business policies) or **Shipping** tab if you set it manually in Neto.

> **Important:** As a minimum, you will need to set up the standard fields, a specific method of charging for postage (flat, calculated, rates tables or freight), map shipping from eBay to Neto, and your tracking numbers when an order is dispatched.

## Standard Fields

The shipping tab of your listings rules templates has a number of standard fields to be set up:

| Field Name | Description |
| --- | --- |
| Postal Code | The post code of the warehouse these items are dispatched from. |
| City, Region | The city and state of the warehouse these items are dispatched from. |
| Country | The country these items are dispatched from. |
| [Buyer Requirements](https://www.ebay.com.au/help/selling/listings/creating-managing-listings/setting-buyer-requirements?id=4152) | Block users with violations on eBay, in specific countries, or using PO boxes from buying from you. |
| Ship To Locations | Do not use. Instead use the buyer requirements above. |
| Domestic Handling Time | Time it takes from when you receive an order, until it is dispatched. Best practice is to set it to no more than 2 days. |
| Apply my eBay promotional shipping rule | Set the promotion ID of any [shipping promotions](https://www.ebay.com.au/sh/mkt/promotionmanager/dashboard) created in eBay. |
| Shipping Insurance | Insurance amount to cover shipping mishaps. Doesn't work on eBay AU. |
| Related Neto Commerce Shipping Method | Set to :"Use the mapping defined on my Neto shipping methods, or select a shipping option that will appear on sales orders for products listed with this template. |

## Set up Shipping with Business Policies

eBay postage Policies must be created and edited in your [eBay account](https://www.bizpolicy.ebay.com.au/businesspolicy/manage). If you're using your eBay business policies to set up your shipping:

> **Note:** Can't find a policy you've created? Click the **Download Business Policies** button to sync your policies to Neto.

1. In your Neto control panel navigate to **eBay** > **Listing rule templates**.
2. Click on the rules template that needs shipping costs set up.
3. Click on the **Payments, Shipping & Returns** tab.
4. Enter your **Item location** details.
5. Click the **Shipping** section to see your eBay postage policies.
6. **Select your shipping policy** from the list and click the **Save template** button.

> **Note:** Set up the next part of your Business Policies, [Payment Policies](https://galaxy.maropost.com/kb/articles/779-ebay-payment-methods#set-up-ebay-payment-methods-in-maropost-commerce).

## Flat Rate Shipping

Shipping costs on your eBay listings can be set up through Neto a number of ways. Shipping is set on the listing rules template, so you should create different templates to accommodate different shipping calculations. To set up your eBay shipping costs:

1. In your Neto control panel navigate to **eBay** > **Listing rule templates**.
2. Click on the rules template that needs shipping costs set up.
3. Select **Flat** from the How do you charge for shipping? drop down menu.
4. Select which shipping services you wish to offer for products listed to eBay using this template.
5. Enter the postage costs, and you can optionally set a cost for additional items.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking1.05T5g00000t0SPoEAM.png)

> **Note:** The first service can be set as **This shipping service is Free**.

6. Click the **Save template** button.

> **Note:** Set up the next part of your listing rules template, [Payments](https://galaxy.maropost.com/kb/articles/779-ebay-payment-methods#set-up-ebay-payment-methods-in-maropost-commerce).

## Calculated Shipping

Calculated shipping works out the costs from your postcode to the buyer's, based on the product dimensions. The costs are the standard Australia Post rates. To set up calculated shipping:

1. In your Neto control panel navigate to **eBay** > **Listing rule templates**.
2. Click on the rules template that needs shipping costs set up.
3. Select **Calculated** from the How do you charge for shipping? drop down menu.
4. Select which shipping services you wish to offer for products listed to eBay using this template.

> **Note:** The first service can be set as **This shipping service is Free**.

5. In the Dimensions, Packaging & Handling section, select the **Use Item's Shipping Weight** checkbox.
6. Select a **Package Size** from the drop down list. It doesn't matter which you choose as it doesn't impact the listings at all.
7. In the **Dimensions** drop down box, select **Use Item's Shipping Dimensions**, and Neto will use the shipping dimensions you've entered on your products when listing to eBay.

> **Warning:** Failure to select these settings, or enter product dimensions will cause listing errors.
> ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking2.05T5g00000t0SU0EAM.png)

8. Click the **Save template** button.

> **Note:** Set up the next part of your listing rules template, [Payments](https://galaxy.maropost.com/kb/articles/779-ebay-payment-methods#set-up-ebay-payment-methods-in-maropost-commerce).

## International Shipping

To set up shipping services for international postage:

1. Select an option from the **How do you charge for international shipping?** dropdown to choose your option of calculating postage internationally.
  **Please Note**: International rate tables are not available on eBay.com.au
2. Click **Add Another Service** and choose the postage service you want to offer.
3. Enter a cost (unless you're using calculated by eBay) and choose which countries the cost and service applies to.

> **Note:** You can add the same service more than once with different shipping costs to different countries. e.g. AirMail Parcel - $30 to New Zealand, $40 to Asia, $50 to Europe

4. Repeat these steps to add more services and countries.

## Domestic Rates Table Shipping

eBay rates tables give you the ability to set postage costs for different regions based on the number of items, weight, or a surcharge. The standard and expedited rates are preferred over **Freight** shipping calculations as buyers can complete checkout without waiting for the postage cost to be updated.

To use eBay's rate tables you first need to create them in eBay. Currently eBay Australia only supports domestic rate tables.

### Set up Rate Tables in eBay

To set up your eBay rates tables, please follow the steps in the [eBay seller centre](https://sellercentre.ebay.com.au/postage-rate-tables).

> **Note:** International shipping rate tables are available on the eBay US, UK and DE sites. International rate tables work in much the same way as domestic rate tables. You can specify an alternative shipping rate for each shipping service category, in each of several international regions. The shipping service categories are Economy, Standard and Express.

### Use eBay Rate Tables in Neto

We recommend using [eBay Business Policies](https://galaxy.maropost.com/kb/articles/1079-ebay-business-policies) in conjunction with your rate tables, so that you can take advantage of more than the default table.

Each postage policy you create in eBay allows to to choose if rate tables apply. Update any policies that you want to use rate tables, by selecting this option and choosing the rate table you want applied.

> **Note:** Ensure your [eBay Authorisation Token](https://galaxy.maropost.com/kb/articles/1087-manage-your-ebay-integration#3) is valid to use business polices and download your rate tables.

![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking3.05T5g00000t0SzWEAU.png)

1. In your Neto control panel navigate to **eBay** > **Listing Rule Templates**.
2. Select the **Payments, Shipping & Returns** tab.
3. Choose the postage policy that has rate tables enabled, and click **Save Template**.

If you don't use business policies, you can still use rates tables shipping on your listings.

1. In your Neto control panel navigate to **eBay** > **Listing Rule Templates**.
2. Select the **Shipping** tab.
3. In the **How do you charge for shipping** drop down box, select **Use My eBay Domestic Rate Table**.
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking4.05T5g00000t0RxXEAU.png)
4. Select the rate table you want to use from the dop down menu. If you can't see the table you want to use, click the **Refresh rate tables now** link and wait for the page to refresh.
5. If your rate table is set as surcharge, select the services and costs that the surcharge should be added to as per normal. These will be used as a fallback in case the rate table can't work out a cost.

> **Note:** Set up the next part of your listing rules template, [Payments](https://galaxy.maropost.com/kb/articles/779-ebay-payment-methods#set-up-ebay-payment-methods-in-maropost-commerce).

## Freight Shipping

Neto listing rules template allow you to list products on eBay with shipping set to **Freight** (shipping calculated by the Neto shipping options). eBay requires you to populate the invoice each time a buyer purchases an item from you, with the correct freight rates, based on the buyer's location. This can often be a time consuming process and typically requires manual human intervention.

Neto solves this problem by automating freight invoices. When a buyer purchases an item on eBay and requests a total, Neto will automatically download the order details, calculate the cheapest postage cost, and populate their eBay invoice and checkout with the correct shipping cost based on their shipping postcode. This process takes around 15 minutes to complete.

### Select Freight Shipping on Listing Rules Template

To set up freight type shipping on your listing rules template:

1. In your Neto control panel navigate to **eBay** > **Listing Rule Templates**.
2. Select the rules template you wish to use **Freight** shipping, by selecting the **ID**, or create a new template.
3. Select the **Shipping Tab** and in the **How Do You Charge For Shipping?** choose **Freight**.
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking5.05T5g00000t0T1wEAE.png)
4. You also have the option to map your freight calculator to specific shipping options. In the **Related Neto Commerce Shipping Option** select a shipping option to use, or choose **Use The Mapping Defined On Each Of My Neto Commerce Shipping Options Or Cheapest Available**.
5. Click **Save Template**.

### Freight Shipping Option Visibility

When selecting cheapest of available shipping options you can limit which options Neto automatically chooses cheapest from by making the visible or not to eBay.

1. In your Neto control panel navigate to **Shipping** > **Shipping Options**.
2. Select the options you wish to hide or make visible by clicking the name of the shipping option.
3. Set the **Visible To eBay** drop down to **Yes** or **No** as required.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking6.05T5g00000t0T2IEAU.png)
4. Click **Save**.

This allows you to only use certain shipping options for your eBay freight rates.

### Freight Shipping Settings

To turn on automated freight invoicing in Neto:

1. In your Neto control panel navigate to **eBay** > **Setup & Tools**.
2. Choose **Settings**.
3. Scroll down to **Freight Invoice Settings**, and **Auto send updated eBay invoice with calculated shipping cost**.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking7.05T5g00000t0T7LEAU.png)
4. **Save** changes.

Neto will now automatically invoices the freight transactions on eBay every fifteen minutes.

> **Note:** Next to **Payment Instructions For eBay Invoice**, you can also add additional payment instructions that will appear in these invoices. The invoices sent are eBay invoices and are seen as coming from eBay itself (therefore bypassing any potential spam issues).

### Freight Shipping Checkout Workflow

When you list products with **Freight** shipping, the workflow from the customer's point of view is slightly different. To purchase a listing with **Freight Shipping**:

1. From the listing, the customer clicks **Buy it Now** and commit to the order.
  ![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking8.05T5g00000t0TAjEAM.png)
2. **Request Total** from the seller.
  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking9.05T5g00000t0TCQEA2.png)
3. **Submit Request**.
  ![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking10.05T5g00000t0TCuEAM.png)
4. The order will then be downloaded into Neto, and the shipping cost calculated. The cost is then uploaded back to eBay, and the customer receives an **Invoice Received** notification.
5. The customer can then complete the transaction in eBay, which updates the Neto order so that you can process it.

Neto automatically downloads eBay transactions and orders into your control panel every 15 minutes so that the freight shipping can be calculated and sent back to the buyer.

### Freight Limitations

> **Important:** Freight shipping is not without its drawbacks. Please review these limitations to decide if freight shipping is right for you.

- The shipping calculator embedded in the listing design requires specialised code to talk to the shipping matrix in Neto. eBay's active content restrictions will not allow this code, and in June 2017 the calculator will need design changes to function.
- You can only offer one shipping price to the customer, the cheapest option.
- Freight Shipping impacts the search rankings of the listing, so that a flat rate or free shipping will have a better chance of ranking higher
- You cannot offer local pick up as an option, it can only be organised through eBay messaging
- International shipping can't be given a separate option of calculation. If you use Freight for domestic, you must use Freight for international.

## Pickup

Pickup can only be set up in Neto with a valid domestic shipping service. To set up a pickup only service you must use eBay Business Policies.

> **Warning:** Do not use the **No Postage: Local pickup only** method of charging for your shipping. Your products will not list or revise correctly.

Choose either **Flat: same cost to all buyers** or **Calculated: Cost varies by buyer location**. In the first service, select **Local Pickup** from the drop down menu. Then add at least one domestic postage service as well.

![image11](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking11.05T5g00000t0TEqEAM.png)

> **Note:** Set up the next part of your listing rules template, [Payments](https://galaxy.maropost.com/kb/articles/779-ebay-payment-methods#set-up-ebay-payment-methods-in-maropost-commerce).

## Map eBay Shipping Services to Neto Commerce Shipping Options

When sales orders are downloaded from eBay Neto will (by default) apply the cheapest available shipping option that can serve the buyer's location. In many cases this is fine, but if a buyer has selected express postage, it can result in delayed delivery, an angry customer, and negative feedback. To correct this, you need to match up the eBay shipping services you have on your listings, to the shipping options set up in Neto.

For example, an eBay listing may offer three shipping options:

1. Free but unregistered
2. Registered Post with a charge
3. Express with a charge

In Neto, each of these shipping services will need to be mapped to the relevant shipping options that you want selected on your sales orders. You can then quickly process orders without having to worry about checking what the buyer chose on eBay, or how much they were charged.

To map your shipping options to the services used on eBay:

1. In your Neto control panel navigate to **Shipping** > **Shipping options**.
2. Select a shipping option you want to appear on sales orders downloaded from eBay.
3. Scroll to the bottom of the page to view three tabs Click the **Map This Option to eBay Shipping Services** tab.
  ![image12](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking12.05T5g00000t0SlvEAE.png)
4. Select **eBay Australia** (or equivalent) from the **eBay Site** dropdown.
5. Choose a shipping service that you're using on eBay, that you want to associate to this shipping option, in the **Search For eBay Shipping Service To Add** field.

> **Note:** Shipping services in use can be found on your listing rules templates or in eBay postage policies. A list of Shipping Service codes can also be found [below](https://galaxy.maropost.com/kb/articles/780-ebay-shipping-and-tracking#list).

> **Important:** If you're using domestic rate tables, `1526 Standard Delivery - AU_StandardDelivery` and `1527 Express Delivery - AU_ExpressDelivery` are the only vaild services that will work. Other services will not work correctly with your rate tables.

6. To add another shipping service, repeat steps 5 to 6.
7. Click the **Save** button.

Repeat these steps for any remaining services in use to your options. It's very important that you map express postage services to an equivalent in Neto, so that orders are processed correctly.

**Please Note**: Each eBay service can only be assigned to one Neto shipping option. If you map the same service to a second shipping option, the first one will be removed.

### Default Shipping Option

If you do not map eBay shipping services to shipping options correctly, the related eBay orders will be placed on-hold so that you can manually select the correct shipping option for each order. To choose a default shipping option:

1. In your Neto control panel, navigate **eBay** > **Setup & tools**.
2. In the **Configuration** section, click the **Settings** link.
  ![image13](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking13.05T5g00000t0T22EAE.png)
3. In the **Order Settings** section, locate the **Default shipping option for eBay Order dropdown**.
4. Select the relevant shipping option.
  Please Note

  : If you choose

  Do not select shipping option when option is not available

  , Neto will place orders on hold until you decide which shipping option to ship with. Other options include:
  - **Use cheapest shipping option when option is not available** (recommended).
  - Any other Neto shipping options (which will default all orders to the selected shipping option).
5. Click the **Save Changes** button.

Firstly, the options available in the shipping category assigned to the product are determined. From these, the zones are checked to work out which shipping options will deliver to the customer. Any conditions on the method (maximum weight/length are taken into account, and then the rates are determined.

It is important to note that there is no distinction made between standard and express shipping. The cheapest will most likely not be an express option, so all express services should be mapped.

## Add Tracking Numbers to eBay Orders

Tracking numbers for your dispatched orders are sent to eBay with carrier links so buyers can track delivery. The number that is sent to eBay will be the tracking number from the consignment label created by Neto. Tracking is only sent to eBay when the order is dispatched. If you dispatch an order, then add tracking later, eBay will not receive tracking information. If you're experiencing issues with your eBay orders tracking numbers displaying as "other" rather than the carrier, follow these steps to fix it.

> **Important:** If consignment labels are not used (e.g when dropshipping), then the tracking number will need to be manually added in Neto before dispatching the order, otherwise no tracking information will be sent to eBay.

### Add Tracking Numbers to Orders Automatically

Neto can automatically add the tracking numbers and carrier name automatically for most carriers. To set up automatic tracking numbers:

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
2. Click the **Shipping Services & Rates** link.
3. Click the rates table **ID** link you want to add the tracking number to, to edit its details.
4. Enter an **eBay Service Code** (listed in the [List of Tracking Codes section below](https://galaxy.maropost.com/kb/articles/780-ebay-shipping-and-tracking#list)) into the **Carrier** field for the eBay marketplace.
  ![image14](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking14.05T5g00000t0RRaEAM.png)

> **Important:** The service name and code can be found within the **Shipping** tab of the Listing Rules template (or within eBay if postage policies are in use).
> If you do not add the code, each shipping option will display as '**Other'** and customers won't be able to see the delivery status of their order.

5. Click the **Save** button.

### Add Tracking Numbers to Orders Manually

If you've set up the automatic method above you would only need to follow these steps for carriers which eBay doesn't recognise.

Ensure a Service & Rates table has been set up based on the carrier the tracking number relates to. Note that if you have one set up that you create and manifest to a carrier you will have to create a new one so the consignments you create do not get added to your normal carrier.

In this example we have created one called eBay Tracking - Star Track so that way if you already use Star Track as a carrier option you can continue using it for those consignments but you can apply tracking to this service for ones that say are sent by a drop shipper through Star Track.

![image15](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking15.05T5g00000t0NdgEAE.png)
**Please Note**: A generic shipping carrier needs to be set up so that you can add consignments that are not manifested to a carrier.

1. In your Neto control panel, navigate to **Settings & tools** > **Shipping**.
2. Click the **Carriers & Labels** link.
3. Click the **Add New** button.
4. Select the relevant carrier from the list.
5. Enter a relevant **Name**.
6. Select all the relevant services in the **Shipping Service** section.
  ![image16](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking16.05T5g00000t0T1xEAE.png)
7. Scroll to the top of the page and click the **Manifest & Label Settings** link.
8. Select 'No' from the **Require cubic or weight for each article** dropdown.
9. Select 'Yes' from the **Do Not Populate Consignment Number** dropdown.
10. Click the **Save** button.
11. Open the relevant order.
12. Scroll to the bottom of the page and click the **Pack** button.
  ![image17](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking17.05T5g00000t0SyZEAU.png)
13. Click the **Auto Generate Shipping Consignment** button adn select the relevant carrier service from the dropdown.
14. Enter a tracking number to the **Tracking / Consignment Number **field.
15. Click the **Add Article to Consignment **button.
  Your consignment should look similar to this.

  ![image18](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayShippingandTracking18.05T5g00000t0TJlEAM.png)

  You don't need to enter package dimensions or weight as this will be ignored thanks to earlier setting.
16. Click the **Save Changes** button.
  Your consignment has been saved and added to a generic manifest.
17. Click the **Dispatch** button.
  The tracking number and postage date is added to transaction on eBay.

> **Important:** We recommend you submit or lock the generic manifest on a regular basis to keep your consignments separated by certain date ranges. As it is a generic carrier the manifest will not be submitted to anyone but rather locked down in our system so a new one will then be used for subsequent tracking numbers.

### List of Tracking Codes

The below table lists the current tracking codes accepted by eBay. If your carrier is not listed, please use `Other` in the eBay Service Code field.

| Shipping service name | eBay service code (use this for mapping) | Supported eBay sites |
| --- | --- | --- |
| A-1 Courier | A1CourierServices | US |
| ABF Freight | ABF | US |
| AeroPost | AeroPost | JM, GT, CR, PA, TT, SV, CO, HN, CL, DO |
| Allied Express | ALLIEDEXPRESS | AU |
| AMWST | AMWST | US |
| An Post | AnPost | IE |
| APC Postal Logistics | APC | UK |
| Aramex | ARAMEX | USA, BH, IL, AE, IN, UA, KW, SA, QA |
| Arvato | ARVATO | USA, CA, UK, FR, IT, GR, DE, CH, AT, BE, NL, SI, LT, SK |
| ASM | ASM | ES |
| Australian Air Express | AustralianAirExpress | AU |
| Australia Post | AustraliaPost | USA, UK, DE, AU |
| Averitt Express | AVRT | US |
| BRT Bartolini | Bartolini | IT |
| Belgian Post Group | BELGIANPOST (also coded as `BPost`) | USA, UK, DE MO, BE |
| BKNS | BKNS | US |
| Blue Package Delivery | BluePackage | US |
| bpost | BPost (also coded as `BELGIANPOST`) | USA, UK, DE, MO, BE |
| BusinessPost | BusinessPost | UK |
| Canpar Courier | CanPar | USA, CA, IT, UK, DE, AU |
| Central Freight Lines | CENF | US |
| CEVA Logistics | CEVA | USA, IT |
| China Post | ChinaPost | USA, UK, DE |
| Chronoexpres | Chronoexpres | ES |
| Chronopost | Chronopost | USA, FR, UK, DE |
| Chukou1 | CHUKOU1 | US |
| Chunghwa Post | ChunghwaPost | USA, UK, DE |
| CitiPost | CitiPost | USA, IE, CA, UK, FR, IT, HK, DE, AU, ES, CN, BE, UZ, PL, NL |
| Citylink | CityLink | IE |
| Click & Quick | ClickandQuick | IT |
| Con-way Freight (now XPO Logistics) | CNWY | US |
| Coliposte Domestic | ColiposteDomestic | USA, UK, DE |
| Coliposte International | ColiposteInternational | USA, UK, DE |
| Colissimo | Colissimo | FR |
| CollectPlus | CollectPlus | UK |
| Correos | Correos | ES, USA, UK, DE |
| CPC Logistics | CPC | USA, CA, UK, DE |
| DAI Post | DAIPost | UK, AU |
| Day & Ross | DayandRoss | USA, CA, UK, AU |
| DB Schenker | DBSchenker | US |
| Deutsche Post | DeutschePost | USA, UK, DE |
| DHL Express | DHL | IE, USA, ID, MX, MY, CA, UK, FR, IT, HK, TW, DE, CH, KR, AU, ES, AT, CN, SG, BE, TH, NL |
| DHL EKB | DHLEKB | US |
| DHL Express | DHLEXPRESS | IT, DE |
| DHLG | DHLGlobalMail | USA, UK, DE |
| DHL Global Mail | DHLGlobalMail | USA, UK, DE |
| Die Schweizerische Post | DieSchweizerischePost | CH |
| Direct Freight | direct freight, directfreight, direct_freight | AUS |
| DPD (Dynamic Parcel Distribution) | DPD | IE, BG, AT, UK, HR, BE, HU, PL, CZ, DE, NL, CH |
| DPX Thailand | DPXThailand | USA, TH |
| E-go | EGO | AU |
| Exapaq (now DPD France) | Exapaq | FR |
| Fastway | Fastway | IE |
| Fastway Couriers | FASTWAYCOURIERS | AU |
| FedEx | FedEx | USA, IE, UK, FR, IT, DE, CH, AU, ES, AT, CN, BE, PL, NL |
| FedEx SmartPost | FedExSmartPost | USA, UK, DE |
| Flyt | FLYT | US |
| Flyt Express | FLYTExpress | UK, DE |
| Flyt Express US Direct line | FlytExpressUSDirectline | USA, UK, DE |
| 4PX | FourPX | US |
| 4PX China | FourPXCHINA | USA, CN, UK |
| 4PX Express | FourPXExpress | UK, DE |
| 4PX Express Co. Ltd | FourPXLTD | USA, UK, DE |
| FulfilExpress-AccStation | FulfilExpressAccStation | USA, UK, DE |
| FulfilExpress-eForCity | FulfilExpresseForCity | USA, UK, DE |
| FulfilExpress-EverydaySource | FulfilExpressEverydaySource | USA, UK, DE |
| FulfilExpress-iTrimming | FulfilExpressiTrimming | USA, UK, DE |
| GLS (General Logistics Systems) | GLS | IE, ES, AT, IT, FR, BE, DE, NL |
| MXD Group (formerly Home Direct USA) | HDUSA | US |
| Hermes Group | Hermes | USA, AT, UK, DE |
| Home Delivery Network | Use Yodel instead |  |
| Hong Kong Post | HongKongPost | USA, UK, DE, AU |
| Hunter Express | Hunter Express | AU |
| iloxx eService | iLoxx | USA, UK, DE |
| India Post | IndiaPost | USA, UK, DE |
| Indonesia Post | IndonesiaPost | USA, UK, DE |
| Interlink Express | Interlink | UK |
| InterPost | InterPost | IE, USA, CA, UK, FR, IT, HK, DE, RO, AU, ES, AT, CN, CY, BE, PL, NL |
| IoInvio | IoInvio | IT |
| i-parcel UPS | Iparcel | USA, MX, MY, SG, HK, ZA, TR, CH, JP, BR |
| Israel Post | IsraelPost | US |
| Japan Post | JapanPost | USA, UK, DE |
| Kiala (UPS Access Point) | KIALA | ES, USA, FR, UK, BE, DE, NL |
| Korea Post | KoreaPost | USA, UK, DE |
| Landmark Global | Landmark | USA, NZ, NO |
| La Poste | LAPOSTE | USA, FR, UK, DE |
| Malaysia Post | MALAYSIAPOST | USA, UK, DE |
| Manna Distribution Services | MannaFreight | US |
| Metapack | Metapack | UK |
| MNG Kargo | MNGTurkey | USA, UK, TR |
| Mondial Relay | MondialRelay | FR |
| MRW | MRW | ES |
| MSI Transportation | MSI | US |
| Nacex | Nacex | ES, USA, UK, DE |
| New England Motor Freight | NEMF | US |
| Old Dominion Freight Line | ODFL | US |
| OnTrac Shipping | ONTRACK | US |
| Osterreichische Post | OsterreichischePostAG | AT |
| Overnite (now UPS Freight) | OVNT | US |
| Parcelforce | Parcelforce | USA, UK, DE |
| International Bridge Domestic delivery | ParcelPool | US |
| PHLPost (Philippine Postal Corporation) | Philpost | USA, UK, DE |
| Pilot Freight Services | Pilot | US |
| PITT OHIO | PITD | US |
| Poczta Polska | PocztaPolska | PL |
| Pocztex | Pocztex | PL |
| Poste Italiane | PosteItaliane | IT |
| Post Italiano | POSTITALIANO | USA, UK, DE |
| PostNL | PostNL | NL |
| PostNord | PostNordNorway | UK, NO |
| Prestige Expedite (now LaserShip) | Prestige | US |
| Quantium Solutions | Quantium | USA, UK, DE, AU |
| Reddaway | RETL | US |
| Royal Mail | RoyalMail | USA, UK, DE |
| Saia LTL Freight | SAIA | US |
| SDA Express Courier | SDA | IT |
| Shippit | shippit | AU |
| Singapore Post | SINGAPOREPOST | USA, UK, DE |
| Siodemka (DPD Poland) | Siodemka | PL |
| Sioli & Fontana | SioliandFontana | USA, CA, IT |
| Skynet (Malaysia) | SkynetMalaysia | USA, MY |
| Smart Send Courier Service | SMARTSEND | AU |
| SGT Corriere Espresso | Sogetras | IT |
| Spediamo | Spediamo | IT |
| Spee-Dee Delivery Service | SpeeDee | US |
| StarTrack | StarTrack | AU |
| Suntek Express LTD | SuntekExpressLTD | USA, UK, DE |
| Swiss Post | SwissPost | USA, UK, CH |
| TELE | TELE | US |
| Thailand Post | THAILANDPOST | USA, UK, DE |
| Team Global Express (Japan Post) | Ipec | AU |
| TPG Logistics | TPG | USA, UK, DE |
| UBI Smart Parcel | UBI | US |
| UK Mail | UKMail | UK |
| United Parcel Service | UPS | USA, IE, UK, FR, IT, DE, CH, ES, AT, CN, BE, PL, NL |
| UPS Mail Innovations | UPSMailInnovations | USA, UK, DE |
| U.S. Postal Service | USPS | USA, CN, UK, DE |
| USPS Commercial ePacket | USPSCeP | USA, CA |
| USPS Priority Mail International | USPSPMI | USA, CA |
| Vietnam Post | VietnamPost | USA, UK, DE |
| Vitran Express | VITR | US |
| WIN | IT America | Winit |
| wnDirect | WNdirect | USA, CA, IT, FR, UK, RU, AU |
| WPX Delivery Solutions | WPX | US |
| YANWEN Express | YANWEN | USA, UK, DE |
| Yodel | Yodel | UK |
| YRC Freight | YRC | US |

### Legacy Tracking Codes

The below tracking codes are still accepted by eBay but are no longer being updated. Please use service codes from the table above where possible.

|  |  |  |  |
| --- | --- | --- | --- |
| **Shipping Service Name** | **eBay Service Code (use this for mapping)** | **Max shipping days** | **Min shipping days** |
|  |  |  |  |
| Standard Shipping | AU_standardShipping | 6 | 2 |
| Standard International Flat Rate Postage | AU_StandardInternational | 15 | 3 |
| Standard Delivery - Registered | AU_StandardDeliveryRegisted | 6 | 1 |
| Standard delivery | AU_StandardDelivery | 6 | 1 |
| Australia Post Parcel Post Parcel + Signature | AU_RegularParcelWithTrackingAndSignature | 6 | 2 |
| Australia Post Regular Parcel + Tracking | AU_RegularParcelWithTracking | 6 | 2 |
| Australia Post Parcel Post Parcel | AU_Regular | 6 | 2 |
| Australia Post Prepaid Parcel Post 5kg Satchel + S | AU_RegisteredParcelPostPrepaidSatchel5kg | 6 | 2 |
| Australia Post Prepaid Parcel Post 500g Satchel + | AU_RegisteredParcelPostPrepaidSatchel500g | 6 | 2 |
| Australia Post Prepaid Parcel Post 3kg Satchel + S | AU_RegisteredParcelPostPrepaidSatchel3kg | 6 | 2 |
| Australia Post Regular Parcel Registered | AU_RegisteredParcelPost | 6 | 1 |
| Australia Post Regular Parcel Registered | AU_Registered | 6 | 2 |
| Australia Post Prepaid Parcel Post 5kg Satchel | AU_PrePaidParcelPostSatchels5kg | 6 | 2 |
| Australia Post Prepaid Parcel Post 500g Satchel | AU_PrePaidParcelPostSatchels500g | 6 | 2 |
| Australia Post Prepaid Parcel Post 3kg Satchel | AU_PrePaidParcelPostSatchels3kg | 6 | 2 |
| AusPost Registered Post International Parcel | AU_AusPostRegisteredPostInternationalParcel | 10 | 3 |
| AusPost Registered Post International Padded Bag 5 | AU_AusPostRegisteredPostInternationalPaddedBag500g | 10 | 3 |
| AusPost Registered Post International Padded Bag 1 | AU_AusPostRegisteredPostInternationalPaddedBag1kg | 10 | 3 |
| AusPost Air Mail Parcel | AU_AirMailInternational | 10 | 3 |
| Sendle | AU_Sendle | - | - |
| Couriers Please | AU_CouriersPlease | - | - |
| eBay Now Same-Day Scheduled Delivery | AU_eBayNowSameDayDelivery | 1 | 1 |
| eBay Now Immediate Delivery | AU_eBayNowImmediateDelivery | 1 | 1 |
| Local Pickup | AU_Pickup | 0 | 0 |
| UBI Smart Parcel | AU_UBISmartParcelFromAbroad | 10 | 5 |
| Ipec Global Economy | AU_TollGlobalEconomyFromAbroad | 8 | 4 |
| TNT International Express | AU_TntIntlExp | 4 | 2 |
| Standard delivery from outside AU | AU_StandardDeliveryFromOutsideAU | 10 | 6 |
| Other Int'l Postage (see description) | AU_OtherInternational | 0 | 0 |
| Expedited delivery from outside AU | AU_ExpeditedDeliveryFromOutsideAU | 5 | 1 |
| Economy delivery from outside AU | AU_EconomyDeliveryFromOutsideAU | 20 | 11 |
| Ipec Consumer Delivery | AU_Toll | 3 | 1 |
| TNT | AU_TNT | 3 | 1 |
| Star Track Express | AU_StarTrackExpress | 3 | 1 |
| Australia Post Express Post 5kg Satchel | AU_PrePaidExpressPostSatchel5kg | 3 | 1 |
| Australia Post Express Post 500g Satchel | AU_PrePaidExpressPostSatchel500g | 3 | 1 |
| Australia Post Express Post 3kg Satchel | AU_PrePaidExpressPostSatchel3kg | 3 | 1 |
| Australia Post Express Post 500g Satchel + Signatu | AU_PrePaidExpressPostPlatinum500g | 3 | 1 |
| Australia Post Express Post 3kg Satchel + Signatur | AU_PrePaidExpressPostPlatinum3kg | 3 | 1 |
| AusPost PrePaid Express Post International Satchel | AU_PrePaidExpressPostInternationalSatchels3kg | 7 | 3 |
| AusPost PrePaid Express Post International Satchel | AU_PrePaidExpressPostInternationalSatchels2kg | 7 | 3 |
| AusPost PrePaid Express Post International Envelop | AU_PrePaidExpressPostInternationalEnvelopeC5 | 7 | 3 |
| AusPost PrePaid Express Post International Envelop | AU_PrePaidExpressPostInternationalEnvelopeB4 | 7 | 3 |
| AusPost PrePaid Express Post International Box 5Kg | AU_PrePaidExpressPostInternationalBox5kg | 7 | 3 |
| AusPost PrePaid Express Post International Box 20K | AU_PrePaidExpressPostInternationalBox20kg | 7 | 3 |
| AusPost PrePaid Express Post International Box 10K | AU_PrePaidExpressPostInternationalBox10kg | 7 | 3 |
| Fastway Couriers | AU_FastwayCouriers | 3 | 1 |
| Australia Post Express Post 5kg Satchel + Signatur | AU_ExpressPostSatchel5kgSignature | 3 | 1 |
| Australia Post Express Post Parcel + Signature | AU_ExpressPostParcelSignature | 3 | 1 |
| AusPost Express Post International Parcel | AU_ExpressPostInternational | 7 | 3 |
| Express delivery | AU_ExpressDelivery | 3 | 1 |
| AusPost Express Courier International | AU_ExpressCourierInternational | 4 | 2 |
| Australia Post Express Post Parcel | AU_Express | 3 | 1 |
| Expedited Shipping | AU_expeditedShipping | 3 | 1 |
| Express International Flat Rate Postage | AU_ExpeditedInternational | 7 | 3 |
| eBay Now Next-Day Scheduled Delivery | AU_eBayNowNextDayDelivery | 2 | 2 |
| DHL | AU_DHL | 3 | 1 |
| Courier | AU_Courier | 3 | 1 |
| Australian air Express Metro 15kg | AU_AustralianAirExpressMetro15kg | 3 | 1 |
| Australian air Express Flat Rate 5kg | AU_AustralianAirExpressFlatRate5kg | 3 | 1 |
| Australian air Express Fl |  |  |  |