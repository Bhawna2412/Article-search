---
title: "Analytics for CTA and Wishlist"
articleID: 2206
category: "Shopify Liquid FE > General Settings (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Analytics for CTA and Wishlist

You can track analytics for custom call-to-action buttons and wishlist interactions to measure engagement with these features and understand their impact on customer behavior. This data helps you assess feature performance and identify opportunities to optimize these conversion tools.

Implementing analytics tracking for CTAs and wishlist functionality provides insights into how customers interact with these features, helping you understand which actions drive engagement and conversion. By monitoring clicks, additions, and subsequent behaviors, you can make data-driven decisions about feature placement, messaging, and optimization to improve their effectiveness.

This documentation provides a step-by-step guide to adding analytics for tracking clicks on Call-To-Actions (CTA) and Wishlist items within our app for Shopify. This ensures you can monitor user interactions and gather valuable data for your store.

## Step 1: Verify Existing Click Events

We may already be tracking clicks on Product Cards. To verify this:

1. 
2. 
3. 

To test the events:

1. 
2. 
3. 
4. 
5. 

If you find the event, no further action is needed. If not, proceed to add custom events.

## Step 2: Adding Custom Analytics Events

If click events are not being tracked for CTAs and Wishlist buttons, follow these steps to add the necessary analytics code.

### In `findify-product-card.js`

1. 
2. 

JSX

```yaml
findify.core.analytics.sendEvent('click-item',  {      rid: findify.grid.state.meta.rid,      item_id: id,      variant_item_id: selectedVariantId  },  false)
```

## Step 3: Testing the Implementation

After adding the custom events:

1. 
2. 
3. 
4. 
5. 

You should see events being sent to our analytics service.

For further assistance or inquiries, feel free to contact us on [support@maropost.com](mailto:support@maropost.com)