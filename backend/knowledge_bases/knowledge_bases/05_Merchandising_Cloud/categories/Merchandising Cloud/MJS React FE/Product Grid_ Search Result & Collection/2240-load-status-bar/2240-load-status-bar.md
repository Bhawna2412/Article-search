---
title: "Load Status Bar"
articleID: 2240
category: "MJS React FE > Product Grid_ Search Result & Collection"
knowledgeBase: "Merchandising Cloud"
---

# Load Status Bar

You can add a load status bar to help customers understand their browsing progress through product results with lazy loading enabled. When shoppers see a visual indicator of how many products they've viewed relative to total results, they gain better context about their search exploration, which helps improve engagement and tends to reduce frustration from uncertain progress through large result sets.

Load status indicators enhance the browsing experience by providing transparency about product discovery progress. This helps customers make more informed decisions about whether to continue scrolling or refine their search, supporting better user experience and improved engagement with product results through clearer feedback about browsing status.

![592](https://files.readme.io/b0d887c-__2022-08-17__17.31.09.png)

## #1. Background

Providing your customer with small yet quite important bits of information regarding what he's browsing can very well be a deal-breaker. Any native way to let him know what's coming down the pike is great.

In this particular case we'll be showing you how to add a Load-status bar, going from 0 to 100% fill depending on how many products on this particular page have been loaded and seen by the customer.

## #2. Requirements

- The only requirement for this customisation is to have the Lazy Load enabled for your store.

## #3. Time Estimates

Set up in Platform: n/a

Integration: 30 minutes

Styling: 5-10 minutes

## #4. Functional Overview

The list of components to be adjusted is as follows:

> ComponentsLoadBarcomponents/search/LazyResults/index.tsx

## #5. Integration Steps

Firstly, you'll need the LoadBar function, which is receiving the total amount of products, products per page and percentage of the status bar fill.

Then, we place it within the LazyResults component wherever we want and style it.

**NB**: you can switch between different components in the below view.

LoadBarcomponents/search/LazyResults/index.tsxCSS

```plaintext
import { useQuery } from '@findify /react-connect';export const LoadBar = ({productsShown}) => {  const { meta } = useQuery();  const total = meta?.get('total');  const productPerPage = productsShown > total ? total : productsShown;  const percentage = parseInt((productsShown / total) * 100);    return (    <div className="findify-load-bar">      {productPerPage} out of {total}      <div className="findify-bar-wrapper">        <div className="findify-bar-status"></div>        <div className="findify-bar-fill" style={{width: `${percentage}%`}}></div>      </div>    </div>  )}
```