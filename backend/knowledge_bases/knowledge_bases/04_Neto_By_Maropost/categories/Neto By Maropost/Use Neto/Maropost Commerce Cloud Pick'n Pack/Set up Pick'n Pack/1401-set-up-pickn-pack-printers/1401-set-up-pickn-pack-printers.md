---
title: "Set up Pick'n Pack Printers"
articleID: 1401
category: "Use Neto > Maropost Commerce Cloud Pick'n Pack > Set up Pick'n Pack"
knowledgeBase: "Neto By Maropost"
---

# Set up Pick'n Pack Printers

Pick'n Pack not only puts the pick and pack process in the palm of your hand, you can also print shipping labels directly from the app to complete order fulfilment process. There's three main ways to set up your printing, using Google Cloud Print, O'Print, or a networked Sato thermal printer.

- [Print from any Device with Google Cloud Print](https://galaxy.maropost.com/kb/articles/1401-set-up-pickn-pack-printers#google-cloud)
- [Print from Apple Mobile Devices with O'Print](https://galaxy.maropost.com/kb/articles/1401-set-up-pickn-pack-printers#oprint)
- [Set up your Sato Thermal Printer for Pick'n Pack](https://galaxy.maropost.com/kb/articles/1401-set-up-pickn-pack-printers#sato)

## Print from any Device with Google Cloud Print

Google Cloud Print is a popular and free service that allows you to print from mobile devices. It doesn't matter if your printer is directly connected to the internet, as Google Cloud Print can also print from a connected computer.

**Please Note**: Google Cloud Print is not associated with or supported by Neto.

Please see Google's instructions on how to [set up Google Could Print](https://support.google.com/cloudprint/answer/1686197).

Once you've setup your printer(s) on your Google account you will need to share them to anyone else who might need them.

Please see Google's instructions on how to [let others use your printer](https://support.google.com/cloudprint/answer/2541899).

## Print from Apple Mobile Devices with O'Print

To print from Neto Pick n Pack you will need an [Apple Airprint compatible printer](https://support.apple.com/en-au/HT201311).  If you don't have an Airprint compatible printer you can [install Airprint activator](http://www.airprintactivator.org/) software so that your printers are accessible via iOS devices.

**Please Note**: If you use the Airprint activator software, you will require a Windows PC to install and configure it.

[O'Print](http://oprintware.com/)is relatively cheap and easy to install.

**Please Note**: O'Print is not associated with or supported by Neto.

For more information about O'Print, see their setup video below:

[▶ YouTube Video](https://youtu.be/IKaUknIvOc8)

## Set up your Sato Thermal Printer for Pick'n Pack

You can setup your SATO thermal label printer to work with Neto Pick'n'Pack. This is ideal if you wish to use iOS throughout their entire fulfilment process.

**Please Note**: This article requires some networking knowledge.

Compatible models include the SATO CG408DT-LAN and SATO WS408. Other versions may still work however they have not been tested by Neto and are not officially supported.

To use the SATO label printer for Pick'n Pack with SmaPri you will need to:

- [Locate Printer IP Address](https://galaxy.maropost.com/kb/articles/1401-set-up-pickn-pack-printers#oprint)
- [Neto Settings](https://galaxy.maropost.com/kb/articles/1401-set-up-pickn-pack-printers#sato)
- [Set up iOS Device](https://galaxy.maropost.com/kb/articles/1401-set-up-pickn-pack-printers#1)

### Locate Printer IP Address

You will need to add your SATO thermal printer to your network and locate the IP Address (as this will be required later). You can find the IP address by following the steps in [this video](https://www.youtube.com/watch?v=UGFQOYZ24sc&feature=youtu.be) or the below steps:

> **Note:** Reset your printer to factory defaults by following the steps in [this video](https://youtu.be/q4MxC7zH82g).

1. Switch off the printer. From the off position, hold both the **Feed line** and **Power button** together.
2. You'll hear a beep. Release the buttons and then press the **Feed** button again. This will print out the current printer settings and IP address over 3 or 4 labels.
3. Press the **Feed** button again to stop printing.

> **Note:** If you need to change the network settings, you'll need to download and install SATO's [Windows based Admin Manager configuration tool](http://www.satoeurope.com/nordic/service-support/utilities.aspx) and follow the instructions as per their [PDF documentation](http://www.sato.it/download/Programming%20Manuals/SATO/Ethernet%20&%20WiFi%20Board/LAN_and_WiFi_manual_interfaces_EN.pdf).

### Neto Settings

To use the SmaPri app to print labels you need to change a setting in Neto:

1. In your Neto control panel, navigate to **Settings & tools** > **All settings & tools**.
2. Locate and click on **Pick'n Pack Settings**.
3. Select the **Use SmaPri printing for consignment labels** checkbox and click the **Save** button.

### Set up iOS Device

Now that you have the printer settings (including the IP address) you can set up SmaPri on your iOS device:

1. Open your iOS device and download [SATO's SmaPri drivers](http://itunes.apple.com/au/app/smapri-driver/id586520676?mt=8) from the iTunes store.
2. Open the SmaPri Driver application and select **Printer Settings** from the bottom menu.
3. Based on the printer model you have, select the correct printer model from the list. On this model, it's **Status 3**.
4. Connect your printer by using either Bluetooth or Wifi connection. If you connect your printer via Wifi, you need to input correct printer's **IP address and its port number**. This information is often printed on the printers test print page. You may need to refer to your printer manual for further assistance.
5. Once you finish the connection, tap "Test Print" to test your printer.
6. Now in Pick'n Pack app, click the **Cog** icon, scroll down to **Printer Settings**, select **Always Use Label Printer**.

When you print documents in Pick'n'Pack, it will recognise the printer via the SmaPri app automatically. You will now be able to print your shipping labels directly from Neto Pick n Pack.