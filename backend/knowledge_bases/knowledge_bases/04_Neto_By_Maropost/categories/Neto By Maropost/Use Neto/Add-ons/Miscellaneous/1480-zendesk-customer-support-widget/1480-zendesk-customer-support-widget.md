---
title: "Zendesk Customer Support Widget"
articleID: 1480
category: "Use Neto > Add-ons > Miscellaneous"
knowledgeBase: "Neto By Maropost"
---

# Zendesk Customer Support Widget

![Zendesk_logo.svg](https://us.v-cdn.net/6038474/uploads/H3TWEC0LI7JS/zendesk-logo.svg)

#### This add-on was built by Maropost

Add-ons and Integrations built in-house by Neto by Maropost are documented and supported by our customer service team. If you're having issues with this integration, [let us know](https://www.netohq.com/support/s/ask-us)!

## Overview

Streamline your customer support with the Customer Support Widget for Zendesk. Link your Zendesk ticket customers to your Neto customers to see key fields from their Neto customer card data, as well as a number of quick actions such as: viewing past orders, creating new orders, and much more.

## Install the Add-on

To install the Zendesk Customer Support Widget add-on, do the following:

1. In your Neto by Maropost control panel navigate to **Settings & Tools** > **All settings & tools.**
2. In the Other section click on **Zendesk App Settings**.
3. Click on the **Regenerate** button to create an App Key. Copy it as you will need this for the following steps then save the settings page.
4. Click on the **Addons** menu.
5. In the Support & Live Chat section find the Zendesk Customer Support Widget add-on and click the **Get App** button.
6. Click the **Get App** button in the pop-up window which will take you to the Zendesk Marketplace.
7. Click the **Install** button to add the widget to your Zendesk dashboard.
8. As part of the installation, enter the following details and click **Install**:

- **Title: **Leave this as NETO or update as needed, this just reflects what the widget will be called in Zendesk and does not change any functionality.
- **Neto Zendesk Access Key:** Enter the App Key which you created in step 1.
- **Neto Store Location:** Enter your live webstore domain without the HTTP protocol or any trailing slash.
- **Enable Role Restrictions:** If you want to restrict which Zendesk Roles have access to the Neto widget you can set these here.
- **Enable Group Restrictions:** If you want to restrict which Zendesk Groups have access to the Neto widget you can set these here.

Now when you receive a ticket in Zendesk, click the Apps icon on the right sidebar to see the Neto widget data. If the customer on the Zendesk ticket matches a Neto customer, their Neto data will be displayed on the right sidebar. From there, you can quickly view key customer details, view previous orders, or start a new order (which will open your Neto control panel’s New Order screen with the customers account pre-filled).

> **Note:** The Zendesk Customer Support Widget does not provide a method to generate Zendesk tickets, it is assumed you already have this setup. Otherwise you could look at adding a Zendesk Customer Chat widget, or provide your Zendesk Support Email Address as a point of contact to your webstore.

## Troubleshooting

#### Getting an error from the Zendesk Customer Support Widget?

If you are seeing a **502 Error** it means the widget could not connect to your Neto webstore. Access the widget settings from the 'Apps and integrations' link in your Zendesk sidebar and check the value you set as the Neto Store Location.

This should be your current live Neto webstore without the HTTP protocol or a trailing slash.

#### Seeing a **Missing or invalid required parameters** error?

This could be an issue with the Zendesk App Key, or the Zendesk Customers Email on the ticket. To rule out the Zendesk App Key run through Steps 1 - 3 of the install instructions above, then update the Neto ZenDesk Access Key value in your Zendesk  dashboard App Settings.

To correctly link your Zendesk Customer, the Zendesk Customer Support Widget requires a Primary Email Address or Ticket Requester Email. If this doesn’t exist on the Zendesk Customer the above error will also be shown. If this field exists but the customer does not exist in Neto, you will have the option to link the Zendesk Customer to one of your existing Neto Customers.

This will take the Zendesk Customers email address, and add it to the Secondary Email field on the Neto Customer.