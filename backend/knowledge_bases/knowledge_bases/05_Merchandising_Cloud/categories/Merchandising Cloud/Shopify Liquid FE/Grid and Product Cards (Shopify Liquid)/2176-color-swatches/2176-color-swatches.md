---
title: "Color Swatches"
articleID: 2176
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Color Swatches

You can implement color swatches on product cards to provide customers with an intuitive visual way to browse products by color, making it easier for them to find the specific variation they're looking for.

This visual enhancement helps improve product discoverability and can reduce the time customers spend searching for their preferred color options.

Color swatches create a more engaging shopping experience by displaying up to six color options directly on product cards, with an indicator showing when more colors are available. 

By properly configuring color field mapping in your Merchant Dashboard and integrating the Liquid snippet, you enable customers to quickly identify product variations, which tends to enhance browsing efficiency and can help improve conversion rates.

Color swatches play a crucial role in enhancing the visual appeal and user experience of ecommerce platforms. They provide customers with a quick and intuitive way to browse products based on color preferences, facilitating easier navigation and informed purchase decisions.

Here’s how to integrate Merchandising Cloud-powered color swatches within your Shopify store using our native Shopify app (built using Liquid).

## Default Behavior

When integrated, the Color Swatches component exhibits the following default behavior:

- 
- 
- 

## Merchant Configuration

Before implementing the Color Swatches component, merchants must ensure proper configuration within their Merchandising Cloud dashboard.

Follow these steps:

1. 
  Configure Color Field:
  - 
  - 
2. 
  Configure ID Field:
  - 
3. 
  Update Color Mapping:
  - 

## Integration with Liquid

The Color Swatches component is available as a Liquid snippet within the Findify Liquid Components ([https://github.com/findify/findify-liquid-components/tree/main/snippets)](https://github.com/findify/findify-liquid-components/tree/main/snippets)) repository.

Since you've already imported all the files from this repository, including findify-product-swatches-color.liquid and findify-product-swatches.css, you don't need to download them again. Simply ensure that both of these snippets are included within your theme's snippets directory, particularly within findify-head-injector.liquid.

1. 
  Confirm Snippets:
  - 
  - 
2. 
  Modify `findify-product-card.liquid`:
  - 
  - 

jsx

```yaml
{% render 'findify-product-swatches-color',  product_url: product_url,  product: product,  colormap: colormap,  variants: variants,%}
```

1. jsx<img width="100%" height="100%" class="findify-product-swatch-image" hidden />

![df7090f-Untitled_11.png](https://us.v-cdn.net/6038474/uploads/0KTGYWM0Y0X1/df7090f-untitled-11.png)

1. 

css

```css
.findify-product-swatch-image {  display: block;  top: 0;  position: absolute;  width: 100%;  height: 300px;  object-fit: cover;  z-index: 1;}
```

1. 

Select 'id' and 'image_url fields' and return them in:

- 
- 
- 

**Conclusion**

By following these integration steps, you can effectively incorporate Merchandising Cloud-powered color swatches within your Shopify store. Enhance the visual appeal, navigation, and user experience of your ecommerce platform, thereby driving engagement and boosting sales.

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:support@maropost.com)