---
title: "Epson Port Assignment Tool Error - When uninstalling"
articleID: 1251
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Epson Port Assignment Tool Error - When uninstalling

# Epson Port Assignment Tool Error - When uninstalling

Epson Port Assignment Tool Error - When uninstalling 

?A Port to TM Virtual Port Driver is Used? 

There is a known issue where you will be unable to uninstall / use the Epson TM Port Assignment Tool, with an error message appearing saying ***?A Port ot TM Virtual Port Driver is Used?.***  

This is essentially saying that the Epson TM Virtual Port Assignment Tool is in use by another Service, in this case it is the ?***Epson Port Configuration Tool?.***  

1. Go to Services *(either by searching from the Start Menu or opening from Task Manager).*
2. Find the Service related to ***Epson Port Configuration***, then stop it.
3. Open CMD as Administrator (Start Menu, search CMD, Right-Click, Run as Administrator).
4. Enter the following, ensuring you match the SERVICENAME section to the name of the Service located in Step 2
5. Uninstall the TM Port Assignment Tool and re-install to ensure no issues persist.
6. Test and confirm that the tool is now usable and then map out the relevant port for the Label Printer.