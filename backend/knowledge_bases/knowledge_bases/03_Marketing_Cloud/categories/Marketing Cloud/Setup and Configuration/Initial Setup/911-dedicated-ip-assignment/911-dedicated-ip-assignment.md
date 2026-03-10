---
title: "Dedicated IP Assignment"
articleID: 911
category: "Setup and Configuration > Initial Setup"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Dedicated IP Assignment

Proper IP assignment helps ensure optimal email deliverability by matching the number of IP addresses to your sending volume requirements. Using the appropriate number of IPs helps maintain sender reputation with mailbox providers, as too few IPs can create deliverability bottlenecks, while too many can raise flags that resemble spam distribution tactics.

Understanding these volume-to-IP ratios enables you to configure your email infrastructure for consistent inbox placement while avoiding the reputation risks associated with improper IP allocation strategies.

**IP Assignment** is the process of determining the number of IP addresses required to deliver an email successfully.

As a sender, assigning the appropriate number of IPs is an important part of developing a positive reputation with the mailbox providers. Like warming, IP assignment is determined by a variety of factors; some of these factors include daily/weekly volume, mailing stream (marketing versus transactional/triggered), sender reputation, and ISP distribution.

The following table shows the appropriate number of IPs required to send the different email volumes successfully:

| **Total Weekly Volume** | **IPs** |
| --- | --- |
| 75,000 | 1 |
| 100,000 | 1 |
| 200,000 | 1 |
| 300,000 | 1-2 |
| 400,000 | 1-2 |
| 500,000 | 1-2 |
| 1,000,000 | 2-3 |
| 2,000,000 | 3-4 |
| 3,000,000 | 3-4 |
| 4,000,000 | 5-6 |
| 5,000,000 | 5-6 |
| 6,000,000 | 5-6 |
| 7,000,000 | 6-7 |
| 8,000,000 | 6-7 |
| 9,000,000 | 6-7 |
| 10,000,000 | 7-8 |
| 15,000,000 | 8-9 |
| 20,000,000 | 9-10 |
| 25,000,000 | 10-11 |
| 30,000,000 | 11-12 |

> **Note:** **Note:** Sending from more IPs than volume dictates can bring a sender’s reputation into question. Spammers employ a process called snowshoeing, where they try to lessen their footprint by sending their volume over a disproportionate number of IPs. As such, it is important to only utilize as many IPs to send your mail as are required.
> 
> Some mailbox providers have very strict limits on the amount of email traffic they allow over a specific period of time. Understanding your email list composition is a key component to understanding how many IPs are necessary to deliver your mail in a timely manner.

## Related Articles

**Email Infrastructure:**

- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Essential practices for dedicated IP management
- [13 Mistakes That Will Land Your Emails In Spam](https://galaxy.maropost.com/kb/articles/1722-13-mistakes-that-will-land-your-emails-in-spam) - Avoid reputation damage with dedicated IPs
- [Deliverability Faqs](https://galaxy.maropost.com/kb/articles/647-deliverability-faqs) - Common questions about IP assignment

**Technical Setup:**

- [A Record](https://galaxy.maropost.com/kb/articles/872-a-record) - DNS configuration for dedicated IP setup
- [Automatic Provisioning Of Ssl Certificate For Link Tracking Domains](https://galaxy.maropost.com/kb/articles/956-automatic-provisioning-of-ssl-certificate-for-link-tracking-domains) - Secure your dedicated IP infrastructure