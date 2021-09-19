---
title: "Meanwhile..."
date: "2017-04-06"
categories:
  - JMCDSN Site News
  - Personal
---

So, more and more I'm finally getting my itch back to start actually using this so called "blog" of mine and post something. Well, things will be coming in the future. However, there are some changes that have happened recently to the site that I think were worth talking about. By "recent" I also mean the last few months... not the last few years.

## New digs

Still running the same WordPress install as ever. Still running the same plugins and custom theme. While I continue to (slowly) build an updated theme with all the bells and whistles, I did realize a couple things. The first being that, I have two domains and I had planned to switch to the shorter one at some point. The second being that, my site's hosting was slow, expensive (for shared hosting), and didn't allow me to do things I wanted to do (like SSL). So, I moved. New, cheaper, and dedicated (gasp!) hosting. My old hosting provider didn't seem very happy to lose my business. I didn't really have the heart to tell them that while I liked their mission of "green" hosting, not having the highest quality and jumping through hoops to get HTTPS support is not cool either. Especially when I can get the job done for less without being on a shared server.

## Let's Encrypt this thing

This was by far the best surprise of my move. I immediately wanted to get HTTPS working as soon as I started the migration to my new host. It basically became a main objective. I don't exactly have a lot of money and I want to do my part to make the internet a more secure place. So I figure I'll do the [Let's Encrypt](https://letsencrypt.org/) thing. Honestly, I didn't think it would be _that_ easy. After moving the site and 15 minutes of using their tool through my server, I'm using HTTPS. I even got WordPress set up to automatically use it in all cases without hardly any extra effort. Honestly, a few of those minutes were me figuring out how to _properly_ make a certificate, so chalk a bit of time to being a newb. I was so excited, I tweeted about it.

https://twitter.com/jonmchristensen/status/829532757088993280

And that tweet is _still_ getting likes. I guess people must really like encryption as part of their online browsing. Given the current state of affairs recently with the [USA removing ISP privacy laws](https://arstechnica.com/tech-policy/2017/04/trumps-signature-makes-it-official-isp-privacy-rules-are-dead/) that were to go into effect later this year, can't say I blame them. I'm certainly considering what the options are for my clients now, as honestly I'd like to be able to tell everyone to get on the HTTPS train.

## Warp speed

Moving to SSL and a new host has also allowed me to get [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) up and running on the site. This is more a move for the future and the new theme, which might be able to take advantage of the improvements better. Still, it feels good to be serving the site as fast as possible. I am planning on doing some major AJAX stuff at some point in the newer theme, so I think this'll lend a hand when that day comes. In the meantime, it is still a bonus, even though the site isn't particularly heavy.

## The future

As I've said, the new theme is on the way. It can be hard to find the time to build said theme though. I also realized not long after I started diving in, that I really need to get all my content lined up, since I really want to hit that out of the park. The current site has always felt... slim. Great for performance, not so much for content. These are great steps to start in the right direction of that eventual big change. I'm going to (try) to write more as well. I realized, there is actually a lot lately happening in the industry and in tech policy that I do have something to say. I was [recently reminded that I should write](https://adactio.com/journal/12059) this stuff anyways, even if I don't think people are reading it.
