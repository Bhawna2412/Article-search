---
title: "Tyro Eftpos Terminal POS Setup"
articleID: 797
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Tyro Eftpos Terminal POS Setup

**Please Note**: Maropost Commerce Cloud POS is not available outside of Australia and New Zealand.

> **Note:** If this is your first time pairing your Tyro terminal, we recommend contacting Tyro directly to ensure your terminal has been activated correctly.

### In this Article

- [Tyro Terminal Setup](#1)
- [Pair Tyro with Maropost POS](#)
- [Check for Valid SKU / Empty Order](#3)
- [Tyro Internet Connection Requirements](#tyro-internet-connection-requirements)
- [Print Receipts](#4)
- [Tyro Surcharges](#surcharge)
- [Troubleshooting](#5)

### Tyro Terminal Setup

To set up your Tyro terminal in Maropost POS.

1. 
  From your main register page, tap on the **Settings** icon in the side menu.

  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup11.05T5g00000v5RGQEA2.png)
2. 
  Tap on **Card payments**.

  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup21.05T5g00000v5RJjEAM.png)
3. 
  Tap on **Select payment processor**.

  ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup31.05T5g00000v5QAdEAM.png)
4. 
  Select **Tyro** and then tap on **Submit**.

  ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup4.05T5g00000v5RIIEA2.png)
5. 
  The Tyro setup options, including the ability to pair your terminal, are now displayed.

Now that Tyro has been selected as your chosen payment processor, when you select **Card payment** during sales or returns, Maropost POS will use Tyro.

### Pair Tyro with Maropost POS

Before you can start making transactions, you will need to pair your Tyro terminal.

1. 
  Tap on the **Pair terminal** button.

  ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup5.05T5g00000v5RO0EAM.png)
2. 
  Commence the pairing procedure on your terminal, which will provide you with your **Merchant ID and Terminal ID,** which are sometimes abbreviated to **MID** and **TID** respectively.

  To locate this information in your Tyro terminal, you'll need to navigate to the Authorise POS screen.

  On **Xenta/Xentissimo** devices: Menu > Settings > Integrated EFTPOS > Authorise POS
	On **Yomani** devices: Menu > Integrated EFTPOS > Authorise POS
	On **Yomani 3G/Yoximo** devices: Menu > Configuration > Integrated EFTPOS > Pair with POS
3. 
  Enter the **MID** and **TID** and press the commence pairing button in Maropost POS. You will now need to perform the **Authorise POS** function on your Tyro terminal.

  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup6.05T5g00000v5RBoEAM.png)

  Consult the [Tyro help documentation](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fhelp.tyro.com%2Fs%2Farticle%2FHow-do-I-find-the-Merchant-ID-Terminal-ID-on-the-Tyro-EFTPOS-machine) for more information.
4. 
  Press the **Close** button. Your terminal is now paired with Maropost POS.

  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup7.05T5g00000v5Pg8EAE.png)

### Tyro Internet Connection Requirements

The integration between Maropost POS and your Tyro terminal requires an active internet connection.

- If your register goes offline, you will lose the ability to make payments through Tyro until your register comes back online.
- If your terminal is having difficulty connecting to the internet, this can also result in Maropost POS not being able to send details about transactions to your terminal.

### Print Receipts

Maropost POS supports integrating Tyro receipts inside the Maropost POS receipts, or printing the receipts directly from your Tyro terminal if it supports printing.

#### Print directly from the Tyro Terminal

To print receipts from your Tyro terminal, simply turn on the **Print receipts on Tyro terminal** setting.

#### Include on Maropost POS Receipt

To have Tyro receipts included with your Maropost POS receipts, simply turn off the **Print receipts on Tyro terminal** setting.

![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup8.05T5g00000v5QsyEAE.png)

### Tyro Surcharges

Surcharges can be set up and controlled entirely through Tyro.

> **Important:** Surcharges charged through Tyro do not appear in Maropost orders or POS sales anywhere. Refunds that include the surcharge require a separate orderline to account for it.

To enable the Tyro surcharge:

1. 
  In Maropost POS click/tap the settings menu, and select **Card Payments**.

  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup9.05T5g00000v5RWOEA2.png)
2. 
  Click/tap the **Enable surcharge** setting.
3. 
  On your Tyro terminal open the settings and enabled surcharges. For example, on Yoximo terminals **Menu** > **Configuration** > **Surcharging** > **Enable/Disable**.

You can now set your surcharge amounts on your Tyro terminal.

### Troubleshooting

The integration between Maropost POS and your Tyro terminal requires an active internet connection. If your register goes offline, you will lose the ability to make payments through Tyro until your register comes back online. If your register is online and you are still experiencing issues, Tyro support may request logs to assist with diagnosis of the problem. To send the logs to Tyro, follow the below instructions:

> **Note:** Your register must be online for Maropost POS to send logs to Tyro for troubleshooting.

1. 
  Log into POS and tap on the **Settings** icon in the side menu

  ![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup10.05T5g00000v5RBCEA2.png)
2. 
  Tap on **Card payments**.

  ![image11](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup11.05T5g00000v5RKnEAM.png)
3. 
  Tap on **View logs**.

  ![image12](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup12.05T5g00000v5QYKEA2.png)
4. 
  Tap on **Send to Tyro**.

  ![image13](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TyroEftposTerminalPOSSetup13.05T5g00000v5NNfEAM.png)

- [Maropost POS Recommended Hardware](https://galaxy.maropost.com/s/article/Neto-POS-Recommended-Hardware)
- [Set up Maropost POS (Point of Sale)](https://galaxy.maropost.com/s/article/Set-up-Neto-POS-Point-of-Sale)
- [POS Payment Method Setup](https://galaxy.maropost.com/s/article/Setting-up-Payment-Methods)