---
title: "Integrating Merchandising Cloud with Vue frontend on Shopify"
articleID: 2305
category: "FAQ > Shopify FAQ"
knowledgeBase: "Merchandising Cloud"
lastUpdated: 2025-09-18
---

# Integrating Merchandising Cloud with Vue frontend on Shopify

Vue.js is becoming more and more popular among Shopify merchants to power the rendering of the frontend of the store.

Sometimes the Vue.js setup is done in a way that it overrides existing Shopify HTML elements, which also affects Merchandising Cloud integration in cases when Vue.js is loaded after Merchandising Cloud. This issue can be hard to notice as by default there's no guaranteed order in which Merchandising Cloud or Vue.js scripts are loaded.

## Solution

After Merchandising Cloud creates and attaches it's widgets to the DOM elements, it keeps the references to the widgets in the config, so even if the DOM gets overridden it's possible to re-attach the widget to DOM again using the DOM API.

```xml
// Vue component
<template>
    <div ref="container"></div>
</template>
<script>
export default{
    // When component is mounted
    mounted() {
        // If Findify is not loaded yet - we skip DOM manipulations
        // Findify will be attached to the Vue nodes automatically
        if (!window.findify || !window.findify.widgets) return;
    // Otherwise, Findify got overridden by Vue, so it needs to be re-attached
        // Pick widget that you want to update
    // search: const widgetNode = findify.widgets.findByType('smart-collection')[0].node;
        const widgetNode = findify.widgets.findByType('smart-collection')[0].node;
        // Check if memoized node and vue node are not equal
        if (widgetNode === this.$refs.container) 
      return;
        // Replace vue node with memorized one
        this.$refs.container.replaceWith(widgetNode)
    }
}
</script>

```