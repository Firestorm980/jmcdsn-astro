---
title: "PurgeCSS: How to remove unused CSS for fun and profit"
date: 2021-09-10T22:00:00.150Z
draft: true
slug: purgecss-remove-unused-css-fun-profit
type: my-thoughts
tags:
    - 10up
    - CSS
categories:
    - Web Design & Development
---
Recently, I was tasked with some major work on a couple of our Microsoft projects. On the first project, we are using a utility CSS framework to make sure we stick closer to branch standards and don't bloat our CSS over time after the site launches. On the second project, we are doing a major theme refactor (legacy theme) and porting the project over to Gutenberg where the sites need to look the same as before (no visual regression) but now will have a bunch of technical debt with the styles (read: the bloat we are trying to avoid in the first project).

For both projects, there is clear potential for huge CSS files for different reasons. Utility frameworks need to account for every possible variation at every breakpoint, which causes the amount of selectors to grow at an alarming rate. An eventual payload in the megabytes isn't unheard of. With a legacy project that is bringing in many selectors we've built up over years of maintenance, manual auditing showed clearly that not 100% of those are being used (particularly because it is using Bootstrap). Hunting down all those instances would take a lot of time, too much for a retainer.

Enter [PurgeCSS](https://purgecss.com/).

## **What is PurgeCSS?**<a id="what-is-purgecss"></a>

Let's start with what the official project docs have to say, because they explain it pretty plainly:

PurgeCSS is a tool to remove unused CSS... PurgeCSS analyzes your content and your CSS files. Then it matches the selectors used in your files with the one in your content files. It removes unused selectors from your CSS, resulting in smaller CSS files.

Put another way, it looks at all the selectors in your project's CSS files (like `.card`, `h3`, `[data-open="true"]`, `#foo`, etc.) and compares them to the selectors in your site's content to figure out what you are _actually_ using. Once that is done, it removes anything that isn't required and saves your updated CSS. The end result is ideally a much smaller CSS file that gets downloaded by the end user. Everything they need, nothing they don't. This has obvious positive implications on site performance for loading times and initial payload.


## **Use Purge CSS with a utility CSS framework**<a id="use-purge-css-with-a-utility-css-framework"></a>

The first project mentioned is actually where I discovered PurgeCSS. Not as an independent tool, but bundled with the hot utility-first CSS framework of the moment: [Tailwindcss](https://tailwindcss.com/).

While an article on Tailwind is probably needed all by itself, for now all you need to know is that when the framework makes its output of CSS, it makes a _lot_ of CSS. There are many options for things to configure in Tailwind: colors, breakpoints, spacing, font sizes, container sizes, positioning, dark mode, padding, grid layout... basically almost anything under the sun for styles. The more variants or extending you do though, the bigger the output. It feels like it grows almost exponentially. When compiling in development mode, it shows. I could easily get a CSS _file_ that was more than 3 MB! Typically, we'd try to keep an _entire page_ load smaller than that (by a lot)!

Tailwind doesn't send all that in a production build though. Since it is very unlikely you'd be using every variant of every selector that Tailwind outputs, it uses PurgeCSS to remove everything you don't use.

One of Tailwind's features is a JSON driven configuration file. Typically on a project this is where you'd configure Tailwind to work with your specific site styles, setting up all those things from before like spacing, text sizes, colors, etc. You can also configure PurgeCSS with it. Here is a sample from their docs:

```js
// tailwind.config.js
module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    // These options are passed through directly to PurgeCSS
    options: {
      safelist: ['bg-red-500', 'px-4'],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  // ...
}
```

There are a few key takeaways here. One is the `content` key and the array of files it is looking at. In this case, PurgeCSS will be looking at those files to do its comparison to see what is actually in use. Of the other options, the `safelist` is the most important. The `safelist` contains a list of selectors that we want included, no matter what. So even if PurgeCSS doesn't find them in the content, they'll still be included in the final file. This comes in handy particularly for third party sources or sources we don't control.

This is all well and good, but the above config is really meant for something more like a static site and WordPress is not one of those. In fact, any post or page doesn't live in the file system, so we can't read the content. This could pose really big issues for all our authored content (it wouldn't be styled)! No worries, we can modify the configuration to work with a WordPress theme.

```js
// tailwind.config.js
const purgecssWordpress = require('purgecss-with-wordpress');
module.exports = {
  purge: {
    content: [
        './*.php',
        './assets/js/**/*.js',
        './includes/**/*.php',
        './partials/**/*.php',
        './templates/**/*.php',
    ],
    options: {
      safelist: [...purgecssWordpress.safelist, '[lang]'],
    },
  },
  // ...
}
```

We've done just a couple things here and we're in a much better spot. PurgeCSS comes with built in "extractors", which are tasked with reading various file types and finding the selectors in use. Thankfully, the ones we need for PHP and JS are built in. With those, we can point our config at our theme files. Specifically, the templates, includes, partials, and JS. This should handle a good chunk of the theme styles and anything dynamic.

What about the authored content though? That's where the `safelist` comes into play. The `purgecss-with-wordpress` package is also maintained by the same group, and includes a bunch of WordPress specific selectors and rules to make that content styled again. So, we get all our styles for content the client will be making for things like blocks!

The resulting production build size after all this optimization and minifying? A much more reasonable 65 KB!


## **Using Purge CSS to trim down a legacy project**<a id="using-purge-css-to-trim-down-a-legacy-project"></a>

There are other project where we get a giant codebase. Partially because of the way we author styles and how we do maintenance, as new features are created, the amount of styles increase. We also have some older projects that use large libraries the came with many styles out of the box (like [Bootstrap](https://getbootstrap.com/)). Unfortunately, it is unlikely over time that all of those styles will be used or are needed. As part of regular maintenance, we may also decide to remove or replace an old feature, and all of the styles that came with it originally don't always get removed for various reasons.

My second project is an example. While the theme visually is quite simplistic, there is a large amount of technical debt in the form of features that have been added and removed, but not entirely cleaned up. The theme was also originally built with Bootstrap as a base, but doesn't actually use much of it. However, because of the cascading nature of CSS, lack of documentation, lack of scoping, and organization, there is just too much here for us to manually comb through and audit to find out what is actually being used. On top of that, we'd have to then detangle it into more organized code. So much work that it would take an unreasonable amount of time. Let's make a machine do that instead.

Even with an older pipeline using [Gulp](https://gulpjs.com/) or [Grunt](https://gruntjs.com/), we can take advantage of using PurgeCSS by making an [NPM script](https://docs.npmjs.com/cli/v6/using-npm/scripts) that uses its own config file with its CLI. We don't even really have to modify the above configs from our other project that much.

```js
// purgecss.config.js
const purgecssWordpress = require('purgecss-with-wordpress');
module.exports = {
    content: [
    './*.php',
    './assets/js/**/*.js',
    './includes/**/*.php',
    './partials/**/*.php',
    './templates/**/*.php',
    ],
    css: ['./dist/css/style.css'],
    output: './dist/css',
    safelist: [...purgecssWordpress.safelist, '[lang]'],
};
```

Then in our NPM scripts, we can modify the build command to also run PurgeCSS when it is done initially making our styles:

```jsonc
// package.json
{
    // ...    
    "build": "some-build-command && npm run purgecss",
    "purgecss": "purgecss --config ./purgecss.config.js",
    // ...
}
```

That's all there is. Afterwards, we should have a smaller CSS file and the site won't look any differently than before. In actual real world testing so far, the file has been cut down from around 220 KB to 84 KB. Over 60% savings!


## **Going forward**<a id="going-forward"></a>

These projects are both still in progress. It is possible that as time goes on, they won't be getting as good of returns that I'm sharing with everyone today. It is also worth pointing out that these projects are bit non-standard since they both use a larger CSS library or framework (Tailwind, Bootstrap) which heavily benefit from this type of optimization.

Ideally, when we work on a site we would be doing a few things as well. We'd only be making styles we'd actually need and organizing our styles in such a way where if a feature needs to be removed later it is easy to take the styles along with it. Our more recent builds have file organization that is built into our scaffold that helps this a lot. Additional documentation of what styles are used where and how would also help out future maintenance for keeping our CSS lean.

With our typical build with PurgeCSS being used, CSS coverage on a particular page wouldn't be 100%. In other words, you'd still have unused or extra styles being loaded no matter what. This technique might be more useful for static site generators (I've seen it in use on a few [11ty](https://www.11ty.dev/) projects) or other build processes where we can tailor a specific stylesheet (or inline styles) to the exact content of a particular page to get the best coverage possible.

PurgeCSS is also designed to work with the [PostCSS](https://purgecss.com/plugins/postcss.html#installation) + Webpack workflow that we are using in our scaffold, so integrating it into our current workflow should be fairly painless (and you can always fall back to the NPM scripts / CLI method).

Using it will largely depend on your project's goals and your current codebase. Your mileage will definitely vary. I wouldn't expect massive savings if you already have styles that have been well authored and maintained. However, if you're in a situation where that isn't the case or where only part of a larger framework may be getting used, you could see at least some improvement. This along with other performance optimizations and strategies, can help you deliver a smaller payload to your site's visitors and therefore a better user experience.
