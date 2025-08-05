---
title: Filter Unique Items in Array
date: 2025-07-30T01:49:04.905Z
draft: false
slug: filter-unique-items-in-array
fmContentType: snippets
lastmod: 2025-07-30T01:51:48.016Z
categories:
    - JavaScript
description: Filter array of objects to unique ones based on a key.
---

```js
const books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

const unique = books.filter((obj, index) => {
    return index === books.findIndex(o => obj.title === o.title);
});
```
