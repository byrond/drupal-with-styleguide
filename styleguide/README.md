# The Palantir Styleguide Starter Kit
This repository houses our front-end toolkit for designing in the browser.

## General Guidelines:
1. Use [BEM](http://getbem.com/introduction/)
1. Use YML instead of JSON
1. Only use `&` for pseudo-elements
1. Use longhand properties
    * `flex-basis: 0;`
    * `flex-grow: 1;`
    * `flex-shrink: 1;`
1. Each component could have 
    * `.scss`
    * `.js`
    * `.yml`
    * `.twig`
    * `.md`

## Quick Start

### Requirements

* [Node](https://nodejs.org/en/) >=12.0 <=15
* [Yarn](https://yarnpkg.com/en/) >= 1.5

We use nvm to manage our node versions. For instructions on getting nvm and yarn installed, refer to the [development documentation](https://github.com/palantirnet/documentation/wiki/Node,-NPM,-and-Yarn).

### How to Get Started on your Projects

Once you've properly installed Node and Yarn, then copy the contents of this repo into your project root into a directory called `styleguide` or similar.

From the project or `/styleguide` root:

1. run `yarn install`.
1. run `yarn develop`.

## Documentation

1. [About](docs/about)
    * [Setup and Troubleshooting](docs/about/setup/)
2. [Gulp and Yarn](docs/gulp-and-yarn/)
    * [Tasks](docs/gulp-and-yarn/tasks/)
    * Test Tasks
        * [SCSS Lint](docs/gulp-and-yarn/testing/scss-lint/)
        * [JS Lint](docs/gulp-and-yarn/testing/js-lint/)
        * [Accessibility Testing](docs/gulp-and-yarn/testing/accessibility/)
    * [Modules](docs/gulp-and-yarn/modules/)
3. SCSS
    * [Custom Base Helpers](docs/scss/custom-base-helpers/)
    * [Imported Helpers](docs/scss/imported-helpers/)
    * [CSS Grid](docs/scss/css-grid/)
    * [Modernizr](docs/scss/modernizr/)

Copyright (c) 2022 Palantir.net
