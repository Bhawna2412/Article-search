---
title: "Cleansing Rules"
articleID: 1002
category: "Contact Management > Cleansing Rules"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-19
---

# Cleansing Rules

You can configure cleansing rules to automatically remove inactive contacts and internet bots from your email campaigns, which significantly improves inbox placement and protects your sender reputation. Properly managed contact lists typically perform better than unmanaged lists, as removing dormant subscribers helps ensure your messages reach engaged recipients who are more likely to interact with your content.

Setting up cleansing rules enables more relevant messaging by maintaining a healthy subscriber base while reducing bounce rates that can harm your domain reputation with email service providers. This automated process runs daily to keep your contact lists optimized for better campaign performance.

**Cleansing Rules** are used to remove dormant or inactive contacts as well as internet bots. To begin with, you can create a cleansing rule to determine which contacts are no longer receiving or opening your emails. To eliminate internet bots, you can make a rule that identifies contacts with an unusually high email open rate.

Whenever an inactive contact is removed (cleansed) from the Marketing Cloud account, their journey status and any other workflow within the system end entirely.

> **Note:** **Note:** Cleansing is an automated process that occurs daily at **3:00 AM EST**.

<details>
<summary>What are the benefits of using a cleansing rule?</summary>

Since the rules help you remove inactive email accounts from your system, it enables you to send campaigns to the correct target audience with less chance of your emails being bounced, thereby improving your campaign's delivery, open, and click-through rates.

It also enhances the reputation of the sender and its IP address provider since the emails are not getting rejected (bounced) by the receiver's mailbox provider.

Therefore, it's always a good practice to remove inactive contacts who don't receive emails from you or are getting bounced continuously. To help with this, we have set up a mechanism wherein if you receive 10 consecutive "mailbox is full" bounces for any given email contact, we will remove (cleanse) that particular contact from your MMC account.

</details>

## Managing Cleansing Rules

Firstly, to access this module, go to **Navigations** >> **Audience** >> **Cleansing Rules**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cleanse2.05T5g00001AK5I3EAL.png)From here, you can manage all of your cleansing rules from its index page. You can also create new rules by clicking on the “**New Rule**” tab. Additionally, you can delete or modify existing rules as per your requirements from the Actions panel.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cleanse3.05T5g00001AK58iEAD.png)
## Creating a Cleansing Rule

Upon clicking on the “**New Rule**” tab from the index page, you will be redirected to the rules creation page. The page is further subdivided into two sections, namely, **Cleanse Non-Openers** and **Cleanse Mega-Openers**.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cleanse4.05T5g00001AK5IrEAL.png)Under **Cleanse Non-Openers,** you can create rules for identifying contacts who are either not opening your emails frequently or whose mailboxes are full; hence, you receive a bounced status from them regularly.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cleanse5.05T5g00001AK5J1EAL.png)
> **Note:** **Note:** If you want to target non-openers from all the domains, then leave the **Contact Domain Name** field blank.

Under **Cleanse Mega-Openers,** you can create rules for finding contacts who have a very high email campaign open rate as compared to your target audience. This could be an indication that these contacts are internet bots (firewall applications or security software at the contact’s end) that normally run automated tasks and other processes upon receiving the email campaign from you.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cleanse6.05T5g00001AK3v4EAD.png)Once you have added the rules and criteria, you can save the changes. Remember, the contacts that are identified and cleansed will be moved to the **Do Not Mail** (**DNM**) list.

## Viewing Cleansed Contacts

After the cleansing rule is created and executed, you will receive a notification along with an option to download the list of contacts who were cleansed as part of the ruleset. The downloadable file is in .csv format, which can be exported from the notification panel. Besides, the file can also be exported from the Actions panel present on the cleansing rule Index page.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/cleanse7.05T5g00001AK5JzEAL.png)