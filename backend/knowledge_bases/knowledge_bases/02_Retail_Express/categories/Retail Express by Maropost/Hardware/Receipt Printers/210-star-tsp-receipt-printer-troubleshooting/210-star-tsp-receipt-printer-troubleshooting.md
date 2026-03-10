---
title: "Star TSP Receipt Printer troubleshooting"
articleID: 210
category: "Hardware > Receipt Printers"
knowledgeBase: "Retail Express"
---

# Star TSP Receipt Printer troubleshooting

You can troubleshoot Star TSP receipt printer issues systematically, resolving common problems to maintain reliable receipt printing during retail operations. This helps optimize your retail operations by minimizing printer downtime, enabling quick problem resolution, and maintaining professional customer service through consistent receipt provision.

After configuring a **Star TSP** 100/113/143/650/654 printer, you may encounter the following problems:

- The printout has strange characters
- Cash Drawer continually opens/kicks

Typically these issues are caused by the **ESC/POS** Routing setting not being enabled. To resolve the issue follow the steps below (check for your model number first).

## Star TSP 100/113/143

1. Open the**Star Configuration Utility TSP100 **program on your computer
  ![Star Config 1 (1).jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi5pEAA.jpg)
2. Select**ESC/POS Mode**and click OK
3. Click **Print Job Routing **from the menu on the left
4. Tick **Enable ESC/POS Routing**
  ![Star Config 4 (1).jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppi5uEAA.jpg)
5. Click **Apply Changes**
6. The issue should now be resolved

## Star TSP 650/654

These Printers do not utilise driver software for **ESC/POS** but a physical switch located on the Receipt printer.

1. Turn Off the receipt printer
2. Remove the screw from the DIP switch blind. Then take off the DIP switch blind, as shown
	in the illustration below.
3. Set the switches using a pointed tool, such as a pen or flat-blade screwdriver.
4. Locate the  DIP Switch with 8 pins within.
5. Locate the number 1 pin in the 8 pin switch, and flick the pin down, to enable ESC/POS, illustration below:
6. Screw the back on
7. Turn on the receipt printer
8. Test in POS

More information for the Star TSP 650/654 in the PDF provided below.[Download Star TSP650 Series Manual](https://www.retailexpressmedia.com/downloads/StarTSP650Seriesmanual.pdf)