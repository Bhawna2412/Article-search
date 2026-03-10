---
title: "Chrome not talking to hardware after release to fix Chrome update forcing SSL"
articleID: 1209
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-05
---

# Chrome not talking to hardware after release to fix Chrome update forcing SSL

# Chrome not talking to hardware after release to fix Chrome update forcing SSL

Google has recently updated Chrome to require a secure connection when accessing a HTTPS URL (which POS is).

Before the POS release this issue was easily (but temporarily solved) as referred to in KB article:

[Recent updates to Chrome affecting POS Hardware](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fress.zendesk.com%2Fhc%2Fen-us%2Farticles%2F203105674-Recent-updates-to-Chrome-affecting-POS-Hardware)

The current issue has occurred because Chrome is remembering the settings from the article above.

The symptoms can be easily identified (apart from not being able to talk to the hardware) by looking for a strike through the HTTPS part of the POS URL and\or a shield in the far right of the address bar.

Before proceeding to Step 1 identify if this computer is sharing hardware attached to another computer. If this is true then the HW Util was probably never run on this machine in the first place, because prior to the Chrome update and the REX release, Chrome did not need the SSL to be installed in order to use the hardware (shared or not). This is necessary as it means you will need to modify Step 2 slightly, but for now proceed to Step 1.

**Step 1**

In some cases the simplest solution can be to just, log out of POS and reset Chrome.

To reset Chrome:

* Click the Open menu button (3 horizontal bars in the top right corner)
* Click Settings
* Click Show advanced settings
* Scroll to the bottom and click Reset settings
* Untick "Help make Google Chrome better etc..."
* Click Reset
* Close all Chrome Windows and reopen

To test properly you should perform a Look Up and attempt to print a receipt (because the HTTPS strike through does not appear straight after login, however the shield should), if at any stage you see either the strike through HTTPS or the shield it means that it is still not resolved and you will need to continue to the next step.

One way to confirm that the SSL certificates are not installed is bring up Developer mode in the browser with F12 key and monitor the network traffic. Attempt at reprint and there should be an error similar to the following:

![rtaImage (2).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUSdEAM.jpg)

**Step 2**

Run the hardware utility again to reinstall the SSL certificates.

*If this computer shares hardware, you will still need to re-run the hardware utility to install the SSL. However, because there is no physical printer or Tyro paired* you will need to skip the printer and tyro setup pages, and don't assign a register.

[Rerun the Hardware Utility](https://galaxy.maropost.com/s/article/Installing-Receipt-Printers-and-Integrated-EFTPOS)

When this has completed it is important to open the Windows Event Viewer to confirm the certificates have been installed. The hardware utility creates a Retail Express folder in Event Viewer under "Applications and Services Logs"

The latest events should refer to this installation, if completed successfully around 10 Informational entries and no errors. One of these should confirm that SSL has been installed.

![rtaImage (3).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUTCEA2.jpg)

Once completed, log back into the POS and test again.

The issue should now be resolved.

If the SSL does not install in the above step, it can be related the Windows user profile. The utility requires admin rights, confirm the current user is an Admin, if so create a new temporary Windows admin user profile and repeat Step 2. If it is now successful you can log in with the original profile and test again.