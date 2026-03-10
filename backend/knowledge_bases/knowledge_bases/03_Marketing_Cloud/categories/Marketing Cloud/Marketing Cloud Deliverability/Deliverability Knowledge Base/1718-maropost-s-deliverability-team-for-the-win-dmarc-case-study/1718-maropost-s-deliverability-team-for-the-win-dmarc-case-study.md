---
title: "Maropost’s Deliverability Team for The Win – DMARC Case Study"
articleID: 1718
category: "Marketing Cloud Deliverability > Deliverability Knowledge Base"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Maropost’s Deliverability Team for The Win – DMARC Case Study

You can learn from this real-world case study how proper DMARC implementation protects your sender reputation and ensures emails reach intended recipients' inboxes rather than spam folders. This demonstrates how email authentication significantly improves inbox placement and helps ensure email delivery, especially with major email providers like Microsoft that have enhanced their security protocols.

When properly configured, DMARC provides ISPs with clear guidance on handling authentication failures, which typically leads to better campaign performance and protects your domain reputation from being compromised by fraudulent email activity.

At Maropost, we are known for our high deliverability rate.

The secret to this high inboxing rate is a group of incredible deliverability experts working tirelessly with clients to make sure every email lands in the inbox. Recently, Maropost's deliverability team faced a new challenge, coming from Microsoft.

Read on to see how this challenge was conquered.

### **The Problem**

All of a sudden, emails that were previously in the inbox without a problem started getting flagged as phishing emails. We noticed that these emails started landing in junk folders only for Microsoft domains such as Hotmail, Outlook, MSN & Live, and Office 365. As a result, the client's deliverability rate dramatically dropped.

### **The Investigation**

Typically, phishing alerts are caused by one or two reasons: a failed email authentication (i.e SPF and/or DKIM not passing) or flagged bad link(s) that have been listed by a prominent blacklist for a spamming behavior.

However, upon investigation, our clients showed a low spam complaint rate and a high level of subscriber engagement. Even their SPF and DKIM were passing fine, and yet the emails were getting labeled as spam and landing in junk folders.

### **The Solution**

We implemented DMARC (Domain-based Message Authentication, Reporting & Conformance - an email authentication, policy, and reporting protocol) on the affected domains with a monitor policy (p=none) for all emails, and within 48-72 hours, we started seeing a massive improvement. Firstly, all the phishing alerts disappeared, and secondly, 100% of emails were being placed into inboxes. That's a big deal for both our clients and their customers.

In retrospect, Microsoft spam filters must have noticed fraudulent activity along with significant unauthenticated email traffic coming from specific domains. This possibly hurt the domain's reputation; however, adding DMARC removed the guesswork for ISPs on how to handle messages that failed authentication.

In the past, SPF & DKIM authentication was enough to protect domains, but that is no longer the case - domains must have DMARC authentication to have full protection from getting spoofed and used to send phishing emails. We were able to step in, implement new authentication policies, and prevent clients from hurting their domain reputation.

## Related Articles

**Email Infrastructure:**

- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Essential practices for optimal email inbox placement
- [13 Mistakes That Will Land Your Emails In Spam](https://galaxy.maropost.com/kb/articles/1722-13-mistakes-that-will-land-your-emails-in-spam) - Avoid common deliverability pitfalls
- [Dedicated Ip Assignment](https://galaxy.maropost.com/kb/articles/911-dedicated-ip-assignment) - Protect your sender reputation with dedicated IPs
- [A Record](https://galaxy.maropost.com/kb/articles/872-a-record) - Configure DNS records for proper email authentication