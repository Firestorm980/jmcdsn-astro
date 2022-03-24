---
title: FLIP
categories:
- JavaScript
- Animation
- Performance
---
Use the FLIP technique for animations where things need to change position.

FLIP (First, Last, Invert, Play) is a technique that was coined by Paul Lewis. The basic idea is that instead of an animation where an element moves from point a to point b and then stops, you instead calcuate point b, move the element immediately there, then animate backwards from a to b. The result is invisible to the end user, but you get much better performance and less visible jank. Read the [CSS-Tricks article](https://css-tricks.com/animating-layouts-with-the-flip-technique/) for more information.

While there is a [GSAP plugin](https://greensock.com/docs/v3/Plugins/Flip) for the FLIP technique, if you only need to do simple animations, this vanilla version should be helpful enough to do the heavy lifting for you. This does need CSS in the form of custom properties to work, while GSAP does not. See [this Codepen](https://codepen.io/JMChristensen/pen/BaQEQKy) to see how custom properties work with this snippet.
```js
/**
 * FLIP
 * F = First
 * L = Last
 * I = Invert
 * P = Play
 *
 * @source Keyframers, https://codepen.io/team/keyframers
 * @param {Function} doSomething Function that causes a layout change.
 * @param {Node}     firstEl     The element to track at the start.
 * @param {Function} getLastEl   Function to determine the element at the end. Defaults to firstEl.
 */
function flip(doSomething, firstEl, getLastEl = () => firstEl) {
  const getRect = (el) => {
    return el.getBoundingClientRect();
  };

  // First
  const firstRect = getRect(firstEl);

  requestAnimationFrame(() => {
    // (something that changes layout)
    doSomething();

    // Last
    let lastEl = getLastEl();
    const lastRect = getRect(lastEl);

    // Invert
    const dx = lastRect.x - firstRect.x;
    const dy = lastRect.y - firstRect.y;
    const dw = lastRect.width / firstRect.width;
    const dh = lastRect.height / firstRect.height;

    // (so CSS knows it's being flipped)
    // data-flipping="true"
    lastEl.dataset.flipping = true;

    lastEl.style.setProperty("--dx", dx);
    lastEl.style.setProperty("--dy", dy);
    lastEl.style.setProperty("--dw", dw);
    lastEl.style.setProperty("--dh", dh);

    // Play
    // setTimeout(() => {
    //   delete lastEl.dataset.flipping;
    // }, 1000);
    requestAnimationFrame(() => {
      delete lastEl.dataset.flipping;
    });
  });
}
```
