# Personal Website ![example workflow](https://github.com/dvalentina/personal-website/actions/workflows/ci.yml/badge.svg)

:wave: I'm Danilova Valentina and this is the codebase of my personal website.

This project is deployed :rocket: and available at [dvalentina.me](http://dvalentina.me)!

## Features

The website is made as a landing page with the following features:

:speech_balloon: 4 main blocks: Introduction, Experience, Skills, and Contacts\
:iphone:&nbsp; Responsive layout\
:globe_with_meridians: Localization (eng/ru)\
:open_file_folder: CV download\
:envelope: Letter sending form\
:date: *Last update* feature

> The *last update* feature was really fun to make.\
Its text displays, how many days have passed since the last pull request to the *main* branch was merged.\
You can find it in the footer of the website.

## Tools & Technologies

In this project, I used [React](https://reactjs.org/) library for building a user interface and [Create-React-App](https://create-react-app.dev/) to start building an SPA.

The application's layout was implemented with [Material UI](https://mui.com/material-ui/getting-started/overview/) components.

Its localization is made with the help of the [react-i18next](https://react.i18next.com/) library.

The letter sending form is powered by [EmailJS](https://www.emailjs.com/).

The application runs on a [Node.js](https://nodejs.org/en/) environment, and [npm](https://www.npmjs.com/) manages its packages.

For strong typing of JavaScript, I used [TypeScript](https://www.typescriptlang.org/).

To maintain the quality and uniformity of the code, I relied on the help of [eslint](https://eslint.org/).

For version control, I used [Git](https://git-scm.com/) & [GitHub](https://github.com/).

The project is deployed on [GitHub Pages](https://pages.github.com/) and its CI/CD is done via [GitHub Actions](https://github.com/features/actions).

The last update feature uses [GitHub Events API](https://docs.github.com/en/rest/activity/events) for functioning.
