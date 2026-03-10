---
title: "Data Journey: Triggers"
articleID: 862
category: "Marketing Automations > Data Journeys"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Data Journey: Triggers

Trigger widgets enable you to automate routine tasks and deliver timely, relevant content by initiating workflows based on specific events or schedules. This helps improve operational efficiency and campaign effectiveness by automatically starting customer journeys when conditions are met, which reduces manual effort while ensuring subscribers receive communications at optimal moments for engagement.

When properly configured, trigger widgets streamline your workflow by automatically starting data journeys based on various business events, enabling you to scale personalized communication and nurture leads automatically without constant manual oversight.

A **Trigger** widget is an element that is required to start a Data Journey. Through a trigger, you can begin a Data Journey that produces and uses data and will automate campaign, contact, and report processes.

### Scheduled

The scheduled trigger can be initiated to start a Data Journey at a specified time and date.

The following screenshot shows how the Scheduled widget appears on the canvas:

![scheduled.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9K.05T5g00000BkX9KEAV.png)
The following screenshot shows the Scheduled dialog box that appears when you double-click the widget:

![screen-shot-2016-04-11-at-10-53-00-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9M.05T5g00000BkX9MEAV.png)

### Recurring

The Recurring trigger can be initiated to start a Data Journey on a weekday, a specific day in a month, or at different time intervals. Multiple selections are allowed in each option. You can either choose single or multiple weekdays and choose appropriate time slots to trigger it. You can also follow the same process for dates and hours.

The following screenshot shows how the Recurring widget appears on the canvas:

![screen-shot-2016-04-11-at-10-57-55-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9O.05T5g00000BkX9OEAV.png)
The following screenshot shows the Recurring dialog box that appears when you double-click the widget:

![screen-shot-2016-04-11-at-10-57-35-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9Q.05T5g00000BkX9QEAV.png)

### Import Finished

The Import Finished trigger is initiated when importing contacts in a specific list is completed.  Multiple selections are allowed in this trigger.

The following screenshot shows how the Import Finished widget appears on the canvas:

![screen-shot-2016-04-11-at-11-05-31-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9H.05T5g00000BkX9HEAV.png)
The following screenshot shows the Import Finished dialog box that appears when you double-click the widget:

![Import_Finished.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9I.05T5g00000BkX9IEAV.png)

### Export Finished

The Export Finished trigger is initiated when exporting contacts from a specific list or segment has completed.

The following screenshot shows how the Export Finished widget appears on the canvas:

![screen-shot-2016-04-11-at-11-09-24-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9J.05T5g00000BkX9JEAV.png)
The following screenshot shows the Export Finished dialog box that appears when you double-click the widget:

![Export_Finished.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9W.05T5g00000BkX9WEAV.png)

### Campaign Sent

The Campaign Sent trigger is initiated when a campaign has been sent from your account. This trigger only applies to promotional campaigns, specifically, priority sent campaigns and recurring campaigns.

You can select a specific campaign name, or you can include a repeated aspect of a campaign name to trigger a Data Journey. For example, you have multiple campaigns with 'Giveaway' in the title, you can select 'Starts With' > Giveaway, and the trigger is initiated whenever a campaign with 'Giveaway' in the title is sent.

The following screenshot shows how the Campaign Sent widget appears on the canvas:

![screen-shot-2016-04-11-at-11-17-35-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9S.05T5g00000BkX9SEAV.png)
The following screenshot shows the Campaign Sent dialog box that appears when you double-click the widget:

![screen-shot-2016-04-11-at-11-19-53-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9T.05T5g00000BkX9TEAV.png)

### Report Generated

The Report Generated trigger displays all the email campaign reports as well as custom reports in the account. Any activity in the selected reports triggers the Data Journey.

The following screenshot shows how the Report Generated widget appears on the canvas:

![report.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9U.05T5g00000BkX9UEAV.png)
The following screenshot shows the Report Generated dialog box that appears when you double-click the widget:

![Report_Generated.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9V.05T5g00000BkX9VEAV.png)

### File Uploaded

The File Uploaded trigger is initiated when a file is uploaded to your account folder on the Maropost SFTP server. You have to enter the file name and the file path (if using a subdirectory of the default /uploads folder).

The following screenshot shows how the File Uploaded widget appears on the canvas:

![screen-shot-2016-04-11-at-11-48-50-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9L.05T5g00000BkX9LEAV.png)
The following screenshot shows the File Uploaded dialog box that appears when you double-click the widget:

![screen-shot-2016-04-11-at-11-53-58-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9N.05T5g00000BkX9NEAV.png)

### API Event

The API Event trigger enables you to initiate the Data Journey through an external resource. You must specify an API endpoint that is unique to the Data Journey and your account.

The following screenshot shows how the API Event widget appears on the canvas:

![api-event.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9P.05T5g00000BkX9PEAV.png)
The following screenshot shows the API Event dialog box that appears when you double-click the widget:

![screen-shot-2016-04-11-at-11-55-13-am.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX9R.05T5g00000BkX9REAV.png)

## Related Articles

**Journey Workflow Components:**

- [Data Journey Delays](https://galaxy.maropost.com/kb/articles/859-data-journey-delays) - Control timing after trigger activation
- [Data Journey Filters](https://galaxy.maropost.com/kb/articles/860-data-journey-filters) - Target specific segments from triggered journeys
- [Data Journey End](https://galaxy.maropost.com/kb/articles/858-data-journey-end) - Properly conclude triggered workflows

**Automation Implementation:**

- [Using Journeys For Remarketing Campaigns](https://galaxy.maropost.com/kb/articles/851-using-journeys-for-remarketing-campaigns) - Real-world trigger examples for cart abandonment
- [Automation Overview](https://galaxy.maropost.com/kb/articles/1745-automation-overview) - Complete guide to automated marketing workflows