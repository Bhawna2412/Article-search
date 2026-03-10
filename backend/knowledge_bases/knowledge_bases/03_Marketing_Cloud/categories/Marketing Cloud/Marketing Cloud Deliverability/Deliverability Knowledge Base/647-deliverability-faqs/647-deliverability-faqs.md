---
title: "Deliverability FAQs"
articleID: 647
category: "Marketing Cloud Deliverability > Deliverability Knowledge Base"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Deliverability FAQs

Deliverability FAQs help you protect your sender reputation and ensure your marketing emails consistently reach recipients' inboxes rather than spam folders. This knowledge helps optimize email marketing ROI by addressing the most common deliverability challenges that can significantly impact campaign effectiveness and customer engagement.

When you understand and apply proper deliverability practices, your email campaigns typically perform better than those without this foundation, often achieving improved inbox placement rates and stronger subscriber engagement through better authentication and list hygiene practices.

### What are considered 'spammy' email elements?

- Avoid words and phrases that communicate urgency, like Act now, Buy today, This won't last etc, in the subject line
- 
  Avoid all caps and excessive exclamation points
- 
  Keep the image-to-text ratio balanced
- 
  Limit the number of URLs
- 
  Avoid unnecessary code in your templates
- 
  Keep email size low (below 100 kb)

What determines the 'spamminess' of these elements really comes down to two factors: ISPs and the recipient. That's because** each ISP has its own standards for filtering spam.**

On the other hand, if your emails reach the inbox, but your recipients consistently don't engage positively with them, you have a higher likelihood of being marked as spam by ISPs-that's why your [**subject line is critical**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.maropost.com%2Fblog%2Fhow-to-create-the-perfect-email-nurture-campaign-in-5-easy-steps%2F).

### What is Email Authentication?

It is the process of attempting to verify the digital identity of the sender of a communication. The most common forms of authentication are SPF, DKIM, and DMARC.

### What are SPF, DKIM, and DMARC?

**Sender Policy Framework** (SPF) is an email authentication method that helps to identify the mail servers that are allowed to send email for a given domain. By using SPF, ISPs can identify email from spoofers, scammers, and phishers as they try to send malicious emails from a domain that belongs to a company or brand.

**DomainKeys Identified Mail **(DKIM) is an email authentication method that uses a digital signature to let the receiver of an email know that the message was sent and authorized by the owner of a domain

**Domain-based Message Authentication, Reporting & Conformanc**e(DMARC) is an email authentication that is created by organizations to reduce email phishing and fraud. It is currently used by all major mailbox providers, including Google, Verizon Media Group, and Microsoft.

### What is BIMI?

Brand Indicators for Message Identification or BIMI is an emerging email specification that enables the use of brand-controlled logos within supporting email clients. BIMI leverages the work an organization has put into deploying DMARC protection by bringing brand logos to the customer's inbox.

For the brand's logo to be displayed, the email must pass DMARC authentication checks, ensuring that the organization's domain has not been impersonated.

### Does adding an image of the signer at the bottom of an email up your spam score?

It shouldn't be an issue as long as you have a good image-to-text ratio, the image isn't too big, and you include alt text.

### Does it count as an open if someone reads the email in preview mode?

Email opens, in general, are under-reported. So, technically, previews do count, if only for a few percentage points. However, we recommend that you measure multiple KPIs to determine the success of your email campaigns, such as clicks, conversions, AND opens. This is the only way to truly know what's working and what's not.

### What do you consider the optimal email deliverability rate?

98% or higher. This means you have a healthy, engaged email list that is not being blocked by ISPs due to a poor sender score.

### What is an Email Bounce?

An email bounce signifies non-delivery of your email messages. When this happens, the sender will receive automatic notification of the delivery failure. This failure typically originates from the recipient's mail server for the reasons listed below:

- 
  Soft Bounces
- 
  Hard Bounces

**Soft Bounce vs. Hard Bounce**

