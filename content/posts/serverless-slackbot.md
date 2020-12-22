---
title: "Serverless Slackbot"
hero: /images/posts/serverless-slackbot/hero.jpg
date: 2020-11-02T09:52:20-05:00
description: A guide to making a slackbot using serverless
menu:
  sidebar:
    name: "Serverless Slackbot"
    identifier: serverless-slackbot
    weight: 500
---

My friends and I have our own slack instance setup for keeping in touch and chatting. We are all programmers, so we are frequently looking for some side project to mess around with for fun and maybe one day profit. One day we decided that tinkering with a slack bot would be interesting. We didn't have any grand plans of functionality to save us hours of time a week. Instead we just wanted to get something started to build on as ideas came. To start off, we just wanted to have a simple shortcut slash command for common gifs we used in response to each other.

Creating a slack bot is a pretty well documented process so this isn't going to try to top those. Rather, I want to go over what I did a bit unique from others, specifically around deployments and hosting. Most articles have you host the Slackbot on a running server somewhere like Heroku. However, for my side projects, I strongly prefer to explore any serverless options if possible. Not only are they easier usually to manage, but the serverless billing model fits perfectly for side projects without much use. I don't want to pay for a running server for 100% uptime when the bot is hardly ever used. And I don't want to deal with Heroku's free tier limits.

### Limitations

Before getting into the details, I do want to preface this noting that this approach does come with inherent limitations on the functionality you can provide. Slack offers multiple ways for your bot to interact with it. One such way is the slack [Real Time Messaging](https://api.slack.com/rtm) API (RTM) which is websocket based. This means it needs to maintain a persistent connection between slack and your bot, meaning you need some sort of persistent server. I believe some of the more advanced Slackbot integrations specifically around [interactivity](https://api.slack.com/interactivity) require this.

However, we didn't really need this for what we wanted to do. We wanted to create a couple of [slash commands](https://api.slack.com/interactivity/slash-commands) and different [events](https://api.slack.com/events-api) like if the bot was mentioned. These implementations have Slack invoke an API you provide when these happen instead of having to maintain a websocket connection. This works perfectly for us because it allows our backend to be serverless and just be invoked when needed.

So if you need to use the full RTM API, this article won't work. As of now I haven't looked into trying to use serverless for the websocket approach. The one idea I have is now that [AWS API Gateway supports websockets](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html) it might be possible to use that as your persisted connection. If you have seen an article doing this or know about it yourself, I'd love for you to drop a comment.

With that disclaimer out of the way, lets get started!

### Get setup

For this article, we will create 2 basic pieces of functionality.
* A "slash command" so when you type `/hello` in slack, the bot responds with a gif
* If the bot's name is mentioned, it responds with hello and mentions the person in that channel

To do these, we need 2 separate API's to register in slack to be called when either of the above situations happen.

Create a new slack app https://api.slack.com/apps and add it to your workspace and enable it as a bot
Enable the slash commands
Enable Event subscriptions and subscribe to the app_mention event
Grant it Oauth & Permissions for: chat:write, users.profile:read

Deploy using vercel https://vercel.com/docs/serverless-functions/introduction make a file /api/slash.js and /api/events.js


Environment variables
```
{
  "env": {
    "SLACK_SIGNING_SECRET": "@slack_signing_secret",
    "SLACK_OAUTH_ACCESS_TOKEN": "@slack_oauth_access_token",
    "SLACK_BOT_USER_OAUTH_ACCESS_TOKEN": "@slack_bot_user_oauth_access_token"
  }
}
```

Dependencies
```
    "@slack/events-api": "^2.3.0",
    "@slack/web-api": "^5.1.0",
```

Use https://github.com/slackapi/node-slack-sdk and pull the verify request logic from it