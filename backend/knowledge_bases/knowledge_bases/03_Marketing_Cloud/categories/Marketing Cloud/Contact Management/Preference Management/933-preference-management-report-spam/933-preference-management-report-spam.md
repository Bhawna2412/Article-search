---
title: "Preference Management: Report Spam"
articleID: 933
category: "Contact Management > Preference Management"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-17
---

# Preference Management: Report Spam

You can create a Report Spam page to maintain compliance with anti-spam regulations while protecting your sender reputation through proper complaint handling. This proactive approach helps ensure email delivery by providing subscribers with an appropriate mechanism to report unwanted messages, which helps maintain your account's standing with email service providers.

Implementing proper spam reporting functionality significantly improves your email marketing program's credibility and reduces the risk of being flagged by spam filters. When properly configured, this feature helps optimize deliverability performance by demonstrating to ISPs that you take subscriber feedback seriously and handle complaints appropriately.

A **Report Spam** page is a mechanism that allows a user to report an email as unsolicited or junk mail. You can utilize the Preference Management feature to create a Report Spam message, which can be placed within the footer of your email campaigns.

As per the** Canadian Anti-Spam Law** (**CASL**), you are required to follow certain rules in messaging and mention key pieces of information in every campaign message you send to your audiences.

- 
- 
- 
- 

With the help of the Report Spam page, contacts can file a complaint or request to flag a particular message as unwanted. Upon doing so, the contact is added to the "**Do Not Mail List**" for that account, and its contact status changes to "**Complained**."

After the contact is added to the Do Not Mail List, they will not receive any future communication from the sender’s account until the contact’s email is removed from the list.

The following example shows the layout of a Report Spam page created using the Preference Management feature:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/pref5.05T5g00001IWHHnEAP.png)
## Creating a Report Spam Page

Perform the steps as shown below to create a Report Spam Page:

1. From the Navigation panel, go to **Audience** and choose the **Preference Management** module.
  ![1-clickunsub3.png](https://us.v-cdn.net/6038474/uploads/KINYA8TFQ4VJ/1-clickunsub3.png)
2. To create a Report Spam page, click on the **New Page** tab.
  ![1-clickunsub4.png](https://us.v-cdn.net/6038474/uploads/CWFEAZJK1WDE/1-clickunsub4.png)
3. The following details have to be entered and selected from the modal window:

***Name: ****Enter a name for your preference page.
****
Page Type: ****Select the page type as “****Report Spam****.” 
****
Redirect:**** Choose a confirmation page or a thank-you page for your contacts to be redirected to after they have marked or acknowledged the incoming message as spam. By default, Marketing Cloud's Thank You page is selected. To learn about creating the Thank You page, see *[***Preference Management: Thank You Page***](https://galaxy.maropost.com/s/article/Preference-Management-Thank-You-Page)*. 
****
Select Editor:**** Choose an editing mode wherein you’ll be developing its design layout. Marketing Cloud provides three format modes for designing your pages: ****Drag & Drop, HTML****, and ****WYSIWYG****.*

Once you have entered the details, click on **Create **to proceed ahead.
  ![pref6.png](https://us.v-cdn.net/6038474/uploads/1NYPM7TP5YF3/pref6.png)
4. Design the report's spam layout by using the customizable tools available in the given workspace in the case of the **Drag & Drop** editor.
  ![pref7.jpeg](https://us.v-cdn.net/6038474/uploads/EVF11S8RH315/pref7.jpeg)
5. If you have chosen either the **WYSIWYG** or **HTML** option, use the tools provided or add your own source code to make the report spam page and its underlying instructions descriptive for your users to understand, since their later actions will have an impact on them receiving messages from your Maropost account. Make sure you add the **{{report_spam.form}}** tag on your page. This creates a tab for your contacts to confirm if the email received is spam or not. Once you have finished designing your page, save it.
  ![pref8.png](https://us.v-cdn.net/6038474/uploads/RUCIPUC5HAZ7/pref8.png)

## Using a Report Spam Page

While you are creating a custom footer (see [**Footer Management**](https://galaxy.maropost.com/s/article/Footer-Management)), you can choose a previously designed Report Spam Page using the Preference Management tool.

![footer19.png](https://us.v-cdn.net/6038474/uploads/S4RFD3KC35V4/footer19.png)