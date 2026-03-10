---
title: "MYOB AccountRight Accounting Data Export"
articleID: 190
category: "Accounting > MYOB Accounting Data Export"
knowledgeBase: "Retail Express"
---

# MYOB AccountRight Accounting Data Export

You can export retail transaction data from **Retail Express** in formats compatible with MYOB AccountRight desktop software, enabling integration with this popular Australian accounting platform even without real-time connectivity. This helps optimize your accounting workflows by providing structured data exports that can be imported into MYOB AccountRight, reducing manual data entry while working with desktop accounting software.

Exporting data for MYOB AccountRight involves generating formatted files containing sales, purchases, and other financial transactions that conform to MYOB's import requirements. When you use accounting data export properly, you can expect significantly reduced manual accounting entry, consistent data formatting supporting reliable imports, maintained financial accuracy through structured data transfer, time savings for accounting processes, and flexibility to synchronize accounting on your preferred schedule.

**Version Note**: The Accounting Data Export feature exports MYOB files formatted for direct upload to MYOB Desktop v19+ and MYOB AccountRight 2018+.

The Accounting Data Export window provides access to the setup files for the integration as well as the data files that contain the information from a date range.

## Creating the Accounting Data Export Files

[▶ Embedded Video](https://player.vimeo.com/video/292254383)
[Accounting Data Export](https://galaxy.maropost.com/kb/articles/190-myob-accountright-accounting-data-export#data-export-files)

## Export files from Retail Express

1. Log into Retail Express
2. Navigate to **Settings > Integrations > Accounting Data Export**
3. Use the **Filters **as required to refine the results
  ![rtaImage (57).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVW4EAM.jpg)
4. Click **Export Accounting Files **to export the selected transactions
5. Click **Start Processing**
6. The file will be created according to the selected options and filters.
7. Once the file has been processed ready for download click **Download Files**
  ![rtaImage - 2023-07-08T220846.276.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVW9EAM.jpg)

### Filters

Most of the filters are self-explanatory, however, see the detailed information below for the more advanced filtering explanations.

|  |  |
| --- | --- |
| **Field** | **Details** |
| Export Date From/To | These dates are inclusive and relate to the date the transaction was entered into Retail Express e.g. if you entered a payment on the 1st of July but backdated the payment to 30th of June, you will need to extract the 1st of July to extract the payment. |
| Accounting Method | Only the Accrual Method is supported - please confirm this method suitability with your bookkeeper or accountant. |

### Transaction Types

|  |  |
| --- | --- |
| **Transaction Type** | **Details** |
| Sales | Two files are generated for sales:  - **ServiceSales** will include a summarised daily transaction for stock fulfilled, as well as surcharges, layby, debtors and voucher movements. - **ReceiptPayments** will include Summarised daily payments for all transactions, except for direct debits which upload individually. |
| Purchases | The **ServicePurchases** file includes a summary per purchase order. Once received, a purchase will be created with total costs for items, miscellaneous costs and freight. Any duty applied to purchase orders will be in the GeneralJournal file |
| Transfers | Inter-store transfers are included in the **GeneralJournal** file. Transfers between stores will run through an ?In Transit? account on the date of dispatch at the sending store and the date of receipt at the receiving store |
| Stock Adjustments | Included in the **GeneralJournal** file, consists of the buy price value for all adjustments including manual, stock take and mass upload. Cost adjustments will result in adjustments to correct stock value |
| Cash Variances | Included in the **GeneralJournal** file, journaled as a daily total to an expensing account |
| Petty Cash/Money In Money Out | Included in the **GeneralJournal** file, journaled as a daily total to a clearing account for expensing |

## Extract the Export Files

Retail Express exports the files in a compressed format so the file is smaller and faster to download. Before importing these files into MYOB, these files will need to be extracted.

> **Note:** If you don't extract the files you will be unable to import the files into MYOB.

To extract the files:

1. Open the location where your files were downloaded
2. Right-click the downloaded file
3. Select **Extract All**
  ![rtaImage - 2023-07-08T220851.929.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppUcgEAE.jpg)
4. **Select a location** for the files to be extracted to

> **Note:** Remember this location when selecting the files to be imported into MYOB

5. Click **Extract**

## Uploading Journals

The **GeneralJournals.TXT** file will include:

- Stock adjustments
- Inter-store transfers
- Cash up variances
- Petty cash
- Duty on purchases

To begin the upload:

> **Note:** It is recommended that you take a backup of your MYOB file before performing any new import

1. Open MYOB to the main screen
  ![rtaImage - 2023-07-08T220857.789.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppUltEAE.jpg)
2. Navigate to **File > Import/Export Assistant**

> **Note:** For MYOB Desktop navigate to File > Import Data > General Journal Entries

3. Select **Import Data**
4. Click** Next**
5. Select **General Journal Entries **from the Import drop-down
6. Click **Browse**
  ![rtaImage - 2023-07-08T220902.617.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppUaQEAU.jpg)
7. Navigate to the location of the saved **GeneralJournals.TXT file **exported from Retail Express
8. Click **Next**
9. You will be prompted to configure the import format

> **Note:** once these settings have been selected initially they should remain selected automatically during future imports

10. Select **Commas **from the "Data is separated by" option
11. Select **Headers or Labels**
  ![rtaImage - 2023-07-08T220907.415.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVWJEA2.jpg)
12. Click** Next**
13. The Match Fields screen will be displayed
14. Select **Auto Match**

> **Note:** For MYOB Desktop select **Match All**

  ![rtaImage - 2023-07-08T220912.052.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVWOEA2.jpg)
15. Click **Next**
16. You will be prompted to create a Backup prior to importing the data

> **Note:** We always recommend creating a backup prior to import

17. Once the import is complete the **Conclusion **screen will be displayed providing a summary of the number of records imported successfully, and any warnings or errors.
18. Click the link to **view the log file **if required
  ![rtaImage - 2023-07-08T220916.188.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVWTEA2.jpg)

## Uploading Purchases/Bills

To begin the upload:

> **Note:** It is recommended that you take a backup of your MYOB file before performing any new import.

1. Open MYOB to the main screen
  ![rtaImage - 2023-07-08T220921.430.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVWYEA2.jpg)
2. Navigate to **File > Import/Export Assistant**

> **Note:** For MYOB Desktop navigate to File > Import Data > Purchases > Service Purchases

3. Select **Import Data**
4. Click** Next**
5. Select **Purchases **from the Import drop-down
6. Select **Service Purchases**
7. Click **Browse**
8. Browse to the location of the saved **ServicePurchases.TXT** file
9. Click **Next**
10. You will be prompted to configure the import format

> **Note:** once these settings have been selected initially they should remain selected automatically during future imports

11. Select **Commas **from the "Data is separated by" option
12. Select **Headers or Labels**
13. Click** Next**
14. The Match Fields screen will be displayed
15. Select **Auto Match**

> **Note:** For MYOB Desktop select Match All

16. Click **Next**
17. You will be prompted to create a Backup prior to importing the data
18. Once the import is complete the **Conclusion **screen will be displayed providing a summary of the number of records imported successfully, and any warnings or errors.
19. Click the link to **view the log file **if required

> **Note:** As the discount and payment terms are held against the supplier in MYOB you will likely receive warnings that the default values have been used for these fields.  This is expected as this information is not available for export from Retail Express.

> **Note:** If you have entered the same supplier invoice number on two different purchase orders in Retail Express, the second purchase order will be rejected by MYOB and you will have to enter it manually.

## Uploading Sales

To begin the upload:

> **Note:** it is recommended that you take a backup of your MYOB file before performing any new import

1. Open MYOB to the main screen
  ![rtaImage - 2023-07-08T220927.115.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVWsEAM.jpg)
2. Navigate to **File > Import/Export Assistant**

> **Note:** For MYOB Desktop navigate to File > Import Data > Sales > Service Sales

3. Select **Import Data**
4. Click** Next**
5. Select **Sales**
6. Select **Service Sales** from the Type drop-down
7. Click **Browse**
8. Browse to the location of the saved **Servicesales.txt **file
9. Click **Next**
10. You will be prompted to configure the import format

> **Note:** Once these settings have been selected initially they should remain selected automatically during future imports

11. Select **Commas **from the "Data is separated by" option
12. Select **Headers or Labels**
13. Click** Next**
14. The Match Fields screen will be displayed
15. Select **Auto Match**

> **Note:** ;For MYOB Desktop select Match All

16. Click **Next**
17. You will be prompted to create a Backup prior to importing the data
18. Once the import is complete the **Conclusion **screen will be displayed providing a summary of the number of records imported successfully, and any warnings or errors.
19. Click the link to **view the log file **if required