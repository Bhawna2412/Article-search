---
title: "POE Automation script"
articleID: 1325
knowledgeBase: "Help Articles"
lastUpdated: 2025-11-28
---

# POE Automation script

# POE Automation script

This Script is designed to be run inside the Purchase Order Error Manager (POE) to remove all error entries without you having to do it manually!

![mceclip0.png](https://ress.zendesk.com/hc/article_attachments/5056731489039/mceclip0.png)
The Scripts contain 3 different entries (you may pick whichever script to run):

1. Write-Off
2. Re-Order
3. Back-Order

The script is to be run in a **NEW** Browser window of either Chrome or Firefox (Chrome preferred).

The Script does not require a virtual machine or your attendance, you may continue to work in another Browser window/tab whilst the script runs.

## Video Overview

[▶ Embedded Video](https://player.vimeo.com/video/725198385?h=62be5348b3&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed)

## File Download

[Click here to download POE Automation Script Files](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fdownloads%2FPOEmanagerJSONfiles.zip)

## Installation

Before beginning, you will be required to install an open-source Browser Extension from[UI Vision](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fui.vision%2F)

From there once the installation is complete, you may import the Scripts into the extension and continue to the Database with the error entries to remove.

## Running the Script

1. Download [Ui Vision](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fui.vision%2F) -
2. Download the Zip file (End of Article) containing 3 JSON files, carefully named:
- POE backorder
- POE reorder
- POE writeoff
3. Import each file individually using the import-file/zip (repeat import for each POE script)
  ![mceclip1.png](https://ress.zendesk.com/hc/article_attachments/5056807326223/mceclip1.png)
4. Open a NEW Browser window
5. Log into the Database
6. Open UI Vision in your Extension list
  ![mceclip2.png](https://ress.zendesk.com/hc/article_attachments/5056810467727/mceclip2.png)
7. Go to the POE in the Database
8. Select your preferred script entry  1. **Backorder**
  2. **Writeoff**
  3. **Reorder**
9. Play the Script in a loop with UI Vision
  ![mceclip4.png](https://ress.zendesk.com/hc/article_attachments/5056870013583/mceclip4.png)

  ![mceclip6.png](https://ress.zendesk.com/hc/article_attachments/5056877027471/mceclip6.png)
10. You can run the Loop over the number of error entries, once the script cannot locate the Pencil button, it will error and stop.

## Frequently Asked Questions

[If the script fails to run](#fails-to-run)

If the script fails to run, please kindly follow the steps below to refresh the web page/script:

1. Log out of the Database
2. Close the Browser Window
3. Close the Extension
4. Open a NEW Browser Window
5. Try again to run the script