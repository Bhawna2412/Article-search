---
title: "Set Up Tracking Domains in JetSend"
articleID: 972
category: "JetSend Email Settings"
knowledgeBase: "JetSend"
lastUpdated: 2025-10-06
---

# Set Up Tracking Domains in JetSend

The setup process includes:

- Adding a domain
- Verifying the domain

## **Adding a Domain**

Follow the steps below to add a domain as a link tracking domain:

1. On the **Email Settings** page, in the **TRACKING DOMAINS** tab, click the **ADD A DOMAIN** button
2. Enter a sub-domain of your sending domain and click ADD. The sub-domain is added with the status as Unverified.
3. Click the newly added sub-domain or select Verify Domain from the action menu (three dots) to see its CNAME information.
  ![Tracking Domain.png](https://us.v-cdn.net/6038474/uploads/1NEMY8S3LXA6/tracking-domain.png)

## **Verifying the Tracking Domain**

Only a verified domain can be used for tracking emails. Hence, you must verify the link tracking domain before you can start sending emails.

**CNAME**

CNAME (Canonical Name Record) is a DNS record that is used to alias a domain name to a different domain name. It is useful when you want to direct users to the same information delivered on a separate URL.

Do the following to verify the CNAME of your link tracking domain:

1. Go to your domain’s DNS records.
2. In the DNS settings, add a record with CNAME as the record type.
3. Copy the CNAME hostname from the Domain Verification page in the JetSend application and paste it into the Label or Host field of the DNS record.
  ![CNAME_Tracking_Domain.png](https://us.v-cdn.net/6038474/uploads/O5807ZY5DWWC/cname-tracking-domain.png)
4. Copy the CNAME value from the Domain Verification page in the JetSend application and paste it into the Destination or Target field of the DNS record.
5. Then, back on the Domain Verification page, click **Verify CNAME RECORD**.