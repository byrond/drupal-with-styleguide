// Run an accessibility audit

'use strict';

// Include gulp
const { src } = require('gulp');

// Include Our Plugins
const log = require('fancylog');
const accessibility = require('gulp-accessibility');

// Export our tasks.
module.exports = {
  // Lint Sass based on .stylelintrc.yml config.
  accessibilityAudit: function () {
    log.info('Auditing Accessibility');
    return src([
      "public/patterns/**/*.html",
      "!public/patterns/**/*.markup-only.html",
      "!public/patterns/**/index.html",
      "!public/patterns/base/*",
      "!public/patterns/elements/*",
      "!public/patterns/components/*",
      "!public/patterns/templates/*",
      "!public/patterns/pages/*",
      "!public/patterns/elements-forms/*.html",
      "!public/patterns/elements-forms-*/*.html",
      "!public/patterns/base-colors/*.html"
    ])
    .pipe(accessibility({
      force: true,
      accessibilityLevel: 'WCAG2AA',
      reportLevels: { notice: false, warning: false, error: true },
      ignore: [
        // This rule:
        // The html element should have a lang or xml:lang attribute which describes the language of the document.
        // Ignoring because we can't control that in patternlab
        'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2',
        'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2'
      ]
    }))
    .on('error', console.log)
  }
};
