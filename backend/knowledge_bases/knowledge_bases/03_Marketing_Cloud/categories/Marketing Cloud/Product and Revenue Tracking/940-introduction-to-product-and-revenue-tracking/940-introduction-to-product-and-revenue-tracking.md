---
title: "Introduction to Product and Revenue Tracking"
articleID: 940
category: "Product and Revenue Tracking"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Introduction to Product and Revenue Tracking

You can connect product and revenue data to your email marketing campaigns to enable data-driven decisions and measure campaign effectiveness. This helps create more relevant messaging by combining customer engagement with purchase history, typically leading to better campaign performance through advanced segmentation and personalized automation workflows.

When properly configured, product and revenue tracking enables you to identify improvement opportunities by connecting every purchase to your email marketing efforts, helping optimize campaign spending and maximize marketing ROI.

**Product and Revenue Tracking** is a feature within Maropost that allows e-commerce marketers to store and reference data around products, orders, purchases, and revenue within Maropost. Ultimately, by adding this data, marketers have one single customer record within Maropost that contains both contact engagement and purchase history.

Adding product and revenue tracking enables you to:

- **Enhance Segmentation**
With product and revenue tracking, you are able to create segments based on products purchased, dollars spent over time, and order status.
- **Increase** **Campaign Personalization**
One of the various ways you can use a contact’s purchase history is to persuade them to buy again. You can engage with your contact to send them personalized campaigns, such as:  - *Product Upsell Campaigns: *Based on the product that was purchased, you can send emails encouraging the contact to buy a more expensive version of their purchased product. For example, you can send a promotional email for a coffee mill to those who bought a simple coffee grinder.
  - *Next Logical Product Campaigns: *Based on the purchase history, you can send emails to suggest buying related products, such as accessories of the purchased product.
  - *Product Replenishment Campaigns: *Based on your contact’s product history, you can estimate their need to restock the product and send emails to promote repeat buying of the product.
  - *Free Trial Conversion Campaign: *This type of campaign is very effective for subscription-based products that have a free or introductory-priced trial period. You’d send a series of emails to the trial users, getting them to stick around and convert to a paid subscription.
- **Increase Journey Campaign Personalization**
You can use the purchase history to create segments and use them to trigger Journey Campaigns. For example, if a contact buys a subscription to your product, you can use this information to add them to an educational journey campaign and automatically send them emails on how to use the product.
- **Calculate ROI and Track Campaign Effectiveness**
One of the biggest struggles marketers face is measuring the effectiveness of a campaign and the impact it has on their bottom line. With product and revenue data enabled, you will be able to attribute every cent earned as a result of your email campaign or journey. Additionally, you can see your average customer’s lifetime value and detailed order history.

## Where Can I See Product & Revenue Tracking?

You can access and engage with the product and revenue information through various features in Maropost. Once enabled, you will be able to see relevant product and revenue information in the following places:

### **Contact List - Total Revenue**

The total revenue attributed to a specific contact list is calculated and displayed both on the Contact Lists index page and within the Contact List overview page. The total revenue is calculated by summing the revenue generated from all contacts on the specific list.

![Revenue_-_Contact_Lists_index.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjO.05T5g00000BkWjOEAV.png)
![Revenue_-_Contact_List_Overview.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjU.05T5g00000BkWjUEAV.png)

### **Contact Overview - Lifetime Value and Number of Orders**

You can see the purchase history of contacts on their contact overview page. The engagement cards, such as Lifetime Value and Number of Orders, give you quick insight into their total spending and orders placed. The lifetime value is calculated by summing the total dollar amount spent by the contact since subscribing. The Customer Engagement Journey provides quick insights along with a detailed account of the contact’s engagement with your emails and products, including order details.

