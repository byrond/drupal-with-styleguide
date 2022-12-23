// Run an accessibility audit

'use strict';

// Include gulp
const { series, parallel, watch, build } = require('gulp');

// Include Our Plugins
const log = require('fancylog');
const config = require('../patternlab-config.json');
const patternlab = require('@pattern-lab/core')(config);


// Export our tasks.
module.exports = {
  // build patternlab
  buildPatterns: function (done) {
    log.info('Building Patternlab');
    patternlab
      .build({
        cleanPublic: config.cleanPublic,
        watch: false
      })
      .then(() => {
        done();
      });
  },
  
  // watch patternlab
  watchPatterns: function (done) {
    log.info('Building Patternlab');
    patternlab
      .build({
        cleanPublic: config.cleanPublic,
        watch: true
      })
      .then(() => {
        done();
      });
  }
};
