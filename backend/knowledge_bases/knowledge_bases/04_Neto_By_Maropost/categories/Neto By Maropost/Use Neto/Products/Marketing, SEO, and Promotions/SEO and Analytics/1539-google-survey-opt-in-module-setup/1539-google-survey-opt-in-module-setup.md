---
title: "Google Survey Opt-In Module Setup"
articleID: 1539
category: "Use Neto > Products > Marketing, SEO, and Promotions > SEO and Analytics"
knowledgeBase: "Neto By Maropost"
---

# Google Survey Opt-In Module Setup

**Please Note**: Reviews and seller ratings do not show on your website until Google's criteria is met. Learn more about the critera [here](https://support.google.com/google-ads/answer/2375474).

Integrating the [Google survey opt-in module](https://support.google.com/merchants/answer/7106244?hl=en#doctype) into your webstore is easy to install using a custom script.

**Important**: Ensure you have added estimated delivery times for each zone in your [shipping rates tables](https://galaxy.maropost.com/kb/articles/1223-add-or-edit-shipping-rates). Google will send the survey after the estimated days, so it must be accurate.

1. In your Neto by Maropost control panel navigate to **Settings & Tools** > **All settings & tools**.
2. Click on **Analytics & 3rd Party Scripts** tab and click **Custom Scripts**.
3. Click the **Add New** button.
4. Name the script **Google opt-in survey**.
5. Enter your Google merchant ID into the **Referral Key 1** field, and enter the average number of days it takes for your customers to received their goods in the **Referral Key 2** field.
6. Scroll down to the **Scripts** section and click on the **Purchase Confirmation (Thank You Page)** tab.
7. Copy the following script into your control panel:
8. Click**Save Changes**. The opt-in survey will now appear once an order is complete on the Thank You page.

## (Optional) Add the Customer Reviews Widget

You can also add a widget into the footer of your website that displays your Google customer reviews.

1. Open the **Google opt-in survey** custom script, and select the **Footer** tab.
2. Paste the below code into the footer tab.
3. **Save** your changes.
  **Please Note**: Changes to a custom script require you to authenticate your access. Click the **Send Token Now** button and an email will be sent to you with a security token. Copy the token and paste it into the verification field. Click the **Verify Token** button and your changes can be saved. The token will last two hours in case you need to change multiple scripts.