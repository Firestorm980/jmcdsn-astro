---
title: "Smashing Workshop: Psychology for UX and Product Design"
date: 2021-10-15T19:00:00.656Z
draft: true
slug: smashing-workshop-psychology-ux-product-design
type: my-thoughts
tags:
    - 10up
categories:
    - Web Design & Development
---
Recently, I was able to use some time attend a [virtual workshop through Smashing Magazine: Psychology for UX and Product Design](https://smashingconf.com/online-workshops/workshops). I've been looking into UX related workshops specifically as a way to not only learn more about the discipline but also so I can better collaborate with the UX and design teams during the discovery and design phases on many of our projects.

As a Front End Engineer, sometimes I don't always know some of the strategies and methods that are being employed. With the UX workshops I'm hoping to gain some insight into that and contribute additional solutions. As you can see from the title, this particular workshop was focused on the intersection of psychology and UX, led by Smashing Magazine contributor[ Joe Leech](https://www.smashingmagazine.com/author/joe-leech/).

## **Biases and design**<a id="biases-and-design"></a>

One of the very first exercises of the workshop was simple: draw a cup (you can even do this real quick if you want, I'll wait). Now, what does the cup look like? Tall? Short? Thin? Wide? Does it have a handle? Is it delicate or more formal? Does it have a lid? Would it include a saucer? It might not be as clear as you probably thought when you started if you actually did this.

The audience for this workshop was: international, varied disciplines, experiences, cultures, and backgrounds. Thus, the result was there were actually a lot of different cups that people drew. All of them were influenced by the creator in some way because of all these unique qualities of the individual.

With that came the first important lesson: that the designer of a thing always brings along their inherent biases based on their own experience and expectations. Sometimes, that is even influenced by the most recent example of a like thing they've seen (for example, if you recently drank tea from a cup, maybe you'd draw a cup like the one you had tea in. This is an example of[ recency bias](https://en.wikipedia.org/wiki/Recency_bias)).

For our work, this could be biases we have from previous sites or ones we've seen and used recently. We may know what a button with an icon does on a particular site without any extra description. For example, the hamburger or search icon. Would someone else with less web experience? Someone from another country? Someone who hasn't seen this site before? There is an inherent assumption that they would know, but because of our biases from recent or past experience, that probably isn't always the case.

Keeping things clear is key so that as much of the audience as possible can understand the design. This reminded me a lot of the[ KISS principle](https://en.wikipedia.org/wiki/KISS_principle) (and no, it has nothing to do with[ the band](https://en.wikipedia.org/wiki/Kiss_\(band\))). In this case, instead of just using an icon we use a descriptive word or phrase with (or instead of) the icon. This will remove any potential ambiguity. We shouldn't assume that certain knowledge is known on the part of the users.

Something similar I've also experienced is when I continually see a design. Because I see it all the time, I know how it is meant to work without annotations or descriptions. I become "blind" to spots where others who haven't seen the design so much may not understand it. This is a great case for us trying to be aware of our own biases and possibly even having a third party (ideally a future user) try to navigate the design as a check against our assumptions. Ideally, we would have a better snapshot of what kind of users will be using the site before even starting work and then "test" the design with users.


## **Cognitive load**<a id="cognitive-load"></a>

Another big topic in the workshop revolved around[ cognitive load](https://en.wikipedia.org/wiki/Cognitive_load), or how hard you need to think to navigate, understand, and use a design or site. It probably won't surprise many of you, but people like to save as much energy as possible. As a result, we don't like to think too hard about things. How can we help our users not think too much?

One thing we can do is take advantage of design axioms and established patterns. An axiom is part of a design that is so common it is universal (like a logo linking to the homepage). A pattern is a solution to a general problem that is similar to other solutions but can vary (many site search forms are similar, but not exactly alike or in the same location).

Another thing we could do would be to use design affordances, which is the ability to understand how something works quickly by just looking at it. The form of the object informs how it is meant to be used. So if it looks like a button, it is a button. If it looks like an input field, it is an input field. This is also why it is important not to mix affordances or go away from the norm when using them. Doing so could be extremely frustrating for the end user.

Not giving users too many choices is also helpful at reducing cognitive load. While many people when asked would probably _like_ more choices, research has shown that we tend to get overloaded when given too many options. The name for this particular issue is[ Hick's Law](https://www.interaction-design.org/literature/topics/hick-s-law) and could be of particular importance when designing things like menus (the example in the workshop was a mega menu) and when we want the user to make a choice quickly.

All of the above topics reminded me of the book[ _Don't Make Me Think_](https://www.worldcat.org/title/dont-make-me-think-revisited-a-common-sense-approach-to-web-usability/oclc/859556499).

This does present a problem though: if so many things we design are already "established" in some way and we shouldn't deviate, how do we innovate or make our design unique? This was one of the big questions of the workshop. Since we don't want people to think too hard and keep things simple, what do we do? The lesson was mainly this: the established axioms and patterns isn't the portion of the design you should try to change or innovate in a competitive environment. Instead, we should try to design the site to be as intuitive as possible by using the mental models users would have when using a site. The most innovative sites typically copy procedural mental models from the real world.


## **Procedural thinking**<a id="procedural-thinking"></a>

In a procedural design, the design will follow a logical and predictable pattern to the interaction. People tend to remember or use things better when it is procedural or in a sequence of some sort. For example, have you ever used an acronym or phrase to remember some other piece of knowledge? Things like: "ROY-G-BIV", or "in fourteen hundred ninety-two Columbus sailed the ocean blue"? It can make it a lot easier to remember than just plain facts.

In the case of a UI, we'll get used to how something works after repeated use. If you drive, think about how hard it was _learning_ to drive a car versus after a few years of driving a car. The knowledge at this point is so ingrained it could even be considered automatic. Now imagine someone changed all the controls. It would be pretty frustrating. This is also why when a design changes, there can be a very vocal group of users that resist that change. They've built up the knowledge of using a site repeatedly.

Aligning this pattern to how we think about doing something in the real world can help immensely when making a site. On the[ CA Grants Portal](https://www.grants.ca.gov/) project, we used a natural language form. The natural language is similar to the way a person may ask a question to someone in real life to find the information they're looking for. If we think about how the user might approach a problem or task in the real world, we can model our virtual solution after it. That way, we can have a more intuitive flow that follows knowledge that already exists. Kind of wild!

Since procedural thinking follows a logical series of steps, it is also easier to measure and test when applying it to a design. Again, testing and checking with actual users here is key.


## **Things to watch out for**<a id="things-to-watch-out-for"></a>

It was also brought up that we should avoid copying patterns made by large organizations that face no meaningful competition. Why? These organizations are so large, that they can make bad UI decisions and not lose users. Or if they do, it doesn't actually hurt that much. In other words, they can afford to experiment. While some of our clients fall under this definition presented in the workshop, the best advice here would probably be to still keep things as clear and simple as possible.

Additionally, the workshop touched on the use of psychology and "[dark patterns](https://en.wikipedia.org/wiki/Dark_pattern)" in UX. While this wasn't the main topic of the workshop, what this really comes down to is: don't be evil. Because we know how a user thinks and may be interpreting a design (consciously or unconsciously) we can easily trick a user into doing something they don't want to. It is up to not just design and UX but the rest of the project team to watch out for and flag these dark patterns. Typically, the use of one will actually hurt the project in the longer term. I'd suggest you[ visit this site on dark patterns](https://www.darkpatterns.org/) so you know what to watch out for and flag.


## **Takeaways**<a id="takeaways"></a>

Some of these lessons probably seem a little more obvious than others. I'm sure some of us have probably heard a few of these things before. Like any workshop, it did a good job of putting some of those ideas into better focus.

A common refrain throughout was this: test your designs and assumptions against actual users. After all, the site is for _them_. Obviously, not absolutely all of our projects will have the time and budget required to do so. If your project can though, the insights you gain could be extremely valuable. Implementation may be an A/B test or a static redesign that goes through a virtual focus group. Doing so can help remove barriers and any of our biases that were introduced to the design. Additionally, if the client loves metrics, it may be a good way of reassuring them that a change will indeed work better.

[Cognitive biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases) in our designs can be used for good or for evil (please don't use them for evil). We should all be on the lookout on how we can introduce ones that remove barriers for the users and make their interactions more efficient and enjoyable. Importantly, we need to be aware of our own biases.
