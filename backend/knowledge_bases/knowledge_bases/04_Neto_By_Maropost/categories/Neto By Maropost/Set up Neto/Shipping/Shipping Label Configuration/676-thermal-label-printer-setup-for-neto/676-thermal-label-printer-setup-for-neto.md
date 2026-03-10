---
title: "Thermal Label Printer Setup for Neto"
articleID: 676
category: "Set up Neto > Shipping > Shipping Label Configuration"
knowledgeBase: "Neto By Maropost"
---

# Thermal Label Printer Setup for Neto

These are generic instructions, designed for most thermal printer brands including but not limited to:

- Zebra
- Bixolon
- Datamax
- Sato
- Samsung

**Important** If you're using a Dymo label printers, please use the drivers provided by the manufacturer. For all other brands listed above, please use the driver specified below.

## **Step 1. Install Printer Driver**

Neto is a web application and shipping labels are printed directly from the web browser. You must therefore install a printer driver for you thermal label printer that allows this to happen.

1. Go to:[https://www.bartendersoftware.com/support/downloads/drivers/](https://www.bartendersoftware.com/support/downloads/drivers/)
2. Select your printer brand from the list of available printers to download the related driver.
3. Download the driver and click run.
4. Install the driver to your computer / server.
5. Select the printer model you own from the list of available printers.
6. Specify the port you are using to connect the printer to your computer.
7. Name the printer to something that you will recognise (you will select this when printing).
8. Complete installation.

If you are already using your thermal label printer with another application (i.e. your freight companies own shipping application) you should add the above driver to your system instead of replacing the existing one.

The driver already installed will therefore continue to function as before.

## **Step 2. Define Label Size**

Once installed we need to change the page setup in Windows to change the page size to 4” x 6”.

**Tip**: If you are using Direct Freight couriers, they require a minimum 4" x 7" using generic labels or 4" x 8" (102 x 200mm) when using their proprietary labels.

1. On Windows 7 and below, navigate to **Windows Start Menu** > **Control Panel** > **View Devices and Printers**.
  On Windows 10 in the search section next to the Start Menu, type in **Control Panel** and click **View Devices and Printers**.
2. Right click on the printer you have installed.
3. Click on **printer preferences**. The Seagull driver settings will appear.
4. Click on the **page setup** tab and select **4 x 6 (101.6mm x 152.4mm)** as the stock type.
  **Tip**: For Direct Freight customers, set this to 4" x 7" using generic labels or 4" x 8" (102 x 200mm) if using proprietary labels.
5. Click on the “graphics” tab in your printer preferences, set dithering to “none”.

## Step 3. Remove page headers and footers in your web browser print settings

So that your internet browser does not print URLs or page numbers on labels or pages printed from within your Neto control panel, adjust your printing margins and remove all page header and footers from within your browser settings. The process to achieve this varies from browser to browser.

Below are instructions for IE, Chrome and Firefox.

### Setting in Internet Explorer

1. From within Internet Explorer, click the **Settings (cog icon)** > **Print** > **Page Setup**.
2. Change all page header and footer options to “Empty” so that time, date, page number etc do not print in the header or footer.
3. Change all margins (left, right, top and bottom) to “0”.
4. Enable “Print Background Colours and Images”.
5. Disable “Shrink To Fit”.
6. Save changes and close.

### Settings in Firefox

1. Run Firefox, and go to the top right hand **Settings button** > Click **Print** > **Page Setup**.
2. Change all page header and footer options to “Blank” so that time, date, page number etc do not print in the header or footer.
3. Change all margins (left, right, top and bottom) to “0”.
4. Enable “Print Background Colours and Images”.
5. Disable “Shrink to Fit”.
6. Save changes and close.

### Settings in Google Chrome

1. From within Google Chrome, go to the top right hand **Settings button** > Click **Print**.
2. Click **More Settings**.
3. Set **Margins** to **None**.
4. Enable **Background graphics**.

**Tip**: If you are having trouble fitting the labels on your stationary, adjust you printer margins slightly in your browsers page settings.

## **Step 4. Test Your Printer**

Now, go to our [test label](http://docs.neto.com.au/assets/test_label/label.html) and print the page using your new settings above and make adjustments where necessary.