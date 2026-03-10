---
title: "Quick Add & Quick View"
articleID: 2186
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Quick Add & Quick View

You can enable Quick Add and Quick View functionality to let customers view product details or select variants without leaving search results or collection pages. This feature reduces browsing friction and helps improve conversion rates by streamlining the path from product discovery to cart addition.

Quick View and Quick Add features create a more efficient browsing experience by allowing customers to access essential product information and make purchasing decisions without navigating away from their search results. This reduced friction in the customer journey can help improve conversion rates, particularly for customers who want to quickly evaluate and purchase multiple items during a single browsing session.

![b5fcf58-Quick_Add.png](https://us.v-cdn.net/6038474/uploads/8VBGENQ6741B/b5fcf58-quick-add.png)
A Quick Add / Quick View feature enhances user experience by allowing seamless access to product details and quick addition to the cart without navigating away from the current page. This functionality can be integrated into Shopify stores using our app, providing flexibility for both themes with existing modals and those without.

## Passing Liquid Variables

To implement the Quick Add / Quick View feature, Liquid variables extracted from `findify-product-card.liquid` can be transmitted to a JavaScript function. This allows for dynamic population of product information within the modal window.

### Example 1: Basic Implementation

First, create a button with onclick function.

> **Note:** 📘 Note: You can get values from Shopify itself, using `product.` prefix.

JSX

```yaml
<buttononclick="showQuickAddModal({    brand: '{{ brand }}',    title: '{{ product.title }}',    ...other props  })">  Quick view</button>
```

### Example 2: Handling Complex Data

In some cases, values cannot be directly passed, leading to an `Unexpected token` error. To prevent this issue, it's necessary to convert the values before passing them. For instance, images should be converted into an array, and product description HTML should be encoded as a URL. Specifically regarding images, only the image URLs will be extracted for passing.

JSX

```twig
{% assign mediaSrcArray = product.media | json %}{% assign description = product.description | url_encode %}<buttononclick="showQuickAddModal({brand: '{{ brand }}',    title: '{{ product.title }}',    images: [{% for image in product.media %}'{{ image | image_url }}',{% endfor %}],    description: '{{ description }}'  })">  Quick view</button>
```

## Creating Modal

1. 
2. 
3. 

HTML

```xml
<div class="modal-wrapper"><div id="modal-product-brand"></div><div id="modal-product-description"></div><!-- Other variables --></div><script>function showQuickAddModal({id,images,brand,title,description}) {const productBrandDOM = document.getElementById('modal-product-brand');const productDescriptionDOM = document.getElementById('modal-product-description');// Other variable declarationsproductBrandDOM.innerText = brand;productDescriptionDOM.innerHTML = decodeURIComponent(description.replace(/\\+/g, ' '))}</script>
```

## Passing Product Variants

Product variants can also be passed to the JavaScript function, allowing for dynamic display of variant options within the modal.

> **Note:** 📘 Note: Pass them as a string by default.

### Example:

HTML

```yaml
<buttononclick="showQuickAddModal({    variants: '{{ variants }}',    ...other variables  })">  Quick view</button>
```

## Handling Variant Data

The string representation of variants is parsed into an array of objects using regular expressions to extract relevant information.

JSX

```javascript
function showQuickAddModal({variants}) {/* input: availability=true~color=White~id=39730240159949~price=248~quantity=2~size=X-Small;availability=true... */const variantsArray = parseVariants(variants);/* output: [ { availability: true, id: 1, price: ... }, {}, ...]  */}function parseVariants(variants) {  const objectsArray = variants.split(";").filter(Boolean);  const extractedArray = objectsArray.map(objectString => {      const idMatch = objectString.match(/id=(\\d+)/);      const sizeMatch = objectString.match(/size=([^\\|]+)/);      const priceMatch = objectString.match(/price=(\\d+)/);      const quantityMatch = objectString.match(/quantity=(\\d+)/);      const availabilityMatch = objectString.match(/availability=true/);      /* other regular expressions */      return {            id: idMatch[1],            size: sizeMatch[1],            availability: !!availabilityMatch,            quantity: quantityMatch ? parseInt(quantityMatch[1]) : 0,            price: priceMatch[1],        };  });  return extractedArray;}
```

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:support@maropost.com)