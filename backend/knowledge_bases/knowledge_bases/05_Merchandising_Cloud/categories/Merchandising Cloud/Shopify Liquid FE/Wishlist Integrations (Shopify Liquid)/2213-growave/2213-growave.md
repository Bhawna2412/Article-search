---
title: "Growave"
articleID: 2213
category: "Shopify Liquid FE > Wishlist Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Growave

You can integrate Growave with Merchandising Cloud to combine search and discovery with wishlist, reviews, loyalty, and user-generated content features. This comprehensive integration enables you to leverage multiple customer engagement tools alongside your enhanced search functionality.

Growave integration creates a more complete customer engagement ecosystem by connecting search with reviews, wishlists, and loyalty features. 

This unified approach helps you build stronger customer relationships through multiple touchpoints, combining effective product discovery with social proof and retention mechanisms that can help improve both initial conversions and long-term customer value.

![a4d21d1-Untitled_6.png](https://us.v-cdn.net/6038474/uploads/A801RJ8JLYNT/a4d21d1-untitled-6.png)
The Growave integration enhances Shopify stores with advanced wishlist and loyalty functionalities. Follow the steps below to seamlessly integrate Growave with your store’s Maropost Merchandising Cloud (formerly Findify) solutions.

To start, you must have already downloaded the Growave app from the [Shopify App Store.](https://apps.shopify.com/growave)

## Step 1: Enable Growave Wishlist

1. 
2. Navigate to `Online Store` > `Themes`

![55172bd-1689308045721-Woman_Themes_Shopify.png](https://us.v-cdn.net/6038474/uploads/YSPW50X0CYEK/55172bd-1689308045721-woman-themes-shopify.png)
3. Select the theme you are planning to integrate the Reviews on and click on Customize.

![f47c102-1689308156478-Woman_Themes_Shopify_1_.png](https://us.v-cdn.net/6038474/uploads/2SNYG2CMAWJJ/f47c102-1689308156478-woman-themes-shopify-1.png)
4. Click on 'App Embeds' and enable 'Growave'.

![a322694-growave.png](https://us.v-cdn.net/6038474/uploads/SHT6ME3K3Z9P/a322694-growave.png)

## Step 2: Create `socialshopwave-widget-fave.liquid` Snippet

1. 
2. 
3. 

```applescript
<div   id="shopify-block-growave_loyalty_wishlist_v2_product_add_to_wishlist_yancEA"   class="shopify-block shopify-app-block" >  <div     class="gw-add-to-wishlist-product-card-placeholder"     data-gw-product-id="{{ id }}"    data-gw-variant-id="{{ variantId }}"    data-gw-button_class    style="display: block"  /></div>
```

## Step 3: Include the Snippet in `findify-product-card.liquid`

1. 
2. 

```twig
{% capture the_snippet_fave %}{% render 'socialshopwave-widget-fave', id: id, variantId: current_variant.id %}{% endcapture %}{% unless the_snippet_fave contains 'Liquid error' %} {{ the_snippet_fave }}{% endunless %}
```

> **Note:** **📘 Note:** If `current_variant.id` is empty, input `selected_variant_id` to ensure the correct variant is associated with the Growave Wishlist button. It is also essential to include both `id` and `variantId` parameters for proper functionality.

## Step 4: Verify CSS for `.findify-product-card`

1. 
2. 

CSS

```
.findify-product-card {    position: relative;}
```

### Conclusion

You have now successfully integrated Growave in your Shopify store, enhancing it with advanced wishlist functionality. Ensure all changes are saved and thoroughly test the integration across different pages to verify functionality.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)