// var web = "hhn";
//以下面的写法引用的变量
(function() {
    var $ = (window.$ = {});
    $.web = "hhn";
    var url = "hhn.com";
    var site = '胡海宁'
    $.getUrl = function() {
        return url;
    };
    // $.site = function() {
    //     return site
    // }
}.bind(window)());