---
title: "Receipt Printer and Integrated EFTPOS - Troubleshooting"
articleID: 212
category: "Hardware > Receipt Printers"
knowledgeBase: "Retail Express"
---

# Receipt Printer and Integrated EFTPOS - Troubleshooting

The Retail Express Hardware Utility is designed to allow the communication of Retail Express (which runs in an Internet Browser) to communicate via your local network connection to the hardware (Docket Receipt Printer and Tyro Integrated EFTPOS Terminals) connected to that PC.

This guide covers the most common issues that can cause problems when running the Hardware Utility or using the hardware itself.

**(Related: **Receipt Printer and Integrated EFTPOS - Setup and FAQ)

> **Note:** Some elements of this article may require assistance from your local computer technician if you are unsure how to install & configure the software listed below.

Click on the headings below to view further information.

## Installation

[The Hardware Utility Installation won't run](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#installation-wont-run)

In this situation the issue is typically caused by one of the following reasons:

- **Missing or outdated prerequisites: **The computer is missing some of the prerequisites software programs, or is outdated. These will need to be checked and confirmed before retrying the installation
- **Access restricted: **The user account for the computer is not an Administrator, and doesn't have access. Log out of the computer and log back in with an Administrator account.

## Using the Hardware Utility

[Cannot see all of the buttons in the Hardware Utility](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#buttons-missing)

If you're unable to see all of the buttons in the Hardware Utility as per the screenshots in the Installation guide, it may be due to a font size change in windows.

1. **Close** the Hardware Utility
2. Right-click on the Windows **Desktop**
3. Click **Display Settings **(in some versions of Windows this may be "Screen Resolution")
4. Select your version of Windows below:

Windows 8

1. Slide the bar to **Smaller** on the far left
2. Click **Apply**

![win8font.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbw0EAA.jpg)
[Windows 10](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#buttons-missing-win8)

1. Locate the **Scale and Layout **section
2. Click on the drop-down **Change the size of text, apps, and other items**
3. Select 100%
4. Click **Apply**

![mceclip0 - 2023-07-09T120736.668.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppc0yEAA.jpg)

1. Restart the computer if prompted by Windows
2. Retry running the Hardware Utility

[Duplicate Hardware Friendly Name](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#duplicate-name)

When prompted to enter a Hardware Friendly Name, if a red icon appears next to the field it's an indicator that the IP address of the computer has previously been assigned to a Hardware Service. This is a **warning only**, and can be disregarded if preferred - duplicate names are allowed, although not recommended.

To view the old entries:

1. Log into **Retail Express**
2. Navigating to **Settings > POS Settings > Hardware Services**.
3. A list of the entries will be displayed

> **Note:** Older entries are not automatically deleted, but can be removed by clicking on the bin icon on this window.

![mceclip1 (97).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbS5EAI.jpg)
[Searching for printers takes a long time](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#searching-printers)

If the Hardware Utility is searching for printers and takes longer than 30 seconds, it typically means there is a problem with the Windows Service.

![win8font (1).jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppc1SEAQ.jpg)
To resolve the issue:

1. Click the **Back **button to return to the previous screen in the Hardware Utility
2. Open the Windows **Command Prompt **by:
	- Opening the **Start **menu
	- Type **cmd**
	- Click the **Command Prompt **icon
3. Type **sc stop rexhardware **and click **Enter**
4. Type **sc delete rexhardware **and click **Enter**
5. The service should be deleted successfully; **close Command Prompt**
6. Return to the Hardware Utility and press **Next** to try searching again for the Printers

[COM or Parallel Port not showing](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#port-not-showing)

If there are certain types of PCI Serial or LPT cards used (Sunix mostly), or Epson Virtual Port Driver with a USB printer, the port will not be displayed.

To resolve the issue, complete one of the following:

- **Install the Windows Drivers**. If it's a USB and using the Epson Virtual Port Driver, remove the COM Port assignment. Do not remove the Epson Virtual Port software in case it has been used for Label Printing.
- **Install a Generic Driver** (instructions below)

Note that you will not need to configure a Baud rate for the printer if a Windows printer is used.

**Install a Generic Windows Driver**

1. Open the Windows **Control Panel **(click the **Start **menu and type "Control Panel")
2. Click **Devices and Printers **(for some versions of Windows it may be "View Devices and Printers")
3. Click **Add a Printer**
4. Click **The printer that I want isn't listed**
  ![mceclip2 (57).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbUZEAY.jpg)
5. Select **Add a local printer or network printer with manual settings** and click **Next**
6. Select **Use an existing port **and select the required port from the dropdown list and click **Next **(typically **Com1**)
7. From the **Manufacturer** box on the left select **Generic**
8. Select **Generic/Text Only **from the box on the right and click **Next**
9. If an option appears to select a version of the driver appears select **Use the driver that is currently installed (recommended)** and click **Next**
10. Enter a **Name **for the printer (used for internal purposes only) and click **Next**
11. The printer will be installed. On the **Printer Sharing **window select **Do not share this printer **and click **Next**
12. **Untick ****Set as the Default Printer**
13. Click **Print a test page**; a test page should print from the printer.
14. Restart the **Hardware Utility**.

[How to check the Hardware Utility Configuration](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#check-utility-configuration)

The Hardware Utility tool has the ability to display a Configuration text document, useful for diagnosing various problems. For example, to see if a printer is Windows-based, Serial etc.

To open the Configuration text document:

1. Open the **Retail Express Hardware Service **using the icon on the desktop or Start menu
2. Click **File > Show Config**
3. The configuration text document will be displayed.

[Windows XP prompts for "User Account" when trying to run the Hardware Utility](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#xp-prompt)

**Unsupported version: **Retail Express no longer supports Windows XP, for information on supported Operating Systems refer to the articleSupported Operating Systems

When trying to run the Hardware Utility on Windows XP a prompt may appear "Which user account do you want to use to run this program?"

![mceclip1 (98).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppc1XEAQ.jpg)
To continue with the installation:

1. Untick** "Protect my computer and data from unauthorized program activity"**
2. Click **OK**

> **Note:** Windows XP may display this window up to 15 times before it will complete successfully.

## Integrated EFTPOS

[Cannot open Tyro Configuration/Tyro "loop"](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#cannot-open-tyro)

It is very important to open the Tyro Configuration to verify the key in order for Tyro to integrate. However, sometimes the Tyro configuration will enter an endless loop, typically caused by an issue attempting to remove an older version.

To resolve the issue:

1. **Close the Hardware Utility **before proceeding
2. Open the Windows **Control****Panel **(click the **Start **menu and type "Control Panel")
3. Click **Program & Features**
4. Locate the **Tyro Terminal Adapter **and check the version
  ![mceclip0 - 2023-07-09T120804.330.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppc1cEAA.jpg)
5. **Download** the installation file for that version by navigating to the URL [https://integrationdownloads.tyro.com/TyroTerminalAdapter/x.x.xx/Installer(TyroTerminalAdapter).msi](https://integrationdownloads.tyro.com/TyroTerminalAdapter/1.2.23/Installer(TyroTerminalAdapter).msi) replacing the x in the URL with the version e.g.
6. In the **Control Panel **highlight **Tyro **and click uninstall
7. If prompted for a .msi file, locate the file downloaded in step 5
8. Once uninstalled, **re-run the Hardware Utility **to reinstall Tyro

After assigning a Register and clicking finish, if using Windows XP you will need to read the following KB article:

XP "Run as" prompt keeps coming up when running the Hardware Utility

Windows Vista and newer do have the same prompts as Windows XP, therefore the Hardware Utility should complete successfully.

If you find it necessary to check, the Application section of the Event Viewer will contain a RetailExpress folder. There should be around 10 new entries and none should contain errors. Generally, any errors that may appear are related to not having Administrator access on the machine.

Want more information? Find related articles here:

Hardware Utility Update - Microsoft .NET

## Receipt Printing

[Receipt printer printing symbols instead of a dollar ($) symbol](https://galaxy.maropost.com/kb/articles/212-receipt-printer-and-integrated-eftpos-troubleshooting#receipt-symbols)

If your Receipts are printing symbols (question marks etc) instead of a dollar ($) symbol, it may be due to the regional settings on your computer.

Refer to the article Receipt Printer - Fix dollar signs $ printing as questions marks ? on receipts for detailed information on how to resolve the issue.