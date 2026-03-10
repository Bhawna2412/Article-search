---
title: "Alternating amount of products in a recommendation"
articleID: 2258
category: "MJS React FE > Recommendation Widget (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Alternating amount of products in a recommendation

Controlling the number of products displayed in recommendation widgets helps you optimize recommendation presentation for different contexts and screen sizes. When you can adjust product counts dynamically, you help ensure recommendations fit naturally into page layouts and maintain engagement, which tends to enhance recommendation effectiveness and conversion rates through better-adapted product suggestions.

Flexible recommendation sizing enables you to create optimized recommendation experiences across different pages and devices. This helps improve engagement with recommendations by ensuring they display appropriately whether on desktop, mobile, or in different page contexts, supporting better cross-sell and upsell performance through contextually optimized product suggestion displays.

This example is showcasing how to adjust the recommendations widget for sliders (or grid) to display custom products per row for individual recommendation widgets.

For example, one recommendation widget should display 4 products per row on desktop, another widget should show 3 products per row on desktop.

Firstly, you would need to enable recommendations widgets in[Merchant Dashboard.](https://dashboard.findify.io/solutions/recommendations/widgets)

![1998](https://files.readme.io/098a79c-__2021-12-28__22.00.10.png)

> NoteFor Slider, you would define how many products you would want per row.For Grid, you can define the width of the columns, e.g. 12 would be equal to 100% width, 4 to 33.3% width, 3 to 25%, etc.

layouts/Recommendation/Slider/index.tsxlayouts/Recommendation/Grid/index.tsx

```plaintext
/** * @module components /Dropdown */import Swiper from 'components/Swiper';import ProductCard from 'components/Cards/Product';import Text from 'components/Text';import useColumns from 'helpers/useColumns';import { useItems } from '@findify /react-connect';import { Immutable } from '@findify /store-configuration';import useScrollOnChange from 'helpers/useScrollOnChange';import styles from 'layouts/Recommendation/Slider/styles.css';const getSliderOptions = (config) => {/* Push id's of recommendations to array */  const listOfChangedGridRecs = ['product-findify-rec-5'];    const changedRec = listOfChangedGridRecs.find((el) => el === config.get('node').id);  /* Set values for new layout */  let newRecColumns = [    {width: 400, value: 3},    {width: 600, value: 4}  ];  /* If there is changedRec then set new state */  const columns = changedRec ? useColumns(newRecColumns) : useColumns(config.getIn(['breakpoints', 'grid']));  return {    spaceBetween: 12,    slidesPerView: 12 / Number(columns),  };};export default ({ theme = styles }) => {  const { items, config } = useItems<Immutable.RecommendationConfig>();  const options = getSliderOptions(config);  useScrollOnChange(items);  if (!items?.size) return null;  return (    <>      <Text title component="p" className={theme.title}>        {config.get('title')}      </Text>      <Swiper {...options} slot={config.get('slot')}>        {items          .map((item) => (            <ProductCard              key={item.hashCode()}              item={item}              config={config.get('product')}            />          ))          .toArray()}      </Swiper>    </>  );};
```