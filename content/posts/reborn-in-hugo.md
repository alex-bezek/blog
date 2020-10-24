---
title: Reborn in Hugo
hero: /images/posts/reborn-in-hugo/hugo-1.png
date: 2020-10-23T00:00:00.000Z
description: Rewriting this blog site in Hugo
menu:
  sidebar:
    name: Reborn in Hugo
    identifier: reborn-in-hugo
    weight: 500
---

Its been a while since I did much blogging and worked on this site, however this fall I got a bit of inspiration so I figured I'd blow off the dust and try at it again. For me, writing takes real effort. I have to turn off other distractions and focus. Instead, like usual when I work on my site, I procrastinate it a bit by working on the underlying technical aspects of the blog I love, less on the content. So now that I have mostly what I want, its time to make some content. I figured recapping what I did and why whiles its still fresh would be perfect for future me to look back on and see in 2 years when I inevitably do this again.

## Where I was

I've had a few iterations of this site over the years. Each time I tend to gravitate towards what I'm working with most recently that sparks the most interest. In the early days I started with a Rails app since that's all I'd done. I then tried jekyll since I found something at work that used it and first learned of static site generators. Then when I started doing full frontend at work, I even got the idea to pay one of our graphic designers to help design a custom site for me to fully implement. I quickly learned that I had just created a massive pile of procrastination work and I would never write content because of it. I came to terms with the fact that while I wanted something custom from the ground up that I could call my own, it would take a long time for me (since i'm not a CSS expert) and likely wouldn't be as good as most themes out there.

At that point in time, I was working in React heavily day to day and [GatsbyJS](https://www.gatsbyjs.com/) was all the new hotness. It had everything going for it: it used react, had key words like "blazing fast", and used the other new hotness GraphQL. While its definitely an amazing product, I think the major reason it stood out amongst the plethora for other site generators was that key blend of some of the hotest topics in the JS community at the time. I bit, landed on it and setup a pretty nice looking theme.

{{<
  figure
  src="/images/posts/reborn-in-hugo/old-blog.png"
  link="https://github.com/alex-bezek/blog/tree/81ffde27fd9131b0bb639d162a411badb87795c7"
  title="My old blog on Gatsby JS"
  target="_blank"
>}}

## Why not continue with Gatsby

So coming back to this after a year and a half of not touching it, I knew I had to update it in some way. I mean, technically yes, my versions were pinned, the app still ran fine, and I could easily add markdown files for content and proceeded. But I have a somewhat compulsory obsession with keeping things up to date and using the latest and greatest. And as we discussed, why not use it as an excuse to ~~procrastinate writing~~ learn something new. I largely chose to move away from gatsby due to some pains and gripes I had in the past with it. In all fairness, some of these issues are likely better in the newest version of Gatsby, but I wanted to try something else.

#### Configuration Hell

One of my main pains I remembered was really getting setup and going with the blog in the first place. While it was dead simple to install and run a basic gatsby site with a few pages and markdown content, extending it and customizing it was pretty hard for me. Probably the main confusion was that I hadn't used GraphQL before which is how Gatsby's build time data layer is managed. I understood the basics of it from reading many tech blogs on it and watching a lot of conference talks, but building a big [gatsby-node.js](https://github.com/alex-bezek/blog/blob/81ffde27fd9131b0bb639d162a411badb87795c7/gatsby-node.js) file to build out all your nodes and edges and understanding the [gatsby image](https://github.com/alex-bezek/blog/blob/81ffde27fd9131b0bb639d162a411badb87795c7/src/pages/index.tsx#L164) queries were difficult for me at first.

Luckily using a theme got me over most of the hurdle to start, but left me with a mess to live with. I had poured over the themes to find something I liked visually. But "using a theme" seemed to be little more than forking the repo. I ended up with a slew of typescript files with a css in js pattern I hadn't used before. I have nothing against those technologies, I'm just not familiar with them and they added even more mental overhead to understand how to edit things. I now know that 2.0 offers themes vs the original was just "starter sites", so this problem is likely solved and I can't hold it against it now.

#### Nodejs

Don't get me wrong here, I love javascript the language and use it as my main scripting language (next to ruby). I've also worked in react heavily for years and its a great solution if the have the problem it solves. However, I've never been a big fan of of the npm package and bundling ecosystem. Installing hundreds (if not thousands) of npm packages still seems insane to me and I've fought webpack and npm issues far too much at work over the years for me to have much love for them.

In the end, choosing to switch was really just a combination of some past gripes, wanting to try something new, and really using the right tool for the right job. This isn't mean to be a fair evaluation of Gatsby, I didn't even try 2.0. Gatsby still seems like a really good product with an awesome ecosystem of plugins and a unique multi-sourced GraphQL based backend configuration system. However, at the end of the day, I'm making a static blog content site, and as much as I like React, I really don't need it for this. A simple html templating system does just fine.


## Let's Go with Hugo!

So as you as the title suggests, I went with Hugo for my new site. Admittedly, it wasn't much because I had done a thorough evaluation of Hugo vs Gatsby vs the [literally hundreds](https://jamstack.org/generators/) of other static site generators. Instead I picked it for 2 fairly weak reasons to be honest:

In the past year I had started doing some Go at work. Primarily, I worked on creating an custom internal terraform provider for our services (I'll write a post about that later). Our organization also whitelisted using Go for AWS lamdbda based development so I had tinkered with it there. Admittedly, this is a very weak reason to pick Hugo, I haven't done any Go other than some basic loops and if's in the templates. But hey, why not.

The second reason is because I had recently [worked](https://github.com/cerner/cerner.github.io/issues/136#issuecomment-663348894) on moving Cerner's public from a [very old Jekyll site](https://github.com/cerner/cerner.github.io/issues/134) to Hugo as part of our ShipIt program (a quarterly 24 group hackathon competition). I had become involved in the blog being on Cerner's Dev Culture Council and we were looking to revamp it and add some automation around the difficult publishing process. It was pretty easy to get going even after having never worked with Hugo. You can see our post about the work here https://engineering.cerner.com/blog/we-are-back-w-new-look/ and a tweet about it.

{{< tweet 1290730166466097154 >}}

So with little more than this, I swapped it over. It only took a day to really move it over and get the content mapped over. As expected though, I then spent the next 2 weeks adding features and tinkering. The one thing I do love so far is I'm able to go make PRs to the theme repo to fix and enhance things.

Overall the experience was pretty great! The theme is super slick (thanks to [toha](https://github.com/hossainemruz/toha/)) and I'm enjoying it so far.

Thats probably enough for why. I think my next post will be around all features and enhancements I've been tinkering with. Stay tuned!