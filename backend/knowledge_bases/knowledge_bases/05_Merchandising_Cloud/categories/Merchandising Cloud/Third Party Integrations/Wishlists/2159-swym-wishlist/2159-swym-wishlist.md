---
title: "Swym Wishlist "
articleID: 2159
category: "Third Party Integrations > Wishlists"
knowledgeBase: "Merchandising Cloud"
---

# Swym Wishlist 

You can integrate wishlist functionality with Swym to help customers save products for later consideration, which tends to increase return visits and helps improve conversion rates over time. Wishlists enable customers to create personalized collections, making it easier for them to complete purchases when ready, while providing you with valuable behavioral data about product preferences.

Setting up Swym wishlist integration within your Merchandising Cloud product cards helps streamline the customer journey by allowing shoppers to easily add products to their wishlist directly from search results and collection pages. This integration typically leads to better customer engagement and helps reduce cart abandonment by giving customers an organized way to track products they're interested in.

![91101ee-853854c-swym-wishlist.gif](https://us.v-cdn.net/6038474/uploads/T2I1EAN11EQI/91101ee-853854c-swym-wishlist.gif)

## Time Estimates

- Set up in Platform: n/a hours
- Integration: 1 hour
- Styling: 0.5 hours

## Functional Overview

[components/Cards/Product/index.tsx] 
[https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx)[https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx)

## Integration Steps

In order to integrate with our wishlist partner Swym, first things first, a new file has to be created, wherein you can add all wishlist-related functionality. Having done that, you can build a basic structure for the component that we are going to include in the product card.

WishList.tsxcomponents/Cards/Product/index.tsx

```plaintext
import React from 'react';const WishList = ({ item }) => {    return (    <div className="findify-wishlist-heart">      <button>          </button>    </div>  )}export default WishList
```

Then you need to fetch the wishlist to check if there is anything on the list. The function checks if a wishlist item's ID matches the "selectedVariantId" and then changes the styling accordingly.

The idea is to have a default state of "isAdded: false" and turn it into "isAdded: true" to adjust the styling as needed.

WishList.tsx

```plaintext
import React, { useState, useEffect } from "react";const isInWishlist = (item, setIsInWishList) => {  if (window._swat) {    window._swat.fetch(res => {      const isRes = res.filter(i => i.epi === parseInt(item.get('selected_variant_id'))).length > 0;      if (isRes) setIsInWishList(true);    })  }}const WishList = ({ item }) => {  const [isInWishList, setIsInWishList] = useState(false);  const selectedVariantId = item.get('selected_variant_id');  useEffect(() => {    setTimeout(      () => {        isInWishlist(item, setIsInWishList)      }, 500    )  }, [])    return (     <div className="findify-wishlist-heart" onClick={onClick}>      <button    // depending if "isAdded" is true or false, we return different classNames        className={isAdded           ? 'findify-wishlist-button findify-added-to-wishlist swym-button swym-add-to-wishlist-view-product swym-icontext swym-heart disabled swym-added swym-loaded'           : 'findify-wishlist-button swym-button swym-add-to-wishlist-view-product swym-icontext swym-heart swym-loaded'}         findify-product-variant-id={selectedVariantId}>      </button>    </div>  )}export default WishList
```

Our penultimate step is to show how to create an onClick event, which will add or remove products from our wishlist. We can do that by adding fetch requests.

WishList.tsx

```plaintext
import React, { useState, useEffect } from "react";const isInWishlist = (item, setIsInWishList) => {  if (window._swat) {    window._swat.fetch(res => {      const isRes = res.filter(i => i.epi === parseInt(item.get('selected_variant_id'))).length > 0;      if (isRes) setIsInWishList(true);    })  }}const WishList = ({ item }) => {  const [isInWishList, setIsInWishList] = useState(false);  const selectedVariantId = item.get('selected_variant_id');    const obj = {    "epi": parseInt(selectedVariantId),    "du": '<ADD STORE URL HERE>' + item.get('product_url').split('?')[0],    "empi": parseInt(item.get('id')),    "iu": item.get('image_url'),    "pr": item.getIn(['price', 0]),    "stk": item.get('quantity'),    "dt": item.get('title'),  }    // you can play around the timeout  useEffect(() => {    setTimeout(      () => {        isInWishlist(item, setIsInWishList)      }, 500    )  }, [])    const onClick = () => {    if (!isInWishList) {      window._swat !== undefined && window._swat.addToWishList(        obj, function (r) {          setIsInWishList(isInWishList => !isInWishList)        }      )    }     else {      window._swat.removeFromWishList(obj, (r) => {        setIsInWishList(isInWishList => !isInWishList)()      })    }  }    return (     <div className="findify-wishlist-heart" onClick={onClick}>      <button    // depending if "isInWishList" is true or false, we return different classNames        className={isInWishList           ? 'findify-wishlist-button findify-added-to-wishlist swym-button swym-add-to-wishlist-view-product swym-icontext swym-heart disabled swym-added swym-loaded'           : 'findify-wishlist-button swym-button swym-add-to-wishlist-view-product swym-icontext swym-heart swym-loaded'}         findify-product-variant-id={selectedVariantId}>      </button>    </div>  )}export default WishList
```

Finally, you need to add WishList to the components/Cards/Product/index.tsx

components/Cards/Product/index.tsx

```plaintext
import WishList from 'WishList';// your code<WishList item={item} />
```

## MJS Version

This module has been optimized for MJS version **7.1.37**