---
title: debounce
categories:
- JavaScript
- Performance
date: 2022-11-13
lastmod: 2022-11-13
description: Debounce a function using `requestAnimationFrame`
type: snippets
draft: false
---
```js
/**
 * Debounce functions for better performance.
 *
 * @source Chris Ferdinandi, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */
function debounce (fn) {

	// Setup a timer
	let timeout;

	// Return a function to run debounced
	return function () {

		// Setup the arguments
		let context = this;
		let args = arguments;

		// If there's a timer, cancel it
		if (timeout) {
			window.cancelAnimationFrame(timeout);
		}

		// Setup the new requestAnimationFrame()
		timeout = window.requestAnimationFrame(function () {
			fn.apply(context, args);
		});

	};

}
```
