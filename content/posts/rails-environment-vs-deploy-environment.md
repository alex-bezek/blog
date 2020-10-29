---
title: Rails Environment VS Deploy Environment
hero: /images/posts/rails-environment-vs-deploy-environment/rails.png
date: 2019-05-09T00:00:00.000Z
description: Understanding Rails environment settings vs real deployment environments
menu:
  sidebar:
    name: Rails vs Deploy Environments
    identifier: rails-environment-vs-deploy-environment
    weight: 500
---

When the same verbiage is used in multiple contexts, it can be uber confusing for new people. On my team, I recall over the years that the majority of people getting started with us get caught up briefly on the difference between the Rails Environments concept, vs our concept of deploying to multiple environments (like dev, staging, prod, etc).

For people brand new to the industry, the idea of multiple deployment environments may be the new part. The idea is fairly simple (and hopefully fairly common for cloud based software at least). If you have your code deployed somewhere that your clients/users utilize as the live environment, you need at least a secondary environment to deploy and test code before it releases. People often coin these as Dev and Prod. They should be as similar as possible. The code should execute the same, and if possible, the infrastructure should be the same.

Rails also has a concept of Environments, however, they mean something completely different. Out of the box, rails comes with 3 environments: Development, Test, and Production. With a new rails app, there is a file under `config/environments/*.rb` that correlates to the environment its named after. In each one, it contains specific code and settings that affect how rails works.

The confusing part for many, is that development.rb is NOT used when deployed to the dev environment (typically, and hopefully). Production.rb is used anytime its deployed. Like we said before, its ideal for code in the deployed dev and prod environments to run as similarly as possible.

The rails development environment is actually used for running locally, while production is used for anytime deploying. While it would be ideal to run your code locally and develop in an environment as similar as possible to how you run in production, in practice, this hinders your local dev speed quite a bit.

Specifically, when developing locally, running rails in development mode has a few advantages. Some of the ones you would notice almost immediately lacking if you tried developing in production mode area

* automatically reloading code in the app folder when edited.
* compiling assets on the fly when edited instead of building a single static bundle.
* error screens with stack traces and details about the error.

The other primary environment rails comes with configured is the test environment. This is used when running unit tests like rspec or mini test. These files all come with pre-set configurations and can also be added to with more config, or actual code to customize them more.

#### So what led to confusion?

Often times, this problem comes up because the engineer has a task to make some functionality different between each environment (maybe call a different downstream endpoint or something). And so its a pretty clear first choice to turn to the development production config files glaring one in the face.

So how would you go about flexing some minor config per deployment environment? Well one way would be to actually setup a new environment type for each deployable environment via using [rails environments](https://guides.rubyonrails.org/configuring.html#creating-rails-environments). The config could be a clone (or re-use the production config to keep things consistent) of the production config, with minor tweaks per new environment.

This would work fine for a shop with maybe just a dev and prod environment. However, if you start to expand, and have numerous environments you deploy to, this starts to break down. For example, at our company we have a dev, staging, and production. But we also have a production in 4 different global regions. And then in most global regions, we deploy to multiple zones (different cloud providers). Each one requires different config in order to set up the app or service to communicate with the infrastructure and other services in that deployment zone.

In order to flex config for any environment without having to make code changes, and release a new artifact, its advisable to follow the [12 factor app](https://12factor.net/) pattern. With Rails, this means, you always run in production mode everywhere, and you utilize environment variables to flex key configuration in each deployment region.