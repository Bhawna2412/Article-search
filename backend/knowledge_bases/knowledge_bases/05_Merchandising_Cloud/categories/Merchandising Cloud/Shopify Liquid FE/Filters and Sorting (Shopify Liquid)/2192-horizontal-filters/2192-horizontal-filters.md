---
title: "Horizontal Filters"
articleID: 2192
category: "Shopify Liquid FE > Filters and Sorting (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Horizontal Filters

You can configure horizontal filter layouts to display filtering options across the top of search results rather than in a traditional sidebar, creating a different visual hierarchy for your product pages. This layout approach can be particularly effective for stores with specific filter sets that benefit from prominent horizontal display.

Horizontal filter layouts offer an alternative presentation style that can help improve filter visibility and accessibility, particularly on certain screen sizes or for stores with limited filter options. 

This configuration flexibility enables you to optimize your search interface to match your specific catalog structure and customer browsing patterns.

![5bec531-Horizontal_Filters.png](https://us.v-cdn.net/6038474/uploads/DA6PUW5KJD38/5bec531-horizontal-filters.png)
Horizontal filters provide an alternative layout for presenting filter options, offering a streamlined and space-efficient approach. This documentation guides you through the process of transforming vertical filters into horizontal filters within Merchandising Cloud's (formerly Findify's) app for Shopify merchants.

![4a95107-Horizontal_Filters_2.png](https://us.v-cdn.net/6038474/uploads/Q7AT9IVUY473/4a95107-horizontal-filters-2.png)

## Instructions

### Step 1: Configure `findify-grid-search.liquid`

1. 
2. 
3. 

Example:

JSX

```twig
<div id="findify-search-main" data-template="horizontal" class="findify-search-main">    <div class="findify-loader-overlay">        {% render 'findify-loader' %}    </div>    <div class="findify-filters_horizontal">      {%        render 'findify-filters'          , component_id: findify_filters_component_id,          , active_filters: active_filters          , color_layout: color_layout       %}      <!-- Sorting Block -->      <div>        {% render 'findify-sorting',          options: sort_options,          default: default_sort_by,          selected: sort_by,          is_modal: false         %}      </div>      <!-- End Sorting Block -->  </div>    <!-- Product Grid Section --></div>
```

### Step 2: Adjust `findify-toolbar-desktop.liquid`

Remove the below sorting block code from the `findify-toolbar-desktop.liquid` file.

JSX

```yaml
<div>  {% render 'findify-sorting'    , options: sort_options    , default: default_sort_by    , selected: sort_by    , is_modal: false %}</div>
```

### Step 3: Update CSS Styles

In the `findify-grid.css` file, add the below CSS code.

CSS

```css
.findify-search-main[data-template="horizontal"] {  flex-direction: column;}
```

In the `findify-filter.css` file, add the below CSS code.

CSS

```css
/*  horizontal filters */.findify-filters-checkbox-item-value > span,.findify-filters--checkbox-nested-value > span {  text-overflow: ellipsis;  overflow: hidden;  white-space: normal;}.price-range-input {  max-width: 45px;}@media  (min-width: 768px) {  #findify-search-main[data-template="horizontal"] {    width: 100%;  }  #findify-search-main[data-template="horizontal"] .findify-filters-wrapper {    width: 100%;    display: flex;    flex-direction: row;    flex-wrap: wrap;  }  #findify-search-main[data-template="horizontal"]    #shopify-section-findify-filter-group {    width: 210px;    position: relative;  }  #findify-search-main[data-template="horizontal"]    .findify-filters--body {    position: absolute;    background: white;    z-index: 10;    top: 100%;    width: 100%;    padding: 14px 0 5px 0;    border-bottom: 1px solid #eee;  }  #findify-search-main[data-template="horizontal"]    .findify-filters--body-wrapper {    max-height: 220px;  }  #findify-search-main[data-template="horizontal"]    .findify-filters--body-wrapper::-webkit-scrollbar {    width: 4px;  }  #findify-search-main[data-template="horizontal"]    .findify-filters--body-wrapper::-webkit-scrollbar-thumb {    background: #000000;    border-radius: 2px;  }  #findify-search-main[data-template="horizontal"] .findify-filters-container {    border-bottom: none;  }  #findify-search-main[data-template="horizontal"] .findify-filter-group {    border-bottom: 1px solid #d7d9d6;    height: 46px;    justify-content: flex-end;  }  .findify-search-header-toolbar .findify-search-header-toolbar-actions {    display: none;  }  .findify-filters_horizontal {    display: flex;  }  #findify-search-main[data-template="horizontal"] .findify-sorting-body {    white-space: nowrap;  }  .findify-search-header-toolbar {    justify-content: center;    margin-bottom: 26px;  }}
```

### Step 4: Update `findify-filter-group.liquid`

1. 
2. 
3. 

JSX

```xml
<script>  const collapseFilter = () => {    const element_id = "{{ element_id }}";    const filterGroupElement = document.getElementById(element_id);    const [header, body] = filterGroupElement.querySelectorAll('div');        const horizontalContainer = document.querySelector(".findify-filters_horizontal");    const filterGroup =  ".findify-filters-body";        const headerClickHandler = (e) => {      e.preventDefault();            horizontalContainer        .querySelectorAll(filterGroup)        .forEach((filter) => {                if (filter !== body) {          filter.setAttribute("aria-expanded", ('false').toString());        }      });            const isOpen = body.getAttribute("aria-expanded") === "true";      body.setAttribute("aria-expanded", (!isOpen).toString());    };    header.addEventListener("click", headerClickHandler);  }; collapseFilter();</script>
```

By following these steps and integrating the provided code snippets, you can seamlessly transform vertical filters into horizontal filters, enhancing the usability and aesthetics of your Shopify store.

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:aupport@maropost.com)