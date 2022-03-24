---
title: Normalize
categories:
- JavaScript
---
Normalizes an input value and its original range to a number within a different range.

This can be very helpful for converting values for animation and in particular, shaders, which needs values within a certain range.

Typically, this type of script would only normalize from 0 to 1, but this snippet allows you to specify whatever new range you want.
```js
/**
 * Normalizes or remaps a value to another range.
 * The default remapping is from 0 - 1.
 * 
 * @param {Number} value    Input value to convert.
 * @param {Number} valueMin Input value's range minimum.
 * @param {Number} valueMax Input value's range maximum.
 * @param {Number} min      Remapped range minimum. Optional.
 * @param {Number} max      Remapped range maximum. Optional.
 * @returns {Number}        The normalized value.
 */
const normalize = (value, valueMin, valueMax, min = 0, max = 1) => {
    return (((value - valueMin) / (valueMax - valueMin)) * (max - min)) + min
}
```