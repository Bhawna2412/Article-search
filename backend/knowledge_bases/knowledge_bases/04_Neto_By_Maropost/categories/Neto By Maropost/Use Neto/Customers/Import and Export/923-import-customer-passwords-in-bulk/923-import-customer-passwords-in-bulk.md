---
title: "Import Customer Passwords in Bulk"
articleID: 923
category: "Use Neto > Customers > Import and Export"
knowledgeBase: "Neto By Maropost"
---

# Import Customer Passwords in Bulk

Neto supports importing passwords to customer cards through the [import wizard](https://galaxy.maropost.com/kb/articles/1396-customer-import-wizard). If you are able to export passwords from your existing platform, you can use this method to apply those password to the correct customer cards in Neto.

## Import Customers

1. Start by preparing your spreadsheet import using the following mandatory fields:

> **Note:** A sample customer template can be [downloaded here.](https://neto.com.au/assets/images/docs/5415/customers.csv)

2. Populate the file with customer data from your previous site and save it somewhere handy.
3. In your Neto control panel navigate to **Settings & Tools** > **Import Data**.
4. Select **Perform Complex Import**, then **Start Data Import Wizard**.
5. Upload your spreadsheet with the usernames and passwords, and click the **Continue to Next Step** button.
6. If your column names are the same as in step one, the field mapping will be done for you, so click **Continue to Next Step**.
7. Continue moving through the wizard. In the last step click the **Process File Now** button and Neto will automatically update your data.

## Unable to Migrate Passwords

If you have transferred across to Neto from another platform and could not export your customer passwords from your previous solution, you can instead direct customers to their new account, and to reset their passwords.

1. Import your customer usernames but don't set a password for their account.
2. Tell your customers that you have changed website provider, and that their passwords could not be migrated for security reasons. You can then point them to the link `http://www.mydomain.com.au/_myacct/forgotpwd` (replace `www.mydomain.com.au` with your website domain) on your new website to have the system email them a new password automatically.
3. Add a note to the login screen on your new website with a link to `http://www.mydomain.com.au/_myacct/forgotpwd` (replace `www.mydomain.com.au` with your domain), notifying existing customers that they will need to reset their passwords to login to their accounts. They can reset their passwords using this link.