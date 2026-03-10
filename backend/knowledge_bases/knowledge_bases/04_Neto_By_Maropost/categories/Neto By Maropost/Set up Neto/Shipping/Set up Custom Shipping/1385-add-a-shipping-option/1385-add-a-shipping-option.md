---
title: "Add a Shipping Option"
articleID: 1385
category: "Set up Neto > Shipping > Set up Custom Shipping"
knowledgeBase: "Neto By Maropost"
---

# Add a Shipping Option

## Overview

Shipping options form part of the shipping matrix, linking [shipping categories](https://galaxy.maropost.com/kb/articles/1628-add-a-shipping-category) and [shipping rates](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) to display to customers on product, shopping cart and checkout pages.

**Please Note**: This article is for advanced users that wish to set up the individual components of a shipping option manually. For most shipping setups we recommend the steps in one of [these articles](https://www.netohq.com/support/s/knowledge#category=Support__c:Configure_Shipping__c).

## Create a Shipping Option

To create a shipping option:

1. In your Neto control panel navigate to **Settings & Tools** > **Shipping**.
2. Locate **Shipping Options**, in the **Shipping** section.
3. On the **Shipping Options **page, click **Add New Shipping Option** and select **Add New Shipping Option **from the drop down list.
4. Enter the relevant details:

## Map Shipping Categories

Shipping options can be available to select products by assigning them a category. Categories are in turn assigned to products, to give you greater control over how products can be sent. If in doubt, use the default category.

You also need to select the rates that apply to this shipping option. Rates determine the cost of postage based on the customer's location, and can be calculated a number of ways. See [this article](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) to set up your rates.

## Additional display options

**This option only applies to products in the categories defined above.**

Checking this option will only allow this option to display if a product from any of the Shipping Categories is present on the order.

**Option only available when order contains a product from each of the above defined shipping categories.**

Checking this option will only allow this option to display if a product **from every** Shipping Categories is present on the order.

This can be used to group certain types of products together with a specific shipping carrier.

## Shipping Availability

Neto supports the ability to modify the availability of shipping options based on various rules.

Neto allows you to control the specifics of when shipping options are available and deliverable. These settings should not be changed from the default unless you have very specific delivery requirements with your chosen Shipping Carrier, as incorrect configuration can result in the customer being unable to checkout.

Availability at the Checkout

- Available Days
- Available Hours within a Day

These check boxes define when a delivery option will be made available. For example, if the option is for same day delivery, but this service is not available on weekends, you would clear the Sat and Sun (Saturday and Sunday) checkboxes. Similarly, you can make an option unavailable at specific times of the day by using the time checkboxes.

> **Note:** These options are especially useful if your products have expiry dates (food hampers, flowers, chocolate, etc).

Delivery Dates

- Delivery Cut of Times
- Available Delivery Days
- Days a Shipping Carrier can Pick up on
- Delivery Only Available on (Date Group)
- Delivery Not Available on (Date Group)
- Days a Shipping Carrier Can Travel On
- Days a Shipping Carrier Can Not Travel On

These fields affect the order delivery date options available to the customer at checkout.

You can define a delivery cut-off time and specific days. You can also use the Edit dates button to add specific dates to either permit or block delivery.

For example, you could make a specific option that is available / unavailable only on public holidays.

| Field | Description | Displayed |
| --- | --- | --- |
| Related Shipping Options | In this area, you can map your shipping categories to the appropriate shipping options, by clicking “add shipping option to shipping category”. If you are not using shipping categories to specify shipping options, simply use the default category here. The example below maps the default category to the shipping option “allied express”. | Internal |
| Related eBay Shipping Services | In this area, you map the shipping option to the eBay shipping service. Choose your eBay site from the drop down box, and the search for the eBay shipping service by typing the name of the service in the box. Select the correct option and it will be added. The example below shows the option being linked to the eBay Australia airfreight service code. | Internal |
| Shipping Option delivery availability | This area allows you to control the specifics of when specific options are available and deliverable. These settings should not be changed from the default unless you have very specific delivery requirements, as incorrect configuration can result in the customer being unable to checkout. | Internal |
| Option available on | These checkboxes define when a delivery option will be made available. For example, if you offer same day delivery, but this service is not available on weekends, you would uncheck: “sat” and “sun”. Similarly, you can make an option unavailable at specific times of the day, by using the time checkboxes. | Internal |
| Delivery date settings | These fields affect the order delivery date options. You can define a delivery cutoff time, and specific days. You can also use the “edit dates” button to add specific dates to either permit or block delivery. For example, you could make a specific option that is available/unavailable only on public holidays. | Internal |