---
title: Fade Scroll Container Edges
date: 2025-07-30T02:17:08.496Z
draft: false
slug: fade-scroll-container-edges
fmContentType: snippets
lastmod: 2025-07-30T02:18:52.358Z
description: Use CSS to mask edges of a scrollable area when there is more content.
categories:
    - CSS
---

Read the original at [Modern Scroll Shadows Using Scroll-Driven Animations](https://css-tricks.com/modern-scroll-shadows-using-scroll-driven-animations/).

With some minor modifications (webkit scrolling, padding, update colors, cleanup keyframes, custom scrollbar). Fades the edges of the scrollbar when more content is beyond using only CSS animations.

```css
@property --left-fade {
    inherits: false;
    initial-value: 0;
    syntax: "<length>";
}

@property --right-fade {
    inherits: false;
    initial-value: 0;
    syntax: "<length>";
}

@keyframes scrollfade {

    0% {
        --left-fade: 0;
        --right-fade: 3rem;
    }

    10% {
        --left-fade: 3rem;
    }

    90% {
        --right-fade: 3rem;
    }

    100% {
        --left-fade: 3rem;
        --right-fade: 0;
    }
}

.is-overflowing {
    animation: scrollfade;
    animation-timeline: --scrollfade;
    mask: linear-gradient(to right, transparent, #fff var(--left-fade) calc(100% - var(--right-fade)), transparent);
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    padding-block-end: 0.5rem;
    scroll-timeline: --scrollfade x;
    scrollbar-color: rebeccapurple transparent;
    scrollbar-width: thin;
}
```
