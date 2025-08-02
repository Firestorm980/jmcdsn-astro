---
title: Previous Sibling Selector
date: 2025-07-30T02:02:55.611Z
draft: true
slug: previous-sibling-selector
fmContentType: snippets
categories:
    - CSS
lastmod: 2025-07-30T02:05:01.206Z
description: Use `:has` to get the previous sibling.
---

```css
li:has(+ li.someclass) {
    color: red;
}
```

```html
<ul>
    <li>Foo</li>
    <li>Bar</li><-- This will be red -->
    <li class="someclass">Hello</li>
    <li>World</li>
</ul>
```
