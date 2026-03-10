---
title: "Stamped.io"
articleID: 1224
category: "Use Neto > Add-ons > Marketing"
knowledgeBase: "Neto By Maropost"
---

# Stamped.io

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/stampedlogo.05T5g00000o8zMsEAI.png)

### This add-on was built by [Stamped.io](http://Stamped.io).

> **Important:** this add-on is no longer supported. Below are legacy instructions for existing merchants. If you have any questions regarding your setup or account access please reach out to [Stamped Support](https://stampedsupport.stamped.io/hc/en-us/requests/new).

## Overview

[Stamped.io](http://Stamped.io)is an AI-powered eCommerce marketing platform that enables D2C brands to accelerate their business growth.

## Check Your Stamped.io Setup

You will no longer be able to access your Stamped Dashboard via your Neto control panel. To access your Stamped account please login directly through the [Stamped.io](https://stamped.io/account/signin) website.

Once logged in, navigate to **Settings > API Keys** and ensure you still have a **Public API Key** and **Store Hash**. If not, regenerate these, or reach out to Stamped Support for assistance.

Keep your Stamped Dashboard open or copy and store those fields for reference as you will need them for the next step.

## Update and Verify Neto Setup

**Set Up Custom Script:**

1. In your Neto Navigation pane, go to **SETTINGS & TOOLS**, and select **All Settings & Tools**.
2. On the **Settings & Tools** page, search for and click **Custom Scripts** (available under **Analytics & 3rd Party Scripts** section).
3. On the **Custom Scripts** page, click **Add New** to create a new custom script.
 ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/CustomScripts.05T5g00000o909LEAQ.png)
4.   - **Name**: Enter a name for the new custom script.
  - **Key 1**: Enter your Stamped Public API Key value.
  - **Key 2**: Enter your Stamped Store Hash value.

  On the 3rd Party Script page, enter the following details and click Save.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/3rdPartyScript.05T5g00000o909VEAQ.png)

**Review the following Script tabs:**

**Page Header**

```plaintext
<script>function myInit(){StampedFn.init({apiKey:"[@referral_key1@]",sId:"[@referral_key2@]"})}</script><script async onload="myInit()" src="https://cdn1.stamped.io/files/widget.min.js"></script>
```

**Purchase Confirmation (Thank You Page)**

```plaintext
<img src="https://stamped.io/conversion_tracking.gif?sId=[@referral_key2@]&apiKey=[@referral_key1@]&orderId=[@order_id@]&orderAmount=[@grand_total@]&orderCurrency=[@config:defaultcurrency@]">
```

**Product Page (Under Description)**

> **Note:** This code may be located in your theme templates if you have replaced the default Neto review setup. Refer back to your theme developer if you are not sure.

```plaintext
<div id="stamped-main-widget"
  data-product-id="[@inventory_id@]"
  data-name="[@name@]"
  data-url="[@url@]"
  data-image-url="[@config:home_url@][@thumb@]"
  data-description="[@short_description@]"
  data-product-sku="[@sku@]">
</div>
```

**Product Page (Under Buying Options) / Product Thumbnails**:

> **Note:** This code may be located in your theme templates if you have replaced the default Neto review stars. If you do not want to show review stars outside of the main Stamped widget, do not include this code.

```plaintext
<span class="stamped-product-reviews-badge stamped-main-badge" data-id="[@inventory_id@]"></span>
```

> **Note:** If you still have the Stamped.io addon installed, you can now safely uninstall it to remove any old script code.

### Synchronizing Data

As Stamped has removed its API connection, you can use one of the two following options to synchronize your Neto data:

**Option 1:** [Create an export template in your Neto control panel](https://galaxy.maropost.com/kb/articles/40-add-and-edit-export-templates) that exports out the data Stamped requires. This would ideally be hosted on your web store server so that Stamped can access the URL and download the data on a schedule.

For any assistance with the import setup please refer to Stamped Support. And for any assistance with the export setup please reach out to [Neto Support](https://galaxy.maropost.com/s/contactsupport/contact-commerce) or a [Neto Partner](https://www.maropost.com/platform/commerce/job-request-portal/).

**Option 2:** Build out an API connector to send data between Neto and Stamped. This would generally require development work to build an application that can poll both APIs for data.

Please refer to:

- [Neto API Documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Stamped API Documentation](https://developers.stamped.io/)

We also have a number of [API Partners](https://maropost.partnerpage.io/partner-directory?Maropost%20Product=commerce&Service%20Type=api-development) who can scope out and implement an API connector if you do not have a developer on hand.