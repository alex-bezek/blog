---
title: "Linking to local images in Gatsby frontmatter"
image: "./gatsby-site-data.jpg"
date: 2017-10-08T00:00:00.000Z
category: "Frontend"
draft: false
tags:
  - GraphQl
  - Gatsby
credit_links:
  - https://www.gatsbyjs.org/
  - https://css-tricks.com/the-blur-up-technique-for-loading-background-images/
---

Being stuck on an issue in a technology or concept you are brand new to can be paralyzing. You hardly know enough to figure out how to google the issue. Even if you do have a good search, the answer could be sitting right in front of your face, and often times you don't even know it. If it’s not a critical blocking issue, you may try to push it off till later and progress with your work. For me though, its always a nagging issue in the back of my head. I will try to do other work, but the perfectionist in me keeps me coming back the problem day after day. Eventually with much persitence (and alot of luck) the solution dawns on you. Regardless of if it was a crazy strange issue, or a simple misunderstanding of the tech, you get an immdediate sense of accomplishment for solving the issue. I think its what drives us in our field. To solve problems and get that leveling up factor. Down the road, when you are much more familiar with the topic, its fun to retrospect on how silly it was you couldn't figure it out and how easy it would be to solve that issue now.

I've started this brand-new blog using a relatively new framework called [Gatsby](https://www.gatsbyjs.org/). If you make any static react based apps (probably using create-react-app) and find yourself trying to dynamically create pages with sets of data, I highly recomend trying it out. Even if you just have a set of react pages created, it automatically can handle all of the fancy config for things like react-router, service workers, statically generating html files, and optimial asset loading. One of the primary ways of using it is to create a set of markdown files and use GraphQl to generate the data to create a blog post for each. If you are familiar with jekyll or other static site generators, it has similar functionality to where you can define a set of meta data for each post in your markdown's frontmatter to use in your blog post template.

So i followed the tutorials and docs, getting a basic site with a handful of template posts working. I setup a bunch of random ideas of future posts without any content, but filling out the frontmatter so I could work on the UI for the front page in a more realistic state for the future. In the process, I got a bunch of posts with frontmatter following the examples online much like this.

```yaml
title: "Linking to local images in Gatsby frontmatter"
image: "https://i.ytimg.com/vi/dmgcUbz8gq8/maxresdefault.jpg"
date: "10/08/2017"
category: "Gatsby"
tags:
  - GraphQl
  - Gatsby
```

Gatsby allows you to use GraphQl to query your markdown files for data, passing that data into react components to dynamically create pages. Using a copy paste query from the tutorials, i was able to get my pages loading and using the image url as my image source

```GraphQl
query IndexQuery {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          tags
          date
          image
        }
      }
    }
  }
}
```

Everything was running smoothly and working great! But Gatsby is all about performance and optimization. One area it has great support for is optimizing image loading. Via some plugins that use the [sharp processing library](https://github.com/lovell/sharp) it can do some cool things like optimized caching techniques, support for creating the optimal size image for the screen resolution, and the [blur up technique](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/). None of these works when pulling an image from a URL client side, so instead I need to download it, process it with Gatsby, and serve it myself. Sure thing! There are plenty of examples for that. So, I set off to take one of my posts and try this out, downloading the file locally, and changing the frontmatter to

```yaml
title: "Linking to local images in Gatsby frontmatter"
image: "./gatsby-site-data.jpg"
date: "10/08/2017"
category: "Gatsby"
tags:
  - GraphQl
  - Gatsby
```

Cool, no errors. I go back to my hot reloaded browser and see no image. Strange, lets inspect in my browser. My image source is just "./gatsby-site-data.jpg" without any sort of relative link to my server along with a nice 404 in my network tab. Ok, let’s go back online to some tutorial. With some research, I find that I must get the actual source to the file in my GraphQl using the sharp library's GraphQl. I so change my GraphQl to something like this.

```GraphQl
query IndexQuery {
  edges {
    node {
      fields {
        slug
      }
      frontmatter {
        title
        tags
        date
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
}
```

Save, reload, and Bam! Error....

```
GraphQL Error Field "image" must not have a selection since type "String" has no subfields.
```

But... but... but... my image has subfields, it’s an image! This error is pretty clear in that the GraphQl expects a string, and as such, expects a primitive without any nested attributes like childImageSharp. At this point I spend about a week and a half looking through examples in the Gatsby repo [here](https://github.com/gatsbyjs/gatsby/tree/master/examples) and looking through the linked example sites on their readme. I even message the discord channel trying to figure out what happened. No luck...

Eventually, I let it go. The images are still being pulled, it still looks fine, why block my work on this one little nagging thing. So, I keep going. I work on some styling and organization of my site, but this keeps bugging me. One day, I try moving all my files to the pages directory, and just to simplify things, I delete all my posts except the one I'm trying to change the image source on. All of a sudden, I'm not getting that error. After adding back in the extra GraphQL I'm successfully loading the file from my local instead of from the url to the original source.

So, what happened?
