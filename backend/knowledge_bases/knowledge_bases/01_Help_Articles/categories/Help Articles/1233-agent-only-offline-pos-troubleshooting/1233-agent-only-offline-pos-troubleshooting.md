---
title: "Agent Only - Offline POS Troubleshooting"
articleID: 1233
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Agent Only - Offline POS Troubleshooting

# Agent Only - Offline POS Troubleshooting

This article is designed to be used by Retail Express staff only, as a guide to troubleshooting issues with the Offline POS system. Click on the headings below to view more detail.

#### [How to get an Offline POS Backup from a customer database when requested by Dev](#collapseOne)

  
  

A copy of the Offline POS backup may be requested by the development team so they can review the logs for troubleshooting.

**To get a backup:**

1. Download [**BackupOfflineDB.zip**](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fwww.retailexpressmedia.com%2Fsupport%2FOfflinePOS%2FBackupOfflineDB.zip) to the PC with Offline POS installed
2. Unzip the file  

   **Note:**There are two files in the zip ? backup.cmd and backup.sql
3. **Run backup.cmd** (this will back up the DB to c:\temp\OfflinePos.bak)
4. Navigate to **%programdata%\Retail Express\Offline POS** and copy the logs folder into **c:\temp**
5. **Zip** up the **OfflinePos.bak and the Logs folder** into one zip  

   **Note:**The format of this zip will need to be [yyyyMMdd].zip
6. **Transfer** [yyyyMMdd].zip to your local machine  

   **Important:**SHIFT + Delete the BackupOfflineDB.zip, backup.cmd and backup.sql and empty them form the recycle bin as they contain very sensitive information

     
     

   **Important:**Delete [yyyyMMdd].zip as may take up a fair bit of space
7. Put the zip in \\Employee Folders\Ross\Offline POS Beta\Beta Logs & DBs\[CLIENTNAME]\[OUTLETNAME]\[yyyyMMdd].zip
8. **Notify the developer** that requested the files

  
  

#### [Offline POS Removal / Re-install](#collapseTwo)

  
  

Some instances may require an uninstall/reinstall of Offline POS on the customers machine, such as: an IP address change on their server, or a corrupt Offline database causing POS to crash.

Following the below instructions, no reboot is typically necessary. You should be able to simply reinstall Offline POS and it will download and install SQL 2012 etc?

**Offline POS Removal - Windows 64-bit**

1. Uninstall Retail Express Offline POS from Windows
2. Uninstall Microsoft SQL Server 2012 (64-bit) **Note:** Ensure that the OFFLINEPOS instance is removed
3. Uninstall Microsoft SQL Server 2012 Native Client
4. Delete - C:\ProgramData\Retail Express
5. Delete - C:\Program Files\Retail Express
6. Delete - C:\Program Files\Microsoft SQL Server\MSSQL11.OFFLINEPOS

**Offline POS Removal - Windows 32-bit**

1. Uninstall Retail Express Offline POS from Windows
2. Uninstall Microsoft SQL Server 2012. **Note:** Ensure that the OFFLINEPOS instance is removed
3. Uninstall Microsoft SQL Server 2012 Native Client
4. Delete - C:\ProgramData\Retail Express
5. Delete - C:\Program Files (x86)\Retail Express
6. Delete - C:\Program Files (x86)\Microsoft SQL Server\MSSQL11.OFFLINEPOS

**Once complete, reinstall Offline POS**

1. Head to the zendesk macro **Offline POS::Installation** to copy the download link. It looks like this: ![image](https://ress.zendesk.com/hc/article_attachments/360000145516/blobid0.png)
2. Alternatively use the links in the [Installation Guide](https://galaxy.maropost.com/s/article/Installing-Offline-POS).

  
  

#### [How to get error logs](#collapseThree)

  
  

Zip the entire folder **C:\ProgramData\Retail Express\Offline POS\Logs**