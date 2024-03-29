---
title: emitEvent
categories:
- JavaScript
last_updated: '2022-11-13'
description: Emit a custom event.
---
```js
/**
 * Emit a custom event.
 *
 * @source Chris Ferdinandi, https://gomakethings.com
 * @param  {String} type   The event type
 * @param  {Object} detail Any details to pass along with the event
 * @param  {Node}   elem   The element to attach the event to
 */
function emitEvent (type, detail = {}, elem = document) {

	// Make sure there's an event type
	if (!type) return;

	// Create a new event
	let event = new CustomEvent(type, {
		bubbles: true,
		cancelable: true,
		detail: detail
	});

	// Dispatch the event
	return elem.dispatchEvent(event);

}
```
