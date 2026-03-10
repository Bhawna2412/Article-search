---
title: "MYOB Accounting Data Export Setup"
articleID: 1327
knowledgeBase: "Help Articles"
lastUpdated: 2025-11-28
---

# MYOB Accounting Data Export Setup

# MYOB Accounting Data Export Setup

**Version Note:** The Accounting Data Export feature exports MYOB files formatted for direct upload to MYOB Desktop v19+ and MYOB AccountRight 2018+.

[▶ Embedded Video](https://player.vimeo.com/video/292254383)

## Before you begin

Before you can use the Retail Express Accounting Data Export (formatted to work with MYOB AccountRight) you will need to ensure the following items have been completed:

1. Create a MYOB File
2. Update your MYOB Payment Methods
If the Payment Method names don't match between each system you will encounter errors during the import of transactions

> **Note:** MYOB is case-sensitive, so you will need to match the formatting exactly as per Retail Express e.g. VISA is not the same as Visa.

[Create a MYOB file](#myob-file)

Create a MYOB file (for assistance with MYOB setup refer to [MYOB - Create a Company File](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fhelp.myob.com%2Fwiki%2Fdisplay%2Far%2FCreate%2Ba%2Bcompany%2Bfile) or contact MYOB Support directly)

[Update Payment Method Names](#pt-rex)

**Check the names in Retail Express**

1. Log into Retail Express
2. Navigate to **Settings > Payment Types**
3. You will see a list of payment types in a table:
  ![mceclip1.png](https://ress.zendesk.com/hc/article_attachments/360002426935/mceclip1.png)

For detailed information on this screen refer to the [Settings - Payment Types](https://galaxy.maropost.com/s/article/Configuring-Payment-Types) article

**Update the Payment Method names in MYOB**

1. Open MYOB
2. Navigate to **Lists > Sales and Purchases Information > Payment Methods**
3. You will see a list of your existing **Payment Methods**
4. **Double click **a Payment Method to open it for editing
5. **Update **the Payment Method name
  ![mceclip2.png](https://ress.zendesk.com/hc/article_attachments/360002427035/mceclip2.png)
6. Click **OK**

For assistance with MYOB setup, see: [MYOB - Create a Payment Method](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fhelp.myob.com%2Fwiki%2Fdisplay%2Far%2FSales%2Band%2Bpurchases%2Binformation%23expand-Tocreateapaymentmethod) or contact MYOB Support directly.

## Step 1 - Download the Setup Files from Retail Express

Retail Express exports the setup files in a compressed format so the file is smaller and faster to download. Before importing these files into MYOB, these files will need to be extracted.

> **Note:** If you don't extract the files you will be unable to import the files into MYOB.

To download and extract the setup files ready for MYOB:

1. Navigate to** Settings > Integrations > Accounting Data Export**
2. Ignore the filters (these are used later when exporting data, not the Setup files)
3. Click **Download Setup Files**
4. Click **Save** or **Save As**
5. Browse to your preferred location
6. Click Save
7. Open the location where your files were downloaded
8. Right-click the downloaded file
9. Select **Extract All**
10. **Select a location** for the files to be extracted to

> **Note:** Remember this location when selecting the files to be imported into MYOB

11. Click **Extract**

You will see four .TXT files, the correct for direct import to MYOB. These files will be called either Accounts, CustomerCards, Jobs, or SupplierCards, with the date of the extract included in the filename.

![2018-08-10_14_44_23-RefactorSerup.png](https://ress.zendesk.com/hc/article_attachments/360000862815/2018-08-10_14_44_23-RefactorSerup.png)

> **Note:** These files are exported as comma-separated values (CSV).  If there are any commas (,) in your Outlet or Supplier names, you may receive errors on import.

## Step 2 - Import the Setup files into MYOB

Each of the 4 setup files will need to be imported into MYOB, selecting the appropriate Import Field and Accounts Type during the import process.

|  |  |  |  |
| --- | --- | --- | --- |
| **Retail Express ****Setup File** | **Sample Export Filename*** | **MYOB Import Field** | **MYOB Accounts Type** |
| Accounts | Accounts20190806.TXT | Accounts | Account Information |
| CustomerCards | CustomerCards20190806.TXT | Cards | Customer Cards |
| Jobs | Jobs20190806.TXT | Jobs | - |
| SupplierCards | SupplierCards20190806.TXT | Cards | Supplier Cards |

* The file names will display different dates depending on the date the file was exported from Retail Express.

Click on the heading below for information on detailed steps on importing each of these files.

[Accounts](#import-accounts)

1. Navigate to **File > Import/Export Assistance > Import Data**
2. Click **Next**
3. Select the MYOB Import Field** **of **Accounts**
4. Select the matching MYOB Accounts Type** **field of **Account Information**
5. Click **Browse**
6. Navigate to where you saved the files in step 3, and select the **Accounts **file
7. Click **Next**
8. Select the "Data is separated by"** **option of **Commas**

> **Note:** These files are exported as comma-separated values (CSV).  This means that if there are any commas (,) in your Outlet or Supplier names, you may receive errors on import.

9. For the "The first line of the file contains" option** **select **Headers or Labels**
10. For the "If data you are importing already exists in this company file" option select **Reject the Import data**
11. Click **Next**
12. Click **Auto match**
13. Click **Next**
14. You will be prompted to perform a **Backup**

> **Note:** We always recommend performing a backup at this point, should you need to restore data for any reason

15. Once the backup has been completed, click **Import**
16. The import will be processed
17. If you need to import another file click **Import more data**, otherwise click **Close**

[Customer Cards](#import-customers)

1. Navigate to **File > Import/Export Assistance > Import Data**
2. Click **Next**
3. Select the MYOB Import Field** **of **Cards**
4. Select the matching** **MYOB Accounts Type field of **Customer Cards**
5. Click **Browse**
6. Navigate to where you saved the files in step 3, and select the **CustomerCards **file
7. Click **Next**
8. Select the "Data is separated by"** **option of **Commas**

> **Note:** These files are exported as comma-separated values (CSV).  This means that if there are any commas (,) in your Outlet or Supplier names, you may receive errors on import.

9. For the "The first line of the file contains" option** **select **Headers or Labels**
10. For the "If data you are importing already exists in this company file" option select **Reject the Import data**
11. For the "Match Cards using their:" option select **Co./Last Name**
12. Click **Next**
13. Click **Auto match**
14. Click **Next**
15. You will be prompted to perform a **Backup**

> **Note:** We always recommend performing a backup at this point, should you need to restore data for any reason

16. Once the backup has been completed, click **Import**
17. The import will be processed
18. If you need to import another file click **Import more data**, otherwise click **Close**

[Jobs](#import-jobs)

1. Navigate to **File > Import/Export Assistance > Import Data**
2. Click **Next**
3. Select the MYOB Import Field** **of **Jobs**
4. Click **Browse**
5. Navigate to where you saved the files in step 3, and select the **Jobs **file
6. Click **Next**
7. Select the "Data is separated by"** **option of **Commas**

> **Note:** These files are exported as comma-separated values (CSV).  This means that if there are any commas (,) in your Outlet or Supplier names, you may receive errors on import.

8. For the "The first line of the file contains" option** **select **Headers or Labels**
9. For the "If data you are importing already exists in this company file" option select **Reject the Import data**
10. Click **Next**
11. Click **Auto match**
12. Click **Next**
13. You will be prompted to perform a **Backup**

> **Note:** We always recommend performing a backup at this point, should you need to restore data for any reason

14. Once the backup has been completed, click **Import**
15. The import will be processed
16. If you need to import another file click **Import more data**, otherwise click **Close**

[Supplier Cards](#import-suppliers)

1. Navigate to **File > Import/Export Assistance > Import Data**
2. Click **Next**
3. Select the MYOB Import Field** **of **Cards**
4. Select the matching** **MYOB Accounts Type field of **Supplier Cards**
5. Click **Browse**
6. Navigate to where you saved the files in step 3, and select the **SupplierCards **file
7. Click **Next**
8. Select the "Data is separated by"** **option of **Commas**

> **Note:** These files are exported as comma-separated values (CSV).  This means that if there are any commas (,) in your Outlet or Supplier names, you may receive errors on import.

9. For the "The first line of the file contains" option** **select **Headers or Labels**
10. For the "If data you are importing already exists in this company file" option select **Reject the Import data**
11. For the "Match Cards using their:" option select **Co./Last Name**
12. Click **Next**
13. Click **Auto match**
14. Click **Next**
15. You will be prompted to perform a **Backup**

> **Note:** We always recommend performing a backup at this point, should you need to restore data for any reason

16. Once the backup has been completed, click **Import**
17. The import will be processed
18. If you need to import another file click **Import more data**, otherwise click **Close**

## []()Frequently Asked Questions

[What's the difference between an "Error" and a "Warning" during import](#warning-vs-error)

During the import, you may encounter an error or a warning. Typically this means:

|  |  |
| --- | --- |
| **Warning** | The Import has **continued **but there is something you should be aware of e.g. Invalid Tax Code, default substituted |
| **Error** | There was an issue with the import so that it will **reject** **those lines **from** **the import (the remainder of the import will continue to be processed). |

If you review the error log there will be a code to help you identify the appropriate record affected by the warning or error.

For example, looking at the below import log, there was an error (id -24) related to the Brand Collective line (import did not continue), and a warning (ID 257) related to the Gibson Brands line (import continued)

![mceclip13.png](https://ress.zendesk.com/hc/article_attachments/360002534056/mceclip13.png)