// Handle images
// Looks for image updates and Minifies them.

'use strict';

const { src, dest } = require('gulp');

// Include Our Plugins
const log = require('fancylog');
const imagemin = require('gulp-imagemin');

// Export our tasks.
module.exports = {

  // @TODO consider adjusting the compression quality to speed this process.
  minifyImgs: function() {
    log.info('Minifying Images');

    return src([
      './source/patterns/**/**/*{.png,.jpg,.svg}',
      './source/assets/images/*{.png,.jpg,.svg}'
    ])
      .pipe(
        imagemin({
          progressive: true,
          svgoPlugins: [
            {
              removeViewBox: false
            }
          ]
        })
      )
      .pipe(dest('./public/images'));
  }
};
