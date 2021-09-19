---
title: "Is Chrome the new IE?"
date: "2018-02-13"
categories:
  - Web Design & Development
---

This is something that I've been thinking about the past couple months. It is something I've seen discussed a few times in different places like [this mention on CSS-Tricks](https://css-tricks.com/chrome-not-standard/) or [this article from the Verge](https://www.theverge.com/2018/1/4/16805216/google-chrome-only-sites-internet-explorer-6-web-standards). It is a worrying topic for more than one reason, but the developer community (and even some outside of it) are worried about Chrome and it's current dominance of the browser landscape.

So let me start off by saying the near obligatory line that I also seem to see everywhere this is talked about: I like the Chrome browser. It's my daily driver. I use it for work and personal browsing. It has great debug tools and loads of extensions. It syncs all my stuff. I can use multiple user accounts on it. Seriously, I _do_ like Chrome a lot.

But…

Maybe that _isn't_ such a good thing these days.

## Back in my day

I feel silly just writing that heading, but I've been working in the industry for awhile now. Certainly not as long as some, but long enough to remember having to support IE7. Thankfully, I missed the IE6 support boat by just a hair. That doesn't mean I didn't ever have to mess with it, but I was mostly spared. However, I think most developers these days also look back at IE7 with almost the same level of distain.

Why did developers not like these browsers anyways? Simply put, they sucked just weren't good. Not one bit. They were slow. It didn't conform to standards. Lack of updates meant they were way behind standards. You needed all sorts of hack foo to get things working just right.

The worst part though? You were stuck with them. Seriously. Everybody's analytics were all up in that gross Internet Explorer pie. You were also just about guaranteed that if someone had a Windows computer, they were _probably_ using IE. Most just didn't know any better. Sure we had Firefox, but man, it was (and I'd argue still is) the black sheep of the browser world. Hence why many sites were "Built for Internet Explorer" or similar.

Then one day, the heavens parted and those at Google bestowed upon us our savior, Chrome.

## And there was much rejoicing

Chrome grew in popularity with developers and non-developers. It was performant, extensible, standards compliant, and reguarly updated. Along with integration of Google's other services (mainly search), it seemed like everybody started flocking to it.

With the introduction of Chrome and a big name like Google behind it, Microsoft seemed to get the message that it was stagnating and stepped up its game, lest they lose a lot of market share. Of course, it didn't really catch on to that until a lot of its users already left. Some of why they were seemingly late to the game might be attributed to Microsoft's overconfidence that their browser couldn't be touched since it was the default on most systems. The mobile revolution also contributed, and Chrome became the default browser on Android.

Over the years since its introduction, Chrome has made its way on to all major platforms. It has still kept up with some of the things that made it so popular to begin with, and added on a few things since. A lot of users seem to install it almost immediately on any new device they get. But this is where our trouble unfortunately begins.

## The devil in the machine

Something you may or may not know, developers love it when support for cool new features drop. Seriously, it can feel like Christmas morning for your inner nerd child. It is a gift of something you know will not only make your life easier, but make your product that much more awesome, and potentially make the experience greater for your end users. These new features usually come about as standards are made.

Chrome has always been good about standards. It has also been pretty consistent at adding experimental features and standards that are still in flux. There is good and bad to this. New features help move the web as a platform forward. Helping it grow into something more useful and maybe even easier to build for at the same time. The bad thing about this is that developers can get a little too excited to use these features, leaving other browsers (and by extension users) behind before they are actually standardized. Some of those features even just get abandoned or simply languish for years.

This is when I first started noticing awhile ago, there were a lot of cool "demos" and such being shown off with that tiny addendum "Only works in Chrome". Now I think many developers would agree, this is fine so long as it isn't in production. Slowly but surely though, the various features from these demos started showing up in production sites before they had been fully standardized. But these incidents were usually the exception and the functionality was usually not something that was entirely needed. The thing that really made me want to write this is the following twitter post:

https://twitter.com/slackhq/status/958645632620748800?lang=en

Lately there has been a big surge of "Optimized for Chrome". Mainly within Google's own properties (this is a different kind of problem). What bugs me about this is other companies (and therefore other developers) outside of Google building sites optimized for Chrome. Using features that other browsers and users can and would benefit from, but decide not to, for whatever reason.

After all I've seen and read about things like using progressive enhancement and/or graceful degredation with feature testing through the years and after the issues of one browser having so much dominance in the past, it just feels wrong. It also feels like we're headed down a very negative path. One where a singular browser has the most say about how the web is created and experienced. Something that goes against the very heart of what the web is.

## So, _is_ Google the new IE?

In many ways, it _could_ be. Even though Google is constantly pushing the web versus IE's old track record of not moving it hardly at all, I'd agrue that a browser with tons of market dominance in either direction is bad. Competition, like in many other areas of society, can be a very good thing.

Upon further reflection, is it really the browser that is at fault here, or the people building solely for it? Developers who have been around long enough already know and lived the mess that was here before with old IE. They don't want to go back to it. So they likely advocate and build for the _web_ and not for a singular browser.

All I can do is look at the other developers building for a _browser_ and emplore them to open up another. I mentioned earlier that I use Chrome at work, but I actually do most of my development work in Firefox. Maybe we just need to all be more aware of our [Chrome Bias](https://css-tricks.com/chrome-bias-finding-things-like-firefox/). As developers, we're responsible. The only way all the bad things that _could_ happen don't happen, is if we embrace [our roles as gatekeepers](https://medium.com/@monteiro/what-is-a-designer-94ac32ff92d0) and do what we can do prevent it. That means continuing to build for the open web and advising our clients to support it as well. The consquences could be disasterous if we don't do our jobs, but there is still time and plenty of opportunity to make sure it doesn't happen.
