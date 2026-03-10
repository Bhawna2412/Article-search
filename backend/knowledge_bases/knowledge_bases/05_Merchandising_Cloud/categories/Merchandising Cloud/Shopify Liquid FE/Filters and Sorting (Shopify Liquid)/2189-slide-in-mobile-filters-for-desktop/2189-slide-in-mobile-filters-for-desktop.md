---
title: "Slide-in Mobile Filters for Desktop"
articleID: 2189
category: "Shopify Liquid FE > Filters and Sorting (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Slide-in Mobile Filters for Desktop

You can implement sliding carousel functionality for product recommendations and collections, creating a more dynamic and space-efficient way to showcase multiple products. This interactive presentation style helps improve product discoverability while maintaining a clean, organized layout that doesn't overwhelm the page.

Slider-based product displays enable you to showcase more products in a compact space, encouraging customers to browse through multiple options without scrolling extensively. 

This interactive approach to product presentation can help improve engagement with recommendations and collections, potentially increasing the number of products customers consider during their shopping session.

![7230997-Screenshot_2024-04-29_162609.png](https://us.v-cdn.net/6038474/uploads/KA2DEDYOC9HK/7230997-screenshot-2024-04-29-162609.png)
The mobile filters slide-in feature enables Shopify merchants to offer a seamless filtering experience for their customers, regardless of the device they are using. By integrating this functionality into the Maropost Merchandising Cloud (formerly Findify) app, merchants can improve user engagement and facilitate product discovery.

## Implementation Steps

Follow these steps to integrate the mobile filters slide-in functionality into your Shopify theme:

### 1. Update `findify-grid-search.liquid`

Find and remove the following code snippet from the `<strong>findify-grid-search.liquid</strong>` component:

CSS

```yaml
{% render 'findify-toolbar-desktop'        , results_count: results_count        , terms: terms        , sort_options: sort_options        , default_sort_by: default_sort_by        , sort_by: sort_by        , active_filters: active_filters        , color_layout: color_layout        , filter_component_id: findify_filters_component_id      %}
```

### 2. Update `findify-sidebar-mobile.css`

Remove the existing media query (line: 11 & line: 91):

CSS

```less
@media  (max-width: 768px) {//don't remove css, remove only media query string}
```

And add the following CSS to ensure the filters slide-in properly:

CSS

```css
.findify-modal .findify-filters-wrapper,  .findify-modal .findify-filters-container{    width: 100%;  }
```

Adjust the width of `<strong>.findify-modal</strong>` as needed to customize the size of the sidebar.

### 3. Update `findify-grid.css`

Search for the following styles in the `<strong>findify-grid.css</strong>` file (usually found around line: 118) and remove them:

CSS

```
.findify-search-header.mobile {    display: none;  }
```

**Conclusion**

By following the instructions outlined in this document, Shopify merchants can seamlessly integrate the mobile filters slide-in functionality into their online stores, providing users with an intuitive and efficient way to refine their product searches.

For further assistance or inquiries, feel free to contact us on [YourFriends@Findify .io](mailto:YourFriends@Findify.io)