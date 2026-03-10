---
title: "Add to Cart Button"
articleID: 2184
category: "Shopify Liquid FE > Grid and Product Cards (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Add to Cart Button

You can add "Add to Cart" buttons directly to product cards in search results and collections, reducing friction in the purchase journey by eliminating an extra click to the product page. This streamlined checkout path helps improve conversion rates by allowing customers to quickly add items to their cart while browsing.

Enabling quick add-to-cart functionality shortens the path to purchase and tends to improve conversion rates by reducing the steps required to complete a transaction. This feature is particularly effective for straightforward products where customers don't need additional details before purchasing, helping create a more efficient shopping experience that can lead to increased sales velocity.

Integrating an Add to Cart (ATC) button within product cards in Shopify enhances user experience by allowing customers to quickly add items to their shopping carts.

Follow these concise steps to seamlessly integrate the ATC button into your store's product cards.

## Integration Steps

**Step 1: Create a New Asset**

1. 
2. 
3. 

JavaScript

```javascript
function addToCart(id, selectedVariantId) {  const formData = {    items: [{      id: selectedVariantId,      quantity: 1    }]  };  const apiUrl = window.Shopify.routes.root + 'cart/add.js';  const requestOptions = {    method: 'POST',    headers: {      'Content-Type': 'application/json'    },    body: JSON.stringify(formData)  };  fetch(apiUrl, requestOptions).then(res => handleResponse(res, id, selectedVariantId))    .catch(handleError)}function handleResponse(res, id, selectedVariantId) {  return res.json().then(data => {    if(data?.items) {      alert('Item added to cart');      findify.core.analytics.sendEvent('click-item',        {            rid: findify.grid.state.meta.rid,            item_id: id,            variant_item_id: selectedVariantId        },        false      )    }    else {      const errorDescription = data?.description || 'Unexpected Error';      alert(errorDescription);    }  })}function handleError(error) {  const errorDescription = error?.description || 'Unexpected Error';  alert(errorDescription);}
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

**Conclusion**

By following these simple steps, you can seamlessly integrate an Add to Cart button into product cards within your Shopify store. Empower your customers to make quick purchase decisions and enhance their shopping experience with this intuitive feature.

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:support@maropost.com)