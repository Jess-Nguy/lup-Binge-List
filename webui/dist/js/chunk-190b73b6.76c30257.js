(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-190b73b6"],{cd98:function(e,t,r){"use strict";r("d9c5")},d9c5:function(e,t,r){},e1a8:function(e,t,r){"use strict";r("ed6c")},ed6c:function(e,t,r){},ed81:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o={class:"position-absolute bottom--50 start-50 translate-middle-x"};function c(e,t,r,c,a,s){var i=Object(n["resolveComponent"])("users-filter"),u=Object(n["resolveComponent"])("browse-user"),l=Object(n["resolveComponent"])("pagination");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(i,{onUsersFilterChange:s.setUserFilter},null,8,["onUsersFilterChange"]),Object(n["createVNode"])(u,{users:a.listOfUsers},null,8,["users"]),Object(n["createVNode"])("div",o,[Object(n["createVNode"])("footer",null,[Object(n["createVNode"])(l,{modelValue:a.page,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.page=e}),records:a.total,"per-page":a.perPage,onPaginate:t[2]||(t[2]=function(e){return s.onPageChanged(e)})},null,8,["modelValue","records","per-page"])])])])}var a=r("5530"),s=r("1da1"),i=(r("96cf"),Object(n["withScopeId"])("data-v-df3ec068"));Object(n["pushScopeId"])("data-v-df3ec068");var u={key:0,style:{padding:"50px"}},l={class:"row g-0"},d={class:"col-1"},p={class:"col-10"},f={key:1},b=Object(n["createVNode"])("p",{id:"no-users-message"},[Object(n["createVNode"])("strong",null,"No users found")],-1);Object(n["popScopeId"])();var g=i((function(e,t,r,o,c,a){var s=Object(n["resolveComponent"])("router-link");return r.users.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])("div",u,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.users,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{id:"userCards",class:"card",key:e.id_user},[Object(n["createVNode"])("div",l,[Object(n["createVNode"])("div",d,[Object(n["createVNode"])("img",{id:"profileCardsImage",src:e.profile_image,alt:e.username,class:"img-fluid"},null,8,["src","alt"])]),Object(n["createVNode"])("div",p,[Object(n["createVNode"])("div",null,[Object(n["createVNode"])("h4",null,[Object(n["createVNode"])(s,{to:"/account/".concat(e.id_user)},{default:i((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.username),1)]})),_:2},1032,["to"])])])])])])})),128))])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",f,[b]))})),O={props:{users:{type:Array,required:!0,default:function(){return[]}}},components:{},data:function(){return{user:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")}}},watch:{showsArr:function(e){this.showsFilter=e}},mounted:function(){},methods:{}},m=(r("cd98"),r("6b0d")),h=r.n(m);const j=h()(O,[["render",g],["__scopeId","data-v-df3ec068"]]);var v=j,w=Object(n["withScopeId"])("data-v-591fb9e2");Object(n["pushScopeId"])("data-v-591fb9e2");var y={class:"input-group rounded",id:"search-filter-container"},N=Object(n["createVNode"])("span",{class:"input-group-text border-0",id:"search-addon"},[Object(n["createVNode"])("i",{class:"fas fa-search"})],-1);Object(n["popScopeId"])();var V=w((function(e,t,r,o,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])("div",y,[Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"search",class:"form-control rounded",placeholder:"Search users...","aria-label":"Search","aria-describedby":"search-addon","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.query.username=e})},null,512),[[n["vModelText"],c.query.username]]),N])])})),k={data:function(){return{query:{id_user:"",email:"",google_id:"",username:"",role_id:"",time_zone:"",offset:0,limit:4}}},watch:{query:{deep:!0,handler:function(){this.$emit("users-filter-change",this.query)}}}};r("e1a8");const U=h()(k,[["render",V],["__scopeId","data-v-591fb9e2"]]);var I=U,_=r("7e16"),q={data:function(){return{query:{id_user:"",email:"",google_id:"",username:"",role_id:"",time_zone:"",offset:0,limit:4},listOfUsers:[],page:1,perPage:4,total:0,isNotFound:!1}},components:{UsersFilter:I,BrowseUser:v},watch:{query:{deep:!0,handler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUsers();case 2:case"end":return t.stop()}}),t)})))()}}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getUsers();case 1:case"end":return t.stop()}}),t)})))()},methods:{getUsers:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_["a"].getUserByFilter(e.query);case 2:e.listOfUsers=t.sent,e.listOfUsers.length>0?(e.listOfUsers.length<e.perPage&&0==e.query.offset?e.total=e.listOfUsers.length:e.total=e.listOfUsers[0].total,e.isNotFound=!1):(e.total=0,e.isNotFound=!0);case 4:case"end":return t.stop()}}),t)})))()},setUserFilter:function(e){this.query=Object(a["a"])(Object(a["a"])({},this.query),e)},onPageChanged:function(e){this.page=e,this.query.offset=this.query.limit*(e-1)}}};const B=h()(q,[["render",c]]);t["default"]=B}}]);
//# sourceMappingURL=chunk-190b73b6.76c30257.js.map