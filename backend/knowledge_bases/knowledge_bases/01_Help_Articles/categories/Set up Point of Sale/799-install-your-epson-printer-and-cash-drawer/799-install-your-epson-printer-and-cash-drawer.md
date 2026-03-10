---
title: "Install your Epson Printer and Cash Drawer"
articleID: 799
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Install your Epson Printer and Cash Drawer

**Please Note**: Maropost Commerce Cloud POS is not available outside of Australia and New Zealand.

### In this Article

- [Windows Instructions](#windows)
- [Mac Instructions](#mac)

### Windows PC, Surface or Tablet Instructions

#### Install your Epson Printer

Install your Epson printer by following the manufacturer's instructions.

You can install the latest Epson printer drivers directly from the manufacturers website here:[https://download.epson-biz.com/modules/pos/index.php'page=genre&pcat=3](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdownload.epson-biz.com%2Fmodules%2Fpos%2Findex.php%3Fpage%3Dgenre%26pcat%3D3)

#### Define your receipt paper size

So that your receipts print out at the correct size, you must define your print size settings in Google Chrome printer preferences.

1. 
  Complete a sale in Maropost POS
2. 
  Click "Print Receipt"
3. 
  This will take you to the print preview screen. If the printer is not your default printer, click 'change' and select the Epson printer from the list.
4. 
  Clear the print headers and footers checkboxes and change the paper size to 72mm - 2000mm or 72mm - receipt. If you have a Epson tm-t88v printer, this must be set to 80mm.

> **Note:** If you do not disable headers and footers, the printer will not auto cut at the main receipt and a URL and other irrelevant information will be printed on your receipts.

#### Install your cash drawer

So that your cash drawer opens when you print a receipt or when you click CTRL + E you must set it up through your printer.

1. 
  Plug the RJ12 connector cable (the one that looks like a phone line) into the receipt printer from the cash drawer.
2. 
  Go to your 'devices and printers' control panel on your windows device. This usually found by going to "Control Panel" under the "Start" menu.
3. 
  Right click on your Epson receipt printer and select "Printer Preferences"
4. 
  Click on the "Peripherals" tab
5. 
  Select "Cash Drawer" from the drop down menu

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/InstallyourEpsonPrinterandCashDrawer1.05T5g00000szXBeEAM.png)
6. 
  Select the "End of Document" tab and select "Open" for Cash Drawer #1 and Cash Drawer #2

![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/InstallyourEpsonPrinterandCashDrawer2.05T5g00000szXCDEA2.png)

> **Note:** If you want your cash drawer to open before the receipt prints you can select “Start of Document” in the above instructions.

To test the cash drawer connection, hit CTRL + E when in Maropost POS or print a receipt after completing a sale.

### Mac Install Instructions

#### Install your Epson Printer

Install your Epson printer by following the manufacturer's instructions.

You can install the latest Epson printer drivers directly from the manufacturers website here:[https://download.epson-biz.com/modules/pos/index.php'page=genre&pcat=3](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdownload.epson-biz.com%2Fmodules%2Fpos%2Findex.php%3Fpage%3Dgenre%26pcat%3D3)

#### Define your receipt paper size

So that your receipts print out at the correct size, you must define your print size settings in Google Chrome printer preferences.

1. 
  Complete a sale in Maropost POS.
2. 
  Click "Print Receipt".
3. 
  This will take you to the print preview screen. If the Epson printer is not your default printer, click 'change' and select the Epson printer from the list.
4. 
  Untick print headers and footers and change the paper size to 72mm - 2000mm or 72mm - receipt. If you have a Epson tm-t88v printer, this must be set to 80mm.

**Please Note**: If you do not disable headers and footers, the printer will not auto cut at the main receipt and a URL and other irrelevant information will be printed on your receipts.

#### Install your cash drawer

So that your cash drawer opens when you print a receipt or when you click Command + E you must set it up through your printer.

1. 
  Plug the RJ12 connector cable (the one that looks like a phone line) into the receipt printer from the cash drawer.
2. 
  Go to: [http://localhost:631/printers/ ](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Flocalhost%3A631%2Fprinters%2F) in your safari browser. This will open CUPS.
	If you receive this error: "The web interface is currently disabled. Run "cupsctl WebInterface=yes" to enable it", you will need to enable it.
3. 
  Select your Epson printer from the list of available printers
4. 
  From the drop down menu, select "Set Default Options"
5. 
  Select 'Cash Drawer Control', choose 'Open Drawer 1 and 2' under 'Cash Drawer'
6. 
  Click the 'Set Default Options' button.

To test the cash drawer connection, hit Command + E when in Maropost POS or print a receipt after completing a sale.