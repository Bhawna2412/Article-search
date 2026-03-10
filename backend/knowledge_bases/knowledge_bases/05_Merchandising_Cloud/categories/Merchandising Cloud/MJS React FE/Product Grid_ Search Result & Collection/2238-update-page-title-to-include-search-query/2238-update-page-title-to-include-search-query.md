---
title: "Update Page Title To Include Search Query"
articleID: 2238
category: "MJS React FE > Product Grid_ Search Result & Collection"
knowledgeBase: "Merchandising Cloud"
---

# Update Page Title To Include Search Query

You can update page titles to include search queries, which helps improve SEO performance and provides better context for customers managing multiple browser tabs. When page titles dynamically reflect current search terms, search engines can better understand your content and customers can more easily navigate between tabs, which helps improve both organic discovery and user experience.

Dynamic page titles enhance the technical foundation of your search implementation while supporting better customer navigation. This helps ensure that search result pages are properly indexed by search engines and provides clearer context when customers bookmark or share search results, supporting better organic traffic and improved user experience across the search journey.

Integration Steps

![734](https://files.readme.io/fe3906f-0954c5b-Bildschirmfoto_2020-02-13_um_17.14.37.png)

> Components:components/search/Query/index.ts

In the following example, you can see how you can interact with page elements outside of Findify's components and modify your search results page title to include a search query.

You should add updateQuery function to components/search/Query.

JavaScript

```plaintext
const defaultTitle = document.title;const updateQuery = (query) => {  // display either the default title including queries on your search page or the default title only    const titleText = query && query.length > 0    ? `${defaultTitle} | ${query}`        : defaultTitle;  document.title = titleText;}
```

This function should be called after every query update. Therefore we have to put it inside useEffect.

JavaScript

```plaintext
/** * @module components /search/Query */ //default codeexport default memo(  ({ theme = styles }: { theme?: Record<string, string> }) => {    const { meta } = useQuery();    const translate = useTranslations();    const query = escape(meta.get('q') as string);        useEffect(() => updateQuery(query), [query])        return (      <Text        primary        uppercase        className={theme.root}        html={getContent(meta, translate, query)}      />    );  });
```

Finally, components/search/Query will look like.

JavaScript

```plaintext
/** * @module components /search/Query */import { useEffect } from "react";import { useQuery } from '@findify /react-connect';import styles from 'components/search/Query/styles.css';import escape from 'lodash/escape';import Text from 'components/Text';import useTranslations from 'helpers/useTranslations';import { memo } from 'react';const getContent = (meta, translate, query) => {  const hasFilters = !!meta.get('filters');  const total = meta.get('total');  if (!query && !hasFilters) {    return translate('search.noQuery');  }  if (hasFilters && !query) {    return translate('search.showingEmpty', total);  }  if (meta.get('corrected_q')) {    const text = translate('search.showing', total);    return `${text} "${escape(meta.get('corrected_q') as string)}". ${translate(      'search.zeroResultsFor'    )} "${query}".`;  }  if (meta.get('query_type') === 'or') {    const text = translate('search.showing', '0');    return `${text} "${query}". ${translate('search.partialMatch')}`;  }  const text = translate('search.showing', total);  return `${text} <b> "${query}"</b>.`;};const defaultTitle = document.title;const updateQuery = (query) => {  // display either the default title including queries on your search page or the default title only    const titleText = query && query.length > 0    ? `${defaultTitle} | ${query}`        : defaultTitle;  document.title = titleText;}export default memo(  ({ theme = styles }: { theme?: Record<string, string> }) => {    const { meta } = useQuery();    const translate = useTranslations();    const query = escape(meta.get('q') as string);        useEffect(() => {      updateQuery(query)    }, [query])        return (      <Text        primary        uppercase        className={theme.root}        html={getContent(meta, translate, query)}      />    );  });
```

MJS Version

This module has been optimized for **MJS version 7.1.25**