---
title: "Reducing Email Bounces: Best Practices"
articleID: 943
category: "Best Practices"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-16
---

# Reducing Email Bounces: Best Practices

The email bounces are of two types:

* Hard Bounce: If an email gets rejected by the email server and cannot be delivered, the email bounce back is called hard bounce. It is a permanent delivery failure and harms the sender reputation. Hard bounces happen if the email address is invalid, recipient has blocked your emails, and so on.
* Soft Bounce: If an email reaches the email server but doesn’t reach the recipient’s inbox, the email bounce back is called soft bounce. It is a temporary delivery failure. Soft bounces happen if inbox is full, email size is too big, server is down, and so on.

> Note: A small percentage of email bounces, such as 2% to 5%, is acceptable and doesn’t harm your reputation.

  We have curated a list of reasons that may cause an email bounce and what you can do to avoid it.

* One of the typical reasons for email bounces is wrong email address. Be watchful about the email addresses. Always verify the email address provided by the customer.
* You don’t want your emails to be blocked by spam filters. Hence, follow the best practices to avoid using spammy content. The spam filters get updated frequently, so be vigilant of the changes and update your email template accordingly.
* Some servers block emails that are to too big. Therefore, keep the email size low, avoid big-sized images, and maintain a balanced image-to-text ratio. Currently, JetSend doesn’t enforce a size limit for emails, however, we recommend keeping the email size below 500 KB.
* If you keep sending emails to an email address even after a bounce, you will further damage your reputation. So, you must analyze the bounce and add the email address to the suppression list.