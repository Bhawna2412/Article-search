---
title: "How to use the web browser Developer Tools to help diagnose printing\tyro problems"
articleID: 1186
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-08
---

# How to use the web browser Developer Tools to help diagnose printing\tyro problems

# How to use the web browser Developer Tools to help diagnose printing\tyro problems

Using the web browser developer tools can help determine where the print job is being sent after the Print Invoice button has been clicked.

When diagnosing printing problems, perform a LookUp of an old sale and click the Preview button. When previewing the sale click the Print Receipt button, but before clicking Print, press F12 on your keyboard (the same for IE, Chrome and Firefox), locate the network tab and click the Record or Capture button. Click Print and the network information will be displayed:

![rtaImage (44).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppOE9EAM.jpg)

When testing Tyro, start a dummy sale, add a product, go to Payments tab, apply Tyro, press F12, locate the network tab, click the Record or Capture button and click Pay. The results should look similar to the above.

This will allow to cross reference the entries in the Hardware Services page (Menu > System Settings > POS Settings > Hardware Services) with the computers local IP address. If Force Local is being used then the IP address with display 127.0.0.1

This same process can help to diagnose SSL errors:

![rtaImage (45).jpeg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppPkZEAU.jpg)

The red entries can indicate a problematic or missing SSL certificate.

Related articles:

[How to ping the Hardware Service](https://galaxy.maropost.com/s/article/How-to-ping-the-Hardware-Service)

[How to check if the Hardware Service SSL certificates have been installed](https://galaxy.maropost.com/s/article/Chrome-not-talking-to-hardware-after-release-to-fix-Chrome-update-forcing-SSL)

[V2 Hardware Removal Instructions](https://galaxy.maropost.com/s/article/Preparing-for-the-V2-Upgrade)