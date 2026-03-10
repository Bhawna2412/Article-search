---
title: "Wishlist Hero"
articleID: 2212
category: "Shopify Liquid FE > Wishlist Integrations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Wishlist Hero

You can integrate Wishlist Hero with Merchandising Cloud to add wishlist and saved items functionality to your product cards and search results. This integration enables customers to bookmark products for later consideration, supporting a more flexible shopping journey that accommodates both immediate and deferred purchase decisions.

Wishlist Hero integration provides a comprehensive saved items solution that helps improve customer retention by giving shoppers an organized way to track products they're interested in. This functionality encourages customers to return to your store, reduces purchase pressure, and provides you with valuable data about product popularity and customer intent.

![73d2474-Untitled_5.png](https://us.v-cdn.net/6038474/uploads/YQP9RXAP184Q/73d2474-untitled-5.png)
Our Wishlist Hero integration allows Shopify users to enhance their store with interactive wishlist functionalities. Follow the steps below to seamlessly integrate Wishlist Hero into your Shopify store using Liquid.

To start, you must have already downloaded the Wishlist Hero app from the [Shopify App Store.](https://apps.shopify.com/wishlist-hero)

![2d8e06a-Screenshot_2024-06-27_144436.png](https://us.v-cdn.net/6038474/uploads/LJYAY2889KME/2d8e06a-screenshot-2024-06-27-144436.png)

## Step 1: Enable Wishlist Hero in App Embeds

1. 
2. 
3. 
4. 

![a43dcc2-D0A1D0BDD0B8D0BCD0BED0BA_D18DD0BAD180D0B0D0BDD0B0_2024-05-28_D0B2_15.23.55.png](https://us.v-cdn.net/6038474/uploads/S8C99HO26AFD/a43dcc2-d0a1d0bdd0b8d0bcd0bed0ba-d18dd0bad180d0b0d0bdd0b0-2024-05-28-d0b2-15-23-55.png)

## Step 2: Create `socialshopwave-widget-fave.liquid` Snippet

1. 
2. 
3. 

```
{% unless buttonMode %}   {% assign buttonMode = 'icon_only' %}{% endunless %}{% unless buttonView %}   {% assign buttonView = 'Collection' %}{% endunless %}{% unless buttonClass %}   {% assign buttonClass = 'wishlisthero-floating' %}{% endunless  %}{% assign image = product.featured_image %}{% assign name = product.title %}{% capture url %}https://{{shop.domain}}{{product.url}}{% endcapture %}{% for var in product.variants %}    {% if product.selected_or_first_available_variant.id == var.id %}        {% if var.image and var.image.src %}            {% assign image = var.image.src %}        {% endif %}        {% if var.url %}            {%  assign url = var.url %}        {% endif %}        {% if var.name %}            {% assign name = var.name %}        {% endif %}    {% endif %}{% endfor %}<div  data-wlh-id="{{product.id}}"  data-wlh-link="{{url}}" data-wlh-variantid="{{product.selected_or_first_available_variant.id}}"  data-wlh-price="{{product.selected_or_first_available_variant.price | remove: '.' | remove: ',' | divided_by: 100.0 }}"  data-wlh-name="{{name | strip_html }}"  data-wlh-image="{{image | img_url: '1024x'}}"  class="wishlist-hero-custom-button {{ buttonClass }} {{ buttonClass }}-{{ product.id }}"  data-wlh-mode="{{buttonMode}}" data-wlh-view="{{buttonView}}" style="left: auto;"></div><script async="" type="text/javascript">  var buttonInfo = {        ButtonClassElement: "{{ buttonClass }}-{{ product.id }}",        ProductId: "{{product.id}}",        ProductLink: "{{url}}",        ProductVariantId: "{{product.selected_or_first_available_variant.id}}",        ProductPrice: {{product.selected_or_first_available_variant.price | remove: '.' | remove: ',' | divided_by: 100.0 }},        ProductTitle: '{{name | strip_html }}',        ProductImage: "{{image | img_url: '1024x'}}",        ButtonMode: "{{buttonMode}}",        WishlistHash: "{{buttonView}}"    };    WishListHero_SDK.InitializeAddToWishListButton(buttonInfo)</script>
```

## Step 3: Include the Snippet in `findify-product-card.liquid`

1. 
2. 

```twig
{% capture the_snippet_fave %}{% render 'socialshopwave-widget-fave', product: product, variantId: current_variant.id %}{% endcapture %}  {% unless the_snippet_fave contains 'Liquid error' %}   {{ the_snippet_fave }}  {% endunless %}
```

## Step 4: Verify CSS for `.findify-product-card`

1. 
2. 

CSS

```css
.findify-product-card {    position: relative;}
```

### Conclusion

You have now successfully integrated Wishlist Hero into your Shopify store. Ensure all changes are saved and thoroughly test the integration across different pages to verify functionality.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)