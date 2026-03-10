---
title: "Integration with an Affiliate ClickBank Account"
articleID: 27
category: "Partner Integrations > Integration with Shopping Carts"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-07-15
---

# Integration with an Affiliate ClickBank Account

Marketing Cloud now enables ClickBank’s affiliate marketers to initiate their own native integration between their Marketing Cloud account and their ClickBank affiliate account.

### In This Article

- Video: Maropost-ClickBank Integration for Affiliate Marketers
- What’s the Need for a Separate Integration?
- How Does It Work in Marketing Cloud?
- Benefits of Integrating a ClickBank Affiliate Account

### Video: Maropost-ClickBank Integration for Affiliate Marketers

[//play.vidyard.com/iUoBwYUqmiHBMJP2C2RcRR.html?](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=%2F%2Fplay.vidyard.com%2FiUoBwYUqmiHBMJP2C2RcRR.html%3F)

### What’s the Need for a Separate Integration?

Previously, affiliate marketers didn’t have access to customer information due to data privacy rules and, thereby, were unable to use the ClickBank integration that passes the customer information in real-time when a purchase is made. Without access to the Marketing Cloud features that come with integration, they could only insert the ClickBank marketplace HopLinks into their email campaign and promote the products without knowing which customers have purchased the product or whether their campaign strategies are effective.

Considering this, Maropost and ClickBank took the initiative to build new tracking parameters with advanced tracking capabilities that can help affiliate marketers get insightful data on the orders and campaigns that are driving the purchases. The ClickBank integration for affiliates (known as "ContactPass") enables the affiliate marketers to set up a connection between their ClickBank and Marketing Cloud accounts and receive the tracking information.

For more information on setting up and configuring a ClickBank integration for a seller and affiliate, see [**Integration with ClickBank**](https://galaxy.maropost.com/s/article/Integration-with-ClickBank) and [**Adding a ClickBank Integration**](https://galaxy.maropost.com/s/article/Adding-a-ClickBank-Integration).

### How Does It Work in Marketing Cloud?

**Note**: The ClickBank integration for affiliates must be set up and active for the feature to work.

Whenever you’re sending an email to your contacts, all you have to do is insert Marketing Cloud’s **Contact ID** and **Campaign ID** tags in your ClickBank HopLink. These parameters help you know (1) which email campaigns have driven the most commission revenue and (2) which email lists are more valuable than others.

You must append the tags as web analytics query parameters at the time of creating email content. In the Content editor, you’ll find the **Web Analytics Query Parameters** section in the **Advanced** tab. To learn more about adding tracking parameters to your email content, see [**Web Analytics Tracking**](https://galaxy.maropost.com/s/article/Web-Analytic-Tracking).

Please make sure that you copy the exact syntax of both the query parameter names and their values as shown in the following table (and also in the screenshot below):

| **Name** | **Value** |
| --- | --- |
| contact_id | {{contact.id}} |
| campaign | {{campaign.id}} |

![AffiliateQueryParameter.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000002OLiUMAW.jpg)
Whenever a contact visits a merchant's website and makes a purchase, ClickBank reads the contact and campaign ID and sends the order data payload to the affiliate’s Marketing Cloud account via an INS webhook. As the contact and campaign IDs are only used to identify the buyer and the email campaign, no sensitive data is passed to the ClickBank affiliate.

### Benefits of Integrating a ClickBank Affiliate Account

Since the affiliates have the contact information for every purchase, they don’t need to send bulk campaigns to every contact in the list. They’ll only need to identify contacts that have purchased certain products and send them personalized campaigns accordingly. This enables affiliate marketers to utilize various promotional tools that Marketing Cloud has to offer to help them reach their desired sales target.

- **Segment-based campaigns:** Allow affiliate marketers to use past purchase history to send more relevant and highly engaging promotional content to the correct audience, thereby increasing the chances of a sale conversion. [**Learn More**](https://galaxy.maropost.com/s/article/Introduction-to-Segments).
- **Journey-based campaigns:** Affiliates can create multiple journey paths and determine end goals depending on the actions the contacts undertake during the campaign. The end goals can lead to an increase in subscriber count, an increase in website traffic, maintaining retention rates, and selling additional offers to keep contacts on the journey cycle for much longer. [**Learn More**](https://galaxy.maropost.com/s/article/Journey-Templates-Overview).
- **Product recommendations:** By acquiring such order-based information, affiliates can have a better understanding of what consumers want and can cater to their needs more effectively. For example, they can send curated lists of promotional campaigns containing similar product offerings that the contacts may be interested in buying. This keeps the audience engaged, and it could lead to a less popular product resonating well with the target group. [**Learn More**](https://galaxy.maropost.com/s/article/Product-Recommendations).
- **Efficient and goal-oriented marketing initiatives:** No longer does the affiliate have to think about only one aspect of marketing, i.e., customer acquisition. Henceforth, affiliates can focus on customer retention and satisfaction, plus find ways to bolster their marketing outreach more cost-effectively, which can help decrease their contact list churn and significantly increase their revenue in the long term. [**Learn More**](https://galaxy.maropost.com/s/article/Introduction-to-Web-Tracking).