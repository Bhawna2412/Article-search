---
title: "Hardware and Software System Requirements"
articleID: 228
category: "Hardware > Computer"
knowledgeBase: "Retail Express"
---

# Hardware and Software System Requirements

You can ensure optimal retail operations performance and reliability by selecting hardware and software configurations that meet **Retail Express** system requirements, helping your POS and back office systems run efficiently across multiple device types. Properly configured hardware typically delivers faster transaction processing, improved system stability, and better overall retail operations efficiency.

Understanding hardware compatibility requirements helps retail operators make informed technology investment decisions for their physical retail locations, ensuring receipt printing, barcode scanning, and EFTPOS integration work reliably across Windows, Mac, and tablet environments used in Australian and New Zealand retail operations.

Retail Express is a browser-based application designed to work on multiple hardware platforms and Internet Browsers. To provide the best possible user experience and functionality, the system has been developed to be cross-browser compatible using the latest web technologies.

The Retail Express POS solution is also designed to work on iPad tablets to allow retailers to engage their customers more actively on the showroom floor and improve the sales experience.

![blobid0 (11).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppO51EAE.jpg)

> **Note:** For more detailed information, including a full and current list of supported POS Terminals, Operating Systems, and hardware please see the documentation included as an attachment at the end of this article.

## []()Internet Browsers

Retail Express is a cloud-based system, accessed by an Internet Browser on your computer or device. While we support the latest version of all modern browsers, we have found that **Google Chrome **consistently performs faster and more reliably.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | **Windows 10 (Home or Pro) or Windows 11** | **Apple Mac Computer** | **iPad** | **Android** | **Windows Tablet** |
| **POS** | All modern browsers (e.g. Chrome - recommended, Firefox and Edge) | Google Chrome (Virtual machine required for receipt printing/integrated EFTPOS) | Safari | NA | Chrome |
| **Back Office** | All modern browsers (e.g. Chrome - recommended, Firefox and Edge) | Google Chrome or Safari | None | NA | Chrome |

> **Note:** Using a Mac with Retail Express can require a virtual machine running a full version of Windows, see below for details.

## Computer and Mobile Device Compatibility

### Windows and Mac

Retail Express POS is compatible with the following tablet devices and specifications:

