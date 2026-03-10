---
title: "Marketing Cloud Release Notes – 20 Jul 2023"
articleID: 1790
category: "2023 Releases"
knowledgeBase: "MC Release Notes"
lastUpdated: 2025-08-07
---

# Marketing Cloud Release Notes – 20 Jul 2023

**OVERVIEW**

You can now trigger alerts and confirmations directly to a user’s mobile device using the Transactional SMS Campaigns feature. We now support multiple sending numbers across the globe.

For more information, scroll down!

**NEW FEATURES**

**Introducing Transactional SMS Campaigns**

Big news! You can now create and send transactional SMS campaigns in Marketing Cloud. A transactional SMS is an automated message triggered by an event. Popular usage of transactional SMS is an event reminder SMS, order confirmation SMS, password reset SMS, and so on.

You can create the transactional SMS campaigns either on the Marketing Cloud application UI or by using Marketing Cloud’s **POST /sms_campaigns.json** REST method. Once the transactional SMS is created, it can be viewed and edited on the Transactional SMS Campaigns page (In Navigation > CAMPAIGNS > Transactional SMS Campaigns).

![Transactional-SMS-Index](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TransactionalSMSIndex.0685g00000G75mAAAR.png)

You can send transactional SMS campaigns using the Marketing Cloud’s **POST /deliver.json** REST method. Any values passed with the POST method will override the values defined during the creation of the transactional SMS campaign.

For more information, see [**Transactional SMS Campaigns**](https://galaxy.maropost.com/s/article/Transactional-SMS-Campaigns) and [**Transactional SMS APIs**](https://galaxy.maropost.com/s/article/Transactional-SMS-APIs).

**Support for Multiple Sending Numbers Internationally**

We are very pleased to announce that we now support multiple sending numbers internationally. With this welcoming change, you can now have local numbers for countries where you want to send SMS. However, note that the number of sending numbers allowed within a country is still one (due to the limitations imposed by wireless carriers).

Things you need to know:

- 
- 
- 

**What happens when sending an SMS to an international number?**

When you send an SMS to a contact in the USA from a sending number in Australia, the contact will see the SMS coming from a local (American) number and not the original (Australian) send number.

Our partner service provider handles the internal process of identifying the country the contact belongs to and then uses their local numbers in the country to deliver the message. Now, if the contact replies to the SMS, the reverse mapping is also taken care of internally to deliver the reply to your number.