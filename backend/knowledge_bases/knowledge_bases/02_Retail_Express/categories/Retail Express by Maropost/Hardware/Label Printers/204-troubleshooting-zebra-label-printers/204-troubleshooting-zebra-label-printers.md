---
title: "Troubleshooting Zebra Label Printers"
articleID: 204
category: "Hardware > Label Printers"
knowledgeBase: "Retail Express"
---

# Troubleshooting Zebra Label Printers

You can resolve common Zebra label printer issues through systematic troubleshooting, minimizing downtime and maintaining continuous label printing capabilities for your retail operations. This helps optimize your retail operations by enabling quick problem resolution, preventing extended labeling delays, and maintaining efficient stock processing workflows.

**Compatible Printers**
Retail Express is compatible with all Zebra Label Printers that support "EPL" printing.

For recommendations on the best printer for your business circumstances, we recommend you contact ourpreferred hardware supplier, Cash Register Warehouse.

Printers that we have tested and confirmed working with Retail Express:

- Zebra LP2824/ LP2824+
- Zebra TLP2824/ TLP2824+ (thermal)
- Zebra LP2844
- Zebra TLP2844
- Zebra TLP3842
- Zebra GC420D
- Zebra GK420T

## Light Indicators

If you are experiencing problems with your Zebra label printer, in some cases the status light located by the feed button can give you an indication of the problem.

|  |  |
| --- | --- |
| **Light Colour** | **Indication** |
| Off | Not receiving power |
| Solid Green | Ready |
| Solid Amber | - Memory error (turn off and on, if it still persists consult authorized Zebra reseller) - Printhead needs cooling (turn off for five minutes, if it still persists consult authorized Zebra reseller) - Failed its Power On Self Test (consult authorized Zebra reseller) |
| Flashing Green | Receiving data |
| Flashing Red | - Media is out - Printhead is out (does not apply to Direct Thermal models) - Cover is open |
| Double Flashing Green | Printer is paused, pressing the Feed button will resume |
| Flashing Amber | Printhead overheated while printing, will automatically resume when printhead cools |
| Flashing Green and Red | Consult authorized Zebra reseller |
| Double flash Red and single Green | Consult authorized Zebra reseller |
| Flashing Red, Amber and Green *(GC420D & GK420T only)* | Do not turn off as printer is defragmenting memory, if it doesn't stop consult authorized Zebra reseller. |

## Common Scenarios

The most common reasons why your zebra label printer won't work when using Retail Express:

|  |  |  |
| --- | --- | --- |
| **Issue** | **Cause** | **Resolution** |
| Administrator Privileges error when trying to print | This is usually caused by either having the Windows printer drivers installed on the PC which blocks us from communicating with the COM/ LPT port. | Uninstall all drivers relating to the printer then reboot and try again. Also check that there are no other programs installed relating to that printer brand as these may also try and communicate with the printer. |
| Can't open printer. Is correct device set as printer port name? | This is usually caused by the wrong com port being used for your printer or the printer is not plugged in correctly. | [Find COM\LPT Port number in Windows](https://answers.microsoft.com/en-us/windows/forum/all/how-to-identify-com-ports-in-windows10/2591ed8b-805e-4e66-9513-836cdd49ed80) The article above with help you check the COM port number in windows and change it if required, if you do not see any com / lpt ports then your printer is not being recognized which can be because your printer is not plugged in correctly/ bad cable or your using a USB Printer in which case you should follow the article below: [Using a Virtual Serial Port for USB printers](https://answers.microsoft.com/en-us/search/search?SearchTerm=Using a Virtual Serial Port for USB printers&tab=&status=all&advFil=&IsSuggestedTerm=false&isFilterExpanded=undefined&CurrentScope.ForumName=windows&CurrentScope.Filter=windows_10&ContentTypeScope=&page=1&sort=Relevance&dir=Desc&from=threadpagesearchbar) |

## Barcode Prints as Numbers

If the barcode doesn't print a normal barcode graphic (as seen in the image below) and instead displays a series of numbers it typically means the font Retail Express uses is either not installed or has become corrupt.

![rtaImage (85).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiIzEAI.jpg)
The font is called "Code39QuarterInch-Regular Normal". Follow the instructions in the Install Code 39 Barcode Font article to resolve the issue.

For more in-depth troubleshooting please refer to your user manual or contact your authorized reseller.