|  |  |  |
| --- | --- | --- |
| ** ** | **Windows Computer** | **Apple Mac Computer** |
|  | (Windows 10 Home or Pro or Windows 11) | To use Receipt Printers, Integrated EFTPOS and Label Printing you will need to install [VMWare Fusion](https://www.vmware.com/au/products/fusion.html) (Mac OS X 10.15+) and Windows 10+. |
| POS with Receipt Printer and/or Tyro | * * 			Yes (Windows IoT/Embedded not supported) | * * 			Yes (Requires virtual machine running a full version of Windows) |
| POS sharing Receipt Printer or Tyro from another Windows Computer | * * 			Yes (Windows IoT/Embedded not supported) | * * 			Yes |
| POS without need for Receipt Printer or Tyro connection (i.e. A4 printing/emailing of Invoices) | * * 			Yes | * * 			Yes |
| Back Office with Zebra Label Printer connected | * * 			Yes (Windows IoT/Embedded not supported) | * * 			Yes |
| Back Office with no Zebra Label Printer connected | * * 			Yes | * * 			Yes |

### Mobile Devices

|  |  |  |  |
| --- | --- | --- | --- |
| ** ** | **Apple iPad tablet** | **Android tablet** | **Windows Tablet** |
|  |  |  | (RT is not supported) |
| POS with Receipt Printer and/or Tyro | * * 			No | * * 			No | * * 			Yes |
| POS sharing Receipt Printer or Tyro from another Windows Computer | * * 			Yes | * * 			No | * * 			Yes |
| POS without need for Receipt Printer or Tyro connection (i.e. A4 printing/emailing of Invoices) | * * 			Yes | * * 			No | * * 			Yes |
| Back Office with Zebra Label Printer connected | * * 			No | * * 			No | * * 			Yes |
| Back Office with no Zebra Label Printer connected | * * 			No | * * 			No | * * 			Yes |

## []()Hardware Requirements

The hardware requirements for using Retail Express are as follows:

|  |  |  |
| --- | --- | --- |
| **Computer System/PC** |  | Minimum requirements:  - Intel I3 Quad Core or Higher, AMD Quad Core or Higher - 8GB Ram or higher (16GB recommended for optimal performance) |
| **Monitor** | VGA HDMI DVI | - Minimum of 15 inches (we recommend at least 21 inches or larger, as the bigger the screen the easier it will be to review reports without scrolling) - Smaller devices will work (Microsoft Surface etc) however you may need to zoom out on the browser to view all features successfully e.g. POS. - 1024 x 768 resolution (preferred resolution is 1920 x 1080) - Touch screens are compatible with Retail Express, however, can be much more expensive. The same resolution recommendations apply to touch screens. |
| **Barcode Scanner** | USB Com/Serial LPT/Parallel | Retail Express is compatible with most standard barcode scanners (both corded and wireless). Installation is usually as simple as just plugging the scanner into an available USB port. |
| **Receipt Printer** | USB Com/Serial LPT/Parallel | If you plan on using a receipt printer it **must **be an "Epson Compatible" printer. It must also be connected to your PC via one of the listed connections. Alternatively, you can print A4 Tax Invoices and Receipts via a standard A4 Inkjet or Laser Printer. |
| **Cash Drawer** | RJ11 | If you plan on using a cash drawer, it's recommended to be connected via an RJ11 cable to your Receipt Printer (for the cash drawer to automatically open). It **cannot **be connected directly to your computer. You cannot plug a cash drawer directly into a USB port on your computer - it will not work with Retail Express. |
| **Barcode Label Printer** | COM/Serial LPT/Parallel USB via virtual COM port | If you plan on printing your own barcode labels you can select from either of the following 2 options:  - Use a standard A4 inkjet or laser printer and purchase label sticker sheets (not recommended) - Use an EPL-compatible Zebra Label Printer (required) |
| **Operating System** |  | Retail Express must run on a PC with one of the following operating systems:  - Windows 10 - Windows 11  Windows XP, 7, 8 or Windows 10 Enterprise are not supported. |
| **Spreadsheets** |  | For using some of the Back Office features of Retail Express (Excel Scan Stocktake, PO Matrix etc - anything utilising macro functionality) we highly recommend using Windows Microsoft Excel (non-cloud based e.g. Office 365). While other spreadsheet software (Open Office etc) may still offer basic functionality, not all advanced features in the Excel files will be available in other programs, including Apple mac versions of Excel. |
| **Web Browser** |  | Retail Express supports all modern browsers, including Google Chrome (preferred), Edge, and Safari. |
| **Unsupported Hardware** |  | Retail Express does not support the following hardware:  - Display Poles - Weighing Scales - PDAs - Mobile Phone displays - Tablets with a screen size of less than 10 inches - Computers running Windows XP, 7, 8 or Windows 10 Enterprise - Commonwealth Bank "Albert" EFTPOS terminals |

## []()Offline POS

Minimum hardware requirements for Offline POS (recommendations also available in brackets):

|  |  |
| --- | --- |
| **Operating System** or **Server Environment** | Microsoft Windows 10 or Higher - full versions only (required) or Server 2008 SP2 or higher (required) |
| **Ram** | 8GB Ram minimum (16GB recommended for optimal performance) |
| **Storage** | 20GB+ free disk space (SSD Recommended) |
| **Processor** | Intel I3 Quad Core or Higher, AMD Quad Core or Higher |
| **Network** | Any network interface (including wireless) running IPv4 (recommended Gigabit Ethernet) |
| **Internet Connection** | 512Kbps down/512Kbps up (recommended 2Mbps+ down/1Mbps+ up) |