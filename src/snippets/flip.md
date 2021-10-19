---
title: FLIP
---
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
 * @param {Fuction}  getLastEl   Function to determine the element at the end. Defaults to firstEl.
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
