---
title: "Hotjar Analytics"
articleID: 2164
category: "Third Party Integrations > Analytics"
knowledgeBase: "Merchandising Cloud"
---

# Hotjar Analytics

You can integrate Hotjar with your Merchandising Cloud pages to record user activity and generate heatmaps for search results, recommendations, and collection pages. This behavioral tracking helps you understand how customers interact with your search interface, identifying friction points and optimization opportunities that can enhance the shopping experience.

Setting up Hotjar tracking for Merchandising Cloud components provides visual insights into customer behavior patterns, including where users click, how far they scroll, and which products capture their attention. These insights enable data-driven decisions about layout optimization, product positioning, and interface improvements that can help improve engagement and conversion rates.

This example shows how you can record your user activity on Maropost Merchandising Cloud (formerly Findify) pages and components (search, recommendations, smart collections).

1. 
2. 

JavaScript

```javascript
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

window.setTimeout(function() {
    window.hj('trigger', 'findify_mjs');
});
```

Please add this code before our script (remember to put the proper hotjar script path)

JavaScript

```javascript
/*global findifyApiRegistry*/
window.findifyApiRegistry = [function(api) {
    api.addScript('https://mystore.com/hotjar.js');
}];
```