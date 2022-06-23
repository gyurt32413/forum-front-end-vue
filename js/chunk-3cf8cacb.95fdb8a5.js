(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cf8cacb"],{"1e06":function(t,e,a){},"2b93":function(t,e,a){"use strict";a("1e06")},5652:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.createCategory.apply(null,arguments)}}},[t._v(" 新增 ")])])])]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.categories,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(e.name)+" ")]),a("input",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:e.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return t.handleCancel(e.id)}}},[t._v(" ✕ ")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.toggleIsEditing(e.id)}}},[t._v(" Edit ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.updateCategory({categoryId:e.id,name:e.name})}}},[t._v(" Save ")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteCategory(e.id)}}},[t._v(" Delete ")])])])})),0)])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])])}],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("d9e2"),a("d81d"),a("4de4"),a("d3b7"),a("b0c0"),a("e04c")),c=a("be6c"),u=a("2fa3"),d={components:{AdminNav:o["a"]},data:function(){return{categories:[],newCategoryName:"",isProcessing:!1}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].categories.get();case 3:if(a=e.sent,r=a.data,n=a.statusText,"OK"===n){e.next=8;break}throw new Error(n);case 8:t.categories=r.categories.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{isEditing:!1})})),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),u["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},createCategory:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isProcessing=!0,e.next=4,c["a"].categories.create({name:t.newCategoryName});case 4:if(a=e.sent,r=a.data,n=a.statusText,"OK"===n){e.next=9;break}throw new Error(n);case 9:t.categories.push(Object(s["a"])(Object(s["a"])({},r.category),{},{isEditing:!1})),t.isProcessing=!1,t.newCategoryName="",t.fetchCategories(),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](0),t.isProcessing=!1,u["a"].fire({type:"error",title:"無法新增餐廳類別，請稍後再試"});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()},deleteCategory:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].categories.delete({categoryId:t});case 3:if(r=a.sent,n=r.data,s=r.statusText,"OK"===s&&"success"===n.status){a.next=8;break}throw new Error(s);case 8:e.categories=e.categories.filter((function(e){return e.id!==t})),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),u["a"].fire({type:"error",title:"無法刪除該餐廳類別，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},toggleIsEditing:function(t){this.categories=this.categories.map((function(e){return e.id===t?Object(s["a"])(Object(s["a"])({},e),{},{isEditing:!e.isEditing,nameCached:e.name}):e}))},updateCategory:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.categoryId,n=t.name,a.prev=1,a.next=4,c["a"].categories.update({categoryId:r,name:n});case 4:if(s=a.sent,i=s.data,o=s.statusText,"OK"===o&&"success"===i.status){a.next=9;break}throw new Error(o);case 9:e.toggleIsEditing(r),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](1),u["a"].fire({type:"error",title:"無法更新餐廳類別，請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[1,12]])})))()},handleCancel:function(t){this.categories=this.categories.map((function(e){return e.id===t?Object(s["a"])(Object(s["a"])({},e),{},{name:e.nameCached}):e})),this.toggleIsEditing(t)}}},l=d,g=(a("2b93"),a("2877")),m=Object(g["a"])(l,r,n,!1,null,"7c93628c",null);e["default"]=m.exports},be6c:function(t,e,a){"use strict";a("b0c0");var r=a("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e))},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("/admin/categories/".concat(e),{name:a})}},restaurants:{create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},get:function(){return r["b"].get("/admin/restaurants")},delete:function(t){return r["b"].delete("/admin/restaurants/".concat(t))},getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a)}},users:{get:function(){return r["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:a},{headers:{Authorization:"Bearer ".concat(n())}})}}}},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-3cf8cacb.95fdb8a5.js.map