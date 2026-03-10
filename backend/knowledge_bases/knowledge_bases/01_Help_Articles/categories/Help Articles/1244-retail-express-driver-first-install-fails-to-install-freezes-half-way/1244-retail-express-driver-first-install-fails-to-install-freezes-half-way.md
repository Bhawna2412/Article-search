---
title: "Retail Express Driver (First Install) fails to install - Freezes half way"
articleID: 1244
knowledgeBase: "Help Articles"
lastUpdated: 2023-06-01
---

# Retail Express Driver (First Install) fails to install - Freezes half way

# Retail Express Driver (First Install) fails to install - Freezes half way

This method is for when the Retail Express Driver fails to install and freezes in the middle of installation.

The following steps should help resolve the issue

1. Open Command Prompt and enter the following code
2. ```
   regsvr32 C:\RetailExpress\Updates\FirstInstall\textprinter.dll
   ```
3. A message will pop up as an error, press 'Ok' and close Command Prompt
4. Restart PC
5. Do **NOT** re-run the Retail Express Driver, it should be working correctly