<?php

/**
 * @file
 * Filter by attributes.
 */

function addAttrsFilter(\Twig_Environment &$env, $config) {
  $env->addFilter(new \Twig_SimpleFilter('attrs', function ($args) {
    $attributes = '';

    if (!is_array($args)) {
      return $attributes;
    }

    foreach ($args as $key => $val) {
      $attributes .= $key . '="' . trim($val) . '" ';
    }

    return $attributes;
  }));
}
