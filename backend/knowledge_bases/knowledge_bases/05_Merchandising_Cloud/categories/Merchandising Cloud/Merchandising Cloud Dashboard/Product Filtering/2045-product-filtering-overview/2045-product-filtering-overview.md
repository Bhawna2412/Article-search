---
title: "Product Filtering Overview"
articleID: 2045
category: "Merchandising Cloud Dashboard > Product Filtering"
knowledgeBase: "Merchandising Cloud"
---

# Product Filtering Overview

You can configure product filtering to help customers quickly narrow down their search to specific items that match their needs, which shortens the path to purchase and reduces bounce rates. Effective filtering helps improve product discoverability by letting shoppers refine results by size, color, category, price, and other attributes that matter most to them, making it easier for them to find exactly what they're looking for.

Setting up filters involves selecting which product attributes to expose as filter options, organizing them by priority, and customizing their display names to match your brand voice. This helps ensure your customers can efficiently navigate large product catalogs and discover relevant items faster, which generally enhances conversion rates and customer satisfaction.

This document explains different filtering options for a field in the merchant dashboard. A field can be set as a filter in the storefront from the filtering section in the dashboard. There are various other settings in this section to use the field for search, rules etc.

## Instructions

Filtering section can be accessed by following the path Settings > Primary Setup > Filtering

To display a field as a filter in the storefront, you just need to enable the marked button in the below screenshot.

![ed6ed4de-af6e-4fd1-9962-87d843730d8a.png](https://us.v-cdn.net/6038474/uploads/G4VAO2MO3FHY/ed6ed4de-af6e-4fd1-9962-87d843730d8a.png)
You can also change the order in which they appear on the storefront. Simply Drag and Drop the filter to the position by holding this button:

![image-20250313-080441.png](https://us.v-cdn.net/6038474/uploads/F4PYZVOUS9XS/image-20250313-080441.png)
Other options can be accessed by clicking on the edit button:

![f7f9be12-9b3f-4a91-aac2-41d6780f78f5.png](https://us.v-cdn.net/6038474/uploads/9X83CVYYCDXN/f7f9be12-9b3f-4a91-aac2-41d6780f78f5.png)
Resulting pop-up window will have different options to customise the field:

![a2367a99-b8f2-4783-a06c-18f9b8ac4d82.png](https://us.v-cdn.net/6038474/uploads/OHL596PRYMHW/a2367a99-b8f2-4783-a06c-18f9b8ac4d82.png)

1. **Allow to filter by this field: **This option is enabled to make the field available in the dashboard to setup merch rules, rules for defining collection,recommendation rules etc. In the below screenshot, "Brand" field is available in the dropdown as this option is enabled.
  ![07b9285c-4c4b-4597-815d-8a9b08ba4a31.png](https://us.v-cdn.net/6038474/uploads/HBPCYFDTR8V4/07b9285c-4c4b-4597-815d-8a9b08ba4a31.png)
2. **Return in autocomplete response**: Determines whether or not the field will be returned to autocomplete response from Findify Search API. i.e; when you inspect a Findify component in the front-end, you will see the values of a particular field for a product in the autocomplete response if it is enabled. For example, refer the screenshot below where this option is enabled for "Brand" field and thus, values are available in autocomplete response.
  ![6022dd2c-927d-43bb-bfa1-07e3a92c0ff9.png](https://us.v-cdn.net/6038474/uploads/XXXC6JEO0HOS/6022dd2c-927d-43bb-bfa1-07e3a92c0ff9.png)
3. **Return in search response** - Determines whether or not the field will be returned to search response from Findify Search API.
  ![640bc177-88c3-418c-baf0-8a77abbff9a9.png](https://us.v-cdn.net/6038474/uploads/V22E07IECS5W/640bc177-88c3-418c-baf0-8a77abbff9a9.png)
4. **Allow to search by this field in search results** - Determines whether or not the field will be used by our search engine to list products. The field will be searched for the keyword to populate the products in search results page if this option is enabled.
5. **Allow to search by this field in autocomplete** - Determines whether or not the field will be used by autocomplete engine to list products in the autocomplete page. If you want to use this field to populate products in autocomplete page also, this option should be enabled.
6. **Use this field for search suggestions** - Determines whether or not the field will be used by autocomplete engine to generate search suggestions.
  ![4b2a09b7-56fe-4565-8cdc-cef8d739d041.png](https://us.v-cdn.net/6038474/uploads/M4A9ZA0WKHDY/4b2a09b7-56fe-4565-8cdc-cef8d739d041.png)

7. **Return in response per each variant** - Determines whether or not the field will be attached to the search response on a variant level, i.e. **variant.id, variant.price, variant.color ...etc**. There are no fields attached to the search response on a variant level by default.

8. **Return in liquid framework**-  The "Return in Liquid framework" setting specifically determines *whether a field's data will be available for use within your Liquid templates*. For instance, if both "Return in Response in Search" and "Return in Liquid" are enabled, that field's data will be accessible in Liquid for both search and collection pages. This setting directly influences how search and autocomplete results are displayed.

![e45f8ca9-5331-4d19-b1d0-f9da3a8b228a.png](https://us.v-cdn.net/6038474/uploads/2NQ63DLXUTUP/e45f8ca9-5331-4d19-b1d0-f9da3a8b228a.png)
Client's developers need to review all relevant filters and make the necessary changes to enable or disable the "return in Liquid framework" option as required. This is a crucial step for optimizing how search and autocomplete results are rendered. ( Not to be used by client/support )