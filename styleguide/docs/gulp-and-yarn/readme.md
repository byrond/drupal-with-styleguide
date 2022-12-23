## Gulp

Our gulpfile stores it's settings in the package.json file so that we have a single source. We are using gulp v4.0, which may require you to update or uninstall your local version of gulp if you have one. In order to do that follow these steps:

**Uninstall Local Gulp** (_Recommended_)

In Terminal, check what global packages you have installed with `npm ls -g --depth=0`. You likely have `gulp` and `gulp-cli` installed. We will need to remove both. To do so:

1. `npm uninstall -g gulp`
2. `npm uninstall -g gulp-cli`
3. Check `npm ls -g --depth=0` again to make sure they were removed.

**Update Local Gulp**

If you have other projects that rely on a local version of gulp, you may want to just update your local version instead. `Gulp` v4.0 is backwards compatible with older versions.

1. `npm uninstall gulp -g`
2. `npm install gulp@next -g`

### Section Contents
1. [Tasks](tasks)
1. Testing Tasks
    1. [HTML Lint](testing/html-lint)
    1. [JS Lint](testing/js-lint)
    1. [SCSS Lint](testing/scss-lint)
    1. [Accessibility](testing/accessibility)
1. [Modules](modules)
