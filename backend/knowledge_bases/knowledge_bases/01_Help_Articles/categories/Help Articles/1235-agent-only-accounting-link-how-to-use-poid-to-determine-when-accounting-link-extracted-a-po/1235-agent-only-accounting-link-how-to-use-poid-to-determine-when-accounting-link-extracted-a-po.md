---
title: "Agent Only Accounting Link - How to use POID to determine when Accounting Link extracted a PO"
articleID: 1235
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Agent Only Accounting Link - How to use POID to determine when Accounting Link extracted a PO

# Agent Only Accounting Link - How to use POID to determine when Accounting Link extracted a PO

In order to determine when a Purchase Order was extracted in Accounting Link, when the POID is known, open the SQL Editor by pressing Ctrl Shift Alt S.

Enter the following and replace ***POID*** with the Retail Express Purchase Order ID:

*select importdate, fromdate, todate, uploaddate,\* from x\_purchaseorder*   
*inner join reimportlog on reimportlog.importId  = x\_purchaseorder.importId*  
*where POID = **POID***

***![](https://ress.zendesk.com/hc/en-us/article_attachments/204643258/AIS_POIS.jpg)***

The "ImportDate" column will show the Extract Date this PO was extracted. There are several other bits of useful information in the results, such as: UploadDate, DateReceived, JournalRef and UpdateDate.