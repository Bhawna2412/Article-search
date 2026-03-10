---
title: "Add to Cart Button"
articleID: 2241
category: "MJS React FE > Product Card (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Add to Cart Button

You can add Add to Cart functionality directly to product cards in search results and collection pages, which shortens the path to purchase significantly. When customers can add products to their cart without leaving search results, you reduce friction in the customer journey and tend to enhance conversion rates by enabling faster purchasing decisions.

Add to Cart buttons in product grids help streamline the shopping experience by allowing customers to quickly select multiple products during browsing. This helps improve conversion rates by reducing the number of steps required to build a cart, supporting better product discovery and faster purchase completion for customers who know what they want.

![498](https://files.readme.io/2e9f9c6-Screenshot_1.png)

## #2. Time Estimates

**- Set up in Platform:** n/a hours
**- Integration:** 2 hours
**- Styling:** 0.5 hours

## #3. Functional Overview

> Components:components/Cards/Product/index.tsx

## #4. Integration Steps

First, you need to create an AddToCart component which will be responsible for the logic.

We will also use the Axios client in this instance.

This is how the AddToCartButton component is built:

GenericBigCommerceShopify

```plaintext
import axios from 'axios';const AddToCart = ({ item }) => {  const onClick = async (event) => {    // Prevent clicking item    event.stopPropagation();        const item_id = item.get('id');    const variant_item_id = item.get('selected_variant_id');        // Send events        await item.analytics.sendEvent('add-to-cart', { item_id, variant_item_id, quantity: 1, rid: item.meta.toJS().rid });    await item.analytics.sendEvent('click-item', { item_id, variant_item_id, rid: item.meta.toJS().rid });    // Your code    ...  }  return(    <button className='YOUR CSS CLASS' onClick={onClick}>      Add to cart    </button>  )};export default AddToCart;
```

## #5. Modifications

Since Findify is a third-party application, we have no connection to the Cart components of your store. This means that in order to integrate your Add to Cart solution with the front-end based actions (adding the product to the Cart through API, opening the mini-carts, showing messages once the product is added, etc), you need to setup a function which can then be utilised by Findify.

Requirements: We suggest to come up with the simplest functions available in the global (window) scope across all possible pages where Findify widgets might be present:

ATC function example

```plaintext
window.addToCart('some variant/product id', 1);
```

Where the first parameter is either a variant or a product id of the product and the second one is the quantity of the product that is going to be added to the cart.

The first argument has to be a variant id in case you have some kind of variant selectors implementation.

## #6. MJS Version

This module has been optimized for MJS version **7.1.37**