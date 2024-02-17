---
title: Embracing flexibility
date: 2022-11-17T00:00:00.704Z
draft: true
slug: embracing-flexibility
type: my-thoughts
tags:
    - 10up
    - UX
categories:
    - Web Design & Development
---
Way back when, Ethan Marcotte came out with an idea that changed the web landscape as we know it in his An Event Apart talk “[A Dao of Flexibility](https://aneventapart.com/news/post/ethan-marcotte-a-dao-of-flexibility-video)“. The idea he created was Responsive Web Design, the basis of which we still implement today.

Although the methods of design have changed a little since (such as “mobile first”), most of the main principles and techniques of Responsive Web Design stay in place today. Particularly taking advantage of media queries to adjust layouts to varying viewports or “breakpoints”.

CSS has changed since that idea though. New units, layout methods, mathematical functions, and more have been added. So, what if there were other ways of approaching how we design and build sites?

## **Intrinsic Web Design**<a id="intrinsic-web-design"></a>

In 2018, Jen Simmons gave a presentation about “Intrinsic Web Design”, in her talk “[Everything You Know About Web Design Just Changed](https://talks.jensimmons.com/videos/h0XWcf)” with the following principles: Contracting & Expanding, Flexibility, and Viewport.

In each of these instances, we’re taking advantage of newer web technologies. Instead of telling the browser _exactly_ what we want, we place trust in the browser to do layout and sizing _for us_ based on the “rules” we give it and the content. This fits very closely with the mindset that Andy Bell set up in “[Build Excellent Websites](https://buildexcellentwebsit.es/)“:

Give the browser some solid rules and hints, then let it make the right decisions for the people that visit it, based on their device, connection quality and capabilities. 

In fact, the “Flexible Layouts” principle of Build Excellent Websites almost fits this exactly.

Andy and Jen aren’t the only ones to talk about the idea of changing how we build websites. There are other examples of a paradigm shift in thinking of the web in less strict terms and letting the browser just “do its thing”. In my view, all of these ideas fall under the umbrella of “Intrinsic Web Design”.

## **Gimme Some Examples**<a id="gimme-some-examples"></a>

### **Fluid Type and Spacing**<a id="fluid-type-and-spacing"></a>

I feel like an example that a lot of us are already well aware of is one that we’ve implemented on a few sites, fluid typography. The idea of fluid typography is simple: set a minimum and maximum size for your type at two screen sizes. In between those sizes, figure out how big the type should be based on an interpolated value.

OK, maybe that wasn’t super clear. How about a link to one of my favorite fluid CSS tools,[ Utopia type calculator](https://utopia.fyi/type/calculator)? Click “Visualize this scale” (button towards the bottom of the page, past the code) and try resizing the page. You’ll see the type changes its size based on the width of the window.

For backwards compatibility, the CSS generated uses the old media queries from way back when. If you look before the output, you’ll see there is an option to output the styles via[ `clamp`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp), a fancy new CSS function. Check that, and you’ll drastically reduce the lines of code, and get something like this:

```css
:root {
  --step--2: clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem);
  --step--1: clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem);
  --step-0: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem);
  --step-1: clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem);
  --step-2: clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem);
  --step-3: clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem);
  --step-4: clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem);
  --step-5: clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem);
}
```

And now we have fluid sizing in CSS variables. Nice!

We can also apply the same idea to spacing (basically anything else with a unit, though you may not want to use it on _everything_). With the help of old units like `em` (based on font size), combined with newer units like `vw` (viewport width) and functions like `clamp` we can make text size and spacing that is fluid _and_ relational (like a margin for a heading or padding around a component). This can make scaling our site to various viewports a piece of cake, and with significantly less code.

### **Grid and Flexbox**<a id="grid-and-flexbox"></a>

Grid and flexbox are both pretty amazing and powerful solutions to layout that we couldn’t even dream about having in the past. Layouts like the “[holy grail](https://css-tricks.com/the-holy-grail-layout-with-css-grid/)” are a piece of cake now. Not only that, it is ridiculously easy to make them responsive with breakpoints and change the entire layout with just a few lines.

But there are a couple of really cool values you can use with grid and flexbox items that allow them to reflow and change the look of a page without any breakpoints at all! Two in particular for grid are **_auto-fill_** and **_auto-fit_**, detailed in “[Auto-Sizing Columns in CSS Grid: auto-fill vs auto-fit](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)” at CSS-Tricks. When combined with **_min_**, **_max_** or **_minmax_**, you can make children comply with the grid but change the layout when there isn’t enough space. You can do similar things with flex and its properties for children elements as well.

Here’s a great [example of an intrinsic grid](https://codepen.io/iansvo/pen/qBYvaBV):

Something like this could even be used on a component level so that a component will change its internal layout based on available space. That issue is something[ container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) are attempting to solve (or at least make easier). However, using intrinsic layout could be a technique that we use (in some cases) while container queries are still rolling out to solve this. In fact, MDN has this to say on container queries:

> Another solution is to rely on grid or flex layout. The component used in my demo could be laid out using flexbox, which would give it some ability to display as one or two columns based on available width. You don’t have the ability to make larger layout changes using this method, however in many cases you can achieve an acceptable result. As container queries become available you could maintain the grid or flex version as the fallback for non-supporting browsers.

Need more examples of this in action? Check out this[ contextual spacing collection](https://codepen.io/collection/ZMrONd/9d25332426833a3571274e21a2bde3c8) on Codepen by Stephanie Eckles.

## **The upsides**<a id="the-upsides"></a>

An issue that we run into a lot with designs and engineering, is what happens “in between” a small and large viewport view. Practically because of time, budget, or just the sheer number of devices out there, we can’t make a design for every possible viewport and plan for every possible scenario. As the types of internet enabled devices increases, it’ll become more difficult to account for all the scenarios our designs will be used in. We’ve largely been making a web based on the idea of fixed sizes and media queries (many times aligning with specific devices or viewports).

To be clear, I’m certainly not saying “let’s abandon media queries.” They are and will remain an essential tool in our tool belt of CSS tech. What I hope I’ve brought your attention to is that we actually have some tools to supplement and potentially replace them in some scenarios. What is the upside of doing that? There could be a few:

- Our designs might be more resilient to change and moving components where we might not expect (something Gutenberg has made very easy, and full site editing might really throw wrenches in)
- Sites might be able to scale better to current and future device form factors
- We might be able to have performance gains by shipping less CSS (remember checking “use clamp” above with Utopia’s fluid type tool?)

## **Looking forward**<a id="looking-forward"></a>

This type of planning might have to be done early on in discovery. While it seems easy to say “let’s make all the things fluid”, in practice expectations need to be set. As designers and engineers, we’re used to a paradigm where we have absolute and complete control of every pixel on the screen.

Admittedly, these techniques you’ve read about may force you to give up a certain amount of that control over to the browser to decide what to do based on the “rules” we give it, which could lead to unforeseen consequences. (I’m pretty sure that bit made some people uncomfortable, “…as if millions of voices suddenly cried out in terror…”). It is also a concept that our stakeholders might not quite be able to get behind (because elements might render differently in some situations or browsers).

It certainly is a different way of thinking about things, because we’re used to them being “fixed”. We’ve been stuck in a mindset that we only view it in fixed ways, but the reality is we don’t, and it doesn’t exist. Just the same as we all don’t browse the web on an iPhone, or that not all of us use a keyboard and mouse.

The web has always been fluid, and it will continue to be. Ask yourself, “what can we do to work _with_ the browser to make our lives easier and embrace its inherently fluid canvas?” Because it only gets crazier from here.

## **Further resources**<a id="further-resources"></a>

I’ve been working on this article awhile, and I just scratched the surface. Here’s some things that inspired me (by people who are more well known and probably explained it way better):

- [Contextual Spacing For Intrinsic Web Design](https://moderncss.dev/contextual-spacing-for-intrinsic-web-design/) by Stephanie Eckles
- [Designing for the Unexpected](https://alistapart.com/article/designing-for-the-unexpected/) by Cathy Dutton
- [Content-based grid tracks and embracing flexibility](https://hidde.blog/content-based-grid-tracks-and-embracing-flexibility/) by Hidde de Vries
- [Gridless Design](https://gridless.design/) by Donnie D’Amato
- [Designing Intrinsic Layouts](https://www.youtube.com/watch?v=AMPKmh98XLY) (video) by Jen Simmons
- [Resilient Web Design](https://resilientwebdesign.com/) and[ Declarative design](https://adactio.com/journal/18982) by Jeremy Keith
- [BuildExcellentWebsit.es](https://buildexcellentwebsit.es/) by Andy Bell
