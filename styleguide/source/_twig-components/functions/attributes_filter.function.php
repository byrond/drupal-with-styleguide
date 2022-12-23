<?php

trait AttrsFilter {
  public function attrsFilter($args) {
    $attributes = '';

    if (!is_array($args)) {
      return $attributes;
    }

    foreach ($args as $key => $val) {
      $attributes .= $key . '="' . trim($val) . '" ';
    }

    return $attributes;
  }
}
