---
title: "Integration with Magento"
articleID: 756
category: "Partner Integrations > Integration with Magento"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Integration with Magento

You can connect your Magento e-commerce store directly to Marketing Cloud to automate customer data synchronization and purchase history tracking. This integration streamlines your workflow by eliminating manual data entry and enables you to create targeted email campaigns based on actual purchase behavior, typically leading to better engagement rates than generic campaigns.

When properly configured, this native integration automatically transfers customer information and order data in real-time, helping you segment audiences based on purchase patterns and deliver personalized product recommendations that drive repeat purchases.

Maropost Marketing Cloud natively integrates with **Magento Open Source Edition v2.x**. Use this integration to transfer your customers from Magento into your Maropost account, along with their purchase history.

### Setting Up the Integration

1. Log in to your Magento Admin account and navigate to System > Integrations to display the Integrations page. Click 'Add New Integration' to display the New Integration Page.
2. Enter a unique name for the integration in the Name field. Then enter your admin password in the Your Password field. Leave all the other fields blank.
3.   - Sales > Operations > Orders > Actions > View
  - Sales > Operations > Invoices
  - Sales > Operations > Shipments
  - Sales > Operations > Credit Memos
  - Sales > Operations > Billing Agreements > Actions > View
  - Sales > Operations > Billing Agreements > Actions > Place order under Billing Agreements
  - Customers > All Customers
  - Customers > Now Online
  - Carts > Manage Carts
  - Reports > Sales > Orders
  - Reports > Sales > Coupons

  Click the API tab. Select the Magento resources that the integration will access. You can either select 'All resources' as a shortcut, or you can select the following resources:

### Installing Maropost's Plug-in Extension for Magento Community Edition

1. Click Save to save your changes and return to the Integrations page.
2. Click the Activate link in the grid that corresponds to the newly-created integration.
3. Click Allow to complete the configuration in Magento.
4. You're now ready to complete the configuration in Maropost for Marketing. Log in to your Maropost account. Next, click your username at the top-right corner of the screen, and select Connections from the drop-down menu. On the Connections page, select the Magento tab.
5. On the Magento tab, click Add Settings. In the dialog box, click Sales Order Revenue. This integration imports sales order history from Magento and adds them to the Maropost for Marketing's Product/Revenue database. It will also automatically add the contacts to the selected list. Maropost's plug-in extension for Magento automatically pushes purchase order history to Maropost for Marketing in real time.
6. Add the customer key, consumer secret access token, and the access token secret key generated in Steps One through Six above. Add the domain of your Magento web store too.
7. Select the list that you want the contacts added to when they are imported into Maropost for Marketing. Click Save to complete your setup.
8. Follow steps 1 through 10 to set up an integration for Sales Order Revenue. Note the POST URL that appears on Maropost's Magento integration page. You'll need this URL later in the configuration process.
9. Log in to your command console and navigate to the 'app' folder of your Magento installation. Then, create the 'Code' folder inside the 'App' folder. If the 'Code' folder already exists, skip this step.
10. Download the Maropost plug-in extension (attached at the bottom of this article) and place it inside the 'Code' folder.
11. 
  Type the following command:
12. 
  Type the following command:
13. 
  Type the following command:

  This command verifies that the Maropost extension is enabled.
14. 
  Type the following command:
15. Log in to the Admin panel of your Magento web store. Click 'Stores' and then 'Configuration'.
16. 
  Add the post-back URL that you copied from Maropost's Magento integration page (see step 1) into the 'Maropost Post URL' field, and click the Save Config button.

  ![maropost_extension1.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXb6.05T5g00000BkXb6EAF.png)

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API