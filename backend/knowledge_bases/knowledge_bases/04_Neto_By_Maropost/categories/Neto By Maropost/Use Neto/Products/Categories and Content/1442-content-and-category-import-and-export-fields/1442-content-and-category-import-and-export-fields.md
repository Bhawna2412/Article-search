---
title: "Content and Category Import and Export Fields"
articleID: 1442
category: "Use Neto > Products > Categories and Content"
knowledgeBase: "Neto By Maropost"
---

# Content and Category Import and Export Fields

Below is our list of fields available for content in Neto by Maropost. Mandatory fields are presented at the top of the page.

| Field Name | Field Type | Field Description | Field Restrictions | Notes | Example Input |
| --- | --- | --- | --- | --- | --- |
| Content Type | Text | Determines what type of content you are uploading. | Must comply with list of available content types. Refer to **Settings & Tools** > **All Settings & Tools** > **Content Types Manager** for list. | **Required field** | Blog |
| Name | Text | The name of the content that will be visible to customers. | 100 characters | **Required field** | Returns Policy |
| Active | Boolean | Set the content to be visible on your website | Y or N or Yes or No or True or False | Defaults to true. | Y |
| Author | Text | Record the content creator, useful for blog posts | Max length 50 |  | Jane Sample |
| Body Template | Text | Template name for the layout of the body. Leave blank for default. |  |  | Default |
| Content ID | Integer | Unique number that corresponds to the content you are updating or creating. | Numbers only | Required if updating existing content, otherwise leave blank to auto generate. | 15 |
| Content Path | List | The content under which this content sits. In menus, this content will appear below its assigned parent. | Semicolon separated string | Use **>** to separate content levels | Our Blog>January; |
| Content Full Path | List | List of the content hierarchy, separated by spaces. | Space separated string. Export only. |  | Our Blog January |
| Content Reference | Text | Manually set the content ID/ref and populate the **Link ID** field. |  | Leave blank to auto generate | 10 |
| Content URL | Text | Manually set the URL of the content. | 255 characters | Should not include your web address. | products/specials/ |
| Date Posted | Date | The date & time the content was added. | YYYY/MM/DD |  | 2017/04/10 |
| Description 1 | Text | Primary description and body of the content. | No restriction, can contain html |  | Welcome to our online store… |
| Description 2 | Text | Secondary description of the content for customised application. | No restriction, can contain html |  |  |
| Description 3 | Text | Tertiary description of the content for customised application. | No restriction, can contain html |  |  |
| External Reference 1 | Text | Used by 3rd party systems and for internal reference purposes. | 255 characters |  |  |
| External Reference 2 | Text | Used by 3rd party systems and for internal reference purposes. | 255 characters |  |  |
| External Reference 3 | Text | Used by 3rd party systems and for internal reference purposes. | 255 characters |  |  |
| External Source | Text | Used by 3rd party systems and for internal reference purposes. | 50 characters |  |  |
| Footer Template | Text | Template name for the layout of the body. Leave blank for default. |  |  | Default |
| Generate URL Automatically | Boolean | If true this content URL will change if its name or other details change. | Y or N or Yes or No or True or False |  | Y |
| Header Template | Text | Template name for the layout of the header. Leave blank for default. |  |  | Default |
| Ignore Content If Yes | Boolean | If yes this record will be skipped during the import process. | Y or N or Yes or No or True or False |  | Y |
| Is Home Page | Boolean | Set if this content should be the home page of your website. | Y or N or Yes or No or True or False |  | N |
| Label 1 | Text | Custom field | 50 characters |  |  |
| Label 2 | Text | Custom field | 50 characters |  |  |
| Label 3 | Text | Custom field | 50 characters |  |  |
| Path to the Content | List | List of the content hierarchy, separated by greater than symbols. | Greater than separated string. Export only. |  | Our Blog>January |
| Regenerate URL | Boolean | Y or N or Yes or No or True or False |  | Y |  |
| Related Content Full Path List (Blog Post) | List | Relate this content to a blog post using the content path. | Semicolon separated string | Use **>** to separate content levels | Our Blog>Why you will love our company; |
| Related Content Full Path List (Brand) | List | Relate this content to a brand using the content path. | Semicolon separated string | Use **>** to separate content levels | Sony; |
| Related Content Full Path List (Buying Guide) | List | Relate this content to a buying guide using the content path. | Semicolon separated string | Use **>** to separate content levels | Buying guide>How to choose your next electronic gadget!; |
| Related Content Full Path List (Form) | List | Relate this content to a form using the content path. | Semicolon separated string | Use **>** to separate content levels | Contact Us; |
| Related Content Full Path List (Product Category) | List | Relate this content to a product category using the content path. | Semicolon separated string | Use **>** to separate content levels | Electronics>Video>Blu-ray Players; |
| Related Content Full Path List (Web Page) | List | Relate this content to a web page using the content path. | Semicolon separated string | Use **>** to separate content levels | About Us; |
| Related Content ID List (Blog Post) | Integer | Relate this content to a blog post using the content ID. | Numbers only |  | 3 |
| Related Content ID List (Brand) | Integer | Relate this content to a brand using the content ID. | Numbers only |  | 3 |
| Related Content ID List (Buying Guide) | Integer | Relate this content to a buying guide using the content ID. | Numbers only |  | 3 |
| Related Content ID List (Form) | Integer | Relate this content to a form using the content ID. | Numbers only |  | 3 |
| Related Content ID List (Product Category) | Integer | Relate this content to a product category using the content ID. | Numbers only |  | 3 |
| Related Content ID List (Web Page) | Integer | Relate this content to a blog post using the content ID. | Numbers only |  | 3 |
| Related Content Name List (Blog Post) | Text | Relate this content to a blog post using the content name. |  |  | Why you will love our company! |
| Related Content Name List (Brand) | Text | Relate this content to a brand using the content name. |  |  | Sony |
| Related Content Name List (Buying Guide) | Text | Relate this content to a buying guide using the content name. |  |  | How to choose your next electronic gadget |
| Related Content Name List (Form) | Text | Relate this content to a form using the content name. |  |  | Contact Us |
| Related Content Name List (Product Category) | Text | Relate this content to a product category using the content name. |  |  | Electronics |
| Related Content Name List (Web Page) | Text | Relate this content to a web page using the content name. |  |  | About Us |
| Restricted to User Group(s) | Text | Set which customer groups can view the content or category. | Semicolon separated string |  | 1;2;3 |
| SEO Canonical URL | Text | Used when you have duplicate content, this tells search engines to ignore this page. Enter the URL of the page you want indexed |  |  | [http://www.mystore.com.au/about-us](http://www.mystore.com.au/about-us) |
| SEO Meta Description | Text | Meta description tags, while not important to search engine rankings, are extremely important in gaining user click-through from SERPs. Meta descriptions can be any length, but search engines generally truncate snippets longer than 160 characters. It is best to keep meta descriptions between 150 and 160 characters. | 255 characters |  |  |
| SEO Meta Keywords | Text | Meta keywords are ignored by all major search engines. We do not recommend populating this field. | 255 characters |  |  |
| SEO Page Heading | Text | This field overwrites the page name for SEO purposes. | 100 characters |  |  |
| SEO Page Title | Text | The main text that describes the content. It is the second most important on–page SEO element after content, and appears in three key places: browsers, search engine results pages, and external websites. | 100 characters |  | Privacy Policy |
| Search Keywords | Text | Used by 3rd party systems and for internal reference purposes. | 255 characters. |  |  |
| Search Results Template | Text | Template name for the layout of the search results. Leave blank for default. |  |  | Default |
| Short Description 1 | Text | Short description fields are typically used in thumbnails or the header section of pages to provide a synopsis of the content. Used for the SEO Meta Description (unless it is populated). | 255 characters |  |  |
| Short Description 2 | Text | Short description fields are typically used in thumbnails or the header section of pages to provide a synopsis of the content. | 255 characters |  |  |
| Short Description 3 | Text | Short description fields are typically used in thumbnails or the header section of pages to provide a synopsis of the content. | 255 characters |  |  |
| Sort Order | Integer | Set the position of the content in lists | Numbers only | Descending (Highest number will appear first | 100 |
| Visible On Menu | Boolean | Set if this content will appear on menus. | Y or N or Yes or No or True or False |  | Y |
| Visible On Sitemap | Boolean | Set if this content will appear on sitemaps. | Y or N or Yes or No or True or False |  | Y |