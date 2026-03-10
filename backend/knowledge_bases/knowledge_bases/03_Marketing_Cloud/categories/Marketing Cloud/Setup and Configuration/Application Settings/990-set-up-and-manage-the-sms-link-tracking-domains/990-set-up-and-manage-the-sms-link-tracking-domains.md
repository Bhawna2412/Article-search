---
title: "Set Up and Manage the SMS Link Tracking Domains"
articleID: 990
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Set Up and Manage the SMS Link Tracking Domains

You can configure SMS link tracking domains to maintain sender reputation and increase click-through rates for your SMS campaigns. This helps optimize deliverability performance by using branded domains that recipients trust while protecting against the risks associated with commonly used tracking domains that could be blacklisted.

When properly configured, branded link tracking domains create a trustworthy impression on SMS recipients and help ensure your messages achieve better engagement rates.

An **SMS Link Tracking Domain** is a domain used to track the SMS campaigns sent from your account. Setting up customized link tracking domains helps you maintain your sender’s reputation, increase deliverability, and increase click-through rates in the long run.

By using branded link tracking domains, not only do you create a trustworthy impression on your SMS recipients, but you also isolate yourself from commonly used tracking domains that run the risk of being misused by spammers, thereby causing a domain to be blacklisted.

## Managing SMS Link Tracking Domains

You can set up and manage the custom domains on the **SMS Link Tracking Domains** page. To access this page, click your username in the top-right corner of the application, and then from the profile drop-down menu, select **Settings**. Then, on the **Settings** page, click on **SMS Link Tracking Domains.**

On this page, you can see all the previously added SMS link-tracking domains. Every listed domain shows its verification status. From the **Actions** drop-down menu, you can verify an unverified domain, delete a domain, and set a domain as the default domain for your account.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/smslinktrackingindex2.05T5g00000w7IpnEAE.png)

> **Note:** **Note:** A domain that is set as **default** will be used as the primary source of tracking domain for your SMS messages.

## Setting Up SMS Link Tracking Domain

To have a working SMS Link Tracking Domain, you must add the domain to your Marketing Cloud account and then perform a one-time verification.

### Adding a Domain

1. 
  Click your username on the top-right corner of the application, and then from the profile drop-down menu, select **Settings**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/addsmsdomainnav1.05T5g00000w7JJxEAM.png)
2. 
  On the **Settings** page, Click on **SMS Link Tracking Domains**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/addsmsdomainnav2.05T5g00000w7JKWEA2.png)
3. 
  On the **SMS Link Tracking Domains** page, click **NEW DOMAIN**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/addsmsdomain1.05T5g00000w7JLjEAM.png)
4. 
  Add a unique SMS domain and click on **Next** to proceed ahead.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/addsmsdomain2.05T5g00000w7GjmEAE.png)
5. 
  Now, to complete the link setup, you’ll need to verify the domain. You may verify the domain now or do it later.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/addsmsdomain3.05T5g00000w7HeREAU.png)
6. 

### Verifying a Domain

Domain verification is mandatory and helps preserve the integrity of the site and the brand. As part of verifying the domain, you must ensure that your domain is pointing to the correct CNAME.

<details>
<summary>What is a CNAME?</summary>

**CNAME** (**canonical name**) is a DNS record that points from an alias (falsely named) domain to a canonical (official) domain. A CNAME record is normally used instead of an A record when a domain or subdomain is an alias of another domain.

</details>

Follow the steps below to verify the CNAME records of your SMS Link Tracking domain:

1. 
2. 
3. 
  Copy the **CNAME Hostname** from the Domain verification page of your Marketing Cloud account and paste it into the **Label** or **Host** field of the DNS record. Next, copy the **CNAME value** from the Domain verification page of your Maropost account and paste it into the **Destination** or **Target** field of the DNS record.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/verifysmsdomain1.05T5g00000w7I2NEAU.png)
4. 
  Now go back to your domain verification page on Marketing Cloud and finish verification by clicking **VERIFY CNAME**.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/verifysmsdomain2.05T5g00000w7JWvEAM.png)

## Related Articles

**SMS Campaign Management:**

- [Creating SMS Campaigns](https://galaxy.maropost.com/kb/articles/998-creating-sms-campaigns) - Build effective SMS campaigns using your tracked domains
- [Introduction to SMS Campaigns](https://galaxy.maropost.com/kb/articles/1356-introduction-to-sms-campaigns) - Get started with SMS marketing fundamentals

**Contact Management:**

- [Creating SMS Contact Lists](https://galaxy.maropost.com/kb/articles/1126-creating-sms-contact-lists) - Organize SMS recipients for targeted messaging
- [SMS Campaign Compliance Settings](https://galaxy.maropost.com/kb/articles/1426-sms-campaign-compliance-settings) - Ensure regulatory compliance for SMS campaigns

**Multi-Channel Strategy:**

- [Mobile Messaging Overview](https://galaxy.maropost.com/kb/articles/1746-mobile-messaging-overview) - Comprehensive mobile messaging strategies and best practices