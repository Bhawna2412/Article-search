---
title: "Enabling Local Network Access in Google Chrome for Retail Express POS"
articleID: 2339
category: "Hardware > Receipt Printers"
knowledgeBase: "Retail Express"
---

# Enabling Local Network Access in Google Chrome for Retail Express POS

When using **Retail Express POS** through Google Chrome, your browser may block local devices (such as receipt printers or integrated EFTPOS terminals) by default.

To ensure proper hardware communication, you must **enable Local Network Access** for the Retail Express domain.

## 🔹 Option 1: Enable via Site Settings (Recommended)

Use the steps below with reference to the screenshots provided.

**Step 1 - Open Site Settings**

1. While logged into POS, click the **lock icon** next to the website address (see image below).  1. 
    ![image.png](https://us.v-cdn.net/6038474/uploads/ISFUP2EU788E/image.png)
2. Click **Site settings**.  1. 
    ![image.png](https://us.v-cdn.net/6038474/uploads/GUCQ0HZSVV37/image.png)

3. In the Settings tab that opens, scroll down to the **Privacy and Security** section.

4. Find **Local network access** and change it to **Allow**.

![image.png](https://us.v-cdn.net/6038474/uploads/Y4R4NYTXFR83/image.png)
That's it! Your POS should now communicate correctly with your local receipt printer and EFTPOS devices.

## 🔹 Option 2: Enable Manually Through Chrome Settings

If you prefer to set this manually:

1. Open Chrome and click the **three vertical dots** (⋮) in the top-right corner.
2. Select **Settings**.
3. Go to **Privacy and security → Site settings**.
4. Scroll to **Permissions → Additional permissions**.
5. Click **Local network access**.
6. Next to **"Allowed to connect to any device on your local network"**, click **Add**.
7. pos.retailexpress.com.au
8. Click **Add** to confirm.