---
title: "Abandoned Carts"
articleID: 2381
category: "Sales Channel"
knowledgeBase: "Commerce Cloud"
lastUpdated: 2026-01-26
---

# Abandoned Carts

The **Abandoned Carts** feature allows you to automatically follow up with customers who add products to their cart or checkout but do not complete the purchase. This helps recover potential lost revenue by triggering reminder emails based on customer inactivity.

This article explains where the Abandoned Carts settings, configuration options, and how the **Reports** tab reflects the results of these settings.

## To Access

1. Go to **Back Office**
2. Navigate to **Sales Channels**
3. Select the required **Sales Channel**
  ![image.png](https://us.v-cdn.net/6038474/uploads/85FR0LNDZGBP/image.png)
4. Go to **Settings**
5. Select **Abandoned Carts**
  ![image.png](https://us.v-cdn.net/6038474/uploads/YMIFABYNQLK4/image.png)

This opens the Abandoned Carts configuration page.

## Abandoned Carts Overview

The Abandoned Carts page is divided into two tabs:

- **Settings**
- **Reports**

Each tab serves a different purpose in managing and monitoring abandoned cart campaigns.

![image.png](https://us.v-cdn.net/6038474/uploads/I5TGNRBK1I11/image.png)

## Settings Tab

The **Settings** tab allows you to configure **how and when abandoned cart reminder emails are sent** for the selected sales channel. 

From this section, you can define the inactivity period that triggers a reminder, choose where abandonment is tracked in the purchase flow, and configure the sender and reply-to email addresses used for communication.

![image.png](https://us.v-cdn.net/6038474/uploads/JNN2BZVOU96W/image.png)

### Settings Options

| Setting | Description |
| --- | --- |
| **Idle Delay** | Defines the time delay after which a reminder email is sent once a customer becomes inactive. The value is set in minutes using the *Send reminder after* field. |
| **Funnel Control Mode** | Determines where abandonment is tracked in the purchase flow. You can choose between **Cart-Level** or **Checkout-Level**. |
| **Sender** | Email address used as the sender for abandoned cart reminder emails. |
| **Reply-To** | Email address that receives replies from customers who respond to the reminder email. |

### Funnel Control Mode

- **Cart-Level**
Tracks abandonment when a customer adds items to the cart but does not proceed further.
- **Checkout-Level**
Tracks abandonment when a customer starts checkout but does not complete the purchase.

This setting helps tailor reminders based on how far customers progress in the buying journey.

### Saving Settings

Once all details are configured:

- Click **Save**
- The abandoned cart behavior is updated for the selected sales channel
- These settings are used to trigger abandoned cart email campaigns
  ![image.png](https://us.v-cdn.net/6038474/uploads/J6O4H5TDI9QJ/image.png)

## Reports Tab

The **Reports** tab provides detailed insights into the performance of abandoned cart email campaigns created for the selected sales channel. These reports help you understand customer engagement, delivery success, and revenue impact resulting from the abandoned cart settings.

Each report corresponds to an **abandoned cart email campaign**, and all metrics shown here are generated based on the configuration defined in the **Settings** tab.

### Report Overview

The top section of the report provides a high-level summary of campaign performance.

![image.png](https://us.v-cdn.net/6038474/uploads/YBA8BTPJB5PR/image.png)

### Key Metrics Explained

| Metric | Description |
| --- | --- |
| **Total Sent** | Total number of abandoned cart emails sent to customers. |
| **Open Rate** | Percentage of emails that were opened by recipients. |
| **Click Rate** | Percentage of recipients who clicked at least one link in the email. |
| **Conversion Rate** | Percentage of recipients who completed a purchase after interacting with the email. |
| **Total Revenue** | Revenue generated from orders attributed to the abandoned cart campaign. |

These metrics help quickly assess whether the campaign is driving engagement and conversions.

### User Engagement Section

The **User Engagement** section shows how recipients interact with abandoned cart emails over time. This includes email opens and link clicks, displayed visually on a time-based graph.

In addition to engagement metrics, this section allows you to **control the time window** used to display engagement data.

#### Time Range Selector

At the top of the User Engagement graph, you will see a **time range dropdown**. This option lets you define the duration over which engagement data is displayed.

![image.png](https://us.v-cdn.net/6038474/uploads/AI7AECB31OAU/image.png)
Available time ranges include:

- **8 Hours**
- **24 Hours**
- **48 Hours**
- **72 Hours**

Selecting a different time range updates the graph to reflect user activity during that specific period after the email was sent.

This helps you:

- Understand how quickly users engage with abandoned cart emails
- Identify peak interaction windows
- Compare short-term versus extended engagement trends

#### Engagement Metrics Displayed

Within the selected time range, the graph shows:

- **Total Opens** – Number of times the email was opened
- **Total Clicks** – Number of clicks on links within the email

A detailed breakdown is also shown alongside the graph, including:

- Unique opens
- Unique clicks
- Click-to-open rate
- Conversions
- Unsubscribes and complaints

### Email Delivery Section

The **Email Delivery** panel provides visibility into how successfully emails were delivered.

![image.png](https://us.v-cdn.net/6038474/uploads/QWC43EAWADJ8/image.png)

#### Delivery Metrics Explained

| Metric | Description |
| --- | --- |
| **Delivered** | Emails successfully delivered to recipients’ inboxes |
| **Soft Bounces** | Temporary delivery failures (for example, mailbox full) |
| **Hard Bounces** | Permanent delivery failures (invalid email addresses) |
| **Unsubscribed** | Number of recipients who unsubscribed after receiving the email |
| **Complaints** | Spam or abuse complaints raised by recipients |

Monitoring these metrics helps maintain sender reputation and email deliverability.

### Clicks by Country

This section displays a geographic breakdown of email engagement.

#### What It Shows

- A world map highlighting countries where clicks occurred
- Click distribution by location

This is useful for understanding regional engagement patterns for abandoned cart recovery.

![image.png](https://us.v-cdn.net/6038474/uploads/4L2ZB1NVN4HB/image.png)

### Opens by Device

The **Opens by Device** section shows how customers access abandoned cart emails.

![image.png](https://us.v-cdn.net/6038474/uploads/P9WULIPF80MO/image.png)

### Device Categories Include

- **Desktop**
- **Mobile**
- **Tablet**
- **Unknown**

This data helps optimize email design and responsiveness based on customer behavior.

### Web Funnel Section

The **Web Funnel** provides insight into how users move from email interaction to purchase.

![image.png](https://us.v-cdn.net/6038474/uploads/5KJR50VIGFGK/image.png)

#### Funnel Stages Explained

| Stage | Description |
| --- | --- |
| **Started** | Users who clicked the email and entered the purchase flow |
| **Completed** | Users who completed the purchase |
| **Recovered** | Successful conversions attributed to the abandoned cart email |
| **Abandoned** | Users who did not complete the purchase after clicking |

This section connects email engagement directly to purchase behavior.

### Opens by Language

This section breaks down email opens by the recipient’s language setting.

It helps identify which language audiences are engaging most with abandoned cart campaigns, supporting localization and content optimization strategies.

## Date Range and Export Options

At the top of the report, you can:

- Select a **Start Date** and **End Date** to filter report data
  ![image.png](https://us.v-cdn.net/6038474/uploads/JZJF1YAD07C5/image.png)
- Click **Export Report **to download campaign performance data. Once submitted, you will see a notification: **Campaign Report is being processed. Export process will start shortly.**
  ![image.png](https://us.v-cdn.net/6038474/uploads/0YQAPVQPOU7R/image.png)