---
title: "A Record"
articleID: 872
category: "Setup and Configuration > Initial Setup"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# A Record

You can configure "A records" for your dedicated IP addresses to establish proper DNS infrastructure for your email campaigns. This helps ensure your emails reach intended recipients by creating the necessary DNS foundation that email service providers use to verify your sender reputation and improve inbox placement rates.

Setting up "A records" is a critical step in email infrastructure that works alongside PTR records to meet industry standards for email authentication, helping protect your domain reputation and optimize email deliverability performance.

The "A record" is only required if your account is set up with new (and not existing) dedicated IP addresses. If you are sending entirely from Maropost’s shared IP address pool, then disregard this section.

"**A record**" is a type of DNS record that tells the world what IP address your domain belongs to. It should be a subdomain of your From domain. You will need one subdomain for each dedicated IP address that Maropost has assigned to you. 

E.g., if your From domain is “example.com” (replace with your actual From domain in practice) and you have two dedicated IP addresses, then you will need two subdomains of “example.com,” such as: mta1.example.com  and mta2.example.com.

> **Note:** **Note:** Remember to replace "example.com" with your actual domain.

Maropost will need to know exactly what subdomains you have assigned and which ones point to which IP address so we can set up the corresponding PTR records. The "A records" and PTR records must match, as this is a general industry requirement for sending emails.

> **Important:** **Important: **Notify your Customer Success Manager as soon as you have set up your "A record." Be sure to specify which subdomain you have assigned to which IP address so that Maropost can set up the proper PTR records.

## Related Articles

**Email Infrastructure Setup:**

- [Dedicated IP Assignment](https://galaxy.maropost.com/kb/articles/911-dedicated-ip-assignment) - Understanding dedicated IP configuration
- [Automatic Provisioning of SSL Certificate for Link Tracking Domains](https://galaxy.maropost.com/kb/articles/956-automatic-provisioning-of-ssl-certificate-for-link-tracking-domains) - SSL setup for email tracking
- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Complete email infrastructure guidelines

**Deliverability & Troubleshooting:**

- [13 Mistakes That Will Land Your Emails in Spam](https://galaxy.maropost.com/kb/articles/1722-13-mistakes-that-will-land-your-emails-in-spam) - Avoid common deliverability issues
- [Deliverability FAQs](https://galaxy.maropost.com/kb/articles/647-deliverability-faqs) - Common email delivery questions and solutions