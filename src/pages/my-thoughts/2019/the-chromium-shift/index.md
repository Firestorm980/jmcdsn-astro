---
title: "The Chromium Shift"
date: "2019-02-09"
categories:
  - Web Design & Development
---

Late last year, [Microsoft announced plans](https://www.windowscentral.com/microsoft-building-chromium-powered-web-browser-windows-10) to ditch the engine powering the Edge browser that comes with Windows and move to the open source Chromium browser project. A couple of months have passed, and I think I'm finally ready to talk about it some now that it has had some chance to settle in my mind and to absorb the thoughts of other developers.

## Microsoft's Choice

So, we'll get right down to it. Microsoft appears to be wanting to switch to Chromium for a few reasons, but one of the main draws may be the open source nature of the project. Creating, using, and maintaining your own engine and keeping up with the ever expanding and updating standards of the web is no easy task. In short, it'll allow them to better compete and stay relevant.

Microsoft has done their own browser and engine before, but they have never faced competition in the browser space like they do now. Edge was billed as a fresh start when it was introduced. A break from the bad reputation of Internet Explorer. It was going to be updated regularly. It was going to be fast and focus on being standards compliant. All the things Internet Explorer wasn't. I'm sure internally, Microsoft hoped the advantages of Edge over Internet Explorer plus the fact it came installed with Windows would give it the leg up over the likes of Chrome and Firefox (okay, maybe mainly _just_ Chrome). It didn't. The shadow of Internet Explorer continues to loom large on the legacy of Microsoft. Many users found a friend in Chrome from the dark days of Internet Explorer's dominance. Edge became little more than an avenue to install Chrome as quickly as possible for many.

And so, fast forward a few years and Microsoft has decided to throw in the towel... sort of. The switch to Chromium is a good move for them. Besides already being speedy and regularly updated by a community of developers and companies (including Google and Apple), they'll be easily able to get in on newer features that only Chrome supported, use extensions, and be back as a viable choice on other operating systems ([MacOS Edge is already planned](https://www.theverge.com/2018/12/6/18128648/microsoft-edge-chrome-chromium-browser-changes) to be a thing). All of this should allow Microsoft to devote resources to promoting, making more unique features for its browser, and hopefully get more market share, all without having to worry as much about keeping up with its competitors on some baseline concerns.

## Everybody wins?

So, this is good right? Microsoft can be competitive again without devoting so much energy maintaining their own base. We get a better browser as another choice and the world moves on. Roll credits.

Well, I'm not so sure about that. We get a new _browser_ but its using the same _engine_ as many others. That is the problem here that we should be concerned about.

Believe it or not, a good chunk of browsers will now be running on Chromium as a base. Not all of them, but Chromium definitely has the market share advantage here.

In addition, Google has a pretty heavily invested interest in Chromium via Chrome and is the primary maintainer of it. Google has previously drawn criticism for how closely tied it is to the project, even though it is open source. Google has a lot of pull in the project, even though multiple entities work on it. To put it mildly, Google (and by extension Chromium) [doesn't always make the best decisions](https://jmcdsn.com/my-thoughts/is-chrome-the-new-ie/) in the interests of users (somewhat against the nature of a true open source project, in my opinion). The majority of browsers, the very way people access the internet, all mainly running on a single project whose main contributor and stakeholder may not have the public's best interest at heart is troubling.

With Edge's switch over, the only real alternative that isn't Chromium based is Firefox. The whole situation reminds me very much of the browser wars between Internet Explorer and Netscape. Except instead of two browsers, we have two engines. The stakes feel much higher somehow.

## Community Reactions

From what I've seen and read in the community of the past few months, it seems mixed. [CSS-Tricks](https://css-tricks.com/browser-diversity-commentary-regarding-the-edge-news/) has a great round up of some big names, most of which I align with. A lot of prominent voices are afraid of what this may mean in the long term for the industry and users. There are some select quotes at the end of this article. I've also heard other developers rejoicing, mainly due to the fact that they expect their work will be simpler. Less engines means less likely chance of differences between browsers, making checking them faster along with actual development times.

## Closing Thoughts

I'll be honest here, for all the crap Edge got being the child of Internet Explorer, it actually hasn't been that bad. In fact, some of it has been, dare I say... pleasant. Honestly, I don't recall any time where I had as terrible of a development experience as I did Internet Explorer. It certainly wasn't the worst thing out there.

Edge will live on in its current form for now and in a few months, come out reborn. Will it ultimately help Microsoft? It all depends on what they do to make it stand apart, I suppose. They could make some waves if they play their hand right. Certainly their business reasoning seems sound enough to help them in that regard.

But will it help people? The everyday users? That, I think, feels a little more dire to me at this juncture. I use Chrome everyday, but more and more I find myself thinking that maybe it is time for a change. I'll end with a few quotes that I think sum up all these feelings quite well:

> By adopting Chromium, Microsoft hands over control of even more of online life to Google.
>
> Chris Beard, [Goodbye EdgeHTML](https://blog.mozilla.org/blog/2018/12/06/goodbye-edge/)

> Firefox. That browser was originally created to combat the seemingly unstoppable monopolistic power of Internet Explorer. Now that Microsoft are no longer in the rendering engine game, Firefox is once again the only thing standing in the way of a complete monopoly.
>
> Jeremy Keith, [Browsers](https://adactio.com/journal/14608)

> When one company decides which ideas are worth supporting and which aren’t, which access problems matter and which don’t, it stifles innovation, crushes competition, and opens the door to excluding people from digital experiences.
>
> Jeffrey Zeldman, [Browser Diversity Starts With Us](https://www.zeldman.com/2018/12/07/browser-diversity-starts-with-us/)
