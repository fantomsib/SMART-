!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=2)}([,,function(t,e,n){"use strict";n.r(e);n(3),n(4),n(5)},function(t,e,n){},function(t,e){console.log("this is skills module")},function(t,e,n){"use strict";!function(t,e){document.querySelector(t);var n=document.querySelector(".slider-wrapper"),r=document.querySelector(".clients-item"),o=document.querySelectorAll(".button-slider"),i=(document.querySelector(".btn-left"),document.querySelector(".btn-right"),parseFloat(getComputedStyle(n).width)),u=parseFloat(getComputedStyle(r[0]).width),a=0,c=0,l=u/i*100,s=[];sliderItems.forEach(function(t,e){s.push({item:t,position:e,transform:0})});var f={getItemMin:function(){var t=0;return s.forEach(function(e,n){e.position<s[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return s.forEach(function(e,n){e.position>s[t].position&&(t=n)}),t},getMin:function(){return s[f.getItemMin()].position},getMax:function(){return s[f.getItemMax()].position}},d=function(t){var e;"right"===t&&(++a+i/u-1>f.getMax()&&(e=f.getItemMin(),s[e].position=f.getMax()+1,s[e].transform+=100*s.length,s[e].item.style.transform="translateX("+s[e].transform+"%)"),c-=l),"left"===t&&(--a<f.getMin()&&(e=f.getItemMax(),s[e].position=f.getMin()-1,s[e].transform-=100*s.length,s[e].item.style.transform="translateX("+s[e].transform+"%)"),c+=l),n.style.transform="translateX("+c+"%)"},m=function(t){if(t.target.classList.contains(".button-slider")){t.preventDefault();var e=t.target.classList.contains("btn-right")?"right":"left";d(e)}};o.forEach(function(t){t.addEventListener("click",m)})}(".slider")}]);