(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6121558b"],{3516:function(e,t,c){"use strict";c("55bc")},"55bc":function(e,t,c){},"5f08":function(e,t,c){"use strict";var r=c("7a23"),o=Object(r["withScopeId"])("data-v-dd0b19d0");Object(r["pushScopeId"])("data-v-dd0b19d0");var a={class:"vstack gap-2 col-lg mx-auto"},n=Object(r["createVNode"])("label",{class:"form-label",for:"sideFilterCountry"},"Country",-1),i={class:"btn-group"},s=Object(r["createVNode"])("option",{value:""},"-",-1),l=Object(r["createVNode"])("label",{class:"form-label",for:"sideFilterGenre"},"Genre",-1),d={class:"btn-group"},u=Object(r["createVNode"])("option",{value:""},"-",-1),b=Object(r["createVNode"])("label",{class:"form-label",for:"sideFilterYearRange"},"Year",-1),p={class:"btn-group"},O=Object(r["createVNode"])("option",{value:""},"-",-1),m=Object(r["createVNode"])("p",null,"to",-1),h=Object(r["createVNode"])("option",{value:""},"-",-1);Object(r["popScopeId"])();var j=o((function(e,t,c,o,j,f){return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("div",a,[n,Object(r["createVNode"])("div",i,[Object(r["withDirectives"])(Object(r["createVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.query.country=e}),id:"sideFilterCountry",class:"form-select","aria-label":"Default select example"},[s,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(j.listOfCountries,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{key:t},Object(r["toDisplayString"])(e),1)})),128))],512),[[r["vModelSelect"],j.query.country]])]),l,Object(r["createVNode"])("div",d,[Object(r["withDirectives"])(Object(r["createVNode"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return j.query.genre=e}),id:"sideFilterGenre",class:"form-select","aria-label":"Default select example"},[u,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(j.listOfGenres,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{key:t},Object(r["toDisplayString"])(e),1)})),128))],512),[[r["vModelSelect"],j.query.genre]])]),b,Object(r["createVNode"])("div",p,[Object(r["withDirectives"])(Object(r["createVNode"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return j.query.yearStart=e}),id:"sideFilterYearRange",class:"form-select","aria-label":"Default select example"},[O,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(j.listOfYears,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{key:t},Object(r["toDisplayString"])(e),1)})),128))],512),[[r["vModelSelect"],j.query.yearStart]]),m,Object(r["withDirectives"])(Object(r["createVNode"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return j.query.yearEnd=e}),id:"sideFilterYearRange",class:"form-select","aria-label":"Default select example"},[h,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(j.listOfYears,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{key:t},Object(r["toDisplayString"])(e),1)})),128))],512),[[r["vModelSelect"],j.query.yearEnd]])])])])})),f=c("5530"),g=c("5502"),v={data:function(){return{listOfAiringStatus:[],listOfYears:[],listOfCountries:[],listOfGenres:[],query:{country:"",genre:"",yearStart:"",yearEnd:""}}},name:"SideFilter",computed:{getYears:function(){return this.$store.getters.getYears},getAiringStatus:function(){return this.$store.getters.getAiringStatus},getCountries:function(){return this.$store.getters.getCountries},getGenres:function(){return this.$store.getters.getGenres}},mounted:function(){var e=localStorage.getItem("userToken");e?this.getUser||this.login(e):this.$router.push("/"),this.listOfCountries=this.getCountries,this.listOfGenres=this.getGenres,this.listOfYears=this.getYears,this.listOfAiringStatus=this.getAiringStatus},methods:Object(f["a"])({},Object(g["b"])(["login"])),watch:{query:{deep:!0,handler:function(){this.$emit("side-filter-change",this.query)}}}},y=(c("af51"),c("d959")),w=c.n(y);const S=w()(v,[["render",j],["__scopeId","data-v-dd0b19d0"]]);t["a"]=S},7892:function(e,t,c){"use strict";c("812c")},"812c":function(e,t,c){},"86f2":function(e,t,c){"use strict";c.r(t);var r=c("7a23"),o={class:"accountList"},a={key:0},n=Object(r["createVNode"])("h1",null,"My List",-1),i={key:1},s={class:"container-fluid"},l={class:"row mb-3"},d={class:"col-2"},u={class:"row align-items-center"},b={class:"row"},p={class:"col-10"};function O(e,t,c,O,m,h){var j=Object(r["resolveComponent"])("account-nav"),f=Object(r["resolveComponent"])("account-list-filter"),g=Object(r["resolveComponent"])("side-filter"),v=Object(r["resolveComponent"])("account-list-shows");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[m.query.userId===m.loggedInUser.id?(Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[n])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",i,[Object(r["createVNode"])("h1",null,Object(r["toDisplayString"])(m.userQuery.username)+"'s Account",1)])),Object(r["createVNode"])(j,{id:m.query.userId},null,8,["id"]),Object(r["createVNode"])("div",s,[Object(r["createVNode"])("div",l,[Object(r["createVNode"])("div",d,[Object(r["createVNode"])("div",u,[Object(r["createVNode"])(f,{style:{"grid-area":"menu"},onStatusChange:h.updateQueryStatus},null,8,["onStatusChange"])]),Object(r["createVNode"])("div",b,[Object(r["createVNode"])(g,{style:{"grid-area":"menu"},onSideFilterChange:h.updateQuerySideFilter},null,8,["onSideFilterChange"])])]),Object(r["createVNode"])("div",p,[Object(r["withDirectives"])(Object(r["createVNode"])(v,{tableName:"Watching",bingeStatusList:m.watchList,onUpdateAccountShow:h.accountShowUpdated,isMyAccount:m.isSameUser},null,8,["bingeStatusList","onUpdateAccountShow","isMyAccount"]),[[r["vShow"],"watching"==m.query.status||""==m.query.status]]),Object(r["withDirectives"])(Object(r["createVNode"])(v,{tableName:"Completed",bingeStatusList:m.completedList,onUpdateAccountShow:h.accountShowUpdated,isMyAccount:m.isSameUser},null,8,["bingeStatusList","onUpdateAccountShow","isMyAccount"]),[[r["vShow"],"completed"==m.query.status||""==m.query.status]]),Object(r["withDirectives"])(Object(r["createVNode"])(v,{tableName:"Paused",bingeStatusList:m.pausedList,onUpdateAccountShow:h.accountShowUpdated,isMyAccount:m.isSameUser},null,8,["bingeStatusList","onUpdateAccountShow","isMyAccount"]),[[r["vShow"],"paused"==m.query.status||""==m.query.status]]),Object(r["withDirectives"])(Object(r["createVNode"])(v,{tableName:"Dropped",bingeStatusList:m.droppedList,onUpdateAccountShow:h.accountShowUpdated,isMyAccount:m.isSameUser},null,8,["bingeStatusList","onUpdateAccountShow","isMyAccount"]),[[r["vShow"],"dropped"==m.query.status||""==m.query.status]]),Object(r["withDirectives"])(Object(r["createVNode"])(v,{tableName:"Planned",bingeStatusList:m.plannedList,onUpdateAccountShow:h.accountShowUpdated,isMyAccount:m.isSameUser},null,8,["bingeStatusList","onUpdateAccountShow","isMyAccount"]),[[r["vShow"],"planned"==m.query.status||""==m.query.status]])])])])])}var m=c("5530"),h=c("1da1"),j=(c("4de4"),c("96cf"),c("5502")),f=Object(r["withScopeId"])("data-v-1954a511");Object(r["pushScopeId"])("data-v-1954a511");var g={class:"btn-group-vertical col-lg mx-auto"};Object(r["popScopeId"])();var v=f((function(e,t,c,o,a,n){return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("div",g,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(e){return n.statusChange("all")})},"All"),Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=function(e){return n.statusChange("watching")})},"Watching"),Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(e){return n.statusChange("completed")})},"Completed"),Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=function(e){return n.statusChange("paused")})},"Paused"),Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=function(e){return n.statusChange("dropped")})},"Dropped"),Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=function(e){return n.statusChange("planned")})},"Planned")])])})),y={methods:{statusChange:function(e){this.$emit("status-change",e)}}},w=(c("3516"),c("d959")),S=c.n(w);const N=S()(y,[["render",v],["__scopeId","data-v-1954a511"]]);var V=N,k={key:0},F={class:"table table-striped table-hover"},D=Object(r["createVNode"])("th",{scope:"col"},null,-1),B=Object(r["createVNode"])("th",{scope:"col"},"Title",-1),L=Object(r["createVNode"])("th",{scope:"col"},"Score",-1),A=Object(r["createVNode"])("th",{scope:"col"},"Progress",-1),U={key:0,scope:"col"},x={key:0},E={key:1},C={style:{color:"red"}};function _(e,t,c,o,a,n){var i=this,s=Object(r["resolveComponent"])("router-link"),l=Object(r["resolveComponent"])("edit-account-show");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("h3",null,Object(r["toDisplayString"])(c.tableName),1),c.bingeStatusList.length>0?(Object(r["openBlock"])(),Object(r["createBlock"])("div",k,[Object(r["createVNode"])("table",F,[Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[D,B,L,A,c.isMyAccount?(Object(r["openBlock"])(),Object(r["createBlock"])("th",U,"Edit")):Object(r["createCommentVNode"])("",!0)])]),Object(r["createVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.bingeStatusList,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:e.show_id},[Object(r["createVNode"])("th",null,[Object(r["createVNode"])("img",{id:"showImage",src:e.show_image,alt:e.title[0],width:"100",heigth:"150"},null,8,["src","alt"])]),Object(r["createVNode"])("td",null,[Object(r["createVNode"])(s,{to:"/show/".concat(e.show_id)},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title[0]),1)]})),_:2},1032,["to"])]),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.score)+"/10",1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.episode_progress),1),c.isMyAccount?(Object(r["openBlock"])(),Object(r["createBlock"])("td",x,[Object(r["createVNode"])(l,{selectedEdit:e,onUpdateAccountShow:t[1]||(t[1]=function(e){return i.$emit("update-account-show")})},null,8,["selectedEdit"])])):Object(r["createCommentVNode"])("",!0)])})),128))])])])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",E,[Object(r["createVNode"])("p",C,"No shows found for "+Object(r["toDisplayString"])(c.tableName),1)]))])}var M=Object(r["createVNode"])("i",{class:"fas fa-edit"},null,-1),q={key:0,class:"modal top fade",id:"editAccountShowModal",tabindex:"-1","aria-labelledby":"editAccountShowModalLabel","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false"},I={class:"modal-dialog modal-xl"},R={class:"modal-content"},T={class:"modal-header"},$=Object(r["createVNode"])("h5",{class:"modal-title",id:"editAccountShowModalLabel"},"Editing Show",-1),Y={class:"modal-body"},P={class:"card-body"},Q={id:"titleSection"},G=Object(r["createVNode"])("i",{class:"fas fa-heart"},null,-1),W={class:"row mb-3"},H={class:"col"},J=Object(r["createVNode"])("label",{class:"form-label",for:"editStatus"},"Status",-1),z={class:"col"},K=Object(r["createVNode"])("label",{class:"form-label",for:"editScore"},"Score",-1),X={class:"col"},Z=Object(r["createVNode"])("label",{class:"form-label",for:"editEpisode"},"Episode Progress",-1),ee={class:"row mb-3"},te={class:"col"},ce=Object(r["createVNode"])("label",{class:"form-label",for:"editStartDate"},"Start Date",-1),re={class:"col"},oe=Object(r["createVNode"])("label",{class:"form-label",for:"editEndDate"},"End Date",-1),ae={class:"col"},ne=Object(r["createVNode"])("label",{class:"form-label",for:"editRewatch"},"# of Rewatch",-1),ie={class:"form-outline mb-4"},se=Object(r["createVNode"])("label",{class:"form-label",for:"note"},"Note",-1),le={class:"modal-footer"},de=Object(r["createVNode"])("button",{type:"submit",class:"btn btn-success","data-bs-dismiss":"modal"},"Update",-1);function ue(e,t,c,o,a,n){return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("a",{onClick:t[1]||(t[1]=function(){return n.loadModal&&n.loadModal.apply(n,arguments)}),"data-bs-toggle":"modal","data-bs-target":"#editAccountShowModal"},[M]),a.isOpen?(Object(r["openBlock"])(),Object(r["createBlock"])("div",q,[Object(r["createVNode"])("form",{onSubmit:t[12]||(t[12]=Object(r["withModifiers"])((function(){return n.submitEditAccountShow&&n.submitEditAccountShow.apply(n,arguments)}),["prevent"]))},[Object(r["createVNode"])("div",I,[Object(r["createVNode"])("div",R,[Object(r["createVNode"])("div",T,[$,Object(r["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return n.closeModal&&n.closeModal.apply(n,arguments)}),type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),Object(r["createVNode"])("div",Y,[Object(r["createVNode"])("div",P,[""!==a.showImage?(Object(r["openBlock"])(),Object(r["createBlock"])("img",{key:0,src:a.showImage,alt:"show image",width:"200",height:"350"},null,8,["src"])):(Object(r["openBlock"])(),Object(r["createBlock"])("img",{key:1,src:a.defaultImage,alt:"default image",width:"200",height:"350"},null,8,["src"]))])]),Object(r["createVNode"])("div",Q,[Object(r["createVNode"])("h1",null,Object(r["toDisplayString"])(a.title),1),Object(r["withDirectives"])(Object(r["createVNode"])("h6",null,Object(r["toDisplayString"])(a.titleSynomyms),513),[[r["vShow"],a.titleSynomyms]])]),Object(r["createVNode"])("div",null,[Object(r["createVNode"])("button",{onClick:t[3]||(t[3]=function(){return n.favouriteToggle&&n.favouriteToggle.apply(n,arguments)}),class:["btn btn-danger",{active:a.editForm.favourite}],style:{"border-radius":"50%"}},[G],2)]),Object(r["createVNode"])("div",W,[Object(r["createVNode"])("div",H,[J,Object(r["withDirectives"])(Object(r["createVNode"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.editForm.status=e}),id:"editStatus",class:"form-select","aria-label":"Default select example"},[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(a.listOfStatus,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{key:t},Object(r["toDisplayString"])(e),1)})),128))],512),[[r["vModelSelect"],a.editForm.status]])]),Object(r["createVNode"])("div",z,[K,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"number",min:"0",max:"10","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.editForm.score=e}),id:"editScore",class:"form-control"},null,512),[[r["vModelText"],a.editForm.score]])]),Object(r["createVNode"])("div",X,[Z,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"number",min:"0",max:c.selectedEdit.total_episodes,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.editForm.episodeProgress=e}),id:"editEpisode",class:"form-control"},null,8,["max"]),[[r["vModelText"],a.editForm.episodeProgress]])])]),Object(r["createVNode"])("div",ee,[Object(r["createVNode"])("div",te,[ce,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"date","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.editForm.startDate=e}),id:"editStartDate",class:"form-control"},null,512),[[r["vModelText"],a.editForm.startDate]])]),Object(r["createVNode"])("div",re,[oe,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"date","onUpdate:modelValue":t[8]||(t[8]=function(e){return a.editForm.endDate=e}),id:"editEndDate",class:"form-control"},null,512),[[r["vModelText"],a.editForm.endDate]])]),Object(r["createVNode"])("div",ae,[ne,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"number",min:"0","onUpdate:modelValue":t[9]||(t[9]=function(e){return a.editForm.rewatch=e}),id:"editRewatch",class:"form-control"},null,512),[[r["vModelText"],a.editForm.rewatch]])])]),Object(r["createVNode"])("div",ie,[se,Object(r["withDirectives"])(Object(r["createVNode"])("textarea",{class:"form-control","onUpdate:modelValue":t[10]||(t[10]=function(e){return a.editForm.note=e}),id:"note",rows:"4"},null,512),[[r["vModelText"],a.editForm.note]])]),Object(r["createVNode"])("div",le,[Object(r["createVNode"])("button",{onClick:t[11]||(t[11]=function(){return n.deleteAccountShow&&n.deleteAccountShow.apply(n,arguments)}),type:"button",class:"btn btn-danger mr-auto","data-bs-dismiss":"modal"}," Delete "),de])])])],32)])):Object(r["createCommentVNode"])("",!0)])}c("fb6a"),c("ac1f"),c("5319");var be=c("7e16"),pe={name:"Edit Account Show",props:{selectedEdit:{type:Object,required:!0,default:function(){}}},data:function(){return{isOpen:!1,defaultImage:"https://cdn.onlinewebfonts.com/svg/img_98811.png",showImage:"",title:"",titleSynomyms:"",editForm:{favourite:!1,status:"",score:0,startDate:"",endDate:"",rewatch:0,note:"",episodeProgress:0},listOfStatus:[]}},computed:{getListStatus:function(){return this.$store.getters.getListStatus}},mounted:function(){},methods:{loadModal:function(){var e,t;if(this.listOfStatus=this.getListStatus,this.editForm.favourite=this.selectedEdit.favourite,this.editForm.status=this.selectedEdit.status,this.editForm.score=this.selectedEdit.score,this.editForm.rewatch=this.selectedEdit.rewatch,this.editForm.note="null"!==this.selectedEdit.note?this.selectedEdit.note:"",this.editForm.episodeProgress=this.selectedEdit.episode_progress,this.showImage=this.selectedEdit.show_image,this.title=this.selectedEdit.title[0],this.titleSynomyms=this.selectedEdit.title[1],null!==this.selectedEdit.start_date){var c=new Date(this.selectedEdit.start_date);e=("0"+c.getDate()).slice(-2),t=("0"+(c.getMonth()+1)).slice(-2),this.editForm.startDate=c.getFullYear()+"-"+t+"-"+e}else this.editForm.startDate=this.selectedEdit.start_date;if(null!==this.selectedEdit.end_date){var r=new Date(this.selectedEdit.end_date);e=("0"+r.getDate()).slice(-2),t=("0"+(r.getMonth()+1)).slice(-2),this.editForm.endDate=r.getFullYear()+"-"+t+"-"+e}else this.editForm.endDate=this.selectedEdit.end_date;this.isOpen=!0},closeModal:function(){this.isOpen=!1},submitEditAccountShow:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.editForm.note&&(e.editForm.note=e.editForm.note.replace(/'/g,"''")),c={status:e.editForm.status,episode_progress:e.editForm.episodeProgress,id_user_show:e.selectedEdit.id_user_show,score:e.editForm.score,rewatch:e.editForm.rewatch,favourite:e.editForm.favourite,start_date:e.editForm.startDate,end_date:e.editForm.endDate,note:e.editForm.note},t.next=4,be["a"].updateUserBingeList(c);case 4:e.$emit("update-account-show"),alert("UPDATED BingeList show");case 6:case"end":return t.stop()}}),t)})))()},deleteAccountShow:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be["a"].deleteBingeList(e.selectedEdit.id_user_show);case 2:alert("DELETED SHOW OFF LIST"),e.$emit("update-account-show");case 4:case"end":return t.stop()}}),t)})))()},favouriteToggle:function(){this.editForm.favourite=!this.editForm.favourite}}};const Oe=S()(pe,[["render",ue]]);var me=Oe,he={props:{tableName:{type:String,required:!0,default:""},bingeStatusList:{type:Array,required:!0,default:function(){return[]}},isMyAccount:{type:Boolean,require:!0,default:!1}},data:function(){return{}},components:{EditAccountShow:me},methods:{}};const je=S()(he,[["render",_]]);var fe=je,ge=c("f59a"),ve=c("5f08"),ye={components:{AccountNav:ge["a"],AccountListFilter:V,AccountListShows:fe,SideFilter:ve["a"]},data:function(){return{query:{userId:this.$route.params.id,country:"",genre:"",yearStart:"",yearEnd:"",status:"",favourite:!1},userQuery:{id_user:this.$route.params.id,email:"",google_id:"",username:"",role_id:"",time_zone:"",offset:0,limit:4},loggedInUser:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")},isSameUser:!1,bingeList:[],watchList:[],completedList:[],pausedList:[],plannedList:[],droppedList:[]}},name:"My List",computed:{getUser:function(){return this.$store.getters.getUser}},created:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.query.userId=e.$route.params.id,e.userQuery.id_user=e.$route.params.id,t.next=4,e.getUsers();case 4:e.isSameUser=e.userQuery.id_user==e.loggedInUser.id;case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadTables();case 2:case"end":return t.stop()}}),t)})))()},watch:{query:{deep:!0,handler:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadTables();case 2:case"end":return t.stop()}}),t)})))()}}},methods:Object(m["a"])(Object(m["a"])({},Object(j["b"])(["login"])),{},{loadTables:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getBingeList();case 2:e.watchList=e.bingeList.filter((function(e){return"watching"==e.status})),e.completedList=e.bingeList.filter((function(e){return"completed"==e.status})),e.pausedList=e.bingeList.filter((function(e){return"paused"==e.status})),e.plannedList=e.bingeList.filter((function(e){return"planned"==e.status})),e.droppedList=e.bingeList.filter((function(e){return"dropped"==e.status}));case 7:case"end":return t.stop()}}),t)})))()},getBingeList:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be["a"].getAccountList(e.query);case 2:e.bingeList=t.sent;case 3:case"end":return t.stop()}}),t)})))()},updateQueryStatus:function(e){this.query.status="all"!==e?e:""},updateQuerySideFilter:function(e){this.query.country=e.country,this.query.genre=e.genre,this.query.yearStart=e.yearStart,this.query.yearEnd=e.yearEnd},accountShowUpdated:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadTables();case 2:case"end":return t.stop()}}),t)})))()},getUsers:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be["a"].getUserByFilter(e.userQuery);case 2:c=t.sent,e.userQuery=c[0],e.role=1==e.userQuery.role_id?"Admin":"User";case 5:case"end":return t.stop()}}),t)})))()}})};const we=S()(ye,[["render",O]]);t["default"]=we},"8b8e":function(e,t,c){},af51:function(e,t,c){"use strict";c("8b8e")},f59a:function(e,t,c){"use strict";var r=c("7a23"),o=Object(r["withScopeId"])("data-v-7056b0c2");Object(r["pushScopeId"])("data-v-7056b0c2");var a={id:"AccountNavHeader"},n={class:"navbar navbar-expand-xl bg-light"},i={class:"navbar-nav mr-auto"},s={class:"nav-item"},l=Object(r["createVNode"])("i",{class:"fas fa-street-view"},null,-1),d=Object(r["createTextVNode"])("Overview"),u={class:"nav-item"},b=Object(r["createVNode"])("i",{class:"fas fa-list"},null,-1),p=Object(r["createTextVNode"])("BingeList"),O={class:"nav-item"},m=Object(r["createVNode"])("i",{class:"fab fa-gratipay"},null,-1),h=Object(r["createTextVNode"])("Favourite"),j={class:"nav-item"},f=Object(r["createVNode"])("i",{class:"fas fa-user-friends"},null,-1),g=Object(r["createTextVNode"])("Social");Object(r["popScopeId"])();var v=o((function(e,t,c,v,y,w){var S=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])("ul",i,[Object(r["createVNode"])("li",s,[Object(r["createVNode"])(S,{to:"/account/".concat(c.id),class:"nav-link"},{default:o((function(){return[l,d]})),_:1},8,["to"])]),Object(r["createVNode"])("li",u,[Object(r["createVNode"])(S,{to:"/accountList/".concat(c.id),class:"nav-link"},{default:o((function(){return[b,p]})),_:1},8,["to"])]),Object(r["createVNode"])("li",O,[Object(r["createVNode"])(S,{to:"/favourite/".concat(c.id),class:"nav-link"},{default:o((function(){return[m,h]})),_:1},8,["to"])]),Object(r["createVNode"])("li",j,[Object(r["createVNode"])(S,{to:"/social/".concat(c.id),class:"nav-link"},{default:o((function(){return[f,g]})),_:1},8,["to"])])])])])})),y={props:{id:{type:String,required:!0,default:""}},created:function(){}},w=(c("7892"),c("d959")),S=c.n(w);const N=S()(y,[["render",v],["__scopeId","data-v-7056b0c2"]]);t["a"]=N},fb6a:function(e,t,c){"use strict";var r=c("23e7"),o=c("861d"),a=c("e8b5"),n=c("23cb"),i=c("50c4"),s=c("fc6a"),l=c("8418"),d=c("b622"),u=c("1dde"),b=u("slice"),p=d("species"),O=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var c,r,d,u=s(this),b=i(u.length),h=n(e,b),j=n(void 0===t?b:t,b);if(a(u)&&(c=u.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?o(c)&&(c=c[p],null===c&&(c=void 0)):c=void 0,c===Array||void 0===c))return O.call(u,h,j);for(r=new(void 0===c?Array:c)(m(j-h,0)),d=0;h<j;h++,d++)h in u&&l(r,d,u[h]);return r.length=d,r}})}}]);
//# sourceMappingURL=chunk-6121558b.774fafc4.js.map