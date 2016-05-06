(function(){var t,e,n,a,r,o,i,c,s,l,u,h,d,f,p,b,g,m,y,w,v,_,C,$,k=[].slice,x=function(t,e){function n(){this.constructor=t}for(var a in e)E.call(e,a)&&(t[a]=e[a]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},E={}.hasOwnProperty;$=this,C=$.document,o="https://api.github.com",r="github-button",i="octicon",c=i+"-mark-github",s=C.getElementById("github-bjs"),s&&(l=s.src.replace(/[^\/]*([?#].*)?$/,"")),p=function(){function t(){}var e;return t.flatten=function(t){var e,n;return e=function(t,a){var r,o,i,c,s,l;switch(Object.prototype.toString.call(t)){case"[object Object]":for(c in t)l=t[c],e(l,a?a+"."+c:c);break;case"[object Array]":for(r=i=0,s=t.length;s>i;r=++i)o=t[r],e(o,a+"["+r+"]");break;default:n[a]=t}},n={},e(t,""),n},t.expand=function(t){var n,a,r,o,i,c;o=[];for(n in t){for(c=t[n],r=n.match(/((?!\[\d+\])[^.])+|\[\d+\]/g),i=o,a=0;r.length;)null==i[a]&&(i[a]=r[0]===e(r[0])?{}:[]),i=i[a],a=e(r.shift());i[a]=c}return o[0]},e=function(t){var e;return(e=t.match(/^\[(\d+)\]$/))?Number(e[1]):t},t}(),_=function(){function t(){}return t.stringify=function(t){var e,n,a;n=[];for(e in t)a=t[e],n.push(encodeURIComponent(e)+"="+(null!=a?encodeURIComponent(a):""));return n.join("&")},t.parse=function(t){var e,n,a,r,o,i,c,s;for(r={},i=t.split("&"),e=0,a=i.length;a>e;e++)o=i[e],""!==o&&(c=o.split("="),n=c[0],s=2<=c.length?k.call(c,1):[],""!==n&&(r[decodeURIComponent(n)]=decodeURIComponent(s.join("="))));return r},t}(),y=function(){function t(){}return t.encode=function(t){return"#"+_.stringify(p.flatten(t))},t.decode=function(t){return null==t&&(t=C.location.hash),p.expand(_.parse(t.replace(/^#/,"")))||{}},t}(),f=function(){function t(t){this.$=t}var e,n;return t.prototype.on=function(){var t,n,a,r,o,i,c;for(a=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),r=arguments[o++],t=function(t){return function(e){return r.call(t,e||$.event)}}(this),i=0,c=a.length;c>i;i++)n=a[i],e(this.$,n,t)},t.prototype.once=function(){var t,a,r,o,i,c,s;for(r=2<=arguments.length?k.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++],t=function(e){return function(a){var i,c,s;for(c=0,s=r.length;s>c;c++)i=r[c],n(e.$,i,t);return o.call(e,a||$.event)}}(this),c=0,s=r.length;s>c;c++)a=r[c],e(this.$,a,t)},e=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},n=function(t,e,n){t.removeEventListener?t.removeEventListener(""+e,n):t.detachEvent("on"+e,n)},t}(),d=function(t){function e(t,e){this.$=t&&1===t.nodeType?t:C.createElement(t),e&&e.call(this,this.$)}var n,a,r,o;return x(e,t),e.prototype.addClass=function(t){a(this.$,t)||n(this.$,t)},e.prototype.removeClass=function(t){a(this.$,t)&&o(this.$,t)},e.prototype.hasClass=function(t){return a(this.$,t)},n=function(t,e){t.className+=" "+e},o=function(t,e){t.className=(" "+t.className+" ").replace(r," ").replace(" "+e+" ","").replace(/^ | $/,"")},a=function(t,e){return(" "+t.className+" ").replace(r," ").indexOf(" "+e+" ")>=0},r=/[ \t\n\f\r]+/g,e}(f),g=function(t){function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,a,r;a={allowtransparency:!0,scrolling:"no",frameBorder:0};for(n in a)r=a[n],e.setAttribute(n,r);e.style.cssText="width: 1px; height: 0; border: none",e.src="javascript:0",t&&t.call(this,e)})}var n,a;return x(e,t),e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document,e.open().write(t),e.close()}catch(n){}},e.prototype.load=function(t){this.$.src=t},e.prototype.size=function(){var t,e,n,r,o,i;try{return n=this.$.contentWindow.document,o=n.documentElement,t=n.body,i=o.scrollWidth,r=o.scrollHeight,t.getBoundingClientRect&&(t.style.display="inline-block",e=t.getBoundingClientRect(),i=Math.max(i,a(e.width||e.right-e.left)),r=Math.max(r,a(e.height||e.bottom-e.top)),t.style.display=""),{width:i+"px",height:r+"px"}}catch(c){}},e.prototype.resize=function(t){var e,n,a;n=null!=t?t:this.size()||{},a=n.width,e=n.height,a&&(this.$.style.width=a),e&&(this.$.style.height=e)},n=$.devicePixelRatio||1,a=function(t){return n>1?Math.ceil(Math.round(t*n)/n*2)/2||0:Math.ceil(t)||0},e}(d),t=function(){function t(){}return t.parse=function(t){return{href:t.href,text:t.getAttribute("data-text")||t.textContent||t.innerText||"",data:{count:{api:t.getAttribute("data-count-api")||"",href:t.getAttribute("data-count-href")||t.href,aria:{label:t.getAttribute("data-count-aria-label")||""}},style:t.getAttribute("data-style")||"",icon:t.getAttribute("data-icon")||""},aria:{label:t.getAttribute("aria-label")||""}}},t}(),n=function(t){function e(t,n,a){var r;e.__super__.constructor.call(this,n),r=function(e){return function(){var n;r=null,n=e.size(),e.$.parentNode.removeChild(e.$),e.once("load",function(){this.resize(n)}),e.load(l+"buttons.html"+t),a&&a.call(e,e.$)}}(this),this.once("load",function(){var t;(t=this.$.contentWindow.callback)?new d(t.script,function(t){this.on("load","error",function(){r&&r()}),t.readyState&&this.on("readystatechange",function(){!/i/.test(t.readyState)&&r&&r()})}):r()}),this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<link rel="stylesheet" href="'+l+'assets/css/buttons.css">\n<script>document.location.hash = "'+t+'";</script>\n</head>\n<body>\n<script src="'+s.src+'"></script>\n</body>\n</html>')}return x(e,t),e}(g),a=function(){function t(t){t&&t.data&&(C.body.className=t.data.style||"",new e(t.href,null,function(e){e.className="button",t.aria.label&&e.setAttribute("aria-label",t.aria.label),new d("i",function(n){n.className=t.data.icon||c,i&&this.addClass(i),n.setAttribute("aria-hidden","true"),e.appendChild(n)}),e.appendChild(C.createTextNode(" ")),new d("span",function(n){t.text&&n.appendChild(C.createTextNode(t.text)),e.appendChild(n)}),C.body.appendChild(e)}),function(t,n){t&&t.api&&new e(t.href,n,function(e){e.className="count",new d("b",function(t){e.appendChild(t)}),new d("i",function(t){e.appendChild(t)}),new d("span",function(n){var a;e.appendChild(n),a=function(){var e,n;return n=t.api.replace(/^(?!\/)/,"/").split("#")[0],e=_.parse(n.split("?").slice(1).join("?")),e.callback="callback",n.split("?")[0]+"?"+_.stringify(e)}(),new d("script",function(r){var i;r.async=!0,r.src=""+o+a,$.callback=function(a){var r;$.callback=null,200===a.meta.status&&(r=p.flatten(a.data)[t.api.split("#").slice(1).join("#")],"[object Number]"===Object.prototype.toString.call(r)&&(r=(""+r).replace(/\B(?=(\d{3})+(?!\d))/g,",")),n.appendChild(C.createTextNode(r)),t.aria.label&&e.setAttribute("aria-label",t.aria.label.replace("#",r)),C.body.appendChild(e))},$.callback.script=r,this.on("error",function(){$.callback=null}),r.readyState&&this.on("readystatechange",function(){"loaded"===r.readyState&&r.children&&"loading"===r.readyState&&($.callback=null)}),i=C.getElementsByTagName("head")[0],$.opera?new f(C).on("DOMContentLoaded",function(){i.appendChild(r)}):i.appendChild(r)})})})}(t.data.count,t.href))}var e;return e=function(t){function e(t,i,c){e.__super__.constructor.call(this,"a",function(e){if(n){if((e.href=i)&&e.protocol!==a)try{e.href=new URL(t,i).href}catch(s){n.href=i,e.href=t,new d("div",function(t){t.innerHTML=e.outerHTML,e.href=t.lastChild.href,t=null}),n.href=C.location.href,n.removeAttribute("href")}else e.href=t;r.test(e.href)&&(e.target="_top"),e.protocol!==a&&o.test("."+e.hostname)||(e.href="#",e.target="_self")}c(e)})}var n,a,r,o;return x(e,t),n=C.getElementsByTagName("base")[0],a="javascript:",o=/\.github\.com$/,r=/^https?:\/\/((gist\.)?github\.com\/[^\/]+\/[^\/]+\/archive\/|github\.com\/[^\/]+\/[^\/]+\/releases\/download\/|codeload\.github\.com\/)/,e}(d),t}(),h=function(){function t(t){var e;/m/.test(C.readyState)||!/g/.test(C.readyState)&&!C.documentElement.doScroll?$.setTimeout(t):C.addEventListener?new f(C).once("DOMContentLoaded",t):(e=function(){/m/.test(C.readyState)&&(C.detachEvent("onreadystatechange",e),t&&t())},C.attachEvent("onreadystatechange",e))}return t}(),m=function(){function t(){}return t.low_rate_limit=!1,$.callback=function(e){t.rate_limit=e.data,t.low_rate_limit=t.rate_limit.resources.core.remaining<16},t.update=function(){$.callback.script||new d("script",function(t){var e;t.async=!0,t.src="https://api.github.com/rate_limit?callback=callback",$.callback.script=t,this.on("readystatechange","load","error",function(){t.readyState&&!/loaded|complete/.test(t.readyState)||(t.parentNode.removeChild(t),$.callback.script=null)}),e=C.getElementsByTagName("head")[0],e.insertBefore(t,e.firstChild)})},t.update(),t}(),b=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return x(e,t),e.prototype.on=function(){var t,n,a,r,o,i,c,s;if(a=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),r=arguments[o++],a.indexOf("change")>=0)for(t=function(t){return function(e){return r.call(t,e||$.event)}}(this),s=this.$.elements,i=0,c=s.length;c>i;i++)n=s[i],new d(n).on("change","input",t);return e.__super__.on.apply(this,arguments)},e.prototype.serialize=function(){var t,e,n,a,r;for(t={},r=this.$.elements,e=0,n=r.length;n>e;e++)if(a=r[e],a.name)switch(a.type){case"radio":case"checkbox":a.checked&&(t[a.name]=a.value);break;default:t[a.name]=a.value}return t},e}(d),w=function(t){function e(t,n){var a,o,i,c;i=t.href,c=t.text,o=t.data,a=t.aria,e.__super__.constructor.call(this,"a",function(t){var e,s;t.className=r,t.href=i,t.appendChild(C.createTextNode(""+c));for(e in o)s=o[e],t.setAttribute("data-"+e,s);for(e in a)s=a[e],t.setAttribute("aria-"+e,s);n&&n(t)})}return x(e,t),e}(d),v=function(t){function e(t){e.__super__.constructor.call(this,function(e){t.appendChild(e),e.src="buttons.html"}),this.on("load",function(){var t,e;(t=this.$.contentWindow.callback)?(e=t.script,e.readyState?new d(e).on("readystatechange",function(){/loaded|complete/.test(e.readyState)&&this.resize()}):new d(e).on("load","error",function(){this.resize()})):this.resize()})}return x(e,t),e.prototype.load=function(t){var e;e=this.$.parentNode,e.removeChild(this.$),e.style.height=("mega"===t.data.style?28:20)+2+"px",this.$.style.width="1px",this.$.style.height="0",this.$.src="buttons.html"+y.encode(t),e.appendChild(this.$)},e}(g),u=function(t){function e(){e.__super__.constructor.apply(this,arguments),this.on("focus",function(){this.$.select()}),this.on("click",function(){this.$.select()}),this.on("mouseup",function(t){return t.preventDefault(),!1})}return x(e,t),e}(d),e=function(e){function n(e,n){var o,i,c,s,l,u,h,d,f;this.$=e,s=n.content,u=n.preview,o=u.button,l=u.frame,c=u.code,f=u.warning,h=n.snippet,d=n.user_repo,h.$.value='<!-- Place this tag anywhere on your page. -->\n<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>',i=function(e){return function(n){var i,u,h,p,b,g,v,_,C,$;if(u=n.force,_=e.serialize(),_.type){for(s.removeClass("hidden"),C=["repo","standard-icon"],h=0,b=C.length;b>h;h++)v=C[h],e.$.elements[v].disabled="follow"===_.type;for($=["show-count"],p=0,g=$.length;g>p;p++)v=$[p],e.$.elements[v].disabled="download"===_.type;_.user&&!r(_.user)||"follow"!==_.type&&_.repo&&!a(_.repo)?d.addClass("has-error"):(d.removeClass("has-error"),""===_.user||"follow"!==_.type&&""===_.repo?d.addClass("has-warning"):d.removeClass("has-warning")),(d.hasClass("has-error")||d.hasClass("has-warning"))&&(_.user="ntkme",_.repo="github-buttons"),(e.cache!==(i=y.encode(_))||u)&&(e.cache=i,new w(e.parse(_),function(n){var a;c.$.value="<!-- Place this tag where you want the button to render. -->\n"+n.outerHTML,o.addClass("hidden"),null!=_["show-count"]&&"download"!==_.type&&(m.update(),m.low_rate_limit&&(o.removeClass("hidden"),a=new Date(1e3*m.rate_limit.resources.core.reset),(!e.reset||a>e.reset)&&(e.reset=a,f.removeClass("hidden")),u?f.addClass("hidden"):n.removeAttribute("data-count-api"))),l.load(t.parse(n)),n=null}))}}}(this),o.on("click",function(t){return t.preventDefault(),i({force:!0}),!1}),this.on("change",i)}var a,r;return x(n,e),n.prototype.parse=function(t){var e,n,a,r;if(null==t&&(t=this.serialize()),a=t.type,r=t.user,n=t.repo,e={className:"github-button",href:function(){switch(a){case"follow":return"https://github.com/"+r;case"watch":case"star":return"https://github.com/"+r+"/"+n;case"fork":return"https://github.com/"+r+"/"+n+"/fork";case"issue":return"https://github.com/"+r+"/"+n+"/issues";case"download":return"https://github.com/"+r+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(a){case"follow":return"Follow @"+r;default:return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}}(),data:{icon:function(){switch(a){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-repo-forked";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()},aria:{label:function(){switch(a){case"follow":return"Follow @"+r+" on GitHub";case"watch":case"star":case"fork":case"issue":case"download":return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()+" "+r+"/"+n+" on GitHub";default:return"GitHub"}}()}},null!=t["large-button"]&&(e.data.style="mega"),null!=t["show-count"])switch(a){case"follow":e.data["count-href"]="/"+r+"/followers",e.data["count-api"]="/users/"+r+"#followers",e.data["count-aria-label"]="# followers on GitHub";break;case"watch":e.data["count-href"]="/"+r+"/"+n+"/watchers",e.data["count-api"]="/repos/"+r+"/"+n+"#subscribers_count",e.data["count-aria-label"]="# watchers on GitHub";break;case"star":e.data["count-href"]="/"+r+"/"+n+"/stargazers",e.data["count-api"]="/repos/"+r+"/"+n+"#stargazers_count",e.data["count-aria-label"]="# stargazers on GitHub";break;case"fork":e.data["count-href"]="/"+r+"/"+n+"/network",e.data["count-api"]="/repos/"+r+"/"+n+"#forks_count",e.data["count-aria-label"]="# forks on GitHub";break;case"issue":e.data["count-api"]="/repos/"+r+"/"+n+"#open_issues_count",e.data["count-aria-label"]="# issues on GitHub"}return null==t["standard-icon"]&&"octicon-mark-github"!==e.data.icon||delete e.data.icon,e},r=function(t){var e;return 0<(e=t.length)&&40>e&&!/[^A-Za-z0-9-]|^-|-$|--/i.test(t)},a=function(t){var e;return 0<(e=t.length)&&101>e&&!/[^\w-.]|\.git$|^\.\.?$/i.test(t)},n}(b),new h(function(){new e(C.getElementById("button-config"),{content:new d(C.getElementById("content")),user_repo:new d(C.getElementById("user-repo")),preview:{button:new d(C.getElementById("preview-button")),frame:new v(C.getElementById("preview")),code:new u(C.getElementById("code")),warning:new d(C.getElementById("preview-warning"))},snippet:new u(C.getElementById("snippet"))})}),this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map