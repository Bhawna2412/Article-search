---
title: "Simple SPA Integration"
articleID: 53
category: "Merchandising Cloud Integrations > Custom MerchantJS"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-11-19
---

# Simple SPA Integration

> This guide describes how to integrate Maropost Merchandising Cloud (formerly Findify) with a single-page application (SPA) using the [Merchant JS API](https://galaxy.maropost.com/kb/articles/2147-merchant-js-api-overview) . This example uses [React.js](https://reactjs.org/), but the main principle of shadow DOM should be working with [Vue.js](https://vuejs.org/), [Angular](https://angular.io/), [Svelte](https://svelte.dev/) and any other popular JavaScript framework.
>  You can have a look at the component example we've built on [codesandbox](https://codesandbox.io/s/findify-component-gk2fb)

## Import library[https://developers.findify.io/docs/simple-spa-integration#import-library](https://developers.findify.io/docs/simple-spa-integration#import-library)

Add a script with store-specific code as mentioned in the instruction of our "[Getting started guide](https://developers.findify.io/docs/integrations-custom-steps#section-add-the-findify-javascript)" to the `<head>` section of your application.

```xml
<script src="//findify-assets-2bveeb6u8ag.netdna-ssl.com/search/prod/your-shop-domain.com.min.js" async defer>
</script>
```

## Wait for Library to be Loaded[https://developers.findify.io/docs/simple-spa-integration#wait-for-the-library-to-be-loaded](https://developers.findify.io/docs/simple-spa-integration#wait-for-the-library-to-be-loaded)

This function will return a promise which will be resolved right after Findify's JavaScript is completely loaded.

```javascript
export const waitForFindify = () => new Promise(resolve => {
  (window.findifyCallbacks = window.findifyCallbacks || []).push((findify) => resolve(findify));
})
```

## Render[https://developers.findify.io/docs/simple-spa-integration#render](https://developers.findify.io/docs/simple-spa-integration#render)

Once the node is ready you need to make sure Merchandising Cloud is ready and renders a widget into the node.

```javascript
const type = 'search'; // Type of widget
const widgetKey = 'UNIQ_ID';
const disableAutoRequest = true; // Needs to be "true" to avoid an initial request

const findify = await waitForFindify();

findify.widgets.attach(container.current, type, { ...options, widgetKey, disableAutoRequest });

const widget = findify.widgets.get(widgetKey); // Widget instance

widget.agent
  .defaults({ ...request }) // Default request values
  .once('change:items', () => { // or 'change:suggestions' if it's for the autocomplete
    // callback when items have been received
  })

// For the autocomplete data will be fetched automatically, but for Search Widget you need to make an initial request manually.
if (['search', 'smart-collection'].includes(type)) {
  const query = findify.utils.getQuery(); // Parse URL query
  widget.agent.applyState(query) // Request data
}
```

Check out our [Merchant JS API](https://galaxy.maropost.com/kb/articles/2147-merchant-js-api-overview) for further information on how to use Merchandising Cloud!

## Unmount[https://developers.findify.io/docs/simple-spa-integration#unmount](https://developers.findify.io/docs/simple-spa-integration#unmount)

To void memory leaks detach the Merchandising Cloud instance after the node has unmounted.

```javascript
findify.widgets.detach(widgetKey)
```

### History Navigation[https://developers.findify.io/docs/simple-spa-integration#history-navigation](https://developers.findify.io/docs/simple-spa-integration#history-navigation)

There is no generic solution to use custom History instances in Merchandising Cloud Widgets, so you need to rise your one in the global scope and make changes to Merchandising Cloud components via Chrome using our [DevTools](https://galaxy.maropost.com/kb/articles/2228-customization-design-scope-mjs-react).