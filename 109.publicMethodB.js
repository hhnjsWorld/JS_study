// function hhnA() {
//     console.log("showPublicMethodB的hhnA");
// }

// function hhnB() {
//     console.log("showPublicMethodB的hhnB");
// }
/* 立即执行函数 */
/* 作用域的概念这里是 是这样的()() */
(function(window) {
    function hhnA() {
        console.log("showPublicMethodB的hhnA");
    }

    function hhnB() {
        console.log("showPublicMethodB的hhnB");
    }
    window.publicMethodB = { hhnA, hhnB }
})(window);

{

    let hhn1 = function() {
        console.log('块级作用域生效C');
    }
    let hhn2 = function() {
        console.log('块级作用域生效D');
    }
    window.showBjs = { hhn1, hhn2 }
}