---
title: Animated `details` + `summary`
date: 2025-07-30T02:30:38.563Z
draft: true
slug: animated-details-summary
fmContentType: snippets
lastmod: 2025-07-30T02:30:52.387Z
categories:
    - CSS
    - JavaScript
    - Animation
description: Cross browser animation of `details` and `summary` elements.
---

Cross browser animation of `details` and `summary` elements using CSS grid and JavaScript.

Read more about this at [Animate &#60;details&#62; Element when Expanding or Collapsing](https://linkedlist.ch/animate_details_element_60/)

```html
<details>
    <summary>Summary</summary>
    <div>
        <div>
            <!-- your content -->
        </div>
    </div>
</details>
```

```css
details > div {
    overflow: hidden;
    display: grid;
    /* intentionally independent from .animation as Safari 16
    would otherwise ignore the expansion animation. */
    animation-duration: 0.2s;
}

details > .animation {
    animation-name: grid-expand;
    animation-timing-function: ease-out;
}

details > .collapsing {
    animation-direction: reverse;
    animation-timing-function: ease-in;
}

details > div > div {
    min-height: 0;
}

@keyframes grid-expand {
    0% {
     grid-template-rows: 0fr;
    }
    100% {
        grid-template-rows: 1fr;
    }
}
```

```js
document.querySelectorAll('summary')
    .forEach(element => element.addEventListener('click', (event) => {
        const detailsElement = event.target.parentElement;
        const contentElement = event.target.nextElementSibling;

        // Chrome sometimes has a hiccup and gets stuck.
        if (contentElement.classList.contains('animation')) {
            // So we make sure to remove those classes manually,
            contentElement.classList.remove('animation', 'collapsing');
            // ... enforce a reflow so that collapsing may be animated again,
            void element.offsetWidth;
            // ... and fallback to the default behaviour this time.
            return;
        }

        const onAnimationEnd = cb => contentElement.addEventListener(
            "animationend", cb, {once: true}
        );

        // request an animation frame to force Safari 16 to actually perform the animation
        requestAnimationFrame(() => contentElement.classList.add('animation'));
        onAnimationEnd(() => contentElement.classList.remove('animation'));

        const isDetailsOpen = detailsElement.getAttribute('open') !== null;
        if (isDetailsOpen) {
            // prevent default collapsing and delay it until the animation has completed
            event.preventDefault();
            contentElement.classList.add('collapsing');
            onAnimationEnd(() => {
            detailsElement.removeAttribute('open');
            contentElement.classList.remove('collapsing');
            });
        }
    })
);
```
