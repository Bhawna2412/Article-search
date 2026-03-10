---
title: "EFTPOS (Linkly-based) troubleshooting - Yellow C"
articleID: 1349
knowledgeBase: "Help Articles"
lastUpdated: 2023-05-11
---

# EFTPOS (Linkly-based) troubleshooting - Yellow C

# EFTPOS (Linkly-based) troubleshooting - Yellow C

This guide is useful for any EFTPOS machines that connect through to Linkly

Follow the guide below to reconnect the EFTPOS machine -- if the Linkly software cannot detect the Pinpad -- Yellow C

![mceclip0.png](https://ress.zendesk.com/hc/article_attachments/5087229362959/mceclip0.png)

---

### **INGENICO MOVE/5000 - Please Check that the Bluetooth icon on top left is a Green Colour before proceeding**

1. Log out of POS
2. Disconnect and Reconnect the **USB cable** from the Base > Wait for 10 seconds, check if the **C** turns Green on your computer **(If Linkly is Green the EFTPOS is now working skip to # 5 - If not continue)**
3. Restart Pinpad (**Func**+ **Clear**-- HOLD) > once restarted > Wait for 20 seconds, check if the **C** turns Green on your computer **(If Linkly is Green the EFTPOS is now working skip to # 5 - If not continue)**
4. Press **Func**11112227 > Press **Enter**
   1. Press **Enter**again on Serial coms message
   2. **Select**Serial
   3. **Select**USB - SLAVE
   4. **Select**VLI 115200
   5. Wait for 10 seconds, check if the **C** turns Green on your computer **(If Linkly is Green the EFTPOS is now working)**
5. Log back into POS and check EFTPOS is connecting with Retail Express POS

---

  

If the client has a EFTPOS machine that displays a list instead of 'Func?'

Generally indicates a 'Locked-Down' or another branded/model of EFTPOS

Follow the guide below:

  

---

### **NON-INGENICO MOVE/5000 terminals and Locked-Down INGENICO MOVE/5000**

1. Log out of POS
2. Disconnect and Reconnect the **USB cable** from the Base > Wait for 10 seconds, check if the **C** turns Green on your computer **(If Linkly is Green the EFTPOS is now working skip to # 5 - If not continue)**
3. Restart Pinpad (**Func**+ **Clear**-- HOLD) > once restarted > Wait for 20 seconds, check if the **C** turns Green on your computer **(If Linkly is Green the EFTPOS is now working skip to # 5 - If not continue)**
4. Press **Func** go to **Linkly** inside the list (generally #4)
5. **Type** 11112227 > Press **Enter**
   1. Press **Enter**again on Serial coms message
   2. **Select**Serial
   3. **Select**USB - SLAVE
   4. **Select**VLI 115200
   5. Wait for 10 seconds, check if the **C** turns Green on your computer **(If Green the EFTPOS is now working)**
6. Log back into POS and check EFTPOS is connecting with Retail Express POS