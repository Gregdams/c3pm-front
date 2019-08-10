# c3pm frontend

c3pm is packet manager for C++, based on modules. Please [see here]() for
more information.


## Summary

* Dependencies
* Deploy for development
* Deploy for production
* Overview


## Dependencies

Here are the versions this project is developed on:

```
$ node --version
v10.16.0

$ npm -g --version
6.10.3
```

While you are at the root of the repository, install the dependencies with:

```
$ npm i
```


## Deploy for development

Once the dependencies are installed, while at the root of the repository, run:

```
$ npm run dev
```

The website will now be available via the development server. The endpoint
URL will display on the terminal. ESLint errors will also be visible here.

**Instructions on how to connect to the backend are comming.**


## Deploy for production

There is nothing here for now.


## Overview

This front is based on [Next.js](https://nextjs.org/) so it is a
[React](https://fr.reactjs.org/) application. The code is typed thanks to
[Typescript](https://www.typescriptlang.org/).

The whole point is to query a [GraphQL](https://graphql.org/) endpoint
via [Apollo](https://www.apollographql.com/) and render a user interface
out of the retrieved data.

There is no UI framework used. However, we are using the
[BassCSS](https://basscss.com/) CSS toolkit.
