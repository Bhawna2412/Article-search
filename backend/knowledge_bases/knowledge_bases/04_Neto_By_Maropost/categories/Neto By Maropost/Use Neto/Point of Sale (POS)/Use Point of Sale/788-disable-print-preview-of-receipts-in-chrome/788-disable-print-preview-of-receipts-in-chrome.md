---
title: "Disable Print Preview of Receipts in Chrome"
articleID: 788
category: "Use Neto > Point of Sale (POS) > Use Point of Sale"
knowledgeBase: "Neto By Maropost"
---

# Disable Print Preview of Receipts in Chrome

**Please Note**: Neto POS is not available outside of Australia and New Zealand.

Kiosk or Silent printing disables the print preview / confirmation popup that otherwise appears when you print a receipt in Maropost POS. By doing this, you can cut out an entire step in the sales process.

**Please Note**: Printing is handled by your browser, e.g. Google Chrome, not Neto. As such, we have no control over the process. If the information provided here does not work for you then we recommend contacting Google Chrome support directly.

## Chrome for Windows

1. If you have not already installed the [Google Chrome browser](https://www.google.com/chrome), do so first. Once installed, [setup your receipt printer](https://galaxy.maropost.com/kb/articles/1630-maropost-pos-compatible-hardware) as your default printer.
2. Navigate to your computer's desktop and right click on the Google Chrome icon. A menu will appear, select the "Properties" option from the menu.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DisablePrintPreviewofReceiptsinChrome1.05T5g00000szOnmEAE.png)
3. A properties window will be displayed. Locate the "Target" field in this window and append a space and the text ` -disable-print-preview` to the end of existing string of text.

> **Important:** make sure there is a space between ` -disable-print-preview` and the end of the string of text that already exists as shown below.

  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DisablePrintPreviewofReceiptsinChrome2.05T5g00000szOzaEAE.png)
4. Apply the changes, close the window, and restart your computer.

You can now test kiosk printing by making a sale in Maropost POS and printing a receipt.

## Chrome for Mac

1. Open the terminal in **Applications** > **Utilities**.
2. Enter `defaults write com.google.Chrome DisablePrintPreview -bool true`.
3. Open Google Chrome and check the default printer is correct (Command + P).