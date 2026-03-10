---
title: "Edit System Email Templates"
articleID: 1041
category: "Set up Neto > Business Details > System Templates"
knowledgeBase: "Neto By Maropost"
---

# Edit System Email Templates

**Please Note**: Emails cannot be sent outside of your company from Neto while you have a trial account.

## Access your Email Templates

To find your email templates:

1. In your Neto control panel navigate to **Settings & Tools** > **All Settings & Tools**.
2. In the menu on the left hand side, click on **System Templates** and choose **Email Templates**.

To view a full list of email templates available please visit our [Designer Documentation](https://developers.maropost.com/documentation/web-designers/emails-printables/system-emails/).

## Edit Email Headers

Email template headers are made up of the **Subject**, **From**, **To**, and **BCC** fields. You can customise the email headers for each template by using B@SE tags from our library, or by inserting email addresses and names directly into the fields. You can even add multiple addresses if you like, using semi colons to separate them. Eg. contact1@domain.com; contact2@domain.com.

![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/EditSystemEmailTemplates.05T5g00000xpdoyEAA.png)

## Edit Email Content with B@SE tags

B@SE tags are a dynamic reference point for information stored in your Neto system, be it a product, order, customer or company field. For this reason we recommend using B@SE tags so that email templates are dynamic in their content.

It's important to note that not all tags can be used on all email templates. For example, order emails will use tags related to the customer and order information, whereas contact form emails use tags from the business details, and the fields in the contact page.

Here are some common B@SE tags to use for **Order Emails** (checkout page):

| B@SE tag | Description |
| --- | --- |
| [@send_from_company@] | **Business Name** entered in **Settings & Tools** > **Business Details** |
| [@send_from_email@] | **System Email Address** entered in **Settings & Tools** > **Business Details** |
| [$BCC Email$] | **BCC Email** entered in **Settings & Tools** > **Business Details** |
| [@email@] | The email address entered by the customer during checkout |
| [@bill_first_name@] | The first name entered by the customer during checkout |
| [@bill_last_name@] | The last name entered by the customer during checkout |
| [@order_id@] | The ID of the sales order created during this transaction |

See [Data tags for Customer Pages](https://developers.maropost.com/documentation/web-designers/base-tag-library/data-tags/customer-pages/) for more tags that can be used for order templates.

Here are some common B@SE tags to use for **Contact Form Emails** (content pages):

| B@SE tag | Description |
| --- | --- |
| [@company_name@] | **Business Name** entered in **Settings & Tools** > **Business Details** |
| [@recipient@] | **System Email Address** entered in **Settings & Tools** > **Business Details** |
| [$BCC_EMAIL$] | **BCC Email** entered in **Settings & Tools** > **Business Details** |
| [@data_email@] | The email address entered on the contact form |
| [@data_first_name@] | The first name entered on the contact form |
| [@data_last_name@] | The last name entered on the contact form |

See [Data tags for Content & Category Pages](https://developers.maropost.com/documentation/web-designers/base-tag-library/data-tags/content-and-category-pages/) for more tags that can be used for this content type.

For any other email templates, the available B@SE tags depend on the nature of the email and how it is being triggered to send. Please refer to the [Web Designers B@SE Tag Library](https://developers.maropost.com/documentation/web-designers/base-tag-library/data-tags) to find the appropriate tags to use when editing these templates: .

## Test View the Email

The best way to test the email and view it as a customer would is to trigger the circumstances that send it. This may involve creating a test order, leaving items in your cart, or sending a message through a contact form. By triggering the email this way, you can see how it will look in a variety of email clients that Neto cannot replicate.