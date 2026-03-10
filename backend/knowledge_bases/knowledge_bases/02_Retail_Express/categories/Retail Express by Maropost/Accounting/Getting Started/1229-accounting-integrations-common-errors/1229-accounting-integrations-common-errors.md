---
title: "Accounting Integrations - Common Errors"
articleID: 1229
category: "Accounting > Getting Started"
knowledgeBase: "Retail Express"
---

# Accounting Integrations - Common Errors

Accounting Integrations Troubleshooting

Below is a list of common errors encountered with Xero and MYOB integrations, what they mean, and how to resolve them.

## Xero

### API Error - Enabled

**Error:**

- Xero API error calling GetAccounts: An error has occurred during the authentication process
- Xero API error calling GetContactByContactNumber: An error has occurred during the authentication process

**Solution:**

1. Go to **Settings > Integrations > Xero**
2. Click the blue pencil (edit) icon
3. Set **Status** to **Enabled**
4. Click **Save All**

![image.png](https://us.v-cdn.net/6038474/uploads/8CGGYAGAFLRD/image.png)

### Archived Contact

**Error:**

- The contact with the specified contact details has been archived. The contact must be un-archived before creating new invoices or credit notes
- The status 'ARCHIVED' is not valid for contacts

![image.png](https://us.v-cdn.net/6038474/uploads/49L5ORJC0TJC/image.png)
**Solution: **Un-archive the affected contact in Xero, then re-enable the integration.

### Locked Period

**Error:**

- ValidationException: The document date cannot be before the end of year lock date, currently set at [Lock Date]

![image.png](https://us.v-cdn.net/6038474/uploads/65VYEN8K2AV3/image.png)
**Solution:**

1. In Retail Express, go to **Reports > Accounting Reports > Income Report**
2. Apply filters around the failed date to identify the transaction
3. Unlock the lock period in Xero
4. Re-enable the integration
5. Once data has synced, re-lock the period

### Reconnect

**Error:**

- Xero API error calling GetContactByContactNumber: AuthenticationUnsuccessful

![image.png](https://us.v-cdn.net/6038474/uploads/NM114RA9UACG/image.png)
**Solution:**

Reconnect your Xero account through the integration settings.

### Payments

**Error:**

- Errors referencing payment types (EFTPOS, Cash, Mastercard, etc.)
- Example: "An error occurred in Xero. Check the API Status page..."

**Solution:**

Remove the affected payment(s) from the invoice(s) in Xero, then re-enable the integration. Each payment line must be removed individually.

### Tax Code

**Error:**

- ValidationException: The TaxType code 'EXEMPTOUTPUT' cannot be used with account code '51305'

![image.png](https://us.v-cdn.net/6038474/uploads/WT61K4VFZN03/image.png)
**Solution:**

Update the tax code in Xero to the correct one for your region.

- **Australia**
  ![image.png](https://us.v-cdn.net/6038474/uploads/AAJSCSPOORH6/image.png)
- **New Zealand**

![Screenshot Placeholder]
  ![image.png](https://us.v-cdn.net/6038474/uploads/AOIZA7E93CHR/image.png)

### Reached Invoice Limit

**Error:**

- ValidationException: You have reached the limit of invoices you can approve

![image.png](https://us.v-cdn.net/6038474/uploads/TTYR5OUBB8EF/image.png)
**Cause & Solution:**

- This often occurs with the **Xero Starter plan**, which limits users to 20 approved invoices per month.
- Confirm your Xero subscription and upgrade if required.
- Check if other integrations are also contributing to invoice usage.

### Website Address

**Error:**

![image.png](https://us.v-cdn.net/6038474/uploads/66ZOIEBTDA48/image.png)

- ValidationException: Website must be valid

**Solution:**

Remove the website address field from the supplier contact(s) in Xero.

1. Run **Reports > Accounting Reports > Purchase Order Report** for the failed date
2. Remove website addresses from the supplier contacts listed

## MYOB

### Linked Accounts

**Error:**

- ValidationError: JournalLine_InvalidAccount
- ValidationError: JournalLine_AccountNotPostable

![image.png](https://us.v-cdn.net/6038474/uploads/6DVL0NRVQDM5/image.png)
**Solution:**

Review your MYOB linked accounts settings and update as required.

### Locked Period

**Error:**

- ValidationError: BusinessEvent_DateOccurred_InLockPeriod

![image.png](https://us.v-cdn.net/6038474/uploads/J883AB3EHW7J/image.png)
**Solution:**

1. Use **Reports > Accounting Reports > Income Report** to find the problematic transaction
2. Unlock the lock period in MYOB
3. Re-enable the integration
4. Re-lock once data syncs

### Reconnect

**Error:**

- Unauthorised: Your user doesn't have access to MYOB file. Please re-connect

![image.png](https://us.v-cdn.net/6038474/uploads/SJ77EQ75TRE6/image.png)
**Solution:**

Reconnect your MYOB account through the integration settings.

### Inactive Supplier

**Error:**

- Supplier [Name] is inactive in MYOB

![image.png](https://us.v-cdn.net/6038474/uploads/J0XEOLW8BMY0/image.png)
**Solution:**

In MYOB, activate the supplier card, then re-enable the integration in Retail Express.

### Tax Codes

**Error:**

- ValidationError: TaxTransactionComponent_PostableAccountRequired

![image.png](https://us.v-cdn.net/6038474/uploads/F669DW77KFTL/image.png)
**Solution:**

In MYOB, go to **Lists > Tax Codes** and confirm each tax type has a correctly configured GL account.

- **Australia**
  ![image.png](https://us.v-cdn.net/6038474/uploads/YGKRJYF8P68V/image.png)
- **New Zealand**
  ![image.png](https://us.v-cdn.net/6038474/uploads/D6C7XA2CJNRM/image.png)