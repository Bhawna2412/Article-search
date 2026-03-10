---
title: "Receipt Printer - Fix dollar signs $ printing as questions marks ? on receipts"
articleID: 213
category: "Hardware > Receipt Printers"
knowledgeBase: "Retail Express"
---

# Receipt Printer - Fix dollar signs $ printing as questions marks ? on receipts

On occasion a Receipt Printer may begin displaying question marks (?) instead of dollar symbols ($) on printed receipts. This is typically caused by **Region **settings on the computer (which controls the date/time, numeric, and currency data types).

To resolve the issue you will need to:

1. Check the [Regional Settings](https://support.microsoft.com/en-us/office/change-the-windows-regional-settings-to-modify-the-appearance-of-some-data-types-edf41006-f6e2-4360-bc1b-30e9e8a54989) on the computer
2. Edit the windows Registry (instructions below)

## Editing Windows Registry

> **Important:** We strongly recommend the following steps are carried out by a professional who is familiar with the Windows Registry tool. Retail Express does not provide technical advice/assistance beyond the steps indicated below.

To ensure the region settings of the PC are correct even after adjusting in Windows settings, there are some direct registry entries that need to be manually overridden to ensure receipts print the correct dollar sign symbol.

In the registry, you will need visit the listed directories one a time, and review/adjust the settings to ensure they match the screenshot attached below. In some cases, there may only be 4 of the 5 entries below, in any case check that any that do exist, have the correct values set,

To update the Registry:

1. Click the **Start** button on the  computer
2. Type in **Registry Editor**
3. **Open** the App
4. Click **Yes** to the warning message (if it appears)
5. Navigate to one of the **Registry Keys** below
6. **Update** the settings as per the screenshot
7. **Save** the changes
8. **Repeat** for all remaining Registry Keys

Keys to be updated:

- HKEY_USERS\.DEFAULT\Control Panel\International
- HKEY_USERS\S-1-5-18\Control Panel\International
- HKEY_USERS\S-1-5-19\Control Panel\International
- HKEY_USERS\S-1-5-20\Control Panel\International
- HKEY_USERS\S-1-5-21-1561956783-216693164-2438525561-1000\Control Panel\International

![reg1.JPG](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppbzgEAA.jpg)