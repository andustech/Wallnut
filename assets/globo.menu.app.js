var globoMenu=function(e){function n(n){for(var o,r,i=n[0],u=n[1],a=0,c=[];a<i.length;a++)r=i[a],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&c.push(t[r][0]),t[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(l&&l(n);c.length;)c.shift()()}var o={},t={3:0};function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(e){var n=[],o=t[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));n.push(o[2]=i);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+"globo.menu.bundle."+({0:"carousel",1:"index",2:"lazysizes",4:"render",5:"vendors-index"}[e]||e)+"."+{0:"39e3430a052c9e47f326",1:"a4ca9b42c0a79cfe2b0b",2:"73563a873f85a8f9ce8a",4:"dc8ab1075490a61f05de",5:"37f6e52e7364603146c9"}[e]+".min.js"}(e);var l=new Error;u=function(n){a.onerror=a.onload=null,clearTimeout(c);var o=t[e];if(0!==o){if(o){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}t[e]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(n)},r.m=e,r.c=o,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(o,t,function(n){return e[n]}.bind(null,t));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpgloboMenu=window.webpackJsonpgloboMenu||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var a=0;a<i.length;a++)n(i[a]);var l=u;return r(r.s=0)}([function(e,n,o){var t=window.Globo||{};if(t.Menu=t.Menu||{},o.p=window.assetsUrl,t.Menu={initialize:async function(){let e=[this.loadMainScript()];Promise.all(e).then(e=>{const{default:n}=e[0];Object.assign(this,n),this.initMenu(window.GloboMenuConfig)}).catch(e=>{console.log(e)})},loadMainScript:()=>Promise.all([o.e(5),o.e(1)]).then(o.bind(null,1)),...t.Menu},window.GloboMenuSignature&&window.GloboMenuConfig&&window.GloboMenuSignature==window.GloboMenuConfig.encode){const e=document.getElementsByTagName("head")[0].innerHTML;if(e&&e.indexOf("globo.menu.init.js")>=0)t.Menu.initialize();else{const e=document.querySelector("body");e&&e.innerHTML.indexOf("globo.menu.init.js")>=0&&t.Menu.initialize()}}}]);