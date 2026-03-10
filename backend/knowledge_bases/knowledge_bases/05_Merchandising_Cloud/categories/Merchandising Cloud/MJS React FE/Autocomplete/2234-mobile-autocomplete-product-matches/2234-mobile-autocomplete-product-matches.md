---
title: "Mobile Autocomplete: Product Matches"
articleID: 2234
category: "MJS React FE > Autocomplete"
knowledgeBase: "Merchandising Cloud"
---

# Mobile Autocomplete: Product Matches

Optimizing mobile autocomplete with product matches helps you deliver effective search experiences on smaller screens where navigation efficiency is critical. When mobile shoppers see relevant product suggestions alongside search predictions, they can quickly verify that their search will yield results and often navigate directly to products, which helps improve mobile conversion rates and reduces friction in the mobile shopping journey.

Mobile autocomplete with product matches balances visual product discovery with the practical constraints of mobile interfaces. By strategically displaying product images and search suggestions, you help mobile customers find products faster despite limited screen space, supporting better mobile conversion performance and reducing abandonment from frustrating mobile search experiences.

![2000](https://files.readme.io/97d036e-Mobile-Autocomplete_1_Product-Matches.png)
*Mobile Autocomplete with Product Matches*

#1. Background

For mobile, the fundamental requirement of the Autocomplete to simplify navigation becomes even more important. The limited "keyboard" size enhance the importance of trending searches & search suggestions. It is 26x times more common for the shopper to click on text rather than products.

Product suggestions should hence be shown secondary, but can still serve a valuable role. For visual categories, the confirmation of the query leading to relevant results can outweigh the added distraction and nudge the shopper to the search results page.

#2. Requirements

In order to apply this module without customizations, there are a few things to keep in mind:

## API Response

The default elements used in every autocomplete are:

- product image
- product title
- product price

## Behavior of The Search Input

This module is optimized for search bars that behave like an overlay to a page and therefore are not scrolling with the page. Therefore, the content within this module's autocomplete is going to be scrollable if the content is exceeding the screen's height.

#3. Time Estimates

Set up in Platform: N/A

Integration: 0.5 hour

Styling: 0-2 hours (optional)

#4. Functional Overview

To apply this module, we need to adjust a component in the code. We have prepared some snippets that we will link below in the Integration Steps. To give you an overview, these are the components we are going to work with:

- components/autocomplete/ProductMatches/view.tsx
- layouts/Autocomplete/Fullscreen/view.tsx
- components/autocomplete/SearchSuggestions/view.tsx
- styles

#5. Integration Steps

Each of the below steps links to a code snippet on GitHub:

1. For this module we will [`import Product Matches and Tip`](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/layouts-Autocomplete-Fullscreen-view.tsx#L11-L14) and add the components over [here](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/layouts-Autocomplete-Fullscreen-view.tsx#L30-L37).
2. Alter the mobile search suggestions to display four as a maximum but keep the desktop settings untouched.

> How to change the limit of search suggestions in the autocomplete?By default, we will show the number of search suggestions as per the setting in the Dashboard

![2842](https://files.readme.io/0c30452-search-suggestions-settings.png)
*Frontend Configurations found in Dashboard > Settings > Advanced Setup > Frontend Configuratons*

- So, in order to achieve this, you would have to start by adding [this](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/components-autocomplete-SearchSuggestions-view.tsx#L10-L18).
- Then you would have to pass down the isMobile props as shown over [here](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/components-autocomplete-SearchSuggestions-view.tsx#L38-L39) so that you can use it to [alter the component](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/components-autocomplete-SearchSuggestions-view.tsx#L69-L73).
- Lastly, make sure to add the [enhancer](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/components-autocomplete-SearchSuggestions-view.tsx#L100-L101).

1. This step follows a similar logic to step 2 - We will alter the mobile autocomplete to display two product matches on mobile only instead of showing the same amount that shows on the desktop in order to provide a better mobile UX.

- Let's create an [enhancer](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/components-autocomplete-ProductMatches-view.tsx#L14-L22) to start with and make sure to add it over [here](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/components-autocomplete-ProductMatches-view.tsx#L91-L92) as well.
- Pass down the props as shown [here](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/components-autocomplete-ProductMatches-view.tsx#L67-L68)
- [This](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/components-autocomplete-ProductMatches-view.tsx#L76-L77) is an actual use-case of limiting the mobile version to show two product matches on mobile as a maximum whilst keeping the limit on the desktop that is set in the [Dashboard](https://dashboard.findify.io/).

![2008](https://files.readme.io/3d080c1-Dashboard_Control_Autocomplete.png)
*Frontend Configurations found in Dashboard > Settings > Advanced Setup > Frontend Configuratons*

1. [Add some styling](https://github.com/findify/customization-library/blob/master/Autocomplete/Mobile-Autocomplete_1_Product-Matches/styles.css)

The complete module can be found [here](https://github.com/findify/customization-library/tree/master/Autocomplete/Mobile-Autocomplete_1_Product-Matches).

![382](https://files.readme.io/9c82b2e-Mobile-Autocomplete_1_Product-Matches.gif)
*Mobile Autocomplete with horizontal product cards*

#6. Modifications

> Modifications are done through our DevToolsHere's a guide on how to work with the devtools: Working with our DevTool.

## Fonts

By default, we are using the font family "Karla".

Here's a CSS snippet of our default source code:

CSS

```plaintext
:root {    /* Fonts */    --font-base: 'Karla', sans-serif;}
```

If you want to alter the font family, you need to overwrite this default font family using the same pattern within our dev tools.

Below is an example of using a custom font-family. It is important to note that we can overwrite existing CSS using the same variable names or the same class names. In this case it's

CSS

```plaintext
:root {--font-base: some value;}
```

Or, using a real font family:

CSS

```plaintext
:root {  --font-base: Helvetica,Arial,sans-serif;}
```

## Colours

This module is using our default colour scheme that can be found throughout all components. Within the autocomplete, the applicable colour-assets would be:

- a grey tone (#c6c6c6) for the "Search Suggestions" title
- a black tone (#111) for overall texts including regular prices

And for products on sale, the sale price would show in red (#d0284b), the old price in grey (#8d8d8d).

This can be adjusted using CSS through our Devtools.

## Image Aspect Ratio

The images for this module are set to a [width of 70px](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/styles.css#L31-L33). Depending on the preferred design for your store, you might want to alter this.

## Adjusting the Breakpoint

This module is using styling that is specifically set to change styling for desktop versions only to prevent the mobile autocomplete module to grab up any styling that is not supposed to be used in there. By default, our system's breakpoint is set to 767px.

This can be adjusted in

1. Our [Dashboard](https://dashboard.findify.io/)

![2762](https://files.readme.io/c3d3640-adjust-mobile-breakpoint.png)
*Frontend Configurations found in Dashboard > Settings > Advanced Setup > Frontend Configuratons*

2. The [CSS snippet](https://github.com/findify/customization-library/blob/81c9b072279e146f8f7f59bc9c0bc9ef74f7d5e9/Autocomplete/Mobile-Autocomplete_1_Product-Matches/styles.css#L4) by altering the max-width.

#7. MJS Version

This module has been optimized for **MJS version 6.16.10**