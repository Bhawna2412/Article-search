---
title: "Neto by Maropost Release Notes – 13 Dec 2023"
articleID: 2130
category: "2023 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-15
---

# Neto by Maropost Release Notes – 13 Dec 2023

## **Overview**

This release introduces some notable changes to our password policies, bringing you more flexibility and an improved experience.

## **Enhancements and Updates**

### **Ability to Opt-Out from the 90-Day Password Expiry Requirement**

You can now choose to opt out of the 90-day password expiry policy that was enforced in compliance with the PCI requirement. However, the opt-out option is available only if the **Multi-Factor Authentication** **(MFA)** feature is enabled. This is to ensure that PCI compliance is met either through password expiry policy or MFA.

To learn about the features in detail, see [**Manage Your Neto Account**](https://galaxy.maropost.com/s/article/Manage-Your-Neto-Account) and [**Multi-Factor Authentication (MFA)**](https://galaxy.maropost.com/s/article/multi-factor-authentication).

We added a new option **Password expiry policy** on the **Manage account** page. You’ll notice the option remains unavailable if the MFA option is disabled.
![MFADisabled](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MFADisabled.0685g00000Io9EhAAJ.png)

Once you enable the MFA option, the Password expiry policy becomes editable. You can choose to disable the Password expiry policy or enable it along with MFA for additional security.
![MFAEnabled](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MFAEnabled.0685g00000Io9oWAAR.png)

To opt out of the Password expiry policy, click the **Opt-out Password Expiry** button, then in the **Opt-out password policy** dialog box, enter your password to authenticate yourself and click **Opt Out**.
![MFAEnabledPasswordOptedIn](https://us.v-cdn.net/6038474/uploads/attachments/migrated/MFAEnabledPasswordOptedIn.0685g00000Io9qBAAR.png)

**Reverted Password Length Requirement for My Account Portal**

Earlier this year, to comply with the PCI requirements, the password length requirement was increased to 12 characters for both the Control Panel and shoppers' My Account portal. However, recognizing the impact on shoppers and realizing that the webstore login does not require the same level of security, we have separated the Webstore requirements from the Control Panel requirements. The password length requirement for the My Account webstore portal is now changed back to 8 characters.

**The password requirements for shoppers' My Account webstore portal are:**

- **Must be 8 characters long**
- **Must contain at least 1 upper case, 1 lower case, and 1 number**