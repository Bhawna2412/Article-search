---
title: "Shipping Overview"
articleID: 65
category: "Set up Neto > Launch your Store > Launch Webstore > Set up Shipping"
knowledgeBase: "Neto By Maropost"
---

# Shipping Overview

## Shipping Matrix

A Neto shipping matrix is made up of the following:

- [Shipping Zones](https://galaxy.maropost.com/kb/articles/65-shipping-overview#shipping-matrix)
- [Shipping Services and Rates](https://galaxy.maropost.com/kb/articles/65-shipping-overview#shipping-zones)
- [Shipping Categories](https://galaxy.maropost.com/kb/articles/65-shipping-overview#shipping-services-and-rates)
- [Shipping Options](https://galaxy.maropost.com/kb/articles/65-shipping-overview#shipping-categories)

![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShippingOverview1.05T5g00000sz1SUEAY.png)

### Shipping Zones

Shipping zones are sets of postcodes grouped together due to close geographical proximity. Shipping Zones are also used to group areas of the same shipping attributes (usually pricing). Shipping Zones are different for each carrier and can even be different depending on your account type.

For example, you may have a zone for Sydney Metro, which contains postcode 2000 (among others), where the shipping is free through Australia Post.

In Neto, Shipping Zones are made up of a table of Zone Codes assigned to **From** and **To Post Code** ranges.

A shipping zone may also be as broad as a state, a country or countries.

### Shipping Services and Rates

Services and rates are what define the cost for a shipping service. In Neto, **Service and Rates** tables are used to define pricing in conjunction with a **Shipping Zones** table. They are used to apply charges to specific zones, including:

- **Fixed Rate by Item (Standard)**
Charge fixed shipping rates on an item-by-item basis. Only used when you have defined a set express or standard shipping price for individual items in your inventory table.
- **Fixed Rate by Carton**
Charge fixed shipping rates based on set quantities and customers location.
- **Fixed Rate by Item Quantity**
Charge fixed shipping rates based on the item quantities and customers location.
- **Fixed Rate by Invoice Total**
Charge fixed shipping rates based on the invoice total and customers location.
- **Fixed Rate by Item Total**
Charge fixed shipping rates based on the total value of specific items on an order and customers location.
- **Third Party Shipping Rate (API)**
Uses the third party hosted calculator to calculate shipping totals based on weight/ cubic dimensions of order
- **Flat Rate**
Charge a flat shipping rate to specified locations regardless of order total or items on order.
- **Weight/Cubic**
Charge for shipping based on the calculated order weight, cubic dimensions and customers location.

Additional charges can also be defined here (e.g. fuel levies or handling fees). Rates are then linked to a Category so that you can customise which rates apply to which products.

For example, free shipping to Sydney Metro (Shipping Zone) may only be for products that are under 500g in weight.

**Please Note**: The most commonly used charges are Flat Rate shipping, using a third party shipping rate or charging by weight / cubic meter. Additional charges can also be applied here (e.g. fuel levies / handling fees).

### Shipping Categories

Shipping Categories are used when there is a need to separate products into different shipping options (e.g. bulky, fragile items). Shipping Categories can be used to only permit certain items being shipped by a specific option or carrier, or to charge a different shipping cost for these items.

Neto has two shipping categories configured: 'Default' and 'Dangerous Goods', however, more can be created.

### Shipping Methods/Options

Shipping options (or methods) are the services that are made available to your customers on the website front end, or to eBay.

**Shipping Options** link **Shipping Categories** to your **Shipping Services and Rates** and are visible to the customer.

For example, rates for free shipping to Sydney Metro (Shipping Zone) may also apply to eParcel rates for everyone outside of the Sydney Metro Shipping Zone.

## Drop shipping

Drop shipping is a supply chain management technique in which the retailer does not keep goods in stock, but instead transfers customer orders and shipment details to either the supplier or manufacturer for fulfilment.

Neto makes drop shipping easy by supporting multiple drop ship suppliers per order, automatically splitting orders for multiple drop ship suppliers and delivering drop ship orders by email, FTP or a web service. Drop ship suppliers can also login to your Neto supplier portal to process orders on your behalf.

**Benefits of Drop Shipping**

- Low setup costs
- Low ongoing costs
- Fast implementation

**Negatives of Drop Shipping**

- Loss of control
- Traditionally lower margins due to handling fees and inability to buy stock in bulk

See our guide to set up drop shipping in Neto.

## Shipping Checklist

## Ensure Products have weights and dimensions

Having the correct weights and dimensions added to your products will allow you to accurately calculate shipping costs for your customers. To enter weight and dimensions, select your desire product and scroll to the **Shipping** section of the **Product Card**.

![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShippingOverview2.05T5g00000sz2iwEAA.png)
From here, you can enter:

- Width
- Length
- Height
- Cubic
- Shipping Weight
- Shipping Category

### Calculate Shipping Tests

We recommend testing Shipping calculation on the front end of your web shop, allowing you to experience the same thing your customers would. We recommend completing the following tests:

1. Calculate a shipping rate on the product page
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShippingOverview3.05T5g00000sz0GiEAI.png)
2. Add multiple products to your cart and calculate a shipping rate
  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShippingOverview4.05T5g00000sz2czEAA.png)
3. Calculate a shipping rate on the checkout page
  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShippingOverview5.05T5g00000sz2knEAA.png)

### Check Shipping Labels

**Neto Commerce Ship** allows you to Automate your shipping quotes, labels and manifests with our multi-carrier shipping system. Work with eParcel, AAE, Star Track, TNT, Team Global Express iPec, Direct Freight, Allied Express, Fastway, Couriers Please & more.

If you would like to integrate labels and manifests:

1. In your Neto control panel click on the **Addons**.
2. Move your cursor over **Neto Commerce Ship** and click on **Install** button.
3. Choose the carrier you would like to use by selecting **Shipping** > **Carrier Accounts**. Select a carrier from the list by clicking on the Install button.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShippingOverview6.05T5g00000sz2llEAA.png)
4. Submit the [Shipping Carrier Label Setup form](http://www.neto.com.au/assets/Neto-Services-Forms/shippingcarrierlabelsetup.html) and Neto will configure your Shipping Carriers for labelling and manifesting.

Once activated, the buttons **Auto Generate Shipping Consignment** and **Manually Add Shipping Consignment** will appear when viewing order details in the control panel:

![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ShippingOverview7.05T5g00000sz2mZEAQ.jpg)
The buttons will display for orders with the status of **Pack** or **Despatched**.

You can also created consignments in bulk by using the **Bulk Create Consignments & Dispatch** feature. To turn on bulk order processing, checkout the [Batch Order Processing add-on](https://galaxy.maropost.com/kb/articles/1365-batch-order-processing).

## Integrated Carriers

Neto integrates with the following shipping carriers for live postage rates.

> **Important:** If you use an integrated shipping carrier we recommend you also setup backup rates, in case their API has an outage.

|  |  |  |
| --- | --- | --- |
| Australia Post On Demand | [Fastway Couriers](https://galaxy.maropost.com/kb/articles/1028-fastway-manual-shipping-option) | Couriers Please |
| Australia Post | StarTrack Express | [TIG Allied](https://galaxy.maropost.com/kb/articles/1027-openfreight-tig-shipping-setup) |
| [Australia Post eParcel](https://galaxy.maropost.com/kb/articles/428-australia-post-eparcel-shipping-manual-rates-setup) | Sendle | [NZ CourierPost](https://galaxy.maropost.com/kb/articles/1024-nz-post-eship-setup) |
| Australia Post eParcel International | [TNT Express](https://galaxy.maropost.com/kb/articles/1026-tnt-express-shipping-setup) | [OpenFreight TIG](https://galaxy.maropost.com/kb/articles/1027-openfreight-tig-shipping-setup) |

## Tips & Tricks

Did you know that shipping cost is the most common reason for shopping cart abandonment?

In fact, according to research, 44% of buyers do not complete the purchase because getting the product to them is too expensive.

Moreover, shipping is often the first indication of a service quality. It doesn't matter how useful your website is and the depth of information it provides. If the customer doesn't get the product fast, they will consider your service as poor.

### Types of Products

When deciding on a shipping carrier to use, the first thing you should take into consideration is the type of products you are selling and if you have any special requirements. Each carrier has different restrictions, so whilst one carrier may suit your product, another, cheaper carrier may not.

Not every provider will be able to ship your goods. Your products might be too big or require special handling which the shipping company may not be able to provide.

### Reputable Carriers

Most of your customers will prefer to receive their order from a shipping provider they've heard of. Neto integrates with all major Australian Shipping Carriers such as Australia Post eParcel, Startrack, Couriers Please and Fastway.

### Carrier Pick Up's and Drop Off's

When comparing shipping carriers, you will want to consider whether the carrier picks up the packages (and any related fees) for you, or if you need to transport the packages to the carrier's drop-off location yourself. If you need to drop off packages, find out where the nearest drop-off location is, along with their hours of operation.

### International Shipping

It's always good to have the idea of global shipping in the back of your head. Did you know that Neto is the only ecommerce platform to integrate directly with Australia Post International, giving you the ability to generate customs documentation.

### Offer Multiple Carriers

Neto gives you the ability to pit multiple carriers against one another in the ultimate fight for your logistics business. Using a feature called **Low Costing Routing**, Neto allows you to calculate rates for multiple carriers, showing only the cheapest options based on service groupings of your choice. This can help you ship with the cheapest possible carrier for every product you send to your customers.

### Shipping Carrier Pricing

Almost all Shipping Carriers charge freight based on:

- The size of the shipment
- The destination address
- The service used (e.g.: Express or Standard)

It is important to negotiate the best possible freight rates with your carriers. If possible, try to secure a flat rate for particular carton or satchel sizes. You will find that different carriers offer different rates for different delivery locations.

It is therefore important to offer multiple carriers where possible. With Neto you can offer multiple carriers and multiple services to your customers, empowering the customer to make their own choice when it comes to how and when they receive their order.

Neto recently announced their partnership with [**Sendle**](https://www.sendle.com/) - a carrier aggregator. It's free to register and you have instant access to great rates without the need for individual carrier accounts or negotiations.

### Size of Shipment

When it comes to the size of your products, different Shipping Carriers cater to different sizes.

> **Note:** shipping carriers are very rarely one size fits all. Some carriers, such as TNT are better equipped for larger products. Some carriers, such as Australia Post, only allow parcels up to 22kg, suitable for smaller products.

### Destination Address

Typically, the longer the haul, the higher the shipping price will be. Many shipping carriers only serve a specific geographic region so you must consider how many post codes a shipping carrier services directly.

In some cases, if a shipment is sent to a location outside a carrier's normal service area, the Shipping Carrier will transfer the shipment to another shipping carrier for final delivery. This is called interlining, a practice that may result in higher costs due to lower discounts and higher minimum charges.

### Pre-Paid and Pre-Negotiated Satchels

Freight carriers such as Australia Post, Australian Air Express and Couriers Please offer competitive rates for satchels of set weights. The satchels offer two advantages:

- Lower fixed rate cost
- Double as packaging, negating the need for additional packaging

### Cubic Weight Modifiers

If you are selling large or bulky goods that typically cube out to larger weights, it is a good idea to negotiate your rates on the lowest possible cube or cubic weight modifier. The standard road cubic weight modifier is 250kg per cubic metre, meaning that an item that is 1 cubic meter is equivalent to 250kg. By negotiating a lower cubic weight modifier such as 167kg per cubic metre you can drastically reduce your shipping costs.

The cubic weight calculation used by shipping carriers is:

Length (m) x Width (m) x Height (m) x Cubic Weight Modifier (kg)

Shipping carriers will usually base their charges on dead or cubic weight (whichever is higher).

### Multiple Shipping Carriers

Different carriers offer different rates to different locations. This is due to each carrier having their own delivery network. Offering multiple shipping options not only empowers your customer to make their own decision as to when and how their order will arrive, but can also be more cost effective for both parties.

### Pre-Made Packaging

Where possible, organise pre-made packaging of set sizes, and negotiate flat rate pricing for this packaging. This will help fix your freight costs. You can purchase packaging from suppliers such as Signet ([http://www.signet.net.au](http://www.signet.net.au/)) or find cheap packaging suppliers on eBay.

### Shipping Scales

Shipping carriers will never adjust your freight costs down. If you pass incorrect weight values to the carrier and these values are heavier than the actual parcel weight you will be losing margin without even realising. Purchase a decent set of scales from eBay or [http://www.scaleshop.com.au](http://www.scaleshop.com.au) and make sure they are calibrated regularly.

### Round Down Weight

In cases where your parcel weight is only slightly over the round kilo mark (e.g.: 1.05 kg) make sure that you round down to 1kg. Freight carriers typically round up to the next kilo starting from just .01 over the last kilo.

### Add a Packing Allowance

If you are charging for shipping using the cubic / weight based option it is good practice to add a packaging allowance of a few percentage points or grams to cover additional packaging. This can be done when setting up shipping options and rates in Neto and will increase the calculated order weight by the defined percentage or fixed amount.