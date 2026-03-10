---
title: "Filter Control in Shopify Using Metafield"
articleID: 2302
category: "FAQ > Shopify FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Filter Control in Shopify Using Metafield

## #1. Use Case

![a5f39a7-Filters.png](https://us.v-cdn.net/6038474/uploads/0VZLLGIHVS7I/a5f39a7-filters.png)
Using filters is a great way to ease navigation for your shoppers. With Merchandising Cloud, you can add filters easily using Variant Options, Metafields, or Tags. Read more here.

Within the Merchandising Cloud Merchant [Dashboard](https://dashboard.findify.io/) you can easily toggle filters on/off, change names, and alter the order of filters. By default, Merchandising Cloud’s filters are dynamic and disappear if there aren't any values for the viewed search query/collection, but there are also cases when you want to control the order of filters on individual collections.

Working with Merchandising Cloud’s DevTools, you can easily customize the order of filters shown, while this guide outlines a simple and non-technical method of control the experience on an ongoing basis (without having to change any code).

## #2. Input Format

> 👍 Populated data only required for collections that should be altered
> This function is designed to offer control of individual collections without having to populate data for all collections. This function will only affect collections where this metafield is populated. Where it's left empty, all filters activated in the Merchandising Cloud dashboard will be presented in order specified within the dashboard.

The function follows a really simple format, controlling:
i) Which Filters to be included; and
ii) In what order they should be presented.

**Format:**

Format{"Filter Name": Position," Filter Name_2" : Position_2 , " Filter Name_n" : Position_n }

**Example:**

Example{"Discount" : 1," Color" : 2 , " Price" : 3}

In this case, the filters will be presented in the order of:

- **Discount**
- **Color **
- **Price **

While any other filter, such as **Category**, will be excluded.

## #3. Requirements To Apply This Guide

- This guide is applicable for Shopify only.
- This integration requires the merchant to set up the field and populate the data needed for Filter Control using metafields.
- This solution is built for individual collection control. Bulk management can, however, be utilized by bulk editing the input values within metafields.

## #4. Time Estimates

- **Set up in Shopify:** 1 hour
- **Integration: ** 1 hour
- **Styling:** n/a
- **Populating Filter Values:** *Depends on breath of scope. Each collection will take a few seconds.*

## #5. Overview Of Integration Steps

Step 1: Set Up Required Metafield Structure (Merchant)
Step 2: Populate Data to Control the Filters per Collection
Step 3: Make The Data Available
Step 4: Integrate Front End Activation Through Merchandising Cloud DevTools

## Step 1: Set Up Required Metafield Structure (Merchant)

In order to manage metafields in Shopify, you need the capability in place.
For this overview, we have utilized the 'Custom Fields' app.

> 👍 Choice of Meta Fields App
> The following guide is done using the 'Custom Fields' app but meta fields are stored in Shopify so please use the meta fields app you prefer. The UX of the dashboard setup might alter, but functionality in your store will be the same.

