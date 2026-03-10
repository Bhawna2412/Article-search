---
title: "Clear Non Present or Hidden Ports in Device Manager"
articleID: 1208
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-05
---

# Clear Non Present or Hidden Ports in Device Manager

# Clear Non Present or Hidden Ports in Device Manager

When setting up the Epson Virtual Port Driver for label printing, you may encounter the desired COM port in use by a Serial to USB adapter or even a USB 3G Device.

![rtaImage (4).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUOXEA2.jpg)

In some cases simply unplugging these devices and rebooting is not enough for Windows to 'let go' of the COM port assignment, even Device Manager does not show these ports.

There are two ways to fix this:

Close the Epson Virtual Port Driver utility

* Open Device Manager
* Click View
* Select Show Hidden Devices
* Expand Ports
* Right click the necessary port and select Uninstall (the non present devices should be greyed out)

If the devices still do not show:

* Open System Properties
  + Windows XP: Right click on My Computer and select Properties
  + Windows Vista & 7: Right click on Computer, select Properties and then Advanced system settings
  + Windows 8: Right in the far bottom left hand corner, select System and then Advanced System Settings
* Click Advanced
* Click Environmental Variables
* Under the System Variable click New
* In Variable name type: DEVMGR\_SHOW\_NONPRESENT\_DEVICES
* In Variable value type: 1
* Click OK three times and reopen Device Manager (you may still need to select Show Hidden devices)

This will now let you remove any com assignments that Windows is holding onto. Most times a reboot is not necessary but obviously if the Epson Virtual Port Driver utility is still showing the device is in use, then a reboot will be required.