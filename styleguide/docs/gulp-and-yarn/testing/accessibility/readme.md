## Accessibility Testing

Run `yarn a11y` 
Note: This requires the lab to have been built before as it runs against the rendered HTML in the public directory.

We use [Gulp Accessibility](https://www.npmjs.com/package/gulp-accessibility) which uses [AccessSniff](https://github.com/yargalot/AccessSniff) and [HTML Codesniffer](http://github.com/squizlabs/HTML_CodeSniffer) to audit a set of HTML files for accessibility compliance for WCAG and Section 508. 

To view a full set of rules, please review [WCAG 2.1 standards](https://www.w3.org/TR/WCAG21/) and [Section 508](https://www.section508.gov/create/documents)
