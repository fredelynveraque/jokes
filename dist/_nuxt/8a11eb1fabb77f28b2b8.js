(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(t,e,n){t.exports=n(135)},135:function(t,e,n){"use strict";n.r(e),function(t){n(48),n(104),n(3);var e=n(24),r=(n(58),n(109),n(18)),o=(n(110),n(111),n(2),n(1),n(4),n(23),n(114),n(144),n(152),n(154),n(7)),c=n(129),l=n(91),f=n(8),h=n(42),d=n(76);o.default.component(d.a.name,d.a),o.default.component("NLink",d.a),t.fetch||(t.fetch=c.a);var m,x,v=[],y=window.__NUXT__||{};Object.assign(o.default.config,{silent:!0,performance:!1});var w=o.default.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function k(t,e,n){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,l,h,d=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._pathChanged=Boolean(m.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(f.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,this._pathChanged||!this._queryChanged){t.next=11;break}return t.next=8,Object(f.n)(e,(function(t,e){return{Component:t,instance:e}}));case 8:o=t.sent,o.some((function(t){var r=t.Component,o=t.instance,c=r.options.watchQuery;return!0===c||(Array.isArray(c)?c.some((function(t){return d._diffQuery[t]})):"function"==typeof c&&c.apply(o,[e.query,n.query]))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();case 11:r(),t.next=25;break;case 14:if(t.prev=14,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,h=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(h)){t.next=22;break}return window.location.reload(!0),t.abrupt("return");case 22:this.error({statusCode:l,message:h}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 25:case"end":return t.stop()}}),t,this,[[4,14]])})))).apply(this,arguments)}function O(t,e){return y.serverRendered&&e&&Object(f.a)(t,e),t._Ctor=t,t}function $(t){var path=Object(f.d)(t.options.base,t.options.mode);return Object(f.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=O(Object(f.o)(e),y.data?y.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function j(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(f.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof l.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),l.a[t])})),!c)return Object(f.k)(o,e)}function E(t,e,n){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,l,d,x,y,w,k,C,O,$,E,R,T,P,S,N,A=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?v=[]:(o=[],v=Object(f.e)(n,o).map((function(t,i){return Object(f.b)(n.matched[o[i]].path)(n.params)}))),c=!1,l=function(path){n.path===path.path&&A.$loading.finish&&A.$loading.finish(),n.path!==path.path&&A.$loading.pause&&A.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(f.p)(m,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err),d=[],(x=Object(f.e)(e,d)).length){t.next=25;break}return t.next=14,j.call(this,x,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof h.a.layout?h.a.layout(m.context):h.a.layout);case 18:return y=t.sent,t.next=21,j.call(this,x,m.context,y);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return x.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(_(x,e,n)),t.prev=27,t.next=30,j.call(this,x,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=x[0].options.layout)&&(w=w(m.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,j.call(this,x,m.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:k=!0,t.prev=46,C=!0,O=!1,$=void 0,t.prev=50,E=x[Symbol.iterator]();case 52:if(C=(R=E.next()).done){t.next=64;break}if("function"==typeof(T=R.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,T.options.validate(m.context);case 58:if(k=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:C=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),O=!0,$=t.t0;case 70:t.prev=70,t.prev=71,C||null==E.return||E.return();case 73:if(t.prev=73,!O){t.next=76;break}throw $;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(k){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(x.map((function(t,i){if(t._path=Object(f.b)(e.matched[d[i]].path)(e.params),t._dataRefresh=!1,A._pathChanged&&A._queryChanged||t._path!==v[i])t._dataRefresh=!0;else if(!A._pathChanged&&A._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)?t._dataRefresh=r.some((function(t){return A._diffQuery[t]})):"function"==typeof r&&(P||(P=Object(f.f)(e)),t._dataRefresh=r.apply(P[i],[e.query,n.query]))}if(A._hadError||!A._isMounted||t._dataRefresh){var o=[],c=t.options.asyncData&&"function"==typeof t.options.asyncData,l=Boolean(t.options.fetch),h=c&&l?30:45;if(c){var x=Object(f.m)(t.options.asyncData,m.context).then((function(e){Object(f.a)(t,e),A.$loading.increase&&A.$loading.increase(h)}));o.push(x)}if(A.$loading.manual=!1===t.options.loading,l){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((function(t){A.$loading.increase&&A.$loading.increase(h)})),o.push(p)}return Promise.all(o)}})));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(S=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,S));case 97:return v=[],Object(f.i)(S),"function"==typeof(N=h.a.layout)&&(N=N(m.context)),t.next=103,this.loadLayout(N);case 103:this.error(S),this.$nuxt.$emit("routeChanged",e,n,S),r();case 106:case"end":return t.stop()}}),t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])})))).apply(this,arguments)}function T(t,n){Object(f.c)(t,(function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.default.extend(t))._Ctor=t,r.components[c]=t),t}))}function P(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?h.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function S(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=Object(f.f)(t),c=Object(f.e)(t);o.default.nextTick((function(){r.forEach((function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&c[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.default.set(t.$data,n,e[n]);window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}})),P.call(n,t)}))}}function N(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),x.afterEach((function(e,n){o.default.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}function A(){return(A=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,x=e.router,n=new o.default(m),r=y.layout||"default",t.next=6,n.loadLayout(r);case 6:return n.setLayout(r),c=function(){n.$mount("#__nuxt"),x.afterEach(T),x.afterEach(S.bind(n)),o.default.nextTick((function(){N(n)}))},t.next=10,Promise.all($(x));case 10:if(l=t.sent,n.setTransitions=n.$options.nuxt.setTransitions.bind(n),l.length&&(n.setTransitions(_(l,x.currentRoute)),v=x.currentRoute.matched.map((function(t){return Object(f.b)(t.path)(x.currentRoute.params)}))),n.$loading={},y.error&&n.error(y.error),x.beforeEach(k.bind(n)),x.beforeEach(E.bind(n)),!y.serverRendered){t.next=20;break}return c(),t.abrupt("return");case 20:h=function(){T(x.currentRoute,x.currentRoute),P.call(n,x.currentRoute),c()},E.call(n,x.currentRoute,x.currentRoute,(function(path){if(path){var t=x.afterEach((function(e,n){t(),h()}));x.push(path,void 0,(function(t){t&&w(t)}))}else h()}));case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(h.b)().then((function(t){return A.apply(this,arguments)})).catch(w)}.call(this,n(43))},163:function(t,e,n){"use strict";var r=n(73);n.n(r).a},164:function(t,e,n){(t.exports=n(71)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:28.125rem}.__nuxt-error-page .title{font-size:1.5rem;margin-top:.9375rem;color:#47494e;margin-bottom:.5rem}.__nuxt-error-page .description{color:#7f828b;line-height:1.3125rem;margin-bottom:.625rem}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:.75rem;bottom:.75rem}",""])},165:function(t,e,n){"use strict";var r=n(74);n.n(r).a},166:function(t,e,n){(t.exports=n(71)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:.125rem;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",""])},42:function(t,e,n){"use strict";n(58),n(5),n(3),n(2),n(1),n(4);var r=n(18),o=n(0),c=(n(23),n(7)),l=n(130),f=n(92),h=n.n(f),d=n(47),m=n.n(d),x=n(93),v=n(8);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));c.default.use(x.a);var y={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(v.e)(t);o.length<2&&o.every((function(t){return!1!==t.options.scrollToTop}))?r={x:0,y:0}:o.some((function(t){return t.options.scrollToTop}))&&(r={x:0,y:0}),n&&(r=n);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/about",component:function(){return Object(v.j)(n.e(3).then(n.bind(null,210)))},name:"about"},{path:"/jokes",component:function(){return Object(v.j)(Promise.all([n.e(0),n.e(6)]).then(n.bind(null,207)))},name:"jokes"},{path:"/jokes/:id",component:function(){return Object(v.j)(Promise.all([n.e(0),n.e(5)]).then(n.bind(null,209)))},name:"jokes-id"},{path:"/",component:function(){return Object(v.j)(n.e(4).then(n.bind(null,208)))},name:"index"}],fallback:!1};var w,_={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var h=c[f]||l,d={};k.forEach((function(t){void 0!==h[t]&&(d[t]=h[t])}));var m={};C.forEach((function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))}));var x=m.beforeEnter;if(m.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),x)return x.call(o,t)},!1===h.css){var v=m.leave;(!v||v.length<2)&&(m.leave=function(t,e){v&&v.call(o,t),o.$nextTick(e)})}var y=t("routerView",data);return r.keepAlive&&(y=t("keep-alive",{props:r.keepAliveProps},[y])),t("transition",{props:d,on:m},[y])}},k=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],C=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],O={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},$=(n(163),n(29)),j=Object($.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,E=(n(35),n(36),n(16),n(57)),R={name:"Nuxt",components:{NuxtChild:_,NuxtError:j},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured:function(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(v.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(E.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){var e=this;return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick((function(){return e.errorFromNuxtError=!1})),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick((function(){return e.displayingNuxtError=!1})),t(j,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},T=(n(48),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),P=(n(165),Object($.a)(T,void 0,void 0,!1,null,null,null).exports),S=(n(167),n(169),{name:"AppHeader"}),N={components:{AppHeader:Object($.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",{staticClass:"title"},[this._v("Fred Jokes")]),this._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/"}},[this._v("Home")])],1),this._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/jokes"}},[this._v("Jokes")])],1),this._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/about"}},[this._v("About")])],1)])])}),[],!1,null,null,null).exports}},A={_default:Object($.a)(N,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("AppHeader"),this._v(" "),e("nuxt")],1)}),[],!1,null,null,null).exports},D={head:{title:"fredJokes",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Sample Jokes"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:(w=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=Object(v.f)(this.$route)).length){t.next=3;break}return t.abrupt("return");case 3:return this.$loading.start(),n=e.map((function(t){var p=[];return t.$options.fetch&&p.push(Object(v.m)(t.$options.fetch,r.context)),t.$options.asyncData&&p.push(Object(v.m)(t.$options.asyncData,r.context).then((function(e){for(var n in e)c.default.set(t.$data,n,e[n])}))),Promise.all(p)})),t.prev=5,t.next=8,Promise.all(n);case 8:t.next=15;break;case 10:t.prev=10,t.t0=t.catch(5),this.$loading.fail(),Object(v.i)(t.t0),this.error(t.t0);case 15:this.$loading.finish();case 16:case"end":return t.stop()}}),t,this,[[5,10]])}))),function(){return w.apply(this,arguments)}),errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&A["_"+t]||(t="default"),this.layoutName=t,this.layout=A["_"+t],this.layout},loadLayout:function(t){return t&&A["_"+t]||(t="default"),Promise.resolve(A["_"+t])}},components:{NuxtLoading:P}},L=n(132);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.default.use(L.a,{}),n.d(e,"b",(function(){return J})),n.d(e,"a",(function(){return j})),c.default.component(h.a.name,h.a),c.default.component(m.a.name,I({},m.a,{render:function(t,e){return m.a._warned||(m.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),m.a.render(t,e)}})),c.default.component(_.name,_),c.default.component("NChild",_),c.default.component(R.name,R),c.default.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var B={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function J(t){return F.apply(this,arguments)}function F(){return(F=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l,path;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new x.a(y);case 2:return n=t.sent,r=I({router:n,nuxt:{defaultTransition:B,transitions:[B],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},B,{name:t}):Object.assign({},B,t):B})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=Boolean(t),t=t?Object(v.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},D),o=e?e.next:function(t){return r.router.push(t)},e?l=n.resolve(e.url).route:(path=Object(v.d)(n.options.base),l=n.resolve(path).route),t.next=8,Object(v.p)(r,{route:l,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use((function(){c.default.prototype.hasOwnProperty(t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})})))}),t.next=12;break;case 12:t.next=15;break;case 15:return t.abrupt("return",{app:r,router:n});case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},73:function(t,e,n){var content=n(164);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("72daabed",content,!0,{sourceMap:!1})},74:function(t,e,n){var content=n(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("3191d5ad",content,!0,{sourceMap:!1})},76:function(t,e,n){"use strict";n(1),n(104),n(3),n(2),n(110),n(111);var r=n(7),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},c=window.cancelIdleCallback||function(t){clearTimeout(t)},l=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()}))}));e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.prefetch&&!this.noPrefetch&&(this.handleId=o(this.observe,{timeout:2e3}))},beforeDestroy:function(){c(this.handleId),this.__observed&&(l.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){l&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),l.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetchLink:function(){if(this.canPrefetch()){l.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var f=o.value,h=f();h instanceof Promise&&h.catch((function(){})),f.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}}},8:function(t,e,n){"use strict";n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return x})),n.d(e,"a",(function(){return v})),n.d(e,"o",(function(){return y})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return _})),n.d(e,"c",(function(){return k})),n.d(e,"n",(function(){return C})),n.d(e,"h",(function(){return O})),n.d(e,"p",(function(){return j})),n.d(e,"k",(function(){return R})),n.d(e,"m",(function(){return T})),n.d(e,"d",(function(){return P})),n.d(e,"b",(function(){return S})),n.d(e,"g",(function(){return N})),n.d(e,"l",(function(){return A}));n(5),n(3);var r=n(57),o=(n(27),n(156),n(157),n(24)),c=(n(35),n(36),n(87),n(125),n(16),n(58),n(18)),l=(n(48),n(2),n(1),n(4),n(23),n(0)),f=n(7);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t){f.default.config.errorHandler&&f.default.config.errorHandler(t)}function x(t){return t.then((function(t){return t.default||t}))}function v(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),d({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=f.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function _(t){return w(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1],"instances")}function k(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function C(t,e){return Promise.all(k(t,function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n,r,o,c){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return o.components[c]=n=y(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function O(t){return $.apply(this,arguments)}function $(){return($=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,C(e);case 4:return t.abrupt("return",d({},e,{meta:w(e).map((function(t,n){return d({},t.options.meta,{},(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var c,l,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=B(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([O(n.route),O(n.from)]);case 3:c=t.sent,l=Object(r.a)(c,2),f=l[0],h=l[1],n.route&&(e.context.route=f),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!1,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():T(t[0],e).then((function(){return R(t.slice(1),e)}))}function T(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function P(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function S(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=(r||{}).pretty?L:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var f=data[l.name||"pathMatch"],h=void 0;if(null==f){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(h=o(f[d]),!e[c].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===d?l.prefix:l.delimiter)+h}}else{if(h=l.asterisk?L(f,!0):o(f),!e[c].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+h+'"');path+=l.prefix+h}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var f=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+f.length,h)path+=h[1];else{var m=t[c],x=n[2],v=n[3],y=n[4],w=n[5],_=n[6],k=n[7];path&&(r.push(path),path="");var C=null!=x&&null!=m&&m!==x,O="+"===_||"*"===_,$="?"===_||"*"===_,j=n[2]||l,pattern=y||w;r.push({name:v||o++,prefix:x||"",delimiter:j,optional:$,repeat:O,partial:C,asterisk:Boolean(k),pattern:pattern?I(pattern):k?".*":"[^"+M(j)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function N(t,e){var n={},r=d({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function A(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return d({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function M(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function I(t){return t.replace(/([=!:$/()])/g,"\\$1")}function B(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,l=t.split("/"),f=(n?n+"://":"//")+l.shift(),path=l.filter(Boolean).join("/");if(2===(l=path.split("#")).length){var h=l,d=Object(r.a)(h,2);path=d[0],c=d[1]}return f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),f+=c?"#"+c:""}},91:function(t,e,n){"use strict";e.a={}}},[[134,7,2,8]]]);