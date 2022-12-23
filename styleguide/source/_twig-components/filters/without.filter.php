<?php

/**
 * @file
 * Without Filter Addition.
 */

/**
 * Add Without filter Function.
 */
function addWithoutFilter(\Twig_Environment &$env, $config) {
  $env->addFilter(new Twig_SimpleFilter('without', function ($string) {
    return $string;
  }));
}
