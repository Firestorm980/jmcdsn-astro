---
title: getCountryFlagEmoji
categories:
- JavaScript
last_updated: '2023-11-4'
description: Automatically get the country flag emoji from the country code.
---
```js
/**
 * Get the emoji flag for a country code.
 * @link https://dev.to/jorik/country-code-to-flag-emoji-a21
 * @link https://gomakethings.com/getting-emoji-from-country-codes-with-vanilla-javascript/
 * @param {string} countryCode The two letter country code.
 * @returns {string} The country emoji flag.
 */
function getCountryFlagEmoji (countryCode) {
  return [...countryCode.toUpperCase()].map(char =>
    String.fromCodePoint(127397 + char.charCodeAt())
  ).reduce((a, b) => a + b)
};
```
