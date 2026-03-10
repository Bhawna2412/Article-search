---
title: "Google Tag Manager Integration"
articleID: 2161
category: "Third Party Integrations"
knowledgeBase: "Merchandising Cloud"
---

# Google Tag Manager Integration

You can integrate Google Tag Manager with your Merchandising Cloud implementation to track product click events and impressions, enabling data-driven merchandising decisions based on customer behavior. This integration helps you measure search performance, understand which products resonate with customers, and identify optimization opportunities that can improve conversion rates.

Setting up Google Tag Manager tracking for product interactions provides valuable insights into how customers engage with your search results, collections, and recommendations. This data helps you optimize product positioning, refine merchandising strategies, and measure the effectiveness of your ecommerce search and discovery features.

## Time Estimates

- 
- 
- 

## Functional Overview

**📘Components:****
**

[components/Cards/Product] 
[
](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx)[https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/index.tsx)

[components/search/LazyResults] 
[
](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/search/LazyResults/index.tsx)[https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/search/LazyResults/index.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/search/LazyResults/index.tsx)

## Integration Steps

## 1. Product Click Events.

In order to send Product Click events to Google Analytics, you need to override the default Findify onClick function in 'components/Cards/Product/index.tsx' and create a 'sendFindifyClickEvent' function:

components/Cards/Product/index.tsx

```javascript
/**
 * @module components/Cards/Product
 */

import cx from 'classnames';
import trackProductPosition from 'helpers/trackProductPosition';
import styles from './styles.css';
import { useVariants } from 'helpers/useVariants';
import { IProductCardProps } from 'types';

const sendFindifyClickEvent = (list, item, config, index) =>
  new Promise((resolve) =>
    window.dataLayer.push({
      eventCallback: resolve,
      event: "gaEvent",
      eventCategory: "Ecommerce",
      eventAction: "Product Click",
      ecommerce: {
        click: {
          actionField: { list },
          products: [
            {
              base_product: item.get('item_group_id'),
              variant: item.get('selected_variant_id'),
              name: item.get('title'), // Name or ID required.
              id: item.get('id'),
              price: item.getIn(['price', 0]),
              brand: item.get('brand'),
              category: item.getIn(['category', 0, 'category1']),
              list: list,
              position: index + 1,
            },
          ],
        },
      },
    })
  );

export default ({
  index,
  item,
  theme = styles,
  className,
  config,
  highlighted,
  isAutocomplete,
  isSearch,
  isCollection,
  isRecommendation,
}: IProductCardProps) => {
  const container = trackProductPosition(item);
  const [variant, setVariant] = useVariants(item);

  let list = "";

  switch (true) {
    case isAutocomplete:
      list = "Autocomplete Results";
      break;

    case isCollection:
      list = "Collection Results";
      break;

    case isRecommendation:
      list = "Recommendation";
      break;

    default:
      list = "Search Results";
  }

  const itemOnclick = (e) => {
    const openInNewWindow = e && (e.ctrlKey || e.metaKey);
    const productUrl = item.get('product_url');

    item.analytics.sendEvent(
      "click-item",
      {
        rid: item.meta.get('rid'),
        item_id: item.get('id'),
        variant_item_id: item.get('selected_variant_id'),
      },
      !openInNewWindow
    );

    if (isSearch && !openInNewWindow && typeof window !== "undefined") {
      document.location.hash = item.get('id');
    }

    sendFindifyClickEvent(list, item, config, index);
  };

  return (
    <a
      ref={container}
      data-element="card"
      className={cx(
        theme.root,
        theme[config.get('template')],
        highlighted && theme.highlighted,
        isAutocomplete && theme.autocomplete,
        className
      )}
      href={item.get('product_url')}
      onClick={itemOnclick}
    >
      {/* default code */}
    </a>
  );
};
```

## 2. Product Impressions.

If you need to send Product Impressions to StaticResults (or LazyResults), Recommendations and Autocomplete, this is what the build looks like:

components/search/LazyResultslayouts/Recommendation/Slider/index.tsxcomponents/autocomplete/Products/index.tsx

```javascript
/**
 * @module components/search/LazyResults
 */

import { useEffect } from 'react';
import { useConfig } from '@findify/react-connect';
import styles from 'components/search/LazyResults/styles.css';
import useLazy from 'helpers/useLazy';
import ProductCard from 'components/Cards/Product';
import { ILazyResultsProps } from 'types';

// Push impressions into Google Tag Manager
const pushDataLayers = (data, config) =>
  window.dataLayer &&
  data &&
  window.dataLayer.push({
    event: "data.pageView",
    ecommerce: {
      currencyCode: config.getIn(['currency', 'code']),
      impressions: data.toJS(),
    },
  });

// Build individual impression object
const pushImpressions = (item, index, listType) => ({
  base_product: item.get('item_group_id'),
  variant: item.get('selected_variant_id'),
  name: item.get('title'), // Required
  id: item.get('id'),
  price: item.getIn(['price', 0]),
  brand: item.get('brand'),
  category: item.getIn(['category', 0, 'category1']),
  list: listType,
  position: index + 1,
});

// Send impression batch event
const sendGAEvents = (items, config, meta, isCollection) => {
  const offset = meta.get('offset');
  const limit = meta.get('limit');
  const listType = isCollection ? 'Collection Results' : 'Search Results';

  const itemsCutLimit = items.slice(offset, offset + limit);

  const itemsImpressions = itemsCutLimit.map((item, index) =>
    pushImpressions(item, offset + index, listType)
  );

  if (itemsImpressions.size > 0) {
    pushDataLayers(itemsImpressions, config);
  }
};

// Prevent duplicate impressions
const checkIfTheSameProducts = (currItems) => {
  const lastDataLayer = window.dataLayer
    ?.filter((i) => i.event === 'data.pageView')
    .pop();

  const check =
    lastDataLayer &&
    lastDataLayer.ecommerce.impressions.length === currItems.size &&
    lastDataLayer.ecommerce.impressions.filter((i) =>
      currItems.find((currItem) => currItem.get('title') === i.name)
    );

  return check && check.length === currItems.size;
};

const LazyResults = ({
  theme = styles,
  card = ProductCard,
  itemConfig,
  isMobile,
  isCollection,
  meta,
}: ILazyResultsProps) => {
  const { items } = useLazy();
  const { config } = useConfig();

  useEffect(() => {
    if (!checkIfTheSameProducts(items)) {
      sendGAEvents(items, config, meta, isCollection);
    }
  }, [items]);

  return (
    <div className={theme.root}>
      {/* default Findify LazyResults UI goes here */}
    </div>
  );
};

export default LazyResults;
```

## MJS Version

This module has been optimized for MJS version** 7.1.27**