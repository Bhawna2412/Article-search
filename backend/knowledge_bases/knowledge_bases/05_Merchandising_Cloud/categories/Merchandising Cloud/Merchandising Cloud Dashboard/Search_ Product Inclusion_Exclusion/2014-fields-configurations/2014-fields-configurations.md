---
title: "Fields Configurations"
articleID: 2014
category: "Merchandising Cloud Dashboard > Search_ Product Inclusion_Exclusion"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-04
---

# Fields Configurations

You can configure searchable fields and facets to enable customer filtering of search results and collections, helping improve product discovery by allowing shoppers to refine results quickly. Field configuration controls which product attributes can be searched, filtered, and displayed in autocomplete, with weighting options that influence search ranking algorithms—enabling you to optimize which products appear for specific queries to improve conversion rates.

Managing field properties helps balance search performance with functionality. You can control field importance through weighting, enable or disable fields as facets, configure autocomplete behavior, and determine which data appears in search responses—ensuring your search delivers relevant results efficiently while supporting the filtering capabilities that help customers find products faster and reduce bounce rates.

## Facets / Filtering

Using fields as facets on your store, your customers will be able to use facets to filter search results and collections.

![2827591-Grid_with_Filters.png](https://us.v-cdn.net/6038474/uploads/FBCLE9DQMI3P/2827591-grid-with-filters.png)

## Where to control Facets & Fields

![6ed7018-Filters_In_Dashboard.png](https://us.v-cdn.net/6038474/uploads/F142OHE8D6FD/6ed7018-filters-in-dashboard.png)
*Navigate to Filters in the dashboard*

To enable/disable the field as a facet simply toggle the switch button:

![c48ac44-download_10.png](https://us.v-cdn.net/6038474/uploads/BON5R7941362/c48ac44-download-10.png)

You can also change the order in which they appear on the storefront. Simply Drag and Drop the filter to the position by holding this button:

![57cc197-download_11.png](https://us.v-cdn.net/6038474/uploads/WFHHD5UHEO3F/57cc197-download-11.png)

## Control Fields

You can edit the field configuration by clicking on the edit icon:

![8999ebb-download_12.png](https://us.v-cdn.net/6038474/uploads/PZ8MXE9N1PIW/8999ebb-download-12.png)

In the popup window you will be able to see all configurations of the selected field:

![8ca4d8d-Fields.png](https://us.v-cdn.net/6038474/uploads/VNK7D5NIGJDB/8ca4d8d-fields.png)

## Properties Description

- **Title** - Display name of the field which will be displayed on the storefront (Filter title).
- **Weight** - How important this field is for our ranking algorithms and search engine. The bigger the value, the more important it will be.
- **Allow to filter by this field** - Activates the field to be read and a foundation to be used as a filter, in merchandising, to configure Smart Collections or made searchable. All new custom fields are not activated by default. *Please make sure that you only enable this property for applicable fields. Huge amount of fields will slow down system performance.
*
- **Return in autocomplete response** - Determines whether or not the field will be returned to autocomplete response from our Search API (**This property might be required for customizations purposes**).* We do not recommend to return a field to an autocomplete response if it might have a lot of data as this increases the network load and slows down our Search API response time.
*
- **Return in search response** - Determines whether or not the field will be returned to search response from our Search API (**This property might be required for customizations purposes**).* We do not recommend to return a field to a search response if it might have a lot of data as this increases the network load and slows down our Search API response time.
*
- **Allow to search by this field in search results** - Determines whether or not the field will be used by our search engine. All new fields are not searchable by default. Here is the list of all fields that are searchable by default: **brand, color, size, title, SKU, category, description, tags-based filters**. *Please make sure that you enable this property only for those fields that can be used for search purposes as it might affect the search engine performance.
*
- **Allow to search by this field in autocomplete** - Determines whether or not the field will be used by autocomplete engine. All new fields are not searchable in autocomplete by default. Here is a list of all fields that are searchable in autocomplete by default: **brand, color, size, title, SKU, category**. *Please make sure that you enable this property only for those fields that can be used for the autocomplete search purposes as it might affect the autocomplete engine performance.
*
- **Use this field for search suggestions** - Determines whether or not the field will be used by autocomplete engine to generate search suggestions. All new fields are not suggestible in autocomplete by default. Here is a list of all fields that are suggestable in autocomplete by default: **brand, color, size, title, SKU, category**. *Please make sure that you enable this property only for those fields that can be used for suggestions as it might affect the autocomplete engine performance
*
- **Return in response per each variant** - Determines whether or not the field will be attached to the search response on a variant level, i.e. **variant.id, variant.price, variant.color ...etc**. There are no fields attached to the search response on a variant level by default. *We do not recommend to return fields on a variant level if it contains a lot of data, as this increases the network load and slows down our Search API response time. In addition, you should be aware of the fact that you do not need to push any fields to be returned per variant if the field is set on the product level i.e. tags in Shopify (in this case, all variants will have all the tags already set)
*
- **Return in liquid framework**- The "Return in Liquid framework" setting specifically determines *whether a field's data will be available for use within your Liquid templates*. For instance, if both "Return in Response in Search" and "Return in Liquid" are enabled, that field's data will be accessible in Liquid for both search and collection pages. This setting directly influences how search and autocomplete results are displayed.