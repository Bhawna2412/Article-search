---
title: "Tyro Installation"
articleID: 217
category: "Hardware > Integrated Payments"
knowledgeBase: "Retail Express"
---

# Tyro Installation

You can install Tyro EFTPOS integration with **Retail Express** for Australian retail operations, enabling popular payment processing solution supporting competitive transaction fees and modern payment types. This helps optimize your retail operations by accessing competitive payment processing rates, supporting all major payment methods, and providing integrated payment workflows reducing checkout time.

Retail Express supports integrated EFTPOS services through the use of Tyro?, drastically speeding up the POS transaction processing time and reducing staff user error.

![tyro-eftpos.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiPQEAY.jpg)

> **Note:** These steps are *only* required when installing the Tyro software for the first time. If the software has been previously installed, follow the instructions in the "Receipt Printer and Integrated EFTPOS - Setup and FAQ guide" to run the Retail Express Hardware Utility.

We strongly recommend all staff review the steps for processing sales in the **non-integrated mode** using the terminal menu. This may be required in the event the computer is offline, the integration has failed, or most commonly, to take payments over the phone. See the [FAQs](https://galaxy.maropost.com/kb/articles/217-tyro-installation#Faqs) for more information.

## Installing and configuring the Tyro Terminal

This phase installs and connects the Tyro terminal with the computer so that it's active and ready to accept payments.

[Step 1 - Connect the Tyro Terminal](https://galaxy.maropost.com/kb/articles/217-tyro-installation#connect-tyro)

To connect the Tyro terminal:

1. Navigate to the [Tyro Guides](https://www.tyro.com/guides/) page
2. Click on the appropriate "Terminal Guide" e.g. Desktop or Mobile terminal
3. Follow the instructions in the manual to connect and activate the Tyro terminal

![mceclip0 - 2023-07-10T031559.444.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiPVEAY.jpg)
[Step 2 - Locating the Merchant and Terminal IDs](https://galaxy.maropost.com/kb/articles/217-tyro-installation#terminal-merchant-id)

To configure the Tyro Terminal Adapter you must first find the terminal?s Merchant ID and Terminal ID.

Follow the below steps to find the terminal?s Merchant ID and Terminal ID:

1. On the Tyro terminal navigate to **Menu > Settings > Terminal Info**
2. The terminal will print detail of the Merchant ID and Terminal ID

> **Note:** The Merchant ID and Terminal ID in the Tyro Payments section should not be confused with any other Merchant ID or Terminal ID pair (i.e. Gift Card operation).

[Step 3 - Configure the Tyro Terminal Adapter](https://galaxy.maropost.com/kb/articles/217-tyro-installation#configure-adaptor)

The Tyro Terminal Adapter acts as a communication tool between Retail Express and the terminal, and must be installed and configured on the computer.

1. The following steps are completed on the **computer** (you will be prompted when you need to complete steps directly on the Tyro terminal)
2. Download the **Tyro Terminal Adaptor** (this can be accessed via https://help.tyro.com/s/article/How-do-I-install-the-Tyro-Terminal-Adapter)
3. Install the Adapter software
4. Once the download is complete, on the computer navigate to the [control panel:](https://support.microsoft.com/en-us/windows/where-is-control-panel-aef7065f-a9ec-1ba9-8cab-79b2b83bdda5#:~:text=Swipe in from the right,tap or click Control Panel.&text=Click the Start button, and then click Control Panel.)
5. Double click **Tyro Terminal Adapter** to open the Tyro Terminal Adapter Control Panel window; if the adapter icon isn't visible change the **View By **menu to Small or Large icons:
  ![mceclip1 - 2023-07-10T031609.528.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiPaEAI.jpg)
6. On the **Configure and Pair **window, if the Tyro terminal is already paired click the **Verify Key **button. Once verified, skip to the "Authorise the Terminal" steps at the bottom of this section. If not paired, continue to step 6.
7. Enter the terminal **Merchant ID** and **Terminal ID** printed earlier
  ![mceclip2 (98).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiPfEAI.jpg)
8. Click **Save and Pair **
	The Tyro Terminal Pairing window appears, showing a timer indicating how many seconds have passed. You will have approximately 90 seconds to complete the rest of this procedure.
  ![mceclip3 (68).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiPzEAI.jpg)
9. The following steps are completed on the **Tyro terminal**
10. Navigate to **Menu > Settings > Integrated EFTPOS > Authorise POS**
11. Enter the terminal's administrator password (can be obtained from Tyro) and click **OK**. The terminal is connected.

> **Note:** If the terminal does not connect, try repeating the Authorise POS steps again. If the terminal still doesn't connect, contact [Retail Express Support](mailto:support@retailexpress.com.au)

12. Return back to the **Computer**
13. Click the **Verify Key **button (note: if you skip this step the terminal will not function correctly).
14. Click **OK**

## Configuring the Integration with Retail Express

This phase connects Tyro with the Retail Express system ready to take payments at POS.

[Step 1 - Enabling the "Tyro" Payment Type](https://galaxy.maropost.com/kb/articles/217-tyro-installation#configure-tyro-payment-type)

To use Tyro the Retail Express Payment Type of "Tyro" will need to be enabled.

1. Log into **Retail Express**
2. Navigate to **Settings > Payment Types**
3. 
4. 
5. 
6. Click **Save Changes**
7. **Tyro **will now appear as a payment option within POS

![mceclip4 (40).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiQ4EAI.jpg)
![Image](https://ress.zendesk.com/hc/en-us/article_attachments/201318260/Payment_types_2.png)
[Step 2 - Hiding Tyro-supported Payment Types](https://galaxy.maropost.com/kb/articles/217-tyro-installation#configure-other-payment-types)

Tyro replaces the need to select individual payment types at the pos, for example, Mastercard or Amex. During the payment process, the following takes place:

1. The staff member selects Tyro at the POS
2. The payment is taken by swiping/tapping a card as required
3. Tyro identifies the payment method used and communicates this to Retail Express
4. The payment is allocated against the Payment Type accordingly

This allows Retail Express to still report on the individual payment methods. For example, in the End of Day cash up the report would show Mastercard, Visa, EFTPOS etc, and not "Tyro".

To ensure this process works appropriately, it's not necessary to have these Payment Types configured for POS (they still need to remain "Enabled"). If staff click the individual types it will not prompt the Tyro terminal to process a payment.

1. Log into **Retail Express**
2. Navigate to **Settings > Payment Types**
3. **Untick the POS option** for the following Payment Types, but **ensure the Enabled option is ticked:**
	- EFTPOS
	- VISA
	- MasterCard
	- CreditCard
	- AMEX
	- Diners
4. Click **Save Changes**
5. The Payment tab in POS will now be updated accordingly.

![Image](https://ress.zendesk.com/hc/en-us/article_attachments/201406454/Payment_types_3.png)

## Run the Retail Express Hardware Utility

Once the Tyro terminal has been connected and configured, run the Retail Express Hardware Utility to complete the installation. This will also enable you to allow other computers to use the same EFTPOS terminal as required.

Click here to access the Retail Express Hardware Utility Setup Guide.

### Frequently Asked Questions

[Reporting on individual payment methods](https://galaxy.maropost.com/kb/articles/217-tyro-installation#tyro-end-of-day)

The following example assumes that three transactions were processed using Tyro:

- 1 x $130 on EFTPOS
- 1 x $130 on VISA
- 1 x $130 on MasterCard

During the payment process, the following takes place:

1. The staff member selects Tyro at the POS
2. The payment is taken by swiping/tapping a card as required
3. Tyro identifies the payment method used and communicates this to Retail Express
4. The payment is allocated against the Payment Type accordingly

This allows Retail Express to still report on the individual payment methods. As displayed below in the Cash Up (the "Other Payment Methods" summary) the payments appear against their respective methods, and not Tyro.

![Image](https://ress.zendesk.com/hc/en-us/article_attachments/201406754/Payment_types_4.png)
[Processing Manual Payments](https://galaxy.maropost.com/kb/articles/217-tyro-installation#manual-payments)

### Processing sales in non-integrated mode

It's important to know how to process sales in **Non-Integrated** mode using the terminal menu.

This may be required in the event the computer is offline, the integration has failed, or most commonly, to take a payment over the phone.

A non-integrated or "manual" transaction is often referred to as a **MOTO Transaction** and it is vital all staff understand how to process these if needed. This functionality is purely driven by the TYRO terminal itself and does not integrate to Retail Express.

In the unlikely event the Tyro integration fails, the Tyro terminal can be used to take payments manually. This can then be entered into the Retail Express POS system by selecting the individual Payment Type.

To process a manual payment:

1. **Log out of the Retail Express POS system** (note that closing the browser will not work)
2. **Enable the required Payment Types for POS**. If the Tyro integration has already been in use these Payment Types will be marked as "Enabled" but not ticked for "POS" (refer to the section "Configuring Tyro-supported Payment Types" above)

> **Note:** It can be useful to leave the CreditCard payment type enabled for POS (and not Mastercard, Visa etc...) permanently as it provides a quick means for your staff to process sales manually and can easily be reported on so you know when a manual sale has been performed. This will depend on your individual business requirements.

3. Log into **POS**
4. Create a sale as normal, until you get to the **Payments **tab
5. Select the **Payment Type **depending on the card presented (note the amount will not appear on the Tyro terminal automatically as per the integrated method)
6. **Swipe/Insert/Tap **the card on the Tyro terminal
7. Choose the **Account Type**
8. Enter the **amount** required
9. Continue to **process the sale on the Tyro terminal**
10. **Finalise **the sale in Retail Express **POS**

[Terminal Error Codes](https://galaxy.maropost.com/kb/articles/217-tyro-installation#error-codes)

If payments are not able to be processed and the terminal is displaying an error code, an explanation for this code can be found within the [**Tyro Guides**](https://www.tyro.com/guides/)** **page. Click on the link, select your terminal and locate the Error Codes page within the manual.