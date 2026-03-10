---
title: "Email Guidelines for Major Internet Service Providers"
articleID: 1728
category: "Marketing Cloud Deliverability > Deliverability Knowledge Base"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Email Guidelines for Major Internet Service Providers

You can optimize your email campaigns by following ISP-specific guidelines to significantly improve delivery rates across Gmail, Yahoo, Outlook, and other major email providers. Understanding each ISP's unique requirements helps ensure your marketing messages consistently reach subscribers' inboxes while maintaining strong sender reputation across different email platforms.

ISP compliance strategies help maximize your email marketing effectiveness by adapting your campaigns to meet the specific technical and content requirements of each major email provider. When properly implemented, these practices typically lead to better inbox placement rates and improved engagement across your entire subscriber base.

If you're sending a lot of emails, you want to make sure that you're adhering to the guidelines provided by each of the major Internet Service Providers (ISPs). Each ISP has different criteria as to what it considers spam. Instead of heading to each ISP's website to get the guidelines, we've pulled the most important tips to ensure that, regardless of which ISP your customers use, they'll receive your emails in their inbox.

**Here are the ISPs that we'll be covering below:**

- Gmail
- AOL
- Yahoo
- Apple
- Hotmail/Outlook

## Gmail Email Guidelines

In 2016, Gmail users surpassed 1 billion. If you want to make sure that your emails are getting into Gmail users' inboxes, you'll want to follow the guidelines below:

If you're sending group emails  and ding group emails  and you get this error, "Message rejected by Google Groups", check out the group [**email guidelines**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.google.com%2Fa%2Fanswer%2F168383):

**About Gmail Email Categories**

Gmail allows users to move messages into different categories, and over time, Gmail learns the user's preferences and uses those preferences to automatically classify emails.

Here are the options for your emails:

- Primary
- Social
- Promotions
- Updates
- Forums

### Step 1: Use Postmaster Tools

Gmail gives users the ability to diagnose their own delivery or spam issues. You have access to the postmaster tool, which gives you metrics on reputation, spam rate, feedback loop, and other parameters that can help you identify and fix delivery or spam filter issues. Here is a link to Postmaster Tools.

### Step 2: Make sure bulk mail gets classified correctly

To ensure your emails get inboxed properly, you'll want to have a separate email address for your promotional emails, financial transactions, as well as other addresses.

It's good practice to keep those email addresses separate in general. It'll help Gmail classify your emails into the right categories.

### Step 3: Make sure your emails follow all the criteria:

