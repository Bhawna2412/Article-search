---
title: "Passkeys for Neto Login on Windows"
articleID: 2260
category: "Use Neto > Your Account"
knowledgeBase: "Neto By Maropost"
---

# Passkeys for Neto Login on Windows

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

## Set Up a Passkey (on Windows)

You can set up multiple passkeys to be used for multiple accounts or devices.

Steps to register a Passkey:

1. Go to the Identity portal. You can access it directly at [https://id.maropost.com](https://id.maropost.com/) or from your Neto control panel, click your username at the top-right corner, and select **Manage account and password**.
2. On the Identity portal, select the **Security** tab and scroll down to the **Passwordless** section.
  ![Identity-Passkey.jpg](https://us.v-cdn.net/6038474/uploads/SMNNOSLW22X9/identity-passkey.jpg)
3. Click **Set Up Passkey**.
4. On the PassKey Registration page, click **Register**.
**Note**: You may be asked to re-authenticate (by entering your password and OTP pin) before being redirected to the passkey registration page.
  ![PasskeyReg.png](https://us.v-cdn.net/6038474/uploads/3FWQQUR9TA6Y/passkeyreg.png)
5. If Windows Hello isn't available or configured on your device, options such as Mobile Bluetooth and USB Security Key will be the primary choices.
  ![WindowsHello1.png](https://us.v-cdn.net/6038474/uploads/8U7LAETHBF2A/windowshello1.png)

  ![PasskeyMethodWindows.png](https://us.v-cdn.net/6038474/uploads/G16OWU46PDDC/passkeymethodwindows.png)
6. The passkey is generated and saved in your account’s Identity application.
  ![passkeylabel.png](https://us.v-cdn.net/6038474/uploads/8MOHDGZPB37Q/passkeylabel.png)

> **Notes: Passkey setup variations on other web browsers:
**- If you've already signed in to Chrome with your Google account, you can save the passkey in the **Google Password Manager** on your Chrome browser.
- In **Firefox** and **Safari** browsers, there are only three options for saving passkeys. They are, namely, Mobile Bluetooth and USB Security Key.

> **Notes: Configuring passkeys using the 1Password application:
**If you are unable to create and save passkeys by following steps **5** and **6**, there is another alternative in the form of **1Password** encryption security:
- First, install the 1Password application on your Windows device, then add its extension to your Chrome and Microsoft Edge browsers.
- Create an account in 1Password and register the passkey.
- Now, use this passkey to access your Maropost account. Recognize that the 1Password application does not work in Incognito mode in either Chrome or Microsoft Edge.

## Delete a Passkey

If you no longer require a passkey, you can delete it by following the steps below:

1. On the Identity portal, go to the **Security** tab, scroll down to the **Passwordless** section. Here, you can see all your passkeys.
2. For the passkey that you want to delete, click **Delete**.
  ![Deletepasskey.png](https://us.v-cdn.net/6038474/uploads/E2TIBZQL771A/deletepasskey.png)
3. On the Delete Passkey dialog box, click **Confirm Delete**.
**Note**: You may be asked to re-authenticate before being redirected to the passkey deletion page.
  ![passkeydelete2.png](https://us.v-cdn.net/6038474/uploads/L94L3MEXZ6DU/passkeydelete2.png)
4. Delete the passkey from the device as well; otherwise, the deletion process remains incomplete.

## Logging In with Passkey (on Windows)

> **Note**: You must set up the passkey before you can use it. A user can create and manage multiple passkeys on their Identity portal.

 Steps to log in with PassKey:

1. On the Login page, click the **Use Passkey** link.
  ![Login Page Passkey.jpg](https://us.v-cdn.net/6038474/uploads/PS15QJRZQN5R/login-page-passkey.jpg)
2. On the PassKey Login page, click the **Sign In With Passkey** button.
  ![Passkey Sign In.jpg](https://us.v-cdn.net/6038474/uploads/2LSW103SCJJX/passkey-sign-in.jpg)
3. You’ll be prompted for the passkey option that you have configured. If you’re using a Windows device with **Windows Hello** set up, the system displays it as the default passkey login option. Here, you must enter a six-digit PIN in the Windows Hello dialog box to access your account.
  ![WindowsHello2.png](https://us.v-cdn.net/6038474/uploads/R5D0PRJQCO3V/windowshello2.png)
4. You can also opt for an external security key device that contains the passkey for logging in.
  ![passkeymethod.png](https://us.v-cdn.net/6038474/uploads/THV6PNBQ7A6A/passkeymethod.png)

  ![WindowsHello3.png](https://us.v-cdn.net/6038474/uploads/XLTCB6XWTAWW/windowshello3.png)
5. Upon successful verification, you’ll be redirected to your Neto control panel dashboard.