---
title: "Set up Woolworths MarketPlus Shipping"
articleID: 1067
category: "Ways to Sell on Neto > Woolworths MarketPlus"
knowledgeBase: "Neto By Maropost"
---

# Set up Woolworths MarketPlus Shipping

Woolworths MarketPlus lets you charge for shipping in a number of different ways, using rates in Neto by Maropost, on Woolworths MarketPlus, or even a mix. It’s best to have an idea of how you will charge for shipping before you set up the integration so that you can prepare any custom fields and their data accordingly.

There are three primary ways to set up shipping:

- Use rate tables in Woolworths MarketPlus.
- Use a flat rate on each product in Neto.
- Use a Neto shipping option to calculate postage costs.

These methods can be used in any combination, but will require more custom fields and data entered if you mix and match them. Follow one of the guides below to set use the same method for every product on Woolworths MarketPlus:

- Free Shipping
- Flat Rate Shipping
- Neto Shipping Rates
- Woolworths MarketPlus Shipping Tables
- Shipping Setting Reference

## Free Shipping

Free shipping requires no custom fields or data entry in Neto or on Woolworths MarketPlus. In the Cresco dashboard configure the settings as per below:

| Setting | Value | Description |
| --- | --- | --- |
| Default Shipping Category | `1 - Flat` | Tells Woolworths MarketPlus that all products use a flat rate shipping cost. |
| Default Shipping Cost | `0` | Set the default cost to $0 to make all product shipping free. |

## Flat Rate Shipping

Flat rate shipping can also include free shipping, as you set the rate on each product in Neto.

In Neto, create a [custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) called `Woolworths MarketPlus shipping rate`. [Populate this field](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) with the flat shipping cost for each product.

In the Cresco dashboard configure the settings as per below:

| Setting | Value | Description |
| --- | --- | --- |
| Default Shipping Category | `1 - Flat` | Sets all MyWoolworths MarketPlus Deal listings to use a flat rate for shipping. |
| Shipping Cost Attribute | `Woolworths MarketPlus shipping rate` | The custom product field where you enter the flat rate shipping cost. |
| Default Shipping Cost | User defined. | Recommended as a fallback shipping cost, varies depending on your usual rates. |

## Neto Shipping Rates

Woolworths MarketPlus can calculate the shipping cost using the rates or carrier API in your Neto shipping options. Each product can only use one shipping option, but different products can use different options.

1. In your Neto control panel, add a [custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) called `Woolworths MarketPlus shipping option ID`.
2. **Tip**: IDs can be found in **Settings & tools** > **Shipping** > **Shipping options**.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupMyDealShipping1.05T5g00000w4si4EAA.png)
3. SettingValueDescriptionDefault Shipping Category`2 - Custom`This tells Cresco to use a postage cost in Neto. Default Freight Scheme ID`190`Required to use a Neto shipping option. Neto Shipping Category Attribute `Woolworths MarketPlus shipping option ID`The custom product field where you store the Neto shipping option ID. Default Neto Shipping CategorySelect a fallback shipping option from the drop down list. Used in case the shipping option is not set on a product.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SetupMyDealShipping2.05T5g00000w4tx9EAA.png)

## Woolworths MarketPlus Shipping Tables

Woolworths MarketPlus shipping tables must be set up in Woolworths MarketPlus before they can be used for your listings. 

In Neto, create a [custom product field](https://galaxy.maropost.com/kb/articles/26-add-and-manage-products#add-product-categories-to-products-via-import) called `Woolworths MarketPlus shipping option ID`. [Populate this field](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) with the Woolworths MarketPlus shipping ID on each product.

In the Cresco dashboard configure the settings as per below:

| Setting | Value | Description |
| --- | --- | --- |
| Default Shipping Category | `2 - Custom` | Required to use Woolworths MarketPlus shipping tables. |
| Custom Freight Scheme ID | `Woolworths MarketPlus shipping option ID` | Custom product field where the Woolworths MarketPlus shipping table ID is stored. |
| Default Freight Scheme ID | User defined | Enter the ID of a fallback Woolworths MarketPlus rate table. |

## Shipping Setting Reference

This table provides a reference for each of the shipping settings for Woolworths MarketPlus.

| Cresco Setting | Description |
| --- | --- |
| Shipping Category Attribute | Custom product field that has 1, 2, or 3 entered in it. |
| Default Shipping Category | Shipping category to use if the above custom field is empty on the product. |
| Custom Freight Scheme ID | Custom product field that relates to the Woolworths MarketPlus shipping cost ID. Use 190 to link to your Neto shipping options. |
| Default Freight Scheme ID | Woolworths MarketPlus shipping cost ID to use if the above custom field is empty on the product. |
| Shipping Cost Attribute | Custom product field where you have entered the shipping cost. |
| Default Shipping Cost | Shipping cost when the above custom product field is empty on the product. |
| Neto Shipping Category Attribute | Custom product field with the ID of the Neto shipping option to use when calculating postage cost. |
| Default Neto Shipping Category | Neto shipping option ID to use when calculating postage cost if the above custom field is empty on the product. |