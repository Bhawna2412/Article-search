---
title: "Set Up and Manage Sending Domains"
articleID: 1
category: "Setup and Configuration > Application Settings"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Set Up and Manage Sending Domains

Properly configured sending domains are essential for ensuring your email campaigns reach recipients' inboxes rather than spam folders. When you set up domain authentication correctly, this significantly improves inbox placement and protects your sender reputation, helping ensure your marketing messages consistently reach their intended audience. Email service providers use domain verification to distinguish legitimate business communications from spam, making proper domain setup a critical foundation for campaign effectiveness.

Setting up sending domains involves DNS configuration for SPF, DKIM, DMARC, and return path authentication. This establishes trust with email service providers and typically leads to better delivery rates compared to campaigns sent without proper domain authentication. The verification process helps optimize deliverability performance while building the sender's reputation necessary for long-term email marketing success.

A **Sending Domain** is part of an email header that brands use to send email campaigns to their clients. It includes a sender’s mailing (sending) address accompanied by a sending domain mentioned in the “From” field of the message heading.

Using a unique sending domain is essential because it can significantly help promote your brand's visibility in the email community. It also makes it easier for the email service provider (ESP) to distinguish your brand’s email from potential spam, ensuring your emails directly arrive in your client’s inbox rather than landing in their spam folder.

## Managing Sending Domains

The Sending Domains Index page is used to create and manage all your email campaign domains. Here, you can check the domain names, plus verify and delete them if you wish to do so.

1. 
  To access the Sending Domains module, open your Marketing Cloud application, click on your **username**, and choose **Settings** from the drop-down menu.

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5nK6MAJ.jpg)
2. 
  Under the DNS Setup section, click on **Sending Domains**.

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5n2kMAB.jpg)
3. 
  The Sending Domains Index page is displayed with a list of sending domains created previously in the account, along with their current status. Also, you can use the following options available in the **Actions** section while configuring your domains:
  - 
  - 
  - 

  📋 **Note**: You must select a default domain to be able to send non-branded campaigns.

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5nL4MAJ.jpg)

## Setting Up Sending Domains

Setting up a domain involves a two-step process. They are as follows:

1. 
2. 

> **Tip:** If you are new to DNS setup and want to learn more about it, we recommend reading our [**DNS configuration manual for beginners**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fmaroposttrial-my.sharepoint.com%2F%3Ab%3A%2Fg%2Fpersonal%2Fmanisha_maropost_com%2FESjoZRjoP_ZPrBPpgQTZ_G8BQYJuOEthGsk1cKC4WNkWWQ%3Fe%3Dbl0vGQ).

### Adding a Domain

Follow the steps shown below to add a sending domain to your Marketing Cloud account:

1. 
  From the Sending Domains Index page, click on the **New Domain** tab.

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5nLiMAJ.jpg)
2. 
  On the New Domain page, enter a suitable domain name (which is mandatory) that you wish to utilize as a sending domain. Ensure the sending domain name doesn’t start with a space or a capital letter. The domain name should be unique and should reflect the brand you are promoting to your audience. Click on **Next** to proceed ahead.

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5nMbMAJ.jpg)
3. A domain verification page is displayed from which you can either complete the validation process or click on **Done** to validate the sending domain at a later time.
  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5nMlMAJ.jpg)

### Verifying the Domain

You must verify the sending domain before using it to send emails. The following verifications are required: **SPF, DKIM, DMARC, Google Postmaster Tools,** and **Custom Return Path**.

#### **SPF** (Required)

The **Sender Policy Framework** (**SPF**) defines a standard for validating an email message sent from an authorized mail server to detect forgery and prevent spam.

Steps:

1. Go to your domain's DNS settings and create a **TXT**-type record.
2. 
  Copy the SPF hostname and value from the Domain Verification page of the Maropost application.

  ![SPF_Verification.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkX0F.05T5g00000BkX0FEAV.png)
3. Paste the copied information into the TXT record of your DNS settings. An SPF TXT record contains a list of all the IP addresses that are permitted to send emails on behalf of your domain.
4. 

#### **DKIM** (Required)

The **DKIM** (**DomainKeys Identified Mail**) authentication method helps the email receiver determine whether the email was sent from an authorized domain or not.

Steps:

1. Go to your domain's DNS settings and create a **CNAME**-type record.
2. 
  Copy the DKIM hostname and value from the Domain Verification page of the Maropost application.

  ![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5nNjMAJ.jpg)
3. Paste the copied information into the CNAME record of the DNS settings. Email servers can use this information to verify your email's DKIM signatures.
4. 

**Important**:

If you have previously verified the sending domain using a TXT-based DKIM record, we recommend switching to the CNAME record type to avoid future authentication errors and domain setup hassles. Once you verify the sending domains' CNAME records, your old TXT records are no longer required.

![Image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Y5nOXMAZ.jpg)

#### **DMARC** (Required)

**Domain-based Message Authentication, Reporting, and Conformance** (**DMARC**) is an email protocol that enables an organization to publish a policy that defines its email authentication practices and provides instructions to receiving mail servers on how to enforce them.

DMARC relies on the established SPF and DKIM standards for email authentication. So, if the SPF record test fails, then the DMARC record tells the receiver how the sender wants them to treat the email.

Steps:

1. Go to your domain's DNS settings and create a **TXT**-type record.
2. In the **TXT record name**, copy and paste the **DMARC hostname** from the Domain Verification page.
  ![DMARC_Verification.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/sendoman0.05T5g000013FFCIEA4.png)
3. 
4. 
5. 

#### **Google Postmaster Tools** (Recommended)

**Google Postmaster Tools** is a free tool that gives you access to insights about deliverability, reputation, and much more. To set up the tool, you must add your domain to Postmaster Tools and perform the subsequent verification and delegation steps as specified on the verification UI.

![Google_Postmaster_Verification.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/sendomain1.05T5g000013FGZMEA4.png)

#### **Custom Return Path** (Required)

A "**Return Path**" is a hidden email header that indicates the address to which the bounces and other email feedback are to be sent. A custom return path that aligns with your sending domain improves your deliverability and sending reputation. It also helps you achieve full DMARC alignment. One of the checks DMARC does is verification for alignment between the from domain and return path domain.

Steps:

1. 
2. 
3. On the Domain Verification page in the Maropost application, enable the **Custom Return Path** toggle and enter the full subdomain prefix in the Host field.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/sendomain2.05T5g000013FGfFEAW.png)
4. Copy the CNAME host from the Domain Verification page and paste it into the label or host field of the DNS record.
5. 
6. 

## Related Articles

**Email Infrastructure:**

- [Set Up and Manage Sending Domains](https://galaxy.maropost.com/kb/articles/1-set-up-and-manage-sending-domains) - Configure domains for better deliverability
- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Optimize email delivery rates

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Apply infrastructure setup to campaigns
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns with proper infrastructure

**Analytics & Reporting:**

- [A/B Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Monitor deliverability impact on performance