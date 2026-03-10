---
title: "Journey: Filters"
articleID: 870
category: "Marketing Automations > Journeys"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Journey: Filters

You can use filter widgets to create conditional logic and audience segmentation within automated workflows. This enables more relevant messaging based on subscriber characteristics, which typically leads to better engagement rates and helps reduce unsubscribe rates by delivering personalized content paths.

Filter functionality helps optimize your marketing effectiveness by automatically routing subscribers through appropriate journey paths based on their profile data or behavior. When properly configured, this streamlines your workflow while ensuring each contact receives the most relevant communication for their specific situation.

A **Filter** widget is a pass-through element that takes input data, makes a specific decision about the data and the possible transformation of it, and then passes it on to the following widget.

Usually, a filter has no input/output operation on its own, and it depends upon input from another source. In Journeys, you can use triggers or actions as the input source for the filters.

The Yes/No and Case filters work with segments. The A/B Split and % Split filters are used to create multiple groups to distribute contacts as we do in the case of A/B campaigns.

### Yes/No

The Yes/No filter is based on segments and requires you to select a segment. If contact comes into this filter and satisfies the segment condition, then it goes to the 'Yes' route; if it doesn't, then it goes to the 'No' route. Multiple selections are not available in this filter.

> **Note:** The location rule segment is not supported for the Yes/No filter.

The following screenshot shows how the Yes/No widget appears on the canvas:

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyI.05T5g00000BkWyIEAV.png)
The following screenshot shows the Yes/No dialog box that appears when you double-click the widget:

![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyJ.05T5g00000BkWyJEAV.png)

#### Example of a Yes/No Filter

You have a master list 'XYZ'. You only want to send a workflow email to those contacts on the list who have their domain at gmail.com. So, you can create a segment with the following condition:

**Contact information > domain name > contains > gmail.com**.

And, set up your Journey as shown below:

![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyK.05T5g00000BkWyKEAV.png)
Here, the New Subscription trigger is attached to the Yes/No filter. The Yes part is attached to the Send Email action, which is connected to End. The No part is attached directly to the End element.

Once the Journey is enabled and a new contact is added to the XYZ list, it will reach the Yes/No filter. The filter will check if that contact has a [**@gmail**](http://galaxy.maropost.com/profile/gmail) domain. If yes, then it goes to the Yes route, and the email is sent. If no, then it goes to No route and then to the End element.

### Case

The Case filter is identical to the Yes/No filter; the only difference is that you can select multiple segments in this widget. With more segments selected, more output connections can be used or attached to a different set of elements in the Journey.

> **Note:** The location rule segment is not supported for the Case filter.

The following screenshot shows how the Case widget appears on the canvas:

![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyE.05T5g00000BkWyEEAV.png)
The following screenshot shows the Case dialog box that appears when you double-click the widget:

![5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyF.05T5g00000BkWyFEAV.png)
If you select four segments in the Case filter, then you will see five connections. Four of the connections belong to the selected segments, and the fifth one is for the  'Otherwise' route. If a contact does not go into any segment, they will travel through the 'Otherwise' route of the filter to the next element attached.

Your Case filter setup will look as shown below:

![6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyG.05T5g00000BkWyGEAV.png)

### % Split

The % Split filter enables you to split into a group of a minimum of 10% and a maximum of 50%. When using this widget, you can divide contacts into groups and send them to a different flow, such as a Journey campaign, change subscription, and so on. The filter has pre-defined percentage selections - 10%, 20%, 25%, and 50%. You cannot set the percentage manually in the element.

The following screenshot shows how the % Split widget appears on the canvas:

![7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyH.05T5g00000BkWyHEAV.png)
The following screenshot shows the Percentage Split dialog box that appears when you double-click the widget:

![8.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyL.05T5g00000BkWyLEAV.png)

### A/B Split

The A/B Split filter enables you to create groups and assign percentages manually. Unlike % Split, you can add groups and can assign a minimum of 1% in this widget.

The following screenshot shows how the A/B Split widget appears on the canvas:

![9.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyM.05T5g00000BkWyMEAV.png)
The following screenshot shows the A/B Split dialog box that appears when you double-click the widget:

![10.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWyN.05T5g00000BkWyNEAV.png)
On the widget dialog box, click the Add Group button. Enter names for the groups and assign the appropriate value percentage.

## Related Articles

**Journey Building Components:**

- [Journey End](https://galaxy.maropost.com/kb/articles/868-journey-end) - Properly terminate filtered journey paths
- [Journey Delays](https://galaxy.maropost.com/kb/articles/869-journey-delays) - Control timing after filtering decisions
- [Data Journey Triggers](https://galaxy.maropost.com/kb/articles/862-data-journey-triggers) - Configure conditions that start filtered journeys

**Journey Templates:**

- [Nurture Journey Template](https://galaxy.maropost.com/kb/articles/864-nurture-journey-template) - Use filters for customer segmentation
- [Automation Overview](https://galaxy.maropost.com/kb/articles/1745-automation-overview) - Understand Marketing Cloud's automation capabilities