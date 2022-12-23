## Modernizr

[Modernizr](https://modernizr.com/) detects which features a browser can use and provides helper classes for progressive enhancement. Our base Modernizr file includes:

* CSS Grid (old & new)
  * Includes `.cssgrid` and `.no-cssgrid`, `.cssgridlegacy` and `.no-cssgridlegacy`
  * Detects when css grid is available, allowing you to use `.no-cssgrid` for fallbacks to a more traditional grid.
  * CSS Grid Legacy is used for older version of CSS Grid that can be found in IE11 and earlier. Recommended to have these default to the same fallback as `.no-cssgrid`, but there are usecases when you will want to use the legacy features.
* CSS Animations
  * Includes `.cssanimations` and `.no-cssanimations`
  * These are useful for animation states, especially for animations that need to have a 'forwards' state.
* CSS 3D Transforms
  * Includes `.csstransforms3d` and `.no-csstransforms3d`
  * These are useful for animation states and more complex transitions.

To update your modernizr file to accommodate for additional browser detection visit the website and [create your own custom build](https://modernizr.com/download?setclasses). Be sure to include the items listed above so that you do not lose any functionality.