A **soft bounce** means that the email address was valid, and the email message reached the recipient's mail server. However, it bounced back because of the following reasons:

- The mailbox was full (the user is over their quota)
- The server was down or technical issue
- Temporary rate-limited
- IP/Domain block

The Maropost platform is designed to continuously retry messages until the message is delivered. If a message is continuously deferred for an extended period of time, the platform will then add the affected email addresses to the soft bounce list.

For bounces that are a result of a recipient's mailbox being full, the platform will add the affected email address to the Do Not Mail (DNM) list for any messages after 10 consecutive unsuccessful deliveries.

A **hard bounce** occurs when the message has been **permanently rejected** because:

- The email address is invalid
- The email addresses don't exist

The Maropost platform is designed to add hard-bounced email addresses to the account's global DNM list to avoid any deliverability risks from sending to these email addresses again. What this means is that even if you send a message through us for that user, the platform will automatically exclude the user's email address when campaigns are being sent out, due to the fact that the platform now recognizes the address is no longer considered a "good" address.

Continuing to try to send to a known bad address will harm your reputation with the receiver, which is why Maropost's platform will prevent it.

### What is a Deferral?

Email Deferrals occur when the receiving mail server temporarily limits access to its system. This means your message won't get delivered immediately, but it may get delivered at a later time.

When a mailbox provider defers your message, Maropost will still attempt to deliver your message for several hours. If your message gets deferred after multiple retries for an extended period of time, it will be declared as a soft bounce. However, if the message gets successfully delivered within the retry window, it'll register as a delivered event.

### What is Email Address Harvesting?

The illegal and heavily frowned upon process of obtaining lists of email addresses to send bulk emails or spam. Harvesting can include purchasing lists and/or spam 'bots' scanning web pages for email addresses.

### What is a Bayesian Filter?

It's an anti-spam program that statistically evaluates the header and content of incoming email messages to determine the probability that an email is spam. It constantly learns and optimizes itself based on user behavior.

### What is a Blocklist?

List of IP addresses & domains of senders that have been listed as known sources of spam.

### What is a Block?

Blocking is an action taken by receiving servers and ISPs to stop incoming email from reaching the intended recipient. This is more prevalent in senders who have been reported to send spam or viruses. Certain content may be blocked as well if determined to be inappropriate.

### What is a Bulk Folder (also called Junk/Spam folder)?

A folder where many email clients send messages when they appear to be from spammers or contain spam.

### What is Cloudmark?

A spam filter company that uses a network of users as a feedback mechanism to identify and block spam. Their Global Threat Network is fed by various means, but most notably through their desktop spam filter and through "This is Spam" buttons that Mailbox Providers contribute through their Cloudmark Authority product.

### What are Content Filters?

Software filters that block email based on text, words, phrases, or header information within the email itself. The goal is to identify spam and filter it to the Bulk or Junk mail folders, although this sometimes results in false positives.

### What is an Email Client?

An application used to send, receive, store, and view email. Popular email clients include Outlook, Apple Mail, Yahoo! Mail, Thunderbird, Hotmail, Gmail, and so on.

### What is a False Positive?

A legitimate email message that is mistakenly rejected or filtered by a spam filter.

### What is a Feedback Loop?

It is a mechanism in which a mailbox provider forwards the complaints originating from their users to the sender's organization. Not all ISPs offer FBL programs to senders.

### What is Greylisting?

A method used by some mailbox providers to combat spammers. A receiving mail server using greylisting will temporarily reject any email from a sender it does not recognize. The receiver presumes that if the sender is legitimate, the originating server will most likely try again to send it later, at which time the receiver will accept it. Greylisting presumes that if the sender is a spammer, they will not retransmit their message.

### What is List Fatigue?

A condition producing diminishing results from a mailing list whose members are sent too many offers, or too many of the same offers, in too short a period of time.

### What is List Hygiene?

The act of maintaining a list so that hard bounces and unsubscribed names are removed from emails.

