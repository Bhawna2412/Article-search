---
title: "Instagram Gallery"
articleID: 606
category: "Use Neto > Add-ons > Marketing"
knowledgeBase: "Neto By Maropost"
---

# Instagram Gallery

![Instagram Gallery 1.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000JiGUGMA3.jpg)

#### This add-on was built by Perceptiv Digital

[Visit Add-on Website](https://my.perceptiv.digital/knowledgebase/3/Instagram-Feed)
For support with this add-on, contact Perceptiv Digital:
[hello@perceptiv .digital](mailto:hello@perceptiv.digital) | 08 6117 8009 | website

## Set up the Instagram Gallery Add-on

To set up the Instagram Gallery add-on for your Neto by Maropost website:

1. In your Neto by Maropost control panel click on the **Addons** menu.
2. In the Marketing section, find the Instagram Gallery add-on and click the **Install** button.
3. Confirm installation and you'll be directed to the Perceptiv Digital website.
4. Enter your Neto by Maropost website URL (e.g. `www.mystore.mymaropost.com`).
5. Log in using your Neto by Maropost store address, username, and password.
6. Add your Instagram account, and customise your gallery. For more information on the specific steps, refer to the [Perceptiv Digital knowledge base](https://my.perceptiv.digital/knowledgebase/3/Instagram-Feed).
7. When complete click **Get Code** and copy the code that appears.
  ![Instagram Gallery 2.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000JiGVdMAN.jpg)

You'll need to insert this code into your website template files.

## Edit your Webstore Templates

To make your Instagram gallery show on your webstore, the code you created above needs to be added to your webstore templates.

> **Tip**: Neto partners can edit webstore templates to your needs. [Contact a design partner](http://forms.neto.com.au/services/designtweak.html?) for a consultation.

1. In your Neto by Maropost control panel, navigate to **Settings & tools** > **All settings & tools**.
2. Search for and click on **Webstore Templates**.
3. Open the template file where you want to add Instagram to your website. Generally, this will be your home page, or in the footer (if you want it to show on all pages).
  ![Instagram Gallery 3.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000JiEnFMAV.jpg)
4. Paste the code into one of these two locations:

- **Home page**: Immediately before the final `<div>` tag.
- **Footer**: At the top of the template, before any existing code.
5. Click the **Save & Close** button.

Your Instagram Gallery add-on is now set up on your website. Refresh your website cache to see your changes.

## Troubleshooting

To display the Instagram Gallery on your webstore, the add-on needs to generate an Instagram API Access Token. This token has an expiry enforced by Instagram and will need to be refreshed from time to time.

If your Instagram Gallery has suddenly stopped working, run through the add-on configuration again (all the steps in the [Set up the Instagram Gallery Add-on](https://galaxy.maropost.com/kb/articles/606-instagram-gallery) section above) and replace the existing Instagram Gallery code on your webstore template with the new code.

If you have updated your webstore template to the newly generated Instagram Gallery code and the Instagram Gallery is still not displaying correctly, please reach out to the add-on developer [Perceptiv Digital](https://perceptiv.digital/get-in-touch/) for further support.

> **Hint**: Don’t want to access your webstore templates the next time you need to refresh your token? Create a **Custom Config** to manage the token in your control panel.

1. In your Neto control panel, navigate to **All Settings & Tools** > **Custom Configs**.
2. Click **Add New **custom config at the top of the page and set the following fields:
**- Name:** instagram_gallery_token
**- Date Type:** TEXT
**- Title:** Instagram Gallery Token
**- Description:** Add the 'data-token' value from your Instagram Gallery script to the 'Content' field of this config.
3. Click **Continue** to create the custom config, then add your Instagram Gallery Access Token to the configs **Content** field. You can find this by looking at the data-token value of your newly generated Instagram Gallery code (do not include any double quote characters here):
  ![instagram_gallery.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05TJ100000NezCFMAZ.jpg)
4. Click **Save** to store the token value in the Custom Config.

```typescript
[%if [@CONFIG:instagram_gallery_token@] %]
    <div class="neto-instagram-addon-widget" data-token="[@CONFIG:instagram_gallery_token@]" data-settings="{&#39;feed-layout&#39;:&#39;grid&#39;}"></div>
[%/if%](if you have tweaked the Instagram Gallery code, ensure your personal settings are used for the data-settings value above)
```

Now whenever you need to refresh your Instagram Gallery token you can update the **Instagram Gallery Token** custom config and this will automatically sync with the code in your webstore template.

**Need to remove the Instagram Gallery?** You can simply remove the token from the custom config **Content** field. If you are not using the above setup, navigate to the Instagram Gallery code in your webstore template and remove it directly.