(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2219f80a"],{1844:function(t,e,a){"use strict";a("b1c8")},"9cab":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("SpinnerVue"):[a("h1",{staticClass:"mt-5"},[t._v("最新動態")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新餐廳")]),a("NewestRestaurants",{attrs:{restaurants:t.restaurants}})],1),a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新評論")]),a("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=a("1da1"),i=(a("96cf"),a("8bb1")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新餐廳")]),a("div",{staticClass:"card-body"},t._l(t.restaurants,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v(t._s(e.name))]),a("small",[t._v(t._s(e.Category?e.Category.name:"未分類"))])],1),a("p",[t._v(" "+t._s(e.description)+" ")]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")])})),0)])},o=[],u=a("2708"),d={props:{restaurants:{type:Array,required:!0}},mixins:[u["b"]]},l=d,m=(a("1844"),a("2877")),v=Object(m["a"])(l,c,o,!1,null,"359d0f92",null),_=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新評論")]),a("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.Restaurant.id}}}},[t._v(" "+t._s(e.Restaurant.name)+" ")])],1),a("p",[t._v(t._s(e.text))]),t._v(" by "),a("a",{attrs:{href:"#"}},[t._v(" "+t._s(e.User.name)+" ")]),t._v(" at "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")])})),0)])},p=[],h={mixins:[u["b"]],props:{comments:{type:Array,required:!0}}},b=h,w=Object(m["a"])(b,f,p,!1,null,null,null),C=w.exports,y=a("2fa3"),g=a("c4c3"),k=a("2375"),x={name:"RestaurantsFeeds",components:{NavTabs:i["a"],NewestRestaurants:_,NewestComments:C,SpinnerVue:k["a"]},data:function(){return{restaurants:[],comments:[],isLoading:!0}},methods:{fetchFeeds:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,g["a"].getFeeds();case 4:a=e.sent,s=a.data,t.restaurants=s.restaurants,t.comments=s.comments,t.isLoading=!1,e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](0),t.isLoading=!1,y["a"].fire({icon:"error",title:"無法取得最新回應，請稍後再試"}),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},created:function(){this.fetchFeeds()}},N=x,R=Object(m["a"])(N,s,r,!1,null,null,null);e["default"]=R.exports},b1c8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2219f80a.8f8e7d53.js.map