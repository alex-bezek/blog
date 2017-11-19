---
title: "Microsoft SQL Server Linux Docker Errors"
image: "./SQL-Loves-Linux_2_Twitter-002.png"
date: "10/10/2017"
category: "Devops"
tags:
  - .Net
  - Microsoft
  - docker
---

Microsoft SQL Server in a linux based container...WHAAAAA? Thats rights. This may be old news for some, but Microsoft released a Docker image that allows you to run a MSSQL in a docker on your mac (or linux based) computer. Probably small news for most people, but for our team it was kind of awesome.

#### Background
My team's current project has been to create a new Rails based application on top of an existing .Net SQL server. Thankfully, rails (and its community) is awesome and implements an adapter type interface to Active Record, and a corresponding gem to implement that interface. https://github.com/rails-sqlserver/activerecord-sqlserver-adapter

So along with this idea of setting a rails service over a .Net database (cringe worthy to some I'm sure), I also made the decision to make our UNIT tests hit our database... If you haven't hit `ctr + w` to close this post yet, bear with me. I swear I had reasons...I made 30+ models, mapping to our tables, and using [shoulda matchers](https://github.com/thoughtbot/shoulda-matchers) (an awesome library for your model tests if you haven't tried it) which verifies all your models and their relations in memory. Boot up `rails console`, lo and behold nothing works. So unfortunately, most of our tests have to hit our legacy DB to have much validity to them. We also have lots of untested constraints, functions, and stored procedures we want to verify.

#### What we had to deal with
So when we build a rails service that depends on a database that can only run on windows device what happens? Well your development environment and unit test environment also depend on that environment. Not a big deal when you have 5 people working. But when that group expands you have to adapt.

#### What happened
With this idea, we had a small man group of 5 engineers, working together, coordinating when pushes and test would happen, and over the course of 6 months our engineering team exploded into over 30+ engineers needing to contribute to this repository. Do you know what happens when someone running a test against a shared DB executes a `ctrl z`? Well if its in the middle of a rspec unit test (which locks a table so it can roll it back for unit test purposes) it locks the table from everyone else. Needless to say, this cause lots of issues...

So we eventually knowledge transfer to everyone and explain how doing that is bad. But we still get a really annoying issue... We  have alot of associates in remote offices. If you try to run tests, they have to reach out to a remote server to do so. And they take up to 45  minutes now they say! That is just unbearable. Luckily... docker fixes it!

#### The Technical Part
If you were googling for an answer, this part is it. To solve the shared DB issue, we found we could run a .NET Sql server locally in a docker container. Using [this docker image](https://hub.docker.com/r/microsoft/mssql-server-linux/) we can pretty easily configure out schema inside it using a .bak file, and run tests locally against it. It does have a specific requirement that most people don't go read before trying to run our tests.

`At least 3.25 GB of RAM. Make sure to assign enough memory to the Docker VM if you're running on Docker for Mac or Windows.`

Unfortunately, docker is pretty new to most people on our team. More often than not, they boot the container, it fails, and people don't know why. Even if we tell them to update to use 4GB of ram, this [github issue](https://github.com/docker/for-mac/issues/1354) is causing people issues whenever they update their docker version. So how do you troubleshoot this?

In a quickly growing team, my motto has be "teach people how to fish, don't hand them the meat". If you boot a container and it fails, you just need to know how to gather the logs from it.

First, just find the container that died. `docker ps` shows all the running containers, but adding the flag `-a` also shows the killed ones

```sh
docker ps -a
cd26b6cac46a my_sqlserver:latest     "/bin/sh -c /opt/m..."     1 months ago Exited (1)     1 months ago SQLSERVER

```

From there you want to figure out why it died. If its a decent container (like microsoft's) the logs should tell you why. Using the `docker logs ${docker id}` command should pinpoint the issue.

```sh
docker logs cd26b6cac46a
sqlservr: This program requires a machine with at least 3250 megabytes of memory.
```

So there you have it. A quite long winded article involving all my team's baggage, but hopefully pinpointing some issues not specific to us. If you get anything from this, let it not be how to troubleshoot a .Net SQLSever docker container, but rather how to troubleshoot your failing containers as a whole.
