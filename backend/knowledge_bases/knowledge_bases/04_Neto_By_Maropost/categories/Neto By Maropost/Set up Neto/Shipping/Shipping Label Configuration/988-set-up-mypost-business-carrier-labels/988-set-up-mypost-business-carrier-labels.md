---
title: "Set Up MyPost Business Carrier Labels"
articleID: 988
category: "Set up Neto > Shipping > Shipping Label Configuration"
knowledgeBase: "Neto By Maropost"
---

# Set Up MyPost Business Carrier Labels

In this help article, we'll guide you through essential steps to get started with MyPost Business, including retrieving your token number, credit account number, and configuring shipping labels for your shipments.

> **Important:** This  feature is **only **available as part of the Neto Commerce Ship module. Please refer to the Neto Commerce Ship help article to know more.

## []()Before You Begin

Ensure that the shipping service(s) are configured before you begin configuring the carrier label. Please refer to the following help articles to learn about configuring shipping services:

- To configure a flat rate shipping option, see Set up Flat Rate Shipping.
- To configure a weight-based shipping option, see [Set up a Weight-based Shipping Option](https://galaxy.maropost.com/kb/articles/1627-set-up-a-weight-based-shipping-option).
- For more customised Shipping rate configurations, see [Custom Shipping Overview and Setup](https://galaxy.maropost.com/kb/articles/601-custom-shipping-overview-and-setup) help article to know more.

> **Important:** The MyPost Business integration currently does **not **support Live Rates.

## []()Setting Up MyPost Business Carrier Labels

### Accessing the Configuration page

1. In Navigation, go to **SHIPPING** > **Other Shipping Setup**.
2. Click **Carriers and Labels** under the **Shipping** section.
3. On the **Carriers & Labels** page, click **Add New**.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/1.05T5g00001GmjhNEAR.png)
4. On the **Carrier Label Options** page, click **Australia Post MyPost Business**. You'll be navigated to the **Carrier Maintenance** page where you can configure the MyPost Business carrier labels.

### Configuring the Carrier Label

On the Carrier Maintenance page, configure the MyPost Business carrier label as discussed below:

1. **Connect Australia Post MyPost Business Account:**  - Enter a "Nickname" for this label configuration. The nickname is your own choice and should help you identify this label configuration in the future, for example, the name of the location it applies to.
  - Enter the Neto by Maropost Partner Token retrieved from your MyPost Business account. See the [Retrieving Information From MyPost Business Account](https://galaxy.maropost.com/kb/articles/988-set-up-mypost-business-carrier-labels#Retrieving Information From MyPost Business Account) section of this article.
  - Select a payment method - "Charge to Account" or "Stored Payment".    - If you select "Charge to Account", you need to enter an Australia Post Business Credit Account Number. See the [Retrieving Information From MyPost Business Account](https://galaxy.maropost.com/kb/articles/988-set-up-mypost-business-carrier-labels#Retrieving Information From MyPost Business Account) section of this article.
    - If you select "Stored Payment", the credit card stored in your MyPost Business portal will be charged for every label individually.

    ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/2.05T5g00001GmjhSEAR.png)
2. **Warehouse Location: **Select the warehouse/location(s) from where the orders using this label configuration will be dispatched.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/3.05T5g00001GmjhcEAB.png)
3. **Pickup Address: **Enter your pickup address, i.e the "from" address for this label configuration. For the 'State/Province' field, enter the 2 or 3-character state code, for e.g QLD, NSW, NT...
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/4.05T5g00001GmjhmEAB.png)
4. **Shipment Configuration: **In the 'Extra Cover' field, you can select if an extra cover is to be provided. You can refer to instructions on [configuring Transit Insurance](https://galaxy.maropost.com/kb/articles/1047-advanced-shipping-options#transit-insurance) help article to know more. Please ignore other settings in this section, as they do not apply to MyPost Business.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/5.05T5g00001GmjhrEAB.png)
5. **Label Configuration: **In this section, you can select to display extra details on the printed label (within the "Ref" section of the label).
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/6.05T5g00001GmjhwEAB.png)
6. **Shipping Service: **In this section, select the following:  - On the left under "Service Code", one or several MPB services will be displayed, for e.g "Parcel Post (up to 5kg) B30".
  - On the right under "Related shipping services and rates", the Neto ["Shipping Services & Rates" table](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates) will be visible, as configured under Shipping > Other Shipping Setup > Shipping Services & Rates.

  Orders dispatched with the Neto service/rate configuration selected on the right, will produce labels for the MyPost Business corresponding service selected on the left.

  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/7.05T5g00001GmjiBEAR.png)
7. Click **Save** to create the label configuration. You are now ready to use the label.

## []()Retrieving Information From MyPost Business Account

When connecting your MyPost Business account in Neto, you'll need information such as partner token and Business Credit Account Number from your MyPost Business account.

### Retrieving your "Neto by Maropost" partner token in MyPost Business

1. Login to your MyPost Business portal account: [https://auspost.com.au/mypost-business/dashboard](https://auspost.com.au/mypost-business/dashboard).
2. On the top, right-hand corner click on your name to open the menu and select "Business Details". ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/8.05T5g00001GmjiLEAR.png)
  A new tab will open taking you to the Account Management page of MyPost Business.
3. On the sidebar, click on "Platform Partners" ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/9.05T5g00001GmjiQEAR.png)
4. In the list of Platform Partners, find "Neto by Maropost". Click "Connect" to generate a token. Once the token is visible, click Copy Token to copy it into your clipboard. You are now ready to paste it into the Neto shipping configuration wizard.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/10.05T5g00001GmjiVEAR.png)

### Retrieving your Australia Post Business Credit Account Number

1. Login to your MyPost Business portal account: [https://auspost.com.au/mypost-business/dashboard](https://auspost.com.au/mypost-business/dashboard).
2. On the top, right-hand corner click on your name to open the menu and select "Business Details".
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/11.05T5g00001GmjjEEAR.png)
3. Under "Payment methods", find and copy the Business Credit Account number that you wish to use.
  ![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/12.05T5g00001GmjjdEAB.png)
4. Paste the number in the field "Business Credit Account Number" in the Step 1 of Label Configuration.

By following the steps outlined in this help article, you'll be equipped with the necessary information to configure shipping labels for your business using the MyPost Business service. Don't hesitate to explore additional features and resources within the platform to further enhance your shipping and logistics experience.