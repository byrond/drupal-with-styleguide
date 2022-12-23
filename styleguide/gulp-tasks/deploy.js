'use strict';

// Include gulp
const { src, dest } = require('gulp');
const log = require('fancylog');
// Include Our Plugins
const deploy = require('gh-pages');

/**
 * Error handler function so we can see when errors happen.
 * @param {object} err error that was thrown
 * @returns {undefined}
 */
function handleError(err) {
  // eslint-disable-next-line no-console
  console.error(err.toString());
  this.emit('end');
}

// Export our tasks.
module.exports = {

  // Push build to gh-pages
  createGHPages: function(done) {
    log.info('Deploying to GH Pages');
    const deploynow = function() {
      deploy.publish(
        'public',
        function(err) {}
      ).then(() => {
        done();
      });
    };
    // Delay needed or not all assets get copied before push.
    setTimeout(deploynow, 2000);
  },
}
