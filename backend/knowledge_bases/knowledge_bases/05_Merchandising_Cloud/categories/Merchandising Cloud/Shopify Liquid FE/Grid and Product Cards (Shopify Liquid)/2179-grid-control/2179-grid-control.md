---
title: "Grid Control"
articleID: 2179
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Grid Control

You can customize your product grid layout to create visually engaging merchandising experiences, including featuring larger "hero" products that stand out within search results and collection pages. 

This grid control capability enables strategic product positioning, allowing you to highlight featured items, new arrivals, or promotional products more effectively.

Implementing custom grid layouts helps you create more dynamic and visually interesting product displays that can capture customer attention and guide browsing behavior. 

By configuring CSS grid properties and applying styling to specific products, you can showcase featured items with larger images and prominent positioning, which can help improve engagement with key products and support your merchandising strategy.

![b8edfb6-Grid_Control_Title_Slide_-_Copy.png](https://us.v-cdn.net/6038474/uploads/I5NJ8ZO3AAYX/b8edfb6-grid-control-title-slide-copy.png)
Grid control is a powerful feature that enables merchants to customize the layout of product grids in their Shopify store, enhancing the presentation of products to customers.

## Configuring One Big Product in Grid

### Step 1: Add CSS Styles:

Open the `findify-grid.css` file in your Shopify theme editor. Copy and paste the provided CSS styles to define the grid layout.

CSS

```css
.findify-product-list{  display: grid !important;  padding-left: 0 !important;}.big-grid .findify-components--cards--product__content {  flex: 0;}.big-grid .findify-components--cards--product__image {  flex: 1;}.big-grid .image-container {  height: 100%;}.big-grid .image-container img {  height: 100%;  object-fit: cover;}.big_list{  padding-left: 3px;}.findify-product-list[findify-data-grid="2"] { grid-template-columns: 20% 20% 20% 20% 20%; }.findify-product-list[findify-data-grid="3"] { grid-template-columns: 25% 25% 25% 25%; }.findify-product-list[findify-data-grid="4"] { grid-template-columns: 33.333% 33.333% 33.333%; }.findify-product-list[findify-data-grid="6"] { grid-template-columns: 50% 50%; }.findify-product-list[findify-data-grid="12"] { grid-template-columns: 100%; }
```

### Step 2: Add Grid Attribute

Locate the `<div id="findify-product-grid" class="findify-product-list">` element in the `findify-grid-search.liquid` file. Add the attribute `findify-data-grid="number of products in row"` and specify the number of products to display in each row.

### Step3: Add Product Card Code

Add the below code to `findify-product-card-connector.liquid` file (on line 56).

JSX

```objectivec
 if id == "INSERT_PRODUCT_ID"    assign big_list = 'big_list' else    assign big_list = '' endif
```

Optional: To display a specific product, replace `product_id` with the specific product id of the desired item.

### Step 4: Add Class

Add `big_list` class to `findify-product-card` div in `findify-product-card.liquid`

JSX

```applescript
<div id={{ id }} class="findify-product-card {{ additional_class }} {{ big_list }}">
```

### Step 5: Styling

In `findify-grid.css` file add this style to `.big_list` class.

CSS

```sql
    padding-left: 3px;    -webkit-box-ordinal-group: 2;    order: number, position where you want to display your product;     1 - will show on first place, 5- on fifth.    grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end/* *for exmaple    grid-area: 1 / 1 / 3 / 3; */*
```

Note: Read more about `grid-area` here: 
[https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)

### Step 6: Update CSS for Mobile

Implement media queries in the CSS to adjust the number of columns displayed on mobile devices.

For example:

CSS

```css
@media  (min-width: 749px){.findify-product-list[findify-data-grid="2"] { grid-template-columns: 50% 50%; }.findify-product-list[findify-data-grid="3"] { grid-template-columns: 50% 50%; }.findify-product-list[findify-data-grid="4"] { grid-template-columns: 50% 50%; }.findify-product-list[findify-data-grid="6"] { grid-template-columns: 50% 50%; }}
```

## Implementing Dynamic Grid

### Step 1: Update `findify-product-card-connector.liquid`:

Add the provided Liquid code to dynamically configure multiple big products within the grid layout.

PHP

```apache
assign col = 12 | divided_by: 3 // here you should set nuber froom step #2assign isBigProduct = position | modulo: colassign currentRow = position | divided_by: 4 // this is default number of products in rowassign rowPlus = currentRow | minus: 1assign rowStart = currentRow | plus: rowPlusassign rowEnd = rowStart | plus: 2assign isRight = position |divided_by: col | modulo: 2  if isRight == 0 // do this step if you want to have big product on left and right side of grid  assign columnStart = 3else  assign columnStart = 1endifassign columnEnd = columnStart | plus: 2 if isBigProduct == 0  assign big_list = 'big_list'else  assign big_list = ''   endif
```

### Step 2: Update `findify-product-card.liquid`:

Modify line 3 of the `findify-product-card.liquid` file to include dynamic grid area and ordering based on the provided Liquid code.

HTML

```twig
<div   id="{{ id }}"   class="findify-product-card {{ class }} {{ big_list }}"   style="{% if big_list == 'big_list' %}    grid-area: {{ rowStart }}/{{ columnStart }}/{{ rowEnd }}/{{ columnEnd }};    order: {{ position }}  {% endif %}">
```

### Step 3: Add CSS Styles:

Open the `findify-grid.css` file in your Shopify theme editor. Copy and paste the provided CSS styles to define the grid layout.

CSS

```css
.findify-product-list{  display: grid !important;  padding-left: 0 !important;}.big-grid .findify-components--cards--product__content {  flex: 0;}.big-grid .findify-components--cards--product__image {  flex: 1;}.big-grid .image-container {  height: 100%;}.big-grid .image-container img {  height: 100%;  object-fit: cover;}.big_list{  padding-left: 3px;}.findify-product-list[findify-data-grid="2"] { grid-template-columns: 20% 20% 20% 20% 20%; }.findify-product-list[findify-data-grid="3"] { grid-template-columns: 25% 25% 25% 25%; }.findify-product-list[findify-data-grid="4"] { grid-template-columns: 33.333% 33.333% 33.333%; }.findify-product-list[findify-data-grid="6"] { grid-template-columns: 50% 50%; }.findify-product-list[findify-data-grid="12"] { grid-template-columns: 100%; }
```

### Step 4: Update CSS for Mobile:

Implement media queries in the CSS to adjust the number of columns displayed on mobile devices.

For example:

CSS

```css
@media  (min-width: 749px){.findify-product-list[findify-data-grid="2"] { grid-template-columns: 50% 50%; }.findify-product-list[findify-data-grid="3"] { grid-template-columns: 50% 50%; }.findify-product-list[findify-data-grid="4"] { grid-template-columns: 50% 50%; }.findify-product-list[findify-data-grid="6"] { grid-template-columns: 50% 50%; }}
```

**Conclusion**

By following the outlined steps, you can seamlessly implement grid control within your Shopify store using Merchandising Cloud's (formerly Findify's) Liquid-based Shopify app. Customize the layout of product grids to suit your preferences and enhance the visual presentation of products to customers.

To learn more about our Grid Control feature, [click here to visit our blog](https://findify.io/new-feature-fully-own-the-product-experience-with-grid-control).

For further assistance or inquiries, feel free to contact us on [YourFriends@Findify .io](mailto:YourFriends@Findify.io)