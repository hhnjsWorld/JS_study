//let存在块级作用域
{
    let $ = (window.$ = {});
    $.web = "hhn";
    let url = "hhn.com";
    let site = "胡海宁";
    $.getUrl = function() {
        return url;
    };
    // $.site = function() {
    //     return site
    // }

}