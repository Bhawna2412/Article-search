---
title: "Mobile Sorting Within Filters"
articleID: 2190
category: "Shopify Liquid FE > Filters and Sorting (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Mobile Sorting Within Filters

You can configure mobile sorting options within the filter interface to help mobile shoppers easily organize products by price, popularity, or other criteria. This mobile-optimized approach consolidates sorting and filtering in one intuitive location, improving the browsing experience for smartphone users.

Integrating sorting within the mobile filter panel creates a more streamlined interface for mobile shoppers, who represent a significant portion of ecommerce traffic. 

By reducing the complexity of navigation on smaller screens, you help mobile customers find products more efficiently, which can help improve mobile conversion rates and reduce bounce rates from frustrated users.

This documentation outlines the process of integrating sorting functionality within mobile filters. By following these steps, you can enhance the user experience and streamline navigation on mobile devices.

## Instructions**

### Step 1: Modify `findify-toolbar-mobile.liquid`

1. 
2. 

JSX

```yaml
<div>  {% render 'findify-sorting'    , options: sort_options    , default: default_sort_by    , selected: sort_by    , is_modal: true %}</div>
```

### Step 2: Update CSS Styles in `findify-grid.css`

Add the provided CSS styles to `<strong>findify-grid.css</strong>` to ensure proper alignment and styling for the mobile search header toolbar.

CSS

```css
.findify-search-header-toolbar {  justify-content: center;}.findify-search-header-toolbar-actions {  margin: 15px 0 0;}
```

### Step 3: Adjust CSS Styles in `findify-filter.css`

Modify the existing CSS styles in the `findify-filter.css` file to optimize the layout and appearance of mobile filters.

CSS

```css
@media  (max-width: 768px) {  .findify-filters-sidebar.open {    flex-direction: column;  }  .findify-filters-sidebar .findify-filters-wrapper {    flex: 1;  }  .findify-filters-sidebar .findify-filters-container {    width: 100%;  }  .findify-filters-sidebar .findify-modal-footer {    order: 3;  }  .findify-filters-sidebar .findify-filters-wrapper {    order: 2;  }  .findify-filters-sidebar .findify-sorting-wrapper {    order: 1;  }  .findify-filters-sidebar .findify-sorting.desktop {    display: block;    margin: 37px 22px;  }  .findify-filters-sidebar .findify-sorting-btn {    width: 250px;  }  .findify-sorting.open .findify-sorting-list {    width: 250px;  }}
```

### Step 4: Modify `findify-grid-search.liquid`

1. 
2. 

JSX

```twig
<div id="findify-filters-sidebar" class="findify-filters-sidebar open">  <div class="findify-filters-container">   // code  <div class="findify-sorting-wrapper">    {% render 'findify-sorting',      options: sort_options,      default: default_sort_by,      selected: sort_by,      is_modal: false    %}  </div> </div></div>
```

### Step 5: Additional CSS Styles for Horizontal Filters

If you use horizontal filters, add the provided CSS code to adjust the layout of the filters container.

CSS

```css
#findify-search-main[data-template="horizontal"]  .findify-filters-sidebar  > .findify-filters-container {  flex-direction: row;}
```

By following these instructions and integrating the provided code snippets, you can seamlessly incorporate sorting functionality within mobile filters, optimizing the user experience for Shopify merchants using our app.

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:support@maropost.com)