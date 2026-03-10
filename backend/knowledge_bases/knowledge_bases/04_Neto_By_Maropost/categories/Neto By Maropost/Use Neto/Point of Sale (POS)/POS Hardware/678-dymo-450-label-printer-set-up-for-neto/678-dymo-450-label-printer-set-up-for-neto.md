---
title: "Dymo 450 Label Printer Set up for Neto"
articleID: 678
category: "Use Neto > Point of Sale (POS) > POS Hardware"
knowledgeBase: "Neto By Maropost"
---

# Dymo 450 Label Printer Set up for Neto

## Install the DYMO Label Printer for Windows

The DYMO printer requires special printing drivers in order to print.

1. Download the software from [DYMO’s website](http://www.dymo.com/en-NZ/labelwriter-450-turbo-label-printer) (select the *Support* tab and download the relevant drivers for your system)
2. Open the downloaded software, and follow the DYMO Setup Wizard to install the software.
3. Connect your **DYMO label Printer** directly to your computer via the **USB** cable provided.
4. Load your labels into your printer. For instructions on how to do this, please check your [DYMO 450 Turbo instruction manual](http://download.dymo.com/dymo/user-guides/LabelWriter/LW450Series/UG/LabelWriter_UserGuide_en-US.pdf).

### Set the Print Preferences in Windows

1. Open the Start menu and and navigate to the **Control Panel**.
2. Locate the **Devices and Printers** icon and open this.
3. Right click on the DYMO printer and select **Printer Properties**.
4. In the Printer Properties window, click **Preferences** at the bottom and then **Advanced** on the right.
5. This will open a window that shows the below settings. This allows you to verify that the paper is set to the same type of label you loaded earlier.

### Update your label template in Neto by Maropost

1. Navigate to the **Print Doc** templates: **Settings & tools** > **All settings & tools**
2. Select **System Templates** from the left hand navigation menu and then select **Document Templates**
3. Locate the **Barcode Template**: `SysDoc/printdocs/product/barcode/template.html`
4. Update the existing template by replacing it with the code below, and click **Save.**

**Tip**: We recommend backing-up all print docs before making modifications.

```plaintext
<code class="hljs ruby"><center style=<span class="hljs-string">"padding-top: 15px; padding-right:45px;"</span>><img align=<span class="hljs-string">"center"</span> src=<span class="hljs-string">"[%BARCODE_URL fn:&#39;&#39; height:&#39;32px&#39; sku:&#39;[@SKU@]&#39; upc:&#39;[@upc@]&#39; scale:&#39;3&#39;%][%END BARCODE_URL%]"</span> width=<span class="hljs-string">"75%"</span> border=<span class="hljs-string">"0"</span>/><br>[%product <span class="hljs-symbol">sku:</span><span class="hljs-string">&#39;[@sku@]&#39;</span>%]    [%param *body%]    <div style=<span class="hljs-string">"font-size:12px; padding:0px 4px 2px 4px;"</span>>[%format <span class="hljs-symbol">type:</span><span class="hljs-string">&#39;text&#39;</span> <span class="hljs-symbol">maxlength:</span><span class="hljs-string">&#39;70&#39;</span>%][<span class="hljs-variable">@name</span>@][<span class="hljs-string">%/format%]</</span>div>    <div style=<span class="hljs-string">"font-size:16px;"</span>>[%format <span class="hljs-symbol">type:</span><span class="hljs-string">&#39;currency&#39;</span>%][<span class="hljs-variable">@price</span>@][<span class="hljs-string">%/format%]</</span>div>    [<span class="hljs-string">%/param%][%/</span>product%]<<span class="hljs-regexp">/center></span>
```

### Print barcode labels in Neto by Maropost

1. In your Maropost control panel navigate to **Products** > **View All Products**.
2. Select the products you want to print barcodes for.
3. Scroll down to the bottom of the page.
4. Click on the **Print Barcode for Selected** button.

### Chrome print settings

1. Set the paper size to **30336**.
2. Set all margins to **none**, or **Custom** and set them all to **zero**.
3. Change layout to **Landscape**.

## Dymo 450 Label Printer Setup - Mac

Follow the below instructions to get your printer set up and ready to start printing barcode labels with Maropost.

1. Install the DYMO Label Printer
2. Set the print preferences in Mac
3. Update your label template in Maropost
4. Print barcode labels in Maropost

### Install the DYMO Label Printer

1. Connect the printer to your computer.
2. Download the software from [DYMO’s website](http://www.dymo.com/en-NZ/labelwriter-450-turbo-label-printer) (select the *Support* tab and download the relevant drivers for your system)
3. Open **System preferences** > **Printers and Scanners** and click on the “+” button to add the printer.
4. Search for **DYMO** and select the DYMO Label Printer. Click **Add**.

### Set the print preferences in Mac

1. Open Chrome or Safari and type in the address bar: [http://localhost:631/printers/](http://localhost:631/printers/)
  **Can’t see the Printer settings? Try enabling CUPS for your computer.**
Go to the Finder and select 'Applications' from the 'Go' menu.
Double-click on the 'Utilities' folder and launch 'Terminal'.
Enter 'cupsctl WebInterface=yes' and press enter.
Go to the Chrome web browser and go to the address [http://localhost:631/printers/](http://localhost:631/printers/)
2. Click on the Dymo printer and choose Set Default Options.
3. On the next page put your Label size code in the ‘Media Size’ box.
  **Media Size:** 30334
**Continuous Paper:** Disabled
**Output Resolution:** 300 DPI
**Halftoning:** Error Difusion
**Print Density:** Normal
**Print Quality:** Text Only

**Tip**: Paper size 30334 equates to approximately 53.97 mm x 28.57mm. If you're using a different paper size adjust your settings accordingly.

### Update your label template in Maropost

1. Navigate to the **Print Doc** templates: **Settings & tools** > **All settings & tools**
2. Select **System Templates** from the left hand navigation menu and then select **Document Templates**
3. Locate the **Barcode Template**: `SysDoc/printdocs/product/barcode/template.html`
4. Delete the code from line 2 onward, and add the below code and click **Save.**

We recommend backing-up all print docs before making modifications.

```plaintext
<center style=<span class="hljs-string">"padding-top: 15px; padding-right:45px;"</span>>
<img align=<span class="hljs-string">"center"</span> src=<span class="hljs-string">"[%BARCODE_URL fn:&#39;&#39; height:&#39;32px&#39; sku:&#39;[@SKU@]&#39; upc:&#39;[@upc@]&#39; scale:&#39;3&#39;%][%END BARCODE_URL%]"</span> width=<span class="hljs-string">"75%"</span> border=<span class="hljs-string">"0"</span>/>
<br>
[%product <span class="hljs-symbol">sku:</span><span class="hljs-string">&#39;[@sku@]&#39;</span>%]
    [%param *body%]
    <div style=<span class="hljs-string">"font-size:12px; padding:0px 4px 2px 4px;"</span>>[%format <span class="hljs-symbol">type:</span><span class="hljs-string">&#39;text&#39;</span> <span class="hljs-symbol">maxlength:</span><span class="hljs-string">&#39;70&#39;</span>%][<span class="hljs-variable">@name</span>@][<span class="hljs-string">%/format%]</</span>div>
    <div style=<span class="hljs-string">"font-size:16px;"</span>>[%format <span class="hljs-symbol">type:</span><span class="hljs-string">&#39;currency&#39;</span>%][<span class="hljs-variable">@price</span>@][<span class="hljs-string">%/format%]</</span>div>
    [<span class="hljs-string">%/param%]
[%/</span>product%]
<<span class="hljs-regexp">/center></span>
```

### Print barcode labels in Maropost

1. In your Maropost control panel select **Products** > **View All Products**.
2. Select the products you want to print barcodes for.
3. Scroll down to the bottom of the page.
4. Click on the **Print Barcode for Selected** button.

### Chrome print settings

1. Set the paper size to **30336**.
2. Set all margins to **none**, or **Custom** and set them all to **zero**.
3. Change layout to **Landscape**.