## Modules
Included gulp modules are:

### Patternlab
* [pattern-lab](https://patternlab.io/): Pattern Lab is a frontend workshop environment that helps you build, view, test, and showcase your design system's UI components. This includes `cli`, `core`, `engine-twig-php`, `uikit-workshop`, and `create-pattern-lab`.

### Utility Modules
* [gulp](https://www.npmjs.com/package/gulp): Automates Development Workflow Tasks
* [gulp-changed](https://www.npmjs.com/package/gulp-changed): Helps ensure we are only processing files that have changed. 
* [gulp-concat](https://www.npmjs.com/package/gulp-concat): Concatenates Files
* [gulp-order](https://www.npmjs.com/package/gulp-order): allows you to reorder a stream of files using the same syntax as of `gulp.src`.
* [gulp-rename](https://www.npmjs.com/package/gulp-rename): Provides simple file renaming methods.
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps): Write inline source maps.
* [browser-sync](https://www.npmjs.com/package/browser-sync): Keep multiple browsers & devices in sync when building websites.
* [del](https://www.npmjs.com/package/del): Allows you to remove files with a Promise API.
* [fancy-log](https://www.npmjs.com/package/fancylog): Allows you to console log with nice output
* [plugin-error](https://www.npmjs.com/package/plugin-error): Error handling for Vinyl plugins.
* [require-dir](https://www.npmjs.com/package/require-dir): Node helper to `require()` directories. The directory's files are examined, and each one that can be `require()`'d is, and returned as part of a hash from that file's basename to its exported contents.
* [safe-buffer](https://www.npmjs.com/package/safe-buffer): The goal of this package is to provide a safe replacement for the node.js `Buffer`.
* [through2](https://www.npmjs.com/package/through2): A tiny wrapper around Node.js streams.Transform (Streams2/3) to avoid explicit subclassing noise

### For SCSS and Style Management
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss): Pipe CSS through several plugins, but parse CSS only once.
* [postcss](https://www.npmjs.com/package/postcss): Used by `gulp-postcss` to lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
* [gulp-sass](https://www.npmjs.com/package/gulp-sass): Compile .scss files to css
* [gulp-sass-glob](https://www.npmjs.com/package/gulp-sass-glob): allows `gulp-sass` to use glob imports.
* [autoprefixer](https://www.npmjs.com/package/autoprefixer): Used by `postcss` to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
* [stylelint](https://www.npmjs.com/package/stylelint): A mighty, modern linter that helps you avoid errors and enforce conventions in your styles. See `.stylelintrc.yml` for rules.
* [stylelint-scss](https://www.npmjs.com/package/stylelint-scss): A collection of SCSS specific linting rules for `stylelint`.

### For JS Management
* [gulp-babel](https://www.npmjs.com/package/gulp-babel): A Javascript compiler that allows you to use next generation JS.
* [gulp-eslint](https://www.npmjs.com/package/gulp-eslint): A gulp plugin for [ESLint](https://eslint.org/), a pluggable linting utility for JavaScript and JSX
* [gulp-uglify-es](https://www.npmjs.com/package/gulp-uglify-es): gulp stream to uglify with 'terser'
* [prettier](https://www.npmjs.com/package/prettier): Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
* [prettier-eslint](https://www.npmjs.com/package/prettier-eslint): This formats your code via `prettier`, and then passes the result of that to `eslint --fix`. This way you can get the benefits of prettier's superior formatting capabilities, but also benefit from the configuration capabilities of eslint.

### For Image Management
* [gulp-imagemin](https://www.npmjs.com/package/imagemin): Minify images seamlessly

### For Accessibility
* [gulp-accessibility](https://www.npmjs.com/package/gulp-accessibility): A gulp plugin that uses [AccessSniff](https://github.com/yargalot/AccessSniff) and [HTML Codesniffer](http://github.com/squizlabs/HTML_CodeSniffer) to audit a set of HTML files for accessibility compliance. 

## For Deploying the Style Guide
* [gh-pages](https://www.npmjs.com/package/gh-pages): Publish files to a `gh-pages` branch on GitHub (or any other branch anywhere else).

_The following modules are not used in the gulpfile, but are included in the styles. Read more about them in the Sass section of the readme._

* support-for
* breakpoint-sass
* normalize.css
