/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});


/*!
 * VERSION: 0.8.0
 * DATE: 2015-12-20
 * GIT:https://github.com/shrekshrek/css3d-engine
 *
 * @author: Shrek.wang, shrekshrek@gmail.com
 **/

!
    function (t) {
        var i = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
        "function" == typeof define && define.amd ? define(["exports"], function (e) {
            i.C3D = t(i, e)
        }) : "undefined" != typeof exports ? t(i, exports) : i.C3D = t(i, {})
    }(function (t, i) {
        function e(t) {
            return Math.round(t)
        }
        function s(t) {
            return Math.round(100 * t) / 100
        }
        function n(t) {
            return t.replace(/\b(\w)|\s(\w)/g, function (t) {
                return t.toUpperCase()
            })
        }
        function r(t) {
            var e;
            switch (t.type) {
                case "sprite":
                    e = new i.Sprite(t.el ? {
                        el: t.el
                    } : void 0);
                    break;
                case "plane":
                    e = new i.Plane(t.el ? {
                        el: t.el
                    } : void 0);
                    break;
                case "box":
                    e = new i.Box(t.el ? {
                        el: t.el
                    } : void 0);
                    break;
                case "skybox":
                    e = new i.Skybox(t.el ? {
                        el: t.el
                    } : void 0)
            }
            if (void 0 != t.size && e.size.apply(e, t.size), void 0 != t.position && e.position.apply(e, t.position), void 0 != t.rotation && e.rotation.apply(e, t.rotation), void 0 != t.scale && e.scale.apply(e, t.scale), void 0 != t.origin && e.origin.apply(e, t.origin), void 0 != t.visibility && e.visibility.apply(e, t.visibility), void 0 != t.material && e.material.apply(e, t.material), void 0 != t.filter && e.filter.apply(e, t.filter), void 0 != t.name && e.name.apply(e, [t.name]), e.update(), t.children) for (var s = 0, n = t.children.length; n > s; s++) {
                var h = t.children[s],
                    a = r(h);
                e.addChild(a)
            }
            return e
        }
        var h = function (t) {
                var i = [];
                for (var e in t) i.push(e);
                return i
            },
            a = function (t) {
                var i = arguments.length;
                if (2 > i || null == t) return t;
                for (var e = 1; i > e; e++) for (var s = arguments[e], n = h(s), r = n.length, a = 0; r > a; a++) {
                    var o = n[a];
                    t[o] = s[o]
                }
                return t
            },
            o = function (t, i) {
                var e, s = this;
                e = t && Object.prototype.hasOwnProperty.call(t, "constructor") ? t.constructor : function () {
                    return s.apply(this, arguments)
                },
                    a(e, s, i);
                var n = function () {
                    this.constructor = e
                };
                return n.prototype = s.prototype,
                    e.prototype = new n,
                t && a(e.prototype, t),
                    e.__super__ = s.prototype,
                    e
            },
            l = "";
        return function () {
            var t = document.createElement("div"),
                i = ["Webkit", "Moz", "Ms", "O"];
            for (var e in i) if (i[e] + "Transform" in t.style) {
                l = i[e];
                break
            }
        }(),
            i.getRandomColor = function () {
                return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
            },
            i.rgb2hex = function (t, i, e) {
                return (t << 16 | i << 8 | e).toString(16)
            },
            i.hex2rgb = function (t) {
                var i = Math.floor("0x" + t),
                    e = i >> 16 & 255,
                    s = i >> 8 & 255,
                    n = 255 & i;
                return [e, s, n]
            },
            i.Object = function () {
                this.initialize.apply(this, arguments)
            },
            a(i.Object.prototype, {
                x: 0,
                y: 0,
                z: 0,
                position: function (t, i, e) {
                    switch (arguments.length) {
                        case 1:
                            this.x = t,
                                this.y = t,
                                this.z = t;
                            break;
                        case 2:
                            this.x = t,
                                this.y = i;
                            break;
                        case 3:
                            this.x = t,
                                this.y = i,
                                this.z = e
                    }
                    return this
                },
                move: function (t, i, e) {
                    switch (arguments.length) {
                        case 1:
                            this.x += t,
                                this.y += t,
                                this.z += t;
                            break;
                        case 2:
                            this.x += t,
                                this.y += i;
                            break;
                        case 3:
                            this.x += t,
                                this.y += i,
                                this.z += e
                    }
                    return this
                },
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                rotation: function (t, i, e) {
                    switch (arguments.length) {
                        case 1:
                            this.rotationX = t,
                                this.rotationY = t,
                                this.rotationZ = t;
                            break;
                        case 2:
                            this.rotationX = t,
                                this.rotationY = i;
                            break;
                        case 3:
                            this.rotationX = t,
                                this.rotationY = i,
                                this.rotationZ = e
                    }
                    return this
                },
                rotate: function (t, i, e) {
                    switch (arguments.length) {
                        case 1:
                            this.rotationX += t,
                                this.rotationY += t,
                                this.rotationZ += t;
                            break;
                        case 2:
                            this.rotationX += t,
                                this.rotationY += i;
                            break;
                        case 3:
                            this.rotationX += t,
                                this.rotationY += i,
                                this.rotationZ += e
                    }
                    return this
                },
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                scale: function (t, i, e) {
                    switch (arguments.length) {
                        case 1:
                            this.scaleX = t,
                                this.scaleY = t,
                                this.scaleZ = t;
                            break;
                        case 2:
                            this.scaleX = t,
                                this.scaleY = i;
                            break;
                        case 3:
                            this.scaleX = t,
                                this.scaleY = i,
                                this.scaleZ = e
                    }
                    return this
                },
                width: 0,
                height: 0,
                depth: 0,
                size: function (t, i, e) {
                    switch (arguments.length) {
                        case 1:
                            this.width = t,
                                this.height = t,
                                this.depth = t;
                            break;
                        case 2:
                            this.width = t,
                                this.height = i;
                            break;
                        case 3:
                            this.width = t,
                                this.height = i,
                                this.depth = e
                    }
                    return this
                },
                originX: 0,
                originY: 0,
                originZ: 0,
                __orgO: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                __orgT: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                __orgF: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                origin: function (t, i, e) {
                    switch (arguments.length) {
                        case 1:
                            this.originX = t,
                                this.originY = t,
                                this.originZ = t;
                            break;
                        case 2:
                            this.originX = t,
                                this.originY = i;
                            break;
                        case 3:
                            this.originX = t,
                                this.originY = i,
                                this.originZ = e
                    }
                    return this
                },
                __name: "",
                name: function (t) {
                    return this.__name = t,
                        "" == t ? delete this.el.dataset.name : this.el.dataset.name = t,
                        this
                },
                __sort: ["X", "Y", "Z"],
                sort: function (t, i, e) {
                    if (arguments.length > 3) throw "sort arguments is wrong!";
                    return this.__sort = [t, i, e],
                        this
                },
                initialize: function () {
                    this.x = 0,
                        this.y = 0,
                        this.z = 0,
                        this.rotationX = 0,
                        this.rotationY = 0,
                        this.rotationZ = 0,
                        this.scaleX = 1,
                        this.scaleY = 1,
                        this.scaleZ = 1,
                        this.width = 0,
                        this.height = 0,
                        this.depth = 0,
                        this.originX = "50%",
                        this.originY = "50%",
                        this.originZ = "0px",
                        this.__orgO = {
                            x: "50%",
                            y: "50%",
                            z: "0px"
                        },
                        this.__orgT = {
                            x: "-50%",
                            y: "-50%",
                            z: "0px"
                        },
                        this.__orgF = {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        this.children = [],
                        this.__name = ""
                },
                parent: null,
                children: null,
                addChild: function (t) {
                    if (null != t.parent && t.parent.removeChild(t), "" != t.__name) {
                        if (void 0 !== this[t.__name]) throw t.__name + " already exist!";
                        this[t.__name] = t
                    }
                    return this.children.push(t),
                        t.parent = this,
                        this
                },
                removeChild: function (t) {
                    for (var i = this.children.length - 1; i >= 0; i--) if (this.children[i] === t) return "" != t.__name && delete this[t.__name],
                        this.children.splice(i, 1),
                        t.parent = null,
                        this;
                    return this
                },
                removeAllChild: function () {
                    for (var t = this.children.length - 1; t >= 0; t--) {
                        var i = this.children[t];
                        "" != i.__name && delete this[i.__name],
                            i.parent = null
                    }
                    return this.children = [],
                        this
                },
                remove: function () {
                    return null != this.parent && this.parent.removeChild(this),
                        this
                }
            }),
            i.Object.extend = o,
            i.Sprite = i.Object.extend({
                el: null,
                alpha: 1,
                visible: !0,
                initialize: function (t) {
                    i.Sprite.__super__.initialize.apply(this, [t]),
                        this.alpha = 1,
                        this.visible = !0;
                    var e;
                    if (t && t.el) switch (typeof t.el) {
                        case "string":
                            e = document.createElement("div"),
                                e.innerHTML = t.el;
                            break;
                        case "object":
                            1 === t.el.nodeType && (e = t.el)
                    }
                    e || (e = document.createElement("div")),
                        e.style.position = "absolute",
                        e.style[l + "Transform"] = "translateZ(0px)",
                        e.style[l + "TransformStyle"] = "preserve-3d",
                        this.el = e,
                        e.le = this
                },
                update: function () {
                    return this.updateS(),
                        this.updateM(),
                        this.updateO(),
                        this.updateT(),
                        this.updateV(),
                        this
                },
                updateS: function () {
                    return this
                },
                updateM: function () {
                    if (!this.__mat) return this;
                    for (var t in this.__mat) switch (t) {
                        case "bothsides":
                            this.el.style[l + "BackfaceVisibility"] = this.__mat[t] ? "visible" : "hidden";
                            break;
                        case "image":
                            this.el.style["background" + n(t)] = "" !== this.__mat[t] ? "url(" + this.__mat[t] + ")" : "";
                            break;
                        default:
                            this.el.style["background" + n(t)] = this.__mat[t]
                    }
                    return this
                },
                updateO: function () {
                    if ("number" == typeof this.originX) {
                        var t = e(this.originX - this.__orgF.x);
                        this.__orgO.x = t + "px",
                            this.__orgT.x = -t + "px"
                    } else this.__orgO.x = this.originX,
                        this.__orgT.x = "-" + this.originX;
                    if ("number" == typeof this.originY) {
                        var i = e(this.originY - this.__orgF.y);
                        this.__orgO.y = i + "px",
                            this.__orgT.y = -i + "px"
                    } else this.__orgO.y = this.originY,
                        this.__orgT.y = "-" + this.originY;
                    if ("number" == typeof this.originZ) {
                        var s = e(this.originZ - this.__orgF.z);
                        this.__orgO.z = s + "px",
                            this.__orgT.z = -s + "px"
                    } else this.__orgO.z = this.__orgT.z = "0px";
                    return this.el.style[l + "TransformOrigin"] = this.__orgO.x + " " + this.__orgO.y + " " + this.__orgO.z,
                        this
                },
                updateT: function () {
                    var t = this.__sort[0],
                        i = this.__sort[1],
                        e = this.__sort[2];
                    return this.el.style[l + "Transform"] = "translate3d(" + this.__orgT.x + ", " + this.__orgT.y + ", " + this.__orgT.z + ") translate3d(" + s(this.x) + "px," + s(this.y) + "px," + s(this.z) + "px) rotate" + t + "(" + s(this["rotation" + t]) % 360 + "deg) rotate" + i + "(" + s(this["rotation" + i]) % 360 + "deg) rotate" + e + "(" + s(this["rotation" + e]) % 360 + "deg) scale3d(" + s(this.scaleX) + ", " + s(this.scaleY) + ", " + s(this.scaleZ) + ") ",
                        this
                },
                updateV: function () {
                    return this.el.style.opacity = this.alpha,
                        this.el.style.display = this.visible ? "block" : "none",
                        this
                },
                addChild: function (t) {
                    return i.Sprite.__super__.addChild.apply(this, [t]),
                    this.el && t.el && this.el.appendChild(t.el),
                        this
                },
                removeChild: function (t) {
                    for (var i = this.children.length - 1; i >= 0; i--) if (this.children[i] === t) return "" != t.__name && delete this[t.__name],
                        this.children.splice(i, 1),
                        t.parent = null,
                        this.el.removeChild(t.el),
                        this;
                    return this
                },
                removeAllChild: function () {
                    for (var t = this.children.length - 1; t >= 0; t--) {
                        var i = this.children[t];
                        "" != i.__name && delete this[i.__name],
                            i.parent = null,
                            this.el.removeChild(i.el)
                    }
                    return this.children = [],
                        this
                },
                on: function (t) {
                    if ("object" == typeof t) for (var i in t) this.el.addEventListener(i, t[i], !1);
                    else 2 === arguments.length ? this.el.addEventListener(arguments[0], arguments[1], !1) : 3 === arguments.length && this.el.addEventListener(arguments[0], arguments[1], arguments[2]);
                    return this
                },
                off: function (t) {
                    if ("object" == typeof t) for (var i in t) this.el.removeEventListener(i, t[i], !1);
                    else 2 === arguments.length && this.el.removeEventListener(arguments[0], arguments[1], !1);
                    return this
                },
                buttonMode: function (t) {
                    return this.el.style.cursor = t ? "pointer" : "auto",
                        this
                },
                __mat: null,
                material: function (t) {
                    return this.__mat = t,
                        this
                },
                visibility: function (t) {
                    return void 0 !== t.visible && (this.visible = t.visible),
                    void 0 !== t.alpha && (this.alpha = t.alpha),
                        this
                }
            }),
            i.Stage = i.Sprite.extend({
                camera: null,
                fov: null,
                __rfix: null,
                __pfix: null,
                initialize: function (t) {
                    i.Stage.__super__.initialize.apply(this, [t]),
                    t && t.el || (this.el.style.top = "0px", this.el.style.left = "0px", this.el.style.width = "0px", this.el.style.height = "0px"),
                        this.el.style[l + "Perspective"] = "800px",
                        this.el.style[l + "TransformStyle"] = "flat",
                        this.el.style[l + "Transform"] = "",
                        this.el.style.overflow = "hidden",
                        this.__rfix = new i.Sprite,
                        this.el.appendChild(this.__rfix.el),
                        this.__pfix = new i.Sprite,
                        this.__rfix.el.appendChild(this.__pfix.el),
                        this.setCamera(new i.Camera)
                },
                updateS: function () {
                    return this.el.style.width = e(this.width) + "px",
                        this.el.style.height = e(this.height) + "px",
                        this
                },
                updateT: function () {
                    return this.fov = e(.5 / Math.tan(.5 * this.camera.fov / 180 * Math.PI) * this.height),
                        this.el.style[l + "Perspective"] = this.fov + "px",
                        this.__rfix.position(e(this.width / 2), e(this.height / 2), this.fov).rotation(-this.camera.rotationX, -this.camera.rotationY, -this.camera.rotationZ).updateT(),
                        this.__pfix.position(-this.camera.x, -this.camera.y, -this.camera.z).updateT(),
                        this
                },
                addChild: function (t) {
                    return this.__pfix.addChild(t),
                        this
                },
                removeChild: function (t) {
                    return this.__pfix.removeChild(t),
                        this
                },
                setCamera: function (t) {
                    return this.camera && (this.camera.stage = null),
                        this.camera = t,
                        this.camera.stage = this,
                        this
                }
            }),
            i.Camera = i.Object.extend({
                fov: null,
                stage: null,
                initialize: function (t) {
                    i.Camera.__super__.initialize.apply(this, [t]),
                        this.fov = 75
                },
                update: function () {
                    return this.updateT(),
                        this
                },
                updateS: function () {
                    return this
                },
                updateM: function () {
                    return this
                },
                updateT: function () {
                    return this.stage && this.stage.updateT(),
                        this
                },
                updateV: function () {
                    return this
                }
            }),
            i.Plane = i.Sprite.extend({
                initialize: function (t) {
                    i.Plane.__super__.initialize.apply(this, [t])
                },
                update: function () {
                    return i.Plane.__super__.update.apply(this),
                        this.updateF(),
                        this
                },
                updateS: function () {
                    return this.el.style.width = e(this.width) + "px",
                        this.el.style.height = e(this.height) + "px",
                        this
                },
                updateF: function () {
                    if (!this.__flt) return this;
                    var t = "";
                    for (var i in this.__flt) t += "" !== this.__flt[i] ? i + "(" + this.__flt[i].join(",") + ")" : "";
                    return "" !== t && (this.el.style[l + "Filter"] = t),
                        this
                },
                __flt: null,
                filter: function (t) {
                    return this.__flt = t,
                        this
                }
            }),
            i.Box = i.Sprite.extend({
                front: null,
                back: null,
                left: null,
                right: null,
                up: null,
                down: null,
                initialize: function (t) {
                    i.Box.__super__.initialize.apply(this, [t]),
                        this.front = new i.Plane,
                        this.addChild(this.front),
                        this.back = new i.Plane,
                        this.addChild(this.back),
                        this.left = new i.Plane,
                        this.addChild(this.left),
                        this.right = new i.Plane,
                        this.addChild(this.right),
                        this.up = new i.Plane,
                        this.addChild(this.up),
                        this.down = new i.Plane,
                        this.addChild(this.down)
                },
                update: function () {
                    return i.Box.__super__.update.apply(this),
                        this.updateF(),
                        this
                },
                updateS: function () {
                    var t = e(this.width),
                        i = e(this.height),
                        s = e(this.depth);
                    return this.__orgF.x = this.width / 2,
                        this.__orgF.y = this.height / 2,
                        this.__orgF.z = this.depth / 2,
                        this.front.size(t, i, 0).position(0, 0, s / 2).rotation(0, 0, 0).updateS().updateT(),
                        this.back.size(t, i, 0).position(0, 0, -s / 2).rotation(0, 180, 0).updateS().updateT(),
                        this.left.size(s, i, 0).position(-t / 2, 0, 0).rotation(0, -90, 0).updateS().updateT(),
                        this.right.size(s, i, 0).position(t / 2, 0, 0).rotation(0, 90, 0).updateS().updateT(),
                        this.up.size(t, s, 0).position(0, -i / 2, 0).rotation(90, 0, 0).updateS().updateT(),
                        this.down.size(t, s, 0).position(0, i / 2, 0).rotation(-90, 0, 0).updateS().updateT(),
                        this
                },
                updateM: function () {
                    if (!this.__mat) return this;
                    for (var t in this.__mat) switch (t) {
                        case "front":
                        case "back":
                        case "left":
                        case "right":
                        case "up":
                        case "down":
                            this[t].material({
                                image: this.__mat[t],
                                bothsides: !1
                            }).updateM();
                            break;
                        default:
                            this.front.material(this.__mat).updateM(),
                                this.back.material(this.__mat).updateM(),
                                this.left.material(this.__mat).updateM(),
                                this.right.material(this.__mat).updateM(),
                                this.up.material(this.__mat).updateM(),
                                this.down.material(this.__mat).updateM()
                    }
                    return this
                },
                updateF: function () {
                    return this.__flt ? (this.front.filter(this.__flt).updateF(), this.back.filter(this.__flt).updateF(), this.left.filter(this.__flt).updateF(), this.right.filter(this.__flt).updateF(), this.up.filter(this.__flt).updateF(), this.down.filter(this.__flt).updateF(), this) : this
                },
                __flt: null,
                filter: function (t) {
                    return this.__flt = t,
                        this
                }
            }),
            i.Skybox = i.Box.extend({
                updateS: function () {
                    var t = e(this.width),
                        i = e(this.height),
                        s = e(this.depth);
                    return this.__orgF.x = this.width / 2,
                        this.__orgF.y = this.height / 2,
                        this.__orgF.z = this.depth / 2,
                        this.front.size(t, i, 0).position(0, 0, -s / 2).rotation(0, 0, 0).updateS().updateT(),
                        this.back.size(t, i, 0).position(0, 0, s / 2).rotation(0, 180, 0).updateS().updateT(),
                        this.left.size(s, i, 0).position(-t / 2, 0, 0).rotation(0, 90, 0).updateS().updateT(),
                        this.right.size(s, i, 0).position(t / 2, 0, 0).rotation(0, -90, 0).updateS().updateT(),
                        this.up.size(t, s, 0).position(0, -i / 2, 0).rotation(-90, 0, 0).updateS().updateT(),
                        this.down.size(t, s, 0).position(0, i / 2, 0).rotation(90, 0, 0).updateS().updateT(),
                        this
                }
            }),
            i.create = function (t) {
                var i;
                switch (typeof t) {
                    case "array":
                        i = {
                            type: "sprite",
                            children: t
                        };
                        break;
                    case "object":
                        i = t;
                        break;
                    default:
                        return
                }
                return r(i)
            },
            i
    });




/*!
 * VERSION: 0.1.0
 * DATE: 2015-12-20
 * GIT:https://github.com/shrekshrek/orienter
 *
 * @author: Shrek.wang, shrekshrek@gmail.com
 **/

!
    function (i) {
        var t = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
        "function" == typeof define && define.amd ? define(["exports"], function (a) {
            t.Orienter = i(t, a)
        }) : "undefined" != typeof exports ? i(t, exports) : t.Orienter = i(t, {})
    }(function (i, t) {
        function a(i, t) {
            for (var a in t) i[a] = t[a]
        }
        return t = function () {
            this.initialize.apply(this, arguments)
        },
            a(t.prototype, {
                lon: 0,
                lat: 0,
                direction: 0,
                fix: 0,
                os: "",
                initialize: function () {
                    switch (this.lon = 0, this.lat = 0, this.direction = window.orientation || 0, this.direction) {
                        case 0:
                            this.fix = 0;
                            break;
                        case 90:
                            this.fix = -270;
                            break;
                        case -90:
                            this.fix = -90
                    }
                    this.os = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? "ios" : navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") ? "android" : ""
                },
                init: function () {
                    this._orient = this.orientHandler.bind(this),
                        window.addEventListener("deviceorientation", this._orient, !1),
                        this._change = this.changeHandler.bind(this),
                        window.addEventListener("orientationchange", this._change, !1)
                },
                destroy: function () {
                    window.removeEventListener("deviceorientation", this._orient, !1),
                        window.removeEventListener("orientationchange", this._change, !1)
                },
                changeHandler: function () {
                    this.direction = window.orientation
                },
                orientHandler: function (i) {
                    switch (this.os) {
                        case "ios":
                            switch (this.direction) {
                                case 0:
                                    this.lon = i.alpha + i.gamma,
                                    i.beta > 0 && (this.lat = i.beta - 90);
                                    break;
                                case 90:
                                    this.lon = i.gamma < 0 ? i.alpha - 90 : i.alpha - 270,
                                        this.lat = i.gamma > 0 ? 90 - i.gamma : -90 - i.gamma;
                                    break;
                                case -90:
                                    this.lon = i.gamma < 0 ? i.alpha - 90 : i.alpha - 270,
                                        this.lat = i.gamma < 0 ? 90 + i.gamma : -90 + i.gamma
                            }
                            break;
                        case "android":
                            switch (this.direction) {
                                case 0:
                                    this.lon = i.alpha + i.gamma + 30,
                                        this.lat = i.gamma > 90 ? 90 - i.beta : i.beta - 90;
                                    break;
                                case 90:
                                    this.lon = i.alpha - 230,
                                        this.lat = i.gamma > 0 ? 270 - i.gamma : -90 - i.gamma;
                                    break;
                                case -90:
                                    this.lon = i.alpha - 180,
                                        this.lat = -90 + i.gamma
                            }
                    }
                    this.lon += this.fix,
                        this.lon %= 360,
                    this.lon < 0 && (this.lon += 360),
                        this.lon = Math.round(this.lon),
                        this.lat = Math.round(this.lat),
                    this.handler && this.handler.apply(this, [{
                        a: Math.round(i.alpha),
                        b: Math.round(i.beta),
                        g: Math.round(i.gamma),
                        lon: this.lon,
                        lat: this.lat,
                        dir: this.direction
                    }])
                }
            }),
            t
    });