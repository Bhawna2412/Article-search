---
title: "Enable logging (agents only)"
articleID: 1232
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Enable logging (agents only)

# Enable logging (agents only)

Below are the steps required to enable logging in the various different tools used by the support team. Click on the link to view the details for that program.

In this article:

- [Hardware Utility](#hardware)
- [PC-EFTPOS](#pc-eftpos)
- [Offline POS](#offline-POS)

## []()Hardware Utility

To enable logging for the Hardware Utility:

1. **Remote connect** into the computer (typically using Goto Assist)
2. Locate the **service folder**

> **Note:** Typically this is located at C:\Program Files (x86)\Retail Express\Retail Express Hardware Utility

3. Open the **.service **folder
4. Open the file **nlog.config**
5. Change the Logging Level from **Warn **to **Debug**
  ![debug_level.png](https://ress.zendesk.com/hc/article_attachments/360002449196/debug_level.png)
6. Press the **Windows + R **button
7. Type in **services.msc **and click **OK**
  This will open Windows Services
8. Find **Retail Express Hardware Service **in the list
  ![hardware_service.png](https://ress.zendesk.com/hc/article_attachments/360002345415/hardware_service.png)
9. Right click the service and select **Restart**
10. Perform a transaction with the card that is causing a problem
11. Open the file **log.txt **from the Hardware Utility **Service **folder opened in step 3
12. There should be an entry displaying the card type. The value that's displayed (CardType = 3.Credit in the screenshot below) should be added to our database mapping table.
  ![hardware_logging.png](https://ress.zendesk.com/hc/article_attachments/360002449256/hardware_logging.png)

## []()PC-EFTPOS

PC-EFTPOS is already enabled for basic logging, but you can enable deeper logging.

> **Note:** Log files are stored in C:\PC_EFT\EFTPOS000.LOG or C:\Program Files (x86)\PC_EFT.
> Ver 5.0.6.0 has the program files directory; all others are just C:\PC_EFT.

To enable deeper logging:

1. Open the PC-EFTPOS client
2. Locate the **Tracing **section at the bottom of the client
3. Ensure **Host & POS **are ticked
	They will most likely be unticked
4. Press **Apply **on the right-hand side
5. **Restart **the PC-EFTPOS client
6. **Reopen **the PC-EFTPOS client
7. Both Host & POS should be ticked
8. Review the log files with additional messages recorded

## Offline POS

Logging is done entirely via Serilog. However the client side/offline server logging is done to a rolling file written locally to disk on the offline server.

- Logs are written by default to **%ProgramData%\Retail Express\Offline POS\Logs**
- Logs are kept for 7 days before being automatically deleted
- Each service has its own log
- The logging level is centrally located by a registry entry in **HKLM\SOFTWARE\Retail Express\InstalledProducts\Offline POS\LoggingLevel **with the value being the string representations used by Serilog:  - Verbose - tracing information and debugging minutiae; generally only switched on in unusual situations
  - Debug - internal control flow and diagnostic state dumps to facilitate pinpointing of recognised problems
  - Information - events of interest or that have relevance to outside observers; the default enabled minimum logging level
  - Warning - indicators of possible issues or service/functionality degradation
  - Error - indicating a failure within the application or connected system
  - Fatal - critical errors causing complete failure of the application