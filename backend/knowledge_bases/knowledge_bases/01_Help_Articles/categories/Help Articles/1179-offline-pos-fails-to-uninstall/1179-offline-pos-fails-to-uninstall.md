---
title: "Offline POS fails to uninstall"
articleID: 1179
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-08
---

# Offline POS fails to uninstall

# Offline POS fails to uninstall

**If Offline POS fails to uninstall or gets stuck during the uninstall process and error messages occur, the following steps should help to uninstall correctly.**

**This guide also helps to use straight away when uninstalling the Offline POS with or without errors/taking a long time, this will reduce heavily the amount of time to uninstall.**

[By following the original steps from Offline POS Troubleshooting](https://galaxy.maropost.com/s/article/Agent-Only-Offline-POS-Troubleshooting)

If this error messages appear during uninstall do **NOT** press **Retry**

![rtaImage - 2023-07-08T223232.792.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVgnEAE.jpg)

press **Cancel** and continue

---

The following steps should fix the issue

1. Open Task Manager and **END TASK** for :

   ```
   REX.Offline.UpdateService (32 bit)
   ```

   ```
   REX.Offline.PosService (32 bit)
   ```

   **End all tasks that start with 'REX.Offline'**  
   ![rtaImage - 2023-07-08T223238.838.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVhWEAU.jpg)
2. Press Retry or proceed to uninstall Offline POS
3. Offline POS should uninstall correctly with a finish button
4. Press Okay if messages appear during the uninstall

![rtaImage - 2023-07-08T223244.121.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppVjrEAE.jpg)