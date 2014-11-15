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

### node_modules

I'm decided to try checking in my node_modules (and other vendor libraries) into version control.  I've been burned so many times by dependencies not resolving (even when they are locked) that I'm gunna give this a go.

