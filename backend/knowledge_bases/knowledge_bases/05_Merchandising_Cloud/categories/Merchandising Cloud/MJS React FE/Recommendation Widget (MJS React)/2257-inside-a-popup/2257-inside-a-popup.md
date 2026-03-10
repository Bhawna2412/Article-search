---
title: "Inside a Popup"
articleID: 2257
category: "MJS React FE > Recommendation Widget (MJS React)"
knowledgeBase: "Merchandising Cloud"
---

# Inside a Popup

You can display recommendations inside popups to create targeted product suggestions at strategic moments in the customer journey. When recommendations appear in popup contexts, you can highlight complementary products or alternatives at decision points, which helps improve cross-sell effectiveness and tends to enhance average order value through well-timed product suggestions.

Popup-based recommendations enable strategic merchandising at critical touchpoints. This helps improve conversion and revenue per visit by presenting relevant product suggestions when customers are most receptive, supporting better merchandising outcomes through contextually appropriate product recommendations.

Sometimes integrating our recommendation widgets inside of a popup can cause an issue, for example when the popup is animated and by default set to `display: none` and on a click set to `display: block`.

We could solve this like shown in the following example below:

CSSlayouts/Recommendation/Slider/index.ts

```plaintext
@keyframes popup -tracking {  from{    opacity: 1;  }  to{    opacity: 1;  }}// popup status changes from not-active to activediv[pupup-status="active"]{  animation: popup-tracking .1s linear;}
```