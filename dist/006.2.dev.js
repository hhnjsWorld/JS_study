"use strict";

//let存在块级作用域
{
  var $ = window.$ = {};
  $.web = "hhn";
  var url = "hhn.com";
  var site = "胡海宁";

  $.getUrl = function () {
    return url;
  }; // $.site = function() {
  //     return site
  // }

}