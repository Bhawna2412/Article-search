---
title: "Importing Tagged Contacts from Infusionsoft/Keap"
articleID: 761
category: "Partner Integrations > Integration with Keap"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Importing Tagged Contacts from Infusionsoft/Keap

You can automate the transfer of tagged contacts from InfusionSoft to Marketing Cloud, enabling sophisticated audience segmentation based on behavioral triggers and customer lifecycle stages. This integration streamlines your workflow by eliminating manual contact exports and ensures that valuable segmentation data flows seamlessly between platforms, helping you deliver more targeted email campaigns.

When properly configured, automated tag-based contact import helps optimize your email marketing effectiveness by preserving customer journey insights and enabling immediate follow-up campaigns based on specific actions or characteristics identified in InfusionSoft.

Using the **Contact Tag Import** option, you can import both new and existing contacts from Infusionsoft to Maropost. For this import to work, the contacts must be tagged.

The complete setup consists of three simple steps:

1. Create the integration in Marketing Cloud.
2. Create a Legacy Action Set in Infusionsoft.
3. Create an Infusionsoft Campaign using an 'Add Tag' goal as the campaign trigger.

### Setting Up the Contact Tag Import Integration

Perform the following steps to set up the integration to import the tagged contacts from Infusionsoft to Maropost:

1. On the Connections page, in the Infusionsoft tab, click Add Settings.
2. 
  In the Integration Types dialog box, click Contact Tag Import.

  ![Contact_Tag_Import.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXER.05T5g00000BkXEREA3.png)
3.   - **Name -** Enter a name for the integration settings.
  - **API URL -** Enter the URL of your Infusionsoft account. For example, [https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fsignin.infusionsoft.com%2Flogin%3Fservice%3Dhttps%253A%252F%252Fpd208.infusionsoft.com%252F%253Fjwt%253Dtrue)[**https://pd208.infusionsoft.com**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fpd208.infusionsoft.com).
  - **API Key -** Enter your Infusionsoft API key. To find this key, log into your Infusionsoft account and select Admin >> Settings >> Application, then scroll down to the API section.
  - **Integrate with list -** Select the list to which you want to add the tagged contacts.

  On the Get Contact Tags Settings dialog box, provide the configuration details for the integration, and then click Save.

  ![4.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXES.05T5g00000BkXESEA3.png)

  You can select from or enter the details of the integrations as follows:

Your integration is now properly configured. Each time you tag a contact with those that you've selected in the Goal, Infusionsoft will automatically send the contact data over to Maropost.

### Confirming Data Transfer

Infusionsoft transfers data in a scheduled batch process that has a built-in limit to the number of external calls it makes in a given time period.

To make sure that Infusionsoft has triggered the data transfer to Maropost through HTTP POST, check if the campaign has been executed:

1. 
  After you've saved your configuration, you'll see the integration displayed in the list of integrations. Copy the full POST URL.

  ![5.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEU.05T5g00000BkXEUEA3.png)
2. Next, log into your Infusionsoft account, and then under the CRM menu, select Settings >> Action Sets.
3. Click the Add an Action Set button.
4. 
  On the dialog box, enter a name for your Legacy Action Set, and then select 'Send an HTTP post to another server' from the drop-down list. Paste the URL that you copied from Maropost and click Save.

  ![6.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEV.05T5g00000BkXEVEA3.png)
5. Next, under the Marketing menu in Infusionsoft, select Campaign Builder, and click the Create a Campaign button. Enter a name for the campaign and click Save.
6. From the Campaign Tools menu, drag and drop 'Tag Applied' to the palette and enter a name for the Goal, and then click Save.
7. 
  Double-click the Goal to open the configure Tag dialog box. Select as many tags as you want in the 'This goal is achieved when any of these tags are applied' list, and then click Save.

  ![7.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEW.05T5g00000BkXEWEA3.png)
8. From the Campaign Tools menu, drag and drop 'Sequence' to the palette. Double-click the Sequence widget to open the editor.
9. From the Sequence menu, drag and drop 'Action Set (Legacy)' to the palette. Then, double-click the widget to open the configuration dialog box.
10. 
  In the Configure Action Set dialog box, from the Action Set drop-down list, select the name of the Legacy Action Set that you created above. Then, click Save.

  ![8.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXEX.05T5g00000BkXEXEA3.png)
11. Change your Sequence from 'Draft' to 'Ready' and click the Campaign name to go back. Finally, click Publish.
12. From the CRM menu, select the name of the tagged contact and then click the Campaigns tab.
13. 
  In the Recent Campaign History section, check if the Legacy Action Set has been executed.

  ![active_sequences.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXET.05T5g00000BkXETEA3.png)
14. Tagged contacts successfully transferred to Maropost will appear in the Contact record under the 'Tags' section on the left-hand side of the screen.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API