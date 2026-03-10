---
title: "Linkly Troubleshooting > Passwords / Printer options"
articleID: 1184
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-08
---

# Linkly Troubleshooting > Passwords / Printer options

# Linkly Troubleshooting > Passwords / Printer options

This guide is for the use of Troubleshooting Linkly

Including:

1. **Getting the banks username and password (including merchant and terminal ID)**
2. **Changing the Auto Print Receipt checkbox and Cut Receipt checkbox**
3. **If the Linkly GUI interface (Green C) not printing Settlements/Logons**

**!** **ATTENTION !** **IT IS VERY IMPORTANT TO DELETE THESE BATCH SCRIPTS FROM THE CLIENTS COMPUTER, THESE SCRIPTS CAN BE EDITED AND COULD CAUSE DAMAGE IF A UNWANTED USER EDITS OR ADJUSTS VALUES WITHIN THE SCRIPT (****SHIFT + DELETE** **> DELETE PERMANENTLY)**

! UPDATE ! These SCRIPTS now DELETE THEMSELVES!!

  
  

If the batch scripts get stuck at any point in time > EG: Linkly client is stopping.....

And will not continue, click inside the console and press '**any key**', this should continue the script.

All Scripts close automatically

These Scripts restart the Linkly Service, please wait for Linkly to turn green after running through the **Adjust Linkly Printer.bat** and **Linkly add GUI print.bat**

![rtaImage - 2023-07-08T180328.159.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTEIEA2.jpg)

---

  

**Due to a new Update of Linkly software --  
The Username and Password script may not work -- due to Linkly now encrypting the password within the registry**

### **Get the Username and Password for Bank from Linkly**

1. This will show the credentials of
   1. **IDENT > USERNAME**
   2. **PASSWORD**
   3. **MERCHANT ID** (if needed > mainly for bank / Fiserv)
   4. **TERMINAL ID** (if needed > mainly for bank / Fiserv)
2. Check the Server GUI from the Linkly Software if it contains a Username and Password in the server tab  
   ![rtaImage - 2023-07-08T180334.277.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppT52EAE.jpg)  
   ![rtaImage - 2023-07-08T180340.831.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTESEA2.jpg)
3. If the Ident field contains 'EFTSRV1'
   1. the Server is using the Internal Pinpad's 3g/4g network and won't need the password, even if the password field has a password inside (most likely empty).
   2. You won't need the script for this if the field is 'EFTSRV1'  
      ![rtaImage - 2023-07-08T180350.024.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTEmEAM.jpg)
4. Run the script provided called '**Get EFT pass.bat**'
5. Reference the Picture below to understand what value belong to which Registry request
   1. Ident REG\_SZ = **IDENT (USERNAME)**
   2. PWORD REG\_SZ = **PASSWORD**
   3. MERCHANTID REG\_SZ = **MERCHANT ID**
   4. TERMINALID REG\_SZ = **TERMINAL ID**  
      ![rtaImage - 2023-07-08T180419.180.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTEwEAM.jpg)
6. The Batch Script will close automatically
7. ! IMPORTANT ! Delete file after

---

### **Change Auto Print, Always Cut and Printer selection feature (without running through the Linkly setup config)**

When you First execute the script, it will display the current values of the

**- Current Printer Name**

**- Auto Print receipt option**

**- Cut Receipt option**

0x1 = value of 1 which == **CHECKED** in Checkbox

---

0x0 = value of 0 which == **UN-CHECKED** in Checkbox

![rtaImage - 2023-07-08T180437.241.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTF1EAM.jpg)

---

1. Drop the **Adjust Linkly Printer.bat**script into the PC
2. Open script it will first ask '**Do you want to change the Printer NPT is the internal EFTPOS printer (Y/N)?**' this will change the name of the printer, pressing '**y**' will say yes to change printer name -- pressing '**n**' will continue to the next step and keep the same printer name  
     
   ![rtaImage - 2023-07-08T180449.678.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppSXVEA2.jpg)
3. If you want to change the printer name, copy the exact name of the printer and type exactly into the batch script
4. The next stage will ask '**Do you want to make changes to the Linkly Printer Override POS options? Y/N**' this will continue to the checkboxes of the Auto print and the Auto cut feature during the Linkly wizard config  
     
   ![rtaImage - 2023-07-08T180455.182.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTFLEA2.jpg)
5. The next stage will ask '**Enable Override POS AutoPrint (Linkly always prints)? Y(0x1)/N(0x0)**' this will change the checkbox of the Auto print feature during the Linkly wizard config
   1. If you want the **Checkbox**> checked > Press '**y**'
   2. If you want the **Checkbox**> unchecked > Press '**n**'
6. The next stage will ask '**Do you want to change Cut Receipt**' this will change the checkbox of the Auto print feature during the Linkly wizard config
   1. If you want the **Checkbox**> checked > Press '**y**'
   2. If you want the **Checkbox**> unchecked > Press '**n**'
7. Reference picture below for the Y/N selection  
     
   ![rtaImage - 2023-07-08T180500.743.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppTFpEAM.jpg)
8. Once the script is done, it will restart the Linkly client so the **Green C**will disappear and reappear Yellow > Wait until it turns Green again.
9. The Batch Script will close automatically
10. ! IMPORTANT ! This Script will prompt you for deletion

---

### **If the Linkly GUI (Green C) doesn't print from the GUI > Settlement / Logon**

1. Run the '**Linkly add GUI print.bat**', this will adjust the values
2. Once the script is done, it will restart the Linkly client so the **Green C**will disappear and reappear Yellow > Wait until it turns Green again.
3. Test to ensure the script works
4. The Batch Script will close automatically
5. ! IMPORTANT ! Delete file after