---
title: Range Selectors
date: 2025-07-30T02:06:12.430Z
draft: true
slug: range-selectors
fmContentType: snippets
lastmod: 2025-07-30T02:06:23.001Z
description: Create various range selectors in CSS using `:has`.
categories:
    - CSS
---

## Example HTML markup

The markup below shows what the CSS select when used. The various selectors are below the example markup. More can be read at: [Level Up Your CSS Skills With The :has() Selector](https://www.smashingmagazine.com/2023/01/level-up-css-skills-has-selector/#selecting-within-a-range)

```html
<article>
  <h2>Lorem, ipsum.</h2>
  <!-- h2 range starts -->
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  <p>Nobis iusto voluptates reiciendis molestias, illo inventore ipsum?</p>
  <!-- h2 range ends -->
  <h2>Lorem, ipsum dolor.</h2>
  <p>Lorem ipsum dolor sit amet.</p>
  <hr>
  <!-- hr range starts -->
  <p>Lorem ipsum dolor sit.</p>
  <p>Dolor animi nisi ut?</p>
  <p>Sunt consectetur esse quia.</p>
  <!-- hr range ends -->
  <hr>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</article>
```

### Select First Element In Range

```css
article h2 + :has(~ h2) {}
```

### Select The Last Element In The Range

```css
article h2 ~ :has(+ h2) {}
```

### Select All Siblings Within A Range

```css
article hr ~ :has(~ hr) {}
```

### Select All In The Range

For an inclusive range, combine all three of the last set of selectors.
