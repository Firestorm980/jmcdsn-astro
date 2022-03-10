/**
 * Debounce functions for better performance.
 *
 * @source Chris Ferdinandi, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */
export function debounce (fn) {
  // Setup a timer
  let timeout

  // Return a function to run debounced
  return function () {
    // Setup the arguments
    const context = this
    const args = arguments

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {
      fn.apply(context, args)
    })
  }
}

/**
 * Emit a custom event.
 *
 * @source Chris Ferdinandi, https://gomakethings.com
 * @param  {String} type   The event type
 * @param  {Object} detail Any details to pass along with the event
 * @param  {Node}   elem   The element to attach the event to
 */
export function emitEvent (type, detail = {}, elem = document) {
  // Make sure there's an event type
  if (!type) return

  // Create a new event
  const event = new CustomEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: detail
  })

  // Dispatch the event
  return elem.dispatchEvent(event)
}
