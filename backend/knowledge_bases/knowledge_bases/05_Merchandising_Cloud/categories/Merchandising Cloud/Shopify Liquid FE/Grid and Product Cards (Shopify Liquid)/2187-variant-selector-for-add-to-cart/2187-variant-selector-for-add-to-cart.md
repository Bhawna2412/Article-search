---
title: "Variant Selector for Add to Cart"
articleID: 2187
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Variant Selector for Add to Cart

You can add variant selectors to product cards, allowing customers to choose size, color, or other options before adding items to cart directly from search results or collections. This functionality eliminates the need to visit product pages for simple variant selection, streamlining the purchase process.

Implementing variant selectors on product cards reduces the number of steps required to make a purchase, particularly for products with straightforward variations. This streamlined selection process helps improve conversion by allowing customers to specify their preferences and add products to cart more quickly, creating a more efficient path from browsing to purchase.

This documentation details how to implement a variant selector for the "Add to Cart" feature in product cards within your Shopify store using our Liquid templates. The variant selector allows customers to choose product variants (such as size or color) diretly from the product card before adding items to the cart.

### Prerequisites

Ensure that the Add to Cart script is connected to your Shopify store. This script handles adding items to the cart, including selected variants.

### Add to Cart Script

Include the following script in your template to manage the Add to Cart functionality:

JSX

```javascript
/* Connect this script to your template */function addToCart(id, selectedVariantId) {  const quantityInput = document.querySelector(`[data-product-id="${id}"] .product-quantity`);  const quantityValue = parseInt(quantityInput.value) || 1;    const formData = {    items: [{      id: selectedVariantId,      quantity: quantityValue,    }]  };  const apiUrl = window.Shopify.routes.root + 'cart/add.js';  const requestOptions = {    method: 'POST',    headers: {      'Content-Type': 'application/json'    },    body: JSON.stringify(formData)  };  fetch(apiUrl, requestOptions).then(res => handleResponse(res, id, selectedVariantId))    .catch(handleError)}function handleResponse(res, id, selectedVariantId) {  return res.json().then(data => {    if(data?.items) {      alert('Item added to cart');      findify.core.analytics.sendEvent('click-item',        {            rid: findify.grid.state.meta.rid,            item_id: id,            variant_item_id: selectedVariantId        },        false      )    }    else {      const errorDescription = data?.description || 'Unexpected Error';      alert(errorDescription);    }  })}function handleError(error) {  const errorDescription = error?.description || 'Unexpected Error';  alert(errorDescription);}
```

## Option 1: Dropdown Selector

