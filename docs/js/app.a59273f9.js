(function(e){function n(n){for(var r,c,s=n[0],i=n[1],l=n[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,s=1;s<t.length;s++){var i=t[s];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},a=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/qr-scanner-pwa/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"1f45":function(e,n,t){},5603:function(e,n,t){"use strict";t("1f45")},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:""}},[t("div",{staticClass:"d-flex align-center"},[e._v(" QR Code scanner ")])]),t("v-main",[t("QrCodeScanner")],1)],1)},a=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("v-row",{staticClass:"text-center"},[t("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[t("v-row",{attrs:{justify:"center"}},[t("qrcode-stream",{staticClass:"cam",on:{decode:e.onDecode,init:e.onInit}})],1)],1),t("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[t("v-row",{staticClass:"text-row",attrs:{justify:"center"}},[t("p",{staticClass:"error"},[e._v(e._s(e.error))]),t("v-textarea",{staticClass:"btn",attrs:{outlined:"",dense:"","auto-grow":"",rows:"1",name:"input-7-4",label:e.hints,value:e.result}})],1),t("v-row",{attrs:{justify:"center"}},[t("v-btn",{staticClass:"primary btn",on:{click:e.onCopy}},[e._v("Copy")]),t("v-btn",{staticClass:"primary btn",on:{click:e.onOpen}},[e._v("Open")])],1)],1)],1)],1)},s=[],i=t("1da1"),l=t("d4ec"),u=t("bee2"),p=t("262e"),f=t("2caf"),d=(t("96cf"),t("b0c0"),t("9ab4")),v=t("2fe1"),b=t("bb6f"),h=t.n(b),m=function(e){Object(p["a"])(t,e);var n=Object(f["a"])(t);function t(){var e;return Object(l["a"])(this,t),e=n.apply(this,arguments),e.result="",e.error="",e.popup="",e.hints="",e}return Object(u["a"])(t,[{key:"onDecode",value:function(e){console.log("onDecode ".concat(e)),e.length>0&&(this.result=e),this.hints="Scanned"}},{key:"onCopy",value:function(){var e=this;console.log("onCopy ".concat(this.result));var n=function n(t){t.clipboardData.setData("text/plain",e.result),t.preventDefault(),document.removeEventListener("copy",n)};document.addEventListener("copy",n),document.execCommand("copy"),this.hints="Copied"}},{key:"onOpen",value:function(){console.log("onOpen ".concat(this.result)),this.hints="Opened",window.open(this.result,"_blank"),window.open(this.result)}},{key:"onInit",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:t=e.sent,t.capabilities,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0),"NotAllowedError"===e.t0.name||"NotFoundError"===e.t0.name||"NotSupportedError"===e.t0.name||"NotReadableError"===e.t0.name||"OverconstrainedError"===e.t0.name||e.t0.name;case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,7,11,13]])})));function n(n){return e.apply(this,arguments)}return n}()}]),t}(r["a"]);m=Object(d["a"])([Object(v["a"])({name:"QrCodeScanner",components:{QrcodeStream:b["QrcodeStream"]}})],m);var y=m,w=y,g=(t("5603"),t("2877")),O=t("6544"),j=t.n(O),C=t("8336"),x=t("62ad"),k=t("a523"),_=t("0fd9"),S=t("a844"),E=Object(g["a"])(w,c,s,!1,null,"93bb04b2",null),V=E.exports;j()(E,{VBtn:C["a"],VCol:x["a"],VContainer:k["a"],VRow:_["a"],VTextarea:S["a"]});var A=r["a"].extend({name:"App",components:{QrCodeScanner:V},data:function(){return{}}}),N=A,P=t("7496"),D=t("40dc"),Q=t("f6c4"),M=Object(g["a"])(N,o,a,!1,null,null,null),R=M.exports;j()(M,{VApp:P["a"],VAppBar:D["a"],VMain:Q["a"]});var q=t("9483");Object(q["a"])("".concat("/qr-scanner-pwa/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var T=t("f309");r["a"].use(T["a"]);var B=new T["a"]({});r["a"].config.productionTip=!1,r["a"].use(h.a),new r["a"]({vuetify:B,render:function(e){return e(R)}}).$mount("#app")}});
//# sourceMappingURL=app.a59273f9.js.map