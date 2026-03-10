---
title: "Sort Facet items"
articleID: 2252
category: "MJS React FE > Filters (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Sort Facet items

Controlling how filter options are sorted helps you optimize filter usability based on customer behavior and business priorities. When filter values are ordered strategically - by popularity, alphabetically, or by custom logic - customers can find relevant refinement options more quickly, which helps improve search efficiency and tends to enhance conversion rates through better-organized filter interfaces.

Strategic filter sorting enables you to guide customers toward the most relevant refinement options. This helps improve product discovery by presenting high-value filter choices prominently, supporting better conversion optimization through more intuitive and business-aligned filter organization that matches both customer needs and merchandising goals.

Integration Steps

If you want to sort facet values alphabetically, in descending or ascending order, or create custom sorting, you would need to update the facet components.

> Componentscomponents/Facet/index.tsxcomponents/CategoryFacet/index.tsxcomponents/CheckboxFacet/index.tsxcomponents/RatingFacet/index.tsxcomponents/ColorFacet/index.tsx

First of all, you need to create a list of facet titles that you want to sort. Go to **components/Facet/index.tsx**, create an array with facet titles, then pass down prop:

components/Facet/index.tsx

```plaintext
{/* ... some code ...  */}  {/* Create a list of Facets you want to be sorted and sorting function */}    const arrayOfSortedFilters = ['brand', 'size'];  const sortingLogic = (a, b) => a.get('value').localeCompare(b.get('value'));    return (    {/* ... some code ...  */}          <div className={theme.body} hidden={!isOpen}>          {/* Pass down prop */}        <Component  facet={item}  config={config}   isMobile={isMobile}   arrayOfSortedFilters={arrayOfSortedFilters}  sortingLogic={sortingLogic} />      </div>    </div>  );};
```

Then you need to select the type of the Facet that you want to sort.

There are four of them:

- components/CategoryFacet/index.tsx
- components/CheckboxFacet/index.tsx
- components/RatingFacet/index.tsx
- components/ColorFacet/index.tsx

We will be sorting facet values alphabetically. In our example, we have a list with 'size' and 'brand' facets and they are of type: CheckboxFacet.

components/CheckboxFacet/index.tsx

```plaintext
{/* ... some code ... */}{/* Get arrayOfSortedFilters and sortingLogic props */}export default ({  theme = styles,  config,  isMobile,  isExpanded: _isExpanded,  facet,  hidden,  arrayOfSortedFilters,  sortingLogic}: ICheckboxFacetProps) => {    {/* ... some code ... */}  const items = useMemo(() => {      {/* Check if facet exists in list */}      const sortedFilter = arrayOfSortedFilters.filter((el) => el === facet.get('name').toLowerCase()).length > 0;    if (isExpanded && search) {      const regexp = new RegExp(escapeRegExp(search), 'gi');      {/* If facet needs to be sorted, we just add sort method to items */}      if(sortedFilter) {        return facet.get('values').filter((i) => regexp.test(i.get('value'))).sort(sortingLogic);      }      return facet.get('values').filter((i) => regexp.test(i.get('value')));    }        {/* If facet needs to be sorted, we just add sort method to items */}    if(sortedFilter) {      return facet.get('values').sort(sortingLogic);    }    return facet.get('values');  }, [search, isExpanded, facet]);  {/* ... some code ... */}
```

Here are the examples on how to use sort method in different Facet components.

components/CategoryFacet/index.tsxcomponents/ColorFacet/index.tsxcomponents/RatingFacet/index.tsx

```plaintext
{/* ... some code ... */}{/* Get arrayOfSortedFilters and sortingLogic props */}export default ({  theme = styles,  config,  facet,  hidden,  isMobile,  arrayOfSortedFilters,  sortingLogic}: ICategoryFacetProps) => {    {/* ... some code ... */}  const sortedFilter = arrayOfSortedFilters.filter((el) => el === facet.get('name').toLowerCase()).length > 0;  {/* If facet needs to be sorted, we just add sort method to items */}  return (    {/* ... some code ... */}          <MapArray        config={config}        array={sortedFilter               ? items.sort(sortingLogic)               : items}        factory={Item}        limit={!isExpanded && config.get('maxItemsCount', 6)}        isMobile={isMobile}      />    {/* ... some code ... */}  );};
```

MJS Version

This module has been optimized for **MJS version 7.1.25**