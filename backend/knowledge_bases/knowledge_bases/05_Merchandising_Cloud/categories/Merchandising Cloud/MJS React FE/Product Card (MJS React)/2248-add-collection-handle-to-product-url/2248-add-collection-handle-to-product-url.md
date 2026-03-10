---
title: "Add collection handle to product URL"
articleID: 2248
category: "MJS React FE > Product Card (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Add collection handle to product URL

Adding collection handles to product URLs helps improve navigation context and SEO performance by maintaining collection relationships throughout the customer journey. When product URLs include collection information, you help customers understand product context better and enable more intuitive back-navigation, which tends to enhance user experience and supports better engagement through clearer site structure.

Collection-aware URLs enable better tracking and analytics while improving the technical foundation of your ecommerce site. This helps you understand customer paths through different collections and products, supporting better merchandising decisions and improved SEO through more descriptive URL structures that search engines can better understand and index.

## # 1. Background

On websites that have a lot of pages, breadcrumb navigation can greatly enhance the way users find their way around. In terms of usability, breadcrumbs reduce the number of actions a website visitor needs to take in order to get to a higher-level page, and they improve the findability of website sections and pages.

In this particular case we'll show how to set it up from the URL's perspective, which can then be further customised into actual breadcrumbs on the page.

## # 2. Requirements

- The only thing here is that this is only available for Shopify users.

## # 3. Time Estimates

Set up in Platform: n/a

Integration: 30 minutes

Styling: n/a

## # 4. Functional Overview

The list of components to be adjusted is as follows:

> Componentscomponents/Cards/Product/index.tsxlayouts/Search/index.tsx

## # 5. Integration Steps

If you want to add a collection handle to your product URL, e.g. if you have a collection: **/collection/shorts** and a product URL: **/product/nice-shorts** and you want to have collection breadcrumbs in the product page like this: **/collection/shorts/products/nice-shorts**.

To do that, you would need to update few lines of code.

components/Cards/Product/index.tsxlayouts/Search/index.tsx

```plaintext
{/* ... some code ... */}export default ({  item,  theme = styles,  className,  config,  Container = 'div',  highlighted,  isAutocomplete,  isCollection}: IProductCardProps) => {  const collectionHandleUrl = `/${findify.utils.collectionPath() + item.get('product_url')}`;    {/* ... some code ... */}     const handleCollectionUrl = async (e) => {    const openInNewWindow = e && (e.ctrlKey || e.metaKey);    {/* Get collection path */}    {/* Send events */}    await item.analytics.sendEvent(      'click-item',      { rid: item.meta.get('rid'), item_id: item.get('id'), variant_item_id:  item.get('selected_variant_id')},      !openInNewWindow    );    {/* Change location */}    return location.href = collectionHandleUrl;  };    return (    <a      ref={container}      data-element="card"      className={cx(        theme.root,        theme[config.get('template')],        highlighted && theme.highlighted,        isAutocomplete && theme.autocomplete,        className      )}      href={collectionHandleUrl}{/* Add collection handle */}      onClick={e => isCollection ?  handleCollectionUrl(e) : item.onClick(e, isSearch)}    >{/* ... some code ... */} </a>  );};
```