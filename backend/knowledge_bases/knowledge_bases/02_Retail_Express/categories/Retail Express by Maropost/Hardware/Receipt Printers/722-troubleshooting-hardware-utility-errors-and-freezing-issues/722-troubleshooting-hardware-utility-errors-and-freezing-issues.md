---
title: "Troubleshooting Hardware Utility Errors and Freezing Issues"
articleID: 722
category: "Hardware > Receipt Printers"
knowledgeBase: "Retail Express"
---

# Troubleshooting Hardware Utility Errors and Freezing Issues

You can resolve hardware connectivity problems in Retail Express to maintain reliable peripheral device operations, helping your retail operations minimize disruptions from printer, scanner, or payment device issues. This capability provides troubleshooting guidance for common hardware problems, which helps ensure your POS infrastructure remains operational and reduces downtime from equipment connectivity failures.

Setting up proper hardware troubleshooting procedures enables your retail operations to handle device issues independently, helping optimize operational uptime and reduce reliance on external technical support. This helps retail businesses maintain consistent service delivery by empowering staff to resolve common hardware problems quickly and effectively.

## Scenario

The Hardware Utility is causing an error when opening, for example, an XML error or a message displays contact application vendor.

OR

The Hardware Utility is freezing on the printer section and does not continue (the Next button is disabled) as shown in the following image.

![HardwareUtilityError.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000Cekb6MAB.jpg)

## Solution

Follow the steps below to troubleshoot the Hardware Utility issues:

1.   1.     1. `sc stop rexhardware`
    2. `sc delete rexhardware`

    Open **Command Prompt** as **Admin, **and then enter the following commands:
  2. Delete the following folder:
`C:\Program Files (x86)\Retail Express`

> **Note:** RESTART if the folder above does not get deleted.

  Uninstall the Hardware Utility through the **Control Panel**:
2. Reinstall the Hardware Utility.

To learn about installing hardware on Hardware Utility, see [Installing Receipt Printers and Integrated EFTPOS](https://galaxy.maropost.com/kb/articles/206-installing-receipt-printers-and-integrated-eftpos).