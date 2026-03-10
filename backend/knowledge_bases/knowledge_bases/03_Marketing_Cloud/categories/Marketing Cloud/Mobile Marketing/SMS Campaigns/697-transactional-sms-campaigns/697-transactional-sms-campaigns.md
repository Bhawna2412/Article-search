---
title: "Transactional SMS Campaigns"
articleID: 697
category: "Mobile Marketing > SMS Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Transactional SMS Campaigns

Transactional SMS campaigns enable you to deliver time-sensitive, relevant notifications to customers exactly when they need them most. This capability significantly improves customer experience by providing immediate confirmation of orders, appointment reminders, password resets, and other critical communications that customers expect to receive promptly.

When properly configured, transactional SMS helps ensure important messages reach customers within seconds rather than being delayed or missed in crowded email inboxes. This streamlines your customer communication workflow while maintaining the personal touch that builds trust and satisfaction throughout the customer journey.

**Transactional SMS's** are automated messages triggered by an event or user action. For example, an order confirmation SMS, an event reminder SMS, a forgotten password SMS, and so on. Marketing Cloud enables you to create, manage, and send transactional SMS campaigns.

Transactional SMS campaigns are different from promotional SMS campaigns. While promotional SMS campaigns focus on advertising and marketing products and services, transactional SMS campaigns are instrumental in providing relevant information to customers in a timely manner.

You can create and manage your transactional SMS campaigns on the **Transactional SMS Campaigns** page. In Navigation, go to **CAMPAIGNS**, and select **Transactional SMS Campaigns**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TransactionalSMSIndex.05T5g00000rLFX4EAO.png)

### Creating Transactional SMS Campaigns

There are two ways you can create a transactional SMS  - **User Interface** (**UI**) and **REST API**.

#### Create a Transactional SMS on the UI

1. In Navigation, go to **CAMPAIGNS**, and then select **Transactional SMS Campaigns**.
2. 
  On the** Transactional SMS Campaigns** page, click the **NEW CAMPAIGN** button.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TransSMSNav.05T5g00000qZUw8EAG.png)
3. 
  On the **New Transactional Campaign** page, create the SMS message and set up message compliance. This step is identical to how you create a regular SMS message. For detailed instructions, see [**Creating SMS Campaigns**](https://galaxy.maropost.com/s/article/Creating-SMS-Campaigns).

 **Note**: You can only create your SMS message here. For sending the message, you'll be using an API.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CreateTransSMS.05T5g00000qZUyJEAW.jpg)
4. Click **SAVE**.

#### Create a Transactional SMS Using API

You can use the following POST method to create a Transactional SMS campaign:

**POST /v2/:account_id/sms_campaigns.json**

To learn about the API method in detail, reference the [**Online API Guide**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fapi.maropost.com%2Fapi%2F%23tag%2FTransactional-SMS-Campaigns%2Fpaths%2F%7E1v2%7E1%3Aaccount_id%7E1sms_campaigns.json%2Fpost).

### Sending Transactional SMS Campaigns

You can use the following POST method to send a Transactional SMS campaign to an individual mobile number:

**POST /v2/:account_id/sms_campaigns/deliver.json**

To learn about the API method in detail, reference the [**Online API Guide**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fapi.maropost.com%2Fapi%2F%23tag%2FTransactional-SMS-Campaigns%2Fpaths%2F%7E1v2%7E1%3Aaccount_id%7E1sms_campaigns%7E1deliver.json%2Fpost).

> **Note:** The parameter values passed with the deliver POST method override the values defined in the transactional SMS campaign.

## Related Articles

**SMS & Mobile Messaging:**

- [Bulk Messaging Examples](https://galaxy.maropost.com/kb/articles/814-bulk-messaging-examples) - Learn bulk SMS campaign strategies
- [Campaigns For Mobile Apps](https://galaxy.maropost.com/kb/articles/1735-campaigns-for-mobile-apps) - Integrate SMS with mobile app marketing

**Multi-Channel Communication:**

- [Bulk Messaging Personalised Email Headers](https://galaxy.maropost.com/kb/articles/815-bulk-messaging-personalised-email-headers) - Coordinate SMS and email messaging
- [Create Social Media Content](https://galaxy.maropost.com/kb/articles/985-create-social-media-content) - Build comprehensive multi-channel campaigns

**Platform Integration:**

- [Connecting To A Social Media Account](https://galaxy.maropost.com/kb/articles/984-connecting-to-a-social-media-account) - Expand your messaging reach across platforms