---
title: "Sending Abandoned Cart Emails to Your Neto, Shopify, or ClickBank Contacts"
articleID: 721
category: "Partner Integrations > Integration with Neto"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Sending Abandoned Cart Emails to Your Neto, Shopify, or ClickBank Contacts

You can configure automated abandoned cart emails to recover lost sales and significantly improve your e-commerce revenue. When properly set up with your existing Neto, Shopify, or ClickBank store, abandoned cart recovery campaigns typically help businesses recapture a substantial portion of otherwise lost transactions, as cart abandonment represents one of the largest missed opportunities in online retail.

Marketing Cloud's integrated approach enables you to create personalized, timely reminders that reconnect with customers at the optimal moment in their purchasing journey. This streamlines your workflow by automating the entire recovery process while ensuring your messages include dynamic product information and convenient checkout links, helping maximize conversion opportunities without manual intervention.

**Abandoned cart emails** have proven to be a very effective sale tactic in recovering some of your lost sales. A shopping cart is considered abandoned when the customer adds products to the shopping cart but does not check out. An email reminder might be just the encouragement needed for the customer to complete the purchase.

Maropost Marketing Cloud not only enables you to send out personalized abandoned cart emails to your Neto, Shopify, and ClickBank contacts, but it also enables you to automate the entire process.

To set up an automated process for sending abandoned cart emails, you must do the following steps:

1. Set up the Integration
2. Install the Abandoned Cart Saver
3. Create the email content
4. Create the Journey

### Set Up the Integration

You must create an integration between your Marketing Cloud and eCommerce platform (Neto, Shopify, or ClickBank) accounts. To learn about setting up the integration, refer to the following articles:

- [**Integration with Neto By Maropost**](https://galaxy.maropost.com/s/article/Integration-with-Neto-By-Maropost)
- [**Integration with Shopify**](https://galaxy.maropost.com/s/article/Integration-with-Shopify)
- [**Integration with ClickBank**](https://galaxy.maropost.com/s/article/Integration-with-ClickBank)

> **Note:** If the integration is already created, then skip this step.

### Install the Abandoned Cart Saver

> **Note:** This step is required for Neto integration only.

The Abandoned Cart Saver is an add-on available on your Neto control panel. Maropost requires that you install this add-on to be able to send abandoned cart emails. To learn more about the add-on, including how to set it up, see [**Abandoned Cart Saver**](https://galaxy.maropost.com/s/article/abandoned-cart-saver).

### **Create the Email Content**

Next, you must create the content for the email using any of the content builders. To learn about content builders, see [**Content Builders: Overview**](https://galaxy.maropost.com/s/article/Content-Builders-Overview).

> **Note:** Remember to be creative when crafting the email content. Keep the content clean and easy to read. You can even try including a coupon code as an incentive for the contact to complete the purchase!

When sending an abandoned cart reminder email, you will want to include the products that were abandoned in the cart. By default, Marketing Cloud automatically generates two abandoned cart tags for each Neto integration. Such tags are also created for Shopify and ClickBank integration. These tags are available on all the content editors under the **Merge tags** menu and can be used to render abandoned cart products in real time. To learn more about such tags, read our [**Content: Abandoned Cart Tags**](https://galaxy.maropost.com/s/article/Content-Abandoned-Cart-Tags) article.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MergeTagsabandonedcarttags.05T5g00000SRnPBEA1.png)
The **{{abandoned_items...}}** tag displays the abandoned cart products in HTML preview format, whereas the **{{abandoned_items_array...}}** tag displays the abandoned cart products in the form of an array.

Here's an example of email content that uses both the abandoned cart tags:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AbandonedCartEmailContentinEditor.05T5g00000SRnglEAD.png)
And, here's what the email preview looks like:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AbandonedCartEmailContentPreview.05T5g00000SRnV9EAL.png)
Similarly, you can also insert "restore cart" tags **{{restore_cart...}}** in your emails by adding the restore tag link in your text. These restore tags redirect users to the store's item checklist page, from which users can modify their cart items before checkout.

![abncart11.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zWaiMAE.jpg)
You can access these tags from the **Merge Tags** option.

![abncart10.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zWeaMAE.jpg)
To improve your email interactivity and convenience for the user, you can even insert the restore tags into your action buttons. To do this, add the "**button**" field to your email content and paste the restore tag in the URL field.

![abncart12.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ1000004zWanMAE.jpg)

### Create the Journey

Finally, create a journey outlining the flow of your abandoned cart email. While you can always send an abandoned cart email simply by creating an email campaign, creating a journey automates the entire process. To learn about Journeys, see [**Introduction to Journeys**](https://galaxy.maropost.com/s/article/Introduction-to-Journeys).

An abandoned cart email journey must at least have the following elements, and in the given order:

1. **Abandoned Cart Trigger**: The journey must start with a trigger specifying the event that prompts the email. In this case, it's when a contact leaves their cart without completing the purchase. Marketing Cloud provides a trigger called "Abandoned Cart" that does exactly what you need here. Use the Abandoned Cart trigger and select your web store for the trigger.

To learn about Trigger widgets, see [**Journey Triggers**](https://galaxy.maropost.com/s/article/Journey-Triggers).

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AbandonedCartJourneyAction.05T5g00000kVaaCEAS.png)
2. **Send Email Action**: The next thing in the Journey flow is the action that you want to perform upon the trigger. In this case, you want to send an email reminding them about the cart they left behind. Use the Send Email action and choose the email content specifically created for the abandoned cart email. See the previous section about creating the email content for details.

To learn about the Action widgets, see [**Journey Actions**](https://galaxy.maropost.com/s/article/Journey-Actions).

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SendEmailActionWidget.05T5g00000SRnCCEA1.png)
3. **End**: The end element to terminate the journey. To learn about the End widget, see [**Journey End**](https://galaxy.maropost.com/s/article/Journey-End).

You can customize the flow of events in the journey as per your needs; for example, you may also design the flow as follows: trigger event > send email > delay (pause) > send another email > end. To learn more about how to create such journeys for an abandoned cart, read our [**Abandoned Cart Journeys Template**](https://galaxy.maropost.com/s/article/Abandoned-Cart-Journey-Template) article.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AbandonedCartEmailJourney.05T5g00000SRlmcEAD.png)

## Related Articles

**Integrations:**

- [Integration With Shopify](https://galaxy.maropost.com/kb/articles/732-integration-with-shopify) - Set up your Shopify store connection for abandoned cart tracking
- [Integration With Shopping Carts](https://galaxy.maropost.com/kb/articles/736-integration-with-shopping-carts) - Connect various e-commerce platforms for cart recovery
- [Webhook Integrations](https://galaxy.maropost.com/kb/articles/1399-webhook-integrations) - Advanced integration options for cart data synchronization

**Automation & Journeys:**

- [Automation Overview](https://galaxy.maropost.com/kb/articles/1745-automation-overview) - Understand automated campaign fundamentals
- [Journey Actions](https://galaxy.maropost.com/kb/articles/43-journey-actions) - Configure email actions for your abandoned cart flows

**Contact Management:**

- [Creating A Contact List New](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Organize your e-commerce contacts for targeted recovery campaigns