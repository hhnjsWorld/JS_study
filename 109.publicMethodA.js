// function hhnA() {
//     console.log("showPublicMethodA的hhnA");
// }

// function hhnB() {
//     console.log("showPublicMethodB的hhnB");
// }

/* 私有作用域命名空间 */

(function(window) {
    function hhnA() {
        console.log("showPublicMethodA的hhnA");
    }

    function hhnB() {
        console.log("showPublicMethodA的hhnB");
    }
    window.publicMethodA = { hhnA, hhnB };
})(window);

/* 块级作用于的概念 */
/* 通过window传递 */
{

    let hhn1 = function() {
        console.log('块级作用域生效A');
    };
    let hhn2 = function() {
        console.log('块级作用域生效B');
    };
    /* 私有作用块命名对对象的命名 */
    window.showAjs = { hhn1, hhn2 }
}