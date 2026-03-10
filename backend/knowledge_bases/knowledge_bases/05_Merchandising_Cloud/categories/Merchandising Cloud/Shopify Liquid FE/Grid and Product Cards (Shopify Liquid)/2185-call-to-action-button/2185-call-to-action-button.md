---
title: "Call to Action Button"
articleID: 2185
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Call to Action Button

You can implement custom call-to-action buttons on product cards to drive specific customer behaviors beyond standard purchases, such as "Learn More," "Pre-Order," or "Request Quote." These flexible CTAs enable you to tailor the shopping experience to different product types or customer journeys.

Custom CTAs provide flexibility to match buttons to your specific business model, whether you're handling pre-orders, custom quotes, or products requiring additional information before purchase. This customization capability helps you guide customers through appropriate purchase paths based on product type, potentially improving conversion by aligning the call-to-action with the customer's decision-making needs.

A Call to Action (CTA) button is a powerful tool to drive user engagement and encourage specific actions, such as redirecting users to the product detail page (PDP). Follow these simple steps to integrate a CTA button, "View Product," within product cards in your Shopify store using our Shopify app built with Liquid.

![0ac012f-image_14.png](https://us.v-cdn.net/6038474/uploads/3RNZ8BAMQBZV/0ac012f-image-14.png)

## Integration Steps

**Step 1: Create a New Asset**

1. 
2. 
3. 

JavaScript

```
function customCTAFunction() {console.log('CTA Action Fired')}
```

**Step 2: Include Script in Theme Layout**

1. 
2. 

JavaScript

```twig
<head>...<script src="{{ 'yourAssetName.js' | asset_url }}" defer="defer"></script></head>
```

**Step 3: Add Button to Product Card**

1. 
2. 

HTML

```twig
<div><a href={{ product_url }}>// ... other code </a><button onclick="addToCart({{ id }}, {{  selected_variant_id }})" >Add to cart</button></div>
```

By following these straightforward steps, you can effortlessly integrate a Call to Action button within product cards in your Shopify store. Enhance user engagement and encourage users to explore product details with this simple yet effective feature.

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:support@maropost.com)