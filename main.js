(()=>{"use strict";var e={892:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(354),a=r.n(n),s=r(314),o=r.n(s)()(a());o.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;QACQ,CAAA",sourcesContent:["// extracted by mini-css-extract-plugin\nexport {};"],sourceRoot:""}]);const i=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},354:e=>{e.exports=function(e){var t=e[1],r=e[3];if(!r)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),s="/*# ".concat(a," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},o=[],i=0;i<e.length;i++){var c=e[i],u=n.base?c[0]+n.base:c[0],d=s[u]||0,l="".concat(u," ").concat(d);s[u]=d+1;var p=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=a(f,n);n.byIndex=i,t.splice(i,0,{identifier:l,updater:v,references:1})}o.push(l)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var s=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var i=r(s[o]);t[i].references--}for(var c=n(e,a),u=0;u<s.length;u++){var d=r(s[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n=r(72),a=r.n(n),s=r(825),o=r.n(s),i=r(659),c=r.n(i),u=r(56),d=r.n(u),l=r(540),p=r.n(l),f=r(113),v=r.n(f),m=r(892),h={};h.styleTagTransform=v(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),a()(m.A,h),m.A&&m.A.locals&&m.A.locals;const y=document.querySelectorAll("input"),g=document.querySelectorAll("input[type='password']"),A=document.querySelector(".formatErrorMsg"),b=document.querySelector(".notEqualErrorMsg"),x=new class{constructor(){this.regExpresions={text:/^[^A-Z]*[A-Z][^A-Z]*$/,email:/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/,password:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,tel:/^\d{3}-\d{3}-\d{4}$/},this.states={firstName:!0,lastName:!0,email:!0,password:!0,confirmPassword:!0,phoneNum:!0,samePassword:!0}}validateInput(e){this.states[e.name]=this.regExpresions[e.type].test(e.value),g[0].value!==g[1].value&&g[1].value.length>0?this.states.samePassword=!1:this.states.samePassword=!0}renderState(e){const t=e.target;this.validateInput(t),A.classList.remove("active"),b.classList.remove("active"),t.classList.remove("invalid-input","valid-input"),this.states[t.name]?t.classList.add("valid-input"):("password"===t.name&&"blur"!==e.type&&A.classList.add("active"),t.classList.add("invalid-input")),this.states.samePassword||b.classList.add("active")}};y.forEach((e=>{["input","focus","blur"].forEach((t=>e.addEventListener(t,(e=>x.renderState(e)))))}))})();
//# sourceMappingURL=main.js.map