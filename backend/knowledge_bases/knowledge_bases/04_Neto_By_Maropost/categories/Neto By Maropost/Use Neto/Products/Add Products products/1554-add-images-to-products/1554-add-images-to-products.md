---
title: "Add Images to Products"
articleID: 1554
category: "Use Neto > Products > Add Products products"
knowledgeBase: "Neto By Maropost"
---

# Add Images to Products

There are a number of different ways you can add images to your products. You can add them individually, or use one of the three bulk import methods detailed below:

> **Important:** All images need to use the RGB color space, rather then CMYK. Images that aren't RGB will not display correctly.

## Add Images on the Product Page

1. In your Neto control panel, navigate **Products > View Products**. The **Products** page displays.
2. Select the product that you wish to add an image to by clicking on the SKU. The selected product page displays so that you can edit the product details.
3. Scroll down to the **Images** section or select 'Images' from the **Product** menu.
4. Click the **Browse** button and locate the image file you wish to add. Once uploaded, you will see a thumbnail of the image added to your product.

The image will now appear on the product page. Images uploaded will be re-sized as per your image settings in the system setup. Please allow up to five minutes for image processing if resizing and optimisation is required.

## Add Images in Bulk

As an alternative to adding images to an item one at a time from the product page, you can bulk upload images from a .zip file. You can upload both your main and alternative images this way.

