---
title: "Creating SMS Campaigns"
articleID: 998
category: "Mobile Marketing > SMS Campaigns"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Creating SMS Campaigns

You can create SMS campaigns to reach customers instantly with time-sensitive messages that typically achieve higher open rates than email communication. SMS campaigns can substantially improve engagement by delivering messages directly to mobile devices, where recipients typically respond within minutes, making this channel particularly effective for promotions, alerts, and urgent communications.

When properly configured with compliance settings, SMS campaigns help ensure regulatory adherence while maximizing marketing effectiveness. This direct communication channel enables immediate customer interaction and streamlines your workflow by providing a quick way to reach your audience with personalized, trackable messages.

In Marketing Cloud, you can build your SMS campaigns in just two quick steps. In these two steps, you compose the message, verify the compliance setting, pick the contact lists, and schedule the campaign.

To know more about SMS compliance, activating the SMS Campaign feature in Maropost, and managing the SMS campaigns, see [**Introduction to SMS Campaigns**](https://galaxy.maropost.com/s/article/Introduction-to-SMS-Campaigns).

### In this Article

- Before You Begin
- Steps to Create an SMS Campaign  - Step 1: Compose    - MESSAGE Tab
    - COMPLIANCE Tab
  - Step 2: Send

## Before You Begin

- Ensure that you have created the contact list to which you want to send the SMS campaign. To know about how to create an SMS contact list, see [**SMS Contact Lists**](https://galaxy.maropost.com/s/article/SMS-Contact-Lists).
- Check that your compliance information is correctly set up. For more information, see [**SMS Campaign Compliance Settings**](https://galaxy.maropost.com/s/article/SMS-Campaign-Compliance-Settings). Note that you may choose to update the compliance information for the campaign during its creation.

## Steps to Create an SMS Campaign

To create a new SMS message, perform the following steps:

1. 
  In Navigation, go to **Campaigns**, and then select **SMS Campaigns**.

  ![SMS_Nav.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/suppress3.05T5g000017UGySEAW.png)
2. 
  On the SMS Campaigns index page, click the **Compose Your Message** button.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewSMSNav.05T5g00000jDjhQEAS.jpg)
3. In step 1 of the SMS Campaign creation, draft your campaign message and validate its compliance with SMS guidelines. For details, scroll down to Step 1: Compose.
4. In step 2 of the SMS Campaign creation, select your audience and then schedule or send the SMS campaign. For details, see Step 2:  Send.

### Step 1: Compose

In step 1, you create your SMS message and optionally, edit the compliance-related content.

#### MESSAGE Tab

Enter the SMS details such as message name and message text. The SMS Preview on the right-side panel shows how your message will be displayed to the contacts. You can also enter a test phone number to test the message.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/NewSMSstep1.05T5g00000jDjW8EAK.jpg)
Contains the following fields:

- **Message Name:** Name for the SMS campaign.
- **Message:** You have a limit of 160 characters to draft your text message. You can include [**Mobile Keywords**](https://galaxy.maropost.com/s/article/Mobile-Keywords) in the message to facilitate interaction with your contacts. Your contacts can text you the specified Keyword to indicate a certain action. You can also include [**contact tags**](https://galaxy.maropost.com/s/article/Content-Contact-Tags) to personalize the message.

> **Note:** If a special character (UCS-2) is used in the text message, the text limit reduces to 70 characters.

- **Click Tracking:** Keep the toggle button ON if you want to track clicks for the links in SMS. By default, click tracking is enabled.

When the click tracking is enabled, each URL in the SMS is converted into a short unique link. The shortened link takes up less space in your message and is also trackable.

**Note**:

- The shortened domain will be **mpt1.co** and the hash will be 8 characters long, adding up to a total of 16 characters.
- All links in the message body are shortened, including any links in the compliance text.
- Links are not shortened in the test messages.
- The original URL in the message must include the protocol (http:// or [https://)](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2F%29).

You can see the click report on the SMS Campaign Dashboard. To learn more, see [**SMS Campaign Dashboard**](https://galaxy.maropost.com/s/article/SMS-Campaign-Dashboard).

- **Test Phone Number:** If you'd like to test the text message before sending it to your contacts, enter a mobile number that you want to receive the test text message on.

#### COMPLIANCE Tab

In the compliance tab, you can manage the compliance-related content that is part of your message content. By default, Marketing Cloud prepopulates your SMS message with information that is required for the message to be compliant with various SMS laws. On this tab, you can edit the prepopulated compliance-related content and control the appearance of message content by enabling/disabling and reordering the settings.

**Note**:

- If you choose to turn off the compliance settings, make sure your SMS message content has those pieces so that the compliance guidelines are met. While the SMS will be sent even if it fails to comply with compliance guidelines, it may impact your deliverability negatively and you might also face legal issues in certain jurisdictions.
- The total character count of the message includes compliance-related content.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/SMSComposeCompliance.05T5g00000JKS9vEAH.png)
Contains the following fields:

- **Organization Name**: Name of your organization.
- **Message Content**: Refers to the message text. You can move the message content to change the order in which it appears in the SMS message. To edit the message content, go to the Message Tab.
- **Company Information Link**: Link to the webpage with your company information.
- **Opt-out Text**: Instructions on how users can opt out of receiving your SMS.

The values in the **Organization Name** and **Company Information Link** fields are populated from your SMS compliance settings. To learn how to view and update your SMS compliance settings, see [**SMS Campaign Compliance Settings**](https://galaxy.maropost.com/s/article/SMS-Campaign-Compliance-Settings).

> **Note:** The edits you make on the COMPLIANCE tab are reflected in the same campaign only and don't change the account-wide compliance settings.

### Step 2: Send

1. 
  Select the contact lists for the SMS campaign. Optionally, you can select the contacts for whom you want to suppress the campaigns. If you want to send the campaign right away, you can click on **Send Now**. Otherwise, save it as a draft if you want to change the SMS details at a later time.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/suppress0.05T5g000017REWQEA4.png)

  To learn about creating and managing the SMS contact list, see [**SMS Contact Lists**](https://galaxy.maropost.com/s/article/SMS-Contact-Lists). Also, to know more about suppressing contact lists and their workings, check out and read our [**Suppression (Do Not Mail) Lists**](https://galaxy.maropost.com/s/article/Suppression-Do-Not-Mail-Lists).
2. 
  If you plan to schedule the SMS campaign, toggle the schedule option and mention the date and time (in the Eastern time zone) of its release. Finally, click on **Schedule**. The SMS campaign will be sent to the intended audience.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/suppress1.05T5g000017REWVEA4.png)

## Related Articles

**SMS Campaign Management:**

- [Introduction to SMS Campaigns](https://galaxy.maropost.com/kb/articles/1356-introduction-to-sms-campaigns) - Comprehensive overview of SMS marketing capabilities
- [SMS Campaign Compliance Settings](https://galaxy.maropost.com/kb/articles/1426-sms-campaign-compliance-settings) - Ensure regulatory compliance for SMS marketing

**Contact Management:**

- [Creating SMS Contact Lists](https://galaxy.maropost.com/kb/articles/1126-creating-sms-contact-lists) - Build and organize SMS recipient lists
- [Mobile Messaging Overview](https://galaxy.maropost.com/kb/articles/1746-mobile-messaging-overview) - Complete mobile marketing strategies

**Infrastructure Setup:**

- [Set Up and Manage the SMS Link Tracking Domains](https://galaxy.maropost.com/kb/articles/990-set-up-and-manage-the-sms-link-tracking-domains) - Configure domains for SMS link tracking