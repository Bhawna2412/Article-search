---
title: "Integrating Recommendations in Norce"
articleID: 62
category: "Merchandising Cloud Integrations > Norce Flight and Merchandising Cloud"
knowledgeBase: "Merchandising Cloud"
---

# Integrating Recommendations in Norce

Integrating recommendations in Norce enables personalized product suggestions within your Norce-powered ecommerce platform. When recommendations work natively with Norce, you help improve cross-sell opportunities and average order value, which tends to enhance revenue performance through strategically placed product suggestions that leverage Norce's platform capabilities.

Norce recommendation integration enables sophisticated merchandising within your platform architecture. This helps you provide personalized shopping experiences that drive better conversion and revenue outcomes, supporting improved business performance through AI-powered product suggestions optimized for Norce's ecommerce framework.

## To integrate Recommendations follow these steps:[https://developers.findify.io/docs/norse-integrating-recommendations#to-integrate-findify-recommendations-follow-these-steps](https://developers.findify.io/docs/norse-integrating-recommendations#to-integrate-findify-recommendations-follow-these-steps)

1. General Information
2. Integrating Recommendations on Product or Cart Pages

### 1. General Information[https://developers.findify.io/docs/norse-integrating-recommendations#1-general-information](https://developers.findify.io/docs/norse-integrating-recommendations#1-general-information)

In order to integrate Recommendation widgets, please follow these [guidelines](https://github.com/findify/react-bundle#recommendation).

Before you integrate a specific recommendation widget, please make sure to setup the corresponding widget in our `<span class="cm-s-neo" style="box-sizing: border-box;">Merchant Dashboard</span>` -> `<span class="cm-s-neo" style="box-sizing: border-box;">Recommendations section</span>`: [https://developers.findify.io/docs/recommendations#how-do-i-use-findify-recommendations](https://developers.findify.io/docs/recommendations#how-do-i-use-findify-recommendations).

### 2. Integrating Recommendations on Product or Cart Pages[https://developers.findify.io/docs/norse-integrating-recommendations#2-integrating-recommendations-on-product-or-cart-pages](https://developers.findify.io/docs/norse-integrating-recommendations#2-integrating-recommendations-on-product-or-cart-pages)

For Product or Cart Page type of Recommendations, it is required to provide the product ids of the currently viewed/added to the cart items.

Those ids will then need to be passed to our `<span class="cm-s-neo" style="box-sizing: border-box;">useFindify</span>` hook like this:

```plaintext
const [container, isReady, hasError] = useFindify({    type: &#39;recommendation&#39;,    options: {       rules: [{        &#39;action&#39;: &#39;exclude&#39;,        &#39;type&#39;: &#39;text&#39;,        &#39;name&#39;: &#39;id&#39;,        &#39;values&#39;: [{          value: ["item_id_1", "item_id_2", ...] //provide the list of ids to the value array        }]}],      item_ids: ["item_id_1", "item_id_2", ...] //provide the list of ids to the value array    },    config: {      slot: &#39;RECOMMENDATION_SLOT&#39;,    }  });
```