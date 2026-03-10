---
title: "Include Sorting within Mobile Filters"
articleID: 2256
category: "MJS React FE > Sorting Customisations (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Include Sorting within Mobile Filters

Integrating sorting options within mobile filter panels helps optimize screen space and improve mobile navigation efficiency. When mobile users can access both filtering and sorting from a single interface, you reduce navigation complexity and help improve mobile product discovery, which tends to enhance mobile conversion rates through more streamlined search refinement workflows.

Combined filter and sort interfaces maximize mobile usability by consolidating search controls. This helps improve mobile engagement by reducing the number of interactions needed to refine results, supporting better mobile conversion through more efficient search interfaces that respect mobile screen constraints and user interaction patterns.

![640](https://files.readme.io/14d6e99-96a1f50-Bildschirmfoto_2020-03-02_um_19.38.54.png)
Integration Steps

> Componentscomponents/search/MobileActions/index.tsxcomponents/search/MobileFacets/index.tsx

This example is going to remove the default sorting options button and includes the desktop sorting dropdown inside mobile filters as you can see in the example picture on top of this page.

components/search/MobileActions/index.tsxcomponents/search/MobileFacets/index.tsxCSS

```plaintext
{/*...  some code ... */}return (      <div className={theme.root}>        <Query display-if={!isCollection} theme={{ root: theme.query }} />        <div className={theme.bottomRow}>        {/* Hide default Mobile Sorting  */}                   {/*           <Button onClick={showSort} className={theme.button}>            <Text primary uppercase>              <Icon name="Sorting" title="Sorting" className={theme.icon} />              {currentSort.get('label')}            </Text>          </Button>          <div className={theme.divider} />         */}          <Button onClick={showFacets} className={theme.button}>            <Text primary uppercase>              <Icon name="Filters" title="Filters" />              {translate('actions.filter')}              <span className={theme.facetCount}>({total})</span>            </Text>          </Button>        </div>      </div>    );  });{/*...  some code ... */}
```

MJS Version

This module has been optimized for **MJS version 7.1.15**