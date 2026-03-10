---
title: "Sending Shipping Tracking Numbers for Web Store Sales"
articleID: 132
category: "Integration > General Webstores"
knowledgeBase: "Retail Express"
---

# Sending Shipping Tracking Numbers for Web Store Sales

You can send shipping tracking numbers to customers for web store orders processed through **Retail Express**, improving customer communication and reducing inquiries about order status. This capability helps enhance customer experience by providing automated tracking updates, supporting better transparency in order fulfillment and reducing customer service overhead across your eCommerce operations.

Setting up tracking number synchronization involves configuring shipping integration, establishing notification workflows, and ensuring proper data mapping between systems. When properly configured, tracking number delivery typically leads to improved customer satisfaction through proactive communication, reduced customer service inquiries, and better overall eCommerce order experience.

When a sale is placed from the web store, the sale feeds through to Retail Express and POS. While you can fulfil it from the POS system and it will update the web store, tracking numbers are not synchronised and need to be manually sent to the customer.

> **Note:** Some third-party extensions that integrate with your web store may automate this process for you; however orders will still need to be fulfilled through Retail Express to ensure the product inventory levels are updated appropriately.

Using Retail Express, the tracking information can be emailed to the customer while fulfilling the sale (note: this applies when fulfilling the sale from the POS system only, and not from the fulfilment report). This means less handling, but as there is no email register within POS it's not possible to check the historical records of communications sent to the customer.

> **Note:** Orders will still need to be fulfilled through Retail Express regardless of which option you select to ensure the product inventory levels are updated appropriately.

## Setting up the Email Template

To start with you will need to set up an email template for your Web Store orders. This can be done from **Settings > POS Settings > Email Templates**.

1. Click the "New Template" button at the bottom left to set up an email template specifically for use with Web Store orders.
  ![rtaImage - 2023-07-09T234933.803.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphrJEAQ.jpg)
2. Enter the information for the newsletter, entering the following information:
	- **Template Name:** The name of the email template. This will be displayed at the POS when selecting the template to use when emailing the customer
	- **Email Subject: **This will be the subject line of the email that the customer receives in their inbox
	- **From E-Mail Address: **The email address of yours that the email will be "From" in the customer's email inbox
	- **CC E-Mail Address: **An email address of yours that you would like to send a copy to.
3. We recommend sending a copy to yourself in case the customer requires you to resend the shipping email. You will then be able to forward the copy you received
4. - **Default Custom Message: **Enter "XXXXXXXXXX" (without the quotation marks). Will be required to enter the tracking number
	- **Email Body: **Where you design the email template
  ![rtaImage - 2023-07-09T234938.199.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphrOEAQ.jpg)
5. Enter the information into the body of your email as required
6. Use "Placeholders" to enter dynamic text that changes for each email e.g. First name (see below for more information)
7. Once you've finished designing your email template click "Save Changes"  at the bottom left

### Using Placeholders

The Email Body field toolbar allows you to create the design and functions graphically without needing to know HTML.

Using the toolbar you can add "Placeholders", an easy way to add standard information (such as the customer's name, invoice number or your company details) that changes with each email.

![rtaImage - 2023-07-09T234943.138.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphrTEAQ.jpg)
You can add a placeholder by pressing on the [P] button towards the right of the menu section on the second row of the screenshot, as depicted above.

Simply select a placeholder from the "Placeholder Name" drop-down in the popup that appears and press "Ok", and the selected placeholder will be added to the Email Body.

![rtaImage - 2023-07-09T234947.002.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphrYEAQ.jpg)
As shown in the example screenshot, you need to add the "[[CustomMessage]]" placeholder to the Email Body where you want to add the tracking number, as well as a link to your selected Courier's tracking page.

## Sending the Shipping Email

To send the email with the tracking number you look up the order in the Fulfilment report, the same way as you would for any Web Store order, and press the blue [E] "Edit" button to the right of the fulfilment report results.

![rtaImage - 2023-07-09T234952.442.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphrdEAA.jpg)This will take you straight into the selected order in the POS, from which you can update the order as necessary and proceed to the "Invoice" page.

Once on the "Invoice" page, you will see a section on the right titled "Email". From here you can choose the template you selected which will automatically populate the "To", "CC", "Subject" and "Email Message" fields with the information entered into the template.

![rtaImage - 2023-07-09T234959.788.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphriEAA.jpg)
To add the tracking number just replace the "XXXXXXXXXX" with the tracking number provided to you by your courier company.

You can then preview the email that will be sent by pressing the "Preview Email" button, and you can send the email by pressing the "Send Email" button.