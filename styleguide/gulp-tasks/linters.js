// Function: Linting js, scss, and twig files
// Description: function that will lint js file using terser from (https://www.npmjs.com/package/gulp-terser)

'use strict';

// Include gulp
const { src } = require('gulp');

// Include Our Plugins
const gulpStylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');
const log = require('fancylog');

// Export our tasks.
module.exports = {
  // Lint Sass based on .stylelintrc.yml config.
  lintSass: function () {
    log.info('Reviewing SCSS Files');
    return src([
      './source/assets/scss/*.scss', 
      './source/assets/scss/**/*.scss', 
      './source/_patterns/**/**/*.scss',
      '!source/assets/scss/pattern-scaffolding.scss',
      '!source/assets/scss/00-helpers/vertical-rhythm/*',
    ])
      .pipe(
        gulpStylelint({
          reporters: [
            {
              formatter: 'verbose',
              console: true
            }
          ]
        })
      );
  },

  // Lint JavaScript based on .eslintrc config.
  lintJS: function() {
    log.info('Reviewing JS Files');
    return src([
      './source/assets/js/site/*.js',
      './source/_patterns/**/**/*.js', 
      './source/_patterns/**/*.js', 
      './source/_patterns/*.js',
      '!./source/patterns/components/**/vendors/*'
    ])
      .pipe(eslint())
      .pipe(eslint.format());
  }
};
