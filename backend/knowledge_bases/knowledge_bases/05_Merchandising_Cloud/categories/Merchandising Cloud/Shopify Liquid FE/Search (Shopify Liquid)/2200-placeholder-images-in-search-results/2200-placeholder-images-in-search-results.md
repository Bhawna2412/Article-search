---
title: "Placeholder Images in Search Results"
articleID: 2200
category: "Shopify Liquid FE > Search (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Placeholder Images in Search Results

You can configure placeholder images for products that lack image assets, ensuring a consistent visual presentation in search results even when product images are missing. This fallback imagery maintains a professional appearance and prevents broken image displays that can undermine customer confidence.

Implementing placeholder images helps maintain visual consistency across your product catalog, particularly important during initial product data setup or when managing large inventories where some items may temporarily lack images. Proper placeholder configuration ensures all products display professionally in search results, supporting a polished browsing experience regardless of image availability.

In our app for Shopify, if no image is set for the content, a default image placeholder will be displayed.

![067f17cee2550516cbfb2aca96a94449ad1d3d033fee771ce82fe5cceabd60ab-Untitled_16.png](https://us.v-cdn.net/6038474/uploads/QK5C3SPU0L4U/067f17cee2550516cbfb2aca96a94449ad1d3d033fee771ce82fe5cceabd60ab-untitled-16.png)

This guide explains how to replace the default image placeholder with a custom image for your store.

## Steps to Replace the Default Placeholder Image

### Step 1: Locate the Placeholder File

The placeholder image is controlled by the `findify-content-image-fallback.liquid` file in your Shopify theme.

### Step 2: Edit the Placeholder File

1. 
2. 
3. 
4. 

### Step 3: Replace the Default Placeholder Image

1. 
2. 

Here is an example of how the default SVG code might look:

HTML

```xml
<svg width="100" height="100" xmlns="<http://www.w3.org/2000/svg&gt;" fill="#ccc">  <rect width="100" height="100"/>  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999">Image</text></svg>
```

Replace it with your custom SVG code. For example:

HTML

```xml
<svg width="100" height="100" xmlns="<http://www.w3.org/2000/svg&gt;" fill="#your-color">  <!-- Your custom SVG content here --></svg>
```

### Step 4: Save the Changes

1. 

### Step 5: Verify the Changes

1. 
2. 

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)