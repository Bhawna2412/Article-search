---
title: "1. TradeMe Setup - Prepare Products for Data Export"
articleID: 1056
category: "Ways to Sell on Neto > Trademe"
knowledgeBase: "Neto By Maropost"
---

# 1. TradeMe Setup - Prepare Products for Data Export

> **Note:** Neto partners can set this up for you. [Visit the job request portal](https://www.netohq.com/job-request-portal) for a quote.

## Custom Fields

Before you create data exports, you need to create custom product fields that we can associate with information for Trade Me.

1. In your Neto control panel navigate to **Settings & tools** > **All settings & tools**.
2. Click the **Products** tab and click **Custom Product Fields**.
3. Here, you will be required to add 12 new custom fields. Click the **Add New** button at the top right to get started and follow the table below.
4. Once complete, your newly created **Custom Product Fields** will display.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1TradeMeSetupPrepareProductsforDataExport1.05T5g00000w7IcQEAU.png)
5. Keep this page available as you will need the **Field ID's** from the above to create your product export template in the next step.

## Variation Listings

We recommend listing variation products as separate product listings. TradeMe does support multi-variation listings, however this requires advanced code added to your data feed template to meet TradeMe's specifications. Please contact TradeMe for the specification details.

As part of this, your TradeMe feed requires specifics to be shown in the same order across all variation products, and include a custom field with a sorted list of all specific values for each product variation.

To acheive this you'll need to be familiar with the below functions:

- [Setting Variables](https://developers.neto.com.au/documentation/neto-designer-documentation/b-se-tag-library/function-tags/logic-and-calculation/set/)
- [Listing Item Variations (list_item_variation)](https://developers.neto.com.au/documentation/neto-designer-documentation/b-se-tag-library/function-tags/product-information/list_item_variations/)
- [Site Value Variables (site_value)](https://developers.neto.com.au/documentation/neto-designer-documentation/b-se-tag-library/function-tags/formatting-and-data/site_value/)
- [Display Child Products](https://developers.neto.com.au/documentation/neto-designer-documentation/b-se-tag-library/function-tags/product-information/display_child_products/)
- [General Logic](https://developers.neto.com.au/documentation/web-designers/base-tag-library/function-tags/logic-and-calculation/)
- [Split Variables](https://developers.neto.com.au/documentation/neto-designer-documentation/b-se-tag-library/function-tags/formatting-and-data/split/)

> **Note:** Neto partners can set this up for you. [Request a data service job](https://www.netohq.com/job-request-portal) for a quote.

Next step: Prepare your Export Template.