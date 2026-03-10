---
title: "Passkey Authentication (For macOS Users)"
articleID: 2145
category: "Account Management"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-07
---

# Passkey Authentication (For macOS Users)

A **Passkey** is a digital cryptographic credential allowing users to sign in to apps or websites without the use of a password or one-time OTP authentication mechanism. Here, users normally approve the sign-in process in the same way they unlock their devices via biometrics, facial/fingerprint recognition, PIN, or pattern.

Since passkeys are encrypted, they are resistant to phishing and remote cyberattacks. Plus, with passkeys, there are no passwords to steal, and no sign-in data can be used to initiate an attack, thus making it a convenient login option.

Benefits of passkeys:

- Achieves higher sign-in success rates.
- Faster time to sign in.
- A safer and more trustworthy alternative to a traditional sign-in method.
- Supports a cross-device authentication ecosystem.
- Prevents malicious activity across numerous passkey-supported accounts.

## How to Log In

Below are the steps to log in via passkeys:

1. If you wish to log in without using a password, click on the “**Use Passkey**” link. Do remember that to create a passkey, you must first log in to your account by entering your email and password, after which you can visit the Identity application to generate a new passkey. To learn more about this, read [**Configuring Passkeys from the Identity Application**](https://galaxy.maropost.com/kb/articles/2145-passkey-authentication-for-macos-users#configuring-passkeys-from-the-identity-application) topic.

![mfa6.png](https://us.v-cdn.net/6038474/uploads/4ZQNWI1WCWXR/mfa6.png)
2. Passkey is a secure login choice without the need for a password or authentication OTPs. Here, the system prompts you to sign in with a passkey either via your main device, a smartphone or tablet, or with the help of a USB security key.

![mfa12.png](https://us.v-cdn.net/6038474/uploads/2CFXU84GVQ82/mfa12.png)
3. By default, the system asks you to insert the passkey saved on the device you’re logging on. If you prefer, click the “**Use a different device**” tab to utilize other options.

![mfa14.png](https://us.v-cdn.net/6038474/uploads/MJIIOUJVXBQX/mfa14.png)
4. If you have saved the key on another device, choose the “**Use a** **phone or tablet**” option and scan the QR code using a smartphone or tablet that contains the passkey.

![authenticate54.png](https://us.v-cdn.net/6038474/uploads/P5Q7G8J3XOZH/authenticate54.png)
5. You can also opt for a USB security key containing the passkey to log in.

![mfa15.png](https://us.v-cdn.net/6038474/uploads/MH36ENM27THJ/mfa15.png)
After you complete the login process, the system will redirect you to the Marketing Cloud’s Dashboard if you own an account or have been added to one.

![authenticate25.png](https://us.v-cdn.net/6038474/uploads/Y5XMM2K87P74/authenticate25.png)

> **Important:** **Important: **If you aren't linked to an account, you’ll be redirected to the Marketing Cloud’s Identity application after you log in. To gain access to your account, kindly contact your system administrator.

![identity6(1).png](https://us.v-cdn.net/6038474/uploads/7QJP232T1JUS/identity6-281-29.png)
Once the administrator grants you account access, log in to your account and start using the application.

![authenticate42(1).png](https://us.v-cdn.net/6038474/uploads/YUW3X3IQD9RL/authenticate42-281-29.png)

## Configuring Passkeys from the Identity Application

Along with updating your account’s password, you can also set up a new passkey from the security section present in the [**Maropost Identity**](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) (https://id.maropost.com/) application. Such a method is a suitable way to access your account without the hassle of remembering your usernames and passwords all the time.

1. From the Marketing Cloud account, click on your username in the top right corner of the application. Then, click on **Profile**.

![authenticate8.png](https://us.v-cdn.net/6038474/uploads/4ESTF2KIV1JO/authenticate8.png)
2. You’ll be redirected to the [**Maropost Identity**](https://galaxy.maropost.com/kb/articles/38-using-maropost-identity-app) (https://id.maropost.com/) application. To configure your new passkey, visit the **Security** section, and under **Passwordless** (Passkey), click on **Set Up Passkey**.

![authenticate66.png](https://us.v-cdn.net/6038474/uploads/YLKAV2TF5R8H/authenticate66.png)
3. If you’ve been logged in for a while, you will need to re-authenticate again by entering your account’s credentials and submitting a one-time OTP before setting up your account’s passkey.

![mfa21(1).png](https://us.v-cdn.net/6038474/uploads/CDPN2W8DZKLL/mfa21-281-29.png)
4. However, if you’re setting up a passwordless credential immediately after logging in, you will be redirected to the **Passkey Registration** page and be asked to register a new passkey.

![mfa22.png](https://us.v-cdn.net/6038474/uploads/N36F8RXHUC01/mfa22.png)
5. Upon clicking “**Register,**” a dialog box appears, prompting you to confirm the method by which you wish to create the passkey. By choosing “**This device,**” the passkey is created and saved on the device you are registering on. At your discretion, you can create and save the passkey on other devices as well.

![mfa31.gif](https://us.v-cdn.net/6038474/uploads/CDF3U1Q5IGT9/mfa31.gif)
If Apple Keychain is enabled, it would be available as the first preference by default for passkey registration.

![mfa33.png](https://us.v-cdn.net/6038474/uploads/CBTS1DXOYN2X/mfa33.png)
**Apple’s iCloud Keychain** is a built-in password management feature that securely stores passwords, passkeys, and other sensitive information in your macOS device. This option appears only if you have enabled iCloud Keychain on your macOS devices' System Settings.

![mfa32.png](https://us.v-cdn.net/6038474/uploads/9QO7T0YBWW9U/mfa32.png)
**Passkey setup variations on other web browsers:**

- If you've already signed in to Chrome with your Google account, you can save the passkey in the **Google Password Manager** on your Chrome browser.
- Passkeys on Microsoft Edge accounts are saved in the **Microsoft Wallet** (i.e., device) of your Edge browser.
- In **Firefox** and **Safari** browsers, there are only three options to save the passkeys. They are, namely, Apple Keychain, Mobile Bluetooth, and USB Security Key.
- In the case of **Chrome** and **Microsoft** **Edge Profile** passkeys, they are saved only on the device and not to your Google and Microsoft accounts.

6. Next, add a label that helps you identify the passkey more easily. This is beneficial if you’re handling multiple accounts that require a passkey to gain access to. Click on **Submit** to save the newly created passkey.

![mfa23.png](https://us.v-cdn.net/6038474/uploads/V2DYC480Y3NE/mfa23.png)
The passkey gets generated and is saved in your account’s Identity application.

![authenticate70.png](https://us.v-cdn.net/6038474/uploads/R7C9FJPPHIRT/authenticate70.png)
7. If you no longer require the passkey in the future, simply click on **Delete**, which takes you to the passkey sign-in page. However, if you've logged in for a while, you might need to re-authenticate before proceeding with removing a passkey from your account.

![mfa24.png](https://us.v-cdn.net/6038474/uploads/B4C6TYRGC2RB/mfa24.png)
8. After confirming the deletion request, your passkey is removed from your account.

![mfa17.png](https://us.v-cdn.net/6038474/uploads/4XY05DY3CX9W/mfa17.png)

> **Note:** **Note: **If a passkey is deleted from Maropost Identity, it must also be deleted from the system; otherwise, the deletion process remains incomplete.

## Related Articles

**Contact Management:**

- [Creating a Contact List](https://galaxy.maropost.com/kb/articles/4-creating-a-contact-list-new) - Build targeted audience segments
- [Email Contact Lists Overview](https://galaxy.maropost.com/kb/articles/13-email-contact-lists-overview-legacy) - Understand contact management fundamentals

**Campaign Management:**

- [Create Your First Email Campaign](https://galaxy.maropost.com/kb/articles/test-2-create-your-first-email-campaign) - Use contact lists in campaign creation
- [Campaign Tags](https://galaxy.maropost.com/kb/articles/926-campaign-tags) - Organize campaigns by contact segments

**Analytics & Reporting:**

- [A/B Campaign Reports](https://galaxy.maropost.com/kb/articles/632-ab-campaign-reports) - Track contact engagement across campaigns