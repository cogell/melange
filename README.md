# Melange

[![Build Status](https://travis-ci.org/avantdotorg/melange.svg?branch=master)](https://travis-ci.org/avantdotorg/melange)

>define melange - "a collection of items"

>Dune - "The spice must flow."

## avantdotorg browser client 2.0

## Style Guide

### File and Directory Names

## Jury is still out...

### Docker/fig Workflow

There is limited support currently for a `fig up` developer workflow.  Currently we are using a latest version of nodejs trusted box from docker.  This could cause the app to break with newly updated nodejs versions.  If devs enjoy the docker workflow (or we use it heavily in conducting CI) we should lock down the OS and node versions of the docker image and maintain it in engineering.

### node_modules

Update: I've already reversed my decision.  Something about my checked in node_modules was causing Travis-CI to not find all the node_modules required.  I highly suspect that it had to do with case insensitivity directory/file names on my mac while Travis-CI was running in Linux.

I'm decided to try checking in my node_modules (and other vendor libraries) into version control.  I've been burned so many times by dependencies not resolving (even when they are locked) that I'm gunna give this a go.

