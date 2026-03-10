---
title: "Mailgun Email Routing"
articleID: 66
category: "Use Neto > Products > Marketing, SEO, and Promotions > Email Marketing"
knowledgeBase: "Neto By Maropost"
---

# Mailgun Email Routing

![Mailgun Email Routing1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000RhigeMAB.jpg)

### This add-on was built by Maropost

Add-ons and Integrations built in-house by Maropost are documented and supported by our customer service team. If you're having issues with this integration,[let us know!](https://www.netohq.com/support/s/ask-us)

## Overview

Mailgun is an all-in-one email delivery platform, used by many high profile technology companies like Slack, Reddit & Github. It allows Neto to scale and ensure a high delivery rate for customer emails and avoid spam.

When you use Mailgun your system emails are sent via an API request to Mailgun. Mailgun accepts this request and sends the mail on your behalf. All mail through Mailgun will display **via netomail.com.au** or **on behalf of** to ensure the highest integrity of email delivery for all customers. For more information please refer to the [Mailgun help site](https://help.mailgun.com/hc/en-us/articles/360012491394-Why-Do-I-See-On-Behalf-Of-in-My-Email-).

To ensure maximum delivery for the most important emails we split mail into three different types:

### Transaction Emails

These emails provide invoices, password resets or new user signup details. These emails typically do not have an unsubscribe link.

### Notification Emails

Notification emails are sent to customers when they first make a purchase, or subscribed to a stock alert (e.g restock, out of stock, or low stock warning).

### Marketing Emails

Marketing emails usually have an unsubscribe link and respect the opt in field on the customer card. They include follow up, wishlist and abandoned cart emails.

## Mailgun Accounts

Neto manages a single Mailgun account for all merchants at no cost.

You can also use your own Mailgun account that will give you direct access to the email logs, and will ensure messages no longer display warnings. You will be responsible for managing your own email reputation score if you use your own account. Refer to the [Mailgun pricing page](https://www.mailgun.com/pricing/) for more information.

## Install the Mailgun Add-on

The Mailgun add-on is only used when you have your own Mailgun account. To set up the Mailgun add-on:

1. Create an account with Mailgun and [verify your domain with Mailgun](https://documentation.mailgun.com/en/latest/user_manual.html#verifying-your-domain) so that your mail routes through their service.
2. Make a note of your [Mailgun API key](https://app.mailgun.com/app/dashboard) s you need to enter it into Neto soon.
3. In your Neto control panel click on the **Addons** menu.
4. In the Advanced Customer Services section find the Mailgun add-on and click the **Install** button.
5. Enter your Mailgun API key and the domain you registered with Mailgun.
  ![Mailgun Email Routing2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000RhigCMAR.jpg)

> **Note:** Developers can use JSON in the Mailgun Domain field to define different email sending domains for transactional and all other marketing emails. The "transactional" element is used to define the sending domain for transactional emails. The "default" element is used to define the sending domain for all other emails sent from the control panel.

- 
  ![image (49).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000SO1zZMAT.jpg)

  Neto partners can set this up for you. Visit the job request portal for a quote.

  6. Click the **Install** button.

  Your Neto customer emails will now route through your Mailgun account.

  Please provide our support team with the [email headers as an attachment](https://mxtoolbox.com/Public/Content/EmailHeaders/) so that they can investigate the issue. For more information please refer to the [Mailgun help site](https://help.mailgun.com/hc/en-us/articles/360011702394-Why-Do-My-Emails-Go-to-Spam-).