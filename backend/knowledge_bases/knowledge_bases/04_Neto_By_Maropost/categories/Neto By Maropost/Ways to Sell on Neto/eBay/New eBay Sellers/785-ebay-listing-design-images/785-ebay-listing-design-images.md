---
title: "eBay Listing Design & Images"
articleID: 785
category: "Ways to Sell on Neto > eBay > New eBay Sellers"
knowledgeBase: "Neto By Maropost"
---

# eBay Listing Design & Images

Products listed on eBay can have their description styled and presented in a listing designed template. The templates use the Neto B@SE language to fetch information from product fields, so you can use one design template for many products.

> **Note:** **Listing Enhancements** do not work on Australian eBay sites and will cause errors when trying to list or revise products.

## Set up a Free eBay Design Templates

There are a number of free design templates for your that you can use as part of your eBay listings. Each product differs in how they display images, categories and descriptions as well as whether or not a shipping calculator or up-sell products are displayed.

To set up a free listing design template:

1. In your Neto control panel navigate to **eBay** > **Theme Editor**.
2. Click the **Install new eBay Design Template** button.
3.   - **Start From Scratch**
    A blank canvas. Ideal if you are creating your own custom design or adding a 3rd party designer code.

    ![image1](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages1.05T5g00000t0GI1EAM.png)
  - **Your Description Field**
    This will use your eBay description field from your products. This is useful if you don't wish to use a design template or you are a customer who has HTML embedded into their description fields.

    ![image2](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages2.05T5g00000t0GIpEAM.png)
  - **Standard listing**
    This is a simple listing template you can use to better display your products on eBay. Fully responsive, and optimised to be compatible with eBay's Active Content Policy.

    ![image3](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages3.05T5g00000t0GKbEAM.png)
  - **Listing with tabs**
    This is a simple listing template you can use to better display your products on eBay. Fully responsive, and optimised to be compatible with eBay's Active Content Policy.

    ![image4](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages4.05T5g00000t0EU2EAM.png)
  - **Listing with an accordion**
    This is a simple listing template you can use to better display your products on eBay. Fully responsive, and optimised to be compatible with eBay's Active Content Policy.

    ![image5](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages5.05T5g00000t0GOiEAM.png)

  Choose the theme you want to install:

Your theme will be installed ready for customisation or to be selected in a rules template.

## Select a Design Template in a Rules Template

Design templates must be selected in rules templates, so that the design can be applied when a product is listed. To select the design template:

1. In your Neto control panel navigate to **eBay** > **Listing Rules Templates **.
2. Select the template you want to assign a new design, by clicking on the **ID**.

> **Note:** You can also assign the same design to several rules templates. Selecting the checkboxes and click the **Bulk apply eBay design template to selected** button.

3. On the **Listing Design & Images** tab, select the new design you have installed, then **Save Template & Revise Active Listings**.
  ![image6](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages6.05T5g00000t0GPWEA2.png)

Revision processes will be queued to automatically update your active listings with your new design.

