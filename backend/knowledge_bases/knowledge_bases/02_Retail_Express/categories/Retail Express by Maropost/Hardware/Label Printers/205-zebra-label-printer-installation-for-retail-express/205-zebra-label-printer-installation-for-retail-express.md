---
title: "Zebra Label Printer Installation for Retail Express"
articleID: 205
category: "Hardware > Label Printers"
knowledgeBase: "Retail Express"
---

# Zebra Label Printer Installation for Retail Express

You can install Zebra label printers for **Retail Express** following proper setup procedures ensuring reliable label printing for product identification and pricing. This helps optimize your retail operations by establishing professional labeling capabilities, supporting efficient inventory management, and enabling consistent product presentation across your stores.

Retail Express uses JS Print Manager to allow communication between Retail Express and your Zebra Label Printer, so you can:

- Create individual Templates e.g. Outlet-specific, different formats when stock is on sale or not etc.
- Print Labels (Individually or in Bulk, when receiving stock, and more)

Follow the instructions below to install and configure your Zebra Label Printer.

## Step 1 - Connect the Label Printer

Follow the instructions that came with the Label Printer to connect and install the printer on your computer.

**Please note: **You will need a Zebra EPL Compatible Label Printer to print Zebra labels from Retail Express (A4 Label printing is available as an alternative option). For assistance, we recommend our preferred hardware supplier, Cash Register Warehouse.

> **Note:** Retail Express exclusively supports JSPrintManager 4.0 version

**Test the connection**

For printers to be compatible with the new setup, they need to be recognised by the operating system. Click the Operating system tab below for detailed instructions:

**Windows PCs**

To view the list of printers on a Windows machine:

1. Click the Start button
2. Type "Printers"
3. Select **Printers & scanners**![rtaImage - 2023-07-10T062926.669.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkhOEAQ.jpg)
4. A list of printers will be displayed
5. Click on the printer
	- If using Windows 11: left-click to load the printer
	- If using Windows 10: left-click and click Manage
6. Click **Printer Properties**
7. Click the **General **tab
8. Click **Print Test Page**![rtaImage - 2023-07-10T062932.708.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkFTEAY.jpg)
9. If the page prints successfully your computer is communicating with your printer correctly
10. Follow the steps above to install JS Print Manager

Need help? [Click here](https://support.microsoft.com/en-us/) for Microsoft Support.

**Mac OSX**

To view the list of printers on a Mac:

1. Click the Apple menu icon
2. Click **System Preferences**
3. Click **Printers & Scanners**![rtaImage - 2023-07-10T062938.961.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppj9HEAQ.jpg)
4. Click the **Printer Name **in the list on the left
5. Click **Options & Supplies**![rtaImage - 2023-07-10T062945.972.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplleEAA.jpg)
6. Click the **Utility **tab
7. Click **Print Test Page**![rtaImage - 2023-07-10T062950.587.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppkhPEAQ.jpg)
8. If the page prints successfully your computer is communicating with your printer correctly
9. Follow the steps above to install JS Print Manager

Need help? Click here for[Apple Support](https://support.apple.com/en-au/macos)

## Step 2 - Install JS Print Manager

JS Print Manager is a free software program used to let Retail Express communicate with your Label Printer.

Without JS Print Manager installed you will encounter the following warning and will be **unable to proceed with printing labels.**

![rtaImage - 2023-07-10T062955.801.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplmSEAQ.jpg)
To install JS Print Manager:

1. Navigate to the [Downloads](https://www.neodynamic.com/downloads/jspm/?v=4) page
2. Click the Version 4 tab
  ![rtaImage - 2023-07-10T063002.208.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplnfEAA.jpg)

  Retail Express is only compatible with JS Print Version 4
3. Select your Operating System from the tabs![rtaImage - 2023-07-10T063005.841.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplnzEAA.jpg)
4. Click to download the **Unified Installer**
5. **Run** the downloaded file
6. Click **Yes **to allow the file to make changes (if prompted)
7. **Follow the prompts** to install the software
8. Once installed you will see a new **icon in your taskbar** (you will only need to refer to this in the future if prompted by support):
  ![rtaImage - 2023-07-10T063010.770.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pplo4EAA.jpg)
9. After the upgrade has been applied a **prompt will be displayed** (your Retail Express database URL will appear in the box)
  ![rtaImage - 2023-07-10T063015.211.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pploEEAQ.jpg)

  If you don't see this message immediately, please check if your browser has [blocked pop-ups](https://support.google.com/chrome/answer/95472?hl=en&co=GENIE.Platform=Desktop)
10. Tick **Don't ask again for this site**
11. Click **Allow**
12. If you have multiple Retail Express databases you will see this prompt for each different URL
13. Repeat the steps for all computers used to print labels

## Frequently Asked Questions

[JS Print is displaying an error or the printer is not listed](https://galaxy.maropost.com/kb/articles/205-zebra-label-printer-installation-for-retail-express#jsprint-error)

If JS Print Manager is producing an error during printing or the printer isn't displayed in Retail Express, this is usually caused by either of the following:

- JS Print is running with multiple instances on the computer
- The JS Print software has become unresponsive

Please follow the steps below to resolve the issue.

1. Click the **Start** menu by clicking the Windows icon
2. Type **"Task Manager"**
3. Open **Task Manager**![rtaImage - 2023-07-10T063021.520.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pploTEAQ.jpg)
4. On the processes tab click **jspm4.exe**
5. Click **End Task **on the task (if there are multiple lines for jspm4.exe repeat the steps for all lines)
  ![rtaImage - 2023-07-10T063026.460.jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppilDEAQ.jpg)
6. Open the **Start **menu again by clicking the windows icon
7. Type **"JSPrint"**
8. Run **JSPrintManager 4.0**
9. Try printing from Retail Express again