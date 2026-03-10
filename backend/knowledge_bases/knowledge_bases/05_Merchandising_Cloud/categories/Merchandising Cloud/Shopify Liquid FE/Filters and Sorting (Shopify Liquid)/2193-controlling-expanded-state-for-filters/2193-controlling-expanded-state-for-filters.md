---
title: "Controlling Expanded State for Filters"
articleID: 2193
category: "Shopify Liquid FE > Filters and Sorting (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Controlling Expanded State for Filters

You can control which filters display in expanded or collapsed states by default, helping you emphasize the most important filtering options for your catalog. This customization enables you to surface high-value filters immediately while keeping secondary options available but collapsed.

Configuring default filter expansion states helps guide customers toward the most relevant filtering options for your product catalog. By expanding key filters like category or size while collapsing less frequently used options, you can create a more streamlined filtering interface that reduces visual clutter while maintaining full filtering capability.

This documentation explains how to control the expanded state of filters in the Maropost Merchandising Cloud (formerly Findify) app for Shopify. By default, all filters are initially open. You can configure the filters to be collapsed either globally or individually for desktop or mobile views.

![b6bf67e-Screenshot_2024-06-27_114530.png](https://us.v-cdn.net/6038474/uploads/7AZUFEQN3AS5/b6bf67e-screenshot-2024-06-27-114530.png)

*Collapsed filters for Mobile*

## Global Control: Collapse All Filters for BOTH Desktop and Mobile

To set all filters to be initially collapsed for both desktop and mobile views, follow these steps:

1. 
  **Open the **`<strong>findify-filter-group.liquid</strong>`** File**:
  - 
  - 
2. 
  <div class="findify-filters-body" aria-expanded="false">  <!-- Filter content --></div>
  - 
  - 

## Controlling Filters for EITHER Desktop or Mobile

To control the expanded state of filters separately for desktop and mobile, you need to add code inside the `<script>` tag within the `findify-filter-group.liquid` file.

1. 
  **Open the **`<strong>findify-filter-group.liquid</strong>`** File**:
  - 
  - 
2. 

For further assistance or inquiries, feel free to contact us on [YourFriends@Findify .io](mailto:YourFriends@Findify.io)