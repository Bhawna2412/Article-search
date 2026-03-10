---
title: "Hiding Out of Stock Products"
articleID: 2017
category: "Merchandising Cloud Dashboard > Search_ Product Inclusion_Exclusion"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-12-08
---

# Hiding Out of Stock Products

You can configure how out-of-stock products appear in search results, collections, and recommendations, enabling you to focus shopper attention on available inventory while optimizing purchase flow based on your business model. The stock behavior options—displaying OOS products normally, moving them to the bottom, or hiding them completely—help improve conversion rates by aligning product visibility with purchase availability and fulfillment capabilities.

Managing out-of-stock visibility helps optimize the shopping experience based on your inventory and shipping practices. You can configure different behaviors for search/collections versus recommendations, with advanced options for keeping selected OOS products visible through tagging—ensuring strategic items remain discoverable while preventing customer frustration from unavailable products, which tends to improve conversion rates and reduce bounce rates.

## Overview

Stock options are great to easily ensure products behave in line with intended purchase flow.

In general merchants should focus the shoppers attention to available products and either remove or hide OOS products in the bottom, but there are also cases where shipping is rapid and it makes business sense to keep them as normal in the grid.

👍 **Advanced level #1:** Keeping Some Products Visible

There are situations where merchants in general wish to hide Out of Stock Products, but keep some visible. The easiest way to achieve & manage this is through a product level tagging.

Read more about [Keeping Selected OOS Products Visible](https://galaxy.maropost.com/kb/articles/2092-multimarket-configuration-for-push-api?)

## Behavior

Out of Stock options are based both on the fields of Availability & Stock Quantity.

By default, availability has the higher priority.

This means products will behave in the following way:
*If Availability = "in stock" + Quantity = "5" = The product is of course **in stock*
*If Availability = "out of stock" + Quantity = "0" = The product is of course **out of stock*
*If Availability = "out of stock" + Quantity = "5" = The product is **out of stock*
*If Availability = "in stock" + Quantity = "0" = The product is **out of stock*

There are also special cases where the platform has settings for *"continue selling when out of stock"*, for which Merchandising Cloud will classify them as available. [Read More] (doc:show-oos-products-with-the-exclude-oos-products-setup#1-use-continue-selling-when-oos-option-on-the-variant-level-in-shopify)

## How To Configure

The stock behaviour configuration allows you to determine how out of stock products behave within search results and within collections, or within recommendations.

Merchants are afforded three options for how to display out of stock products:

1. 
2. 
3. 

Clients can configure the behavior of their out of stock products within the [Merchant Dashboard Stock Setup](https://www.analyticsmania.com/post/debugview-in-google-analytics-4/).

![d47a755-Out_of_Stock_Options.png](https://us.v-cdn.net/6038474/uploads/QAYCKMELIEZE/d47a755-out-of-stock-options.png)
*Where to find stock options In the Dashboard*

You can choose the option that suits your needs for Search/Smart Collections and Recommendations:

![df87d92-Out_of_stock.gif](https://us.v-cdn.net/6038474/uploads/R6OVOWJM5PUK/df87d92-out-of-stock.gif)
*Out of stock configuration within the Merchant Dashboard.*

👍 **Advanced level #2:** Only Remove Selected Products

There are situations where merchants only wish to remove selected products from results. The easiest way to achieve & manage this is through a product level tagging.

Read more about [Keeping Selected OOS Products Visible](https://galaxy.maropost.com/kb/articles/2019-removing-products-from-autocomplete)