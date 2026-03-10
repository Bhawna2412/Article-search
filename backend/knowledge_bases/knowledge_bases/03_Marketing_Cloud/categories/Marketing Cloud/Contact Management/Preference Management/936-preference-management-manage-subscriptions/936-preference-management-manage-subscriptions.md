---
title: "Preference Management: Manage Subscriptions"
articleID: 936
category: "Contact Management > Preference Management"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-17
---

# Preference Management: Manage Subscriptions

You can create Manage Subscription pages to give subscribers granular control over their email preferences, which typically leads to better engagement rates and reduced unsubscribe rates. This approach enables more relevant messaging by allowing subscribers to choose specific content types rather than unsubscribing completely from your email program.

Subscription management functionality significantly improves subscriber retention by providing options beyond complete unsubscription. When properly implemented, this feature helps optimize your email marketing ROI by maintaining engaged subscribers who receive only the content they want, resulting in higher open and click-through rates.

A **Manage Subscription** page allows contacts to subscribe or unsubscribe from a list that receives newsletters and promotional content. By using the Preference Management tool, you can create a subscription page and insert it under the footer of your email campaigns.

The following example is a layout of a subscription page created using the Preference Management feature:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/pref10.05T5g00001IW7N7EAL.png)
When a contact receives the email, the page will display all the lists in which the contact is present. The contact will have the option to select the lists to which they want to be subscribed or unsubscribed. Additionally, lists with the “**Add to Unsubscribe Page**” field set to “**Yes**” will also appear on the page.

> **Note:** **Note:** The option to “**Unsubscribe me from all of my current email lists**” enables contacts to remove themselves from all lists. When a contact chooses to “**Never email me again**,” they are added to your Marketing Cloud account's “**Do Not Mail**” list, which means they will not receive emails from the sender again.

## Creating a Manage Subscription Page

Perform the steps as shown below to create a Manage Subscription Page:

1. From the Navigation panel, go to **Audience **and choose the **Preference Management **module.
  ![1-clickunsub3.png](https://us.v-cdn.net/6038474/uploads/G7IB54BU2KZ2/1-clickunsub3.png)
2. To create a Manage Subscription page, click on the **New Page **tab.
  ![1-clickunsub4.png](https://us.v-cdn.net/6038474/uploads/GVQ5WPW4VDV0/1-clickunsub4.png)
3. The following details have to be entered and selected from the modal window:

***Name:**** Enter a name for your preference page.
****
Page Type:**** Select the page type as “****Manage Subscriptions****.”
****
Redirect:**** Choose a confirmation page or a thank-you page for your contacts to be redirected to after they have edited their subscription settings. By default, Maropost's Thank You page is selected. To learn about creating the Thank You page, see *[***Preference Management: Thank You Page***](https://galaxy.maropost.com/s/article/Preference-Management-Thank-You-Page)*. 
****
Select Editor:**** Choose an editing mode wherein you’ll be developing the design layout. Marketing Cloud provides three format modes for designing your pages: ****Drag & Drop, HTML,**** and ****WYSIWYG****.*

Once you have entered the details, click on **Create **to proceed ahead.
  ![pref11.png](https://us.v-cdn.net/6038474/uploads/R1G1PJLX8G3D/pref11.png)
4. If you have chosen the **Drag & Drop **editor, use the customizable options available in the workspace to create the subscription settings layout.
  ![pref12.png](https://us.v-cdn.net/6038474/uploads/X8KVATNPVAKE/pref12.png)
5. When selecting the **WYSIWYG **or **HTML** option, utilize the provided tools or add your own source code to make the subscription page easy to understand for your users. Add the **{{manage_sub.form}}** tag in your subscription page so that your contacts can select and update the lists they wish to be subscribed to/unsubscribed from. Once you have designed the page, save it.
  ![pref13.png](https://us.v-cdn.net/6038474/uploads/SHOPOW52P102/pref13.png)

## Using a Manage Subscription Page

While you are creating a custom footer (see [**Footer Management**](https://galaxy.maropost.com/s/article/Footer-Management)), you can select the Manage Subscription Page you have created using the Preference Management tool.

![footer16.png](https://us.v-cdn.net/6038474/uploads/5SJ65ITNHT86/footer16.png)