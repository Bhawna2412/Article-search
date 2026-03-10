---
title: "Salesforce - Import Leads and Contacts to Maropost"
articleID: 751
category: "Partner Integrations > Integration with Salesforce"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Salesforce - Import Leads and Contacts to Maropost

You can maintain synchronized audience data by selectively importing leads and contacts from Salesforce into your Marketing Cloud account. This integration ensures your email marketing campaigns leverage the most current CRM data, enabling more targeted messaging based on sales pipeline status and customer relationship stages.

When properly configured, this automated data synchronization helps optimize campaign relevance and typically leads to better engagement rates. The system ensures your Marketing Cloud contact lists remain current with your Salesforce reports, eliminating manual data management while maintaining data accuracy for more effective email marketing.

Maropost's Salesforce package enables you to selectively import your leads and contacts into your Marketing Cloud account. You can create different Salesforce reports, with each one pushing its set of leads or contacts to its own Maropost list.

![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXHt.05T5g00000BkXHtEAN.png)
**Points to Remember**:

- When the data push process from Salesforce into Maropost runs, any contacts in the Maropost list that are not included in the Salesforce report will be automatically unsubscribed from the list. This process ensures that the set of active contacts in the Maropost lists is always in sync with those from your Salesforce report.
- The data push will run in batches of 2000 records each. Therefore, if you are pushing 10,000 leads from a Salesforce report into a Maropost list, there will be 5 separate batches (equal to 5 API calls) to accomplish this push.

### Creating a Salesforce Report to Import Leads and Contacts to Maropost

Perform the following steps to create a Salesforce report to transfer leads and contacts to Maropost:

> **Note:** You must have administrator access rights.

1. Log in to **Salesforce.org,** which is connected to your Maropost for Marketing account.
2. 
  Select Maropost from the App Menu, and then click on MP Accounts.

  ![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXHp.05T5g00000BkXHpEAN.png)
3. Click the 'Set Up Maropost Account ....' link to view your Maropost Account configuration screen.
4. 
  Enter a name in the 'Business Type' field, and click Save.

  ![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXHq.05T5g00000BkXHqEAN.png)
5. Go back to the MP Accounts menu and click the link under the 'Account Mapped Lists' heading.
6.   - **Maropost List** - Select the name of the Maropost list that you want to sync with the Salesforce Report. The selection of Lists displays the 200 most recently created/updated lists from your Maropost for Marketing account.
  - **Salesforce Report** - Select the name of the Salesforce Report that you want to sync with the Maropost List.
  - **Create New Maropost Contacts** - Using the Lead or Contact's email address as the lookup key, a new Maropost contact will be created if one does not exist in your Maropost for Marketing account.
  - **Update Maropost Contacts** - Using the Lead or Contact's email address as the lookup key, the corresponding Maropost contact's record will be updated if one exists.
  - **Push to Maropost every day at** - Select the hour, minute, and time zone that you want to push your Salesforce Report members into Maropost.
  - 
    **Lead Field Mapping** - Click the [+] icon to add a mapping between a Maropost contact field and a Salesforce lead field. You can add as many field mappings as you need. Click the [x] icon to remove a field mapping.

    ![5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXHs.05T5g00000BkXHsEAN.png)
  - **Contact Field Mapping** - Repeat the same steps as above to map between Maropost contact fields and Salesforce contact fields.

  Click New to open the List Mapping configuration screen.

  ![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXHr.05T5g00000BkXHrEAN.png)
7. Click Save to save the configuration and let the data push process run at the scheduled time. Or, click Save & Sync Now to save the configuration and run the data push process immediately.

## Related Articles

**Integrations:**

- [Integration With Salesforce](https://galaxy.maropost.com/kb/articles/753-integration-with-salesforce) - Set up the core Salesforce integration
- [Api Overview](https://galaxy.maropost.com/kb/articles/648-api-overview) - Technical integration capabilities and endpoints
- [Webhook Integrations](https://galaxy.maropost.com/kb/articles/1399-webhook-integrations) - Advanced integration options for data synchronization

**Contact Management:**

- [Custom Fields](https://galaxy.maropost.com/kb/articles/45-custom-fields) - Store additional Salesforce data with custom contact fields
- [Creating A Contact List New](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Organize your Salesforce contacts for targeted campaigns