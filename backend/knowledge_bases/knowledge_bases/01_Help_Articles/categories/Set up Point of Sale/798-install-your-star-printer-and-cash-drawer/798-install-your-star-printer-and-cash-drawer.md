---
title: "Install your Star Printer and Cash Drawer"
articleID: 798
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Install your Star Printer and Cash Drawer

**Please Note**: Maropost Commerce Cloud POS is not available outside of Australia and New Zealand.

### In this Article

- [Windows Instructions](#windows)
- [Mac Instructions](#mac)

### Windows PC, Surface or Tablet Instructions

#### Install your Star Printer

Install your Star printer following the manufacturer's instructions. You can install the latest Star Micron printer drivers directly from the manufacturers website here:[http://www.starmicronics.com/support/manual.aspx'printerCode=TSP100](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.starmicronics.com%2Fsupport%2Fmanual.aspx%3FprinterCode%3DTSP100)

#### Define your receipt paper size (72mm wide)

So that your receipts print out at the correct size, you must define your print size settings in Google Chrome printer preferences.

1. 
  Complete a sale in Maropost POS
2. 
  Click **Print Receipt**.
3. 
  This will take you to the print preview screen. If the Star printer is not your default printer, click **change** and select the Star printer from the list.
4. 
  Untick print headers and footers and change the paper size to 72mm - 2000mm or 72mm - receipt.

**Please Note**: If you do not disable headers and footers, the printer will not auto cut at the main receipt and a URL and other irrelevant information will be printed on your receipts.

#### Install your cash drawer

So that your cash drawer opens when you print a receipt or when you click CTRL + E you must configure it through your printer.

1. 
  Plug the RJ12 connector cable (the one that looks like a phone line) into the receipt printer from the cash drawer.
2. 
  Go to your devices and printers control panel on your Windows device. This usually found by going to **Control Panel** under the **Start** menu.
3. 
  Right click on your receipt printer and select **Printer Properties**

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/InstallyourStarPrinterandCashDrawer1.05T5g00000szbCIEAY.jpg)
4. 
  Click on the **device settings** tab
5. 
  Change the Peripheral Unit Type to **Cash Drawer** and set the Peripheral Unit 1 and 2 options to **Document Bottom**.
6. 
  Click OK to complete setup.

  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/InstallyourStarPrinterandCashDrawer2.05T5g00000szbDqEAI.jpg)

> **Note:** If you want your cash drawer to open before the receipt prints you can set the Peripheral Unit 1 and 2 options to Document Top.

To test the cash drawer connection, hit CTRL + E when in Maropost POS or print a receipt after completing a sale.

### Mac Instructions

#### Install your Star Printer

Install your Star printer following the manufacturer's instructions. You can install the latest Star Micron printer drivers directly from the manufacturers website here:[http://www.starmicronics.com/support/manual.aspx'printerCode=TSP100](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fwww.starmicronics.com%2Fsupport%2Fmanual.aspx%3FprinterCode%3DTSP100)

#### Define your receipt paper size (72mm wide)

So that your receipts print out at the correct size, you must define your print size settings in Google Chrome printer preferences.

1. 
  Complete a sale in Maropost POS
2. 
  Click **Print Receipt**.
3. 
  This will take you to the print preview screen. If the Star printer is not your default printer, click **change** and select the Star printer from the list.
4. 
  Untick print headers and footers and change the paper size to 72mm - 2000mm or 72mm - receipt.

**Please Note**: If you do not disable headers and footers, the printer will not auto cut at the main receipt and a URL and other irrelevant information will be printed on your receipts.

#### Install your cash drawer

So that your cash drawer opens when you print a receipt or when you click Command + E you must configure it through your printer.

1. 
  Plug the RJ12 connector cable (the one that looks like a phone line) into the receipt printer from the cash drawer.
2. 
  Go to: [http://localhost:631/printers/ ](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Flocalhost%3A631%2Fprinters%2F) in your safari browser. This will open CUPS.

> **Warning:** If you receive the error The web interface is currently disabled. Run “cupsctl WebInterface=yes” to enable it, you will need to perform these additional steps.
> 
> Click the magnifying glass in the top right hand corner of your screen and search for Terminal.
> 
> In terminal, enter cupsctl WebInterface=yes and press return on your keyboard.
> You will now be able to go to http://localhost:631/printers/ and see your installed printers.

3. 
  Select your Star printer from the list of available printers
4. 
  From the drop down menu, select **Set Default Options**.
5. 
  Select **Cash Drawer Control**, choose **Open Drawer 1 and 2** under **Cash Drawer**.
6. 
  Click the **Set Default Options** button.

To test the cash drawer connection, hit Command + E when in Maropost POS or print a receipt after completing a sale.