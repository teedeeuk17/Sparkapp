;/* Version 3bfb0615b5020b36fe75066f8e99bfac #2013-09-04_17-18-21 rc8b2cfcdfd5d81554d6c7d15c5d51c6de1339513 12 */(function(){var f=!0,h=null,j=!1;
if(!(window.ADRUM||window["adrum-disable"]===f)){window["adrum-start-time"]=window["adrum-start-time"]||(new Date).getTime();var k="https:"===document.location.protocol;window.ADRUM={beaconUrlHttp:"http://col.eum-appdynamics.com",beaconUrlHttps:"https://col.eum-appdynamics.com",appKey:window["adrum-app-key"]||"AD-AAB-AAA-DHM",adrumExtUrl:(k?"https://de8of677fyt0b.cloudfront.net":"http://de8of677fyt0b.cloudfront.net")+"/adrum-ext.3bfb0615b5020b36fe75066f8e99bfac.js",geoResolverUrl:k?"":""};var s=window.ADRUM;
s.Aa=function(n){return 0<=n.location.search.indexOf("ADRUM_debug=true")||0<=n.cookie.search(/(^|;)\s*ADRUM_debug=true/)};s.iDR=s.Aa;s.l=s.Aa(document);s.$=100;s.logMessages=[];for(var t=["debug","warn","info","error"],v=0;v<t.length;v++)(function(n){s[n]=function(r,d){s.l&&s.logMessages.push([n,Array.prototype.slice.call(arguments).join(" | ")])}})(t[v]);var x=0;s.o=function(n){2<=x||(n=s.beaconUrlHttps+"/eumcollector/error.gif?version=1&appKey="+s.appKey+"&msg="+encodeURIComponent(n.substring(0,
500)),(new Image).src=n,x++)};var y=s.error;s.error=function(){if(0<arguments.length){var n=Array.prototype.slice.call(arguments).join(" | ");y(n);s.o(n)}};s.assert=function(n,r){n||s.error("Assert fail: "+r)};s.l&&(s.dumpLog=function(){for(var n="",r=0;r<s.logMessages.length;r++)var d=s.logMessages[r],n=n+("["+d[0]+"]\t"+d[1].replace(/<br\/>/g,"\n\t")+"\n");return n});s.info("M0");s.addEventListener=function(n,r,d){function e(){try{return d.apply(this,Array.prototype.slice.call(arguments))}catch(e){s.error("M2",
r,n,e)}}s.l&&s.debug("M1",r,n);n.attachEvent?n.attachEvent("on"+r,e):n.addEventListener&&n.addEventListener(r,e,j)};s.compareWindows=function(n,r){return n==r};s.ta=function(){function n(n){s.debug("M4",n);var r=new Date;r.setTime(r.getTime()-1E3);document.cookie=n+"=;Expires="+r.toGMTString()}s.info("M3");for(var r=[],d=/^\s*ADRUM_/,e=/^\s*ADRUM=s=([\d]+)&r=(.*)\s*/,g=document.cookie.split(";"),l=0;l<g.length;l++){var m=g[l];if(0<=m.search(d)){var p=m.split("=");if(2==p.length){var q=p[0].split("_"),
u;if(u=4==q.length)u=document.referrer,u=q[2]==(u?u.length:0);u&&(n(p[0]),r.push(p[1]),s.debug("M5",m))}}if(p=e.exec(m))s.debug("M6",m),3===p.length?(s.startTimeCookie={startTime:Number(p[1]),startPage:p[2]},n("ADRUM")):s.error("M7")}s.cookieMetadataChunks=r};s.ta();s.q=[];s.isDead=j;s.command=function(n,r){s.l&&s.debug("M8",n,Array.prototype.slice.call(arguments).slice(1).join(", "));s.isDead?s.debug("M9"):s.q.length>=s.$?(s.info("M10"),s.q=[],s.isDead=f):(s.q.push(Array.prototype.slice.call(arguments)),
s.processQ&&s.processQ())};s.command("mark","firstbyte",window["adrum-start-time"]);s.k={z:function(n){return!n||"apply"in n},f:function(n,r,d,e){s.assert(this.z(n),"M11");r=r||function(){};n=n||function(){};d=d||function(){};return function(){s.l&&s.debug("M12",e,Array.prototype.slice.call(arguments).join(", "));var g=Array.prototype.slice.call(arguments),l;try{l=r.apply(this,g)}catch(m){s.error("Failure in interceptor ["+e+"] entry: "+m)}s.assert(!l||"[object Array]"===Object.prototype.toString.call(l));
var p=void 0;try{p=n.apply(this,l||g)}finally{try{d.apply(this,g)}catch(q){s.error("Failure in interceptor ["+e+"] exit: "+q)}}return p}}};var z=j;s.listenForErrors=function(){s.k.z(window.onerror)?(window.onerror=s.k.f(window.onerror,function(n,r,d){z||s.command("reportError",n,r,d);z=f},function(){z=j},"onerror"),s.windowErrorHandler=window.onerror,s.info("M13")):s.info("M14")};s.listenForErrors();s.addEventListener(window,"load",function(){setTimeout(function(){s.command("mark","onload",(new Date).getTime());
s.ha=h;var n=window.performance||window.a||window.b||window.c;if(n&&n.timing)if(n=n.timing,n.navigationStart&&n.navigationStart<=n.loadEventEnd){var r={},d;for(d in n){var e=n[d];"number"===typeof e&&(r[d]=e)}s.ha=r}else s.debug("M40");s.command("reportOnload");d=document.createElement("script");d.async=f;d.src=s.adrumExtUrl;(n=document.getElementsByTagName("script")[0])?(n.parentNode.insertBefore(d,n),s.info("M41")):s.info("M42")},0);s.info("M15")});var B=j,C=function(){B||(s.command("mark","onready",
(new Date).getTime()),B=f)},D=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",D,j),C()):"complete"===document.readyState&&(document.detachEvent("onreadystatechange",D),C())};if(document.addEventListener)document.addEventListener("DOMContentLoaded",D,j),window.addEventListener("load",C,j);else{document.attachEvent("onreadystatechange",D);window.attachEvent("onload",C);var E=j;try{E=window.frameElement==h&&document.documentElement}catch(F){}E&&E.doScroll&&function G(){try{E.doScroll("left")}catch(r){setTimeout(G,
10);return}C()}()}s.info("M16");if(window["adrum-xhr-disable"]===f)s.info("M17");else if(window.XMLHttpRequest){var H=window.XMLHttpRequest.prototype;if(H)if("open"in H&&"send"in H)if(!s.k.z(H.open)||!s.k.z(H.send))s.info("M21");else{s.info("M22");var I=function(n){var r=n._adrumXhrData;if(r){var d=(new Date).getTime();2==n.readyState?r.firstByteTime=r.firstByteTime||d:4==n.readyState&&(s.assert(r.respAvailTime===h,"M23"),r.respAvailTime=r.respAvailTime||d,r.firstByteTime=r.firstByteTime||d)}},J=
function(n,r){var d=n.getAllResponseHeaders(),e=n.status;s.command("reportXhr",r,d,e,400<=e?n.responseText:h)},K=function(n,r,d){var e=n;n&&("object"===typeof n&&"toString"in n&&"[xpconnect wrapped nsIDOMEventListener]"===n.toString()&&"handleEvent"in n)&&(e=function(){n.handleEvent.apply(this,Array.prototype.slice.call(arguments))});return s.k.f(e,function(){I(this)},function(){var n=r._adrumXhrData;if(n&&4==r.readyState){var d=(new Date).getTime();s.assert(n.respProcTime===h,"M24");n.respProcTime=
n.respProcTime||d;J(r,n);delete r._adrumXhrData}},d)},L=function(n){if(n._adrumXhrData){var r=(new Date).getTime()+3E4,d=function(){I(n);var e=n._adrumXhrData;if(e){var g=(new Date).getTime();4==n.readyState?(s.assert(e.respProcTime===h,"M25"),e.respProcTime=e.respProcTime||g,s.debug("M26"),J(n,e),delete n._adrumXhrData):g<r?setTimeout(d,50):(delete n._adrumXhrData,s.debug("M27"))}};d()}};H.open=s.k.f(H.open,function(){this._adrumXhrData={url:2<=arguments.length?String(arguments[1]):"",sendTime:h,
firstByteTime:h,respAvailTime:h,respProcTime:h}},h,"XHR.open");H.send=s.k.f(H.send,function(){var n=this,r=n._adrumXhrData;if(r){var d=(new Date).getTime();s.assert(r.sendTime===h,"M28");r.sendTime=r.sendTime||d;var e=r.url,d=document.createElement("a");d.href=e;e=document.location;":"===d.protocol&&""===d.hostname&&""===d.port||d.protocol===e.protocol&&d.hostname===e.hostname&&d.port===e.port?n.setRequestHeader("ADRUM","isAjax:true"):s.debug("M29",document.location.href,r.url);var g=0,l=function(){var r=
h;try{r=n.onreadystatechange}catch(d){s.debug("M30",d);L(n);return}g++;r?s.k.z(r)?(n.onreadystatechange=K(r,n,"XHR.onReadyStateChange"),s.debug("M31",g)):(s.debug("M32"),L(n)):5>g?setTimeout(l,0):(s.debug("M33"),L(n))};l()}},h,"XHR.send");var M="addEventListener"in H&&"removeEventListener"in H&&s.k.z(H.addEventListener)&&s.k.z(H.removeEventListener);s.ra=function(){return function(n,r){if(!("load"!==n&&"error"!==n)&&r&&this._adrumXhrData){var d;d=r;if(d.__adrumInterceptor)d=d.__adrumInterceptor;else if(s.k.z(d)){var e=
K(d,this,"XHR.invokeEventListener");d=d.__adrumInterceptor=e}else d=h;if(d)return e=Array.prototype.slice.call(arguments),e[1]=d,s.debug("M34"),e;s.debug("M35",n,r)}}};M?(H.addEventListener=s.k.f(H.addEventListener,s.ra(),h,"XHR.addEventListener"),H.removeEventListener=s.k.f(H.removeEventListener,function(n,r){if(this._adrumXhrData){var d=Array.prototype.slice.call(arguments);r.__adrumInterceptor?(d[1]=r.__adrumInterceptor,s.debug("M36")):s.debug("M37");return d}},h,"XHR.removeEventListener")):s.debug("M38");
s.info("M39")}else s.info("M20");else s.info("M19")}else s.info("M18")};})();
/*
//@ sourceMappingURL=https://eumsm.eum-appdynamics.com/jsagent-sm/3bfb0615b5020b36fe75066f8e99bfac/adrum.js.map
*/