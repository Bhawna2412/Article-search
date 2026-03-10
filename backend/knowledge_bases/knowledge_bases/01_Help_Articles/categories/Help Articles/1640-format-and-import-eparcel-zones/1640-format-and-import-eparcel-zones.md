---
title: "Format and Import eParcel Zones"
articleID: 1640
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Format and Import eParcel Zones

### Overview

eParcel zones come in a PDF format and can be obtained by the clients eParcel account manager. There might be some variations to this, depending on their account manager and location in Australia.

### What you need

- eParcel Zones Table
- MS Excel
- Sublime Text Editor
- [Maropost Commerce zone template](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fassets.netostatic.com%2Fecommerce%2F6.67.0%2Fassets%2Fcpanel%2Fexamples%2Fshipping_zone_import.csv)

### Copy content into Sublime

1. 
  Open the eParcel zone PDF file.
2. 
  Select all the content in the table and copy it.
3. 
  Paste the content in sublime text editor.

### Format Data in Sublime

The Purpose of formatting the data is to convert it into the format that can be imported into Maropost Commerce:

1. 
  In sublime, open the find and replace tool (Ctrl - H).
2. 
  Manually change the **tab** to a **space** for the zone names. If you don't, zone names will jump to the next column.
3. 
  Add 2 more tabs to postcodes to push them into the correct column.
4. 
  Copy all of the data and paste it into MS Excel

### Format Data in Excel

Format and paste the data under the appropriate column headings.

| Column Name | Description |
| --- | --- |
| Zone Name | Name for the zone eg. Sydney Metro, SA Country etc. |
| Zone Code | Code for the zone eg. Q1, T0, N3 etc. |
| From Post Code | The first post code in the zone (numerically). |
| To Post Code | The last post code in the zone (numerically). |
| Courier | Name of the courier this information applies to eg. eParcel. |
| Country | Code of country the zones apply to eg. AU |

1. 
  Paste data under the relevant column headings in the Maropost Commerce zone file.
2. 
  Fill out Courier and Country fields, making sure the courier name is one that does not yet exist in the Maropost Commerce account
3. 
  Drag down **Zone Name** and **Zone Code** columns so they apply on every row
4. 
  Save file

If the To Post Code is blank, it means the range only covers one post code, so only the From Post Code is specified.
But for the data to import correctly, it will need the From Post Code in the To Post Code as well.

A quick way to do this is to:

1. 
  Select the column.
2. 
  Go to **Edit** > **Find** > **Go To**.
3. 
  Select special.
4. 
  Select Blanks, then click OK.
5. 
  In the first cell write a formula to = the from post code e.g =c3.
6. 
  Hold down Ctrl and press Enter to apply this to all blank fields.
7. 
  Copy this column into text editor then back into excel to remove the formula.

### Upload Zones into Maropost Commerce

Steps to import your zone file can be found on the Maropost Commerce [support hub](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.netohq.com%2Fsupport%2Fs%2Farticle%2Fimport-shipping-zones).