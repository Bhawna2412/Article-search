---
title: "Files and Usage"
articleID: 2172
category: "Shopify Liquid FE > Shopify Liquid FE Overview"
knowledgeBase: "Merchandising Cloud"
---

# Files and Usage

You can understand the structure of Merchandising Cloud's Shopify Liquid implementation through three key component types: Sections (entry points), Snippets (modular code blocks), and Assets (styling and scripts). This organized architecture makes it easier for developers to locate specific functionality and implement customizations efficiently.

Understanding the file structure and component relationships helps developers customize the search and discovery experience more effectively. By following the recommended workflow of starting with Sections, then exploring Snippets, and finally modifying Assets for visual changes, you can implement customizations systematically while maintaining code organization and avoiding conflicts with future updates.

> **Note:** **Note**: While merchants are welcome to modify these components to customize the appearance of Maropost Merchandising Cloud (formerly Findify) on their individual stores, it is important to note that this work should only be carried out by a developer – ideally a developer who has had previous experience working with Shopify and with Liquid, especially in the context of Shopify 2.0.

## 1. Layouts

Layout files in Shopify Liquid provide a way to maintain consistent design elements across multiple pages. By creating a layout, you can define the common structure for all pages on your store.

Liquid

```
<!DOCTYPE html><html><head>  <title>{{ page.title }}</title></head><body>  {{ content_for_layout }}</body></html>
```

## 2. Templates

Templates are used to structure the content and layout of individual pages on your Shopify store. Each template corresponds to a specific page type, such as product pages, collection pages, or the homepage.

Liquid

```
<!-- product.liquid --><h1>{{ product.title }}</h1><p>{{ product.description }}</p>
```

## 3. Includes

Includes are reusable snippets of code that can be used across multiple templates. They help in modularizing your Liquid code and promoting code reusability.

Liquid

```
<!-- header.liquid --><header>  <nav>    <!-- Navigation links go here -->  </nav></header>
```

## 4. Sections

Sections are content blocks that can be added and customized on different pages of your Shopify store. They allow merchants to modify the layout and content of pages without touching the theme code directly.

Liquid

```
{% section 'slider' %}{% section 'featured-products' %}
```