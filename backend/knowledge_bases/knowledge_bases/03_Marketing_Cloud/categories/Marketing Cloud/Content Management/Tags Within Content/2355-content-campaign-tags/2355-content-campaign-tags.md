---
title: "Content: Campaign Tags"
articleID: 2355
category: "Content Management > Tags Within Content"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-28
---

# Content: Campaign Tags

Maropost provides a set of predefined campaign tags that can be used within content. You can use the campaign tags to include the campaign information or the unsubscribe option in your content.

Different tags can be used to retrieve and display different details of the campaign in real time. Various campaign tags can be used for the unsubscribe option, and each one has a distinct outcome. So, read all the tag descriptions carefully.

The following is a screenshot of the WYSIWYG content editor with the Campaign Tags drop-down highlighted:

![conttags1.png](https://us.v-cdn.net/6038474/uploads/6ZFR6T6M3PRW/conttags1.png)
Here is the list of predefined campaign tags:

- **{{campaign.id}}** – The tag is replaced with the campaign ID. The campaign ID represents the internal identifier assigned by the Maropost platform to each campaign in the system.
- **{{campaign.name}} **– The tag is replaced with the campaign name. It can be used in the content, hyperlink URL, or subject line of the campaign.
- **{{campaign.from_name}} **– The tag is replaced by the campaign’s "From Name" value of the email. It can be used in the content, hyperlink URL, or subject line of the campaign.
- **{{campaign.from_email}} **– The tag is replaced by the campaign’s "From Email" (fetched from the "From Email" field) of the email. It can be used in the content, hyperlink URL, or subject line of the campaign.
- **{{campaign.subject}} **– The tag is replaced by the campaign’s subject line for the email. It can be used in the content or in the hyperlink URL.
- **{{campaign.reply_to}} **– The tag is replaced by the campaign’s reply to "Email Address" from the email. It can be used in the content, hyperlink URL, or subject line of the campaign.
- **{{campaign.click_to_view}} **– The tag creates a link that can be used by contacts to view the email in a browser. The purpose of this tag is to use custom verbiage for this type of link, rather than the default "If you are having trouble viewing this email, please click here." If you use just the tag, it will be displayed as a raw URL in the email preview.

> **Note:** **Note**: If you are using this campaign tag, deselect the "**Email Preview Link**" checkbox when creating a campaign or using the "**Send Email**" element in a workflow.
> 
> The "**Email Preview Link**" automatically inserts a hyperlink with the verbiage "If you are having trouble viewing this email, please click here" at the top of your email.
> 
> So, you will only need to use either the **{{campaign.click_to_view}}** tag or the "**Email Preview Link**" checkbox.

- **{{campaign.address}}** – The tag is replaced by the address mentioned in the campaign. It’s the same address that a user will see in the default footer.
- **{{campaign.unsubscribe_link}} **– The tag creates an unsubscribe link in the email. The text is shown as "Manage Subscriptions." This tag has to be used in the content and not as a hyperlink.
- **{{campaign.unsubscribe_url}} **– The tag also creates an unsubscribe link in the email, which can be applied either in the source or as a hyperlink. If you use this tag directly in the content, then it will show the complete unsubscribe URL in the email. You can also personalize the text that you are hyperlinking.
- **{{campaign.one_click_unsub_url}} **–** **The tag creates a "1-click Unsubscribe" link.** **This feature lets a user unsubscribe from all lists with a single click. This tag must be used within a hyperlink in your HTML content.
- **{{campaign.edit_profile}} **– The tag creates an "Edit Profile" link in the content. The "Edit Profile" feature lets you update or modify your personal information. It’s the same hyperlink that a user will see in the default footer.
- **{{campaign.report_spam}} **– The tag creates a "Report Spam" link in the content. It’s the same hyperlink that a user will see in the default footer.
- **{{campaign.list_unsub_url}} **– The tag is used for campaigns that are targeted only to lists. When clicked, it unsubscribes the contact and displays the Maropost-hosted "Unsubscribed Message" page. This tag must be used within a hyperlink in your HTML content.

<details>
<summary>**Things to remember about the campaign unsubscribe tag**</summary>

</details>

- **{{campaign.list_unsub_url_full}}** – The tag is used for campaigns that are targeted only to lists or segments that include the "In List" condition in the rules. When clicked, it unsubscribes the contact and displays the Maropost-hosted "Unsubscribed Message" page. This tag must be used within a hyperlink in your HTML content.

<details>
<summary>**Things to remember about the "In List" rule unsubscribe tag**</summary>

- The tag unsubscribes contacts only from those lists or segments that contain the "In List" rule to which the campaign is targeted.
- The tag works with both lists and segments (using the "In List" condition).
- When the tag is clicked within a workflow campaign, specifically, the Maropost-hosted "Manage Subscriptions" page is displayed.

</details>

- **{{campaign.workflow_unsub_url}}** - Used within any content that is being used exclusively as a campaign within a journey. When clicked, it will unsubscribe contacts from the current journey. They will continue to receive emails from other journeys and regular promotional campaigns. This tag must be used within a hyperlink in your HTML content.
- **{{campaign.workflow_unsub_aa_url}}** – Used within any content that is being used exclusively as a campaign within a journey. When clicked, it will unsubscribe the contact from all journeys. They will still continue to receive regular promotional campaigns. This tag must be used within a hyperlink in your HTML content.
- **{{campaign.send_time}}** – The tag can be used to display the campaign send time in Unix timestamp format.