<?php

/**
 * @file
 * Attaches library to template.
 */

/**
 * Attach library function.
 */
function addAttachLibraryFunction(\Twig_Environment &$env, $config) {
  $env->addFunction(new \Twig_SimpleFunction('attach_library', function ($string) {
    return;
  }));
}