Head over to [**Gmail's guidelines website to fulfill the rest of the requirements to ensure your emails are fully authenticated**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F81126%3Fhl%3Den) by Gmail.

## AOL Email Guidelines

AOL remains a major ISP, especially for Microsoft-based domains.   The best way to ensure you have a good reputation is to send timely and relevant emails to an active and engaged audience. Below are some suggested best practices for sending mail to AOL members. These best practices should help improve your sender reputation, but they do not guarantee Whitelisting or email delivery.

### Segregate IPs

Don't send bulk/marketing email from the same IPs you use to send user mail, transactional mail, alerts, etc. Each IP you send from has a reputation. By segregating your IPs according to function, you help ensure that your mail receives the best delivery possible.

### Spam Complaints

When users click "report spam", you can get a copy of the spam complaint through our Feedback Loop (FBL) system. Ensure that you have an active FBL on each of your IPs and that you're processing the complaints quickly. Many senders will treat a spam complaint as an unsubscribe and remove a name from their mailing list if the user clicks "report spam." There are several third-party tools available to help you manage your FBL.

Head over to [**AOL's official guidelines website to get the rest of the email verifications**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fpostmaster.aol.com%2Fbest-practices).

## Yahoo Email Guidelines:

The key mission of Yahoo Mail is to deliver messages that people want to receive and filter out the messages they don't. The easiest way to make sure your messages are delivered is to avoid looking like a spammer.

Follow these best practices and tips to help your mailings reach their intended Yahoo Mail audience.

Yahoo separates its guidelines into **three buckets** :

Mailing List Management, Server Side Configuration, and Bulk Mail Authentication best practices.

### Mailing list management: Review email content for common characteristics of spam

- Test your emails' visual look with image placeholders. Many users won't see images in your email by default.
- Link to domains, not IP addresses.
- Use standard ports.
- Don't include: HTML forms, JavaScript, or embedded objects (like Flash or ActiveX).

### Server-side configuration: Separate your mail streams by IP address and domain

- Have separate IPs and streams depending on your email content type.
- Shared email services can have multiple domains using one IP to send email.
- If the same IPs are sending unsolicited commercial email, and your presumably valid email, then your reputation can be impacted.

### Bulk mail authentication best practices: Review SMTP reply codes often

- If your messages are being blocked, look closely at any [**SMTP error codes**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsenders.yahooinc.com%2Fsmtp-error-codes%2F) our mail servers are returning and make sure you're addressing the problem:
- Don't retry 5xx messages - Retrying permanent errors increases the chances your mail will be de-prioritized.
- Retry 4xx messages - This is a temporary error.
- Enroll in our feedback loop - If you're signing your emails with DKIM or DomainKeys, our [**Complaint Feedback Loop program**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsenders.yahooinc.com%2Fcomplaint-feedback-loop%2F) can help you track and manage your spam complaint rates.

Visit here for the rest of the [**best bulk email verification guidelines for Yahoo**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsenders.yahooinc.com%2Fbest-practices%2F).

## **Apple Email Guidelines**

A lot of people are also using iCloud for their email. If their emails end with mac.com, me.com, and icloud.com, they're using iCloud as their ISP. If you want to ensure that anyone with an iCloud email will receive your email without fail, all you have to do is simply follow the criteria provided by Apple on their website.

**Here are some of the tips provided by Apple:**

- Send only to recipients who explicitly subscribed to your emails (not list purchases, list rentals, or email appends).
- Offer an unsubscribe link, so that the recipient can unsubscribe immediately.
- Ensure emails are compliant with [**RFC 5322**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc5322).
- Publish reverse DNS with your domain to help identify your IP addresses.
- Use consistent sending IP addresses and domains for your bulk email, but do segment marketing and transactional email streams.
- Use a consistent From: name and address to clearly identify your brand.
- Make use of the Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) to authenticate your emails.

A lot of ISPs have a Feedback Loop to catch spam however, iCloud does not have a Feedback Loop. As a result, they highly recommend to:

- Periodically suppress inactive or disengaged subscribers from your mailing list.
- Remove addresses that bounce consistently.
- Honor unsubscribe requests as soon as possible.

To see all the other guidelines provided by Apple, head over to their [**website here**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsupport.apple.com%2Fen-ca%2Fht204137).

## Hotmail/Outlook Email Guidelines

The last major ISP that we'll cover here is Hotmail/Outlook. To get the best deliverability, you want to adhere to the following policies set up by Outlook themselves:

They break their policies into the following sections:

### General Microsoft Policies

Email sent to Outlook.com users must comply with all Microsoft policies governing email transmission and use of Outlook.com.

### Governmental Regulations

Emails sent to Outlook.com users must adhere to all applicable laws and regulations governing email communications in the applicable jurisdiction.

### Technical Guidelines

Email sent to Outlook.com should comply with the applicable recommendations listed in the documents below (some links are only available in English)

### Authentication

Emails sent to Outlook.com users should include Sender ID authentication. While other forms of authentication are available, Microsoft currently only validates inbound mail via SPF and Sender ID authentication.

### Reputation Management

Senders, ISP's and other third-party senders and service providers should actively manage the reputation of your outbound IPs. To get all the policies, please head to the [**Outlook website**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsendersupport.olc.protection.outlook.com%2Fpm%2Fpolicies.aspx).

## Related Articles

**Email Infrastructure:**

- [13 Mistakes That Will Land Your Emails In Spam](https://galaxy.maropost.com/kb/articles/1722-13-mistakes-that-will-land-your-emails-in-spam) - Avoid common deliverability pitfalls across all ISPs
- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Comprehensive strategies for optimal email delivery performance
- [Dedicated IP Assignment](https://galaxy.maropost.com/kb/articles/911-dedicated-ip-assignment) - Improve sender reputation with dedicated IP configuration

**Technical Setup:**

- [A Record](https://galaxy.maropost.com/kb/articles/872-a-record) - Essential DNS configuration for email authentication
- [Automatic Provisioning Of SSL Certificate For Link Tracking Domains](https://galaxy.maropost.com/kb/articles/956-automatic-provisioning-of-ssl-certificate-for-link-tracking-domains) - Secure link tracking for better deliverability