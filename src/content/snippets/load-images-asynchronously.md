---
title: Load Images Asynchronously
date: 2025-07-30T02:14:43.965Z
draft: true
slug: load-images-asynchronously
fmContentType: snippets
lastmod: 2025-07-30T02:15:49.349Z
description: Use `Promise` to load an image from a source asynchronously.
categories:
    - JavaScript
---

```js
/**
 * Asynchronously loads an image from the given source URL.
 *
 * @param {string} src - The source URL of the image to load.
 * @returns {Promise<HTMLImageElement>} A promise that resolves with the loaded image element,
 * or rejects with an error if the image fails to load.
 */
async function loadImage (src) {
    return new Promise((resolve, reject) => {
        const img = new Image()

        img.onload = () => {
            resolve(img)
        }

        img.onerror = (err) => {
            reject(new Error(`Failed to load image: ${src}. Error: ${err}`))
        }

        img.src = src
    })
}
```
