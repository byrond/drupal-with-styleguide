// Run an accessibility audit

'use strict';

// Include Our Plugins
const log = require('fancylog');
const pa11y = require('pa11y');
const fs = require("fs");

async function runPa11y(src) {
  try {
    const results = await pa11y(src,{
      standard: 'WCAG2AA',
      level: "error",
      log: {
        debug: console.log,
        error: console.error,
        info: console.info
      },
      runners: [
        'htmlcs'
      ],
      ignore: [
        // This rule:
        // The html element should have a lang or xml:lang attribute which describes the language of the document.
        // Ignoring because we can't control that in patternlab
        'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2',
        'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2'
      ]
    }).then((results) => {
      console.log(results);
    });
    // Do something with the results
  } catch (error) {
    // Handle the error
    console.log(error);
  }
  return src;
}

const walk = function(dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(walk(file));
    } else {
      /* Is a file */
      const name = file.split('/').pop();
      if (name === "index.html") {
        results.push(file);
      }
    }
  });
  return results;
}

// Export our tasks.
module.exports = {
  // Lint Sass based on .stylelintrc.yml config.
  accessibilityAudit: async function () {
    log.info('Auditing Accessibility');
    const files = walk("public/patterns");
    files.forEach((file) => {
      runPa11y(file);
    });
  }
};
