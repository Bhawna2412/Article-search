---
title: "Multi-Account Management"
articleID: 982
category: "Jetsend Account Settings"
knowledgeBase: "JetSend"
lastUpdated: 2024-04-11
---

# Multi-Account Management

## Why Use Multi-Account feature?

Several benefits come with using the multi-account feature. Consider you are a business with several departments – let's say, Sales, Finance, Human Resources, and so on! You want each of these departments to have some sort of autonomy while they still have some commonality. Or, you are an agency with multiple clients, and you need to separate their businesses. The multi-account feature in JetSend is built to cover these scenarios and much more.  
  
Here are some of the benefits you'll get with the multi-account feature:

* **Effortless Account Management:**You can associate all your accounts with single ownership and manage all the account-related activities in a single place. You can switch easily between your accounts without having to log out.

* **Segregate Business into Different Accounts:**You can segregate different aspects of your business into different accounts under your ownership. These accounts can run independently and each can have its separate reports and analytics.

* **Single Plan and Billing Convenience:**With the Multi-account feature, all your accounts fall under a single plan. You can efficiently manage your email volume across the accounts. You'll only have to worry about a single billing cycle and not one for each.

* **Simplifies User Access:**The multi-account feature simplifies managing users and their access. You can assign users to specific accounts depending on the requirement. Each user will have access only to their account-specific data (such as reports and denial lists).  
  A user who is added to multiple accounts has access to all those accounts and can switch between the accounts without having to log out.

## Adding Multiple Accounts

You can add and manage the accounts using both the user interface and API.

### On the Accounts tab

JetSend provides a simple user interface to add and manage multiple accounts. Only an account owner can add and update the accounts.  
On the Account Details page, go to the ACCOUNT(S) tab and scroll down to the Accounts section. In this section, you can see all the accounts associated with you. To add a new account, click Add Account, then enter a name for the new account and click Save.  
  
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/Accountssection.05T5g00000I8kWVEAZ.png)

### Using the JetSend API

You can also add and manage accounts using the [Accounts](http://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fdocs.jetsend.com%2F%23tag%2FAccounts) APIs. You'll need a Master API Key to use the API. You can generate a Master API Key in the API Keys tab of the Account Details page. Only an account owner can   
Note: You cannot transmit messages using Master API Key.  
  
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MasterKeyAPI.05T5g00000I8kWaEAJ.png)

## Understanding Account Access and User Permissions

As an Owner, you have access to all the accounts and you can easily switch between the accounts.  
However, a user has access to only those accounts to which they are added. If a user is added to multiple accounts, they can access and switch between those accounts.  
  
The following diagram shows the relationship between owner, accounts, and users:   
![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/UserAccessDiagram.05T5g00000I8kX4EAJ.png)  
  
  
  
The following table lists out the account-related accesses and privileges for owner and user roles:

| Actions | Accesses/Privileges | | |
| --- | --- | --- | --- |
| Owner | User with Admin Role | User with Developer and User Role |
| Access to ACCOUNT(S) Tab | Yes | Yes (only for membership account) | Yes (only for membership account) |
| Add New Account | Yes | No | No |
| Add New User | Yes | Yes (only for membership account) | No |
| Access to Dashboard and Reports | Yes | Yes (only for membership account) | Yes (only for membership account) |
| Master API Key | Yes | No | No |