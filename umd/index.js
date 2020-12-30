!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).vanillaMessage=n()}(this,function(){"use strict";return function(f,u){return void 0===u&&(u=400),new Promise(function(n,t){var o=0,i=function(){var e=f();e?n(e):o<u?(o++,setTimeout(i,20+o)):t()};i()})}});
//# sourceMappingURL=index.js.map
