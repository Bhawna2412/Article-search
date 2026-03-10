---
title: "Shopify Multi-currency"
articleID: 2008
category: "Third Party Integrations"
knowledgeBase: "Merchandising Cloud"
---

# Shopify Multi-currency

You can enable multi-currency support for your Shopify store integration by updating specific React components in the Merchandising Cloud JavaScript library, which allows customers to view products and filter by price in their preferred currency. This technical implementation ensures AI-powered search and recommendations display accurate pricing across different currencies, helping improve the shopping experience for international customers and potentially increasing conversion rates in global markets.

Implementing multicurrency integration helps expand your ecommerce reach while maintaining personalized search functionality. The component updates handle currency conversion for product cards, price displays, range facets, and breadcrumbs, ensuring consistent pricing throughout the shopping experience-enabling you to serve international customers effectively while preserving the AI-driven personalization benefits that help drive conversion across all markets.

## Components

- [components/Cards/Product/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/view.tsx)
- [components/Cards/Product/Price/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Cards/Product/Price/view.tsx)
- [components/Breadcrumbs/createBreadcrumb.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/Breadcrumbs/createBreadcrumb.tsx)
- [components/search/LazyResults/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/search/LazyResults/view.tsx)
- [components/search/StaticResults/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/search/StaticResults/view.tsx)
- [components/RangeFacet/content.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/RangeFacet/content.tsx)
- [components/RangeFacet/index.ts](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/RangeFacet/index.ts)
- [components/RangeFacet/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/components/RangeFacet/view.tsx)
- [layouts/Autocomplete/Dropdown/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/layouts/Autocomplete/Dropdown/view.tsx)
- [layouts/Autocomplete/Fullscreen/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/layouts/Autocomplete/Fullscreen/view.tsx)
- [layouts/Autocomplete/Sidebar/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/layouts/Autocomplete/Sidebar/view.tsx)
- [layouts/Recommendation/Slider/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/layouts/Recommendation/Slider/view.tsx)
- [layouts/Recommendation/Grid/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/layouts/Recommendation/Grid/view.tsx)
- [layouts/Recommendation/Swiper/view.tsx](https://github.com/findify/findify-js/blob/develop/packages/react-components/src/layouts/Recommendation/Swiper/view.tsx)

In order to integrate the Shopify multicurrency we would need to update all of the components mentioned above. We would use the multicurrency API here and update each component by adding states. Add this line of code to these components `components/search/LazyResults/view.tsx`, `components/search/StaticResults/view.tsx` ,`layouts/Autocomplete/Dropdown/view.tsx`, `layouts/Autocomplete/Fullscreen/view.tsx`, `layouts/Autocomplete/Sidebar/view.tsx`, `layouts/Recommendation/Slider/view.tsx`, `layouts/Recommendation/Grid/view.tsx`, `layouts/Recommendation/Swiper/view.tsx`, hence we would handle all possible types of recommendations and autocompletes, and setup the product cards:

```javascript
import { withProps } from 'recompose';

/* some code here */

// default_currency is the default currency that is set for your store,
// string that has this format: "USD", "GBP", "EUR" and so on
const convertPrice = (price, currentCurrency) =>
  Currency.convert(price, default_currency, Currency.currentCurrency).toFixed(2);

const enhancer = withProps(({ price, oldprice, currentCurrency }) => ({
  price:
    price.size > 0 &&
    price
      .setIn([0], convertPrice(price.get(0)))
      .setIn([price.size - 1], convertPrice(price.get(price.size - 1))),
  oldprice: oldprice != -1 && convertPrice(oldprice),
}));

const PriceView: React.SFC<IPriceProps> = ({
  className,
  price,
  theme,
  currency,
  hasDiscount,
  hasCompare,
  oldPrice,
  availability,
  currentCurrency,
  setCurrentCurrency,
}: IPriceProps) => {
  if (currency.code !== Currency.currentCurrency) {
    currency.code = Currency.currentCurrency;
  }

  if (currentCurrency !== Currency.currentCurrency) {
    setCurrentCurrency(Currency.currentCurrency);
  }

  return (
    <div className={cx(theme.priceWrapper, className)}>
      <span
        className={cx(
          theme.price,
          (hasDiscount || hasCompare) && theme.salePrice
        )}
      >
        {getPrice(price, currency)}
      </span>

      <span display-if={hasCompare} className={cx(theme.compare)}>
        {getPrice(oldPrice, currency)}
      </span>
    </div>
  );
};

export default enhancer(PriceView);
```

You would, also, need to pass the `currentCurrency` and `setCurrentCurrency` state and state handler to the productCard component, so, for instance, the `components/search/LazyResults/view.tsx` may look like this:

```typescript
/**
 * @module components/search/LazyResults
 */

import React from 'react';

import MapArray from 'components/common/MapArray';
import Grid from 'components/common/Grid';
import ProductCard from 'components/Cards/Product';
import Button from 'components/Button';
import Text from 'components/Text';

import { ThemedSFCProps, IProduct, MJSConfiguration } from 'types';
import { List } from 'immutable';
import { ArrayLike } from 'components/common/MapArray';

import { compose, lifecycle, withState } from 'recompose';

/** Props that LazyResultsView accepts */
export interface ILazyResultsProps extends ThemedSFCProps {
  /** List of Products */
  items: List<IProduct>;

  /** MJS Configuration */
  config: MJSConfiguration;

  /** Number of columns that one item occupies in a 12-col grid */
  columns: string;

  /** Method to load next page */
  onLoadNext: () => any;

  /** Method to load previous page */
  onLoadPrev: () => any;

  /** Flag whether to display next button */
  displayNextButton: boolean;

  /** Flag whether to display previous button */
  displayPrevButton: boolean;

  /** Rest of the props get passed down to ProductCard */
  [x: string]: any;
}

const enhancer = compose(
  withState('currentCurrency', 'setCurrentCurrency', 'CAD'),
  lifecycle({
    componentDidMount() {
      const currencySelector = document.querySelector('.currencies'); // the class may vary
      const setCurrentCurrency = this.props.setCurrentCurrency;

      currencySelector.addEventListener('change', function (event) {
        setCurrentCurrency(event.target.value);
      });
    },
  })
);

const LazyResultsView = ({
  items,
  config,
  theme,
  card = ProductCard,
  columns,
  onLoadNext,
  onLoadPrev,
  displayNextButton,
  displayPrevButton,
  currentCurrency, // state
  setCurrentCurrency, // handler
  ...rest
}: ILazyResultsProps) => (
  <div className={theme.root}>
    <Button
      display-if={displayPrevButton}
      className={theme.prevButton}
      onClick={onLoadPrev}
    >
      <Text primary lowercase>
        {config.getIn(['i18n', 'loadPrev'], 'Load previous')}
      </Text>
    </Button>

    <Grid columns={columns}>
      {MapArray({
        ...rest,
        config,
        currentCurrency, // passing state to ProductCard factory
        setCurrentCurrency, // passing handler
        array: items as ArrayLike,
        factory: card,
      })}
    </Grid>

    <Button
      display-if={displayNextButton}
      className={theme.nextButton}
      onClick={onLoadNext}
    >
      <Text primary lowercase>
        {config.getIn(['i18n', 'loadNext'], 'Load more')}
      </Text>
    </Button>
  </div>
);

export default enhancer(LazyResultsView);
```

Then, we would update the product card price component (`components/Cards/Product/Price/view.tsx`):

```javascript
import { withProps } from 'recompose';

/* some code here */

// default_currency is the default currency that is set for your store,
// string that has this format: "USD", "GBP", "EUR", and so on
const convertPrice = (price, currentCurrency) =>
  Currency.convert(price, default_currency, Currency.currentCurrency).toFixed(2);

const enhancer = withProps(({ price, oldprice, currentCurrency }) => ({
  price:
    price.size > 0 &&
    price
      .setIn([0], convertPrice(price.get(0)))
      .setIn([price.size - 1], convertPrice(price.get(price.size - 1))),
  oldprice: oldprice != -1 && convertPrice(oldprice),
}));

const PriceView: React.SFC<IPriceProps> = ({
  className,
  price,
  theme,
  currency,
  hasDiscount,
  hasCompare,
  oldPrice,
  availability,
  currentCurrency,
  setCurrentCurrency,
}: IPriceProps) => {
  if (currency.code !== Currency.currentCurrency) {
    currency.code = Currency.currentCurrency;
  }

  if (currentCurrency !== Currency.currentCurrency) {
    setCurrentCurrency(Currency.currentCurrency);
  }

  return (
    <div className={cx(theme.priceWrapper, className)}>
      <span
        className={cx(
          theme.price,
          (hasDiscount || hasCompare) && theme.salePrice
        )}
      >
        {getPrice(price, currency)}
      </span>

      <span display-if={hasCompare} className={cx(theme.compare)}>
        {getPrice(oldPrice, currency)}
      </span>
    </div>
  );
};

export default enhancer(PriceView);
```

Now, we handle the range facet. We would need to update them like this:

```javascript
/**
 * @module components/RangeFacet
 */

import React from 'react';
import {
  compose,
  withStateHandlers,
  withProps,
  setDisplayName,
  withPropsOnChange,
  withHandlers,
  lifecycle,
  withState,
} from 'recompose';

import { findCurrency } from 'currency-formatter';
import withTheme from 'helpers/withTheme';
import template from 'helpers/template';
import view from 'components/RangeFacet/view';
import styles from 'components/RangeFacet/styles.css';

const createKey = (...args) => args.join('_');

// default_currency is the default currency of the store
const convertPrice = (price) =>
  parseInt(Currency.convert(price, Currency.currentCurrency, default_currency));

export default compose(
  setDisplayName('RangeFacet'),
  withTheme(styles),

  withProps(({ facet, config }) => ({
    items: facet.get('values'),
  })),

  withState('currentCurrency', 'setCurrentCurrency', Currency.currentCurrency),

  lifecycle({
    componentDidMount() {
      const setCurrentCurrency = this.props.setCurrentCurrency;
      $('body').on('change', '.currencies', function (e) {
        setCurrentCurrency(this.value);
      });
    },
  }),

  withPropsOnChange(['config', 'currentCurrency'], ({ config, currentCurrency }) => ({
    currencySymbol: findCurrency(currentCurrency).symbol,
  })),

  withStateHandlers(
    ({ facet }) => ({
      from: undefined,
      to: undefined,
    }),

    {
      onReset: () => (e) => ({ from: void 0, to: void 0 }),

      onChangeMin: ({ from, to }, { facet }) => (e) => {
        const value = parseFloat(e.target.value) || from || facet.get('min');
        if (isNaN(value)) return { from: void 0 };

        // Previously normalized value (commented out in original code)
        return { from: value };
      },

      onChangeMax: ({ from, to }, { facet }) => (e) => {
        const value = parseFloat(e.target.value) || to || facet.get('max');
        if (isNaN(value)) return { to: void 0 };

        // Previously normalized value (commented out in original code)
        return { to: value };
      },

      onCommit: ({ from, to }, { facet }) => () => {
        if (!from && !to) return;

        const newFrom = convertPrice(from);
        const newTo = convertPrice(to);

        const key = [from, to].join('_');

        facet.setValue({ from: newFrom, to: newTo });

        return { from, to };
      },
    }
  ),

  withHandlers({
    onPressButton: ({ onCommit }) => (e) => {
      e.preventDefault();
      Promise.resolve().then(() => onCommit());
    },
  }),

  withProps(({ onCommit }) => ({
    onKeypress: ({ key }) => key === 'Enter' && onCommit(),
  }))
)(view);
```

```javascript
/**
 * @module components/RangeFacet
 */

import unescape from 'lodash/unescape';
import formatCurrency from 'helpers/formatCurrency';

const identity = (i) => i;

// once again, the default_currency is the default currency of the store
const convertPrice = (price) =>
  parseInt(Currency.convert(price, default_currency, Currency.currentCurrency));

const createLabel = (oldFrom, oldTo, config, fx) => {
  const from = oldFrom && convertPrice(oldFrom);
  const to = oldTo && convertPrice(oldTo);

  return (
    (from && to && `${fx(from)} - ${fx(to)}`) ||
    (from && !to && `${fx(from)} ${unescape(config.getIn(['i18n', 'up']))}`) ||
    (!from && to && `${unescape(config.getIn(['i18n', 'under']))} ${fx(to)}`)
  );
};

export default ({ item, config }) =>
  createLabel(
    item.get('from'),
    item.get('to'),
    config,
    (item.get('name') === 'price' &&
      formatCurrency({ code: Currency.currentCurrency })) ||
      identity
  );
```

```typescript
/**
 * @module components/RangeFacet
 */

import React, { InputHTMLAttributes } from 'react';
import cx from 'classnames';

import NumberInput from 'react-numeric-input';
import MapArray from 'components/common/MapArray';
import Item from 'components/RangeFacet/Item';
import Button from 'components/Button';
import Text from 'components/Text';

import { ThemedSFCProps, IFacet, IFacetValue, MJSConfiguration } from 'types';
import { List } from 'immutable';

/** Input default styling parameters */
const inputDefaults = {
  style: false,
  mobile: false,
};

export interface IRangeFacetProps extends ThemedSFCProps {
  /** Facet to extract values from */
  facet: IFacet;

  /** Facet values */
  items: List<IFacetValue>;

  /** MJS Configuration */
  config: MJSConfiguration;

  /** Currency symbol */
  currencySymbol: string;

  /** Minimum possible price */
  from: number;

  /** Maximum possible price */
  to: number;

  /** Invoked when maximum range is changed */
  onChangeMax: (evt?: React.ChangeEvent<any>) => any;

  /** Invoked when minimum range is changed */
  onChangeMin: (evt?: React.ChangeEvent<any>) => any;

  /** Invoked when any key in any input is pressed, e.g. Enter */
  onKeypress: (evt: any) => any;

  /** Invoked when Go button is pressed */
  onPressButton: () => any;
}

const RangeFacetView: React.SFC<IRangeFacetProps> = ({
  theme,
  facet,
  items,
  config,
  currencySymbol,
  from,
  to,
  onChangeMax,
  onChangeMin,
  onKeypress,
  onPressButton,
}: IRangeFacetProps) => (
  <div className={theme.root}>
    <MapArray
      display-if={config.get('pullSelected')}
      array={
        config.get('pullSelected')
          ? items.filter((i) => i.get('selected'))
          : items
      }
      factory={Item}
      config={config}
      theme={theme}
    />

    <MapArray
      array={
        config.get('pullSelected')
          ? items.filter((i) => !i.get('selected'))
          : items
      }
      factory={Item}
      config={config}
      theme={theme}
    />

    <div className={cx(theme.range, theme.inputBlock)}>
      <div className={theme.inputWrap}>
        <span className={theme.currency}>{currencySymbol}</span>
        <NumberInput
          {...inputDefaults}
          className={theme.input}
          precision={config.get('precision', 0)}
          value={from}
          max={to || facet.get('max')}
          min={facet.get('min')}
          onBlur={onChangeMin}
          onKeyPress={onKeypress}
        />
      </div>

      <div className={theme.divider}>-</div>

      <div className={theme.inputWrap}>
        <span className={theme.currency}>{currencySymbol}</span>
        <NumberInput
          {...inputDefaults}
          className={theme.input}
          precision={config.get('precision', 0)}
          value={to}
          min={from || facet.get('min')}
          max={facet.get('max')}
          onBlur={onChangeMax}
          onKeyPress={onKeypress}
        />
      </div>

      <Button onClick={onPressButton} className={theme.submit}>
        <Text primary uppercase>
          {config.getIn(['i18n', 'submit'])}
        </Text>
      </Button>
    </div>
  </div>
);

export default RangeFacetView;
```

All commented lines can be removed, they are present here just to show the difference between the default code. The final item is to update the breadcrumbs if the price filters were toggled:

```typescript
/**
 * @module components/Breadcrumbs
 */

import React from 'react';
import MapArray from 'components/common/MapArray';
import {
  compose,
  withPropsOnChange,
  lifecycle,
  withState
} from 'recompose';

import pure from 'helpers/pure';
import Button from 'components/Button';
import Text from 'components/Text';
import Icon from 'components/Icon';

import {
  FilterType,
  ThemedSFC,
  ThemedSFCProps,
  IFacet,
  MJSConfiguration
} from 'types';

/** Filter mapping type */
export type FilterMapping = {
  [x in FilterType]: React.SFC<any>;
};

export interface IFilterProps {
  /** Filter value */
  item: any;

  /** Filter mapping */
  mapping: FilterMapping;

  /** Filter type */
  type: FilterType;

  /** Filter name */
  name: string;
}

const convertPrice = (price, currentCurrency) =>
  parseInt(Currency.convert(price, currentCurrency, Currency.currentCurrency));

// default_currency is the default currency of the store
const Item = compose(
  withState('currentCurrency', 'setCurrentCurrency', default_currency),

  lifecycle({
    componentDidMount() {
      const setCurrentCurrency = this.props.setCurrentCurrency;
      const currentCurrency = this.props.currentCurrency;
      const item = this.props.item;

      const currencySelector = document.querySelector('.currencies'); // class may vary

      currencySelector.addEventListener('change', function (event) {
        const newFrom = convertPrice(item.get('from'), currentCurrency);
        const newTo = convertPrice(item.get('to'), currentCurrency);

        setCurrentCurrency(this.value);

        return item.set('from', newFrom).set('to', newTo);
      });
    },
  }),

  withPropsOnChange(['mapping'], ({ name, type, mapping, item, config }) => {
    const _type = config.getIn(['facets', 'types', name]) || item.get('type');
    const facetConfig = config.getIn(['facets', _type]);

    return {
      Content: mapping[_type],
      config: config.merge(facetConfig),
    };
  }),

  pure
)(({ theme, item, config, Content }: any) => (
  <Button className={theme.breadcrumb} onClick={item.toggle}>
    <Text secondary uppercase className={theme.title}>
      <Content item={item} theme={theme} config={config} />
    </Text>
    <Icon className={theme.cross} name="XDark" />
  </Button>
));

/** List of props that component returned by createBreadcrumb accepts */
export interface IFilterListProps extends ThemedSFCProps {
  /** Filter to create a component for */
  item: IFacet;

  /** MJS configuration */
  config: MJSConfiguration;
}

export default (mapping: FilterMapping) =>
  ({ item, children, theme, config }: IFilterListProps) => (
    <MapArray
      array={item.get('values')}
      name={item.get('name')}
      type={item.get('type')}
      theme={theme}
      factory={Item}
      mapping={mapping}
      config={config}
    />
  );
```