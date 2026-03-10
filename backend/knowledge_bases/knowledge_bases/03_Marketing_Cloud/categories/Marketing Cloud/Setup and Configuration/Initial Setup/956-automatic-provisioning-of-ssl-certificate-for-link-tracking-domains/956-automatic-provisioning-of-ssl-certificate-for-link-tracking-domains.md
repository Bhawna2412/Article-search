---
title: "Automatic Provisioning of SSL Certificate for Link Tracking Domains"
articleID: 956
category: "Setup and Configuration > Initial Setup"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Automatic Provisioning of SSL Certificate for Link Tracking Domains

**SSL Certificates** for your link tracking domains help ensure email delivery and protect sender reputation by maintaining secure, trusted links in your campaigns. This automated provisioning significantly improves inbox placement by eliminating potential security warnings that could impact deliverability performance and recipient trust.

When properly configured, SSL certificates help ensure emails reach intended recipients while maintaining a professional appearance and recipient confidence in your email communications.

SSL certificates ensure secure connections and are absolutely necessary for your link tracking domain. Maropost now procures the SSL certificates automatically for the link tracking domains to be used for email campaigns. The SSL certificates are also automatically renewed a few days prior to expiry. 

This feature is intended to automate the creation and management of your SSL certificates for the link tracking domain, so you have one less thing to do.

> **Important:** **Important: **The link tracking domain used in Brand is different, and the process for requesting it is still the same. That is, you must contact our Deliverability team at [**postmaster@maropost.com**](mailto:postmaster@maropost.com), and they will provision the SSL certificate for the link tracking domain to be used for the brand.

## Adding a Link Tracking Domain to the Account

To use the feature, you simply need to add your link tracking domain to your account, and the provisioning and renewal of the SSL certificate for the domain is done by Maropost.

![Link_Tracking_Domain.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWqw.05T5g00000BkWqwEAF.png)Here's how you add a link tracking domain to your account:

1. Click your user name in the top-right corner of the application, and from the drop-down menu, select Account Details.

2. On the Account Details page, select the **Account** tab.

3. In the Account Information section, enter your domain in the **Link tracking domain** field. 

> **Note:** **Note:** Make sure that you have already added the CNAME for your link tracking domain to the DNS settings.

4. Click **Save Changes**.

Upon saving, an SSL certificate is automatically provisioned within 5-10 minutes.

<details>
<summary>What to do if your DNS is restricting certificate authorities?</summary>

You must check with your IT department and ask if they have created any **Certification Authority Authorization** (**CAA**) records. The use of these types of records is to restrict which **certificate authorities** (**CAs**) are allowed to issue certificates for a domain.

If you are using **CAA records** to restrict certificate authorities for your link tracking domain, then you must add a CAA record to allow Maropost to automatically issue secure certificates for that domain.

For example, suppose your link tracking domain is **links.example.com** and you're using CAA records. You'll then need to create a CAA record that names [**letsencrypt.org**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fletsencrypt.org%2F) as a certificate authority.

</details>

## Related Articles

**Domain Setup:**

- [Set Up And Manage Link Tracking Domains](https://galaxy.maropost.com/kb/articles/1430-set-up-and-manage-link-tracking-domains) - Complete guide for link tracking domain configuration
- [DNS Setup](https://galaxy.maropost.com/kb/articles/957-dns-setup) - Essential DNS configuration for email delivery
- [Set Up And Manage Sending Domains](https://galaxy.maropost.com/kb/articles/1-set-up-and-manage-sending-domains) - Configure domains for sending email campaigns

**Deliverability & Security:**

- [Deliverability Best Practices](https://galaxy.maropost.com/kb/articles/1418-deliverability-best-practices) - Optimize email delivery and sender reputation
- [How To Get Whitelisted](https://galaxy.maropost.com/kb/articles/1723-how-to-get-whitelisted) - Improve inbox placement through proper authentication