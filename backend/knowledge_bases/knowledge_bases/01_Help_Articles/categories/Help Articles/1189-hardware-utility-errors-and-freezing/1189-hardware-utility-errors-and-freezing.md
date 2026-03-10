---
title: "Hardware Utility Errors and freezing"
articleID: 1189
knowledgeBase: "Help Articles"
lastUpdated: 2023-07-08
---

# Hardware Utility Errors and freezing

# Hardware Utility Errors and freezing

If the Hardware Utility is causing an error when opening such as a XML error or a message displays contact application vendor.

OR

If the Hardware Utility is stuck in this stage of the Hardware Utility and will not continue when clicked Next.

- The Hardware Utility freezes on the printer section and will not continue (Next disabled)

Picture below:

![rtaImage - 2023-07-08T105903.372.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO6YEAU.jpg)

Follow the steps below on how to troubleshoot:

* 1. Uninstall REX HW through **Control Panel**
  2. Open **Command Prompt** as **Admin,** type the following commands
     1. ```
        sc stop rexhardware
        ```
     2. ```
        sc delete rexhardware
        ```
  3. Delete folder:
     1. ```
        C:\Program Files (x86)\Retail Express
        ```
  4. **RESTART** if the folder above does not delete
  5. Reinstall REX H/W utility