---
title: "Configuring Barcode Scanners"
articleID: 199
category: "Hardware > Barcode Scanners"
knowledgeBase: "Retail Express"
---

# Configuring Barcode Scanners

You can configure barcode scanners for **Retail Express** POS operations, enabling fast product lookup and reducing checkout errors through automated SKU entry. This helps optimize your retail operations by improving transaction speed, eliminating manual product entry errors, and enhancing customer experience through efficient service.

Barcode scanners (also called readers) have an optical sensor that when pointed at a legitimate barcode simply convert the barcode to the characters that it represents. Usually these characters are printed under the bar code (as shown below). Note that barcodes should not be confused with QR codes - they're similar in that they're both designed to be scanned, but have very different purposes. QR codes will not scan with your scanner.

![rtaImage (17).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUivEAE.jpg)
A standard barcode

![rtaImage (18).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUj0EAE.jpg)
**A standard QR code**

Barcode scanners are incredibly useful with Retail Express, making it extremely efficient to add products to sales or when performing a stocktake. Retail Express is compatible with most barcode scanners, installation is usually as simple as plugging in the scanner to an available port on the computer.

In some situations you may need to configure the Programming Mode to ensure the data that's scanned is compatible with Retail Express.

## Barcode Scanner Programming Modes

As these scanners can be used for a variety of purposes across various industries they can be configured to behave in a variety of ways. These behaviours are referred to as "Programming Modes". For example, some behaviours may add characters or symbols, while some may omit these characters. The preferred behaviour or programming mode depends on the system being used in conjuction with the scanner.

Retail Express requires one of the more simple program modes, and in most cases, the default mode for the scanner.

## Retail Express Requirements

Other systems may have required additional symbols, dashes, comma's or other characters to be added (or removed) from the barcode in order to work correctly for a specific scenario or system. Different program modes can be set within the scanner itself in order to add or remove these additional characters, spaces, comma's etc.

For Retail Express we require one of the simplest program modes and it most cases it is the default mode scanners are set to when purchased from the manufacturer.

When scanning a barcode into Retail Express the scanner needs to:

- Add the contents of the barcode (typically just numbers)
- A carriage return i.e. the equivalent of pressing the "enter key" so that the scanner can scan the next product immediately without any additional user input

**Need scanning hardware? **Track n Trace provide stocktake scanner solutions for use with Retail Express.Click here to learn more

## Testing the Scanner for Compatibility

To test if your scanner is compatible with Retail Express:

1. On your computer open a new **word processing document** e.g. Notepad
2. **Scan the barcode** of a product

![rtaImage (2).gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUheEAE.jpg)

|  |  |
| --- | --- |
| **Result from Scan** | **Compatibility Result** |
| Both of the following:  - Series of numbers displayed on the first line - Cursor moved to the second line | Compatible |
| Any of the following:  - Random characters or symbols - Cursor remains at the end of the barcode - Any other unexpected behaviour | Not compatible - refer to Barcode Scanner User Manual |

If you need to change your scanner's Programming Mode please refer to the user manual or instructions provided from the manufacturer. If you do not have access to a user manual please consult your hardware manufacturer's website or your hardware provider for assistance in reprogramming the scanner.

**Need scanning hardware? **Track n Trace provide stocktake scanner solutions for use with Retail Express.Click here to learn more

## Frequently Asked Questions

[Troubleshooting - scanner not scanning codes](https://galaxy.maropost.com/kb/articles/199-configuring-barcode-scanners#troubleshooting)

If you're trying to scan a barcode and it's not scanning at all the below steps may assist. Note that if you scan a code and there's some sort of resulting action (even if it's random characters) that indicates the scanner is functional but requires programming.

- **Check if the scanner has power** - don't look directly into the beam (it will hurt your eyes) but you should be able to see lights
- **Try unplugging and plugging the scanner back in** - typically scanners will make a noise or loud beeps to indicate its switched on. If there are no sounds it may be fault
- **Try resetting the scanner **- some scanner manuals will include a process for doing a "Factory Reset" of the scanner. If you don't have a manual you may be able to find one on the Manufacturer's website

If you're still unable to scan, you should try contacting your hardware provider to request assistance.