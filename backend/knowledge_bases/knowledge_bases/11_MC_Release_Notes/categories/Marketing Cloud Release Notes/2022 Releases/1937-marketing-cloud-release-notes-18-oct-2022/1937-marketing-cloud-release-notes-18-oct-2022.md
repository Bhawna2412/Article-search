---
title: "Marketing Cloud Release Notes – 18 Oct 2022"
articleID: 1937
category: "2022 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-05-26
---

# Marketing Cloud Release Notes – 18 Oct 2022

## **OVERVIEW**

In this release, we made quite a few enhancements to our SMS-related features.

To learn what changed, read on!

## **ENHANCEMENT**

### **New SMS Contact List Dashboard**

You can now view all relevant information and statistics for any SMS contact list in a single-view dashboard. The dashboard consists of the list details, at-a-glance information (such as total contacts, subscribers, unsubscribers), and the list of campaigns that use the contact list. 

Click the list name on the SMS Contact List to navigate to the dashboard. To learn more about SMS contact lists, see [**SMS Contact Lists**](https://galaxy.maropost.com/s/article/SMS-Contact-Lists).
![SMS Contact List Dashboard](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SMSContactListDashboard.0685g000009wPxgAAE.png)

### **Filtering Options for Including Campaigns in Custom SMS Report**

On step 2 of the Custom SMS Campaign Report page, two new checkboxes – **Journey campaign** and **SMS campaign** – have been introduced. You can use these checkboxes to filter the campaign names in the Campaign Name drop-down field based on SMS campaign type (Journey or regular).

For more information about Custom SMS Campaign Report, see [**Custom SMS Campaign Report**](https://galaxy.maropost.com/s/article/Custom-SMS-Campaign-Report).

![Custom SMS Campaign Report - Step 2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CustomSMSCampaignReportStep2.0685g000009wPuhAAE.png)

- 
- 
- 

 Usage Scenario: Let’s say, you want to create a custom report with all Journey SMS campaigns for a date range. To do so, you can do the following in step 2 of the report creation flow: 

1. 
2. 

### **Adding Permanently Failed Contacts into SMS Do Not Mail (DNM) List**

The failed contacts now automatically get added to the SMS DNM list. This will help you identify and get rid of the numbers that are invalid or unavailable.

When an SMS campaign doesn’t get delivered to a contact, it is considered to be a delivery failure. Based on the error code, we identify the occurrence to be a temporary failure or a permanent failure. And then, the contacts from permanent failures are automatically added to the SMS DNM list.

For more information about managing the SMS DNM list, see [**SMS Contact Lists**](https://galaxy.maropost.com/s/article/SMS-Contact-Lists) and [**Suppression (Do Not Mail) Lists**](https://galaxy.maropost.com/s/article/Suppression-Do-Not-Mail-Lists).