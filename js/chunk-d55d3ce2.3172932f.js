(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55d3ce2"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(t){return r("div",{key:t.id,staticClass:"col-3"},[r("a",{attrs:{href:"#"}},[r("img",{staticStyle:{"object-fit":"cover"},attrs:{src:t.image,width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(t.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(t.FollowerCount))]),r("p",{staticClass:"mt-3"},[t.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return e.deleteFollowing(t.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return e.addFollowing(t.id)}}},[e._v(" 追蹤 ")])])])})),0)],1)},a=[],o=r("5530"),s=r("1da1"),c=(r("96cf"),r("d81d"),r("b0c0"),r("d9e2"),r("8bb1")),i=r("4cce"),l=r("2fa3"),u={data:function(){return{users:[]}},components:{NavTabs:c["a"]},created:function(){this.fetchUserTop()},methods:{fetchUserTop:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i["a"].getTopUsers();case 3:r=t.sent,n=r.data,console.log(n),e.users=n.users.map((function(e){return{id:e.id,name:e.name,image:e.image,FollowerCount:e.FollowerCount,isFollowed:e.isFollowed}})),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("error",t.t0),l["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},addFollowing:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i["a"].addFollowing({userId:e});case 3:if(n=r.sent,a=n.data,console.log("data",a),"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.users=t.users.map((function(t){return t.id!==e?t:Object(o["a"])(Object(o["a"])({},t),{},{followerCount:t.followerCount+1,isFollowed:!0})})),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log("error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},deleteFollowing:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.users=t.users.map((function(t){return t.id!==e?t:Object(o["a"])(Object(o["a"])({},t),{},{followerCount:t.followerCount-1,isFollowed:!1})})),console.log(t.users),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log("error",r.t0),l["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},d=u,p=r("2877"),w=Object(p["a"])(d,n,a,!1,null,null,null);t["default"]=w.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),s=o("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d55d3ce2.3172932f.js.map