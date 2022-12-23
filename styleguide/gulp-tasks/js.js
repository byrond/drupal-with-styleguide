// Handle Custom scripts
// Description: Minifies Custom Scripts
// function customScripts() {

'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const log = require('fancylog');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const order = require('gulp-order');

// Export our tasks.
module.exports = {
  
  // Handle Custom scripts
  // Description: Minifies Custom Scripts
  compileCustomJS: function() {
    log.info('Compiling and Minifying Custom JS');
    // Look for all scripts in source/assets/js/site and in any patterns
    return src(['./source/assets/js/site/*.js', 'source/_patterns/**/**/*.js', 'source/_patterns/**/*.js', 'source/_patterns/*.js'], { allowEmpty: true, base: './' })
      // Initialize Source Mapping
      .pipe(sourcemaps.init())
      // // Make sure it is backwards compatible
      .pipe(babel())
      // // Concatenate them together into one js file.
      .pipe(concat('custom.js'))
      // // Minify that file
      .pipe(uglify())
      // // And give it a suffix
      .pipe(rename({suffix: '.min'}))
      // Complete writing the source map
      .pipe(sourcemaps.write('./'))
      // Place it in our destination folder
      .pipe(dest('./source/assets/js'));
  },
  
  // Handle library scripts
  // Description: Minifies library Scripts
  compileLibraryJS: function() {
    log.info('Compiling and Minifying Library JS');
    // Look for all scripts in source/assets/js/libraries
    return src(['./source/assets/js/libraries/*.js'], { allowEmpty: true, base: './' })
      // Initialize Source Mapping
      .pipe(sourcemaps.init())
      // // Make sure it is backwards compatible
      .pipe(babel())
      // // Concatenate them together into one js file.
      .pipe(concat('libraries.js'))
      // // Minify that file
      .pipe(uglify())
      // // And give it a suffix
      .pipe(rename({suffix: '.min'}))
      // Complete writing the source map
      .pipe(sourcemaps.write('./'))
      // Place it in our destination folder
      .pipe(dest('./source/assets/js'));
  }
};
