---
title: "Adding extra registers and sharing hardware"
articleID: 591
category: "POS > Getting Started with POS"
knowledgeBase: "Retail Express"
---

# Adding extra registers and sharing hardware

You can expand your checkout capacity in Retail Express by adding additional registers and configuring shared hardware resources, helping your retail operations scale efficiently to meet customer demand. This capability allows you to set up multiple POS terminals that share printers, scanners, and other peripherals, which helps reduce hardware costs while maintaining operational flexibility during peak periods.

Setting up multi-register configurations with shared hardware enables your retail operations to optimize equipment investment, helping balance checkout capacity with budget constraints. This helps retail businesses handle increased traffic efficiently by adding registers as needed while maximizing the utility of existing hardware infrastructure.

Retail Express allows you to use an unlimited number of devices and registers making it ideal to add extra resources during busy trading periods. For example, if you hire additional staff at Christmas, you can quickly add extra computers and tablets to assist with queue busting and processing your customer sales faster.

> **Note:** Share your existing Receipt Printer and Integrated EFTPOS terminals (no need to organise additional hardware).

In the below example Computer A is sharing its hardware with an additional three devices (two computers and an iPad). Each of these devices can be used to process sales, connecting to Computer A's hardware to process payments and print receipts.

![computerhardwarediagram.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pmGNfEAM.jpg)
To configure the devices shown in the diagram  you would need to do the following:

|  |  |
| --- | --- |
| **Computer A:** **Host Computer** | - Install Receipt Printer and Integrated EFTPOS hardware using the - Registers assigned to use Computer A as the Hardware Service e.g. Register 1 |
| **Additional Computers** | - Security Certificate installed using the Hardware Utility (skip sections for Receipt Printer/Integrated EFTPOS/Assigning Registers) - To use the configured hardware log into a register assigned to Computer A e.g. Register 1 |
| **iPad** | - Configured as per the article - To use the configured hardware log into a register assigned to Computer A e.g. Register 1 |

If you have other Outlets with their own hardware they would be configured as their own Hardware Service host, similar to the setup for Computer.

## []()Frequently Asked Questions

### [Does each device need to use the same register?](https://galaxy.maropost.com/kb/articles/591-adding-extra-registers-and-sharing-hardware#registers)

Not at all. Depending on your requirements you may wish for each device to use their own separate Register, but there's a few things you should keep in mind:

- Separate registers will allow you to track where the sale was placed, and reconcile each register for the Cash Up/End of Day Process
- You cannot delete Registers once a sale has been created for that Register, or a Payment has been taken on that Register.
- Any new register will need to be assigned to the "Host Computer" (computer A in the above example) within the Hardware Services in order to share the same receipt printer/Integrated EFTPOS terminal. Re-run the Hardware Utility to assign additional Registers.

Refer to the POS Settings - Registers article for more information on creating additional registers.

Related articles:

- Hardware System Requirements (including POS terminals and tablets)