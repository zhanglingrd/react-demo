webpackJsonp([3],{255:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e,t,r){for(var n=!0;n;){var o=e,u=t,i=r;n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var c=a.get;if(void 0===c)return;return c.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=u,r=i,n=!0,a=l=void 0}},c=r(5),l=n(c),f=function(e){function t(){o(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return u(t,e),i(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement("h2",null,"Message ",this.props.params.id))}}]),t}(c.Component);e.exports=f}});