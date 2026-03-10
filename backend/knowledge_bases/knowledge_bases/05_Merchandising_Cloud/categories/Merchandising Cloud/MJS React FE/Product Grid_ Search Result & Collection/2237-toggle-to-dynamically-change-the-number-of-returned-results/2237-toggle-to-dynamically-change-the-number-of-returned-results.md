---
title: "Toggle to dynamically change the number of returned results"
articleID: 2237
category: "MJS React FE > Product Grid_ Search Result & Collection"
knowledgeBase: "Merchandising Cloud"
---

# Toggle to dynamically change the number of returned results

Enabling customers to control the number of products displayed per page helps you accommodate different browsing preferences and device capabilities. When shoppers can choose how many results to view at once, they can optimize their experience based on connection speed and browsing style, which helps improve satisfaction and tends to enhance conversion rates by respecting individual shopping preferences.

Customizable result display options empower customers to tailor their product discovery experience. This flexibility helps accommodate both quick browsers who prefer more products per page and detail-oriented shoppers who prefer fewer products with more focus, supporting better overall shopping experiences and improved engagement across different customer segments.

![1200](https://files.readme.io/063d6e3-Screenshot_2.png)

## #2. Time Estimates

**Set up in Platform:** n/a
**Integration: **0.5 hour
**Styling:** 0.5 hour (optional)

## #3. Functional Overview

> Components:any other component connected by @findify /react-connect

## #4. Integration Steps

Here we will be showing how to create a component which will change the number of the returned results. This component can be placed anywhere on the page.

This can be done with the `update function`, which is available in every component that is connected via [@findify](https://galaxy.maropost.com/profile/findify) /react-connect. You can find more about **connectors** in [our documentation](https://developers.findify.io/page/findify-react-connect-reference) or the [GitHub repository](https://github.com/findify/findify-js/tree/master/packages/react-connect).

ViewResultsSelect.tsx

```plaintext
import React, { useState, useEffect } from "react"import { useItems } from '@findify /react-connect';// component to change search results quantityconst ViewResultsSelect = () => {  const { update } = useItems();     // state to change the number of search results    const [ dataLimits, changeDataLimit ] = useState(12);     // function to change the number of search results    const onChangeDataLimits = (e) => {                 const regexp=/\D/g;                                       changeDataLimit(e.target.value.replace(regexp, ""));  }    // data update Limits according to state    useEffect(() => {    update('limit', dataLimits)     }, [dataLimits]);    const options = [12, 24, 36, 48].map((item, idx) => {    return <option key={idx}> View { item } </option>  })    return(    <div className="findify-selector-wrapper">      <div className="findify-custom-wrapper">        <select id="findify-custom-selector" onChange={onChangeDataLimits}>   {options}        </select>      </div>    </div>  )}export default ViewResultsSelect;
```

After it's done, all you need is to place this component decide where you want to have it on the page and place it accordingly.

## #5. MJS Version

This module has been optimized for MJS version** 7.1.37**