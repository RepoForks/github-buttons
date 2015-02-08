(function(){var t,e,n,i,r,o,a,c,s,l,u,f,d,h,p=[].slice,m=function(t,e){for(var n in e){if(g.call(e,n))t[n]=e[n]}function i(){this.constructor=t}i.prototype=e.prototype;t.prototype=new i;t.__super__=e.prototype;return t},g={}.hasOwnProperty;i={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]};if(i.script=document.getElementById(i.scriptId)){i.url=i.script.src.replace(/[?#].*$/,"").replace(/buttons\.js$/,"")}o=function(){var t;function e(){}e.flatten=function(e){var n,i;n=function(e,r){var o,a,c,s,l,u;switch(t.call(e)){case"[object Object]":for(c in e){s=e[c];n(s,r?r+"."+c:c)}break;case"[object Array]":for(o=l=0,u=e.length;l<u;o=++l){a=e[o];n(a,r?r+"["+o+"]":"["+o+"]")}break;default:i[r]=e}};i={};n(e);return i};e.expand=function(e){var n,i,r,o,a,c,s,l,u,f,d,h,p,m;a=[];for(n in e){l=e[n];r=[];p=n.split(".");for(u=0,d=p.length;u<d;u++){i=p[u];o=i.match(/^(.*?)((?:\[[0-9]+\])*)$/);if(o[1]){r.push(o[1])}if(o[2]){m=o[2].replace(/^\[|\]$/g,"").split("][");for(f=0,h=m.length;f<h;f++){c=m[f];r.push(Number(c))}}}s=a;i=0;while(r.length){if(s[i]==null){switch(t.call(r[0])){case"[object String]":s[i]={};break;case"[object Number]":s[i]=[]}}s=s[i];i=r.shift()}s[i]=l}return a[0]};t=Object.prototype.toString;return e}();s=function(){function t(){}t.stringify=function(t){var e,n,i;n=[];for(e in t){i=t[e];if(i==null){i=""}n.push(e+"="+i)}return n.join("&")};t.parse=function(t){var e,n,i,r,o,a,c,s;n={};c=t.split("&");for(o=0,a=c.length;o<a;o++){i=c[o];if(!(i!=="")){continue}s=i.split("="),e=s[0],r=2<=s.length?p.call(s,1):[];if(e!==""){n[e]=r.join("=")}}return n};return t}();c=function(){function t(){}t.encode=function(t){return"#"+encodeURIComponent(s.stringify(o.flatten(t)))};t.decode=function(t){if(t==null){t=document.location.hash}return o.expand(s.parse(decodeURIComponent(t.replace(/^#/,""))))||{}};return t}();r=function(){var t,e,n,i,r,o,a;function c(t,e){this.$=t&&t.nodeType===1?t:document.createElement(t);if(e){e.apply(this,[this.$])}}c.prototype.get=function(){return this.$};c.prototype.on=function(){var t,n,i,r,o,a,c;i=2<=arguments.length?p.call(arguments,0,o=arguments.length-1):(o=0,[]),r=arguments[o++];t=function(t){return function(e){return r.apply(t,[e||window.event])}}(this);for(a=0,c=i.length;a<c;a++){n=i[a];e(this.$,n,t)}};c.prototype.once=function(){var t,n,i,r,o,c,s;i=2<=arguments.length?p.call(arguments,0,o=arguments.length-1):(o=0,[]),r=arguments[o++];t=function(e){return function(n){var o,c,s;for(c=0,s=i.length;c<s;c++){o=i[c];a(e.$,o,t)}return r.apply(e,[n||window.event])}}(this);for(c=0,s=i.length;c<s;c++){n=i[c];e(this.$,n,t)}};c.prototype.addClass=function(e){if(!n(this.$,e)){t(this.$,e)}};c.prototype.removeClass=function(t){if(n(this.$,t)){o(this.$,t)}};c.prototype.hasClass=function(t){return n(this.$,t)};e=function(t,e,n){if(t.addEventListener){t.addEventListener(""+e,n)}else{t.attachEvent("on"+e,n)}};a=function(t,e,n){if(t.removeEventListener){t.removeEventListener(""+e,n)}else{t.detachEvent("on"+e,n)}};r=/[ \t\n\f\r]+/g;i=/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g;t=function(t,e){t.className+=" "+e};o=function(t,e){t.className=(" "+t.className+" ").replace(r," ").replace(" "+e+" ","").replace(i,"")};n=function(t,e){return(" "+t.className+" ").replace(r," ").indexOf(" "+e+" ")>=0};return c}();a=function(t){m(e,t);function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,i,r,o;r={allowtransparency:true,scrolling:"no",frameBorder:0};for(n in r){i=r[n];e.setAttribute(n,i)}o={border:"none",height:"0",width:"1px"};for(n in o){i=o[n];e.style[n]=i}if(t){t.apply(this,[e])}})}e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document;e.open();e.write(t);e.close()}catch(n){}};e.prototype.load=function(t){return this.$.src=t};e.prototype.size=function(){var t,e,n,i;try{e=this.$.contentWindow.document;n=e.documentElement;t=e.body;n.style.overflow=t.style.overflow=window.opera?"scroll":"visible";i={width:t.scrollWidth+"px",height:t.scrollHeight+"px"};n.style.overflow=t.style.overflow="";return i}catch(r){return{}}};e.prototype.resize=function(t){var e,n,i;i=t!=null?t:this.size(),n=i.width,e=i.height;if(n){this.$.style.width=n}if(e){return this.$.style.height=e}};return e}(r);t=function(){var t;function e(){}e.parse=function(e){var n,i,r;return{href:t(e.href),text:e.getAttribute("data-text")||e.textContent||e.innerText,data:{count:{api:(n=e.getAttribute("data-count-api"))&&~n.indexOf("#")?("/"!==n.charAt(0)?n="/"+n:void 0,n):void 0,href:t(e.getAttribute("data-count-href"))||t(e.href)},style:(r=e.getAttribute("data-style"))?r:void 0,icon:(i=e.getAttribute("data-icon"))?i:void 0}}};t=function(t){if(/^\s*javascript:/i.test(t)){return""}else{return t}};return e}();e=function(t){m(e,t);function e(){var t,n,o;n=arguments[0],t=2<=arguments.length?p.call(arguments,1):[];e.__super__.constructor.call(this,t.shift());o=function(e){return function(){var r;r=e.size();e.once("load",function(){this.resize(r);if(t[0]){t.shift().apply(this,[this.$])}});e.load(i.url+"buttons.html"+n)}}(this);this.once("load",function(){var t,e;if(t=this.$.contentWindow.callback){e=t.script;if(e.readyState){new r(e).on("readystatechange",function(){if(/loaded|complete/.test(e.readyState)){o()}})}else{new r(e).on("load","error",function(){o()})}}else{o()}});this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+i.url+'assets/css/buttons.css">\n<style>html{visibility:hidden;}</style>\n<script>document.location.hash = "'+n+'";</script>\n</head>\n<body>\n<script src="'+i.script.src+'"></script>\n</body>\n</html>')}return e}(a);n=function(){var t,e;function n(n){if(n&&n.data){document.body.className=function(){var t,e,r,o;o=i.styles;for(e=0,r=o.length;e<r;e++){t=o[e];if(t===n.data.style){return t}}return i.styles[0]}();if(n.href){document.getElementsByTagName("base")[0].href=n.href}new t(n,function(t){document.body.appendChild(t)});new e(n,function(t){document.body.appendChild(t)})}}t=function(t){m(e,t);function e(t,n){e.__super__.constructor.call(this,"a",function(e){e.className="button";if(t.href){e.href=t.href}new r("i",function(n){n=document.createElement("i");n.className=function(){var e;e=[t.data.icon||i.icon];if(i.iconClass){e.push(i.iconClass)}return e.join(" ")}();e.appendChild(n)});new r("span",function(t){t.appendChild(document.createTextNode(" "));e.appendChild(t)});new r("span",function(n){if(t.text){n.appendChild(document.createTextNode(t.text))}e.appendChild(n)});if(n){n(e)}})}return e}(r);e=function(t){m(e,t);function e(t,n){if(t.data.count&&t.data.count.api){e.__super__.constructor.call(this,"a",function(e){e.className="count";if(t.data.count.href){e.href=t.data.count.href}new r("b",function(t){e.appendChild(t)});new r("i",function(t){e.appendChild(t)});new r("span",function(a){var c;e.appendChild(a);c=function(){var e,n;n=t.data.count.api.split("#")[0];e=s.parse(n.split("?").slice(1).join("?"));e.callback="callback";return n.split("?")[0]+"?"+s.stringify(e)}();new r("script",function(r){var s;r.async=true;r.src=""+i.api+c;window.callback=function(i){var r;window.callback=null;if(i.meta.status===200){r=o.flatten(i.data)[t.data.count.api.split("#").slice(1).join("#")];if(Object.prototype.toString.call(r)==="[object Number]"){r=r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}a.appendChild(document.createTextNode(" "+r+" "));if(n){n(e)}}};window.callback.script=r;this.on("error",function(){window.callback=null});if(r.readyState){this.on("readystatechange",function(){if(r.readyState==="loaded"&&r.children&&r.readyState==="loading"){window.callback=null}})}s=document.getElementsByTagName("head")[0];s.insertBefore(r,s.firstChild)})})})}}return e}(r);return n}();if(i.script){if(document.querySelectorAll){u=document.querySelectorAll("a."+i.anchorClass)}else{u=function(){var t,e,n,o;n=document.getElementsByTagName("a");o=[];for(t=0,e=n.length;t<e;t++){l=n[t];if(new r(l).hasClass(i.anchorClass)){o.push(l)}}return o}()}f=function(n){new e(c.encode(t.parse(n)),function(t){n.parentNode.insertBefore(t,n)},function(){n.parentNode.removeChild(n)})};for(d=0,h=u.length;d<h;d++){l=u[d];f(l)}}else{new n(c.decode())}}).call(this);
//# sourceMappingURL=buttons.js.map