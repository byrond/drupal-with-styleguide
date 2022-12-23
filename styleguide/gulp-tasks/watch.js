/**
 * Watch Sass, JS, and Image files.
 * @returns {undefined}
 */

'use strict';

// Include gulp
const {series, watch} = require('gulp');

// Include Pattern Lab and config.
const config = require('../patternlab-config.json');
const patternlab = require('@pattern-lab/core')(config);

// Include Our Plugins
const log = require('fancylog');
const { browserServe, browserReload } = require('./serve');
const { compileCSS } = require('./styles');
const { compileCustomJS, compileLibraryJS } = require('./js');
const { minifyImgs } = require('./images');
const { lintSass, lintJS } = require('./linters');
const { accessibilityAudit } = require('./accessibility');
const { buildPatterns } = require('./patternlab');


const server =  require('browser-sync').create();

// Export our tasks.
module.exports = {

  // Watch our Files
  watchFiles: function(done) {
    log.info('Watching for changes...');

    // watch CSS
    watch (
      ['source/assets/scss/*.scss', 'source/assets/scss/**/*.scss', 'source/_patterns/**/**/*.scss',],
      series(compileCSS, buildPatterns, lintSass, browserReload)
    ); 
    
    // watch Custom JS
    watch (
      ['source/assets/js/site/*.js', 'source/_patterns/**/**/*.js', 'source/_patterns/**/*.js', 'source/_patterns/*.js'],
      series(compileCustomJS, buildPatterns, lintJS, browserReload)
    );

    // watch Library JS
    watch (
      ['./source/assets/js/libraries/*.js'],
      series(compileLibraryJS, buildPatterns, browserReload)
    );

    // watch for Images
    watch (
      ['./source/_patterns/**/*{.png,.jpg,.svg}','./source/assets/images/*{.png,.jpg,.svg}'],
      series(minifyImgs, buildPatterns, browserReload)
    );

    // Reload the browser after patternlab updates.
    // @TODO This is what breaks the watch, fix.
    // patternlab.events.on('patternlab-build-end', () => {
    //   server.reload();
    // });

    // This is a fix for above ^ but it would be better to use the event.
    watch (
      ['source/_data/*.{twig,json,yaml,yml,md}', 'source/*.{twig,json,yaml,yml,md}', 'source/**/*.{twig,json,yaml,yml,md}','source/**/**/*.{twig,json,yaml,yml,md}'],
      { usePolling: true, interval: 1500 },
      series(buildPatterns, browserReload)
    );
  }
};
