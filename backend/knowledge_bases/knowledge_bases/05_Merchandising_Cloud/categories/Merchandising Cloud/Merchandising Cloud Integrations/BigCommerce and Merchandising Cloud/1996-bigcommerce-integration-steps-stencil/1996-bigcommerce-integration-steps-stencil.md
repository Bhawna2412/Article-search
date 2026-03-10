---
title: "BigCommerce Integration Steps (Stencil) "
articleID: 1996
category: "Merchandising Cloud Integrations > BigCommerce and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# BigCommerce Integration Steps (Stencil) 

You can integrate Merchandising Cloud with your BigCommerce Stencil theme by enabling HTML editing, adding tracking tags, and configuring the search page-establishing the foundation for AI-powered personalization that helps improve conversion rates. The step-by-step process includes feedback API integration for behavioral tracking, search page configuration for dynamic results, and JavaScript implementation to enable real-time product personalization.

Following these Stencil-specific integration steps ensures proper data collection and search functionality while maintaining your theme's structure. The integration captures product views, cart updates, and purchase events that power personalization algorithms, while the search page configuration delivers AI-driven results adapted to individual shopper preferences-helping improve product discovery and conversion performance through behavioral learning.

Follow the steps listed below:

1. Enable HTML editing on your store
2. Feedback API integration
3. Search page integration
4. Disable default quick search
5. Add our JS

## Step 1: Enable HTML editing on your store

**Important note: if for some reason after integration search is not working or you think your website is broken, you can revert to the unmodified theme and contact us!**

In the beginning, you need to make a copy of your current theme, so that you can edit theme files directly:

- Go to `Storefront Design > My Themes`
- Click on `Customize`
- Scroll on the left to the section `Edit theme files` and click on `make a copy`
- Add `with Findify` to the end of your theme name and click on `Save a Copy`
- Go to `Storefront Design > My Themes`
- On the current theme select 'Advanced -> Make a copy'
- Put a name on the copy of the current theme
- On the copy of the theme select `Edit theme Files`
- A window showing HTML code should open

You're ready to start the integration process!

## Step 2: Feedback API integration

**Product tag:**

Open the file `templates > pages > product.html`

Paste the code snippet before `{{/partial}}`

HTML

```plaintext
<div data-findify-event="view-page" data-findify-item-id="{{product.id}}"></div><div data-findify-filter="brand" data-findify-filter-value="{{product.brand.name}}"></div><div data-findify-filter="id" data-findify-filter-value="{{product.id}}"></div>
```

**Order tag:**

Open the file `templates > pages > order-complete.html`

Paste the code snippet before `{{/partial}}`

HTML

```plaintext
<div class="findify_purchase_order" style="display:none">   <span class="order_number">{{ order.id }}</span></div>
```

If you're using BigCommerce Optimized Page Checkout

Please, follow the instructions below for the Optimized Page Checkout flow!

Open the file `templates > pages > order-confirmation.html`

Paste the code snippet before the **second** `{{/partial}}` (it refers to the `{{#partial "page"}}`)

HTML

```plaintext
<div class="findify_purchase_order" style="display:none">   <span class="order_number">{{ checkout.order.id }}</span></div>
```

Get our script tag during the onboarding or in the [Merchant Dashboard](https://dashboard.findify.io/setup/integration) and paste it before the **first** `{{/partial}}` (it refers to the `{{#partial "head"}}`)

**Cart content tag:**

Open the file `templates > layout > base.html`

Paste the code snippet before `</body>`

HTML

```plaintext
<div data-findify-event="update-cart">  {{#each cart.items}}    {{#if type '===' 'Item' }}      <div data-findify-item-id="{{product_id}}" data-findify-unit-price="{{ price.value }}" data-findify-quantity="{{ quantity }}"></div>    {{/if}}  {{/each}}</div>
```

## Step 3: Search page integration

Open the file `templates > pages > search.html`

Paste the following code snippet **after** `{{#partial "page"}}`

HTML

```plaintext
<style>.findify-component-spinner{margin:60px auto 0 auto!important;position:relative;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:findify-component-spinner-animation 0.7s infinite cubic-bezier(.67,.35,.7,.8);animation:findify-component-spinner-animation 0.7s infinite cubic-bezier(.67,.35,.7,.8);border-radius:50%;width:60px;height:60px;-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.findify-component-spinner:after{border-radius:50%;width:60px;height:60px}@-webkit-keyframes findify-component-spinner-animation{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}100%{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes findify-component-spinner-animation{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}100%{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.findify-component-spinner{border-top:3px solid #eaeaea;border-right:3px solid #eaeaea;border-bottom:3px solid #eaeaea;border-left:3px solid #c6c6c6}}</style><div data-findify-attr="findify-search-results" style="min-height: 400px;">   <div class="findify-component-spinner">      <div style="display:none;">
```

Paste the following code snippet **before** `{{/partial}}`

HTML

```plaintext
</div></div></div>
```

## Step 4: Disable default quick search

To disable the default BigCommerce quick search, you need to comment out the content of `quick-results.html` file that you can find in the `Templates -> Components -> Search` folder

## Step 5: Add our JS

Please, follow this guide to see how you can add our JS snippet to your storeAdding Custom Scripts to Stencil Themes

*If you want to make the search work even faster you can follow these steps, but things can break upon theme update*

Open the file `templates > layout > base.html`

Paste the code snippet containing our script **before** `</body>`

*You can get the script tag during the onboarding or in the*[*Merchant Dashboard*](https://dashboard.findify.io/setup/integration)