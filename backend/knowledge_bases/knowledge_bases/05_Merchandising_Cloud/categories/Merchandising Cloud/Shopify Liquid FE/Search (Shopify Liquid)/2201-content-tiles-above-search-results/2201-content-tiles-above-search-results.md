---
title: "Content Tiles Above Search Results"
articleID: 2201
category: "Shopify Liquid FE > Search (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Content Tiles Above Search Results

You can display content tiles above search results to feature editorial content, promotional banners, or informational blocks that provide context for search queries. This capability enables you to combine product discovery with brand storytelling and promotional messaging.

Content tiles above search results provide opportunities to educate customers, highlight campaigns, or provide guidance before they browse products. By strategically placing relevant content alongside search results, you can enhance the shopping experience with helpful information that supports purchasing decisions while promoting key brand messages or seasonal campaigns.

This guide outlines the steps to integrate content tiles above search results in your Shopify store using our app. This enhancement helps to enrich the user experience by displaying content tiles prominently above the product search results.

![89ba5fc297bcbdf4a03c3191620b31d6e51133381666d5f9678d083a091b17f2-Untitled_19.png](https://us.v-cdn.net/6038474/uploads/ACOGBR1Q0RXW/89ba5fc297bcbdf4a03c3191620b31d6e51133381666d5f9678d083a091b17f2-untitled-19.png)

## Steps to Implement Content Tiles Above Search Results

### Step 1: Modify `findify-grid-search.liquid`

1. 
  **Remove Existing Code Blocks:**
  - 
  - 

```twig
{% if show_content_integration %}  {% render 'findify-content-tabs'    , tabs: tabs    , resultsCount: results_count %}  <div    id="findify-product-result-content"    class="findify-tab-content"    style="display: block;">{% endif %}
```

```twig
{% if show_content_integration %}  </div>  {% for tab in tabs %}    {% assign content_id = tab | split: '~' | first %}    <div id="{{content_id}}-content" class="findify-tab-content">      {% render 'findify-content-grid'        , content_id: content_id %}    </div>  {% endfor %}{% endif %}
```

1. 
  **Add New Code Under **`<strong>#findify-product-grid</strong>`**:**
  - 

```twig
{% if show_content_integration %}  {% for tab in tabs %}    {% assign content_id = tab | split: '~' | first %}    <div id="{{content_id}}-content" class="findify-tab-content" style="display: block">      {% render 'findify-content-grid', content_id: content_id %}    </div>  {% endfor %}{% endif %}
```

### Step 2: Modify `findify-content-grid.liquid`

1. 
  **Remove Lazy Loading Pagination:**
  - 
  - 

```
{% render 'findify-lazy-loading-pagination'  , id: content_id %}
```

### Step 3: Modify `findify-content.liquid`

1. 
  **Remove Content Fallback Image Code:**
  - 
  - 

```twig
<div class="adapt-content-img content-fallback-img">  {% if image_url %}    <img src="{{ image_url }}" alt="{{ title }}"/>  {% else if %}    {% render 'findify-content-image-fallback' %}  {% endif %}</div>
```

### Step 4: Add Custom Styles in `findify-content-grid.css`

1. 
  **Add Custom CSS:**
  - 
  - 

CSS

```css
#findify-search-main .findify-content-card .content-wrapper {  padding: 2px 10px 1px;  background: #abccc2;  color: white;  border-radius: 10px;}#findify-search-main .findify-content-grid {  margin-bottom: 10px;}#findify-search-main .findify-content-list {  display: flex;  flex-wrap: wrap;  gap: 10px;  padding: 0;}
```

### Additional Customizations

- 

## Conclusion

By following these steps, you will successfully integrate content tiles above the search results in your Shopify store using our app. This feature enhances the visibility of content and improves the overall shopping experience for your customers.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)