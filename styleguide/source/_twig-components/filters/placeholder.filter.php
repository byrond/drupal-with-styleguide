<?php

/**
 * @file
 * Placeholder filter function.
 */

/**
 * Adds a placeholder filter.
 */
function addPlaceholderFilter(\Twig_Environment &$env, $config) {
  $env->addFilter(new \Twig_SimpleFilter('placeholder', function ($string) {
    return $string;
  }));
}
