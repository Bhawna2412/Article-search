---
title: "Manual Shopify Integration Steps"
articleID: 1990
category: "Merchandising Cloud Integrations > Shopify and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# Manual Shopify Integration Steps

You can complete the manual Shopify integration by adding product tagging, creating a search results page, and inserting the Merchandising Cloud script in your theme files, which enables product tracking, cart analytics, and search functionality. This technical setup ensures accurate data collection for AI-powered personalization while maintaining full control over your theme's structure and avoiding automatic script insertion that could conflict with existing customizations.

Following these integration steps helps establish the foundation for improved search performance and conversion tracking. The product view tagging captures customer behavior data that powers personalization algorithms, while the properly configured search results page provides the interface for delivering relevant product recommendations-enabling you to leverage AI-driven merchandising capabilities once the technical integration is complete.

You need to follow this guide to finish setting up Merchandising Cloud in your store.

- Tag product view
- Create search results page
- Add script to `<head>` section

Tag product view

Create a new snippet under `<strong>snippets/</strong>` that is called `<strong>findify-tagging.liquid</strong>` with the following content

HTML

```plaintext
{% if product %}  <div data-findify-event="view-page" data-findify-item-id="{{product.id}}" data-findify-variant-item-id="{{product.selected_or_first_available_variant.id}}"></div>  <div data-findify-filter="category" data-findify-filter-value='{{product.type | escape}}'></div>  <div data-findify-filter="brand" data-findify-filter-value='{{product.vendor | escape}}'></div>  <div data-findify-filter="id" data-findify-filter-value='{{product.id}}'></div>{% endif %}{% if cart %}   <div data-findify-event="update-cart">    {% for item in cart.items %}      <div data-findify-item-id="{{ item.product_id }}" data-findify-variant-item-id="{{item.variant_id}}" data-findify-unit-price="{{ item.price | money_without_currency }}" data-findify-quantity="{{ item.quantity }}"></div>    {% endfor %}  </div>    {% if cart.item_count > 0 %}       <div data-findify-filter="id" data-findify-filter-value='[{% for item in cart.items %} { "value": ["{{ item.product_id }}"] } {% if forloop.last == false %},{%endif%}{% endfor %}]'></div>    {% endif %}{% endif %}
```

Reference this snippet in `<strong>theme.liquid</strong>` file of the theme by placing the snippet below before `<strong></body></strong>`

HTML

```plaintext
{% include 'findify-tagging' %}
```

Add script to

<head>

section

Go to the [Integration](https://dashboard.findify.io/setup/integration) section of the [Merchant Dashboard](https://dashboard.findify.io/) and copy the script.

Paste the script into `<strong>theme.liquid</strong>` file after `<strong><head></strong>` tag.

![660d67d-image_186.png](https://us.v-cdn.net/6038474/uploads/XBBILKMTLWFT/660d67d-image-186.png)

> **Note:** *The Name key [here: Findify.myshopify.com] is unique per merchant.**
> **
> **It uses the name of the store in the Merchandising Cloud dashboard and can be copied directly *[*from the dashboard*](https://dashboard.findify.io/setup/integration)

Create search results page

- Go the the `Pages` section on the left
- Create a new page for displaying search results with `<strong>search-results</strong>` handle
- Put the following content there by clicking on `Show HTML` button

HTML

```plaintext
<style>.findify-component-spinner,.findify-component-spinner:after{border-radius:50%;width:60px;height:60px}.findify-component-spinner{margin:60px auto 0!important;position:relative;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:findify-component-spinner-animation .7s infinite cubic-bezier(.67,.35,.7,.8);animation:findify-component-spinner-animation .7s infinite cubic-bezier(.67,.35,.7,.8);-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;border-top:3px solid #eaeaea;border-right:3px solid #eaeaea;border-bottom:3px solid #eaeaea;border-left:3px solid #c6c6c6}@-webkit-keyframes findify-component-spinner-animation{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}100%{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes findify-component-spinner-animation{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}100%{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}</style><div data-findify-attr="findify-search-results" data-findify="controlled-tabs" style="min-height: 400px;">  <div class="findify-component-spinner"></div></div>
```

**After following these steps the search should be live in your store!**