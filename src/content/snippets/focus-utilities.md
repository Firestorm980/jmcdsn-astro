---
title: Focus Utilities
date: 2025-07-30T02:36:48.732Z
draft: true
slug: focus-utilities
fmContentType: snippets
description: A module set of scripts to help find focusable and tabbable elements.
categories:
    - JavaScript
lastmod: 2025-07-30T02:39:11.279Z
---

```ts
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
    const focusableSelectors = [
        'a[href]',
        'area[href]',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'button:not([disabled])',
        'iframe',
        'object',
        'embed',
        '[tabindex]:not([tabindex^="-"])',
        '[contenteditable]'
    ];

    const nodeList = container.querySelectorAll<HTMLElement>(focusableSelectors.join(','));
    const elements = Array.from(nodeList);

    return elements.filter((el): boolean => {
        // Explicitly check if the element is hidden
        if (el.hasAttribute('hidden')) return false;
        if (!isVisible(el)) return false;

        const style = window.getComputedStyle(el);
        if (style.visibility === 'hidden' || style.display === 'none') return false;

        if (hasHiddenParent(el, container)) return false;
        if (isInert(el, container)) return false;

        return true;
    });
}

export function getTabbableElements(container: HTMLElement): HTMLElement[] {
    return getFocusableElements(container).filter(el => {
        const tabindex = el.getAttribute('tabindex');
        return tabindex === null || parseInt(tabindex, 10) >= 0;
    });
}

// Element is visible if it has layout boxes and is not visually hidden
function isVisible(el: HTMLElement): boolean {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

// Returns true if any ancestor up to stopAt is hidden (via style or attribute)
function hasHiddenParent(el: HTMLElement, stopAt: HTMLElement): boolean {
    let current: HTMLElement | null = el.parentElement;

    while (current && current !== stopAt) {

        const style = window.getComputedStyle(current);

        if (
            style.display === 'none' ||
            style.visibility === 'hidden' ||
            current.hasAttribute('hidden')
        ) {
            return true;
        }

        current = current.parentElement;
    }
    return false;
}

// Returns true if any ancestor has [inert]
function isInert(el: HTMLElement, stopAt: HTMLElement): boolean {
    let current: HTMLElement | null = el;

    while (current && current !== stopAt) {

        if (current.hasAttribute('inert')) {
            return true;
        }

        current = current.parentElement;
    }

    return false;
}
```
