---
title: "JetSend Release Notes - February 2022"
articleID: 1678
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# JetSend Release Notes - February 2022

## Overview

**Release Date**: 22nd February 2022

In this release, you'll find:

- [Multi-Account Management](#RN_Multiaccount)
- [DMARC Alignment for Sending Domains](#RN_DMARC_Alignment)
- [Email Attachments](#RN_Email_Attachments)
- [User Interface Enhancements](#RN_UI_Enhancements)

## New Features

### []()Multi-Account Management

The multi-account management feature enables you to create and manage multiple accounts under single ownership. To learn about multi-account management in detail, see

Multi-Account Management

.

Here's a quick list of the feature capabilities:

- You can segregate different aspects of your business into separate accounts without the hassle of management.
- The account owner has access to all accounts while users have access to accounts to which they are added.
- All accounts use the same plan and have only one billing cycle.
- You can have separate sending domains for your accounts or share the sending domains among your accounts.

In the ACCOUNT(S) tab of the Account Details page, a new section called

Accounts

has been added that enables you to add and manage new accounts easily.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/AccountsTabRN.05T5g00000IACkNEAX.png)
You can use the

Accounts APIs

to create and manage new accounts. You'll require a Master Key, which can be created on the API KEYS tab of the Account Details page. For more information,

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/APIKeysTabRN.05T5g00000IACkhEAH.png)

### []()DMARC Alignment in Sending Domains

JetSend now supports DMARC alignment of sending domains by enabling you to set up custom return-path for your domains. The custom return-path setup can be done during the verification process of your sending domain.

To learn more about DMARC alignment and how JetSend helps you achieve it, see [DMARC Alignment](https://galaxy.maropost.com/s/article/DMARC-Alignment) and [Set Up Sending Domains](https://galaxy.maropost.com/s/article/set-up-sending-domains).![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/DMARCVerification.05T5g00000IAChxEAH.png)

### []()Email Attachments

JetSend now enables you to include attachments in your emails. Whether you have been wanting to include a payment receipt in an order confirmation email or send a monthly report to your investors – adding attachments in your emails will surely help improve their usability and value.

The email attachment feature is available for both API and SMTP sending options.

To learn how you can add email attachments, see

Adding Email Attachments

.

### []()User Interface Enhancements

As part of improving your user experience with JetSend, we keep enhancing our user interfaces. There have been quite a few UI changes in recent times and here's a couple to note:

- The suppression list and Blacklisted contacts now appear under the **Denial Lists** sub-category (In Navigation, go to EMAIL, and select Denial List.
- The Switch Account drop-down (on the top-right of the application UI) has been vastly improved.