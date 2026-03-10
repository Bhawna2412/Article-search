---
title: "Wholesale Customer Registration Form Setup"
articleID: 1097
category: "Ways to Sell on Neto > Wholesale & B2B"
knowledgeBase: "Neto By Maropost"
---

# Wholesale Customer Registration Form Setup

## Add a Wholesale Registration Form to your Webstore Menu

Your wholesale form is available by default but is hidden in the system. To access your form:

1. In your browser address bar, go to `https://www.yoursite.com.au/_myacct/wholesaleregister`, replacing **yoursite** with your actual domain name.
2. So customers can register as a wholesaler you will need to add a link to the form in your menus. In your Neto control panel, navigate to **Webstore** > **Menus**.
3.   - **web_header** will appear on the top menu of every page on your website.
  - **web_footer** will appear on the footer menu of every page on your website.

  Choose the menu you would like the registration form link to appear on.
4. Click the **Add New Menu Item** button, name it **Wholesale Registration**.
5. Under **Select URL for menu item** select **Link to a URL**, paste the form link and press **Accept**.
  ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/WholesaleCustomerRegistrationFormSetup1.05T5g00000txJCdEAM.png)
6. Drag the newly created menu item and drop it to a suitable menu category. In this example, we've added it under **Service** in the web_footer. Click **Save**.
  ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/WholesaleCustomerRegistrationFormSetup2.05T5g00000txJDREA2.png)

Customers will now be able to register for a wholesale account, and you will revive email notifications when someone submits the form.

## Edit your Wholesale Form

### Wholesale Terms

Wholesale registration forms can dynamically add your terms and conditions through a content zone. By default, the terms content zone on your form is `wholesale_terms`. To create and populate this content zone:

1. In your control panel, navigate to **Webstore** > **Content zones**.
2. Click the **Add new content zone** button.
3. In the **Zone Name / ID** enter `wholesale_terms`.
4. Add your terms to the **Content** section usign the source code, or WYSIWYG editor.
5. Click the **Save & close** button.

Your wholesale form now displays the terms and conditions from the content zone.

### Add custom fields

You can [add custom fields](https://galaxy.maropost.com/kb/articles/1395-add-a-custom-customer-field) to your wholesale form but be mindful these will also appear on your normal customer registration page as well.

### Web designers

If you have design and HTML skills, you can edit the wholesale form template:

1. Navigate to **Settings & Tools** > **All Settings & Tools**.
2. Click on **System Templates** in the menu, and click **Webstore Templates**.
3. In the folder structure click **Templates** > **Customer** > **wholesaleregister**.
4. `done.template.html` is the page after the wholesale registration is complete and `template.html` is the wholesale registration form itself.

> **Note:** Neto partners can design and customise a registration form to your needs. [Contact a design partner](http://forms.neto.com.au/services/designtweak.html?) for a consultation.