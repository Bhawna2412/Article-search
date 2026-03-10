---
title: "USB and Bluetooth Barcode Scanner Setup"
articleID: 796
category: "Use Neto > Point of Sale (POS) > Set up POS"
knowledgeBase: "Neto By Maropost"
---

# USB and Bluetooth Barcode Scanner Setup

> **Note**: Neto by Maropost POS is not available outside of Australia and New Zealand.

Barcode scanners require no drivers, so simply plug the barcode scanner into your computer's USB port or pair it with Bluetooth. The computer should recognise the device, and you should be able to start scanning products right away.

When you scan a barcode, the device converts the barcode into a string of characters (numbers or letters) and passes these through to your computer. If items are not scanning or the product is not found, log in to the Neto by Maropost control panel dashboard, navigate to **Products **> **View Products, **and edit the product you're trying to scan.

Click on the **Warehouse & Picking **tab and check that the **UPC/EAN field **is populated and matches the barcode; otherwise, it will not be recognised.

## Set Up a USB Scanner

Sometimes you will be required to set up your USB scanner if it's not functioning correctly. Configuration issues include the scanner turning off randomly, not recognising any barcodes, barcode is recognised but requires you to press Enter, and so forth.

To fix this, refer to your manufacturers manual, which will include a barcode sheet you can use to reset or set up the scanner to the correct settings.

For **Datalogic Quickscan USB Scanners** users, scan the barcodes below (scan using the computer screen, no need to print) to resolve any issues.

![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/USBandBluetoothBarcodeScannerSetup1.05T5g00000szSP6EAM.png)

![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/USBandBluetoothBarcodeScannerSetup2.05T5g00000szUE1EAM.png)

## Set up a Bluetooth Scanner

For Bluetooth scanners, you will need to “pair” the scanner with your Bluetooth-compatible device. Please follow the instructions provided with your chosen device to set up your Bluetooth scanner. Once paired, you should be able to start scanning products right away.

The Socket Mobile scanners are portable Bluetooth scanners that work great with Maropost POS. The scanners connect to your iPad via Bluetooth, which enables you to move freely at the register.

For details on where you can purchase the scanner and other hardware compatible with Maropost POS, please see our page on hardware [here.](https://galaxy.maropost.com/kb/articles/1630-maropost-pos-compatible-hardware)

## Pair your Socket Mobile Scanner

The Socket Mobile scanners are handy, portable Bluetooth scanners that work great with Maropost POS. The scanners connect to your iPad via Bluetooth, which enables you to move freely at the register.

For details on where you can purchase the scanner and other hardware compatible with Maropost POS, please see our page on hardware [here.](https://galaxy.maropost.com/kb/articles/1630-maropost-pos-compatible-hardware)

1. To turn on the scanner, press and hold the small power button until it beeps twice.
2. Once powered up, you will need to access the settings application on the iPad you wish to connect it to. Open the Bluetooth settings, and ensure ‘Bluetooth’ is enabled.
3. Your iPad will now start searching for nearby Bluetooth devices, including your scanner. The socket scanner should appear in the list ‘Other devices’ with a name starting with Socket CHS.
4. Select the Socket scanner.

Once paired, you should be able to scan product barcodes throughout Maropost POS. For more information on registering your barcodes, see our article [here](https://galaxy.maropost.com/kb/articles/1555-barcode-best-practices).

## Access the iPad Keyboard with the Scanner Connected

With the scanner connected, your iPad might not show the on screen keyboard when you need it to. This is because the scanner is acting as a Bluetooth keyboard. To show the on screen keyboard with the scanner connected, double tap the power button on the scanner and it will show or hide the keyboard.

## Troubleshooting

#### I cannot pair my scanner

If you are having trouble pairing your scanner, a common way to resolve issues it to completely un-pair the scanner, ‘forget’ the scanner from your iPad, and connect it again.

1. Whilst your scanner is on, press and hold the two buttons until you hear three beeps
2. If you have previously paired this scanner, you will need to ‘forget’ it from your iPad. If you have not paired it before, then you can skip this step.
3. From your Bluetooth device list, select the Socket scanner and tap on the ‘i’ button.
4. Tap on the ‘Forget This Device’ option.
5. Follow the instructions above in the ‘Pairing your scanner’ section.

#### Nothing happens when I scan a barcode in Maropost POS

If you have been using your Socket scanner with another POS solution, you might find that your scanner is in a special mode for that application. Maropost POS expects your scanner to be in a mode that acts more like a Bluetooth keyboard. Changing to this mode (called ‘HID mode’) is a simple process and will allow you to use the scanner with Maropost POS.

1. Disconnect your scanner from the your iPad
2. Scan the barcode below, to perform a factory reset. If the barcode is not scannable from your screen, you might need print the page. These codes will also be in the manual that came with your scanner.
![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/USBandBluetoothBarcodeScannerSetup3.05T5g00000szUFOEA2.png)
3. Turn the scanner back on, and scan the barcode below to enable HID mode (not iOS mode).
![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/USBandBluetoothBarcodeScannerSetup4.05T5g00000szUGCEA2.png)
4. Follow the instructions above in the ‘Pairing your scanner’ section to repair your scanner.

## Advanced Settings

Your Bluetooth scanner can be configured with a number of settings, such as turning off the beep or vibrate. These are set by scanning different barcodes provided by the manufacturer, and can be [accessed from their command sheet](https://www.socketmobile.com/docs/default-source/series-7/chs-1d-imager-command-barcodes-sheet.pdf?sfvrsn=20).

> **Tip**: Add a carriage return data suffix on scan to make the cursor move to a new line after data is received.