### What is List Bombing?

List bombing is a practice of signing up legitimate email addresses to hundreds or even thousands of different mailing lists, creating what amounts to a DDOS attack on the user's inbox.

### What is List-Unsubscribe?

The List-Unsubscribe header is the text you can include in the header portion of your messages, allowing recipients to see an unsubscribe button they can click if they would like to automatically stop future messages. List-Unsubscribe is currently being used by Gmail, Outlook.com/Hotmail, and Apple.

### What is Phishing?

Phishing refers to email scams whose purpose is identity theft. Identity thieves send fraudulent email messages with return addresses, links, and branding that appear to come from banks, credit card companies, and some of the most well-known websites.

### What is a Spam Trap?

A spam trap looks like a real email address, but it doesn't belong to a real person, nor is it used for any kind of communication. Its only purpose is to identify spammers and senders not utilizing proper list hygiene.

### What are Pristine Spam Traps?

Email addresses that are created solely to capture spammers (sometimes referred to as honey pots). These email addresses were never owned by a real person, do not subscribe to email programs, and will not make purchases.

Many spam trap operators will post (seed) pristine traps across the Internet on various participating websites. They are usually hidden in the background code of webpages and are acquired by a spambot scraping email addresses.

### What are Recycled Spam Traps?

Email addresses that were once used by a real person. These email addresses are abandoned email accounts that are recycled by Mailbox Providers as spam traps. Before turning an abandoned email address into a spam trap, Mailbox Providers will return unknown user error codes for a year.

Once Mailbox Providers reactivate (recycle) the abandoned email address, mail is once again allowed to be received by the email address.

### What is a Re-engagement Campaign?

An email campaign (sometimes also called a win-back campaign) that is sent to inactive or non-responders, in an attempt to win them back and get them engaging with your emails again in the form of opens, clicks, and conversions. A re-engagement campaign can be sent to inactives as a stand-alone campaign or as a series of campaigns.

### What is a Reply-to Address?

The email address that receives messages sent from users who click "reply" in their email clients.

### What are Role Accounts?

An email account that is associated with a department, office, position, or task.

### What is a Safe Sender List?

Email recipients (in most email clients) have the option to mark senders as Safe Senders, a practice also known as whitelisting. If your sending domain is on someone's Safe Senders list, your emails will usually reach the recipient unimpeded.

### What is the Sender Mail Transfer Protocol (SMTP)?

SMTP is an Internet standard protocol used for email transmission from sender to receiver. Mail Servers and Mail Transfer Agents use SMTP to send and receive mail.

### What is SNDS (Smart Network Data Service)?

Offered by Windows Live Hotmail, SNDS provides data to senders based on actual mail sent to Hotmail subscribers. Metrics reported include complaints, SmartScreen filter results, and spam trap hits.

### What is Spamhaus?

It is one of the largest anti-spam DNS blacklist services. Spamhaus is the world leader in supplying real-time, highly accurate threat intelligence to the Internet's major networks.

### What is Spoofing?

E-mail spoofing is the forgery of an e-mail header so that the message appears to have originated from someone or somewhere other than the actual source.

Illegitimate marketers use spoofing to disguise their identity in an attempt to commit fraud and avoid getting in trouble for sending spam. There are several email authentication practices currently in use to prevent spoofing.

### What is Whitelisting?

Whitelists are lists of commercial email senders with a good reputation and get preferential inbox delivery from many ISPs.

### What is WHOIS?

WHOIS is a TCP-based query/response protocol widely used for querying a database to determine the owner of a domain name, an IP address, or an autonomous system number on the Internet.

### What is the Gmail Postmaster Tool?

Google Postmaster is a free tool provided by Google that will tell you exactly what Gmail thinks of your domain and IP reputation (Good, Medium, Low, or Bad). It also provides access to performance & delivery metrics like delivery errors, spam reports, feedback loops, authentication, and encryption.

