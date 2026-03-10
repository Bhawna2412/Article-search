---
title: "Sending Transactional Campaigns via SMTP"
articleID: 822
category: "Email Marketing > Transactional Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-10-15
---

# Sending Transactional Campaigns via SMTP

You can use Marketing Cloud's **SMTP service** to send transactional emails. We recommend utilizing our RESTful API for sending transactional messages. However, we provide this alternative protocol API for clients having legacy systems that were developed to create and send transactional messages directly to the end recipient.

To learn how to create transactional emails in Marketing Cloud, see [**Creating Transactional Email Campaigns**](https://galaxy.maropost.com/s/article/Creating-Transactional-Email-Campaigns).

The advantage of using Maropost’s SMTP API is to take advantage of Maropost’s sending reputation to ensure the **highest deliverability rate** for these all-important types of messages.

The SMTP API is also the only means that enables file attachments up to 10 MB in size to be sent as transactional messages. While sending file attachments in transactional emails is no longer considered best practice (file attachments, especially PDF files, are now the number 1 vector for viruses), this capability exists to support legacy systems.

To send a transactional email through SMTP, do the following:

1. Fully rendered transactional emails must be sent to **smtp.maropost.com** on port **587**.
2. You will need to inform us of the injection IP address from where your system will connect to **smtp.maropost.com** so that we can whitelist it. Contact your Customer Success Manager, or send an email to **success@maropost.com.**

## SMTP Headers

Your email body must include the headers marked as required:

| **X-CampaignName** | Required | This is the unique lookup key for the transactional campaign. It is recommended that you avoid using a unique campaign name for each transactional message that you send. Otherwise, you’ll be left with hundreds of thousands of individual transactional campaigns, each with a send count of one. |
| --- | --- | --- |
| **X-CampaignID** | Conditional | The Transactional Campaign ID that you have created within Maropost for Marketing. This x-header is required ONLY if your Maropost Marketing Cloud Account ID is between 1 and 999. If your account ID is 1000 or above, then this x-header is optional. |
| **X-AccountID** | Required | Your Maropost Account ID. |
| **X-ApiKey** | Required | The API authentication token that you will use for this connection. |
| **X-CTags** | Optional | A comma-separated list of campaign tags. |
| **X-IgnoreDnm** | Optional | Possible values are **true** and **false**. If true, then the email will be sent to the contact even if their email address is in the general Do Not Mail list. If false, then the email will not be sent if the email address is in the general Do Not Mail List. |
| **X-BrandName** | Optional | If you are using the [**Brand Management**](https://galaxy.maropost.com/s/article/Brand-Management) feature, then provide the name of the brand here. |
| **X-Language** | Optional | If not provided, then “English” is the default language. Other supported languages include “Spanish,” “German,” “Italian,” “French,” “Portuguese,” “Danish,” “Dutch,” “Swedish,” and “Norwegian.” |
| **X-Address** | Optional | The physical address of your company, as required for regulatory compliance. If not provided, then the address associated with your Maropost for Marketing account will be used. |
| X-Custom-[name] | Optional | Include your own X-Header, and it will be included in the transactional message that Marketing Cloud sends. The entire length of the X-Header (including the [name] and value should not exceed 988 characters. |