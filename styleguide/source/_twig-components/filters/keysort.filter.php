<?php

/**
 * @file
 * Sort an array by key.
 */

/**
 * Adds a key sory filter.
 */
function addKeySortFilter(\Twig_Environment &$env, $config) {
  $env->addFilter(new \Twig_SimpleFilter('keysort', function ($array) {
    ksort($array);
    return $array;
  }));
}
