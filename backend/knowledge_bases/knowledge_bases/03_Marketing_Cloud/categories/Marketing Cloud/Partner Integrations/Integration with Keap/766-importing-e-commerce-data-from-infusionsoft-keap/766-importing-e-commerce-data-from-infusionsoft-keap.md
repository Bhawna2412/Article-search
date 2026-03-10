---
title: "Importing E-Commerce Data from Infusionsoft/Keap"
articleID: 766
category: "Partner Integrations > Integration with Keap"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Importing E-Commerce Data from Infusionsoft/Keap

You can automatically import customer purchase data from InfusionSoft into Marketing Cloud's Product and Revenue database, enabling sophisticated e-commerce email campaigns based on actual buying behavior. This integration helps optimize your email marketing ROI by connecting purchase history with targeted messaging, allowing you to create personalized product recommendations and customer lifecycle campaigns that drive repeat sales.

When properly configured, product revenue tracking enables you to segment customers by purchase value, product preferences, and buying frequency, typically leading to better email marketing performance and increased customer lifetime value.

This integration will import contacts, including their purchases, into Marketing Cloud's Product and Revenue database.

> **Note:** This integration only brings over new purchases by contacts.  Send an email to Success@maropost.com to schedule a one-time data pull for your historical purchase data.

1.   - Enter a name for the integration, your Infusionsoft application URL and API key as instructed above.
  - Select the list that you want to subscribe contacts to who make purchases in your Infusionsoft web store. Note that unlike other integrations, you can add the contact to more than one list by clicking the [add more...] button.
  - Enter the URL of the Thank You page that you want displayed after the contact makes a successful purchase. If you had an existing Infusionsoft web store, enter the URL of your original Thank You page from your web store.
  - Click the [Save] button.

  Click the 'Add Settings' link and then click the 'Product Revenue' option from the Integration Types menu.  The 'Product Revenue Settings' modal will now appear.

  ![13.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjg.05T5g00000BkWjgEAF.png)
2. Your integration will now be displayed on the screen. Copy the POST URL for the next step.
3. Log into your Infusionsoft account. From the E-Commerce menu, select E-Commerce Setup >> Shopping Cart Themes.
4. 
  Click the 'Edit' link for your cart theme and then click the 'Themes' tab.

  ![14.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkWjh.05T5g00000BkWjhEAF.png)
5. Paste the URL into the 'Thank You URL' field and click Save.

When a shopper completes a purchase, Infusionsoft will send the shopper's browser page to Maropost for Marketing, where the purchase will be recorded before being redirected to the Thank You page.

## Related Articles

**Integrations & APIs:**

- [Integrations Overview](https://galaxy.maropost.com/kb/articles/32-integrations-overview) - Understand available integration options
- [Using Maropost Identity App](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) - Set up identity management integration

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Import contacts via API integrations
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Manage contacts through integrations

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Trigger campaigns via API