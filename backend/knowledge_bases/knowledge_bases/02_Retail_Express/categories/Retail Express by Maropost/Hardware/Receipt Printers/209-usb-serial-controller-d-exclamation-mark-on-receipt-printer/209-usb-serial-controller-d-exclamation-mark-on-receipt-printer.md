---
title: "USB-Serial Controller D (Exclamation mark) on Receipt Printer"
articleID: 209
category: "Hardware > Receipt Printers"
knowledgeBase: "Retail Express"
---

# USB-Serial Controller D (Exclamation mark) on Receipt Printer

You can resolve USB serial controller driver issues affecting receipt printer connectivity, restoring reliable receipt printing capabilities through proper driver installation. This helps optimize your retail operations by maintaining continuous receipt printing functionality, preventing checkout delays, and ensuring customers receive transaction documentation.

If a receipt printer has a Serial port to USB adapter and Windows is showing it as a USB-Serial Controller-D with an exclamation mark

**THERE ARE 2 TYPES OF USB SERIAL ADAPTERS - RECOMMENDED TO TRY BOTH (Aten first)**

Serial port adapter:![rtaImage (86).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiDfEAI.jpg)

'Follow the steps below to help Windows 10 recognise the receipt printer

1. Download driver from Aten website
2. 
3. Click Proceed and Agree
4. Run the .exe
5. Now the device should be recognised as an 'ATEN USB to Serial Bridge'
6. Now install drivers dedicated to that specific receipt printer
7. Assign COM port to driver

If the printer does not change to the ATEN USB to Serial Bridge

It is due to the serial adapter being a non-Aten brand

Try and install via **Plugable USB Serial Adapter Drivers**

1. Download driver from plugable.com
2. 
3. Download the Windows XP and Above version\
4. Click Proceed and Agree
5. Run the **PL2303-Prolific_DriverInstaller_v1200.exe**
6. Now the device should be recognised as a 'Prolific USB-to-Serial Comm Port'
7. Assign COM port to driver