Clicking the email address of a contact in a contact list shows the overview of the contact. For more information on Contact Overview, see [**Viewing a Contact Overview**](https://galaxy.maropost.com/kb/articles/10-contact-360-overview-new?utm_source=community-search&utm_medium=organic-search&utm_term=Contact+360+overview).

![Contact_Overview_-_Revenue_Tracking.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjR.05T5g00000BkWjREAV.png)

### **Reporting - Total Revenue and Conversion Rate**

You can also see the revenue data in various campaign-related reports. The Total Revenue field in the reports is calculated as the sum of total revenue from each order for a campaign for that account. To learn more about various reports that you can create, see [**Reports Overview**](https://galaxy.maropost.com/s/article/Reports-Overview).

![Revenue_-_Campaign_Reports_Index.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjS.05T5g00000BkWjSEAV.png)
![Revenue_-_Campaign_Report_Dashboard.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjT.05T5g00000BkWjTEAV.png)

### **Dashboard Widgets**

Certain Dashboard widgets, such as the Recent Campaign Sent widget and the Total Campaign Revenue widget, show the revenue data corresponding to the campaign information. The total revenue is calculated as the sum of revenue generated by orders placed through campaign clicks. To learn more about the widgets, see [**Dashboard Walkthrough**](https://galaxy.maropost.com/kb/articles/44-dashboard-walkthrough?utm_source=community-search&utm_medium=organic-search&utm_term=Dashboard+Walkthrough).

The Revenue Column in the Recent Send Campaigns widget shows the total revenue generated by each listed campaign:

![Revenue_-_Recent_Send_Campaigns.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjP.05T5g00000BkWjPEAV.png)
![Revenue_-_Total_Campaign_Revenue.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjQ.05T5g00000BkWjQEAV.png)

## How Do I Add Product & Revenue Data?

Maropost has three different ways of integrating or adding your product and revenue data into your Maropost account. See the table below to understand each method, which is recommended for your organization, and what the limitations are for each implementation method.

For a detailed discussion on how you can implement these methods, see [**Implementing Product and Revenue Tracking**](https://galaxy.maropost.com/s/article/Implementing-Product-and-Revenue-Tracking).

| **Implementation Method** | **One-Click Integrations** | **Maropost's Web Tracking** | **REST API** |
| --- | --- | --- | --- |
| **Recommend for Accounts** | One-click integrations are the fastest and easiest way to bring in your product and revenue data. This method works best with accounts that are using a Maropost e-commerce partner, such as:  - Shopify - Magento - 1Shopping Cart - Infusionsoft | Integrating product and revenue data via web tracking is our recommended method for customers who are using a custom e-commerce platform or an e-commerce platform that does not have a one-click integration with Maropost. | The product and revenue REST API is recommended for our larger customers who are using a homegrown e-commerce platform or have an internal development team to help set up and support. The Product/Revenue REST APIs can be used to capture, retrieve, update, and delete the order details and product information. |
| **Limitations** | Can’t track campaign conversions. | Less accurate because the tracking is cookie-based. | For tracking campaign conversions, implementing the process of storing and passing the Campaign ID remains your responsibility. |
| **Getting Started** | Click [**here**](https://galaxy.maropost.com/s/article/Integrations-Overview) to learn how to get started with one-click integrations. | Click [**here**](https://galaxy.maropost.com/s/article/Introduction-to-Web-Tracking) to learn how to add product and revenue data via web tracking. | See API Reference (REST APIs > PRODUCT/REVENUE) for detailed information on how to use the API methods. |

## Related Articles

**Revenue Tracking Implementation:**

- [Product And Revenue Tracking](https://galaxy.maropost.com/kb/articles/938-product-and-revenue-tracking) - Quick implementation guide for revenue tracking
- [Introduction To Web Tracking](https://galaxy.maropost.com/kb/articles/856-introduction-to-web-tracking) - Implement web tracking for conversions
- [Capturing Orders Using Web Tracking](https://galaxy.maropost.com/kb/articles/1003-capturing-orders-using-web-tracking) - Track specific order data

**E-Commerce Integrations:**

- [Integration With Shopify](https://galaxy.maropost.com/kb/articles/732-integration-with-shopify) - Connect Shopify for automatic data sync
- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Explore all available integrations

**Campaign Optimization:**

[Creating Segments With Next](https://galaxy.maropost.com/kb/articles/818-creating-segments-with-next) - Use purchase data for advanced segmentation