> **Note:** If you have specified the listing design at the product level, you will need to edit this via [import](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#assign-rules-templates-to-products) when assigning/reassigning the rules template to your product.

## Select Listing Images

Each listing rules template lets you set the product images that should be sent to eBay. You can use this to upload specific images just for eBay on your products. To configure your eBay listing images:

1. In your Neto control panel, navigate to **eBay** > **Listing Rule Templates**.
2. Click on the rules template where you want to configure images.
3. Click on the **Listing Design & Images** tab.
4. In the Image Mapping section, select the product images that you want to use on your eBay listings. We recommend using the largest size possible, to ensure they meet eBay's minimum size requirements.
5. Click the **Save Template** button.

Product images will now push through to eBay when you list and revise products from Neto.

> **Note:** Set up the next tab of your listing rules template, [Field Mapping](https://galaxy.maropost.com/kb/articles/782-ebay-field-mapping).

## Custom Design Templates

> **Note:** Neto partners can customise an eBay design template to your needs. [Contact a design partner](http://forms.neto.com.au/services/designtweak.html?) for a consultation.

Neto's design template system supports custom HTML and CSS. Combined with B@SE (our template tagging language), you can create highly customised and dynamic eBay listing templates.

B@SE tags work together with standard HTML tags to display content and functions within your eBay templates. Copy and paste the relevant tag to the relevant location in your template and Neto will do the rest.

> **Note:** A list of B@SE tags related to eBay templates and examples of code snippets for the display of category menus, image galleries, search forms and more are found [here](http://developers.neto.com.au/documentation/web-designers/b-se-tag-library/).

Custom designs should be installed into blank templates. Follow the [steps above](https://galaxy.maropost.com/kb/articles/785-ebay-listing-design-images#set-up-a-free-ebay-design-templates) to install the Start from Scratch template, to create your custom design.

## Multiple Store Design Templates

When you have set up multiple eBay accounts you can assign different listing designs to each one. The assignment is based on listing rules template, on the Design & Images tab.

If you want to have unique eBay listing designs for each store, each one will have to be customised. The 2 main components that need to be edited are the header logo and footer copyright.

### Header Logo

While you can assign an eBay logo under **Settings** > **Logos and Branding**, it will apply to all templates. Instead, you will need to upload a different logo per design template. To make them unique you can upload the image through [sftp](https://galaxy.maropost.com/kb/articles/1046-request-file-transfer-protocol-ftp-sftp-access) or in your control panel:

1. In your Neto control panel, navigate to **Settings & tools** > **All settings and tools**.
2. Search for **Import Images** and click it in the results.
3. In the Misc Images section, click on **Misc Images**.
4. Click the **Choose File** button and browse to your logo file. Select it, and click the **Upload Images** button.
  ![image7](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages7.05T5g00000t0GB1EAM.png)

Your image will be uploaded. The format URL is the file path to your image in your website files.

Edit the HTML/CSS of the design templates to select the correct logo and copyright.

**Example:**

Original line:

<div class="company-logo"><img src="[%ASSET_URL type:&#39;logo&#39; thumb:&#39;ebay&#39; %][%END ASSET_URL%]" alt="Logo"></div>

Replace with:

<div class="company-logo"><img alt="Logo" src="https://your-neto-website.com.au/assets/images/yourheaderimage.jpg" /></div>

Replace the website URL with your website address, and the format URL from earlier.

## Footer Copyright

**Example:**

Original line:

<p class="muted">&copy; [@config:COMPANY_NAME@]</p>

Replace with:

<p class="muted">&copy; yourcopyrightname</p>

## Migrate Design Templates

When you use a custom listing design templates in eBay, they will need to be migrated into Neto. This process depends on the type of design template you had made.

If the template has tags which pulls data into the description field, these tags just need to be converted to Neto's own [b@se tag language](https://developers.neto.com.au/documentation/web-designers/b-se-tag-library/) before it can be used.

Alternatively, if the template is part of your description field and does not use tags to populate your data you can decide to use the template as your description or clean the data to separate the template from the description.

Once this data is cleansed, you can decide to use one of our free design templates, have your designer convert your current template to Neto's own [B@SE tag language](http://developers.neto.com.au/documentation/web-designers/ebay101/) or [contact a design partner](http://design.neto.com.au/ebay-design-brief) to do this for you.

If your data is not cleansed, you can run into a lot of problems later on if you decide you need to make changes to these descriptions as they will not be dynamic nor can they be used as a suitable description if you plan to run the Neto webstore component.

To get started, follow the steps below based on the scenario that bests suits your situation:

**Scenario 1**

If the template has tags which pulls data into the description field, these tags will need to be converted to Neto's own [b@se tag language](http://developers.neto.com.au/documentation/web-designers/ebay101/).

You can decide to have your designer to convert this or you can [contact a design partner](http://design.neto.com.au/ebay-design-brief) to do this for you.

Once this is done, you need to add this to your eBay design template. Install the [start from scratch](https://galaxy.maropost.com/kb/articles/785-ebay-listing-design-images#set-up-a-free-ebay-design-templates) free template and paste your HTML into the editor.

**Scenario 2**

If the template is part of your description field and does not use tags to populate your data but you have a copy of the original descriptions. In this scenario, you can upload the original descriptions to replace your current description field. Use the [product import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) to upload the product descriptions for each product.

**Scenario 3**

If the template is part of your description field and does not use tags to populate your data but you don't have a copy of the original descriptions.

In this scenario, you can clean your data to separate your descriptions surrounding the template manually.

Create a [product export](https://galaxy.maropost.com/kb/articles/501-product-export-wizard) and remove the template code manually. Because most people do not have time to do this, we do recommend getting a Neto partner to cleanse the data for you.

You can pay between $50-150USD to outsource this work for you on [Upwork.com]() - a professional freelance site or you can contact our approved partners for a quote.

To do this on Upwork, simply register for an client account and Post a job.

![image8](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages8.05T5g00000t0GSfEAM.png)
Here's a standard job template you are welcome to use:

| Field | Value |
| --- | --- |
| Category | Data Science & Analytics & Data Mining & Management |
| Name | Find and remove HTML on our CSV product sheet |
| Describe the work to be done | Need someone to tidy up **X** amount of products in our CSV product sheet. The description column currently has a design template wrapped around the description. We need someone to delete the design template but keep the description and it’s HTML formatting in tact. Needs to be done within 3 days. Please write “Instructions understood” at the start of your proposal to confirm you’ve read and understood the requirements. |
| Attach file | Add a sample amount of data, about 10 product descriptions for freelancers to look at. |
| What type of project do you have? | One-time project |
| How many freelancers do you need to hire for this job? | I want to hire one freelancer |
| Enter skills needed | Data Cleansing, Data Entry, HTML |
| How would you like to pay? | Pay a fixed price |
| Budget | 50-150USD - this is your choice, but if you have a lot of products, we recommend $150USD. |
| Desired Experience Level | Intermediate or Expert |

Once you've completed this, **Post your job** and wait for freelancers to contact you.

Once the freelancer has provided you with the finished CSV, use the [import wizard](https://galaxy.maropost.com/kb/articles/668-product-import-wizard) to update your descriptions.

**Scenario 4**

If the template is part of your description field and does not use tags to populate your data but you wish to continue using the same template.

In this scenario, you can turn off your listing design template so it doesn't interfere with your current template.

1. In your Neto control panel, navigate to **eBay** > **Listing rules templates**.
2. Select the listing rules template you wish to apply this to.
3. Click on the **Listing Design & Images** tab.
4. Under Design Template, select **Do not use any design template**.
  ![image9](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages9.05T5g00000t0GTOEA2.png)
5. Click **Save.**.

## CrazyLister

**No Coding Needed**: Creating your listings is easier than ever. Just Drag and drop. Click and scroll.
All done! You'll have a beautiful template without ever seeing a line of code.

**Edge over your competition**: Choose from more than 100 designer made professional eBay templates; simply pick one and tweak it as much as you like. You can also start with a blank page and build everything from scratch.

**Easy To Use**: Whether you're using a template or starting from scratch, you can customise any page elements in seconds. Add your images, videos and text to get a stunning template instantly.

For instructions on how to use CrazyLister with Neto, see the CrazyLister guide [here](https://support.crazylister.com/integrations/how-to-use-crazylister-with-neto).

## Troubleshoot Design Issues

Follow the steps below to troubleshoot issues when your listing design is not displaying correctly.

### Confirm the design is applied to the rules template

1. In your Neto control panel navigate to **eBay** > **Listing Rule Templates**.
2. Open a template and select the **Listing Design & Images** tab.
3. Check that the design you've updated is selected on the template.
  ![image10](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages10.05T5g00000t0GTiEAM.png)
4. If not, select the correct design template and **Save Template & Revise Active Listings**. Allow some time for the revisions to run.

### Revise the listing

Firstly, [revise your listing](https://galaxy.maropost.com/kb/articles/1082-revise-active-ebay-listings) to confirm it updates successfully. Many design issues are because the listing cannot be revised, and eBay returns an error. If the revision fails please consult our [common errors guide](https://galaxy.maropost.com/kb/articles/690-troubleshoot-ebay-error-codes) for further help.

## Confirm the listing is using a rules template

For the design to update on eBay correctly, you must have a listing rules template assigned to the listing.

1. Open the product, and select **List to eBay** from the side menu.
2. Confirm that the Active eBay Listing has a rules template assigned.
  ![image11](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages11.05T5g00000t0DXTEA2.png)
3. If there is no template assigned to the product, click the red **Listing ID** and assign a template on the **Listing Designer** tab, then **Save & Revise**. If there are many listings without a rules template, you can also [assign templates in bulk](https://galaxy.maropost.com/kb/articles/781-list-products-on-ebay#in-bulk).

### Check the listing settings

If your listing has a rules template assigned, it may not be updating the design if it isn't set to load data.

1. Click the red **List ID** to be taken to the listing information.
2. Select the **Listing Designer** tab, and confirm that **Load Data From eBay Listing Template** is checked.
  ![image12](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages12.05T5g00000t0GWXEA2.png)
3. If it isn't selected, check this box (and the two below it if required) and **Save & Revise**.

> **Note:** If you believe there may be other listings without these boxes checked, follow the steps below to resolve.
> In your Neto control panel navigate to the eBay > Active Listings menu.In the search filter type in ^1, to filter all listings currently using template ID 1.Expand the Search Results to 250 and Select All Listings on the page.At the very bottom of the page in the Bulk Apply Listing Template to Active Listings section, choose template 1 again from the drop down box.Check the Define Shipping Rules box.Select Bulk Apply Listing Template - this will apply the same template to the listings and tick the Load Data, Load Shipping and Load Payments boxes, if they aren't already selected.Continue for page 2, 3, etc.Repeat these steps for each rules template (^2, ^3, etc.)

### Overriding at the product level

If a design template has been applied at the product level (either manually or via an import) it will override the design template selected on the listing rules template. To check this

1. In your Neto control panel navigate to **Products** > **View Products**.
2. Open a product that has a design that isn't updating on eBay.
3. Select **List To eBay** from the side menu, and check to see if the correct design template is selected.
  ![image13](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages13.05T5g00000t0GYOEA2.png)
4. If an incorrect design is selected, click the edit icon below is and choose the default design (from the listing rules template), and **Save**.
  ![image14](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages14.05T5g00000t0GbSEAU.png)
5. **Revise** the listing, and check that the design has updated.

If this has resolved the issue, it's likely there are more that have the incorrect design applied at the product level. To update them in bulk perform the following steps.

1. In your Neto control panel navigate to **Setup & Tools** > **Export Data**.
2. Select **Perform Complex Export** and choose **Start Data Export Wizard**.
3. **Name Your File** (e.g. eBay listing info) and click **Continue To Next Step**.
4. Click **Add New Field To File**, and select ***Product Data** and then **SKU***.
5. Click **Add New Field To File** again, and select ***Product Data** and then **eBay Items List**. Then **Continue To Next Step**.
6. Leave the filters as they are, and **Continue To Next Step**
7. Change **Send Export File To** to **Local URL**, and click **Export Now**, then **Ok**.
8. You'll be given two links, to a process ID and the URL where the file will be exported to. Click the process ID, and then **Run Now**. Once it has completed, click the URL to download your CSV file, and open it.
9. It should look similar to the below, with the SKUs in one column, and numbers representing the eBay templates and categories in another.
  ![image15](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages15.05T5g00000t0GcQEAU.png)

  The format of the numbers is as follows

  `Listing rules template ID|Design template ID|eBay category 1|eBay category 2|store category 1|store category 2`
10. Using find and replace (Ctrl/Cmd + H), change the design ID to the correct value. In the example below we're replacing `|8|` with `|10|`.
  ![image16](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages16.05T5g00000t0FF0EAM.png)

  **Please Note**: The pipe characters are important in the find and replace to prevent other data being changed.

> **Note:** To test that the import works correctly, save a second copy of the file that has only one product in it, and import it first. This way, if something goes wrong, only one product will be need to be corrected.

11. Back in the Neto control panel navigate to **Setup & Tools** > **Import Data**.
12. Select **Perform Complex Import** and choose **Start Data Import Wizard**.
13. Select **Choose File** and select the CSV which you just modified, then **Continue To Next Step**.
14. The field mapping should already be set correctly, so **Continue To Next Step**.
15. In **How Do You Want To Update Your Database** select **Update Existing Products Only**, then click **Show Advanced Options**.
  ![image17](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages17.05T5g00000t0GSbEAM.png)
16. Scroll down to **Other Options** and in **eBay Items Update Options** choose **Replace Existing Record**. Then **Continue To Next Step**.
  ![image18](https://us.v-cdn.net/6038474/uploads/attachments/migrated/eBayListingDesignImages18.05T5g00000t0GcnEAE.png)
17. Click **Process File Now**.
18. You'll be given a process ID, so select it and click **Run Now**. Once the process is complete, your products should be updated to the correct template. You can now [revise your listings](https://galaxy.maropost.com/kb/articles/1082-revise-active-ebay-listings).