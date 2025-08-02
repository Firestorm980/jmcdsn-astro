---
title: Finding Common Values in Two Arrays
date: 2025-07-30T01:57:08.700Z
draft: true
slug: finding-common-values-arrays
fmContentType: snippets
description: Find common values between two arrays.
categories:
    - JavaScript
lastmod: 2025-07-30T01:58:38.402Z
---

```js
function hasCommonElement(arr1, arr2) {
    return arr1.some(element => arr2.includes(element));
}

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 3, 8];

console.log(hasCommonElement(array1, array2)); // Output: true (since 3 is common)
```

Sources

- [You Might Not Need Lodash](https://youmightnotneed.com/lodash)
- [snap.js](https://thescottyjam.github.io/snap.js/#!/nolodash)
