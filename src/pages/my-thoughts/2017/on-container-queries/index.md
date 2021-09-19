---
title: "On Container Queries"
date: "2017-05-05"
categories:
  - Web Design & Development
---

So, lately I had read quite a bit about container queries (or sometimes I see them called "element queries"). Within the span of a couple weeks, there were posts on [CSS-Tricks](https://css-tricks.com/container-query-discussion/), on [Ethan Marcotte](https://ethanmarcotte.com/wrote/on-container-queries/)'s site (which I found by way of Brad Frost's site), and a few Twitter posts (which I can't find at the moment of writing this, apologies). I had some thoughts I want to share on it. Mostly because at the time, by chance, I was actually wondering what has been going on in this space.

## Way back when...

A long time ago, I [read this article](https://www.smashingmagazine.com/2013/06/media-queries-are-not-the-answer-element-query-polyfill/) on element queries on Smashing Magazine. This was back in 2013. For me and the company I worked at during that time, responsive design still felt new enough internally they were still trying to figure out how to sell it. It was still flashy enough and new enough that we could still wow clients demoing it. After reading that article, a few things popped into my head. The main one: this guy is nuts. Media queries are awesome! They do everything we want. Clearly he isn't using them right. He isn't organizing his CSS right. Various other thoughts along those lines. I really didn't see the need beyond media queries at the time. A lot of the ideas in this article though were a precursor to what we see now in the work on container queries.

## Present day...

So... yea, things have progressed since then. Clients _expect_ responsive design now. It doesn't wow them anymore, its the norm. Media queries are part of the normal workflow now. It is something that designers are finally thinking of and planning for at the beginning. Just about each component I make has some sort of media query styling to it in one way or another. I'm sure most developers are in a similar spot.

Modular architecture is the name of the game. Recently, we've gotten some help making some of these modular components. The addition, and wide support of, Flexbox has helped a lot in making layouts. I expect when I finally get to use Grid on a regular basis I'm going to fall in love with that, as it will also help out with some of the common layout issues I've had with responsive layout in the past.

But we're talking about the need for container queries. So as time has gone by and I've started to work on sites that are more and more modular in their thinking, I would absolutely _love_ to have container queries. Because the reality is, we need them for more than just our layout problems. I feel like the designers I've worked with since have become more aware of different sizes, different interfaces, and are embracing this modular way of thinking. But, as someone who is also a designer, there is more to this than just layout.

Chris points this out in his CSS-Tricks article. I think one of the most important things that this can help solve is hierarchy. Whether that is a module's weight, its type, its color or visibility, when you're moving a modular component from one area of your site to another on the page, you can really end up messing with the hierarchy between it and other modules. Are there other ways to solve this besides container queries? Sure. But they probably aren't as clean. To me, container queries represent another tool in our CSS arsenal. I honestly think that if they were implemented, I'd still use media queries along side them. Almost like we have different nails and two hammers to choose from instead of one.

## The elephant in the room

There is still a thing that bugs me about container queries that has bugged me since that old Smashing Mag article. All current uses for container queries depend on JavaScript to work. Now, I'll admit, I use polyfills all the time. People _really_ want container queries though. Like, yesterday. So, they're reaching for JS to fill the gap until they drop properly in the browser. While normally I'd say "that's progressive enhancement", it just doesn't feel right to me in this instance.

Why? If they don't work for the user, sure they still get the content, but there could be some more serious design problems that could arise out of them not getting their queries. Aren't those problems why we're using them in the first place?

Depending on JS to solve your potential layout, hierarchy, and other design issues with your module sounds... risky. Maybe that's just the designer in me. While we do have modules that would benefit from having this ability, _not_ having container queries isn't exactly stopping us from providing solutions anyways with current tech without JS.

This is just personal opinion, but I also don't like non-standard CSS in my styles. I've been down that road before with other fixes for Internet Explorer way back, and I don't care to do it again. I know some people would disagree with that. People use non-standard CSS all the time. In my experience, this is mostly limited to vendor prefixes. But the spec for this isn't even really close yet. Our scripts might use code that is completely different than what it will end up being. Lately I've really been focusing on staying more vanilla everywhere, and only using a polyfill if it follows the spec. In this case, I can't do either.

## Patiently Waiting

I'm going to love when container queries finally drop. I think it'll be an amazing tool to have next to media queries. With all the other new CSS features on the way, media queries are going to be even more powerful, and we'll have lots of other fun stuff to play with. In the meantime, we just got Grid (mostly) and between it and Flexbox we can solve a good chunk of layout problems. As for our hierarchy problems, maybe we'll just have to deal with what we have right now. It isn't ideal, but that's why we're working on the problem. Some will choose to go ahead and JS their way out of it, and that is ok if you're comfortable with that. Personally, I'll be going about it as usual, using the current (but kinda gross in this instance) tech.
