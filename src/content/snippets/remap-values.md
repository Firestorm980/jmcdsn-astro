---
title: Remap Values
date: 2025-07-30T01:59:14.812Z
draft: false
slug: remap-values
fmContentType: snippets
lastmod: 2025-07-30T01:59:47.678Z
description: Maps a number from one range to another range.
categories:
    - JavaScript
---

```js
/**
 * Maps a number from one set range, to another set range.
 * @param {number} value The number to input.
 * @param {number} valueMin The lower bounds of the input.
 * @param {number} valueMax The upper bounds of the input.
 * @param {number} min The lower bounds of the output.
 * @param {number} max THe upper bounds of the output.
 * @return {number} The new value mapped to the output range.
 */
function mapValue (value, valueMin, valueMax, min = 0, max = 1) {
    return (((value - valueMin) / (valueMax - valueMin)) * (max - min)) + min
}
```
