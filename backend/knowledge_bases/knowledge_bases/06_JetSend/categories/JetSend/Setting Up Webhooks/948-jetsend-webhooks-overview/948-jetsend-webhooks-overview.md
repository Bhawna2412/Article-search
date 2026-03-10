---
title: "JetSend Webhooks - Overview"
articleID: 948
category: "Setting Up Webhooks"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-16
---

# JetSend Webhooks - Overview

In JetSend, you can create webhooks to get notified of delivery events and engagement events.

The delivery events are the ones that indicate the status of email delivery. JetSend supports webhooks for the following delivery events:

* accepted
* enqueued
* deferred
* rejected
* delivered
* suppressed

The delivery events are the ones that indicate the recipient's interaction with the emails. JetSend supports webhooks for the following delivery events:

* bounced
* reported
* opened
* clicked
* webhook

The Webhooks tab on the Settings page shows all your previously created webhooks and their details. This page also acts as a starting page for creating webhooks. The webhook creation in JetSend is a simple process and is covered in detail in the [Creating and Managing Webhooks](https://galaxy.maropost.com/s/article/creating-and-managing-webhooks) article.

After a webhook is created and set up as an active webhook, it sends a push notification every time the specific event happens. JetSend also enables you to test your webhook. Click the webhook to expand and then click Test Webhook. You will see a server response along with a confirmation message on successful testing of your set up.

You can use the data from webhooks in various ways, such as:

* Create reports. JetSend already provides you with the email performance report on the Emails page and a quick overview of the same in the dashboard widgets. You can, however, create detailed or custom-tailored reports with the information retrieved using the webhooks.
* Synchronize your systems seamlessly in real time. These are more efficient as you get the notification as soon as the event happens rather than querying for the update.
* Initiate other automated processes. You can set up automated workflows to be triggered based on the information from the webhook. For example, you can send a follow-up email to contacts who clicked on the links, you can send a reminder email to contacts who didn't open the email, you can add the contacts from bounced emails to the suppression list, and so on.