---
title: "Data Journey: Filters"
articleID: 860
category: "Marketing Automations > Data Journeys"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Data Journey: Filters

Filter widgets enable you to create targeted audience segments and optimize campaign effectiveness by automatically directing contacts through different journey paths based on specific criteria. This helps improve marketing effectiveness by ensuring subscribers receive the most relevant content and experiences based on their engagement patterns, which typically leads to better conversion rates compared to sending the same journey to all contacts.

When properly configured, filter widgets streamline your workflow by automatically distributing contacts into appropriate groups, reducing manual effort while scaling personalized communication across your entire subscriber base.

A **Filter** widget element is a pass-through element that takes input data, makes a specific decision about the data and the possible transformation of it, and then passes it on to the following widget. Usually, a filter has no input/output operation on its own, and it depends upon input from another source.

In Data Journeys, you can use triggers or actions as the input source for the filters. The A/B Split and % Split filters are used to create multiple groups to distribute contacts.

### % Split

The % Split filter enables you to split into a group that is a minimum of 10% and a maximum of 50%. The filter has pre-defined percentage selections - 10%, 20%, 25%, and 50%. You cannot set the percentage manually in the element.

The following screenshot shows how the % Split widget appears on the canvas:

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX0Y.05T5g00000BkX0YEAV.png)
The following screenshot shows the Percentage Split dialog box that appears when you double-click the widget:

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEM.05T5g00000BkXEMEA3.png)

### A/B Split

The A/B Split filter enables you to create groups and assign percentages manually. Unlike % Split, you can add groups and assign a minimum of 1% in this widget.

The following screenshot shows how the A/B Split widget appears on the canvas:

![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEN.05T5g00000BkXENEA3.png)
The following screenshot shows the A/B Split dialog box that appears when you double-click the widget:

![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEO.05T5g00000BkXEOEA3.png)
On the widget dialog box, click the Add Group button. Enter names for the groups and assign the appropriate value percentage.

## Related Articles

**Journey Building Tools:**

- [Data Journey Triggers](https://galaxy.maropost.com/kb/articles/862-data-journey-triggers) - Start points for filtered customer journeys
- [Data Journey Delays](https://galaxy.maropost.com/kb/articles/859-data-journey-delays) - Control timing for targeted segments
- [Data Journey End](https://galaxy.maropost.com/kb/articles/858-data-journey-end) - Conclude filtered workflow paths

**Advanced Segmentation:**

- [Creating Segments With Next](https://galaxy.maropost.com/kb/articles/818-creating-segments-with-next) - Create detailed customer segments for filtering
- [Using Journeys For Remarketing Campaigns](https://galaxy.maropost.com/kb/articles/851-using-journeys-for-remarketing-campaigns) - Apply filters in remarketing workflows