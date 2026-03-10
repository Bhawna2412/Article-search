---
title: "Third Party or Custom Scripts"
articleID: 1108
category: "Ways to Sell on Neto > Webstore > Maintenance & Tweaks"
knowledgeBase: "Neto By Maropost"
---

# Third Party or Custom Scripts

Example of third party, or custom scripts include:

- Analytics software
- Chat boxes
- Marketing programs
- Buy now, pay later widgets

## Add a Custom Script

To add a custom script to your webstore:

> **Important:** Neto does not provide support for third party scripts so please use at your own risk.

1. In your Neto control panel select **Settings & tools** > **All settings & tools**
2. In the **Settings & tools** page, select **Custom Scripts**
3. The **Custom Scripts** page shows all current custom scripts installed. You can edit existing scripts here or select **New** to add a new custom script.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ThirdPartyorCustomScripts1.05T5g00000twSSxEAM.png)
4. Enter the **Name** of the script you are installing. This is an internal reference only.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ThirdPartyorCustomScripts2.05T5g00000twS1YEAU.png)
5. Paste your code into the relevant section.
  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/ThirdPartyorCustomScripts3.05T5g00000twQCeEAM.png)
6. When complete, click the **Save** button.
  **Please Note**: Changes to a custom script require you to authenticate your access. Click the **Send Token Now** button and an email will be sent to you with a security token. Copy the token and paste it into the verification field. Click the **Verify Token** button and your changes can be saved. The token will last two hours in case you need to change multiple scripts.

Your custom script is now installed and ready to function on your webstore.

## Remove or Deactivate a Custom Script

Scripts can be deactivated for testing, or removed entirely if they're no longer needed. To remove or deactivate a custom script:

1. In your Neto control panel navigate to **Settings & tools** > **All settings & tools**.
2. In the Settings & tools page, select **Custom Scripts**.
3. The Custom Scripts page shows all current custom scripts installed. Select the checkbox next to the custom script you want to remove or deactivate.
4. Click the **With x Selected** button, and click **Mark as Inactive** or **Delete**.

Your custom script is now removed or deactivated.

## Add a Tracking Script to the Checkout Page

Tracking scripts can be added in the page footer so that they can run on your webstore checkout page. As the footer is used across your website, it's important to target the checkout page specifically with the below code:

```plaintext
[%if [@config:current_page_type@] eq 'checkout'%]
    <!-- Script here -->
[%/if%]
```

> **Important:** Adding a custom script to your checkout is done at your own risk. Always test the checkout after adding a script, and if problems occur, make the script inactive.