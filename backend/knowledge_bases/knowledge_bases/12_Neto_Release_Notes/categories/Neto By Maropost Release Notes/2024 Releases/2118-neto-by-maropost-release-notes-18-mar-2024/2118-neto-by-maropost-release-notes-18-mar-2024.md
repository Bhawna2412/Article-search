---
title: "Neto by Maropost Release Notes – 18 Mar 2024"
articleID: 2118
category: "2024 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-14
---

# Neto by Maropost Release Notes – 18 Mar 2024

## **Overview**

This release includes eCommerce releases **6.282.0** to **6.286.0**.

## **Updates and Changes**

- Team Global Express IPEC services have been migrated from FTP to SFTP, and Neto has upgraded their configurations to support the same.
- 

## **Fixes**

- Fixed an issue in the Disputes section, where the messages without any image evidence in the Message History were shown with the broken image icon.
  ![image-20240207-035001](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20240207035001.0685g00000Lp0B5AAJ.png)

- Fixed an issue where in some cases, the invoice export task as part of the MYOB extension was getting executed with no exported invoices.
- Implemented measures to prevent the rare occurrence of duplicate orders being created from a single Stripe transaction.
- 
  Fixed an issue regarding a TNT FTP requirement, where the ‘signature required’ clause was not included, which led to a scope where a TNT consignment was assigned as ATL (Authority To Leave). Now the system will print the ‘signature required’ clause in the customer instructions section of the shipping label. This will also be included inside the TNT manifest

  ![image-20231208-070508](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20231208070508.0685g00000Lp0BKAAZ.png)
- 
  With the Xero accounting integration, if you chose to batch invoice records together, with the ‘Export transaction date for invoices’ configured as date completed, the system was segregating it in batches according to the actual invoice time stamp (down to the minute) instead of the invoice date stamp (batched per day), as configured in the settings. This led to invoices completed that day to not be batched together. This issue has been resolved.

  ![image-20231208-064810](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20231208064810.0685g00000Lp0B0AAJ.png)
-