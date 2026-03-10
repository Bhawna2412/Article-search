---
title: "Conversion Attribution (Last-Touch Attribution)"
articleID: 1368
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Conversion Attribution (Last-Touch Attribution)

You can implement conversion attribution tracking to measure which email campaigns drive actual purchases and calculate the true ROI of your email marketing efforts. This data-driven approach enables you to identify your most effective campaigns and optimize your email marketing strategy based on actual conversion performance rather than just engagement metrics.

When properly configured, conversion attribution helps optimize campaign spending by showing which campaigns generate revenue, allowing you to focus resources on the marketing activities that drive the best business results.

**Conversion Attribution** is a strategy that helps you identify and associate the email campaign that led your contact to make a purchase. Maropost Marketing Cloud implements this strategy using the Last Touch Attribution model, which assigns the conversion credit entirely to the final touchpoint at which a lead has been converted.

Marketing Cloud enables you to set up the conversion attribution strategy without any coding effort. All you need to do is configure the given set of parameters. And these parameters determine how we calculate and associate a campaign with an order.

> **Note:** **Note:** The Conversion Attribution is simply the best estimate (based on the setting) that the purchase event is most likely the direct action of a recent email event. If your parameter setting doesn't give you optimal results, change and refresh the setting.

## **Setting Up Conversion Attribution**

You can set up the conversion attribution for your account on the **Conversion Attribution** page. Follow the steps as shown below:

1. Click your username in the top-right corner of the application, and then from the drop-down, select **Settings**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SettingsNav.05T5g00000gNkDtEAK.png)
2. 
  On the Settings page, under Connections, click **Conversion Attribution**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SettingsConversionAttribution.05T5g00000gNkFfEAK.jpg)
3. 
  On the Conversion Attribution page, turn on the **Enable Last-Touch Attribution** toggle button.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ConversionAttribution.05T5g00000gNST3EAO.jpg)
4. In the **Attribute email conversions to** section, select the event to which you want to attribute the email conversion.

- 
- 
- 

Additionally, for each option, select whether you want to include the opens/clicks recorded from the data center.

> **Note:** **Note:** If the option 'The campaign most recently clicked is preferred' is selected, then the most recently clicked campaign is attributed to the order, even if there is a campaign more recently opened. However, if none of the campaigns were clicked, then the one most recently opened is attributed to the order.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ConversionAttributionevent2.05T5g00000gNkWUEA0.png)

5. Select which order statuses are to be used.

- **Any order status**: All orders, irrespective of their status, are considered for calculation.
- **Include only orders with status:** The orders with statuses that you select here are considered for calculation.
- **Exclude all orders with status**: All orders, excluding the ones with statuses that you select here, are considered for calculation.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ConversionAttributionorderstatus.05T5g00000gNlQjEAK.png)
6. Turn on the "**Exclude unsubscribers and spam complaints**" toggle switch to exclude the spam report events.

7. In the **Attribution Window**, select a day between **1 to 30 days**. The attribution window is the date range immediately prior to the order date during which all email campaigns delivered to the contact are considered for conversion attribution. The default value for the Attribution Window is **7 days**.

8. Enable the **Refresh previous attributions** toggle switch if you want to refresh the campaign conversions for the last 30 days.

Depending on whether you are enabling the Conversion Attribution settings for the first time or updating the settings, here's how refreshing the previous attributions works: 

- 
- **Recalculation**: If you are making changes to your existing Conversion Attribution settings, the campaign conversions are recalculated, and the new settings are reflected in the campaign associations with orders.

9. Click **SAVE**.

## How Does It Work?

When the Conversion Attribution is enabled, here's how it works:

1. When an order is synced into your Marketing Cloud account, its order status is checked. The order status(es) selected in the settings are considered.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ConversionAttributionorderstatus.05T5g00000gNksIEAS.jpg)
2. Based on the order date, all the emails delivered to the contact (buyer) for the last X days are checked. Here, X refers to the number of days selected as the attribution window in the setting.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ConversionAttributionwindow.05T5g00000gNksNEAS.jpg)
3. Then, the most recently opened/clicked email by the same contact is looked up and associated with the order.  - If you choose "Open only," the most recently opened email is picked.
  - If you choose "Clicks only," the most recently clicked email is picked.
  - If you choose "Either Opens or Clicks," the most recently touched email, whether opened or clicked, is picked.

> **Note:** **Note:** Your selections regarding including event records from data centers and Apple's MPP-enabled email apps are also considered.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ConversionAttributionevent.05T5g00000gNku9EAC.png)

## Related Articles

**Analytics & Reporting:**

- [A/B Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Compare test campaigns to optimize report analysis
- [Reports and Analytics Overview](https://galaxy.maropost.com/kb/articles/1125-reports-and-analytics-overview) - Understand comprehensive reporting features

**Campaign Management:**

- [8 Lessons of Email Marketing You Can Learn from CAN](https://galaxy.maropost.com/kb/articles/1721-8-lessons-of-email-marketing-you-can-learn-from-can) - Apply reporting insights to campaign strategy
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns for better report analysis
- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Build trackable campaigns from the start