---
title: Is dark mode an accessibility problem?
date: 2022-03-04T00:00:00.477Z
draft: true
slug: dark-mode-accessibility-problem
type: my-thoughts
tags:
    - 10up
    - Accessibility
categories:
    - Web Design & Development
---
This question came into my mind not too long ago when working on a build and with Microsoft's new Moray framework. Now, the quick answer for many of you reading this that you'll probably be most interested in is _technically_, no. There is nothing in the current rule set that says anything about dark mode specifically.

Wait! Don't go yet! To clarify, I was wondering if a site _not_ _offering_ dark mode was an accessibility problem. Indeed, WCAG has nothing to say on the matter... for now. If you do a quick search for "dark mode accessibility" though, you'll find a lot of people before me have wondered the same thing.

## **A little history**<a id="a-little-history"></a>

Part of this stems from the fact that while WCAG doesn't really have an opinion on dark mode, it _does_ when it comes to supporting high contrast mode (mainly under [contrast rules like 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)). Ok, it specifically applies to [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) (which is pretty much dead at this point), but consider this: high contrast mode has been around for more than 10 years in operating systems. Much longer than the relative infancy of dark mode in operating systems. While it mainly applies to Silverlight web apps (and also mainly Windows), it is still considered a best practice to support it and not to try to override it when building a website.

The great news when implementing high contrast mode is typically our jobs are done for us. As long as we build things semantically, high contrast mode is able to identify what elements are and put on its own layer of paint to help the end user see things better without any intervention on our part. Unfortunately, this isn't true with dark mode support.

## **Why add dark mode support?**<a id="why-add-dark-mode-support"></a>

There are a variety of reasons articles usually cite for adding dark mode support to a website. Saving energy for the device, increased contrast, better night time viewing, decreasing eye strain, and more. Which are all totally 100% true, right? Well... maybe not all of them. In fact, most of those seem to be on a case by case basis and may not really have any hard data to back up their conclusions.

But what about accessibility? Well, there are a wide variety of visual impairments that may actually benefit from being able to use dark mode. People with issues like [dyslexia](https://en.wikipedia.org/wiki/Dyslexia) or [Irlen's syndrome](https://en.wikipedia.org/wiki/Irlen_syndrome) may benefit due to the text being on a dark background. However, you'll also find information that dark mode actually can make things _worse_ for some people with[ astigmatism](https://en.wikipedia.org/wiki/Astigmatism). According to a [survey from WebAIM](https://webaim.org/projects/lowvisionsurvey2/#contrastMode), there are quite a few people that do both light and dark mode for contrast and comfort.

So, what's the best course of action here?

## **The power of choice**<a id="the-power-of-choice"></a>

Give the power to the user of course! There is a difference of opinion on which is best: dark mode or light mode. This mainly comes down to individual preference, many times a subjective opinion on what we think looks better.

However, be aware that for many that preference actually stems from what someone may find _physically_ comfortable looking at over long periods. I personally tend to get terrible eye strain, which I find is lessened when using dark mode. That is just my experience though. The opposite might be true for someone else. As with all things accessibility, the real trick is making sure the user _has the option_ to use the one _they_ find most comfortable.

## **Looking ahead**<a id="looking-ahead"></a>

There is also a potential change coming from Chrome in the future that will force add dark mode "support" to sites that don't support it natively, called [Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme/). The Chrome team have this to say (emphasis mine):

> Besides respecting the user's choice on their device, dark themes provide benefits to users such as battery life improvements and accessibility. Instead of opting out of Auto Dark Theme, **we strongly recommend implementing your own curated dark theme instead**, in order to respect the user's preference and keep those benefits.

Additionally, [dark mode is an open issue](https://github.com/w3c/wcag/issues/1074) with the WCAG, so there is already conversation about how it may end up being an accessibility requirement of some kind in a future version.

## **Conclusion and a call to action**<a id="conclusion-and-a-call-to-action"></a>

I would argue that moving forward, dark _and_ light mode is not just a nice-to-have feature but should be part of our typical project considerations and workflow.

Given the above points, we should be thinking about (and actively pushing for) adding dark themes to projects where we can. I'd encourage you to give this thought whatever your job role may be on a given project. Not only for accessibility sake, but for better user choice and UX for everyone, as well as maintaining control of a site's branding and design should browsers implement a forced dark mode. Not to mention, adding potential value for our clients.

## **Further reading and examples**<a id="further-reading-and-examples"></a>

- [CSS-Tricks: A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/), everything you might need to know about the technical implementation. Also includes additional examples.
- [MDN: prefers-color-scheme - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), documentation on the media query that reads OS preference. As well, the MDN site now has a toggle in the header for this.
- [YouTube](https://www.youtube.com/), reads your preferences but you can change them by clicking your avatar in the top and going to "Appearance".
- [DuckDuckGo](https://duckduckgo.com/), reads your preference and updates automatically.
