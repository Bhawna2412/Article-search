---
title: "Set Up and Manage Link Tracking Domains"
articleID: 1430
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Set Up and Manage Link Tracking Domains

You can improve your email marketing analytics and maintain brand consistency by setting up link tracking domains that use your own domain for email links. This protects your sender reputation by ensuring all links in your emails appear to come from your branded domain rather than a third-party service, which typically leads to better engagement rates and inbox placement. When properly configured, link tracking domains enable comprehensive click analytics while maintaining subscriber trust.

Setting up link tracking domains is required before you can send any email campaigns, making this a foundational step for effective email marketing. This configuration helps ensure your emails reach intended recipients while providing the data insights needed to optimize campaign performance over time.

A **Link Tracking Domain** is a domain used to track the emails sent from your account. You can set up multiple link tracking domains in your account; however, you are required to set up at least one link tracking domain before you can send any emails.

## Managing Link Tracking Domains

The Link Tracking Domains index page is where you can add and verify the domains for tracking your sent emails. The index page lists all the domains that have been previously added, and you can use the **Actions** widget to manage these domains.

Click your username in the top-right corner of the application, and from the drop-down menu, select Settings. Then, on the **Settings** page, in the DNS Setup section, click Link Tracking Domains.

![Link_Tracking_Domain_Index.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX5n.05T5g00000BkX5nEAF.png)

For each added domain, the following actions are available:

- **Verify Domain:** Once you have added a domain, you can always go back to the verification process using this action menu.
- **Set as Default:** Select the domain as the default domain.
- **Delete Domain:** Use this option to remove the Link Tracking Domain from your account.

## Setting Up Link Tracking Domains

The setup process includes:

- 
- Verifying the domain

### Adding a Domain

Follow the steps below to add a domain as a link tracking domain:

1. Click your username in the top-right corner of the application, and from the drop-down menu, select Settings.
2. 
3. 
4. Enter the domain name.
  ![Link_Tracking_Domain_-_Step_1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX5l.05T5g00000BkX5lEAF.png)
5. Click NEXT to go to the verification page.
  ![Link_Tracking_Domain_-_Step_2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX5m.05T5g00000BkX5mEAF.png)
6. 

### Verifying the Domain

Only a verified domain can be used for tracking emails. Hence, you must verify the link tracking domain before you can start sending emails.

#### **CNAME**

CNAME (Canonical Name Record) is a DNS record that is used to alias a domain name to a different domain name. It is useful when you want to direct users to the same information delivered on a separate URL.

Do the following to verify the CNAME of your link tracking domain:

1. 
2. 
3. 
  Copy the CNAME hostname from the Domain Verification page in the Maropost application and paste it into the Label or Host field of the DNS record.

  ![Link_Tracking_Domain_-_Verification.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX5j.05T5g00000BkX5jEAF.png)
4. 
5. 

## Related Articles

**Email Infrastructure:**

- [Set Up and Manage Sending Domains](https://galaxy.maropost.com/kb/articles/1-set-up-and-manage-sending-domains) - Configure domains for better deliverability
- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Optimize email delivery rates

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Apply infrastructure setup to campaigns
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns with proper infrastructure

**Analytics & Reporting:**

- [A/B Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Monitor deliverability impact on performance