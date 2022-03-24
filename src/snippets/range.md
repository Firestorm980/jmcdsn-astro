---
name: Range
categories:
- JavaScript
---
Creates an array with numbers between two specified values.

This can be useful for iterating things like pagination and creating particles or elements.

```js
/**
 * Creates an array with a range of values between the start and end values.
 * 
 * @source https://www.joshwcomeau.com/snippets/javascript/range/
 * @param {Number} start The starting number. If end is omitted, the length of the array.
 * @param {Number} end   The ending number. Optional.
 * @param {Number} step  The gap between numbers. Optional.
 * @returns {Array}      The array of numbers.
 */
const range = (start, end, step = 1) => {
    let output = [];

    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }

    for (let i = start; i < end; i += step) {
      output.push(i);
    }

    return output;
};
```