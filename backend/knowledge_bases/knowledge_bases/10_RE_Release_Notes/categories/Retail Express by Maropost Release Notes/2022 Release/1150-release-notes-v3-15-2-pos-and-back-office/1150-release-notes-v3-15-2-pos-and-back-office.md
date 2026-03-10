---
title: "Release Notes v3.15.2 - POS and Back Office"
articleID: 1150
category: "2022 Release"
knowledgeBase: "RE Release Notes"
lastUpdated: 2023-07-09
---

# Release Notes v3.15.2 - POS and Back Office

# Release Notes v3.15.2 - POS and Back Office

## Product Label Printing Update

We're excited to announce some major changes to Label Printing to make it easier to connect Label Printers, increased compatibility with internet browsers, and the ability to select from different templates when printing product labels.

**Important:** This update includes necessary actions for you to complete before you can begin printing labels using the new version (the release will become available between the 28th February - 10th March 2022).

Labels can continue to be printed using existing methods until the upgrade has been applied.

### Summary of Changes

* **You'll no longer require Internet Explorer to print labels -**Label Printing will now be available for all modern browsers, including Edge, Chrome, Firefox and Safari (Internet Explorer is no longer supported)
* **You'll be able to print labels from Windows or Mac using new printer software**which will need to be installed on all computers printing labels
* **You'll be able to choose the Label Template on the page**, for example, separate Outlets can have their own custom label designs!
* **Wider range of support for Label Printers** - we now support all EPL compatible printers.
* **Download EPL or ZPL Code** for advanced external printing solutions

For more details, please refer to the [IMPORTANT - Label Printing Changes](https://galaxy.maropost.com/s/article/IMPORTANT-Label-Printing-Changes) article.

### Connecting a Label Printer

Setting up a new Label Printer is much more simple:

![labelprinter.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfcwEAA.jpg)[Click to view full size](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Farticle_attachments%2F4430720678799%2Flabelprinter.png)

Retail Express now uses [JS Print Manager](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.neodynamic.com%2Fdownloads%2Fjspm%2F) to connect your computer with the Label Printer, replacing the former method of using print drivers within Internet Explorer.

To connect and use a Label Printer now you will need to:

1. Connect the Label Printer to the computer
2. Install the printer on the computer using the instructions provided by your manufacturer
3. Install the JS Print Manager software
4. Create Label Templates
5. Print Labels within Retail Express  

   Loading a Label Printing page will display a prompt to allow JS Print Manager to communicate with Retail Express

For detailed information on connecting your Label Printer please refer to the [Label Printer Installation Guide](https://galaxy.maropost.com/s/article/Zebra-Label-Printer-Installation).

### Templates

With the new changes to Label Printing, you can also select from different templates on the Label Printing screen - perfect for Outlet-specific templates, or when you want to use different styles e.g. sales.

![mceclip0 - 2023-07-09T190116.127.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppfLoEAI.jpg)

The Label Template dropdown is available everywhere you can print Labels.

Click here for information on creating [Label Templates](https://galaxy.maropost.com/s/article/Create-a-Zebra-Label-Preset-template).

[Back to top](#top)

---

## Resolutions

* The **Fulfilment Report** and **Fulfilment Report (Limited):**
  + Now prints only the Invoices and Dispatch Labels returned in the Search Results (where previously under specific circumstances it would print all invoices)
  + Resolved an issue where under specific circumstances products incorrectly showed as Available to be Picked for orders with associated Transfers