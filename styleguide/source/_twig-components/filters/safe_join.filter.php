<?php

/**
 * @file
 * Safe Join Filter.
 */

/**
 * Safe Join Filter Function.
 */
function addSafeJoinFilter(\Twig_Environment &$env, $config) {
  // Drupal Safe Join filter.
  $env->addFilter(new \Twig_SimpleFilter('safe_join', function ($string) {
    return $string;
  }));
}
