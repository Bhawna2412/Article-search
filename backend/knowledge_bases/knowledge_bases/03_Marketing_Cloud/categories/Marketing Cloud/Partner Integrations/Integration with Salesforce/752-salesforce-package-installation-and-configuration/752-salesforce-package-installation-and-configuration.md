---
title: "Salesforce – Package Installation and Configuration"
articleID: 752
category: "Partner Integrations > Integration with Salesforce"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-12-02
---

# Salesforce – Package Installation and Configuration

You can establish a seamless connection between your Marketing Cloud and Salesforce systems by installing and configuring the integration package. This enables your marketing team to leverage CRM data directly for email campaigns, significantly improving targeting accuracy and eliminating manual data export processes.

When properly implemented, this integration streamlines your workflow by automatically synchronizing contact data and campaign results between platforms. This helps ensure consistent messaging across your sales and marketing touchpoints while enabling more sophisticated lead nurturing based on CRM activity.

The Maropost for Salesforce package enables you to install and configure the Salesforce integration into your Marketing Cloud account.

First, install the Salesforce package, and next, configure the integration settings in Marketing Cloud to create a connection between Marketing Cloud and Salesforce.

### Before You Begin

If you are installing for the first time or are using Maropost for Salesforce plug-in v3 or above, then skip directly to the **Package Installation** section below.

If you are using a version of the Maropost for Salesforce plug-in that is v2.x or lower, you will need to cancel all scheduled jobs relating to your Maropost integration. Then, download the latest package and reinstall it.

Perform the following steps to cancel the scheduled jobs relating to your Maropost integration:

1. Log in to your Salesforce org.

> **Note:** You must have administrator-level access rights to proceed.

2. Click Setup.
3. On the left-hand navigation, click Quick Find/Search and type 'Scheduled Jobs' in the search field.
4. Click Scheduled Jobs.
5. 
  Delete all jobs where the name starts with 'Maropost Sync Data', and 'Process Member Batch'.

  ![1.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXGx.05T5g00000BkXGxEAN.png)

### Package Installation

Follow the steps as outlined below to install the latest Maropost for Salesforce package into your Salesforce org:

1. Click the following URL to install the Maropost integration package to the Salesforce organization that you are integrating with.
**https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1S000000cCLW**

> **Note:** If you are installing into a Salesforce sandbox organization, then replace the domain with '**test.salesforce.com**' instead.

2. Log in to the Salesforce organization that you are integrating with.

> **Note:** You must have Administrator access rights.

3. Select the 'Install for All Users' option and then click Install. If you have a previous version of Maropost for Salesforce, click Upgrade.
  ![2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXGy.05T5g00000BkXGyEAN.png)
4. 
  Click on the App selector and choose Maropost from the selection menu.

  ![3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXGz.05T5g00000BkXGzEAN.png)

### Maropost Integration Settings

Once you've installed the latest package, you can create the integration between your Marketing Cloud account and your Salesforce org.

Perform the following steps to create an integration between Marketing Cloud and Salesforce:

1. Log in to Maropost Marketing Cloud.
2. Create an [**API authentication token**](https://galaxy.maropost.com/s/article/API-Keys) before proceeding to the next step.
3. In Navigation, click INTEGRATIONS. Then, on the Integrations page, select Salesforce.
4. Go to the Salesforce tab and then click Add Settings.
5. On the Salesforce Settings dialog box, enter the integration details, and click Save.  - **Name** - Enter a name for this connection.
  - **Username** - Enter the username of the Salesforce organization you are connecting to. Typically, it is the Admin's user name.
  - **Password** - Enter the Salesforce user password.
  - **Salesforce API key** - Enter the Salesforce security token. If you don't have one or don't know if you have one, see the **steps here** to reset your security token.
  - **Display mode** - The default option is 'Production.' Change it to 'Sandbox' if you installed the Maropost for Salesforce package in the test account of your Salesforce org.
  - **Maropost API key** - Select the name of the Maropost API key that you created for this integration.

  ![Salesforce_Settings.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/05T5g00000BkXH0.05T5g00000BkXH0EAN.png)