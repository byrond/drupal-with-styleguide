<?php

/**
 * @file
 * Drupal Render Filter Function.
 */

/**
 * Adds a Render Filter.
 */
function addRenderFilter(\Twig_Environment &$env, $config) {
  // Drupal Render filter.
  $env->addFilter(new \Twig_SimpleFilter('render', function ($string) {
    return $string;
  }));
}
