<?php

/**
 * @file
 * Adds clean id filters.
 */

/**
 * Clean ID filter function.
 */
function addCleanIdFilter(\Twig_Environment &$env, $config) {
  $env->addFilter(new \Twig_SimpleFilter('clean_id', function ($string) {
    return $string;
  }));
}
