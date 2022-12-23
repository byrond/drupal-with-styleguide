## Setup and Troubleshooting.

### Requirements

* [Node](https://nodejs.org/en/) >=12.0 <=15
* [Yarn](https://yarnpkg.com/en/) >= 1.5

We use nvm to manage our node versions. For instructions on getting nvm and yarn installed, refer to the [development documentation](https://github.com/palantirnet/documentation/wiki/Node,-NPM,-and-Yarn).

### How to Get Started on your Projects

Once you've properly installed Node and Yarn, then copy the contents of this repo into your project root into a directory called `styleguide` or similar.

From the project or `/styleguide` root:

1. run `yarn install`.
1. run `yarn develop`.

### Troubleshooting

#### Gulp Errors
If you are running into gulp errors, there is a chance that you have an older version of gulp installed. We are using gulp v4.0, which may require you to update or uninstall your local version of gulp if you have one. In order to do that follow these steps:

**Uninstall Local Gulp** (_Recommended_)

In Terminal, check what global packages you have installed with `npm ls -g --depth=0`. You likely have `gulp` and `gulp-cli` installed. We will need to remove both. To do so:

1. `npm uninstall -g gulp`
2. `npm uninstall -g gulp-cli`
3. Check `npm ls -g --depth=0` again to make sure they were removed.

**Update Local Gulp**

If you have other projects that rely on a local version of gulp, you may want to just update your local version instead. `Gulp` v4.0 is backwards compatible with older versions.

1. `npm uninstall gulp -g`
2. `npm install gulp@next -g`

#### Other errors
First ensure that you have the proper versions of Node and NPM installed on your machine.

Try deleting your node_modules directory and re-running `yarn install`.
