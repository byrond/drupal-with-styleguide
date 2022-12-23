// Clean
// Description: Removing assets files before running other tasks

'use strict';

// Include Our Plugins
const del = require('del');
const log = require('fancylog');

// Export our tasks.
module.exports = {
  
  cleanImages: function() {
    log.info('Cleaning Images');
    return del(['./public/images/*'], { force: true });
  },
  
  cleanCSS: function() {
    log.info('Cleaning CSS');
    return del(['./public/css/*'], { force: true });
  },
  
  cleanJS: function() {
    log.info('Cleaning JS');
    return del(['./public/js/*'], { force: true });
  },
  
  cleanFonts: function() {
    log.info('Cleaning Fonts');
    return del(['./public/fonts/*'], { force: true });
  },
};