- [Prepare Images for File Upload](https://galaxy.maropost.com/kb/articles/1554-add-images-to-products#preparing-images-for-zip-file-upload)
- [Upload the Zipped Images](https://galaxy.maropost.com/kb/articles/1554-add-images-to-products#uploading-the-zipped-images)
- [Bulk Image Upload Rules](https://galaxy.maropost.com/kb/articles/1554-add-images-to-products#bulk-image-upload-rules)

[▶ YouTube Video](https://youtu.be/LTvAe7xVeA8)

### Prepare Images for File Upload

1. Name your images exactly the same as the related product SKU or, in the case of brands images, the brand name. All images must be in a** .jpg or .png** format (gif images can only be uploaded by SFTP).

> **Note:** Filenames must match the product SKU exactly, including case.

  For example, if you are uploading an image for a Black Ipod Nano and the SKU is called IPODNB then save the image as IPODNB.jpg or IPODNB.png.
2. Save all main images in one folder and save alternative image 1 in another folder, alternative image 2 in another folder and etc. Ensure you use the exact same filename as the main image.
  In this example I'm uploading 2 products (let's call the SKU's Test1 and Test2) which consists of a main image and 3 alternative images. I would have my folder structure like this:

  Folder Name: Main
	Test1.jpg
	Test2.jpg

  Folder Name: Alt_1
	Test1.jpg
	Test2.jpg

  Folder Name: Alt_2
	Test1.jpg
	Test2.jpg

  Folder Name: Alt_3
	Test1.jpg
	Test2.jpg
3. Open each folder containing the images
4. Select images in the folder and zip the images. Zip files larger than 200mb cannot be uploaded, so if you have a large amount of images, you may need to create several zip files.

> **Important:** Do not zip the folder containing the images, only zip the images contained within the folder. (This will create a folder with images inside, not a folder within a folder.)

### Upload the Zipped Images

1. In your Neto control panel navigate to **Settings & Tools** > **All Settings & Tools**.
2. Under the **Import & Export** tab, click **Import Images**.
3. You will be shown a list of upload locations. To bulk upload images to any of the locations click on the location name. You will then be taken to a bulk upload page for that image type.
4. Browse and upload the appropriate **.zip** folder: i.e. main images are uploaded to Product Images, alt_1 to Alt 1 Images, etc.
5. Neto will map the images to their correct products via the SKU automatically. Depending on number of images uploaded and the resizing and optimisation required, uploading may take anywhere from 5 - 30 minutes to process so don't panic if you don't see the images straight away.

### Bulk Image Upload Rules

- Images should be in .jpg, or .png and should be < 2 MB in file size each.
- Images will be uploaded directly into Product Images folder.
- There will be no SKU checking so please check the image name is the same as the related SKU.
- Images will be resized if the images are too large.
- Images must not be in any subdirectories of the .zip file uploaded.

## Add Images by Importing URLs

By populating a spreadsheet will all your image URLs, images can be uploaded in bulk via the Import Wizard Tool. You can download our [sample template here.](https://www.neto.com.au/assets/images/docs/5458/image-upload.csv)

1. In your Neto control panel, navigate **Settings & Tools** > **Import Data**.
  The **Import Data** page displays.
2. Click the **Products** radio button within the **Data Type** section.
3. Click the **Perform complex import** button and select **Start Data Import Wizard**.
  The **Upload File** page displays.
4. Upload the CSV file using the template provided above.
5. Click the **Continue to Next Step** button.
  The **Field Mapping** page displays.
6. Check the field mapping against the import and click the **Continue to Next Step** button.
7. The **Update Options** page displays so that you can choose how data should be imported. The advanced options can be ignored for this process.
8. Click the **Continue to Next Step** button.
  The **Process File** page displays. Here you can choose to create an import template in case you want import more image URL's later.
9. Click the **Process File Now** button to begin the automated import process.
  Images will appear on your products once the batch process has been completed. The time the process takes depends on the number of images uploaded.

## Add Images by FTP

> **Note:** SFTP access is required to follow the steps in this how-to, and is an advanced procedure to follow so proceed with care. You can request SFTP access to your website by [filling in this form](http://www.neto.com.au/assets/Neto-Services-Forms/requestftp.html).

Images must be named the same as the product SKU that you want them added to. We recommend separating images into folders based on their position (for example, main, 2nd, 3rd, and so on).

1. In you SFTP client, connect to your site using the details provided by Neto support.
2. Copy the images from your computer to the `/private/www/tmp/imagedrop` folder of your site. Main images go in the **full** folder, the second image into **alt1**, and so on.
3. Once your images are copied go back to your Neto control panel. Navigate to **Settings & Tools** > **All settings and tools**.
4. Click on the **Processes & Scheduled Jobs** tab from the left hand side navigation menu, and click **System Scheduled Tasks**.
5. Find the scheduled task called **Imagedrop** and click the **Run Now** button. This will trigger Neto to process the images in the imagedrop folders with your new size settings.

## Download Image from URL Addon

If you have access to an always up to date catalogue of images, you can use the free [Download Image from URL](https://galaxy.maropost.com/kb/articles/689-download-image-from-url) addon to regularly check for images and import them to your products. Follow the instructions on the addon page to install and configure this feature.

## Product Image recommendations

The way you present your products online has a significant impact on sales. Amateur-looking product shots erode consumers' trust and could send them to a competitor.

When capturing product images, keep the following mind:

| Item | Recommendation |
| --- | --- |
| Camera | Although it used to be that having a DSLR (Digital single-lens reflex) camera was necessary for taking quality product photographs, smartphones have dramatically changed the game. We strongly encourage you to explore using your smartphone after you have the proper setup before committing to purchasing a higher-end camera. |
| Lights |  |
| Tripod | Setting a camera up on a tripod avoids the need to hold your camera by hand and thus produce blurry images that shoppers will not like. |
| Photo Setup | We recommend shooting your products in front of a continuous background — often white or neutral grey. It’s a simple and professional look that is often used by major online retailers.  > **Note:** Craft paper and clips can make a nice do-it-yourself product shoot setup. Roll the craft paper down a long and wide table and use the clamps to attach one end of the paper to something a few feet above the table. This will produce a smooth ramp. Place your product on the craft paper just after it comes into contact with the table.   Place your setup near a big, sunny window if you want natural light, or in a dark room if you want to use your photo lights. |
| Aperture | A wide aperture (small f-number) produces a narrow depth of field that makes your photos look richer and more professional. |
| Cleanup | A big fingerprint on your product or dust on your lens produces poor, amateur results. Purchase microfiber rags and wipe everything carefully before shooting. |

> **Note:** [TinyPNG](https://tinypng.com/) is an excellent online utility for compressing your images without losing their quality. We highly recommend compressing images in order to decrease page load times for your customers.

> **Note:** A final note on images:
> Bigger is always better.High quality is the best quality.Get the lighting right.Always capture multiple angles.Include some context shots.Be consistent with your images.Clean up images in Adobe Photoshop (or equivalent) if necessary.

## Reprocess Product Images

There are two methods you can follow to reprocess your images:

- [Secure file transfer protocol (SFTP)](https://galaxy.maropost.com/kb/articles/1554-add-images-to-products#add-images-by-ftp)
- [Export and import wizards](https://galaxy.maropost.com/kb/articles/1554-add-images-to-products#download-image-from-url-addon)

### Reprocess Images via SFTP

Reprocessing your product images via SFTP is straightforward, but does require some familiarity with SFTP tools. You will also need a copy of all your product images, as they cannot be copied from your site folders. If you need to download your images, follow the steps [here](https://galaxy.maropost.com/kb/articles/1362-webstore-troubleshooting#product-images).

Images must be named the same as the product SKU that you want them added to. We recommend separating images into folders based on their position (for example, main, 2nd, 3rd, and so on).

> **Note:** SFTP access is required to follow the steps in this how-to, and this is a somewhat advanced procedure to follow so proceed with care. You can request SFTP access to your website by [filling in this form](http://www.neto.com.au/assets/Neto-Services-Forms/requestftp.html).

1. To change your image settings, navigate to **Settings & Tools** > **All settings & tools**.
2. Click on the **Web Store** tab from the left hand side menu and click **Image Settings**.
3. Change your image size settings and save your settings when complete.
4. You can now upload your images. In your SFTP client, copy the images from your computer to the `/private/www/tmp/imagedrop` folder of your site. Main images go in the **full** folder, the second image into **alt1**, and so on.
5. Once your images are copied go back to your Neto control panel. Navigate to **Settings & Tools** > **All settings and tools**.
6. Click on the **Processes & Scheduled Jobs** tab from the left hand side navigation menu, and click **System Scheduled Tasks**.
7. Find the scheduled task called **Imagedrop** and click the **Run Now** button. This will trigger Neto to process the images in the imagedrop folders with your new size settings.

When this process is complete, your images will be resized. This task may take some time if you have many large images.

### Reprocess Images via Export and Import

If you're more confident or familiar with import and export, you can reprocess your images using the complex wizards. For general instructions on how to use the wizards, see these articles:

- [Export Wizard](https://galaxy.maropost.com/kb/articles/501-product-export-wizard)
- [Import Wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard)

To reprocess images using the export and import wizards:

1. Open the export wizard and select the **Products** data to be exported.
2.   - `*Product Data - SKU*`
  - `Image and URLs - Image URL`
  - `Image and URLs - Extra Image 01 URL`
  - `Image and URLs - Extra Image 02 URL`

  In the fields to export you need to include the SKU (product data) and image fields (Image and URLs).e.g.:
3. Continue through the export wizard and save the file on your computer.
4. You can now change your image settings. In your Neto control panel navigate to **Settings & Tools** > **All settings & tools**.
5. Click on the **Web Store** tab from the left hand side menu and click **Image Settings**.
6. Change your image size settings and save your settings when complete.
7. Open the import wizard and select the **Products** data to be imported.
8. Select the file you have just exported to now be imported.
9.   - Image URL: `Image URL Main Image`
  - Extra Image 01 URL: `Image Alt 01 URL`
  - Extra Image 02 URL: `Image Alt 02 URL`
    And so on.

  The SKU field will be mapped automatically. Map the images to:
10. Continue through the import wizard and process the file.

When this process is complete, your images will be imported, and resized. This task may take some time if you have many large images.