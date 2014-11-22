# Melange

[![Build Status](https://travis-ci.org/avantdotorg/melange.svg?branch=master)](https://travis-ci.org/avantdotorg/melange)

>define melange - "a collection of items"

>Dune - "The spice must flow."

## avantdotorg browser client 2.0

## Style Guide

### File and Directory Names

- No camel case filenames! It's too easy for some developer to be working on a case insensitive OS while we build on a case *sensitive* OS and everything breaks and the last thing you think to check is the folder names.

- File names will include some reference to the type of their contents in the form of an abbreviated name.  This abbreviation will also be set off by periods.  Some examples:
  - for a template called "home" the file name would be `home.tmpl.js`
  - for a test for "sidebar" the file name would be `sidebar.test.js`
  - for an end-to-end test for "sidebar" the file name would be `sidebar.e2e.js`
  - for an "author" controller the file name would be `author.ctrl.js`
  - for a test for an "author" controller the file name would be `author.ctrl.test.js`
  - (an exhaustive list to follow)

- Each directory within `apps` maps 1-1 to a module (in our case an angular module -- look for ES6 modules when angular 2.0 comes of age).


## Jury is still out...

## Functional Modules, Route Modules, and Common Module:
### Everything is a service!

This is something I wanted to try out on v1.0 but never got around to it.  I want to decouple the funcationality modules from the route modules from a common module. I believe this will be made easier by the powerful state declarition of the angular-ui-route module.

Rough example of directory structure:

- _common
  - directives
  - //etc
- funcs
  - _common
    - directives
    - //etc
  - posts
    - show
    - list
    - new
    - edit
    - delete
- routes
  - admin
    - posts
      - manage
        - publish
        - search
      - create
        - new
        - edit
  - reader
    - posts
      - list
      - show


### node_modules

Update: I've already reversed my decision. Something about my checked in node_modules was causing Travis-CI to not find all the node_modules required. I highly suspect that it had to do with case insensitivity directory/file names on my mac while Travis-CI was running in Linux.

I'm decided to try checking in my node_modules (and other vendor libraries) into version control.  I've been burned so many times by dependencies not resolving (even when they are locked) that I'm gunna give this a go.

