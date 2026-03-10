---
title: "Filter Control"
articleID: 2194
category: "Shopify Liquid FE > Filters and Sorting (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Filter Control

You can customize which filters appear in your search results and collections, controlling their order, labels, and visibility to match your merchandising priorities. This filter management capability enables you to create a refined filtering experience tailored to your specific product catalog and customer needs.

Effective filter configuration helps customers navigate large product catalogs more efficiently by surfacing the most relevant filtering dimensions for your business. By controlling filter presence, ordering, and naming, you can guide customers toward the most useful refinement options, which can help improve search satisfaction and product discoverability.

We offer powerful solutions for search, merchandising, and recommendations tailored for ecommerce. This documentation will guide you through integrating and customizing filter controls using Liquid for Shopify, enabling both individual collection control and bulk management through metafields.

## Overview

Using filters enhances navigation for shoppers, allowing them to find products more easily. With us, you can add filters using Variant Options, Metafields, or Tags. Detailed information is available in our [documentation](https://developers.findify.io/docs/faq-shopify-fields-that-findify-reads-from-shopify#step-2-create-a-filter-on-merchant-dashboard).

Within our Merchant [Dashboard](https://dashboard.findify.io/), you can:

- 
- 
- 

Our filters are dynamic by default, meaning they only appear if there are values for the current search query or collection. However, you can control the order of filters for individual collections through a simple method that doesn’t require ongoing code changes.

## Configuring Filter Order and Visibility

To customize the order of filters displayed for specific collections, use the `filters_sorting` Shopify metafield. This method allows you to define which filters to include and their display order.

### Input Format

Only populate data for collections where you want to alter filter settings. Unpopulated collections will use the default order specified in our dashboard.

**Format:**

`{"Filter Name": Position, "Filter Name_2": Position_2, "Filter Name_n": Position_n}`

**Example:**

JSON

```
{"Price":1,"Color":2,"Category":3}
```

This configuration will display filters in the following order:

- 
- 
- 

Any filters not listed will be excluded.

### Steps to Implement

1. 

![e84168101196973043eb6e4fd6ff44eab7daa9c64ae44c331ebfa97986dcacd4-Screenshot_1_6.png](https://us.v-cdn.net/6038474/uploads/N2T67YG70CQP/e84168101196973043eb6e4fd6ff44eab7daa9c64ae44c331ebfa97986dcacd4-screenshot-1-6.png)
2. Add Metafield Value to Collection

Add the metafield value to the specific collection you want to update for filter sorting and visibility.

![32b0664fc0a5e612a6137cfe736f5c7b30c108f20be9846f2e971b4de845f365-Screenshot_1_7.png](https://us.v-cdn.net/6038474/uploads/WL9DWAQALIID/32b0664fc0a5e612a6137cfe736f5c7b30c108f20be9846f2e971b4de845f365-screenshot-1-7.png)

Example value:

JSON

```
{"Price":1,"Color":2,"Category":3}
```

1. 

Open the theme editor and add the following code to your collection template:

```applescript
<div class="findify-filter-sorting">  <script>    {{ collection.metafields.custom["filters_sorting"] }}  </script></div>
```

1. 

Add the following code inside the `script` tag of `findify-filter-group.js`:

JSX

```javascript
const name = '{{name}}'?.toLowerCase();const element_id = "{{ element_id }}";const filterGroupElement = document.getElementById(element_id);const filters_sorting_json = document.querySelector('.findify-filter-sorting script')?.text;if (filters_sorting_json) {  const filters_sorting = JSON.parse(filters_sorting_json);  const keys = Object.keys(filters_sorting);  const formattedObject = keys.reduce((acc, key) => {    const formattedKey = key?.trim()?.toLowerCase();    acc[formattedKey] = filters_sorting[key];    return acc;  }, {});  const containerBlock = filterGroupElement?.parentNode;  if (formattedObject[name]) {    containerBlock.style.order = formattedObject[name];  } else {    containerBlock.style.display = 'none';  }}
```

By following these steps, you can effectively manage and customize filter controls for individual collections, enhancing the shopping experience for your customers.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)