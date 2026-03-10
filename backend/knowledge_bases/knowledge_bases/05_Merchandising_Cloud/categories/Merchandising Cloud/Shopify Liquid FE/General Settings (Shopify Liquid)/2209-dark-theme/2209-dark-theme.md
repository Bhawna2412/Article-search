---
title: "Dark Theme"
articleID: 2209
category: "Shopify Liquid FE > General Settings (Shopify Liquid)"
knowledgeBase: "Merchandising Cloud"
---

# Dark Theme

You can implement a dark theme for Merchandising Cloud components to provide an alternative visual style that matches dark mode preferences or brand aesthetics. Dark theme support enables you to create visually cohesive experiences for customers who prefer darker interfaces or browse in low-light environments.

Dark theme implementation helps you align with modern design trends and user preferences for reduced eye strain and battery conservation on OLED displays. By providing a dark theme option that seamlessly integrates with your overall site design, you create a more flexible and customer-friendly interface that adapts to different viewing preferences and contexts.

Our Native Shopify App, built using the Liquid language, supports a dark theme to enhance the user experience. This documentation provides a clear guide on ensuring that font colors, icons, and other elements can be manually adjusted for dark and light themes.

## Updating Theme Variables

Our Liquid CSS uses default variables located in `findify-variables-defaults.css`. Updating these variables allows you to change the styles across the entire store quickly. Below are the most commonly used variables and their applications:

### Default CSS Variables

CSS

```css
:root {  /* Common */  --findify-border-color: #eaeaea;  /* Typography */  --findify-text-color: #ffffff;  --findify-text-inverse-color: #000000;  --findify-text-secondary-color: #7d7d7d;  --findify-base-font-size: 14px;  --findify-background-color: #000000;  /* CTA */  --findify-cta-background-color: transparent;  --findify-cta-background-color-hover: #eaeaea;  --findify-cta-border-color: var(--findify-border-color);  --findify-cta-secondary-background-color: #f7f7f7;  --findify-cta-secondary-background-color-hover: #eaeaea;  --findify-cta-background-accent: #5396ed;  /* Inputs */  --findify-input-background-color: #000000;  --findify-input-border-color: #ffffff;  /* Filters */  --findify-filters-title: var(--findify-text-color);  --findify-filters-value: var(--findify-text-color);  --findify-filters-separator-color: var(--findify-border-color);  --findify-checkbox-border-color: #ffffff;  --findify-checkbox-checked: #ffffff;  /* Products */  --findify-product-title: var(--findify-text-color);  --findify-product-price: var(--findify-text-color);  /* Rating */  --findify-rating-active: #e9be57;  --findify-rating-inactive: #c6c6c6;  /* Sidebar mobile */  --findify-sidebar-header-background-color: #ffffff;}
```

**Note:** The code above provides examples of how font colors and background colors can be manually changed if you decide to use a different mode. This method does not provide a seamless solution for switching between modes automatically. Instead, it offers a way to customize elements to fit a chosen theme, either dark or light, based on your preference.

We recommend this manual customization because there is no single solution that fits all themes. Additionally, clients typically do not switch themes frequently; they usually select one and stick with it. Therefore, performing a bit of customization is acceptable in this case.

For any adjustments in the styling of our elements after changing the mode, modifying the default variables located in `findify-variables-defaults.css` is the easiest way to tweak the styling for all elements in one place.

For further assistance or inquiries, feel free to contact us at [YourFriends@Findify .io](mailto:YourFriends@Findify.io)