---
title: "Pre-Warmed IP Addresses: A Guide"
articleID: 1726
category: "Marketing Cloud Deliverability > Deliverability Knowledge Base"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Pre-Warmed IP Addresses: A Guide

You can evaluate pre-warmed IP options to potentially accelerate your email infrastructure setup, but understanding their limitations helps ensure optimal deliverability performance. Proper IP reputation management is essential for maintaining inbox placement rates, and pre-warmed IPs require careful evaluation to avoid deliverability risks.

Effective IP warming strategies help protect your sender reputation while scaling email volume safely. When properly implemented with domain authentication and gradual volume increases, these practices can enhance your email marketing effectiveness by establishing trust with ISPs and optimizing inbox placement rates.

Most email marketers know the importance of IP warm-up. But what about a pre-warmed IP? A pre-warmed IP can save you time, but how will it affect your deliverability?

It's important for email marketers to understand pre-warmed IPs so they can avoid making mistakes that can jeopardize their ability to inbox.

Though it is important to note that each email marketing case is different, and you should consult a deliverability expert to help you with this process.

In most cases, pre-warmed IPs should be avoided and only used under certain conditions, which we will get to below.

But first, what is a pre-warmed IP?

### What is a Pre-Warmed IP?

A pre-warmed IP is an IP that has already sent some emails and gained some reputation.

Most ESPs (email service providers) use a shared pool of IPs to send emails for small and low-volume senders. An ESP can then take an IP from this shared pool and allocate it to a client to use as a pre-warmed dedicated IP.

If you plan on using this IP to send millions of emails right away, your emails will get flagged as spam and are likely to get blocked by ISPs as well.

Let's have a closer look at the reason for this.

### Why Pre-warmed IPs can be dangerous

ISPs (internet service providers like Gmail, Outlook, Yahoo, etc.) look at a variety of different factors to determine your reputation. Although IP reputation is an important factor, it is not the only one. Domain reputation is another critical factor in deliverability, and regardless of how warm your IP address is, if your domain is new and has not established a reputation, your deliverability will definitely suffer.

Using a pre-warmed IP can be tempting to save time from a new ESP, but to achieve optimal deliverability and high performance, you will have to go through the warm-up process for your domain and IP.

The other reason email marketers need to be careful with pre-warmed IPs is that ISPs can detect sudden changes in sending volumes from an IP.

If an IP is used to send 10,000 emails per month and the volume increases dramatically to 30,000 per month, then the ISP will flag this as suspicious behavior.

Warming up your own IPs can be a lengthy process, but not following the warm-up procedure can highly increase the likelihood of jeopardizing your deliverability.

### When can you use a Pre-warmed IP?

The only case that you can possibly use a pre-warmed IP and have some benefit is when you have to add additional IPs to an existing IP group, where you already have established a solid domain and IP reputation. In this case, you can introduce a pre-warmed IP to your group of already warm IPs. This would still cause some minor friction in the beginning, but over time, the ISPs will recognize the traffic from new pre-warmed IPs as part of the already warmed IP group.

As you can see, it's important for email marketers to be aware of the pitfalls of using pre-warmed IPs. It is more important for email marketers to have a deliverability specialist who can help with the particulars of each situation.

## Related Articles

**Email Infrastructure:**

- [Set Up and Manage Sending Domains](https://galaxy.maropost.com/kb/articles/1-set-up-and-manage-sending-domains) - Configure domains for better deliverability
- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Optimize email delivery rates

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Apply infrastructure setup to campaigns
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns with proper infrastructure

**Analytics & Reporting:**

- [A/B Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Monitor deliverability impact on performance