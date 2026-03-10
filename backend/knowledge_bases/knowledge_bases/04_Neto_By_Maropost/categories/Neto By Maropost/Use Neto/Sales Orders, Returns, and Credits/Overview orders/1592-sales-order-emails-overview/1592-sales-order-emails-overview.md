---
title: "Sales Order Emails Overview"
articleID: 1592
category: "Use Neto > Sales Orders, Returns, and Credits > Overview orders"
knowledgeBase: "Neto By Maropost"
---

# Sales Order Emails Overview

In this guide, you will be shown the customer facing side of placing an order and the email’s they receive throughout the ordering process. Neto allows the option to turn off emails and change the email templates which we will show you.

To find your email templates in your Neto control panel navigate to **Setup & Tools** > **All settings & tools**. Click on the **System Templates** tab and click **Email Templates**.

## Customer email walk through

1. Once an order has been completed by the customer, the confirmation page will appear with the details of the order number and a breakdown of the SKU’s and any payment instructions if real time payment options weren’t used. There will also be an option to activate their account on your website.
2. The customer will then receive two emails instantaneously. The first will be an activation email asking to register their account.
  This email template is found in **ID 15 - Customer Registration Emails** > **ID 4 - Non-Registered Customer Account Activation Email**.
3. The second email will be the order email with tax invoice and PDF copy.
  This email template is found in **ID 7 - Order Emails** > **ID 2 - Order Receipt Email**.
4. Once a consignment has been generated and the shipping manifest has been submitted, an email is sent to the customer with dispatch notification and the tracking number.
  This email template is found in **ID 7 - Order Emails** > **ID 1 - Order Tracking Email**.
5. If you have an [automatic customer follow-up email](https://galaxy.maropost.com/kb/articles/1107-customise-email-and-print-templates#10) turned on, an email will be sent to a customer x number of days later.
  This email template is found in **ID 7 - Order Emails** > **ID 4 - Order Follow Up Email**.

## Email Settings

To change the settings of emails sent to customers:

1. In your Neto control panel navigate to **Setup & Tools** > **All settings & tools**.
2. Click on **Sales Orders & Invoices** tab and click **Order Processing Rules**.
3. Under **Control Panel Operator Rules** header, there are options to toggle email notifications depending on the order process.
4. You can also change orders on an individual basis in the control panel by selecting **Do not send order/invoice to customer via email** during the new/pick