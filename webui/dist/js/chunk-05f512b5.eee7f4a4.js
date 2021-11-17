(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05f512b5"],{"093a":function(e,t,n){"use strict";n("d5a8")},"26d3":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"settings"},c=Object(r["createVNode"])("h1",null,"Settings",-1),i={class:"card"},o={class:"card-body"},s=Object(r["createVNode"])("h3",null,"Add the webpage's Banners",-1),u=Object(r["createVNode"])("label",{for:"image-link1"},"Banner 1: ",-1),l=Object(r["createVNode"])("br",null,null,-1),d=Object(r["createVNode"])("label",{for:"image-link1"},"Banner 2: ",-1),b=Object(r["createVNode"])("br",null,null,-1),m=Object(r["createVNode"])("label",{for:"image-link1"},"Banner 3: ",-1),p=Object(r["createVNode"])("br",null,null,-1),g=Object(r["createVNode"])("button",{type:"submit",class:"btn btn-primary"},"Update Banners",-1),f={class:"card-body"},j=Object(r["createVNode"])("label",{for:"account-username"},"Username* : ",-1),O={key:0,class:"requiredFields"},v={class:"card-body"},h=Object(r["createVNode"])("label",{for:"image-link"},"Time zone: ",-1),V={class:"btn-group"},w=Object(r["createVNode"])("option",{value:""},"-",-1),N=Object(r["createVNode"])("div",{class:"card-footer"},[Object(r["createVNode"])("button",{type:"submit",class:"btn btn-primary"},"Save")],-1);function k(e,t,n,k,x,B){return Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[c,Object(r["createVNode"])("div",i,[Object(r["createVNode"])("div",o,[Object(r["createVNode"])("img",{src:x.user.profile_image,alt:"profile image",width:"100",height:"100"},null,8,["src"]),Object(r["withDirectives"])(Object(r["createVNode"])("div",null,[Object(r["createVNode"])("form",{onSubmit:t[4]||(t[4]=Object(r["withModifiers"])((function(){return B.updateBanners&&B.updateBanners.apply(B,arguments)}),["prevent"]))},[s,u,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",id:"image-link1","onUpdate:modelValue":t[1]||(t[1]=function(e){return x.banners[0]=e})},null,512),[[r["vModelText"],x.banners[0]]]),Object(r["createVNode"])("img",{src:x.banners[0],alt:"banner image 1",width:"350",height:"200"},null,8,["src"]),l,d,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",id:"image-link2","onUpdate:modelValue":t[2]||(t[2]=function(e){return x.banners[1]=e})},null,512),[[r["vModelText"],x.banners[1]]]),Object(r["createVNode"])("img",{src:x.banners[1],alt:"banner image 2",width:"350",height:"200"},null,8,["src"]),b,m,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",id:"image-link3","onUpdate:modelValue":t[3]||(t[3]=function(e){return x.banners[2]=e})},null,512),[[r["vModelText"],x.banners[2]]]),Object(r["createVNode"])("img",{src:x.banners[2],alt:"banner image 3",width:"350",height:"200"},null,8,["src"]),p,g],32)],512),[[r["vShow"],x.isAdmin]])]),Object(r["createVNode"])("form",{onSubmit:t[7]||(t[7]=Object(r["withModifiers"])((function(){return B.updateUserDetails&&B.updateUserDetails.apply(B,arguments)}),["prevent"]))},[Object(r["createVNode"])("div",f,[j,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",id:"account-username","onUpdate:modelValue":t[5]||(t[5]=function(e){return x.username=e})},null,512),[[r["vModelText"],x.username]]),x.v$.username.$error?(Object(r["openBlock"])(),Object(r["createBlock"])("div",O,"Genre field is required")):Object(r["createCommentVNode"])("",!0)]),Object(r["createVNode"])("div",v,[h,Object(r["createVNode"])("div",V,[Object(r["withDirectives"])(Object(r["createVNode"])("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return x.timezone=e}),id:"timezoneDropdown",class:"form-select","aria-label":"Default select example"},[w,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(x.timezones,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{key:t},Object(r["toDisplayString"])(e),1)})),128))],512),[[r["vModelSelect"],x.timezone]])])]),N],32)])])}var x=n("1da1"),B=(n("ac1f"),n("5319"),n("96cf"),n("7e16")),y=n("9965"),U=n("25a0"),I={data:function(){return{v$:Object(U["a"])(),isAdmin:!1,banners:[n("2a54"),n("275d"),n("8cd3")],username:localStorage.getItem("username"),user:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")},timezones:[],timezone:""}},name:"Settings",computed:{getTimezone:function(){return this.$store.getters.getTimezone}},mounted:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.timezones=e.getTimezone,1==e.user.roleId&&(e.isAdmin=!0),t.next=4,e.getBanners();case 4:return n=localStorage.getItem("userToken"),n||e.$router.push("/"),t.next=8,e.getUserInfo();case 8:case"end":return t.stop()}}),t)})))()},validations:function(){return{username:{required:y["a"]}}},methods:{getBanners:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B["a"].getBanners();case 2:n=t.sent,null!==n&&(e.banners=n);case 4:case"end":return t.stop()}}),t)})))()},updateBanners:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isAdmin){t.next=10;break}return""==e.banners[0]&&(e.banners[0]=n("2a54")),""==e.banners[1]&&(e.banners[1]=n("275d")),""==e.banners[2]&&(e.banners[2]=n("8cd3")),r={banners:e.banners,id:e.user.id},t.next=7,B["a"].updateBanners(r);case 7:return t.next=9,e.getBanners();case 9:alert("Updated banners");case 10:case"end":return t.stop()}}),t)})))()},updateUserDetails:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.v$.$validate(),e.v$.$error){t.next=9;break}return localStorage.setItem("username",e.username),n={username:e.username.replace(/'/g,"''"),timezone:e.timezone,id_user:e.user.id},t.next=6,B["a"].updateByUserId(n);case 6:alert("Updated user details"),t.next=10;break;case 9:alert("Need to fill in a username!");case 10:case"end":return t.stop()}}),t)})))()},getUserInfo:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B["a"].getUserById(e.user.id);case 2:n=t.sent,e.timezone=n[0].time_zone;case 4:case"end":return t.stop()}}),t)})))()}}},z=(n("093a"),n("6b0d")),S=n.n(z);const D=S()(I,[["render",k]]);t["default"]=D},d5a8:function(e,t,n){}}]);
//# sourceMappingURL=chunk-05f512b5.eee7f4a4.js.map