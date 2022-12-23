// Serve
// Serve up the browsersync

'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const log = require('fancylog');
const server =  require('browser-sync').create();


module.exports = {
  
  // Handles Serving using Browsersync
  browserServe: function(done) {
    log.info('Syncing your Browsers');
    server.init({
      server: ['./public/'],
      notify: false,
      open: "local"
    });
    done();
  },
  // Handles reloading using Broswersync
  browserReload: function(done) {
    server.reload();
    done();
  },
};
