(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e14b291c"],{ca41:function(n,t,i){"use strict";i.d(t,"n",function(){return r}),i.d(t,"m",function(){return e}),i.d(t,"o",function(){return o}),i.d(t,"q",function(){return u}),i.d(t,"p",function(){return s}),i.d(t,"r",function(){return c}),i.d(t,"t",function(){return l}),i.d(t,"s",function(){return d}),i.d(t,"f",function(){return f}),i.d(t,"a",function(){return g}),i.d(t,"h",function(){return p}),i.d(t,"i",function(){return b}),i.d(t,"b",function(){return m}),i.d(t,"e",function(){return v}),i.d(t,"c",function(){return h}),i.d(t,"j",function(){return C}),i.d(t,"d",function(){return _}),i.d(t,"g",function(){return k}),i.d(t,"l",function(){return w}),i.d(t,"k",function(){return L});var a=i("b775");function r(n){return a["a"].get("/combination/list",n,{login:!1})}function e(n){return a["a"].get("/combination/detail/"+n,{},{login:!1})}function o(n){return a["a"].get("/combination/pink/"+n)}function u(n){return a["a"].post("/combination/remove",n)}function s(n){return a["a"].post("/combination/poster",n)}function c(){return a["a"].get("/seckill/index",{},{login:!1})}function l(n,t){return a["a"].get("/seckill/list/"+n,t,{login:!1})}function d(n,t,i){return a["a"].get("/seckill/detail/"+n+"/"+t+"/"+i,{},{login:!1})}function f(n){return a["a"].get("/bargain/list",n,{login:!1})}function g(n){return a["a"].get("/bargain/detail/"+n)}function p(n){return a["a"].post("/bargain/share",n)}function b(n){return a["a"].post("/bargain/start",n)}function m(n){return a["a"].post("/bargain/help",n)}function v(n){return a["a"].post("/bargain/help/price",n)}function h(n){return a["a"].post("/bargain/help/count",n)}function C(n){return a["a"].post("/bargain/start/user",n)}function _(n){return a["a"].post("/bargain/help/list",n)}function k(n){return a["a"].post("/bargain/poster",n)}function w(n){return a["a"].get("/bargain/user/list",n)}function L(n){return a["a"].post("/bargain/user/cancel",n)}},cbc6:function(n,t,i){"use strict";i.r(t);var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"bargain-list"},[i("div",{staticClass:"header"}),i("div",{staticClass:"list"},[n._l(n.bargainLis,function(t,a){return i("div",{key:a,staticClass:"item acea-row row-between-wrapper"},[i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:t.image}})]),i("div",{staticClass:"text acea-row row-column-around"},[i("div",{staticClass:"line1",domProps:{textContent:n._s(t.title)}}),i("div",{staticClass:"num"},[i("span",{staticClass:"iconfont icon-pintuan"}),n._v(n._s(t.people)+"人正在参与\n        ")]),i("div",{staticClass:"money font-color-red"},[n._v("\n          可砍至: ￥"),i("span",{staticClass:"price",domProps:{textContent:n._s(t.min_price)}})])]),i("div",{staticClass:"cutBnt bg-color-red",on:{click:function(i){return n.goDetail(t.id)}}},[i("span",{staticClass:"iconfont icon-kanjia"}),n._v("参与砍价\n      ")])])}),n.status?n._e():i("div",{staticClass:"load font-color-red",on:{click:n.getBargainList}},[n._v("\n      点击加载更多\n    ")])],2)])},r=[],e=i("ca41"),o={name:"GoodsBargain",components:{},props:{},data:function(){return{bargainLis:[],status:!1,loading:!1,page:1,limit:20}},mounted:function(){this.getBargainList()},methods:{getBargainList:function(){var n=this;n.loading||n.status||(n.loading=!0,Object(e["f"])({page:n.page,limit:n.limit}).then(function(t){n.status=t.data.length<n.limit,n.bargainLis.push.apply(n.bargainLis,t.data),n.page++,n.loading=!1}))},goDetail:function(n){this.$router.push({path:"/activity/dargain_detail/"+n+"/0"})}}},u=o,s=i("2877"),c=Object(s["a"])(u,a,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-e14b291c.aa01ea3b.js.map