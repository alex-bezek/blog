<h1 align="center">Welcome to Alexbezek.io, my personal website and blog. 👋</h1>
<p>
  <a href="https://percy.io/alex-bezek/blog" target="_blank">
    <img alt="Version" src="https://percy.io/static/images/percy-badge.svg">
  </a>
  <a href="https://twitter.com/alex_bezek" target="_blank">
    <img alt="Twitter: alex_bezek" src="https://img.shields.io/twitter/follow/alex_bezek.svg?style=social" />
  </a>
</p>

> My Personal website and Blog for thinking outloud and documenting my thoughts for future me to cringe at.

### ✨ [Deployment](https://alexbezek.io)

## Local Development

```sh
clone https://github.com/alex-bezek/blog --recurse-submodules
cd blog
hugo new posts/a_new_post.md
hugo server -w
```

## Author

👤 **Alex Bezek**

* Website: https://alexbezek.io
* Github: [@alex-bezek](https://github.com/alex-bezek)
* LinkedIn: [@alexander-bezek-b1993b100](https://linkedin.com/in/alexander-bezek-b1993b100)
* Twitter: [@alex\_bezek](https://twitter.com/alex_bezek)

## 🤝 Contributing

Contributions, issues and feature requests are welcome (especially spelling fixes or telling me i'm wrong somewhere)!<br />Feel free to check [issues page](https://github.com/alex-bezek/blog/issues).

## 🚧🚧 Todo List 🚧🚧

Below is a hodge podge list of notes and issues I want to track but don't want to make full issues for yet.

* make a cool 404 page https://gohugo.io/templates/404/
* Posts list are alphabetical, but they should be chronological imo
* setup script that can optimize images or see if i can configure the bot. The sizes could be smaller and we can be more aggressive
* make github social preview https://www.d-hagemeier.com/en/articles/generate-social-media-preview-images/ and this https://medium.com/swlh/explore-new-github-readme-feature-7d5cc21bf02f
* images for cards don't always scale to all be the same height
* Make it so figures expand their images for viewing full screen
* Google Lighthouse
  * Random Articles:
    * https://martijnvanvreeden.nl/10-ways-to-improve-your-hugo-website-performance/
  * Performance:
    * Image size optimizations
      * Look into moving images into content folder so its part of the hugo asset pipeline
        * https://regisphilibert.com/blog/2018/01/hugo-page-resources-and-how-to-use-them/
        * https://scripter.co/hugo-leaf-and-branch-bundles/
        * https://github.com/spech66/hugo-best-practices#content-organization
    * Unused CSS in bootstrap.min.css (my domain) and all.min.css (cloudflare)
    * unused jquery (my domain)
    * perhaps bundle css/js without moving to webpack https://github.com/spech66/hugo-best-practices#css-and-javascript
    * preconnect to cloudflare for assets
    * Fix font loading
    * Images explicit width/height
    * perhaps lazy load disqus as it takes a while https://blog.kulman.sk/delaying-disqus-comments-to-save-requests/
  * Accessability:
    * Nav hamburger button needs accessible name or aria label https://web.dev/button-name/?utm_source=lighthouse&utm_medium=devtools
    * Avatar needs alt text (also for SEO)
    * Card images need alt
    * Card links need meaningful name https://web.dev/link-name/?utm_source=lighthouse&utm_medium=devtools
    * Read buttons on cards need more contrast
    * header elements don't follow semantic html ordering
    * Smooth scroll links in footer don't meet minumum 48x48 tap target size
    * Search form is missing a label
    * html is missing lang attribute on posts page
    * Search bar list UL contains a div
    * markdown `highlight` produces bad contrast ratio
  * Progressive web app
    * Looks like there is no auto install, need to setup a manifest and service worker. Will need to be able to include the script in the html though
  * SEO
    * Posts page missing meta description
    * https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags
    * site map, keyword searches, robots.txt
    * https://schema.org/ https://github.com/spech66/hugo-best-practices#add-a-schemaorg-partial
    * https://seorch.de/ https://varvy.com/
    * https://github.com/thedaviddias/Front-End-Checklist

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_