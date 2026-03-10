---
title: "Passkeys for Neto Login on macOS"
articleID: 2261
category: "Use Neto > Your Account"
knowledgeBase: "Neto By Maropost"
---

# Passkeys for Neto Login on macOS

## Introducing Passkeys

Neto by Maropost supports passkey as one of the sign-in options. You can use a passkey instead of your login credentials to sign in.

Using a passkey is a secure login option that does not require you to enter login credentials or authentication One-Time Passwords (OTPs). As a passkey, you can use quick sign-in options, such as device PIN, Face ID, fingerprint, and others.

**What is a passkey and its advantages?**

A passkey is an encrypted credential used for authenticating account login requests without the need for a username, password, or OTP, thus providing users with the convenience, all while ensuring a high degree of security. Here, users typically approve the sign-in process in the same way they unlock their devices, using biometrics, facial/fingerprint recognition, PIN, or pattern.

Since passkeys are encrypted, they are resistant to phishing and remote cyberattacks. Plus, with passkeys, there are no passwords to steal, and no sign-in data can be used to initiate an attack, thus making it a convenient login option.

Key benefits of passkeys are:

- Higher sign-in success rates
- Faster sign-ins
- A safer and more trustworthy alternative to a traditional sign-in method
- Supports a cross-device authentication ecosystem
- Prevents malicious activity across numerous passkey-supported accounts

## Setting Up a Passkey (on macOS)

You can set up multiple passkeys to be used for multiple accounts or devices.

Steps to register a Passkey:

1. Go to the Identity portal. You can access it directly at [https://id.maropost.com](https://id.maropost.com/) or from your Neto control panel, click your username at the top-right corner, and select **Manage account and password**.
  ![AccessingPortal.png](https://us.v-cdn.net/6038474/uploads/NGVNWDABUM7H/accessingportal.png)
2. On the Identity portal, select the **Security** tab and scroll down to the **Passwordless** section.
  ![Identity-Passkey.jpg](https://us.v-cdn.net/6038474/uploads/OI096QD28C23/identity-passkey.jpg)
3. Click **Set Up Passkey**.
4. **Apple’s iCloud Keychain** is a built-in password management feature that securely stores passwords, passkeys, and other sensitive information in your macOS device. This option appears only if you have enabled iCloud Keychain on your macOS devices' System Settings.
  ![passkey.gif](https://us.v-cdn.net/6038474/uploads/Z2HK8AHVNCZX/passkey.gif)

  ![Applekeychain1.png](https://us.v-cdn.net/6038474/uploads/JJUTDU844T56/applekeychain1.png)

  ![Applekeychain2.png](https://us.v-cdn.net/6038474/uploads/UHR4PPQHU1WW/applekeychain2.png)
5. Next, add a label for the new passkey to help identify the passkey. Finally, click **Submit**.
  ![passkeylabel.png](https://us.v-cdn.net/6038474/uploads/7S9QKTDC0WSH/passkeylabel.png)

The passkey is generated and saved in your account’s Identity application.

> **Notes: Passkey setup variations on various web browsers:**

- If you've already signed in to Chrome with your Google account, you can save the passkey in the **Google Password Manager** on your Chrome browser.
- Passkeys on Microsoft Edge accounts are saved in the **Microsoft Wallet** of your Edge browser.
- In Firefox and Safari browsers, there are only three options to save the passkeys. They are – Apple Keychain, Mobile Bluetooth, and USB Security Key.
- In the case of Chrome and Microsoft Edge, the passkeys are saved only on the device and not to your Google and Microsoft accounts.

## Delete a Passkey

If you no longer require a passkey, you can delete it by following the steps below:

1. On the Identity portal, go to the **Security** tab, scroll down to the **Passwordless** section. Here, you can see all your passkeys.
2. For the passkey that you want to delete, click **Delete**.
  ![Deletepasskey.png](https://us.v-cdn.net/6038474/uploads/6422S326BMJK/deletepasskey.png)
3. On the Delete Passkey dialog box, click **Confirm Delete**.
**Note**: You may be asked to re-authenticate before being redirected to the passkey deletion page.
  ![passkeydelete2.png](https://us.v-cdn.net/6038474/uploads/78Y1R6W7RTXH/passkeydelete2.png)
4. Delete the passkey from the device as well; otherwise, the deletion process remains incomplete.

## Logging In with Passkey (on macOS)

> **Note**: You must set up the passkey before you can use it. A user can create and manage multiple passkeys on their Identity portal.

Steps to log in with PassKey:

1. On the Login page, click the **Use Passkey** link.
  ![Login Page Passkey.jpg](https://us.v-cdn.net/6038474/uploads/G5E1OQACV928/login-page-passkey.jpg)
2. On the PassKey Login page, click the **Sign In With Passkey** button.
  ![Passkey Sign In.jpg](https://us.v-cdn.net/6038474/uploads/26M9IEZGCFJN/passkey-sign-in.jpg)
3. You’ll be prompted for the passkey option that you have configured. By default, the system asks you to insert the passkey saved on the device you’re logging on.
  ![passkeymethod.png](https://us.v-cdn.net/6038474/uploads/LSNNHS9SNWB6/passkeymethod.png)
4. You can also select the USB security key option if you have configured a USB security key device for the passkey.
  ![Passkeydiffdevice.png](https://us.v-cdn.net/6038474/uploads/80INEOM8WW2A/passkeydiffdevice.png)

  ![passkeyUSB.png](https://us.v-cdn.net/6038474/uploads/X7LSU7LLYQN9/passkeyusb.png)
5. Upon successful verification, you’ll be redirected to your Neto control panel dashboard.