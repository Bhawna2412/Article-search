---
title: "Drag and Drop Builder: Editing Content"
articleID: 907
category: "Content Management > Content Builders"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-25
---

# Drag and Drop Builder: Editing Content

The **Drag and Drop** builder streamlines your email content creation process by enabling you to build professional campaigns without technical expertise. You can create engaging email experiences using personalization features, dynamic images, and merge tags that help improve subscriber engagement while maintaining a consistent brand presentation across all your email campaigns.

Mastering these content editing features enables you to deliver more relevant, personalized messages to your subscribers, which typically leads to better open rates and click-through performance compared to static, one-size-fits-all email content.

This builder enables you to create email content by dragging and dropping the content elements onto the canvas. You can edit the content on the canvas and edit its properties on the properties panel. The rows can be used for controlling the structure of your email content.

## Builder Toolbar and Content Properties

If you click inside a content block, the builder toolbar appears directly on the editing canvas. It provides access to various editing tools; for example, for a text paragraph, the toolbar options include font family, font size, basic formatting, text alignment, font color, tags, and more.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Contentproperties2.05T5g00000o5e8eEAA.jpg)More customizations are available on the properties panel, which displays different controls depending on the content element you have selected. To learn more, see [**Drag and Drop Builder: Content**](https://galaxy.maropost.com/kb/articles/748-drag-and-drop-editor).

> **Note:** **Note:** If you set the font family to Global Font, it will inherit the font family selected under the Settings tab. This allows you to change the font family of multiple elements simultaneously by simply updating the property in the Settings tab.

## Using Merge Tags

Marketing Cloud enables you to use tags to generate real-time information in your content. You can use the Merge tag option, as shown below, to insert a tag in your content:

1. Click within a text content block to open the text builder toolbar.
2. On the text builder toolbar, click **Merge Tags**.
  ![conteditor50.png](https://us.v-cdn.net/6038474/uploads/BPYKZSTQ33SA/conteditor50.png)
3. On the **Merge Tag** dialog box, select the type of tag that you are looking for – [**Contact Tags**](https://galaxy.maropost.com/s/article/Content-Contact-Tags), [**Dynamic Content Tags**](https://galaxy.maropost.com/s/article/Content-Dynamic-Tags), [**Table Tags**](https://galaxy.maropost.com/s/article/Content-Table-Tags), or [**Product Feed Template Tags**](https://galaxy.maropost.com/s/article/Using-Product-Recommendations-in-Emails).
  ![conteditor51.png](https://us.v-cdn.net/6038474/uploads/0D72YDDP4STR/conteditor51.png)
4. Then, from the available list of tags, select the tag you want.
5. Click **Insert Tag**.

## Adding Images

When it comes to images, you can drag and drop image files directly from your desktop onto an image content block. You can also upload them using the Image Library or use the URL of remotely hosted images.

The image element provides a built-in image file manager for browsing and adding images. The image file manager opens over the builder and can be used to browse, search, and select images from the [**Image Library**](https://galaxy.maropost.com/s/article/Image-Library) that you wish to use in your email message.

With the handy image file manager, you can:

- 
- 
- 
- 
- 

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ContentImage.05T5g00000o5eHMEAY.jpg)

## Adding Dynamic Images

When you insert an image in the builder, you can mark it as ‘Dynamic.’ Dynamic images are images that change depending on one or more values that are passed to the system that delivers them. The link to the image is no longer a static URL but rather a URL that contains variables, such as an email address, a customer ID, a date, and so on.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DynamicImage.05T5g00000o5fSzEAI.png)The variables are the merge tags in the URL, which are replaced with actual values (for example, the customer ID, the recipient email, and the person's name) at the time the email is sent or the landing page is rendered. For example, you can use the dynamic images feature when you are using a third-party service that displays a different image in each contact’s own email client, depending on the personalized information dynamically provided in the full URL of the image.

## Undo, Redo, and Timeline Features

The Undo and Redo icons enable you to rewind and fast-forward to any point in your recent edit history. When changes are detected, a compact Undo icon is displayed in the bottom-left corner of the stage.

The timeline enables you to browse through the most recent changes. The timeline widget shows:

- An icon to identify the content element type (an image, text, and so on).
- A description of what changed, giving the new property value (if any).
- The exact time it happened.

These details help determine what modification was applied and, if desired, rewind the content to an earlier state.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DnDUndoTimeline.05T5g00000o5eRMEAY.png)

## Saving the Content as a Template

Once you're satisfied with the layout of your email content, you can save it to the Marketing Cloud [**Template Library**](https://galaxy.maropost.com/s/article/Template-Library) so that all users in your account can use it to create their own email content. To save your email content as a template, select **Save as Template** in the top-right corner. The content gets saved to the Template Library.

> **Note:** **Note:** If your email content includes any locked rows, then when other users create content from your template, those rows will remain locked in their exact positions within the created content.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DnDSaveasTemplate.05T5g00000o5f0HEAQ.png)

## Adding Custom HTML Block

The Custom HTML content block allows you to add your own HTML code to an email message that you are designing with the builder. It’s as simple to use as a text block.

> **Note:** **Note:** Using your own code may affect how the message is rendered in email clients, preventing it from adjusting to the screen size (that is, the responsiveness of the message). Ensure that you use HTML that is email-compliant and responsive.

**How do I add my HTML code?**

To add your code, simply drag an HTML content element into your message. It can be positioned alone, with other HTML content items, or mixed with other types of content.

The newly inserted content block shows default placeholder text. Click on it, and the right-side property panel displays the HTML code editing panel. Paste your own HTML code or write it directly in the editing area. The system will highlight your syntax and indent your code to make it more readable.

**Which HTML tags are allowed?**

The HTML content automatically corrects minor issues (such as open HTML tags) and strips out codes that cannot be used (such as script tags or iframe tags). Most email clients don't support these code tags, which can therefore cause deliverability problems or pose security risks.

**List of supported tags:**

a, abbr, acronym, address, area, b, bdo, big, blockquote, button, caption, center, cite, code, colgroup, dd, del, dfn, dir, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, i, ins, kbd, label, legend, li, map, menu, ol, optgroup, option, p, pre, q, s, samp, select, small, span, strike, strong, sub, sup, table, tbody, td, textarea, tfoot, th, thead, u, tr, tt, u, ul, var

**List of supported attributes:**

- General attributes: style, id, class, data-*, title
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- area: alt, coords, href, shape, target

## Related Articles

**Content Creation & Design:**

- [Content Builders Overview](https://galaxy.maropost.com/kb/articles/908-content-builders-overview) - Explore all available email content creation tools
- [Brand Management](https://galaxy.maropost.com/kb/articles/916-brand-management) - Maintain consistent branding while editing content
- [Content Abandoned Cart Tags](https://galaxy.maropost.com/kb/articles/719-content-abandoned-cart-tags) - Add dynamic content tags to your email edits

**Advanced Features:**

- [Adding More Meta Tags For Recommendation Rules](https://galaxy.maropost.com/kb/articles/754-adding-more-meta-tags-for-recommendation-rules) - Enhance your content with personalization
- [Acquisition Forms](https://galaxy.maropost.com/kb/articles/30-acquisition-forms) - Design forms using the drag and drop editor