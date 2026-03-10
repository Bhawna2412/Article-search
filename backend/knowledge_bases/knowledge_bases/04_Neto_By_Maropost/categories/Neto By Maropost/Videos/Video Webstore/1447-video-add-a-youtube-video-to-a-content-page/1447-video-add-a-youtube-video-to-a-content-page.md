---
title: "Video: Add a YouTube Video to a Content Page"
articleID: 1447
category: "Videos > Video Webstore"
knowledgeBase: "Neto By Maropost"
---

# Video: Add a YouTube Video to a Content Page

[▶ YouTube Video](https://youtu.be/DHRBw5XNnVE)
YouTube videos aren't responsive by default. To make your YouTube Videos responsive, you can use the below snippet of code. Replace the "src=" with the output from the YouTube Video page like the examples below:

## 16:9 aspect ratio

```plaintext
<div class="embed-responsive embed-responsive-16by9"><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen=""frameborder="0"height="315"src="<a href="#">https://www.youtube.com/embed/DHRBw5XNnVE</a>"width="560"></iframe></div>
```

## 4:3 aspect ratio

```plaintext
<div class="embed-responsive embed-responsive-4by3"><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen=""frameborder="0"height="315"src="<a href="#">https://www.youtube.com/embed/DHRBw5XNnVE</a>"width="560"></iframe></div>
```