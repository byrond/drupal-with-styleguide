// Handle Sass and CSS
// Description: Creates css sourcemap, compiles sass into css, prefixes that with autoprefixer

'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const log = require('fancylog');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const prefix = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

// Export our tasks.
module.exports = {
  
  // Handle Custom scripts
  // Description: Minifies Custom Scripts
  compileCSS: function() {
    log.info('Prefixing & Compiling Sass into CSS');
    // Look for all scripts in source/assets/js/site and in any patterns
    return src(['source/assets/scss/*.scss', 'source/assets/scss/**/*.scss', './source/_patterns/**/**/*.scss'], { allowEmpty: true })
      // Initialize Source Mapping
      .pipe(sourcemaps.init())
      // Glob the scss.
      .pipe(sassGlob())
      // Compress the sass.
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      // Now run Post css which will minify and autoprefix.
      .pipe(postcss([ prefix() ]))
      // // And give it a suffix
      .pipe(rename({suffix: '.min'}))
      // Complete writing the source map
      .pipe(sourcemaps.write('./'))
      // Place it in our destination folder
      .pipe(dest('./source/assets/css'));
  }
};
