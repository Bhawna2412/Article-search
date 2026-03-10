---
title: "Sale and Discount Price Ranges"
articleID: 2249
category: "MJS React FE > Product Card (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Sale and Discount Price Ranges

You can display sale prices and discount ranges directly in product cards to help customers quickly identify savings opportunities during product discovery. When pricing information clearly shows discounts and sale prices, customers can make faster value-based decisions which helps improve conversion rates and tends to enhance the effectiveness of promotional merchandising strategies.

Clear price and discount display supports transparent shopping experiences that build customer trust. By showing both original and discounted prices with clear savings information, you help customers understand product value immediately, supporting better purchase decisions and improved conversion through price-aware product discovery.

## #1. Background

Price is one of the key-factors customers may be looking out for when going for a purchase. With that, there are possibilities to upsell certain products.

In case you have a need to sell a certain variant of your product, say you have a limited time offer for red dresses and reduce their price, that could very well be displayed on the listing page.

With slight adjustment of code you can make it so that the price can be displayed in the form *from .. to ..*, which may attract those customers who are interested in this product and would very like to get it at a reduced price. What's not to love?

## #2. Requirements

- The only requirement for this customisation is to have a 'compare_at' field enabled, which we're going to use further on.

## #3. Time Estimates

- Set up in Platform: n/a
- Integration: 30 minutes
- Styling: n/a

## #4. Functional Overview

The list of components to be adjusted is as follows:

> Components:[components/Cards/Product/Price/index.tsx] https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/Price/index.tsx

## #5. Integration Steps

First things first, you'll need to get variants for the item. Then you should create multipleCompareAt function. The function creates an array of old prices for all variants. Lastly, you got to check if a product has variants, then show this array, or show standard item.get('compare_at').

components/Cards/Product/Price/index.tsx

```plaintext
/** * @module components /Cards/Product/Price */import cx from 'classnames';import { getPrice } from 'helpers/getPrice';import { IProduct, ThemedSFCProps } from 'types';import { priceIsSampleArray } from 'helpers/getPrice';import { useConfig } from '@findify /react-connect';import styles from 'components/Cards/Product/Price/styles.css';/** List of props that Price component accepts */export interface IPriceProps extends ThemedSFCProps {  item: IProduct;}export default ({ className, theme = styles, item }: IPriceProps) => {  const { config } = useConfig();  const variants = item.get("variants"); // getting variants for the item:  const hasDiscount =    !item.get('compare_at') &&    item.get('discount') &&    item.get('discount').size > 0 &&    priceIsSampleArray(item.get('price'));  const hasCompare = !!item.get('compare_at');    const multipleCompareAt = (variants) => variants.map(i => i.get('compare_at')).filter(i => i);    const discountPrices = variants ? multipleCompareAt(variants) : item.get('compare_at');  return (    <div className={cx(theme.priceWrapper, className)}>      <span        className={cx(          theme.price,          (hasDiscount || hasCompare) && theme.salePrice        )}      >        {getPrice(item.get('price'), config.get('currency'))}      </span>      <span display-if={hasCompare} className={cx(theme.compare)}>        {getPrice(discountPrices, config.get('currency'))}      </span>    </div>  );};
```

## #5. MJS Version

This module has been optimized for MJS version **7.1.38**