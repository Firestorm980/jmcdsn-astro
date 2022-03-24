---
title: Debounce
categories:
- JavaScript
- Performance
---
Debounce your functions for better performance.

There are others that use `setTimeout` but we're using `requestAnimationFrame` here since it will not interfere as much on the main thread and should retain good _visual_ performance (reduce jank) for repeated tasks.
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
