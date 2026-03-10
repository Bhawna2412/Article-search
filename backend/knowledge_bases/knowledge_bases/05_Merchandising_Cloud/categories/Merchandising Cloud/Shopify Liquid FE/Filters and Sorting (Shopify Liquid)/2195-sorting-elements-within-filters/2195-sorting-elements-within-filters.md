---
title: "Sorting Elements Within Filters"
articleID: 2195
category: "Shopify Liquid FE > Filters and Sorting (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Sorting Elements Within Filters

You can configure how filter options are sorted within each filter group, such as alphabetically, by popularity, or by custom order. This sorting control helps you present filter values in the most logical and useful sequence for your customers.

Proper filter value sorting improves the browsing experience by organizing options in ways that make sense for your specific catalog and customer behavior. Whether sorting sizes sequentially, colors by popularity, or categories hierarchically, strategic filter value ordering helps customers find their desired refinements more quickly, supporting more efficient product discovery.

This guide explains how to customize the order of filter options in a Maropost Merchandising Cloud (formerly Findify) integration using Liquid. By default, most filter options are sorted dynamically according to the most present values, while there are specific logics for price, and for size.

However, clients may require a custom sorting logic to enhance the user experience. This guide walks through implementing this customization.

![529f0d7edc510ec247a0c81a152a890034b1bdd4418479a026cf3815fcd25644-image_35_1.png](https://us.v-cdn.net/6038474/uploads/89G0XXDJPGNW/529f0d7edc510ec247a0c81a152a890034b1bdd4418479a026cf3815fcd25644-image-35-1.png)

## Default Sorting Logic

Out of the box, we apply the following sorting rules:

- 
- 
- 

## Customizing Sorting Logic

To apply custom sorting logic, follow these steps:

### 1. **Access Theme Code**

- 
- 
- Choose the theme to edit and click **Edit Code**.

![f5ed09b05264ead74a5e529fc7bf05d5234ff1cae00cebd34aedf3030680c411-image_38.png](https://us.v-cdn.net/6038474/uploads/EDLETKZ0AGFA/f5ed09b05264ead74a5e529fc7bf05d5234ff1cae00cebd34aedf3030680c411-image-38.png)

### 2. **Modify Filter Logic**

- 
- 

JSX

```dart
const sortFilters = (filterName) => {  const filter = document.querySelector(`[data-filter-name="${filterName}"]`)  const body = filter.querySelector('.findify-filters--body-wrapper');  const children = Array.from(body.querySelectorAll('.findify-filters-checkbox-item'));// Sort filter items based on their 'value' attribute (you can modify this to suit your needs)  children.sort((a, b) => {    const aValue = a.getAttribute('value');    const bValue = b.getAttribute('value');    return aValue - bValue;  });    children.forEach(child => body.appendChild(child));}
```

### 3. **Update Filter File**

- 
- 
- 

JSX

```xml
<script>  const filterName = '{{ name }}';  sortFilters(filterName)</script>
```

![126c59d4e43e8b06d2d8f147e13abfb1881053ffe41bef7aedfa95c1b4d99295-image_39.png](https://us.v-cdn.net/6038474/uploads/P3A8UW4MJ3NQ/126c59d4e43e8b06d2d8f147e13abfb1881053ffe41bef7aedfa95c1b4d99295-image-39.png)

## **Example: Manual Sorting of Filter Options**

To manually specify the order of certain values, define a sorted list of values within the function logic. For instance:

JSX

```powershell
const sortedBrands = ['dell', 'barco', 'eizo', 'amd']; //etc..const sortFilters = (filterName) => {  const filter = document.querySelector(`[data-filter-name="${filterName}"]`)  const body = filter.querySelector('.findify-filters--body-wrapper');  const children = Array.from(body.querySelectorAll('.findify-filters-checkbox-item'));    switch(filterName.toLowerCase()) {    case 'brand':      children.sort((a, b) => {        const aMake = a.getAttribute('value').toLowerCase();        const bMake = b.getAttribute('value').toLowerCase();            const aIndex = sortedBrands.indexOf(aMake) !== -1 ? sortedBrands.indexOf(aMake) : Infinity;        const bIndex = sortedBrands.indexOf(bMake) !== -1 ? sortedBrands.indexOf(bMake) : Infinity;                return aIndex - bIndex;      });      break;    // more cases if needed    default:      break;  }    children.forEach(child => body.appendChild(child));}
```

### Before Custom Sorting:

![9d909782feb7aae232edc7958c28770c004dc24281a5558c0e62ce150c9e55f3-image_36.png](https://us.v-cdn.net/6038474/uploads/BPL21W7SD98A/9d909782feb7aae232edc7958c28770c004dc24281a5558c0e62ce150c9e55f3-image-36.png)
In this example, four values are manually sorted: 'Dell', 'Barco', 'Eizo', and 'AMD'.

### After Custom Sorting:

![981949d503041e35f66b2d452390138ab04703d0f02ac2434d8222d050513fe3-image_37.png](https://us.v-cdn.net/6038474/uploads/YTQ7VI3O03KE/981949d503041e35f66b2d452390138ab04703d0f02ac2434d8222d050513fe3-image-37.png)
After custom sorting logic is applied, these four values are returned in the defined order.

## **FAQs**

### What are the default sorting options in Liquid?

- 
- 
- 

![1c5a2277851236b2aba1c9d0cf0b015161e3768a0e4edab12799e4b766b9c07c-image_40.png](https://us.v-cdn.net/6038474/uploads/QR6506HPL3OS/1c5a2277851236b2aba1c9d0cf0b015161e3768a0e4edab12799e4b766b9c07c-image-40.png)

### Can sorting logic be customized?

Yes, sorting logic can be configured to arrange options alphabetically, numerically, or based on custom attributes.

For example, for a client that sells computer equipment, where the values are `16GB`, `24GB`, and `1TB`, the sorting logic manipulates these values by converting them into a consistent unit. If the value is in TB, it is multiplied by 1024 to convert it to GB before sorting. This ensures accurate numerical sorting rather than sorting the values directly based on their raw text.

### Can I create a manual list of filter values to specify their order?

Yes, by defining a custom array and matching it to filter options in the JavaScript logic.

### How do I determine the filter name to be used?

To determine the appropriate `filterName` to use in a `switch/case` statement, the value of the `data-filter-name` attribute can be extracted from DOM.

![db8e78e7e3005a5b3978082f1c70cf0412200cebec9f6bb648b1e50be654683a-image_34_1.png](https://us.v-cdn.net/6038474/uploads/0DEMQTP47FWT/db8e78e7e3005a5b3978082f1c70cf0412200cebec9f6bb648b1e50be654683a-image-34-1.png)