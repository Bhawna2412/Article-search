---
title: "Custom Stickers"
articleID: 2246
category: "MJS React FE > Product Card (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Custom Stickers

You can add custom stickers to product cards to highlight promotions, product attributes, or special features directly in search results and collection pages. When customers can quickly identify sale items, new arrivals, or featured products through visual badges, they can make faster decisions about which products to explore, which helps improve engagement and tends to enhance conversion rates through better product differentiation.

Custom sticker functionality enables you to create visual merchandising strategies that guide customer attention toward key products. This helps improve promotional effectiveness and conversion rates by making important product attributes immediately visible during search and browsing, supporting better product discovery and more strategic merchandising across your catalog.

Integration Steps

> Componentscomponents/Cards/Product/index.tsx

In this example we will create Custom Sticker component for Product Card.

The main idea is that we will create a CustomSticker component that will be shown based on certain logic. The example will showcase the sticker logic if the product has a 'sale' tag:

CustomStickercomponents/Cards/Product/index.tsxCSS

```plaintext
const CustomSticker = ({item}) => {  const sale = item.get('tags')?.find(tag => tag.toLowerCase() === 'sale');  return (    <div className='findify-custom-sticker' display-if={sale}>sale</div>  )};export default CustomSticker;
```

MJS Version

This module has been optimized for **MJS version 7.1.25**