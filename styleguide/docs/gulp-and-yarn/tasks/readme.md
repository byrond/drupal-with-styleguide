## Available Tasks and Functions

We use `yarn` to run our gulp tasks.

### Tasks
Tasks are the main commands you will run while working on the project.

* `yarn develop` or `yarn watch`: This is the main task you will use when you are working on the style guide. It runs the `watch` task which `build`s our files by cleaning out image, css, js, and fonts directories and then it compiles and minifies the library and custom js, minifies images, compiles, prefixes, and minifies css, lints our sass, js, and runs an accessibility audit. Once the build command is finished, `Patternlab` is built and served to the browser. Finally, it watches all files for changes.
* `yarn deploy`: Runs `build` and `deploy` to ensure an up-to-date version of the site is pushed to gh-pages.
* `yarn format`: Formats js files using prettier.


### Functions
Functions are discrete items that are used in the above tasks.

* `cleanImages`, `cleanCSS`, `cleanJS`, `cleanFonts`: Cleans out `/assets` directory.
* `compileCustomJS`: Looks for scripts in `source/assets/js/site` and in the patterns directory, concatenates and minifies them.
* `compileLibraryJS`: Looks for scripts in `source/assets/js/libraries`, concatenates and minifies them.
* `minifyImgs`: Looks for image files in `source/assets/imgs` and in the patterns directory, minifies them, and moves them to `dist/production`.
* `compileCSS`: Looks for scss files throughout the project, creates a sourcemap, compiles into css, autoprefixes, and minifies that css, and moves it to public.
* `buildPatterns`: Generates patternlab templates and reloads the browser.
* `watchPatterns`: Generates patternlab templates and reloads the browser and watches the files.
* `server`: Creates a browsersync server for patternlab files.
* `browserServe`: Serves files to `server` using browser-sync.
* `browserReload`: Reloads files to `server` using broswer-sync.
* `lintSass`: Lints SCSS files based on a set of rules.
* `lintJS`: Lints JS and jQuery files based on a set of rules.
* `accessibilityAudit`: Audits the accessibility of the site, ignoring some key files, based on a set of rules.
* `watchFiles`: Watches a set of files for changes (HTML, Twig, SCSS, JS, MD, YML, Assets).
* `createGHPages`: Deploys the public directory to gh-pages.
* `prettier`: Formats js files.
