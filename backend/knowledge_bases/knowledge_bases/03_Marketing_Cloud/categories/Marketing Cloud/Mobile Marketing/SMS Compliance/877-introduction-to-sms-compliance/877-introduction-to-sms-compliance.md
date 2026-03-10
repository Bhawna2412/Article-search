---
title: "Introduction to SMS Compliance"
articleID: 877
category: "Mobile Marketing > SMS Compliance"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-08-20
---

# Introduction to SMS Compliance

Text messaging is governed by an entirely different set of requirements compared to email. 

In the United States, text messaging governance is controlled by the **Federal Communications Commission** (**FCC**) because a cell phone is classified as a radio transmitter. The governing law is the **Telephone Consumer Privacy Act** (**TCPA**) because a cell phone is a telephone. In Canada, the law governing text messages is **Canada’s Anti-Spam Legislation** (**CASL**).

The laws governing SMS marketing are very strict, and the penalties for non-compliance are extremely heavy, more so than the enforcement and penalties assessed for non-compliance with laws governing email marketing. Therefore, ensuring compliance with the regulations is critical.

It is important to follow compliance guidelines when reaching out to your contacts via SMS. There are three different types of SMS messages, each with its own compliance regulations.

![smscompliance.png](https://us.v-cdn.net/6038474/uploads/2CZ7BHAK444H/smscompliance.png)

## Ineligible Use Cases

Before proceeding with this guide, first find out whether your intended use of SMS is eligible. Wireless carriers and government regulations are highly restrictive as to the allowed messages. Using SMS for any ineligible use case may result in a permanent suspension of your sending number and/or hefty fines.

Bear in mind also that the sharing and selling of end-user information (i.e., mobile numbers) with third parties for marketing purposes is forbidden. While there is no such prohibition regarding the capturing and sharing of email addresses, there is one for mobile numbers.

| High-Risk Financial Services | Get Rich Quick | Controlled Substances and/or Activities | Other |
| --- | --- | --- | --- |
| - Consumer loans  - Payday loans   - Short-term, high-interest loans   - Automobile loans   - Mortgage loans   - Student loans - Gambling - Sweepstakes - Stock Alerts - Cryptocurrency - Debt Consolidation or Reduction - Credit repair services | - Deceptive work-from-home programs - Multi-level marketing | - Cannabis - Alcohol - Tobacco - e-Cigarettes - E.D. medication | - Phishing - Fraud - Pornography - Sexual content - Profanity or hate speech - Firearms - Other types of deceptive marketing |

## Compliance Guidelines

### Opt-in Consent

Compliance with SMS marketing regulations requires express consent from your contacts. Whether you are capturing mobile numbers via a web form or using Maropost's 'Text-to-Join' capabilities, you are responsible for securing express consent from the mobile phone owners before you can subscribe them as a contact and send them text messages.

The most common means of acquiring consent and mobile numbers is from an online form. To ensure compliance with regulations, your online form MUST contain the following elements:

- Consumer consent must be collected by the direct (first) party sending the message. You are not allowed to send to mobile numbers that have been acquired through a third party.
- At the point of collection, there must be a clear description of what the person is opting in to receive when they provide their mobile phone number.
- An explicit opt-in checkbox to receive text messages.
- If you are sending BOTH transactional messages (e.g., alerts, confirmations, notifications, etc.) and marketing messages, then you must have separate opt-in checkboxes. Recipients must be allowed to opt in to transactional messages separate from marketing messages.
- A link to a Terms and Conditions page that explains what the SMS marketing program is all about.
- A link to your Privacy Policy page.
- The disclaimers about the text messages, along with the opt-in checkboxes, MUST appear as close as possible to the form field where recipients enter their mobile numbers.

You should also document opt-in consent by capturing and retaining the following data wherever possible:

- Timestamp of consent acquisition;
- Consent acquisition medium (e.g., cell-submit form, physical sign-up form, SMS keyword, etc.);
- Capture of experience (e.g., language and action) used to secure consent;
- Specific campaign for which the opt-in was provided.
- IP address used to grant consent;
- Consumer phone number for which consent to receive messaging was granted; and
- Identity of the individual who consented (name of the individual or other identifier (e.g., online user name, session ID, etc.)).

The example below shows proper compliance for a web capture page for mobile numbers. Note how each of the required elements is clearly explained in the form.

![smscompliance1.png](https://us.v-cdn.net/6038474/uploads/H6VHUIQ18OTC/smscompliance1.png)

### Terms and Conditions

Your website’s online Terms and Conditions page **must include** a section that specifically addresses your text messaging program. This is the first page that wireless carriers will look at when evaluating whether or not you are compliant with their requirements. Consult with your legal team to ensure the proper verbiage. At a minimum, the T&C must mention the following:

- An outline of the maximum message frequency subscribers may receive
- A statement indicating that the carriers are not liable for any delayed or undelivered messages
- A statement indicating that message and data rates may apply to any text/SMS communication
- Information on how a user/subscriber can opt out (for example, “reply STOP to opt out")

### Privacy Policy

Your website’s online privacy policy is the second page that wireless carriers look at when evaluating the compliance of your text messaging program. This page must include a specific reference to your text messaging program and must include language stating that there will be no sale or dissemination of end-user information to third parties.

## Campaign Verification

All SMS campaigns in the United States must be done using either toll-free numbers or 10-digit long codes ("10DLC") specifically approved for commercial messaging. Maropost recommends toll-free numbers because they are more cost-effective than 10DLC, and the approval process is much shorter and cheaper.

All commercial text messaging from toll-free numbers requires verification from an independent agency that all wireless carriers use for regulating message traffic on their networks. 

In the United States, marketers are allowed to send text messages using unverified toll-free numbers, albeit at a low throughput rate and low deliverability rate (see info panel below). 

In Canada, verification is required for ALL commercial messages originating from toll-free numbers. Any message originating from an unverified toll-free number will be blocked by the Canadian carriers.

There is currently a **5-7 week backlog** for toll-free number verification. This delay exists because there is only one agency responsible for manually reviewing all verification submissions within the United States.

**Important Note:**

In the United States, marketers may still send messages while their toll-free numbers are being verified. You should fully understand the risks of sending messages while your toll-free numbers are unverified.

**“Restricted” Message Throughput (effective April 1, 2023)**

- **Daily Limit:** 500 messages per day (resets at 12:00 am PT daily).
- **Weekly Limit:** 1,000 messages per week (resets Sunday 12:00 am PT).
- **Monthly Limit:** 2,000 messages per month (month refers specifically to a calendar month).

Once the toll-free number exceeds its daily/weekly/monthly limit, any further messages sent before the reset time will be blocked. The response code is 795/4795 (tfn-not-verified). ***You will still be responsible for paying for these blocked messages.***

**“Pending” Message Throughput (effective April 1, 2023)**

- **Daily Limit:** 2,000 messages per day (resets at 12:00 am PT daily).
- **Weekly Limit:** 6,000 messages per week (resets Sunday 12:00 am PT).
- **Monthly Limit:** 10,000 messages per month (month refers specifically to a calendar month).

“Pending” means that the SMS campaign brief has been submitted for review.