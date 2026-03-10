---
title: "Set up Bing Conversion Tracking"
articleID: 1518
category: "Use Neto > Dashboard and Reporting > Use your Dashboard"
knowledgeBase: "Neto By Maropost"
---

# Set up Bing Conversion Tracking

## Before your Begin

- Sign up for a Bing Ads account [here](https://ads.microsoft.com/).
- Log in to your Neto control panel with an admin account. Custom scripts require admin permissions to create.

## Create a UET Tag and add it to your Control Panel

**Please Note**: To complete these steps you need to be in Expert Mode. In the menu click **Tools** and then **Switch to Expert Mode**.

1. Follow the steps provided by Microsoft to [create your UET tag](https://help.ads.microsoft.com/#apex/ads/en/56682/-1). In the last step, click **Copy** in the **View UET tag tracking code** box.
2. In your Neto control panel navigate to **Settings & tools** > **All settings & tools**.
3. FInd and click on **Custom scripts**.
4. Click the **Add new** button...
5. Name your script **Bing Tracking**.
6. On the **Page header **tab, paste the code you copied in step 5.
7. Click the **Save** button.

## Create Conversion Event

1. Log in to your Microsoft advertising account.
2. In the menu at the top of the page navigate to **Tools** > **Conversion Goals.**.
3. Click on **Create Conversion Goal**.
4. Navigate to **Website** > **Next**.
5. Click on **Purchase**.
6.   - Enter a name for the event.
  - Change revenue to **Conversion action value may vary (for example, by purchase price)**
  - Change the currency to your required currency

  Click on **Event** and enter the below details:

  Click **Next**.
7. Click on **Yes, the UET tag was already installed on my website pages**.
8. Click on **Save and Next**.
9. Click on **Track event on page load**.
10. Click on **Next** and then click **Done**.

## Add Bing Scripts to Neto

1. In maropost go to settings & tools > all settings & tools > custom scripts.
2. Select "Bing Tracking" script you made earlier.
3. Select "Purchase Confirmation (Thank You Page)".
4. Copy and paste the below code into this window:
  Script including shipping in revenue total:

  Script not including shipping in revenue total:
5. Click the **Save** button.