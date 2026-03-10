---
title: "Growth & Attrition Report: Overview"
articleID: 838
category: "Reports and Analytics > Custom Reports"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Growth & Attrition Report: Overview

You can use Growth & Attrition reports to enable data-driven decisions about your subscriber retention and acquisition strategies by understanding detailed metrics on how your contact lists change over time. These reports help identify improvement opportunities by revealing patterns in subscriber behavior, unsubscribe trends, and list health indicators that impact your email marketing effectiveness. When properly analyzed with key performance metrics, growth and attrition insights typically lead to better list management strategies and subscriber engagement approaches.

Understanding these detailed metrics also helps optimize your email marketing ROI by enabling proactive measures to reduce subscriber loss while identifying the most effective methods for sustainable list growth and maintaining high-quality contact databases.

You can use Growth & Attrition reports to enable data-driven decisions about your subscriber retention and acquisition strategies by understanding detailed metrics on how your contact lists change over time. These reports help identify improvement opportunities by revealing patterns in subscriber behavior, unsubscribe trends, and list health indicators that impact your email marketing effectiveness. When properly analyzed with key performance metrics, growth and attrition insights typically lead to better list management strategies and subscriber engagement approaches.

Understanding these detailed metrics also helps optimize your email marketing ROI by enabling proactive measures to reduce subscriber loss while identifying the most effective methods for sustainable list growth and maintaining high-quality contact databases.

A **Growth & Attrition** report is a metrics report on user growth and attrition to help you understand how your contact lists are growing or shrinking. You can specify the contact lists and the metrics to be included in the report. The report is generated for the date range that you specify and contains metrics only for the selected contact lists.

For a detailed step-by-step guide on how to create a Growth & Attrition report, see [**Creating Growth & Attrition Reports**](https://galaxy.maropost.com/s/article/Creating-Growth-and-Attrition-Reports). To learn about all other types of custom reports, see [**Custom Reports: Overview**](https://galaxy.maropost.com/s/article/Custom-Reports-Overview).

## Performance Metrics Details

When creating the report, you can choose the performance metrics that you want in your report.

![G_A_Metrics.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXBZ.05T5g00000BkXBZEA3.png)

### **Total DNM**

The metric shows the total number of contacts across all lists that are added in the Do Not Mail (DNM) list.

### **DNM Per List**

The metric shows the number of contacts in the individual lists that are added to the DMN list. It is calculated by counting the DNM contacts in a list.

### **Total User Attrition**

The metric shows the total number of contacts across all lists that have unsubscribed from any of the lists. Note that this number includes both DNM and Unsubscribes.

### **User Attrition Per List**

The metric shows the number of contacts that have unsubscribed from a particular list. Note that this number includes both DNM and Unsubscribes for the specific list. It is calculated by counting the DNM contacts and unsubscribed contacts.

> **Note:** If a contact is in the DNM list and their status is Unsubscribe, then they are counted only once.

### **Total Subscribed User Growth**

The metric shows the total number of new subscribers across all lists. For example, if a user subscribes to three lists, then it is counted as three.

### **Subscribed User Growth Per List**

The metric shows the number of users subscribed to a particular list. It is calculated by counting the subscribed contacts in a list.

### **Total Unsubscribed User Growth**

The metric shows the total number of unsubscribes across all lists. For example, if a user unsubscribes to three lists, then it is counted as three. Note that this number does not include DNM.

### **Unsubscribed User Growth Per List**

The metric shows the total number of unsubscribes across a particular list. It is calculated by counting the unsubscribed contacts in a list.

> **Note:** This count does not include DNM contacts.

### **First Time Contacts Per List**

The metric shows the number of contacts added to a list in the given date range. This count includes all contacts added to the list for the first time, irrespective of their status (Subscribed, Unsubscribed, Do Not Mail, and so on). It is calculated by counting contacts (in any status) added to the list within the specified date range.

### **Resubscribers Per List**

The metric shows the number of contacts that have resubscribed to a list in the given date range. It is calculated by counting the contacts that have:

- 'Status' is Subscribed
- 'Updated At' timestamp is later than the 'Created At' timestamp
- 'Updated At' timestamp lies within the specified date range

**Note**:

- If contact status goes from Soft bounce to Subscribe and their 'Updated At' timestamp is changed, they are counted as resubscribers.
- If contact status goes from hard bounce to Subscribe and their 'Updated At' timestamp is changed, they are counted as resubscribers.
- If contact status goes from Unsubscribe to Subscribe and their 'Updated At' timestamp is changed, they are counted as resubscribers.

## Related Articles

**Analytics & Reporting:**

- [Creating Growth Attrition Reports](https://galaxy.maropost.com/kb/articles/837-creating-growth-attrition-reports) - Step-by-step guide to generate growth and attrition reports
- [AB Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Track A/B test performance and optimization insights
- [Advanced Web Tracking](https://galaxy.maropost.com/kb/articles/855-advanced-web-tracking) - Monitor website visitor behavior and engagement

**Campaign Management:**

- [Creating AB Campaigns](https://galaxy.maropost.com/kb/articles/927-creating-ab-campaigns) - Set up A/B tests to optimize campaign performance
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize and categorize your email campaigns

## Related Articles

**Analytics & Reporting:**

- [Creating Growth Attrition Reports](https://galaxy.maropost.com/kb/articles/837-creating-growth-attrition-reports) - Step-by-step guide to generate growth and attrition reports
- [AB Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Track A/B test performance and optimization insights
- [Advanced Web Tracking](https://galaxy.maropost.com/kb/articles/855-advanced-web-tracking) - Monitor website visitor behavior and engagement

**Campaign Management:**

- [Creating AB Campaigns](https://galaxy.maropost.com/kb/articles/927-creating-ab-campaigns) - Set up A/B tests to optimize campaign performance
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize and categorize your email campaigns