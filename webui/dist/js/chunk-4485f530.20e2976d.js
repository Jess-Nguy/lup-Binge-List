(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4485f530"],{"03b7":function(t,e,a){"use strict";a("51e9")},"0e90":function(t,e,a){"use strict";var n=a("7a23"),o=Object(n["A"])("data-v-3962de16");Object(n["s"])("data-v-3962de16");var c=Object(n["e"])('<div class="vstack gap-2 col-md-1 mx-auto" data-v-3962de16><label class="form-label" for="form6Example2" data-v-3962de16>Country</label><div class="form-outline btn-group" data-v-3962de16><button id="form6Example2" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-v-3962de16> Country </button><ul class="dropdown-menu" data-v-3962de16><li data-v-3962de16><a class="dropdown-item" href="#" data-v-3962de16>Canada</a></li></ul></div><label class="form-label" for="form6Example2" data-v-3962de16>Genre</label><div class="form-outline btn-group" data-v-3962de16><button id="form6Example2" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-v-3962de16> Genre </button><ul class="dropdown-menu" data-v-3962de16><li data-v-3962de16><a class="dropdown-item" href="#" data-v-3962de16>Comedy</a></li></ul></div><label class="form-label" for="form6Example2" data-v-3962de16>Year</label><div class="form-outline btn-group" data-v-3962de16><button id="form6Example2" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-v-3962de16> - </button><ul class="dropdown-menu" data-v-3962de16><li data-v-3962de16><a class="dropdown-item" href="#" data-v-3962de16>1998</a></li></ul></div><label data-v-3962de16>to</label><div class="form-outline btn-group" data-v-3962de16><button id="form6Example2" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-v-3962de16> - </button><ul class="dropdown-menu" data-v-3962de16><li data-v-3962de16><a class="dropdown-item" href="#" data-v-3962de16>2021</a></li></ul></div></div>',1);Object(n["q"])();var d=o((function(t,e){return Object(n["p"])(),Object(n["c"])("div",null,[c])})),l=(a("3a24"),a("d959")),r=a.n(l);const s={},b=r()(s,[["render",d],["__scopeId","data-v-3962de16"]]);e["a"]=b},"34fd":function(t,e,a){},"3a24":function(t,e,a){"use strict";a("34fd")},"51e9":function(t,e,a){},"86f2":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),o={class:"accountList"},c=Object(n["g"])("h1",null,"My List",-1),d=Object(n["g"])("h3",null,"Watching",-1),l=Object(n["g"])("h3",null,"Completed",-1),r=Object(n["g"])("h3",null,"Paused",-1),s=Object(n["g"])("h3",null,"Dropped",-1),b=Object(n["g"])("h3",null,"Planning",-1);function i(t,e,a,i,u,v){var p=Object(n["v"])("account-nav"),g=Object(n["v"])("account-list-filter"),f=Object(n["v"])("account-list-shows");return Object(n["p"])(),Object(n["c"])("div",o,[c,Object(n["g"])(p),Object(n["g"])(g),d,Object(n["g"])(f),l,Object(n["g"])(f),r,Object(n["g"])(f),s,Object(n["g"])(f),b,Object(n["g"])(f)])}var u=a("5530"),v=a("5502"),p=Object(n["A"])("data-v-6702be5c");Object(n["s"])("data-v-6702be5c");var g=Object(n["e"])('<div class="btn-group-vertical" data-v-6702be5c><button type="button" class="btn btn-primary" data-v-6702be5c>All</button><button type="button" class="btn btn-primary" data-v-6702be5c>Watching</button><button type="button" class="btn btn-primary" data-v-6702be5c>Completed</button><button type="button" class="btn btn-primary" data-v-6702be5c>Paused</button><button type="button" class="btn btn-primary" data-v-6702be5c>Dropped</button><button type="button" class="btn btn-primary" data-v-6702be5c>Planning</button></div>',1);Object(n["q"])();var f=p((function(t,e,a,o,c,d){var l=Object(n["v"])("favourite-filter");return Object(n["p"])(),Object(n["c"])("div",null,[g,Object(n["g"])(l)])})),O=a("0e90"),j={components:{FavouriteFilter:O["a"]}},m=(a("f5e2"),a("d959")),h=a.n(m);const w=h()(j,[["render",f],["__scopeId","data-v-6702be5c"]]);var y=w,x=Object(n["e"])('<table class="table table-striped table-hover"><thead><tr><th scope="col"></th><th scope="col">Title</th><th scope="col">Score</th><th scope="col">Progress</th><th scope="col">Edit</th></tr></thead><tbody><tr><th scope="row">IMAGE</th><td>Show title</td><td>number score</td><td>number progress</td><td>edit icon</td></tr></tbody></table>',1);function k(t,e){return Object(n["p"])(),Object(n["c"])("div",null,[x])}const E={},_=h()(E,[["render",k]]);var A=_,L=a("f59a"),C={components:{AccountNav:L["a"],AccountListFilter:y,AccountListShows:A},data:function(){return{}},name:"My List",computed:{getUser:function(){return this.$store.getters.getUser}},mounted:function(){var t=this;this.$store.subscribe((function(e,a){console.log(e.type),console.log(e.payload),console.log("USER: ",a),t.user=a}));var e=localStorage.getItem("user-token");e?(this.getUser||this.login(e),console.log("My List mount")):this.$router.push("/")},methods:Object(u["a"])({},Object(v["b"])(["login"]))};const S=h()(C,[["render",i]]);e["default"]=S},b56d:function(t,e,a){},f59a:function(t,e,a){"use strict";var n=a("7a23"),o=Object(n["A"])("data-v-473177e6");Object(n["s"])("data-v-473177e6");var c={class:"navbar navbar-expand-lg navbar-light bg-light",id:"AccountNavHeader"},d={class:"navbar-nav mr-auto"},l={class:"nav-item"},r=Object(n["f"])("Overview"),s={class:"nav-item"},b=Object(n["f"])("My List"),i={class:"nav-item"},u=Object(n["f"])("Favourite"),v={class:"nav-item"},p=Object(n["f"])("Social");Object(n["q"])();var g=o((function(t,e){var a=Object(n["v"])("router-link");return Object(n["p"])(),Object(n["c"])("div",null,[Object(n["g"])("div",c,[Object(n["g"])("ul",d,[Object(n["g"])("li",l,[Object(n["g"])(a,{to:"/account",class:"nav-link"},{default:o((function(){return[r]})),_:1})]),Object(n["g"])("li",s,[Object(n["g"])(a,{to:"/accountList",class:"nav-link"},{default:o((function(){return[b]})),_:1})]),Object(n["g"])("li",i,[Object(n["g"])(a,{to:"/favourite",class:"nav-link"},{default:o((function(){return[u]})),_:1})]),Object(n["g"])("li",v,[Object(n["g"])(a,{to:"/social",class:"nav-link"},{default:o((function(){return[p]})),_:1})])])])])})),f=(a("03b7"),a("d959")),O=a.n(f);const j={},m=O()(j,[["render",g],["__scopeId","data-v-473177e6"]]);e["a"]=m},f5e2:function(t,e,a){"use strict";a("b56d")}}]);
//# sourceMappingURL=chunk-4485f530.20e2976d.js.map