### Why does an email show as Delivered despite going to the Spam Folder?

Delivered means that the email was accepted by the receiving mail server, instead of being bounced. Receivers may accept email, and then route it to spam folders instead of the inbox, but that still counts as 'Delivered' because it didn't bounce. Inbox delivery is another level of deliverability.

### How is the Delivery Score calculated?

All Mails Sent - Bounced = Delivery Score

Sent emails include all emails that reach a customer's inbox/promotion/spam folder without bouncing. The bounce rate can further be classified into soft/hard bounces to help marketers understand their campaign's performance.

### Are there good days/times of the week to send out emails to customers or days/times that should be avoided?

It depends on your subscribers and your industry. Some companies have found that Thursday is a good day, for others, Sunday or Monday works best, and some swear by a different day. In other words, this is subjective based on subscribers and what you are providing in your emails.

As far as the **actual time of day**, that varies even more by subscriber preference.  There is no 'right' answer. For both day and time, testing is your best bet. Maropost has a few great features to help with this: Priority Send®, One-Time® (timezone optimization), Send Time Optimization, and Conversion Time Optimization.

**Priority Send**®, our most common send option, will send emails to your most engaged audience first, while your least engaged audience moves to the bottom of the send priority. This is our unique way of allowing our clients to put their best foot forward with every campaign to ensure the highest opportunity for inboxing.

**One Time**® will send your campaign according to your contacts' respective time zones, based on our "chasing the sun" algorithm. For example, if you have a list of customers that are in three different time zones, you can select your one-time send to occur **at the same specified time** in each of those time zones.

**Send Time Optimization** - This option sends the campaign to the recipients at the time or day of the week when they 'usually' read their emails. Set the default date and time when the campaign should be sent. This setting is used for sending to contacts who have little to no prior engagement history. It is also used to determine which date (or time) to send the email according to each contact's own prior email response history.

- Best Time - Sends the email on the specified date at the time of day that contacts typically read their own emails. The "best time" starts at the specified time and proceeds over the next 24-hour period. For example, if the campaign's default schedule is to be sent on Monday, Nov 26, 2018, at 9 AM ET, but a contact typically reads his emails at 7 AM ET, then he will receive his email the following day, Nov 27, 2018, at 7 AM ET.
- Best Day - Sends the email at the specified time of day on the day of the week that contacts typically read their own emails. The "best day" starts on the specified day of the week and proceeds over the next 7-day period. For example, if the campaign's default schedule is to be sent on Monday, Nov 26, 2018, at 9 AM ET, but a contact typically reads his emails on Sundays, then he will receive his email on the following Sunday, Dec 2, 2018, at 9 AM ET.
- Best Time and Best Day - Sends the email to contacts on the day of the week and time of the day that they typically read their own emails. Since "best day" is selected, the campaign will be sent over a 7-day period. For example, if the campaign's default schedule is to be sent on Monday, Nov 26, 2018, at 9 AM ET, but a contact typically reads his emails on Mondays at 6 AM ET, then he will receive his email the following Monday, Dec 3, 2018, at 6 AM

**Conversion Time Optimization** is perfect for e-commerce businesses that want to optimize a promotional campaign. This send option determines the optimal time to send a promotional email for each contact based on previous purchase history and when they are most likely to buy.

### What is Single and Confirmed/Double Opt-in?

**Single Opt-in** is when an individual enters their email information on a web form, giving you permission to send them emails. Based on this permission, the address is added to your email list, and you start sending emails to this new subscriber. This is considered to be the **bare minimum** requirement in permission-based marketing.

**Confirmed or Double Opt-in** starts with the same process of an individual signing up, but the initial email sent to the individual is to confirm that they did in fact sign up and/or that they want to continue to receive emails from you.

This confirmation is typically done by clicking on a link in the email. If they click on the link, they are added to your email list, and you start emailing them; if they do not click on the link, they are not added to your email list. This process is considered to be a best practice and the "gold standard" in permission-based marketing.

