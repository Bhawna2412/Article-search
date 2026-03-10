---
title: "Brand Management"
articleID: 916
category: "Contact Management > Brand Management"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2026-01-29
---

# Brand Management

**Brand Management** allows you to structure your email campaigns around distinct brand identities, each with its own unsubscribe list and sender reputation. This approach improves deliverability by giving subscribers the option to opt out of specific brands instead of all your communications, typically resulting in higher engagement and fewer total unsubscribes.

With proper setup, you can establish unique email identities for each brand, complete with dedicated sending domains and IP addresses. This ensures a consistent brand experience while safeguarding each brand's individual sender reputation.

Using Brand Management, you can launch brand-specific campaigns where recipients can unsubscribe from individual brands without opting out of your entire account. Each brand also maintains its own "**Do Not Mail**" list for added control.

> **Note:** **Note:** The Brand Management feature is activated by request.

When you choose a brand in the campaign builder, all lists linked to that brand are automatically selected. You can then keep all these lists, select only some, or deselect them entirely.

Branded campaigns follow specific unsubscribe and "Do Not Mail" protocols:

- **Hard Bounce**: The contact is added to both the brand's DNM list and the account-wide DNM list. The contact is marked as ‘hard bounced" across all subscribed lists. Any active or paused journeys involving this contact will terminate immediately, with their status updated to "hard bounced.’
- **Spam Complaint**: The contact is added to both the brand's DNM list and the account-wide DNM list. The contact is marked as "complained" across all subscribed lists. Any active or paused journeys involving this contact will terminate immediately, with their status updated to "complained.”
- **Never Mail Me Again**: The contact is added to the brand's DNM list and marked as "unsubscribed" in all lists associated with that brand. Any active or paused journeys involving this contact will terminate immediately, with their status updated to "unsubscribed.”
- **Unsubscribe From All**: The contact is marked as "unsubscribed" in all lists associated with that brand. Any active or paused journeys involving this contact will terminate immediately, with their status updated to "unsubscribed.” The contact is added to the brand's DNM list only if this setting is enabled at the account level.
- **1-Click Unsubscribe**: The contact is marked as "unsubscribed" in all lists associated with that brand. Any active or paused journeys involving this contact will terminate immediately, with their status updated to "unsubscribed.” The contact is added to the brand's DNM list only if this setting is enabled at the account level.
- **Manual DNM Entry or Import**: The contact is marked as "unsubscribed" in all lists associated with that brand. Any active or paused journeys involving this contact will terminate immediately, with their status updated to "unsubscribed.”

If a contact appears on multiple lists across different brands and files a complaint about one brand's email, they're added only to that brand's DNM list—their status with other brands remains unchanged.

## Creating a Brand

Follow the steps shown below to create a new brand:

> **Important:** **Important:** If you're creating a brand with a new DKIM domain, link tracking domain, or IP addresses, contact the Deliverability Team at [**postmaster@maropost .com**](mailto:postmaster@maropost.com).

1. From the **Navigation** panel, visit **Audience** and select **Brand Management**.
  ![brand0.png](https://us.v-cdn.net/6038474/uploads/OU3NNRXTC429/brand0.png)
2. On the Brands index page, click on the **New Brand** button.
  ![brand1.png](https://us.v-cdn.net/6038474/uploads/3HWBZBQKV6CR/brand1.png)
3. In the New Brand dialog box, provide or choose values for these fields:

***Brand Name:**** The name you want to assign to this brand.

****DKIM Domain:**** Your verified *[***sending domain***](https://galaxy.maropost.com/s/article/Set-Up-and-Manage-Sending-Domains)*, which will appear as the “from address” in campaigns sent under this brand. Only domains whose “****DKIM****,” “****SPF****,” and “****DMARC****” statuses are completely verified will be shown under the DKIM domain selector field.

****Link Tracking Domain:**** Your verified *[***link tracking***](https://galaxy.maropost.com/s/article/Set-Up-and-Manage-Link-Tracking-Domains)* domain must correspond to the DKIM domain.

****Mail Spreader:**** The IP addresses assigned to this brand.*
  ![brand2.png](https://us.v-cdn.net/6038474/uploads/DBIFWM2H4KQ2/brand2.png)
4. Once you have configured your brand, click on **Create**.
  ![brand3.png](https://us.v-cdn.net/6038474/uploads/9QDII7AFQ2TZ/brand3.png)

> **Note:** **Note:** Campaigns sent through a brand will use the designated IP address, include the DKIM domain in the email header, and apply the link tracking domain to all links.

## Assigning Brand to a List

Follow these steps to assign a brand to a list:

> **Note:** **Prerequisite:** Ensure the brand you want to assign has already been created. You can also assign a brand when initially creating a new list.

1. Navigate to **Audience »** **Contact Lists**.
  ![brand4.png](https://us.v-cdn.net/6038474/uploads/F3R80XJTGR68/brand4.png)
2. On the Contact Lists page, choose the list you want to update and click the **Edit List** option in the Action widget.
  ![brand5.png](https://us.v-cdn.net/6038474/uploads/4FYX4PFUBSY8/brand5.png)
3. In the Edit List dialog box, select your desired brand from the **Brand** dropdown menu. After you have finished configuring the contact list, click on **Save**.
  ![brand6.png](https://us.v-cdn.net/6038474/uploads/6CC6VKF5PMS4/brand6.png)

## Managing Brand Do Not Mail List

Follow the steps on how to manage your brand’s DNM lists:

1. You can view and manage your brand-specific Do Not Mail (DNM) lists by first clicking on your account’s user profile and selecting **Settings**.
  ![brand7.png](https://us.v-cdn.net/6038474/uploads/7RCFVEL0YAAN/brand7.png)
2. Under Contacts, choose [**Global Suppression Lists**](https://galaxy.maropost.com/kb/articles/1370-suppression-do-not-mail-lists).
  ![brand8.png](https://us.v-cdn.net/6038474/uploads/F9NZBM7DQ766/brand8.png)
3. On its index page, you can view the total number of contacts within each suppression list, including brand-specific Do Not Mail (DNM) lists. You can perform the following actions on these lists: **Import, Export, Encrypted Export** (in MD5 hash format), and **Manage**. To view each contact within a brand-specific Do Not Mail (DNM) list, click on **Manage**.
  ![brand9.png](https://us.v-cdn.net/6038474/uploads/1GJ1KUHPC8HY/brand9.png)
4. On the Brands Do Not Mail List index page, you can not only sort the list by brand type but also import, export, and encrypted export (in MD5 hash format) as well. You can add a new unsubscriber to a particular brand or edit/delete a contact individually from a brand.
  ![brand10.png](https://us.v-cdn.net/6038474/uploads/O1ABR1U25Z8B/brand10.png)