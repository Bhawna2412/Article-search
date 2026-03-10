---
title: "Importing Custom Field Data from Infusionsoft/Keap"
articleID: 762
category: "Partner Integrations > Integration with Keap"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Importing Custom Field Data from Infusionsoft/Keap

You can automatically sync custom field data from InfusionSoft to Marketing Cloud in real-time, enabling personalized email campaigns based on detailed customer information and behavioral data. This integration streamlines your workflow by eliminating manual data entry and ensures that valuable customer insights flow seamlessly between platforms, helping you create more targeted messaging and improve engagement rates.

When properly configured, automated custom field synchronization helps optimize your email marketing personalization by providing immediate access to customer preferences, purchase history, and other critical data points that inform campaign segmentation and content customization.

Using the **Contact Custom Fields** option, you can import the custom field data from Infusionsoft into Maropost in real time.

The Infusionsoft trigger for passing tagged contacts to Maropost doesn't include custom field data. Furthermore, the trigger for passing custom field data doesn't include tags. Therefore, you'll need to create a separate integration for passing custom field values from Infusionsoft to Maropost.

The complete setup consists of two simple steps:

- Create the integration in Maropost.
- Create an Infusionsoft campaign.

### Setting Up the Contact Custom Fields Integration

Perform the following steps to set up the integration to import the custom field data from Infusionsoft to Maropost:

1. On the Connections page, in the Infusionsoft tab, click Add Settings.
2. 
  In the Integration Types dialog box, click Contact Custom Fields.

  ![Custom_Fields_Option.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXDG.05T5g00000BkXDGEA3.png)
3.   - **Name -** Enter the name of the integration.
  - **API URL -** Enter your Infusionsoft application URL.
  - **API Key -** Enter the API key as mentioned above.
  - **Integrate with list -** Select the name of the list that you want to subscribe the added the contacts to.
  - **Field Mappings -** Under the Field Mappings section, enter the name of the fields that you will be passing over from Infusionsoft. For each field, select the name of the custom field in your Maropost Contacts database.

  On the Contact Custom Field Settings dialog box, provide the configuration details for the integration, and then click Save.

  ![11.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXDF.05T5g00000BkXDFEA3.png)

  You can select from or enter the details of the integrations as follows:
4. After you've saved your configuration, you'll see the integration displayed in the list of integrations. Copy the full POST URL.
5. Next, log into your Infusionsoft account.
6. Under the Marketing menu, select Campaign Builder, and then click the Create a Campaign button. Enter a name for the campaign and click Save.
7. From the Campaign Tools menu, drag and drop 'Goal' to the palette that will trigger this campaign (for example, Submits a Web Form). Enter a name for the Goal, and then click Save.
8. From the Campaign Tools menu, drag and drop 'Sequence' to the palette. Double-click the Sequence widget to open the editor.
9. 
  From the Sequence menu, drag and drop 'Send HTTP POST' to the palette. Double-click the widget to open up the configuration screen.

  ![12.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXDE.05T5g00000BkXDEEA3.png)
10. Paste the POST URL that you copied from the Maropost integration into the POST URL field. Then, click the Merge button to view a list of fields to add to your HTTP POST payload.
11. In the Name fields, enter the name of the custom fields exactly as you did in the Maropost integration.

> **Note:** You must add the name/value pair for the email address, first name, and last name. You must always include the email address name/value pair because the email address is a required field in Maropost to identify contact records to be created or updated. The name of the field must be "Email" and the corresponding Infusionsoft field is "~Contact.Email~". If you want to include the contact's first and last name, then you must use the field names as "FirstName" and "LastName".

12. Change your Sequence from 'Draft' to 'Ready' and click the Sequence title to go back. Finally, click Publish.

Now, whenever you update a contact in your Infusionsoft email list, the contact and custom fields are automatically sent over to Maropost.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API