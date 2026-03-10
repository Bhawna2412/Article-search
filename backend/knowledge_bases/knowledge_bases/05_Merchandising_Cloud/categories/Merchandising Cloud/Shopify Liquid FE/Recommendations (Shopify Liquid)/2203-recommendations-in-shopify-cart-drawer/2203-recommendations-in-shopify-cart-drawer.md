---
title: "Recommendations in Shopify Cart Drawer"
articleID: 2203
category: "Shopify Liquid FE > Recommendations (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Recommendations in Shopify Cart Drawer

You can display product recommendations within the Shopify cart drawer to encourage additional purchases at a key decision point in the customer journey. This strategic placement of recommendations helps increase average order value by suggesting complementary or related products when customers are actively engaged in the checkout process.

Implementing cart drawer recommendations provides opportunities for last-minute upselling and cross-selling without interrupting the checkout flow. By showing relevant product suggestions alongside cart contents, you help customers discover additional items they might want, which can help improve overall order values and support merchandising objectives for complementary products.

The Shopify Cart Drawer is a dynamic part of the theme where customers can view their added items, update quantities, and proceed to checkout without leaving the current page. This guide will show you how to integrate our recommendations into the Cart Drawer, enhancing the shopping experience by suggesting additional products.

## Steps to Integrate our Recommendations into the Cart Drawer

### Step 1: Create a Recommendation Widget

1. 
2. 
3. 

### Step 2: Create the Code Snippet File

Create a new code snippet file in your Shopify theme and name it `findify-cart-rec.liquid`. Add the following code to the file:

HTML

```twig
{% assign id = 'cart-findify-rec-10' %}{% assign cartData = '' %}{% for item in cart.items %}  {% capture itemData %}    {"id": "{{ item.id }}", "vendor": "{{ item.vendor }}", "type": "{{ item.type }}"}  {% endcapture %}  {% assign cartData = cartData | append: itemData %}  {% unless forloop.last %}    {% assign cartData = cartData | append: ',' %}  {% endunless %}{% endfor %}{% assign parameters = '[' | append: cartData | append: ']' %}<div class="findify-element" id="{{ id }}"></div><script>  const findifyRecId = '{{id}}';  const parameters = {{ parameters }};  const initFindifyRec = () =>  {    findify.recommendation.init({      id: findifyRecId,      desktop_slide_per_view: "2",      title: "You might also like",      parameters: { cart: parameters },    });  }  document.addEventListener("initFindifyRec", initFindifyRec);</script>
```

### Step 3: Add Event Listener

In your theme's `cart.js` file, add an event listener to initialize the recommendation widget whenever the cart drawer opens or updates:

JSX

```
document.dispatchEvent(new CustomEvent("initFindifyRec"));
```

### Step 4: Render the Code Snippet in the Cart Drawer

Locate the `cart-drawer.liquid` file in your Shopify theme. Insert the render tag for the `findify-cart-rec` snippet in the desired location within the cart drawer:

HTML

```
{% render 'findify-cart-rec' %}
```

### Step 5: Customize the Recommendation Widget

Customize the appearance and behavior of the recommendation widget as needed. You can adjust the `desktop_slide_per_view`, `title`, and other parameters in the `findify-cart-rec.liquid` snippet to fit your store's design and requirements.

> **Note:** **📘 NOTE:** This implementation is based on Shopify version 2.0.

For further assistance or inquiries, feel free to contact us at [support@maropost.com](mailto:support@maropost.com)