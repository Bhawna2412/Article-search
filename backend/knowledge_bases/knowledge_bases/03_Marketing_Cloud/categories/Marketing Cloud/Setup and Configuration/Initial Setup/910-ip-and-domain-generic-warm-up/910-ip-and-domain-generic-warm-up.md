---
title: "IP and Domain Generic Warm-Up"
articleID: 910
category: "Setup and Configuration > Initial Setup"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# IP and Domain Generic Warm-Up

**IP** and **Domain Warm-Up** helps establish sender reputation with email service providers, which significantly improves inbox placement for your marketing campaigns. Following a structured warm-up schedule with your most engaged subscribers first helps build trust with ISPs and typically leads to better long-term deliverability performance compared to immediately sending high volumes to your entire list.

This gradual approach protects your sender reputation while enabling you to scale email volumes safely, helping ensure your campaigns consistently reach subscribers' primary inboxes rather than being filtered to spam folders or blocked entirely.

As a new sender, we recommend you go through a deliverability warm-up to build your domain/IP reputation. Ramp-up involves sending a limited number of messages per day to develop your domain and IP reputation at Maropost.

## How to Warm-Up an IP/Domain?

Any time a new client comes to Maropost or an existing client wants to use a new domain/IP, they must go through a warm-up period.

Maropost recommends using the following best-practice warm-up, typically performed over a few weeks. Starting with your most engaged subscribers, you gradually "step up" your subscriber list by adding more subscribers regularly until you reach your full subscriber volume.

![A blue squares in a rowDescription automatically generated](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00001K6ga7EAB.jpg)
The benefit of the stepped approach is that you don't begin sending emails to a lot of subscribers at once. Plus, sudden increases can look suspicious to ISPs, and they could potentially block your messages.

It is best to begin sending a low to moderate volume, eventually working your way up to larger volumes. This gives the receiving email providers a chance to closely observe your sending habits and record how your recipients engage with your email.

## Generic Warm-Up Schedule

The following plan is recommended for a list size of up to 100,000 subscribers over 20 mailing days. For smaller list sizes, we recommend adjusting your volume sizes in a similar stepped approach (your warm-up period will be much faster). 

| **Mailing Day(s)** | **Total Recommended Send Volume** |
| --- | --- |
| 1 | 2,000 |
| 2 | 3,600 (+1,600) |
| 3 | 5,800 (+2,200) |
| 4 | 8,500 (+2,700) |
| 5 | 12,500 (+4,000) |
| 6-7 | 17,500 (+5,000) |
| 8-9 | 24,000 (+6,500) |
| 10-11 | 32,000 (+8,000) |
| 12-13 | 40,000 (+8,000) |
| 14-16 | 50,000 (+10,000) |
| 16-17 | 65,000 (+15,000) |
| 18-19 | 85,000 (+20,000) |
| 20 | 105,000 (+20,000) |

## How to Implement the Warm-Up Plan?

We recommend the following implementation strategies for IP/domain warm-up:

- **Engaged Users First**: Send to your most engaged users first, i.e., the subscribers who open and click your emails. This will help to build your reputation quickly.
- **Email Volume Expansion: **It is best to avoid expanding to less engaged audiences until performance is healthy enough to merit such an expansion. Otherwise, you might run into or worsen existing performance issues.
- **Mailing Day(s)**: Each day you send an email refers to the Mailing Day (not the calendar day). For example, if you send emails three days a week (M, W, F), Monday would be Day 1, Wednesday Day 2, and Friday Day 3. The following Monday would be Day 4. The frequency at which you send emails is dependent on your business requirements (just ensure you watch your metrics and adjust your warm-up plan as needed).
- **Send Volume: **These are the total emails per day and step up incrementally. For example, if on Mailing Day 1 you send emails to 2,000 subscribers, on Mailing Day 2 you would send to a total of 3,600 subscribers (including the 2,000 from Mailing Day 1, so only adding an additional 1,600 subscribers to your list).

> **Note:** **Pro Tip:**
> 
> **Bulking and Delays: **During the warm-up period, bulking, bounces, and delays may occur. This is normal, especially with Yahoo, AOL, Gmail, Microsoft, and Comcast. The key is to keep sending emails to your (highly) engaged subscribers and temporarily reduce your volumes to less engaged subscribers to continue building your reputation.
> 
> **Watch your Campaign Reports: **Maropost includes detailed information (covered in the campaign reports section) that you can use to track the success of your campaigns. Use these reports to adjust your sending volumes if needed (reducing your engaged users again), but ensure you keep sending emails regularly to continue warming your domain.
> 
> **Warm-up schedules: **Warm-up time can vary greatly depending on several factors, including list age, list hygiene, spam reports, user engagement, content, and domain distribution. The warm-up above is meant to serve as a generic guide, and using it does not guarantee deliverability success.

## Related Articles

**Email Infrastructure:**

- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Essential practices for maintaining sender reputation
- [13 Mistakes That Will Land Your Emails In Spam](https://galaxy.maropost.com/kb/articles/1722-13-mistakes-that-will-land-your-emails-in-spam) - Avoid common deliverability pitfalls during warm-up
- [Deliverability Faqs](https://galaxy.maropost.com/kb/articles/647-deliverability-faqs) - Common questions about email deliverability

**Technical Setup:**

- [A Record](https://galaxy.maropost.com/kb/articles/872-a-record) - DNS configuration for domain authentication
- [Automatic Provisioning Of Ssl Certificate For Link Tracking Domains](https://galaxy.maropost.com/kb/articles/956-automatic-provisioning-of-ssl-certificate-for-link-tracking-domains) - Secure link tracking setup