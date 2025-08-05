---
title: Slugify a String with Multi-lingual Support
date: 2025-07-30T02:28:17.662Z
draft: false
slug: slugify-string-multi-lingual-support
fmContentType: snippets
lastmod: 2025-07-30T02:29:35.496Z
description: Slugify a string with multi-lingual support.
categories:
    - JavaScript
---

Read more at: [How to generate an ID from element text](https://gomakethings.com/how-to-generate-an-id-from-element-text/)

Other methods:

- Don't maintain the same slug (crypto)
- Don't properly slug any non English characters
- Don't take into account other characters (like emojis)

```js
const string = '123 #^&%@<code>.text-small</code> 是不 Sábado 😀🎉';
const slugify = string.replace(/[^a-zA-Z0-9-_\u00A0-\uFFEF\s-]/g, '-').replace(/[\s-]+/g, '-');

// slugify = '123-text-small-是不-Sábado-😀🎉'
```
