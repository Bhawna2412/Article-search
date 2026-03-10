---
title: "Avoid Emails Getting Marked as Spam or Blocked"
articleID: 666
category: "Getting Started with Retail Express > Configuring Retail Express"
knowledgeBase: "Retail Express"
---

# Avoid Emails Getting Marked as Spam or Blocked

You can optimize email deliverability from Retail Express to ensure customer communications reach their intended recipients, helping your retail operations maintain effective email-based customer contact. This capability provides guidance on email configuration and best practices that improve delivery rates, which helps ensure invoices, receipts, and other customer communications are received reliably.

Setting up proper email configuration enables your retail operations to maintain effective customer communication, helping optimize email deliverability and customer engagement. This helps retail businesses ensure their transactional and marketing emails reach customers successfully, supporting better customer relationships and operational efficiency.

Retail Express includes several features where you can send emails directly from the system to your suppliers and customers - Invoices, Purchase Orders, Newsletters etc.

To reduce the risk of your emails being sent to the Junk Mail folder as spam, you'll need to ensure that Retail Express is authorised to send emails on your behalf. This is achieved by setting up an SPF (Sender Policy Framework) record.

> **Note:** Setting up an SPF should only be implemented with professional IT support; Retail Express does not provide technical advice or assistance.

## Why you should set up an SPF record

It's optional to set up an SPF record, but highly recommended, and can help to resolve issues where customers are not receiving your outgoing emails.

An SPF record (Sender Policy Framer) is a way of authenticating emails as a means of detecting forged email addresses - used in phishing and email spam. By setting up an SPF record you can reduce the chances of your emails getting blocked by spam filters, and your customers are more likely to receive your emails.

The SPF record declares what servers other than your own are allowed to send the email as if it originated from your own domain.

For example:

- When setting up Retail Express settings you enter your email address e.g.
- When emailing an invoice from POS, Retail Express makes the email appear as if it came from [email@mycompany.com,](mailto:email@mycompany.com,) but the mail recipient can still see the email originated from a different server
- Most of the time this works fine, and customers receive the emails
- Sometimes the email server will mark the email as spam
- Setting up an SPF record will indicate Retail Express was authorised to send the email

## How to create an SPF record

To create or edit an SPF record, you need to edit your domain's DNS settings. How this is achieved will vary depending on the email hosting service (for example, [GoDaddy](https://au.godaddy.com/help/add-an-spf-record-19218?) provides instructions on their [support site](https://au.godaddy.com/help/add-an-spf-record-19218?)). Contact your hosting provider for more information.

We recommend using either of the following SPF records.

v=spf1 include:retailexpress.com.au ?all

or

v=spf1 include:retailexpress.com.au ~all

### **SPF Record explained:**

| **SPF** | **Description** |
| --- | --- |
| v=spf1 | Sets the SPF version 1 |
| include:retailexpress.com.au | Used to declare that it has permission to send outgoing email from the Retail Express database as if it came from your own domain |
| ?all/~all | Determines how main received from a domain not included in the SPF record is handled. To reject all mail not coming from a domain listed in the SPF record would use -all, however, we recommend one of the following:  - ?all - A declaration you have no policy about mail received from domains not listed in the SPF record. This is a slightly more lenient setting and minimises the chance of the mail being rejected as spam. - ~all - Considered a "soft fail" in that the mail did not originate from a domain listed in the SPF record. However it's not immediately rejected, and will be evaluated further to determine if it will be accepted. The email still has a chance of being rejected as spam. |

The choice of which records to use for your domain will require careful consideration and should be made in collaboration with your domain administrator. It's essential to evaluate your email system's needs, ensuring the correct records are implemented to maintain security and deliverability.

Consulting with a knowledgeable domain administrator will help ensure the chosen records align with your infrastructure and comply with best practices.