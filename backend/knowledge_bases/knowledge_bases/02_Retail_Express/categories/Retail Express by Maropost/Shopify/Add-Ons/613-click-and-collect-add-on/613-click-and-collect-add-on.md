---
title: "Click and Collect Add-On"
articleID: 613
category: "Shopify > Add-Ons"
knowledgeBase: "Retail Express"
---

# Click and Collect Add-On

Retail Express supports Click and Collect order fulfilment via Shopify through custom logic in the Shopify Connector when synchronising orders, and code snippets that can be embedded into a Shopify theme. These code snippets require developer input to embed into a theme and can be unreliable depending on theme configuration and customisation.

To simply the process for installing the theme customisation, and hopefully improve compatibility, these code snippets have been converted to a Shopify App Theme Extension that allows the elements to be added to a theme using the Shopify theme editor.

Theme extensions are only supported in Shopify 2.0 themes.

The App Block will be available to all clients using the Retail Express App, however Click and Collect is still a licensed feature so the block will not work unless the usual licensing and configuration process in Retail Express is followed.

Users will need to purchase a license before you can use this product. [Click here](https://forms.zohopublic.com/virtualoffice112/form/ShopifyConnectorRequest/formperma/MacAPlaliyJ_SPHQ0ozjx_Fk0gGIUdoAUz-REQsGlkw) for more information.

## Limitations

Before implementing Click and Collect there are some limitations that you should be aware of.

![rtaImage (4).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUcJEAU.jpg)

- **All stock must be Available** in the same Outlet to be eligible for Click & Collect (Transfers are not available)
- The customer must **view the Shopping Cart page to select an Outlet** - you will need to disable/remove any features that bypass this page e.g. "Buy it now" button. This is a limitation of Shopify (see below for more details).
- Your customers will still be required to select a Shipping Method during the checkout*. It's recommended to create a $0 shipping method called "Store Pickup" for your customers to select during checkout to avoid paying shipping fees:
- The Click & Collect feature is a **non-standard Shopify feature **and therefore not supported by Shopify
- As all themes are different, you will therefore **need an experienced developer **to implement this functionality. Please note Retail Express does not provide support for Shopify themes, however we can recommend a developer to you if required.
- Shopify restricts the ability to modify the process of the customer checkout (some modifications can be achieved on a Shopify Plus store, however the Click and Collect feature has been designed to work on all versions of Shopify).

## Before you begin

Before you can begin to set up the Click and Collect feature on your Shopify web store there are a few things you will need to know.

- Click and Collect is a **licensed add-on**. You will need to purchase a license before you can use this product. [Click here](https://forms.zohopublic.com/virtualoffice112/form/ShopifyConnectorRequest/formperma/MacAPlaliyJ_SPHQ0ozjx_Fk0gGIUdoAUz-REQsGlkw) for more information.
- Check to ensure you have added Outlet address and contact details** **for each Outlet enabled for Click and Collect
- Sign up for a free [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key) (to display your Outlets on maps for your customers) - see below for details on this process
- Ensure you have enabled access to the **Google Geocoding API** (refer to the Google Maps instructions below)

Google Maps API key (click to expand)

To sign up and configure your Google Maps API key:

> **Note:** Even if you already have a Google Maps API key you will need to ensure you have enabled the Geocoding API as well

![rtaImage.gif](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUcOEAU.jpg)
![rtaImage (5).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUcTEAU.jpg)
![rtaImage (6).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUcsEAE.jpg)
![rtaImage (7).png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000poUcxEAE.jpg)

1. Open the [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview)
**Note: **Even if you already have a Google Maps API key you will need to ensure you have enabled the Geocoding API as well
2. Select your Project from the drop-down boxNote: If you are new to Google Cloud you will need create a Project before you can continue
3. Navigate to **APIs & Services > Library **
4. Select **Maps JavaScript API **
5. Click Enable
6. Once enabled, click on the menu and navigate to **APIs & Services > Library**
7. Search for the **Geocoding API **and click on it
8. Click Enable
9. Navigate to **APIs & Services > Credentials**
10. Click **Create Credentials > API Key**
11. Your API Key will be created
12. Click **Restrict Key**

> **Note:** If you miss this step you can always click on the key under the Credentials window to edit the restrictions

13. Under **API restrictions** select **Restrict Key**
14. Select both the Maps Javascript API and the Geocoding API
15. Click **Save**

## Installation

Theme extensions are available via the existing Retail Express Shopify App so no additional installation is required. The extensions can be added and configured as App Blocks within the Shopify theme editor:![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113232837.05TJ100000NeejUMAR.png)

The App Block can be added in two page templates: product detail pages, and the cart page. It cannot be added on other pages:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113233101.05TJ100000Nef2KMAR.png)The App Block needs to be added to AND configured in each page separately.

## Product Details Page

The App Block can be added to the Product information section using Add block:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113233422.05TJ100000NeeupMAB.png)
Click on the Apps tab and Click and Collect will be available - click to add to the page:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113233541.05TJ100000Nef3cMAB.png)The App Block can be dragged to any position within the section:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113233833.05TJ100000NeevxMAB.png)
The component itself is visible in the page preview as a "Check Store in Store" button:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113234033.05TJ100000Nef5OMAR.png)Clicking on the component either in the editor or in the list on the left will show the configuration options in the panel on the right-hand side - see Configuration section below.