![08b91a3-__2021-03-24__11.24.49.png](https://us.v-cdn.net/6038474/uploads/4IGPDNBAUJ1I/08b91a3-2021-03-24-11-24-49.png)
![c6791ea-__2021-03-24__11.25.02.png](https://us.v-cdn.net/6038474/uploads/DPDSUE4Q99TM/c6791ea-2021-03-24-11-25-02.png)
![2a6bf60-__2021-03-24__11.26.01.png](https://us.v-cdn.net/6038474/uploads/FBDLX9XTF849/2a6bf60-2021-03-24-11-26-01.png)
![f602d71-__2021-03-24__15.31.33.png](https://us.v-cdn.net/6038474/uploads/IVA176E6K7LI/f602d71-2021-03-24-15-31-33.png)

## Step 2: Populate Data to Control the Filters Per Collection

Go back to the Shopify Dashboard and visit a specific collection page.
Products > Collections > "Collection Name"

![1b964be-Enter_Collection.png](https://us.v-cdn.net/6038474/uploads/8SP7ISLI6HMG/1b964be-enter-collection.png)
![084727f-Edit.png](https://us.v-cdn.net/6038474/uploads/0G6YUOGMI4P8/084727f-edit.png)
In the window, you can now control the the filters displayed following a json string to control:

- Which filters should be included; and
- In what order they should be presented.

![f4a1d8e-Editing.png](https://us.v-cdn.net/6038474/uploads/5XCP24309GTC/f4a1d8e-editing.png)
**Example**

![5d230fc-Before.png](https://us.v-cdn.net/6038474/uploads/HSQAB91MAFGZ/5d230fc-before.png)
![30adf0a-After.png](https://us.v-cdn.net/6038474/uploads/O7D292QOCHPP/30adf0a-after.png)
If you leave out a filter, it won't be displayed on your collection page. In this example only discounted, color, and size filters will be displayed on page. Other will be deleted.

> 🚧 Important
> The filter names must be stated exactly as they are stated within Merchandising Cloud.

**Note:** In the Merchandising Cloud[ Dashboard](http://dashboard.findify.io/), you can easily control the names of your filters. These settings are found in Settings > Primary Setup > Filters

![af702cd-Filter_option.png](https://us.v-cdn.net/6038474/uploads/X36RKKGOWN53/af702cd-filter-option.png)
![a452d90-Filter_option2.png](https://us.v-cdn.net/6038474/uploads/2P9UXT8NWEZX/a452d90-filter-option2.png)

## Step 3: Make The Data Available

Then, you need to add some code to your collection template. You need to go to the theme files and edit code.

![b4c29ac6-4e74-4c56-8ca0-e35612169ad5.png](https://us.v-cdn.net/6038474/uploads/JFJ8TKE73H3S/b4c29ac6-4e74-4c56-8ca0-e35612169ad5.png)
Open 'Templates' and choose 'collection.liquid' file. Add this code into Merchandising Cloud-fallback container

```applescript
<div class="findify-filter-sorting">      <script>        {{collection.metafields.custom_fields["filters_sorting"] | json}}      </script>    </div>
```

![8960d9e-__2021-03-24__15.48.02.png](https://us.v-cdn.net/6038474/uploads/5VM6JP37STW2/8960d9e-2021-03-24-15-48-02.png)
Don't forget to save your changes

## Step 4: Integrate Front End Activation Through Merchandising Cloud DevTools

The following steps require the use of Merchandising Cloud DevTools - changing the React components in the front end. If you have any challenges, Merchandising Cloud’s team for professional services would be happy to assist.
Please get in touch through: [support@maropost .com](mailto:support@maropost.com)

> 📘 Merchandising Cloud DevTool Extension
> To learn how to work with the DevTools, please read more here.

To sort filters you need to edit these files:

- 1. 'components/search/DesktopFacets/view.tsx'
- 2. 'components/Facet/view.tsx'
- 3. In 'components/search/DesktopFacets/view.tsx' you need to add 'sortFacets' function and 'enhancer'.

```lua
components/search/DesktopFacets/view.tsx/** * @module components /search/DesktopFacets */import React from 'react';import Branch from 'components/common/Branch';import MapArray from 'components/common/MapArray';import Facet from 'components/Facet';import Sticky from 'components/common/Sticky';import Text from 'components/Text';import Button from 'components/Button';import Icon from 'components/Icon';import { classNames } from 'classnames';import * as titles from 'components/search/DesktopFacets/Title';import { MJSConfiguration, ThemedSFCProps, IFacet, MJSValue } from 'types';import { List, Map } from 'immutable';import {withPropsOnChange} from 'recompose'; //import withPropsOnChangeconst DefaultContent = ({ theme, children, config, title }) =>  <section className={theme.root} role="region" aria-label={title} tabIndex={0}>{children}</section>/** Props that DesktopFacets view accepts */export interface IDesktopFacetsProps extends ThemedSFCProps {  /** MJS Configuration */  config: MJSConfiguration;  /** Facets list */  facets: List<IFacet>;  /** Method called to reset facets */  onReset: () => any;  /** MJS API Response Metadata */  meta: Map<string, MJSValue>;  /** Method to hide facets */  hideFacets: () => any;  /** Shows visibility status of facets */  visible: boolean;}// create sortFacets to sort facetsconst sortFacets = (facets, config) => {  const sorting = document.querySelector('.Merchandising Cloud-filter-sorting script')                    ? JSON.parse(document.querySelector('.findify-filter-sorting script').text)                    : false;  if(sorting){    return facets.sort(      (a, b) => {        let x = 100000, y = 100000;        const first = config.getIn(['facets', 'labels', a.get('name')], a.get('name')).toLowerCase();        const second = config.getIn(['facets', 'labels', b.get('name')], b.get('name')).toLowerCase();        if (sorting[first]){          x = sorting[first];        }        if (sorting[second]){          y = sorting[second];        }        return x - y;    })  }  return facets;} //create enhancer to change facets positions and to get json from shopifyconst enhancer = withPropsOnChange(['facets'], ({ facets, config }) => ({  facets: sortFacets(facets, config),  facetsJSON: document.querySelector('.findify-filter-sorting script')                ? JSON.parse(document.querySelector('.findify-filter-sorting script').text)                 : false}))const DesktopFacetsView: React.SFC<IDesktopFacetsProps> =  ({  config,  facets, theme, onReset, meta, hideFacets, visible, facetsJSON}: IDesktopFacetsProps) =><Branch  display-if={!config.get('hidableFacets') || visible}  theme={theme}  condition={config.getIn(['view', 'stickyFilters'])}  title={config.getIn(['facets', 'i18n', 'filters'], 'Filters')}  left={Sticky}  right={DefaultContent}>  <Branch    display-if={!config.get('showFacetsTitle')}    meta={meta}    config={config}    theme={theme}    onReset={onReset}    onHide={hideFacets}    condition={config.get('hidableFacets')}    left={titles.hidable}    right={titles.default}  />  <MapArray    theme={{ root: theme.facet }}    array={facets}    factory={Facet}    facetsJSON={facetsJSON}//export json to Facet/view    config={config}    keyAccessor={i => i.get('name')} /></Branch>export default enhancer(DesktopFacetsView);
```

```javascript
components/search/DesktopFacets/index.tsx for MJS 7/** * @module components /search/DesktopFacets */import Branch from 'components/common/Branch';import MapArray from 'components/common/MapArray';import Facet from 'components/Facet';import Sticky from 'components/common/Sticky';import Title from 'components/search/DesktopFacets/Title';import Breadcrumbs from 'components/Breadcrumbs';import { useFacets } from '@findify /react-connect';import { Immutable } from '@findify /store-configuration';import { memo, useCallback, useMemo, useState } from 'react';import useTranslations from 'helpers/useTranslations';import { useEvents, emit } from 'helpers/emmiter';import styles from 'components/search/DesktopFacets/styles.css';const DefaultContent = ({ theme, children, title }) => (  <section className={theme.root} role="region" aria-label={title} tabIndex={0}>    <div className={theme.container}>{children}</div>  </section>);export default memo(({ theme = styles }) => {  const { facets, meta, onReset, config } = useFacets<Immutable.SearchConfig>();  const translate = useTranslations();  const [isHorizontal, isHidable, isSticky, isAccordion] = useMemo(    () => [      config.getIn(['facets', 'position']) === 'top',      config.getIn(['facets', 'hidable']),      config.getIn(['facets', 'sticky']),      config.getIn(['facets', 'accordion']),    ],    []  );  const [visible, setVisible] = useState(true);  /** Generate initial list of opened facets */  const [openFacets, setFacetsStates] = useState(    config      .getIn(['facets', 'filters'])      .filter((f) => !f.get('initiallyCollapsed'))      .keySeq()      .toArray()  
```

Then, you need to remove filters that are not included in json. To do this, you need to change the 'components/Facet/view.tsx' component.

Also for MJS 7 you need to add some style

```typescript
components/Facet/view.tsx
/**
 * @module components/Facet
 */
import React from 'react';
import Button from 'components/Button';
import Text from 'components/Text';
import Icon from 'components/Icon';
import Component from 'components/Facet/Component';
import { ThemedSFCProps, IFacet, MJSConfiguration } from 'types';
/** Props that Facet view accepts */
export interface IFacetProps extends ThemedSFCProps {
  /** Facet component to render */
  FacetComponent: React.Component<any>;
  /** Flag to show open / closed state of facet */
  isOpen?: boolean;
  /** Flag to show if facet is opened on mobile */
  isMobile?: boolean;
  /** Title of facet */
  title: string;
  /** Facet object */
  item: IFacet;
  /** MJS Configuration */
  config: MJSConfiguration;
  /** Filters selected in facet */
  filtersSelected: number;
  /** Function to toggle open / closed state of facet */
  toggleFacet: () => any
}
const FacetView = ({
  FacetComponent,
  isOpen,
  theme,
  title,
  item,
  config,
  filtersSelected,
  toggleFacet,
  facetsJSON //import json
}: IFacetProps) => (
  <div 
    display-if={(facetsJSON && facetsJSON[title.toLowerCase()]) || !facetsJSON}//add this line to remove filters that are not included in json
    className={theme.root} 
    tabIndex={0} 
    role='region' 
    aria-labelledby={title}
  >
    <Button className={theme.title} onClick={toggleFacet} aria-expanded={isOpen} tabIndex={-1}>
      <Text primary uppercase className={theme.text}>{ title } {filtersSelected > 0 ? `(${filtersSelected})` : ''}</Text>
      <Icon name={isOpen ? 'Minus' : 'Plus'} className={theme.icon} />
    </Button>
    <Component
      display-if={isOpen}
      facet={item}
      config={config}
      theme={{ root: theme.body }}
      isMobile={true} />
  </div>
)
export default FacetView;

```

```typescript
components/Facet/view.tsx
/**
 * @module components/Facet
 */
import React from 'react';
import Button from 'components/Button';
import Text from 'components/Text';
import Icon from 'components/Icon';
import Component from 'components/Facet/Component';
import { ThemedSFCProps, IFacet, MJSConfiguration } from 'types';
/** Props that Facet view accepts */
export interface IFacetProps extends ThemedSFCProps {
  /** Facet component to render */
  FacetComponent: React.Component<any>;
  /** Flag to show open / closed state of facet */
  isOpen?: boolean;
  /** Flag to show if facet is opened on mobile */
  isMobile?: boolean;
  /** Title of facet */
  title: string;
  /** Facet object */
  item: IFacet;
  /** MJS Configuration */
  config: MJSConfiguration;
  /** Filters selected in facet */
  filtersSelected: number;
  /** Function to toggle open / closed state of facet */
  toggleFacet: () => any
}
const FacetView = ({
  FacetComponent,
  isOpen,
  theme,
  title,
  item,
  config,
  filtersSelected,
  toggleFacet,
  facetsJSON //import json
}: IFacetProps) => (
  <div 
    display-if={(facetsJSON && facetsJSON[title.toLowerCase()]) || !facetsJSON}//add this line to remove filters that are not included in json
    className={theme.root} 
    tabIndex={0} 
    role='region' 
    aria-labelledby={title}
  >
    <Button className={theme.title} onClick={toggleFacet} aria-expanded={isOpen} tabIndex={-1}>
      <Text primary uppercase className={theme.text}>{ title } {filtersSelected > 0 ? `(${filtersSelected})` : ''}</Text>
      <Icon name={isOpen ? 'Minus' : 'Plus'} className={theme.icon} />
    </Button>
    <Component
      display-if={isOpen}
      facet={item}
      config={config}
      theme={{ root: theme.body }}
      isMobile={true} />
  </div>
)
export default FacetView;
```

```css
styles for MJS 7
.findify-facets-wrapper{
  display: flex;
  flex-direction: column;
```