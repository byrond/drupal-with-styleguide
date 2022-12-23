// @copyright Copyright (c) 2022 Palantir.net

// Include gulp helpers.
const { series, parallel, watch, build } = require('gulp');

// Include Pattern Lab and config.
const config = require('./patternlab-config.json');
const patternlab = require('@pattern-lab/core')(config);

// Include Our tasks.
//
// Each task is broken apart to it's own node module.
// Check out the ./gulp-tasks directory for more.
const { cleanImages, cleanCSS, cleanJS, cleanFonts } = require('./gulp-tasks/clean');
const { compileCustomJS, compileLibraryJS } = require('./gulp-tasks/js');
const { minifyImgs } = require('./gulp-tasks/images');
const { compileCSS } = require('./gulp-tasks/styles');
const { lintSass, lintJS } = require('./gulp-tasks/linters');
const { accessibilityAudit } = require('./gulp-tasks/accessibility');
const { buildPatterns, watchPatterns } = require('./gulp-tasks/patternlab');
const { watchFiles } = require('./gulp-tasks/watch');
const { browserServe, browserReload } = require('./gulp-tasks/serve');
const { createGHPages } = require('./gulp-tasks/deploy');
const { prettier } = require('./gulp-tasks/format');
const server =  require('browser-sync').create();

exports.browserServe = browserServe;
exports.watchFiles = watchFiles;

// Run an accessibility test on all html pages
exports.a11y = accessibilityAudit;
// Format JS files with Prettier and ESlint
exports.format = prettier;

// Build styleguide
exports.build = series(
  parallel(cleanImages, cleanCSS, cleanJS, cleanFonts),
  parallel(
    compileLibraryJS,
    compileCustomJS,
    minifyImgs,
    compileCSS,
  ),
  parallel(
    lintSass,
    lintJS,
  )
);

exports.watch = series(
  exports.build,
  buildPatterns,
  accessibilityAudit,
  exports.browserServe,
  exports.watchFiles,
);

exports.buildOnly = series(
  exports.build,
  buildPatterns,
);

// Build and deploy Patternlab styleguide to github pages
exports.deploy = series(
  exports.buildOnly,
  createGHPages
);



// Default Task
exports.default = exports.watch;