![243d663-Bildschirmfoto_2023-09-26_um_16.10.20.png](https://us.v-cdn.net/6038474/uploads/0RN3VA8C5EKH/243d663-bildschirmfoto-2023-09-26-um-16-10-20.png)

Improve user interaction with a dropdown selector, allowing customers to choose product variants such as size or material before adding them to the cart.

### Steps to Implement Dropdown Selector

1. 

JSX

```twig
/* findify-product.liquid place swatches at content-wrapper, below price */{% if widget contains 'search' %}   <span class="swatches-tooltip">Select size</span>  <div class="swatches">    <div class="swatches-header" onClick="toggleSwatchesDropdown('{{ id }}')" data-opened="false">      <span></span>      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">        <path d="M3 5L6 8L9 5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>      </svg>    </div>    <ul class="swatches-body">    </ul>  </div><button class="findify-cta"></button>{% endif %}
```

1. 

JSX

```ada
/* Connect this script to your template */function toggleSwatchesDropdown(id) {  const headerElement = document.querySelector(`[data-product-id="${id}"] .swatches-header`);  const toggleStatus = headerElement.getAttribute('data-opened');  const isOpened = toggleStatus === 'true';    headerElement.setAttribute('data-opened', isOpened ? 'false' : 'true')}function renderCta(productId, variantId, variantAvailability) {  const ctaDOM = document.querySelector(`[data-product-id="${productId}"] .findify-cta`)  if(variantAvailability) {    ctaDOM.removeAttribute('data-oos');    ctaDOM.innerText = 'Add to cart';        ctaDOM.onclick = () => {      addToCart(productId, variantId); // don't forget to add atc-script    }  }  else {    ctaDOM.setAttribute('data-oos', 'true')    ctaDOM.innerText = 'Out of stock'  }}function renderSwatchesBody(selectedSwatchDOM, productId, arr) {  const swatchesBodyDOM = document.querySelector(`[data-product-id="${productId}"] .swatches-body`);  swatchesBodyDOM.innerHTML = '';    arr.forEach(({ id: variantId, size: variantSize, availability: variantAvailability }) => {    const swatchItem = document.createElement('li');    swatchItem.onclick = () => {      selectedSwatchDOM.innerText = variantSize;        renderCta(productId, variantId, variantAvailability);      toggleSwatchesDropdown(productId)    };        swatchItem.classList.add('swatches-item');    swatchItem.innerText = variantSize;    swatchesBodyDOM.appendChild(swatchItem);  })}function setSwatches(productId, selectedVariantId, variants) {  const variantsArray = parseVariants(variants);  const selectedSwatchDOM = document.querySelector(`[data-product-id="${productId}"] .swatches-header span`)  const { id: variantId, size: variantSize, availability: variantAvailability } = variantsArray.find(({ id }) => id === selectedVariantId);  selectedSwatchDOM.innerText = variantSize;  renderCta(    productId,    variantId,    variantAvailability,  )    renderSwatchesBody(    selectedSwatchDOM,    productId,    variantsArray.filter(({ id }) => id !== selectedVariantId)  )}function parseVariants(variants) {  const objectsArray = variants.split(";").filter(Boolean);  const extractedArray = objectsArray.map(objectString => {      const idMatch = objectString.match(/id=(\d+)/);      const sizeMatch = objectString.match(/size=([^\|]+)/);      const availabilityMatch = objectString.match(/availability=true/);            return {          id: idMatch[1],          size: sizeMatch[1],          availability: !!availabilityMatch,      };  });  return extractedArray;}
```

1. 

CSS

```css
/* findify-product-card.css */.content-wrapper {  display: flex;  flex-direction: column;  height: 100%;  color: #000;}.findify-cta {  border: 1px solid #c5c5c5;  text-align: center;  padding: 8px 0;  margin-top: auto;  border-radius: 4px;  width: 100%;  text-transform: uppercase;  font-family: Assistant, sans-serif;  font-weight: 600;  display: flex;  justify-content: center;  transition: .15s linear;  font-size: 14px;  line-height: 14px;  letter-spacing: 0;}.findify-cta[data-oos="true"] {  cursor: not-allowed;}.findify-cta[data-oos="true"]:hover {  background: none;  color: #000;}.findify-cta:hover {  background: #000;  color: #fff;}.swatches {  position: relative;  width: 100%;  cursor: pointer;  font-size: 12px;}.swatches-header {  display: flex;  justify-content: space-between;  align-items: center;  padding: 4px 12px;  font-size: 12px;  font-weight: 600;  background: #DEDEDE;  border-radius: 4px 4px 4px 4px;}.swatches-tooltip {  font-size: 12px;  font-weight: 600;}.swatches-header[data-opened="false"] + .swatches-body {  display: none;}.swatches-header[data-opened="true"] {  border-radius: 4px 4px 0 0;}.swatches-body {  position: absolute;  top: 100%;  width: 100%;  z-index: 2;  margin: 0;  padding: 0;  background: #DEDEDE;  border-radius: 0 0 4px 4px;}.swatches-item {  list-style: none;  font-size: 12px;  padding: 4px 12px;}.swatches-body .swatches-item:last-child {  border-radius: 0 0 4px 4px;}.swatches-item:hover {  background: #F0F0F0;}
```

## Option 2: Button Selector

![87b215e-Bildschirmfoto_2023-12-05_um_15.33.40.png](https://us.v-cdn.net/6038474/uploads/F2E2OQ9DRKEV/87b215e-bildschirmfoto-2023-12-05-um-15-33-40.png)
Enhance the user experience with a button-based selector, particularly suitable for clients in the fashion industry. This feature allows users to select a variant, such as color and/or size, directly from the product card. This enables users to add variants to the cart straight away.

![913b0cb-Bildschirmfoto_2023-12-05_um_15.38.53.png](https://us.v-cdn.net/6038474/uploads/3GVPS48XAP0L/913b0cb-bildschirmfoto-2023-12-05-um-15-38-53.png)

### Steps to Implement Button Selector

1. 

JSX

```twig
/* findify-product.liquid */<div class="image-wrapper">    <a class="findify-product-link" href={{ product_url }}>      <div class='image-container'>        {% render 'findify-product-image'          , media: product.featured_media          , class: 'first-image' %}        {%- if product.media[1] != null -%}          {% render 'findify-product-image'            , media: product.media[1]            , class: 'second-image' %}        {%- endif -%}      </div>    </a>    {% if widget contains 'search' %}       <div class="swatches-wrapper">        <span class="swatches-tooltip">Select size</span>        <ul class="swatches-body">        </ul>      </div>    {% endif %}  </div>
```

1. 

JSX

```javascript
/* Connect this script to your template */function renderSwatchesBody(productId, arr) {  const swatchesBodyDOM = document.querySelector(`[data-product-id="${productId}"] .swatches-body`);  swatchesBodyDOM.innerHTML = '';    arr.forEach(({ id: variantId, size: variantSize, availability: variantAvailability }) => {    const swatchItem = document.createElement('li');    if(variantAvailability) {      swatchItem.onclick = () => {        document.querySelectorAll(`[data-product-id="${productId}"] .swatches-item`).forEach((i) => i.classList.remove('selected'))        swatchItem.classList.add('selected');          renderCta(          productId,          variantId,          variantAvailability,        )      };    }    else {      swatchItem.classList.add('oos')    }        swatchItem.classList.add('swatches-item');    swatchItem.innerText = variantSize;    swatchesBodyDOM.appendChild(swatchItem);  })}function renderCta(productId, variantId, variantAvailability) {  const ctaDOM = document.querySelector(`[data-product-id="${productId}"] .findify-cta`)  if(variantAvailability) {    ctaDOM.removeAttribute('data-oos');    ctaDOM.innerText = 'Add to cart';        ctaDOM.onclick = () => {      addToCart(productId, variantId); // don't forget to add atc-script    }  }  else {    ctaDOM.setAttribute('data-oos', 'true')    ctaDOM.innerText = 'Out of stock'  }}function setSwatches(productId, selectedVariantId, variants) {  const variantsArray = parseVariants(variants);  const {     id: variantId,     size: variantSize,     availability: variantAvailability   } = variantsArray.find(({ id }) => id === selectedVariantId);  renderCta(    productId,    variantId,    variantAvailability,  )    renderSwatchesBody(productId, variantsArray)}function parseVariants(variants) {  const objectsArray = variants.split(";").filter(Boolean);  const extractedArray = objectsArray.map(objectString => {      const idMatch = objectString.match(/id=(\d+)/);      const sizeMatch = objectString.match(/size=([^\|]+)/);      const availabilityMatch = objectString.match(/availability=true/);            return {          id: idMatch[1],          size: sizeMatch[1],          availability: !!availabilityMatch,      };  });  return extractedArray;}
```

1. 

CSS

```css
/* findify-product-card.css */.content-wrapper {  display: flex;  flex-direction: column;  height: 100%;  color: #000;}.findify-cta {  border: 1px solid #c5c5c5;  text-align: center;  padding: 8px 0;  margin-top: auto;  border-radius: 4px;  width: 100%;  text-transform: uppercase;  font-family: Assistant, sans-serif;  font-weight: 600;  display: flex;  justify-content: center;  transition: .15s linear;  font-size: 14px;  line-height: 14px;  letter-spacing: 0;}.findify-cta[data-oos="true"] {  cursor: not-allowed;}.findify-cta[data-oos="true"]:hover {  background: none;  color: #000;}.image-wrapper {  position: relative;}.image-wrapper:hover .swatches-wrapper {  opacity: 1;}.swatches-wrapper {  opacity: 0;  position: absolute;  bottom: 9px;  left: 0;  width: 100%;  z-index: 2;  background: rgba(0, 0, 0, .3);  text-align: center;}.swatches-tooltip {  font-size: 12px;  color: #fff;}.swatches-body {  margin: 0 0;  list-style: none;  padding: 0 0 8px 0;  display: flex;  flex-direction: row;  flex-wrap: wrap;  align-items: center;  justify-content: center;}.swatches-item {  background: #fff;  padding: 0 4px;  font-size: 12px;  margin-right: 4px;  margin-bottom: 4px;  border: 1px solid #fff;  cursor: pointer;}.swatches-item.selected {  background: #000;  border: 1px solid #000;  color: #fff;}.swatches-item.oos, .swatches-item.oos:hover {  cursor: not-allowed;  background: #eaeaea;  border: 1px solid #eaeaea;}.swatches-item:hover {  border: 1px solid #000;}.findify-cta:hover {  background: #000;  color: #fff;}
```

## Option 3: Quantity Input Field Next to Add to Cart (ATC) Button

This option involves adding a brief input field for quantity selection next to the "Add to Cart" (ATC) button. This allows customers to specify the quantity of the product they want to purchase directly on the product card.

### Steps to Implement Quantity Input Field

1. 

JSX

```twig
/* findify-product.liquid */{% if product.variants.size <= 1 and quantityNum > 0 %}  <div class="findify-cta-wrapper">    {% if quantityNum > 1 %}      <button class="increment" onclick="adjustQuantity(-1, '{{ id }}')">        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">          <path d="M7 0L7 8L3.49691e-07 4L7 0Z" fill="#3C3C3C"/>        </svg>      </button>      <input class="product-quantity" data-max-quantity="{{ quantityNum }}" type="number" min="0" value="1" onchange="handleQuantityChange(event)">      <button class="decrement" onclick="adjustQuantity(1, '{{ id }}')">        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">          <path d="M0 8L0 0L7 4L0 8Z" fill="#3C3C3C"/>        </svg>      </button>    {% endif %}    <button class="findify-cta" onclick="addToCart({{ id }}, {{  selected_variant_id }})">      Add to cart    </button>  </div>{% endif %}              {% if product.variants.size > 1 %}  <a class="findify-cta" data-oos="true" href={{ product_url }}>    See options  </a>{% endif %}
```

**Add JavaScript for Quantity Adjustment:**

Add a script to handle the increment and decrement of the quantity.

JSX

```javascript
/* Connect this script to your template */function adjustQuantity(amount, id) {  const quantityInput = document.querySelector(`[data-product-id="${id}"] .product-quantity`);  let currentValue = parseInt(quantityInput.value);  const maxQuantity = parseInt(quantityInput.getAttribute('data-max-quantity'));  currentValue += amount;  currentValue = Math.max(1, Math.min(currentValue, maxQuantity));    quantityInput.value = currentValue;}
```

**Update CSS for Styling:**

Ensure the input field and buttons are styled appropriately.

CSS

```css
/* findify-product-card.css */.content-wrapper {  display: flex;  flex-direction: column;  height: 100%;  color: #000;}.findify-cta {  border: 1px solid #c5c5c5;  text-align: center;  padding: 8px 0;  margin-top: auto;  border-radius: 4px;  width: 100%;  text-transform: uppercase;  font-family: Assistant, sans-serif;  font-weight: 600;  display: flex;  justify-content: center;  transition: .15s linear;  font-size: 14px;  line-height: 14px;  letter-spacing: 0;}.findify-cta:hover {  color: #fff;  background: #222222;}.findify-cta-expanded {  display: flex;  margin-top: auto;}.findify-cta-expanded .findify-cta {  margin-left: 8px;}.product-quantity {  width: fit-content;  width: 34px;  text-align: center;  border: none;  outline: none;  box-shadow: none;  font-size: 14px;}a:not(.button),a:visited:not(.button) {  text-decoration: none;  color: unset;}.findify-product-card {  display: flex;  flex-direction: column;  min-height: 380px;}.adapt {  width: 100%;  aspect-ratio: 1/1.5;  object-fit: cover;}.findify-product-title {  color: var(--findify-text-color);  margin-bottom: 10px;  cursor: pointer;}.findify-cut-text {  text-overflow: ellipsis;  overflow: hidden;  width: 100%;  height: 1.5em;  white-space: nowrap;}.findify-product-price {  color: var(--findify-text-color);}.findify-product-price-with-compare {  font-weight: 700;}.findify-product-price-compare-at {  color: var(--findify-text-secondary-color);}.image-container {  position: relative;  display: inline-block;  width: 100%;}.image-container .second-image {  display: none;  position: absolute;  top: 0;  left: 0;  z-index: 1;}.image-container:hover .second-image {  display: inline;}.findify-product-brand {  font-style: italic;  font-size: smaller;}
```

For further assistance or inquiries, feel free to contact us on [YourFriends@Findify .io](mailto:YourFriends@Findify.io)