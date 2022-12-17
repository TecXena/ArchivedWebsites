(function(){var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={wa:!0},ea={};try{ea.__proto__=da;ca=ea.wa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function ha(a){return"number"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ia(){}
function ja(a){a.ga=void 0;a.getInstance=function(){return a.ga?a.ga:a.ga=new a}}
function ka(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==ka(a)}
function la(a){var b=ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ma(a){return"function"==ka(a)}
function na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var oa="closure_uid_"+(1E9*Math.random()>>>0),pa=0;function qa(a,b,c){return a.call.apply(a.bind,arguments)}
function ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=qa:x=ra;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function sa(a,b){t(a,b,void 0)}
function A(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},va=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
function wa(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function xa(a,b){var c=ta(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function za(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(la(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ca=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Da(a){if(!Ea.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Fa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ga,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ha,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ia,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ja,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ka,"&#0;"));return a}
var Fa=/&/g,Ga=/</g,Ha=/>/g,Ia=/"/g,Ja=/'/g,Ka=/\x00/g,Ea=/[\x00&<>"']/;function La(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ma;a:{var Pa=p.navigator;if(Pa){var Qa=Pa.userAgent;if(Qa){Ma=Qa;break a}}Ma=""}function D(a){return-1!=Ma.indexOf(a)}
;function Ra(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Sa(a,b){var c=la(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ta(a){var b=Ua,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Va(a){for(var b in a)return!1;return!0}
function Wa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Xa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var $a=D("Opera"),ab=D("Trident")||D("MSIE"),bb=D("Edge"),cb=D("Gecko")&&!(-1!=Ma.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),db=-1!=Ma.toLowerCase().indexOf("webkit")&&!D("Edge");function eb(){var a=p.document;return a?a.documentMode:void 0}
var fb;a:{var gb="",hb=function(){var a=Ma;if(cb)return/rv:([^\);]+)(\)|;)/.exec(a);if(bb)return/Edge\/([\d\.]+)/.exec(a);if(ab)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(db)return/WebKit\/(\S+)/.exec(a);if($a)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
hb&&(gb=hb?hb[1]:"");if(ab){var ib=eb();if(null!=ib&&ib>parseFloat(gb)){fb=String(ib);break a}}fb=gb}var jb=fb,kb;var lb=p.document;kb=lb&&ab?eb()||("CSS1Compat"==lb.compatMode?parseInt(jb,10):5):void 0;var mb=!ab||9<=Number(kb);function nb(){this.b="";this.f=ob}
nb.prototype.J=!0;nb.prototype.H=function(){return this.b};
nb.prototype.fa=!0;nb.prototype.aa=function(){return 1};
function pb(a){return a instanceof nb&&a.constructor===nb&&a.f===ob?a.b:"type_error:TrustedResourceUrl"}
var ob={};function E(){this.b="";this.f=qb}
E.prototype.J=!0;E.prototype.H=function(){return this.b};
E.prototype.fa=!0;E.prototype.aa=function(){return 1};
function rb(a){return a instanceof E&&a.constructor===E&&a.f===qb?a.b:"type_error:SafeUrl"}
var sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function tb(a){if(a instanceof E)return a;a=a.J?a.H():String(a);sb.test(a)||(a="about:invalid#zClosurez");return ub(a)}
var qb={};function ub(a){var b=new E;b.b=a;return b}
ub("about:blank");function vb(){this.ea="";this.va=wb;this.b=null}
vb.prototype.fa=!0;vb.prototype.aa=function(){return this.b};
vb.prototype.J=!0;vb.prototype.H=function(){return this.ea};
var wb={};function xb(a,b){var c=new vb;c.ea=a;c.b=b;return c}
xb("<!DOCTYPE html>",0);xb("",0);xb("<br>",0);function yb(a,b){var c=b instanceof E?b:tb(b);a.href=rb(c)}
function zb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?pb(b):b instanceof nb?pb(b):b instanceof E?rb(b):tb(b).H()}
function Ab(a,b){a.src=pb(b)}
;function Bb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
Bb.prototype.equals=function(a){return a instanceof Bb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
Bb.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
Bb.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
Bb.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Cb(a,b){this.width=a;this.height=b}
l=Cb.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Db(a){var b=document;return r(a)?b.getElementById(a):a}
function Eb(a,b){Ra(b,function(b,d){b&&b.J&&(b=b.H());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Fb.hasOwnProperty(d)?a.setAttribute(Fb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Fb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Gb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!mb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Da(g.name),'"');if(g.type){f.push(' type="',Da(g.type),'"');var h={};Za(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Eb(f,g));2<d.length&&Hb(e,f,d);return f}
function Hb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!la(f)||na(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(na(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ma(f)){g="function"==typeof f.item;break a}}g=!1}C(g?ya(f):f,d)}}}
function Ib(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Jb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Kb(a){Lb();var b=new nb;b.b=a;return b}
var Lb=ia;var Mb=/^[\w+/_-]+[=]{0,2}$/;function Nb(){var a=p.document.querySelector("script[nonce]");if(a&&(a=a.nonce||a.getAttribute("nonce"))&&Mb.test(a))return a}
;var Ob=document,F=window;function Pb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Qb=(new Date).getTime();function Rb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Sb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],k=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+k+u+b[c]&4294967295;k=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,u;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Tb(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Ub(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Ub(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ub(a){var b=Sb();b.update(a);return b.ya().toLowerCase()}
;function Vb(a){this.b=a||{cookie:""}}
l=Vb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ca(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ca(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Wb=new Vb("undefined"==typeof document?null:document);Wb.f=3950;function Xb(){var a=[],b=Rb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Vb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Vb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Tb(Rb(d),b,a||null)].join(" "):null}return null}
;function Yb(a,b){this.h=a;this.g=b;this.f=0;this.b=null}
Yb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.h();return a};
function Zb(a,b){a.g(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function $b(a){p.setTimeout(function(){throw a;},0)}
var ac;
function bc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ma;c.ma=null;a()}};
return function(a){d.next={ma:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function cc(){this.f=this.b=null}
var ec=new Yb(function(){return new dc},function(a){a.reset()});
cc.prototype.add=function(a,b){var c=ec.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
cc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function dc(){this.next=this.scope=this.b=null}
dc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
dc.prototype.reset=function(){this.next=this.scope=this.b=null};function fc(a,b){gc||hc();ic||(gc(),ic=!0);jc.add(a,b)}
var gc;function hc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);gc=function(){a.then(kc)}}else gc=function(){var a=kc;
!ma(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(ac||(ac=bc()),ac(a)):p.setImmediate(a)}}
var ic=!1,jc=new cc;function kc(){for(var a;a=jc.remove();){try{a.b.call(a.scope)}catch(b){$b(b)}Zb(ec,a)}ic=!1}
;function G(){this.h=this.h;this.B=this.B}
G.prototype.h=!1;G.prototype.dispose=function(){this.h||(this.h=!0,this.l())};
function lc(a,b){a.h?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
G.prototype.l=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function mc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function nc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];la(d)?nc.apply(null,d):mc(d)}}
;function oc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function pc(a,b){if(a.classList)var c=a.classList.contains(b);else c=oc(a),c=0<=ta(c,b);return c}
function qc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):pc(a,"inverted-hdpi")&&(a.className=ua(oc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var rc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function sc(){}
sc.prototype.next=function(){throw rc;};
sc.prototype.U=function(){return this};
function tc(a){if(a instanceof sc)return a;if("function"==typeof a.U)return a.U(!1);if(la(a)){var b=0,c=new sc;c.next=function(){for(;;){if(b>=a.length)throw rc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function uc(a,b){if(la(a))try{C(a,b,void 0)}catch(c){if(c!==rc)throw c;}else{a=tc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==rc)throw c;}}}
function vc(a){if(la(a))return ya(a);a=tc(a);var b=[];uc(a,function(a){b.push(a)});
return b}
;(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",ia,b);p.removeEventListener("test",ia,b);return a})();function wc(a){var b=[];xc(new yc,a,b);return b.join("")}
function yc(){}
function xc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),xc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),zc(d,c),c.push(":"),xc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":zc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ac={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Bc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function zc(a,b){b.push('"',a.replace(Bc,function(a){var b=Ac[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ac[a]=b);return b}),'"')}
;function Cc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Dc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.m=void 0;this.g=this.f=this.h=null;this.i=this.j=!1;if(a!=ia)try{var c=this;a.call(b,function(a){Ec(c,2,a)},function(a){Ec(c,3,a)})}catch(d){Ec(this,3,d)}}
function Fc(){this.next=this.context=this.f=this.g=this.b=null;this.h=!1}
Fc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.h=!1};
var Gc=new Yb(function(){return new Fc},function(a){a.reset()});
function Hc(a,b,c){var d=Gc.get();d.g=a;d.f=b;d.context=c;return d}
function Ic(a){return new H(function(b,c){c(a)})}
function Jc(a,b,c){Kc(a,b,c,null)||fc(y(b,a))}
function Lc(a){return new H(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Jc(e,b,c)})}
function Mc(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Z:!0,value:f}:{Z:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Jc(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
H.prototype.then=function(a,b,c){return Nc(this,ma(a)?a:null,ma(b)?b:null,c)};
Cc(H);function Oc(a,b){var c=Hc(b,b,void 0);c.h=!0;Pc(a,c);return a}
function Qc(a,b){return Nc(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&fc(function(){var b=new Rc(a);Sc(this,b)},this)};
function Sc(a,b){if(0==a.b)if(a.h){var c=a.h;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Sc(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):Tc(c),Uc(c,e,3,b)))}a.h=null}else Ec(a,3,b)}
function Pc(a,b){a.f||2!=a.b&&3!=a.b||Vc(a);a.g?a.g.next=b:a.f=b;a.g=b}
function Nc(a,b,c,d){var e=Hc(null,null,null);e.b=new H(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Rc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.h=a;Pc(a,e);return e.b}
H.prototype.o=function(a){this.b=0;Ec(this,2,a)};
H.prototype.w=function(a){this.b=0;Ec(this,3,a)};
function Ec(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Kc(c,a.o,a.w,a)||(a.m=c,a.b=b,a.h=null,Vc(a),3!=b||c instanceof Rc||Wc(a,c)))}
function Kc(a,b,c,d){if(a instanceof H)return Pc(a,Hc(b||ia,c||null,d)),!0;if(Dc(a))return a.then(b,c,d),!0;if(na(a))try{var e=a.then;if(ma(e))return Xc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Xc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Vc(a){a.j||(a.j=!0,fc(a.B,a))}
function Tc(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.g=null);return b}
H.prototype.B=function(){for(var a;a=Tc(this);)Uc(this,a,this.b,this.m);this.j=!1};
function Uc(a,b,c,d){if(3==c&&b.f&&!b.h)for(;a&&a.i;a=a.h)a.i=!1;if(b.b)b.b.h=null,Yc(b,c,d);else try{b.h?b.g.call(b.context):Yc(b,c,d)}catch(e){Zc.call(null,e)}Zb(Gc,b)}
function Yc(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Wc(a,b){a.i=!0;fc(function(){a.i&&Zc.call(null,b)})}
var Zc=$b;function Rc(a){B.call(this,a)}
A(Rc,B);Rc.prototype.name="cancel";function I(a){G.call(this);this.j=1;this.g=[];this.i=0;this.b=[];this.f={};this.m=!!a}
A(I,G);l=I.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function $c(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=wa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
l.K=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.g.push(a),this.b[a+1]=ia):(c&&xa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.I=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];ad(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.K(c)}}return 0!=e}return!1};
function ad(a,b,c){fc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.K,this),delete this.f[a])}else this.b.length=0,this.f={}};
l.l=function(){I.u.l.call(this);this.clear();this.g.length=0};function bd(a){this.b=a}
bd.prototype.set=function(a,b){q(b)?this.b.set(a,wc(b)):this.b.remove(a)};
bd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bd.prototype.remove=function(a){this.b.remove(a)};function cd(a){this.b=a}
A(cd,bd);function dd(a){this.data=a}
function ed(a){return!q(a)||a instanceof dd?a:new dd(a)}
cd.prototype.set=function(a,b){cd.u.set.call(this,a,ed(b))};
cd.prototype.f=function(a){a=cd.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function fd(a){this.b=a}
A(fd,cd);fd.prototype.set=function(a,b,c){if(b=ed(b)){if(c){if(c<z()){fd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}fd.u.set.call(this,a,b)};
fd.prototype.f=function(a){var b=fd.u.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())fd.prototype.remove.call(this,a);else return b}};function gd(a){this.b=a}
A(gd,fd);function hd(){}
;function id(){}
A(id,hd);id.prototype.clear=function(){var a=vc(this.U(!0)),b=this;C(a,function(a){b.remove(a)})};function jd(a){this.b=a}
A(jd,id);l=jd.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.U=function(a){var b=0,c=this.b,d=new sc;d.next=function(){if(b>=c.length)throw rc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function kd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(kd,jd);function ld(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(ld,jd);function md(a){if(!ma(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function nd(){var a=null;return Qc(new H(function(b,c){a=md(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var od=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(od)}
function pd(a){return a?decodeURI(a):a}
function qd(a,b,c){if(w(b))for(var d=0;d<b.length;d++)qd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function rd(a){var b=[],c;for(c in a)qd(c,a[c],b);return b.join("&")}
function sd(a,b){var c=rd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var td=!1,ud="";function vd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(td=!0,a.description)){ud=vd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){td=!0;ud="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],td=!(!a||!a.enabledPlugin))){ud=vd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");td=!0;ud=vd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");td=!0;ud="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),td=!0,ud=vd(b.GetVariable("$version"))}catch(c){}})();
var wd=td,xd=ud;function yd(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");zb(e,b,"preload");d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var zd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ad=/\.(cn|com\.bi|do|sl|ba|by|ma)$/;function Bd(a){return zd.test(a)&&!Ad.test(a)}
var Cd=p;function Dd(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];K[3]>=z()&&b.push("adsid="+encodeURIComponent(K[1]));return a+"?"+b.join("&")}
var K,L;function Ed(){Cd=p;K=Cd.googleToken=Cd.googleToken||{};var a=z();K[1]&&K[3]>a&&0<K[2]||(K[1]="",K[2]=-1,K[3]=-1,K[4]="",K[6]="");L=Cd.googleIMState=Cd.googleIMState||{};Bd(L[1])||(L[1]=".google.com");w(L[5])||(L[5]=[]);"boolean"==typeof L[6]||(L[6]=!1);w(L[7])||(L[7]=[]);ha(L[8])||(L[8]=0)}
function Gd(){Ed();return K[1]}
var M={da:function(){return 0<L[8]},
Oa:function(){L[8]++},
Pa:function(){0<L[8]&&L[8]--},
Qa:function(){L[8]=0},
shouldRetry:function(){return!1},
na:function(){return L[5]},
la:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ja:function(){if(!M.da()){var a=p.document,b=function(b){b=Dd(b);a:{try{var c=Nb();break a}catch(h){}c=void 0}var d=c;yd(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=Kb(b);Ab(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),M.Oa()}catch(h){}},c=L[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Hd(a){Ed();var b=Cd.googleToken[5]||0;a&&(0!=b||K[3]>=z()?M.la(a):(M.na().push(a),M.ja()));K[3]>=z()&&K[2]>=z()||M.ja()}
function Id(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),k=parseInt(b.validLifetimeSecs||"",10);g&&!k&&(k=3600);var m=b["1p_jar"]||"";b=b.pucrd||"";Ed();1==e?M.Qa():M.Pa();if(!f&&M.shouldRetry())Bd(".google.com")&&(L[1]=".google.com"),M.ja();else{var u=Cd.googleToken=Cd.googleToken||{},Y=0==e&&f&&r(f)&&!g&&ha(h)&&0<h&&ha(k)&&0<k&&r(m);g=g&&!M.da()&&(!(K[3]>=z())||"NT"==
K[1]);var Aa=!(K[3]>=z())&&0!=e;if(Y||g||Aa)g=z(),h=g+1E3*h,k=g+1E3*k,1E-5>Math.random()&&(g="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e,p.google_image_requests||(p.google_image_requests=[]),Aa=p.document.createElement("img"),Aa.src=g,p.google_image_requests.push(Aa)),u[5]=e,u[1]=f,u[2]=h,u[3]=k,u[4]=m,u[6]=b,Ed();if(Y||!M.da()){e=M.na();for(f=0;f<e.length;f++)M.la(e[f]);e.length=0}}};
Hd(a)}
;function Jd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var Kd=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Ld=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Ld,void 0);function N(a){Jd(Ld,arguments)}
function O(a,b){return a in Ld?Ld[a]:b}
function Md(a){return O(a,void 0)}
function Nd(){return O("PLAYER_CONFIG",{})}
;function Od(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){P(b)}}:a}
function P(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=O("ERRORS",[]),f.push([a,b,c,d,e]),N("ERRORS",f))}
;function Q(a){return O("EXPERIMENT_FLAGS",{})[a]}
;function Pd(a){a&&(a.dataset?a.dataset[Qd("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Rd(a,b){return a?a.dataset?a.dataset[Qd(b)]:a.getAttribute("data-"+b):null}
var Sd={};function Qd(a){return Sd[a]||(Sd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function R(a,b){ma(a)&&(a=Od(a));return window.setTimeout(a,b)}
function T(a){window.clearTimeout(a)}
;var Td=v("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.K;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsubPubsubInstance",Td,void 0);var Ud=v("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Ud,void 0);var Vd=v("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Vd,void 0);var Wd=v("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Wd,void 0);
function Xd(a,b){var c=Yd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Ud[d]&&b.apply(window,c)};
try{Wd[a]?f():R(f,0)}catch(g){P(g)}},void 0);
Ud[d]=!0;Vd[a]||(Vd[a]=[]);Vd[a].push(d);return d}return 0}
function Zd(a){var b=Yd();b&&(ha(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Ud[a]}))}
function $d(a,b){var c=Yd();c&&c.publish.apply(c,arguments)}
function ae(a){var b=Yd();if(b)if(b.clear(a),a)be(a);else for(var c in Vd)be(c)}
function Yd(){return v("ytPubsubPubsubInstance")}
function be(a){Vd[a]&&(a=Vd[a],C(a,function(a){Ud[a]&&delete Ud[a]}),a.length=0)}
;var ce=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,de=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ee(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ce,""),c=c.replace(de,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else fe(a,b)}
function fe(a,b){var c=ge(a),d=document.getElementById(c),e=d&&Rd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Xd(c,b);var g=""+(b[oa]||(b[oa]=++pa));he[g]=e}f||(d=ie(a,c,function(){Rd(d,"loaded")||(Pd(d),$d(c),R(y(ae,c),0))}))}}
function ie(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Ab(d,Kb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function je(a){a=ge(a);var b=document.getElementById(a);b&&(ae(a),b.parentNode.removeChild(b))}
function ke(a,b){if(a&&b){var c=""+(b[oa]||(b[oa]=++pa));(c=he[c])&&Zd(c)}}
function ge(a){var b=document.createElement("a");yb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+La(a)}
var he={};var le=null;function me(){var a=O("BG_I",null),b=O("BG_IU",null),c=O("BG_P",void 0);b?ee(b,function(){window.botguard?ne(c):(je(b),P(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?ne(c):P(Error("Unable to load Botguard from JS"),"WARNING"))}
function ne(a){le=new window.botguard.bg(a);Q("botguard_periodic_refresh")&&Kd()}
function oe(){return null!=le}
function pe(){return le?le.invoke():null}
;z();var qe=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function re(){if(!qe)return null;var a=qe();return"open"in a?a:null}
function se(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function te(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?za(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var ue={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ve=!1;
function we(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=pd(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?pd(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in ue){if((e=d=O(ue[f]))&&!(e=c)){e=f;var g=O("CORS_HEADER_WHITELIST")||{},h=pd(J(a)[3]||null);e=h?(g=g[h])?0<=ta(g,e):!1:!0}e&&(b[f]=d)}return b}
function xe(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ye(a,b);var d=ze(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&T(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.C&&b.C.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ia&&b.ia.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.oa&&0<b.timeout&&(f=R(function(){e||(e=!0,T(f),b.oa.call(b.context||p))},b.timeout))}else Ae(a,b)}
function Ae(a,b){var c=b.format||"JSON";a=ye(a,b);var d=ze(a,b),e=!1,f,g=Be(a,function(a){if(!e){e=!0;f&&T(f);var d=se(a),g=null;if(d||400<=a.status&&500>a.status)g=Ce(c,a,b.fb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.C&&b.C.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ia&&b.ia.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.L&&0<b.timeout&&(f=R(function(){e||(e=!0,g.abort(),T(f),b.L.call(b.context||p,g))},b.timeout))}
function ye(a,b){b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.ab;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=te(f[1]||"");for(var g in d)f[g]=d[g];a=sd(c,f)+e}return a}
function ze(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=Md("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.gb||pd(J(a)[3]||null)&&!b.withCredentials&&pd(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=te(e),Za(e,f),e=b.pa&&"JSON"==b.pa?JSON.stringify(e):rd(e));f=e||f&&!Va(f);!ve&&f&&"POST"!=b.method&&(ve=!0,P(Error("AJAX request with postData should use POST")));
return e}
function Ce(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?De(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ee(a)})}c&&Fe(d);
return d}
function Fe(a){if(na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=xb(a[b],null);a[c]=d}else Fe(a[b])}}
function De(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ee(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ge(a,b){b.method="POST";b.A||(b.A={});Ae(a,b)}
function Be(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Od(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=re();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=we(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var He={},Ie=0;
function Je(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ma,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof E||(a=a.J?a.H():String(a),sb.test(a)||(a="about:invalid#zClosurez"),a=ub(a)),b=rb(a),"about:invalid#zClosurez"===b?a="":(b instanceof vb?a=b:(a=null,b.fa&&(a=b.aa()),b=Da(b.J?b.H():String(b)),a=xb(b,a)),a=encodeURIComponent(String(wc(a instanceof vb&&a.constructor===vb&&a.va===wb?a.ea:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=Gb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Be(a,b,"POST",e,d):O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Be(a,b,"GET","",d):Ke(a,b))}
function Ke(a,b){var c=new Image,d=""+Ie++;He[d]=c;c.onload=c.onerror=function(){b&&He[d]&&b();delete He[d]};
c.src=a}
;var Le={},Me=0;var Ne=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Ne,void 0);function Oe(a){Jd(Ne,arguments)}
;function Pe(){}
function Qe(a,b){var c=b;isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");d?c=d(a,1,c):void 0===c?(a(),c=NaN):c=R(a,c||0);return c}
;function Re(){}
n(Re,Pe);function Se(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):T(a)}}
Re.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Re.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
ja(Re);Re.getInstance();var Te=[],Ue=!1;function Ve(){if("1"!=Sa(Nd(),"args","privembed")){var a=function(){Ue=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
ee("//static.doubleclick.net/instream/ad_status.js",a);Te.push(Qe(function(){Ue||"google_ad_status"in window||(ke("//static.doubleclick.net/instream/ad_status.js",a),N("DCLKSTAT",3))},5E3))}}
function We(){return parseInt(O("DCLKSTAT",0),10)}
;var Xe=0;t("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++Xe},void 0);var Ye={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ze(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ye||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function $e(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
Ze.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ze.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ze.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ua=v("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Ua,void 0);var af=v("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",af,void 0);function bf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ta(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function U(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=bf(a,b,c,d);if(e)return e;e=++af.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Ze(d);if(!Ib(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Ze(b);
b.currentTarget=a;return c.call(a,b)};
g=Od(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ua[e]=[a,b,c,g,d];return e}
function cf(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Ua){var b=Ua[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ua[a]}}))}
;function df(a){this.o=a;this.b=null;this.i=0;this.m=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.g=0;this.D=U(window,"mousemove",x(this.F,this));a=x(this.w,this);ma(a)&&(a=Od(a));this.G=window.setInterval(a,25)}
A(df,G);df.prototype.F=function(a){q(a.b)||$e(a);var b=a.b;q(a.f)||$e(a);this.b=new Bb(b,a.f)};
df.prototype.w=function(){if(this.b){var a=Kd();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.g]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.o();this.j=d}this.i=a;this.m=this.b;this.g=(this.g+1)%4}};
df.prototype.l=function(){window.clearInterval(this.G);cf(this.D)};var ef={};
function ff(a){if(null==v("_lact",window)){var b=parseInt(O("LACT"),10);b=isFinite(b)?z()-Math.max(b,0):-1;t("_lact",b,window);t("_fact",b,window);-1==b&&V();U(document,"keydown",V);U(document,"keyup",V);U(document,"mousedown",V);U(document,"mouseup",V);Q("lact_local_listeners")||a?(U(window,"resize",function(){gf("resize",200)}),U(window,"scroll",function(){gf("scroll",200)}),new df(function(){gf("mouse",100)}),U(document,"touchstart",V),U(document,"touchend",V)):(Xd("page-mouse",V),Xd("page-scroll",V),
Xd("page-resize",V))}}
function gf(a,b){ef[a]||(ef[a]=!0,Qe(function(){V();ef[a]=!1},b))}
function V(){null==v("_lact",window)&&ff();var a=z();t("_lact",a,window);-1==v("_fact",window)&&t("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function hf(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;function jf(a,b,c,d,e){this.h=a;this.i=b;this.g=c;this.f=d;this.b=e}
function kf(a){var b={};void 0!==a.h?b.trackingParams=a.h:(b.veType=a.i,null!=a.g&&(b.veCounter=a.g),null!=a.f&&(b.elementIndex=a.f));void 0!==a.b&&(b.dataElement=kf(a.b));return b}
var lf=1;var mf={log_event:"events",log_interaction:"interactions"},nf=Object.create(null);nf.log_event="GENERIC_EVENT_LOGGING";nf.log_interaction="INTERACTION_LOGGING";var of={},pf={},qf=0,W=v("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",W,void 0);var rf=v("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",rf,void 0);var sf=v("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",sf,void 0);
t("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function tf(a,b){pf[a.endpoint]=b;if(Q("very_optimistically_create_gel_client"))for(var c in W)if(!of[c]){var d=pf[c];d&&(of[c]=new d)}a.W?(c=a.W,d={},c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId),rf[a.W.token]=d,c=uf(a.endpoint,a.W.token)):c=uf(a.endpoint);c.push(a.payload);c.length>=(Number(Q("web_logging_max_batch")||0)||20)?vf():wf()}
function vf(){T(qf);if(!Va(W)){for(var a in W){var b=of[a];if(!b){var c=pf[a];if(!c)continue;b=new c;of[a]=b}c=void 0;var d=a,e=b,f=mf[d],g=sf[d]||{};sf[d]=g;b=Math.round(Kd());for(c in W[d]){var h=e.b;h={client:{hl:h.Ga,gl:h.Fa,clientName:h.Ea,clientVersion:h.innertubeContextClientVersion}};var k=window.devicePixelRatio;k&&1!=k&&(h.client.screenDensityFloat=String(k));O("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});h={context:h};h[f]=uf(d,c);g.dispatchedEventCount=
g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;h.requestTimeMs=b;if(k=rf[c])a:{var m=h,u=c;if(k.videoId)var Y="VIDEO";else if(k.playlistId)Y="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:u,scope:Y}]}delete rf[c];xf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+
b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete W[a]}Va(W)||wf()}}
function wf(){T(qf);qf=R(vf,O("LOGGING_BATCH_TIMEOUT",1E4))}
function uf(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
;function yf(a,b,c,d){var e=zf,f={};f.eventTimeMs=Math.round(c||Kd());f[a]=b;f.context={lastActivityMs:String(c?-1:hf())};tf({endpoint:"log_event",payload:f,W:d},e)}
;function Af(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function zf(a){this.b=a||{innertubeApiKey:Md("INNERTUBE_API_KEY"),innertubeApiVersion:Md("INNERTUBE_API_VERSION"),Ea:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Md("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ga:Md("INNERTUBE_CONTEXT_HL"),Fa:Md("INNERTUBE_CONTEXT_GL"),Ha:Md("INNERTUBE_HOST_OVERRIDE")||"",Ia:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function xf(a,b,c){var d={};!O("VISITOR_DATA")&&.01>Math.random()&&P(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":O("VISITOR_DATA","")},method:"POST",A:c,pa:"JSON",L:function(){d.L()},
oa:d.L,C:function(a,b){d.C&&d.C(b)},
ib:function(a){d.C&&d.C(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
hb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f;a.b.Ia?f="Bearer "+v("gapi.auth.getToken")().bb:f=Xb();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=O("SESSION_INDEX",0));var g="",h=a.b.Ha;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);a=""+g+Af(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey;try{Q("use_fetch_for_op_xhr")?xe(a,e):Ge(a,e)}catch(k){if("InvalidAccessError"==k)P(Error("An extension is blocking network request."),"WARNING");else throw k;}}
;var Bf=z().toString();var Cf,Df;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Ef=Array(16),Ff=new Uint8Array(16);window.crypto.getRandomValues(Ff);for(var Gf=0;Gf<Ef.length;Gf++)Ef[Gf]=Ff[Gf];Df=Ef;break a}catch(a){}for(var Hf=Array(16),If=0;16>If;If++){for(var Jf=z(),Kf=0;Kf<Jf%23;Kf++)Hf[If]=Math.random();Hf[If]=Math.floor(256*Math.random())}if(Bf)for(var Lf=1,Mf=0;Mf<Bf.length;Mf++)Hf[Lf%16]=Hf[Lf%16]^Hf[(Lf-1)%16]/4^Bf.charCodeAt(Mf),Lf++;Df=Hf}
for(var Nf=Df,Of=[],Pf=0;Pf<Nf.length;Pf++)Of.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(Nf[Pf]&63));Cf=Of.join("");function Qf(){var a=Rf(),b=Sf();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var Sf=Jb(function(){var a=new kd;return a.isAvailable()?new gd(a):null}),Rf=Jb(function(){var a=new ld;
return a.isAvailable()?new gd(a):null});function Tf(){var a=O("ROOT_VE_TYPE",void 0);return a?new jf(void 0,a,void 0):null}
function Uf(){var a=O("client-screen-nonce")||O("EVENT_ID");return a?a:null}
;function Vf(a,b,c){Wb.set(""+a,b,c,"/","youtube.com",!1)}
;function Wf(a){if(a){a=a.itct||a.ved;var b=v("yt.logging.screen.storeParentElement");a&&b&&b(new jf(a))}}
;function Xf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=pd(J(window.location.href)[3]||null);f&&e.push(f);f=pd(J(d)[3]||null);if(0<=ta(e,f)||!f&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(e=document.createElement("a"),yb(e,d),d=e.href),d){f=J(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Uf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+La(d).toString(36),e=b?rd(b):"",Vf(d,e,h||5),Wf(b))}else h="ST-"+La(d).toString(36),d=b?rd(b):"",Vf(h,d,5),Wf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=sd(a,k)+m;a=a instanceof E?a:tb(a);c.href=rb(a)}return!0}
;function Yf(a,b,c){Zf({attachChild:{csn:a,parentVisualElement:kf(b),visualElements:[kf(c)]}})}
function Zf(a){var b=zf;a.eventTimeMs=Math.round(Kd());a.lactMs=hf();tf({endpoint:"log_interaction",payload:a},b)}
;function $f(a){a=a||{};this.url=a.url||"";this.args=a.args||Xa(ag);this.assets=a.assets||{};this.attrs=a.attrs||Xa(bg);this.params=a.params||Xa(cg);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var ag={enablejsapi:1},bg={},cg={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function dg(a){var b=new $f,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ka(d)?Xa(d):d}return b}
;function eg(){G.call(this);this.b=[]}
n(eg,G);eg.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.eb)}G.prototype.l.call(this)};var fg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function gg(a){a=a||"";if(window.spf){var b=a.match(fg);spf.style.load(a,b?b[1]:"",void 0)}else hg(a)}
function hg(a){var b=ig(a),c=document.getElementById(b),d=c&&Rd(c,"loaded");d||c&&!d||(c=jg(a,b,function(){Rd(c,"loaded")||(Pd(c),$d(b),R(y(ae,b),0))}))}
function jg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Kb(a);zb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ig(a){var b=document.createElement("A");a=ub(a);yb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+La(b)}
;t("ytLoggingLatencyUsageStats_",v("ytLoggingLatencyUsageStats_")||{},void 0);function kg(a,b){this.version=a;this.args=b}
;function lg(a){this.topic=a}
lg.prototype.toString=function(){return this.topic};var mg=v("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.K;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsub2Pubsub2Instance",mg,void 0);t("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ng(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function og(){var a=O("TIMING_TICK_EXPIRATION");a||(a={},N("TIMING_TICK_EXPIRATION",a));return a}
function pg(){var a=og(),b;for(b in a)Se(a[b]);N("TIMING_TICK_EXPIRATION",{})}
;function qg(a,b){kg.call(this,1,arguments)}
n(qg,kg);function rg(a,b){kg.call(this,1,arguments)}
n(rg,kg);var sg=new lg("aft-recorded"),tg=new lg("timing-sent");var wg={vc:!0},xg=!1;
function yg(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}b=zg();var c=Kd();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=og();if(c=b[a])Se(c),b[a]=0;Ag()["tick_"+a]=void 0;Kd();if(!v("yt.timing.pingSent_")&&(b=Md("TIMING_ACTION"),a=zg(),v("ytglobal.timingready_")&&b&&a._start&&(b=Bg()))){Q("tighter_critical_section")&&!xg&&(ng(sg,new qg(Math.round(b-a._start),void 0)),xg=!0);b=!0;c=O("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in
a)){b=!1;break}b&&Cg()}}
function Bg(){var a=zg();if(a.aft)return a.aft;for(var b=O("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Cg(){pg();var a=zg(),b=Dg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in wg){var f=va(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=v("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Eg(f,e),Fg(),Gg(),Hg(!1,void 0),O("TIMING_ACTION")&&N("PREVIOUS_ACTION",O("TIMING_ACTION")),N("TIMING_ACTION","")}else{var g=O("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:O("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+v("ytplayer.config.assets.js");(k=X.getEntriesByName?X.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=Bg();Ig()&&"youtube"==g&&(Dg().info.yt_lt="hot_bg",Ag().info_yt_lt="hot_bg",g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Kd();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=v("ytdebug.logTiming"))&&a(f,b);Eg(f,e,void 0);ng(tg,new rg(b.aft+(h||0),void 0))}}
var Gg=x(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ia,X);
function Eg(a,b,c){if(Q("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Je(a,void 0,void 0,void 0,f)}catch(g){Je(a,void 0,void 0,void 0,f)}}else Je(a);Hg(!0,c)}
function zg(){return Dg().tick}
function Ag(){var a=Dg();"gel"in a||(a.gel={});return a.gel}
function Dg(){return v("ytcsi.data_")||Fg()}
function Fg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Hg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Ig(){var a=zg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Dg().info.yt_pvis}
;function Jg(a,b){G.call(this);this.m=this.S=a;this.G=b;this.o=!1;this.f={};this.P=this.F=null;this.w=new I;lc(this,y(mc,this.w));this.i={};this.N=this.R=this.g=this.Y=this.b=null;this.M=!1;this.j=this.D=null;this.T={};this.ta=["onReady"];this.X=null;this.ka=NaN;this.O={};Kg(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Ka.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.La.bind(this));this.V("onAdAnnounce",this.xa.bind(this));this.ua=new eg(this);lc(this,y(mc,this.ua))}
n(Jg,G);l=Jg.prototype;
l.ha=function(a){if(!this.h){a instanceof $f||(a=new $f(a));this.Y=a;this.b=dg(a);this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.G,this.b.attrs.id=this.G);this.m.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.R||(this.R=Lg(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.m.style.width=Pb(Number(a)||a);if(a=this.b.attrs.height)this.m.style.height=Pb(Number(a)||
a);Mg(this);this.o&&Ng(this)}};
l.Aa=function(){return this.Y};
function Ng(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Og(a){var b=!0,c=Pg(a);c&&a.b&&(a=a.b,b=Rd(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function Mg(a){if(!a.h&&!a.M){var b=Og(a);if(b&&"html5"==(Pg(a)?"html5":null))a.N="html5",a.o||Qg(a);else if(Rg(a),a.N="html5",b&&a.j)a.S.appendChild(a.j),Qg(a);else{a.b.loaded=!0;var c=!1;a.D=function(){c=!0;var b=dg(a.b);v("yt.player.Application.create")(a.S,b);Qg(a)};
a.M=!0;b?a.D():(ee(a.b.assets.js,a.D),gg(a.b.assets.css),Sg(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Pg(a){var b=Db(a.g);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.g));return b}
function Qg(a){if(!a.h){var b=Pg(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||Tg(a)):a.ka=R(function(){Qg(a)},50)}}
function Tg(a){Kg(a);a.o=!0;var b=Pg(a);b.addEventListener&&(a.F=Ug(a,b,"addEventListener"));b.removeEventListener&&(a.P=Ug(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=Ug(a,b,e))}for(var f in a.i)a.F(f,a.i[f]);Ng(a);a.R&&a.R(a.f);a.w.I("onReady",a.f)}
function Ug(a,b,c){var d=b[c];return function(){try{return a.X=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.X=e,P(e,"WARNING",void 0,void 0,void 0))}}}
function Kg(a){a.o=!1;if(a.P)for(var b in a.i)a.P(b,a.i[b]);for(var c in a.O)T(parseInt(c,10));a.O={};a.F=null;a.P=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.V.bind(a);a.f.removeEventListener=a.Ra.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.Ba.bind(a);a.f.getPlayerType=a.Ca.bind(a);a.f.getCurrentVideoConfig=a.Aa.bind(a);a.f.loadNewVideoConfig=a.ha.bind(a);a.f.isReady=a.Ja.bind(a)}
l.Ja=function(){return this.o};
l.V=function(a,b){var c=this,d=Lg(this,b);if(d){if(!(0<=ta(this.ta,a)||this.i[a])){var e=Vg(this,a);this.F&&this.F(a,e)}this.w.subscribe(a,d);"onReady"==a&&this.o&&R(function(){d(c.f)},0)}};
l.Ra=function(a,b){if(!this.h){var c=Lg(this,b);c&&$c(this.w,a,c)}};
function Lg(a,b){var c=b;if("string"==typeof b){if(a.T[b])return a.T[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.T[b]=c}return c?c:null}
function Vg(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.w.I(b,c);else{var f=R(function(){if(!a.h){a.w.I(b,c);var d=a.O,e=String(f);e in d&&delete d[e]}},0);
Wa(a.O,String(f))}};
return c}
l.xa=function(a){$d("a11y-announce",a)};
l.Ka=function(a){$d("WATCH_LATER_VIDEO_ADDED",a)};
l.La=function(a){$d("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ca=function(){return this.N||(Pg(this)?"html5":null)};
l.Ba=function(){return this.X};
function Rg(a){yg("dcp");a.cancel();Kg(a);a.N=null;a.b&&(a.b.loaded=!1);var b=Pg(a);b&&(Og(a)||!Sg(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.S;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.D&&ke(this.b.assets.js,this.D);T(this.ka);this.M=!1};
l.l=function(){Rg(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){P(Error("Error destroying player: "+b))}this.T=null;for(var a in this.i)p[this.i[a]]=null;this.Y=this.b=this.f=null;delete this.S;delete this.m;G.prototype.l.call(this)};
function Sg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Wg={},Xg="player_uid_"+(1E9*Math.random()>>>0);function Yg(a){var b="player";b=r(b)?Db(b):b;var c=Xg+"_"+(b[oa]||(b[oa]=++pa)),d=Wg[c];if(d)return d.ha(a),d.f;d=new Jg(b,c);Wg[c]=d;$d("player-added",d.f);lc(d,y(Zg,d));R(function(){d.ha(a)},0);
return d.f}
function Zg(a){delete Wg[a.G]}
;function $g(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function ah(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return bh(a)}
function bh(a,b,c){if(na(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function ch(a,b,c,d){if(na(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function dh(a){var b=a.video_id||a.videoId;if(r(b)){var c=Qf()||{},d=Qf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=Sf();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function eh(a){G.call(this);this.b=a;this.b.subscribe("command",this.qa,this);this.f={};this.i=!1}
A(eh,G);l=eh.prototype;l.start=function(){this.i||this.h||(this.i=!0,fh(this.b,"RECEIVING"))};
l.qa=function(a,b,c){if(this.i&&!this.h){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Ta,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&gh(this,d.event);break;default:this.g.isReady()&&this.g[a]&&(b=hh(a,b||{}),c=this.g.handleExternalCall(a,b,c||null),(c=ih(a,c))&&this.i&&!this.h&&fh(this.b,a,c))}}};
l.Ta=function(a,b){this.i&&!this.h&&fh(this.b,a,this.ba(a,b))};
l.ba=function(a,b){if(null!=b)return{value:b}};
function gh(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
l.l=function(){var a=this.b;a.h||$c(a.b,"command",this.qa,this);this.b=null;for(var b in this.f)gh(this,b);eh.u.l.call(this)};function jh(a,b){eh.call(this,b);this.g=a;this.start()}
A(jh,eh);jh.prototype.addEventListener=function(a,b){this.g.addEventListener(a,b)};
jh.prototype.removeEventListener=function(a,b){this.g.removeEventListener(a,b)};
function hh(a,b){switch(a){case "loadVideoById":return b=bh(b),dh(b),[b];case "cueVideoById":return b=bh(b),dh(b),[b];case "loadVideoByPlayerVars":return dh(b),[b];case "cueVideoByPlayerVars":return dh(b),[b];case "loadPlaylist":return b=ch(b),dh(b),[b];case "cuePlaylist":return b=ch(b),dh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function ih(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
jh.prototype.ba=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return jh.u.ba.call(this,a,b)};
jh.prototype.l=function(){jh.u.l.call(this);delete this.g};function kh(a,b,c,d){G.call(this);this.f=b||null;this.o="*";this.g=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=x(this.w,this);window.addEventListener("message",this.m)}
n(kh,G);kh.prototype.w=function(a){if(!("*"!=this.g&&a.origin!=this.g||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.g=this.o=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=ta(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
kh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=wc(a);c.postMessage(d,this.o)}catch(e){P(e,"WARNING")}}};
kh.prototype.l=function(){window.removeEventListener("message",this.m);G.prototype.l.call(this)};function lh(a,b,c){kh.call(this,a,b,c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(lh,kh);function mh(){var a=this.f=new lh(!!O("WIDGET_ID_ENFORCE")),b=x(this.Na,this);a.i=b;a.j=null;this.f.channel="widget";if(a=O("WIDGET_ID"))this.f.sessionId=a;this.g=[];this.j=!1;this.i={}}
l=mh.prototype;l.Na=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,nh(this,a)),this.i[a]=!0)):this.sa(a,b,c)};
l.sa=function(){};
function nh(a,b){return x(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.ca());this.sendMessage("onReady");C(this.g,this.ra,this);this.g=[]};
l.ca=function(){return null};
function oh(a,b){a.sendMessage("infoDelivery",b)}
l.ra=function(a){this.j?this.f.sendMessage(a):this.g.push(a)};
l.sendMessage=function(a,b){this.ra({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function ph(a){mh.call(this);this.b=a;this.h=[];this.addEventListener("onReady",x(this.Ma,this));this.addEventListener("onVideoProgress",x(this.Xa,this));this.addEventListener("onVolumeChange",x(this.Ya,this));this.addEventListener("onApiChange",x(this.Sa,this));this.addEventListener("onPlaybackQualityChange",x(this.Ua,this));this.addEventListener("onPlaybackRateChange",x(this.Va,this));this.addEventListener("onStateChange",x(this.Wa,this));this.addEventListener("onWebglSettingsChanged",x(this.Za,
this))}
A(ph,mh);l=ph.prototype;l.sa=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&$g(a)){var d=b;if(na(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=bh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=ah.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=ch.apply(window,d)}d=e}dh(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);$g(a)&&oh(this,this.ca())}};
l.Ma=function(){var a=x(this.za,this);this.f.b=a};
l.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ca=function(){if(!this.b)return null;var a=this.b.getApiInterface();xa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
l.Wa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());oh(this,a)};
l.Ua=function(a){oh(this,{playbackQuality:a})};
l.Va=function(a){oh(this,{playbackRate:a})};
l.Sa=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.Ya=function(){oh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Xa=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());oh(this,a)};
l.Za=function(){if(this.b.getSphericalProperties){var a={SphericalProperties:this.b.getSphericalProperties()};oh(this,a)}};
l.dispose=function(){ph.u.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.b.removeEventListener(b.eventType,b.listener)}this.h=[]};function qh(){G.call(this);this.b=new I;lc(this,y(mc,this.b))}
A(qh,G);qh.prototype.subscribe=function(a,b,c){return this.h?0:this.b.subscribe(a,b,c)};
qh.prototype.j=function(a,b){this.h||this.b.I.apply(this.b,arguments)};function rh(a,b,c){qh.call(this);this.f=a;this.g=b;this.i=c}
A(rh,qh);function fh(a,b,c){if(!a.h){var d=a.f;d.h||a.g!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(wc(a),d.g))}}
rh.prototype.l=function(){this.g=this.f=null;rh.u.l.call(this)};function sh(a,b,c){G.call(this);this.b=a;this.g=c;this.i=U(window,"message",x(this.j,this));this.f=new rh(this,a,b);lc(this,y(mc,this.f))}
A(sh,G);sh.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin==this.g)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.h||c.j("command",b.command,b.data,a.origin))}};
sh.prototype.l=function(){cf(this.i);this.b=null;sh.u.l.call(this)};function th(){var a=Sa(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||O("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||Q("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=Xa(uh);return new H(function(c,d){b.C=function(a){se(a)?c(a):d(new vh("Request failed, status="+a.status,"net.badstatus",a))};
b.onError=function(a){d(new vh("Unknown request error","net.unknown",a))};
b.L=function(a){d(new vh("Request timed out","net.timeout",a))};
Ae(a,b)})}
function vh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(vh,B);function wh(a){this.h=void 0===a?null:a;this.f=0;this.b=null}
wh.prototype.then=function(a,b,c){return this.h?this.h.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Dc(a)?a:xh(a)):2===this.f&&b?(a=b.call(c,this.b),Dc(a)?a:yh(a)):this};
wh.prototype.getValue=function(){return this.b};
Cc(wh);function yh(a){var b=new wh;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function xh(a){var b=new wh;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function zh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ah;this.isTimeout=a instanceof vh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Rc}
n(zh,B);zh.prototype.name="BiscottiError";function Ah(){B.call(this,"Biscotti ID is missing from server")}
n(Ah,B);Ah.prototype.name="BiscottiMissingError";var uh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Bh=null;function Ch(){if("1"===Sa(Nd(),"args","privembed"))return Ic(Error("Biscotti ID is not available in private embed mode"));Bh||(Bh=Qc(th().then(Dh),function(a){return Eh(2,a)}));
return Bh}
function Dh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ah;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ah;a=a.id;Fh(a);Bh=xh(a);Gh(18E5,2);return a}
function Eh(a,b){var c=new zh(b);Fh("");Bh=yh(c);0<a&&Gh(12E4,a-1);throw c;}
function Gh(a,b){R(function(){Qc(th().then(Dh,function(a){return Eh(b,a)}),ia)},a)}
function Fh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function Hh(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Ch()}catch(b){return Ic(b)}}
;function Ih(a){B.apply(this,arguments)}
n(Ih,B);Ih.prototype.name="YuzuError";function Jh(){var a=new Ih("ID is missing"),b=new Ih("Timeout"),c=null,d=!1;Id(function(){c=Gd();d=!0});
if(d)return c?xh(c):yh(a);var e=new H(function(b,c){Id(function(){var d=Gd();d?b(d):c(a)})}),f=nd().then(function(){return Ic(b)});
return Oc(Lc([e,f]),function(){return f.cancel()})}
;function Kh(a){if("1"!==Sa(Nd(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||sa("yt.ads.biscotti.getId_",Ch));try{var b=Hh();if(Q("enable_yuzu")){v("yt.ads.yuzu.getId_")||t("yt.ads.yuzu.getId_",Jh,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=Ic(d)}}else c=Ic(new Ih("unimplemented"));Mc([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Z||a.Z){b=b.value;a=a.value;var c={};c.dt=Qb;c.flash=xd||"0";a:{try{var d=window.top.location.href}catch(Oa){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?F:h;try{var k=h.history.length}catch(Oa){k=0}d.u_his=k;d.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(d.u_h=F.screen.height,d.u_w=F.screen.width,d.u_ah=F.screen.availHeight,d.u_aw=F.screen.availWidth,d.u_cd=F.screen.colorDepth);F.navigator&&F.navigator.plugins&&(d.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(d.u_nmime=
F.navigator.mimeTypes.length);d.ca_type=wd?"flash":"image";if(Q("enable_server_side_search_pyv")||Q("enable_server_side_mweb_search_pyv")){k=window;try{var m=k.screenX;var u=k.screenY}catch(Oa){}try{var Y=k.outerWidth;var Aa=k.outerHeight}catch(Oa){}try{var ug=k.innerWidth;var vg=k.innerHeight}catch(Oa){}m=[k.screenLeft,k.screenTop,m,u,k.screen?k.screen.availWidth:void 0,k.screen?k.screen.availTop:void 0,Y,Aa,ug,vg];u=window.top;try{var S=(u||window).document,Na="CSS1Compat"==S.compatMode?S.documentElement:
S.body;var Ba=(new Cb(Na.clientWidth,Na.clientHeight)).round()}catch(Oa){Ba=new Cb(-12245933,-12245933)}S={};Na=0;p.SVGElement&&p.document.createElementNS&&(Na|=1);S.bc=Na;S.bih=Ba.height;S.biw=Ba.width;S.brdim=m.join();Ba=(S.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Ob.visibilityState||Ob.webkitVisibilityState||Ob.mozVisibilityState||""]||0,S.wgl=!!F.WebGLRenderingContext,S);for(var Fd in Ba)d[Fd]=Ba[Fd]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=Lh++;Ge("//www.youtube.com/ad_data_204",
{Da:!1,A:d})}});
R(Kh,18E5)}catch(d){P(d)}}}
var Lh=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Mh(){this.b=O("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Wb.get(""+this.b,void 0)){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
l=Mh.prototype;l.get=function(a,b){Nh(a);Oh(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
l.set=function(a,b){Nh(a);Oh(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
l.remove=function(a){Nh(a);Oh(a);delete Z[a]};
l.save=function(){var a=this.b,b=[],c;for(c in Z)b.push(c+"="+encodeURIComponent(String(Z[c])));Vf(a,b.join("&"),63072E3)};
l.clear=function(){for(var a in Z)delete Z[a]};
function Oh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Nh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ph(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ja(Mh);var Qh=null,Rh=null,Sh=null,Th={};function Uh(a){yf(a.payload_name,a.payload,void 0,void 0)}
function Vh(a){var b=a.id;a=a.ve_type;var c=lf++;a=new jf(void 0,a,c,void 0,void 0);Th[b]=a;b=Uf();c=Tf();b&&c&&Yf(b,c,a)}
function Wh(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(N("client-screen-nonce",b),N("ROOT_VE_TYPE",a),b&&yf("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Cf,clientScreenNonce:b}),a=Tf()))for(var c in Th){var d=Th[c];d&&Yf(b,a,d)}}
function Xh(a){Th[a.id]=new jf(a.tracking_params)}
function Yh(a){var b=Uf();a=Th[a.id];b&&a&&(Q("interaction_click_on_gel_web")?yf("visualElementGestured",{csn:b,ve:kf(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"}):Zf({click:{csn:b,visualElement:kf(a)}}))}
function Zh(a){a=a.ids;var b=Uf();if(b)for(var c=0;c<a.length;c++){var d=Th[a[c]];d&&yf("visualElementShown",{csn:b,ve:kf(d),eventType:1})}}
function $h(){var a=Qh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",N,void 0);t("yt.config.set",N,void 0);t("yt.setMsg",Oe,void 0);t("yt.msgs.set",Oe,void 0);
t("yt.logging.errors.log",function(a,b,c,d,e,f){f=f||{};f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Me)){e=a.stacktrace;c=a.columnNumber;d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(Y){h=
"Not available",g=!0}try{var k=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(Y){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(Le[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=e;h={ab:{a:"logerror",t:"jserror",type:a.name,
msg:a.message.substr(0,1E3),line:h,level:void 0===b?"ERROR":b,"client.name":f.name},A:{url:O("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);k&&(h.A.stack=k);for(var m in f)h.A["client."+m]=f[m];if(m=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.A[u]=m[u];Ae(O("ECATCHER_REPORT_HOST","")+"/error_204",h);Le[a.message]=!0;Me++}}},void 0);
t("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);Kh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=O("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);O("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&dh(a.args);Qh=a=Yg(a);a.addEventListener("onScreenChanged",Wh);a.addEventListener("onLogClientVeCreated",Vh);a.addEventListener("onLogServerVeCreated",Xh);a.addEventListener("onLogToGel",Uh);
a.addEventListener("onLogVeClicked",Yh);a.addEventListener("onLogVesShown",Zh);a.addEventListener("onReady",$h);b=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?Sh=new ph(a):O("ENABLE_POST_API")&&r(b)&&r(c)&&(Rh=new sh(window.parent,b,c),Sh=new jh(a,Rh.f));O("BG_P")&&(O("BG_I")||O("BG_IU"))&&me();Ve()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Je(a+"mac_204?action_fcts=1");return!0},void 0);
var ai=Od(function(){yg("ol");var a=Mh.getInstance(),b=!!((Ph("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&pc(document.body,"exp-invert-logo"))if(c&&!pc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):pc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&pc(document.body,"inverted-hdpi")&&qc();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Ph(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),bi=Od(function(){var a=Qh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();O("PL_ATT")&&(le=null);a=0;for(var b=Te.length;a<b;a++)Se(Te[a]);Te.length=0;je("//static.doubleclick.net/instream/ad_status.js");Ue=!1;N("DCLKSTAT",0);nc(Sh,Rh);if(a=Qh)a.removeEventListener("onScreenChanged",Wh),a.removeEventListener("onLogClientVeCreated",Vh),a.removeEventListener("onLogServerVeCreated",Xh),a.removeEventListener("onLogToGel",Uh),a.removeEventListener("onLogVeClicked",Yh),a.removeEventListener("onLogVesShown",Zh),a.removeEventListener("onReady",
$h),a.destroy();Th={}});
window.addEventListener?(window.addEventListener("load",ai),window.addEventListener("unload",bi)):window.attachEvent&&(window.attachEvent("onload",ai),window.attachEvent("onunload",bi));sa("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||oe);sa("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||pe);sa("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||We);sa("yt.player.exports.navigate",v("yt.player.exports.navigate")||Xf);
sa("yt.util.activity.init",v("yt.util.activity.init")||ff);sa("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||hf);sa("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||V);}).call(this);
