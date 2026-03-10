---
title: "Hide filters in selected collections"
articleID: 2254
category: "MJS React FE > Filters (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Hide filters in selected collections

You can selectively hide filters in specific collections to create cleaner, more focused browsing experiences where extensive filtering isn't needed. When collections with limited products or highly curated selections can disable filters, you help reduce interface clutter and improve focus on products, which tends to enhance conversion rates by removing unnecessary complexity from the customer journey.

Collection-specific filter control enables you to tailor refinement options to match collection characteristics. This helps improve user experience by showing filters only where they add value, supporting better conversion through more contextually appropriate interfaces that adapt to different product selection scenarios across your catalog.

Integration Steps

In certain circumstances, merchants might want to hide specific filters for specific collections.

This could be, for example, if you have a collection with 200 products but only 10 have a value for `size` filter - you want to remove the `size` filter for this collection.

Or, it could be that you have a large amount of filters. This is not a problem for niche collections, but if you have a particularly large collection then you might have 50 filters which is too much for a shopper to navigate through easily. In this case you might want to slim down the filtering options, but only for the larger collection.

Whatever the reason, Findify is able to accommodate this potential merchant requirement.

> ComponentswithHiddenFacetscomponents/Facet/index.tsx ( Desktop )components/search/MobileFacets/Titles.tsx ( Mobile )

The steps are the following:

- Create `withHiddenFacets` component.
- Create a list of facets to hide in certain collections.
- We determine the hidden facets for specific collection in the `hiddenFacets` variable.
- Check if the current facet exists in the `hiddenFacets` array.

withHiddenFacets

```plaintext
const withHiddenFacets = (facet) => {    const list = [    {      collectionName: 'test-collection-2',      facets: ['brand', 'size']    }  ];    const hiddenFacets = list.find((el) => findify.utils.collectionPath().split(el.collectionName).length > 1)?.facets;  return hiddenFacets?.find(name => name === facet.get('name'));}export default withHiddenFacets;
```

To filter our facets on desktop, we need to import and call our `withHiddenFacets`.

JavaScript

```plaintext
{/* ... some imports ... */}import withHiddenFacets from 'withHiddenFacets';{/* ... some code ... */}return ({/* ... some code ... */}    {/* add filter function with our withHiddenFacets functionality */}  <MapArray  array={facets.filter(withHiddenFacets)}factory={Facet}config={config}isHorizontal={isHorizontal}onToggle={toggleFacet}openFacets={openFacets}keyAccessor={(i) => i.get('name')}    />  {/* ... some code ... */})
```

To filter our facets on mobile, we need to do the same as on desktop.

JavaScript

```plaintext
{/* ... some imports ... */}import withHiddenFacets from 'withHiddenFacets';{/* ... some code ... */}return (    {/* ... some code ... */}    {/* add filter function with our withHiddenFacets functionality */}<Branch    config={config}    theme={theme}    selectFacet={selectFacet}    active={facets.find((f) => f.get('name') === activeFacetName)}    facets={facets.filter(withHiddenFacets)}    condition={activeFacet}    right={FacetTitles}    left={FacetContent}  />  {/* ... some code ... */})
```

MJS Version

This module has been optimized for **MJS version 7.1.25**