### What is a Segment?

A segment is a compilation of email addresses filtering subscribers based on specific criteria such as last opened, clicked, sent date, domain, etc. Criteria can be combined and/or determined based on Boolean logic (and, or, not). A segment can then be sent an email or used as a suppression to prevent subscribers from being emailed.

Segments themselves can be combined to provide "segments of segments." Segments can be "dynamic", meaning that they are always updating based on new data, or they can be static, only using data available when created or after updating manually.

### What is the CAN-SPAM Act?

A US Law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have you stop emailing them, and spells out tough penalties for violations.

### What is CASL?

CASL is an anti-spam law that will apply to all electronic messages (i.e., email, texts) organizations send in connection with a "commercial activity." Its key feature requires Canadian and global organizations that send commercial electronic messages (CEMs) within, from, or to Canada to receive consent from recipients before sending messages.

### What is GDPR?

The General Data Protection Regulation, or GDPR, is a European Union (EU) law that governs how organizations within and outside the EU handle the personal data of EU residents.

### What is CCPA?

The California Consumer Privacy Act gives consumers more control over the personal information that businesses collect about California residents.

### What is Clipping?

An email is clipped by Gmail when it is over 102KB in size. When this happens, you may see a sharp decrease in open rates. This is because open events are calculated when a tracking pixel is loaded at the bottom of an email; if the email has been clipped, then this open event will not register, and thus open rates will be underreported.

### Where can I find IP addresses for my account?

Maropost Marketing Cloud offers 2 types of IP addresses.

**Shared IPs** - These are the IP addresses managed by our postmaster/deliverability team across all the accounts in the cluster. These IPs are never visible to customers in UI, and are managed in our internal admin portal, being dynamically managed as per account requirements by the internal Maropost deliverability team.

To know your IP addresses, please reach out to the Maropost deliverability team at[postmaster@maropost.com](mailto:postmaster@maropost.com)

**Dedicated IPs** - These are paid IPs that customers opt for to ensure their email campaigns are specifically sent from their desired IP or IP ranges that facilitate a higher and consistent delivery reputation with the ISPs and allow the customers to have better control over their account sending & configuration.

To know your dedicated IP addresses, please reach out to the Maropost deliverability team at[postmaster@maropost.com](mailto:postmaster@maropost.com)

### How do I add an IP address?

Dedicated IPs are paid IPs, so to add an IP address to your account, please reach out to your client success account manager or drop an email to [success@maropost.com](mailto:success@maropost.com).

### How do I fix the error where no IP address is available for this account?

The 'no IP address available error' can arise due to various reasons, but mainly it shows up due to the following reasons:

1. 
  Incomplete DNS setup in a fresh account.
2. 
  Your account configuration is set to send from brands only. This means that the IPs are designated in your account to send branded campaigns only so any non-branded email campaign or a non-branded send email element within the journey will trigger this error message.

To fix this error, please reach out to the Maropost deliverability team at[postmaster@maropost.com](mailto:postmaster@maropost.com)

## Related Articles

**Email Infrastructure:**

- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Comprehensive guide to maintaining excellent deliverability
- [13 Mistakes That Will Land Your Emails In Spam](https://galaxy.maropost.com/kb/articles/1722-13-mistakes-that-will-land-your-emails-in-spam) - Common pitfalls to avoid for better inbox placement
- [DNS Setup](https://galaxy.maropost.com/kb/articles/957-dns-setup) - Configure domain authentication for better deliverability
- [Dedicated IP Assignment](https://galaxy.maropost.com/kb/articles/911-dedicated-ip-assignment) - Learn about dedicated IP options and benefits

**Campaign Management:**

- [8 Lessons Of Email Marketing You Can Learn From Can](https://galaxy.maropost.com/kb/articles/1721-8-lessons-of-email-marketing-you-can-learn-from-can) - Apply CAN-SPAM compliance principles to campaigns
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns for better deliverability tracking