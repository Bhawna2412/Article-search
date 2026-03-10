---
title: "Retail Express Hardware Utility Error"
articleID: 1141
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-09
---

# Retail Express Hardware Utility Error

# Retail Express Hardware Utility Error

**Retail Express Hardware Utility Error** 

?The Application Binding Data Format is Invalid? 

Hardware Utility ? Failing During Process 

*Overview* 

Error message is similar to below, it just doesn?t have the line *?The application is missing required files?.* 

![rtaImage - 2023-07-09T231029.057.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphjZEAQ.jpg)

This issue stems from a previous *?temporary fix?* that was implemented in the system, involving the creation of a secondary profile *(with a clean installation of the software)*for Retail Express Hardware Utility Install failures. If the software is removed from the old profile, instead of the REX-created profile *(generally called REX),* it will result in an endless loop where the Hardware Utility can?t be deleted, nor can it be installed. 

The resulting error page will occur when the REX Hardware Utility Software attempts to install and will present an error page that has minimal text, with only 2 options: ***?Details?*** and ***?OK?***. Selecting ***?Details?***will open a text document through Notepad, which shows an error message approximately halfway down the page with the error message code reading: 

![rtaImage - 2023-07-09T231033.929.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppgomEAA.jpg)

 

 

*Resolution* 

There were 2 main actions taken to resolve this issue. The first was to ***Update the Registry,*** and the second was to ***Delete the Apps folder.*** 

Updating Registry 

1. Open the Registry Editor *(Regedit)*
2. Navigate to the following Registry file on the machine:   
   *<HKEY\_CURRENT\_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\e95250b3a5d94c01>*
3. Delete the Entry from the Registry ***AFTER ATTEMPTING TO UNINSTALL FROM WINDOWS.***
4. Close the Registry Editor.

Deleting the Apps Folder 

1. Open File Explorer in Windows
2. Navigate to:   
   *<C:\Users\$USERPROFILE$\AppData\Local\Apps>*
3. Delete folder ?2.0? *(shown below)*   
   ![rtaImage - 2023-07-09T231039.393.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphbwEAA.jpg)

*Manually Install Tyro Terminal Adapter (Optional)* 

After performing these two fixes, you may still need to manually install the Tyro Terminal Adapter before running the Hardware Utility *(depending on if they use Tyro)*. If so, you should: 

1. Navigate to:   
   <[[https://tyro.com/tta](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Ftyro.com%2Ftta)](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Ftyro.com%2Ftta)>

This will start the download of the Tyro Terminal Adapter 

1. Run the application and follow the prompts to install the software.
2. Run the Retail Express Hardware Utility

This should resolve the issues with your Retail Express Hardware Utility.  