## Cart Page

The App Block can be added to the Subtotal section, again using Add block:

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113233720.05TJ100000NeetwMAB.png)
As above, click on the Apps tab and Click and Collect will be available - click to add to the page. The App Block can again be re-ordered within the section.

The preview for a Cart page will NOT show any elements because the component only renders when there are products in the Cart. Click the component in the list on the left to display the configuration options in the page on the right-hand side.

## Configuration

The configuration options on the right allow for different features to be enabled/disabled and for the text and rendering options in various elements of the block to be customised. The block is designed to inherit the base theme styling and layout options so in most themes it should render using the same colours and fonts as other components on the site.

In the future we can extend these customisation options to support more granular control over colours, fonts, padding etc. In the first instance, the goal is for a very simple to install version that works in most themes and scenarios.

The options control how the component will render on the storefront itself - the component will look something like the below when all features are enabled:

### Product Details Page

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113235640.05TJ100000NeekMMAR.png)

### Cart Page

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241113235746.05TJ100000Nef7yMAB.png)

### Configuration Settings

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image20241114000710.05TJ100000Nef8mMAB.png)

| **Setting** | **Description** |
| --- | --- |
| Show Quantities | Enable or disable the actual available stock in each location |
| Show Address | Include outlet address in the locations list |
| Show Phone | Include outlet phone number in the locations list |
| Show Email | Include outlet email address in the locations list |
| Show Product Table in Cart | Display table showing the availability of each product in the Cart (only renders on Cart page) |
| Enable Map (API Key Required) | Enable Google Map in component. This also requires customers to enter a postcode before they can see the map and the locations list. Requires API Key (below) which also needs to be configured in Retail Express Backoffice. |
| Google Maps API Key | API Key so that mapping functionality works |
| Map Height | Height of the map - the width is always 100% (of the container/section that the component is in). |
| Product Details Button Label | Text displayed in the button used to display the locations list in Product Details page. |
| Cart Delivery Option Label | Text displayed in the Cart Page for the button that lets the customer select Delivery (default) as their fulfilment method. |
| Cart Store Pickup Option Label | Text displayed in the Cart Page for the button that lets the customer select Store Pickup / Click and Collect as their fulfilment method. |
| Search Box Placeholder | Text displayed in the search field when map is enabled. |
| Available Label | Text used to indicate that stock is available in the locations list. |
| Unavailable Label | Text used to indicate that stock is unavailable in the locations list. |
| Some Items Unavailable Label | Text used to indicate that one of the items in the cart does not have stock available but other items do. Only used on Cart page. |
| Address Not Found Message | Text used when the postcode (or text) searched by the customer did not find a location using the Google geocoding service. |
| No Locations Available Message | Text used when the postcode is found but no locations are within 100km of that postcode. |

## Other Details

- The app block has been tested with several of the free themes available in the Shopify Theme store and works as expected and inherits the theme styles correctly. However, theme incompatibilities are always possible, particularly with custom themes built from scratch. We may need to add more options to support compatibility with different themes over time or clients may need to continue to use the code snippets which allow more control over how the components render.
- While we don't provide direct control over the colours and fonts etc within the component, it should still be possible to override the default styles using custom CSS in the theme itself. All core components have id tags associated along with some custom classes which can be inspected in dev tools and overridden.
- The Cart page app block will NOT work if the theme is using a Cart side-drawer rather than a Cart page. This is a limitation of Shopify app blocks i.e. there is currently no way to use these within a Cart drawer.
- When Store Pickup is selected as the fulfilment method in the Cart page, the Checkout button is disabled until the customer selects an outlet in the list.
- The App Block uses AJAX calls to set the cnc-fulfilment-method and cnc-outlet cart attributes that are used when synchronising orders. This differs from the code snippets where hidden input form fields are used for setting these values. You will not be able to inspect the HTML to see what options are set on the cart page but this method should be more reliable for ensuring that the attributes are set correctly.
-   - On Product Details pages, if the customer has already clicked the "Check Stock in Store" button and has locations displayed, if they change the product variant or if they change the quantity on the page, the stock locations list will dynamically be refreshed to show available locations using the updated data.
  - On the Cart page, if the customer has already selected Store Pickup as their fulfilment method and has locations displayed, any changes to Cart items (removing items, changing quantities) will refresh the results. If a previously selected outlet is no longer available, the outlet will be deselected and the customer is forced to pick a new one.

  The component utilises various event handlers to support other customer interaction on each page:

Your theme might not support adding blocks dynamically because it may be using legacy .liquid templates instead of Shopify's Online Store 2.0 JSON templates, which enable dynamic section and block additions. Consult your agency or developer to confirm and explore possible upgrades.