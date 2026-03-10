---
title: "Style Guide for KB articles"
articleID: 1137
knowledgeBase: "Help Articles"
lastUpdated: 2025-12-01
---

# Style Guide for KB articles

# Style Guide for KB articles

This article contains information on the various styling rules used within the Retail Express Knowledge Base. All articles should follow these conventions to ensure a consistent approach to articles. For further information please contact the Content Manager.

> **Note:** The Zendesk HC theme we use supports Bootstrap.

> **Important:** Do not use the "attachments" feature of Zendesk. Our Knowledge Base is not indexed by Google, however a bug in zendesk means that attachments are indexed. Please contact Kelly to upload files to the media server for you instead.

[Formatting](#formatting)

[File Download link](#)(add the class "download-link" to the a tag to use the icon and ensure text is centered)

**Navigation text **separated by a >** **e.g. **CRM > Customers**

Button labels should be in **bold **e.g. Click **Save**

1. Bullet points - numbered (use when a the points need to be followed/actioned in specific order)

- Bullet points - dot points (use when providing a list, but the order isn't specific)

*Italic*

Captions

[Return to Top](#Top)

[Language](#language)

(e.g. insert detail of an example here)

(i.e. insert detail to clarify or add information to the previous statement)

**General notes on language:**

- any reference to a Retail Express program, pathway, menu or heading should be capitalised, but nouns should not e.g. Settings, products

- any 'how-to' or 'steps' should begin with a verb (e.g., Click, Select, Copy, Go to)

- the use of a button should always be referred to as "click" not "press" or "tap"

**If it's a common FAQ:**

- Requires a lot of information: write a new article, but link the original configuration article to the new one under an "FAQ" section at the bottom under the "Want more information" heading
- Small information: include as an FAQ with expand/collapse function at the bottom of the original article

[Highlight Boxes](#highlights)

Edit the html and use "<div class="(type)">" at the start of the section, and "</div>" at the end of the section to use the highlight. Use regular paragraph in strong for a heading.

![rtaImage - 2023-07-10T021206.442.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000pphc8EAA.jpg)
[Labels](#labels)

**Use of Labels**

- Use single words (where possible) instead of phrases

- do not use multiple variations of the same word (e.g., plurals or past tense)

- do not duplicate words contained in the title as labels

- do use common misspellings and synonyms

- If the article is linked to from within Retail Express it should have the tags rex-incontext.

[Images](#images)

**Information on images:**

- Always include relevant sample information in the screenshot where possible (no blank fields)
- Centre aligned
- Image should appear directly after the relevant content text or information
- Emphasised sections in the image should appear as a red transparent frame (no fill)
- Replace with dummy information or blur private or sensitive information
- **File name - **the file name of the image should be in the format of "window_relevantcontent" e.g. possettings_samplesettings.jpg

**Image zoom in:**

If you have a large image that can't be displayed clearly within the body of the article it's possible to implement a "click to view full-sized image" gallery feature.

Example:

![rtaImage - 2023-07-10T021221.027.png](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiEIEAY.jpg)
This is done by inserting a link to the image with data-fancybox code. The code for this feature is:

```plaintext
<a href="image-link-here" data-fancybox="gallery">
```

with a closing </a> following the image information.

Using the image above as an example:

```plaintext
<p><a href="hc/article_attachments/360001558075/settings_outlets.png" data-fancybox="gallery"><img src="https://ress.zendesk.com/hc/article_attachments/360001558075/settings_outlets.png&quot; alt="settings_outlets.png" /></a></p>
```

The link for the image can be found after inserting the image and referring to the img src="thislink".

[Collapsing sections](#collapsing)

**Collapsing sections:**

Vertical accordion:

```plaintext
<div class="panel panel-default"><div class="panel-heading"><p class="panel-title"><a href="#use_a_unique_name" data-parent="#accordion2" data-toggle="collapse">Heading</a></p></div><div id="use_a_unique_name" class="panel-collapse collapse"><div class="panel-body"><p>Body content</p></div></div></div>
```

[Horizontal sections](#horizontal)

To add horizontal tabs you'll need to do the following:

```plaintext
<ul class="nav nav-tabs" style="margin: 10px 0px;"><li class="active"><a href="#tab1" data-toggle="tab">Tab 1 (Active)</a></li><li><a href="#tab2" data-toggle="tab">Tab 2</a></li></ul><div class="tab-content"><div id="tab1" class="tab-pane fade in active"><p>Tab 1 content</p></div><div id="tab2" class="tab-pane fade"><p>Tab 2 content</p></div></div>
```

- [Tab 1 (Active)](#tab1)
- [Tab 2](#tab2)

Tab 1 content

Tab 2 content

[Video series](#video-series)

Used to display the video series webinars in a column structure with headings. This uses bootstrap, and is formatted with the following div classes (note the entire video section has to be wrapped in a div container listed below):

- Container: div class="container"
- Row: div class="row"
- Cells: div class="col-sm-12 col-md-4 video-series-headings"

e.g.

```plaintext
<div class="container"><div class="row"><div class="col-sm-12 col-md-4 video-series-headings"><p>Your content here</p></div></div></div>
```

Example:

[Manual Order Creation](https://galaxy.maropost.com/s/article/Video-Creating-Purchase-Orders-Manually)

[Use our Excel ? Template](https://galaxy.maropost.com/s/article/Video-Create-Purchase-Orders-using-our-Spreadsheet-Template)

[Duplicate an Order](https://galaxy.maropost.com/s/article/Video-How-to-Duplicate-a-Purchase-Order)

![250createposlide.jpg](https://us.v-cdn.net/6038474/uploads/attachments/migrated/image.05T5g00000ppiEhEAI.jpg)